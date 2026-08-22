/* ============================================================
   HURON HEDGE FUND CLUB — SITE BEHAVIOR
   ============================================================
   You shouldn't need to edit this file to update content —
   edit js/data.js instead. This file just wires that data
   into the page and handles nav/menu behavior.
   ============================================================ */

// ---- Mobile nav toggle -------------------------------------
function initNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Highlight the current page in the nav
  const current = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page-link]').forEach(a => {
    a.classList.toggle('active', a.dataset.pageLink === current);
  });
}

// ---- Small helper: escape text before injecting into HTML ---
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

// ---- Home page: desks --------------------------------------
function renderDesks() {
  const grid = document.getElementById('deskGrid');
  if (!grid) return;
  const desks = (window.HURON_DATA && HURON_DATA.desks) || [];
  if (!desks.length) {
    grid.innerHTML = '<p class="loading-placeholder">No desks configured yet.</p>';
    return;
  }
  grid.innerHTML = desks.map(d => `
    <article class="desk-row">
      <span class="mono ticker">${escapeHtml(d.ticker)}</span>
      <h3>${escapeHtml(d.name)}</h3>
      <p>${escapeHtml(d.description)}</p>
    </article>
  `).join('');
}

// ---- Home page copy -----------------------------------------
function renderHomeCopy() {
  const home = window.HURON_DATA && HURON_DATA.home;
  if (!home) return;
  const map = {
    heroTitle: document.getElementById('heroTitle'),
    heroSub: document.getElementById('heroSub'),
    modelLede: document.getElementById('modelLede'),
    joinLede: document.getElementById('joinLede')
  };
  Object.keys(map).forEach(key => {
    if (map[key] && home[key]) map[key].textContent = home[key];
  });
}

// ---- Performance page: stats ---------------------------------
function renderStats() {
  const grid = document.getElementById('statGrid');
  if (!grid) return;
  const stats = (window.HURON_DATA && HURON_DATA.performance && HURON_DATA.performance.stats) || {};
  const isNegative = (v) => typeof v === 'string' && v.trim().startsWith('-');

  const items = [
    { label: 'YTD Return', value: stats.ytdReturn, signed: true },
    { label: 'Active Positions', value: stats.activePositions, signed: false },
    { label: 'Pitch Win Rate', value: stats.winRate, signed: false },
    { label: 'Sectors Reporting', value: stats.desksReporting, signed: false }
  ];

  grid.innerHTML = items.map(item => {
    let cls = 'stat-value';
    if (item.signed) cls += isNegative(item.value) ? ' negative' : ' positive';
    return `
      <div class="stat-card">
        <span class="stat-label">${escapeHtml(item.label)}</span>
        <span class="${cls}">${escapeHtml(item.value)}</span>
      </div>
    `;
  }).join('');
}

// ---- Performance page: positions table -----------------------
function renderPositions() {
  const tbody = document.getElementById('positionsBody');
  if (!tbody) return;
  const positions = (window.HURON_DATA && HURON_DATA.performance && HURON_DATA.performance.positions) || [];
  if (!positions.length) {
    tbody.innerHTML = '<tr><td colspan="6" class="loading-placeholder">No positions listed yet.</td></tr>';
    return;
  }
  tbody.innerHTML = positions.map(p => {
    const up = typeof p.change === 'string' && !p.change.trim().startsWith('-');
    return `
      <tr>
        <td class="mono">${escapeHtml(p.desk)}</td>
        <td><span class="side-tag ${p.side === 'short' ? 'short' : 'long'}">${p.side === 'short' ? 'SHORT' : 'LONG'}</span></td>
        <td>${escapeHtml(p.name)}</td>
        <td class="num">${escapeHtml(p.entry)}</td>
        <td class="num">${escapeHtml(p.mark)}</td>
        <td class="num${up ? ' up' : ''}">${escapeHtml(p.change)}</td>
      </tr>
    `;
  }).join('');

  const caption = document.getElementById('chartCaption');
  if (caption && HURON_DATA.performance.chartCaption) {
    caption.textContent = HURON_DATA.performance.chartCaption;
  }
}

