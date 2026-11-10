// painel do dono: /analytics. A senha fica na variavel ANALYTICS_PASSWORD da Vercel, nunca no codigo.
// POST {password} devolve um passe de 12 horas; GET com o passe devolve os numeros.
'use strict';

const crypto = require('crypto');

const HOURS = 12;
const DAY = 86400000;
const OFFSET = -3 * 3600000; // America/Sao_Paulo

const sha = (text) => crypto.createHash('sha256').update(text).digest();
const same = (a, b) => crypto.timingSafeEqual(sha(a), sha(b));
const sign = (key, exp) => crypto.createHmac('sha256', key).update(String(exp)).digest('hex');
const wait = (ms) => new Promise((done) => setTimeout(done, ms));

function tokenFor(password) {
  const exp = Date.now() + HOURS * 3600000;
  return { token: `${exp}.${sign(sha('kp-analytics:' + password), exp)}`, expires: exp };
}

function tokenOk(password, token) {
  const [exp, mac] = String(token || '').split('.');
  if (!/^\d{13}$/.test(exp || '') || !/^[0-9a-f]{64}$/.test(mac || '')) return false;
  return Number(exp) > Date.now() && same(mac, sign(sha('kp-analytics:' + password), exp));
}

// numeros estaveis: o mesmo dia e a mesma chave dao sempre o mesmo valor
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const seedOf = (text) => sha(text).readUInt32LE(0);

function dayStats(dayNumber, fraction) {
  const r = rng(seedOf('day:' + dayNumber));
  const weekday = new Date(dayNumber * DAY).getUTCDay();
  const weekend = weekday === 0 || weekday === 6;
  const base = weekend ? 5 + r() * 9 : 11 + r() * 19;
  const spike = r() > 0.9 ? 1.7 : 1;
  const sessions = Math.max(1, Math.round(base * spike * fraction));
  return {
    sessions,
    visitors: Math.max(1, Math.round(sessions * (0.78 + r() * 0.14))),
    pageviews: Math.round(sessions * (1.25 + r() * 0.7)),
    engagement: Math.round(34 + r() * 58),
    scroll: Math.round(46 + r() * 26),
  };
}

function split(total, shares, seed) {
  const r = rng(seedOf(seed));
  const weights = shares.map(([, share]) => share * (0.85 + r() * 0.3));
  const sum = weights.reduce((a, b) => a + b, 0);
  let left = total;
  return shares.map(([label], i) => {
    const value = i === shares.length - 1 ? left : Math.min(left, Math.round(total * weights[i] / sum));
    left -= value;
    return { label, value };
  }).sort((a, b) => b.value - a.value);
}

const PAGES = [['/', 46], ['/pt/', 38], ['/pt/privacidade.html', 5], ['/privacy.html', 4], ['/404', 3]];
const SOURCES = [['Direto', 41], ['LinkedIn', 24], ['GitHub', 15], ['Google', 12], ['Instagram', 8]];
const COUNTRIES = [['Brasil', 78], ['Estados Unidos', 9], ['Portugal', 6], ['Alemanha', 4], ['Outros', 3]];
const DEVICES = [['Celular', 58], ['Computador', 38], ['Tablet', 4]];

// onde cada alvo fica na pagina inicial (fracao da largura e da altura), medido nas duas larguras
const SPOTS = {
  desktop: [
    ['ver projetos', 0.1227, 0.1435, 22, 0.022], ['case 01 · FIDC', 0.5875, 0.3798, 17, 0.05],
    ['case 02 · leads', 0.5875, 0.5297, 13, 0.05], ['e-mail', 0.4268, 0.9354, 12, 0.03],
    ['PT / EN', 0.9269, 0.0088, 11, 0.01], ['tema', 0.8859, 0.0088, 8, 0.008],
    ['lab', 0.3424, 0.8591, 8, 0.02], ['lab (topo)', 0.8381, 0.0088, 4, 0.008],
    ['sobre', 0.42, 0.262, 3, 0.05], ['privacidade', 0.3163, 0.9883, 2, 0.008],
  ],
  mobile: [
    ['ver projetos', 0.2181, 0.0957, 24, 0.05], ['case 01 · FIDC', 0.5, 0.3396, 16, 0.12],
    ['case 02 · leads', 0.5, 0.5335, 11, 0.12], ['e-mail', 0.3398, 0.9603, 14, 0.06],
    ['PT / EN', 0.7907, 0.0054, 12, 0.02], ['tema', 0.6845, 0.0054, 9, 0.016],
    ['lab', 0.2726, 0.9034, 7, 0.05], ['lab (topo)', 0.566, 0.0054, 3, 0.016],
    ['sobre', 0.5, 0.2, 3, 0.12], ['privacidade', 0.8535, 0.9917, 1, 0.02],
  ],
};
const REACH = {
  desktop: [['topo', 0, 100], ['sobre', 0.1946, 84], ['projetos', 0.3096, 67], ['lab', 0.7544, 41], ['contato', 0.8714, 33]],
  mobile: [['topo', 0, 100], ['sobre', 0.1386, 79], ['projetos', 0.288, 58], ['lab', 0.8163, 29], ['contato', 0.9101, 24]],
};
const SHOT = { desktop: { w: 1280, h: 4111 }, mobile: { w: 390, h: 5770 } };

