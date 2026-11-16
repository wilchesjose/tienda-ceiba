/* medidas-claude.mjs — Estimación de medidas corporales a partir de fotos con la API de Claude (Anthropic).

   Módulo SIN dependencias directas: el cliente del SDK (@anthropic-ai/sdk), zod y el helper de salida estructurada
   se inyectan (crearMedidor). En la tienda lo usa medidas-api.mjs (POST /api/medidas de server.mjs). Ver docs/medidas-claude.md.

   Las medidas son ESTIMACIONES visuales. No hay datos de referencia medidos con cinta: la precisión no está verificada.
   Claude no es un instrumento de medición; espera errores de varios centímetros.

   Uso (servidor o CLI):
     import Anthropic from '@anthropic-ai/sdk';
     import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
     import { z } from 'zod';
     const medidor = crearMedidor({ client: new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY }), z, zodOutputFormat: betaZodOutputFormat });
     const r = await medidor.medir({ fotos: { frente: bufferJpeg }, estaturaCm: 165, sexo: 'mujer' });
*/

export const MODELO_POR_DEFECTO = 'claude-sonnet-5-5';
// high: medir desde fotos exige razonamiento visual y aritmético (escala, perspectiva, ropa); la guía de Claude pide
// como mínimo high para trabajo sensible a la inteligencia. Es también el valor por defecto de Sonnet 5.5, pero se fija explícito.
export const ESFUERZO_POR_DEFECTO = 'high';
export const BETA_FALLBACK = 'server-side-fallback-2026-07-01';
export const MAX_LADO_PX = 1568;
export const MIN_LADO_PX = 300;
export const MAX_BYTES_IMAGEN = 5 * 1024 * 1024;
const MAX_TOKENS = 16000;            // el pensamiento adaptativo cuenta dentro de max_tokens
const ESFUERZOS = ['low', 'medium', 'high', 'xhigh', 'max'];
const SEXOS = { mujer: 'female', hombre: 'male', otro: 'unspecified (do not assume a sex; rely on the visible body)' };

export const CONTORNOS = ['pecho', 'bajoBusto', 'cintura', 'cadera', 'cuello', 'biceps', 'muneca', 'muslo'];
export const LARGOS = ['hombros', 'largoManga', 'entrepierna', 'largoTotal', 'tiroDelantero', 'tiroTrasero'];
export const CLAVES = [...CONTORNOS, ...LARGOS];
export const NOMBRES = { pecho: 'pecho (busto)', bajoBusto: 'bajo busto', cintura: 'cintura', cadera: 'cadera', cuello: 'cuello', biceps: 'bíceps', muneca: 'muñeca', muslo: 'muslo',
  hombros: 'hombros', largoManga: 'largo de manga', entrepierna: 'entrepierna', largoTotal: 'largo total', tiroDelantero: 'tiro delantero', tiroTrasero: 'tiro trasero' };
const SECCIONES = ['pecho', 'cintura', 'cadera'];
const BANDERAS = ['unaPersona', 'cuerpoCompleto', 'pose', 'ropaAjustada', 'luz', 'perfil'];

// Definiciones de cada medida para el modelo (alineadas con las del maniquí Atelier: visor-3d.js, measureAll).
const DEFINICIONES = {
  pecho: 'bust/chest circumference: tape horizontal around the fullest part of the bust (women) or around the chest under the armpits at nipple level (men)',
  bajoBusto: 'underbust circumference: directly under the bust, around the rib cage at the bra-band line',
  cintura: 'natural waist circumference: narrowest part of the torso between the lowest rib and the hip bone',
  cadera: 'hip circumference: tape horizontal around the fullest part of the buttocks',
  cuello: 'neck circumference around the middle of the neck, between its base and the jaw',
  biceps: 'upper-arm circumference at its widest point, arm relaxed',
  muneca: 'wrist circumference just above the wrist bone',
  muslo: 'thigh circumference at its widest point, just below the crotch',
  hombros: 'straight-line distance between the left and right acromion points (bony shoulder tips), seen from the front',
  largoManga: 'sleeve length: from the acromion (shoulder tip) over the elbow to the wrist bone, arm relaxed along the body',
  entrepierna: 'inseam: from the crotch straight down the inside of the leg to the floor',
  largoTotal: 'from the high point of the shoulder (where the shoulder meets the neck) straight down to the floor',
  tiroDelantero: 'front rise: from the crotch point up the front of the body to the natural waist line, following the body surface',
  tiroTrasero: 'back rise: from the crotch point up the back of the body, over the buttocks, to the natural waist line',
};

/* ---------- Validación: rangos y reglas (cm) ---------- */
// Rango absoluto de un adulto. Fuera de él el valor se descarta (null + motivo).
export const RANGOS = { pecho: [60, 160], bajoBusto: [55, 140], cintura: [45, 160], cadera: [60, 170], cuello: [25, 55], biceps: [15, 55], muneca: [11, 25], muslo: [30, 90],
  hombros: [28, 58], largoManga: [40, 80], entrepierna: [50, 100], largoTotal: [95, 185], tiroDelantero: [15, 45], tiroTrasero: [20, 55] };
// Proporción valor / estatura. Rangos amplios a propósito: solo atrapan valores imposibles para esa estatura.
export const PROPORCIONES = { pecho: [0.40, 0.95], bajoBusto: [0.36, 0.85], cintura: [0.30, 0.90], cadera: [0.40, 0.95], cuello: [0.14, 0.31],
  hombros: [0.19, 0.30], largoManga: [0.28, 0.42], entrepierna: [0.38, 0.53], largoTotal: [0.77, 0.87], tiroDelantero: [0.10, 0.22], tiroTrasero: [0.13, 0.28] };
