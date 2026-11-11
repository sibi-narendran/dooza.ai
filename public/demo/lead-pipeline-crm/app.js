/* Lead Pipeline CRM demo for a small travel agency. Sample data only; state lives in this browser (localStorage). By Dooza. */
(function () {
  'use strict';

  var KEY = 'dooza-travel-crm-v1';
  var SOURCES = ['google', 'instagram', 'facebook', 'walkin', 'call'];
  var STAGES = ['new', 'contacted', 'quoted', 'converted', 'lost'];
  var AGENTS = [
    { id: 'a1', name: 'Priya Sharma' },
    { id: 'a2', name: 'Rahul Verma' },
    { id: 'a3', name: 'Anjali Nair' },
    { id: 'a4', name: 'Vikram Singh' }
  ];

  /* ---------- labels (English / Hindi) ---------- */
  var I18N = {
    en: {
      demoBar: '<b>Demo with sample data, by Dooza.</b> Everything you change is saved only in this browser.',
      brand: 'Demo Travel Co.', brandSub: 'Lead pipeline CRM', viewAs: 'Viewing as', manager: 'Manager',
      reset: 'Reset sample data', resetConfirm: 'Reset all leads to the sample data? Your changes in this browser will be lost.',
      tabInbox: 'Leads inbox', tabPipeline: 'Pipeline', tabReports: 'Reports',
      simTitle: 'Simulate new enquiry', simHelp: 'Click a source to see how a new enquiry lands at the top of the inbox in real time.',
      addLead: '+ Add lead (walk-in / call)',
      wireTitle: 'How the real wiring works',
      wire1: '<b>Google Ads lead form:</b> the lead form extension posts each submission to a webhook URL with a secret key; the server checks the key and adds the lead here within seconds.',
      wire2: '<b>Facebook + Instagram (Meta Lead Ads):</b> one Meta app subscribes the agency Page to the "leadgen" webhook; for each lead ID the server fetches the form answers from the Graph API. Instagram lead forms arrive through the same Page.',
      wire3: '<b>Walk-ins and call centre:</b> staff fill a short manual form ("Add lead"). Duplicate phone numbers are flagged, so one traveller is never two leads.',
      wire4: 'Every new lead gets its source tag, lands at the top of the inbox and the manager is notified to assign it.',
      dueTitle: 'Follow-ups due today', overdue: 'Overdue', dueToday: 'Due today', noDue: 'No follow-ups due today.',
      search: 'Search name, phone, destination', allSources: 'All sources', allStages: 'All stages', allAgents: 'All agents',
      onlyDue: 'Due today only', unassigned: 'Unassigned',
      hName: 'Traveller', hDest: 'Destination', hTravel: 'Travel date', hPax: 'Pax', hBudget: 'Budget', hSource: 'Source',
      hStage: 'Stage', hAgent: 'Agent', hReceived: 'Received', noLeads: 'No leads match these filters.',
      dragHelp: 'Drag a card to another stage, or use the dropdown on the card (handy on phones).',
      onlyManager: 'Only the manager can assign or re-assign leads.',
      phone: 'Phone', email: 'Email', nights: 'nights', enquiry: 'Enquiry', stage: 'Stage', agent: 'Assigned agent',
      notes: 'Notes', addNote: 'Add note', notePh: 'e.g. Called, wants sea-view room, will confirm by Friday',
      reminder: 'Follow-up reminder', setRem: 'Set reminder', clearRem: 'Clear', doneRem: 'Mark done', noRem: 'No reminder set.',
      remAt: 'Reminder', log: 'Activity log', close: 'Close',
      lCreated: 'Lead received via {src}', lStage: 'Stage changed: {from} → {to}', lAssign: 'Assigned to {to}',
      lReassign: 'Re-assigned: {from} → {to}', lUnassign: 'Unassigned (was {from})', lNote: 'Note added: “{text}”',
      lRem: 'Follow-up reminder set for {at}', lRemClear: 'Follow-up reminder cleared', lRemDone: 'Follow-up done (was due {at})',
      by: 'by', system: 'System',
      toastNew: '<b>New enquiry</b> from {src}: {name}, {dest}, {pax} pax. Click to open.',
      toastMoved: '{name} moved to {to}', toastSaved: 'Saved',
      mTitle: 'Add lead manually', mName: 'Name', mPhone: 'Phone', mDest: 'Destination', mDate: 'Travel date', mPax: 'Pax',
      mBudget: 'Budget (₹)', mSource: 'Source', mMsg: 'What do they want?', save: 'Save lead', cancel: 'Cancel',
      mReq: 'Name, phone and destination are needed.', dup: 'A lead with this phone already exists: {name}. Opened it instead.',
      rFilters: 'Filters', rFrom: 'Travel from', rTo: 'Travel to', rClear: 'Clear filters',
      kTotal: 'Leads', kConv: 'Converted', kRate: 'Conversion rate', kOpen: 'Open pipeline (budget)', kLost: 'Lost',
      rBySource: 'By source', rByAgent: 'By agent', rByMonth: 'By travel month', rByStage: 'By stage',
      lgLeads: 'Leads', lgConv: 'Converted', convOf: '{c} of {n} · {p}%',
      ago: { now: 'just now', m: '{n} min ago', h: '{n} h ago', d: '{n} d ago' },
      footer: 'Sample data only: names, numbers and enquiries are made up. Built by Dooza as a working demo.',
      src: { google: 'Google Ads form', instagram: 'Instagram', facebook: 'Facebook', walkin: 'Walk-in', call: 'Call centre' },
      st: { 'new': 'New', contacted: 'Contacted', quoted: 'Quotation sent', converted: 'Converted', lost: 'Lost' },
      paxU: 'pax',
      langBtn: 'हिंदी'
    },
    hi: {
      demoBar: '<b>सैंपल डेटा वाला डेमो, Dooza द्वारा।</b> आपके सारे बदलाव सिर्फ़ इसी ब्राउज़र में सेव होते हैं।',
      brand: 'डेमो ट्रैवल कंपनी', brandSub: 'लीड पाइपलाइन CRM', viewAs: 'इस रूप में देखें', manager: 'मैनेजर',
      reset: 'सैंपल डेटा रीसेट करें', resetConfirm: 'सभी लीड सैंपल डेटा पर रीसेट करें? इस ब्राउज़र में किए गए आपके बदलाव मिट जाएँगे।',
      tabInbox: 'लीड इनबॉक्स', tabPipeline: 'पाइपलाइन', tabReports: 'रिपोर्ट',
      simTitle: 'नई पूछताछ सिमुलेट करें', simHelp: 'किसी स्रोत पर क्लिक करें और देखें कि नई पूछताछ कैसे तुरंत इनबॉक्स में सबसे ऊपर आती है।',
      addLead: '+ लीड जोड़ें (वॉक-इन / कॉल)',
      wireTitle: 'असली सिस्टम में यह कैसे जुड़ता है',
      wire1: '<b>Google Ads लीड फ़ॉर्म:</b> लीड फ़ॉर्म एक्सटेंशन हर सबमिशन को एक गुप्त कुंजी के साथ वेबहुक URL पर भेजता है; सर्वर कुंजी जाँचकर कुछ ही सेकंड में लीड यहाँ जोड़ देता है।',
      wire2: '<b>फ़ेसबुक + इंस्टाग्राम (Meta Lead Ads):</b> एक Meta ऐप एजेंसी के पेज को "leadgen" वेबहुक से जोड़ता है; हर लीड ID के लिए सर्वर Graph API से फ़ॉर्म के जवाब लेता है। इंस्टाग्राम के लीड फ़ॉर्म भी इसी पेज से आते हैं।',
      wire3: '<b>वॉक-इन और कॉल सेंटर:</b> स्टाफ़ एक छोटा मैनुअल फ़ॉर्म ("लीड जोड़ें") भरता है। एक ही फ़ोन नंबर दोबारा आने पर चेतावनी मिलती है, ताकि एक यात्री की दो लीड न बनें।',
      wire4: 'हर नई लीड पर उसका स्रोत टैग लगता है, वह इनबॉक्स में सबसे ऊपर आती है और मैनेजर को असाइन करने की सूचना मिलती है।',
      dueTitle: 'आज के फ़ॉलो-अप', overdue: 'समय निकल गया', dueToday: 'आज देय', noDue: 'आज कोई फ़ॉलो-अप बाकी नहीं है।',
      search: 'नाम, फ़ोन या गंतव्य खोजें', allSources: 'सभी स्रोत', allStages: 'सभी चरण', allAgents: 'सभी एजेंट',
      onlyDue: 'सिर्फ़ आज देय', unassigned: 'असाइन नहीं',
      hName: 'यात्री', hDest: 'गंतव्य', hTravel: 'यात्रा की तारीख', hPax: 'यात्री संख्या', hBudget: 'बजट', hSource: 'स्रोत',
      hStage: 'चरण', hAgent: 'एजेंट', hReceived: 'प्राप्त', noLeads: 'इन फ़िल्टर से कोई लीड नहीं मिली।',
      dragHelp: 'कार्ड को खींचकर दूसरे चरण में डालें, या कार्ड का ड्रॉपडाउन इस्तेमाल करें (फ़ोन पर आसान)।',
      onlyManager: 'सिर्फ़ मैनेजर ही लीड असाइन या दोबारा असाइन कर सकता है।',
      phone: 'फ़ोन', email: 'ईमेल', nights: 'रातें', enquiry: 'पूछताछ', stage: 'चरण', agent: 'असाइन किया गया एजेंट',
      notes: 'नोट्स', addNote: 'नोट जोड़ें', notePh: 'जैसे: कॉल किया, सी-व्यू कमरा चाहिए, शुक्रवार तक पक्का करेंगे',
      reminder: 'फ़ॉलो-अप रिमाइंडर', setRem: 'रिमाइंडर लगाएँ', clearRem: 'हटाएँ', doneRem: 'पूरा हुआ', noRem: 'कोई रिमाइंडर नहीं लगा है।',
      remAt: 'रिमाइंडर', log: 'गतिविधि लॉग', close: 'बंद करें',
      lCreated: '{src} से लीड आई', lStage: 'चरण बदला: {from} → {to}', lAssign: '{to} को असाइन की गई',
      lReassign: 'दोबारा असाइन: {from} → {to}', lUnassign: 'असाइनमेंट हटाया (पहले {from})', lNote: 'नोट जोड़ा: “{text}”',
      lRem: 'फ़ॉलो-अप रिमाइंडर लगाया: {at}', lRemClear: 'फ़ॉलो-अप रिमाइंडर हटाया', lRemDone: 'फ़ॉलो-अप पूरा हुआ (देय था {at})',
      by: 'द्वारा', system: 'सिस्टम',
      toastNew: '<b>नई पूछताछ</b> {src} से: {name}, {dest}, {pax} यात्री। खोलने के लिए क्लिक करें।',
      toastMoved: '{name} अब {to} में', toastSaved: 'सेव हो गया',
      mTitle: 'लीड मैनुअली जोड़ें', mName: 'नाम', mPhone: 'फ़ोन', mDest: 'गंतव्य', mDate: 'यात्रा की तारीख', mPax: 'यात्री संख्या',
      mBudget: 'बजट (₹)', mSource: 'स्रोत', mMsg: 'उन्हें क्या चाहिए?', save: 'लीड सेव करें', cancel: 'रद्द करें',
      mReq: 'नाम, फ़ोन और गंतव्य ज़रूरी हैं।', dup: 'इस फ़ोन नंबर की लीड पहले से है: {name}। वही खोल दी गई है।',
      rFilters: 'फ़िल्टर', rFrom: 'यात्रा कब से', rTo: 'यात्रा कब तक', rClear: 'फ़िल्टर हटाएँ',
      kTotal: 'कुल लीड', kConv: 'कन्वर्ट हुईं', kRate: 'कन्वर्ज़न दर', kOpen: 'खुली पाइपलाइन (बजट)', kLost: 'खोई गईं',
      rBySource: 'स्रोत के अनुसार', rByAgent: 'एजेंट के अनुसार', rByMonth: 'यात्रा के महीने के अनुसार', rByStage: 'चरण के अनुसार',
      lgLeads: 'लीड', lgConv: 'कन्वर्ट हुईं', convOf: '{n} में से {c} · {p}%',
      ago: { now: 'अभी', m: '{n} मिनट पहले', h: '{n} घंटे पहले', d: '{n} दिन पहले' },
      footer: 'सिर्फ़ सैंपल डेटा: नाम, नंबर और पूछताछ काल्पनिक हैं। Dooza द्वारा बनाया गया चालू डेमो।',
      src: { google: 'Google Ads फ़ॉर्म', instagram: 'इंस्टाग्राम', facebook: 'फ़ेसबुक', walkin: 'वॉक-इन', call: 'कॉल सेंटर' },
      st: { 'new': 'नई', contacted: 'संपर्क किया', quoted: 'कोटेशन भेजा', converted: 'कन्वर्ट हुई', lost: 'खोई गई' },
      paxU: 'यात्री',
      langBtn: 'English'
    }
  };

  /* ---------- helpers ---------- */
  var DAY = 864e5, HOUR = 36e5, MIN = 6e4;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fill(str, o) { return String(str).replace(/\{(\w+)\}/g, function (_, k) { return o[k] != null ? o[k] : ''; }); }
  function t(k) { var v = I18N[state.lang][k]; return v == null ? I18N.en[k] : v; }
  function loc() { return state.lang === 'hi' ? 'hi-IN' : 'en-IN'; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function localDT(d) { return ymd(d) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()); }
  function parseDate(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function parseDT(s) { var a = s.split('T'), d = parseDate(a[0]), hm = (a[1] || '00:00').split(':'); d.setHours(+hm[0], +hm[1], 0, 0); return d; }
  function fmtDate(s) { return parseDate(s).toLocaleDateString(loc(), { day: 'numeric', month: 'short', year: 'numeric' }); }
  function fmtDT(ts) { return new Date(ts).toLocaleString(loc(), { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }); }
  function fmtTime(d) { return d.toLocaleTimeString(loc(), { hour: 'numeric', minute: '2-digit' }); }
  function inr(n) { return '₹' + Number(n || 0).toLocaleString('en-IN'); }
  function agentName(id) { if (!id) return t('unassigned'); for (var i = 0; i < AGENTS.length; i++) if (AGENTS[i].id === id) return AGENTS[i].name; return id; }
  function actorName(a) { return a === 'manager' ? t('manager') : a === 'system' ? t('system') : agentName(a); }
  function ago(ts) {
    var d = Date.now() - ts, A = t('ago');
    if (d < MIN) return A.now;
    if (d < HOUR) return fill(A.m, { n: Math.floor(d / MIN) });
    if (d < DAY) return fill(A.h, { n: Math.floor(d / HOUR) });
    return fill(A.d, { n: Math.floor(d / DAY) });
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function startOfToday() { var d = new Date(); d.setHours(0, 0, 0, 0); return d; }

  /* reminder status: 'over' | 'today' | 'later' | null */
  function remStatus(l) {
    if (!l.reminder) return null;
    var r = parseDT(l.reminder), s = startOfToday().getTime();
    if (r.getTime() < s) return 'over';
    if (r.getTime() < s + DAY) return r.getTime() < Date.now() ? 'over' : 'today';
    return 'later';
  }
  function remBadge(l) {
    var s = remStatus(l); if (!s) return '';
    var r = parseDT(l.reminder);
    var label = s === 'today' ? t('dueToday') + ' ' + fmtTime(r) : s === 'over' ? t('overdue') + ' · ' + fmtDT(r.getTime()) : '⏰ ' + fmtDT(r.getTime());
    return '<span class="rem ' + s + '">' + esc(label) + '</span>';
  }
  function isDue(l) { var s = remStatus(l); return s === 'today' || s === 'over'; }

  /* ---------- sample data ---------- */
  // name, phone, destination, travel in days, nights, pax, budget, source, stage, agent, created hours ago,
  // reminder [days from today, 'HH:MM'] or [0, minutes from now] (kept inside today), enquiry, notes
  var SEED = [
    ['Aarav Mehta', '98201 44172', 'Goa', 24, 4, 2, 45000, 'google', 'new', null, 0.6, null, 'Honeymoon package, beach resort in North Goa, flights from Mumbai.', []],
    ['Sneha Iyer', '99400 21983', 'Kerala', 38, 6, 4, 120000, 'instagram', 'new', null, 2.5, null, 'Family trip: Munnar, Thekkady and an Alleppey houseboat. Two kids (8, 11).', []],
    ['Rohan Gupta', '98110 67345', 'Dubai', 52, 5, 3, 210000, 'facebook', 'new', 'a2', 5, [0, 120], 'Dubai with Desert Safari and Burj Khalifa tickets. Need visa help.', []],
    ['Kavya Reddy', '90000 81234', 'Bali', 70, 6, 2, 160000, 'google', 'contacted', 'a1', 20, [0, -150], 'Bali honeymoon, private pool villa in Ubud + Seminyak.', ['Called, she wants a pool villa. Sending 2 options tomorrow.']],
    ['Manish Agarwal', '98300 55210', 'Manali', 31, 5, 6, 90000, 'walkin', 'contacted', 'a4', 28, [0, 45], 'Group of college friends, Volvo from Delhi, Solang Valley snow activities.', ['Came to office with 2 friends. Budget tight, prefers homestay.']],
    ['Divya Nair', '94470 30091', 'Kerala', 15, 3, 2, 38000, 'call', 'quoted', 'a3', 50, [0, 200], 'Short Alleppey houseboat + Kumarakom stay for anniversary.', ['Quote sent: ₹36,500 with premium houseboat.']],
    ['Arjun Kapoor', '98102 99887', 'Dubai', 45, 4, 2, 150000, 'instagram', 'quoted', 'a2', 70, [-1, '12:00'], 'Saw the Dubai reel. Wants 4N with Atlantis day pass.', ['Quote ₹1,48,000 sent on WhatsApp.']],
    ['Pooja Joshi', '97690 11223', 'Goa', 9, 3, 5, 55000, 'facebook', 'converted', 'a1', 160, null, 'Girls trip, South Goa, near Palolem.', ['Paid advance ₹20,000. Booking confirmed.']],
    ['Siddharth Rao', '99860 45512', 'Bali', 96, 7, 4, 280000, 'google', 'contacted', 'a3', 30, [2, '10:30'], 'Bali with parents, needs easy itinerary, no long drives.', []],
    ['Neha Verma', '98990 70701', 'Manali', 58, 4, 2, 42000, 'instagram', 'new', null, 9, null, 'Manali + Kasol in winter, wants snowfall.', []],
    ['Vivek Malhotra', '98184 22334', 'Dubai', 20, 3, 4, 180000, 'call', 'lost', 'a4', 210, null, 'Business + family, short Dubai trip.', ['Went with another agency, cheaper flights.']],
    ['Ananya Bose', '98310 76543', 'Kerala', 64, 5, 2, 70000, 'facebook', 'quoted', 'a1', 95, [1, '11:30'], 'Ayurveda retreat in Kovalam + Varkala beach.', ['Sent 2 options. Wants a call on Friday.']],
    ['Karan Singh', '98140 33221', 'Goa', 41, 4, 8, 110000, 'walkin', 'quoted', 'a4', 120, [3, '16:00'], 'Bachelor party, villa with pool, Baga/Anjuna.', []],
    ['Meera Pillai', '94950 12121', 'Bali', 118, 8, 2, 230000, 'instagram', 'contacted', 'a2', 40, [0, 300], 'Bali + Gili islands, likes diving.', []],
    ['Rahul Chatterjee', '98300 18181', 'Manali', 12, 4, 4, 60000, 'google', 'converted', 'a3', 260, null, 'Family Manali trip with Rohtang permit.', ['Full payment received.']],
    ['Ishita Desai', '98250 64646', 'Dubai', 80, 5, 2, 170000, 'facebook', 'new', null, 1.2, null, 'Dubai + Abu Dhabi, Ferrari World.', []],
    ['Aditya Kulkarni', '98220 90909', 'Goa', 100, 4, 3, 50000, 'call', 'new', 'a1', 14, null, 'Christmas–New Year in Goa? Needs quote.', []],
    ['Shreya Banerjee', '90070 23232', 'Kerala', 135, 6, 5, 140000, 'google', 'contacted', 'a2', 75, [-2, '17:00'], 'Kerala for joint family, needs tempo traveller.', ['Not picking up, try again.']],
    ['Nikhil Jain', '98290 45454', 'Bali', 150, 6, 2, 190000, 'instagram', 'lost', 'a1', 300, null, 'Bali honeymoon in March.', ['Postponed wedding, trip cancelled.']],
    ['Tanvi Shah', '98790 56565', 'Manali', 85, 5, 3, 65000, 'walkin', 'new', null, 3.5, null, 'Manali + Shimla, couple with mother.', []],
    ['Harsh Vardhan', '98880 78787', 'Dubai', 27, 4, 5, 260000, 'google', 'converted', 'a2', 330, null, 'Family Dubai trip, Diwali-break dates.', ['Visas done, tickets issued.']],
    ['Lakshmi Krishnan', '94440 89898', 'Kerala', 48, 4, 2, 52000, 'call', 'converted', 'a3', 400, null, 'Munnar tea estate stay, senior couple.', ['Booked. Wants a driver who speaks Tamil.']],
    ['Varun Thakur', '98170 13579', 'Goa', 62, 3, 2, 30000, 'facebook', 'lost', 'a4', 450, null, 'Budget Goa weekend.', ['Budget too low for those dates.']],
    ['Riya Saxena', '99100 24680', 'Bali', 110, 6, 3, 175000, 'google', 'quoted', 'a1', 140, [0, -40], 'Bali with friend + sister, Nusa Penida day trip.', ['Quote sent, waiting on flight prices.']],
    ['Gaurav Mishra', '98390 11335', 'Manali', 140, 4, 2, 40000, 'instagram', 'converted', 'a4', 520, null, 'Manali in March, honeymoon cottage.', ['Advance paid.']]
  ];

  var POOL = {
    names: ['Aditi Rao', 'Yash Patel', 'Simran Kaur', 'Abhishek Pandey', 'Nandini Menon', 'Kunal Bhatia', 'Priyanka Das', 'Sameer Khan', 'Ritika Arora', 'Deepak Yadav', 'Swati Kulkarni', 'Arnav Sinha', 'Pallavi Hegde', 'Mohit Chawla', 'Zoya Qureshi'],
    dest: ['Goa', 'Kerala', 'Dubai', 'Bali', 'Manali'],
    msg: {
      Goa: ['Beach resort in Calangute, need airport pickup.', 'Couple trip, quiet South Goa stay.'],
      Kerala: ['Houseboat in Alleppey + Munnar, family of four.', 'Kerala backwaters for honeymoon.'],
      Dubai: ['Dubai with Desert Safari, need visa.', 'Shopping festival dates, 4 nights.'],
      Bali: ['Bali honeymoon, private villa.', 'Bali with friends, Nusa Penida trip.'],
      Manali: ['Snow trip to Solang, Volvo from Delhi.', 'Manali + Kasol, 5 nights.']
    },
    budget: { Goa: [30000, 80000], Kerala: [35000, 140000], Dubai: [120000, 300000], Bali: [140000, 280000], Manali: [30000, 90000] }
  };

  function makeLead(o) {
    return {
      id: 'L' + (state.seq++), name: o.name, phone: o.phone, email: o.email || '', dest: o.dest, travelDate: o.travelDate,
      nights: o.nights || 4, pax: o.pax || 2, budget: o.budget || 0, source: o.source, stage: 'new', agent: null,
      created: o.created, reminder: null, msg: o.msg || '', notes: [], log: []
    };
  }
  function addLog(l, ts, actor, type, data) { l.log.push({ ts: ts, by: actor, type: type, d: data || {} }); }

  function buildSeed() {
    state.seq = 1001;
    var now = Date.now(), today = startOfToday(), leads = [];
    SEED.forEach(function (r) {
      var created = now - r[10] * HOUR;
      var td = new Date(today.getTime() + r[3] * DAY);
      var l = makeLead({
        name: r[0], phone: '+91 ' + r[1], email: r[0].toLowerCase().replace(/[^a-z]+/g, '.') + '@example.com', dest: r[2],
        travelDate: ymd(td), nights: r[4], pax: r[5], budget: r[6], source: r[7], created: created, msg: r[12]
      });
      addLog(l, created, 'system', 'created', { src: r[7] });
      var span = now - created;
      function at(f) { return Math.round(created + span * f); }
      if (r[9]) { l.agent = r[9]; addLog(l, at(0.08), 'manager', 'assign', { from: null, to: r[9] }); }
      var path = { 'new': [], contacted: ['contacted'], quoted: ['contacted', 'quoted'], converted: ['contacted', 'quoted', 'converted'], lost: ['contacted', 'quoted', 'lost'] }[r[8]];
      var prev = 'new';
      path.forEach(function (s, i) {
        var ts = at(0.15 + 0.7 * (i + 1) / (path.length + 1));
        addLog(l, ts, r[9] || 'manager', 'stage', { from: prev, to: s }); prev = s;
      });
      l.stage = r[8];
      r[13].forEach(function (n, i) {
        var ts = at(0.2 + 0.7 * (i + 1) / (r[13].length + 1));
        l.notes.push({ ts: ts, by: r[9] || 'manager', text: n });
        addLog(l, ts, r[9] || 'manager', 'note', { text: n });
      });
      if (r[11]) {
        var rd;
        if (typeof r[11][1] === 'number') {
          var lo = today.getTime() + 5 * MIN, hi = today.getTime() + DAY - 5 * MIN;
          rd = new Date(Math.min(hi, Math.max(lo, now + r[11][1] * MIN)));
        } else {
          var hm = r[11][1].split(':'); rd = new Date(today.getTime() + r[11][0] * DAY); rd.setHours(+hm[0], +hm[1], 0, 0);
        }
        l.reminder = localDT(rd);
        addLog(l, at(0.9), r[9] || 'manager', 'rem', { at: l.reminder });
      }
      l.log.sort(function (a, b) { return a.ts - b.ts; });
      leads.push(l);
    });
    leads.sort(function (a, b) { return b.created - a.created; });
    state.leads = leads;
  }

  /* ---------- state ---------- */
  var state = { lang: 'en', role: 'manager', tab: 'inbox', leads: [], seq: 1001, f: { q: '', src: '', st: '', ag: '', due: false }, r: { src: '', ag: '', from: '', to: '' } };
  var openId = null, flashId = null;

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({ v: 1, lang: state.lang, role: state.role, tab: state.tab, leads: state.leads, seq: state.seq })); } catch (e) { /* storage unavailable: keep working in memory */ }
  }
  function load() {
    var raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { raw = null; }
    if (raw) {
      try {
        var s = JSON.parse(raw);
        if (s && s.v === 1 && Array.isArray(s.leads)) {
          state.leads = s.leads; state.seq = s.seq || 2000; state.lang = s.lang === 'hi' ? 'hi' : 'en';
          state.role = s.role || 'manager'; state.tab = s.tab || 'inbox'; return;
        }
      } catch (e) { /* corrupt: fall through to seed */ }
    }
    buildSeed(); save();
  }
  function lead(id) { for (var i = 0; i < state.leads.length; i++) if (state.leads[i].id === id) return state.leads[i]; return null; }
  function isMgr() { return state.role === 'manager'; }
  function visibleLeads() { return isMgr() ? state.leads : state.leads.filter(function (l) { return l.agent === state.role; }); }

  /* ---------- mutations (all logged) ---------- */
  function setStage(l, to) {
    if (!l || l.stage === to || STAGES.indexOf(to) < 0) return;
    addLog(l, Date.now(), state.role, 'stage', { from: l.stage, to: to }); l.stage = to; save();
  }
  function setAgent(l, to) {
    if (!l || !isMgr()) return; to = to || null;
    if (l.agent === to) return;
    addLog(l, Date.now(), state.role, 'assign', { from: l.agent, to: to }); l.agent = to; save();
  }
  function addNote(l, text) {
    text = text.trim(); if (!l || !text) return;
    var ts = Date.now(); l.notes.push({ ts: ts, by: state.role, text: text }); addLog(l, ts, state.role, 'note', { text: text }); save();
  }
  function setReminder(l, v) { if (!l || !v) return; l.reminder = v; addLog(l, Date.now(), state.role, 'rem', { at: v }); save(); }
  function clearReminder(l, done) {
    if (!l || !l.reminder) return;
    addLog(l, Date.now(), state.role, done ? 'remDone' : 'remClear', { at: l.reminder }); l.reminder = null; save();
  }

  function simulate(src) {
    var dest = pick(POOL.dest), b = POOL.budget[dest], name = pick(POOL.names);
    var td = new Date(startOfToday().getTime() + (14 + Math.floor(Math.random() * 120)) * DAY);
    var phone = '+91 9' + Math.floor(1000 + Math.random() * 8999) + ' ' + Math.floor(10000 + Math.random() * 89999);
    var l = makeLead({
      name: name, phone: phone, email: name.toLowerCase().replace(/[^a-z]+/g, '.') + '@example.com', dest: dest, travelDate: ymd(td),
      nights: 3 + Math.floor(Math.random() * 5), pax: 1 + Math.floor(Math.random() * 6),
      budget: Math.round((b[0] + Math.random() * (b[1] - b[0])) / 1000) * 1000, source: src, created: Date.now(), msg: pick(POOL.msg[dest])
    });
    addLog(l, l.created, 'system', 'created', { src: src });
    ingest(l);
  }
  function ingest(l) {
    state.leads.unshift(l); flashId = l.id; save(); render();
    toast(fill(t('toastNew'), { src: esc(t('src')[l.source]), name: esc(l.name), dest: esc(l.dest), pax: l.pax }), l.id);
  }

  /* ---------- toast ---------- */
  function toast(html, id) {
    var box = $('#toasts'), el = document.createElement('div');
    el.className = 'toast'; el.innerHTML = html;
    el.addEventListener('click', function () { if (id) openDrawer(id); el.remove(); });
    box.appendChild(el);
    setTimeout(function () { el.remove(); }, 4500);
  }

  /* ---------- static labels ---------- */
  function applyLabels() {
    document.documentElement.lang = state.lang;
    $$('[data-i]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i')); });
    $$('[data-ih]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-ih')); });
    $$('[data-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-ph'))); });
    $('#langBtn').textContent = t('langBtn');
    document.title = t('brandSub') + ' · ' + t('brand') + ' (Dooza demo)';
    // role select
    var rs = $('#role'), html = '<option value="manager">' + esc(t('manager')) + '</option>';
    AGENTS.forEach(function (a) { html += '<option value="' + a.id + '">' + esc(a.name) + '</option>'; });
    rs.innerHTML = html; rs.value = state.role;
    // simulate buttons
    $('#simBtns').innerHTML = SOURCES.map(function (s) { return '<button class="btn2 sm" data-sim="' + s + '">+ ' + esc(t('src')[s]) + '</button>'; }).join('');
    // filter selects
    fillSel($('#fSrc'), t('allSources'), SOURCES.map(function (s) { return [s, t('src')[s]]; }), state.f.src);
    fillSel($('#fSt'), t('allStages'), STAGES.map(function (s) { return [s, t('st')[s]]; }), state.f.st);
    fillSel($('#fAg'), t('allAgents'), [['none', t('unassigned')]].concat(AGENTS.map(function (a) { return [a.id, a.name]; })), state.f.ag);
    fillSel($('#rSrc'), t('allSources'), SOURCES.map(function (s) { return [s, t('src')[s]]; }), state.r.src);
    fillSel($('#rAg'), t('allAgents'), [['none', t('unassigned')]].concat(AGENTS.map(function (a) { return [a.id, a.name]; })), state.r.ag);
    fillSel($('#mSrc'), null, [['walkin', t('src').walkin], ['call', t('src').call]], $('#mSrc').value || 'walkin');
    fillSel($('#mDest'), null, POOL.dest.map(function (d) { return [d, d]; }), $('#mDest').value || 'Goa');
  }
  function fillSel(el, allLabel, opts, val) {
    var h = allLabel ? '<option value="">' + esc(allLabel) + '</option>' : '';
    opts.forEach(function (o) { h += '<option value="' + esc(o[0]) + '">' + esc(o[1]) + '</option>'; });
    el.innerHTML = h; if (val != null) el.value = val;
  }

  /* ---------- render ---------- */
  function render() {
    $$('.tab').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-tab') === state.tab); });
    $$('.pane').forEach(function (p) { p.classList.toggle('on', p.id === 'p-' + state.tab); });
    var due = visibleLeads().filter(isDue).length;
    $('#dueCnt').textContent = due; $('#dueCnt').style.display = due ? '' : 'none';
    if (state.tab === 'inbox') renderInbox();
    if (state.tab === 'pipeline') renderBoard();
    if (state.tab === 'reports') renderReports();
    if (openId) renderDrawer();
    flashId = null;
  }

  function stPill(s) { return '<span class="pill st-' + s + '">' + esc(t('st')[s]) + '</span>'; }
  function srcPill(s) { return '<span class="pill s-' + s + '">' + esc(t('src')[s]) + '</span>'; }

  function renderInbox() {
    var all = visibleLeads();
    // due today panel
    var due = all.filter(isDue).sort(function (a, b) { return parseDT(a.reminder) - parseDT(b.reminder); });
    $('#dueList').innerHTML = due.length ? due.map(function (l) {
      return '<li>' + remBadge(l) + ' <a data-open="' + l.id + '">' + esc(l.name) + '</a> <span class="muted">' + esc(l.dest) + ' · ' + esc(agentName(l.agent)) + '</span> ' + stPill(l.stage) + '</li>';
    }).join('') : '<li class="muted">' + esc(t('noDue')) + '</li>';
    // filters
    var f = state.f, q = f.q.trim().toLowerCase();
    var rows = all.filter(function (l) {
      if (f.src && l.source !== f.src) return false;
      if (f.st && l.stage !== f.st) return false;
      if (f.ag && (f.ag === 'none' ? l.agent : l.agent !== f.ag)) return false;
      if (f.due && !isDue(l)) return false;
      if (q && (l.name + ' ' + l.phone + ' ' + l.dest).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    var H = ['hName', 'hDest', 'hTravel', 'hPax', 'hBudget', 'hSource', 'hStage', 'hAgent', 'hReceived'].map(t);
    var h = '<thead><tr>' + H.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr></thead><tbody>';
    if (!rows.length) h += '<tr><td colspan="9" class="empty">' + esc(t('noLeads')) + '</td></tr>';
    rows.forEach(function (l) {
      var cls = 'lr' + (isDue(l) ? ' duet' : '') + (l.id === flashId ? ' flash' : '');
      h += '<tr class="' + cls + '" data-open="' + l.id + '">' +
        '<td><div class="nm">' + esc(l.name) + '</div><div class="sub">' + esc(l.phone) + '</div>' + remBadge(l) + '</td>' +
        '<td data-h="' + esc(H[1]) + '">' + esc(l.dest) + '</td>' +
        '<td data-h="' + esc(H[2]) + '">' + esc(fmtDate(l.travelDate)) + '</td>' +
        '<td data-h="' + esc(H[3]) + '">' + l.pax + '</td>' +
        '<td data-h="' + esc(H[4]) + '">' + inr(l.budget) + '</td>' +
        '<td data-h="' + esc(H[5]) + '">' + srcPill(l.source) + '</td>' +
        '<td data-h="' + esc(H[6]) + '">' + stPill(l.stage) + '</td>' +
        '<td data-h="' + esc(H[7]) + '">' + esc(agentName(l.agent)) + '</td>' +
        '<td data-h="' + esc(H[8]) + '"><span class="sub" title="' + esc(fmtDT(l.created)) + '">' + esc(ago(l.created)) + '</span></td></tr>';
    });
    $('#leadTable').innerHTML = h + '</tbody>';
  }

  function stageSel(l) {
    return '<select data-stage="' + l.id + '" aria-label="' + esc(t('stage')) + '">' + STAGES.map(function (s) {
      return '<option value="' + s + '"' + (s === l.stage ? ' selected' : '') + '>' + esc(t('st')[s]) + '</option>';
    }).join('') + '</select>';
  }
  function agentSel(l, attr) {
    var h = '<select ' + attr + '="' + l.id + '" aria-label="' + esc(t('agent')) + '"' + (isMgr() ? '' : ' disabled') + '><option value="">' + esc(t('unassigned')) + '</option>';
    AGENTS.forEach(function (a) { h += '<option value="' + a.id + '"' + (a.id === l.agent ? ' selected' : '') + '>' + esc(a.name) + '</option>'; });
    return h + '</select>';
  }

  function renderBoard() {
    var all = visibleLeads();
    $('#mgrHint').style.display = isMgr() ? 'none' : '';
    $('#board').innerHTML = STAGES.map(function (s) {
      var items = all.filter(function (l) { return l.stage === s; });
      var sum = items.reduce(function (a, l) { return a + l.budget; }, 0);
      return '<div class="col c-' + s + '" data-col="' + s + '"><h4>' + esc(t('st')[s]) + ' <span>' + items.length + ' · ' + inr(sum) + '</span></h4>' +
        items.map(function (l) {
          return '<div class="kc' + (isDue(l) ? ' duet' : '') + (l.id === flashId ? ' flash' : '') + '" draggable="true" data-card="' + l.id + '">' +
            '<b>' + esc(l.name) + '</b><div class="meta">' + esc(l.dest) + ' · ' + esc(fmtDate(l.travelDate)) + ' · ' + l.pax + ' ' + esc(t('paxU')) + ' · ' + inr(l.budget) + '</div>' +
            '<div>' + srcPill(l.source) + ' <span class="meta">' + esc(agentName(l.agent)) + '</span></div>' + remBadge(l) +
            '<div class="ctl">' + stageSel(l) + agentSel(l, 'data-agent') + '</div></div>';
        }).join('') + '</div>';
    }).join('');
  }

  function logText(e) {
    var d = e.d, st = t('st');
    switch (e.type) {
      case 'created': return fill(t('lCreated'), { src: t('src')[d.src] });
      case 'stage': return fill(t('lStage'), { from: st[d.from], to: st[d.to] });
      case 'assign':
        if (!d.from) return fill(t('lAssign'), { to: agentName(d.to) });
        if (!d.to) return fill(t('lUnassign'), { from: agentName(d.from) });
        return fill(t('lReassign'), { from: agentName(d.from), to: agentName(d.to) });
      case 'note': return fill(t('lNote'), { text: d.text });
      case 'rem': return fill(t('lRem'), { at: fmtDT(parseDT(d.at).getTime()) });
      case 'remClear': return t('lRemClear');
      case 'remDone': return fill(t('lRemDone'), { at: fmtDT(parseDT(d.at).getTime()) });
    }
    return e.type;
  }

  function renderDrawer() {
    var l = lead(openId); if (!l) { closeDrawer(); return; }
    var def = new Date(Date.now() + 2 * HOUR); def.setMinutes(0, 0, 0);
    var h = '<div class="dh"><div><h2>' + esc(l.name) + '</h2>' + srcPill(l.source) + ' ' + stPill(l.stage) + '</div>' +
      '<button class="btn2 sm" data-close>' + esc(t('close')) + '</button></div>' +
      '<div class="kv"><span>' + esc(t('phone')) + '</span><b>' + esc(l.phone) + '</b>' +
      '<span>' + esc(t('email')) + '</span><span style="color:var(--ink)">' + esc(l.email || '-') + '</span>' +
      '<span>' + esc(t('hDest')) + '</span><b>' + esc(l.dest) + '</b>' +
      '<span>' + esc(t('hTravel')) + '</span><span style="color:var(--ink)">' + esc(fmtDate(l.travelDate)) + ' · ' + l.nights + ' ' + esc(t('nights')) + '</span>' +
      '<span>' + esc(t('hPax')) + '</span><span style="color:var(--ink)">' + l.pax + '</span>' +
      '<span>' + esc(t('hBudget')) + '</span><b>' + inr(l.budget) + '</b>' +
      '<span>' + esc(t('hReceived')) + '</span><span style="color:var(--ink)">' + esc(fmtDT(l.created)) + '</span></div>' +
      '<label class="muted">' + esc(t('enquiry')) + '</label><div class="msg">' + esc(l.msg) + '</div>' +
      '<div class="row"><div class="sp"><label class="muted">' + esc(t('stage')) + '</label><br>' + stageSel(l) + '</div>' +
      '<div class="sp"><label class="muted">' + esc(t('agent')) + '</label><br>' + agentSel(l, 'data-agent') + '</div></div>' +
      (isMgr() ? '' : '<div class="hint">' + esc(t('onlyManager')) + '</div>') +
      '<div class="sec"><h3>' + esc(t('reminder')) + '</h3>' +
      (l.reminder ? '<div>' + remBadge(l) + '</div>' : '<div class="muted">' + esc(t('noRem')) + '</div>') +
      '<div class="row" style="margin-top:6px"><input type="datetime-local" id="remIn" value="' + esc(l.reminder || localDT(def)) + '">' +
      '<button class="btn sm" data-setrem>' + esc(t('setRem')) + '</button>' +
      (l.reminder ? '<button class="btn2 sm" data-donerem>' + esc(t('doneRem')) + '</button><button class="btn3 sm" data-clearrem>' + esc(t('clearRem')) + '</button>' : '') +
      '</div></div>' +
      '<div class="sec"><h3>' + esc(t('notes')) + '</h3><textarea id="noteIn" placeholder="' + esc(t('notePh')) + '"></textarea>' +
      '<button class="btn sm" data-addnote style="margin-top:6px">' + esc(t('addNote')) + '</button><ul class="notes">' +
      l.notes.slice().reverse().map(function (n) { return '<li><time>' + esc(fmtDT(n.ts)) + ' · ' + esc(actorName(n.by)) + '</time>' + esc(n.text) + '</li>'; }).join('') +
      '</ul></div>' +
      '<div class="sec"><h3>' + esc(t('log')) + '</h3><ul class="log">' +
      l.log.slice().reverse().map(function (e) { return '<li><time>' + esc(fmtDT(e.ts)) + ' · ' + esc(t('by')) + ' ' + esc(actorName(e.by)) + '</time>' + esc(logText(e)) + '</li>'; }).join('') +
      '</ul></div>';
    var dr = $('#drawer'), keepNote = $('#noteIn') ? $('#noteIn').value : '';
    dr.innerHTML = h;
    if (keepNote) $('#noteIn').value = keepNote;
  }
  function openDrawer(id) { openId = id; $('#drawer').classList.add('on'); $('#shade').classList.add('on'); $('#drawer').scrollTop = 0; renderDrawer(); }
  function closeDrawer() { openId = null; $('#drawer').classList.remove('on'); $('#shade').classList.remove('on'); }

  /* ---------- reports ---------- */
  function renderReports() {
    var r = state.r;
    var rows = visibleLeads().filter(function (l) {
      if (r.src && l.source !== r.src) return false;
      if (r.ag && (r.ag === 'none' ? l.agent : l.agent !== r.ag)) return false;
      if (r.from && l.travelDate < r.from) return false;
      if (r.to && l.travelDate > r.to) return false;
      return true;
    });
    var conv = rows.filter(function (l) { return l.stage === 'converted'; });
    var lost = rows.filter(function (l) { return l.stage === 'lost'; }).length;
    var open = rows.filter(function (l) { return l.stage !== 'converted' && l.stage !== 'lost'; }).reduce(function (a, l) { return a + l.budget; }, 0);
    var rate = rows.length ? Math.round(conv.length * 100 / rows.length) : 0;
    $('#kpis').innerHTML = [
      [t('kTotal'), rows.length], [t('kConv'), conv.length + ' · ' + inr(conv.reduce(function (a, l) { return a + l.budget; }, 0))],
      [t('kRate'), rate + '%'], [t('kOpen'), inr(open)], [t('kLost'), lost]
    ].map(function (k) { return '<div class="kpi"><span>' + esc(k[0]) + '</span><b>' + esc(k[1]) + '</b></div>'; }).join('');

    function group(keyFn, keys, labelFn) {
      var m = {};
      rows.forEach(function (l) { var k = keyFn(l); (m[k] = m[k] || { n: 0, c: 0 }); m[k].n++; if (l.stage === 'converted') m[k].c++; });
      if (!keys) keys = Object.keys(m).sort();
      var max = 1; keys.forEach(function (k) { if (m[k] && m[k].n > max) max = m[k].n; });
      var leg = '<div class="legend"><span><i style="background:#9fc9c6"></i>' + esc(t('lgLeads')) + '</span><span><i style="background:var(--a)"></i>' + esc(t('lgConv')) + '</span></div>';
      if (!keys.length) return leg + '<div class="empty">' + esc(t('noLeads')) + '</div>';
      return leg + '<table class="bars">' + keys.map(function (k) {
        var g = m[k] || { n: 0, c: 0 }, p = g.n ? Math.round(g.c * 100 / g.n) : 0;
        return '<tr><td class="l">' + esc(labelFn(k)) + '</td><td><div class="track" title="' + g.n + ' / ' + g.c + '"><i style="width:' + (g.n * 100 / max) + '%"></i><i class="cv" style="width:' + (g.c * 100 / max) + '%"></i></div></td>' +
          '<td class="n">' + esc(fill(t('convOf'), { c: g.c, n: g.n, p: p })) + '</td></tr>';
      }).join('') + '</table>';
    }
    $('#rSource').innerHTML = group(function (l) { return l.source; }, SOURCES, function (k) { return t('src')[k]; });
    $('#rAgent').innerHTML = group(function (l) { return l.agent || 'none'; }, AGENTS.map(function (a) { return a.id; }).concat(rows.some(function (l) { return !l.agent; }) ? ['none'] : []), function (k) { return agentName(k === 'none' ? null : k); });
    $('#rMonth').innerHTML = group(function (l) { return l.travelDate.slice(0, 7); }, null, function (k) {
      return parseDate(k + '-01').toLocaleDateString(loc(), { month: 'long', year: 'numeric' });
    });
    // stage funnel (counts only)
    var max = 1, cnt = {};
    STAGES.forEach(function (s) { cnt[s] = rows.filter(function (l) { return l.stage === s; }).length; if (cnt[s] > max) max = cnt[s]; });
    $('#rStage').innerHTML = '<table class="bars">' + STAGES.map(function (s) {
      return '<tr><td class="l">' + esc(t('st')[s]) + '</td><td><div class="track"><i class="cv" style="width:' + (cnt[s] * 100 / max) + '%"></i></div></td><td class="n">' + cnt[s] + '</td></tr>';
    }).join('') + '</table>';
  }

  /* ---------- manual add ---------- */
  function openModal() {
    var d = new Date(startOfToday().getTime() + 30 * DAY);
    $('#mName').value = ''; $('#mPhone').value = ''; $('#mPax').value = 2; $('#mBudget').value = 50000; $('#mMsg').value = ''; $('#mDate').value = ymd(d);
    $('#mErr').textContent = '';
    $('#modal').classList.add('on'); $('#shade').classList.add('on'); $('#mName').focus();
  }
  function closeModal() { $('#modal').classList.remove('on'); if (!openId) $('#shade').classList.remove('on'); }
  function saveModal() {
    var name = $('#mName').value.trim(), phone = $('#mPhone').value.trim(), dest = $('#mDest').value;
    if (!name || !phone || !dest) { $('#mErr').textContent = t('mReq'); return; }
    var digits = phone.replace(/\D/g, '').slice(-10);
    var dup = state.leads.filter(function (l) { return l.phone.replace(/\D/g, '').slice(-10) === digits; })[0];
    closeModal();
    if (dup) { toast(esc(fill(t('dup'), { name: dup.name }))); openDrawer(dup.id); return; }
    var l = makeLead({
      name: name, phone: /^\+/.test(phone) ? phone : '+91 ' + phone, dest: dest, travelDate: $('#mDate').value || ymd(new Date()),
      pax: Math.max(1, +$('#mPax').value || 1), budget: Math.max(0, +$('#mBudget').value || 0), source: $('#mSrc').value, created: Date.now(), msg: $('#mMsg').value.trim()
    });
    addLog(l, l.created, state.role, 'created', { src: l.source });
    if (!isMgr()) { l.agent = state.role; addLog(l, l.created, state.role, 'assign', { from: null, to: state.role }); }
    ingest(l);
  }

  /* ---------- events ---------- */
  function bind() {
    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-tab],[data-sim],[data-open],[data-close],[data-setrem],[data-clearrem],[data-donerem],[data-addnote]');
      if (!el) return;
      if (el.hasAttribute('data-tab')) { state.tab = el.getAttribute('data-tab'); save(); render(); }
      else if (el.hasAttribute('data-sim')) simulate(el.getAttribute('data-sim'));
      else if (el.hasAttribute('data-open')) { if (e.target.closest('select')) return; openDrawer(el.getAttribute('data-open')); }
      else if (el.hasAttribute('data-close')) closeDrawer();
      else {
        var l = lead(openId); if (!l) return;
        if (el.hasAttribute('data-setrem')) setReminder(l, $('#remIn').value);
        if (el.hasAttribute('data-clearrem')) clearReminder(l, false);
        if (el.hasAttribute('data-donerem')) clearReminder(l, true);
        if (el.hasAttribute('data-addnote')) { var v = $('#noteIn').value; $('#noteIn').value = ''; addNote(l, v); }
        render();
      }
    });
    // card click opens drawer (but not when using its dropdowns)
    $('#board').addEventListener('click', function (e) {
      if (e.target.closest('select')) return;
      var c = e.target.closest('[data-card]'); if (c) openDrawer(c.getAttribute('data-card'));
    });
    document.addEventListener('change', function (e) {
      var el = e.target, id;
      if ((id = el.getAttribute('data-stage'))) { var l = lead(id), to = el.value; setStage(l, to); if (l) toast(esc(fill(t('toastMoved'), { name: l.name, to: t('st')[to] }))); render(); }
      else if ((id = el.getAttribute('data-agent'))) { setAgent(lead(id), el.value); render(); }
    });
    // drag and drop
    var board = $('#board');
    board.addEventListener('dragstart', function (e) {
      var c = e.target.closest && e.target.closest('[data-card]'); if (!c) return;
      e.dataTransfer.setData('text/plain', c.getAttribute('data-card')); e.dataTransfer.effectAllowed = 'move';
    });
    board.addEventListener('dragover', function (e) {
      var col = e.target.closest('[data-col]'); if (!col) return;
      e.preventDefault(); $$('.col.over').forEach(function (c) { if (c !== col) c.classList.remove('over'); }); col.classList.add('over');
    });
    board.addEventListener('dragleave', function (e) { var col = e.target.closest('[data-col]'); if (col && !col.contains(e.relatedTarget)) col.classList.remove('over'); });
    board.addEventListener('drop', function (e) {
      var col = e.target.closest('[data-col]'); if (!col) return; e.preventDefault();
      var id = e.dataTransfer.getData('text/plain'), l = lead(id), to = col.getAttribute('data-col');
      $$('.col.over').forEach(function (c) { c.classList.remove('over'); });
      if (l && l.stage !== to) { setStage(l, to); flashId = id; toast(esc(fill(t('toastMoved'), { name: l.name, to: t('st')[to] }))); render(); }
    });
    // header
    $('#langBtn').addEventListener('click', function () { state.lang = state.lang === 'en' ? 'hi' : 'en'; save(); applyLabels(); render(); });
    $('#role').addEventListener('change', function (e) { state.role = e.target.value; save(); render(); });
    $('#resetBtn').addEventListener('click', function () {
      if (!window.confirm(t('resetConfirm'))) return;
      closeDrawer(); buildSeed(); save(); render();
    });
    $('#shade').addEventListener('click', function () { if ($('#modal').classList.contains('on')) closeModal(); else closeDrawer(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeModal(); closeDrawer(); } });
    // inbox filters
    $('#fQ').addEventListener('input', function (e) { state.f.q = e.target.value; renderInbox(); });
    [['#fSrc', 'src'], ['#fSt', 'st'], ['#fAg', 'ag']].forEach(function (p) { $(p[0]).addEventListener('change', function (e) { state.f[p[1]] = e.target.value; renderInbox(); }); });
    $('#fDue').addEventListener('change', function (e) { state.f.due = e.target.checked; renderInbox(); });
    // report filters
    [['#rSrc', 'src'], ['#rAg', 'ag'], ['#rFrom', 'from'], ['#rTo', 'to']].forEach(function (p) { $(p[0]).addEventListener('change', function (e) { state.r[p[1]] = e.target.value; renderReports(); }); });
    $('#rClear').addEventListener('click', function () { state.r = { src: '', ag: '', from: '', to: '' }; $('#rSrc').value = ''; $('#rAg').value = ''; $('#rFrom').value = ''; $('#rTo').value = ''; renderReports(); });
    // manual add
    $('#addBtn').addEventListener('click', openModal);
    $('#mCancel').addEventListener('click', closeModal);
    $('#mSave').addEventListener('click', saveModal);
    // keep "x min ago" and due badges fresh
    setInterval(function () { if (state.tab === 'inbox' && !openId) renderInbox(); }, 60000);
  }

  load();
  applyLabels();
  bind();
  render();
  window.__crm = { state: state, simulate: simulate, setStage: setStage, openDrawer: openDrawer }; // for tests
})();
