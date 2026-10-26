// Best AI tools for nonprofits (October 2026): for small nonprofits and charities comparing AI tools.
// Targets: "best ai tools for nonprofits", "ai for small nonprofits", "ai grant writing tools", "free ai tools for charities", "ai fundraising tools".
// Facts: content/drafts/industry-tools/best-ai-tools-for-nonprofits-facts.md (vendor pages and surveys read Oct 26, 2026).
// Dooza Crew claims only as in BRIEF.md (verified crew.dooza.ai / dooza.ai). No Dooza nonprofit page exists.

import { src } from './helpers';

const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=best-ai-tools-for-nonprofits';

export default {
    id: 491,
    title: 'Best AI Tools for Nonprofits in 2026: 10 Tools With Real Prices',
    seoTitle: 'Best AI Tools for Nonprofits (2026)',
    seoDescription: 'The best AI tools for nonprofits in 2026: Dooza Crew, Instrumentl, Grantable, Givebutter, Bloomerang, Fundraise Up, Claude, Google and more. Prices checked Oct 26.',
    excerpt: 'Ten AI tools a small nonprofit can use in 2026, from grant research and donor CRMs to meeting notes and AI employees, with prices read on each vendor page, who each fits, and one honest limit for each.',
    author: 'Dooza Team',
    date: '2026-10-26',
    modifiedDate: '2026-10-26',
    readTime: '9 min read',
    readTimeMinutes: 9,
    category: 'Comparison',
    tags: ['Nonprofits', 'Charities', 'Grant Writing', 'Fundraising', 'Donor CRM', 'AI Tools', 'Dooza Crew'],
    image: '/blog/best-ai-tools-for-nonprofits.png',
    imageAlt: 'Watercolor illustration of nonprofit volunteers packing donation boxes in a small office, with a laptop showing a donor list in the foreground',
    slug: 'best-ai-tools-for-nonprofits',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'adoption', label: 'How many nonprofits use AI' },
        { id: 'comparison', label: 'Comparison table' },
        { id: 'tools', label: 'The tools, one by one' },
        { id: 'free', label: 'Free AI tools and trials' },
        { id: 'how-to-choose', label: 'How to choose' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'What is the best AI tool for a small nonprofit?', answer: 'For a small nonprofit with a short staff list, our top pick is Dooza Crew (our product): AI employees for the office work that piles up, such as drafting thank-you and follow-up emails, answering the phone and filling forms, each with its own computer and browser, free to try. It asks before it sends anything. For grants, look at Instrumentl or Grantable; for fundraising pages, Givebutter; for a donor CRM, Bloomerang.' },
        { question: 'How many nonprofits use AI?', answer: 'Most, by two 2026 surveys. Virtuous, a fundraising software vendor, says in its 2026 Nonprofit AI Adoption Report, a benchmark study of 346 organizations, that 92% of nonprofits have adopted AI and only 7% say it has actually expanded what their team can accomplish. NTEN and The Bridgespan Group, as reported by Nonprofit Quarterly, found that of 917 respondents 98 percent reported using AI in some capacity and 61 percent use AI in an official capacity.' },
        { question: 'Is there a free AI tool for nonprofits?', answer: 'Several have free options. Grantable has a Free plan (5 chat messages a day), Givebutter has a Free forever plan at $0 a month, Fathom has a free forever plan for meeting notes, and Google for Nonprofits provides Google Workspace for Nonprofits at no charge to eligible, verified organizations. Anthropic offers nonprofits a discount of up to 75% on Claude Team and Enterprise plans. Dooza Crew is free to try (no card needed).' },
        { question: 'Can AI write grant applications?', answer: 'It can draft them. Instrumentl\'s Pre-Award plan ($499 a month) adds AI drafting from your past content, and Grantable is built around writing in your voice. A draft is not a submission: you check every fact, number and funder requirement, and a person signs. Dooza Crew is not a grant writer or a fundraising compliance advisor; it can draft emails and fill fillable forms you upload, and it asks you to Approve, Edit or Reject before it sends.' },
        { question: 'Is it safe to put donor data into AI tools?', answer: 'Not by default. Virtuous reports that 47% of nonprofits have zero AI policy, so write one first: which tools, which data, who approves. With Dooza Crew, you type passwords and 2FA codes yourself, and nothing is sent until you approve it, but donor data and grant decisions stay with you, and no donor software is certified or integrated with it.' },
        { question: 'Do AI employees answer the phone for a nonprofit?', answer: 'Yes, two ways. Dooza Crew agents take phone calls too, included in your Crew plan. Smith.ai answers calls from $300 a month for 30 calls, which can be a lot for a small charity. Either way, decide in advance what the caller is told and when it goes to a person.' },
    ],
    content: `<p><em>Checked October 26, 2026. Prices were read on each vendor's own pricing page. Some nonprofit tools (Virtuous, Neon One, Canva for Nonprofits) block automated reads, and Fundraise Up and Bloomerang do not publish full prices; we say so. Prices change: re-check before you buy. Dooza Crew is our product and our top pick for small nonprofits; we say why, and where the others fit better.</em></p>

<h2 id="short-answer">Best AI tools for nonprofits: the short answer</h2>
<p><strong>Our top pick for a small nonprofit is Dooza Crew: AI employees that draft donor follow-ups, answer calls and fill the forms nobody has time for, free to try, and it asks before it sends anything. For grants, look at Instrumentl or Grantable. For online giving, Givebutter or Fundraise Up. For a donor CRM, Bloomerang. For a general AI assistant, Claude (discounted for nonprofits) or Google for Nonprofits. For meeting notes, Fathom has a free plan.</strong></p>

<h2 id="adoption">How many nonprofits use AI in 2026</h2>
<p>Almost all of them, in some form. Virtuous, a fundraising software company, published ${src('https://virtuous.org/resource/the-2026-nonprofit-ai-adoption-report/', '"a benchmark study of 346 organizations"')} and put it plainly: ${src('https://virtuous.org/resource/the-2026-nonprofit-ai-adoption-report/', '"92% of nonprofits have adopted AI. Only 7% say it\'s actually expanded what their team can accomplish."')}</p>
<p>A second survey, from NTEN and The Bridgespan Group, was reported by Nonprofit Quarterly: ${src('https://nonprofitquarterly.org/how-nonprofits-adopt-and-govern-ai-insights-from-a-new-report/', '"of the 917 respondents, 98 percent reported using AI in some capacity. And 61 percent use AI in an official capacity"')}.</p>
<p>Read the gap between those numbers as the real story: using AI is common, getting results is not. The nonprofits that benefit are the ones that give AI a clear, repetitive job. Virtuous sells software to this market, so treat its figures as one vendor's survey.</p>

<h2 id="comparison">AI tools for nonprofits compared</h2>
<table><thead><tr><th>Tool</th><th>What the AI does</th><th>Price (vendor page, Oct 26)</th><th>Free option</th></tr></thead><tbody>
<tr><td>Dooza Crew (ours, top pick)</td><td>AI employees that draft emails, answer calls, fill forms, work in web tools</td><td>Free to try</td><td>7 days free (no card needed)</td></tr>
<tr><td>Instrumentl</td><td>Grant matching, tracking and AI drafting</td><td>Discover $299/mo; Pre-Award $499/mo (annual upfront)</td><td>14 days free</td></tr>
<tr><td>Grantable</td><td>AI grant writing and funder search</td><td>Free; Starter $50/mo; Pro $150/mo</td><td>Free plan</td></tr>
<tr><td>Givebutter</td><td>Fundraising platform with Givebutter Magic AI</td><td>Free forever $0; Plus from $29/mo</td><td>Free plan; Plus 30 days</td></tr>
<tr><td>Bloomerang</td><td>Donor CRM with Prospect AI and an AI writing assistant</td><td>CRM from $125/mo, billed annually</td><td>Not stated</td></tr>
<tr><td>Fundraise Up</td><td>AI-driven donation pages</td><td>$0 upfront; effective cost around 1% on average (vendor claim)</td><td>None stated</td></tr>
<tr><td>Claude for Nonprofits</td><td>General AI assistant for writing and analysis</td><td>Up to 75% discount on Team and Enterprise</td><td>None stated</td></tr>
<tr><td>Google for Nonprofits</td><td>Workspace for Nonprofits with AI tools</td><td>Workspace for Nonprofits at no charge (if eligible)</td><td>Free for eligible orgs</td></tr>
<tr><td>Fathom</td><td>AI notes and summaries for video calls</td><td>Premium from $16/user/mo</td><td>Free forever plan</td></tr>
<tr><td>Smith.ai</td><td>Call answering and intake</td><td>Starter $300/month for 30 calls</td><td>No trial; 30-day money-back guarantee</td></tr>
</tbody></table>

<h2 id="tools">The tools, one by one</h2>

<h3 id="dooza-crew">1. Dooza Crew (our product, top pick): AI employees for the nonprofit office</h3>
<p>Small nonprofits run on two or three people who also do the books, the newsletter, the volunteer schedule and the phone. Crew gives your organization AI employees, each with its own computer and browser and its own job. They work around the clock, work with your team in one chat, and pass work to each other. Before one sends an email or clicks Send, Submit or Pay, it asks you to Approve, Edit or Reject.</p>
<p>Example jobs you could give it: you could give one agent the job of drafting a warm thank-you email for every new donation for you to approve; another the job of answering the phone and taking a message for the volunteer line; another the job of filling a fillable PDF, Word or Excel form you upload, such as a volunteer sign-up sheet or a grant budget template. Crew works in web-based tools you log in to with a browser, and you type passwords and 2FA codes yourself.</p>
<ul>
<li><strong>Forms:</strong> it fills fillable PDF, Word and Excel files you upload. Scanned PDFs without form fields cannot be filled.</li>
<li><strong>Phones:</strong> Crew agents take phone calls too, included in the plan.</li>
<li><strong>Price:</strong> free to try (no card needed). At the cap it pauses and tells you.</li>
<li><strong>Watch for:</strong> no donor, grant or accounting software is certified or integrated with it, so it does not sync with your donor database; it works only in web tools you log in to. It is not a fundraising compliance advisor or an accountant: donor data and grant decisions stay with you.</li>
</ul>
<p><a href="${CREW}">Try Dooza Crew free</a>.</p>

<h3 id="instrumentl">2. Instrumentl: grant discovery, tracking and AI drafting</h3>
<p>Instrumentl finds grants and keeps your deadlines in one place. Its prospecting assistant is listed as ${src('https://www.instrumentl.com/pricing', '"Prospecting assistant (AI-matched opportunities) BETA"')} and included in every plan. The Pre-Award plan adds ${src('https://www.instrumentl.com/pricing', '"Use AI + your past content to write faster with Apply"')}.</p>
<ul>
<li><strong>Price:</strong> Discover ${src('https://www.instrumentl.com/pricing', '"$299 /month"')} paid upfront annually (or $349 paid monthly), up to 3 users; Pre-Award ${src('https://www.instrumentl.com/pricing', '"$499 /month"')} (or $579 paid monthly); Full Lifecycle $999 /month; Enterprise is contact us.</li>
<li><strong>Free trial:</strong> ${src('https://www.instrumentl.com/pricing', '"Try 14 days free"')}.</li>
<li><strong>Watch for:</strong> it is priced for organizations with a grants practice, and AI drafting starts at the $499 tier.</li>
</ul>

<h3 id="grantable">3. Grantable: AI grant writing with a free plan</h3>
<p>Grantable describes itself as ${src('https://grantable.co/pricing', '"Find funders, write stronger proposals, and manage everything in one place."')} Its pricing page opens with ${src('https://grantable.co/pricing', '"Plans from $0, No Per-Seat Fees"')}.</p>
<ul>
<li><strong>Price:</strong> a Free plan with 5 chat messages a day; Starter ${src('https://grantable.co/pricing', '"$50 /month"')}; Pro ${src('https://grantable.co/pricing', '"$150 /month"')}.</li>
<li><strong>Free trial:</strong> none mentioned; the Free plan serves that role.</li>
<li><strong>Watch for:</strong> usage is capped by chat messages a day (5 on Free, 50 on Starter, 200 on Pro), and every draft still needs your facts and edits.</li>
</ul>

<h3 id="givebutter">4. Givebutter: free fundraising tools with built-in AI</h3>
<p>Givebutter covers donation forms, events, auctions and payments. Its site announces ${src('https://givebutter.com/pricing', '"Meet Givebutter Magic"')}, described as AI tools designed to help nonprofits get further, faster, with built-in AI for campaigns, goals and donor insights.</p>
<ul>
<li><strong>Price:</strong> Free forever ${src('https://givebutter.com/pricing', '"$0/month"')}; Givebutter Plus ${src('https://givebutter.com/pricing', '"Starting at $29/month"')}. Fees: 0% platform fees when donor tips are on; ${src('https://givebutter.com/pricing', '"If you disable tips, a flat 3% platform fee applies."')}</li>
<li><strong>Free trial:</strong> Plus can be tested ${src('https://givebutter.com/pricing', '"commitment-free for 30 days"')}.</li>
<li><strong>Watch for:</strong> the free tools rely on optional donor tips, and the page does not say which plan includes which AI feature or what Magic costs.</li>
</ul>

<h3 id="bloomerang">5. Bloomerang: donor CRM with AI add-ons</h3>
<p>Bloomerang is a donor database. Its page lists ${src('https://bloomerang.com/pricing/', '"Prospect AI"')}, predictive donor insights, an AI writing assistant on the fundraising product and AI-powered scheduling in the volunteer product.</p>
<ul>
<li><strong>Price:</strong> Bloomerang CRM ${src('https://bloomerang.com/pricing/', '"Starting at: $125 /month, billed annually"')}; Volunteer starts at $119 /month, billed annually; Fundraising starts at $40 /month and must be bought as part of a bundle with the CRM. The page offers personalized pricing.</li>
<li><strong>Free trial:</strong> not stated.</li>
<li><strong>Watch for:</strong> these are starting prices, so expect a quote, and the page gives little detail on what each AI feature does.</li>
</ul>

<h3 id="fundraise-up">6. Fundraise Up: AI-driven donation pages</h3>
<p>Fundraise Up calls itself ${src('https://www.fundraiseup.com/pricing/', '"The AI fundraising platform trusted by the world\'s leading nonprofits"')}. It focuses on the donation page and checkout.</p>
<ul>
<li><strong>Price:</strong> ${src('https://www.fundraiseup.com/pricing/', '"$0 upfront, no setup fees or long-term contracts, and fee coverage that helps nonprofits see an effective Fundraise Up cost of around 1% on average."')}</li>
<li><strong>Free trial:</strong> none stated.</li>
<li><strong>Watch for:</strong> no plan list, the 1% is the vendor's own average, and its case studies are large charities such as UNICEF USA and the Canadian Red Cross, so ask what a small organization pays.</li>
</ul>

<h3 id="claude">7. Claude for Nonprofits: a discounted general AI assistant</h3>
<p>Anthropic's program packages ${src('https://www.anthropic.com/news/claude-for-nonprofits', '"discounted access of up to 75% to Claude, connectors to new nonprofit tools—Blackbaud, Candid, and Benevity—and a free course, AI Fluency for Nonprofits"')}. It is a general assistant for drafting, summarizing and analysis, not a fundraising system.</p>
<ul>
<li><strong>Price:</strong> ${src('https://www.anthropic.com/news/claude-for-nonprofits', '"Nonprofits are now eligible for a discount of up to 75% on Team and Enterprise plans."')} The page gives no dollar figure.</li>
<li><strong>Free trial:</strong> none stated.</li>
<li><strong>Watch for:</strong> the discount is "up to", eligibility and final prices are not on that page (announced December 2, 2025), and you decide what donor data goes in.</li>
</ul>

<h3 id="google">8. Google for Nonprofits: Workspace and Gemini</h3>
<p>Google's nonprofit page promises ${src('https://www.google.com/nonprofits/', '"AI-powered collaboration for nonprofits of all sizes"')}. It says Google for Nonprofits provides ${src('https://www.google.com/nonprofits/', '"Google Workspace for Nonprofits"')} at no charge, plus nonprofit-specific discounts on higher Workspace editions.</p>
<ul>
<li><strong>Price:</strong> Workspace for Nonprofits ${src('https://www.google.com/nonprofits/', '"at no charge"')}; no price for Gemini is stated on the page.</li>
<li><strong>Free trial:</strong> not applicable.</li>
<li><strong>Watch for:</strong> your organization must be a registered charity verified through Goodstack, and hospitals, schools and government entities are not eligible.</li>
</ul>

<h3 id="fathom">9. Fathom: free AI notes for board and donor calls</h3>
<p>Fathom records and transcribes video calls with ${src('https://fathom.ai/pricing', '"Instant AI call summaries"')}. Useful for board meetings, donor calls and volunteer orientations held on video.</p>
<ul>
<li><strong>Price:</strong> ${src('https://fathom.ai/pricing', '"Free forever"')} plan; Premium shows $20 and $16 per user per month (the page does not label which is annual), so budget from $16.</li>
<li><strong>Watch for:</strong> it covers video meetings, not phone calls, and it does not put notes into your donor database.</li>
</ul>

<h3 id="smith-ai">10. Smith.ai: call answering and intake</h3>
<p>Smith.ai answers calls and takes messages and intake for small businesses. It is not nonprofit-specific.</p>
<ul>
<li><strong>Price:</strong> Starter ${src('https://smith.ai/pricing', '"$300 / month"')} for 30 calls; Basic ${src('https://smith.ai/pricing', '"$810 / month"')} for 90 calls.</li>
<li><strong>Free trial:</strong> none; ${src('https://smith.ai/pricing', '"All plans include a 30-day money-back guarantee."')}</li>
<li><strong>Watch for:</strong> it is priced per call, which is steep for a small charity with a quiet phone.</li>
</ul>

<h2 id="free">Free AI tools and trials for nonprofits</h2>
<ul>
<li><strong>Grants:</strong> Grantable's Free plan; Instrumentl 14 days free.</li>
<li><strong>Fundraising:</strong> Givebutter's Free forever plan; Plus 30 days commitment-free.</li>
<li><strong>Office:</strong> Google Workspace for Nonprofits at no charge if you are eligible; Fathom's free forever plan.</li>
<li><strong>AI employees:</strong> Dooza Crew free to try (no card needed).</li>
</ul>

<h2 id="how-to-choose">How to choose an AI tool for your nonprofit</h2>
<ol>
<li><strong>Start with the task that eats your week.</strong> Grant research, donor thank-yous, calls, or paperwork. Pick one.</li>
<li><strong>Check your CRM first.</strong> If you already pay for Bloomerang or a similar CRM, ask what AI is built in before buying a second tool. Dooza Crew and the note tools do not integrate with donor software.</li>
<li><strong>Write a one-page AI policy.</strong> The Virtuous survey reports that 47% of nonprofits have zero AI policy. Say which tools may see donor data.</li>
<li><strong>Keep sign-off human.</strong> Pick tools that ask before they send, and keep donor data, grant submissions and compliance decisions with you.</li>
<li><strong>Test on one job for a week</strong> before you move the whole workflow.</li>
</ol>
<p>Comparing phone answering alone? See the <a href="/blog/best-ai-receptionist">best AI receptionists</a>.</p>`,
};