// Coherencia entre pares. Si falla, se descarta la de menor confianza (las dos si empatan).
export const REGLAS_PAR = [
  { a: 'cintura', b: 'cadera', ok: (a, b) => a / b >= 0.55 && a / b <= 1.25, motivo: 'la relación cintura/cadera queda fuera del rango humano (0,55–1,25)' },
  { a: 'cintura', b: 'pecho', ok: (a, b) => a / b >= 0.50 && a / b <= 1.35, motivo: 'la relación cintura/pecho queda fuera del rango humano (0,50–1,35)' },
  { a: 'bajoBusto', b: 'pecho', ok: (a, b) => b - a >= 0 && b - a <= 35, motivo: 'el bajo busto debe ser menor que el busto (diferencia de 0 a 35 cm)' },
  { a: 'muneca', b: 'biceps', ok: (a, b) => a < b, motivo: 'la muñeca debe ser menor que el bíceps' },
  { a: 'biceps', b: 'muslo', ok: (a, b) => a < b, motivo: 'el bíceps debe ser menor que el muslo' },
  { a: 'muneca', b: 'cuello', ok: (a, b) => a < b, motivo: 'la muñeca debe ser menor que el cuello' },
  { a: 'tiroDelantero', b: 'tiroTrasero', ok: (a, b) => b - a >= -1 && b - a <= 20, motivo: 'el tiro trasero debe ser igual o mayor que el delantero (hasta 20 cm más)' },
  { a: 'entrepierna', b: 'largoTotal', ok: (a, b, H) => (b - a) / H >= 0.27 && (b - a) / H <= 0.47, motivo: 'la distancia entre el hombro y la entrepierna no es coherente con la estatura' },
];
// Topes de confianza según la calidad de las fotos (deterministas, se aplican después de la respuesta del modelo).
const TOPES = [
  { si: (c) => !c.perfil.ok, max: 0.6, claves: ['pecho', 'bajoBusto', 'cintura', 'cadera', 'muslo', 'tiroDelantero', 'tiroTrasero'] },
  { si: (c) => !c.ropaAjustada.ok, max: 0.5, claves: ['pecho', 'bajoBusto', 'cintura', 'cadera', 'muslo', 'biceps', 'tiroDelantero', 'tiroTrasero'] },
  { si: (c) => !c.pose.ok, max: 0.6, claves: CLAVES },
  { si: (c) => !c.luz.ok, max: 0.7, claves: CLAVES },
];
export const CONFIANZA_MINIMA = 0.15;

/* ---------- Maniquí Atelier ---------- */
export const LIMITES_ATELIER = { height: [120, 215], lt: [100, 185], bust: [60, 150], waist: [45, 140], hip: [60, 150], shoulders: [30, 56], sleeve: [40, 72],
  riseF: [18, 45], riseB: [22, 52], biceps: [18, 50], wrist: [12, 26], thigh: [35, 80], neck: [25, 52] };
const MAPA_ATELIER = { lt: 'largoTotal', bust: 'pecho', waist: 'cintura', hip: 'cadera', shoulders: 'hombros', sleeve: 'largoManga', riseF: 'tiroDelantero',
  riseB: 'tiroTrasero', biceps: 'biceps', wrist: 'muneca', thigh: 'muslo', neck: 'cuello' };

/* De medidas (resultado de medir() o números sueltos en cm) a los pines del maniquí Atelier.
   Recorta a sus límites y lo informa en `ajustes`; las medidas null van a `omitidas`. */
export function aPinsAtelier(medidas, estaturaCm) {
  const pins = {}, ajustes = [], omitidas = [];
  const poner = (pin, v) => {
    const [lo, hi] = LIMITES_ATELIER[pin], c = Math.min(hi, Math.max(lo, v));
    if (c !== v) ajustes.push({ pin, original: v, ajustado: c, limite: [lo, hi] });
    pins[pin] = c;
  };
  const H = Number(estaturaCm);
  if (Number.isFinite(H) && H > 0) poner('height', H); else omitidas.push('height');
  for (const [pin, clave] of Object.entries(MAPA_ATELIER)) {
    const m = medidas ? medidas[clave] : null, v = typeof m === 'number' ? m : m && m.valor;
    if (typeof v === 'number' && Number.isFinite(v)) poner(pin, v); else omitidas.push(pin);
  }
  return { pins, ajustes, omitidas };
}

/* ---------- Errores ---------- */
export class ErrorMedidas extends Error {
  constructor(codigo, mensaje, detalle = {}) { super(mensaje); this.name = 'ErrorMedidas'; this.codigo = codigo; this.detalle = detalle; }
}
const HTTP_POR_CODIGO = { entrada_invalida: 400, imagen_invalida: 400, imagen_grande: 413, imagen_pequena: 400, rechazo: 422, truncado: 502, salida_invalida: 502 };

/* Traduce cualquier error de medir() a {codigo, http, reintentable, mensaje} en español, sin datos sensibles.
   `Anthropic` es la clase del SDK (para usar sus clases de error tipadas). Orden: de la más específica a la base. */
