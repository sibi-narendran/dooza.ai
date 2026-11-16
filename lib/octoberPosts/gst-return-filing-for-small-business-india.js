// Facts: content/drafts/gst-return-filing-for-small-business-india-facts.md (inGstFiling.js + gst.gov.in, 2026-11-16).
import { src } from './helpers';

const GST_PORTAL = 'https://www.gst.gov.in/';
const FILING_PAGE = '/accountant/gst-filing';

export default {
    id: 556,
    title: 'How Monthly GST Return Filing Works for Small Businesses in India',
    seoTitle: 'GST Return Filing for Small Business in India (2026)',
    seoDescription: 'Monthly GST return filing in India explained: GSTR-1 (11th) and GSTR-3B (20th) due dates, nil return rules, OTP verification, and transparent Rs 499/mo filing.',
    excerpt: 'A plain-English guide to monthly GST return filing in India: which two returns small businesses file (GSTR-1 and GSTR-3B), the 11th and 20th due dates, what happens on zero-sales months, and how pay-after-filing works.',
    author: 'Dooza Team',
    date: '2026-11-16',
    modifiedDate: '2026-11-16',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Accounting & Compliance',
    tags: ['GST Return Filing', 'GSTR-1', 'GSTR-3B', 'Small Business India', 'Dooza Accountant'],
    image: '/blog/gst-return-filing-for-small-business-india.jpg',
    imageAlt: 'Watercolor illustration of an Indian small business desk with GST invoices, a calendar showing the 11th and 20th, and a laptop',
    slug: 'gst-return-filing-for-small-business-india',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'which-returns', label: 'GSTR-1 vs GSTR-3B' },
        { id: 'due-dates', label: 'Monthly and QRMP due dates' },
        { id: 'nil-returns', label: 'What if you had zero sales?' },
        { id: 'what-you-need', label: 'What to send each month' },
        { id: 'cost-and-pay-after', label: 'How much filing costs' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'Which GST returns does a regular small business file every month?', answer: 'A regular monthly taxpayer files two main returns on gst.gov.in: GSTR-1 (sales/outward supplies, due by the 11th of the next month) and GSTR-3B (summary return and tax payment, due by the 20th of the next month).' },
        { question: 'Do I have to file a GST return if I had no sales this month?', answer: 'Yes. Even if you had zero sales and zero purchases in a month, a nil return must still be filed for both GSTR-1 and GSTR-3B to avoid daily late fees.' },
        { question: 'What is the difference between monthly filing and QRMP?', answer: 'Under monthly filing, GSTR-1 is due on the 11th and GSTR-3B on the 20th every month. Under the Quarterly Return Monthly Payment (QRMP) scheme, returns are filed quarterly (GSTR-1 on the 13th and GSTR-3B on the 22nd or 24th depending on state) while tax is paid monthly.' },
        { question: 'What counts as an invoice for Dooza Accountant GST filing?', answer: 'Each sales bill you make counts toward the monthly invoice limit (up to 50 sales invoices on the Rs 499/month plan, or up to 200 on the Rs 999/month plan). Purchase bills are not counted.' },
        { question: 'How does Dooza Accountant file on my GST account?', answer: 'We explain the process on WhatsApp before you send anything. You send your sales and purchase bills, our Chartered Accountant team prepares the return and shows you the numbers, and nothing is filed without the OTP on your phone. You pay Rs 499 only after we send the filed receipt (ARN).' },
    ],
    content: `<p><em>Note: Dooza Accountant is a private service run by Sibi Narendran. We are not a government website. Official filing rules and due dates are published on ${src(GST_PORTAL, 'gst.gov.in')}.</em></p>

<h2 id="short-answer">How does monthly GST return filing work in India?</h2>
<p><strong>Most regular GST-registered small businesses in India file two returns every month on the GST portal: GSTR-1 by the 11th (your sales invoices) and GSTR-3B by the 20th (your summary tax return and challan payment). Even in a month with zero sales, you must file a nil return to avoid daily late fees.</strong></p>
<p>If you want a Chartered Accountant team to handle both returns for you without paying an advance, <a href="${FILING_PAGE}">Dooza Accountant GST return filing</a> starts at Rs 499 a month (tax included, up to 50 sales invoices) and you pay only after you receive the filed receipt (ARN).</p>

<h2 id="which-returns">What is the difference between GSTR-1 and GSTR-3B?</h2>
<p>Think of GSTR-1 as the list of what you sold, and GSTR-3B as the final monthly summary where tax payable is settled:</p>
<table><thead><tr><th>Return</th><th>What it covers</th><th>Monthly due date</th></tr></thead><tbody>
<tr><td><strong>GSTR-1</strong></td><td>Outward supplies (your sales invoices, credit/debit notes)</td><td>11th of the next month</td></tr>
<tr><td><strong>GSTR-3B</strong></td><td>Summary of sales, input tax credit (ITC) from purchases, and net GST payable</td><td>20th of the next month</td></tr>
</tbody></table>
<p>Your buyer's input tax credit depends on your GSTR-1 being filed on time, while your own tax payment and credit reconciliation happen in GSTR-3B.</p>

<h2 id="due-dates">Monthly vs QRMP due dates</h2>
<p>Small businesses under the regular scheme file either monthly or quarterly under the Quarterly Return Monthly Payment (QRMP) scheme:</p>
<ul>
<li><strong>Monthly filers:</strong> send bills by the 5th, GSTR-1 is due by the 11th, and GSTR-3B is due by the 20th of the following month.</li>
<li><strong>Quarterly (QRMP) filers:</strong> GSTR-1 is due by the 13th of the month following the quarter, and GSTR-3B is due on the 22nd or 24th depending on your state/UT.</li>
</ul>
<p>Missing either due date triggers daily late fees on ${src(GST_PORTAL, 'the GST portal')} for both GSTR-1 and GSTR-3B, plus interest on unpaid tax.</p>

<h2 id="nil-returns">Do you still have to file if you had zero sales?</h2>
<p>Yes. A common mistake for new shop owners and freelancers is skipping a month when there was no business. Under GST rules, a nil return still has to be filed for every tax period, even when sales and purchases are zero.</p>

<h2 id="what-you-need">What do you need to send each month?</h2>
<p>Keeping monthly filing clean takes three things:</p>
<ol>
<li><strong>Sales bills:</strong> every sales invoice issued during the month (B2B invoices with buyer GSTINs and B2C totals).</li>
<li><strong>Purchase bills:</strong> supplier invoices so eligible input tax credit can be checked against your GSTR-2B statement.</li>
<li><strong>OTP confirmation:</strong> for proprietors and partnerships filing via EVC, the OTP goes to your registered phone before submission.</li>
</ol>

<h2 id="cost-and-pay-after">How much does GST return filing cost?</h2>
<p>Traditional retainers often charge a setup fee or quarterly advance even when your invoice count is small. On <a href="${FILING_PAGE}">Dooza Accountant</a>, pricing is flat and paid only after filing:</p>
<ul>
<li><strong>Up to 50 sales invoices:</strong> Rs 499 a month (tax included, no setup fee). Purchase bills are not counted.</li>
<li><strong>Up to 200 sales invoices:</strong> Rs 999 a month (tax included).</li>
<li><strong>Yearly plan:</strong> Rs 4,999 a year, offered only after your first return is filed (paid then for the next 12 months).</li>
<li><strong>What is not included:</strong> annual return GSTR-9, old pending returns, and notice replies (ask for a quote first).</li>
</ul>
<p>You send your bills on WhatsApp (24/7), our Chartered Accountant team prepares the return within 1 working day of your bills and OTP, and sends you the official ARN receipt from gst.gov.in. You pay your GST tax directly to the government using the challan we give you, and pay our Rs 499 fee only after the return is filed.</p>
<p><a href="${FILING_PAGE}">Start monthly GST return filing on Dooza Accountant</a></p>`,
};
