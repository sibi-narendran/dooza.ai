/* monday.com automations audit + fix engine (simulation). Demo by Dooza.
   Pure logic: reduce(state, action) -> { state: newState, events: [...] }. The input state is never mutated.
   Runs in the browser (window.MondayFix) and in node (module.exports). */
(function (root) {
  'use strict';

  var STATUSES = ['New', 'Contacted', 'Proposal sent', 'Won', 'Lost'];
  var OWNERS = ['Maya Tremblay', 'Luc Gagnon', 'Priya Shah'];
  var FALLBACK_OWNER = 'Maya Tremblay';
  var HOUR = 3600000, DAY = 86400000;
  var MAX_DEPTH = 6; // cascade cap: no recipe chain may go deeper than this

  // ---- time: account timezone is UTC (monday default for this account); owners sit in Montreal (America/Toronto)
  function nthSunday(y, m, n) { // day-of-month of the nth Sunday
    var first = new Date(Date.UTC(y, m, 1)).getUTCDay();
    return 1 + ((7 - first) % 7) + 7 * (n - 1);
  }
  function torontoOffset(ts) { // hours vs UTC: -4 in DST, -5 otherwise
    var y = new Date(ts).getUTCFullYear();
    var start = Date.UTC(y, 2, nthSunday(y, 2, 2), 7); // 2nd Sun Mar 02:00 EST
    var end = Date.UTC(y, 10, nthSunday(y, 10, 1), 6);  // 1st Sun Nov 02:00 EDT
    return (ts >= start && ts < end) ? -4 : -5;
  }
  function local(ts) { // {y,m,d,h,mi,dow} in Montreal
    var d = new Date(ts + torontoOffset(ts) * HOUR);
    return { y: d.getUTCFullYear(), m: d.getUTCMonth(), d: d.getUTCDate(), h: d.getUTCHours(), mi: d.getUTCMinutes(), dow: d.getUTCDay() };
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmtLocal(ts) { var l = local(ts); return DOW[l.dow] + ' ' + l.d + ' ' + MON[l.m] + ' ' + pad(l.h) + ':' + pad(l.mi); }
  function fmtUTC(ts) { var d = new Date(ts); return pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ' UTC'; }
  function localDateStr(ts) { var l = local(ts); return l.y + '-' + pad(l.m + 1) + '-' + pad(l.d); }
  function parseDate(s) { var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ''); return p ? { y: +p[1], m: +p[2] - 1, d: +p[3] } : null; }
  function addDays(s, n) { var p = parseDate(s); if (!p) return ''; var d = new Date(Date.UTC(p.y, p.m, p.d) + n * DAY); return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()); }
  function torontoAt(s, hour) { // UTC ts of <hour>:00 Montreal on date s
    var p = parseDate(s); if (!p) return null;
    var guess = Date.UTC(p.y, p.m, p.d, hour) + 5 * HOUR;
    return Date.UTC(p.y, p.m, p.d, hour) - torontoOffset(guess) * HOUR;
  }
  function nextNine(now) { // next 09:00 Montreal strictly after now
    var t = torontoAt(localDateStr(now), 9);
    if (t <= now) t = torontoAt(addDays(localDateStr(now), 1), 9);
    return t;
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  // ---- recipes: display text + handlers. Handler(ctx) returns nothing; it logs and may emit follow-up triggers.
  // date-arrives fire instant per mode
  function bFireAt(mode, dateStr) {
    var p = parseDate(dateStr); if (!p) return null;
    return mode === 'before' ? Date.UTC(p.y, p.m, p.d, 0, 0) : torontoAt(dateStr, 9);
  }

  var RECIPES = {
    before: [
      { id: 'A', when: 'When <b>Status</b> changes to <b>anything</b>', then: 'notify <b>Owner</b>', cls: 'wrong-time', chip: 'Fires too often',
        why: 'Every edit pings the owner, including typo fixes and back-and-forth (New → Contacted → New = 2 pings). People mute it, then miss the real ones.',
        on: 'status', run: function (c) {
          var good = c.to === 'Proposal sent' || c.to === 'Won';
          c.log(good ? 'fire' : 'wrong', 'Notified ' + (c.item.owner || '(nobody: Owner empty)') + ': "' + c.item.name + '" Status ' + c.from + ' → ' + c.to + (good ? '' : '  (noise: nobody needs a ping for this)'));
        } },
      { id: 'B', when: 'When <b>Follow-up date</b> arrives', then: 'notify <b>Owner</b>', cls: 'wrong-time', chip: 'Wrong time',
        why: 'Date-arrives runs at 00:00 in the account timezone (UTC). For a Montreal owner that is 19:00 the evening before, so the reminder lands after work and is gone by morning.',
        on: 'date', run: function (c) {
          c.log('wrong', 'Notified ' + (c.item.owner || '(nobody)') + ': follow up "' + c.item.name + '" (due ' + c.item.followUp + '). Sent ' + fmtLocal(c.now) + ' Montreal = ' + fmtUTC(c.now) + ', the evening BEFORE.');
        } },
      { id: 'C', when: 'When <b>Status</b> changes to <b>Proposal sent</b>', then: 'push <b>Follow-up date</b> by <b>3 days</b>', cls: 'does-nothing', chip: 'Does nothing',
        why: '"Push date" only moves a date that exists. New leads have an empty Follow-up date, so there is nothing to push and no reminder is ever set.',
        on: 'status', to: ['Proposal sent'], run: function (c) {
          if (!c.item.followUp) { c.log('miss', 'Follow-up date is empty: nothing to push. No reminder set for "' + c.item.name + '".'); return; }
          var nd = addDays(c.item.followUp, 3); c.setField('followUp', nd);
          c.log('fire', 'Pushed Follow-up date of "' + c.item.name + '" by 3 days to ' + nd + '.');
        } },
      { id: 'D', when: 'When an <b>item is created</b>', then: 'assign <b>Owner</b> = column <b>"Lead person"</b>', cls: 'does-nothing', chip: 'Does nothing',
        why: 'The recipe still points at the person column "Lead person", which was deleted when the board was rebuilt. monday keeps the recipe ON but it copies nothing.',
        on: 'created', run: function (c) {
          c.log('miss', 'Column "Lead person" not found (deleted). Owner left empty on "' + c.item.name + '". Nobody owns this lead.');
        } },
      { id: 'E', when: 'When <b>Status</b> changes to <b>Won</b>', then: 'move item to group <b>Won</b>', cls: 'broken', chip: 'Fights F',
        why: 'On its own this is fine. Together with F, every Won deal is moved and then immediately reset, so Won never sticks.',
        on: 'status', to: ['Won'], run: function (c) {
          if (c.item.group === 'Won') return;
          c.setField('group', 'Won'); c.log('fire', 'Moved "' + c.item.name + '" to group Won.'); c.emit({ on: 'moved', group: 'Won' });
        } },
      { id: 'F', when: 'When an item is <b>moved to group Won</b>', then: 'set <b>Status</b> to <b>Contacted</b>', cls: 'broken', chip: 'Loop / conflict',
        why: 'Built to "restart onboarding", it undoes E: Status flips Won → Contacted, which re-triggers A. The item bounces and Won disappears from reports.',
        on: 'moved', group: 'Won', run: function (c) {
          var from = c.item.status; c.setField('status', 'Contacted');
          c.log('broken', 'Status reset ' + from + ' → Contacted on "' + c.item.name + '" right after E moved it. Recipes fight; the Won is lost.');
          c.emit({ on: 'status', from: from, to: 'Contacted' });
        } }
    ],
    fixed: [
      { id: 'A', when: 'When <b>Status</b> changes to <b>Proposal sent</b> or <b>Won</b>', then: 'notify <b>Owner</b>', cls: 'ok', chip: 'Fixed',
        why: 'Only the two moments that need action ping the owner. Back-and-forth edits stay quiet.',
        on: 'status', to: ['Proposal sent', 'Won'], run: function (c) {
          c.log('fire', 'Notified ' + (c.item.owner || FALLBACK_OWNER) + ': "' + c.item.name + '" is now ' + c.to + '.');
        } },
      { id: 'B', when: 'When <b>Follow-up date</b> arrives <b>at 9:00 AM (America/Toronto)</b>', then: 'notify <b>Owner</b>', cls: 'ok', chip: 'Fixed',
        why: 'Time and timezone set on the trigger (and the account timezone set to Eastern), so the reminder lands at 9:00 on the day.',
        on: 'date', run: function (c) {
          c.log('fire', 'Notified ' + (c.item.owner || FALLBACK_OWNER) + ': follow up "' + c.item.name + '" today. Sent ' + fmtLocal(c.now) + ' Montreal.');
        } },
      { id: 'C', when: 'When <b>Status</b> changes to <b>Proposal sent</b>', then: 'set <b>Follow-up date</b> to <b>today + 3 days</b>', cls: 'ok', chip: 'Fixed',
        why: '"Set date to today + N" works on empty dates too, so every proposal gets a reminder.',
        on: 'status', to: ['Proposal sent'], run: function (c) {
          var nd = addDays(localDateStr(c.now), 3); c.setField('followUp', nd);
          c.log('fire', 'Set Follow-up date of "' + c.item.name + '" to ' + nd + ' (today + 3).');
        } },
      { id: 'D', when: 'When an <b>item is created</b> and <b>Owner</b> is empty', then: 'assign <b>Owner</b> = creator, else <b>' + FALLBACK_OWNER + '</b>', cls: 'ok', chip: 'Fixed',
        why: 'Re-pointed to the live Owner column, with a fallback so no lead is ever unowned.',
        on: 'created', run: function (c) {
          if (c.item.owner) { c.log('fire', 'Owner already set (' + c.item.owner + ') on "' + c.item.name + '". Kept.'); return; }
          var o = c.item.creator || FALLBACK_OWNER; c.setField('owner', o);
          c.log('fire', 'Assigned Owner ' + o + ' to "' + c.item.name + '"' + (c.item.creator ? ' (creator).' : ' (fallback).'));
        } },
      { id: 'E', when: 'When <b>Status</b> changes to <b>Won</b>', then: 'move item to group <b>Won</b>', cls: 'ok', chip: 'Kept',
        why: 'Unchanged. It works once F is gone.',
        on: 'status', to: ['Won'], run: function (c) {
          if (c.item.group === 'Won') return;
          c.setField('group', 'Won'); c.log('fire', 'Moved "' + c.item.name + '" to group Won.'); c.emit({ on: 'moved', group: 'Won' });
        } },
      { id: 'F', when: 'When <b>Status</b> changes to <b>Won</b>', then: 'notify <b>Sales manager</b> (deal value + owner)', cls: 'ok', chip: 'Replaced',
        why: 'Old F deleted (it reset Won). Onboarding now starts from this notice, no status writes, so no loop is possible.',
        on: 'status', to: ['Won'], run: function (c) {
          c.log('fire', 'Notified Sales manager: "' + c.item.name + '" won, $' + c.item.value.toLocaleString('en-US') + ', owner ' + (c.item.owner || FALLBACK_OWNER) + '.');
        } }
    ]
  };

  // ---- seed board
  var START = Date.UTC(2026, 10, 11, 14, 0); // Wed 11 Nov 2026 09:00 Montreal
  var SEED = [
    ['Northline Outfitters', 0, 'New', '2026-11-12', 4800],
    ['Plateau Coffee Co.', 1, 'Contacted', '', 2200],
    ['Maison Verdun Decor', 2, 'New', '', 6500],
    ['Laurier Bike Shop', 0, 'Proposal sent', '2026-11-13', 3900],
    ['Mile End Ceramics', 1, 'Contacted', '2026-11-14', 1800],
    ['Saint-Henri Apparel', 2, 'New', '', 7200],
    ['Old Port Candles', 0, 'Proposal sent', '2026-11-12', 2600],
    ['Rosemont Pet Supply', 1, 'Won', '', 5400],
    ['Outremont Skincare', 2, 'Contacted', '2026-11-16', 3100],
    ['Griffintown Gear', 0, 'Lost', '', 950],
    ['Westmount Tea House', 1, 'New', '2026-11-13', 1500],
    ['Verdun Fitness Studio', 2, 'Contacted', '', 4200]
  ];
  function slug(n) { return n.toLowerCase().replace(/[^a-z0-9]+/g, '.').replace(/^\.|\.$/g, ''); }

  function createState(mode) {
    mode = mode === 'fixed' ? 'fixed' : 'before';
    var items = SEED.map(function (r, i) {
      return { id: i + 1, name: r[0], owner: OWNERS[r[1]], status: r[2], followUp: r[3], value: r[4],
        email: 'hello@' + slug(r[0]).replace(/\./g, '') + '.example', group: r[2] === 'Won' ? 'Won' : 'Pipeline', updated: START - (i + 1) * 3 * HOUR };
    });
    return { mode: mode, now: START, items: items, nextId: items.length + 1, log: [], fired: {},
      counters: { fires: 0, misses: 0, wrong: 0, broken: 0, loops: 0 } };
  }
  function clone(s) { return JSON.parse(JSON.stringify(s)); }
  function findItem(s, id) { for (var i = 0; i < s.items.length; i++) if (s.items[i].id === id) return s.items[i]; return null; }

  // ---- dispatch a trigger through the active recipes (with cascade cap + loop detection)
  function dispatch(s, recipes, trig, events, depth, chain) {
    var item = findItem(s, trig.itemId); if (!item) return;
    recipes.forEach(function (r) {
      if (r.on !== trig.on) return;
      if (r.to && r.to.indexOf(trig.to) < 0) return;
      if (r.group && r.group !== trig.group) return;
      var key = r.id + ':' + item.id;
      if (depth > MAX_DEPTH || chain.indexOf(key) >= 0) {
        s.counters.loops++;
        push(s, events, { kind: 'loop', recipe: r.id, item: item.name, text: 'Loop guard: recipe ' + r.id + ' would run again on "' + item.name + '" in the same chain (depth ' + depth + '). Stopped.' });
        return;
      }
      var emitted = [];
      var ctx = { item: item, from: trig.from, to: trig.to, now: s.now,
        log: function (kind, text) { push(s, events, { kind: kind, recipe: r.id, item: item.name, text: text }); },
        setField: function (f, v) { item[f] = v; item.updated = s.now; },
        emit: function (t) { t.itemId = item.id; emitted.push(t); } };
      r.run(ctx);
      emitted.forEach(function (t) { dispatch(s, recipes, t, events, depth + 1, chain.concat([key])); });
    });
  }
  function push(s, events, e) {
    e.t = s.now; e.seq = s.log.length + 1;
    if (e.kind === 'fire') s.counters.fires++;
    if (e.kind === 'wrong') { s.counters.fires++; s.counters.wrong++; }
    if (e.kind === 'broken') { s.counters.fires++; s.counters.broken++; }
    if (e.kind === 'miss') s.counters.misses++;
    s.log.push(e); events.push(e);
  }

  function advanceTo(s, recipes, t1, events) {
    var t0 = s.now, due = [];
    s.items.forEach(function (it) {
      if (!it.followUp) return;
      var at = bFireAt(s.mode, it.followUp);
      var k = 'B:' + it.id + ':' + it.followUp;
      if (at != null && at > t0 && at <= t1 && !s.fired[k]) due.push({ at: at, id: it.id, k: k });
    });
    due.sort(function (a, b) { return a.at - b.at || a.id - b.id; });
    due.forEach(function (d) {
      s.now = d.at; var it = findItem(s, d.id);
      if (!it || bFireAt(s.mode, it.followUp) !== d.at) return; // date changed by an earlier fire
      s.fired[d.k] = true;
      dispatch(s, recipes, { on: 'date', itemId: d.id }, events, 0, []);
    });
    s.now = t1;
  }

  // ---- the reducer. actions: setStatus{id,status} setDate{id,date} createItem{name,email,value,owner,creator}
  //      advance{hours} | advanceDay | advanceTo9 | setMode{mode} | reset
  function reduce(state, action, recipesOverride) {
    var s = clone(state), events = [];
    var recipes = recipesOverride || RECIPES[s.mode];
    var it;
    switch (action.type) {
      case 'reset': return { state: createState(s.mode), events: [] };
      case 'setMode': return { state: createState(action.mode), events: [] };
      case 'setStatus':
        it = findItem(s, action.id);
        if (!it || STATUSES.indexOf(action.status) < 0 || it.status === action.status) break;
        var from = it.status; it.status = action.status; it.updated = s.now;
        push(s, events, { kind: 'user', recipe: '', item: it.name, text: 'You changed Status ' + from + ' → ' + action.status + '.' });
        dispatch(s, recipes, { on: 'status', itemId: it.id, from: from, to: action.status }, events, 0, []);
        break;
      case 'setDate':
        it = findItem(s, action.id);
        if (!it) break;
        var d = parseDate(action.date) ? action.date : '';
        if (it.followUp === d) break;
        it.followUp = d; it.updated = s.now;
        push(s, events, { kind: 'user', recipe: '', item: it.name, text: 'You set Follow-up date to ' + (d || '(empty)') + '.' });
        break;
      case 'createItem':
        var name = String(action.name || '').trim().slice(0, 60) || 'New lead ' + s.nextId;
        it = { id: s.nextId++, name: name, owner: OWNERS.indexOf(action.owner) >= 0 ? action.owner : '', creator: OWNERS.indexOf(action.creator) >= 0 ? action.creator : '',
          status: 'New', followUp: '', value: Math.max(0, Math.round(+action.value || 0)), email: String(action.email || '').trim().slice(0, 80), group: 'Pipeline', updated: s.now };
        s.items.push(it);
        push(s, events, { kind: 'user', recipe: '', item: it.name, text: 'You created item "' + it.name + '"' + (it.creator ? ' (as ' + it.creator + ')' : ' (via web form, no creator)') + '.' });
        dispatch(s, recipes, { on: 'created', itemId: it.id }, events, 0, []);
        delete it.creator;
        break;
      case 'advance': advanceTo(s, recipes, s.now + Math.max(0, +action.hours || 0) * HOUR, events); break;
      case 'advanceDay': advanceTo(s, recipes, s.now + DAY, events); break;
      case 'advanceTo9': advanceTo(s, recipes, nextNine(s.now), events); break;
    }
    return { state: s, events: events };
  }

  // the same scripted actions for both modes, so the logs can be compared side by side
  var SCENARIO = [
    { type: 'setStatus', id: 2, status: 'Proposal sent', note: 'Plateau Coffee: proposal sent (Follow-up date empty)' },
    { type: 'setStatus', id: 3, status: 'Contacted', note: 'Maison Verdun: New → Contacted' },
    { type: 'setStatus', id: 3, status: 'New', note: 'Maison Verdun: oops, back to New' },
    { type: 'createItem', name: 'Little Italy Florist', email: 'orders@littleitalyflorist.example', value: 2900, note: 'New lead from the web form' },
    { type: 'setStatus', id: 5, status: 'Won', note: 'Mile End Ceramics: Won' },
    { type: 'advanceDay', note: 'Clock +1 day (to Thu 9:00 AM)' }
  ];

  var api = { STATUSES: STATUSES, OWNERS: OWNERS, FALLBACK_OWNER: FALLBACK_OWNER, RECIPES: RECIPES, SCENARIO: SCENARIO, MAX_DEPTH: MAX_DEPTH, START: START,
    createState: createState, reduce: reduce, fmtLocal: fmtLocal, fmtUTC: fmtUTC, local: local, localDateStr: localDateStr, addDays: addDays,
    torontoOffset: torontoOffset, torontoAt: torontoAt, nextNine: nextNine, esc: esc };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.MondayFix = api;
})(this);