export function describirErrorApi(err, Anthropic) {
  if (err instanceof ErrorMedidas) return { codigo: err.codigo, http: HTTP_POR_CODIGO[err.codigo] || 500, reintentable: false, mensaje: err.message };
  const A = Anthropic;
  if (A) {
    if (err instanceof A.NotFoundError) return { codigo: 'modelo_no_encontrado', http: 500, reintentable: false, mensaje: 'El modelo configurado no existe o no está disponible para esta cuenta (revisa CLAUDE_MODEL).' };
    if (err instanceof A.AuthenticationError) return { codigo: 'api_autenticacion', http: 500, reintentable: false, mensaje: 'La clave de la API de Anthropic no es válida (revisa ANTHROPIC_API_KEY en el servidor).' };
    if (err instanceof A.PermissionDeniedError) return { codigo: 'api_permiso', http: 500, reintentable: false, mensaje: 'La clave de la API no tiene permiso para este modelo o función.' };
    if (err instanceof A.RateLimitError) return { codigo: 'api_limite', http: 429, reintentable: true, mensaje: 'Demasiadas solicitudes a Claude. Intenta de nuevo en un minuto.' };
    if (err instanceof A.BadRequestError) return { codigo: 'api_solicitud', http: 502, reintentable: false, mensaje: 'Claude rechazó la solicitud (formato o tamaño de las fotos). Prueba con otras fotos.' };
    if (err instanceof A.InternalServerError) return { codigo: 'api_servidor', http: 503, reintentable: true, mensaje: 'El servicio de Claude no está disponible ahora. Intenta de nuevo en unos minutos.' };
    if (err instanceof A.APIConnectionError) return { codigo: 'api_conexion', http: 503, reintentable: true, mensaje: 'No hubo conexión con la API de Claude. Revisa la red e intenta de nuevo.' };
    if (err instanceof A.APIError) return { codigo: 'api_error', http: 502, reintentable: false, mensaje: `La API de Claude devolvió un error (${err.status ?? 'sin estado'}).` };
  }
  return { codigo: 'interno', http: 500, reintentable: false, mensaje: 'Error interno al estimar las medidas.' };
}

/* ---------- Imágenes ---------- */
function aBytes(d) {
  if (d instanceof Uint8Array) return d;
  if (d instanceof ArrayBuffer) return new Uint8Array(d);
  if (typeof d === 'string') return Buffer.from(d.replace(/^data:[^;,]+;base64,/, ''), 'base64');
  throw new ErrorMedidas('imagen_invalida', 'La foto debe llegar como bytes (Buffer/Uint8Array) o en base64.');
}
const u16be = (b, i) => (b[i] << 8) | b[i + 1];
const u16le = (b, i) => b[i] | (b[i + 1] << 8);
const u24le = (b, i) => b[i] | (b[i + 1] << 8) | (b[i + 2] << 16);
const u32be = (b, i) => ((b[i] << 24) >>> 0) + (b[i + 1] << 16) + (b[i + 2] << 8) + b[i + 3];
const ascii = (b, i, n) => String.fromCharCode(...b.subarray(i, i + n));

// Tipo real (por bytes mágicos, no por la extensión) y dimensiones de una JPEG, PNG o WebP, leyendo solo la cabecera.
export function inspeccionarImagen(b) {
  if (b.length > 24 && b[0] === 0x89 && ascii(b, 1, 3) === 'PNG') return { tipo: 'image/png', ancho: u32be(b, 16), alto: u32be(b, 20) };
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m === 0xff) { i++; continue; }
      if (m === 0xd8 || m === 0x01 || (m >= 0xd0 && m <= 0xd7)) { i += 2; continue; }
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { tipo: 'image/jpeg', ancho: u16be(b, i + 7), alto: u16be(b, i + 5) };
      i += 2 + u16be(b, i + 2);
    }
    return null;
  }
  if (b.length > 30 && ascii(b, 0, 4) === 'RIFF' && ascii(b, 8, 4) === 'WEBP') {
    const f = ascii(b, 12, 4);
    if (f === 'VP8 ') return { tipo: 'image/webp', ancho: u16le(b, 26) & 0x3fff, alto: u16le(b, 28) & 0x3fff };
    if (f === 'VP8L') return { tipo: 'image/webp', ancho: 1 + (((b[22] & 0x3f) << 8) | b[21]), alto: 1 + (((b[24] & 0x0f) << 10) | (b[23] << 2) | ((b[22] & 0xc0) >> 6)) };
    if (f === 'VP8X') return { tipo: 'image/webp', ancho: 1 + u24le(b, 24), alto: 1 + u24le(b, 27) };
  }
  return null;
}

