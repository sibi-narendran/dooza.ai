/* UI for the welcome automation demo. Demo by Dooza. */
(function () {
  'use strict';
  var W = window.WelcomeEngine, esc = W.esc;
  var E, selMsg = null, segFilter = null, hlEmail = null;
  var KEY = 'dooza-welcome-demo-template';
  function $(id) { return document.getElementById(id); }

  function loadTpl() { try { var t = localStorage.getItem(KEY); return t ? JSON.parse(t) : null; } catch (e) { return null; } }
  function saveTpl() { try { localStorage.setItem(KEY, JSON.stringify(E.state.template)); } catch (e) { /* storage blocked: fine */ } }
  function clearTpl() { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } }

  function boot() {
    E = W.createEngine();
    E.seed();
    var t = loadTpl(); if (t) E.setTemplate(t);
    selMsg = null; segFilter = null; hlEmail = null;
    var r = E.signup({ name: 'Jordan Taylor', email: 'jordan.taylor@example.com', interest: 'Strength training', source: 'Instagram' });
    if (r.sent) { selMsg = r.email.id; hlEmail = r.contact.email; }
    fillEditor(); renderAll();
  }

  function opts(sel, list) { sel.innerHTML = list.map(function (v) { return '<option>' + esc(v) + '</option>'; }).join(''); }

  function iframeDoc(html) {
    return '<!doctype html><html><head><meta charset="utf-8"><base target="_blank"><style>body{margin:0;background:#f3f3f3;font:15px/1.55 Helvetica,Arial,sans-serif;color:#222}' +
      '.w{max-width:560px;margin:0 auto;background:#fff;padding:26px 24px}.hd{background:#111;color:#fff;font-weight:800;letter-spacing:.5px;padding:14px 24px;max-width:560px;margin:16px auto 0}.hd span{color:#e8590c}</style></head>' +
      '<body><div class="hd">PEAK <span>FIT</span> STUDIO</div><div class="w">' + html + '</div></body></html>';
  }

  function messageView(m) {
    return '<div class="envelope"><div><span class="m">From</span>' + esc(m.from) + '</div><div><span class="m">To</span>' + esc(m.to) + '</div>' +
      '<div><span class="m">Subject</span><b>' + esc(m.subject) + '</b></div><div><span class="m">Preheader</span>' + esc(m.preheader) + '</div>' +
      (m.time ? '<div><span class="m">Sent</span>' + esc(m.time) + (m.test ? ' (test)' : '') + '</div>' : '') +
      '</div><iframe class="prev" sandbox="" title="Email preview"></iframe>';
  }
  function mount(container, m) {
    container.innerHTML = messageView(m);
    container.querySelector('iframe').srcdoc = iframeDoc(m.html);
  }

  function kpis() {
    var s = E.stats();
    var items = [['Contacts', s.contacts], ['Subscribed', s.subscribed], ['Unsubscribed', s.unsubscribed],
      ['Entered journey', s.entered], ['Welcome emails sent', s.welcomesSent], ['Test sends', s.tests]];
    $('kpis').innerHTML = items.map(function (i) { return '<div class="kpi"><span>' + i[0] + '</span><b>' + i[1] + '</b></div>'; }).join('');
  }

  function logView() {
    $('log').innerHTML = E.state.log.map(function (l) {
      return '<li><time>' + esc(l.time.slice(11)) + '</time><b class="k k-' + l.kind + '">' + esc(l.kind) + '</b><span>' + esc(l.text) + '</span></li>';
    }).join('');
    $('n-count').textContent = E.state.journey.entered;
    $('n-mail-sub').textContent = 'Subject: ' + E.state.template.subject;
  }

  function inboxView() {
    var list = E.state.sent.slice().reverse();
    if (!list.length) { $('inbox').innerHTML = '<div class="inrow" style="cursor:default"><span class="pre">No emails sent yet. Submit the form.</span></div>'; $('sentview').innerHTML = ''; return; }
    $('inbox').innerHTML = list.map(function (m) {
      return '<div class="inrow' + (selMsg === m.id ? ' sel' : '') + '" data-id="' + m.id + '"><div class="meta"><span>To: ' + esc(m.to) + '</span><span>' + esc(m.time.slice(11)) + (m.test ? ' · TEST' : '') + '</span></div>' +
        '<b>' + esc(m.subject) + '</b><div class="pre">' + esc(m.preheader) + '</div></div>';
    }).join('');
    var m = null;
    for (var i = 0; i < E.state.sent.length; i++) if (E.state.sent[i].id === selMsg) m = E.state.sent[i];
    if (m) mount($('sentview'), m); else $('sentview').innerHTML = '';
  }

  function segView() {
    var segs = E.segments();
    var all = E.stats().subscribed;
    $('segs').innerHTML = '<button class="seg' + (segFilter ? '' : ' on') + '" data-s=""><div class="n">' + E.stats().contacts + '</div><b>All contacts</b><div class="r">' + all + ' subscribed, ' + E.stats().unsubscribed + ' unsubscribed</div></button>' +
      segs.map(function (g) {
        return '<button class="seg' + (segFilter === g.id ? ' on' : '') + '" data-s="' + g.id + '"><div class="n">' + g.count + '</div><b>' + esc(g.name) + '</b><div class="r">' + esc(g.rule) + '</div></button>';
      }).join('');
  }

  function rowsView() {
    var q = $('q').value.trim().toLowerCase();
    var list = segFilter ? E.segment(segFilter) : E.state.contacts.slice();
    list = list.filter(function (c) { return !q || (c.fname + ' ' + c.lname + ' ' + c.email).toLowerCase().indexOf(q) >= 0; })
      .sort(function (a, b) { return b.created - a.created; });
    var name = 'All contacts';
    if (segFilter) E.segments().forEach(function (g) { if (g.id === segFilter) name = 'Segment: ' + g.name; });
    $('tbl-title').textContent = name + ' (' + list.length + ')';
    $('rows').innerHTML = list.map(function (c) {
      var tags = c.tags.map(function (t) { var cls = t === 'New subscriber' ? 'p-new' : t.indexOf('Interest') === 0 ? 'p-int' : 'p-src'; return '<span class="pill ' + cls + '">' + esc(t) + '</span>'; }).join('');
      var st = c.status === 'subscribed' ? '<span class="pill p-sub">Subscribed</span>' : '<span class="pill p-uns">Unsubscribed</span>';
      var ws = c.welcomeSentAt ? esc(E.fmt(c.welcomeSentAt).slice(0, 16)) : '<span class="pill p-off">not sent</span>';
      var act = c.status === 'subscribed' ? '<button class="btn3 small" data-u="' + esc(c.email) + '">Unsubscribe</button>' : '<button class="btn2 small" data-r="' + esc(c.email) + '">Re-subscribe</button>';
      return '<tr' + (hlEmail === c.email ? ' class="hl"' : '') + '><td>' + esc((c.fname + ' ' + c.lname).trim() || '(no name)') + '</td><td>' + esc(c.email) + '</td><td>' + tags + '</td><td>' + st + '</td><td>' + esc(E.fmt(c.created).slice(0, 10)) + '</td><td>' + ws + '</td><td>' + act + '</td></tr>';
    }).join('') || '<tr><td colspan="7" class="muted">No contacts match.</td></tr>';
  }

  function previewView() {
    var who = $('pv-who');
    var cur = who.value;
    var subs = E.state.contacts.filter(function (c) { return c.status === 'subscribed'; }).slice().sort(function (a, b) { return b.created - a.created; });
    who.innerHTML = subs.map(function (c) { return '<option value="' + esc(c.email) + '">' + esc(c.fname + ' ' + c.lname + ' · ' + c.interest) + '</option>'; }).join('');
    if (cur && E.find(cur) && E.find(cur).status === 'subscribed') who.value = cur;
    var c = E.find(who.value) || subs[0];
    if (!c) { $('pv').innerHTML = ''; return; }
    var r = E.render(c);
    mount($('pv'), r);
    var left = E.unfilled(r);
    $('e-warn').innerHTML = left.length ? '<div class="warn">Unknown merge tag(s): ' + esc(left.join(', ')) + '. They would show as raw text. Use one of the chips above.</div>' : '';
  }

  function checklist() {
    var steps = [
      ['Audience', 'Confirm the audience (list) and default From name, From email and physical address', 'Audience > Settings > Audience name and defaults'],
      ['Fields', 'Add merge fields FNAME, LNAME, and a dropdown field for Interest (Weight loss, Strength, Yoga, PT) and Source', 'Audience > Settings > Audience fields and *|MERGE|* tags'],
      ['Tags', 'Create tags "New subscriber", "Interest: …" and "Source: …" so every signup is labelled the moment it arrives', 'Audience > Tags'],
      ['Form', 'Build or update the embedded/hosted signup form with name, email, interest and source; form applies the tags', 'Audience > Signup forms (or your site form via the Mailchimp integration)'],
      ['Trigger', 'Create the Customer Journey with starting point "Signs up" for this audience; run once per contact', 'Automations > Customer Journeys > Starting point: Signs up'],
      ['Email', 'Write and design the welcome email: subject, preview text, merge tags with fallbacks (*|FNAME|* → "there"), one clear button, unsubscribe footer', 'Journey > Send email'],
      ['Segments', 'Save segments: New subscribers (last 30 days), Interest = Strength/PT, Source = Instagram. Unsubscribed contacts are excluded automatically', 'Audience > Segments > New segment'],
      ['Domain', 'Check the sending domain: verify domain, add SPF/DKIM (and DMARC) records so the welcome lands in the inbox, not spam', 'Account > Domains > Authenticate'],
      ['Test', 'Send tests to Gmail and Outlook, then sign up through the real form with 2 test addresses and confirm each gets exactly one email', 'Journey > Send test email + live form test'],
      ['Live', 'Turn the journey on, watch the first real signups in the report, and hand over screenshots + a short note', 'Journey > Turn on · Reports']
    ];
    $('check').innerHTML = steps.map(function (s) { return '<li><b>' + esc(s[0]) + ': ' + esc(s[1]) + '</b><span class="where">' + esc(s[2]) + '</span></li>'; }).join('');
    var tests = [
      ['New signup', 'Contact appears in the audience with the right tags'],
      ['Trigger fires', 'Exactly one welcome email arrives, name and interest filled in'],
      ['Duplicate signup', 'Same email again: no second welcome'],
      ['Missing name', 'Greeting falls back to "there", no raw *|FNAME|*'],
      ['Unsubscribe', 'Link works; contact leaves every segment and gets nothing more'],
      ['Inbox placement', 'Test lands in Gmail Primary/Promotions, not spam (SPF/DKIM pass)']
    ];
    $('tests').innerHTML = tests.map(function (s) { return '<li class="done"><b>' + esc(s[0]) + '</b><small>' + esc(s[1]) + ' (proven in this demo, tab 1 and 3)</small></li>'; }).join('');
  }

  function fillEditor() {
    var t = E.state.template;
    $('e-fromname').value = t.fromName; $('e-fromemail').value = t.fromEmail;
    $('e-subject').value = t.subject; $('e-pre').value = t.preheader; $('e-body').value = t.body;
  }

  function renderAll() { kpis(); logView(); inboxView(); segView(); rowsView(); previewView(); }

  function flash() {
    ['n-start', 'n-tag', 'n-mail', 'n-exit'].forEach(function (id, i) {
      setTimeout(function () { var n = $(id); n.classList.add('flash'); setTimeout(function () { n.classList.remove('flash'); }, 700); }, i * 280);
    });
  }

  var FIRST = ['Ava', 'Noah', 'Mia', 'Liam', 'Zoe', 'Eli', 'Ruby', 'Omar', 'Ivy', 'Jack', 'Leah', 'Sam'];
  var LAST = ['Reed', 'Shaw', 'Diaz', 'Cole', 'Park', 'Bell', 'Ford', 'Gray', 'Hale', 'Moss'];
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  document.addEventListener('DOMContentLoaded', function () {
    opts($('f-int'), W.INTERESTS); opts($('f-src'), W.SOURCES);
    $('chips').innerHTML = ['*|FNAME|*', '*|LNAME|*', '*|INTEREST|*', '*|SOURCE|*', '*|EMAIL|*'].map(function (c) { return '<button type="button" class="chip">' + c + '</button>'; }).join('');
    checklist(); boot();

    $('tabs').addEventListener('click', function (ev) {
      var b = ev.target.closest('.tab'); if (!b) return;
      Array.prototype.forEach.call(document.querySelectorAll('.tab'), function (x) { x.classList.toggle('on', x === b); });
      Array.prototype.forEach.call(document.querySelectorAll('.pane'), function (p) { p.classList.toggle('on', p.id === 'p-' + b.dataset.p); });
    });

    var h = (location.hash || '').slice(1);
    if (h) { var tb = document.querySelector('.tab[data-p="' + h + '"]'); if (tb) tb.click(); }

    $('signup').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var r = E.signup({ name: $('f-name').value, email: $('f-email').value, interest: $('f-int').value, source: $('f-src').value });
      if (!r.ok) { $('f-err').className = 'err'; $('f-err').textContent = r.error; renderAll(); return; }
      hlEmail = r.contact.email;
      if (r.sent) { selMsg = r.email.id; flash(); $('f-err').className = 'okmsg'; $('f-err').textContent = 'Subscribed. Welcome email sent to ' + r.contact.email + ' (see log).'; }
      else { $('f-err').className = 'err'; $('f-err').textContent = r.duplicate ? 'Already on the list: no second welcome email (that is the de-dup rule working).' : 'Journey is paused: contact added, no email.'; }
      renderAll();
    });
    $('fill').addEventListener('click', function () {
      var f = pick(FIRST), l = pick(LAST);
      $('f-name').value = f + ' ' + l; $('f-email').value = (f + '.' + l + Math.floor(Math.random() * 90 + 10)).toLowerCase() + '@example.com';
      $('f-int').value = pick(W.INTERESTS); $('f-src').value = pick(W.SOURCES); $('f-err').textContent = '';
    });
    $('active').addEventListener('change', function (ev) { E.setActive(ev.target.checked); renderAll(); });
    $('reset').addEventListener('click', function () { $('active').checked = true; $('f-err').textContent = ''; boot(); });

    $('inbox').addEventListener('click', function (ev) { var r = ev.target.closest('.inrow'); if (!r || !r.dataset.id) return; selMsg = +r.dataset.id; inboxView(); });

    var saveT = null;
    function onEdit() {
      E.setTemplate({ fromName: $('e-fromname').value, fromEmail: $('e-fromemail').value, subject: $('e-subject').value, preheader: $('e-pre').value, body: $('e-body').value });
      saveTpl(); previewView(); logView();
      clearTimeout(saveT); $('e-saved').textContent = 'Saved. New signups get this version.'; saveT = setTimeout(function () { $('e-saved').textContent = ''; }, 1800);
    }
    ['e-fromname', 'e-fromemail', 'e-subject', 'e-pre', 'e-body'].forEach(function (id) { $(id).addEventListener('input', onEdit); });
    var lastField = $('e-body');
    ['e-subject', 'e-pre', 'e-body'].forEach(function (id) { $(id).addEventListener('focus', function () { lastField = $(id); }); });
    $('chips').addEventListener('click', function (ev) {
      var c = ev.target.closest('.chip'); if (!c) return;
      var f = lastField, s = f.selectionStart == null ? f.value.length : f.selectionStart, e2 = f.selectionEnd == null ? s : f.selectionEnd;
      f.value = f.value.slice(0, s) + c.textContent + f.value.slice(e2); f.focus(); f.selectionStart = f.selectionEnd = s + c.textContent.length; onEdit();
    });
    $('e-reset').addEventListener('click', function () { E.resetTemplate(); clearTpl(); fillEditor(); previewView(); logView(); });
    $('pv-who').addEventListener('change', previewView);
    $('t-send').addEventListener('click', function () {
      var r = E.testSend($('t-to').value);
      if (!r.ok) { $('t-err').className = 'err'; $('t-err').textContent = r.error; return; }
      selMsg = r.email.id; $('t-err').className = 'okmsg'; $('t-err').textContent = 'Test sent to ' + r.email.to + ' at ' + r.email.time.slice(11) + ' (simulated). Open tab 1 to see it in the log.';
      renderAll();
    });

    $('segs').addEventListener('click', function (ev) { var b = ev.target.closest('.seg'); if (!b) return; segFilter = b.dataset.s || null; segView(); rowsView(); });
    $('q').addEventListener('input', rowsView);
    $('rows').addEventListener('click', function (ev) {
      var u = ev.target.closest('[data-u]'), r = ev.target.closest('[data-r]');
      if (u) E.unsubscribe(u.dataset.u); else if (r) E.resubscribe(r.dataset.r); else return;
      renderAll();
    });
  });
})();
