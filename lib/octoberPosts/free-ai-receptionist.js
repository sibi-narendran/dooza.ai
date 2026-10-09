// "Is there a free AI receptionist?" Focused answer page for the sub-question that appears in 4 of 7
// receptionist buyer questions (Google PAA, 2026-10-06; Alive-Web learnings/notes/fanout/receptionist-cluster.md).
// Every plan and trial term was checked on the vendor's pricing page on 2026-10-06 (same dataset as ai-receptionist-pricing).
import { src, pilotLine } from './helpers';

const CHECKED = 'checked October 6, 2026';
const U = {
    smithAi: 'https://smith.ai/pricing/ai-receptionist',
    phonely: 'https://www.phonely.ai/pricing',
    quo: 'https://www.quo.com/pricing',
    retell: 'https://www.retellai.com/pricing',
    upfirst: 'https://upfirst.ai/pricing',
    ringcentral: 'https://www.ringcentral.com/pricing/ai-receptionist.html',
    rosie: 'https://heyrosie.com/pricing',
    rosieTerms: 'https://heyrosie.com/legal/terms',
    frontdesk: 'https://www.myaifrontdesk.com/pricing',
    dialzara: 'https://www.dialzara.com/pricing',
    nextphone: 'https://www.getnextphone.com/pricing',
    allo: 'https://www.withallo.com/pricing',
    goodcall: 'https://www.goodcall.com/pricing',
    trillet: 'https://www.trillet.ai/pricing',
    nextiva: 'https://www.nextiva.com/products/ai-receptionist',
    ringly: 'https://www.ringly.io/pricing',
};

const faq = [
    { question: 'Is there a free AI receptionist?', answer: 'Yes, for low call volumes. As of October 6, 2026, Smith.ai’s AI Receptionist has a free plan with 25 calls a month and Phonely has a free plan with 100 minutes a month (about 50 calls). Quo’s Sona agent includes 10 calls a month, but only with a paid Quo phone seat. Most other AI receptionists offer a 7- to 14-day free trial instead of a free plan.' },
    { question: 'How many calls does a free AI receptionist cover?', answer: 'About one call a day. Smith.ai’s free plan covers 25 calls a month, Phonely’s covers 100 minutes (roughly 50 short calls), and Quo’s included tier covers 10 calls. Past that, Smith.ai charges $3.00 a call and Quo $1.00 a call; Phonely doesn’t publish an overage rate, so you move to its $50 plan.' },
    { question: 'Which AI receptionists have a free trial?', answer: 'Upfirst and RingCentral AI Receptionist offer 14-day free trials. Rosie, My AI Front Desk, Dialzara, NextPhone, Allô and Quo offer 7-day trials, and Goodcall advertises a free trial without stating the length. Trillet (28 days), Nextiva XBert and Ringly.io (30 days) offer money-back guarantees instead. All checked October 6, 2026.' },
    { question: 'Can I build a free AI receptionist myself?', answer: 'Partly. Developer platforms such as Retell AI give $10 in free credits and charge $0.07 to $0.31 a minute after that, so the credits cover roughly 30 to 140 minutes of calls. You still need to build the agent, connect a phone number and maintain it.' },
    { question: 'When is a free AI receptionist not enough?', answer: 'When you get more than about 25 to 50 calls a month, need appointment booking or CRM integration that free tiers don’t include, or can’t afford missed details on calls. At 100 calls a month, paid AI receptionists cost about $49 to $213 at list price.' },
    { question: 'Does Dooza have a free plan?', answer: 'No. Dooza builds a done-for-you AI receptionist on your existing number. Every Dooza product starts with a refundable pilot: you pay for the pilot, and if you ask within 14 days you get a 100% refund. The 30-minute call to scope it is free.' },
];