// redimensionar(bytes, {maxLado}) -> {datos, tipo}: opcional e inyectado (el CLI usa sharp; en la tienda lo hace el navegador con canvas).
async function prepararFoto(foto, nombre, redimensionar) {
  const entrada = foto && typeof foto === 'object' && !(foto instanceof Uint8Array) && !(foto instanceof ArrayBuffer) ? foto.datos : foto;
  let bytes = aBytes(entrada), info = inspeccionarImagen(bytes);
  if (!info || !info.ancho || !info.alto) throw new ErrorMedidas('imagen_invalida', `La foto de ${nombre} no es una JPEG, PNG o WebP válida.`);
  if (Math.max(info.ancho, info.alto) > MAX_LADO_PX || bytes.length > MAX_BYTES_IMAGEN) {
    if (!redimensionar) throw new ErrorMedidas('imagen_grande', `La foto de ${nombre} mide ${info.ancho}×${info.alto} px; el máximo es ${MAX_LADO_PX} px por lado y ${MAX_BYTES_IMAGEN / 1048576} MB. Redúcela antes de enviarla.`);
    const r = await redimensionar(bytes, { maxLado: MAX_LADO_PX });
    bytes = aBytes(r && r.datos ? r.datos : r); info = inspeccionarImagen(bytes);
    if (!info || Math.max(info.ancho, info.alto) > MAX_LADO_PX || bytes.length > MAX_BYTES_IMAGEN) throw new ErrorMedidas('imagen_grande', `No se pudo reducir la foto de ${nombre} a ${MAX_LADO_PX} px.`);
  }
  if (Math.max(info.ancho, info.alto) < MIN_LADO_PX) throw new ErrorMedidas('imagen_pequena', `La foto de ${nombre} es muy pequeña (${info.ancho}×${info.alto} px). Usa una de al menos ${MIN_LADO_PX} px de alto.`);
  return { tipo: info.tipo, ancho: info.ancho, alto: info.alto, bytes: bytes.length, base64: Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString('base64') };
}

/* ---------- Entrada ---------- */
const num = (v) => (v === null || v === undefined || v === '' ? null : Number(v));
function limpiarPistas(p) {
  if (!p || typeof p !== 'object') return null;
  const out = {};
  for (const grupo of ['anchoFrente', 'profundidadPerfil', 'contornosApp']) {
    const g = p[grupo]; if (!g || typeof g !== 'object') continue;
    const ok = {};
    for (const k of SECCIONES) { const v = num(g[k]); if (Number.isFinite(v) && v >= 5 && v <= 200) ok[k] = Math.round(v * 10) / 10; }
    if (Object.keys(ok).length) out[grupo] = ok;
  }
  // inclinación de la cámara (grados, en valor absoluto) que estimó el escaneo en cada foto: avisa de la perspectiva
  if (p.camara && typeof p.camara === 'object') {
    const c = {};
    for (const k of ['frente', 'perfil']) { const v = num(p.camara[k]); if (Number.isFinite(v) && Math.abs(v) <= 45) c[k] = Math.round(Math.abs(v)); }
    if (Object.keys(c).length) out.camara = c;
  }
  return Object.keys(out).length ? out : null;
}
export function normalizarEntrada({ fotos, estaturaCm, pesoKg, sexo = 'otro', pistas } = {}) {
  if (!fotos || !fotos.frente) throw new ErrorMedidas('entrada_invalida', 'Falta la foto de frente (cuerpo entero).');
  const H = num(estaturaCm);
  if (!Number.isFinite(H) || H < 120 || H > 215) throw new ErrorMedidas('entrada_invalida', 'La estatura es obligatoria y debe estar entre 120 y 215 cm: es la única escala real de las fotos.');
  const P = num(pesoKg);
  if (P !== null && (!Number.isFinite(P) || P < 30 || P > 250)) throw new ErrorMedidas('entrada_invalida', 'El peso, si se indica, debe estar entre 30 y 250 kg.');
  if (!Object.hasOwn(SEXOS, sexo)) throw new ErrorMedidas('entrada_invalida', "El tipo de cuerpo debe ser 'mujer', 'hombre' u 'otro'.");
  return { fotos, estaturaCm: Math.round(H * 10) / 10, pesoKg: P === null ? null : Math.round(P * 10) / 10, sexo, pistas: limpiarPistas(pistas) };
}

