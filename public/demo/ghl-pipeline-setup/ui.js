/* Browser UI for the GHL pipeline demo. Engine is in app.js (window.GHL). */
(function () {
  'use strict';
  var G = window.GHL, KEY = 'dooza.ghlDemo.v1', KEYC = 'dooza.ghlDemo.checks.v1';
  var s, seen = 0, firedSeen = {}, checks = {};
  function $(id) { return document.getElementById(id); }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(s)); localStorage.setItem(KEYC, JSON.stringify(checks)); } catch (e) {} }
  function load() {
    try {
      var j = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (j && j.opps && j.feed && j.queue && j.contacts && typeof j.now === 'number') s = j;
      var c = JSON.parse(localStorage.getItem(KEYC) || 'null'); if (c && typeof c === 'object') checks = c;
    } catch (e) {}
    if (!s) s = G.newState();
    seen = s.seq; firedSeen = JSON.parse(JSON.stringify(s.fired || {}));
  }
  var tt;
  function toast(t) { var el = $('toast'); el.textContent = t; el.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { el.classList.remove('on'); }, 2600); }

  var KL = { sms: 'SMS', email: 'Email', notify: 'Owner alert', task: 'Task', trigger: 'Workflow', move: 'Stage', opp: 'Opportunity', queued: 'Scheduled', cancel: 'Cancelled', skip: 'Skipped', reply: 'Reply in', event: 'Form' };

  function renderClock() {
    $('clock').innerHTML = esc(G.fmtDT(s.now)) + '<small>Demo clock (sample week). Scheduled steps fire when the clock passes them.</small>';
  }
  function renderKpis() {
    var st = G.pipelineStats(s), open = 0, openV = 0;
    ['new', 'contacted', 'booked', 'noshow', 'showed', 'proposal'].forEach(function (k) { open += st[k].count; openV += st[k].value; });
    var tasksOpen = s.tasks.filter(function (t) { return !t.done; }).length;
    var sent = s.feed.filter(function (e) { return e.kind === 'sms' || e.kind === 'email'; }).length;
    $('kpis').innerHTML = [
      ['Open opportunities', open], ['Open pipeline value', G.money(openV)], ['Won value', G.money(st.won.value)],
      ['Messages sent by workflows', sent], ['Open call tasks', tasksOpen]
    ].map(function (k) { return '<div class="kpi"><span>' + k[0] + '</span><b>' + k[1] + '</b></div>'; }).join('');
  }
  function renderBoard(flash) {
    var opts = G.STAGES.map(function (st) { return '<option value="' + st.id + '">' + esc(st.name) + '</option>'; }).join('');
    $('board').innerHTML = G.STAGES.map(function (st) {
      var list = s.opps.filter(function (o) { return o.stage === st.id; });
      var val = list.reduce(function (a, o) { return a + o.value; }, 0);
      return '<div class="col ' + st.id + '" data-stage="' + st.id + '"><h4>' + esc(st.name) + ' <span>' + list.length + ' · ' + G.money(val) + '</span></h4>' +
        list.map(function (o) {
          var c = s.contacts[o.contactId];
          var canReply = (o.stage === 'new' || o.stage === 'contacted') && !c.replied;
          return '<div class="oppc' + (flash[o.id] ? ' flash' : '') + '" draggable="true" data-id="' + o.id + '"><b>' + esc(c.name) + '</b>' +
            '<span class="meta">' + esc(c.service) + ' · <span class="v">' + G.money(o.value) + '</span></span><br><span class="pill">' + esc(o.source) + '</span>' +
            (o.appt && o.stage === 'booked' ? '<div class="appt">Appt ' + esc(G.fmtDT(o.appt)) + '</div>' : '') +
            '<div class="last">' + esc(o.last.text) + ' <span class="meta">· ' + esc(G.fmtDT(o.last.at)) + '</span></div>' +
            '<div class="ctl"><select aria-label="Move to stage" data-move="' + o.id + '"><option value="">Move to...</option>' + opts.replace('value="' + o.stage + '"', 'value="' + o.stage + '" disabled') + '</select>' +
            (canReply ? '<button class="rp" data-reply="' + o.id + '">Lead replies</button>' : '') + '</div></div>';
        }).join('') + '</div>';
    }).join('');
  }
  function stepHtml(st) {
    var cls = st.t === 'wait' || st.t === 'if' ? st.t : '';
    var k = st.t === 'wait' || st.t === 'if' ? '' : '<span class="k ' + st.t + '">' + (KL[st.t] || st.t) + '</span>';
    var tx = st.subject ? 'Subject: ' + st.subject + '. ' + st.text : (st.text || '');
    return '<li class="' + cls + '">' + k + esc(st.label) + (st.cond ? ' <span class="meta">(Yes branch)</span>' : '') + (tx ? '<span class="tx">' + esc(tx) + '</span>' : '') + '</li>';
  }
  function renderWfs(flashWf) {
    $('wfs').innerHTML = G.WORKFLOWS.map(function (wf, i) {
      return '<div class="wf' + (flashWf[wf.id] ? ' flash' : '') + '"><div class="hd"><b>' + (i + 1) + '. ' + esc(wf.name) + '</b><span>fired ' + (s.fired[wf.id] || 0) + 'x</span></div>' +
        '<div class="trig">Trigger: ' + esc(wf.trigger.label) + '</div><ul class="steps">' + wf.steps.map(stepHtml).join('') + '</ul>' +
        (wf.goal ? '<div class="goal">' + esc(wf.goal.label) + '</div>' : '') + '</div>';
    }).join('');
  }
  function renderLog() {
    var feed = s.feed.slice().sort(function (a, b) { return b.at - a.at || b.n - a.n; }).slice(0, 150);
    $('logN').textContent = s.feed.length + ' entries';
    $('log').innerHTML = feed.length ? feed.map(function (e) {
      var wf = e.wf ? G.wfById(e.wf) : null, o = G.opp(s, e.oppId), c = o ? s.contacts[o.contactId] : null;
      return '<div class="le ' + e.kind + (e.n > seen ? ' new' : '') + '"><div class="mt"><span class="k ' + e.kind + '">' + (KL[e.kind] || e.kind) + '</span><span>' + esc(G.fmtDT(e.at)) + '</span>' +
        (wf ? '<span>· ' + esc(wf.name) + '</span>' : (c ? '<span>· ' + esc(c.name) + '</span>' : '')) + '</div>' +
        (e.to ? '<div class="meta">To: ' + esc(e.to) + '</div>' : '') + (e.subject ? '<div class="sub">' + esc(e.subject) + '</div>' : '') + esc(e.text) + '</div>';
    }).join('') : '<p class="legend">Nothing yet. Submit the lead form or move a card.</p>';
  }
  function renderQueue() {
    var q = s.queue.filter(function (a) { return a.status === 'scheduled'; }).sort(function (a, b) { return a.due - b.due; });
    $('queue').innerHTML = q.length ? q.slice(0, 12).map(function (a) {
      var o = G.opp(s, a.oppId), c = s.contacts[o.contactId];
      return '<li><b>' + esc(G.fmtDT(a.due)) + '</b> · ' + esc(a.label) + ' · ' + esc(c.name) + (a.cond ? ' <span class="meta">(if ' + (a.cond === 'no_reply' ? 'no reply' : 'still ' + G.stageName(a.condStage)) + ')</span>' : '') + '</li>';
    }).join('') + (q.length > 12 ? '<li>+' + (q.length - 12) + ' more</li>' : '') : '<li class="legend">Nothing scheduled.</li>';
  }
  function renderTasks() {
    var t = s.tasks.slice().reverse();
    $('tasks').innerHTML = t.length ? t.map(function (x) { return '<li class="' + (x.done ? 'done' : '') + '"><input type="checkbox" data-task="' + x.id + '"' + (x.done ? ' checked' : '') + '><span>' + esc(x.text) + ' <span class="meta">· ' + esc(G.fmtDT(x.due)) + '</span></span></li>'; }).join('') : '<li class="legend" style="background:none">No tasks yet. Leads that don\'t reply in 1 day get a call task.</li>';
  }
  function renderChecklist() {
    var total = 0, done = 0;
    $('checklist').innerHTML = G.CHECKLIST.map(function (sec, i) {
      return '<section><h3>' + (i + 1) + '. ' + esc(sec.s) + '</h3>' + sec.items.map(function (it, j) {
        var id = i + '.' + j; total++; if (checks[id]) done++;
        return '<label><input type="checkbox" data-chk="' + id + '"' + (checks[id] ? ' checked' : '') + '>' + esc(it) + '</label>';
      }).join('') + '</section>';
    }).join('');
    $('progBar').style.width = Math.round(done / total * 100) + '%';
    $('progTx').textContent = done + ' of ' + total + ' setup steps ticked';
  }
  function renderJson() { $('json').textContent = G.exportJSON(s); }

  function renderAll() {
    var flash = {}, flashWf = {};
    s.feed.forEach(function (e) { if (e.n > seen && e.oppId) flash[e.oppId] = 1; });
    Object.keys(s.fired).forEach(function (k) { if ((s.fired[k] || 0) > (firedSeen[k] || 0)) flashWf[k] = 1; });
    renderClock(); renderKpis(); renderBoard(flash); renderWfs(flashWf); renderLog(); renderQueue(); renderTasks(); renderChecklist(); renderJson();
    seen = s.seq; firedSeen = JSON.parse(JSON.stringify(s.fired));
    save();
  }
  // render again but keep the "new" highlight for the entries of this action only
  function after(msg) { renderAll(); if (msg) toast(msg); }
  function countSince(n0, kinds) { return s.feed.filter(function (e) { return e.n > n0 && (!kinds || kinds.indexOf(e.kind) >= 0); }).length; }

  function move(id, stage) {
    var n0 = s.seq, r = G.moveOpp(s, id, stage);
    if (!r.ok || r.unchanged) return;
    after('Moved to ' + G.stageName(stage) + ' · ' + countSince(n0, ['sms', 'email', 'notify', 'task']) + ' actions fired, ' + countSince(n0, ['queued']) + ' scheduled');
  }

  // ---------- events ----------
  document.addEventListener('click', function (ev) {
    var t = ev.target;
    if (t.dataset.tab) {
      document.querySelectorAll('.tab').forEach(function (b) { b.classList.toggle('on', b === t); });
      document.querySelectorAll('.pane').forEach(function (p) { p.classList.toggle('on', p.id === 'p-' + t.dataset.tab); });
      return;
    }
    if (t.dataset.reply) {
      var n0 = s.seq; G.markReplied(s, t.dataset.reply, 'Yes, tomorrow afternoon works');
      var cx = countSince(n0, ['cancel']); after('Lead replied · owner alerted, moved to Contacted' + (cx ? ', ' + cx + ' pending follow-ups cancelled' : '')); return;
    }
    if (t.dataset.adv) {
      var n1 = s.seq; G.advance(s, Number(t.dataset.adv) * G.H);
      var c = countSince(n1, ['sms', 'email', 'notify', 'task']);
      var nq = s.queue.filter(function (a) { return a.status === 'scheduled'; }).sort(function (a, b) { return a.due - b.due; })[0];
      after('+' + (t.dataset.adv === '24' ? '1 day' : '1 hour') + ' · ' + c + ' scheduled action' + (c === 1 ? '' : 's') + ' fired' + (!c && nq ? '. Next: ' + G.fmtDT(nq.due) : '')); return;
    }
    if (t.id === 'reset') { s = G.newState(); seen = s.seq; firedSeen = {}; renderAll(); toast('Demo reset to the sample pipeline'); return; }
    if (t.id === 'story') {
      s = G.newState(); seen = s.seq; firedSeen = {};
      G.story(s); renderAll(); toast('Played 3 sample days: new lead, reply, booking, reminders, re-book, won, proposal'); return;
    }
    if (t.id === 'fill') {
      var f = $('leadF'), names = ['Chris Morgan', 'Dana Reyes', 'Alex Turner', 'Sam Patel', 'Jamie Lee'], nm = names[s.seq % names.length];
      f.name.value = nm; f.phone.value = '(555) 010-' + (3000 + s.seq % 900); f.email.value = nm.toLowerCase().replace(' ', '.') + '@example.com';
      f.service.selectedIndex = s.seq % f.service.options.length; f.source.selectedIndex = s.seq % f.source.options.length; return;
    }
    if (t.id === 'dl') {
      try {
        var blob = new Blob([G.exportJSON(s)], { type: 'application/json' }), a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = 'ghl-pipeline-workflows-config.json';
        document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
        toast('Downloaded ghl-pipeline-workflows-config.json');
      } catch (e) { toast('Download blocked by the browser; copy the JSON below instead'); }
    }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.dataset.move && t.value) { move(t.dataset.move, t.value); return; }
    if (t.dataset.task) { G.completeTask(s, t.dataset.task); renderTasks(); renderKpis(); save(); return; }
    if (t.dataset.chk) { checks[t.dataset.chk] = t.checked; renderChecklist(); save(); }
  });

  $('leadF').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var f = ev.target;
    $('fErr').textContent = ''; $('fOk').innerHTML = '';
    if (!f.consent.checked) { $('fErr').textContent = 'Please tick the consent box (needed for SMS follow-up).'; return; }
    var n0 = s.seq;
    var r = G.submitForm(s, { name: f.name.value, phone: f.phone.value, email: f.email.value, service: f.service.value, source: f.source.value });
    if (!r.ok) { $('fErr').textContent = r.errors.join('. ') + '.'; return; }
    var fired = countSince(n0, ['sms', 'email', 'notify', 'opp']), q = countSince(n0, ['queued']);
    $('fOk').innerHTML = '<div class="okmsg">Created ' + esc(r.contact.name) + ' in New Lead (' + G.money(r.opp.value) + '). Workflow 1 fired ' + fired + ' actions now and scheduled ' + q + ' for tomorrow if no reply. See the activity log.</div>';
    f.reset(); f.consent.checked = true;
    after('New lead created · SMS + email sent, owner alerted');
  });

  // drag and drop
  var dragId = null;
  document.addEventListener('dragstart', function (ev) { var c = ev.target.closest && ev.target.closest('.oppc'); if (!c) return; dragId = c.dataset.id; try { ev.dataTransfer.setData('text/plain', dragId); ev.dataTransfer.effectAllowed = 'move'; } catch (e) {} });
  document.addEventListener('dragover', function (ev) { var col = ev.target.closest && ev.target.closest('.col'); if (!col || !dragId) return; ev.preventDefault(); document.querySelectorAll('.col.over').forEach(function (x) { if (x !== col) x.classList.remove('over'); }); col.classList.add('over'); });
  document.addEventListener('dragleave', function (ev) { var col = ev.target.closest && ev.target.closest('.col'); if (col && !col.contains(ev.relatedTarget)) col.classList.remove('over'); });
  document.addEventListener('drop', function (ev) { var col = ev.target.closest && ev.target.closest('.col'); if (!col || !dragId) return; ev.preventDefault(); col.classList.remove('over'); var id = dragId; dragId = null; move(id, col.dataset.stage); });
  document.addEventListener('dragend', function () { dragId = null; document.querySelectorAll('.col.over').forEach(function (x) { x.classList.remove('over'); }); });

  // init
  $('fService').innerHTML = Object.keys(G.SERVICES).map(function (k) { return '<option>' + esc(k) + '</option>'; }).join('');
  $('fSource').innerHTML = G.SOURCES.map(function (k) { return '<option>' + esc(k) + '</option>'; }).join('');
  load();
  renderAll();
})();
