// AI receptionist pricing benchmark (October 2026). Original data: every price was checked on the
// vendor's own pricing page on 2026-10-06. Raw data: Alive-Web content/research/ai-receptionist-pricing-2026-10.json.
// Feeds /ai-receptionist. Process: playbooks/BLOG_WRITING.md (answer first, sourced, honest verdicts).
import { src, pilotLine } from './helpers';

const CHECKED = 'checked October 6, 2026';
const U = {
    upfirst: 'https://upfirst.ai/pricing',
    dialzara: 'https://www.dialzara.com/pricing',
    allo: 'https://www.withallo.com/pricing',
    ringcentral: 'https://www.ringcentral.com/pricing/ai-receptionist.html',
    rosie: 'https://heyrosie.com/pricing',
    rosieTerms: 'https://heyrosie.com/legal/terms',
    trillet: 'https://www.trillet.ai/pricing',
    phonely: 'https://www.phonely.ai/pricing',
    goodcall: 'https://www.goodcall.com/pricing',
    nextiva: 'https://www.nextiva.com/products/ai-receptionist',
    frontdesk: 'https://www.myaifrontdesk.com/pricing',
    ringly: 'https://www.ringly.io/pricing',
    smithAi: 'https://smith.ai/pricing/ai-receptionist',
    smithHuman: 'https://smith.ai/pricing/receptionists',
    nextphone: 'https://www.getnextphone.com/pricing',
    quo: 'https://www.quo.com/pricing',
    retell: 'https://www.retellai.com/pricing',
    synthflow: 'https://synthflow.ai/pricing',
    abby: 'https://www.abby.com/pricing/',
    answerconnect: 'https://www.answerconnect.com/plans-direct',
    map: 'https://www.mapcommunications.com/pricing/',
    patlive: 'https://www.patlive.com/pricing/',
    ruby: 'https://www.ruby.com/pricing/',
    numa: 'https://www.numa.com/pricing',
    dialpad: 'https://www.dialpad.com/pricing/',
};

const faq = [
    { question: 'How much does an AI receptionist cost per month?', answer: 'In October 2026, entry plans from 16 AI receptionist vendors ranged from $0 (free tiers with 10 to 100 calls or minutes) to $199 a month, and most sat between $49 and $99. Overage runs $0.20 to $0.50 a minute or $0.45 to $3.00 a call. Prices were checked on each vendor’s pricing page on October 6, 2026.' },
    { question: 'How much does an AI receptionist cost for 100 calls a month?', answer: 'For 100 calls of about 3 minutes each (300 minutes), list prices ranged from about $64 (Quo Sona plus a Quo seat) to $225 (Smith.ai at its free plan’s per-call rate) across 13 AI services we could price exactly. Human answering services cost $395 to $1,380 for the same volume (AnswerConnect, MAP Communications, PATLive, Smith.ai Virtual Receptionists, Abby Connect).' },
    { question: 'Is an AI receptionist cheaper than a human answering service?', answer: 'Yes. For 100 calls a month, the AI services we priced cost $64 to $225 against $395 to $1,380 for the five human answering services we priced, roughly 2 to 20 times less. On Smith.ai’s own price sheet, human receptionists cost $8.50 to $11.50 per extra call and its AI receptionist $2.00 to $3.00 per call (checked October 6, 2026). Human services still win for complex, emotional or high-stakes calls.' },
    { question: 'How are AI receptionists billed?', answer: 'Five ways: per minute in bundles (most common: Dialzara, Rosie, Trillet, RingCentral AIR, My AI Front Desk, Phonely), per call or conversation (Upfirst, Smith.ai, Quo, Ringly, Nextiva XBert), flat unlimited (NextPhone), per unique caller (Goodcall), or as a per-seat add-on to a phone system (Allô, Quo, RingCentral RingEX).' },
    { question: 'What hidden costs should I check before buying an AI receptionist?', answer: 'Check what happens when you go over: some vendors charge per extra minute, Rosie moves you to the next plan automatically, and Goodcall meters unique callers instead of minutes. Also check whether the product needs a paid phone seat (Allô, Quo, the RingCentral add-on), billing increments (RingCentral rounds to 30 seconds), and refund terms (Rosie says payments are nonrefundable).' },
    { question: 'Does Dooza offer an AI receptionist?', answer: 'Yes. Dooza builds and runs a done-for-you AI receptionist on your existing number, tuned to your services, prices and calendar, so you don’t set it up yourself. Pricing is on dooza.ai/pricing, and every Dooza product starts with a refundable pilot: 100% refund within 14 days.' },
];

