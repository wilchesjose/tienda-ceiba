#!/usr/bin/env node
/* Servidor local de Ceiba + Fitwise: sirve la tienda desde una lista blanca de archivos y, si hay clave, la API de medidas con Claude.
   Uso: npm start  (= node --env-file-if-exists=.env server.mjs). Escucha solo en 127.0.0.1:3000 (otro puerto con PORT). Solo node:http.
   Alojado (Render u otro): si el entorno trae RENDER_EXTERNAL_HOSTNAME o HOSTS_PERMITIDOS (dominios separados por comas), escucha en
   0.0.0.0, acepta solo esos dominios, responde GET /salud para la comprobación del alojamiento y limita el uso diario de la IA.
   API: GET /api/medidas/estado y POST /api/medidas (medidas-api.mjs). La clave ANTHROPIC_API_KEY nunca sale del servidor. */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { crearApiMedidas } from './medidas-api.mjs';

const RAIZ = path.dirname(fileURLToPath(import.meta.url));

/* ---------- Estáticos: lista blanca ---------- */
// Solo estos archivos y estas carpetas se sirven. Todo lo demás (.env, config.js, node_modules, tools, tests, docs, visor/ (fuentes),
// package*.json, código del servidor, dotfiles) da 404.
const ARCHIVOS = new Set(['index.html', 'fit-engine.js', 'visor-3d.js']);
// modelo/: pesos de body-pix para el escaneo con fotos del perfil (los .wasm son datos, no módulos).
// modelos-3d/: cortes del cuerpo por defecto, índice de prendas 3D y un .glb por talla en modelos-3d/<producto>/
// (nombres de .glb con letras, números, guiones y guiones bajos, como «vestido-mini-firerie_M.glb»).
const CARPETAS = { 'fotos-catalogo': /\.(jpe?g|png|webp)$/, modelo: /\.(json|wasm)$/, 'modelos-3d': /^(cuerpo-base|indice)\.json$/ };
const SUBCARPETAS = { 'modelos-3d': { dir: /^[a-z0-9][a-z0-9-]*$/, archivo: /^[A-Za-z0-9][A-Za-z0-9_-]*\.glb$/ } };
const SEGMENTO = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.wasm': 'application/octet-stream', '.glb': 'model/gltf-binary' };

/* De la ruta de una petición (con consulta o ancla) a una ruta RELATIVA de la lista blanca, o null.
   Rechaza: doble codificación, barras invertidas, NUL, «..», «.», segmentos vacíos, dotfiles, unidades (C:), flujos (::$DATA) y mayúsculas distintas. */
export function rutaPermitida(url) {
  if (typeof url !== 'string' || url[0] !== '/') return null;
  let p = url.split('#')[0].split('?')[0];
  if (p.startsWith('//')) return null;
  try { p = decodeURIComponent(p); } catch { return null; }
  if (/[\\\0%:;]/.test(p) || p.includes('//')) return null;
  if (p === '/') return 'index.html';
  const seg = p.slice(1).split('/');
  if (seg.some((s) => !SEGMENTO.test(s))) return null;
  if (seg.length === 1) return ARCHIVOS.has(seg[0]) ? seg[0] : null;
  if (seg.length === 2 && CARPETAS[seg[0]] && CARPETAS[seg[0]].test(seg[1])) return seg.join('/');
  const sub = SUBCARPETAS[seg[0]];
  if (seg.length === 3 && sub && sub.dir.test(seg[1]) && sub.archivo.test(seg[2])) return seg.join('/');
  return null;
}

// CSP: la página usa script y estilo en línea; TensorFlow.js y body-pix (escaneo con fotos del perfil) salen de jsDelivr y la tipografía, de Google Fonts.
// 'unsafe-eval' hace falta porque tf.min.js usa new Function (sin él TensorFlow.js queda a medio cargar).
// worker-src blob: el visor 3D crea sus workers (mallador del maniquí y ajuste de prendas) con URL blob.
// connect-src blob: GLTFLoader lee las texturas incrustadas en los .glb a través de URL blob.
const CSP = ["default-src 'self'", "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net", "worker-src 'self' blob:", "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", 'font-src https://fonts.gstatic.com',
  "img-src 'self' data: blob:", "connect-src 'self' blob: https://cdn.jsdelivr.net", "object-src 'none'", "base-uri 'none'", "form-action 'self'", "frame-ancestors 'none'"].join('; ');
