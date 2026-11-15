/* medidas-api.mjs — Rutas de medidas con Claude para server.mjs. Ver docs/medidas-claude.md.

   GET  /api/medidas/estado  → { claude: true|false }   (true si el servidor tiene ANTHROPIC_API_KEY y el SDK; nunca la clave)
   POST /api/medidas         → { fotos: [{vista:'frente'|'perfil', dataUrl}], estaturaCm, pesoKg?, sexo, pistas?, consentimiento: true }
                                Estima las medidas con medidas-claude.mjs y devuelve el resultado ya validado más los pines del maniquí.

   La clave solo vive en este proceso: el navegador nunca la ve. Las fotos se procesan en memoria y se reenvían a Anthropic;
   no se guardan. Los registros llevan solo estado, código, latencia, tokens y costo aproximado: nunca fotos, medidas,
   mensajes de error crudos ni la clave. */
import { crearMedidor, aPinsAtelier, describirErrorApi, inspeccionarImagen, MAX_BYTES_IMAGEN } from './medidas-claude.mjs';

export const MAX_CUERPO_BYTES = 6 * 1024 * 1024;   // dos fotos de 1568 px en JPEG caben con holgura
export const TIEMPO_MAX_MS = 90_000;               // tope total de la llamada a Claude (con su reintento)
export const LIMITE_POR_MINUTO = 6;                // solicitudes con costo por IP y minuto
// Alojado en internet, además hay topes por día (se reinician a medianoche UTC o al reiniciar el servidor). Se cambian con las
// variables LIMITE_IA_DIA (todo el sitio) y LIMITE_IA_DIA_IP (cada visitante). En este equipo no hay tope diario.
export const LIMITE_DIA = 30, LIMITE_DIA_IP = 4;
const VENTANA_MS = 60_000;
const DATA_URL = /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/]+={0,2})$/;
const SEXOS = new Set(['mujer', 'hombre', 'otro']);
const CAMPOS = new Set(['fotos', 'estaturaCm', 'pesoKg', 'sexo', 'pistas', 'consentimiento']);
const VISTAS = { frente: 'frente', perfil: 'perfil' };

class ErrorHttp extends Error {
  constructor(http, codigo, mensaje, cabeceras = {}) { super(mensaje); this.http = http; this.codigo = codigo; this.cabeceras = cabeceras; }
}
const respuesta = (http, codigo, mensaje, cabeceras = {}) => ({ http, cuerpo: { codigo, mensaje }, cabeceras });

async function cargarDepsSdk() {
  const [{ default: Anthropic }, { betaZodOutputFormat }, { z }] = await Promise.all([
    import('@anthropic-ai/sdk'), import('@anthropic-ai/sdk/helpers/beta/zod'), import('zod')]);
  return { Anthropic, z, zodOutputFormat: betaZodOutputFormat };
}