/* ---------- Prompt ---------- */
export const PROMPT_SISTEMA = `You estimate a person's body measurements from photos so an online clothing store can suggest sizes. Your numbers are estimates that the person will review; you are not a medical or metrology tool.

SCALE. Photos have no absolute scale. The ONLY absolute reference is the person's real standing height without shoes, given in cm in the request. In the front photo, find the top of the head and the soles of the feet; that span corresponds to the real height (first subtract the visible footwear thickness: about 2-4 cm for sneakers, more for heels or platforms; ignore hair volume above the skull). Work in pixels first: note the person's height in pixels and each width in pixels, then convert with that ratio; re-derive the ratio separately for the side photo. Never take scale from objects, the image size, or assumptions about age. The photos may have been cropped around the person; that changes nothing. If the top of the head or the feet are not visible, the scale is unknown: set calidad.cuerpoCompleto.ok to false and every measurement to estimable=false.

PERSPECTIVE. One global ratio is only right when the camera is level, at about waist height and 2-3 m away. Decide first where the camera was, from the floor lines, the horizon, how much of the top of the shoulders or the underside of the chin shows, and the relative size of head and feet:
- Low camera looking up (feet and legs look large, head small, you see under the chin): the scale at hip and thigh level is larger than the global ratio and at chest and shoulder level smaller. Widths near the feet are overstated by the global ratio and widths near the head understated; correct each level separately.
- High camera looking down (head large, legs short): the opposite.
- Close camera (mirror selfies: chest height, arm raised, phone hiding part of the torso): strong distortion; the nearest parts are overstated.
Use local size references to set the scale at each level: an adult head is about 0.13 of stature tall and 15-16 cm wide; a foot is about 0.15 of stature long; a hand is about 0.11 of stature long. If the head measures clearly less than 0.13 of the stature in the photo, the camera is low and upper-body widths need to be scaled up accordingly (and the reverse). The request may tell you the camera tilt the store's scan estimated for each photo, in degrees; above about 8 degrees treat perspective as strong. With strong perspective lower confidence, but still correct for it rather than ignoring it.

CLOTHING. Measure the BODY, not the clothes. Where fabric stands away from the body, infer the contour underneath from anchors (neck, shoulders, wrists, knees, belt line, places where the fabric touches or creases against the body). As a guide, on the circumference a fitted T-shirt or leggings add about 1 cm, a regular shirt or straight jeans 2-4 cm, a sweatshirt, hoodie or loose trousers 4-8 cm, a coat 8 cm or more; subtract what the garment adds. A belt or waistband marks the trouser waist, which on men usually sits below the natural waist.

METHOD, in this order:
1. Fill calidad (photo quality) honestly. ok=true only when the condition clearly holds; otherwise ok=false with a short reason in motivo.
2. For the chest/bust, waist and hip levels, estimate in secciones the body's frontal width in cm (front photo) and its front-to-back depth in cm (side photo), each with the scale of its own level. Do not count the arms: if an arm touches the torso, find the torso edge behind it. Without a side photo, infer depth from the width, the body type, the weight if given and typical depth-to-width ratios; set profundidadEstimada=true and lower confidence.
3. Torso circumferences: about the perimeter of an ellipse with that width and depth, adjusted for the real cross-section (flatter back, bust or belly projection, buttocks). Neck, upper arm, wrist and thigh: from their visible width, assuming a roughly round cross-section unless the side view shows otherwise.
4. Lengths: measure along the body with the scale of the levels they cross, using the definitions given in the request.
5. Weight check, when the weight is given: compute the body mass index and compare the build you see with it. A circumference set that would belong to a clearly heavier or lighter person than the stated weight for that height means the scale or the clothing correction is off: look again and fix the cause.
6. Cross-check every value against typical adult anthropometric relations for the stated height, body type and weight, and against the other values (waist vs hip, underbust smaller than bust, wrist < biceps < thigh, back rise >= front rise). If something disagrees, look at the photo again before answering; do not pull values toward the average just because they are unusual.

HINTS. The request may include numbers from the store's automatic scan of the same photos: frontal widths and side depths at chest, waist and hip, and its own chest, waist and hip circumferences, all in cm. Those circumferences come from a statistical model fitted on about 2,500 measured people; with fitted clothing, a clean silhouette and the arms away from the torso its typical error is about 3 cm. So:
- When calidad.ropaAjustada and calidad.pose are both ok, your chest, waist and hip should normally land within about 3 cm of the scan's circumferences; depart further only for a specific reason you can see, and name it in nota.
- With loose clothing, long hair over the torso, arms against the body or a bag, the scan overestimates (it measures the fabric): rely on your own estimate and expect to be below it.
- The scan knows nothing about neck, arms, thighs or lengths: those are yours alone.

BODY TYPE. Use the body type the user declared. Estimate bajoBusto (underbust) only for a female body, or for an unspecified body when a bust is clearly visible; for a male body set it to estimable=false.

UNCERTAINTY. confianza (0 to 1) is your probability that the value is within 3 cm of a careful tape measurement (within 1.5 cm for neck, wrist and biceps). Use 0.3 or less when the region is hidden by loose clothing, hair, the pose or the frame. When you cannot see enough to estimate a measurement, set estimable=false, valor=0 and explain why in nota; never fill in a typical value silently.

CONSISTENCY. Follow the method the same way every time: round every length to the nearest 0.5 cm and every confidence to the nearest 0.05, so the same photos give the same answer.

OUTPUT. Only the JSON object defined by the schema. Write every free-text field (motivo, nota, observaciones) in neutral Spanish, in at most 20 words; use an empty string for motivo when ok is true.

MEASUREMENT DEFINITIONS (all in cm):
${CLAVES.map((k) => `- ${k}: ${DEFINICIONES[k]}.`).join('\n')}`;

function lineasPistas(p) {
  if (!p) return ["- Store scan: not available."];
  const fila = (g) => (g ? ['pecho', 'cintura', 'cadera'].filter((k) => g[k] != null).map((k) => `${k} ${g[k]}`).join(', ') : '');
  const out = [];
  if (p.contornosApp) out.push(`- Store scan circumferences (cm): ${fila(p.contornosApp)}.`);
  if (p.anchoFrente) out.push(`- Store scan frontal widths (cm): ${fila(p.anchoFrente)}.`);
  if (p.profundidadPerfil) out.push(`- Store scan side depths (cm): ${fila(p.profundidadPerfil)}.`);
  if (p.camara) out.push(`- Camera tilt estimated by the scan (degrees from level): ${['frente', 'perfil'].filter((k) => p.camara[k] != null).map((k) => `${k === 'frente' ? 'front' : 'side'} photo ${p.camara[k]}`).join(', ')}.`);
  return out.length ? out : ["- Store scan: not available."];
}
function textoUsuario(e, tienePerfil) {
  const lineas = [
    'Person data:',
    `- Real standing height without shoes: ${e.estaturaCm} cm. This is the only absolute scale.`,
    `- Weight: ${e.pesoKg === null ? 'not provided' : `${e.pesoKg} kg`}.`,
    `- Body type declared by the user: ${SEXOS[e.sexo]}.`,
    `- Photos: the first image is the FRONT view${tienePerfil ? '; the second image is the SIDE (profile) view' : '. There is no side photo: set calidad.perfil.ok=false with motivo "No se envió foto de perfil." and infer depths'}.`,
    `- Body mass index: ${e.pesoKg === null ? 'unknown' : (e.pesoKg / ((e.estaturaCm / 100) ** 2)).toFixed(1)}.`,
    ...lineasPistas(e.pistas),
    '',
    'Estimate the measurements following the method and the definitions.',
  ];
  return lineas.join('\n');
}

