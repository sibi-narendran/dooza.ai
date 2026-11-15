// Dooza Accountant: Rs 499 GST registration (/accountant/gst).
// v2 copy = Apollo's brief india-gst-page-v2.md, 2026-11-15 20:25 (Sibi voice 20:10: "clone from what IndiaFilings uses and add better", "no trust signal").
// One source for the page, its JSON-LD and the plain-text copy (/accountant/gst.md). Only true facts here.
// No company name on the page (Sibi 19:42). No ratings, customer counts, logos, years: we have none.
export const GST_URL = 'https://www.dooza.ai/accountant/gst';
export const GST_WA = '917305065161'; // Nestor's WhatsApp (his DM bfc5uyxx, 2026-11-15)
export const GST_WA_SHOWN = '+91 73050 65161';
export const GST_WA_TEXT = 'Hi, I want GST registration for Rs 499 (Dooza Accountant)';
export const GST_WA_LINK = `https://wa.me/${GST_WA}?text=${encodeURIComponent(GST_WA_TEXT)}`;
export const GST_PORTAL = 'https://www.gst.gov.in';
export const GST_RULE9 = 'https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter3/rule9_v1.00.html';

export const GST_H1 = 'GST Registration Online for Rs 499. Pay Only After You Get Your GST Number.';
export const GST_SUB = 'A Chartered Accountant team files your application on WhatsApp. Rs 0 today.';
export const GST_BANNER = ['Rs 499 final price.', 'Tax included.', 'Government fee: nil.'];
// "A person replies in minutes" in the brief; changed to what I can check (Achilles 11-15, told Apollo).
export const GST_UNDER = [GST_WA_SHOWN, 'Replies in minutes', 'No sales call'];
export const GST_BAR = ['Rs 499 total', 'Pay after GSTIN'];

export const GST_CARD_TITLE = 'Start your GST registration now';
export const GST_CARD = [
    'ARN (application number) sent to you the day we file',
    'Track it yourself on gst.gov.in',
    "GST officer's queries answered at no extra cost",
    'GST certificate with your GST number (GSTIN)',
    'First GST return filed, included',
];
export const GST_GUARANTEE_TITLE = 'You pay nothing until it is done';
export const GST_GUARANTEE = [
    'Rs 0 today. No advance. No card needed.',
    'Pay Rs 499 only after your GSTIN is issued.',
    'Application rejected? You pay Rs 0.',
    'Rs 499 is the full price. No add-ons.',
];
// The bill beside the guarantee. Every line is a fact stated elsewhere on the page.
export const GST_BILL = [
    ['GST registration application', 'Rs 499'],
    ['Government fee', 'Rs 0'],
    ["Replies to the GST officer's queries", 'Rs 0'],
    ['First GST return', 'Rs 0'],
    ['Tax', 'Included'],
];
export const GST_CHECK = [
    ['Your ARN, same day', 'Check the status yourself on gst.gov.in: Services, Registration, Track Application Status.'],
    ['Filed by a CA team', 'A Chartered Accountant team prepares and files your application.'],
    ['Updates on WhatsApp', 'At filing, at ARN, at officer query, at GSTIN.'],
    ['Government fee: nil', 'The Rs 499 is our fee only.'],
];
// Pythia P-20261115-140 + Apollo post oj87ryx9: rows only from what was read on their page 15 Nov 2026.
export const GST_COMPARE_HEAD = ['', 'A large online filing company', 'Dooza Accountant'];
export const GST_COMPARE = [
    ['GST registration', 'Rs 1,999 + 18% GST = Rs 2,359', 'Rs 499, tax included'],
    ['First return', 'Not in the Rs 1,999 plan', 'Included'],
    ['Pay after GSTIN is issued', 'Not stated', 'Yes'],
    ['Rs 0 if rejected', 'Not stated', 'Yes'],
];
export const GST_COMPARE_NOTE = 'Published price, checked 15 Nov 2026.';
export const GST_PRICES = [
    ['Registration + first return', 'Rs 499, tax included'],
    ['Monthly filing (GSTR-1 + GSTR-3B), up to 50 invoices', 'Rs 499 a month'],
    ['Monthly filing, up to 200 invoices', 'Rs 999 a month'],
    ['Yearly', 'Rs 4,999 (Rs 417 a month, billed yearly)'],
];
export const GST_TERMS = 'Month 2 starts only if you say yes. Cancel any time with one WhatsApp message.';
export const GST_NOT = 'onboarding fee, add-ons, sales calls.';
export const GST_STEPS = [
    'Message us on WhatsApp.',
    'Send photos of your papers. We file and send you the ARN.',
    'Approve by Aadhaar OTP. When your GSTIN arrives, pay Rs 499 by UPI or card link.',
];
export const GST_TIMELINE = [
    ['Day 0', 'We file, you get the ARN.'],
    ['Within 7 working days', 'The GST officer approves or asks a query (CGST Rule 9).'],
    ['Up to 30 days', 'Only if Aadhaar authentication is not done or the officer orders a site check.'],
];
export const GST_TIMELINE_NOTE = 'The GST department decides approval. We answer every query for you.';
export const GST_PAPERS = [
    'PAN card',
    'Aadhaar card (mobile linked, for OTP)',
    'Passport-size photo',
    'Business address proof: electricity bill or property tax receipt',
    'If rented: rent agreement. If family-owned: a one-line consent letter (we give the format)',
    'Bank proof: cancelled cheque or first page of passbook/statement',
];
export const GST_PAPERS_NOTE = 'This list is for a proprietor. Send clear phone photos on WhatsApp. Partnership or company? Message us for the list.';
export const GST_WHO = [
    'Dooza Accountant handles GST registration and GST return filing for small businesses in India.',
    'Your application is filed by our CA team.',
    'Your papers are used only to file your application.',
];
export const GST_FAQ = [
    ['What is a GSTIN?', 'Your 15-character GST number.'],
    ['How long does it take?', 'The GST department decides. We file the day you send your papers. By rule, the GST officer has 7 working days to approve a new registration, or up to 30 days if your Aadhaar is not authenticated or your place of business is inspected.'],
    ['Will I have to go anywhere?', 'Some applicants are asked for a photo and fingerprint check at a GST Suvidha Kendra. We tell you if that happens.'],
    ['When do I pay?', 'Nothing today. You pay Rs 499 by UPI or card link only when your GSTIN arrives. If your application is rejected, you pay nothing.'],
    ['Can I register myself?', 'Yes, on gst.gov.in, free. We do it for you so it is right the first time and queries get answered.'],
    ['Is Rs 499 really all?', 'Yes. Tax included. Nothing else for registration + first return.'],
    ['What if the officer raises a query?', 'We reply for you. No extra charge.'],
    ['What happens after month 1?', 'Nothing unless you say yes. Monthly filing is Rs 499.'],
];
