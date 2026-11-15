// Dooza Accountant: GST RETURN FILING, Rs 499 a month. Single source for the page, JSON-LD and the .md copy.
// Copy: Apollo brief india-gst-filing-page.md (post qyfhtapghjnm3p65aeeh8g78mc, 2026-11-15; Sibi 20:42 as relayed:
// "Design it very well yes", "Whatsapp click pre filled"). This page is about filing returns only: no registration
// wording in the title, H1, hero or meta. "Within 24 hours" and "24/7 on WhatsApp" are the filing team's promises.
import { GST_WA, GST_WA_SHOWN, GST_PORTAL } from './inGst';

export const FIL_URL = 'https://www.dooza.ai/accountant/gst-filing';
export const FIL_REG_PATH = '/accountant/gst';
export const FIL_REG_URL = 'https://www.dooza.ai/accountant/gst';
export const FIL_WA = GST_WA;
export const FIL_WA_SHOWN = GST_WA_SHOWN;
export const FIL_PORTAL = GST_PORTAL;
export const FIL_WA_TEXT = 'Hi, I want GST return filing for Rs 499 a month (Dooza Accountant)';
export const FIL_WA_LINK = `https://wa.me/${FIL_WA}?text=${encodeURIComponent(FIL_WA_TEXT)}`;

export const FIL_H1 = 'GST Return Filing for Rs 499 a Month. Pay Only After We File.';
export const FIL_SUB = 'Send your bills on WhatsApp, any time. A Chartered Accountant team files within 24 hours. Rs 0 today.';
export const FIL_BANNER = ['Final price.', 'Tax included.', 'No setup fee.'];
export const FIL_UNDER = [FIL_WA_SHOWN, '24/7 on WhatsApp', 'No sales call'];
export const FIL_BAR = ['Rs 499 a month', 'Pay after we file'];

export const FIL_CARD_TITLE = "Start this month's filing now";
export const FIL_CARD = [
    'GSTR-1 and GSTR-3B, up to 50 sales invoices',
    'Filed within 24 hours of your bills and OTP',
    'Filed receipt sent to you on WhatsApp',
    'Reminder before every due date',
    'Nothing filed without your OTP',
];
export const FIL_GUARANTEE_TITLE = 'You pay after it is filed';
export const FIL_GUARANTEE = [
    'Rs 0 today. No advance.',
    'We file, send you the filed receipt, then you pay Rs 499.',
    'No yearly contract. Cancel with one WhatsApp message.',
];
export const FIL_BILL = [
    ['Monthly filing', 'Rs 499'],
    ['Setup fee', 'Rs 0'],
    ['Reminders', 'Rs 0'],
    ['Tax', 'Included'],
];
export const FIL_CHECK = [
    ['Filed receipt every month', 'The ARN from the GST portal. Check it on gst.gov.in.'],
    ['Run by Sibi Narendran', 'Your returns are prepared and filed by our Chartered Accountant team.'],
    ['Nothing filed without you', 'You see the numbers first. We file only after your OTP.'],
    ['24/7 on WhatsApp', 'Send bills at 10 pm after closing. We take them.'],
];
// The drawn receipt. Always labelled Sample; the ARN is a placeholder, not a real number.
export const FIL_SAMPLE = [
    ['Return', 'GSTR-3B'],
    ['Period', 'October 2026'],
    ['Filed on', '18 November 2026'],
    ['ARN', 'AA XXXX XXXX XXXX X'],
];
export const FIL_SAMPLE_NOTE = 'Sample. Your real receipt comes from the GST portal.';
export const FIL_STEPS = [
    'Send your sales and purchase bills on WhatsApp.',
    'We prepare the return and show you the numbers.',
    'You give the OTP, we file and send the receipt. Then you pay Rs 499.',
];
export const FIL_CAL_TITLE = 'We remind you before each date';
// [day of month, who acts ('you' | 'we'), label]
export const FIL_CAL = [
    [5, 'you', 'By the 5th', 'Send bills'],
    [11, 'we', 'By the 11th', 'GSTR-1 filed'],
    [20, 'we', 'By the 20th', 'GSTR-3B filed'],
];
export const FIL_CAL_NOTE = 'Quarterly (QRMP) filer? Tell us, we follow your dates.';
export const FIL_PRICES = [
    ['Up to 50 sales invoices', 'Rs 499', 'a month'],
    ['Up to 200 sales invoices', 'Rs 999', 'a month'],
    ['Yearly', 'Rs 4,999', 'a year'],
];
export const FIL_PRICES_LINE = 'Tax included. No setup fee.';
export const FIL_NOT = 'annual return GSTR-9, old pending returns, notice replies. Ask us for the price first.';
export const FIL_WHO = [
    'Dooza Accountant is run by Sibi Narendran.',
    'Returns are prepared and filed by our Chartered Accountant team.',
    'Your bills are used only to file your returns.',
];
export const FIL_FAQ = [
    ['When do I pay?', 'After we send the filed receipt.'],
    ['What if I have no sales this month?', 'A nil return is still filed. Same plan.'],
    ['What counts as an invoice?', 'Sales invoices.'],
    ['Can I cancel?', 'Yes, with one WhatsApp message.'],
    ['Who pays the tax?', 'You pay your GST to the government yourself. We give you the amount and the challan.'],
];
export const FIL_REG_Q = 'I need registration first';
export const FIL_REG_A = 'See our GST registration page.';
export const FIL_REG_LINK = 'Need GST registration first? See here';
