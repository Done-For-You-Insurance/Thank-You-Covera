/*
  Covera makeover prototype. Plain JavaScript, no build step, hash routing.
  Icons are hand-picked Lucide paths (ISC license, lucide.dev). All data below is invented.
*/

const I = {
  today: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9.5 20v-6h5v6"/>',
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  clients: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h6"/><path d="M8 13h8M8 17h5"/>',
  docs: '<path d="M16 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M10 8h4M10 12h4M10 16h2"/><path d="M2 7v12a3 3 0 0 0 3 3h1"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  compare: '<path d="M3 3h7v18H3zM14 3h7v18h-7z"/><path d="M6.5 8h0M17.5 8h0"/>',
  proposal: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>',
  carriers: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  renew: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  x: '<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  spark: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  sparkles: '<path d="M9.94 14.06 8 20l-1.94-5.94L0 12l6.06-1.94L8 4l1.94 6.06L16 12z" transform="translate(2 -1) scale(.85)"/><path d="M19 3v4M17 5h4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  play: '<path d="m6 4 14 8-14 8z"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M17 6l3 3M15 8l2 2"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  more: '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  plug: '<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  shieldCheck: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  wand: '<path d="m15 4 5 5M3 21l12-12M14 3l1 1M20 9l1 1M18 2v2M22 6h-2"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
};

const ic = (name, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${I[name] || ''}</svg>`;

const pill = (kind, text, icon) => {
  const icons = { ok: 'checkCircle', wait: 'clock', bad: 'x', info: 'spark', live: 'play', neutral: 'more' };
  return `<span class="pill ${kind}">${ic(icon || icons[kind])}${text}</span>`;
};

/* ---------------- Invented data ---------------- */

const carriers = [
  { id: 'nfm', name: 'Northfield Mutual', short: 'NM', color: '#1d4f91', lines: ['BOP', 'GL', 'WC', 'Auto'], signin: 'ok', code: 'Email code · quotes@', last: '6 min ago', mapped: 18 },
  { id: 'bsp', name: 'Bluestone Specialty', short: 'BS', color: '#33507a', lines: ['GL', 'E&O', 'Cyber'], signin: 'ok', code: 'No code needed', last: '22 min ago', mapped: 11 },
  { id: 'gsp', name: 'Granite Specialty', short: 'GS', color: '#6b6f76', lines: ['GL', 'Umbrella', 'WC'], signin: 'wait', code: 'Text code · ask a teammate', last: '1 hr ago', mapped: 9 },
  { id: 'mer', name: 'Meridian Casualty', short: 'MC', color: '#8a2942', lines: ['WC', 'Auto'], signin: 'ok', code: 'Email code · care@', last: 'Yesterday', mapped: 14 },
  { id: 'pcr', name: 'Pacific Crest', short: 'PC', color: '#0f7c78', lines: ['BOP', 'Property', 'Flood'], signin: 'bad', code: 'Email code · not found', last: '2 days ago', mapped: 7 },
  { id: 'aur', name: 'Aurora E&S', short: 'AE', color: '#7a4fb3', lines: ['Cyber', 'E&O', 'D&O'], signin: 'ok', code: 'Authenticator', last: '3 hr ago', mapped: 12 },
  { id: 'ced', name: 'Cedar Point', short: 'CP', color: '#2e7d32', lines: ['Home', 'Auto', 'Umbrella'], signin: 'ok', code: 'No code needed', last: '40 min ago', mapped: 16 },
  { id: 'tid', name: 'Tidewater Re', short: 'TR', color: '#b26b00', lines: ['Property', 'Inland marine'], signin: 'off', code: 'Not set up', last: 'Never', mapped: 0 },
];

const clients = [
  { id: 'srf', name: 'Summit Ridge Framing', who: 'Dana Whitfield', type: 'Framing contractor', city: 'Santa Ana, CA', lines: ['WC', 'GL'], stage: 'Quoting', status: ['live', 'Quoting · 2 live'], owner: 'JR', updated: '2 min ago', renew: 'Jan 15' },
  { id: 'hlb', name: 'Harbor Lane Bakery', who: 'Marisol Ortega', type: 'Bakery and café', city: 'Long Beach, CA', lines: ['BOP'], stage: 'Compare', status: ['ok', '4 quotes back'], owner: 'JR', updated: '18 min ago', renew: 'Feb 1' },
  { id: 'qdc', name: 'Quill & Draft Coworking', who: 'Theo Lindqvist', type: 'Coworking space', city: 'Irvine, CA', lines: ['BOP', 'Cyber'], stage: 'Documents', status: ['wait', 'Waiting on client'], owner: 'AM', updated: '1 hr ago', renew: 'Mar 3' },
  { id: 'bvd', name: 'Bayview Dental Studio', who: 'Dr. Priya Nair', type: 'Dental office', city: 'San Diego, CA', lines: ['BOP', 'E&O'], stage: 'Missing info', status: ['wait', '3 fields missing'], owner: 'AM', updated: '3 hr ago', renew: 'Jan 28' },
  { id: 'ogl', name: 'Orchard Glen HOA', who: 'Sam Okafor', type: 'Homeowners association', city: 'Fullerton, CA', lines: ['D&O', 'GL'], stage: 'Proposal', status: ['info', 'Proposal v2 ready'], owner: 'JR', updated: 'Yesterday', renew: 'Dec 20' },
  { id: 'lmx', name: 'Lumen Mobile Detailing', who: 'Kai Fernandes', type: 'Mobile auto detailing', city: 'Anaheim, CA', lines: ['Auto', 'GL'], stage: 'New', status: ['neutral', 'New request'], owner: '—', updated: 'Just now', renew: '—' },
  { id: 'rcf', name: 'Redwood Craft Furniture', who: 'Elena Brooks', type: 'Furniture maker', city: 'Costa Mesa, CA', lines: ['Property', 'WC'], stage: 'Bound', status: ['ok', 'Bound'], owner: 'AM', updated: '2 days ago', renew: 'Nov 2027' },
];

const nav = [
  { group: null, items: [
    { id: 'todo', label: 'To do', icon: 'today', count: 4, hot: true },
    { id: 'assistant', label: 'Assistant', icon: 'sparkles' },
  ]},
  { group: 'Agents', items: [
    { id: 'documents', label: 'Document collection', icon: 'docs', count: 3 },
    { id: 'quoting', label: 'Quoting', icon: 'bolt', count: 2 },
    { id: 'compare', label: 'Quote comparison', icon: 'compare' },
    { id: 'certificates', label: 'Certificates', icon: 'shieldCheck' },
  ]},
  { group: 'Portfolio', items: [
    { id: 'opportunities', label: 'Opportunities', icon: 'layers' },
    { id: 'policies', label: 'Policies', icon: 'file' },
    { id: 'clients', label: 'Clients', icon: 'clients' },
    { id: 'tolink', label: 'To link', icon: 'link', count: 3 },
  ]},
  { group: 'Insights', items: [
    { id: 'activity', label: 'Activity', icon: 'history' },
    { id: 'performance', label: 'Performance', icon: 'sun' },
  ]},
];

/* Detail screens light up their parent in the menu. */
const parentOf = { opportunity: 'quoting', quotes: 'quoting', proposal: 'compare', carriers: 'settings' };

const titles = {
  todo: 'To do', assistant: 'Assistant', documents: 'Document collection', quoting: 'Quoting', opportunity: 'Summit Ridge Framing',
  quotes: 'Carrier portals', compare: 'Quote comparison', proposal: 'Proposal', certificates: 'Certificates', opportunities: 'Opportunities',
  policies: 'Policies', clients: 'Clients', tolink: 'To link', activity: 'Activity', performance: 'Performance', settings: 'Settings', carriers: 'Carriers and portals',
};

const crumbsFor = {
  opportunity: ['Quoting', 'Summit Ridge Framing'],
  quotes: ['Quoting', 'Summit Ridge Framing', 'Carrier portals'],
  compare: ['Quote comparison', 'Harbor Lane Bakery · BOP'],
  proposal: ['Quote comparison', 'Orchard Glen HOA', 'Proposal v2'],
  documents: ['Document collection', 'Quill & Draft Coworking'],
  carriers: ['Settings', 'Carriers and portals'],
};

/* ---------------- Little helpers ---------------- */

const initials = (s) => s.split(/\s|&/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
const logo = (c) => `<span class="carrier-logo" style="background:linear-gradient(160deg,${c.color},${shade(c.color)})">${c.short}</span>`;
function shade(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, (n >> 16) - 40), g = Math.max(0, ((n >> 8) & 255) - 40), b = Math.max(0, (n & 255) - 40);
  return `rgb(${r},${g},${b})`;
}
const spark = (pts, color = '#0b6b47') => {
  const max = Math.max(...pts), min = Math.min(...pts);
  const d = pts.map((p, i) => `${(i / (pts.length - 1)) * 100},${30 - ((p - min) / (max - min || 1)) * 26}`).join(' ');
  return `<svg class="spark" viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="g${color.slice(1)}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".25"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs><polygon points="0,32 ${d} 100,32" fill="url(#g${color.slice(1)})"/><polyline points="${d}" fill="none" stroke="${color}" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>`;
};
const src = (text, derived) => `<button class="src ${derived ? 'derived' : ''}" type="button" title="Show where this came from">${ic(derived ? 'wand' : 'mail')}${text}</button>`;

/* ---------------- Screens ---------------- */

const screens = {};

screens.todo = () => {
  const groups = [
    ['Overdue', 'bad', [
      ['phone', 'Call Dana back about the payroll split', 'Summit Ridge Framing', 'Workers comp', 'Missed call Nov 20 · transcript ready', 'Nov 20', 'Call back'],
      ['key', 'Granite Specialty needs a text code', 'Summit Ridge Framing', 'General liability', 'Sent to the agency phone ending 0142', 'Nov 24', 'Enter code'],
    ]],
    ['Today', 'wait', [
      ['mail', 'Approve 3 document reminders', 'Quill & Draft · Bayview · Lumen', 'Document collection', 'Drafted in your Outlook, not sent', 'Today', 'Review'],
      ['compare', 'Harbor Lane Bakery is ready to compare', 'Harbor Lane Bakery', 'BOP', '4 quotes back, lowest $3,180', 'Today', 'Compare'],
    ]],
    ['This week', 'neutral', [
      ['phone', 'Follow up on the call with Theo', 'Quill & Draft Coworking', 'Cyber', 'Asked about ransomware limits', 'Thu', 'Open'],
      ['phone', 'Follow up on the call with Dr. Nair', 'Bayview Dental Studio', 'E&O', 'Wants E&O added at renewal', 'Thu', 'Open'],
      ['building', 'Finish your agency profile', 'Harbor & Pine Insurance', 'Setup', 'License number and signatory still empty', 'Fri', 'Finish'],
    ]],
  ];
  const go = { 'Call back': 'opportunity', 'Enter code': 'quotes', Review: 'documents', Compare: 'compare', Open: 'opportunity', Finish: 'settings' };
  return `
  <div class="page-head">
    <div>
      <p class="eyebrow">Wednesday, November 25</p>
      <h1>Good evening, Jordan.</h1>
      <p class="lede">Two things are overdue and two are due today. Every task below says who it is for and what is waiting, so you can act without opening it first.</p>
    </div>
    <div class="row">
      <button class="btn" type="button" data-toast="New task">${ic('pen')}New task</button>
      <button class="btn lime" type="button" data-go="opportunity">${ic('play')}Start my next task</button>
    </div>
  </div>

  <section class="grid g-4" aria-label="Right now">
    ${[
      ['Your turn', '7', '2 overdue', [9, 8, 9, 7, 8, 7, 7], 'wait'],
      ['Agents working', '3', 'Quoting · Documents', [1, 2, 2, 3, 2, 4, 3], 'live'],
      ['Quotes back this week', '9', '+4 vs last week', [2, 3, 3, 5, 6, 8, 9], 'ok'],
      ['Time saved, 30 days', '5 h 45', '23 applications', [0, 0, 1, 1, 3, 5, 6], 'ok'],
    ].map(([l, v, d, p]) => `<div class="card"><div class="stat"><span class="label">${l}</span><span class="value">${v}</span><span class="delta">${d}</span></div>${spark(p)}</div>`).join('')}
  </section>

  <section class="grid g-main-side">
    <div class="card flush edge">
      <div class="card-head" style="padding-bottom:12px">
        <div class="seg" role="group" aria-label="Whose tasks"><button aria-pressed="true" type="button">Mine · 7</button><button aria-pressed="false" type="button">Waiting · 0</button><button aria-pressed="false" type="button">Team · 18</button><button aria-pressed="false" type="button">Done</button></div>
        <label class="search" style="max-width:300px">${ic('search')}<span class="sr-only">Search tasks</span><input placeholder="Search or describe a task" /></label>
      </div>
      ${groups.map(([g, k, rows]) => `
        <div style="padding:6px 18px 2px;display:flex;align-items:center;gap:8px;border-top:1px solid var(--hairline);background:rgba(244,247,245,.6)">
          <span class="eyebrow" style="margin:6px 0;color:${k === 'bad' ? 'var(--bad)' : k === 'wait' ? 'var(--wait)' : 'var(--ink-3)'}">${g}</span><span class="small muted">${rows.length}</span>
        </div>
        <div class="list" style="padding:0 12px">
          ${rows.map(([i, t, who, line, ctx, due, act]) => `<div class="list-item" style="padding:12px 6px">
            <span class="tile ${k === 'bad' ? 'lime' : ''}">${ic(i)}</span>
            <div class="grow"><div class="title">${t}</div><div class="meta">${who} · <span class="tag" style="padding:0 6px">${line}</span> · ${ctx}</div></div>
            <span class="small hide-sm" style="color:${k === 'bad' ? 'var(--bad)' : 'var(--ink-3)'};font-weight:600;min-width:52px;text-align:right">${due}</span>
            <button class="btn sm ${k === 'bad' ? 'primary' : ''}" type="button" data-go="${go[act]}">${act}</button>
          </div>`).join('')}
        </div>`).join('')}
    </div>

    <div class="stack">
      <div class="card">
        <div class="card-head"><div><h2>Agents at work</h2><div class="sub">Running in the background</div></div><a class="btn ghost sm" href="#/quotes">See all</a></div>
        <div class="stack">
          ${[
            ['nfm', 'Summit Ridge · WC', 66, 'Filling page 4 of 6', true],
            ['gsp', 'Summit Ridge · GL', 35, 'Waiting for a text code', false],
            ['aur', 'Quill & Draft · Cyber', 82, 'Reading the quote', true],
          ].map(([cid, t, p, s, run]) => {
            const c = carriers.find((x) => x.id === cid);
            return `<div class="row" style="flex-wrap:nowrap">${logo(c)}<div style="flex:1;min-width:0"><div class="row between" style="flex-wrap:nowrap"><b class="small" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.name}</b><span class="small muted">${p}%</span></div><div class="small muted">${t} · ${s}</div><div class="bar ${run ? 'running' : ''}" style="margin-top:6px"><i style="width:${p}%"></i></div></div></div>`;
          }).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h2>Pipeline</h2><a class="btn ghost sm" href="#/opportunities">Opportunities</a></div>
        <div class="list small">
          ${[['Gathering documents', 3, 30], ['To quote', 8, 80], ['Quoted', 2, 20], ['Proposal out', 1, 10]].map(([l, n, w]) => `<div class="list-item" style="padding:9px 0"><span class="grow">${l}</span><div class="bar" style="width:90px"><i style="width:${w}%"></i></div><b style="width:22px;text-align:right">${n}</b></div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
};

