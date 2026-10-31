// Virtual assistant cost benchmark (October 2026). Every price was read on the vendor's own pricing page on
// 2026-10-14 (Zirtual, Upwork and BLS through a browser; the rest via their HTML). Raw notes: Achilles
// content/research/2026-10-14-va-prices.md. Feeds Dooza Managed (lib/offers.js). Trial: work/trials/va-cost-page.
import { src } from './helpers';
import { MANAGED_PAY_URL } from '../offers';

const U = {
    timeetc: 'https://timeetc.com/pricing/',
    zirtual: 'https://www.zirtual.com/plans-pricing/',
    prialto: 'https://www.prialto.com/pricing',
    boldly: 'https://boldly.com/pricing/',
    belay: 'https://belaysolutions.com/',
    upwork: 'https://www.upwork.com/hire/virtual-assistants/cost/',
    bls: 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm',
    copilot: 'https://www.microsoft.com/en-us/copilot/pricing/business',
    lindy: 'https://www.lindy.ai/pricing',
    chatgpt: 'https://openai.com/chatgpt/pricing/',
    pearl: 'https://www.pearltalent.com/resources/virtual-assistant-cost',
};

const BOOK = '/book?utm_source=website&amp;utm_medium=blog&amp;utm_content=va-cost_managed';
const START = `<a href="${MANAGED_PAY_URL}" data-offer="managed" data-source="blog-va-cost">Start Dooza Managed, 7 days free</a>`;

const faq = [
    { question: 'How much does a virtual assistant cost for a small business?', answer: 'US virtual assistant services that publish prices charge $36 to $65 an hour, so the cheapest monthly plan is $390 for 10 hours (Time etc) and most plans run $599 to $2,600 a month (Zirtual, Prialto, Boldly). Freelance VAs on Upwork have median rates of $10 to $20 an hour. Prices checked on each vendor’s own page on October 14, 2026.' },
    { question: 'How much does a virtual assistant cost per hour?', answer: 'On published plans checked October 14, 2026: Prialto about $27 to $29 an hour ($1,500 to $1,600 for a 55-hour unit), Time etc $36 to $39, Zirtual about $38 to $50, and Boldly $65. Upwork lists median freelance VA rates of $10 to $20 an hour. The US median wage for an in-house secretary or administrative assistant was $23.23 an hour in May 2025 (BLS), before payroll taxes and benefits.' },
    { question: 'Is a virtual assistant cheaper than hiring an admin assistant?', answer: 'Not per hour: VA services charge $36 to $65 an hour against a $23.23 median wage for an in-house admin assistant (BLS, May 2025). Even after payroll taxes and benefits, a hire is usually cheaper per hour. A VA service is worth the premium when you need only a few hours a week, want cover without hiring or managing anyone, or can cancel month to month.' },
    { question: 'What is the cheapest way to get admin help for a small business?', answer: 'For written admin work (email drafts, documents, spreadsheets, research), AI tools cost $18 to $50 a user a month (Microsoft 365 Copilot Business, Lindy), but you run them yourself. Dooza Managed costs $200 a month with the first 7 days free: AI does the work and a person checks it. For calls, scheduling and anything needing your logins, a human VA is still the right choice.' },
    { question: 'Do virtual assistant services have setup fees or minimum terms?', answer: 'Some do. Prialto has a $250 set-up fee and a 90-day minimum per unit. Zirtual has no setup fee but does not roll over unused hours and cancellations take effect the next month. Time etc rolls over unused hours. Check terms on the vendor’s page before you sign.' },
];

