/* cuentas-api.mjs — Cuentas Fitwise guardadas en el servidor, para server.mjs.

   El servidor nunca ve el PIN ni los datos: el navegador deriva del PIN dos llaves con PBKDF2 (150.000 iteraciones) sobre la sal
   de la cuenta, una para cifrar los datos (AES-GCM) y otra para demostrar que conoce el PIN («auth»). Aquí se guardan la sal, un
   hash scrypt de auth y los datos cifrados. Solo quien demuestra conocer el PIN recibe los datos cifrados.

   POST /api/cuentas/sal       {email}                     → {sal}           (si el correo no existe, una sal falsa fija: no revela qué correos hay)
   POST /api/cuentas/registro  {email, sal, auth, iv, ct}  → 201 {version}   | 409 existe
   POST /api/cuentas/entrar    {email, auth}               → {iv, ct, version} | 401 credenciales (con intentos restantes) | 423 bloqueada
   POST /api/cuentas/guardar   {email, auth, iv, ct}       → {version}
   POST /api/cuentas/borrar    {email, auth}               → {ok}
   GET  /api/cuentas/estado                                → {cuentas: true|false}

   Almacén: Postgres si hay DATABASE_URL (Render); si no, un archivo JSON local (solo para este equipo). Alojado sin DATABASE_URL
   las cuentas en el servidor se desactivan, porque el disco de Render gratis se borra al reiniciar: la tienda sigue guardándolas en
   el navegador, como antes. */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

export const MAX_CUERPO = 256 * 1024;      // datos cifrados de una cuenta con 5 perfiles: unos pocos KB
export const FALLOS_MAX = 5;               // intentos de PIN seguidos antes del bloqueo
export const BLOQUEO_MS = 15 * 60_000;     // bloqueo de la cuenta tras FALLOS_MAX
const IP_VENTANA_MS = 10 * 60_000, IP_MAX = 40;   // intentos de entrar por IP en 10 minutos
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const B64 = /^[A-Za-z0-9+/]+={0,2}$/;
const HEX = /^[0-9a-f]{64}$/;

class ErrorHttp extends Error { constructor(http, codigo, mensaje, extra = {}) { super(mensaje); this.http = http; this.codigo = codigo; this.extra = extra; } }