screens.assistant = () => `
  <div class="page-head">
    <div><p class="eyebrow">Your agency's assistant</p><h1>What can I look into for you?</h1><p class="lede">Ask about a client, a policy or a quote, or drop in a document. Every answer quotes the page it rests on.</p></div>
    <button class="btn" type="button" data-toast="New conversation">${ic('pen')}New conversation</button>
  </div>
  <section class="card edge" style="padding:22px">
    <form class="composer" style="padding:12px 12px 12px 18px;border-radius:22px" onsubmit="event.preventDefault();document.querySelector('[data-open=assistant]').click()">
      <label class="sr-only" for="bigAsk">Ask</label>
      <textarea id="bigAsk" rows="2" placeholder="Try: does the Northfield BOP for Harbor Lane cover spoilage?"></textarea>
      <button class="btn lime" type="submit">${ic('arrow')}Ask</button>
    </form>
    <div class="row small muted" style="margin-top:10px;gap:14px"><span>${ic('paperclip', 'width="14" height="14" style="vertical-align:-2px"')} Attach a file</span><span>@ a client</span><span>/ a skill</span><span style="margin-left:auto">Uses: Covera documents, Outlook, HawkSoft</span></div>
  </section>
  <section class="grid g-3">
    ${[
      ['checkCircle', 'Review a certificate', 'Checks every field against the policy behind it and flags E&O exposure.'],
      ['building', 'Compare a lease to a policy', 'Marks each lease requirement Met, Partial or Failed, with the endorsement that closes it.'],
      ['alert', 'Find coverage gaps', 'Limit changes, exclusions worth buying back, lines to add, claim scenarios.'],
      ['compare', 'Compare quotes and policies', 'Coverages, deductibles and premiums side by side, then the client document.'],
      ['shieldCheck', 'Ask a policy question', 'Each answer quotes the policy language it rests on.'],
      ['wand', 'Teach a skill', 'Record your procedure once; Covera runs it on every request of the same kind.'],
    ].map(([i, t, d]) => `<button class="card" type="button" style="text-align:left;cursor:pointer;font:inherit" data-open="assistant"><span class="tile" style="margin-bottom:12px">${ic(i)}</span><h3 style="font-size:15px">${t}</h3><p class="small muted" style="margin:6px 0 0">${d}</p></button>`).join('')}
  </section>
  <section class="card">
    <div class="card-head"><h2>Recent conversations</h2></div>
    <div class="list">
      ${[['Carrier portal sign-in and codes', 'Yesterday'], ['Is spoilage included in the Cedar Point BOP?', 'Nov 22'], ['Lease review: Quill & Draft, 2nd floor', 'Nov 19']].map(([t, d]) => `<div class="list-item"><span class="tile">${ic('sparkles')}</span><div class="grow"><div class="title">${t}</div></div><span class="small muted">${d}</span></div>`).join('')}
    </div>
  </section>
`;

