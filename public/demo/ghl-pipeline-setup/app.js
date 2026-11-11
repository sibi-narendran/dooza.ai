/* GoHighLevel pipeline + workflow setup demo engine (Dooza sample). Sample data only.
   Pure logic, no DOM: newState() -> state, then submitForm / moveOpp / markReplied / advance.
   The UI lives in ui.js and only runs in a browser. In node: module.exports = API. */
(function (root) {
  'use strict';
  var M = 6e4, H = 36e5, DAY = 864e5;
  var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Business-local clock kept in UTC fields so it renders the same in every timezone.
  var START = Date.UTC(2026, 10, 16, 9, 0); // Mon 16 Nov 2026, 9:00am (sample)
  var IMMEDIATE = 5 * M; // actions due within 5 min of the trigger run at once (GHL "within 1 min" steps)

  // Assumption: the post does not name the business type, so the sample is a local home-services company.
  var BIZ = {
    name: 'Coastline Home Services', owner: 'Mike (owner)', ownerShort: 'Mike',
    calendar: 'Free Estimate (60 min)', bookLink: '[your booking calendar link]', reviewLink: '[your Google review link]'
  };
  var SERVICES = { 'AC repair': 380, 'AC replacement': 7800, 'Roof repair': 1450, 'Plumbing repair': 420, 'Water heater install': 1650, 'Pressure washing': 300 };
  var SOURCES = ['Website form', 'Facebook Lead Ad', 'Google Ads', 'Google Business Profile', 'Referral', 'Missed call text-back'];

  var STAGES = [
    { id: 'new', name: 'New Lead' }, { id: 'contacted', name: 'Contacted' },
    { id: 'booked', name: 'Appointment Booked' }, { id: 'noshow', name: 'No-Show' },
    { id: 'showed', name: 'Showed' }, { id: 'proposal', name: 'Proposal Sent' },
    { id: 'won', name: 'Won' }, { id: 'lost', name: 'Lost' }
  ];
  var STAGE_IDS = STAGES.map(function (s) { return s.id; });

  // Workflows written the way they are built in GHL Automation > Workflows.
  // off = when the action runs, measured from the trigger (or from the appointment when rel = 'appt').
  // cond = If/Else branch checked at run time. goal = GHL goal event that removes the contact from the workflow.
  var WORKFLOWS = [
    { id: 'wf_new', name: 'New lead: speed to lead', trigger: { type: 'form_submitted', label: 'Form submitted: "Request a Free Estimate"' },
      goal: { onReply: true, leaveStage: 'new', label: 'Goal: contact replies OR opportunity leaves New Lead (stops the follow-ups)' },
      steps: [
        { t: 'opp', off: 0, label: 'Create/Update opportunity', text: 'Sales Pipeline > New Lead, value = estimate for {{contact.service}}' },
        { t: 'sms', off: 0, label: 'Send SMS (within 1 min)', text: 'Hi {{contact.first_name}}, it\'s {{location.name}}. We got your request for {{contact.service}}. Reply here with a good time, or grab a free estimate slot: {{calendar.link}}' },
        { t: 'email', off: 1 * M, label: 'Send email', subject: 'Your {{contact.service}} request', text: 'Hi {{contact.first_name}}, thanks for reaching out to {{location.name}}. Book your free estimate here: {{calendar.link}}. Or just reply to this email.' },
        { t: 'notify', off: 0, label: 'Internal notification to owner (SMS + app)', text: 'New lead: {{contact.name}}, {{contact.service}}, {{contact.source}}, {{contact.phone}}' },
        { t: 'wait', label: 'Wait 1 day' },
        { t: 'if', label: 'If/Else: contact has not replied' },
        { t: 'sms', off: 1 * DAY, cond: 'no_reply', label: 'Send follow-up SMS', text: 'Hi {{contact.first_name}}, just checking in on your {{contact.service}} request. Want us to hold a slot this week? {{calendar.link}}' },
        { t: 'task', off: 1 * DAY, cond: 'no_reply', label: 'Create task: call', text: 'Call {{contact.name}} {{contact.phone}} (no reply after 1 day)' }
      ] },
    { id: 'wf_reply', name: 'Lead replied: alert + move to Contacted', trigger: { type: 'customer_replied', label: 'Customer replied (SMS or email)' },
      steps: [
        { t: 'notify', off: 0, label: 'Internal notification to owner', text: '{{contact.name}} replied: "{{message.body}}". Open the conversation and answer.' },
        { t: 'move', off: 0, stage: 'contacted', onlyFrom: ['new'], label: 'Move opportunity to Contacted (if in New Lead)' }
      ] },
    { id: 'wf_booked', name: 'Appointment booked: confirm + reminders', trigger: { type: 'stage', stage: 'booked', label: 'Pipeline stage changed to Appointment Booked (or Appointment status = booked)' },
      goal: { leaveStage: 'booked', label: 'Goal: opportunity leaves Appointment Booked (cancels unsent reminders)' },
      steps: [
        { t: 'sms', off: 0, label: 'Send confirmation SMS', text: 'You\'re booked, {{contact.first_name}}: {{appointment.start_time}} with {{location.name}} for {{contact.service}}. Reply C to confirm or R to reschedule.' },
        { t: 'email', off: 0, label: 'Send confirmation email', subject: 'Confirmed: {{appointment.start_time}}', text: 'See you {{appointment.start_time}}. Need to change it? {{calendar.link}}' },
        { t: 'notify', off: 0, label: 'Internal notification to owner', text: 'Booked: {{contact.name}}, {{appointment.start_time}}, {{contact.service}}' },
        { t: 'wait', label: 'Wait until 24 h before the appointment' },
        { t: 'sms', rel: 'appt', off: -24 * H, label: 'Reminder SMS (24 h before)', text: 'Reminder: {{location.name}} is coming {{appointment.start_time}} for your {{contact.service}}. Reply R to reschedule.' },
        { t: 'wait', label: 'Wait until 2 h before the appointment' },
        { t: 'sms', rel: 'appt', off: -2 * H, label: 'Reminder SMS (2 h before)', text: 'See you in 2 hours, {{contact.first_name}} ({{appointment.start_time}}).' }
      ] },
    { id: 'wf_noshow', name: 'No-show: re-book', trigger: { type: 'stage', stage: 'noshow', label: 'Pipeline stage changed to No-Show (or Appointment status = no-show)' },
      goal: { leaveStage: 'noshow', label: 'Goal: opportunity leaves No-Show (re-booked or closed)' },
      steps: [
        { t: 'sms', off: 15 * M, label: 'Send re-book SMS (15 min after)', text: 'Hi {{contact.first_name}}, sorry we missed you today. Pick a new time here and we\'ll be there: {{calendar.link}}' },
        { t: 'notify', off: 0, label: 'Internal notification to owner', text: 'No-show: {{contact.name}} ({{contact.service}}). Re-book text sent.' },
        { t: 'wait', label: 'Wait 1 day' },
        { t: 'if', label: 'If/Else: still in No-Show' },
        { t: 'email', off: 1 * DAY, cond: 'still_stage', label: 'Send re-book email', subject: 'Let\'s find a new time', text: 'Hi {{contact.first_name}}, still need help with {{contact.service}}? Book here: {{calendar.link}}' },
        { t: 'task', off: 1 * DAY, cond: 'still_stage', label: 'Create task: call', text: 'Call {{contact.name}} {{contact.phone}} to re-book (no-show yesterday)' }
      ] },
    { id: 'wf_proposal', name: 'Proposal sent: follow-up', trigger: { type: 'stage', stage: 'proposal', label: 'Pipeline stage changed to Proposal Sent' },
      goal: { leaveStage: 'proposal', label: 'Goal: opportunity moves to Won or Lost' },
      steps: [
        { t: 'email', off: 0, label: 'Send proposal email', subject: 'Your {{contact.service}} quote', text: 'Hi {{contact.first_name}}, here is your quote for {{contact.service}}: {{opportunity.value}}. Reply with any questions.' },
        { t: 'wait', label: 'Wait 2 days' },
        { t: 'if', label: 'If/Else: still in Proposal Sent' },
        { t: 'sms', off: 2 * DAY, cond: 'still_stage', label: 'Send follow-up SMS', text: 'Hi {{contact.first_name}}, any questions on the {{contact.service}} quote? Happy to walk you through it.' },
        { t: 'task', off: 2 * DAY, cond: 'still_stage', label: 'Create task: call', text: 'Call {{contact.name}} about the {{opportunity.value}} quote' }
      ] },
    { id: 'wf_won', name: 'Won: thank you + review request', trigger: { type: 'stage', stage: 'won', label: 'Pipeline stage changed to Won' },
      steps: [
        { t: 'notify', off: 0, label: 'Internal notification to owner', text: 'Won: {{contact.name}}, {{opportunity.value}} ({{contact.service}})' },
        { t: 'sms', off: 0, label: 'Send thank-you SMS', text: 'Thank you for choosing {{location.name}}, {{contact.first_name}}!' },
        { t: 'wait', label: 'Wait 1 day' },
        { t: 'sms', off: 1 * DAY, label: 'Send review request SMS', text: 'Hi {{contact.first_name}}, how did we do? A quick Google review helps a lot: {{review.link}}' }
      ] }
  ];

  var CUSTOM_FIELDS = [
    { name: 'Service needed', key: 'contact.service', type: 'Dropdown (single)', options: Object.keys(SERVICES) },
    { name: 'Lead source', key: 'contact.lead_source', type: 'Dropdown (single)', options: SOURCES },
    { name: 'Appointment date', key: 'contact.appointment_date', type: 'Date' },
    { name: 'Quote amount', key: 'opportunity.quote_amount', type: 'Monetary' }
  ];
  var FORM = {
    name: 'Request a Free Estimate',
    fields: [
      { label: 'Full name', key: 'name', type: 'text', required: true },
      { label: 'Phone', key: 'phone', type: 'phone', required: true },
      { label: 'Email', key: 'email', type: 'email', required: false },
      { label: 'Service needed', key: 'service', type: 'dropdown', options: Object.keys(SERVICES), required: true },
      { label: 'How did you hear about us?', key: 'source', type: 'dropdown', options: SOURCES, required: false }
    ],
    consent: 'SMS/email consent checkbox (A2P 10DLC compliant wording)',
    onSubmit: 'Trigger workflow "New lead: speed to lead"'
  };
  var CHECKLIST = [
    { s: 'Pipeline', items: ['Create "Sales Pipeline" with 8 stages: New Lead, Contacted, Appointment Booked, No-Show, Showed, Proposal Sent, Won, Lost', 'Turn on stage visibility in funnel + pie charts for reporting', 'Set lost reasons (price, timing, went with competitor, no response)'] },
    { s: 'Custom fields + tags', items: ['Add custom fields: Service needed, Lead source, Appointment date, Quote amount', 'Tags: new-lead, replied, booked, no-show, won, lost, review-requested', 'Smart list "New leads not contacted" for the daily call list'] },
    { s: 'Lead capture form', items: ['Build "Request a Free Estimate" form (name, phone, email, service, source) + consent checkbox', 'Map every field to the contact / custom fields above', 'Embed on the website / funnel page; connect Facebook Lead Ads to the same workflow'] },
    { s: 'Workflows', items: ['1. New lead: speed to lead (SMS + email within 1 min, owner alert, 1-day follow-up, call task)', '2. Lead replied: owner alert + move to Contacted', '3. Appointment booked: confirmation + 24 h and 2 h reminders', '4. No-show: re-book SMS, then email + call task', '5. Proposal sent: 2-day follow-up + call task', '6. Won: thank you + review request', 'Add goal events so follow-ups stop the moment a lead replies or moves stage'] },
    { s: 'Notifications', items: ['Owner gets SMS + app push for every new lead, reply, booking and no-show', 'Assign opportunities to the right user (round robin if more than one rep)', 'Email digest of open tasks every morning'] },
    { s: 'Calendar', items: ['Set up "Free Estimate" calendar (60 min, buffer, working hours, min notice)', 'Link calendar bookings to the Appointment Booked stage', 'Add the booking link to every SMS/email template'] },
    { s: 'Phone + email', items: ['Check A2P 10DLC registration and the sending number', 'Check email sending domain (SPF/DKIM) so follow-ups do not land in spam', 'Turn on missed-call text-back'] },
    { s: 'Testing + handoff', items: ['Submit a test lead and check every SMS, email, notification and task fires', 'Test reply, booking, no-show, proposal and won paths end to end', 'Short Loom walkthrough + this checklist so your team can run it'] }
  ];

  // ---------- formatting ----------
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtT(t) { var d = new Date(t), h = d.getUTCHours(), m = d.getUTCMinutes(), ap = h >= 12 ? 'pm' : 'am'; h = h % 12 || 12; return h + ':' + pad(m) + ap; }
  function fmtD(t) { var d = new Date(t); return DAYS[d.getUTCDay()] + ' ' + d.getUTCDate() + ' ' + MON[d.getUTCMonth()]; }
  function fmtDT(t) { return fmtD(t) + ', ' + fmtT(t); }
  function money(v) { return '$' + Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function dayStart(t) { return t - (t % DAY); }
  function stageName(id) { for (var i = 0; i < STAGES.length; i++) if (STAGES[i].id === id) return STAGES[i].name; return id; }
  function wfById(id) { for (var i = 0; i < WORKFLOWS.length; i++) if (WORKFLOWS[i].id === id) return WORKFLOWS[i]; return null; }

  // ---------- state ----------
  var SEED = [
    ['Laura Mitchell', 'AC repair', 'Google Ads', 'new', -50 * M, 'Form submitted'],
    ['Derek Owens', 'Roof repair', 'Facebook Lead Ad', 'new', -3 * H, 'Facebook lead ad'],
    ['Sandra Ruiz', 'Water heater install', 'Google Business Profile', 'contacted', -1 * DAY, 'SMS reply: "afternoons are best"'],
    ['Kevin Brooks', 'AC replacement', 'Referral', 'contacted', -2 * DAY, 'Call: left voicemail'],
    ['Angela Price', 'Plumbing repair', 'Missed call text-back', 'booked', -1 * DAY, 'Booked Tue 2:00pm'],
    ['Marcus Hill', 'AC replacement', 'Google Ads', 'booked', -2 * DAY, 'Booked Wed 10:00am'],
    ['Tina Foster', 'Pressure washing', 'Website form', 'noshow', -1 * DAY, 'Missed estimate Sun 11am'],
    ['Robert Chen', 'Roof repair', 'Referral', 'showed', -1 * DAY, 'Estimate done, photos taken'],
    ['Jessica Wade', 'AC replacement', 'Facebook Lead Ad', 'proposal', -3 * DAY, 'Quote emailed $8,400'],
    ['Brian Kelly', 'Water heater install', 'Google Ads', 'proposal', -1 * DAY, 'Quote emailed $1,650'],
    ['Nicole Adams', 'AC repair', 'Google Business Profile', 'won', -2 * DAY, 'Paid invoice'],
    ['Paul Romero', 'Plumbing repair', 'Website form', 'lost', -4 * DAY, 'Lost: went with a cheaper quote']
  ];
  function slug(name) { return name.toLowerCase().replace(/[^a-z]+/g, '.').replace(/^\.|\.$/g, ''); }
  function newState() {
    var s = { now: START, seq: 0, contacts: {}, opps: [], feed: [], queue: [], tasks: [], fired: {} };
    SEED.forEach(function (r, i) {
      var c = { id: 'c' + (i + 1), name: r[0], phone: '(555) 010-' + pad(10 + i) + pad(i * 7 % 100), email: slug(r[0]) + '@example.com', service: r[1], source: r[2], replied: r[3] !== 'new' };
      s.contacts[c.id] = c;
      var val = r[1] === 'AC replacement' && r[3] === 'proposal' ? 8400 : SERVICES[r[1]];
      s.opps.push({ id: 'o' + (i + 1), contactId: c.id, name: c.name + ' - ' + c.service, stage: r[3], value: val, source: r[2], last: { text: r[5], at: START + r[4] }, seed: true });
    });
    s.seq = SEED.length;
    return s;
  }
  function opp(s, id) { for (var i = 0; i < s.opps.length; i++) if (s.opps[i].id === id) return s.opps[i]; return null; }
  function contactOf(s, o) { return s.contacts[o.contactId]; }

  function render(tpl, s, o, extra) {
    var c = contactOf(s, o) || {};
    var map = {
      'contact.first_name': (c.name || '').split(' ')[0], 'contact.name': c.name, 'contact.phone': c.phone || 'no phone',
      'contact.email': c.email, 'contact.service': c.service, 'contact.source': c.source,
      'location.name': BIZ.name, 'user.name': BIZ.owner, 'calendar.link': BIZ.bookLink, 'review.link': BIZ.reviewLink,
      'opportunity.value': money(o.value), 'appointment.start_time': o.appt ? fmtDT(o.appt) : '(appointment time)',
      'message.body': (extra && extra.body) || ''
    };
    return String(tpl || '').replace(/\{\{\s*([\w.]+)\s*\}\}/g, function (m, k) { return map[k] != null ? map[k] : m; });
  }

  function log(s, e) { e.n = ++s.seq; s.feed.push(e); return e; }

  // ---------- workflow engine ----------
  function fire(s, wfId, o, extra) {
    var wf = wfById(wfId); if (!wf) return;
    var run = 'r' + (++s.seq);
    s.fired[wfId] = (s.fired[wfId] || 0) + 1;
    log(s, { at: s.now, kind: 'trigger', wf: wfId, oppId: o.id, text: 'Workflow "' + wf.name + '" started. Trigger: ' + wf.trigger.label });
    var now = [];
    wf.steps.forEach(function (st, idx) {
      if (st.t === 'wait' || st.t === 'if') return;
      var due = st.rel === 'appt' ? (o.appt || s.now) + st.off : s.now + st.off;
      var a = { id: run + '.' + idx, run: run, wf: wfId, oppId: o.id, step: idx, kind: st.t, label: st.label, cond: st.cond || null, condStage: o.stage,
        due: due, text: render(st.text, s, o, extra), subject: st.subject ? render(st.subject, s, o, extra) : null, stage: st.stage, onlyFrom: st.onlyFrom, status: 'scheduled' };
      if (st.rel === 'appt' && due < s.now) { a.status = 'skipped'; log(s, { at: s.now, kind: 'skip', wf: wfId, oppId: o.id, text: 'Skipped "' + st.label + '": appointment is less than ' + (-st.off / H) + ' h away' }); return; }
      if (due - s.now <= IMMEDIATE && st.rel !== 'appt') now.push(a); else { s.queue.push(a); log(s, { at: s.now, kind: 'queued', wf: wfId, oppId: o.id, text: 'Scheduled "' + st.label + '" for ' + fmtDT(due) + (st.cond ? ' (only if ' + condLabel(st.cond, o) + ')' : '') }); }
    });
    now.sort(function (x, y) { return x.due - y.due; }).forEach(function (a) { execute(s, a); });
  }
  function condLabel(c, o) { return c === 'no_reply' ? 'no reply yet' : 'still in ' + stageName(o.stage); }

  function execute(s, a) {
    var o = opp(s, a.oppId), c = contactOf(s, o);
    if (a.cond === 'no_reply' && c.replied) { a.status = 'skipped'; log(s, { at: a.due, kind: 'skip', wf: a.wf, oppId: o.id, text: 'If/Else: ' + c.name + ' already replied, skipped "' + a.label + '"' }); return; }
    if (a.cond === 'still_stage' && o.stage !== a.condStage) { a.status = 'skipped'; log(s, { at: a.due, kind: 'skip', wf: a.wf, oppId: o.id, text: 'If/Else: no longer in ' + stageName(a.condStage) + ', skipped "' + a.label + '"' }); return; }
    a.status = 'done';
    var at = a.due;
    if (a.kind === 'sms') log(s, { at: at, kind: 'sms', wf: a.wf, oppId: o.id, to: c.name + ' ' + c.phone, text: a.text });
    else if (a.kind === 'email') log(s, { at: at, kind: 'email', wf: a.wf, oppId: o.id, to: c.email || 'no email on file', subject: a.subject, text: a.text });
    else if (a.kind === 'notify') log(s, { at: at, kind: 'notify', wf: a.wf, oppId: o.id, to: BIZ.owner, text: a.text });
    else if (a.kind === 'task') { var t = { id: 't' + (++s.seq), oppId: o.id, text: a.text, due: at, done: false }; s.tasks.push(t); log(s, { at: at, kind: 'task', wf: a.wf, oppId: o.id, to: BIZ.owner, text: 'Task created: ' + a.text }); }
    else if (a.kind === 'opp') log(s, { at: at, kind: 'opp', wf: a.wf, oppId: o.id, text: 'Opportunity "' + o.name + '" in ' + stageName(o.stage) + ', value ' + money(o.value) });
    else if (a.kind === 'move') { if (!a.onlyFrom || a.onlyFrom.indexOf(o.stage) >= 0) moveOpp(s, o.id, a.stage, { by: 'workflow' }); else log(s, { at: at, kind: 'skip', wf: a.wf, oppId: o.id, text: 'Already past New Lead, stage left as ' + stageName(o.stage) }); }
    touch(o, labelFor(a), at);
  }
  function labelFor(a) { return { sms: 'SMS sent', email: 'Email sent', notify: 'Owner notified', task: 'Call task created', opp: 'Opportunity created', move: 'Moved by workflow' }[a.kind] || a.label; }
  function touch(o, text, at) { if (!o.last || at >= o.last.at) o.last = { text: text, at: at }; }

  function cancelWhere(s, o, test, reason) {
    s.queue.forEach(function (a) {
      if (a.oppId !== o.id || a.status !== 'scheduled') return;
      var wf = wfById(a.wf); if (!test(wf.goal || {}, a)) return;
      a.status = 'cancelled';
      log(s, { at: s.now, kind: 'cancel', wf: a.wf, oppId: o.id, text: 'Goal met (' + reason + '): cancelled "' + a.label + '" that was due ' + fmtDT(a.due) });
    });
  }

  // ---------- events ----------
  function submitForm(s, f) {
    f = f || {};
    var errors = [];
    var name = String(f.name || '').trim(), phone = String(f.phone || '').trim(), email = String(f.email || '').trim();
    if (!name) errors.push('Name is required');
    if (!phone && !email) errors.push('Phone or email is required');
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('Email looks wrong');
    if (phone && phone.replace(/\D/g, '').length < 7) errors.push('Phone looks too short');
    var service = SERVICES[f.service] != null ? f.service : Object.keys(SERVICES)[0];
    var source = SOURCES.indexOf(f.source) >= 0 ? f.source : 'Website form';
    if (errors.length) return { ok: false, errors: errors };
    var n = ++s.seq;
    var c = { id: 'c' + n, name: name, phone: phone, email: email, service: service, source: source, replied: false };
    s.contacts[c.id] = c;
    var o = { id: 'o' + n, contactId: c.id, name: name + ' - ' + service, stage: 'new', value: SERVICES[service], source: source, last: { text: 'Form submitted', at: s.now } };
    s.opps.unshift(o);
    log(s, { at: s.now, kind: 'event', oppId: o.id, text: 'Form "' + FORM.name + '" submitted by ' + name + ' (' + service + ', ' + source + '). Contact created.' });
    fire(s, 'wf_new', o);
    return { ok: true, opp: o, contact: c };
  }

  function nextAppt(now) { return dayStart(now) + 2 * DAY + 10 * H; } // day after tomorrow, 10:00am

  function moveOpp(s, oppId, stage, opts) {
    opts = opts || {};
    var o = opp(s, oppId);
    if (!o) return { ok: false, error: 'No such opportunity' };
    if (STAGE_IDS.indexOf(stage) < 0) return { ok: false, error: 'No such stage' };
    if (o.stage === stage) return { ok: true, opp: o, unchanged: true };
    var from = o.stage;
    o.stage = stage;
    if (stage === 'booked') o.appt = opts.appt || nextAppt(s.now);
    log(s, { at: s.now, kind: 'move', oppId: o.id, text: o.name + ': ' + stageName(from) + ' -> ' + stageName(stage) + (opts.by === 'workflow' ? ' (by workflow)' : '') + (stage === 'booked' ? ', appointment ' + fmtDT(o.appt) : '') });
    touch(o, 'Moved to ' + stageName(stage), s.now);
    cancelWhere(s, o, function (g) { return g.leaveStage === from; }, 'left ' + stageName(from));
    WORKFLOWS.forEach(function (wf) { if (wf.trigger.type === 'stage' && wf.trigger.stage === stage) fire(s, wf.id, o); });
    return { ok: true, opp: o, from: from };
  }

  function markReplied(s, oppId, body) {
    var o = opp(s, oppId); if (!o) return { ok: false };
    var c = contactOf(s, o);
    body = body || 'Yes, tomorrow afternoon works';
    c.replied = true;
    log(s, { at: s.now, kind: 'reply', oppId: o.id, to: c.name, text: 'Inbound SMS from ' + c.name + ': "' + body + '"' });
    touch(o, 'Replied: "' + body + '"', s.now);
    cancelWhere(s, o, function (g) { return !!g.onReply; }, 'contact replied');
    fire(s, 'wf_reply', o, { body: body });
    return { ok: true, opp: o };
  }

  function advance(s, ms) {
    var target = s.now + ms;
    for (;;) {
      var next = null;
      s.queue.forEach(function (a) { if (a.status === 'scheduled' && a.due <= target && (!next || a.due < next.due)) next = a; });
      if (!next) break;
      s.now = Math.max(s.now, next.due);
      execute(s, next);
    }
    s.now = target;
    return s;
  }

  function completeTask(s, id) { s.tasks.forEach(function (t) { if (t.id === id) t.done = true; }); }

  function pipelineStats(s) {
    var out = {};
    STAGES.forEach(function (st) { out[st.id] = { count: 0, value: 0 }; });
    s.opps.forEach(function (o) { out[o.stage].count++; out[o.stage].value += o.value; });
    return out;
  }

  function exportConfig(s) {
    return {
      generated_by: 'Dooza sample setup (simulation, no GHL login used)',
      location: BIZ.name + ' (sample business, assumption)',
      pipeline: { name: 'Sales Pipeline', stages: STAGES.map(function (st, i) { return { position: i + 1, id: st.id, name: st.name }; }) },
      custom_fields: CUSTOM_FIELDS,
      form: FORM,
      calendar: { name: BIZ.calendar, duration_min: 60, buffer_min: 15, min_notice_h: 4, on_booked: 'Move opportunity to Appointment Booked', reminders: ['24 h before (SMS)', '2 h before (SMS)'] },
      notifications: { owner: BIZ.owner, channels: ['SMS', 'GHL mobile app push'], on: ['new lead', 'customer replied', 'appointment booked', 'no-show', 'won'] },
      workflows: WORKFLOWS.map(function (wf) {
        return { id: wf.id, name: wf.name, trigger: wf.trigger, goal: wf.goal ? wf.goal.label : null,
          actions: wf.steps.map(function (st) { var a = { type: st.t, label: st.label }; if (st.off != null) a.run_at = st.rel === 'appt' ? (st.off / H) + ' h relative to appointment' : (st.off / M) + ' min after trigger'; if (st.cond) a.only_if = st.cond; if (st.subject) a.subject = st.subject; if (st.text) a.template = st.text; return a; }) };
      }),
      opportunities: s.opps.map(function (o) { var c = contactOf(s, o); return { name: o.name, stage: stageName(o.stage), value: o.value, source: o.source, contact: { name: c.name, phone: c.phone, email: c.email } }; }),
      setup_checklist: CHECKLIST
    };
  }
  function exportJSON(s) { return JSON.stringify(exportConfig(s), null, 2); }

  function story(s) {
    var r = submitForm(s, { name: 'Jordan Ellis', phone: '(555) 010-7781', email: 'jordan.ellis@example.com', service: 'AC repair', source: 'Facebook Lead Ad' });
    advance(s, 2 * H);
    markReplied(s, r.opp.id, 'Can someone come Wednesday morning?');
    moveOpp(s, r.opp.id, 'booked');
    advance(s, 1 * DAY);
    var o2 = s.opps.filter(function (o) { return o.stage === 'noshow'; })[0]; if (o2) moveOpp(s, o2.id, 'booked');
    var o3 = s.opps.filter(function (o) { return o.stage === 'proposal'; })[0]; if (o3) moveOpp(s, o3.id, 'won');
    advance(s, 1 * DAY);
    moveOpp(s, r.opp.id, 'showed');
    moveOpp(s, r.opp.id, 'proposal');
    return s;
  }

  var API = { newState: newState, submitForm: submitForm, moveOpp: moveOpp, markReplied: markReplied, advance: advance, completeTask: completeTask,
    exportConfig: exportConfig, exportJSON: exportJSON, pipelineStats: pipelineStats, story: story, render: render, opp: opp, contactOf: contactOf,
    stageName: stageName, wfById: wfById, fmtDT: fmtDT, fmtT: fmtT, fmtD: fmtD, money: money,
    STAGES: STAGES, WORKFLOWS: WORKFLOWS, CHECKLIST: CHECKLIST, CUSTOM_FIELDS: CUSTOM_FIELDS, FORM: FORM, SERVICES: SERVICES, SOURCES: SOURCES, BIZ: BIZ, START: START, M: M, H: H, DAY: DAY };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  root.GHL = API;
})(typeof window !== 'undefined' ? window : this);