/* ---------- Validación de la solicitud (antes de gastar una llamada) ---------- */
export function validarSolicitud(c) {
  const mal = (m) => new ErrorHttp(400, 'entrada_invalida', m);
  if (!c || typeof c !== 'object' || Array.isArray(c)) throw mal('La solicitud no tiene el formato esperado.');
  for (const k of Object.keys(c)) if (!CAMPOS.has(k)) throw mal('La solicitud trae un campo que no se admite.');
  if (c.consentimiento !== true) throw new ErrorHttp(400, 'sin_consentimiento', 'Falta tu autorización para enviar las fotos a Claude.');
  if (!Array.isArray(c.fotos) || c.fotos.length < 1 || c.fotos.length > 2) throw mal('Envía una foto de frente y, si quieres, una de perfil.');
  const fotos = {};
  for (const f of c.fotos) {
    if (!f || typeof f !== 'object' || Array.isArray(f) || Object.keys(f).some((k) => k !== 'vista' && k !== 'dataUrl')) throw mal('Cada foto debe traer solo su vista y su imagen.');
    const vista = Object.hasOwn(VISTAS, f.vista) ? VISTAS[f.vista] : null;
    if (!vista) throw mal('La vista de cada foto debe ser «frente» o «perfil».');
    if (fotos[vista]) throw mal(`Llegaron dos fotos de ${vista}. Envía una de cada una.`);
    const m = typeof f.dataUrl === 'string' ? DATA_URL.exec(f.dataUrl) : null;
    if (!m) throw new ErrorHttp(400, 'imagen_invalida', `La foto de ${vista} debe ser una imagen JPEG, PNG o WebP.`);
    const bytes = Buffer.from(m[2], 'base64');
    if (bytes.length > MAX_BYTES_IMAGEN) throw new ErrorHttp(413, 'imagen_grande', `La foto de ${vista} pesa más de ${MAX_BYTES_IMAGEN / 1048576} MB.`);
    const info = inspeccionarImagen(bytes);   // tipo real por sus bytes, no por lo que declara el navegador
    if (!info || info.tipo !== m[1]) throw new ErrorHttp(400, 'imagen_invalida', `La foto de ${vista} no es una imagen válida.`);
    fotos[vista] = bytes;
  }
  if (!fotos.frente) throw mal('Falta la foto de frente (cuerpo entero).');
  const H = c.estaturaCm;
  if (typeof H !== 'number' || !Number.isFinite(H) || H < 120 || H > 215) throw mal('La estatura es obligatoria y debe estar entre 120 y 215 cm.');
  const P = c.pesoKg ?? null;
  if (P !== null && (typeof P !== 'number' || !Number.isFinite(P) || P < 30 || P > 250)) throw mal('El peso, si lo indicas, debe estar entre 30 y 250 kg.');
  if (!SEXOS.has(c.sexo)) throw mal('El tipo de cuerpo debe ser mujer, hombre u otro.');
  const pistas = c.pistas ?? null;   // el módulo descarta claves desconocidas y valores fuera de 5–200 cm
  if (pistas !== null && (typeof pistas !== 'object' || Array.isArray(pistas))) throw mal('Las medidas del escaneo local no tienen el formato esperado.');
  return { fotos, estaturaCm: H, pesoKg: P, sexo: c.sexo, pistas };
}

function origenOk(req, alojado) {
  const o = req.headers.origin, host = String(req.headers.host || '').toLowerCase();
  // el Host ya pasó por hostOk; alojado, la página llega por https a través del proxy del alojamiento
  if (typeof o !== 'string' || (o.toLowerCase() !== `http://${host}` && !(alojado && o.toLowerCase() === `https://${host}`))) return false;
  const sfs = req.headers['sec-fetch-site'];
  return sfs === undefined || sfs === 'same-origin';
}

function leerCuerpo(req, max) {
  return new Promise((ok, no) => {
    const largo = Number(req.headers['content-length']);
    if (Number.isFinite(largo) && largo > max) { req.resume(); return no(new ErrorHttp(413, 'cuerpo_grande', 'Las fotos pesan demasiado (máximo 6 MB en total). Usa fotos más livianas.', { Connection: 'close' })); }
    const partes = []; let total = 0, listo = false;
    req.on('data', (c) => {
      if (listo) return;   // se sigue drenando sin guardar
      total += c.length;
      if (total > max) { listo = true; partes.length = 0; no(new ErrorHttp(413, 'cuerpo_grande', 'Las fotos pesan demasiado (máximo 6 MB en total). Usa fotos más livianas.', { Connection: 'close' })); return; }
      partes.push(c);
    });
    req.on('end', () => { if (!listo) { listo = true; ok(Buffer.concat(partes, total)); } });
    req.on('error', () => { if (!listo) { listo = true; no(new ErrorHttp(400, 'cuerpo_invalido', 'No se recibió la solicitud completa.')); } });
  });
}

