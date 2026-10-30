// Best AI tools for physical therapists (October 2026): for small outpatient PT clinics comparing AI scribes, EMRs with AI, phone answering and front-desk tools.
// Targets: "best ai tools for physical therapists", "ai scribe for physical therapy", "ai for pt clinics", "physical therapy ai software", "ai receptionist for physical therapy".
// Facts: content/drafts/industry-tools/best-ai-tools-for-physical-therapists-facts.md (vendor pages read Oct 26, 2026).
// Dooza Crew claims only as in BRIEF.md (verified crew.dooza.ai / dooza.ai). No Dooza physical therapy page exists.

import { src } from './helpers';

const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=best-ai-tools-for-physical-therapists';

export default {
    id: 503,
    title: 'Best AI Tools for Physical Therapists in 2026: 9 Tools With Real Prices',
    seoTitle: 'Best AI Tools for Physical Therapists (2026)',
    seoDescription: 'The best AI tools for physical therapists in 2026: Dooza Crew, WebPT, SPRY, Jane, Heidi, Freed, Goodcall, Smith.ai and Fathom. Prices read on vendor pages Oct 26.',
    excerpt: 'Nine AI tools a small outpatient PT clinic can use in 2026, from AI scribes and EMRs with AI built in to phone answering and front-desk helpers, with prices read on each vendor page, who each fits, and one honest limit for each.',
    author: 'Dooza Team',
    date: '2026-10-26',
    modifiedDate: '2026-10-26',
    readTime: '9 min read',
    readTimeMinutes: 9,
    category: 'Comparison',
    tags: ['Physical Therapists', 'Physical Therapy', 'AI Scribe', 'AI Receptionist', 'SOAP Notes', 'AI Tools', 'Dooza Crew'],
    image: '/blog/best-ai-tools-for-physical-therapists.png',
    imageAlt: 'Watercolor of a physical therapist guiding a seated patient through a shoulder stretch on a mat, with an exercise ball and resistance bands in the clinic',
    slug: 'best-ai-tools-for-physical-therapists',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'adoption', label: 'What we could not find on adoption' },
        { id: 'comparison', label: 'Comparison table' },
        { id: 'tools', label: 'The tools, one by one' },
        { id: 'free', label: 'Free AI tools and trials' },
        { id: 'how-to-choose', label: 'How to choose' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'What is the best AI tool for physical therapists?', answer: 'It depends on the job. For SOAP notes, look at an AI scribe: Freed has plans from $39 a month, Jane charges $15 a month per opted-in practitioner, and WebPT and SPRY build AI into their own EMRs with no public price. For the front desk, our top pick is Dooza Crew (our product): AI employees that answer the phone and draft emails and follow-ups, $5 to start, and they ask before they send anything.' },
        { question: 'Is there an AI scribe for physical therapy notes?', answer: 'Yes, several. WebPT lists AI documentation tools and SPRY has an AI Scribe on its Plus plan, both without public prices. Jane\'s AI Scribe is $15 a month per opted-in practitioner. Freed starts at $39 a month with a 7-day free trial and Heidi has a free plan. Review every note yourself before it goes in the chart.' },
        { question: 'Can AI answer the phone for a PT clinic?', answer: 'Yes. Goodcall starts at $79 a month with a free demo agent, Smith.ai\'s answering plans start at $300 a month for 30 calls, and Dooza Crew agents also take phone calls, included in your Crew plan. None of them is a clinician: they take messages and book or route calls, and clinical questions stay with you.' },
        { question: 'Does Dooza Crew work with WebPT, Jane or other PT EMRs?', answer: 'No. No PT EMR, including WebPT and Jane, is certified or integrated with Dooza Crew, so it does not sync with your EMR. It works only in web tools you log in to with a browser, and you type passwords and 2FA codes yourself. If your EMR runs in a browser, an agent could be given tasks there, but you stay in charge of what goes in the chart.' },
        { question: 'Can AI make clinical or billing decisions?', answer: 'It should not. Dooza Crew is not a licensed physical therapist, and clinical and billing decisions stay with you. Before an agent sends an email or clicks Send, Submit or Pay, it asks you to Approve, Edit or Reject. Check the notes an AI scribe writes and the claims you submit yourself.' },
        { question: 'Is there a free AI tool for physical therapists?', answer: 'Heidi has a free plan with unlimited transcription, and Fathom has a free forever plan for video-call notes. Jane\'s AI Scribe gives 5 free notes, Goodcall lets you test a free demo agent, Freed has a 7-day free trial with no credit card, and Dooza Crew is $5 to start.' },
    ],
    content: `<p><em>Checked October 26, 2026. Prices were read on each vendor's own pricing page. WebPT and SPRY do not publish a price, and we say so. Prices change: re-check before you buy. Dooza Crew is our product and our top pick for the front desk; we say why, and where the others fit better. We are not clinicians or lawyers: ask any vendor that touches patient information whether it will sign a business associate agreement before you use it.</em></p>

<h2 id="short-answer">Best AI tools for physical therapists: the short answer</h2>
<p><strong>Our top pick for a small PT clinic's front desk is Dooza Crew: AI employees that answer calls, draft follow-ups and chase the admin nobody has time for, $5 to start, and they ask before they send anything. For SOAP notes, compare an AI scribe: Freed, Jane's AI Scribe or Heidi, or the AI inside WebPT or SPRY if you are choosing an EMR. For a stand-alone phone line, Goodcall.</strong></p>

<h2 id="adoption">What we could not find on physical therapist AI adoption</h2>
<p>We looked for a US survey of physical therapists on AI use and did not find results. What exists is a survey in progress: the American Physical Therapy Association describes ${src('https://www.aptapelvichealth.org/info/participate-in-aptas-national-survey-on-ai-in-physical-therapy', 'the "first nationally representative survey on the use and impact of AI in physical therapy"')} and says ${src('https://www.aptapelvichealth.org/info/participate-in-aptas-national-survey-on-ai-in-physical-therapy', '"The survey closes August 1, 2026"')}. We found no published results, so we quote no adoption percentage.</p>
<p>What the vendors say is clear enough: documentation is where the AI money is going. SPRY describes itself as an ${src('https://www.sprypt.com', '"AI-native rehab platform for documentation, scheduling, billing, and RCM."')} WebPT calls its toolset ${src('https://www.webpt.com/pricing', '"AI Documentation Tools"')}. Both are vendor claims, not results.</p>
<p>The practical split for a small clinic is three jobs: notes after each visit, the phone while you are with a patient, and admin in the evening (reminders, intake forms, follow-ups, review replies). The tools below cover those.</p>

<h2 id="comparison">AI tools for physical therapists compared</h2>
<table><thead><tr><th>Tool</th><th>What the AI does</th><th>Price (vendor page, Oct 26)</th><th>Free option</th></tr></thead><tbody>
<tr><td>Dooza Crew (ours, top pick)</td><td>AI employees that answer calls, draft emails and follow-ups, fill forms</td><td>Start for $5</td><td>$5 to start</td></tr>
<tr><td>WebPT</td><td>EMR with AI documentation tools, coding guidance and chatbot</td><td>Not published (book a demo)</td><td>Demo only</td></tr>
<tr><td>SPRY</td><td>AI-native EMR; AI Scribe on Plus plan; Fax AI add-on</td><td>Not published (book a demo)</td><td>Demo only</td></tr>
<tr><td>Jane</td><td>AI Scribe add-on for notes</td><td>"$15 /month per opted-in practitioner" on top of the plan</td><td>5 free notes; no free trial</td></tr>
<tr><td>Heidi</td><td>AI scribe for clinicians</td><td>Free plan; paid prices not shown in the page text we read</td><td>Free plan; 14 days free</td></tr>
<tr><td>Freed</td><td>AI scribe that pushes notes to browser-based EHRs</td><td>"Affordable plans starting at $39/mo"</td><td>7-day trial, no card</td></tr>
<tr><td>Goodcall</td><td>AI phone answering</td><td>$79, $129 or $299 a month</td><td>Free demo agent</td></tr>
<tr><td>Smith.ai</td><td>Call answering, AI-first or human</td><td>$300/mo for 30 calls; $810 for 90; $2,100 for 300</td><td>30-day money-back guarantee</td></tr>
<tr><td>Fathom</td><td>AI notes for video calls</td><td>Free forever; Team from $15/user/mo</td><td>Free forever plan</td></tr>
</tbody></table>

<h2 id="tools">The tools, one by one</h2>

<h3 id="dooza-crew">1. Dooza Crew (our product, top pick): AI employees for the front desk</h3>
<p>A small PT clinic loses time in the gaps: the phone rings while you are on the treatment floor, the intake paperwork sits in an inbox, the patient who skipped their plan of care visits never gets a nudge. Crew gives your company AI employees, each with its own computer and browser and its own job. They work around the clock, work with your team in one chat, and pass work to each other. Before one sends an email or clicks Send, Submit or Pay, it asks you to Approve, Edit or Reject.</p>
<p>Example jobs you could give it: you could give one agent the job of answering the phone and taking a message for every new-patient or appointment enquiry; another the job of drafting a friendly check-in email to patients who missed their last visit, for you to approve; another the job of filling a fillable PDF or Word intake form you upload with the details a new patient sent; another the job of drafting replies to online reviews for you to edit. Crew works in web-based tools you log in to with a browser, and you type passwords and 2FA codes yourself.</p>
<ul>
<li><strong>Forms:</strong> it fills fillable PDF, Word and Excel files you upload. Scanned PDFs without form fields cannot be filled.</li>
<li><strong>Phones:</strong> Crew agents take phone calls too, included in the plan.</li>
<li><strong>Price:</strong> start for $5. At the cap it pauses and tells you.</li>
<li><strong>Watch for:</strong> no PT EMR (such as WebPT or Jane) is certified or integrated with it, so it does not sync with your EMR; it works only in web tools you log in to. It is not a licensed physical therapist, and clinical and billing decisions stay with you.</li>
</ul>
<p><a href="${CREW}">Start Dooza Crew for $5</a>.</p>

<h3 id="webpt">2. WebPT: an EMR with AI documentation tools</h3>
<p>WebPT is a rehab-therapy EMR and practice platform. Its pricing page lists ${src('https://www.webpt.com/pricing', '"AI Documentation Tools"')}: ${src('https://www.webpt.com/pricing', '"Auto-generate notes, get coding guidance, and access a HIPAA-compliant chatbot."')} It sells Starter, Enhanced and Ultimate plans.</p>
<ul>
<li><strong>Price:</strong> not published. The page says pricing is based on your plan and customization and ${src('https://www.webpt.com/pricing', '"You can set pricing up as per provider per month or per visit."')} No dollar figure is shown.</li>
<li><strong>Free trial:</strong> none stated; you book a demo.</li>
<li><strong>Watch for:</strong> no public price, and it is a whole platform, not an add-on.</li>
</ul>

<h3 id="spry">3. SPRY: an AI-native rehab EMR</h3>
<p>SPRY calls itself an ${src('https://www.sprypt.com', '"AI-native rehab platform for documentation, scheduling, billing, and RCM."')} On its Plus plan the page lists ${src('https://www.sprypt.com/pricing', '"AI Scribe: Scribe offers auto transcription of dictation or text into SOAP notes within a few minutes."')} An add-on, Fax AI, ${src('https://www.sprypt.com/pricing', '"automatically reads and files POC, referrals etc."')}</p>
<ul>
<li><strong>Price:</strong> not published. The page says it is ${src('https://www.sprypt.com/pricing', '"Based on number of visits per full-time provider"')}, with pro-rata pricing for part-time providers.</li>
<li><strong>Free trial:</strong> none stated; you book a demo.</li>
<li><strong>Watch for:</strong> the AI Scribe sits on the Plus plan, and there is no public price.</li>
</ul>

<h3 id="jane">4. Jane: an AI Scribe add-on for a popular clinic system</h3>
<p>Jane is practice software for health clinics, and the AI Scribe is an add-on. Its page says: ${src('https://jane.app/pricing', '"AI Scribe $15 /month per opted-in practitioner for unlimited notes, or try it free with 5 notes."')}</p>
<ul>
<li><strong>Price:</strong> ${src('https://jane.app/pricing', '"$15 /month per opted-in practitioner"')} for the scribe. Plans shown to us were in Canadian dollars (CAD $59, CAD $79, CAD $99 a month), so US prices may display differently.</li>
<li><strong>Free trial:</strong> ${src('https://jane.app/pricing', '"We do not have a free trial"')}; you can test with 5 free notes and a demo account.</li>
<li><strong>Watch for:</strong> the page is for health practices in general, not PT only, and the scribe is on top of the plan price.</li>
</ul>

<h3 id="heidi">5. Heidi: a free AI scribe for clinicians</h3>
<p>Heidi is a general clinician scribe. Its free plan lists ${src('https://www.heidihealth.com/pricing', '"Unlimited transcription"')}, and the Clinician plan says ${src('https://www.heidihealth.com/pricing', '"Try 14 days free"')}.</p>
<ul>
<li><strong>Price:</strong> a free plan; the paid dollar prices were not in the page text we read (the larger plan says "Talk to us").</li>
<li><strong>Free trial:</strong> 14 days on the Clinician plan.</li>
<li><strong>Watch for:</strong> not PT-specific, and we could not confirm the paid price.</li>
</ul>

<h3 id="freed">6. Freed: an AI scribe that pushes notes to browser-based EHRs</h3>
<p>Freed lists ${src('https://www.getfreed.ai/pricing', '"Seamless push to top browser-based EHRs"')} and ${src('https://www.getfreed.ai/pricing', '"Specialty-specific templates"')}. It has a front-desk product too, from ${src('https://www.getfreed.ai/pricing', '"$149/mo"')}, but we only checked the scribe.</p>
<ul>
<li><strong>Price:</strong> ${src('https://www.getfreed.ai/pricing', '"Affordable plans starting at $39/mo"')}. The Starter plan is up to 40 notes a month. The page shows two figures for Starter ($59 and $39) without labeling which is monthly or annual, so budget from $39.</li>
<li><strong>Free trial:</strong> ${src('https://www.getfreed.ai/pricing', '"7-day free trial"')}, and the page says no credit card is needed.</li>
<li><strong>Watch for:</strong> the 40-note cap on the entry plan, and unclear annual versus monthly pricing.</li>
</ul>

<h3 id="goodcall">7. Goodcall: AI phone answering with a free demo agent</h3>
<p>Goodcall builds an AI agent for your business line. Its pricing page says ${src('https://www.goodcall.com/pricing', '"Start free with a demo agent. Add a number when you\'re ready."')}</p>
<ul>
<li><strong>Price:</strong> Starter $79 a month (100 unique customers a month, then 79¢ each), Growth $129 and Scale $299 a month. It says ${src('https://www.goodcall.com/pricing', '"We never meter minutes."')}</li>
<li><strong>Free trial:</strong> a free demo agent; you pay when you connect a number.</li>
<li><strong>Watch for:</strong> billing is per unique caller, it is not connected to PT software, and callers may share health details, so ask how recordings and transcripts are handled.</li>
</ul>

<h3 id="smith-ai">8. Smith.ai: call answering with real people, AI-first or hybrid</h3>
<p>Smith.ai sells ${src('https://smith.ai/pricing', '"Professional call answering by real people"')} around the clock.</p>
<ul>
<li><strong>Price:</strong> Starter ${src('https://smith.ai/pricing', '"30 calls $300 / month"')} (overage $11.50 a call over 30); 90 calls $810 a month; 300 calls $2,100 a month.</li>
<li><strong>Free trial:</strong> none; ${src('https://smith.ai/pricing', '"All plans include a 30-day money-back guarantee"')}.</li>
<li><strong>Watch for:</strong> priced per call and far above AI-only tools.</li>
</ul>

<h3 id="fathom">9. Fathom: free AI notes for video calls</h3>
<p>Fathom records and summarizes video calls. Its free plan has ${src('https://fathom.ai/pricing', '"Unlimited recordings, instant call summaries, integrations with LLMs & more."')} Useful for staff meetings, vendor reviews and telehealth sessions you hold on video, if your own compliance rules allow it.</p>
<ul>
<li><strong>Price:</strong> ${src('https://fathom.ai/pricing', '"Free forever."')} Team shows $19 and $15 per user per month (the page does not label which is annual), with a 2-user minimum, so budget from $15.</li>
<li><strong>Free trial:</strong> paid plans have a free trial and a 90-day guarantee.</li>
<li><strong>Watch for:</strong> video calls only: not for treatment-room notes and not for the phone line.</li>
</ul>

<h2 id="free">Free AI tools and trials for physical therapists</h2>
<ul>
<li><strong>Notes:</strong> Heidi's free plan; Jane's 5 free AI Scribe notes.</li>
<li><strong>Call notes:</strong> Fathom's free forever plan.</li>
<li><strong>AI phone line:</strong> Goodcall's free demo agent, until you connect a number.</li>
<li><strong>Trials:</strong> Freed 7 days (no card), Heidi's Clinician plan 14 days, Dooza Crew $5 to start.</li>
</ul>

<h2 id="how-to-choose">How to choose an AI tool for your clinic</h2>
<ol>
<li><strong>Start with the biggest time sink.</strong> Documentation after hours, missed calls, or admin. Pick the one that costs you the most evenings.</li>
<li><strong>Check your EMR first.</strong> If you already pay for WebPT or Jane, ask what AI is built in before buying a second tool. Dooza Crew and the phone tools do not integrate with them.</li>
<li><strong>Count practitioners and callers.</strong> Jane's scribe is priced per practitioner, Goodcall per unique caller; Dooza Crew is a flat monthly price for the whole organization.</li>
<li><strong>Protect patient information.</strong> Ask any vendor that touches patient details whether it will sign a business associate agreement, and read how it stores recordings.</li>
<li><strong>Keep sign-off human.</strong> Read every AI-written note before it is saved, pick tools that ask before they send, and keep clinical and billing decisions with you.</li>
<li><strong>Test on one workflow for a couple of weeks</strong> before you route every call or note through a bot.</li>
</ol>
<p>Comparing phone answering alone? See the <a href="/blog/best-ai-receptionist">best AI receptionists</a>.</p>`,
};
