/* UI for the AI Front Desk demo. All logic lives in app.js (window.Desk). */
(function () {
  'use strict';
  var D = window.Desk, KEY = 'fp-desk-v1';
  var R = D.defaultRules(), events = [], who = 'p1', week = 0, st, lastFlash = {};
  var $ = function (s) { return document.querySelector(s); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function toast(t) { var e = $('#toast'); e.textContent = t; e.classList.add('show'); clearTimeout(e._t); e._t = setTimeout(function () { e.classList.remove('show'); }, 2200); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify({ R: R, events: events, who: who })); } catch (e) {} }
  function load() { try { var j = JSON.parse(localStorage.getItem(KEY) || 'null'); if (j && j.R && j.events) { R = Object.assign(D.defaultRules(), j.R); events = j.events; who = j.who || 'p1'; } } catch (e) {} }

  function push(ev) { events.push(ev); if (ev.pid) lastFlash = { pid: ev.pid }; render(); save(); }

  // ---------- rules form ----------
  var LISTS = { reminderHours: 1, enquiryDays: 1, optOutWords: 1 };
  function fillRules() {
    ['quietStart', 'quietEnd'].forEach(function (n) {
      var s = document.querySelector('[name=' + n + ']'); if (!s.options.length) for (var h = 0; h < 24; h++) s.add(new Option(D.fmtT(Date.UTC(2026, 0, 1, h)), h));
    });
    document.querySelectorAll('#rulesF [name], #valF [name]').forEach(function (el) {
      var v = R[el.name];
      if (el.type === 'checkbox') el.checked = !!v; else el.value = Array.isArray(v) ? v.join(', ') : v;
    });
  }
  function readRules(el) {
    var n = el.name, v;
    if (el.type === 'checkbox') v = el.checked;
    else if (LISTS[n]) {
      var parts = el.value.split(/[,\s]+/).filter(Boolean);
      v = n === 'optOutWords' ? parts.map(function (x) { return x.toUpperCase(); }) : parts.map(Number).filter(function (x) { return isFinite(x) && x >= 0 && x <= 400; });
      if (n === 'optOutWords' && v.indexOf('STOP') < 0) { v.unshift('STOP'); toast('STOP always opts out (carrier rule), so it stays on the list.'); }
    } else if (el.type === 'number' || el.tagName === 'SELECT') { v = Number(el.value); if (!isFinite(v)) return; }
    else v = el.value || D.defaultRules()[n];
    R[n] = v; render(); save();
  }

  // ---------- render ----------
  function stageCls(s) { return (s || '').split(' ')[0].replace(/[^A-Za-z-]/g, ''); }
  function renderClock() { $('#clock').innerHTML = 'Practice clock: ' + esc(D.fmtDT(st.now)) + '<small>Sample week starting Mon 16 Nov 2026. Events happen at this time.</small>'; }
  function renderWho() {
    var s = $('#who'); s.innerHTML = '';
    st.patients.forEach(function (p) { s.add(new Option(p.name + ' · ' + p.stage + (p.appt ? ' (' + D.fmtDT(p.appt) + ')' : ''), p.id)); });
    s.value = who;
  }
  function msgHTML(m, fired) {
    var lab = m.status === 'sent' ? 'Sent ' + D.fmtDT(m.at) : m.status === 'scheduled' ? 'Scheduled ' + D.fmtDT(m.at) : m.status;
    return '<div class="msg ' + m.status + '"><div class="mt"><span class="st ' + m.status + '">' + esc(lab) + '</span><b>' + esc(m.ch) + '</b> to ' + esc(m.who) + ' ' + esc(m.to) + ' · ' + esc(m.kind) + (fired ? ' · went out as the clock moved' : '') + '</div><div class="tx">' + esc(m.text) + '</div>' + (m.note ? '<div class="note">' + esc(m.note) + '</div>' : '') + '</div>';
  }
  function renderFeed() {
    var f = $('#feed');
    if (!st.feed.length) { f.innerHTML = '<div class="empty">Nothing yet. Pick a patient and click "Missed call" to start, or press "Play a sample week".</div>'; return; }
    f.innerHTML = st.feed.slice().reverse().map(function (r) {
      var h = '<div class="rec"><div class="hd"><b>' + esc(r.label) + '</b>' + (r.who ? '<span>' + esc(r.who) + '</span>' : '') + '<span>' + esc(D.fmtDT(r.at)) + '</span></div>';
      if (r.type === 'web_form' && r.text) h += '<p class="q">Form: "' + esc(r.text) + '"</p>';
      r.fired.forEach(function (id) { h += msgHTML(D.msg(st, id), true); });
      r.msgs.forEach(function (id) { h += msgHTML(D.msg(st, id)); });
      r.decisions.forEach(function (d) { var no = /^NO |opted out|Opt-out/.test(d); h += '<div class="dec' + (no ? ' no' : '') + '"><b>Judgment:</b> ' + esc(d) + '</div>'; });
      if (r.actions.length) h += '<ul class="act">' + r.actions.map(function (a) { return '<li><b>Next:</b> ' + esc(a) + '</li>'; }).join('') + '</ul>';
      if (r.crm) h += '<div class="crm1"><b>CRM row written:</b> ' + esc(r.crm.patient) + ' · stage ' + esc(r.crm.stage) + (r.crm.appt ? ' · appt ' + esc(r.crm.appt) : '') + ' · last touch ' + esc(r.crm.lastTouch || '-') + ' · next ' + esc(r.crm.next || 'none') + '</div>';
      return h + '</div>';
    }).join('');
  }
  function renderCRM() {
    var rows = st.patients.map(function (p) {
      var c = D.crmRow(st, p), dim = p.stage === 'Not in CRM yet';
      return '<tr class="' + (dim ? 'dim' : '') + (lastFlash.pid === p.id ? ' flash' : '') + '"><td><b>' + esc(p.name) + '</b><br><span class="legend">' + esc(p.phone) + '</span></td><td><span class="pill ' + stageCls(p.stage) + '">' + esc(p.stage) + '</span>' + (c.source ? '<br><span class="legend">via ' + esc(c.source) + '</span>' : '') + '</td><td>' + esc(c.appt || '-') + '</td><td>' + esc(c.lastTouch || '-') + '</td><td>' + esc(c.next || '-') + '</td></tr>';
    }).join('');
    $('#crmT').innerHTML = '<tr><th>Patient</th><th>Stage</th><th>Appointment</th><th>Last touch</th><th>Next follow-up</th></tr>' + rows;
    lastFlash = {};
    var tk = st.tasks.slice().reverse();
    $('#tasks').innerHTML = tk.length ? tk.map(function (t) {
      return '<li class="' + (t.done ? 'done' : '') + '">' + (t.done ? '' : '<button class="btn2 small" data-task="' + t.id + '">Done</button>') + '<span><span class="who">' + esc(t.who) + '</span> · due ' + esc(D.fmtDT(t.due)) + '<br>' + esc(t.text) + '</span></li>';
    }).join('') : '<li>No tasks. The desk only hands work to a person when judgment is needed.</li>';
    var q = st.outbox.filter(function (m) { return m.status === 'scheduled'; }).sort(function (a, b) { return a.at - b.at; });
    $('#queueT').innerHTML = q.length ? '<tr><th>When</th><th>To</th><th>What</th></tr>' + q.map(function (m) { return '<tr><td>' + esc(D.fmtDT(m.at)) + '</td><td>' + esc(m.who) + '</td><td>' + esc(m.ch + ' · ' + m.kind) + (m.note ? '<br><span class="legend">' + esc(m.note) + '</span>' : '') + '</td></tr>'; }).join('') : '<tr><td class="legend">Nothing scheduled.</td></tr>';
  }
  function renderCal() {
    var wk0 = D.START - 9 * D.H + week * 7 * D.DAY, days = [0, 1, 2, 3, 4].map(function (i) { return wk0 + i * D.DAY; });
    $('#wk').textContent = week ? 'Show this week' : 'Show next week';
    var h = '<tr><th></th>' + days.map(function (d) { return '<th>' + esc(D.fmtD(d)) + '</th>'; }).join('') + '</tr>';
    D.HOURS.forEach(function (hr) {
      h += '<tr><td>' + esc(D.fmtT(Date.UTC(2026, 0, 1, hr))) + '</td>';
      days.forEach(function (d) {
        var t = d + hr * D.H, s = st.slots.filter(function (x) { return x.t === t; })[0];
        if (!s) { h += '<td></td>'; return; }
        if (t <= st.now) h += '<td><span class="slot past">past</span></td>';
        else if (s.by) h += '<td><span class="slot me" title="Booked by the AI desk">' + esc(D.pat(st, s.by).name.split(' ')[0]) + '</span></td>';
        else if (s.taken) h += '<td><span class="slot t">taken</span></td>';
        else h += '<td><button class="slot" data-slot="' + t + '">open</button></td>';
      });
      h += '</tr>';
    });
    $('#calT').innerHTML = h;
  }
  function renderKpis() {
    var s = D.savings(st, R);
    var k = [['Messages sent', s.sent], ['Staff time saved', s.hours + ' h'], ['Staff cost saved', '$' + s.staff], ['Visits won back', s.recovered], ['Value of those visits', '$' + s.value], ['Review asks (all patients)', s.reviews], ['Referral asks', s.referrals], ['Unhappy routed to a person', s.routed]];
    $('#kpis').innerHTML = k.map(function (x) { return '<div class="kpi"><span>' + esc(x[0]) + '</span><b>' + esc(x[1]) + '</b></div>'; }).join('');
  }
  function render() {
    st = D.run(R, events);
    renderClock(); renderWho(); renderFeed(); renderCRM(); renderCal(); renderKpis();
    $('#evcount').textContent = events.length ? events.length + ' event' + (events.length === 1 ? '' : 's') + ' so far (kept in this browser).' : '';
  }

  // ---------- wiring ----------
  function wire() {
    $('#who').addEventListener('change', function (e) { who = e.target.value; save(); });
    document.querySelectorAll('[data-ev]').forEach(function (b) {
      b.addEventListener('click', function () {
        var ev = { type: b.getAttribute('data-ev'), pid: who };
        if (b.hasAttribute('data-text')) ev.text = b.getAttribute('data-text');
        var p = D.pat(st, who);
        if (b.getAttribute('data-need') === 'score' && !p.awaitingScore) { events.push({ type: 'visit_completed', pid: who }); toast('Marked the visit completed first, so there is a feedback question to answer.'); }
        push(ev);
        document.getElementById('feed').scrollTop = 0;
      });
    });
    $('#replyF').addEventListener('submit', function (e) { e.preventDefault(); var t = $('#replyT').value.trim(); if (!t) return; push({ type: 'reply', pid: who, text: t }); $('#replyT').value = ''; });
    document.querySelectorAll('[data-adv]').forEach(function (b) {
      b.addEventListener('click', function () {
        var a = b.getAttribute('data-adv'), now = st.now, base = D.dayStart(now), to;
        if (a === '1h') to = now + D.H; else if (a === '1d') to = now + D.DAY;
        else if (a === 'night') { to = base + 21.5 * D.H; if (to <= now) to += D.DAY; }
        else { to = base + 8 * D.H; if (to <= now) to += D.DAY; }
        push({ type: 'advance', to: to });
      });
    });
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-task]'); if (t) { push({ type: 'task_done', id: t.getAttribute('data-task') }); return; }
      var s = e.target.closest('[data-slot]');
      if (s) { var at = +s.getAttribute('data-slot'); push({ type: 'reply', pid: who, text: D.fmtD(at).split(' ')[0] + ' ' + D.fmtT(at), t: at }); }
    });
    $('#wk').addEventListener('click', function () { week = week ? 0 : 1; renderCal(); });
    $('#reset').addEventListener('click', function () { events = []; render(); save(); toast('Sample data reset.'); });
    $('#story').addEventListener('click', function () { events = D.story(); render(); save(); toast('Played a sample week: 14 events, 5 patients.'); location.hash = 'events'; });
    $('#rulesReset').addEventListener('click', function () { var keep = { minPerMsg: R.minPerMsg, minPerBooking: R.minPerBooking, staffRate: R.staffRate, visitValue: R.visitValue }; R = Object.assign(D.defaultRules(), keep); fillRules(); render(); save(); toast('Default rules back. Outputs rebuilt.'); });
    document.querySelectorAll('#rulesF [name], #valF [name]').forEach(function (el) {
      el.addEventListener('change', function () { readRules(el); if (el.closest('#rulesF')) toast('Rule changed: every output was rebuilt from the same events.'); });
    });
  }
  load(); fillRules(); wire(); render();
})();