// ---- Members page ---------------------------------------------
function renderMembers() {
  const grid = document.getElementById('memberGrid');
  if (!grid) return;
  const members = (window.HURON_DATA && HURON_DATA.members) || [];
  if (!members.length) {
    grid.innerHTML = '<p class="loading-placeholder">No members listed yet.</p>';
    return;
  }
  grid.innerHTML = members.map(m => {
    const avatarInner = m.photo
      ? `<img src="${escapeHtml(m.photo)}" alt="${escapeHtml(m.name)}" loading="lazy">`
      : escapeHtml(m.initials);
    const avatarClass = m.photo ? 'member-avatar has-photo' : 'member-avatar';
    return `
    <article class="member-card" data-category="${escapeHtml(m.category)}">
      <div class="${avatarClass}">${avatarInner}</div>
      <h3>${escapeHtml(m.name)}</h3>
      <span class="member-role">${escapeHtml(m.role)}</span>
      <p>${escapeHtml(m.bio)}</p>
    </article>
  `;
  }).join('');

  // Filter buttons
  const filterBar = document.getElementById('memberFilter');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      filterBar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      grid.querySelectorAll('.member-card').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  }
}

// ---- Insights page ----------------------------------------------
function renderInsights() {
  const grid = document.getElementById('insightGrid');
  if (!grid) return;
  const insights = (window.HURON_DATA && HURON_DATA.insights) || [];
  if (!insights.length) {
    grid.innerHTML = '<p class="loading-placeholder">No insights posted yet.</p>';
    return;
  }
  grid.innerHTML = insights.map(i => `
    <article class="insight-card">
      <div class="insight-meta">
        <span class="side-tag ${i.side === 'short' ? 'short' : 'long'}">${i.side === 'short' ? 'SHORT' : 'LONG'}</span>
        <span class="desk">${escapeHtml(i.desk)}</span>
      </div>
      <h3>${escapeHtml(i.title)}</h3>
      <p>${escapeHtml(i.body)}</p>
      <span class="byline">${escapeHtml(i.byline)}</span>
    </article>
  `).join('');
}

// ---- Join page: desk dropdown + form submit ----------------------
function renderJoinPage() {
  const join = window.HURON_DATA && HURON_DATA.join;
  const intro = document.getElementById('joinIntro');
  if (intro && join && join.intro) intro.textContent = join.intro;

  const deskSelect = document.getElementById('deskPreference');
  if (deskSelect && join && Array.isArray(join.deskOptions)) {
    const placeholder = deskSelect.querySelector('option[value=""]');
    deskSelect.innerHTML = '';
    if (placeholder) deskSelect.appendChild(placeholder);
    else {
      const opt = document.createElement('option');
      opt.value = ''; opt.disabled = true; opt.selected = true; opt.textContent = 'Select a sector';
      deskSelect.appendChild(opt);
    }
    join.deskOptions.forEach(name => {
      const opt = document.createElement('option');
      opt.textContent = name;
      deskSelect.appendChild(opt);
    });
  }

  const form = document.getElementById('joinForm');
  if (!form) return;

  const endpoint = join && join.formEndpoint;

  const note = document.getElementById('formNote');
  if (note) {
    note.textContent = endpoint
      ? 'Submitting this form sends your application directly to the exec team.'
      : "This form isn't connected yet — submissions won't be sent anywhere until an endpoint is added (see README.md).";
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const successBox = document.getElementById('formSuccess');
    const errorBox = document.getElementById('formError');
    if (errorBox) errorBox.classList.remove('visible');
    if (successBox) successBox.classList.remove('visible');

    if (!endpoint) {
      // No backend configured: show a clear message instead of silently "succeeding".
      if (errorBox) {
        errorBox.classList.add('visible');
        errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    // Submit via fetch so we can show an in-page confirmation (works well with
    // Formspree and similar services that accept JSON/form-data POSTs).
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Submitting…'; }

    try {
      const formData = new FormData(form);
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        if (successBox) {
          successBox.classList.add('visible');
          successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      if (errorBox) {
        errorBox.querySelector('h3').textContent = 'Something went wrong.';
        errorBox.querySelector('p').textContent = 'Your application could not be sent. Please try again or email the club directly.';
        errorBox.classList.add('visible');
        errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Submit Application'; }
    }
  });
}

// ---- Ticker (footer brand nav link, etc.) -------------------------
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderHomeCopy();
  renderDesks();
  renderStats();
  renderPositions();
  renderMembers();
  renderInsights();
  renderJoinPage();
});
