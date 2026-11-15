/* Motor de ajuste (fitEngine): fuente única de verdad para saber cómo le queda una prenda a un cuerpo.
   Sin dependencias. Funciona en el navegador (<script src="fit-engine.js">, expone window.FitEngine),
   en Node con require()/module.exports y con import() (deja globalThis.FitEngine).
   Documentación, auditoría de datos y supuestos a confirmar: docs/fit-engine.md

   Convenciones (todas configurables en DEFAULT_CONFIG):
   - Holgura = contorno de la prenda - contorno del cuerpo, en cm (negativa = la prenda es más chica que el cuerpo en reposo).
   - Las medidas de la prenda pueden ser 'contorno' (vuelta completa) o 'plana' (ancho de lado a lado, se multiplica por 2).
     Nunca se asume en silencio: si el tipo no viene en la prenda se usa el valor por defecto de la config y queda
     anotado en resumen.supuestos (o la zona devuelve null con el modo estricto).
   - Categorías por umbrales [b0,b1,b2,b3]: muy ajustado < b0 <= ajustado < b1 <= regular < b2 <= holgado < b3 <= muy holgado
     (límite inferior inclusivo, superior exclusivo).
   - Estiramiento: solo ayuda donde la tela estira. holguraEfectiva = holgura + estiramiento aprovechado (hasta el máximo
     útil de la tela). Una tela que no estira jamás hace que una prenda chica "quede": noEntra = true.
   - Todo dato faltante, no numérico, no finito o fuera de rango plausible devuelve null en esa zona (con el motivo en
     resumen.sinDato). Nunca NaN ni números inventados. */
