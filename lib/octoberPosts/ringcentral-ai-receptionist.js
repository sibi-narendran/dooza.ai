// RingCentral AI Receptionist (AIR) independent review (October 2026).
// Feeds /ai-receptionist. RingCentral prices checked 2026-10-06 on ringcentral.com/pricing/ai-receptionist.html;
// competitor prices checked the same day on each vendor's pricing page.
import { src, yt, quote, xPost, pilotLine } from './helpers';

const CHECKED = 'checked October 6, 2026';
const RC_PRICING = 'https://www.ringcentral.com/pricing/ai-receptionist.html';
const RC_PRODUCT = 'https://www.ringcentral.com/us/en/ai-receptionist.html';
const RC_SETUP = 'https://support.ringcentral.com/article-v2/setting-up-your-ai-receptionist-in-the-admin-portal.html?brand=RingCentral&product=RingEX&language=en_US';
const RC_COMMUNITY = 'https://community.ringcentral.com/ai-receptionist-air-41';

export default {
    id: 238,
    title: 'RingCentral AI Receptionist Review (2026): Pricing, Features, Limits and Alternatives',
    seoTitle: 'RingCentral AI Receptionist (AIR): Pricing & Review 2026',
    seoDescription: 'Independent review of RingCentral AI Receptionist (AIR): what it does, current pricing ($39 add-on, $49 standalone, 100 minutes, $0.50/min), setup, limits users report, and alternatives compared.',
    excerpt: 'RingCentral AI Receptionist (AIR) is a voice AI agent that answers calls, handles FAQs, books appointments and routes callers. Here is what it costs per minute, how setup works, what real admins report, and when an alternative fits better.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '11 min read',
    readTimeMinutes: 11,
    category: 'Comparison',
    tags: ['RingCentral AI Receptionist', 'RingCentral AIR', 'RingCentral AI', 'AI Receptionist', 'AI Receptionist Pricing', 'AI Receptionist Alternatives'],
    image: '/blog/ringcentral-ai-receptionist.png',
    imageAlt: 'Watercolor illustration of a small business front desk with a ringing desk phone, an AI headset in a speech bubble, call routing arrows to three team members, a calendar with a booked slot and a dial showing call minutes used',
    slug: 'ringcentral-ai-receptionist',
    video: {
        name: "I Put RingCentral's AI Receptionist (AIR) to the Test – Results Surprised Me",
        description: 'CX Foundation calls RingCentral AIR live, tests interruptions, pricing questions and SMS, then walks through its core features: voice and SMS, multi-language support, transfers with context, routing, lead capture and appointment booking.',
        thumbnailUrl: 'https://i.ytimg.com/vi/nRkmh65XP2k/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/nRkmh65XP2k',
        uploadDate: '2026-03-03',
    },
    tocData: [
        { id: 'what-is-it', label: 'What it is' },
        { id: 'features', label: 'Features' },
        { id: 'how-it-works', label: 'How it works' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'setup', label: 'Setup steps' },
        { id: 'pros-cons', label: 'Pros and cons' },
        { id: 'user-reports', label: 'What users report' },
        { id: 'video', label: 'Live test video' },
        { id: 'who-fits', label: 'Who it fits' },
        { id: 'alternatives', label: 'Alternatives compared' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated October 6, 2026. RingCentral prices ${CHECKED} on ${src(RC_PRICING, 'RingCentral’s AI Receptionist pricing page')}. Dooza is not affiliated with RingCentral.</em></p>

<h2 id="what-is-it">What is RingCentral AI Receptionist?</h2>
<p><strong>RingCentral AI Receptionist (AIR) is a voice AI agent that answers your business calls 24/7, handles FAQs, captures leads, books appointments and transfers callers to the right person.</strong> It costs $39 a month as an add-on to a RingEX phone plan or $49 a month standalone, each with 100 minutes, then $0.50 a minute (${src(RC_PRICING, 'RingCentral pricing')}, ${CHECKED}).</p>
<p><strong>Our verdict:</strong> if you already pay for RingCentral and mainly need calls answered and routed, AIR is the simplest choice, because it lives inside the admin portal you already use. If your call volume is high, your calls run long, or you want someone to build and tune the receptionist for you, compare the per-minute math and the alternatives below first.</p>
<ul>
<li><strong>What it is:</strong> an AI phone agent inside RingCentral’s RingEX system, also sold standalone for any phone system as “AIR Everywhere”.</li>
<li><strong>Price:</strong> $39/month add-on or $49/month standalone, 100 minutes included, $0.50/minute after, billed in 30-second increments.</li>
<li><strong>Best for:</strong> existing RingCentral customers who want a self-serve AI front desk without changing vendors.</li>
<li><strong>Watch for:</strong> per-minute overage, test calls that use your minutes, and admin reports of interruptions and knowledge-base answers that need tuning.</li>
<li><strong>Alternatives:</strong> Smith.ai, Rosie, Upfirst, Goodcall, Nextiva XBert, Jobber Receptionist, and done-for-you options like Dooza for the trades.</li>
</ul>
<p>RingCentral launched AIR in early 2025 and made it generally available in the US and Canada on June 30, 2025 (${src('https://support.ringcentral.com/release-notes/ai-receptionist/release-notes-june-2025.html', 'RingCentral release notes, June 2025')}). It is one of three “agentic” AI products, next to the AI Virtual Assistant (AVA) and the AI Conversation Expert (ACE) analytics tool (${src('https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-announces-agentic-voice-ai-communications-suite.html', 'RingCentral press release, November 3, 2025')}). So when people search “RingCentral AI assistant”, they may mean AVA, which helps your staff during calls, rather than AIR, which answers callers.</p>

<h2 id="features">What can RingCentral AI Receptionist do?</h2>
<p>From ${src(RC_PRODUCT, 'RingCentral’s AIR product page')} and the pricing FAQ (${CHECKED}):</p>
<table><thead><tr><th>Feature</th><th>What RingCentral says it does</th></tr></thead><tbody>
<tr><td>24/7 answering</td><td>Answers nights, weekends and holidays, and handles multiple calls at the same time</td></tr>
<tr><td>FAQs and knowledge</td><td>Trained from your website, FAQs or uploaded documents</td></tr>
<tr><td>Call routing</td><td>Routes by name, department, location or keywords (“transfer by name” and “transfer by context”)</td></tr>
<tr><td>Lead capture</td><td>Custom intake questions; logs caller details to Salesforce, HubSpot or Zoho</td></tr>
<tr><td>Appointments</td><td>Books and reschedules on Google or Outlook calendars</td></tr>
<tr><td>SMS</td><td>Texts links, forms and confirmations during or after the call</td></tr>
<tr><td>Languages</td><td>English, Spanish, French, Italian, German and Portuguese</td></tr>
<tr><td>Records</td><td>Call recording, transcripts and an analytics dashboard</td></tr>
<tr><td>Multi-location</td><td>Custom rules per location</td></tr>
</tbody></table>
<p>RingCentral keeps shipping. The ${src('https://support.ringcentral.com/release-notes/ai-receptionist.html', 'August 2026 release notes')} added a customizable personality (voice, response style and talking speed), a notification center, and the option to create a receptionist from an existing IVR. RingCentral also says AIR is “designed to support HIPAA compliance” (${src(RC_PRICING, 'pricing FAQ')}); healthcare buyers should still confirm the BAA terms with sales.</p>

<h2 id="how-it-works">How does RingCentral AIR work?</h2>
<p>AIR sits on an extension or phone number in your RingCentral account. You decide which calls reach it through normal call-handling rules:</p>
<ol>
<li><strong>Front door:</strong> AIR answers every call to the main number and routes the ones it cannot resolve.</li>
<li><strong>Overflow:</strong> calls ring your team or a call queue first, and the “if no answer” rule sends them to AIR. RingCentral’s community moderator walks through this in ${src('https://community.ringcentral.com/ai-receptionist-air-41/how-to-set-up-ai-receptionist-to-answer-calls-only-if-no-one-picks-up-11087', 'this thread')}.</li>
<li><strong>After hours:</strong> AIR takes over on a schedule when the office is closed.</li>
</ol>
<p>If you are not on RingCentral, the standalone version, launched as AIR Everywhere in August 2025, works with other phone systems through call forwarding or SIP (${src('https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-takes-air-everywhere.html', 'RingCentral press release')}).</p>

<h2 id="pricing">How much does RingCentral AI Receptionist cost?</h2>
<p><strong>RingCentral AI Receptionist costs $39 a month as a RingEX add-on or $49 a month standalone. Both include 100 minutes. Extra usage is $0.50 a minute, rounded up and billed in 30-second increments</strong> (${src(RC_PRICING, 'RingCentral pricing page')}, ${CHECKED}).</p>
<table><thead><tr><th>Item</th><th>AIR add-on to RingEX</th><th>AIR standalone (any phone system)</th></tr></thead><tbody>
<tr><td>Monthly price</td><td>From $39</td><td>From $49</td></tr>
<tr><td>Included minutes</td><td>100</td><td>100</td></tr>
<tr><td>Overage</td><td>$0.50/min</td><td>$0.50/min</td></tr>
<tr><td>Billing increment</td><td>30 seconds, rounded up</td><td>30 seconds, rounded up</td></tr>
<tr><td>Extra minute bundles</td><td>Stackable 100-minute bundles</td><td>Stackable 100-minute bundles</td></tr>
<tr><td>Phone plan needed</td><td>Yes, a RingEX plan (priced per user)</td><td>No; works with your current system</td></tr>
<tr><td>Free trial</td><td>14 days</td><td>14 days</td></tr>
</tbody></table>
<p>Three things change the real cost:</p>
<ul>
<li><strong>The RingEX license.</strong> The $39 price is on top of your RingEX plan. Third-party reviews report RingEX Core at about $30 per user per month on monthly billing, or $20 billed annually (${src('https://www.cloudtalk.io/blog/ringcentral-pricing/', 'CloudTalk, reported')}); check your own contract.</li>
<li><strong>Rounding.</strong> A 1-minute-10-second call bills as 1.5 minutes.</li>
<li><strong>Test calls count.</strong> RingCentral’s ${src(RC_SETUP, 'setup guide')} notes that test calls use your monthly minute allotment.</li>
</ul>
<p><strong>Worked example (published rates only):</strong> a business that sends AIR 300 minutes a month pays $39 + (200 × $0.50) = <strong>$139</strong> on the add-on, or $49 + $100 = <strong>$149</strong> standalone, before RingEX licenses and taxes. At 600 minutes the add-on is $289 a month. Minute usage is the cost question users raise most, including in a r/RingCentral thread titled “Minutes for AI Receptionist”.</p>
<p>Prices have moved. When RingCentral launched AIR Everywhere in August 2025, the standalone version started at $59 a month with 100 minutes (${src('https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-takes-air-everywhere.html', 'press release')}). Today’s page says $49.</p>

<h2 id="setup">How do you set up RingCentral AI Receptionist?</h2>
<p>According to ${src(RC_SETUP, 'RingCentral’s admin guide')}, setup runs in the Admin Portal under the AI section:</p>
<ol>
<li>Sign in as an admin and click <strong>Create</strong>.</li>
<li>Add business details from your website URL, your Google Business Profile, an existing IVR, or by hand.</li>
<li>Name the receptionist, pick a primary (and optional secondary) language, a voice, a personality (Friendly, Neutral or Formal), a detail level and a talking speed.</li>
<li>Review the company description, greeting, location and business hours.</li>
<li>Review the auto-generated FAQs and switch each on or off.</li>
<li>Set the default transfer extension and turn “transfer by name” on or off.</li>
<li>Place a test call (it uses minutes), or test by chat in the Test panel.</li>
<li>Connect the receptionist to a phone number or extension. Until you do, it answers nothing.</li>
<li>Connect calendars and your CRM for booking and lead logging.</li>
</ol>
<p>RingCentral markets this as “set up in minutes” with no IT support. Basic setup is fast; tuning answers, transfers and closing behavior is where most of the admin questions below come from.</p>

<h2 id="pros-cons">RingCentral AIR pros and cons</h2>
<table><thead><tr><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Built into RingEX: one vendor, one admin portal, one bill</td><td>Per-minute overage ($0.50/min) makes busy or long-call months hard to predict</td></tr>
<tr><td>Published, low entry price ($39 or $49) with a 14-day trial</td><td>The add-on price sits on top of per-user RingEX licenses</td></tr>
<tr><td>Strong routing: by name, context, location and call queues</td><td>Self-serve: you write, test and tune the knowledge, transfers and edge cases</td></tr>
<tr><td>Six languages; CRM and calendar integrations</td><td>Admins report interruptions and answers that need tuning (see below)</td></tr>
<tr><td>Fast-moving roadmap with monthly releases</td><td>Not built around one trade’s workflow, such as HVAC emergency triage</td></tr>
</tbody></table>

<h2 id="user-reports">What do RingCentral AIR users report?</h2>
<p>We read the threads that rank for this query and RingCentral’s own ${src(RC_COMMUNITY, 'AI Receptionist community board')}. These are individual reports, not measured rates, and some may be fixed by now:</p>
<ul>
<li><strong>Interrupting callers.</strong> An admin wrote that AIR “is interrupting callers when they are answering questions” and was “not ending calls after scheduling the appointment.” The moderator suggested a support case (${src('https://community.ringcentral.com/ai-receptionist-air-41/ai-receptionist-cutting-callers-off-and-not-ending-calls-11694', 'RingCentral Community')}).</li>
<li><strong>Knowledge base accuracy.</strong> Another admin said that two weeks after onboarding, AIR still could not answer correctly from a CSV they had uploaded to the knowledge hub (${src('https://community.ringcentral.com/ai-receptionist-air-41/is-anyone-using-the-ai-receptionist-knowledge-hub-10597', 'RingCentral Community')}).</li>
<li><strong>Where caller details go.</strong> One user said support told them the only way to see details AIR collected was to open the call log call by call (${src('https://community.ringcentral.com/ai-receptionist-air-41/ai-receptionist-what-happens-to-information-gathered-11841', 'RingCentral Community')}). RingCentral now advertises CRM logging to Salesforce, HubSpot and Zoho, so check what your plan connects to.</li>
<li><strong>Add-on confusion.</strong> A RingEX customer could not route calls to AIR until a moderator explained it “is actually a separate paid add-on and isn’t automatically included with RingEX plans” (${src('https://community.ringcentral.com/ai-receptionist-air-41/how-to-set-up-ai-receptionist-to-answer-calls-only-if-no-one-picks-up-11087', 'RingCentral Community')}).</li>
<li><strong>Call-flow complexity.</strong> Reddit users reportedly found advanced flows, such as having AI answer only when agents are unavailable, more complicated than expected (${src('https://www.cloudtalk.io/blog/ringcentral-ai-receptionist-review/', 'CloudTalk summary, reported')}).</li>
<li><strong>Trades owners asking around.</strong> In the Jobber community, a home-service owner asked whether anyone uses RingCentral’s AI receptionist to send calls to the right department without answering and forwarding them herself (${src('https://community.getjobber.com/discussions/operations-forum/does-anyone-use-ringcentrals-ai-receptionist-for-their-business/15985', 'Jobber Community')}).</li>
</ul>
<p>RingCentral promotes AIR heavily, which is fair: it is a real product with real customers. Here is how it pitches it:</p>
${xPost({
        text: 'Missed calls = missed revenue.<br><br>AI Receptionist (AIR) answers calls 24/7, books appointments, and sends texts, so you never miss an opportunity.<br><br>Get a demo of AIR: <a href="https://t.co/TOkS6yzL9K">https://t.co/TOkS6yzL9K</a>. <a href="https://t.co/oGHQ3ng34P">pic.twitter.com/oGHQ3ng34P</a>',
        name: 'RingCentral',
        handle: 'RingCentral',
        url: 'https://x.com/RingCentral/status/2036080741964972484',
        date: 'March 23, 2026',
    })}

<h2 id="video">What happens on a live call with RingCentral AIR?</h2>
<p>In March 2026, CX Foundation called RingCentral’s own AIR demo line on camera for the first time. AIR answered, offered to text a sign-up link, quoted the $39 starting price, and said it sends standard SMS but not MMS. It also talked over the tester when she interrupted. Her verdict:</p>
${quote('Obviously, there&#39;s still a few hiccups there, but on the whole, I was very impressed.', 'Katherine, CX Foundation', 'nRkmh65XP2k', 231, '3:51', 'I Put RingCentral&#39;s AI Receptionist (AIR) to the Test')}
${yt('nRkmh65XP2k', 'I Put RingCentral&#39;s AI Receptionist (AIR) to the Test – Results Surprised Me')}

<h2 id="who-fits">Who is RingCentral AI Receptionist best for?</h2>
<ul>
<li><strong>Good fit:</strong> businesses already on RingEX that want an AI front door or overflow line, have someone to own setup and tuning, and take a moderate number of short calls.</li>
<li><strong>Good fit:</strong> multi-location offices that need routing by name, department or location, or callers in Spanish, French, German, Italian or Portuguese.</li>
<li><strong>Weaker fit:</strong> high-volume or long-call businesses, where $0.50 a minute adds up fast.</li>
<li><strong>Weaker fit:</strong> owner-operators in the trades with no time to build the knowledge base, test transfers and fix edge cases. A done-for-you service may be cheaper in hours.</li>
</ul>
<p>Not sure an AI receptionist is right at all? Start with our guides to the <a href="/blog/best-ai-receptionist">best AI receptionist</a>, a <a href="/blog/virtual-receptionist-for-small-business">virtual receptionist for small business</a>, and an <a href="/blog/after-hours-answering-service">after-hours answering service</a>.</p>

<h2 id="alternatives">RingCentral AI Receptionist alternatives compared</h2>
<p>Starting prices from each vendor’s pricing page, ${CHECKED}. Note the different units: minutes, calls, unique callers or “interactions”. For all 21 services side by side, including what 100 calls a month costs on each, see our <a href="/blog/ai-receptionist-pricing">AI receptionist pricing comparison</a>.</p>
<table><thead><tr><th>Product</th><th>Starting price</th><th>Included</th><th>After that</th><th>Best for</th></tr></thead><tbody>
<tr><td><strong>RingCentral AIR</strong></td><td>$39/mo add-on; $49/mo standalone (${src(RC_PRICING, 'source')})</td><td>100 minutes</td><td>$0.50/min</td><td>Existing RingCentral customers</td></tr>
<tr><td>Smith.ai AI Receptionist</td><td>$0 Free plan; Pro $150/mo (${src('https://smith.ai/pricing/ai-receptionist', 'source')})</td><td>25 calls (Free)</td><td>$3.00/call (Free); $2.00/call (Pro)</td><td>Per-call billing with optional human backup</td></tr>
<tr><td>Rosie</td><td>$49/mo Professional (${src('https://heyrosie.com/pricing', 'source')})</td><td>250 minutes</td><td>Higher tiers: 1,000 min for $149</td><td>Cheap self-serve minutes, English and Spanish</td></tr>
<tr><td>Upfirst</td><td>$24.95/mo Starter (${src('https://upfirst.ai/pricing', 'source')})</td><td>30 calls</td><td>$1.50/call</td><td>Very low call volume</td></tr>
<tr><td>Goodcall</td><td>$79/agent/mo Starter (${src('https://www.goodcall.com/pricing', 'source')})</td><td>100 unique customers</td><td>$0.50/customer</td><td>Repeat callers; no per-minute billing</td></tr>
<tr><td>Nextiva XBert</td><td>$99/mo (${src('https://www.nextiva.com/products/ai-receptionist', 'source')})</td><td>100 interactions (calls of 30+ seconds)</td><td>$0.99/interaction</td><td>Nextiva phone customers</td></tr>
<tr><td>Jobber Receptionist</td><td>$29/mo add-on to a Jobber plan (${src('https://www.getjobber.com/pricing/', 'source')})</td><td>See Jobber</td><td>See Jobber</td><td>Home-service teams already on Jobber</td></tr>
<tr><td><strong>Dooza AI Receptionist</strong></td><td>Refundable pilot (see <a href="/pricing">pricing</a>)</td><td>Done-for-you setup, live within 48 hours</td><td>See <a href="/pricing">pricing</a></td><td>Contractors and trades who want it built for them</td></tr>
</tbody></table>
<p>The pattern: RingCentral AIR and Nextiva XBert make the most sense when you already use that phone system. Jobber Receptionist makes sense if Jobber already runs your jobs. Rosie and Upfirst are the low-cost self-serve picks. Smith.ai is the pick if you want humans behind the AI. For a deeper look at how AI agents recover missed calls, read <a href="/blog/ai-voice-agent-missed-calls">AI voice agents for missed calls</a>.</p>

<h2 id="dooza">Where Dooza fits</h2>
<p><strong>Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days.</strong></p>
<p>The <a href="/ai-receptionist">Dooza AI Receptionist</a> is a done-for-you AI receptionist for contractors and trades: HVAC, plumbing, electrical, roofing, garage doors, pest control, landscaping and general contractors. The difference from AIR is who does the work. With RingCentral, you build and tune the receptionist yourself. With Dooza, we build it for you:</p>
<ul>
<li>It answers every call in your company name, 24/7, while you are on the tools.</li>
<li>It asks what you would ask: the address, what is wrong, how urgent it is, owner or tenant.</li>
<li>It books the job on your calendar. Google Calendar and Outlook work out of the box; if you run Housecall Pro, Jobber or ServiceTitan, we connect it during the pilot where the software allows it.</li>
<li>It texts the caller a confirmation and hands off to you or your dispatcher by your rules.</li>
<li>It never quotes a price or gives advice you have not approved.</li>
<li>It works with the number you already have. You forward your business line or cell, and you can switch forwarding off anytime.</li>
</ul>
<p>You book a short setup call, we collect your questions, hours and calendar, and it is set up and live on your line within 48 hours. ${pilotLine} Pricing depends on the product; see <a href="/pricing">pricing</a>.</p>
<p><strong>When to pick RingCentral instead:</strong> if you already pay for RingEX, mostly need calls answered and routed, and have someone to own the setup, AIR is the simplest choice and keeps everything with one vendor. Dooza also answers in English only today and is not offered as a HIPAA service, so medical practices and businesses that need Spanish should look at AIR or another provider.</p>
<p><a href="/book">Book a free pilot call</a> and we will scope your call script, booking rules and emergency routing.</p>

<h2 id="faq">RingCentral AI Receptionist FAQ</h2>
<h3>What is RingCentral AI Receptionist?</h3>
<p>RingCentral AI Receptionist (AIR) is a voice AI agent that answers business calls 24/7, answers FAQs, captures leads, books appointments on Google or Outlook calendars, sends texts and transfers callers to the right person. It runs inside RingCentral’s RingEX phone system or standalone with other phone systems.</p>
<h3>How much does RingCentral AI Receptionist cost?</h3>
<p>RingCentral lists AIR at $39 a month as a RingEX add-on or $49 a month standalone, each with 100 minutes included. Extra usage is $0.50 a minute, rounded up in 30-second increments, and stackable minute bundles are available (checked October 6, 2026).</p>
<h3>Do I need a RingCentral phone plan to use AIR?</h3>
<p>No. The $39 add-on requires a RingEX plan, but the $49 standalone version works with other phone systems through call forwarding or SIP. On RingEX, AIR is a separate paid add-on and is not included automatically.</p>
<h3>Is there a free trial of RingCentral AI Receptionist?</h3>
<p>Yes. RingCentral offers a 14-day free trial on both the add-on and the standalone plan. Test calls during setup count toward your monthly minutes.</p>
<h3>What languages does RingCentral AI Receptionist support?</h3>
<p>RingCentral lists English, Spanish, French, Italian, German and Portuguese. You set a primary language and an optional secondary language, and AIR can switch languages during a call.</p>
<h3>What is the best RingCentral AI Receptionist alternative for contractors?</h3>
<p>If you want the receptionist built and tuned for you, Dooza sets up an AI receptionist for contractors and trades and has it live on your existing number within 48 hours, starting with a refundable pilot. If Jobber already runs your jobs, Jobber Receptionist is a $29 a month add-on. For low-cost self-serve options, compare Rosie and Upfirst.</p>`,
    faqData: [
        { question: 'What is RingCentral AI Receptionist?', answer: 'RingCentral AI Receptionist (AIR) is a voice AI agent that answers business calls 24/7, answers FAQs, captures leads, books appointments on Google or Outlook calendars, sends texts and transfers callers to the right person. It runs inside RingCentral’s RingEX phone system or standalone with other phone systems.' },
        { question: 'How much does RingCentral AI Receptionist cost?', answer: 'RingCentral lists AIR at $39 a month as a RingEX add-on or $49 a month standalone, each with 100 minutes included. Extra usage is $0.50 a minute, rounded up in 30-second increments, and stackable minute bundles are available (checked October 6, 2026).' },
        { question: 'Do I need a RingCentral phone plan to use AIR?', answer: 'No. The $39 add-on requires a RingEX plan, but the $49 standalone version works with other phone systems through call forwarding or SIP. On RingEX, AIR is a separate paid add-on and is not included automatically.' },
        { question: 'Is there a free trial of RingCentral AI Receptionist?', answer: 'Yes. RingCentral offers a 14-day free trial on both the add-on and the standalone plan. Test calls during setup count toward your monthly minutes.' },
        { question: 'What languages does RingCentral AI Receptionist support?', answer: 'RingCentral lists English, Spanish, French, Italian, German and Portuguese. You set a primary language and an optional secondary language, and AIR can switch languages during a call.' },
        { question: 'What is the best RingCentral AI Receptionist alternative for contractors?', answer: 'If you want the receptionist built and tuned for you, Dooza sets up an AI receptionist for contractors and trades and has it live on your existing number within 48 hours, starting with a refundable pilot. If Jobber already runs your jobs, Jobber Receptionist is a $29 a month add-on. For low-cost self-serve options, compare Rosie and Upfirst.' },
    ],
};
