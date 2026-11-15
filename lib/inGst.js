// Dooza Accountant: Rs 499 GST registration (/accountant/gst). Copy from Apollo's brief 2026-11-15 (Sibi orders 19:38-19:42).
// One source for the page, its JSON-LD and the plain-text copy (/accountant/gst.md). Only true facts here.
export const GST_URL = 'https://www.dooza.ai/accountant/gst';
export const GST_WA = '917305065161'; // Nestor's WhatsApp (his DM bfc5uyxx, 2026-11-15)
export const GST_WA_TEXT = 'Hi, I want GST registration for Rs 499 (Dooza Accountant)';
export const GST_WA_LINK = `https://wa.me/${GST_WA}?text=${encodeURIComponent(GST_WA_TEXT)}`;
export const GST_H1 = 'GST registration for Rs 499. Final price.';
export const GST_SUB = 'Tax included. Rs 0 today. You pay only when your GST number (GSTIN) arrives.';
export const GST_UNDER = 'No sales call. No hidden fee. Reply in minutes.';
export const GST_STEPS = [
    'Message us on WhatsApp.',
    'Send your papers (PAN, Aadhaar, address proof, bank proof, photo). We file the day you send them.',
    'You approve by Aadhaar OTP. When your GSTIN arrives, you pay Rs 499 by UPI or card link.',
];
export const GST_COVERS = [
    'Your GST registration application. Government fee is nil.',
    "Replies to the GST officer's queries, at no extra cost.",
    'Your first return filing.',
    'If your application is rejected, you pay nothing.',
];
export const GST_PRICES = [
    ['Registration + first return', 'Rs 499, tax included'],
    ['Monthly filing (GSTR-1 + GSTR-3B), up to 50 invoices', 'Rs 499 a month'],
    ['Monthly filing, up to 200 invoices', 'Rs 999 a month'],
    ['Yearly', 'Rs 4,999 (Rs 417 a month, billed yearly)'],
];
export const GST_TERMS = 'Month 2 starts only if you say yes. Stop any time with one WhatsApp message.';
export const GST_NOT = 'onboarding fee, add-ons, sales calls.';
// No company name on the page for now (Sibi via Napoleon/Apollo 19:42).
export const GST_WHO = [
    'Dooza Accountant handles GST registration and GST return filing for small businesses in India.',
    'Your application is filed by our CA team.',
    'Your papers are used only to file your application.',
];
export const GST_FAQ = [
    ['What is a GSTIN?', 'Your 15-character GST number.'],
    ['How long does it take?', 'The GST department decides. We file the day you send your papers.'],
    ['Will I have to go anywhere?', 'Some applicants are asked for a photo and fingerprint check at a GST Suvidha Kendra. We tell you if that happens.'],
    ['When do I pay?', 'Nothing today. You pay Rs 499 by UPI or card link only when your GSTIN arrives. If your application is rejected, you pay nothing.'],
];
