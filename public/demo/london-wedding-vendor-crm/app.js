/* London wedding vendor onboarding CRM: static demo by Dooza.
   Seed data: window.VENDORS (data.js). Edits are kept in this browser only (localStorage). */
(function () {
  'use strict';
  var STATUSES = ['Researched', 'Contacted', 'Replied', 'Call booked', 'Signed up', 'Profile ready'];
  var CATS = ['Venue', 'Caterer', 'Photographer', 'Videographer', 'DJ', 'Florist', 'Bridal wear', 'Makeup artist', 'Planner', 'Decorator'];
  var KEY = 'lwv-crm-v1';
  var SEED_DATE = '2026-11-11';
  var EDIT_FIELDS = ['status', 'channel', 'objection', 'next_step', 'next_date', 'notes',
    'price_range', 'max_guests', 'parking', 'hours', 'dos_donts', 'owner'];

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { edits: {}, log: [] }; } catch (e) { return { edits: {}, log: [] }; }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode: keep in memory */ } }

  var seed = (window.VENDORS || []).map(function (v, i) {
    var o = {};
    for (var k in v) o[k] = v[k];
    o.id = 'v' + (i + 1);
    o.status = o.status || 'Researched';
    o.price_range = o.price_range || o.price_from || '';
    o.max_guests = o.max_guests || '';
    o.community = o.community || '';
    return o;
  });
  var state = load();

  function vendors() {
    return seed.map(function (v) {
      var e = state.edits[v.id] || {}, o = {};
      for (var k in v) o[k] = v[k];
      for (var j in e) o[j] = e[j];
      return o;
    });
  }
  function byId(id) { return vendors().filter(function (v) { return v.id === id; })[0]; }
  function setField(id, field, val) {
    var cur = byId(id);
    if (!state.edits[id]) state.edits[id] = {};
    if (field === 'status' && cur.status !== val) {
      state.log.push({ id: id, from: cur.status, to: val, date: today(), ts: new Date().toISOString() });
    }
    state.edits[id][field] = val;
    save();
  }
  function stIdx(s) { var i = STATUSES.indexOf(s); return i < 0 ? 0 : i; }
  function pill(s) { return '<span class="pill s' + stIdx(s) + '">' + esc(s) + '</span>'; }
  function communities(v) {
    return (v.community || '').split(/[,;\/]/).map(function (s) { return s.trim(); }).filter(Boolean);
  }
  function contactHtml(v) {
    var c = v.contact || '';
    if (!c) return '<span class="muted">see website</span>';
    if (v.contact_type === 'email') return '<a href="mailto:' + esc(c) + '" onclick="event.stopPropagation()">' + esc(c) + '</a>';
    if (v.contact_type === 'phone') return '<a href="tel:' + esc(c.replace(/[^+\d]/g, '')) + '" onclick="event.stopPropagation()">' + esc(c) + '</a>';
    if (/^https?:/.test(c)) return '<a href="' + esc(c) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()">Contact page</a>';
    return esc(c);
  }
  function host(u) { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return u; } }

  /* ---------- filters ---------- */
  function fillSelect(sel, label, items) {
    sel.innerHTML = '<option value="">' + esc(label) + '</option>' + items.map(function (x) {
      return '<option>' + esc(x) + '</option>';
    }).join('');
  }
  function allCommunities() {
    var set = {};
    seed.forEach(function (v) { communities(v).forEach(function (c) { set[c] = 1; }); });
    return Object.keys(set).sort();
  }
  function filtered() {
    var q = ($('#fQ').value || '').toLowerCase(), c = $('#fCat').value, m = $('#fCom').value, s = $('#fSt').value;
    return vendors().filter(function (v) {
      if (c && v.category !== c) return false;
      if (m === '__any' && !communities(v).length) return false;
      if (m && m !== '__any' && communities(v).indexOf(m) < 0) return false;
      if (s && v.status !== s) return false;
      if (q && (v.name + ' ' + v.area + ' ' + v.community + ' ' + v.notes + ' ' + v.objection).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
  }

  /* ---------- daily counter ---------- */
  function renderCounter() {
    var all = vendors(), t = today(), moved = {};
    state.log.forEach(function (l) { if (l.date === t) moved[l.to] = (moved[l.to] || 0) + 1; });
    var touchesToday = state.log.filter(function (l) { return l.date === t; }).length;
    var html = STATUSES.map(function (s) {
      var n = all.filter(function (v) { return v.status === s; }).length;
      return '<div class="ctile"><div class="n">' + n + '</div><div class="l">' + esc(s) + '</div>' +
        '<div class="t">' + (moved[s] ? '+' + moved[s] + ' today' : '&nbsp;') + '</div></div>';
    }).join('');
    var due = all.filter(function (v) { return v.next_date && v.next_date <= t && stIdx(v.status) < 5; }).length;
    html += '<div class="ctile"><div class="n">' + touchesToday + '</div><div class="l">Status changes today</div><div class="t">' +
      (due ? due + ' follow-up' + (due > 1 ? 's' : '') + ' due' : '&nbsp;') + '</div></div>';
    $('#counter').innerHTML = html;
    $('#todayLbl').textContent = t;
  }

  /* ---------- table ---------- */
  function renderTable() {
    var rows = filtered();
    $('#rowCount').textContent = rows.length + ' of ' + seed.length + ' vendors';
    $('#tbody').innerHTML = rows.map(function (v) {
      var listing = [];
      if (v.max_guests) listing.push('Max guests: ' + esc(v.max_guests));
      if (v.price_range) listing.push(esc(v.price_range));
      return '<tr data-id="' + v.id + '">' +
        '<td><div class="nm">' + esc(v.name) + '</div><div class="sub"><a href="' + esc(v.website) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()">' + esc(host(v.website)) + '</a></div></td>' +
        '<td>' + esc(v.category) + '</td>' +
        '<td>' + (communities(v).map(function (c) { return '<span class="comm">' + esc(c) + '</span>'; }).join('') || '<span class="muted">General</span>') + '</td>' +
        '<td>' + esc(v.area) + '</td>' +
        '<td>' + contactHtml(v) + '</td>' +
        '<td>' + pill(v.status) + '</td>' +
        '<td>' + (listing.join('<br>') || '<span class="muted">to collect</span>') + '</td>' +
        '<td><div class="sub">' + esc(v.objection || '') + '</div>' + (v.next_step ? '<div>' + esc(v.next_step) + (v.next_date ? ' <b>' + esc(v.next_date) + '</b>' : '') + '</div>' : '<span class="muted">-</span>') + '</td>' +
        '</tr>';
    }).join('') || '<tr><td colspan="8" class="muted">No vendors match these filters.</td></tr>';
    $$('#tbody tr[data-id]').forEach(function (tr) { tr.addEventListener('click', function () { openDrawer(tr.getAttribute('data-id')); }); });
  }

  /* ---------- board ---------- */
  function renderBoard() {
    var rows = filtered();
    $('#board').innerHTML = STATUSES.map(function (s, i) {
      var items = rows.filter(function (v) { return v.status === s; });
      return '<div class="col" data-st="' + esc(s) + '"><h4><span>' + esc(s) + '</span><span class="pill s' + i + '">' + items.length + '</span></h4>' +
        items.map(function (v) {
          return '<div class="kc" draggable="true" data-id="' + v.id + '"><b>' + esc(v.name) + '</b>' +
            '<span class="muted">' + esc(v.category) + (v.area ? ' · ' + esc(v.area) : '') + '</span>' +
            (communities(v).length ? '<div>' + communities(v).map(function (c) { return '<span class="comm">' + esc(c) + '</span>'; }).join('') + '</div>' : '') +
            (v.next_date ? '<div class="muted">Next: ' + esc(v.next_date) + '</div>' : '') +
            '<div class="mv">' + (i > 0 ? '<button type="button" data-mv="-1" aria-label="Move back">&larr;</button>' : '') +
            (i < STATUSES.length - 1 ? '<button type="button" data-mv="1" aria-label="Move forward">&rarr;</button>' : '') + '</div></div>';
        }).join('') + '</div>';
    }).join('');
    $$('#board .kc').forEach(function (k) {
      var id = k.getAttribute('data-id');
      k.addEventListener('click', function (e) {
        var mv = e.target.getAttribute && e.target.getAttribute('data-mv');
        if (mv) {
          e.stopPropagation();
          var v = byId(id), ni = Math.max(0, Math.min(STATUSES.length - 1, stIdx(v.status) + Number(mv)));
          setField(id, 'status', STATUSES[ni]); renderAll(); return;
        }
        openDrawer(id);
      });
      k.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text/plain', id); });
    });
    $$('#board .col').forEach(function (c) {
      c.addEventListener('dragover', function (e) { e.preventDefault(); c.classList.add('over'); });
      c.addEventListener('dragleave', function () { c.classList.remove('over'); });
      c.addEventListener('drop', function (e) {
        e.preventDefault(); c.classList.remove('over');
        var id = e.dataTransfer.getData('text/plain');
        if (id) { setField(id, 'status', c.getAttribute('data-st')); renderAll(); }
      });
    });
  }

  /* ---------- week summary ---------- */
  function renderSummary() {
    var all = vendors();
    function atLeast(i) { return all.filter(function (v) { return stIdx(v.status) >= i; }).length; }
    var k = [
      ['Vendors researched', all.length], ['Contacted', atLeast(1)], ['Replied', atLeast(2)],
      ['Calls booked', atLeast(3)], ['Signed up', atLeast(4)], ['Profiles ready', atLeast(5)]
    ];
    $('#kpis').innerHTML = k.map(function (x) { return '<div class="kpi"><div class="n">' + x[1] + '</div><div class="l">' + esc(x[0]) + '</div></div>'; }).join('');
    var contacted = atLeast(1);
    var rate = contacted ? Math.round(100 * atLeast(2) / contacted) + '%' : 'n/a';
    var conv = contacted ? Math.round(100 * atLeast(4) / contacted) + '%' : 'n/a';
    $('#rates').innerHTML = 'Reply rate: <b>' + rate + '</b> · Contacted to signed up: <b>' + conv + '</b>';

    function bars(el, counts) {
      var keys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
      var max = keys.length ? counts[keys[0]] : 1;
      $(el).innerHTML = keys.map(function (key) {
        return '<div class="bar"><span class="lb">' + esc(key) + '</span><span class="tr"><span class="fl" style="display:block;width:' + Math.round(100 * counts[key] / max) + '%"></span></span><span class="v">' + counts[key] + '</span></div>';
      }).join('') || '<div class="muted">Nothing yet.</div>';
    }
    var byCat = {}; CATS.forEach(function (c) { byCat[c] = 0; });
    all.forEach(function (v) { byCat[v.category] = (byCat[v.category] || 0) + 1; });
    bars('#byCat', byCat);
    var byCom = {};
    all.forEach(function (v) { var cs = communities(v); (cs.length ? cs : ['General']).forEach(function (c) { byCom[c] = (byCom[c] || 0) + 1; }); });
    bars('#byCom', byCom);
    var objs = {};
    all.forEach(function (v) { if (v.objection) objs[v.objection] = (objs[v.objection] || 0) + 1; });
    bars('#topObj', objs);
    var t = today();
    var due = all.filter(function (v) { return v.next_date && stIdx(v.status) < 5; }).sort(function (a, b) { return a.next_date < b.next_date ? -1 : 1; });
    $('#nextList').innerHTML = due.slice(0, 10).map(function (v) {
      return '<li><b>' + esc(v.next_date) + '</b>' + (v.next_date <= t ? ' <span class="pill s3">due</span>' : '') + ' ' + esc(v.name) + ': ' + esc(v.next_step || 'follow up') + '</li>';
    }).join('') || '<li>No follow-ups scheduled yet. Open a vendor and set a next step and date.</li>';
    var wk = state.log.length;
    $('#sumText').textContent = all.length + ' vendors researched across ' + Object.keys(byCat).filter(function (c) { return byCat[c]; }).length +
      ' categories, with ' + Object.keys(byCom).filter(function (c) { return c !== 'General'; }).length + ' community and faith tags. ' +
      contacted + ' contacted, ' + atLeast(2) + ' replied, ' + atLeast(3) + ' calls booked, ' + atLeast(4) + ' signed up. ' +
      (wk ? wk + ' status changes logged this week.' : 'Outreach starts once the sign-up link and wording are approved.');
  }

  /* ---------- drawer ---------- */
  var openId = null;
  function openDrawer(id) {
    var v = byId(id); if (!v) return;
    openId = id;
    var isVenue = v.category === 'Venue';
    var hist = state.log.filter(function (l) { return l.id === id; }).slice().reverse();
    $('#dbody').innerHTML =
      '<div class="row"><h2 class="sp">' + esc(v.name) + '</h2><button class="btn2 sm" type="button" id="dclose">Close</button></div>' +
      '<div class="muted">' + esc(v.category) + (v.area ? ' · ' + esc(v.area) : '') + '</div>' +
      '<p><a href="' + esc(v.website) + '" target="_blank" rel="noopener">' + esc(v.website) + '</a><br>Contact: ' + contactHtml(v) + '</p>' +
      (communities(v).length ? '<p>' + communities(v).map(function (c) { return '<span class="comm">' + esc(c) + '</span>'; }).join('') + '</p>' : '') +
      (v.source_note ? '<p class="muted">Source: ' + esc(v.source_note) + '</p>' : '') +
      '<h3>Outreach</h3><div class="f2">' +
      '<div><label for="e_status">Status</label><select id="e_status">' + STATUSES.map(function (s) { return '<option' + (s === v.status ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select></div>' +
      '<div><label for="e_channel">Channel</label><select id="e_channel">' + ['', 'Email', 'Phone', 'WhatsApp', 'Instagram DM', 'Contact form', 'In person'].map(function (s) { return '<option' + (s === (v.channel || '') ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select></div>' +
      '</div>' +
      '<label for="e_objection">Objection / feedback</label><select id="e_objection">' + ['', 'Another directory?', 'What does it cost?', 'We are fully booked', 'Send me info', 'Already on Hitched / Bridebook', 'Need to ask the owner', 'Not interested', 'Other (see notes)'].map(function (s) { return '<option' + (s === (v.objection || '') ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select>' +
      '<div class="f2"><div><label for="e_next_step">Next step</label><input type="text" id="e_next_step" value="' + esc(v.next_step || '') + '" placeholder="e.g. call Tue after 11am"></div>' +
      '<div><label for="e_next_date">Next date</label><input type="date" id="e_next_date" value="' + esc(v.next_date || '') + '"></div></div>' +
      '<label for="e_owner">Contact person (as they introduce themselves)</label><input type="text" id="e_owner" value="' + esc(v.owner || '') + '">' +
      '<label for="e_notes">Notes</label><textarea id="e_notes">' + esc(v.notes || '') + '</textarea>' +
      '<h3 style="margin-top:14px">Listing data for the platform</h3>' +
      '<div class="f2"><div><label for="e_price_range">' + (isVenue ? 'Venue price range' : 'Price range / packages') + '</label><input type="text" id="e_price_range" value="' + esc(v.price_range || '') + '"></div>' +
      '<div><label for="e_max_guests">Max guests' + (isVenue ? '' : ' (if relevant)') + '</label><input type="text" id="e_max_guests" value="' + esc(v.max_guests || '') + '"></div>' +
      '<div><label for="e_parking">Parking</label><input type="text" id="e_parking" value="' + esc(v.parking || '') + '" placeholder="e.g. 80 spaces on site"></div>' +
      '<div><label for="e_hours">Operating hours</label><input type="text" id="e_hours" value="' + esc(v.hours || '') + '" placeholder="e.g. events until 1am"></div></div>' +
      '<label for="e_dos_donts">Do\'s and don\'ts</label><textarea id="e_dos_donts" placeholder="e.g. no open flames, own caterers allowed, alcohol-free packages, halal/kosher kitchen">' + esc(v.dos_donts || '') + '</textarea>' +
      '<p class="muted">Changes save in this browser as you type.</p>' +
      '<h3>Status history</h3><ul class="hist">' + (hist.map(function (l) { return '<li>' + esc(l.ts.slice(0, 16).replace('T', ' ')) + ' UTC: ' + esc(l.from) + ' &rarr; ' + esc(l.to) + '</li>'; }).join('') ||
        '<li>' + SEED_DATE + ': Researched from public website (not yet contacted)</li>') + '</ul>';
    $('#drawer').classList.add('on');
    $('#dclose').addEventListener('click', closeDrawer);
    EDIT_FIELDS.forEach(function (f) {
      var el = $('#e_' + f); if (!el) return;
      el.addEventListener(el.tagName === 'SELECT' || el.type === 'date' ? 'change' : 'input', function () {
        setField(id, f, el.value);
        renderAll(true);
        if (f === 'status') openDrawer(id);
      });
    });
  }
  function closeDrawer() { $('#drawer').classList.remove('on'); openId = null; }

  /* ---------- CSV ---------- */
  function csvCell(x) { x = String(x == null ? '' : x); return /[",\n]/.test(x) ? '"' + x.replace(/"/g, '""') + '"' : x; }
  function exportCsv() {
    var cols = ['name', 'category', 'community', 'area', 'website', 'contact', 'status', 'channel', 'objection', 'next_step', 'next_date', 'owner',
      'price_range', 'max_guests', 'parking', 'hours', 'dos_donts', 'notes', 'source_note'];
    var lines = [cols.join(',')].concat(filtered().map(function (v) { return cols.map(function (c) { return csvCell(v[c]); }).join(','); }));
    var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'london-wedding-vendors-' + today() + '.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  /* ---------- wiring ---------- */
  function renderAll(skipDrawer) {
    renderCounter(); renderTable(); renderBoard(); renderSummary();
    if (!skipDrawer && openId) openDrawer(openId);
  }
  function init() {
    fillSelect($('#fCat'), 'All categories', CATS);
    var cs = allCommunities();
    $('#fCom').innerHTML = '<option value="">All communities</option><option value="__any">Any community-specific</option>' +
      cs.map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('');
    fillSelect($('#fSt'), 'All statuses', STATUSES);
    ['#fQ', '#fCat', '#fCom', '#fSt'].forEach(function (s) {
      $(s).addEventListener(s === '#fQ' ? 'input' : 'change', function () { renderTable(); renderBoard(); });
    });
    $$('.tab').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('.tab').forEach(function (x) { x.classList.toggle('on', x === b); });
        $$('.pane').forEach(function (p) { p.classList.toggle('on', p.id === 'p-' + b.getAttribute('data-tab')); });
        $('#filterBar').style.display = (b.getAttribute('data-tab') === 'table' || b.getAttribute('data-tab') === 'board') ? '' : 'none';
      });
    });
    $('#csvBtn').addEventListener('click', exportCsv);
    $('#resetBtn').addEventListener('click', function () {
      if (confirm('Reset all statuses and notes back to the researched sample?')) { state = { edits: {}, log: [] }; save(); closeDrawer(); renderAll(); }
    });
    $('#drawer').addEventListener('click', function (e) { if (e.target.id === 'drawer') closeDrawer(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
    $$('[data-copy]').forEach(function (b) {
      b.addEventListener('click', function () {
        var t = $('#' + b.getAttribute('data-copy')).textContent;
        var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1200); };
        if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, done); else done();
      });
    });
    renderAll();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