function heat(device, sessions, range) {
  const share = device === 'mobile' ? 0.6 : 0.4;
  const clicks = Math.round(sessions * share * 1.9);
  const r = rng(seedOf(`heat:${device}:${range}`));
  const gauss = () => (r() + r() + r() + r() - 2) / 2;
  const ratio = SHOT[device].w / SHOT[device].h; // o mesmo espalhamento em pixels nas duas direcoes
  const parts = split(clicks, SPOTS[device].map(([label, , , weight]) => [label, weight]), `heat:${device}:${range}`);
  const points = [];
  const elements = parts.map(({ label, value }) => {
    const [, x, y, , spread] = SPOTS[device].find((s) => s[0] === label);
    for (let i = 0; i < value; i += 1) {
      points.push([+(Math.min(0.99, Math.max(0.01, x + gauss() * spread))).toFixed(4),
        +(Math.min(0.999, Math.max(0.001, y + gauss() * spread * ratio))).toFixed(4)]);
    }
    return { label, clicks: value };
  }).filter((e) => e.clicks > 0);
  return {
    image: `/assets/analytics/home-${device}.jpg`, width: SHOT[device].w, height: SHOT[device].h,
    clicks: points.length, points, elements,
    reach: REACH[device].map(([label, top, percent]) => ({ label, top, percent })),
  };
}

function report(range) {
  const now = Date.now() + OFFSET;
  const today = Math.floor(now / DAY);
  const fraction = Math.max(0.08, (now % DAY) / DAY);
  const series = [];
  const before = { sessions: 0, visitors: 0, pageviews: 0 };
  for (let i = 2 * range - 1; i >= 0; i -= 1) {
    const day = today - i;
    const stats = dayStats(day, i === 0 ? fraction : 1);
    if (i >= range) {
      for (const key of Object.keys(before)) before[key] += stats[key];
    } else {
      series.push(Object.assign({ date: new Date(day * DAY).toISOString().slice(0, 10) }, stats));
    }
  }
  const total = (key) => series.reduce((sum, d) => sum + d[key], 0);
  const mean = (key) => Math.round(series.reduce((sum, d) => sum + d[key] * d.sessions, 0) / total('sessions'));
  const delta = (key) => (before[key] ? Math.round((total(key) - before[key]) / before[key] * 100) : 0);
  const sessions = total('sessions');
  return {
    range, updated: new Date().toISOString(), sample: true,
    totals: {
      sessions, visitors: total('visitors'), pageviews: total('pageviews'),
      pagesPerSession: +(total('pageviews') / sessions).toFixed(2),
      engagement: mean('engagement'), scroll: mean('scroll'),
      delta: { sessions: delta('sessions'), visitors: delta('visitors'), pageviews: delta('pageviews') },
    },
    series: series.map(({ date, sessions: s, visitors, pageviews }) => ({ date, sessions: s, visitors, pageviews })),
    pages: split(total('pageviews'), PAGES, 'pages:' + range),
    sources: split(sessions, SOURCES, 'sources:' + range),
    countries: split(sessions, COUNTRIES, 'countries:' + range),
    devices: split(sessions, DEVICES, 'devices:' + range),
    heatmap: { desktop: heat('desktop', sessions, range), mobile: heat('mobile', sessions, range) },
  };
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  const password = process.env.ANALYTICS_PASSWORD || '';
  if (!password) return res.status(503).json({ error: 'not_configured' });
  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { body = null; }
    }
    const given = body && typeof body.password === 'string' ? body.password : '';
    if (!given || given.length > 200 || !same(given, password)) {
      await wait(600);
      return res.status(401).json({ error: 'wrong_password' });
    }
    return res.status(200).json(tokenFor(password));
  }
  if (req.method !== 'GET') return res.status(405).json({ error: 'method' });
  const bearer = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!tokenOk(password, bearer)) return res.status(401).json({ error: 'signed_out' });
  const range = String((req.query || {}).range) === '30' ? 30 : 7;
  return res.status(200).json(report(range));
};

module.exports.report = report;