/* ---------- API ---------- */
export async function crearApiMedidas({ env = process.env, log = console.log, cargarDeps = cargarDepsSdk, alojado = false } = {}) {
  const entero = (v, def) => { const n = Number(v); return v !== undefined && v !== '' && Number.isInteger(n) && n >= 0 ? n : def; };
  const topeDia = alojado ? entero(env.LIMITE_IA_DIA, LIMITE_DIA) : Infinity, topeDiaIp = alojado ? entero(env.LIMITE_IA_DIA_IP, LIMITE_DIA_IP) : Infinity;
  const dia = { fecha: '', total: 0, porIp: new Map() };
  const clave = typeof env.ANTHROPIC_API_KEY === 'string' ? env.ANTHROPIC_API_KEY.trim() : '';
  let medidor = null, Anthropic = null, motivo = null;
  if (!clave) motivo = 'falta ANTHROPIC_API_KEY en .env';
  else {
    try {
      const d = await cargarDeps();
      Anthropic = d.Anthropic;
      // Un solo cliente para todo el proceso. Un reintento del SDK (429, 5xx, red); el tope total lo pone TIEMPO_MAX_MS.
      const client = new Anthropic({ apiKey: clave, maxRetries: 1, timeout: TIEMPO_MAX_MS });
      medidor = crearMedidor({ client, z: d.z, zodOutputFormat: d.zodOutputFormat, modelo: (env.CLAUDE_MODEL || '').trim() || undefined,
        opcionesSolicitud: { timeout: TIEMPO_MAX_MS, maxRetries: 1 } });
    } catch { motivo = 'no se pudieron cargar @anthropic-ai/sdk y zod (ejecuta npm install)'; }
  }
  const activa = !!medidor;
  const historial = new Map(), enCurso = new Set();

  function cupo(ip) {
    const hoy = new Date().toISOString().slice(0, 10);
    if (dia.fecha !== hoy) { dia.fecha = hoy; dia.total = 0; dia.porIp.clear(); }
    if (dia.total >= topeDia) throw new ErrorHttp(429, 'limite_dia', 'La estimación con IA llegó a su tope de hoy en esta tienda. Vuelve mañana o usa el análisis en tu dispositivo.');
    if ((dia.porIp.get(ip) || 0) >= topeDiaIp) throw new ErrorHttp(429, 'limite_dia', 'Ya usaste la estimación con IA varias veces hoy. Vuelve mañana o usa el análisis en tu dispositivo.');
    const ahora = Date.now(), ts = (historial.get(ip) || []).filter((t) => ahora - t < VENTANA_MS);
    if (ts.length >= LIMITE_POR_MINUTO) {
      const espera = Math.max(1, Math.ceil((VENTANA_MS - (ahora - ts[0])) / 1000));
      throw new ErrorHttp(429, 'limite_local', `Hiciste varios cálculos seguidos. Espera ${espera} s y vuelve a intentarlo.`, { 'Retry-After': String(espera) });
    }
    ts.push(ahora); historial.set(ip, ts); dia.total++; dia.porIp.set(ip, (dia.porIp.get(ip) || 0) + 1);
    if (historial.size > 100) for (const [k, v] of historial) if (!v.some((t) => ahora - t < VENTANA_MS)) historial.delete(k);
  }

  function registrar(http, codigo, ms, meta) {
    const u = meta && meta.uso, partes = [`[medidas] ${http} ${codigo} · ${(ms / 1000).toFixed(1)} s`];
    if (u) partes.push(`entrada ${u.input_tokens ?? '?'} tok · salida ${u.output_tokens ?? '?'} tok`);
    if (meta && meta.costo && meta.costo.usd != null) partes.push(`~US$ ${meta.costo.usd.toFixed(4)}`);
    if (meta && meta.modeloQueRespondio) partes.push(`${meta.modeloQueRespondio}${meta.huboFallback ? ' (respaldo)' : ''}`);
    log(partes.join(' · '));
  }

  // Devuelve {http, cuerpo, cabeceras} para que server.mjs responda, o null si el navegador ya se desconectó.
  async function medir(req, res) {
    const t0 = performance.now();
    const rechazo = (http, codigo, mensaje) => { req.resume(); registrar(http, codigo, 0); return respuesta(http, codigo, mensaje); };
    if (!activa) return rechazo(503, 'no_configurado', 'La estimación con IA no está configurada en este servidor. Usa el análisis en tu dispositivo o escribe tus medidas.');
    if (!origenOk(req, alojado)) return rechazo(403, 'origen', 'Origen no permitido.');
    if (!/^application\/json(\s*;|$)/i.test(String(req.headers['content-type'] || ''))) return rechazo(415, 'tipo', 'La solicitud debe ser JSON.');
    // Alojado, la conexión viene del proxy: la IP del visitante es la primera de X-Forwarded-For. Un visitante puede falsearla,
    // por eso el tope que de verdad protege el gasto es el diario de todo el sitio.
    const xff = alojado ? String(req.headers['x-forwarded-for'] || '').split(',')[0].trim().slice(0, 64) : '';
    const ip = xff || req.socket.remoteAddress || 'local';
    if (enCurso.has(ip)) return rechazo(429, 'en_curso', 'Ya hay un cálculo en curso. Espera a que termine.');
    enCurso.add(ip);
    let corte = null, temporizador = null;
    const ctrl = new AbortController();
    const alCerrar = () => { if (!res.writableFinished && !corte) { corte = 'cliente'; ctrl.abort(); } };
    try {
      const crudo = await leerCuerpo(req, MAX_CUERPO_BYTES);
      let cuerpo;
      try { cuerpo = JSON.parse(crudo.toString('utf8')); } catch { throw new ErrorHttp(400, 'json', 'La solicitud no es JSON válido.'); }
      const e = validarSolicitud(cuerpo);
      cupo(ip);
      res.on('close', alCerrar);
      temporizador = setTimeout(() => { if (!corte) { corte = 'tiempo'; ctrl.abort(); } }, TIEMPO_MAX_MS);
      const r = await medidor.medir({ fotos: e.fotos, estaturaCm: e.estaturaCm, pesoKg: e.pesoKg, sexo: e.sexo, pistas: e.pistas }, { signal: ctrl.signal });
      registrar(200, r.ok ? 'ok' : 'sin_escala', performance.now() - t0, r.meta);
      return { http: 200, cabeceras: {}, cuerpo: {
        ok: r.ok, medidas: r.medidas, calidad: r.calidad, secciones: r.secciones, observaciones: r.observaciones, avisos: r.avisos, descartadas: r.descartadas,
        atelier: aPinsAtelier(r.medidas, e.estaturaCm),
        meta: { modelo: r.meta.modeloQueRespondio, huboFallback: r.meta.huboFallback, latenciaMs: r.meta.latenciaMs, costoUsd: r.meta.costo ? r.meta.costo.usd : null },
      } };
    } catch (err) {
      const ms = performance.now() - t0;
      if (err instanceof ErrorHttp) { registrar(err.http, err.codigo, ms); return respuesta(err.http, err.codigo, err.message, err.cabeceras); }
      if (corte === 'cliente') { registrar(499, 'cancelado', ms); return null; }
      if (corte === 'tiempo' || (Anthropic && err instanceof Anthropic.APIConnectionTimeoutError)) {
        registrar(504, 'tiempo_agotado', ms);
        return respuesta(504, 'tiempo_agotado', `Claude tardó más de ${TIEMPO_MAX_MS / 1000} s en responder. Intenta de nuevo en un momento o usa el análisis en tu dispositivo.`);
      }
      const d = describirErrorApi(err, Anthropic);   // códigos y mensajes en español, sin datos de la solicitud
      registrar(d.http, d.codigo, ms, err && err.detalle && err.detalle.meta);
      return respuesta(d.http, d.codigo, d.mensaje, d.http === 429 ? { 'Retry-After': '60' } : {});
    } finally {
      clearTimeout(temporizador);
      res.off('close', alCerrar);
      enCurso.delete(ip);
    }
  }

  return { activa, modelo: medidor ? medidor.modelo : null, motivo, medir, topes: { dia: topeDia, diaIp: topeDiaIp } };
}
