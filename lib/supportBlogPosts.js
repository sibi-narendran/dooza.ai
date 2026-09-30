// Customer-support SEO campaign posts (September 2026). Keyword research and
// sources are noted per post. Pillar pages live in lib/supportGuides/.

const src = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const video = (id, title, channel) => `
<figure>
<div style="position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#0f172a">
<iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${title}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<figcaption>Video: “${title}” by ${channel} on YouTube.</figcaption>
</figure>`;

const supportCta = `
<h2 id="dooza">Where Dooza fits</h2>
<p>Dooza is an AI-native company that builds AI products and services for small businesses. <a href="/customer-support-automation-agency">Dooza AI customer support</a> is a managed service: Dooza AI drafts every reply from your policies, products and past answers, a Dooza specialist checks anything the AI is unsure about, and refunds, complaints and anything sensitive come to you for one-tap approval. It works inside Gmail, Shopify Inbox or Gorgias and goes live in 48 hours.</p>
<p>Send us 20 real customer messages and we answer them in your voice before you decide anything. <a href="/customer-support-automation-agency">Get your free 20-message sample</a>.</p>`;

// "gorgias pricing" 210/mo + "gorgias price" 210/mo, KD 22 (DataForSEO, US, 2026-09-30).
const gorgiasPricingPost = {
    id: 230,
    title: 'Gorgias Pricing 2026: Plans, Overages, AI Fees and What You Will Really Pay',
    seoTitle: 'Gorgias Pricing 2026: Plans, AI Fees & Real Costs',
    seoDescription: 'Gorgias pricing explained for 2026: every plan, ticket overages, AI Agent fees, how billable tickets are counted, worked cost examples, and when a cheaper plan or alternative makes sense.',
    excerpt: 'Gorgias charges by ticket, not by seat, and AI Agent interactions are billed on top. Here are the 2026 plans, the overage math, worked examples at 250 to 3,500 tickets a month, and how to keep the bill down.',
    author: 'Sibi Narendran',
    date: '2026-09-30',
    modifiedDate: '2026-09-30',
    readTime: '9 min read',
    readTimeMinutes: 9,
    category: 'Comparison',
    tags: ['Gorgias', 'Gorgias Pricing', 'Helpdesk Pricing', 'Shopify Customer Support', 'AI Customer Support'],
    image: '/blog/gorgias-pricing.png',
    imageAlt: 'Watercolor illustration of a price tag on a stack of support tickets with a calculator, representing Gorgias helpdesk pricing',
    slug: 'gorgias-pricing',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'plans', label: 'Gorgias plans' },
        { id: 'billable', label: 'What counts as a ticket' },
        { id: 'ai-fees', label: 'AI Agent fees' },
        { id: 'examples', label: 'Worked examples' },
        { id: 'break-even', label: 'Which plan is cheapest' },
        { id: 'hidden', label: 'Hidden costs' },
        { id: 'save', label: 'How to lower the bill' },
        { id: 'alternatives', label: 'Alternatives' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated September 30, 2026. Prices from <a href="https://www.gorgias.com/pricing" target="_blank" rel="noopener noreferrer">gorgias.com/pricing</a> and the <a href="https://helpcenter.gorgias.com/en-US/how-youre-billed-for-using-gorgias-199385" target="_blank" rel="noopener noreferrer">Gorgias billing help center</a>.</em></p>
<h2 id="short-answer">How much does Gorgias cost?</h2>
<p><strong>Gorgias costs $10 to $900 a month on its public plans, priced by how many billable tickets you handle, not how many agents you have.</strong> Starter is $10/month for 50 tickets, Basic $60/month ($50 billed annually) for 300, Pro $360/month ($300 annually) for 2,000, and Advanced $900/month ($750 annually) for 5,000. Enterprise is custom. Extra tickets cost $0.36–0.40 each.</p>
<p>AI Agent is billed on top: each plan includes a small allowance of automated interactions, Gorgias lists AI Agent at $0.90 per automated interaction on annual contracts and $1.00 on monthly, and overage above the included allowance is $1.50 per interaction.</p>
<ul>
<li><strong>Cheapest real plan:</strong> Basic at $50–60/month for up to 300 tickets.</li>
<li><strong>Most popular:</strong> Pro at $300–360/month for up to 2,000 tickets.</li>
<li><strong>Surprise cost:</strong> AI-resolved tickets can be billed as a ticket and as an automated interaction.</li>
<li><strong>Trial:</strong> Gorgias offers a 7-day trial with access to all features.</li>
</ul>

<h2 id="plans">Gorgias plans and prices (2026)</h2>
<table><thead><tr><th>Plan</th><th>Monthly billing</th><th>Annual billing (per month)</th><th>Billable tickets included</th><th>Extra ticket</th><th>AI Agent interactions included</th></tr></thead><tbody>
<tr><td>Starter</td><td>$10</td><td>Monthly only</td><td>50</td><td>$0.40</td><td>30</td></tr>
<tr><td>Basic</td><td>$60</td><td>$50</td><td>300</td><td>$0.40</td><td>30</td></tr>
<tr><td>Pro</td><td>$360</td><td>$300</td><td>2,000</td><td>$0.36</td><td>190</td></tr>
<tr><td>Advanced</td><td>$900</td><td>$750</td><td>5,000</td><td>$0.36</td><td>530</td></tr>
<tr><td>Enterprise</td><td colspan="2">Custom</td><td>Custom</td><td>Custom</td><td>Custom</td></tr>
</tbody></table>
<p>Voice and SMS are add-ons that "scale with your call and text volume"; Gorgias does not publish their prices on the pricing page. Pro is labeled most popular.</p>

<h2 id="billable">What counts as a billable ticket in Gorgias?</h2>
<p>Gorgias's help center says a fee applies to any ticket with at least one message sent from your helpdesk, whether sent by a human agent, the AI Agent or an automatic Rule. Inbound messages you never answer are not billed. One conversation counts once, however many replies go back and forth.</p>
<p>That has two practical effects:</p>
<ul>
<li><strong>Auto-replies count.</strong> A Rule that sends "we got your message" makes that ticket billable.</li>
<li><strong>Busy months cost more.</strong> A delivery delay or a sale can double tickets, and every one over your plan is $0.36–0.40.</li>
</ul>

<h2 id="ai-fees">How much does Gorgias AI Agent cost?</h2>
<p>An automated interaction is a customer issue fully handled by AI Agent (or another automation feature) without a human, resolved within 72 hours without escalation. Pricing as listed in September 2026:</p>
<table><thead><tr><th>Item</th><th>Price</th></tr></thead><tbody>
<tr><td>AI Agent, annual contract</td><td>$0.90 per automated interaction</td></tr>
<tr><td>AI Agent, monthly contract</td><td>$1.00 per automated interaction</td></tr>
<tr><td>Overage above the plan's included allowance</td><td>$1.50 per interaction</td></tr>
<tr><td>Included per month</td><td>30 (Starter, Basic), 190 (Pro), 530 (Advanced)</td></tr>
</tbody></table>
<p>The help center is explicit that an automation fee and a ticket fee may both apply to the same ticket when it is resolved entirely by AI Agent. Gorgias's pricing page also notes that each automated interaction counts as a helpdesk ticket. Budget for both. For a feature review, read <a href="/blog/gorgias-ai">our Gorgias AI Agent review</a>.</p>
${video('tKO2bEPnBhc', 'Gorgias AI Agent Pricing: The Real Cost', 'My AskAI')}

<h2 id="examples">Gorgias pricing examples</h2>
<p>Monthly billing, list prices, before Voice/SMS and apps. AI figures show a range because interactions beyond the allowance are listed at $1.00–1.50 depending on contract; confirm your rate with Gorgias.</p>
<table><thead><tr><th>Store</th><th>Plan</th><th>Helpdesk cost</th><th>AI cost</th><th>Total per month</th></tr></thead><tbody>
<tr><td>250 tickets, no AI</td><td>Basic</td><td>$60</td><td>$0</td><td><strong>$60</strong></td></tr>
<tr><td>450 tickets, no AI</td><td>Basic + 150 extra</td><td>$60 + $60</td><td>$0</td><td><strong>$120</strong></td></tr>
<tr><td>1,200 tickets, no AI</td><td>Pro</td><td>$360</td><td>$0</td><td><strong>$360</strong></td></tr>
<tr><td>1,800 tickets, 500 resolved by AI</td><td>Pro</td><td>$360</td><td>310 over allowance × $1.00–1.50 = $310–465</td><td><strong>$670–825</strong></td></tr>
<tr><td>3,500 tickets, 1,000 resolved by AI</td><td>Advanced</td><td>$900</td><td>470 over × $1.00–1.50 = $470–705</td><td><strong>$1,370–1,605</strong></td></tr>
</tbody></table>

<h2 id="break-even">Which Gorgias plan is cheapest for your volume?</h2>
<p>Because overages are cheap per ticket, staying on a smaller plan and paying overage is often cheaper than upgrading:</p>
<ul>
<li><strong>Basic vs Pro (monthly):</strong> Basic plus $0.40 overage stays cheaper than Pro until about <strong>1,050 tickets</strong> a month ($60 + 750 × $0.40 = $360). On annual billing the crossover is about 925 tickets.</li>
<li><strong>Pro vs Advanced (monthly):</strong> Pro plus $0.36 overage stays cheaper than Advanced until about <strong>3,500 tickets</strong> a month ($360 + 1,500 × $0.36 = $900).</li>
</ul>
<p>Upgrading still makes sense for features or a larger AI allowance, but not for ticket volume alone below those points.</p>

<h2 id="hidden">Hidden costs of Gorgias</h2>
<ul>
<li><strong>AI stacking:</strong> ticket fee plus automation fee on AI-resolved tickets.</li>
<li><strong>Rules that reply:</strong> auto-acknowledgements turn tickets billable.</li>
<li><strong>Voice and SMS:</strong> separate, volume-based add-ons.</li>
<li><strong>Apps:</strong> returns, reviews and loyalty apps you connect are billed by those vendors.</li>
<li><strong>Your team's time:</strong> building Rules, macros and AI Guidance, and reviewing what the AI sends.</li>
</ul>

<h2 id="save">How to lower your Gorgias bill</h2>
<ol>
<li><strong>Check your real volume</strong> for three months and pick the plan by the break-even points above.</li>
<li><strong>Switch to annual billing</strong> if your volume is stable: Basic drops from $60 to $50, Pro from $360 to $300, and AI Agent from $1.00 to $0.90.</li>
<li><strong>Stop Rules from sending auto-acknowledgements</strong> that make tickets billable without helping the customer.</li>
<li><strong>Close spam and newsletters without replying.</strong></li>
<li><strong>Fix the top reason for contact.</strong> If a third of tickets are "where is my order?", better shipping emails reduce volume before any AI is needed.</li>
<li><strong>Consider who answers.</strong> Some stores drop to a lower plan and let a managed service such as Dooza answer inside Gorgias.</li>
</ol>

<h2 id="alternatives">Cheaper Gorgias alternatives</h2>
<table><thead><tr><th>Tool</th><th>Pricing (Sept 2026)</th></tr></thead><tbody>
<tr><td>Richpanel</td><td>$99/seat/month, no per-ticket fees; $0.20 per AI-handled conversation</td></tr>
<tr><td>Re:amaze</td><td>$29–69 per team member/month, or $59 flat (500 conversations)</td></tr>
<tr><td>Help Scout</td><td>Free for 5 users; $25–75/user/month; AI Answers $0.75/resolution</td></tr>
<tr><td>Freshdesk</td><td>$19–89/agent/month (annual), 500 AI sessions included</td></tr>
<tr><td>Shopify Inbox</td><td>Free chat app with AI-suggested replies</td></tr>
</tbody></table>
<p>Full comparison with pros and cons: <a href="/gorgias-alternatives">8 best Gorgias alternatives</a>.</p>
${supportCta}`,
    faqData: [
        { question: 'How much does Gorgias cost per month?', answer: 'As of September 2026, Gorgias Starter is $10 per month for 50 tickets, Basic is $60 ($50 billed annually) for 300 tickets, Pro is $360 ($300 annually) for 2,000 tickets, and Advanced is $900 ($750 annually) for 5,000 tickets. Enterprise is custom-priced.' },
        { question: 'Does Gorgias charge per user?', answer: 'No. Gorgias prices by billable ticket volume rather than per agent seat. Extra tickets above your plan cost $0.36 to $0.40 each.' },
        { question: 'How much does Gorgias AI Agent cost?', answer: 'Gorgias lists AI Agent at $0.90 per automated interaction on annual contracts and $1.00 on monthly contracts, with overage above the plan allowance at $1.50. Plans include 30 (Starter, Basic), 190 (Pro) or 530 (Advanced) interactions.' },
        { question: 'What is a billable ticket in Gorgias?', answer: 'Any ticket with at least one message sent from your Gorgias helpdesk, whether by a human agent, AI Agent or an automatic Rule. Tickets you never reply to are not billed.' },
        { question: 'Are AI-resolved tickets billed twice in Gorgias?', answer: 'They can be. Gorgias\'s billing help center says an automation fee and a ticket fee may both apply to the same ticket when it is resolved entirely by AI Agent.' },
        { question: 'Is there a free Gorgias plan?', answer: 'No. Gorgias offers a 7-day trial with access to all features. The lowest paid plan is Starter at $10 per month for 50 tickets.' },
        { question: 'Is Gorgias worth it for a small Shopify store?', answer: 'Often yes at low volume, since Basic covers 300 tickets for $50 to $60 a month. Costs rise quickly with heavy AI use and busy months, so compare against alternatives priced on your real ticket volume.' },
    ],
};

// "gorgias ai" 210/mo, KD 25 (DataForSEO, US, 2026-09-30).
const gorgiasAiPost = {
    id: 231,
    title: 'Gorgias AI Agent Review (2026): Features, Pricing, Limits and Alternatives',
    seoTitle: 'Gorgias AI Agent Review 2026: Features, Cost, Limits',
    seoDescription: 'An honest 2026 review of Gorgias AI Agent: what it does for support and sales, how it is billed, where it struggles, how to set it up well, and when AI plus human review is the better choice.',
    excerpt: 'Gorgias AI Agent answers order, shipping and return questions using your Shopify data and help center, and doubles as a shopping assistant. Here is what it does well, what it costs, and where stores run into trouble.',
    author: 'Sibi Narendran',
    date: '2026-09-30',
    modifiedDate: '2026-09-30',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'Comparison',
    tags: ['Gorgias', 'Gorgias AI', 'AI Agent', 'Shopify Customer Support', 'AI Customer Support'],
    image: '/blog/gorgias-ai.png',
    imageAlt: 'Watercolor illustration of a robot hand and a human hand passing a speech bubble over an online store package',
    slug: 'gorgias-ai',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'what-it-does', label: 'What it does' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'pros-cons', label: 'Pros and cons' },
        { id: 'limits', label: 'Where it struggles' },
        { id: 'setup', label: 'Setting it up well' },
        { id: 'alternatives', label: 'Alternatives' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated September 30, 2026.</em></p>
<h2 id="short-answer">What is Gorgias AI?</h2>
<p><strong>Gorgias AI Agent is the AI built into the Gorgias ecommerce helpdesk. It answers customer questions such as "where is my order?", shipping and return questions using your Shopify data and help center, and can act as a shopping assistant that recommends products on your site.</strong> It is billed per automated interaction on top of your Gorgias plan.</p>
<ul>
<li><strong>Good at:</strong> order status, shipping and return policy questions, product questions covered by your help center.</li>
<li><strong>Cost:</strong> $0.90–1.00 per automated interaction, $1.50 above your plan's allowance, and the ticket can also count toward your ticket fee.</li>
<li><strong>Watch out for:</strong> vague policies, missing product data and upset customers, where any AI agent makes mistakes.</li>
<li><strong>Best for:</strong> stores already on Gorgias with someone who can configure and monitor it.</li>
</ul>

<h2 id="what-it-does">What does Gorgias AI Agent do?</h2>
<table><thead><tr><th>Capability</th><th>What it means</th></tr></thead><tbody>
<tr><td>Support agent</td><td>Answers post-purchase questions (order status, tracking, returns, shipping) by pulling order information from Shopify and answers from your help center.</td></tr>
<tr><td>Actions</td><td>Can be set up to handle tasks such as returns, refunds and subscription changes, within rules you define.</td></tr>
<tr><td>Shopping assistant</td><td>Chats with shoppers on your site, suggests products based on what they are viewing, and can offer discounts.</td></tr>
<tr><td>Knowledge</td><td>Learns from help center articles, brand guidelines and your store data.</td></tr>
<tr><td>Handover</td><td>Escalates to your team inside the Gorgias helpdesk when it can't resolve.</td></tr>
</tbody></table>
<p>Overview based on Gorgias's product materials and independent reviews such as ${src('https://www.eesel.ai/blog/what-is-gorgias-ai', 'eesel AI\'s Gorgias AI guide')}.</p>
${video('1vmZr3yD4yE', 'Gorgias: The Conversational AI Platform for Ecommerce', 'Gorgias')}

<h2 id="pricing">How much does Gorgias AI cost?</h2>
<p>AI Agent is billed per automated interaction: an issue fully handled by AI without a human, resolved within 72 hours without escalation. Gorgias lists $0.90 per interaction on annual contracts and $1.00 on monthly, with overage above the plan's included allowance at $1.50. Plans include 30 (Starter and Basic), 190 (Pro) or 530 (Advanced) interactions a month. The Gorgias help center says an AI-resolved ticket can incur both an automation fee and a ticket fee.</p>
<p>Example: a Pro store where AI resolves 500 conversations a month pays for 310 interactions beyond the allowance, roughly $310–465 on top of the $360 plan. Full math in our <a href="/blog/gorgias-pricing">Gorgias pricing guide</a>.</p>

<h2 id="pros-cons">Gorgias AI pros and cons</h2>
<table><thead><tr><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Native to Gorgias and Shopify, so order data is available without extra integrations</td><td>Charged per interaction on top of ticket-based plans</td></tr>
<tr><td>Works day and night, instantly</td><td>You configure, monitor and correct it yourself</td></tr>
<tr><td>Support and sales in one agent</td><td>Quality depends heavily on how complete your help center and policies are</td></tr>
<tr><td>Hands over to your team in the same helpdesk</td><td>Only available if you use Gorgias as your helpdesk</td></tr>
</tbody></table>

<h2 id="limits">Where Gorgias AI struggles</h2>
<p>Store owners' complaints about AI support agents, Gorgias included, tend to cluster around the same issues. A widely read r/shopify thread is literally titled "Been using gorgias AI for our online shop and it's broken" (${src('https://www.reddit.com/r/shopify/comments/1m7hpgd/been_using_gorgias_ai_for_our_online_shop_and_its/', 'Reddit')}). The common failure points:</p>
<ul>
<li><strong>Policies with exceptions.</strong> If your real returns policy has unwritten exceptions, the AI applies the written version.</li>
<li><strong>Thin product data.</strong> Sizing, ingredients or compatibility questions go wrong when the catalog lacks the detail.</li>
<li><strong>Emotional customers.</strong> A late birthday gift needs empathy and judgment more than a tracking link.</li>
<li><strong>Nobody reviewing.</strong> Without someone reading a sample of AI replies each week, small errors repeat.</li>
</ul>

<h2 id="setup">How to set up Gorgias AI well</h2>
<ol>
<li>Rewrite your help center so every policy, including exceptions, is written down.</li>
<li>Start with order status and shipping only; add returns once those are accurate.</li>
<li>Set clear handover rules for refunds, complaints and VIP customers.</li>
<li>Read 20 AI conversations a week and fix the knowledge, not just the reply.</li>
<li>Track cost per automated interaction against the time it saves.</li>
</ol>

<h2 id="alternatives">Gorgias AI alternatives</h2>
<table><thead><tr><th>Option</th><th>AI pricing (Sept 2026)</th><th>Who runs it</th></tr></thead><tbody>
<tr><td>Richpanel AI agents</td><td>$0.20 per AI-handled conversation</td><td>Your team</td></tr>
<tr><td>Help Scout AI Answers</td><td>$0.75 per resolution</td><td>Your team</td></tr>
<tr><td>Re:amaze AI</td><td>5–20 resolutions/user included, then $0.85</td><td>Your team</td></tr>
<tr><td>Zendesk AI agents</td><td>Per automated resolution</td><td>Your team</td></tr>
<tr><td>Dooza AI customer support</td><td>Included in a flat monthly plan</td><td>Dooza: AI drafts, a specialist checks, you approve</td></tr>
</tbody></table>
<p>More detail in <a href="/gorgias-alternatives">Gorgias alternatives compared</a>.</p>
${supportCta}
<p>Dooza also works inside Gorgias, so you can keep your helpdesk and history and let Dooza answer in it.</p>`,
    faqData: [
        { question: 'What is Gorgias AI?', answer: 'Gorgias AI Agent is the AI built into the Gorgias helpdesk. It answers ecommerce support questions using Shopify order data and your help center, and can act as a shopping assistant that recommends products.' },
        { question: 'How much does Gorgias AI Agent cost?', answer: 'Gorgias lists AI Agent at $0.90 per automated interaction on annual contracts and $1.00 on monthly contracts, with overage above the plan allowance at $1.50. Plans include 30 to 530 interactions a month depending on tier.' },
        { question: 'Is Gorgias AI worth it?', answer: 'It can be for stores already on Gorgias with a complete help center and someone to monitor it. Stores with complex policies or no time to review AI replies often get better results from AI plus human review.' },
        { question: 'Can Gorgias AI process refunds and returns?', answer: 'It can be set up to handle tasks such as returns, refunds and subscription changes within rules you define. Many stores keep refunds under human approval.' },
        { question: 'Does Gorgias AI work without Gorgias?', answer: 'No. Gorgias AI Agent runs inside the Gorgias helpdesk. If you use Gmail or another inbox, you would need a different AI tool or service.' },
        { question: 'What is a cheaper alternative to Gorgias AI?', answer: 'Richpanel lists AI agents at $0.20 per conversation and Help Scout AI Answers at $0.75 per resolution. Dooza includes AI with human review in a flat monthly plan and can work inside Gorgias.' },
    ],
};