screens.quoting = () => `
  <div class="page-head">
    <div><p class="eyebrow">Agent</p><h1>Quoting</h1><p class="lede">Every quote request, from application to premium. Covera fills the carrier portals; you decide what gets submitted.</p></div>
    <div class="row"><button class="icon-btn" type="button" aria-label="Quoting settings" data-go="settings">${ic('settings')}</button><button class="btn primary" type="button" data-toast="Paste an email, drop a file, or start blank">${ic('bolt')}New quote</button></div>
  </div>
  <section class="card flush">
    <div class="toolbar" style="padding:14px 16px">
      <div class="seg" role="group" aria-label="Stage"><button aria-pressed="true" type="button">Open · 22</button><button aria-pressed="false" type="button">To quote · 20</button><button aria-pressed="false" type="button">Quoted · 2</button><button aria-pressed="false" type="button">Bound</button><button aria-pressed="false" type="button">Archived</button></div>
      <span style="flex:1"></span>
      <label class="search">${ic('search')}<span class="sr-only">Search</span><input placeholder="Search or describe: GL quotes from this week" /></label>
      <div class="seg hide-sm" role="group" aria-label="Layout"><button aria-pressed="true" type="button">Table</button><button aria-pressed="false" type="button">Board</button></div>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Client</th><th>Line</th><th>Carriers</th><th>Where it stands</th><th class="hide-sm">Created</th><th class="hide-sm">Owner</th><th></th></tr></thead>
      <tbody>
        ${[
          ['Summit Ridge Framing', 'Workers comp', ['nfm', 'mer', 'gsp'], ['live', '2 portals running'], 'Nov 25', 'JR'],
          ['Summit Ridge Framing', 'General liability', ['gsp'], ['wait', 'Needs a code'], 'Nov 25', 'JR'],
          ['Harbor Lane Bakery', 'BOP', ['nfm', 'ced', 'pcr', 'bsp'], ['ok', '4 quotes back'], 'Nov 21', 'JR'],
          ['Bayview Dental Studio', 'E&O', [], ['wait', '3 facts missing'], 'Nov 20', 'AM'],
          ['Lumen Mobile Detailing', 'Commercial auto', [], ['neutral', 'Ready to quote'], 'Nov 25', '—'],
          ['Orchard Glen HOA', 'D&O', ['nfm', 'bsp', 'aur'], ['info', 'Proposal sent'], 'Nov 14', 'JR'],
        ].map(([n, l, cs, st, d, o]) => `<tr>
          <td><a class="who" href="#/opportunity" style="text-decoration:none;color:inherit"><span class="ini">${initials(n)}</span><b>${n}</b></a></td>
          <td>${l}</td>
          <td>${cs.length ? `<div class="row" style="gap:0">${cs.map((id, i) => { const c = carriers.find((x) => x.id === id); return `<span title="${c.name}" class="carrier-logo" style="width:26px;height:26px;font-size:9px;border-radius:8px;margin-left:${i ? -6 : 0}px;border:2px solid #fff;background:linear-gradient(160deg,${c.color},${shade(c.color)})">${c.short}</span>`; }).join('')}<span class="small muted" style="margin-left:6px">${cs.length}</span></div>` : '<span class="muted small">Not started</span>'}</td>
          <td>${pill(st[0], st[1])}</td>
          <td class="hide-sm muted">${d}</td>
          <td class="hide-sm"><span class="avatar" style="width:26px;height:26px;font-size:10.5px">${o}</span></td>
          <td class="num"><a class="btn sm ghost" href="#/opportunity">Open ${ic('arrow')}</a></td></tr>`).join('')}
      </tbody>
    </table></div>
  </section>
`;

screens.certificates = () => `
  <div class="page-head">
    <div><p class="eyebrow">Agent</p><h1>Certificates</h1><p class="lede">Certificates of insurance, built from the declarations page of a policy in force.</p></div>
    <button class="btn primary" type="button" data-toast="Drop a declarations page to start">${ic('shieldCheck')}New certificate</button>
  </div>
  <section class="card edge" style="padding:34px">
    <div class="grid g-3" style="align-items:start">
      ${[['upload', '1. Drop the declarations page', 'PDF or photo of a policy in force.'], ['file', '2. Covera builds the record', 'Every value shows the line of the page it came from.'], ['shieldCheck', '3. Name the holder', 'Add the certificate holder and download the ACORD 25.']]
        .map(([i, t, d]) => `<div class="stack" style="gap:6px"><span class="tile lime">${ic(i)}</span><h3 style="font-size:15px;margin-top:6px">${t}</h3><p class="small muted" style="margin:0">${d}</p></div>`).join('')}
    </div>
    <div class="empty" style="margin-top:26px">${ic('upload', 'width="26" height="26"')}<b style="color:var(--ink)">Drop a declarations page here</b><span class="small">or <a href="#/certificates">choose a file</a> · PDF, PNG or JPG</span></div>
  </section>
`;

screens.opportunities = () => `
  <div class="page-head">
    <div><p class="eyebrow">Portfolio</p><h1>Opportunities</h1><p class="lede">New business, renewals and cross-sales, with the last message and what each one is waiting on.</p></div>
    <button class="btn primary" type="button" data-toast="New opportunity">${ic('layers')}New opportunity</button>
  </div>
  <section class="card" style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--wait-bg);border-color:var(--wait-line)">
    <span class="tile" style="background:#fff">${ic('alert')}</span>
    <div class="grow" style="flex:1"><b>2 likely duplicates.</b> <span class="small" style="color:var(--ink-2)">Summit Ridge Framing has two open GL opportunities from the same email.</span></div>
    <button class="btn sm" type="button" data-toast="Side-by-side merge opened">Review</button>
  </section>
  <section class="card flush">
    <div class="toolbar" style="padding:14px 16px">
      <div class="seg" role="group" aria-label="Status"><button aria-pressed="true" type="button">Open · 24</button><button aria-pressed="false" type="button">Won</button><button aria-pressed="false" type="button">Lost</button></div>
      <span style="flex:1"></span>
      <label class="search">${ic('search')}<span class="sr-only">Search</span><input placeholder="Search or describe: deals won this month" /></label>
      <button class="btn sm" type="button">${ic('filter')}Filters</button>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Client</th><th>Line</th><th class="hide-sm">Kind</th><th>Waiting on</th><th class="hide-sm">Last message</th><th class="hide-sm">Owner</th></tr></thead>
      <tbody>
        ${clients.map((c) => `<tr><td><a class="who" href="#/opportunity" style="text-decoration:none;color:inherit"><span class="ini">${initials(c.name)}</span><span><b>${c.name}</b><span>${c.who}</span></span></a></td>
          <td><div class="row" style="gap:4px">${c.lines.map((l) => `<span class="tag">${l}</span>`).join('')}</div></td>
          <td class="hide-sm muted">${c.stage === 'Bound' ? 'Renewal' : 'New business'}</td>
          <td>${pill(c.status[0], c.status[1])}</td>
          <td class="hide-sm small"><span class="row" style="gap:6px">${ic('mail', 'width="14" height="14" style="color:var(--ink-3)"')}${c.updated}</span></td>
          <td class="hide-sm"><span class="avatar" style="width:26px;height:26px;font-size:10.5px">${c.owner}</span></td></tr>`).join('')}
      </tbody>
    </table></div>
  </section>
`;

screens.activity = () => `
  <div class="page-head">
    <div><p class="eyebrow">Insights</p><h1>Activity</h1><p class="lede">What your agents did, on which file, and what changed because of it.</p></div>
    <div class="seg" role="group" aria-label="Kind"><button aria-pressed="true" type="button">Agents</button><button aria-pressed="false" type="button">Automations</button><button aria-pressed="false" type="button">Emails</button></div>
  </div>
  <section class="card">
    ${[
      ['Today', [
        ['9:42 PM', 'bolt', 'Quoting', 'Summit Ridge Framing · WC', 'Meridian quoted $18,240 a year', 'ok', 'Quoted'],
        ['9:33 PM', 'bolt', 'Quoting', 'Summit Ridge Framing · GL', 'Bluestone declined: roofing over 3 stories', 'bad', 'Declined'],
        ['8:10 PM', 'docs', 'Document collection', 'Quill & Draft Coworking', 'Read payroll-2026.pdf, filled 6 facts', 'ok', 'Done'],
      ]],
      ['Monday, November 23', [
        ['4:02 PM', 'compare', 'Quote comparison', 'Harbor Lane Bakery · BOP', 'Compared 4 quotes, flagged 2 differences', 'ok', 'Done'],
        ['8:37 AM', 'mail', 'Email triage', 'Lumen Mobile Detailing', 'New request found, no matching client', 'wait', 'To link'],
      ]],
    ].map(([day, rows]) => `<p class="eyebrow" style="margin:6px 0 4px;color:var(--ink-3)">${day}</p><div class="list" style="margin-bottom:12px">${rows.map(([t, i, a, on, what, k, s]) => `<div class="list-item"><span class="small muted" style="width:64px;font-variant-numeric:tabular-nums">${t}</span><span class="tile">${ic(i)}</span><div class="grow"><div class="title">${what}</div><div class="meta">${a} · ${on}</div></div>${pill(k, s)}</div>`).join('')}</div>`).join('')}
  </section>
`;

