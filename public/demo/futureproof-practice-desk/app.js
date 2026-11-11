/* AI Front Desk demo engine (Dooza sample for Futureproof). Sample data only.
   Pure logic: run(rules, events) -> state. The UI at the bottom only runs in a browser. */
(function (root) {
  'use strict';
  var M = 6e4, H = 36e5, DAY = 864e5;
  var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Practice-local clock, kept in UTC fields so it works the same everywhere.
  var START = Date.UTC(2026, 10, 16, 9, 0); // Mon 16 Nov 2026, 9:00am (sample)
  var HOURS = [9, 10, 11, 14, 15, 16];
  var TAKEN = { '0-9': 1, '0-10': 1, '1-11': 1, '1-14': 1, '2-9': 1, '2-15': 1, '3-9': 1, '3-14': 1, '4-10': 1, '4-16': 1 };
  var URGENT = /pain|toothache|swell|bleed|broke|loose|emergency|hurts/i;

  var PATIENTS = [
    { id: 'p1', name: 'Maria Lopez', phone: '(555) 010-2231', email: 'maria.lopez@example.com', form: 'Hi, I need a cleaning and check-up. Any time Thursday works for me.' },
    { id: 'p2', name: 'James Carter', phone: '(555) 010-4417', email: 'j.carter@example.com', form: 'My 8 year old has had a toothache since yesterday. Can you see him this week?' },
    { id: 'p3', name: 'Priya Shah', phone: '(555) 010-3380', email: 'priya.shah@example.com', form: 'New to the area, looking for a family dentist for the three of us.' },
    { id: 'p4', name: 'Tom Becker', phone: '(555) 010-9152', email: 'tbecker@example.com', form: 'Do you do teeth whitening? What does it cost?' },
    { id: 'p5', name: 'Aisha Khan', phone: '(555) 010-6624', email: 'aisha.k@example.com', form: 'Do you take Delta Dental insurance?' }
  ];

  function defaultRules() {
    return {
      practice: 'Brightside Family Dental', manager: 'Dana, our practice manager',
      reviewLink: '[your Google review link]', bookLink: '[your booking link]',
      reminderHours: [24, 2], enquiryDays: [0, 2, 5], stopOnReply: true,
      quietStart: 20, quietEnd: 8, optOutWords: ['STOP', 'UNSUBSCRIBE', 'END', 'QUIT'],
      feedbackHours: 1, happyMin: 4, referralDays: 7,
      minPerMsg: 3, minPerBooking: 5, staffRate: 22, visitValue: 120
    };
  }

  // ---------- formatting ----------
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtT(t) { var d = new Date(t), h = d.getUTCHours(), m = d.getUTCMinutes(); var ap = h >= 12 ? 'pm' : 'am'; h = h % 12 || 12; return h + (m ? ':' + pad(m) : '') + ap; }
  function fmtD(t) { var d = new Date(t); return DAYS[d.getUTCDay()] + ' ' + d.getUTCDate() + ' ' + MON[d.getUTCMonth()]; }
  function fmtDT(t) { return fmtD(t) + ', ' + fmtT(t); }
  function hh(h) { return fmtT(Date.UTC(2026, 0, 1, h)); }
  function dayStart(t) { var d = new Date(t); return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()); }
  function hourOf(t) { var d = new Date(t); return d.getUTCHours() + d.getUTCMinutes() / 60; }
  function first(p) { return p.name.split(' ')[0]; }
  function lead(h) { return h % 24 === 0 ? (h === 24 ? 'the day before' : (h / 24) + ' days before') : (h === 1 ? '1 hour before' : h + ' hours before'); }

  // ---------- quiet hours ----------
  function inQuiet(t, R) {
    var qs = R.quietStart, qe = R.quietEnd, h = hourOf(t);
    if (qs === qe) return false;
    return qs > qe ? (h >= qs || h < qe) : (h >= qs && h < qe);
  }
  // Move a send time out of quiet hours. Forward to quiet-end; if that misses the deadline, back to just before quiet-start.
  function quietAdjust(t, R, deadline) {
    if (!inQuiet(t, R)) return { at: t, moved: false };
    var fwd = dayStart(t) + R.quietEnd * H; if (fwd <= t) fwd += DAY;
    if (!deadline || fwd < deadline) return { at: fwd, moved: true };
    var back = dayStart(t) + R.quietStart * H - 30 * M; if (back > t) back -= DAY;
    return { at: back, moved: true, early: true };
  }

  // ---------- state ----------
  function makeSlots() {
    var s = [];
    for (var w = 0; w < 2; w++) for (var d = 0; d < 5; d++) HOURS.forEach(function (h) {
      s.push({ t: START - 9 * H + (w * 7 + d) * DAY + h * H, taken: !!TAKEN[d + '-' + h], by: null });
    });
    return s;
  }
  function init() {
    return {
      now: START, seq: 0, outbox: [], tasks: [], feed: [], slots: makeSlots(),
      patients: PATIENTS.map(function (p) {
        return { id: p.id, name: p.name, phone: p.phone, email: p.email, form: p.form, stage: 'Not in CRM yet', source: '', lastTouch: null, lastNote: '', appt: null, optedOut: false, awaitingScore: false, score: null, noShows: 0 };
      }),
      n: { sent: 0, bookings: 0, recovered: 0, reviews: 0, referrals: 0, routed: 0, cancelled: 0 }
    };
  }
  function pat(st, id) { for (var i = 0; i < st.patients.length; i++) if (st.patients[i].id === id) return st.patients[i]; return null; }
  function msg(st, id) { for (var i = 0; i < st.outbox.length; i++) if (st.outbox[i].id === id) return st.outbox[i]; return null; }
  function slotAt(st, t) { for (var i = 0; i < st.slots.length; i++) if (st.slots[i].t === t) return st.slots[i]; return null; }
  function openSlots(st, from, n) { var r = []; for (var i = 0; i < st.slots.length && r.length < n; i++) { var s = st.slots[i]; if (!s.taken && s.t > from) r.push(s); } return r; }

  function touch(p, t, note) { if (!p.lastTouch || t >= p.lastTouch) { p.lastTouch = t; p.lastNote = note; } }
  function deliver(st, m) {
    m.status = 'sent'; st.n.sent++;
    if (m.kind === 'Review request') st.n.reviews++;
    if (m.kind === 'Referral ask') st.n.referrals++;
    touch(pat(st, m.pid), m.at, m.ch + ' sent: ' + m.kind);
  }
  // o: {kind, ch, text, at, deadline, now (send immediately, e.g. opt-out confirmation)}
  function queue(st, R, p, o, rec) {
    var m = { id: 'm' + (++st.seq), pid: p.id, who: p.name, kind: o.kind, ch: o.ch, to: o.ch === 'Email' ? p.email : p.phone, text: o.text, planned: o.at, at: o.at, status: 'scheduled', note: '' };
    st.outbox.push(m); if (rec) rec.msgs.push(m.id);
    if (p.optedOut && !o.now) { m.status = 'blocked'; m.note = 'Not sent: patient opted out.'; return m; }
    if (!o.now) {
      var q = quietAdjust(o.at, R, o.deadline);
      if (q.moved) {
        m.at = q.at;
        m.note = 'Quiet hours (' + hh(R.quietStart) + ' to ' + hh(R.quietEnd) + '): ' + (q.early ? 'sent early, ' : 'held until ') + fmtDT(q.at) + '.';
        if (q.at < st.now) { m.status = 'skipped'; m.note = 'Skipped: the only allowed send time has already passed (quiet hours).'; return m; }
      }
    }
    if (m.at <= st.now) { m.at = Math.max(m.at, st.now); deliver(st, m); }
    return m;
  }
  function cancel(st, p, kinds, why) {
    var c = 0;
    st.outbox.forEach(function (m) {
      if (m.pid === p.id && m.status === 'scheduled' && (!kinds || kinds.indexOf(m.kind) >= 0)) { m.status = 'cancelled'; m.note = 'Cancelled: ' + why + '.'; c++; }
    });
    st.n.cancelled += c; return c;
  }
  function task(st, p, who, text, due, rec) {
    var t = { id: 't' + (++st.seq), pid: p.id, patient: p.name, who: who, text: text, due: due, done: false };
    st.tasks.push(t); if (rec) rec.actions.push('Task for ' + who + ' (due ' + fmtDT(due) + '): ' + text);
    return t;
  }
  // Move the practice clock forward, sending whatever falls due on the way.
  function advanceTo(st, R, t, rec) {
    if (t <= st.now) return;
    var due = st.outbox.filter(function (m) { return m.status === 'scheduled' && m.at <= t; }).sort(function (a, b) { return a.at - b.at; });
    due.forEach(function (m) {
      if (m.status !== 'scheduled') return;
      st.now = Math.max(st.now, m.at);
      var p = pat(st, m.pid);
      if (p.optedOut) { m.status = 'blocked'; m.note = 'Not sent: patient opted out.'; return; }
      if (m.kind === 'Enquiry follow-up' && p.appt) { m.status = 'cancelled'; m.note = 'Cancelled: already booked.'; st.n.cancelled++; return; }
      deliver(st, m); if (rec) rec.fired.push(m.id);
    });
    st.now = t;
  }

  // ---------- message templates ----------
  function slotList(sl) { return sl.map(function (s) { return fmtDT(s.t); }).join(' or '); }
  function T(R, p, kind, x) {
    var f = first(p), pr = R.practice, stop = R.optOutWords[0] || 'STOP';
    switch (kind) {
      case 'missed': return 'Hi ' + f + ', this is ' + pr + '. Sorry we missed your call! Want to book a visit? Reply with a day and time that suits you (for example "Thu 10am"), or book here: ' + R.bookLink + '. Reply ' + stop + ' to opt out.';
      case 'form': return 'Hi ' + f + ', thanks for getting in touch with ' + pr + '. You asked: "' + p.form + '" We can see you ' + slotList(x) + '. Reply with the one that suits and it is yours, or pick another time here: ' + R.bookLink + '.';
      case 'fu1': return 'Hi ' + f + ', just checking in from ' + pr + '. Would you still like an appointment? Reply with a day and time and we will hold it for you.';
      case 'fu2': return 'Last note from ' + pr + ', ' + f + ': if you still need a visit, reply any time or book at ' + R.bookLink + '. We will not message about this again.';
      case 'confirm': return "You're booked, " + f + '! ' + pr + ', ' + fmtDT(x) + '. ' + (R.reminderHours.length ? 'We will remind you ' + R.reminderHours.map(lead).join(' and ') + '. ' : '') + 'Reply R to reschedule.';
      case 'rem_day': return 'Reminder from ' + pr + ': ' + f + ', your appointment is ' + fmtDT(x) + '. Reply C to confirm or R to reschedule.';
      case 'rem_soon': return 'See you at ' + fmtT(x) + ' today, ' + f + '! ' + pr + ', [practice address]. Running late? Just reply here.';
      case 'noshow': return 'Hi ' + f + ', we missed you at ' + fmtT(x.t) + ' today. No problem, it happens! Want to rebook? We can do ' + slotList(x.open) + '. Just reply with the one that suits.';
      case 'noshow_fu': return 'Hi ' + f + ', ' + pr + ' here. We still have a few openings this week if you would like to rebook. Reply with a day and time.';
      case 'feedback': return 'Thanks for coming in today, ' + f + '! Quick question: how was your visit at ' + pr + '? Reply 1 to 5 (5 = great).';
      case 'review': return 'So glad to hear it, ' + f + '! Would you share that in a quick Google review? It helps local families find us: ' + R.reviewLink + '. Thank you! ' + pr;
      case 'referral': return 'Hi ' + f + ', thanks again for choosing ' + pr + '. If friends or family need a dentist, just send them this link: ' + R.bookLink + '. We will take good care of them.';
      case 'recovery': return f + ', thank you for telling us, and I am sorry your visit was not what it should be. ' + R.manager + ', will call you today to put it right.';
      case 'optout': return pr + ': you are unsubscribed and will get no more texts from us. Call the practice any time if you need us.';
      case 'alts': return 'Sorry ' + f + ', that time is taken. We can do ' + slotList(x) + '. Reply with the one that suits.';
      case 'gotit': return 'Thanks ' + f + '! See you ' + fmtDT(x) + '.';
      case 'resched': return 'No problem, ' + f + '. Your old time is released. We can do ' + slotList(x) + '. Reply with the one that suits.';
      case 'handoff': return 'Thanks ' + f + ', a member of our team will get back to you shortly.';
    }
    return '';
  }

  // ---------- reply parsing ----------
  function parseReply(text, now, R) {
    var s = String(text || '').trim(), up = s.toUpperCase();
    if (R.optOutWords.indexOf(up) >= 0) return { kind: 'stop' };
    if (/^[1-5]$/.test(s)) return { kind: 'score', score: +s };
    if (/^(C|Y|YES|CONFIRM)$/.test(up)) return { kind: 'confirm' };
    if (/^(R|RESCHEDULE)$/.test(up)) return { kind: 'resched' };
    var m = s.match(/\b(mon|tue|wed|thu|fri|sat|sun|today|tomorrow)[a-z]*\.?\s*(?:at\s*)?(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);
    if (!m) return { kind: 'other' };
    var h = +m[2], mi = m[3] ? +m[3] : 0, ap = (m[4] || '').toLowerCase();
    if (ap === 'pm' && h < 12) h += 12; if (ap === 'am' && h === 12) h = 0;
    if (!ap && h >= 1 && h <= 6) h += 12; // "Thu 3" means 3pm at a practice
    var w = m[1].toLowerCase(), base = dayStart(now), day;
    if (w === 'today') day = base; else if (w === 'tomorrow') day = base + DAY;
    else {
      var target = DAYS.map(function (d) { return d.toLowerCase(); }).indexOf(w.slice(0, 3));
      var cur = new Date(now).getUTCDay(), add = (target - cur + 7) % 7;
      day = base + add * DAY;
      if (day + h * H + mi * M <= now) day += 7 * DAY;
    }
    return { kind: 'time', t: day + h * H + mi * M };
  }

  // ---------- booking ----------
  function book(st, R, p, t, how, rec) {
    var s = slotAt(st, t);
    if (!s || s.taken) {
      var sameDay = st.slots.filter(function (x) { return !x.taken && x.t > st.now && dayStart(x.t) === dayStart(t); }).slice(0, 3);
      var alts = sameDay.length ? sameDay : openSlots(st, st.now, 3);
      queue(st, R, p, { kind: 'Slot options', ch: 'SMS', text: T(R, p, 'alts', alts), at: st.now }, rec);
      rec.decisions.push(fmtDT(t) + (s ? ' is already taken' : ' is not an open slot') + ': offered the nearest open times instead of double-booking.');
      rec.actions.push('Wait for the patient to pick one of the offered times.');
      return false;
    }
    if (p.appt) {
      var old = slotAt(st, p.appt); if (old) { old.taken = false; old.by = null; }
      cancel(st, p, ['Reminder'], 'appointment moved');
      rec.decisions.push('Moved the existing appointment; old reminders cancelled and the old slot released.');
    }
    s.taken = true; s.by = p.id; p.appt = t; p.stage = 'Booked'; p.awaitingScore = false;
    st.n.bookings++;
    if (/Missed call|Web form|No-show/.test(p.source)) { st.n.recovered++; rec.decisions.push('Counts as an appointment won back (' + p.source.toLowerCase() + ').'); }
    cancel(st, p, ['Enquiry follow-up', 'No-show follow-up'], 'patient booked');
    queue(st, R, p, { kind: 'Booking confirmation', ch: 'SMS', text: T(R, p, 'confirm', t), at: st.now }, rec);
    var hrs = R.reminderHours.slice().sort(function (a, b) { return b - a; });
    hrs.forEach(function (h) {
      var at = t - h * H;
      if (at <= st.now) { rec.decisions.push('Reminder ' + lead(h) + ' skipped: that time has already passed.'); return; }
      queue(st, R, p, { kind: 'Reminder', ch: 'SMS', text: T(R, p, h >= 12 ? 'rem_day' : 'rem_soon', t), at: at, deadline: t }, rec);
    });
    rec.actions.push('Booked ' + fmtDT(t) + ' (' + how + '). Confirmation sent; reminders ' + (hrs.length ? 'set for ' + hrs.map(lead).join(' and ') : 'off (no reminder hours set)') + '.');
    return true;
  }
  function staffBook(st, R, p, rec) {
    var s = openSlots(st, dayStart(st.now) + DAY, 1)[0];
    if (!s) { rec.decisions.push('No open slots left in the sample calendar.'); return false; }
    p.source = p.source || 'Front desk';
    return book(st, R, p, s.t, 'booked by front desk', rec);
  }

  // ---------- events ----------
  var LABEL = { missed_call: 'Missed call', web_form: 'Web form enquiry', staff_booked: 'Appointment booked by front desk', appt_tomorrow: 'Appointment tomorrow', no_show: 'No-show', visit_completed: 'Visit completed', reply: 'Patient replied', advance: 'Clock moved', task_done: 'Task closed' };

  function startEnquiry(st, R, p, rec, kind) {
    p.stage = 'New enquiry'; p.source = kind === 'missed' ? 'Missed call' : 'Web form';
    touch(p, st.now, kind === 'missed' ? 'Missed call logged' : 'Web form received');
    var days = R.enquiryDays.slice().sort(function (a, b) { return a - b; });
    var open = openSlots(st, st.now + H, 3);
    days.forEach(function (d, i) {
      var text = i === 0 ? T(R, p, kind === 'missed' ? 'missed' : 'form', open) : (i === days.length - 1 ? T(R, p, 'fu2') : T(R, p, 'fu1'));
      var ch = (i === 0 && kind === 'form') ? 'Email' : 'SMS';
      queue(st, R, p, { kind: i === 0 ? 'Enquiry reply' : 'Enquiry follow-up', ch: ch, text: text, at: st.now + d * DAY }, rec);
      if (i === 0 && kind === 'form') queue(st, R, p, { kind: 'Enquiry reply', ch: 'SMS', text: 'Hi ' + first(p) + ', ' + R.practice + ' here, we just emailed you some open times. Reply here with the one that suits (for example "Thu 10am").', at: st.now + d * DAY }, rec);
    });
    if (!days.length) rec.decisions.push('Enquiry cadence is empty in Rules: nothing is sent automatically.');
    if (inQuiet(st.now, R)) rec.decisions.push('Came in during quiet hours: the reply is held until ' + hh(R.quietEnd) + ' instead of texting the patient at night.');
    if (days.length > 1) rec.actions.push('Follow-ups on day ' + days.slice(1).join(' and day ') + (R.stopOnReply ? ', stopped the moment the patient replies or books.' : ' (stop-on-reply is OFF, so they go out even if the patient replies).'));
    if (kind === 'form' && URGENT.test(p.form)) {
      rec.decisions.push('The enquiry mentions pain or damage: flagged urgent for a person to call, not just an automatic text.');
      task(st, p, 'Front desk', 'Call ' + p.name + ' back: possible urgent case ("' + p.form + '").', st.now + H, rec);
    }
    if (kind === 'missed') rec.actions.push('Call logged in the CRM; the patient is texted back so the lead is not lost to the next practice.');
  }

  function scoreReply(st, R, p, score, rec) {
    p.score = score; p.awaitingScore = false;
    if (score >= R.happyMin) {
      p.stage = 'Review requested';
      queue(st, R, p, { kind: 'Review request', ch: 'SMS', text: T(R, p, 'review'), at: st.now }, rec);
      queue(st, R, p, { kind: 'Referral ask', ch: 'SMS', text: T(R, p, 'referral'), at: st.now + R.referralDays * DAY }, rec);
      rec.decisions.push('Score ' + score + '/5 meets the happy bar (' + R.happyMin + '+): public review link sent.');
      rec.actions.push('Referral ask scheduled ' + R.referralDays + ' days later.');
    } else {
      p.stage = 'Service recovery'; st.n.routed++;
      var c = cancel(st, p, ['Review request', 'Referral ask'], 'patient was unhappy');
      queue(st, R, p, { kind: 'Service recovery', ch: 'SMS', text: T(R, p, 'recovery'), at: st.now }, rec);
      task(st, p, 'Practice manager', 'Call ' + p.name + ' today: rated the visit ' + score + '/5. Find out what went wrong, fix it, log the outcome.', st.now + 4 * H, rec);
      rec.decisions.push('NO public review ask: score ' + score + '/5 is below the happy bar (' + R.happyMin + '). An unhappy patient gets a call from a person, not a review link.');
      rec.decisions.push('No referral ask either' + (c ? ' (' + c + ' pending ask cancelled)' : '') + '.');
    }
  }

  function apply(st, R, ev) {
    var p = ev.pid ? pat(st, ev.pid) : null;
    var rec = { n: st.feed.length + 1, type: ev.type, label: LABEL[ev.type] || ev.type, pid: ev.pid || null, who: p ? p.name : '', text: ev.text || '', msgs: [], fired: [], actions: [], decisions: [], at: 0 };
    if (ev.at) advanceTo(st, R, ev.at, rec);
    switch (ev.type) {
      case 'advance':
        advanceTo(st, R, ev.to || st.now + (ev.ms || H), rec);
        rec.label = 'Clock moved to ' + fmtDT(st.now);
        if (!rec.fired.length) rec.actions.push('Nothing was due in that window.');
        break;
      case 'missed_call': startEnquiry(st, R, p, rec, 'missed'); break;
      case 'web_form': rec.text = p.form; startEnquiry(st, R, p, rec, 'form'); break;
      case 'staff_booked': staffBook(st, R, p, rec); break;
      case 'appt_tomorrow':
        if (!p.appt || p.appt <= st.now) { rec.decisions.push('No upcoming appointment on file, so the front desk books one first.'); staffBook(st, R, p, rec); }
        if (p.appt) {
          var target = p.appt - DAY;
          if (target > st.now) advanceTo(st, R, target, rec);
          else rec.decisions.push('The appointment is already less than a day away.');
          rec.label = 'Appointment tomorrow (clock moved to ' + fmtDT(st.now) + ')';
          var pend = st.outbox.filter(function (m) { return m.pid === p.id && m.kind === 'Reminder' && m.status === 'scheduled'; });
          pend.forEach(function (m) { rec.actions.push('Next reminder still scheduled for ' + fmtDT(m.at) + '.'); });
          if (!rec.fired.length && !pend.length) rec.decisions.push('No reminders are set (check Rules: reminder hours).');
        }
        break;
      case 'no_show':
        if (!p.appt) { rec.decisions.push('No appointment on file, so the front desk books one first.'); staffBook(st, R, p, rec); }
        if (p.appt) {
          var at = p.appt; advanceTo(st, R, at + 15 * M, rec);
          var s = slotAt(st, at); if (s) { s.taken = false; s.by = null; }
          p.appt = null; p.noShows++; p.stage = 'No-show'; p.source = 'No-show';
          cancel(st, p, ['Reminder'], 'patient did not show');
          var open = openSlots(st, st.now + H, 2);
          queue(st, R, p, { kind: 'No-show rebook', ch: 'SMS', text: T(R, p, 'noshow', { t: at, open: open }), at: st.now }, rec);
          queue(st, R, p, { kind: 'No-show follow-up', ch: 'SMS', text: T(R, p, 'noshow_fu'), at: st.now + 2 * DAY }, rec);
          rec.label = 'No-show at ' + fmtDT(at);
          rec.decisions.push('Friendly rebook text, no blame. The freed slot is open again in the calendar.');
          if (p.noShows >= 2) task(st, p, 'Front desk', 'Second no-show for ' + p.name + ': call personally before rebooking.', st.now + 2 * H, rec);
          else rec.actions.push('Follow-up in 2 days if there is no reply' + (R.stopOnReply ? ' (stops on reply).' : '.'));
        }
        break;
      case 'visit_completed':
        if (p.appt && p.appt > st.now) advanceTo(st, R, p.appt + H, rec);
        p.appt = null; p.stage = 'Visit completed'; p.awaitingScore = true;
        cancel(st, p, ['Reminder', 'Enquiry follow-up', 'No-show follow-up'], 'visit completed');
        touch(p, st.now, 'Visit completed');
        queue(st, R, p, { kind: 'Feedback check', ch: 'SMS', text: T(R, p, 'feedback'), at: st.now + R.feedbackHours * H }, rec);
        rec.label = 'Visit completed (' + fmtDT(st.now) + ')';
        rec.decisions.push('Asks privately first (1 to 5). Only scores of ' + R.happyMin + '+ get the public review link.');
        break;
      case 'reply':
        // The patient answers after the desk's latest pending feedback text has gone out.
        var fb = st.outbox.filter(function (m) { return m.pid === p.id && m.kind === 'Feedback check' && m.status === 'scheduled'; })[0];
        if (fb) advanceTo(st, R, fb.at + 10 * M, rec);
        touch(p, st.now, 'Patient replied: "' + ev.text + '"');
        var r = ev.t ? { kind: 'time', t: ev.t } : parseReply(ev.text, st.now, R);
        rec.label = 'Patient replied "' + ev.text + '"';
        if (r.kind === 'stop') {
          var c = cancel(st, p, null, 'patient opted out');
          p.optedOut = true; p.stage = 'Opted out';
          queue(st, R, p, { kind: 'Opt-out confirmation', ch: 'SMS', text: T(R, p, 'optout'), at: st.now, now: true }, rec);
          rec.decisions.push('Opt-out word received: ' + c + ' scheduled message' + (c === 1 ? '' : 's') + ' cancelled and the number is marked do-not-text. One confirmation is sent, then silence.');
          break;
        }
        if (p.optedOut) { rec.decisions.push('Patient is opted out: no automatic reply. Logged for the front desk.'); break; }
        if (r.kind !== 'score') {
          if (R.stopOnReply) { var k = cancel(st, p, ['Enquiry follow-up', 'No-show follow-up'], 'patient replied'); if (k) rec.decisions.push('Patient replied, so ' + k + ' follow-up' + (k === 1 ? '' : 's') + ' stopped.'); }
          else if (st.outbox.some(function (m) { return m.pid === p.id && m.status === 'scheduled' && /follow-up/.test(m.kind); })) rec.decisions.push('Stop-on-reply is OFF in Rules: the follow-ups stay scheduled even though the patient replied.');
        }
        if (r.kind === 'time') book(st, R, p, r.t, 'patient picked the time by text', rec);
        else if (r.kind === 'score') {
          if (p.awaitingScore) scoreReply(st, R, p, r.score, rec);
          else { rec.decisions.push('A number, but no feedback question is open: handed to a person.'); queue(st, R, p, { kind: 'Handoff', ch: 'SMS', text: T(R, p, 'handoff'), at: st.now }, rec); task(st, p, 'Front desk', 'Read and answer: "' + ev.text + '"', st.now + H, rec); }
        } else if (r.kind === 'confirm' && p.appt) {
          p.stage = 'Booked (confirmed)';
          queue(st, R, p, { kind: 'Confirmed', ch: 'SMS', text: T(R, p, 'gotit', p.appt), at: st.now }, rec);
        } else if (r.kind === 'resched' && p.appt) {
          var os = slotAt(st, p.appt); if (os) { os.taken = false; os.by = null; }
          p.appt = null; p.stage = 'Rescheduling';
          cancel(st, p, ['Reminder'], 'patient is rescheduling');
          queue(st, R, p, { kind: 'Slot options', ch: 'SMS', text: T(R, p, 'resched', openSlots(st, st.now + H, 3)), at: st.now }, rec);
        } else {
          rec.decisions.push('Not a time, score or keyword the desk can act on safely: handed to a person instead of guessing.');
          queue(st, R, p, { kind: 'Handoff', ch: 'SMS', text: T(R, p, 'handoff'), at: st.now }, rec);
          task(st, p, 'Front desk', 'Read and answer: "' + ev.text + '"', st.now + H, rec);
        }
        break;
      case 'task_done':
        st.tasks.forEach(function (t) { if (t.id === ev.id) { t.done = true; rec.who = t.patient; rec.actions.push('Closed: ' + t.text); } });
        break;
    }
    rec.at = st.now;
    if (p) rec.crm = crmRow(st, p);
    st.feed.push(rec);
    return rec;
  }

  function nextFollow(st, p) {
    var t = null, what = '';
    st.outbox.forEach(function (m) { if (m.pid === p.id && m.status === 'scheduled' && (t === null || m.at < t)) { t = m.at; what = m.kind; } });
    st.tasks.forEach(function (k) { if (k.pid === p.id && !k.done && (t === null || k.due < t)) { t = k.due; what = 'Task: ' + k.who; } });
    return { t: t, what: what };
  }
  function crmRow(st, p) {
    var nf = nextFollow(st, p);
    return { patient: p.name, stage: p.stage, source: p.source || '', lastTouch: p.lastTouch ? fmtDT(p.lastTouch) + ' · ' + p.lastNote : '', next: nf.t ? fmtDT(nf.t) + ' · ' + nf.what : '', appt: p.appt ? fmtDT(p.appt) : '' };
  }
  function savings(st, R) {
    var mins = st.n.sent * R.minPerMsg + st.n.bookings * R.minPerBooking;
    return { mins: mins, hours: Math.round(mins / 6) / 10, staff: Math.round(mins / 60 * R.staffRate), recovered: st.n.recovered, value: st.n.recovered * R.visitValue, reviews: st.n.reviews, referrals: st.n.referrals, routed: st.n.routed, sent: st.n.sent };
  }
  function run(R, events) { var st = init(); (events || []).forEach(function (e) { apply(st, R, e); }); return st; }

  // A sample day for the "Play a sample day" button. Absolute times keep replays identical.
  function story() {
    var d = function (day, h, m) { return START - 9 * H + day * DAY + h * H + (m || 0) * M; };
    return [
      { type: 'missed_call', pid: 'p1', at: d(0, 9, 5) },
      { type: 'reply', pid: 'p1', text: 'Thu 10am', at: d(0, 9, 22) },
      { type: 'web_form', pid: 'p2', at: d(0, 9, 40) },
      { type: 'reply', pid: 'p2', text: 'Tue 10am', at: d(0, 10, 5) },
      { type: 'staff_booked', pid: 'p3', at: d(0, 11, 0) },
      { type: 'visit_completed', pid: 'p4', at: d(0, 15, 0) },
      { type: 'reply', pid: 'p4', text: '2', at: d(0, 16, 20) },
      { type: 'web_form', pid: 'p5', at: d(0, 21, 30) },
      { type: 'no_show', pid: 'p3' },
      { type: 'appt_tomorrow', pid: 'p1' },
      { type: 'visit_completed', pid: 'p1' },
      { type: 'reply', pid: 'p1', text: '5' },
      { type: 'reply', pid: 'p5', text: 'STOP' },
      { type: 'advance', ms: 7 * DAY }
    ];
  }

  var API = { defaultRules: defaultRules, run: run, apply: apply, init: init, parseReply: parseReply, quietAdjust: quietAdjust, inQuiet: inQuiet, savings: savings, crmRow: crmRow, nextFollow: nextFollow, story: story, fmtDT: fmtDT, fmtT: fmtT, fmtD: fmtD, dayStart: dayStart, msg: msg, pat: pat, START: START, H: H, DAY: DAY, M: M, PATIENTS: PATIENTS, HOURS: HOURS };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  root.Desk = API;
})(typeof window !== 'undefined' ? window : this);