const SEGURAS = { 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', 'X-Frame-Options': 'DENY', 'Cross-Origin-Resource-Policy': 'same-origin', 'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()' };
const MENSAJES = { 403: 'Origen no permitido.', 404: 'No encontrado.', 405: 'Método no permitido.', 500: 'Error interno.' };

// medidas: objeto de crearApiMedidas (medidas-api.mjs). Sin él, /api/medidas/estado dice {claude:false} y POST /api/medidas responde 503.
// hosts: dominios públicos permitidos (minúsculas, sin puerto ni protocolo). Vacío = solo este equipo (127.0.0.1, localhost).
export function crearServidor({ raiz = RAIZ, log = console.log, medidas = null, hosts = [] } = {}) {
  const publicos = new Set(hosts);
  let raizReal = null;
  const json = (res, estado, obj, extra = {}) => {
    const cuerpo = JSON.stringify(obj);
    res.writeHead(estado, { ...SEGURAS, 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(cuerpo), 'Cache-Control': 'no-store', ...extra });
    res.end(cuerpo);
  };
  const nada = (res, estado, extra = {}) => json(res, estado, { codigo: estado, mensaje: MENSAJES[estado] || 'Error.' }, extra);
  const hostOk = (host, srv) => { const h = String(host || '').toLowerCase(); if (publicos.has(h)) return true; const a = srv.address(); if (!a || typeof a !== 'object') return false; return [`127.0.0.1:${a.port}`, `localhost:${a.port}`, `[::1]:${a.port}`].includes(h); };

  async function estatico(req, res) {
    const rel = rutaPermitida(req.url);
    if (!rel) return nada(res, 404);
    try {
      raizReal = raizReal || (await fs.promises.realpath(raiz));
      const real = await fs.promises.realpath(path.join(raiz, ...rel.split('/')));
      if (!real.startsWith(raizReal + path.sep)) return nada(res, 404);   // un enlace simbólico no puede sacar archivos de la raíz
      const st = await fs.promises.stat(real);
      if (!st.isFile()) return nada(res, 404);
      const tipo = TIPOS[path.extname(real).toLowerCase()] || 'application/octet-stream', html = tipo.startsWith('text/html');
      const datos = req.method === 'HEAD' ? Buffer.alloc(0) : await fs.promises.readFile(real);
      res.writeHead(200, { ...SEGURAS, 'Content-Type': tipo, 'Content-Length': st.size, 'Cache-Control': 'no-cache', ...(html ? { 'Content-Security-Policy': CSP } : {}) });
      res.end(datos);
    } catch (e) { return nada(res, 404); }
  }

  const srv = http.createServer(async (req, res) => {
    try {
      const ruta = String(req.url || '').split('?')[0];
      // comprobación de vida del alojamiento: llega con la dirección interna como Host, así que va antes del filtro de dominios; no revela nada
      if (ruta === '/salud' && (req.method === 'GET' || req.method === 'HEAD')) { req.resume(); return json(res, 200, { ok: true }); }
      if (!hostOk(req.headers.host, srv)) { req.resume(); return nada(res, 403); }
      if (ruta === '/api/medidas/estado') {
        if (req.method !== 'GET' && req.method !== 'HEAD') { req.resume(); return nada(res, 405, { Allow: 'GET, HEAD' }); }
        return json(res, 200, { claude: !!(medidas && medidas.activa) });   // solo sí o no: nunca la clave ni el motivo
      }
      if (ruta === '/api/medidas') {
        if (req.method !== 'POST') { req.resume(); return nada(res, 405, { Allow: 'POST' }); }
        if (!medidas) { req.resume(); return json(res, 503, { codigo: 'no_configurado', mensaje: 'La estimación con IA no está configurada en este servidor.' }); }
        const r = await medidas.medir(req, res);
        if (r && !res.headersSent && !res.destroyed) json(res, r.http, r.cuerpo, r.cabeceras);
        return;
      }
      if (req.method !== 'GET' && req.method !== 'HEAD') { req.resume(); return nada(res, 405, { Allow: 'GET, HEAD' }); }
      return await estatico(req, res);
    } catch (e) {
      log(`[servidor] error interno (${e && e.name})`);   // sin el mensaje: podría traer datos de la solicitud
      if (!res.headersSent) nada(res, 500); else res.destroy();
    }
  });
  srv.headersTimeout = 15_000; srv.requestTimeout = 60_000; srv.keepAliveTimeout = 5_000;
  return srv;
}

/* ---------- Arranque ---------- */
export async function iniciar(env = process.env) {
  const puerto = Number(env.PORT) || 3000;
  // Dominios públicos: el que Render asigna (RENDER_EXTERNAL_HOSTNAME) y los de HOSTS_PERMITIDOS. Con alguno, el servidor está alojado.
  const hosts = [env.RENDER_EXTERNAL_HOSTNAME, ...String(env.HOSTS_PERMITIDOS || '').split(',')].map((h) => String(h || '').trim().toLowerCase()).filter(Boolean);
  const alojado = hosts.length > 0, direccion = alojado ? '0.0.0.0' : '127.0.0.1';
  const medidas = await crearApiMedidas({ env, alojado });
  const srv = crearServidor({ medidas, hosts });
  await new Promise((ok, no) => { srv.once('error', no); srv.listen(puerto, direccion, ok); }).catch((e) => {
    console.error(e.code === 'EADDRINUSE' ? `El puerto ${puerto} ya está en uso. Cierra el otro servidor o usa otro puerto: PORT=3001 npm start` : `No se pudo iniciar el servidor (${e.code || e.name}).`);
    process.exit(1);
  });
  console.log(alojado ? `Ceiba + Fitwise: alojado en ${hosts.map((h) => 'https://' + h).join(', ')} (puerto ${puerto})` : `Ceiba + Fitwise: http://127.0.0.1:${puerto}`);
  console.log(`Medidas con IA (Claude): ${medidas.activa ? `activadas (modelo ${medidas.modelo})` : `desactivadas (${medidas.motivo})`}.`);   // nunca la clave
  return srv;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) iniciar();