screens.performance = () => `
  <div class="page-head">
    <div><p class="eyebrow">Insights · last 30 days</p><h1>Performance</h1><p class="lede">What your agents produced and the time they gave back.</p></div>
    <div class="seg" role="group" aria-label="Period"><button aria-pressed="false" type="button">7 days</button><button aria-pressed="true" type="button">30 days</button><button aria-pressed="false" type="button">Quarter</button></div>
  </div>
  <section class="grid g-4">
    ${[['Time saved', '5 h 45 min', 'about 15 min per application'], ['Applications prepared', '23', 'ready for carrier portals'], ['Quotes back', '31', 'from 9 carriers'], ['Cases closed', '6', 'all documents in']].map(([l, v, d]) => `<div class="card"><div class="stat"><span class="label">${l}</span><span class="value">${v}</span><span class="delta" style="color:var(--ink-3)">${d}</span></div></div>`).join('')}
  </section>
  <section class="grid g-main-side">
    <div class="card">
      <div class="card-head"><div><h2>Time saved by agent</h2><div class="sub">Hours per week</div></div><div class="row small"><span class="row" style="gap:6px"><i style="width:10px;height:10px;border-radius:3px;background:var(--forest-700)"></i>Quoting</span><span class="row" style="gap:6px"><i style="width:10px;height:10px;border-radius:3px;background:var(--lime-deep)"></i>Documents</span><span class="row" style="gap:6px"><i style="width:10px;height:10px;border-radius:3px;background:#9bb8aa"></i>Comparison</span></div></div>
      <svg viewBox="0 0 400 180" width="100%" height="220" role="img" aria-label="Hours saved per week, rising from 0.4 to 2.6">
        ${[0, 45, 90, 135].map((y) => `<line x1="30" x2="395" y1="${y + 10}" y2="${y + 10}" stroke="rgba(11,53,38,.08)"/>`).join('')}
        ${[[0.3, 0.1, 0], [0.6, 0.2, 0.1], [1.1, 0.4, 0.2], [1.6, 0.6, 0.4]].map((v, i) => {
          const x = 60 + i * 90; let y = 145; const cols = ['#0b6b47', '#8fcf2e', '#9bb8aa'];
          return v.map((h, j) => { const ht = h * 48; y -= ht; return `<rect x="${x}" y="${y}" width="44" height="${ht}" rx="${j === v.length - 1 || v[j + 1] === 0 ? 6 : 0}" fill="${cols[j]}"/>`; }).join('') + `<text x="${x + 22}" y="168" text-anchor="middle" font-size="11" fill="#5e6e64">Week ${i + 1}</text>`;
        }).join('')}
      </svg>
    </div>
    <div class="card">
      <div class="card-head"><h2>By agent</h2></div>
      <div class="list">
        ${[['bolt', 'Quoting', '23 applications', '5 h 45'], ['docs', 'Document collection', '6 cases', '1 h 10'], ['compare', 'Quote comparison', '2 comparisons', '40 min']].map(([i, a, n, t]) => `<div class="list-item"><span class="tile">${ic(i)}</span><div class="grow"><div class="title">${a}</div><div class="meta">${n}</div></div><b>${t}</b></div>`).join('')}
      </div>
    </div>
  </section>
`;