export default {
    id: 411,
    title: 'Virtual Assistant Cost for a Small Business (2026): Published Prices, Checked October 14',
    seoTitle: 'Virtual Assistant Cost for Small Business: 2026 Prices',
    seoDescription: 'Virtual assistant prices checked on vendors’ own pages Oct 14, 2026: $36–$65/hr, plans from $390/mo. Vs in-house admin pay, freelancers and AI tools.',
    excerpt: 'We checked the pricing pages of US virtual assistant services on October 14, 2026. Published plans cost $36 to $65 an hour, from $390 a month for 10 hours. Here is how that compares with freelancers, an in-house hire and AI tools.',
    author: 'Dooza Team',
    date: '2026-10-14',
    modifiedDate: '2026-10-14',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'Comparison',
    tags: ['Virtual Assistant Cost', 'Virtual Assistant Pricing', 'Admin Assistant Cost', 'AI Admin Assistant', 'Small Business'],
    image: '/blog/virtual-assistant-cost-small-business.png',
    imageAlt: 'Bar chart: cheapest published monthly plan for US virtual assistant services, checked October 14, 2026: Time etc $390 for 10 hours, Zirtual $599 for 12 hours, Prialto $1,500 for 55 hours, Boldly $2,600 for 40 hours, against Dooza Managed at $200 a month.',
    slug: 'virtual-assistant-cost-small-business',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'va-prices', label: 'VA service prices' },
        { id: 'per-hour', label: 'Cost per hour' },
        { id: 'twenty-hours', label: 'What 20 hours a month costs' },
        { id: 'vs-hiring', label: 'VA vs hiring an assistant' },
        { id: 'ai-tools', label: 'AI tools instead of a VA' },
        { id: 'which-fits', label: 'Which one fits' },
        { id: 'dooza', label: 'Where Dooza Managed fits' },
        { id: 'method', label: 'How we checked' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated October 14, 2026. Every price below was checked on October 14, 2026 on the vendor’s own pricing page, linked in each row. Dooza sells an admin assistant service (Dooza Managed), so we are not neutral; our method and every source are listed so you can check us. Prices change: confirm on the vendor’s page before you buy.</em></p>

<h2 id="short-answer">How much does a virtual assistant cost?</h2>
<p><strong>A US virtual assistant service costs $36 to $65 an hour on published plans, so expect $390 a month for 10 hours at the low end and $599 to $2,600 a month for most small-business plans (prices checked October 14, 2026).</strong> Freelance VAs on Upwork have median rates of $10 to $20 an hour. An in-house administrative assistant’s median wage is $23.23 an hour, before taxes and benefits. For written admin work only, Dooza Managed costs $200 a month: AI does the work and a real person checks it, first 7 days free.</p>

<h2 id="va-prices">Virtual assistant service prices (checked October 14, 2026)</h2>
<table>
<thead><tr><th>Service</th><th>Plan</th><th>Price</th><th>Hours included</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>${src(U.timeetc, 'Time etc')}</td><td>10 / 20 / 40 / 60 hours</td><td>$390 / $760 / $1,480 / $2,160 a month</td><td>10 to 60</td><td>$39 down to $36 an hour; US assistant; unused hours roll over</td></tr>
<tr><td>${src(U.zirtual, 'Zirtual')}</td><td>Entrepreneur / Grow / Small Business / Team</td><td>$599 / $899 / $1,199 / $1,699 a month</td><td>12 / 20 / 30 / 45</td><td>1 to 4 users; US assistants; no setup fee; hours don’t roll over</td></tr>
<tr><td>${src(U.prialto, 'Prialto')}</td><td>One unit</td><td>$1,500 to $1,600 a month</td><td>55</td><td>$250 set-up fee; 90-day minimum per unit</td></tr>
<tr><td>${src(U.boldly, 'Boldly')}</td><td>40 / 60 / 80 / 100 hours</td><td>$2,600 / $3,900 / $5,200 / $6,500 a month</td><td>40 to 100</td><td>$65 an hour on every plan</td></tr>
<tr><td>${src(U.belay, 'BELAY')}</td><td>Virtual assistant</td><td>Not published</td><td>n/a</td><td>“Request Pricing” only</td></tr>
<tr><td>${src(U.upwork, 'Upwork')} (freelancers)</td><td>Hourly</td><td>$10 to $20 an hour</td><td>You choose</td><td>Upwork’s stated median VA rates; you hire and manage the person</td></tr>
</tbody>
</table>

<h2 id="per-hour">How much does a virtual assistant cost per hour?</h2>
<p>Divide each published plan by its hours and the range is clear:</p>
<ul>
<li><strong>Prialto:</strong> about $27 to $29 an hour, but only in 55-hour units with a 90-day minimum.</li>
<li><strong>Time etc:</strong> $39 an hour on 10 hours, $36 on 60 hours.</li>
<li><strong>Zirtual:</strong> about $50 an hour on 12 hours, about $38 on 45 hours.</li>
<li><strong>Boldly:</strong> $65 an hour on every plan, from 40 hours.</li>
<li><strong>Upwork freelancers:</strong> median $10 to $20 an hour, with hiring, training and managing on you.</li>
</ul>
<p>Bigger plans are cheaper per hour, but only if you actually use the hours. Zirtual, for example, does not roll unused hours over.</p>
<p>Offshore staffing is cheaper again. ${src(U.pearl, 'Pearl Talent’s 2026 cost guide')} puts Philippines-based virtual assistants at $5 to $20 an hour, against $20 to $50 for US-based talent (last modified August 25, 2026; checked October 31, 2026).</p>

<h2 id="twenty-hours">What 20 hours of admin help a month costs</h2>
<p>Twenty hours a month (about one hour a working day) is a common starting point for a small business. On published prices:</p>
<ul>
<li><strong>Time etc:</strong> $760 a month (20-hour plan).</li>
<li><strong>Zirtual:</strong> $899 a month (Grow, 20 hours, 2 users).</li>
<li><strong>Prialto:</strong> $1,500 to $1,600 a month; the smallest unit is 55 hours.</li>
<li><strong>Boldly:</strong> $2,600 a month; the smallest plan is 40 hours.</li>
<li><strong>Upwork freelancer:</strong> $200 to $400 at $10 to $20 an hour, plus your time to hire and manage.</li>
<li><strong>Part-time employee:</strong> about $465 in wages at the $23.23 median, before payroll taxes, benefits and hiring.</li>
</ul>

<h2 id="vs-hiring">Virtual assistant vs hiring an administrative assistant</h2>
<p>The US median wage for secretaries and administrative assistants was ${src(U.bls, '$48,310 a year, or $23.23 an hour, in May 2025 (BLS)')}. That is wage only: payroll taxes, benefits, equipment and the time to hire come on top. Even with those added, a hire is usually cheaper per hour than a VA service at $36 to $65. What the VA premium buys: no hiring, no payroll, cover when someone is out, and the freedom to buy 10 hours a month and cancel. Few people take a job for 10 hours a month. If you need someone most of the week, in the office or on your phones, hire.</p>

<h2 id="ai-tools">Can AI tools replace a virtual assistant?</h2>
<p>For written admin work, partly. AI assistants are far cheaper per month, but you do the asking, checking and sending yourself:</p>
<ul>
<li>${src(U.copilot, 'Microsoft 365 Copilot Business')}: $18 a user a month, paid yearly (listed as down from $21), added to a Microsoft 365 business plan.</li>
<li>${src(U.lindy, 'Lindy')}: free to try with $50 in credits for 7 days, then from $49.99 a month for 5,000 credits.</li>
<li>${src(U.chatgpt, 'ChatGPT')}: Plus and Business plans; check the page for your country’s price (it showed us local currency, so we don’t quote a USD figure).</li>
</ul>
<p>What AI tools don’t do: decide what to work on, notice when a draft is wrong, or follow up next week without being asked. That is the gap a human VA, or a service where a person checks the AI’s work, fills.</p>

<h2 id="which-fits">Which option fits your business</h2>
<ul>
<li><strong>You need calls answered, a calendar run or errands booked:</strong> a human VA service (Time etc or Zirtual for 10 to 45 hours; Prialto or Boldly for 40+).</li>
<li><strong>You want the lowest hourly rate and can manage someone:</strong> an Upwork freelancer.</li>
<li><strong>You need someone full time, on site:</strong> hire an administrative assistant.</li>
<li><strong>You mostly need emails, documents, spreadsheets and research done and checked:</strong> an AI-plus-human service like Dooza Managed (below).</li>
<li><strong>You enjoy prompting and have time to check output:</strong> an AI tool like Copilot or Lindy.</li>
</ul>

<h2 id="dooza">Where Dooza Managed fits</h2>
<p>Dooza is an AI-native company that builds AI products and services for small businesses. <strong>Dooza Managed is an admin assistant for $200 a month, with the first 7 days free:</strong> AI does the written admin work, and a real person checks it before it reaches you. You send tasks by email and they are done by the next business day, with a weekly report of what got done.</p>
<p>What it covers: email drafts and follow-up sequences, documents and forms, spreadsheets and data entry, and research. What it does not cover: phone calls or texts to your customers, logging into your accounts, payments, and legal, tax or insurance advice. If you need those, a human VA from the table above is the better fit, and we will tell you so on a call.</p>
<p>${START} or <a href="${BOOK}">book a 15-minute call</a> to check it fits your work first. We take 3 new businesses this month. <a href="/ai-admin-assistant">See what Dooza Managed does</a>.</p>

<h2 id="method">How we checked these prices</h2>
<p>On October 14, 2026 we opened the pricing page of each service and recorded the plan, monthly price, included hours and terms, reading the numbers from the page itself (Zirtual, Upwork and BLS through a browser, because they block automated requests). Per-hour figures are our division of the published price by the included hours. We left out prices that appear only on third-party sites, and services that do not publish prices are marked “not published”. Fancy Hands and Wishup were checked but left out: Fancy Hands’ page did not load for us, and Wishup’s page did not make clear which hours its prices cover. Spot an error or a price change? Email <a href="mailto:achilles@dooza.org">achilles@dooza.org</a> with the public pricing page and we’ll update this page.</p>

<h2 id="faq">FAQ</h2>
${faq.map((f) => `<h3>${f.question}</h3>\n<p>${f.answer}</p>`).join('\n')}`,
    faqData: faq,
};