export default {
    id: 411,
    title: 'Is There a Free AI Receptionist? 2 Free Plans and 9 Free Trials Compared (2026)',
    seoTitle: 'Free AI Receptionist: 2 Free Plans & 9 Trials (2026)',
    seoDescription: 'Yes, for low volumes: Smith.ai (25 calls/mo) and Phonely (100 min/mo) have $0 plans; Quo includes 10 calls with a paid seat. 9 offer free trials. Checked Oct 6, 2026.',
    excerpt: 'A free AI receptionist exists, but only for about a call a day: Smith.ai and Phonely have $0 plans, Quo includes 10 calls with a paid seat, and nine offer free trials, most for 7 to 14 days. Here are the limits, the catches, and when free stops being enough.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '6 min read',
    readTimeMinutes: 6,
    category: 'Comparison',
    tags: ['Free AI Receptionist', 'Free AI Answering Service', 'AI Receptionist Free Trial', 'AI Receptionist Pricing', 'AI Receptionist'],
    image: '/blog/free-ai-receptionist.png',
    imageAlt: 'Bar chart of free monthly allowances on AI receptionists, checked October 6, 2026: Quo 10 calls (with a paid seat), Smith.ai 25 calls, Phonely 100 minutes (about 50 calls).',
    slug: 'free-ai-receptionist',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'free-plans', label: 'Free plans' },
        { id: 'free-trials', label: 'Free trials and guarantees' },
        { id: 'build-your-own', label: 'Build your own' },
        { id: 'catches', label: 'The catches' },
        { id: 'when-to-pay', label: 'When free stops being enough' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated October 6, 2026. Every plan and trial below was ${CHECKED} on the vendor’s own pricing page, linked in each row. Dooza sells a done-for-you AI receptionist and doesn’t offer a free plan, so we have no stake in which free option you pick.</em></p>

<h2 id="short-answer">Is there a free AI receptionist?</h2>
<p><strong>Yes, but only for low call volumes. Two AI receptionists have a $0 plan as of October 6, 2026: Smith.ai (25 calls a month) and Phonely (100 minutes a month, about 50 calls).</strong> Quo’s Sona agent includes 10 calls a month, but only on top of a paid Quo phone seat. Most other AI receptionists offer a free trial of 7 to 14 days instead of a free plan.</p>
<p>In practice a free plan covers about one call a day. That’s enough to test how an AI receptionist sounds to your callers, or to cover after-hours calls for a very small business.</p>

<h2 id="free-plans">Free AI receptionist plans</h2>
<table>
<thead><tr><th>Service</th><th>What’s free</th><th>After the free allowance</th><th>Catch</th></tr></thead>
<tbody>
<tr><td>${src(U.smithAi, 'Smith.ai AI Receptionist')}</td><td>25 calls a month</td><td>$3.00 a call, or the $150 Pro plan (75 calls)</td><td>Highest per-call overage of the free plans</td></tr>
<tr><td>${src(U.phonely, 'Phonely')}</td><td>100 minutes a month (Phonely says about 50 calls)</td><td>No overage on Free; $50 Starter plan (200 minutes, then $0.25 a minute, checked Oct 9)</td><td>Minutes run out fast if calls are long</td></tr>
<tr><td>${src(U.quo, 'Quo (OpenPhone) Sona')}</td><td>10 calls a month (1,000 credits)</td><td>$1.00 a call, or paid tiers from $25 (40 calls)</td><td>Needs a paid Quo seat: from $15 a user billed yearly, $19 monthly</td></tr>
</tbody>
</table>

<h2 id="free-trials">AI receptionists with a free trial or money-back guarantee</h2>
<table>
<thead><tr><th>Service</th><th>Trial or guarantee</th><th>Paid plans from</th></tr></thead>
<tbody>
<tr><td>${src(U.upfirst, 'Upfirst')}</td><td>14-day free trial</td><td>$24.95 a month (30 calls)</td></tr>
<tr><td>${src(U.ringcentral, 'RingCentral AI Receptionist')}</td><td>14-day free trial</td><td>$49 standalone, $39 as a RingEX add-on (100 minutes)</td></tr>
<tr><td>${src(U.rosie, 'Rosie')}</td><td>7-day free trial; its ${src(U.rosieTerms, 'terms')} say payments are nonrefundable</td><td>$49 a month (250 minutes)</td></tr>
<tr><td>${src(U.frontdesk, 'My AI Front Desk')}</td><td>7-day free trial</td><td>$99 a month (200 minutes)</td></tr>
<tr><td>${src(U.dialzara, 'Dialzara')}</td><td>7-day free trial</td><td>$29 a month (60 minutes)</td></tr>
<tr><td>${src(U.nextphone, 'NextPhone')}</td><td>7-day free trial</td><td>$199 a month (unlimited calls)</td></tr>
<tr><td>${src(U.allo, 'Allô')}</td><td>7-day trial</td><td>$45 add-on plus a phone seat</td></tr>
<tr><td>${src(U.quo, 'Quo')}</td><td>7-day trial</td><td>Seat from $15, Sona tiers from $25</td></tr>
<tr><td>${src(U.goodcall, 'Goodcall')}</td><td>Free trial advertised; length not stated</td><td>$79 per agent (100 unique callers)</td></tr>
<tr><td>${src(U.trillet, 'Trillet')}</td><td>28-day money-back guarantee</td><td>$49 a month (150 minutes)</td></tr>
<tr><td>${src(U.nextiva, 'Nextiva XBert')}</td><td>30-day money-back guarantee</td><td>$99 a month (100 interactions)</td></tr>
<tr><td>${src(U.ringly, 'Ringly.io')}</td><td>30-day money-back guarantee</td><td>$99 a month (50 conversations)</td></tr>
</tbody>
</table>
<p>A trial is the better test if you take more than a call a day: you see the AI handle your real volume before paying. Put a reminder in your calendar a day before the trial ends.</p>

<h2 id="build-your-own">Can you build a free AI receptionist yourself?</h2>
<p>Partly. Developer platforms such as ${src(U.retell, 'Retell AI')} give $10 in free credits and then charge $0.07 to $0.31 a minute, so the credits cover roughly 30 to 140 minutes of calls. You still have to design the conversation, connect a phone number, set up booking and maintain it when it gets things wrong. For most small businesses, the time costs more than a paid plan.</p>

<h2 id="catches">The catches with free AI receptionists</h2>
<ul>
<li><strong>Low limits.</strong> 10 to 25 calls a month runs out in the first busy week.</li>
<li><strong>Expensive overage.</strong> Smith.ai’s $3.00 a call after the free 25 makes 100 calls cost $225 on the free plan, more than most paid plans (Smith.ai’s own Pro plan would cost $212.50).</li>
<li><strong>Hidden requirements.</strong> Quo’s free calls need a paid phone seat.</li>
<li><strong>Setup is on you.</strong> Free and self-serve tools rely on you writing the greeting, FAQs, routing and booking rules.</li>
</ul>

<h2 id="when-to-pay">When free stops being enough</h2>
<p>Once you pass about 25 to 50 calls a month, a paid plan is usually cheaper than free-plan overage. At 100 calls a month, AI receptionists cost about $49 to $213 at list price. Enter your own numbers in our <a href="/ai-receptionist-cost-calculator">AI receptionist cost calculator</a> to see which option is cheapest for you, or read the full <a href="/blog/ai-receptionist-pricing">AI receptionist pricing comparison</a> (23 services).</p>

<h2 id="dooza">Where Dooza fits</h2>
<p>Dooza is an AI-native company that builds AI products and services for small businesses. Our <a href="/ai-receptionist">AI receptionist</a> is done for you: our engineers set it up on your existing number and tune it to your services, prices and calendar. It isn’t free: ${pilotLine} The 30-minute call to scope it is free. <a href="/book">Book a free 30-minute call to scope your pilot</a>, and if a free plan fits your call volume, we’ll tell you.</p>

<h2 id="faq">FAQ</h2>
${faq.map((f) => `<h3>${f.question}</h3>\n<p>${f.answer}</p>`).join('\n')}`,
    faqData: faq,
};