/* ---------- Esquema de salida (sin uniones ni restricciones numéricas: la validación de rangos se hace aquí) ---------- */
export function crearEsquema(z) {
  const medida = z.object({
    estimable: z.boolean().describe('false when the photos do not show enough to estimate it'),
    valor: z.number().describe('cm, rounded to 0.5; 0 when estimable is false'),
    confianza: z.number().describe('0 to 1: probability that valor is within 3 cm of a tape measurement (1.5 cm for neck, wrist, biceps)'),
    nota: z.string().describe('Spanish, max 20 words: how it was estimated or why it is not estimable'),
  });
  const bandera = z.object({ ok: z.boolean(), motivo: z.string().describe('Spanish reason when ok is false; empty string when ok is true') });
  const seccion = z.object({
    anchoCm: z.number().describe('frontal body width in cm at this level (0 if unknown)'),
    profundidadCm: z.number().describe('front-to-back body depth in cm at this level (0 if unknown)'),
    profundidadEstimada: z.boolean().describe('true when depth was inferred without a usable side photo'),
  });
  return z.object({
    calidad: z.object({
      unaPersona: bandera.describe('exactly one person is clearly the subject in every photo'),
      cuerpoCompleto: bandera.describe('top of the head and both feet are visible in the front photo'),
      pose: bandera.describe('standing upright, front view facing the camera (and true profile in the side photo), arms slightly away from the torso'),
      ropaAjustada: bandera.describe('clothing is close enough to the body to see its contour at chest, waist, hips and thighs; false for loose or oversized clothing'),
      luz: bandera.describe('lighting and sharpness are enough to see the body edges'),
      perfil: bandera.describe('a usable side photo was provided'),
    }),
    secciones: z.object({ pecho: seccion, cintura: seccion, cadera: seccion }),
    medidas: z.object(Object.fromEntries(CLAVES.map((k) => [k, medida]))),
    observaciones: z.string().describe('Spanish, max 2 short sentences: the main limitations of these photos'),
  });
}

/* ---------- Validación de la salida del modelo ---------- */
const red05 = (v) => Math.round(v * 2) / 2;
const red2 = (v) => Math.round(v * 100) / 100;
const txt = (s) => (typeof s === 'string' && s.trim() ? s.trim().slice(0, 300) : null);
const cm = (v) => `${String(v).replace('.', ',')} cm`;
// Perímetro de una elipse (Ramanujan) con ancho y profundidad totales.
const elipse = (w, d) => { const a = w / 2, b = d / 2; return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b))); };

/* Aplica las reglas del servidor a la salida estructurada del modelo. Pura y sin red: se puede usar sola.
   Devuelve {ok, medidas{clave:{valor|null, confianza, nota, motivo}}, calidad, secciones, observaciones, avisos[], descartadas[]}. */