screens.tolink = () => `
  <div class="page-head">
    <div><p class="eyebrow">Read from quotes@ and care@ · last pass 9:36 PM</p><h1>To link</h1>
    <p class="lede">Emails and files Covera could not tie to a client with proof. Nothing is guessed: see what it read, then choose.</p></div>
    <div class="row"><div class="seg" role="group" aria-label="Filter"><button aria-pressed="true" type="button">All · 3</button><button aria-pressed="false" type="button">Client proposed</button><button aria-pressed="false" type="button">No client found</button><button aria-pressed="false" type="button">Files</button></div></div>
  </div>
  <section class="grid g-side-main">
    <div class="card flush">
      <div class="list" style="padding:6px 10px">
        ${[
          ['Lumen Mobile Detailing', 'Need auto + liability for 3 vans', 'Just now', true],
          ['Summit Ridge Framing', 'Quote request: workers comp and GL', '2 h', false],
          ['Bayview Dental Studio', 'Renewal BOP, adding E&O this year', '5 h', false],
          ['newsletter@carrierweekly', 'November appetite update', '6 h', false],
        ].map(([f, s, t, sel], i) => `<div class="list-item" style="border-radius:12px;padding:12px;${sel ? 'background:var(--accent-soft);' : ''}">
          <span class="who"><span class="ini">${initials(f)}</span></span>
          <div class="grow"><div class="row between" style="flex-wrap:nowrap"><span class="title">${f}</span><span class="small muted">${t}</span></div><div class="meta" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s}</div>
          <div style="margin-top:6px">${i === 3 ? pill('neutral', 'Not a request') : pill('live', 'Quote request', 'sparkles')}</div></div></div>`).join('')}
      </div>
    </div>

    <div class="grid g-2" style="align-items:start">
      <div class="card">
        <div class="card-head"><h2>The email</h2><span class="tag">${ic('paperclip')}vehicle-list.pdf</span></div>
        <dl class="email-head"><dt>From</dt><dd>Kai Fernandes</dd><dt>Subject</dt><dd>Need auto + liability for 3 vans</dd></dl>
        <div class="email">
          <p>Hi there,</p>
          <p>I run <mark>Lumen Mobile Detailing</mark> out of Anaheim. We have <mark>3 vans</mark> and <mark>4 employees</mark>, and we need <mark>commercial auto and general liability</mark> starting <mark>January 1</mark>.</p>
          <p>Revenue last year was about <mark>$380,000</mark>. Vehicle list attached. No claims in the last 3 years.</p>
          <p>Thanks,<br />Kai</p>
        </div>
      </div>
      <div class="stack">
        <div class="card edge">
          <div class="card-head"><div><h2>What Covera understood</h2><div class="sub">Highlighted words in the email are the source for each fact.</div></div></div>
          <div class="fields" style="grid-template-columns:1fr">
            <div class="field"><div class="lab">Business ${src('Email')}</div><div class="val">Lumen Mobile Detailing</div></div>
            <div class="field"><div class="lab">Lines ${src('Email')}</div><div class="val row"><span class="tag">Commercial auto</span><span class="tag">General liability</span></div></div>
            <div class="field"><div class="lab">Vehicles ${src('vehicle-list.pdf')}</div><div class="val">3 vans · 2021 to 2024</div></div>
            <div class="field"><div class="lab">Effective date ${src('Email')}</div><div class="val">Jan 1, 2027</div></div>
            <div class="field missing"><div class="lab">Drivers and license numbers</div><div class="val">Not in the email. Covera will ask.</div></div>
          </div>
        </div>
        <div class="card">
          <div class="row between"><div><b>No client holds this address.</b><div class="small muted">Closest: Lumen Labs, different email and city. Not linked.</div></div></div>
          <div class="row" style="margin-top:12px">
            <button class="btn primary" type="button" data-toast="Client and 2 opportunities created">${ic('check')}Create client and quote</button>
            <button class="btn" type="button" data-toast="Pick a client">${ic('link')}Link to a client</button>
            <button class="btn ghost" type="button" data-toast="Dismissed">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

screens.clients = () => `
  <div class="page-head">
    <div><p class="eyebrow">Book of business</p><h1>Clients</h1><p class="lede">Everyone you are quoting or protecting, with where each file stands right now.</p></div>
    <button class="btn primary" type="button" data-open="newRequest">${ic('clients')}Add client</button>
  </div>
  <section class="card flush">
    <div class="toolbar" style="padding:14px 16px">
      <label class="search">${ic('search')}<span class="sr-only">Search clients</span><input placeholder="Search by business, contact, email or phone" /></label>
      <div class="seg" role="group" aria-label="Stage"><button aria-pressed="true" type="button">All · 7</button><button aria-pressed="false" type="button">In progress</button><button aria-pressed="false" type="button">Needs me</button><button aria-pressed="false" type="button">Bound</button></div>
      <span class="spacer" style="flex:1"></span>
      <button class="btn sm" type="button">${ic('filter')}Filters</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Client</th><th>Lines</th><th>Where it stands</th><th class="hide-sm">Renews</th><th class="hide-sm">Owner</th><th class="hide-sm">Updated</th><th></th></tr></thead>
        <tbody>
          ${clients.map((c) => `<tr>
            <td><a class="who" href="#/opportunity" style="text-decoration:none;color:inherit"><span class="ini">${initials(c.name)}</span><span><b>${c.name}</b><span>${c.type} · ${c.city}</span></span></a></td>
            <td><div class="row" style="gap:4px">${c.lines.map((l) => `<span class="tag">${l}</span>`).join('')}</div></td>
            <td>${pill(c.status[0], c.status[1])}</td>
            <td class="hide-sm">${c.renew}</td>
            <td class="hide-sm"><span class="avatar" style="width:26px;height:26px;font-size:10.5px">${c.owner}</span></td>
            <td class="hide-sm muted">${c.updated}</td>
            <td class="num"><button class="icon-btn" type="button" aria-label="More for ${c.name}">${ic('more')}</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>
`;

screens.opportunity = () => `
  <div class="page-head">
    <div>
      <p class="eyebrow">Framing contractor · Santa Ana, CA · from an email 2 h ago</p>
      <h1>Summit Ridge Framing</h1>
      <div class="row" style="margin-top:10px">${pill('live', 'Quoting · 2 carriers live')}<span class="tag">Workers comp</span><span class="tag">General liability</span><span class="tag">${ic('calendar')}Effective Jan 15</span></div>
    </div>
    <div class="row">
      <button class="btn" type="button" data-open="assistant">${ic('sparkles')}Ask about this file</button>
      <button class="btn primary" type="button" data-go="quotes">${ic('bolt')}Carrier portals</button>
    </div>
  </div>

  <nav class="tabs" role="tablist" aria-label="Opportunity sections" style="margin:-4px 4px 0">
    <button role="tab" aria-selected="true" type="button">Information</button><button role="tab" aria-selected="false" type="button">Forms</button><button role="tab" aria-selected="false" type="button" data-go="quotes">Carrier portals <span class="pill live" style="height:20px;margin-left:4px">2 live</span></button><button role="tab" aria-selected="false" type="button" data-go="quotes">Quotes 1</button><button role="tab" aria-selected="false" type="button" data-go="documents">Documents 3</button>
  </nav>
  <section class="card" style="display:flex;align-items:center;gap:12px;padding:12px 16px">
    <span class="tile">${ic('plug')}</span>
    <div style="flex:1;min-width:0"><b>Not in HawkSoft yet.</b> <span class="small muted">HawkSoft needs the contact's first and last name in separate fields.</span></div>
    <button class="btn sm" type="button" data-toast="Two name fields opened">Add the names</button>
  </section>
  <section class="card">
    <div class="stepper" aria-label="Progress">
      ${[['Request', 'done', 'mail'], ['Facts', 'done', 'file'], ['Documents', 'done', 'docs'], ['Quote', 'now', 'bolt'], ['Compare', '', 'compare'], ['Propose', '', 'proposal']]
        .map(([l, s, i]) => `<div class="step ${s}"><span class="bubble">${s === 'done' ? ic('check') : ic(i)}</span>${l}</div>`).join('')}
    </div>
  </section>

  <section class="grid g-main-side">
    <div class="stack">
      <div class="card edge">
        <div class="card-head"><div><h2>Application facts</h2><div class="sub">22 of 23 filled. Every value shows where it came from. Nothing is guessed.</div></div>
          <div class="seg" role="group" aria-label="Filter facts"><button aria-pressed="true" type="button">All 23</button><button aria-pressed="false" type="button">To fill 1</button><button aria-pressed="false" type="button">Verified 22</button></div>
        </div>
        <div class="fields">
          <div class="field"><div class="lab">Legal name ${src('Email')}</div><div class="val">Summit Ridge Framing &amp; Drywall Inc</div></div>
          <div class="field"><div class="lab">Entity ${src('From the name', true)}</div><div class="val">Corporation</div></div>
          <div class="field"><div class="lab">Address ${src('Email')}</div><div class="val">410 Sample Street, Santa Ana, CA 92701</div></div>
          <div class="field"><div class="lab">Years in business ${src('Website')}</div><div class="val">11</div></div>
          <div class="field"><div class="lab">Employees ${src('payroll.pdf')}</div><div class="val">9 full time · 2 part time</div></div>
          <div class="field"><div class="lab">Annual revenue ${src('Email')}</div><div class="val">$1,400,000</div></div>
          <div class="field flagged"><div class="lab">Annual payroll ${src('Email')}</div><div class="val">$510,000</div><div class="small muted" style="margin-top:4px">"annual payroll is about $510,000"</div></div>
          <div class="field missing"><div class="lab">${ic('alert', 'width="13" height="13"')}Payroll by class code</div><div class="val">Needed by Northfield and Meridian</div><button class="btn sm" type="button" style="margin-top:8px" data-toast="Field ready to type">Add it</button></div>
          <div class="field"><div class="lab">Subcontractors ${src('Email')}</div><div class="val">None</div></div>
          <div class="field"><div class="lab">Claims, last 5 years ${src('Email')}</div><div class="val">None reported</div></div>
        </div>
      </div>

      <div class="card">
        <div class="card-head"><div><h2>Underwriting statements, word for word</h2><div class="sub">Shown as written. Never turned into a yes or no for you.</div></div></div>
        <div class="stack small" style="color:var(--ink-2)">
          <div class="field">"We mostly do ground-level work. Some second-story framing on residential jobs."</div>
          <div class="field">"We do not use subcontractors."</div>
        </div>
      </div>
    </div>

    <div class="stack">
      <div class="card">
        <div class="card-head"><h2>Ready to quote?</h2>${pill('wait', '1 to go')}</div>
        <div class="stack small">
          <div class="row between"><span>Required facts</span><b>22 / 23</b></div>
          <div class="bar"><i style="width:95%"></i></div>
          <div class="row between"><span>Documents</span><b>3 / 3</b></div>
          <div class="bar"><i style="width:100%"></i></div>
          <div class="row between"><span>Carriers that fit</span><b>4 of 6</b></div>
          <div class="bar"><i style="width:66%"></i></div>
        </div>
        <button class="btn primary" type="button" style="width:100%;margin-top:14px" data-go="quotes">${ic('bolt')}Quote the 4 that fit</button>
        <p class="small muted" style="margin:8px 0 0">Covera fills the portals and stops before submit. You review every quote.</p>
      </div>
      <div class="card">
        <div class="card-head"><h2>Sources</h2><span class="small muted">4</span></div>
        <div class="list">
          ${[['mail', 'Quote request email', '2 h ago'], ['paperclip', 'payroll-summary.pdf', '1 page'], ['paperclip', 'loss-runs-2022-2026.pdf', '5 pages'], ['link', 'summitridgeframing.com', 'Read today']]
            .map(([i, t, m]) => `<div class="list-item"><span class="tile">${ic(i)}</span><div class="grow"><div class="title">${t}</div><div class="meta">${m}</div></div><button class="icon-btn" type="button" aria-label="Open ${t}">${ic('eye')}</button></div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h2>Activity</h2></div>
        <div class="list small">
          ${[['Northfield run reached page 4', '2 min'], ['Bluestone declined: roofing over 3 stories', '9 min'], ['Payroll read from payroll-summary.pdf', '1 h'], ['File started from email', '2 h']]
            .map(([t, m]) => `<div class="list-item"><span class="dot-live" style="animation:none;background:var(--forest-700)"></span><div class="grow">${t}</div><span class="muted">${m}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </section>
`;

screens.quotes = () => {
  const runs = [
    ['nfm', 'live', 'Running', 66, 'Filling page 4 of 6: Payroll and classes', null],
    ['gsp', 'wait', 'Needs a code', 35, 'Text code sent to the agency phone', 'Enter code'],
    ['mer', 'ok', 'Quoted', 100, 'Quote #MC-88213 saved', '$18,240 / yr'],
    ['bsp', 'bad', 'Declined', 100, 'Roofing over 3 stories is outside appetite', null],
    ['pcr', 'bad', 'Sign-in failed', 0, 'The emailed code never arrived. Check the mailbox picked for this carrier.', 'Fix sign-in'],
    ['aur', 'neutral', 'Skipped', 0, 'Aurora does not write workers comp', null],
  ];
  return `
  <div class="page-head">
    <div><p class="eyebrow">Summit Ridge Framing · Workers comp + GL</p><h1>Carrier portals</h1><p class="lede">Each portal runs side by side in the background. Covera fills it and stops before submit; you can watch every step.</p></div>
    <div class="row"><button class="btn" type="button" data-go="opportunity">${ic('file')}Back to the file</button><button class="btn primary" type="button" data-go="compare" ${''}>${ic('compare')}Compare what's back</button></div>
  </div>
  <section class="grid g-4">
    ${[['Running', '1', 'live'], ['Needs you', '2', 'wait'], ['Quoted', '1', 'ok'], ['Declined or skipped', '2', 'neutral']].map(([l, v, k]) => `<div class="card"><div class="stat"><span class="label">${l}</span><span class="value">${v}</span></div><div style="margin-top:6px">${pill(k, l)}</div></div>`).join('')}
  </section>
  <section class="grid g-3">
    ${runs.map(([cid, k, label, p, note, action]) => {
      const c = carriers.find((x) => x.id === cid);
      return `<div class="card ${k === 'live' ? 'edge' : ''}">
        <div class="row between" style="flex-wrap:nowrap"><div class="row" style="flex-wrap:nowrap">${logo(c)}<div><b>${c.name}</b><div class="small muted">${c.lines.slice(0, 3).join(' · ')}</div></div></div>${pill(k, label)}</div>
        <div class="bar ${k === 'live' ? 'running' : ''}" style="margin:14px 0 10px"><i style="width:${p}%"></i></div>
        <p class="small" style="margin:0;color:var(--ink-2);min-height:40px">${note}</p>
        <div class="row between" style="margin-top:12px">
          ${k === 'ok' ? `<span class="premium">${action}</span><button class="btn sm" type="button">${ic('eye')}View quote</button>` : action ? `<button class="btn sm ${k === 'wait' ? 'lime' : ''}" type="button" data-toast="${action}">${action}</button><button class="btn sm ghost" type="button">Watch live</button>` : `<button class="btn sm ghost" type="button">${ic('history')}See steps</button>`}
        </div>
      </div>`;
    }).join('')}
  </section>
  <section class="card">
    <div class="card-head"><div><h2>Northfield Mutual, step by step</h2><div class="sub">A plain-language log of what the agent did in the portal</div></div>${pill('live', 'Live')}</div>
    <div class="list small">
      ${[['Signed in with the agency login', '9:41:02', 'ok'], ['Read the email code from quotes@ (arrived in 14 s)', '9:41:19', 'ok'], ['Started a new workers comp submission', '9:41:33', 'ok'], ['Filled business details, 12 fields', '9:42:10', 'ok'], ['Filled locations, 1 field', '9:42:31', 'ok'], ['Filling payroll and classes', 'now', 'live']]
        .map(([t, m, k]) => `<div class="list-item">${pill(k, k === 'live' ? 'Now' : 'Done')}<div class="grow">${t}</div><span class="muted" style="font-variant-numeric:tabular-nums">${m}</span></div>`).join('')}
    </div>
  </section>`;
};

screens.compare = () => {
  const offers = [
    { c: 'nfm', prem: '$3,412', best: true, rows: ['$1,000,000', '$2,000,000', '$250,000', '$1,000', 'Included', 'Included', 'A+ (Superior)'] },
    { c: 'ced', prem: '$3,180', rows: ['$1,000,000', '$2,000,000', '$150,000', '$2,500', 'Included', '+ $210', 'A (Excellent)'] },
    { c: 'pcr', prem: '$3,905', rows: ['$1,000,000', '$2,000,000', '$300,000', '$1,000', 'Included', 'Included', 'A (Excellent)'] },
    { c: 'bsp', prem: '$4,260', rows: ['$2,000,000', '$4,000,000', '$250,000', '$500', 'Not offered', 'Included', 'A- (Excellent)'] },
  ];
  const labels = ['Each occurrence', 'General aggregate', 'Business personal property', 'Property deductible', 'Equipment breakdown', 'Spoilage', 'Financial strength'];
  return `
  <div class="page-head">
    <div><p class="eyebrow">Harbor Lane Bakery · Business owners policy</p><h1>Compare 4 quotes</h1><p class="lede">Same coverage lined up row by row. Differences are highlighted; every cell links to the page of the quote it came from.</p></div>
    <div class="row"><div class="seg" role="group" aria-label="Rows"><button aria-pressed="false" type="button">All rows</button><button aria-pressed="true" type="button">Differences only</button></div><button class="btn primary" type="button" data-go="proposal">${ic('proposal')}Build proposal</button></div>
  </div>
  <section class="card flush">
    <div class="table-wrap">
      <table class="compare">
        <thead><tr><th>Coverage</th>${offers.map((o) => { const c = carriers.find((x) => x.id === o.c); return `<th style="text-transform:none;letter-spacing:0;font-size:13px;color:var(--ink)" class="${o.best ? 'best' : ''}"><div class="row" style="flex-wrap:nowrap">${logo(c)}<span>${c.name}${o.best ? `<br />${pill('live', 'Best fit', 'sparkles')}` : ''}</span></div></th>`; }).join('')}</tr></thead>
        <tbody>
          <tr><td>Annual premium</td>${offers.map((o) => `<td class="${o.best ? 'best' : ''}"><span class="premium">${o.prem}</span></td>`).join('')}</tr>
          <tr class="section"><td colspan="5">Liability</td></tr>
          ${labels.slice(0, 2).map((l, i) => `<tr><td>${l}</td>${offers.map((o) => `<td class="${o.best ? 'best' : ''}">${o.rows[i]}</td>`).join('')}</tr>`).join('')}
          <tr class="section"><td colspan="5">Property</td></tr>
          ${labels.slice(2, 6).map((l, j) => { const i = j + 2; return `<tr><td>${l}</td>${offers.map((o) => `<td class="${o.best ? 'best' : ''}">${o.rows[i] === 'Not offered' ? pill('bad', 'Not offered') : o.rows[i].startsWith('+') ? pill('wait', o.rows[i] + ' extra', 'alert') : o.rows[i]}</td>`).join('')}</tr>`; }).join('')}
          <tr class="section"><td colspan="5">Carrier</td></tr>
          <tr><td>${labels[6]}</td>${offers.map((o) => `<td class="${o.best ? 'best' : ''}">${o.rows[6]}</td>`).join('')}</tr>
        </tbody>
      </table>
    </div>
  </section>
  <section class="grid g-2">
    <div class="card"><div class="card-head"><h2>${ic('sparkles', 'width="16" height="16" style="vertical-align:-3px;color:var(--forest-700)"')} Covera's read</h2></div><p style="margin:0;color:var(--ink-2)">Cedar Point is $232 cheaper, but its $150,000 property limit is below the $220,000 of equipment and inventory listed in the application, and spoilage costs extra. For a bakery, Northfield is the better fit at $3,412.</p><div class="row" style="margin-top:10px">${src('Application, page 2')}${src('Cedar Point quote, page 3')}</div></div>
    <div class="card"><div class="card-head"><h2>Before you present</h2></div><div class="list small">
      <div class="list-item">${pill('ok', 'Checked')}<div class="grow">All 4 quotes use the same effective date</div></div>
      <div class="list-item">${pill('wait', 'Look')}<div class="grow">Bluestone lists the deductible per location, the others per claim</div></div>
      <div class="list-item">${pill('ok', 'Checked')}<div class="grow">No quote expires before Dec 20</div></div>
    </div></div>
  </section>`;
};

screens.proposal = () => `
  <div class="page-head">
    <div><p class="eyebrow">Orchard Glen HOA · D&amp;O + General liability</p><h1>Proposal v2</h1><p class="lede">Built from the comparison, frozen to this version. Edit the words, not the numbers: numbers stay tied to the quotes.</p></div>
    <div class="row"><button class="btn" type="button">${ic('history')}Version history</button><button class="btn" type="button">${ic('download')}PDF</button><button class="btn primary" type="button" data-toast="Saved as an email draft. Nothing sent.">${ic('send')}Draft the email</button></div>
  </div>
  <section class="grid g-main-side">
    <div class="card" style="padding:0;overflow:hidden">
      <div style="background:linear-gradient(135deg,#0b3526,#0b6b47);color:#fff;padding:28px 32px;position:relative;overflow:hidden">
        <div style="position:absolute;right:-60px;top:-80px;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(184,242,90,.35),transparent 65%)"></div>
        <p class="eyebrow" style="color:#b8f25a">Insurance proposal · prepared Nov 25, 2026</p>
        <h1 style="color:#fff;font-size:30px">Orchard Glen Homeowners Association</h1>
        <p style="margin:8px 0 0;color:rgba(255,255,255,.8)">Prepared by Jordan Rivera, Harbor &amp; Pine Insurance</p>
      </div>
      <div style="padding:26px 32px" class="stack">
        <h2 style="font-family:var(--font-display);font-weight:400;font-size:20px">Our recommendation</h2>
        <p style="margin:0;color:var(--ink-2)">We recommend <b>Northfield Mutual</b> for both policies. It is not the lowest price, but it is the only option that covers the board for claims from residents about fee increases, which your board said is the main worry this year.</p>
        <div class="grid g-3">
          ${[['Directors & officers', '$2,140', 'Northfield Mutual'], ['General liability', '$3,880', 'Northfield Mutual'], ['Total per year', '$6,020', 'or $512 a month']].map(([a, b, c]) => `<div class="field"><div class="lab">${a}</div><div class="premium">${b}</div><div class="small muted">${c}</div></div>`).join('')}
        </div>
        <h2 style="font-family:var(--font-display);font-weight:400;font-size:20px;margin-top:8px">Options we compared</h2>
        <table>
          <thead><tr><th>Carrier</th><th>D&amp;O limit</th><th>Resident claims</th><th class="num">Per year</th></tr></thead>
          <tbody>
            <tr><td><b>Northfield Mutual</b></td><td>$1,000,000</td><td>${pill('ok', 'Covered')}</td><td class="num"><b>$6,020</b></td></tr>
            <tr><td>Bluestone Specialty</td><td>$1,000,000</td><td>${pill('bad', 'Excluded')}</td><td class="num">$5,410</td></tr>
            <tr><td>Aurora E&amp;S</td><td>$2,000,000</td><td>${pill('ok', 'Covered')}</td><td class="num">$7,960</td></tr>
          </tbody>
        </table>
        <p class="small muted" style="margin:0">Quotes valid until Dec 20, 2026. Coverage is subject to the policy terms. This summary does not change any policy.</p>
      </div>
    </div>
    <div class="stack">
      <div class="card"><div class="card-head"><h2>Checks</h2>${pill('ok', 'Ready')}</div><div class="list small">
        <div class="list-item">${pill('ok', 'Done')}<div class="grow">Numbers match the saved quotes</div></div>
        <div class="list-item">${pill('ok', 'Done')}<div class="grow">Agency license and signature added</div></div>
        <div class="list-item">${pill('ok', 'Done')}<div class="grow">Client acknowledgment page included</div></div>
      </div></div>
      <div class="card"><div class="card-head"><h2>Versions</h2></div><div class="list small">
        <div class="list-item"><span class="tile lime">${ic('proposal')}</span><div class="grow"><div class="title">v2 · current</div><div class="meta">Added Aurora option · today</div></div></div>
        <div class="list-item"><span class="tile">${ic('proposal')}</span><div class="grow"><div class="title">v1</div><div class="meta">Viewed by client · Nov 21</div></div></div>
      </div></div>
    </div>
  </section>
`;

screens.documents = () => {
  const docs = [
    ['Signed application', 'Quote', 'ok', 'Approved', 'Matched to the application'],
    ['Loss runs, last 3 years', 'Quote', 'wait', 'Requested', 'Asked Nov 23 · reminder drafted'],
    ['Current lease', 'Quote', 'wait', 'Requested', 'Asked Nov 23'],
    ['Payroll by class', 'Quote', 'ok', 'Received', 'payroll-2026.pdf · read'],
    ['Prior policy declarations', 'Quote', 'neutral', 'Waived', 'New business, no prior policy'],
    ['Signed proposal acknowledgment', 'Bind', 'neutral', 'Later', 'Needed after a quote is chosen'],
  ];
  return `
  <div class="page-head">
    <div><p class="eyebrow">Quill &amp; Draft Coworking · BOP + Cyber</p><h1>Documents</h1><p class="lede">What the carriers need, what the client sent, and what is still out. The client gets one simple upload link; reminders arrive as drafts for you to approve.</p></div>
    <div class="row"><button class="btn" type="button" data-toast="Upload link copied">${ic('link')}Copy upload link</button><button class="btn primary" type="button" data-toast="Reminder opened as a draft">${ic('mail')}Review reminder</button></div>
  </div>
  <section class="grid g-main-side">
    <div class="card flush">
      <div class="card-head"><div><h2>Checklist</h2><div class="sub">4 of 6 settled</div></div><div class="bar" style="width:160px"><i style="width:66%"></i></div></div>
      <div class="table-wrap" style="margin-top:12px"><table>
        <thead><tr><th>Document</th><th>Stage</th><th>Status</th><th class="hide-sm">Note</th><th></th></tr></thead>
        <tbody>${docs.map(([d, s, k, l, n]) => `<tr><td><div class="row" style="flex-wrap:nowrap"><span class="tile" style="width:30px;height:30px">${ic('file')}</span><b>${d}</b></div></td><td><span class="tag">${s}</span></td><td>${pill(k, l)}</td><td class="hide-sm muted small">${n}</td><td class="num"><button class="icon-btn" type="button" aria-label="More">${ic('more')}</button></td></tr>`).join('')}</tbody>
      </table></div>
    </div>
    <div class="stack">
      <div class="card edge">
        <div class="card-head"><h2>Reminder draft</h2>${pill('wait', 'Needs review')}</div>
        <div class="email small">
          <p><b>To:</b> Theo Lindqvist</p>
          <p>Hi Theo, thanks for sending the payroll. Two more items and we can get your quotes out: the loss runs for the last 3 years and a copy of the current lease. You can drop both here: <a href="#/documents">upload link</a>.</p>
          <p>Jordan Rivera<br />Harbor &amp; Pine Insurance · License 0K12345</p>
        </div>
        <div class="row" style="margin-top:10px"><button class="btn sm primary" type="button" data-toast="Approved. Sent from your Outlook.">${ic('check')}Approve and send</button><button class="btn sm" type="button">${ic('pen')}Edit</button></div>
      </div>
      <div class="card">
        <div class="card-head"><h2>What the client sees</h2></div>
        <div style="border-radius:16px;padding:16px;background:linear-gradient(160deg,#f6fbf7,#eaf3ee);border:1px solid var(--hairline)">
          <div class="row"><img src="assets/covera-icon.svg" alt="" width="22" height="22" style="border-radius:6px" /><b class="small">Harbor &amp; Pine Insurance</b></div>
          <p class="small" style="margin:10px 0">2 documents left for your quote</p>
          <div class="bar"><i style="width:66%"></i></div>
          <div class="empty" style="margin-top:12px;padding:18px">${ic('upload', 'width="22" height="22"')}<span class="small">Drop files or take a photo</span></div>
        </div>
      </div>
    </div>
  </section>`;
};

screens.carriers = () => `
  <div class="page-head">
    <div><p class="eyebrow">Settings · 8 portals enabled · 6 ready</p><h1>Carriers and portals</h1><p class="lede">Sign-in health for each portal, how its codes arrive, and which lines Covera can quote there today. Problems come first.</p></div>
    <div class="row"><div class="seg" role="group" aria-label="Filter"><button aria-pressed="true" type="button">All</button><button aria-pressed="false" type="button">Needs attention · 2</button></div><button class="btn primary" type="button">${ic('carriers')}Add carrier</button></div>
  </div>
  <section class="grid g-4">
    ${[...carriers].sort((a, b) => ['bad', 'wait', 'off', 'ok'].indexOf(a.signin) - ['bad', 'wait', 'off', 'ok'].indexOf(b.signin)).map((c) => {
      const st = { ok: ['ok', 'Sign-in works'], wait: ['wait', 'Needs a person'], bad: ['bad', 'Sign-in failed'], off: ['neutral', 'Not set up'] }[c.signin];
      return `<div class="card ${c.signin === 'bad' ? 'edge' : ''}">
        <div class="row between" style="flex-wrap:nowrap">${logo(c)}${pill(st[0], st[1])}</div>
        <h3 style="margin-top:12px;font-size:15px">${c.name}</h3>
        ${c.signin === 'bad' ? '<p class="small" style="margin:6px 0 0;color:var(--bad)">The portal refused the password on Nov 16. Update it, then test again.</p>' : ''}
        <div class="row" style="gap:4px;margin-top:6px">${c.lines.map((l) => `<span class="tag">${l}</span>`).join('')}</div>
        <div class="list small" style="margin-top:10px">
          <div class="list-item" style="padding:7px 0"><span class="muted grow">Codes</span><span>${c.code}</span></div>
          <div class="list-item" style="padding:7px 0"><span class="muted grow">Screens mapped</span><span>${c.mapped}</span></div>
          <div class="list-item" style="padding:7px 0"><span class="muted grow">Last checked</span><span>${c.last}</span></div>
        </div>
        <button class="btn sm ${c.signin === 'bad' ? 'primary' : ''}" type="button" style="width:100%;margin-top:10px" data-toast="${c.signin === 'bad' ? 'Opened the fix steps' : 'Sign-in test started'}">${c.signin === 'bad' ? 'See why and fix' : c.signin === 'off' ? 'Set up' : 'Test sign-in'}</button>
      </div>`;
    }).join('')}
  </section>
`;

screens.policies = () => `
  <div class="page-head">
    <div><p class="eyebrow">Portfolio · renewing in the next 90 days</p><h1>Policies</h1><p class="lede">Policies in force, sorted by renewal, with Covera's suggestion for each: renew as is, re-market, or call the client first.</p></div>
    <div class="seg" role="group" aria-label="Range"><button aria-pressed="false" type="button">30 days</button><button aria-pressed="true" type="button">90 days</button><button aria-pressed="false" type="button">Year</button></div>
  </div>
  <section class="grid g-3">
    ${[['Renewing', '14', '$212k premium'], ['Suggest re-market', '5', 'Rate up 12% or more'], ['Call first', '2', 'Coverage gap found']].map(([l, v, d]) => `<div class="card"><div class="stat"><span class="label">${l}</span><span class="value">${v}</span><span class="delta" style="color:var(--ink-3)">${d}</span></div></div>`).join('')}
  </section>
  <section class="card flush">
    <div class="table-wrap"><table>
      <thead><tr><th>Client</th><th>Policy</th><th>Renews</th><th class="num">Change</th><th>Suggestion</th><th></th></tr></thead>
      <tbody>
        ${[['Orchard Glen HOA', 'D&O', 'Dec 20', '+4%', ['ok', 'Renew as is']], ['Summit Ridge Framing', 'WC', 'Jan 15', '+14%', ['wait', 'Re-market']], ['Bayview Dental Studio', 'BOP', 'Jan 28', '+2%', ['info', 'Call: add E&O']], ['Harbor Lane Bakery', 'BOP', 'Feb 1', '+18%', ['wait', 'Re-market']], ['Quill & Draft Coworking', 'Cyber', 'Mar 3', '0%', ['ok', 'Renew as is']]]
          .map(([n, p, d, ch, s]) => `<tr><td><div class="who"><span class="ini">${initials(n)}</span><b>${n}</b></div></td><td><span class="tag">${p}</span></td><td>${d}</td><td class="num" style="color:${ch.startsWith('+1') ? 'var(--bad)' : 'var(--ink)'};font-weight:600">${ch}</td><td>${pill(s[0], s[1])}</td><td class="num"><button class="btn sm" type="button">Open</button></td></tr>`).join('')}
      </tbody>
    </table></div>
  </section>
`;

screens.settings = () => `
  <div class="page-head"><div><p class="eyebrow">Settings · Integrations</p><h1>Messaging</h1><p class="lede">The mailboxes Covera reads and the rules it follows with them. Every switch says what it changes.</p></div></div>
  <section class="grid g-side-main">
    <div class="card" style="padding:10px">
      <nav aria-label="Settings sections" class="stack" style="gap:2px">
        ${[
          ['Setup', [['checkCircle', 'Setup', '6/6']]],
          ['My account', [['users', 'Profile'], ['sparkles', 'Memory'], ['wand', 'Skills'], ['key', 'Portal credentials']]],
          ['Agency', [['building', 'Agency identity'], ['users', 'Team'], ['docs', 'Documents'], ['layers', 'Lines of business'], ['carriers', 'Carriers and portals', '', 'carriers']]],
          ['Integrations', [['plug', 'Agency system'], ['mail', 'Messaging', '', '', true], ['upload', 'Storage']]],
          ['Agents', [['bolt', 'Quoting'], ['docs', 'Document collection'], ['compare', 'Quote comparison'], ['shieldCheck', 'Certificates'], ['renew', 'Automations']]],
        ].map(([g, items]) => `<p class="eyebrow" style="margin:10px 10px 2px;color:var(--ink-3);font-size:10.5px">${g}</p>${items.map(([i, l, badge, go, on]) => `<a href="#/${go || 'settings'}" class="row" style="flex-wrap:nowrap;gap:10px;padding:7px 10px;border-radius:10px;text-decoration:none;color:var(--ink);${on ? 'background:var(--accent-soft);font-weight:650;' : ''}">${ic(i, 'width="16" height="16" style="color:var(--forest-700)"')}<span class="small" style="flex:1">${l}</span>${badge ? `<span class="pill ok" style="height:20px">${badge}</span>` : ''}</a>`).join('')}`).join('')}
      </nav>
    </div>
    <div class="stack">
      <div class="card edge">
        <div class="card-head"><div><h2>Mailboxes</h2><div class="sub">Covera reads these to find quote requests and sign-in codes. It never sends without your approval.</div></div><button class="btn sm" type="button">${ic('mail')}Connect mailbox</button></div>
        <div class="list">
          ${[['quotes@harborpine.com', 'Outlook · read 30 days back', true, '214 emails read · 38 requests found'], ['care@harborpine.com', 'Outlook · codes only', true, 'Used for 3 carriers']]
            .map(([m, d, on, s]) => `<div class="list-item"><span class="tile">${ic('mail')}</span><div class="grow"><div class="title">${m}</div><div class="meta">${d} · ${s}</div></div>${pill('ok', 'Connected')}</div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h2>Automation</h2></div>
        <div class="list">
          ${[['Read new email for quote requests', 'New requests appear in Quoting, already read. Unclear ones wait in To link.', true], ['Start a file automatically', 'Creates the client and applications. Off means you click Create client and quote.', false], ['Draft document reminders', 'Reminders are saved as drafts in your Outlook for review.', true], ['Send reminders without review', 'Off by default. Turn on only for trusted templates.', false]]
            .map(([t, d, on]) => `<div class="list-item"><div class="grow"><div class="title">${t}</div><div class="meta" style="white-space:normal">${d}</div></div><button class="switch" type="button" role="switch" aria-checked="${on}" aria-label="${t}"></button></div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h2>Integrations</h2></div>
        <div class="grid g-3">
          ${[['HawkSoft', 'Agency system', 'ok', 'Syncing nightly'], ['Outlook', 'Email and drafts', 'ok', 'Connected'], ['SharePoint', 'Client folders', 'ok', 'Connected'], ['Phone system', 'Call notes', 'neutral', 'Not connected'], ['Canopy Connect', 'Policy import', 'neutral', 'Not connected'], ['Browser extension', 'Portal fill', 'ok', 'Installed on 2 seats']]
            .map(([n, d, k, s]) => `<div class="field"><div class="row between"><b>${n}</b></div><div class="small muted">${d}</div><div style="margin-top:8px">${pill(k, s)}</div></div>`).join('')}
        </div>
      </div>
    </div>
  </section>
`;

/* ---------------- Shell behavior ---------------- */

const $ = (s) => document.querySelector(s);
const main = $('#main');

function renderNav(active) {
  $('#nav').innerHTML = nav.map((g) => `<div class="nav-group">${g.group ? `<div class="nav-label">${g.group}</div>` : ''}${g.items.map((it) =>
    `<a href="#/${it.id}" ${it.id === active ? 'aria-current="page"' : ''}>${ic(it.icon)}<span>${it.label}</span>${it.count ? `<span class="count ${it.hot ? 'hot' : ''}">${it.count}</span>` : ''}</a>`).join('')}</div>`).join('');
}

function render() {
  const id = (location.hash.replace(/^#\/?/, '') || 'todo').split('?')[0];
  const key = screens[id] ? id : 'todo';
  renderNav(parentOf[key] || key);
  const parts = crumbsFor[key] || [titles[key]];
  $('#crumbs').innerHTML = parts.map((p, i) => (i === parts.length - 1 ? `<b>${p}</b>` : `<span>${p}</span><span aria-hidden="true">/</span>`)).join('');
  main.innerHTML = screens[key]();
  main.style.animation = 'none';
  void main.offsetWidth;
  main.style.animation = '';
  document.title = `${titles[key]} · Covera concept`;
  $('#assistantContext').textContent = `Looking at: ${parts[parts.length - 1]}`;
  $('#sidebar').classList.remove('open');
  window.scrollTo({ top: 0 });
}

function toast(text) {
  $('#toastText').textContent = text;
  $('#toast').classList.add('on');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => $('#toast').classList.remove('on'), 2400);
}

function openAssistant(open) {
  $('#assistant').classList.toggle('open', open);
  $('#assistant').setAttribute('aria-hidden', String(!open));
  $('#scrim').classList.toggle('on', open || $('#palette').classList.contains('open'));
  if (open) setTimeout(() => $('#ask').focus(), 200);
}

const paletteItems = [
  ...nav.flatMap((g) => g.items.map((it) => ({ label: it.label, icon: it.icon, href: `#/${it.id}`, hint: 'Screen' }))),
  ...clients.map((c) => ({ label: c.name, icon: 'building', href: '#/opportunity', hint: c.stage })),
  ...carriers.map((c) => ({ label: c.name, icon: 'carriers', href: '#/carriers', hint: 'Carrier' })),
];

function openPalette(open) {
  const p = $('#palette');
  p.classList.toggle('open', open);
  p.setAttribute('aria-hidden', String(!open));
  $('#scrim').classList.toggle('on', open || $('#assistant').classList.contains('open'));
  if (open) {
    $('#paletteInput').value = '';
    fillPalette('');
    setTimeout(() => $('#paletteInput').focus(), 50);
  }
}

function fillPalette(q) {
  const items = paletteItems.filter((x) => x.label.toLowerCase().includes(q.toLowerCase())).slice(0, 9);
  $('#paletteList').innerHTML = items.length
    ? items.map((x, i) => `<li><a href="${x.href}" class="${i === 0 ? 'sel' : ''}">${ic(x.icon)}<span>${x.label}</span><span class="hint">${x.hint}</span></a></li>`).join('')
    : '<li class="muted" style="padding:12px">No match. Try a client or carrier name.</li>';
}

document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-go],[data-open],[data-close],[data-toast],.switch,.seg button,.tabs button,#paletteList a,.chip');
  if (!t) return;
  if (t.matches('.switch')) {
    const on = t.getAttribute('aria-checked') !== 'true';
    t.setAttribute('aria-checked', String(on));
    toast(`${t.getAttribute('aria-label')}: ${on ? 'on' : 'off'}`);
    return;
  }
  if (t.matches('.seg button') && !t.dataset.go) {
    t.parentElement.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === t)));
    return;
  }
  if (t.matches('.tabs button')) {
    t.parentElement.querySelectorAll('button').forEach((b) => b.setAttribute('aria-selected', String(b === t)));
    return;
  }
  if (t.matches('#paletteList a')) {
    openPalette(false);
    return;
  }
  if (t.matches('.chip')) {
    $('#ask').value = t.textContent;
    $('#composer').requestSubmit();
    return;
  }
  if (t.dataset.go) location.hash = `#/${t.dataset.go}`;
  if (t.dataset.open === 'assistant') openAssistant(true);
  if (t.dataset.open === 'palette') openPalette(true);
  if (t.dataset.open === 'newRequest') toast('Paste an email, drop a file, or forward to quotes@');
  if (t.dataset.close === 'assistant') openAssistant(false);
  if (t.dataset.toast) toast(t.dataset.toast);
});

$('#scrim').addEventListener('click', () => {
  openAssistant(false);
  openPalette(false);
  $('#sidebar').classList.remove('open');
});

$('#menuBtn').addEventListener('click', () => {
  $('#sidebar').classList.add('open');
  $('#scrim').classList.add('on');
});

$('#paletteInput').addEventListener('input', (e) => fillPalette(e.target.value));
$('#paletteInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const a = $('#paletteList a');
    if (a) {
      location.hash = a.getAttribute('href');
      openPalette(false);
    }
  }
});

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openPalette(!$('#palette').classList.contains('open'));
  }
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
    e.preventDefault();
    openAssistant(!$('#assistant').classList.contains('open'));
  }
  if (e.key === 'Escape') {
    openAssistant(false);
    openPalette(false);
    $('#sidebar').classList.remove('open');
    $('#scrim').classList.remove('on');
  }
});

$('#composer').addEventListener('submit', (e) => {
  e.preventDefault();
  const q = $('#ask').value.trim();
  if (!q) return;
  const chat = $('#chat');
  chat.insertAdjacentHTML('beforeend', `<div class="bubble-msg me"></div>`);
  chat.lastElementChild.textContent = q;
  $('#ask').value = '';
  setTimeout(() => {
    chat.insertAdjacentHTML('beforeend', `<div class="bubble-msg ai">In the real product this answer would come from the file, the quotes and your carrier notes, with a link to each source. This concept only shows how it would look.</div>`);
    chat.scrollTop = chat.scrollHeight;
  }, 450);
  chat.scrollTop = chat.scrollHeight;
});

window.addEventListener('hashchange', render);
render();
