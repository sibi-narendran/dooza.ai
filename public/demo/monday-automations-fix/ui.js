/* UI for the monday.com automations fix demo. Demo by Dooza. All user text goes through esc(). */
(function () {
  'use strict';
  var M = window.MondayFix, esc = M.esc;
  var S, running = false, hl = {};
  function $(id) { return document.getElementById(id); }
  function apply(action) {
    var r = M.reduce(S, action); S = r.state;
    hl = {}; r.events.forEach(function (e) { hl[e.item] = 1; });
    render();
  }

  function money(v) { return '$' + Number(v || 0).toLocaleString('en-US'); }
  function sCls(s) { return 's-' + String(s).split(' ')[0]; }

  function renderClock() {
    $('clock').innerHTML = esc(M.fmtLocal(S.now)) + ' Montreal<small>' + esc(M.fmtUTC(S.now)) + ' account time · simulated clock</small>';
  }
  function renderMode() {
    Array.prototype.forEach.call($('mode').children, function (b) {
      var on = b.getAttribute('data-m') === S.mode;
      b.className = on ? ('on ' + (S.mode === 'before' ? 'bad' : 'good')) : '';
    });
    $('logmode').textContent = S.mode === 'before' ? 'running Before recipes' : 'running Fixed recipes';
  }
  function renderKpis() {
    var c = S.counters;
    var k = [
      ['Automation fires', c.fires, ''],
      ['Wrong-time / noisy fires', c.wrong, c.wrong ? 'warnk' : 'good'],
      ['Misses (did nothing)', c.misses, c.misses ? 'bad' : 'good'],
      ['Broken / fighting', c.broken + c.loops, (c.broken + c.loops) ? 'bad' : 'good']
    ];
    $('kpis').innerHTML = k.map(function (x) { return '<div class="kpi ' + x[2] + '"><span>' + esc(x[0]) + '</span><b>' + x[1] + '</b></div>'; }).join('');
  }
  function renderRows() {
    $('cnt').textContent = '(' + S.items.length + ' items)';
    $('rows').innerHTML = S.items.map(function (it) {
      var st = '<select data-id="' + it.id + '" data-f="status" class="' + sCls(it.status) + '" aria-label="Status of ' + esc(it.name) + '">' +
        M.STATUSES.map(function (s) { return '<option' + (s === it.status ? ' selected' : '') + '>' + esc(s) + '</option>'; }).join('') + '</select>';
      var dt = '<input type="date" data-id="' + it.id + '" data-f="date" value="' + esc(it.followUp) + '" aria-label="Follow-up date of ' + esc(it.name) + '">';
      return '<tr' + (hl[it.name] ? ' class="hl"' : '') + '><td><b>' + esc(it.name) + '</b><span class="em">' + esc(it.email || '-') + '</span></td><td>' + (it.owner ? esc(it.owner) : '<span class="empty">empty</span>') +
        '</td><td class="st">' + st + '</td><td class="dt">' + dt + '</td><td>' + money(it.value) +
        '</td><td><span class="grp' + (it.group === 'Won' ? ' won' : '') + '">' + esc(it.group) + '</span></td><td class="muted">' + esc(M.fmtLocal(it.updated)) + '</td></tr>';
    }).join('');
  }
  var KLABEL = { fire: 'fired', wrong: 'wrong', miss: 'miss', broken: 'broken', loop: 'loop', user: 'you' };
  var KROW = { wrong: 'lw', miss: 'lm', broken: 'lb', loop: 'lb' };
  function renderLog() {
    if (!S.log.length) { $('log').innerHTML = '<li><span class="muted">No activity yet. Press "Run the same 6 actions" or change a Status.</span></li>'; return; }
    $('log').innerHTML = S.log.slice().reverse().map(function (e) {
      return '<li class="' + (KROW[e.kind] || '') + '"><time>' + esc(M.fmtLocal(e.t)) + '</time><span class="k k-' + e.kind + '">' + esc(KLABEL[e.kind] || e.kind) + '</span><span>' +
        (e.recipe ? '<span class="rid">' + esc(e.recipe) + '</span>' : '') + esc(e.text) + '</span></li>';
    }).join('');
  }
  function render() { renderClock(); renderMode(); renderKpis(); renderRows(); renderLog(); }

  var CLSNAME = { 'wrong-time': 'Wrong time', 'does-nothing': 'Does nothing', broken: 'Broken', ok: 'Working' };
  function recipeCard(r, old) {
    var del = old && r.id === 'F';
    return '<div class="recipe ' + r.cls + '"><div class="row"><span class="rid">' + esc(r.id) + '</span><span class="cls">' + esc(CLSNAME[r.cls] || '') + '</span><span class="sp"></span><span class="chipx c-' + r.cls + '">' + esc(r.chip) + '</span></div>' +
      '<div class="sent">' + r.when + ', ' + r.then + '</div>' + // recipe text is static, authored in app.js
      '<div class="why">' + esc(r.why) + '</div>' +
      (old ? '<div class="was">' + (del ? 'Deleted: ' : 'Was: ') + esc(old.when.replace(/<[^>]+>/g, '') + ', ' + old.then.replace(/<[^>]+>/g, '')) + '</div>' : '') + '</div>';
  }
  function renderRecipes() {
    $('rb').innerHTML = M.RECIPES.before.map(function (r) { return recipeCard(r); }).join('');
    $('rf').innerHTML = M.RECIPES.fixed.map(function (r, i) { return recipeCard(r, M.RECIPES.before[i]); }).join('');
  }

  var CHECK = [
    ['Export the current automations list', 'Every recipe on every board, who made it, ON/OFF, last run.', 'Board → Automate → Board automations; Admin → Automations Center'],
    ['Read the usage + activity log per recipe', 'Which ones fire, how often, failures, and the monthly action quota (a full quota silently stops ALL recipes).', 'Automations Center → Usage · each recipe → Activity'],
    ['Sort each into a class', 'Wrong time (fires too often, wrong hour), does nothing (bad reference, empty column, wrong condition), broken (loops, two recipes fighting).', 'Audit sheet'],
    ['Check column references', 'Recipes pointing at renamed or deleted columns, groups, people or boards (common after a board rebuild).', 'Each recipe → edit'],
    ['Check timezones', 'Account timezone vs your team; set the hour + timezone on every "date arrives" trigger.', 'Admin → General → Account timezone'],
    ['Find loops and conflicts', 'Map triggers to actions; any action that triggers another recipe on the same item gets removed or guarded.', 'Audit sheet: trigger → action map'],
    ['Rebuild cleanly', 'Narrow triggers ("changes to X", not "anything"), conditions where needed, "set date to today + N" not "push", fallbacks for empty people columns.', 'Board → Automate'],
    ['Test each with a test item', 'Dedicated test item per recipe; check the activity log entry and the notification arrived at the right time.', 'Test group on the board'],
    ['Monitor the activity log for 48 hours', 'Watch real traffic, fix anything that misses, then delete the test items.', 'Automations Center → Activity'],
    ['Hand over a 1-page doc', '"What each automation does": trigger, action, owner, why. So the next CRM phase builds on solid ground.', 'Shared doc']
  ];
  var TESTS = [
    ['A: change Status back and forth', 'Expect 0 pings for New ↔ Contacted, exactly 1 for Proposal sent, 1 for Won.'],
    ['B: set Follow-up date to tomorrow', 'Expect no ping tonight; one ping at 9:00 AM Eastern tomorrow.'],
    ['C: set Proposal sent on an item with an empty date', 'Expect Follow-up date = today + 3.'],
    ['D: create an item from the web form (no owner)', 'Expect Owner = fallback person, never empty.'],
    ['E/F: set Won', 'Expect item in group Won, Status still Won, one manager notice, no second run in the activity log.'],
    ['Quota check', 'Actions used this month vs plan limit, so nothing stops mid-month.']
  ];
  function renderChecklist() {
    $('check').innerHTML = CHECK.map(function (c) { return '<li><b>' + esc(c[0]) + '</b><small>' + esc(c[1]) + '</small><span class="where">' + esc(c[2]) + '</span></li>'; }).join('');
    $('tests').innerHTML = TESTS.map(function (c) { return '<li><b>' + esc(c[0]) + '</b><small>' + esc(c[1]) + '</small></li>'; }).join('');
  }

  function wire() {
    Array.prototype.forEach.call(document.querySelectorAll('#tabs .tab'), function (t) {
      t.addEventListener('click', function () {
        Array.prototype.forEach.call(document.querySelectorAll('#tabs .tab'), function (x) { x.classList.toggle('on', x === t); });
        Array.prototype.forEach.call(document.querySelectorAll('.pane'), function (p) { p.classList.toggle('on', p.id === 'p-' + t.getAttribute('data-p')); });
      });
    });
    $('mode').addEventListener('click', function (e) {
      var m = e.target.getAttribute && e.target.getAttribute('data-m'); if (!m || running) return;
      hl = {}; S = M.reduce(S, { type: 'setMode', mode: m }).state; render();
    });
    $('rows').addEventListener('change', function (e) {
      var el = e.target, id = +el.getAttribute('data-id'), f = el.getAttribute('data-f');
      if (f === 'status') apply({ type: 'setStatus', id: id, status: el.value });
      if (f === 'date') apply({ type: 'setDate', id: id, date: el.value });
    });
    $('to9').addEventListener('click', function () { apply({ type: 'advanceTo9' }); });
    $('day').addEventListener('click', function () { apply({ type: 'advanceDay' }); });
    $('h6').addEventListener('click', function () { apply({ type: 'advance', hours: 6 }); });
    $('reset').addEventListener('click', function () { hl = {}; S = M.reduce(S, { type: 'reset' }).state; render(); });
    $('scen').addEventListener('click', function () {
      if (running) return; running = true;
      S = M.reduce(S, { type: 'reset' }).state; render();
      var i = 0;
      (function next() {
        if (i >= M.SCENARIO.length) { running = false; return; }
        apply(M.SCENARIO[i++]); setTimeout(next, 650);
      })();
    });
    $('n-by').innerHTML = '<option value="">Web form (no creator)</option>' + M.OWNERS.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('');
    $('newf').addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('n-name').value;
      apply({ type: 'createItem', name: name, creator: $('n-by').value, value: $('n-val').value,
        email: name ? 'hello@' + name.toLowerCase().replace(/[^a-z0-9]+/g, '') .slice(0, 30) + '.example' : '' });
      $('n-name').value = '';
    });
  }

  S = M.createState('before');
  wire(); renderRecipes(); renderChecklist(); render();
  // #run-before / #run-fixed: run the scenario instantly (for screenshots and shared links)
  var h = /^#run-(before|fixed)$/.exec(location.hash || '');
  if (h) { S = M.createState(h[1]); M.SCENARIO.forEach(function (a) { S = M.reduce(S, a).state; }); hl = {}; render(); }
})();