export function validarSalida(salida, { estaturaCm, sexo = 'otro', tienePerfil = false, pistas = null } = {}) {
  const H = Number(estaturaCm), avisos = [], descartadas = [];
  const s = salida && typeof salida === 'object' ? salida : {};
  const calidad = {};
  for (const k of BANDERAS) { const f = s.calidad && s.calidad[k]; const ok = !!(f && f.ok === true); calidad[k] = { ok, motivo: ok ? null : txt(f && f.motivo) || 'Sin detalle.' }; }
  if (!tienePerfil) calidad.perfil = { ok: false, motivo: 'No se envió foto de perfil.' };

  const medidas = {};
  for (const k of CLAVES) {
    const m = (s.medidas && s.medidas[k]) || {}, nota = txt(m.nota);
    const valor = m.estimable === true && Number.isFinite(m.valor) && m.valor > 0 ? red05(m.valor) : null;
    medidas[k] = { valor, confianza: valor === null ? 0 : Math.min(1, Math.max(0, Number.isFinite(m.confianza) ? m.confianza : 0)), nota,
      motivo: valor === null ? nota || 'Claude no pudo estimarla con estas fotos.' : null };
  }
  const descartar = (k, motivo) => {
    const m = medidas[k]; if (m.valor === null) return;
    descartadas.push({ clave: k, valorOriginal: m.valor, motivo });
    medidas[k] = { valor: null, confianza: 0, nota: m.nota, motivo };
  };

  // 1. Sin una sola persona de cuerpo entero no hay escala: nada se puede convertir a cm.
  const escalaOk = calidad.unaPersona.ok && calidad.cuerpoCompleto.ok;
  if (!escalaOk) {
    const porque = !calidad.unaPersona.ok ? calidad.unaPersona.motivo : calidad.cuerpoCompleto.motivo;
    avisos.push(`No se puede convertir la estatura a centímetros en esta foto: ${porque}`);
    for (const k of CLAVES) descartar(k, 'Sin escala confiable: la foto de frente debe mostrar a una sola persona de pies a cabeza.');
  }
  // 2. Bajo busto solo aplica a cuerpo de mujer (u 'otro' si el modelo lo vio).
  if (sexo === 'hombre') descartar('bajoBusto', 'No aplica para cuerpo de hombre.');
  // 3. Rangos absolutos y proporción con la estatura.
  for (const k of CLAVES) {
    const v = medidas[k].valor; if (v === null) continue;
    const [lo, hi] = RANGOS[k];
    if (v < lo || v > hi) { descartar(k, `${cm(v)} está fuera del rango humano plausible (${lo}–${hi} cm).`); continue; }
    const p = PROPORCIONES[k];
    if (p && Number.isFinite(H) && (v / H < p[0] || v / H > p[1])) descartar(k, `${cm(v)} no es plausible para una estatura de ${cm(H)} (esperado ${Math.round(p[0] * H)}–${Math.round(p[1] * H)} cm).`);
  }
  // 4. Coherencia entre medidas.
  for (const r of REGLAS_PAR) {
    const A = medidas[r.a], B = medidas[r.b];
    if (A.valor === null || B.valor === null || r.ok(A.valor, B.valor, H)) continue;
    const motivo = `Incoherente: ${r.motivo} (${NOMBRES[r.a]} ${cm(A.valor)}, ${NOMBRES[r.b]} ${cm(B.valor)}).`;
    if (A.confianza <= B.confianza) descartar(r.a, motivo);
    if (B.confianza <= A.confianza) descartar(r.b, motivo);
  }
  // 5. Contorno de torso frente a la elipse de su propio ancho y profundidad.
  const secciones = {};
  for (const k of SECCIONES) {
    const q = (s.secciones && s.secciones[k]) || {};
    const w = Number.isFinite(q.anchoCm) && q.anchoCm > 0 ? red05(q.anchoCm) : null, d = Number.isFinite(q.profundidadCm) && q.profundidadCm > 0 ? red05(q.profundidadCm) : null;
    secciones[k] = { anchoCm: w, profundidadCm: d, profundidadEstimada: q.profundidadEstimada !== false || !tienePerfil };
    const m = medidas[k];
    if (m.valor !== null && w && d) {
      const ratio = m.valor / elipse(w, d);
      if (ratio < 0.85 || ratio > 1.25) { m.confianza *= 0.7; avisos.push(`${NOMBRES[k]}: el contorno (${cm(m.valor)}) no cuadra con su ancho y profundidad (${cm(w)} × ${cm(d)}); se bajó la confianza.`); }
    }
    // Con ropa ajustada y buena pose el escaneo de la tienda acierta a unos 3 cm: si Claude se aleja más de 8 cm, algo falla en una de las dos
    const app = pistas && pistas.contornosApp && pistas.contornosApp[k];
    if (app && m.valor !== null && calidad.ropaAjustada.ok && calidad.pose.ok && Math.abs(m.valor - app) > 8) {
      m.confianza *= 0.7; avisos.push(`${NOMBRES[k]}: Claude (${cm(m.valor)}) y el escaneo de la tienda (${cm(app)}) difieren más de 8 cm con ropa ajustada; se bajó la confianza.`);
    }
    const pista = pistas && pistas.anchoFrente && pistas.anchoFrente[k];
    if (pista && w && Math.abs(w - pista) / pista > 0.25) avisos.push(`${NOMBRES[k]}: el ancho de Claude (${cm(w)}) difiere más de 25 % del escaneo de la app (${cm(pista)}).`);
  }
  // 6. Topes de confianza por calidad de las fotos.
  for (const t of TOPES) if (t.si(calidad)) for (const k of t.claves) if (medidas[k].valor !== null) medidas[k].confianza = Math.min(medidas[k].confianza, t.max);
  if (!calidad.ropaAjustada.ok && escalaOk) avisos.push('La ropa holgada tapa la silueta: los contornos son poco confiables. Mejor una foto con ropa ajustada.');
  if (!tienePerfil && escalaOk) avisos.push('Sin foto de perfil, las profundidades del torso son supuestas: los contornos y el tiro son menos confiables.');
  // 7. Confianza mínima.
  for (const k of CLAVES) {
    const m = medidas[k];
    if (m.valor !== null && m.confianza < CONFIANZA_MINIMA) descartar(k, `Confianza demasiado baja (${String(red2(m.confianza)).replace('.', ',')}) para usarla.`);
    else m.confianza = red2(medidas[k].confianza);
  }
  const algunas = CLAVES.some((k) => medidas[k].valor !== null);
  return { ok: escalaOk && algunas, medidas, calidad, secciones, observaciones: txt(s.observaciones), avisos, descartadas };
}

/* ---------- Costo ---------- */
// USD por millón de tokens (tarifas de la API de Claude; las de Sonnet 5 aplican si responde el respaldo).
export const PRECIOS_USD_MTOK = {
  'claude-sonnet-5-5': { entrada: 2, salida: 10, cacheEscritura: 2.5, cacheLectura: 0.10 },
  'claude-sonnet-5': { entrada: 2, salida: 10, cacheEscritura: 2.5, cacheLectura: 0.20 },
  'claude-opus-5-5': { entrada: 4, salida: 20, cacheEscritura: 5, cacheLectura: 0.20 },
  'claude-opus-5': { entrada: 5, salida: 25, cacheEscritura: 6.25, cacheLectura: 0.50 },
  'claude-opus-4-8': { entrada: 5, salida: 25, cacheEscritura: 6.25, cacheLectura: 0.50 },
};
export function estimarCostoUsd(uso, modelo) {
  if (!uso) return { usd: null, completo: false };
  const its = Array.isArray(uso.iterations) && uso.iterations.length ? uso.iterations : [uso];
  let usd = 0, completo = true;
  for (const it of its) {
    const p = PRECIOS_USD_MTOK[it.model || modelo];
    if (!p) { completo = false; continue; }
    usd += ((it.input_tokens || 0) * p.entrada + (it.output_tokens || 0) * p.salida + (it.cache_creation_input_tokens || 0) * p.cacheEscritura + (it.cache_read_input_tokens || 0) * p.cacheLectura) / 1e6;
  }
  return { usd: Math.round(usd * 1e5) / 1e5, completo };
}