/* ---------- Almacenes ---------- */
// Postgres (Render). La URL interna de Render no usa TLS; la externa (…render.com) sí.
async function almacenPostgres(url, log) {
  const { default: pg } = await import('pg');
  const ssl = /render\.com|sslmode=require/i.test(url) ? { rejectUnauthorized: false } : false;
  const pool = new pg.Pool({ connectionString: url, ssl, max: 4, idleTimeoutMillis: 30_000 });
  pool.on('error', (e) => log(`[cuentas] error de la base de datos (${e.code || e.name})`));
  await pool.query(`CREATE TABLE IF NOT EXISTS cuentas (
    email text PRIMARY KEY, sal text NOT NULL, auth text NOT NULL, iv text NOT NULL, ct text NOT NULL,
    version integer NOT NULL DEFAULT 1, fallos integer NOT NULL DEFAULT 0, bloqueo bigint NOT NULL DEFAULT 0,
    creada timestamptz NOT NULL DEFAULT now(), actualizada timestamptz NOT NULL DEFAULT now())`);
  const fila = (r) => r.rows[0] ? { ...r.rows[0], bloqueo: Number(r.rows[0].bloqueo) } : null;
  return {
    tipo: 'postgres',
    leer: async (email) => fila(await pool.query('SELECT email, sal, auth, iv, ct, version, fallos, bloqueo FROM cuentas WHERE email = $1', [email])),
    crear: async (c) => (await pool.query('INSERT INTO cuentas (email, sal, auth, iv, ct) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (email) DO NOTHING', [c.email, c.sal, c.auth, c.iv, c.ct])).rowCount === 1,
    guardar: async (email, iv, ct) => fila(await pool.query('UPDATE cuentas SET iv = $2, ct = $3, version = version + 1, actualizada = now() WHERE email = $1 RETURNING version', [email, iv, ct])),
    fallos: async (email, fallos, bloqueo) => { await pool.query('UPDATE cuentas SET fallos = $2, bloqueo = $3 WHERE email = $1', [email, fallos, bloqueo]); },
    borrar: async (email) => { await pool.query('DELETE FROM cuentas WHERE email = $1', [email]); },
    cerrar: () => pool.end(),
  };
}
// Archivo JSON local (pruebas en este equipo). Escribe de forma atómica: archivo temporal y renombrado.
function almacenArchivo(ruta) {
  let datos = {};
  try { datos = JSON.parse(fs.readFileSync(ruta, 'utf8')); } catch { datos = {}; }
  const escribir = () => { fs.mkdirSync(path.dirname(ruta), { recursive: true }); const tmp = ruta + '.tmp'; fs.writeFileSync(tmp, JSON.stringify(datos)); fs.renameSync(tmp, ruta); };
  return {
    tipo: 'archivo',
    leer: async (email) => (datos[email] ? { email, ...datos[email] } : null),
    crear: async (c) => { if (datos[c.email]) return false; const { email, ...r } = c; datos[email] = { ...r, version: 1, fallos: 0, bloqueo: 0 }; escribir(); return true; },
    guardar: async (email, iv, ct) => { const r = datos[email]; if (!r) return null; r.iv = iv; r.ct = ct; r.version += 1; escribir(); return { version: r.version }; },
    fallos: async (email, fallos, bloqueo) => { const r = datos[email]; if (r) { r.fallos = fallos; r.bloqueo = bloqueo; escribir(); } },
    borrar: async (email) => { delete datos[email]; escribir(); },
    cerrar: () => {},
  };
}
// Solo para pruebas
export function almacenMemoria() {
  const datos = new Map();
  return {
    tipo: 'memoria',
    leer: async (email) => (datos.has(email) ? { email, ...datos.get(email) } : null),
    crear: async (c) => { if (datos.has(c.email)) return false; const { email, ...r } = c; datos.set(email, { ...r, version: 1, fallos: 0, bloqueo: 0 }); return true; },
    guardar: async (email, iv, ct) => { const r = datos.get(email); if (!r) return null; r.iv = iv; r.ct = ct; r.version += 1; return { version: r.version }; },
    fallos: async (email, fallos, bloqueo) => { const r = datos.get(email); if (r) { r.fallos = fallos; r.bloqueo = bloqueo; } },
    borrar: async (email) => { datos.delete(email); },
    cerrar: () => {},
  };
}

/* ---------- Hash de auth (scrypt) ---------- */
const scrypt = (clave, sal) => new Promise((ok, no) => crypto.scrypt(clave, sal, 32, { N: 16384, r: 8, p: 1 }, (e, k) => (e ? no(e) : ok(k))));
async function hashAuth(auth) { const sal = crypto.randomBytes(16); return `s1$${sal.toString('base64')}$${(await scrypt(auth, sal)).toString('base64')}`; }
async function authOk(auth, guardado) {
  const [v, s, h] = String(guardado).split('$'); if (v !== 's1' || !s || !h) return false;
  const esperado = Buffer.from(h, 'base64'), dado = await scrypt(auth, Buffer.from(s, 'base64'));
  return esperado.length === dado.length && crypto.timingSafeEqual(esperado, dado);
}

