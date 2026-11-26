/*
  Appearance, applied before the page draws so there is no flash of the wrong theme.
  Loaded as a plain blocking script right after <meta name="color-scheme"> (not a module, not deferred).
  The stored choice lives in this browser only; if storage is blocked the default theme still applies.
*/
(function () {
  var THEMES = {
    forest: { name: 'Forest Glass', vibe: 'Modern', blurb: "Covera's own forest and lime, liquid glass, Baskerville headlines.", brand: '#0b3526', signal: '#b8f25a', sidebar: 'deep', glass: 'on', scheme: 'light dark' },
    ledger: { name: 'Ledger', vibe: 'Classic', blurb: 'Ivory paper, ink navy and old gold. Garamond, square corners, no glass.', brand: '#1f2a44', signal: '#e9c46a', sidebar: 'light', glass: 'off', scheme: 'light' },
    harbor: { name: 'Old Harbor', vibe: 'Classic', blurb: 'Navy and brass, calm and trustworthy. Gentle corners.', brand: '#0a2c58', signal: '#e6c36a', sidebar: 'deep', glass: 'on', scheme: 'light dark' },
    blank: { name: 'Blank Page', vibe: 'Basic', blurb: 'Plain white, slate and sky blue. System font, nothing extra.', brand: '#27354a', signal: '#9fd2ff', sidebar: 'light', glass: 'off', scheme: 'light dark' },
    arcade: { name: 'Midnight Arcade', vibe: 'Bold', blurb: 'Deep violet and electric cyan after dark. Space Grotesk, big soft corners.', brand: '#2b1166', signal: '#5ff4ff', sidebar: 'deep', glass: 'on', scheme: 'dark' },
    citrus: { name: 'Citrus Studio', vibe: 'Playful', blurb: 'Terracotta and mango on warm paper. Fraunces headlines, round everything.', brand: '#7a2e14', signal: '#ffc24b', sidebar: 'deep', glass: 'on', scheme: 'light dark' },
  };
  var KEY = 'covera-appearance';

  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '{}') || {};
    } catch (e) {
      return {};
    }
  }

  function apply(s) {
    var root = document.documentElement;
    var t = THEMES[s.theme] || THEMES.forest;
    root.dataset.theme = s.theme && THEMES[s.theme] ? s.theme : 'forest';
    root.style.setProperty('--brand', s.brand || t.brand);
    root.style.setProperty('--signal', s.signal || t.signal);
    root.dataset.sidebar = s.sidebar || t.sidebar;
    root.dataset.glass = s.glass || t.glass;
    root.dataset.density = s.density || 'comfortable';
    var meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.content = s.scheme || t.scheme;
  }

  function save(s) {
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (e) {
      /* Storage blocked: the theme still applies for this visit. */
    }
    apply(s);
  }

  window.CoveraAppearance = { THEMES: THEMES, read: read, apply: apply, save: save };
  apply(read());

  /* Another tab changed the theme: follow it. */
  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(read());
  });
})();