(function (root, fabrica) {
  var api = fabrica();
  if (typeof module === 'object' && module && module.exports) module.exports = api;
  else (root || globalThis).FitEngine = api;
})(typeof self !== 'undefined' ? self : (typeof globalThis !== 'undefined' ? globalThis : this), function () {
  'use strict';

  var VERSION = '1.0.0';
  var CATEGORIAS = ['muy ajustado', 'ajustado', 'regular', 'holgado', 'muy holgado'];
  var CATEGORIAS_LARGO = ['muy corto', 'corto', 'regular', 'largo', 'muy largo'];
  var ETIQUETAS = {
    'muy ajustado': 'Muy ajustado', 'ajustado': 'Ajustado', 'regular': 'Regular', 'holgado': 'Holgado', 'muy holgado': 'Muy holgado',
    'muy corto': 'Muy corto', 'corto': 'Corto', 'largo': 'Largo', 'muy largo': 'Muy largo'
  };
  var EPS = 1e-9;

  /* ---------------------------------------------------------------- configuración */
  function congelar(o) {
    if (o && typeof o === 'object' && !Object.isFrozen(o)) { Object.freeze(o); Object.keys(o).forEach(function (k) { congelar(o[k]); }); }
    return o;
  }
  var DEFAULT_CONFIG = congelar({
    // Si es true, una zona sin prenda.medidaTipo explícito devuelve null (no se usa medidaTipoPorZona).
    medidaTipoEstricto: false,
    // Evidencia en docs/fit-engine.md: el catálogo guarda contornos completos (la conversión x2 de camisetas y camisas
    // se hizo al cargar). 'longitud' = medida lineal (largo, manga, hombro, tiro, entrepierna).
    medidaTipoPorZona: {
      pecho: 'contorno', cintura: 'contorno', cadera: 'contorno', ruedo: 'contorno', muslo: 'contorno', rodilla: 'contorno',
      bota: 'contorno', biceps: 'contorno', puno: 'contorno', cuello: 'contorno',
      largo: 'longitud', manga: 'longitud', hombro: 'longitud', tiro: 'longitud', entrepierna: 'longitud'
    },
    // Zonas que siempre aparecen en el resultado (null si falta el dato) según el tipo de prenda
    zonasRequeridas: { top: ['pecho', 'cintura', 'largo'], bottom: ['cintura', 'cadera', 'largo'], dress: ['pecho', 'cintura', 'cadera', 'largo'] },
    // Zonas de la prenda que tienen una medida equivalente en el cuerpo (el resto devuelve null: sin referencia corporal)
    zonasComparables: ['pecho', 'cintura', 'cadera', 'muslo', 'rodilla', 'biceps', 'cuello', 'puno'],
    // Rangos plausibles en cm. Fuera de ellos el dato se considera inválido (null).
    rangos: {
      cuerpo: { estatura: [120, 210], pecho: [60, 150], cintura: [50, 150], cadera: [60, 160], muslo: [30, 100], rodilla: [25, 70], biceps: [15, 60], cuello: [25, 60], puno: [10, 30] },
      prenda: { contorno: [10, 300], plana: [5, 150], longitud: [1, 250] }
    },
    // Umbrales de holgura (cm) [b0,b1,b2,b3]. Se busca por estilo (p. ej. 'jacket'), luego por tipo (top|bottom|dress) y luego 'default'.
    umbrales: {
      default: { pecho: [0, 6, 18, 30], cintura: [0, 6, 18, 30], cadera: [0, 6, 16, 28], muslo: [0, 4, 10, 20], rodilla: [0, 3, 8, 16], biceps: [0, 4, 10, 20], puno: [0, 2, 6, 12], cuello: [0, 2, 4, 8] },
      top: { pecho: [0, 6, 18, 30], cintura: [0, 6, 18, 30], cadera: [0, 6, 16, 28] },
      jacket: { pecho: [2, 10, 24, 38], cintura: [2, 10, 24, 38], cadera: [2, 8, 20, 34], biceps: [2, 8, 16, 26] },
      bottom: { cintura: [0, 2, 6, 12], cadera: [0, 4, 10, 20] },
      dress: { pecho: [0, 4, 12, 22], cintura: [0, 4, 12, 22], cadera: [0, 4, 12, 22] }
    },
    // Estiramiento: máximo útil (comodo, no de rotura) como % del contorno según la clase de la tela. SUPUESTOS a confirmar.
    estiramiento: {
      porClase: { ninguna: 0, baja: 5, media: 10, alta: 20 },
      cinturaElasticaPct: 25,                       // cintura con goma/pretina elástica declarada sin cifra
      elastanoClases: [{ minPct: 5, clase: 'alta' }, { minPct: 3, clase: 'media' }, { minPct: 0.5, clase: 'baja' }],
      tensionMuyAjustadoDesde: 0.6                  // fracción del estiramiento usada desde la cual la zona es "muy ajustado"
    },
    // Proporciones corporales (fracción de la estatura) ya usadas por el probador de Fitwise
    proporciones: { entrepierna: 0.425, rodilla: 0.562, hombroAlto: 0.835, cintura: 0.605, entrepiernaAltura: 0.47, brazo: 0.34, hombroAncho: 0.245 },
    // Cobertura mínima del torso (0 = cintura, 1 = entrepierna) por estilo; 'corta' para prendas cortas por diseño
    cubrimientoMin: { default: 0.9, jacket: 0.65, corta: 0.4 },
    // Umbrales de largo (cm de diferencia con la referencia corporal) [b0,b1,b2,b3] -> muy corto|corto|regular|largo|muy largo
    largo: { top: [-10, 0, 12, 28], jacket: [-10, 0, 20, 40], bottom: [-10, -3, 5, 12], dress: [-20, -4, 6, 24], manga: [-8, -3, 6, 14] }
  });

  function esObjeto(v) { return v !== null && typeof v === 'object' && !Array.isArray(v); }
  function mezclar(base, sobre) {
    var out = {};
    Object.keys(base).forEach(function (k) {
      var b = base[k];
      out[k] = esObjeto(b) ? mezclar(b, {}) : Array.isArray(b) ? b.slice() : b;
    });
    if (esObjeto(sobre)) Object.keys(sobre).forEach(function (k) {
      var s = sobre[k];
      if (esObjeto(s) && esObjeto(out[k])) out[k] = mezclar(out[k], s);
      else out[k] = Array.isArray(s) ? s.slice() : esObjeto(s) ? mezclar({}, s) : s;
    });
    return out;
  }
  function finito(v) { return typeof v === 'number' && isFinite(v); }
  function umbralOk(t) {
    if (!Array.isArray(t) || t.length !== 4 || !t.every(finito)) return false;
    for (var i = 1; i < 4; i++) if (!(t[i] > t[i - 1])) return false;
    return true;
  }
  function validarConfig(c) {
    ['umbrales', 'largo'].forEach(function (sec) {
      var g = c[sec];
      if (!esObjeto(g)) throw new Error('Configuración inválida: falta ' + sec);
      Object.keys(g).forEach(function (a) {
        if (sec === 'largo') { if (!umbralOk(g[a])) throw new Error('umbral inválido en largo.' + a + ': se esperan 4 números ascendentes'); return; }
        if (!esObjeto(g[a])) throw new Error('umbral inválido en umbrales.' + a);
        Object.keys(g[a]).forEach(function (z) { if (!umbralOk(g[a][z])) throw new Error('umbral inválido en umbrales.' + a + '.' + z + ': se esperan 4 números ascendentes'); });
      });
    });
    var r = c.rangos;
    ['cuerpo', 'prenda'].forEach(function (s) {
      if (!esObjeto(r && r[s])) throw new Error('Configuración inválida: rangos.' + s);
      Object.keys(r[s]).forEach(function (k) {
        var p = r[s][k];
        if (!Array.isArray(p) || p.length !== 2 || !p.every(finito) || !(p[0] < p[1])) throw new Error('rango inválido en rangos.' + s + '.' + k);
      });
    });
    var e = c.estiramiento;
    if (!esObjeto(e) || !esObjeto(e.porClase)) throw new Error('Configuración inválida: estiramiento');
    Object.keys(e.porClase).forEach(function (k) { if (!finito(e.porClase[k]) || e.porClase[k] < 0 || e.porClase[k] > 100) throw new Error('estiramiento.porClase.' + k + ' debe estar entre 0 y 100'); });
    if (!finito(e.cinturaElasticaPct) || e.cinturaElasticaPct < 0 || e.cinturaElasticaPct > 100) throw new Error('estiramiento.cinturaElasticaPct debe estar entre 0 y 100');
    if (!finito(e.tensionMuyAjustadoDesde) || e.tensionMuyAjustadoDesde <= 0 || e.tensionMuyAjustadoDesde > 1) throw new Error('estiramiento.tensionMuyAjustadoDesde debe estar en (0, 1]');
    return c;
  }
  function resolverConfig(config) {
    if (!esObjeto(config)) return DEFAULT_CONFIG;
    return validarConfig(mezclar(DEFAULT_CONFIG, config));
  }

  /* ---------------------------------------------------------------- utilidades */
  function r9(v) { var x = Math.round(v * 1e9) / 1e9; return x === 0 ? 0 : x; }
  function r2(v) { var x = Math.round(v * 100) / 100; return x === 0 ? 0 : x; }
  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function enRango(v, rg) { return finito(v) && Array.isArray(rg) && v >= rg[0] && v <= rg[1]; }
  function rango(cfg, cuerpoOPrenda, clave) { var r = cfg.rangos[cuerpoOPrenda][clave]; return r || [10, 300]; }
  // Número de umbrales alcanzados: 0..4 -> índice de categoría
  function clasificar(valor, umbrales) {
    var n = 0;
    for (var i = 0; i < umbrales.length; i++) if (umbrales[i] <= valor + EPS) n++;
    return n;
  }
  function buscarUmbral(tabla, estilo, tipo, zona) {
    var orden = [estilo, tipo, 'default'];
    for (var i = 0; i < orden.length; i++) { var g = orden[i]; if (g && tabla[g] && tabla[g][zona]) return tabla[g][zona]; }
    return null;
  }
  function norm(s) { return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function num(txt) { return parseFloat(String(txt).replace(',', '.')); }

  /* ---------------------------------------------------------------- tela */
  // Interpreta lo que el catálogo dice de la tela. Devuelve clase null cuando no hay dato (no se inventa).
  function interpretarTela(tela, descripcion, config) {
    var cfg = resolverConfig(config), est = cfg.estiramiento;
    var t = esObjeto(tela) ? tela : {};
    var elast = norm(t.elast), comp = norm(t.comp), desc = norm(descripcion) + ' ' + norm(t.notas);
    var out = { clase: null, pct: null, extraCm: null, elastanoPct: null, cinturaElastica: false, pretinaExtraCm: null, fuente: null, notas: [] };
    var base = elast.split(';')[0];
    var clase = null;
    if (/\bno\s+(estira|cede|es\s+elast)/.test(base)) clase = 'ninguna';
    else if (/cuatro|4\s*direcc|4-way|four/.test(base)) clase = 'alta';
    else if (/un poco|ligeramente|\balgo\b/.test(base) || /\bcede\b/.test(base)) clase = 'baja';
    else if (/estira|elastic/.test(base)) clase = 'media';
    if (clase) out.fuente = 'texto';
    var m = /(\d+(?:[.,]\d+)?)\s*%\s*(elastano|spandex|lycra|elastan|elastane)/.exec(comp);
    if (m) out.elastanoPct = num(m[1]);
    if (!clase && out.elastanoPct != null) {
      var cl = est.elastanoClases.slice().sort(function (a, b) { return b.minPct - a.minPct; });
      for (var i = 0; i < cl.length; i++) if (out.elastanoPct >= cl[i].minPct) { clase = cl[i].clase; break; }
      if (clase) out.fuente = 'composicion';
    }
    if (clase === 'ninguna' && out.elastanoPct != null) out.notas.push('Conflicto: el texto dice que no estira pero la composición trae ' + out.elastanoPct + ' % de elastano; manda el texto.');
    var cm = /(?:cede|estira)\s+hasta\s+(\d+(?:[.,]\d+)?)\s*cm/.exec(elast);
    if (cm) { out.extraCm = num(cm[1]); if (!clase) clase = 'baja'; if (!out.fuente) out.fuente = 'texto'; }
    var pr = /pretina[^.;]*?hasta\s+(\d+(?:[.,]\d+)?)\s*cm/.exec(elast + ' ' + desc);
    if (pr) out.pretinaExtraCm = num(pr[1]);
    out.cinturaElastica = out.pretinaExtraCm != null || /(cintura|pretina)\s+(elastica|con\s+elastico|con\s+goma)|goma\s+en\s+la\s+cintura/.test(elast + ' ' + desc);
    out.clase = clase;
    if (clase && out.extraCm == null && est.porClase[clase] != null) out.pct = est.porClase[clase];
    return out;
  }
  function pctValido(v) { return finito(v) && v >= 0 && v <= 200; }
  // Máximo útil de estiramiento de una zona (cm) o null si se desconoce
  function estiramientoZona(zona, contornoCm, prenda, cfg) {
    var tela = esObjeto(prenda.tela) ? prenda.tela : {};
    if (esObjeto(tela.estiramientoPorZona) && pctValido(tela.estiramientoPorZona[zona]))
      return { maxCm: r9(contornoCm * tela.estiramientoPorZona[zona] / 100), maxPct: tela.estiramientoPorZona[zona], clase: null, fuente: 'explicita' };
    if (pctValido(tela.maxEstiramientoPct))
      return { maxCm: r9(contornoCm * tela.maxEstiramientoPct / 100), maxPct: tela.maxEstiramientoPct, clase: null, fuente: 'explicita' };
    var it = interpretarTela(tela, prenda.descripcion, cfg), cand = [];
    if (it.extraCm != null) cand.push({ cm: it.extraCm, clase: it.clase, fuente: 'texto' });
    else if (it.pct != null) cand.push({ cm: contornoCm * it.pct / 100, clase: it.clase, fuente: it.fuente });
    if (zona === 'cintura') {
      if (it.pretinaExtraCm != null) cand.push({ cm: it.pretinaExtraCm, clase: it.clase, fuente: 'texto-pretina' });
      else if (it.cinturaElastica) cand.push({ cm: contornoCm * cfg.estiramiento.cinturaElasticaPct / 100, clase: it.clase, fuente: 'cintura-elastica' });
    }
    if (!cand.length) return null;
    var best = cand.reduce(function (a, b) { return b.cm > a.cm ? b : a; });
    return { maxCm: r9(best.cm), maxPct: contornoCm > 0 ? r2(best.cm / contornoCm * 100) : null, clase: best.clase, fuente: best.fuente };
  }

  /* ---------------------------------------------------------------- evaluación de una zona de contorno */
  function evaluarContorno(zona, ctx) {
    var cfg = ctx.cfg, prenda = ctx.prenda, cuerpo = ctx.cuerpo;
    var mt = esObjeto(prenda.medidaTipo) ? prenda.medidaTipo[zona] : undefined, fuenteTipo = 'prenda';
    if (mt === undefined) {
      if (cfg.medidaTipoEstricto) return { motivo: 'No se confirmó si la medida de ' + zona + ' es contorno o plana (modo estricto).' };
      mt = cfg.medidaTipoPorZona[zona]; fuenteTipo = 'default';
    }
    if (mt !== 'contorno' && mt !== 'plana') return { motivo: 'No se sabe si la medida de ' + zona + ' es contorno o plana.' };
    var bruto = ctx.prenda.zonas[zona];
    if (bruto === undefined || bruto === null) return { motivo: 'Falta la medida de la prenda para ' + zona + '.' };
    if (!enRango(bruto, cfg.rangos.prenda[mt])) return { motivo: 'La medida de la prenda para ' + zona + ' no es un número válido o está fuera de rango plausible.' };
    var cb = cuerpo[zona];
    if (cb === undefined || cb === null) return { motivo: 'Falta la medida del cuerpo: ' + zona + '.' };
    if (!enRango(cb, rango(cfg, 'cuerpo', zona))) return { motivo: 'La medida del cuerpo (' + zona + ') no es un número válido o está fuera de rango plausible.' };
    var C = r9(mt === 'plana' ? bruto * 2 : bruto);
    var holgura = r9(C - cb), deficit = holgura < 0 ? -holgura : 0;
    var th = buscarUmbral(cfg.umbrales, prenda.estilo, prenda.tipo, zona);
    if (!th) return { motivo: 'No hay umbrales configurados para ' + zona + '.' };
    var est = estiramientoZona(zona, C, prenda, cfg);
    if (deficit > 0 && !est) return { motivo: 'Falta el dato de elasticidad de la tela y la prenda es más chica que el cuerpo en reposo (' + zona + ').' };
    var maxCm = est ? est.maxCm : null;
    var usado = deficit > 0 ? Math.min(deficit, maxCm) : 0;
    var noEntra = deficit > 0 && deficit > maxCm + EPS;
    var efectiva = r9(holgura + usado);
    var tensionRatio = deficit > 0 ? (maxCm > 0 ? Math.min(1, deficit / maxCm) : 1) : 0;
    var rank = clasificar(efectiva, th);
    if (noEntra || (deficit > 0 && tensionRatio >= cfg.estiramiento.tensionMuyAjustadoDesde - EPS)) rank = 0;
    var tension = noEntra ? 1 : deficit > 0 ? 0.5 + 0.5 * tensionRatio : (th[1] > 0 ? clamp(0.5 * (1 - holgura / th[1]), 0, 0.5) : (holgura <= 0 ? 0.5 : 0));
    var efecto = {
      tension: r2(tension),
      arrugas: r2(clamp((holgura - th[1]) / (th[3] - th[1]), 0, 1)),
      caida: r2(clamp((holgura - th[2]) / (2 * (th[3] - th[2])), 0, 1))
    };
    var cat = CATEGORIAS[rank];
    var razon = noEntra
      ? 'La prenda mide ' + r2(deficit) + ' cm menos que tu ' + zona + ' y ni estirando (hasta ' + r2(maxCm) + ' cm) alcanza.'
      : deficit > 0
        ? 'La prenda mide ' + r2(deficit) + ' cm menos que tu ' + zona + ' y la tela estira para ajustarse (' + Math.round(tensionRatio * 100) + ' % de su estiramiento útil).'
        : 'La prenda queda ' + r2(holgura) + ' cm más grande que tu ' + zona + ' en reposo.';
    return {
      zona: {
        tipoZona: 'contorno', prendaCm: C, cuerpoCm: cb, holguraCm: holgura, holguraEfectivaCm: efectiva, categoria: cat, noEntra: noEntra,
        estiramiento: est ? { maxCm: maxCm, maxPct: est.maxPct, usadoCm: r9(usado), tension: r2(tensionRatio), clase: est.clase, fuente: est.fuente }
                          : { maxCm: null, maxPct: null, usadoCm: null, tension: null, clase: null, fuente: null },
        efecto: efecto, medidaTipo: mt, medidaTipoFuente: fuenteTipo, estimado: (prenda.estimado || []).indexOf(zona) >= 0, razon: razon
      },
      supuesto: fuenteTipo === 'default'
        ? zona + ': se asumió medida de ' + mt + ' (valor por defecto; confirmar con la tienda).' : null,
      supuestoTela: est && est.fuente !== 'explicita' ? zona + ': estiramiento útil ' + r2(est.maxPct == null ? 0 : est.maxPct) + ' % (' + est.fuente + (est.clase ? ', clase ' + est.clase : '') + '; supuesto de configuración).' : null
    };
  }

  /* ---------------------------------------------------------------- zonas de largo */
  function bandaLargo(valor, th) { return clasificar(valor, th); }
  function evaluarLargo(zona, ctx) {
    var cfg = ctx.cfg, prenda = ctx.prenda, cuerpo = ctx.cuerpo, P = cfg.proporciones, tipo = prenda.tipo;
    if (tipo !== 'top' && tipo !== 'bottom' && tipo !== 'dress') return { motivo: 'Falta el tipo de prenda (top, bottom o dress) para evaluar el largo.' };
    var H = cuerpo.estatura;
    if (H === undefined || H === null) return { motivo: 'Falta la estatura del cuerpo para evaluar el largo.' };
    if (!enRango(H, rango(cfg, 'cuerpo', 'estatura'))) return { motivo: 'La estatura del cuerpo no es un número válido o está fuera de rango plausible.' };
    var fuente = zona === 'largo' && tipo === 'bottom' ? 'entrepierna' : zona;
    var L = prenda.zonas[fuente];
    if (L === undefined || L === null) return { motivo: 'Falta la medida de la prenda para ' + (fuente === 'entrepierna' ? 'la entrepierna' : zona) + '.' };
    if (!enRango(L, cfg.rangos.prenda.longitud)) return { motivo: 'La medida de la prenda para ' + fuente + ' no es un número válido o está fuera de rango plausible.' };
    var ref, th, tabla, efecto, nivel, marca;
    if (zona === 'manga') {
      var hb = prenda.zonas.hombro;
      if (hb === undefined || hb === null || !enRango(hb, cfg.rangos.prenda.longitud)) return { motivo: 'Falta la medida de hombros de la prenda para evaluar la manga.' };
      var brazo = P.brazo * H, caida = Math.max(0, (hb - P.hombroAncho * H) / 2);
      ref = brazo - caida; th = cfg.largo.manga;
      nivel = bandaLargo(r9(L - ref), th);
      marca = ['sube-muneca', 'sube-muneca', 'muneca', 'cubre-mano', 'cubre-mano'][nivel];
      efecto = { largoRuedo: marca, apilado: r2(clamp((L - ref - th[2]) / (th[3] - th[2]), 0, 1)) };
    } else if (tipo === 'bottom') {
      ref = P.entrepierna * H; th = cfg.largo.bottom;
      nivel = bandaLargo(r9(L - ref), th);
      marca = ['sube-tobillo', 'sube-tobillo', 'tobillo', 'cubre-zapato', 'arrastra'][nivel];
      efecto = { largoRuedo: marca, apilado: r2(clamp((L - ref - th[2]) / (th[3] - th[2]), 0, 1)) };
    } else if (tipo === 'dress') {
      ref = P.rodilla * H; th = cfg.largo.dress;
      nivel = bandaLargo(r9(L - ref), th);
      marca = ['muslo', 'sobre-rodilla', 'rodilla', 'media-pierna', 'tobillo'][nivel];
      efecto = { largoRuedo: marca, apilado: 0 };
    } else {
      var cmin = prenda.corta ? cfg.cubrimientoMin.corta : prenda.estilo === 'jacket' ? cfg.cubrimientoMin.jacket : cfg.cubrimientoMin.default;
      var tramo = P.cintura - P.entrepiernaAltura;
      ref = (P.hombroAlto - P.cintura + cmin * tramo) * H;
      th = prenda.estilo === 'jacket' ? cfg.largo.jacket : cfg.largo.top;
      nivel = bandaLargo(r9(L - ref), th);
      var cov = (P.cintura * H - (P.hombroAlto * H - L)) / (tramo * H);
      marca = cov < 0.15 ? 'abdomen' : cov < 0.35 ? 'cintura' : cov < 0.85 ? 'sobre-cadera' : cov < 1.05 ? 'cadera' : 'bajo-cadera';
      efecto = { largoRuedo: marca, apilado: 0, cobertura: r2(cov) };
    }
    var h = r9(L - ref);
    return {
      zona: {
        tipoZona: 'longitud', prendaCm: L, cuerpoCm: r9(ref), holguraCm: h, holguraEfectivaCm: h, categoria: CATEGORIAS_LARGO[nivel], noEntra: false,
        estiramiento: { maxCm: null, maxPct: null, usadoCm: null, tension: null, clase: null, fuente: null },
        efecto: efecto, medidaTipo: 'longitud', medidaTipoFuente: 'default', estimado: (prenda.estimado || []).indexOf(fuente) >= 0 || (prenda.estimado || []).indexOf(zona) >= 0,
        estimadoCuerpo: true,
        razon: 'El largo de la prenda es ' + (h >= 0 ? '' : '-') + r2(Math.abs(h)) + ' cm respecto a la referencia proporcional a tu estatura (' + r2(ref) + ' cm).'
      },
      supuesto: null, supuestoTela: null
    };
  }

  /* ---------------------------------------------------------------- evaluación completa */
  function normalizarManga(m) {
    var s = norm(m);
    return /^(larga|long)$/.test(s) ? 'larga' : /^(corta|short)$/.test(s) ? 'corta' : /^(sin|none|no)$/.test(s) ? 'sin' : null;
  }
  function evaluate(entrada) {
    var inp = esObjeto(entrada) ? entrada : {};
    var cfg = resolverConfig(inp.config);
    var prenda = esObjeto(inp.prenda) ? inp.prenda : {};
    var cuerpo = esObjeto(inp.cuerpo) ? inp.cuerpo : {};
    var zonasPrenda = esObjeto(prenda.zonas) ? prenda.zonas : {};
    var p = { tipo: prenda.tipo, estilo: prenda.estilo, zonas: zonasPrenda, medidaTipo: prenda.medidaTipo, tela: prenda.tela, descripcion: prenda.descripcion, estimado: Array.isArray(prenda.estimado) ? prenda.estimado : [], corta: !!prenda.corta };
    var req = cfg.zonasRequeridas[prenda.tipo] || [];
    var claves = req.slice();
    Object.keys(zonasPrenda).forEach(function (k) { if (claves.indexOf(k) < 0 && !(prenda.tipo === 'bottom' && k === 'entrepierna')) claves.push(k); });
    var manga = normalizarManga(prenda.manga);
    var zonas = {}, sinDato = {}, supuestos = [], noEntra = [], estimadas = [];
    claves.forEach(function (z) {
      var res;
      if (z === 'manga') {
        if (manga === 'corta' || manga === 'sin') return;          // no hay manga larga que evaluar
        if (manga === null) res = { motivo: 'No se sabe si la prenda tiene manga larga o corta.' };
        else res = evaluarLargo('manga', { cfg: cfg, prenda: p, cuerpo: cuerpo });
      } else if (z === 'largo') res = evaluarLargo('largo', { cfg: cfg, prenda: p, cuerpo: cuerpo });
      else if (cfg.zonasComparables.indexOf(z) < 0) {
        var mt = esObjeto(p.medidaTipo) ? p.medidaTipo[z] : undefined;
        res = { motivo: 'No hay referencia corporal para ' + z + ' (el cuerpo no trae esa medida).' };
        if (mt === undefined && cfg.medidaTipoPorZona[z] === undefined) res = { motivo: 'No se sabe si la medida de ' + z + ' es contorno o plana.' };
      } else res = evaluarContorno(z, { cfg: cfg, prenda: p, cuerpo: cuerpo });
      if (res.zona) {
        zonas[z] = res.zona;
        if (res.supuesto && supuestos.indexOf(res.supuesto) < 0) supuestos.push(res.supuesto);
        if (res.supuestoTela && supuestos.indexOf(res.supuestoTela) < 0) supuestos.push(res.supuestoTela);
        if (res.zona.noEntra) noEntra.push(z);
        if (res.zona.estimado) estimadas.push(z);
      } else { zonas[z] = null; sinDato[z] = res.motivo; }
    });
    var circ = Object.keys(zonas).filter(function (z) { return zonas[z] && zonas[z].tipoZona === 'contorno'; });
    var masAjustada = null, masHolgada = null;
    circ.forEach(function (z) {
      if (masAjustada === null || zonas[z].holguraEfectivaCm < zonas[masAjustada].holguraEfectivaCm) masAjustada = z;
      if (masHolgada === null || zonas[z].holguraCm > zonas[masHolgada].holguraCm) masHolgada = z;
    });
    return {
      version: VERSION,
      talla: inp.talla === undefined ? null : inp.talla,
      tipo: prenda.tipo === undefined ? null : prenda.tipo,
      zonas: zonas,
      resumen: {
        evaluadas: Object.keys(zonas).filter(function (z) { return zonas[z]; }).length,
        sinDato: sinDato, noEntra: noEntra, estimadas: estimadas, supuestos: supuestos,
        zonaMasAjustada: masAjustada, zonaMasHolgada: masHolgada,
        tela: interpretarTela(prenda.tela, prenda.descripcion, cfg)
      }
    };
  }

  /* ---------------------------------------------------------------- adaptadores del catálogo de Ceiba */
  function prendaDesdeProducto(p, talla) {
    if (!esObjeto(p) || !Array.isArray(p.sizes) || !esObjeto(p.spec)) return null;
    var i = p.sizes.indexOf(talla);
    if (i < 0) return null;
    var zonas = {};
    Object.keys(p.spec).forEach(function (k) { zonas[k] = Array.isArray(p.spec[k]) ? p.spec[k][i] : undefined; });
    return {
      nombre: p.name, tipo: p.kind, estilo: p.style || undefined,
      manga: p.sleeve === 'long' ? 'larga' : p.sleeve === 'short' ? 'corta' : undefined,
      corta: !!p.corto, zonas: zonas, medidaTipo: esObjeto(p.medidaTipo) ? p.medidaTipo : {},
      tela: p.tela, descripcion: p.corte, estimado: Array.isArray(p.estimado) ? p.estimado : []
    };
  }
  function evaluarProducto(p, cuerpo, talla, config) {
    var prenda = prendaDesdeProducto(p, talla);
    if (!prenda) {
      var vacio = evaluate({ prenda: {}, cuerpo: cuerpo, talla: talla, config: config });
      vacio.resumen.sinDato._ = 'Talla o producto inexistente.';
      return vacio;
    }
    return evaluate({ prenda: prenda, cuerpo: cuerpo, talla: talla, config: config });
  }
  function evaluarTallas(p, cuerpo, config) {
    var out = {};
    ((p && p.sizes) || []).forEach(function (t) { out[t] = evaluarProducto(p, cuerpo, t, config); });
    return out;
  }

  /* ---------------------------------------------------------------- fitBrief */
  var NOMBRE_EN = { pecho: 'chest', cintura: 'waist', cadera: 'hips', muslo: 'thigh', rodilla: 'knee', biceps: 'upper arm', cuello: 'neck', puno: 'cuff', largo: 'length', manga: 'sleeve' };
  var NOMBRE_ES = { pecho: 'pecho', cintura: 'cintura', cadera: 'cadera', muslo: 'muslo', rodilla: 'rodilla', biceps: 'bíceps', cuello: 'cuello', puno: 'puño', largo: 'largo', manga: 'manga' };
  var LARGO_EN = {
    'sube-tobillo': 'the hem rides above the ankle, showing the ankle bone', 'tobillo': 'the hem just reaches the ankle',
    'cubre-zapato': 'the hem covers the top of the shoe with a slight stack of fabric', 'arrastra': 'the hem is too long: it pools and stacks on the shoes',
    'abdomen': 'the hem ends high, above the waist, showing the midriff', 'cintura': 'the hem ends at the waist',
    'sobre-cadera': 'the hem ends above the hip', 'cadera': 'the hem ends at the hip', 'bajo-cadera': 'the hem falls below the hip, covering the hips',
    'muslo': 'the hem ends at the upper thigh (very short)', 'sobre-rodilla': 'the hem ends above the knee', 'rodilla': 'the hem ends at the knee',
    'media-pierna': 'the hem ends at mid-calf', 'sube-muneca': 'the sleeve ends above the wrist, showing the forearm', 'muneca': 'the sleeve ends at the wrist bone',
    'cubre-mano': 'the sleeve is too long: it covers the hand and bunches at the wrist'
  };
  var LARGO_ES = {
    'sube-tobillo': 'el ruedo queda sobre el tobillo', 'tobillo': 'el ruedo llega al tobillo', 'cubre-zapato': 'el ruedo cubre el zapato y se arruga un poco',
    'arrastra': 'el ruedo es demasiado largo: se arrastra y se apila sobre el zapato', 'abdomen': 'el bajo queda sobre la cintura y deja ver el abdomen',
    'cintura': 'el bajo llega a la cintura', 'sobre-cadera': 'el bajo queda sobre la cadera', 'cadera': 'el bajo llega a la cadera', 'bajo-cadera': 'el bajo cae bajo la cadera',
    'muslo': 'el ruedo queda en el muslo alto (muy corto)', 'sobre-rodilla': 'el ruedo queda sobre la rodilla', 'rodilla': 'el ruedo llega a la rodilla',
    'media-pierna': 'el ruedo llega a media pierna', 'sube-muneca': 'la manga queda sobre la muñeca', 'muneca': 'la manga llega a la muñeca',
    'cubre-mano': 'la manga es demasiado larga: cubre la mano y se arruga en la muñeca'
  };
  function cmTxt(v, lang) { var s = String(r2(Math.abs(v))); return lang === 'es' ? s.replace('.', ',') : s; }
  function frase(z, zona, lang) {
    var es = lang === 'es', n = (es ? NOMBRE_ES : NOMBRE_EN)[zona] || zona, h = z.holguraCm;
    if (z.tipoZona === 'longitud') {
      var d = LARGO_EN[z.efecto.largoRuedo], de = LARGO_ES[z.efecto.largoRuedo];
      return es ? n + ': ' + de + ' (' + (h >= 0 ? '+' : '-') + cmTxt(h, 'es') + ' cm frente a la referencia de tu estatura).'
                : n + ': ' + d + ' (' + (h >= 0 ? '+' : '-') + cmTxt(h, 'en') + ' cm versus the reference for the body height).';
    }
    var diff = es
      ? (h === 0 ? 'misma medida que el cuerpo' : cmTxt(h, 'es') + ' cm ' + (h > 0 ? 'más grande' : 'más chica') + ' que el cuerpo en reposo')
      : (h === 0 ? 'the same circumference as the body' : cmTxt(h, 'en') + ' cm ' + (h > 0 ? 'larger' : 'smaller') + ' than the body at rest');
    var uso = z.estiramiento && z.estiramiento.usadoCm > 0, cuanto = uso ? cmTxt(z.estiramiento.usadoCm, es ? 'es' : 'en') : '';
    var desc;
    if (z.noEntra) desc = es ? 'demasiado chica: no cierra sobre el cuerpo en esta talla' : 'too small: it does not close over the body at this size';
    else if (z.categoria === 'muy ajustado') desc = es
      ? (uso ? 'muy ajustada: la tela se estira unos ' + cuanto + ' cm y marca líneas de tensión, pegada al cuerpo' : 'muy ajustada: tira y marca líneas de tensión')
      : (uso ? 'very tight: the fabric is stretched about ' + cuanto + ' cm with visible tension lines, clinging to the body' : 'very tight: pulling and strain lines across the ' + n);
    else if (z.categoria === 'ajustado') desc = es
      ? 'ajustada: sigue de cerca la forma del cuerpo' + (uso ? ' (la tela se estira unos ' + cuanto + ' cm)' : '') + ', con leves líneas de tensión'
      : 'fitted and snug: follows the body shape closely' + (uso ? ' (the fabric stretches about ' + cuanto + ' cm)' : '') + ', with slight pull lines';
    else if (z.categoria === 'regular') desc = es ? 'ajuste regular y cómodo: pliegues naturales pequeños, sin tensión ni exceso de tela' : 'regular, comfortable fit: small natural folds, no tension and no excess fabric';
    else if (z.categoria === 'holgado') desc = es ? 'holgada: la tela cae separada del cuerpo con pliegues suaves' : 'loose: the fabric hangs away from the body in soft folds';
    else desc = es ? 'muy holgada (oversize): mucho exceso de tela con arrugas y caída suelta evidentes' : 'very loose, oversized: a lot of excess fabric with visible bunching and loose drape';
    return n + ': ' + (es ? 'prenda ' : 'garment ') + diff + ' -> ' + desc + '.';
  }
  // Instrucciones visuales concretas por zona para futuros prompts de imagen (en inglés por defecto) + resumen humano en español
  function fitBrief(evaluacion, opciones) {
    var lang = opciones && opciones.lang === 'es' ? 'es' : 'en';
    var ev = esObjeto(evaluacion) && esObjeto(evaluacion.zonas) ? evaluacion : { zonas: {}, resumen: {} };
    var zonas = {}, lineas = [], omitidas = [], partes = [];
    Object.keys(ev.zonas).forEach(function (z) {
      var v = ev.zonas[z];
      if (!v) { omitidas.push(z); return; }
      var f = frase(v, z, lang);
      zonas[z] = f; lineas.push(f);
      var nombre = NOMBRE_ES[z] || z; nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
      var signo = v.holguraCm > 0 ? '+' : v.holguraCm < 0 ? '-' : '';
      partes.push(nombre + ' ' + (ETIQUETAS[v.categoria] || v.categoria).toLowerCase() + ' (' + signo + cmTxt(v.holguraCm, 'es') + ' cm)' + (v.noEntra ? ', no entra' : ''));
    });
    var resumen = partes.length ? partes.join('; ') + '.' : 'No hay datos suficientes para describir el ajuste.';
    if (omitidas.length && partes.length) resumen += ' Sin dato: ' + omitidas.map(function (z) { return NOMBRE_ES[z] || z; }).join(', ') + '.';
    return { lang: lang, lineas: lineas, zonas: zonas, texto: lineas.join('\n'), resumen: resumen, omitidas: omitidas };
  }

  return {
    VERSION: VERSION, DEFAULT_CONFIG: DEFAULT_CONFIG, CATEGORIAS: CATEGORIAS, CATEGORIAS_LARGO: CATEGORIAS_LARGO, ETIQUETAS: ETIQUETAS,
    evaluate: evaluate, evaluarProducto: evaluarProducto, evaluarTallas: evaluarTallas, prendaDesdeProducto: prendaDesdeProducto,
    interpretarTela: interpretarTela, fitBrief: fitBrief, clasificar: clasificar
  };
});