export default {
    id: 410,
    title: 'AI Receptionist Pricing (2026): What 21 Services Actually Cost, Checked on Their Own Pricing Pages',
    seoTitle: 'AI Receptionist Pricing 2026: 21 Services Compared',
    seoDescription: 'AI receptionist pricing checked on 21 vendors’ own pages (Oct 6, 2026): entry plans $0–$199/mo, most $49–$99. What 100 calls a month really costs, billing models and hidden fees.',
    excerpt: 'We checked the pricing pages of 21 AI receptionist and answering services on October 6, 2026. Entry plans run $0 to $199 a month; 100 calls a month costs about $64 to $225 with AI, versus $395 to $1,380 with a human answering service.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '9 min read',
    readTimeMinutes: 9,
    category: 'Comparison',
    tags: ['AI Receptionist Pricing', 'AI Receptionist Cost', 'AI Answering Service Pricing', 'Virtual Receptionist Cost', 'AI Receptionist'],
    image: '/blog/ai-receptionist-pricing.png',
    imageAlt: 'Bar chart: monthly cost of 100 calls (about 300 minutes) on 13 AI receptionist services, from about $64 to $225, compared with $395 to $1,380 for five human answering services. Prices checked October 6–7, 2026.',
    slug: 'ai-receptionist-pricing',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'entry-prices', label: 'Entry prices, 16 AI services' },
        { id: 'cost-100-calls', label: 'What 100 calls a month costs' },
        { id: 'billing-models', label: 'How you get billed' },
        { id: 'hidden-costs', label: 'Hidden costs to check' },
        { id: 'human-vs-ai', label: 'AI vs human answering' },
        { id: 'which-fits', label: 'Which one fits' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'method', label: 'How we checked' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated October 6, 2026. Every price below was ${CHECKED} on the vendor’s own pricing page, linked in each row. Dooza sells a done-for-you AI receptionist, so we are not neutral; we list our method and every source so you can check us. Prices change often: confirm on the vendor’s page before you buy.</em></p>

<h2 id="short-answer">How much does an AI receptionist cost?</h2>
<p><strong>A self-serve AI receptionist costs $0 to $199 a month for an entry plan, and most small-business plans cost $49 to $99 a month (16 AI services, prices checked October 6, 2026).</strong> Extra usage runs $0.20 to $0.50 a minute or $0.45 to $3.00 a call. For a typical small business taking 100 calls a month, the AI services we could price exactly cost about $64 to $225 a month. A human answering service costs $395 to $1,380 for the same calls.</p>
<p>The sticker price matters less than the billing unit. Per-minute, per-call, per-caller and flat plans can swing the bill by 3x at the same call volume. The table and the 100-call comparison below show where.</p>

<h2 id="entry-prices">AI receptionist entry prices: 16 services compared</h2>
<table>
<thead><tr><th>Service</th><th>Entry plan / month</th><th>Included</th><th>Overage</th><th>Billed by</th><th>Trial or guarantee</th></tr></thead>
<tbody>
<tr><td>${src(U.upfirst, 'Upfirst')}</td><td>$24.95 ($20 billed yearly)</td><td>30 calls</td><td>$1.50 a call</td><td>Call</td><td>14-day free trial</td></tr>
<tr><td>${src(U.dialzara, 'Dialzara')}</td><td>$29</td><td>60 minutes</td><td>$0.48 a minute</td><td>Minute</td><td>7-day free trial</td></tr>
<tr><td>${src(U.allo, 'Allô')} AI Receptionist</td><td>$45 add-on ($32 billed yearly), plus a phone seat</td><td>No cap stated</td><td>n/a</td><td>Seat</td><td>7-day trial</td></tr>
<tr><td>${src(U.ringcentral, 'RingCentral AIR')}</td><td>$49 standalone, $39 as a RingEX add-on</td><td>100 minutes</td><td>$0.50 a minute, 30-second increments</td><td>Minute</td><td>14-day free trial</td></tr>
<tr><td>${src(U.rosie, 'Rosie')}</td><td>$49</td><td>250 minutes</td><td>None: moves you to the next plan</td><td>Minute</td><td>7-day trial</td></tr>
<tr><td>${src(U.trillet, 'Trillet')}</td><td>$49</td><td>150 minutes</td><td>$0.20 a minute</td><td>Minute</td><td>28-day money-back</td></tr>
<tr><td>${src(U.phonely, 'Phonely')}</td><td>$0 (100 min) or $50 Starter</td><td>Starter: 200 minutes</td><td>Not shown</td><td>Minute</td><td>Free plan</td></tr>
<tr><td>${src(U.goodcall, 'Goodcall')}</td><td>$79 per agent ($66 yearly)</td><td>Unlimited minutes, 100 unique callers</td><td>$0.50 per extra caller</td><td>Unique caller</td><td>Trial, length not stated</td></tr>
<tr><td>${src(U.nextiva, 'Nextiva XBert')}</td><td>$99</td><td>100 interactions (calls, texts or chats)</td><td>$0.99 an interaction</td><td>Interaction</td><td>30-day money-back</td></tr>
<tr><td>${src(U.frontdesk, 'My AI Front Desk')}</td><td>$99 ($79 yearly)</td><td>200 minutes, plus chat and SMS</td><td>$0.25 a minute</td><td>Minute</td><td>7-day free trial</td></tr>
<tr><td>${src(U.ringly, 'Ringly.io')}</td><td>$99 minimum</td><td>50 conversations</td><td>$1.99 a conversation</td><td>Conversation</td><td>30-day money-back</td></tr>
<tr><td>${src(U.smithAi, 'Smith.ai AI Receptionist')}</td><td>$0 Free (25 calls) or $150 Pro</td><td>Pro: 75 calls</td><td>Free plan: $3.00 a call</td><td>Call</td><td>Free plan</td></tr>
<tr><td>${src(U.quo, 'Quo (OpenPhone) Sona')}</td><td>$0 (10 calls) to $199 (600 calls), plus a $15–$47 seat</td><td>10 to 600 calls</td><td>$1.00 down to $0.45 a call</td><td>Call + seat</td><td>7-day trial</td></tr>
<tr><td>${src(U.nextphone, 'NextPhone')}</td><td>$199 ($166 yearly)</td><td>Unlimited calls</td><td>None</td><td>Flat</td><td>7-day free trial</td></tr>
<tr><td>${src(U.retell, 'Retell AI')} (build it yourself)</td><td>Usage only, $10 free credits</td><td>n/a</td><td>$0.07–$0.31 a minute</td><td>Minute</td><td>$10 credits</td></tr>
<tr><td>${src(U.synthflow, 'Synthflow')}</td><td>Enterprise only, from $30,000 a year</td><td>Scoped</td><td>Scoped</td><td>Contract</td><td>None stated</td></tr>
</tbody>
</table>
<p>Not priced publicly: ${src(U.numa, 'Numa')} (demo only) and ${src(U.dialpad, 'Dialpad AI Agent')} (credits sold through sales). We left out third-party estimates for both.</p>

<h2 id="cost-100-calls">What 100 calls a month costs on each service</h2>
<p>Entry prices don’t compare like for like, so we priced one workload: <strong>100 calls a month, about 3 minutes each (300 minutes), each from a different caller.</strong> For every service we took the cheapest plan that covers it, plus that plan’s published overage.</p>
<table>
<thead><tr><th>Service</th><th>Cost for 100 calls (300 min)</th><th>How it adds up</th></tr></thead>
<tbody>
<tr><td>Quo Sona</td><td>about $64</td><td>Tier 3 $49 (100 calls) + Quo seat from $15 (billed yearly; $19 monthly)</td></tr>
<tr><td>Upfirst</td><td>$69.95</td><td>Premium $59.95 (90 calls) + 10 × $1</td></tr>
<tr><td>Trillet</td><td>$79</td><td>$49 (150 min) + 150 × $0.20</td></tr>
<tr><td>Goodcall</td><td>$79</td><td>Starter: unlimited minutes, 100 unique callers</td></tr>
<tr><td>Nextiva XBert</td><td>$99</td><td>100 interactions included</td></tr>
<tr><td>My AI Front Desk</td><td>$124</td><td>$99 (200 min) + 100 × $0.25</td></tr>
<tr><td>Dialzara</td><td>$135</td><td>$99 (220 min) + 80 × $0.45</td></tr>
<tr><td>RingCentral AIR (standalone)</td><td>$149</td><td>$49 (100 min) + 200 × $0.50</td></tr>
<tr><td>Rosie</td><td>$149</td><td>300 min exceeds the $49 plan, so you move to the $149 plan (1,000 min)</td></tr>
<tr><td>Phonely</td><td>$150</td><td>Overage not published, so the $150 plan (650 min)</td></tr>
<tr><td>Ringly.io</td><td>$198.50</td><td>$99 (50 conversations) + 50 × $1.99</td></tr>
<tr><td>NextPhone</td><td>$199</td><td>Flat, unlimited calls</td></tr>
<tr><td>Smith.ai AI Receptionist</td><td>$225</td><td>Free plan (25 calls) + 75 × $3.00. Pro covers only 75 calls and its overage isn’t published</td></tr>
<tr><td colspan="3"><em>Human answering services, same 100 calls</em></td></tr>
<tr><td>AnswerConnect</td><td>$395</td><td>Growth plan, 300 minutes (${src(U.answerconnect, 'AnswerConnect plans')}, checked October 7, 2026)</td></tr>
<tr><td>MAP Communications</td><td>$403</td><td>Enterprise $339 (250 min) + 50 × $1.28 (${src(U.map, 'MAP pricing')}, checked October 7, 2026)</td></tr>
<tr><td>PATLive</td><td>$479</td><td>300-minute plan; the 200-minute plan plus overage would cost more (${src(U.patlive, 'PATLive pricing')}, checked October 7, 2026)</td></tr>
<tr><td>Smith.ai Virtual Receptionists</td><td>$915</td><td>Basic $810 (90 calls) + 10 × $10.50</td></tr>
<tr><td>Abby Connect (human answering)</td><td>$1,380</td><td>300 human minutes is over Professional’s 200, so Growth (500 minutes). Abby counts AI minutes at half, so 300 AI minutes would fit Professional at $599.</td></tr>
</tbody>
</table>
<p>At 100 calls a month the cheapest and the most expensive AI service differ by about 3.5x ($64 against $225). Try your own numbers in our <a href="/ai-receptionist-cost-calculator">AI receptionist cost calculator</a>. Allô is left out because its add-on has no usage cap and needs a phone seat.</p>
<p>Your numbers will differ if calls are longer, if the same customers call repeatedly (cheaper on Goodcall), or if you need texts and chat too (Nextiva and My AI Front Desk count those).</p>

<h2 id="billing-models">How AI receptionists bill you</h2>
<ul>
<li><strong>Per minute in bundles</strong>: Dialzara, Rosie, Trillet, RingCentral AIR, My AI Front Desk, Phonely. Cheapest when calls are short.</li>
<li><strong>Per call or conversation</strong>: Upfirst, Smith.ai, Quo, Ringly, Nextiva XBert. Predictable when calls run long.</li>
<li><strong>Flat and unlimited</strong>: NextPhone. Worth it only at high volume.</li>
<li><strong>Per unique caller</strong>: Goodcall. Good when the same customers call often.</li>
<li><strong>Per seat, as an add-on to a phone system</strong>: Allô, Quo, the RingCentral RingEX add-on. Count the seat in the price.</li>
</ul>

<h2 id="hidden-costs">Hidden costs to check before you buy</h2>
<ul>
<li><strong>What happens at the limit.</strong> Rosie moves you to the next plan automatically instead of charging per minute (${src(U.rosieTerms, 'Rosie terms')}), and its terms say payments are nonrefundable.</li>
<li><strong>Billing increments.</strong> RingCentral rounds usage to 30-second increments, so a 31-second call bills as one minute.</li>
<li><strong>A required phone seat.</strong> Quo and Allô sell the AI receptionist on top of a paid phone seat.</li>
<li><strong>Setup work.</strong> Self-serve tools are cheap because you write the scripts, FAQs, routing and calendar rules yourself. Budget a few hours, then ongoing tuning when it gets things wrong.</li>
<li><strong>Build-it-yourself platforms.</strong> Retell’s $0.07–$0.31 a minute is for developers. You still need someone to build, host and maintain the agent.</li>
</ul>

<h2 id="human-vs-ai">AI receptionist vs human answering service</h2>
<p>Smith.ai sells both, which makes for a clean comparison on one price sheet: its human receptionists charge $8.50 to $11.50 for each call over the plan, while its AI receptionist works out at $2.00 to $3.00 a call (${src(U.smithHuman, 'Smith.ai human plans')}, ${src(U.smithAi, 'Smith.ai AI plans')}, ${CHECKED}). In our 100-call scenario, AI services cost roughly 2 to 20 times less than the five human services we priced ($64–$225 against $395–$1,380). Per-minute answering services such as AnswerConnect, MAP and PATLive are the cheapest human option.</p>
<p>Humans are still the better pick for upset customers, complex intake (legal, medical), and calls where one mistake costs more than a year of the service. Hybrids exist: ${src(U.abby, 'Abby Connect')} mixes human and AI minutes on one plan, and ${src(U.ruby, 'Ruby')} adds AI features to its human plans from $250 a month.</p>

<h2 id="which-fits">Which AI receptionist fits which business</h2>
<ul>
<li><strong>Under 50 calls a month, tight budget:</strong> a free tier (Smith.ai, Phonely, Quo) or Upfirst at $24.95.</li>
<li><strong>Short, simple calls (hours, directions, booking):</strong> per-minute plans like Trillet or Dialzara.</li>
<li><strong>Long calls or unpredictable length:</strong> per-call plans like Upfirst or Nextiva.</li>
<li><strong>Already on RingCentral, Quo or Allô:</strong> their add-on avoids a second phone system.</li>
<li><strong>Hundreds of calls a month:</strong> flat plans like NextPhone become the cheapest per call.</li>
<li><strong>You don’t want to set it up or tune it yourself:</strong> a done-for-you service (below).</li>
</ul>

<h2 id="dooza">Where Dooza fits</h2>
<p>Dooza is an AI-native company that builds AI products and services for small businesses. Our ${'<a href="/ai-receptionist">AI receptionist</a>'} is done for you: our engineers set it up on your existing number, write the call flows from your services, prices and calendar, and keep tuning it as calls come in. It fits businesses that would rather not spend their evenings configuring prompts and routing rules. Pricing depends on the product (see ${'<a href="/pricing">Dooza pricing</a>'}). ${pilotLine}</p>
<p>Not sure which option fits your call volume? <a href="/book">Book a free 30-minute call to scope your pilot</a>. We’ll tell you honestly if a $25 self-serve tool is enough.</p>

<h2 id="method">How we checked these prices</h2>
<p>On October 6, 2026 we opened the pricing page of 21 AI receptionist and answering services and recorded each plan’s price, included minutes or calls, overage, billing unit, trial and refund terms. Where we could, we read the numbers straight from the page’s HTML rather than from a summary. We excluded figures that appear only on third-party sites. The 100-call scenario uses only published prices and the rules stated above. If a vendor changes its pricing or you spot an error, tell us and we’ll update the page.</p>

<h2 id="faq">FAQ</h2>
${faq.map((f) => `<h3>${f.question}</h3>\n<p>${f.answer}</p>`).join('\n')}`,
    faqData: faq,
};
