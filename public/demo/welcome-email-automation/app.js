/* Welcome email automation engine (simulation). Mailchimp terms: Audience, Contacts, Tags,
   Merge tags (*|FNAME|*), Customer Journey with starting point "Signs up", Segments.
   Runs in the browser (window.WelcomeEngine) and in node (module.exports). Demo by Dooza. */
(function (root) {
  'use strict';

  var INTERESTS = ['Weight loss', 'Strength training', 'Yoga & mobility', 'Personal training'];
  var SOURCES = ['Website', 'Instagram', 'Referral', 'Walk-in'];
  var DAY = 86400000;

  var DEFAULT_TEMPLATE = {
    fromName: 'Peak Fit Studio',
    fromEmail: 'hello@peakfit-example.com',
    subject: 'Welcome to Peak Fit, *|FNAME|*! Your first class is on us',
    preheader: 'Your free class pass, what to bring, and a plan built around *|INTEREST|*.',
    body:
      '<h1 style="margin:0 0 12px;font-size:24px;color:#111">Welcome, *|FNAME|*!</h1>\n' +
      '<p>Thanks for joining Peak Fit Studio. You told us you are most interested in <b>*|INTEREST|*</b>, so we picked a starting plan for you.</p>\n' +
      '<p><b>Your next 3 steps:</b></p>\n' +
      '<ol>\n<li>Book your <b>free first class</b> (any class, any day this week).</li>\n' +
      '<li>Bring water, a towel and comfortable shoes. Arrive 10 minutes early.</li>\n' +
      '<li>Reply to this email with one goal for the next 30 days. A coach will read it.</li>\n</ol>\n' +
      '<p style="text-align:center;margin:22px 0"><a href="https://example.com/book?utm_source=welcome" style="background:#e8590c;color:#fff;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:700">Book my free class</a></p>\n' +
      '<p>See you on the floor,<br>Coach Dana and the Peak Fit team</p>'
  };

  var FOOTER =
    '<hr style="border:0;border-top:1px solid #ddd;margin:24px 0 10px">' +
    '<p style="font-size:12px;color:#777;line-height:1.5">You are receiving this because you signed up at *|LIST:COMPANY|* (source: *|SOURCE|*).<br>' +
    '*|LIST:ADDRESS|*<br><a href="*|UNSUB|*" style="color:#777">Unsubscribe</a> · <a href="*|UPDATE_PROFILE|*" style="color:#777">Update your preferences</a></p>';

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmt(ts) {
    var d = new Date(ts);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e || '').trim()); }

  function createEngine(opts) {
    opts = opts || {};
    var clock = opts.now || function () { return Date.now(); };
    var s = {
      audience: 'Peak Fit Studio Members',
      company: 'Peak Fit Studio',
      address: 'Peak Fit Studio, 100 Main St, Houston, TX 77002',
      contacts: [],
      sent: [],
      log: [],
      journey: { name: 'Welcome new subscribers', start: 'Signs up', active: true, entered: 0, completed: 0 },
      template: JSON.parse(JSON.stringify(DEFAULT_TEMPLATE)),
      nextId: 1
    };

    function log(kind, text, extra) {
      var e = { ts: clock(), time: fmt(clock()), kind: kind, text: text };
      if (extra) for (var k in extra) e[k] = extra[k];
      s.log.unshift(e);
      return e;
    }

    function find(email) {
      var e = String(email || '').trim().toLowerCase();
      for (var i = 0; i < s.contacts.length; i++) if (s.contacts[i].email === e) return s.contacts[i];
      return null;
    }

    function tagsFor(c) {
      return ['New subscriber', 'Interest: ' + c.interest, 'Source: ' + c.source];
    }

    function mergeFields(c) {
      return {
        FNAME: c.fname || 'there',
        LNAME: c.lname || '',
        EMAIL: c.email,
        INTEREST: c.interest ? c.interest.toLowerCase() : 'getting fitter',
        SOURCE: c.source || 'our website',
        'LIST:COMPANY': s.company,
        'LIST:ADDRESS': s.address,
        UNSUB: '#unsubscribe?u=' + encodeURIComponent(c.email),
        UPDATE_PROFILE: '#profile?u=' + encodeURIComponent(c.email)
      };
    }

    function merge(text, fields, html) {
      return String(text).replace(/\*\|([A-Z_:]+)\|\*/g, function (m, key) {
        if (!(key in fields)) return m;
        var v = fields[key];
        return html && key !== 'UNSUB' && key !== 'UPDATE_PROFILE' ? esc(v) : v;
      });
    }

    function render(c) {
      var f = mergeFields(c);
      return {
        from: s.template.fromName + ' <' + s.template.fromEmail + '>',
        to: c.email,
        subject: merge(s.template.subject, f, false),
        preheader: merge(s.template.preheader, f, false),
        html: merge(s.template.body + FOOTER, f, true)
      };
    }

    function unfilled(r) {
      var m = (r.subject + ' ' + r.preheader + ' ' + r.html).match(/\*\|[A-Z_:]+\|\*/g);
      return m || [];
    }

    function sendWelcome(c, isTest) {
      var r = render(c);
      var msg = { id: s.sent.length + 1, ts: clock(), time: fmt(clock()), to: r.to, from: r.from, subject: r.subject,
        preheader: r.preheader, html: r.html, test: !!isTest, contactId: isTest ? null : c.id };
      s.sent.push(msg);
      if (!isTest) {
        c.welcomeSentAt = msg.ts;
        s.journey.completed++;
      }
      return msg;
    }

    function signup(input, o) {
      o = o || {};
      input = input || {};
      var email = String(input.email || '').trim().toLowerCase();
      if (!validEmail(email)) { log('error', 'Form rejected: "' + (input.email || '') + '" is not a valid email'); return { ok: false, error: 'Please enter a valid email address.' }; }
      var full = String(input.name || '').trim().replace(/\s+/g, ' ');
      var parts = full ? full.split(' ') : [];
      var interest = INTERESTS.indexOf(input.interest) >= 0 ? input.interest : INTERESTS[0];
      var source = SOURCES.indexOf(input.source) >= 0 ? input.source : SOURCES[0];
      var existing = find(email);
      if (existing) {
        if (existing.status === 'unsubscribed') {
          log('skip', existing.email + ' signed up again but is unsubscribed: no email sent (needs to re-confirm opt-in)');
          return { ok: true, duplicate: true, sent: false, contact: existing };
        }
        log('skip', existing.email + ' is already in the audience: contact updated, journey not re-entered, no second welcome');
        return { ok: true, duplicate: true, sent: false, contact: existing };
      }
      var c = {
        id: s.nextId++, email: email, fname: parts[0] || '', lname: parts.slice(1).join(' '),
        interest: interest, source: source, status: 'subscribed', created: o.created || clock(), welcomeSentAt: null, tags: []
      };
      c.tags = tagsFor(c);
      s.contacts.push(c);
      if (o.silent) { c.welcomeSentAt = o.welcomeSentAt || c.created; return { ok: true, contact: c, sent: false }; }
      log('contact', 'Contact added to audience "' + s.audience + '": ' + (full || email) + ' <' + email + '>');
      log('tag', 'Tags applied: ' + c.tags.join(', '));
      if (!s.journey.active) {
        log('skip', 'Journey "' + s.journey.name + '" is paused: trigger did not fire');
        return { ok: true, contact: c, sent: false };
      }
      s.journey.entered++;
      log('trigger', 'Starting point "Signs up" fired: ' + email + ' entered journey "' + s.journey.name + '"');
      var msg = sendWelcome(c, false);
      log('send', 'Welcome email sent to ' + email + ': "' + msg.subject + '"', { msgId: msg.id });
      return { ok: true, contact: c, sent: true, email: msg };
    }

    function testSend(to) {
      to = String(to || '').trim().toLowerCase();
      if (!validEmail(to)) return { ok: false, error: 'Enter a valid test address.' };
      var sample = { email: to, fname: 'Alex', lname: 'Sample', interest: 'Strength training', source: 'Website' };
      var msg = sendWelcome(sample, true);
      msg.subject = '[Test] ' + msg.subject;
      log('test', 'Test email sent to ' + to + ' with sample merge data (FNAME=Alex)', { msgId: msg.id });
      return { ok: true, email: msg };
    }

    function unsubscribe(email) {
      var c = find(email);
      if (!c) return { ok: false, error: 'Not found' };
      if (c.status === 'unsubscribed') return { ok: true, contact: c };
      c.status = 'unsubscribed';
      log('unsub', c.email + ' unsubscribed: removed from all segments and future sends');
      return { ok: true, contact: c };
    }

    function resubscribe(email) {
      var c = find(email);
      if (!c) return { ok: false };
      c.status = 'subscribed';
      log('contact', c.email + ' re-subscribed (opt-in confirmed)');
      return { ok: true, contact: c };
    }

    var SEGMENTS = [
      { id: 'new30', name: 'New subscribers (last 30 days)', rule: 'Tags contact is "New subscriber" AND Date added is within the last 30 days AND Status is subscribed',
        test: function (c, now) { return c.tags.indexOf('New subscriber') >= 0 && now - c.created <= 30 * DAY; } },
      { id: 'strength', name: 'Interest: Strength or PT', rule: 'Tags contact is any of "Interest: Strength training", "Interest: Personal training" AND Status is subscribed',
        test: function (c) { return c.interest === 'Strength training' || c.interest === 'Personal training'; } },
      { id: 'insta', name: 'Came from Instagram', rule: 'Tags contact is "Source: Instagram" AND Status is subscribed',
        test: function (c) { return c.source === 'Instagram'; } }
    ];

    function segment(id) {
      var now = clock();
      var seg = null;
      for (var i = 0; i < SEGMENTS.length; i++) if (SEGMENTS[i].id === id) seg = SEGMENTS[i];
      if (!seg) return [];
      return s.contacts.filter(function (c) { return c.status === 'subscribed' && seg.test(c, now); });
    }

    function segments() {
      return SEGMENTS.map(function (g) { return { id: g.id, name: g.name, rule: g.rule, count: segment(g.id).length }; });
    }

    function stats() {
      var subs = s.contacts.filter(function (c) { return c.status === 'subscribed'; }).length;
      var live = s.sent.filter(function (m) { return !m.test; }).length;
      return { contacts: s.contacts.length, subscribed: subs, unsubscribed: s.contacts.length - subs,
        welcomesSent: live, tests: s.sent.length - live, entered: s.journey.entered };
    }

    function seed() {
      var now = clock();
      var rows = [
        ['Maria Lopez', 'Weight loss', 'Instagram', 2], ['James Carter', 'Strength training', 'Website', 3],
        ['Aisha Khan', 'Yoga & mobility', 'Referral', 5], ['Tom Nguyen', 'Personal training', 'Walk-in', 6],
        ['Emily Brooks', 'Weight loss', 'Website', 8], ['Carlos Rivera', 'Strength training', 'Instagram', 9],
        ['Priya Patel', 'Yoga & mobility', 'Instagram', 11], ['Derek Hill', 'Personal training', 'Referral', 12],
        ['Sofia Rossi', 'Weight loss', 'Walk-in', 14], ['Marcus Green', 'Strength training', 'Referral', 17],
        ['Hannah Lee', 'Yoga & mobility', 'Website', 19], ['Andre Johnson', 'Strength training', 'Instagram', 21],
        ['Grace Kim', 'Weight loss', 'Website', 24], ['Luis Martinez', 'Personal training', 'Instagram', 27],
        ['Olivia Turner', 'Yoga & mobility', 'Walk-in', 33], ['Ben Wright', 'Strength training', 'Website', 38],
        ['Nora Ali', 'Weight loss', 'Referral', 41], ['Ryan Scott', 'Personal training', 'Website', 47],
        ['Chloe Adams', 'Yoga & mobility', 'Instagram', 52], ['Kevin Brown', 'Weight loss', 'Instagram', 58]
      ];
      rows.forEach(function (r) {
        var p = r[0].toLowerCase().split(' ');
        signup({ name: r[0], email: p[0] + '.' + p[1] + '@example.com', interest: r[1], source: r[2] },
          { silent: true, created: now - r[3] * DAY });
      });
      ['emily.brooks@example.com', 'luis.martinez@example.com', 'ben.wright@example.com'].forEach(function (e) {
        var c = find(e); if (c) c.status = 'unsubscribed';
      });
      log('info', 'Sample audience loaded: 20 contacts (3 unsubscribed). Journey "' + s.journey.name + '" is ON.');
    }

    function setTemplate(t) { for (var k in t) if (k in s.template) s.template[k] = String(t[k]); }
    function resetTemplate() { s.template = JSON.parse(JSON.stringify(DEFAULT_TEMPLATE)); }
    function setActive(on) { s.journey.active = !!on; log('info', 'Journey "' + s.journey.name + '" turned ' + (on ? 'ON' : 'OFF (paused)')); }

    return {
      state: s, signup: signup, testSend: testSend, unsubscribe: unsubscribe, resubscribe: resubscribe,
      segments: segments, segment: segment, stats: stats, seed: seed, render: render, unfilled: unfilled,
      find: find, setTemplate: setTemplate, resetTemplate: resetTemplate, setActive: setActive, fmt: fmt
    };
  }

  var api = { createEngine: createEngine, INTERESTS: INTERESTS, SOURCES: SOURCES, DEFAULT_TEMPLATE: DEFAULT_TEMPLATE, esc: esc, validEmail: validEmail };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.WelcomeEngine = api;
})(typeof window !== 'undefined' ? window : this);