/* ---------- Medidor ---------- */
/* client: instancia de Anthropic (solo hace falta para medir()); z: zod v4; zodOutputFormat: betaZodOutputFormat del SDK
   (@anthropic-ai/sdk/helpers/beta/zod). usarFallback=false fuera de la API de Claude (Bedrock, Vertex, Foundry no aceptan `fallbacks`). */
export function crearMedidor({ client = null, z, zodOutputFormat, modelo, effort, redimensionar = null, usarFallback = true, maxTokens = MAX_TOKENS, opcionesSolicitud = { timeout: 180_000 } } = {}) {
  if (!z || typeof z.object !== 'function') throw new Error('crearMedidor: falta `z` (zod v4).');
  if (typeof zodOutputFormat !== 'function') throw new Error('crearMedidor: falta `zodOutputFormat` (betaZodOutputFormat de @anthropic-ai/sdk/helpers/beta/zod).');
  const mod = modelo || MODELO_POR_DEFECTO, esf = effort || ESFUERZO_POR_DEFECTO;
  if (!ESFUERZOS.includes(esf)) throw new Error(`crearMedidor: effort debe ser uno de ${ESFUERZOS.join(', ')}.`);
  const esquema = crearEsquema(z), formato = zodOutputFormat(esquema);

  async function construirSolicitud(entrada) {
    const e = normalizarEntrada(entrada);
    const frente = await prepararFoto(e.fotos.frente, 'frente', redimensionar);
    const perfil = e.fotos.perfil ? await prepararFoto(e.fotos.perfil, 'perfil', redimensionar) : null;
    const img = (f) => ({ type: 'image', source: { type: 'base64', media_type: f.tipo, data: f.base64 } });
    const contenido = [{ type: 'text', text: 'FRONT photo:' }, img(frente)];
    if (perfil) contenido.push({ type: 'text', text: 'SIDE photo:' }, img(perfil));
    contenido.push({ type: 'text', text: textoUsuario(e, !!perfil) });
    // Sin `thinking` (adaptativo por defecto en Sonnet 5.5) y sin parámetros de muestreo (no se admiten).
    const params = {
      model: mod,
      max_tokens: maxTokens,
      system: PROMPT_SISTEMA,
      messages: [{ role: 'user', content: contenido }],
      output_config: { effort: esf, format: formato },
      ...(usarFallback ? { betas: [BETA_FALLBACK], fallbacks: 'default' } : {}),
    };
    const fotos = { frente: { tipo: frente.tipo, ancho: frente.ancho, alto: frente.alto, bytes: frente.bytes }, perfil: perfil && { tipo: perfil.tipo, ancho: perfil.ancho, alto: perfil.alto, bytes: perfil.bytes } };
    return { params, contexto: { estaturaCm: e.estaturaCm, pesoKg: e.pesoKg, sexo: e.sexo, pistas: e.pistas, tienePerfil: !!perfil, fotos } };
  }

  // opciones.signal: AbortSignal para cortar la solicitud (tiempo máximo del servidor o el navegador se desconectó).
  async function medir(entrada, { signal } = {}) {
    if (!client) throw new Error('crearMedidor: falta `client` (instancia de Anthropic) para medir().');
    const { params, contexto } = await construirSolicitud(entrada);
    const t0 = performance.now();
    const resp = await client.beta.messages.create(params, signal ? { ...opcionesSolicitud, signal } : opcionesSolicitud);
    const latenciaMs = Math.round(performance.now() - t0);
    const huboFallback = !!(resp.usage && Array.isArray(resp.usage.iterations) && resp.usage.iterations.some((it) => it.type === 'fallback_message'));
    const meta = { modeloSolicitado: mod, modeloQueRespondio: resp.model, huboFallback, esfuerzo: esf, stopReason: resp.stop_reason, idMensaje: resp.id,
      uso: resp.usage, costo: estimarCostoUsd(resp.usage, resp.model), latenciaMs, fotos: contexto.fotos };
    // stop_reason antes de leer el contenido: un rechazo o un corte dejan JSON vacío o parcial.
    if (resp.stop_reason === 'refusal') {
      const sd = resp.stop_details || {};
      throw new ErrorMedidas('rechazo', 'Claude no procesó estas fotos (filtro de seguridad). Prueba con otras fotos o escribe las medidas a mano.', { categoria: sd.category ?? null, meta });
    }
    if (resp.stop_reason === 'max_tokens') throw new ErrorMedidas('truncado', 'La respuesta de Claude quedó incompleta. Intenta de nuevo.', { meta });
    const texto = resp.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
    let crudo;
    try { crudo = JSON.parse(texto); } catch { throw new ErrorMedidas('salida_invalida', 'Claude devolvió una respuesta que no es JSON.', { meta }); }
    const r = esquema.safeParse(crudo);
    if (!r.success) throw new ErrorMedidas('salida_invalida', 'La respuesta de Claude no cumple el esquema esperado.', { meta, problemas: r.error.issues.slice(0, 5).map((i) => i.path.join('.')) });
    return { ...validarSalida(r.data, contexto), meta, crudo: r.data };
  }

  return { medir, construirSolicitud, esquema, modelo: mod, effort: esf };
}