// "customer service outsourcing cost/pricing" + "cost of outsourcing customer
// service" + "outsourcing customer service cost": 70/mo each, KD 0-3.
const outsourcingCostPost = {
    id: 232,
    title: 'Customer Service Outsourcing Cost in 2026: Hourly, Per-Ticket and Per-Agent Pricing',
    seoTitle: 'Customer Service Outsourcing Cost 2026: Real Prices',
    seoDescription: 'What customer service outsourcing costs in 2026: hourly rates by country, per-ticket and per-agent pricing, setup and hidden fees, worked examples by volume, and how AI changes the math.',
    excerpt: 'Outsourcing customer service costs $6 to $45 an hour depending on where agents sit, or about $0.75 to $7 per ticket. Here is every pricing model, the hidden fees, and worked examples for 100 to 2,000 tickets a month.',
    author: 'Sibi Narendran',
    date: '2026-09-30',
    modifiedDate: '2026-09-30',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'Guides',
    tags: ['Customer Service Outsourcing', 'Outsourcing Cost', 'Customer Support', 'Small Business', 'Ecommerce'],
    image: '/blog/customer-service-outsourcing-cost.png',
    imageAlt: 'Watercolor illustration of a balance scale weighing a support headset against coins, representing customer service outsourcing cost',
    slug: 'customer-service-outsourcing-cost',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'by-location', label: 'Cost by location' },
        { id: 'by-model', label: 'Cost by pricing model' },
        { id: 'hidden', label: 'Hidden fees' },
        { id: 'examples', label: 'Worked examples' },
        { id: 'in-house', label: 'Outsourcing vs in-house' },
        { id: 'ai', label: 'How AI changes the math' },
        { id: 'quotes', label: 'Getting accurate quotes' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated September 30, 2026.</em></p>
<h2 id="short-answer">How much does customer service outsourcing cost?</h2>
<p><strong>In 2026, outsourced customer service agents cost about $6–14 an hour offshore, $9–18 nearshore and $22–45 onshore, according to ${src('https://stealthagents.com/research/nearshore-bpo-cost-comparison', 'Stealth Agents\' July 2026 BPO cost comparison')}. Providers that bill per ticket charge about $0.75–7 per ticket, and a dedicated agent runs about $1,200–3,500 a month, per ${src('https://www.ringly.io/blog/cost-to-outsource-customer-service-ecommerce', 'Ringly\'s September 2026 cost breakdown')}.</strong></p>
<ul>
<li><strong>Cheapest per hour:</strong> offshore (Philippines, India), $6–14.</li>
<li><strong>Best for low volume:</strong> per-ticket pricing, so you don't pay for idle hours.</li>
<li><strong>Add 10–25%</strong> for setup, QA, integrations and after-hours premiums that quotes often leave out.</li>
<li><strong>AI now sets the floor:</strong> helpdesk AI resolutions cost about $0.20–1.50 each, but your team still runs them.</li>
</ul>

<h2 id="by-location">Customer service outsourcing cost by location</h2>
<table><thead><tr><th>Delivery model</th><th>Example countries</th><th>Hourly rate (customer service)</th><th>Full-time month (~173 h)</th></tr></thead><tbody>
<tr><td>Onshore</td><td>US, UK, Canada</td><td>$22–45 (fully loaded)</td><td>$3,800–7,800</td></tr>
<tr><td>Nearshore</td><td>Mexico, Colombia, Costa Rica</td><td>$9–18</td><td>$1,560–3,100</td></tr>
<tr><td>Offshore</td><td>Philippines, India, Eastern Europe</td><td>$6–14</td><td>$1,040–2,400</td></tr>
</tbody></table>
<p>Individual providers publish similar bands; Helpware, for example, quotes $8–35 per hour depending on complexity, location and service type (${src('https://helpware.com/cx/services/customer-support-outsourcing', 'Helpware')}). Hiring a Filipino support VA directly is cheaper still, around $851–1,250 a month full time (${src('https://hiretalent.ph/salary-guide-for-hiring-filipino-virtual-assistants', 'HireTalent.ph')}), but you do the managing.</p>

<h2 id="by-model">Cost by pricing model</h2>
<table><thead><tr><th>Model</th><th>Typical range</th><th>Best when</th><th>Risk</th></tr></thead><tbody>
<tr><td>Per hour</td><td>$6–42</td><td>Steady volume, phone coverage</td><td>Paying for idle time</td></tr>
<tr><td>Per agent (dedicated)</td><td>$1,200–3,500/month</td><td>One agent is busy most of the shift</td><td>Single point of failure</td></tr>
<tr><td>Per ticket</td><td>$0.75–7</td><td>Low or uneven volume</td><td>Rushed replies to hit throughput</td></tr>
<tr><td>Per resolution</td><td>$1–7</td><td>You want outcome-based billing</td><td>Disputes over what "resolved" means</td></tr>
<tr><td>Flat retainer</td><td>$5,000–30,000/month</td><td>Large brands, many channels</td><td>Overkill for small businesses</td></tr>
<tr><td>Per minute (phone)</td><td>Varies</td><td>Answering services</td><td>Long calls get expensive</td></tr>
</tbody></table>
<p>Ranges from Ringly's September 2026 breakdown. For comparison, Smith.ai's published receptionist plans start at $300/month for 30 calls, with extra calls at $8.50–11.50 (${src('https://smith.ai/pricing', 'Smith.ai pricing')}).</p>

<h2 id="hidden">Hidden fees in customer service outsourcing</h2>
<ul>
<li><strong>Setup and onboarding:</strong> $500–5,000 one-time at some providers.</li>
<li><strong>QA surcharge:</strong> often 5–10% of the base rate.</li>
<li><strong>Integrations:</strong> $100–500 per tool per month.</li>
<li><strong>Minimums:</strong> seats, hours or contract months you pay for even when quiet.</li>
<li><strong>After-hours, weekend and holiday premiums.</strong></li>
<li><strong>Training time</strong> billed at the hourly rate before agents go live.</li>
<li><strong>Your own helpdesk fees:</strong> per-seat or per-ticket charges on the software the agents use.</li>
</ul>

<h2 id="examples">Worked examples by volume</h2>
<table><thead><tr><th>Monthly tickets</th><th>Per-ticket ($0.75–7)</th><th>Offshore hourly ($6–14), ~6 min/ticket</th><th>Onshore hourly ($22–45)</th></tr></thead><tbody>
<tr><td>100</td><td>$75–700</td><td>10 h: $60–140 (if no minimum)</td><td>$220–450</td></tr>
<tr><td>500</td><td>$375–3,500</td><td>50 h: $300–700</td><td>$1,100–2,250</td></tr>
<tr><td>2,000</td><td>$1,500–14,000</td><td>200 h: $1,200–2,800</td><td>$4,400–9,000</td></tr>
</tbody></table>
<p>Hourly rows assume pure handling time; real invoices add minimums, QA and management. Ringly's worked example for 500 tickets a month (one $2,000/month agent, $800 setup, $200/month QA) comes to about $27,200 in year one.</p>
${video('oRWzBcoLbW0', 'How to Outsource Customer Service', 'Inbox Done')}

<h2 id="in-house">Outsourcing vs in-house cost</h2>
<p>An in-house US support hire costs salary plus payroll taxes, benefits, software, equipment and management time, which is why onshore outsourcing rates are quoted "fully loaded" at $22–45 an hour. In-house wins when support needs deep product knowledge or doubles as sales. Outsourcing wins when volume is uneven, hours are long, or questions are repetitive.</p>

<h2 id="ai">How AI changes the cost of outsourcing</h2>
<p>AI has pushed the cost of a routine answer far below a human's. Helpdesk AI now bills per resolution: $0.20 per AI-handled conversation at Richpanel, $0.75 per resolution for Help Scout AI Answers, and $0.90–1.50 per automated interaction at Gorgias (vendor pricing pages, September 2026). The catch is that someone on your side still configures, checks and escalates.</p>
<p>That is why hybrid services have appeared: AI drafts, a trained person checks, and you approve only the sensitive replies. You pay for the service, not for hours or seats, and you don't manage anyone. Read the full <a href="/customer-service-outsourcing">customer service outsourcing guide</a> for how the models compare.</p>

<h2 id="quotes">How to get an accurate outsourcing quote</h2>
<ol>
<li>Send three months of ticket counts by channel and by hour of day.</li>
<li>List the question types and what agents may do without asking (refund limits, discounts).</li>
<li>Ask for the all-in monthly price at your volume, including setup, QA, integrations and after-hours.</li>
<li>Ask what happens to the price at twice your normal volume.</li>
<li>Ask each provider to answer 20 of your real messages before signing.</li>
</ol>
${supportCta}`,
    faqData: [
        { question: 'How much does it cost to outsource customer service per hour?', answer: 'In 2026, published benchmarks are about $6 to $14 per hour offshore, $9 to $18 nearshore, and $22 to $45 onshore for customer service agents, before setup, QA and management fees.' },
        { question: 'How much does outsourced customer support cost per ticket?', answer: 'Per-ticket pricing typically ranges from about $0.75 to $7 per ticket, and per-resolution pricing from about $1 to $7, depending on complexity and provider.' },
        { question: 'How much does a dedicated outsourced support agent cost?', answer: 'About $1,200 to $3,500 per month for a dedicated agent, depending on location and skill, according to 2026 industry breakdowns.' },
        { question: 'What hidden fees should I expect?', answer: 'Setup fees of $500 to $5,000, QA surcharges of 5 to 10 percent, integration fees of $100 to $500 per tool per month, minimum seats or hours, and after-hours premiums.' },
        { question: 'Is outsourcing customer service cheaper than hiring?', answer: 'Usually, for repetitive questions and uneven volume, because you avoid payroll taxes, benefits, equipment and idle time. In-house can be better value when support needs deep product knowledge or drives sales.' },
        { question: 'Is AI cheaper than outsourced customer service?', answer: 'Per answer, yes: helpdesk AI costs about $0.20 to $1.50 per resolution. But your team must set it up and review it. AI-plus-human services combine low cost with a human check.' },
    ],
};

// "customer service outsourcing companies" 390/mo (+ company/companies variants),
// "top customer service outsourcing companies" 170, "customer support outsourcing
// companies" 140; KD 0-2.
const bestCompaniesPost = {
    id: 233,
    title: 'Best Customer Service Outsourcing Companies for Small Businesses (2026)',
    seoTitle: 'Best Customer Service Outsourcing Companies (2026)',
    seoDescription: 'The best customer service outsourcing companies for small businesses and online stores in 2026: AI plus human services, BPOs, on-demand teams and answering services compared on model, fit and pricing.',
    excerpt: 'Most "best outsourcing companies" lists are written for enterprises. This one is for small businesses and online stores: eight providers compared on model, minimums, pricing transparency and who they suit.',
    author: 'Sibi Narendran',
    date: '2026-09-30',
    modifiedDate: '2026-09-30',
    readTime: '9 min read',
    readTimeMinutes: 9,
    category: 'Comparison',
    tags: ['Customer Service Outsourcing', 'Outsourcing Companies', 'BPO', 'Customer Support', 'Small Business'],
    image: '/blog/best-customer-service-outsourcing-companies.png',
    imageAlt: 'Watercolor illustration of small office buildings with headset icons and a magnifying glass, representing customer service outsourcing companies',
    slug: 'best-customer-service-outsourcing-companies',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'comparison', label: 'Comparison table' },
        { id: 'dooza-pick', label: '1. Dooza' },
        { id: 'influx', label: '2. Influx' },
        { id: 'helpware', label: '3. Helpware' },
        { id: 'everhelp', label: '4. EverHelp' },
        { id: 'supportninja', label: '5. SupportNinja' },
        { id: 'liveops', label: '6. Liveops' },
        { id: 'smith', label: '7. Smith.ai' },
        { id: 'va', label: '8. Hire a VA directly' },
        { id: 'choose', label: 'How to choose' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated September 30, 2026. Provider details are taken from each company's own website on this date; confirm current terms before you sign.</em></p>
<h2 id="short-answer">What are the best customer service outsourcing companies?</h2>
<p><strong>For small businesses and online stores, the best customer service outsourcing companies in 2026 are Dooza (AI plus human support inside your inbox), Influx (on-demand, month-to-month teams), Helpware (published hourly pricing, AI plus human), EverHelp (dedicated ecommerce and SaaS agents), SupportNinja (AI-enabled CX outsourcing), Liveops (US-based agents), and Smith.ai (receptionists and phone).</strong> Hiring a VA directly is the budget option if you can manage them.</p>
<ul>
<li><strong>Smallest teams:</strong> Dooza, Smith.ai, or a directly hired VA.</li>
<li><strong>Growing brands needing 24/7 people:</strong> Influx, Helpware, EverHelp.</li>
<li><strong>Phone-heavy:</strong> Liveops or Smith.ai.</li>
<li><strong>Always:</strong> ask each provider to answer 20 of your real messages before signing.</li>
</ul>

<h2 id="comparison">Customer service outsourcing companies compared</h2>
<table><thead><tr><th>Company</th><th>Model</th><th>Channels</th><th>Published pricing</th><th>Best for</th></tr></thead><tbody>
<tr><td><strong>Dooza</strong></td><td>AI drafts + specialist review + owner approval</td><td>Email, chat (Gmail, Shopify Inbox, Gorgias); phone via AI receptionist</td><td>Flat monthly plan, see <a href="/customer-support-automation-agency">support page</a></td><td>Small businesses, online stores</td></tr>
<tr><td><strong>Influx</strong></td><td>Individual agents or managed teams, AI + human</td><td>Chat, email, calls</td><td>Contact sales; month-to-month</td><td>Growing brands needing 24/7</td></tr>
<tr><td><strong>Helpware</strong></td><td>Omnichannel BPO, AI + human</td><td>Phone, email, chat, social, video</td><td>$8–35/hour</td><td>Mid-size teams, many languages</td></tr>
<tr><td><strong>EverHelp</strong></td><td>Dedicated, shared or talent-only teams + AI agent</td><td>Omnichannel, 30+ languages</td><td>Contact sales</td><td>Ecommerce and SaaS</td></tr>
<tr><td><strong>SupportNinja</strong></td><td>AI-enabled CX outsourcing</td><td>Support, tech support, moderation</td><td>Contact sales</td><td>SaaS, ecommerce, fintech</td></tr>
<tr><td><strong>Liveops</strong></td><td>US-based work-from-home agents</td><td>Phone-first, omnichannel</td><td>Contact sales</td><td>Phone-heavy, US-accent needs</td></tr>
<tr><td><strong>Smith.ai</strong></td><td>AI + human receptionists and chat</td><td>Phone, chat</td><td>From $300/month (30 calls)</td><td>Service businesses taking calls</td></tr>
<tr><td><strong>Direct VA</strong></td><td>One person you hire</td><td>Whatever they cover</td><td>~$851–1,250/month (Philippines)</td><td>Owners who can train and manage</td></tr>
</tbody></table>

<h2 id="dooza-pick">1. Dooza: best for small businesses and online stores</h2>
<p>Dooza is an AI-native company that builds AI products and services for small businesses. <a href="/customer-support-automation-agency">Dooza AI customer support</a> drafts every reply with AI from your policies, products and past answers, a Dooza specialist checks anything uncertain, and refunds and complaints come to you for one-tap approval. It works inside Gmail, Shopify Inbox or Gorgias and goes live in 48 hours, on a flat monthly plan with no setup fee.</p>
<p><strong>Pros:</strong> no seats or long contract; day-and-night replies; owner approval on sensitive replies. <strong>Cons:</strong> written channels only (phone via Dooza's <a href="/ai-receptionist">AI receptionist</a>); not a 24/7 human team; not SOC 2 certified.</p>

<h2 id="influx">2. Influx: best on-demand teams</h2>
<p>Influx offers chat, email and call support with a network it describes as 1,100+ agents across American, European and APAC time zones, available as individual agents or fully managed teams. It advertises month-to-month pricing with no lock-ins and launching in about a week (${src('https://influx.com', 'influx.com')}).</p>
<p><strong>Pros:</strong> 24/7 coverage, flexible terms. <strong>Cons:</strong> no public pricing.</p>

<h2 id="helpware">3. Helpware: best published hourly pricing</h2>
<p>Helpware provides omnichannel support in 45+ languages from 19 locations including the US, Mexico and the Philippines, combining AI chatbots with human agents. It publishes a range of $8–35 per hour depending on complexity and location (${src('https://helpware.com/cx/services/customer-support-outsourcing', 'Helpware')}).</p>
<p><strong>Pros:</strong> transparent rate range, wide language coverage. <strong>Cons:</strong> built for teams with meaningful volume.</p>

<h2 id="everhelp">4. EverHelp: best dedicated ecommerce agents</h2>
<p>EverHelp offers dedicated agents trained for your industry, multilingual support in 30+ languages, and an AI assistant, with dedicated, shared and talent-only pricing models. Verticals include ecommerce, SaaS, hospitality and fintech (${src('https://www.ever-help.com/customer-service-outsourcing', 'EverHelp')}).</p>
<p><strong>Pros:</strong> ecommerce focus, shared-team option for smaller volume. <strong>Cons:</strong> pricing on request.</p>
${video('NBSpd9O5ih4', '6 Ways to Ensure the Best Customer Service in Outsourcing', 'SupportNinja')}

<h2 id="supportninja">5. SupportNinja: best AI-enabled CX outsourcing</h2>
<p>SupportNinja covers customer and technical support, content moderation and back-office work, with an AI platform it calls NinjaAI, for SaaS, AI, ecommerce, healthcare and fintech companies (${src('https://www.supportninja.com', 'supportninja.com')}).</p>
<p><strong>Pros:</strong> broad service range. <strong>Cons:</strong> quote-based; more suited to growing companies than very small ones.</p>

<h2 id="liveops">6. Liveops: best for US-based phone support</h2>
<p>Liveops is known for its network of US-based, work-from-home independent agents, and its service page ranked #1 on Google in the US for "customer service outsourcing" when we checked in September 2026. It suits businesses that need phone coverage with US agents.</p>
<p><strong>Pros:</strong> US-based agents, phone strength. <strong>Cons:</strong> quote-based; overkill for email-only support.</p>

<h2 id="smith">7. Smith.ai: best for calls at small-business scale</h2>
<p>Smith.ai publishes receptionist plans from $300/month for 30 calls ($11.50 per extra call) up to $2,100/month for 300 calls, with a 30-day money-back guarantee and no long-term contract (${src('https://smith.ai/pricing', 'Smith.ai pricing')}).</p>
<p><strong>Pros:</strong> transparent pricing, no contract. <strong>Cons:</strong> per-call pricing gets expensive at volume; phone-focused.</p>

<h2 id="va">8. Hire a customer service VA directly</h2>
<p>A Filipino customer support VA hired directly averages about $851–1,250 a month full time (${src('https://hiretalent.ph/salary-guide-for-hiring-filipino-virtual-assistants', 'HireTalent.ph')}). It is the cheapest option with a person attached, but you hire, train, manage and cover them. See our <a href="/customer-service-virtual-assistant">customer service virtual assistant guide</a>.</p>

<h2 id="choose">How to choose an outsourcing company</h2>
<table><thead><tr><th>Your situation</th><th>Start with</th></tr></thead><tbody>
<tr><td>Under ~1,000 written messages a month, owner answering now</td><td>Dooza or a direct VA</td></tr>
<tr><td>Need humans 24/7 across time zones</td><td>Influx, Helpware or EverHelp</td></tr>
<tr><td>Mostly phone calls</td><td>Smith.ai (small) or Liveops (larger)</td></tr>
<tr><td>Many languages</td><td>Helpware or EverHelp</td></tr>
</tbody></table>
<p>Whoever you shortlist, ask the questions in our <a href="/customer-service-outsourcing">customer service outsourcing guide</a>, get an all-in price at your real volume (see <a href="/blog/customer-service-outsourcing-cost">outsourcing costs</a>), and test on 20 real messages.</p>
${supportCta}`,
    faqData: [
        { question: 'What are the best customer service outsourcing companies for small businesses?', answer: 'Good fits for small businesses in 2026 include Dooza for AI plus human support inside your existing inbox, Smith.ai for calls with published pricing, Influx for month-to-month on-demand teams, and a directly hired virtual assistant if you can manage one.' },
        { question: 'Which customer service outsourcing companies publish their prices?', answer: 'Helpware publishes a range of $8 to $35 per hour and Smith.ai publishes plans from $300 per month for 30 calls. Most BPOs, including Influx, EverHelp, SupportNinja and Liveops, quote on request.' },
        { question: 'What is the biggest customer service outsourcing company?', answer: 'Large global BPOs such as Concentrix, Teleperformance (TP) and TaskUs serve enterprise brands with tens of thousands of agents. They are usually a poor fit for small businesses because of minimums and contract size.' },
        { question: 'How do I choose a customer service outsourcing company?', answer: 'Match the provider to your channels and volume, get an all-in price including setup and QA, check minimums and contract length, confirm they work inside your existing helpdesk, and test them on 20 of your real customer messages.' },
        { question: 'Are there customer service outsourcing companies with no minimums?', answer: 'Yes. Month-to-month and usage-based options exist, such as Influx\'s month-to-month terms, Smith.ai\'s no-contract plans and Dooza\'s flat monthly plan with no setup fee.' },
    ],
};

export const supportBlogPosts = [
    gorgiasPricingPost,
    gorgiasAiPost,
    outsourcingCostPost,
    bestCompaniesPost,
];