/* ---------- Solicitudes ---------- */
function leerJson(req, max) {
  return new Promise((ok, no) => {
    if (!/^application\/json(\s*;|$)/i.test(String(req.headers['content-type'] || ''))) { req.resume(); return no(new ErrorHttp(415, 'tipo', 'La solicitud debe ser JSON.')); }
    const largo = Number(req.headers['content-length']);
    if (Number.isFinite(largo) && largo > max) { req.resume(); return no(new ErrorHttp(413, 'grande', 'Los datos de la cuenta son demasiado grandes.')); }
    const partes = []; let total = 0, listo = false;
    req.on('data', (d) => { if (listo) return; total += d.length; if (total > max) { listo = true; partes.length = 0; req.resume(); no(new ErrorHttp(413, 'grande', 'Los datos de la cuenta son demasiado grandes.')); } else partes.push(d); });
    req.on('end', () => { if (listo) return; listo = true; try { ok(JSON.parse(Buffer.concat(partes).toString('utf8'))); } catch { no(new ErrorHttp(400, 'json', 'La solicitud no es JSON válido.')); } });
    req.on('error', () => { if (!listo) { listo = true; no(new ErrorHttp(400, 'lectura', 'No se pudo leer la solicitud.')); } });
  });
}
function origenOk(req, alojado) {
  const o = String(req.headers.origin || '').toLowerCase(), host = String(req.headers.host || '').toLowerCase();
  if (o !== `http://${host}` && !(alojado && o === `https://${host}`)) return false;
  const sfs = req.headers['sec-fetch-site'];
  return sfs === undefined || sfs === 'same-origin';
}
const email = (v) => { const e = typeof v === 'string' ? v.trim().toLowerCase() : ''; if (e.length > 254 || !EMAIL.test(e)) throw new ErrorHttp(400, 'email', 'El correo no es válido.'); return e; };
const b64 = (v, nombre, max) => { if (typeof v !== 'string' || !v || v.length > max || !B64.test(v)) throw new ErrorHttp(400, 'datos', `Falta o no es válido: ${nombre}.`); return v; };
const auth = (v) => { if (typeof v !== 'string' || !HEX.test(v)) throw new ErrorHttp(400, 'auth', 'Falta la prueba del PIN.'); return v; };

/* ---------- API ---------- */
export async function crearApiCuentas({ env = process.env, log = console.log, alojado = false, almacen = null, raiz = process.cwd() } = {}) {
  let A = almacen, motivo = null;
  if (!A) {
    const url = (env.DATABASE_URL || '').trim();
    if (url) { try { A = await almacenPostgres(url, log); } catch (e) { motivo = `no se pudo conectar con la base de datos (${e.code || e.name})`; } }
    else if (!alojado) A = almacenArchivo(path.join(raiz, 'datos', 'cuentas.json'));
    else motivo = 'falta DATABASE_URL (en Render gratis el disco se borra al reiniciar)';
  }
  const activa = !!A;
  const secreto = (env.CUENTAS_SECRETO || '').trim() || crypto.randomBytes(32).toString('hex');
  const salFalsa = (e) => crypto.createHmac('sha256', secreto).update('sal:' + e).digest().subarray(0, 16).toString('base64');
  const porIp = new Map();
  const cupoIp = (ip) => {
    const ahora = Date.now(), ts = (porIp.get(ip) || []).filter((t) => ahora - t < IP_VENTANA_MS);
    if (ts.length >= IP_MAX) throw new ErrorHttp(429, 'limite', 'Demasiados intentos desde esta conexión. Espera unos minutos.');
    ts.push(ahora); porIp.set(ip, ts);
    if (porIp.size > 500) for (const [k, v] of porIp) if (!v.some((t) => ahora - t < IP_VENTANA_MS)) porIp.delete(k);
  };
  const ipDe = (req) => (alojado ? String(req.headers['x-forwarded-for'] || '').split(',')[0].trim().slice(0, 64) : '') || req.socket.remoteAddress || 'local';

  // Comprueba el PIN (auth) de una cuenta, con bloqueo tras FALLOS_MAX intentos. Devuelve la cuenta.
  async function verificar(e, a) {
    const c = await A.leer(e), ahora = Date.now();
    if (!c) throw new ErrorHttp(401, 'credenciales', 'El correo o el PIN no son correctos.');
    if (c.bloqueo > ahora) throw new ErrorHttp(423, 'bloqueada', `Por seguridad, la cuenta está bloqueada ${Math.ceil((c.bloqueo - ahora) / 60_000)} minutos más.`);
    if (await authOk(a, c.auth)) { if (c.fallos || c.bloqueo) await A.fallos(e, 0, 0); return c; }
    const fallos = (c.fallos || 0) + 1;
    if (fallos >= FALLOS_MAX) { await A.fallos(e, 0, ahora + BLOQUEO_MS); throw new ErrorHttp(423, 'bloqueada', `El PIN no es correcto. Bloqueamos la cuenta ${BLOQUEO_MS / 60_000} minutos.`); }
    await A.fallos(e, fallos, 0);
    throw new ErrorHttp(401, 'credenciales', `El correo o el PIN no son correctos. Te quedan ${FALLOS_MAX - fallos} intentos antes de un bloqueo temporal.`, { restantes: FALLOS_MAX - fallos });
  }

  const RUTAS = {
    sal: async (b) => { const e = email(b.email), c = await A.leer(e); return { sal: c ? c.sal : salFalsa(e) }; },
    registro: async (b) => {
      const c = { email: email(b.email), sal: b64(b.sal, 'sal', 64), auth: await hashAuth(auth(b.auth)), iv: b64(b.iv, 'iv', 64), ct: b64(b.ct, 'datos', MAX_CUERPO) };
      if (!(await A.crear(c))) throw new ErrorHttp(409, 'existe', 'Ya hay una cuenta Fitwise con ese correo. Inicia sesión.');
      log(`[cuentas] cuenta creada (${A.tipo})`);
      return { http: 201, cuerpo: { version: 1 } };
    },
    entrar: async (b) => { const c = await verificar(email(b.email), auth(b.auth)); return { iv: c.iv, ct: c.ct, version: c.version }; },
    guardar: async (b) => {
      const e = email(b.email); await verificar(e, auth(b.auth));
      const r = await A.guardar(e, b64(b.iv, 'iv', 64), b64(b.ct, 'datos', MAX_CUERPO)); if (!r) throw new ErrorHttp(404, 'no_existe', 'La cuenta ya no existe.');
      return { version: r.version };
    },
    borrar: async (b) => { const e = email(b.email); await verificar(e, auth(b.auth)); await A.borrar(e); log('[cuentas] cuenta borrada'); return { ok: true }; },
  };

  // Devuelve {http, cuerpo} para que server.mjs responda.
  async function atender(req, accion) {
    if (!activa) { req.resume(); return { http: 503, cuerpo: { codigo: 'no_configurado', mensaje: 'Las cuentas en el servidor no están disponibles.' } }; }
    const fn = Object.hasOwn(RUTAS, accion) ? RUTAS[accion] : null;
    if (!fn) { req.resume(); return { http: 404, cuerpo: { codigo: 404, mensaje: 'No encontrado.' } }; }
    try {
      if (req.method !== 'POST') { req.resume(); throw new ErrorHttp(405, 'metodo', 'Método no permitido.'); }
      if (!origenOk(req, alojado)) { req.resume(); throw new ErrorHttp(403, 'origen', 'Origen no permitido.'); }
      if (accion !== 'sal') cupoIp(ipDe(req));
      const r = await fn(await leerJson(req, MAX_CUERPO + 4096));
      return r && r.http ? r : { http: 200, cuerpo: r };
    } catch (e) {
      if (e instanceof ErrorHttp) return { http: e.http, cuerpo: { codigo: e.codigo, mensaje: e.message, ...e.extra } };
      log(`[cuentas] error interno (${e && (e.code || e.name)})`);   // sin datos de la solicitud
      return { http: 500, cuerpo: { codigo: 'interno', mensaje: 'No pudimos atender la solicitud. Intenta de nuevo.' } };
    }
  }
  return { activa, tipo: A ? A.tipo : null, motivo, atender, cerrar: () => A && A.cerrar() };
}
