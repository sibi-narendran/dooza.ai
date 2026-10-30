// "gorgias alternative(s)": 110/mo, KD 0, CPC up to $235 (DataForSEO, US, 2026-09-30). GSC 28d to 2026-10-21: ~127 impr on gorgias alternatives/competitors, pos ~59.
// Every vendor price below was re-checked on the vendor's own pricing page on 2026-10-21 (spec: content/drafts/gorgias-alternatives-upgrade-2026-10-21.md in the Achilles repo).

const src = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const page = {
    slug: 'gorgias-alternatives',
    seoTitle: 'Gorgias Alternatives & Competitors 2026: Prices Checked',
    ogTitle: 'Gorgias Alternatives and Competitors in 2026, With Verified Prices',
    seoDescription: 'Gorgias alternatives and competitors compared on plan prices and AI fees, checked Oct 21, 2026: Richpanel, Re:amaze, Zendesk, Front, Intercom Fin and more.',
    keywords: [
        'gorgias alternatives', 'gorgias alternative', 'gorgias competitors', 'cheaper than gorgias',
        'cheaper alternative to gorgias', 'gorgias alternatives for shopify', 'best gorgias alternatives',
        'gorgias vs zendesk', 'gorgias vs richpanel', 'gorgias vs reamaze', 'gorgias vs help scout',
        'shopify helpdesk', 'best helpdesk for shopify',
    ],
    eyebrow: 'Comparison · Updated October 21, 2026',
    h1: '10 Best Gorgias Alternatives and Competitors in 2026 (Verified Prices)',
    lede: '<p><strong>People look for Gorgias alternatives for three reasons: ticket-based pricing that rises with every busy month, AI fees charged on top of ticket fees, and the work of running the helpdesk themselves.</strong> Below are ten alternatives and competitors with prices checked on each vendor\'s pricing page (last checked October 21, 2026), an AI-fee comparison, and how to switch.</p><p><strong>Our top pick for a small business that wants AI agents to handle support work: <a href="https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=gorgias-alternatives-body">Dooza Crew</a> (our product).</strong> You tell Dooza, your master agent, the job in plain words ("sort the inbox every morning, draft replies from our refund policy, flag anything angry or legal"), and it builds the helper agents it needs: a triage agent, a writer. Every agent works in its own private browser and workspace, and before it sends or pays for anything it asks you to Approve, Edit or Reject in chat. Crew agents take phone calls too, included in the plan. It is $5 to start. <a href="https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=gorgias-alternatives-body">Start Dooza Crew for $5</a>.</p>',
    hero: { src: '/support-guides/gorgias-alternatives-hero.jpg', alt: 'Speech-bubble shapes on a plinth representing a choice between customer support tools' },
    breadcrumb: 'Gorgias Alternatives',
    breadcrumbParent: { label: 'Alternatives', href: '/alternatives' },
    updated: '2026-10-21',
    quickAnswer: {
        title: 'Quick picks',
        bullets: [
            '<strong>Dooza</strong>: best if you want support done for you. AI drafts, a specialist checks, you approve; works inside Gmail, Shopify Inbox or your existing Gorgias. $300 a month for up to 250 customer messages with AI included, 14-day free trial (card at signup).',
            '<strong>Richpanel</strong>: best Shopify-native swap. Pro $59 per agent per month (billed annually), no per-ticket fees, AI and automations included.',
            '<strong>Re:amaze</strong>: best budget ecommerce helpdesk. From $29 per team member, or $59 flat for small teams.',
            '<strong>Help Scout</strong>: best for email-first teams. Free for up to 5 users; AI Answers at $0.75 per resolution.',
            '<strong>Front</strong> or <strong>Zendesk</strong>: best for larger or multi-channel teams, priced per seat.',
            '<strong>Shopify Inbox</strong>: best free option for chat, with an optional AI agent.',
        ],
    },
    offerAfter: 2,
    itemList: {
        name: 'Best Gorgias alternatives and competitors',
        items: [
            { name: 'Dooza AI customer support', url: 'https://www.dooza.ai/customer-support-automation-agency' },
            { name: 'Richpanel', url: 'https://www.richpanel.com' },
            { name: 'Re:amaze', url: 'https://www.reamaze.com' },
            { name: 'Zendesk', url: 'https://www.zendesk.com' },
            { name: 'Front', url: 'https://front.com' },
            { name: 'Help Scout', url: 'https://www.helpscout.com' },
            { name: 'Freshdesk', url: 'https://www.freshworks.com/freshdesk/' },
            { name: 'Intercom (Fin)', url: 'https://www.intercom.com' },
            { name: 'Tidio', url: 'https://www.tidio.com' },
            { name: 'Shopify Inbox', url: 'https://apps.shopify.com/inbox' },
        ],
    },
    sections: [
        {
            id: 'why-switch',
            heading: 'Why brands look for a Gorgias alternative',
            nav: 'Why switch',
            html: `
<p>Gorgias is a strong ecommerce helpdesk with deep Shopify integration, and it prices by ticket volume rather than per agent. The complaints are mostly about cost structure and workload:</p>
<ul>
<li><strong>You pay per ticket.</strong> Plans include a set number of billable tickets (300 on Basic, 2,000 on Pro), then $0.36–0.40 per extra ticket. A promotion or delivery problem raises your bill in the same month.</li>
<li><strong>AI is a second line on the bill.</strong> Gorgias now shows each plan as "Helpdesk + AI Agent", with the AI Agent priced as its own line (Basic on annual billing: $50 helpdesk + $27 AI Agent = $77 a month). Each plan includes a set number of automated interactions, then charges $1.00 (Starter), $0.90 (Basic, Pro) or $0.85 (Advanced) per automated interaction. Its billing help center says a ticket fully resolved by AI Agent, without human intervention, can incur both a ticket fee and an automation fee.</li>
<li><strong>You still run it.</strong> Rules, macros, AI guidance, escalations and quality checks are your team's job.</li>
</ul>
<p>Sources: ${src('https://www.gorgias.com/pricing', 'Gorgias pricing')} and ${src('https://helpcenter.gorgias.com/en-US/how-youre-billed-for-using-gorgias-199385', 'Gorgias billing help center')}, checked October 21, 2026. Full detail in our <a href="/blog/gorgias-pricing">Gorgias pricing breakdown</a>.</p>
<table>
<thead><tr><th>Gorgias plan</th><th>Helpdesk only: monthly / annual (per month)</th><th>With AI Agent: monthly / annual (per month)</th><th>Tickets included</th><th>Extra ticket</th><th>Automated interactions included</th><th>Extra automated interaction</th></tr></thead>
<tbody>
<tr><td>Starter</td><td>$10 / –</td><td>$40 / –</td><td>50</td><td>$0.40</td><td>30</td><td>$1.00</td></tr>
<tr><td>Basic</td><td>$60 / $50</td><td>$90 / $77</td><td>300</td><td>$0.40</td><td>30</td><td>$0.90</td></tr>
<tr><td>Pro</td><td>$360 / $300</td><td>$550 / $471</td><td>2,000</td><td>$0.36</td><td>190</td><td>$0.90</td></tr>
<tr><td>Advanced</td><td>$900 / $750</td><td>$1,430 / $1,227</td><td>5,000</td><td>$0.36</td><td>530</td><td>$0.85</td></tr>
<tr><td>Enterprise</td><td colspan="2">Custom</td><td>Custom</td><td>Custom</td><td>Custom</td><td>Custom</td></tr>
</tbody>
</table>`,
        },
        {
            id: 'comparison',
            heading: 'Gorgias alternatives compared',
            nav: 'Comparison table',
            html: `
<table>
<thead><tr><th>Tool</th><th>Type</th><th>Starting price (checked Oct 21, 2026)</th><th>How AI is billed</th><th>Best for</th></tr></thead>
<tbody>
<tr><td><strong>Dooza</strong></td><td>Done-for-you service</td><td>14-day free trial (card at signup), then $300/month for up to 250 messages (<a href="/customer-support-automation-agency">support page</a>)</td><td>Included; a specialist checks replies</td><td>Small stores that want support handled</td></tr>
<tr><td><strong>Richpanel</strong></td><td>Ecommerce helpdesk</td><td>Pro $59/agent/month, Pro Max $89 (billed annually); no per-ticket fees</td><td>AI and automations included at no extra cost</td><td>Shopify brands with a support team</td></tr>
<tr><td><strong>Re:amaze</strong></td><td>Ecommerce helpdesk</td><td>$29/member/month; Starter $59 flat (500 conversations)</td><td>5–20 resolutions/user included, then $0.85</td><td>Budget-conscious stores</td></tr>
<tr><td><strong>Zendesk</strong></td><td>General helpdesk</td><td>Suite Team $55/agent/month (annual)</td><td>Per automated resolution; extra resolutions $1.50 each</td><td>Larger or multi-brand teams</td></tr>
<tr><td><strong>Front</strong></td><td>Shared inbox helpdesk</td><td>Starter $25/seat/month (up to 10 seats), billed annually</td><td>See Front's pricing page</td><td>Teams working email and chat together</td></tr>
<tr><td><strong>Help Scout</strong></td><td>Email-first helpdesk</td><td>Free (5 users); Standard $25/user/month billed annually</td><td>AI Answers $0.75 per resolution</td><td>Email-heavy teams</td></tr>
<tr><td><strong>Freshdesk</strong></td><td>General helpdesk</td><td>Growth $19/agent/month (annual)</td><td>500 free AI Agent sessions once per account, then $49 per 100</td><td>Low per-agent cost</td></tr>
<tr><td><strong>Intercom (Fin)</strong></td><td>Helpdesk + AI agent</td><td>Essential $29/seat/month (a $19 new-customer price was shown Oct 21, 2026)</td><td>Fin AI Agent $0.99 per outcome</td><td>Teams that want the AI agent to lead</td></tr>
<tr><td><strong>Tidio</strong></td><td>Chat + AI agent</td><td>Free (50 conversations); Starter $24.17/month billed annually</td><td>Lyro AI conversations by plan</td><td>Chat-first small stores</td></tr>
<tr><td><strong>Shopify Inbox</strong></td><td>Chat app</td><td>Free</td><td>Optional AI agent that can reply automatically</td><td>Chat only, tight budgets</td></tr>
</tbody>
</table>
<p>Prices from each vendor's pricing page, checked October 21, 2026: ${src('https://www.richpanel.com/pricing', 'Richpanel')}, ${src('https://www.reamaze.com/pricing', 'Re:amaze')}, ${src('https://www.zendesk.com/pricing/', 'Zendesk')}, ${src('https://front.com/pricing', 'Front')}, ${src('https://www.helpscout.com/pricing/', 'Help Scout')}, ${src('https://www.freshworks.com/freshdesk/pricing/', 'Freshdesk')}, ${src('https://www.intercom.com/pricing', 'Intercom')}, ${src('https://www.tidio.com/pricing/', 'Tidio')}, ${src('https://apps.shopify.com/inbox', 'Shopify Inbox')}. Vendors change plans often; confirm before you buy.</p>`,
        },
        {
            id: 'dooza',
            heading: '1. Dooza: best if you want support done for you',
            nav: '1. Dooza',
            html: `
<p>Every other tool on this list is software your team runs. Dooza is different: it is a managed service. Dooza is an AI-native company, and <a href="/customer-support-automation-agency">Dooza AI customer support</a> answers your customers for you.</p>
<ul>
<li><strong>How it works:</strong> Dooza AI drafts replies from your policies, products and past answers, and looks up orders in Shopify first. A Dooza specialist checks anything uncertain. Refunds, complaints and anything sensitive come to you for one-tap approval.</li>
<li><strong>Keep or replace Gorgias:</strong> Dooza works inside Gmail, Shopify Inbox or Gorgias, so you can keep your helpdesk and let Dooza work in it, or drop down to a cheaper inbox.</li>
<li><strong>Pricing:</strong> 14-day free trial with card at signup; after that it is $300 a month for up to 250 customer messages, month-to-month, with no setup fee.</li>
<li><strong>Setup:</strong> live in 48 hours; send 20 real messages and see the answers before you decide.</li>
</ul>
<p><strong>Pros:</strong> no one to hire or manage; human check on AI replies; no migration. <strong>Cons:</strong> it is a service, not a helpdesk, so you won't get Gorgias-style dashboards to build your own automations; not SOC 2 certified (encrypted connections and your approval on anything sensitive).</p>`,
        },
        {
            id: 'richpanel',
            heading: '2. Richpanel: best Shopify-native Gorgias swap',
            nav: '2. Richpanel',
            html: `
<p>Richpanel is an ecommerce helpdesk with order actions, a self-service portal and AI agents across email, chat, social, SMS and WhatsApp. It prices per agent instead of per ticket: Pro is $59 per agent per month and Pro Max $89, billed annually, and its pricing page says plans include "AI &amp; automations at no extra cost" (checked October 21, 2026). Its pricing page also offers to migrate your tickets and data from Gorgias, Zendesk, Help Scout and Salesforce.</p>
<p><strong>Pros:</strong> predictable seat pricing; AI included in the seat price; built for DTC brands; Gorgias migration offered. <strong>Cons:</strong> per-agent pricing adds up for larger teams; still a tool your team configures and runs.</p>`,
        },
        {
            id: 'reamaze',
            heading: '3. Re:amaze: best budget ecommerce helpdesk',
            nav: '3. Re:amaze',
            html: `
<p>Re:amaze (from GoDaddy) is an ecommerce-friendly helpdesk with Shopify integration, live chat and FAQs. Plans are $29, $49 and $69 per team member per month (10% off annually), or a $59 flat Starter plan with unlimited members and 500 responded conversations. AI resolutions: 5–20 per user included, then $0.85 each (checked October 21, 2026).</p>
<p><strong>Pros:</strong> low entry price; flat plan suits tiny teams. <strong>Cons:</strong> per-member pricing grows with headcount; lighter automation than Gorgias.</p>`,
        },
        {
            id: 'zendesk',
            heading: '4. Zendesk: best for larger or multi-brand teams',
            nav: '4. Zendesk',
            html: `
<p>Zendesk is one of the most widely used general helpdesks. Suite Team starts at $55 per agent per month and Suite Professional at $115 (both billed annually). AI agents are billed per automated resolution, and extra automated resolutions are $1.50 each, pay-as-you-go (checked October 21, 2026).</p>
<p><strong>Pros:</strong> mature, scalable, huge app marketplace. <strong>Cons:</strong> less ecommerce-specific than Gorgias; per-agent cost is high for small teams; setup takes time.</p>`,
            video: {
                id: 'uY0rxAE7AMA',
                title: '5 Best Gorgias Alternatives in 2026 | AI Support Tools Compared',
                channel: 'Rosie Collins',
                uploadDate: '2026-09-03T05:44:01-07:00',
                seconds: 296,
                description: 'A short comparison of five Gorgias alternatives and AI customer support tools in 2026.',
                caption: 'a five-minute walkthrough of popular Gorgias alternatives.',
            },
        },
        {
            id: 'front',
            heading: '5. Front: best for teams sharing one inbox across channels',
            nav: '5. Front',
            html: `
<p>Front is a shared-inbox helpdesk: email, chat and other channels land in one place, and the team assigns and replies together. Starter is $25 per seat per month for up to 10 seats and Professional $65 per seat per month for up to 50 seats, both billed annually (checked October 21, 2026). It prices per seat, not per ticket.</p>
<p><strong>Pros:</strong> per-seat pricing with no ticket meter; strong for email-heavy teams. <strong>Cons:</strong> general-purpose rather than ecommerce-first, so Shopify order actions need setup; check AI pricing on its page before you compare.</p>`,
        },
        {
            id: 'help-scout',
            heading: '6. Help Scout: best for email-first teams',
            nav: '6. Help Scout',
            html: `
<p>Help Scout is a clean, email-first helpdesk with a free plan (5 users, 1 inbox, 1 Docs site). Paid plans are $25, $45 and $75 per user per month billed annually (checked October 21, 2026). AI Answers costs $0.75 per resolution.</p>
<p><strong>Pros:</strong> easy to use; free plan; fair AI billing. <strong>Cons:</strong> fewer ecommerce order actions than Gorgias.</p>`,
        },
        {
            id: 'freshdesk',
            heading: '7. Freshdesk: best low per-agent price',
            nav: '7. Freshdesk',
            html: `
<p>Freshdesk plans are $19 (Growth), $55 (Pro) and $89 (Enterprise) per agent per month billed annually, with 500 free Freddy AI Agent sessions to try it (once per account), then $49 per 100 sessions (checked October 21, 2026).</p>
<p><strong>Pros:</strong> low entry price per agent; free AI sessions to try Freddy. <strong>Cons:</strong> general-purpose, so ecommerce workflows need setup; no free plan.</p>`,
        },
        {
            id: 'intercom',
            heading: '8. Intercom (Fin): best if the AI agent should lead',
            nav: '8. Intercom',
            html: `
<p>Intercom pairs a helpdesk with Fin, its AI agent. Essential seats are listed at $29 per seat per month (Intercom showed a $19 price for new customers on October 21, 2026) and Advanced at $85 per seat per month; Fin AI Agent is billed at $0.99 per outcome.</p>
<p><strong>Pros:</strong> a mature AI agent priced per outcome; strong chat and messenger. <strong>Cons:</strong> you pay seats and Fin outcomes together, so busy months still raise the bill; less ecommerce-specific than Gorgias.</p>`,
        },
        {
            id: 'tidio',
            heading: '9. Tidio: best chat-first option for small stores',
            nav: '9. Tidio',
            html: `
<p>Tidio combines live chat with the Lyro AI agent. There is a free plan (50 billable conversations), Starter at $24.17/month (100 conversations) and Growth from $49.17/month (from 250), both billed annually, and Plus from $300/month (checked October 21, 2026).</p>
<p><strong>Pros:</strong> cheap to start; good chat widget. <strong>Cons:</strong> conversation caps; weaker email ticketing than a full helpdesk.</p>`,
        },
        {
            id: 'shopify-inbox',
            heading: '10. Shopify Inbox: best free option',
            nav: '10. Shopify Inbox',
            html: `
<p>Shopify Inbox is Shopify's free chat app; its app listing now describes it as an AI sales associate for your online store, connected to your catalog, policies and orders. You can run it with or without its AI agent; with the agent turned on, it responds to customers automatically.</p>
<p><strong>Pros:</strong> free; native to Shopify; optional AI agent. <strong>Cons:</strong> chat-focused; not a full helpdesk.</p>`,
        },
        {
            id: 'ai-fees',
            heading: 'AI agent fees compared',
            nav: 'AI fees',
            html: `
<p>The AI line is where Gorgias bills surprise people, so here is what each tool charges for AI-handled conversations, from each vendor's pricing page on October 21, 2026:</p>
<table>
<thead><tr><th>Tool</th><th>AI fee</th></tr></thead>
<tbody>
<tr><td>Gorgias</td><td>$1.00 (Starter), $0.90 (Basic, Pro), $0.85 (Advanced) per automated interaction beyond those included</td></tr>
<tr><td>Richpanel</td><td>AI and automations included in the seat price</td></tr>
<tr><td>Re:amaze</td><td>5–20 resolutions per user included, then $0.85 per resolution</td></tr>
<tr><td>Zendesk</td><td>$1.50 per extra automated resolution, pay-as-you-go</td></tr>
<tr><td>Help Scout</td><td>$0.75 per AI Answers resolution</td></tr>
<tr><td>Freshdesk</td><td>500 free sessions once per account, then $49 per 100 sessions</td></tr>
<tr><td>Intercom</td><td>$0.99 per Fin outcome</td></tr>
<tr><td>Macha (AI agent add-on, runs inside Gorgias, Zendesk, Freshdesk and others)</td><td>From $299/month for 750 tickets, about $0.40 per ticket (checked October 22, 2026)</td></tr>
<tr><td>Dooza</td><td>Included in the $300/month plan (up to 250 messages)</td></tr>
</tbody>
</table>
<p>Per-outcome fees look small, but multiply them by your monthly AI-handled conversations before you compare plans. If you want to keep Gorgias and only replace its AI line, an add-on agent such as Macha works inside the help desk you already have.</p>`,
        },
        {
            id: 'switch',
            heading: 'How to switch from Gorgias',
            nav: 'How to switch',
            html: `
<ol>
<li><strong>Price your real volume.</strong> Count your last three months of billable tickets and AI-handled conversations, and price each option on that number, not the headline plan.</li>
<li><strong>Test before you move.</strong> Run 50–100 of your recent tickets (order status, returns, address changes) through a trial of the new tool and check the answers.</li>
<li><strong>Move your history.</strong> Richpanel's pricing page offers to migrate tickets and data from Gorgias; for other tools, ask the vendor whether they import Gorgias tickets, macros and customer history before you sign.</li>
<li><strong>Run both for a week.</strong> Keep Gorgias on its lowest plan while the new tool takes live tickets, then cancel once nothing falls through.</li>
</ol>
<p>Not sure you want to leave? You can keep Gorgias and have <a href="/customer-support-automation-agency">Dooza</a> answer tickets inside it.</p>`,
        },
        {
            id: 'how-to-choose',
            heading: 'How to choose a Gorgias alternative',
            nav: 'How to choose',
            html: `
<table>
<thead><tr><th>If you…</th><th>Choose</th></tr></thead>
<tbody>
<tr><td>Don't want to run a helpdesk or hire support at all</td><td>Dooza</td></tr>
<tr><td>Have a support team and want Gorgias-like ecommerce features with seat pricing</td><td>Richpanel</td></tr>
<tr><td>Are a small team on a tight budget</td><td>Re:amaze or Help Scout's free plan</td></tr>
<tr><td>Are a larger or multi-brand operation</td><td>Zendesk or Front</td></tr>
<tr><td>Want the AI agent to handle most conversations</td><td>Intercom (Fin)</td></tr>
<tr><td>Mostly get chat, not email</td><td>Tidio or Shopify Inbox</td></tr>
<tr><td>Like Gorgias but hate the bill</td><td>Keep Gorgias, lower your plan, and have Dooza work inside it</td></tr>
</tbody>
</table>
<p>Before switching, count your last three months of billable tickets and AI resolutions. Price each option on that real volume, not the headline plan.</p>`,
        },
    ],
    faqs: [
        { question: 'What is the best Gorgias alternative?', answer: 'It depends on who does the work. For a done-for-you option, Dooza answers customers with AI and a human check inside your existing inbox. For a helpdesk with seat pricing and ecommerce features, Richpanel is the closest swap. For a budget helpdesk, Re:amaze or Help Scout.' },
        { question: 'Who are Gorgias\'s competitors?', answer: 'The most common Gorgias competitors are Zendesk, Freshdesk, Help Scout, Richpanel, Re:amaze, Front, Intercom (Fin), Tidio and Shopify Inbox. This page compares their prices and AI fees, checked October 21, 2026.' },
        { question: 'What is the cheapest Gorgias alternative?', answer: 'Shopify Inbox is free for chat, Help Scout has a free plan for up to 5 users, and Tidio has a free plan with 50 conversations. Among paid ecommerce helpdesks, Re:amaze starts at $29 per team member or $59 flat per month.' },
        { question: 'How much does Gorgias cost in 2026?', answer: 'As of October 21, 2026, Gorgias helpdesk-only plans are Starter $10/month for 50 tickets, Basic $60/month ($50 annual) for 300, Pro $360/month ($300 annual) for 2,000, and Advanced $900/month ($750 annual) for 5,000. With AI Agent they are $40, $90 ($77 annual), $550 ($471 annual) and $1,430 ($1,227 annual).' },
        { question: 'Does Gorgias have AI?', answer: 'Yes. Gorgias sells AI Agent on every plan as a separate line on the bill. Each plan includes 30 to 530 automated interactions, then charges $1.00 (Starter), $0.90 (Basic, Pro) or $0.85 (Advanced) per automated interaction (gorgias.com/pricing, checked October 21, 2026).' },
        { question: 'Does Gorgias charge twice when AI resolves a ticket?', answer: 'It can. Gorgias\'s billing help center says a ticket fee and an automation fee may both apply to the same ticket when AI Agent resolves it entirely, without human intervention (checked October 21, 2026).' },
        { question: 'Can I migrate my tickets from Gorgias?', answer: 'Usually, but check first. Richpanel\'s pricing page offers to migrate tickets and data from Gorgias; for other tools, ask the vendor whether they import Gorgias tickets, macros and customer history before you sign.' },
        { question: 'Is Gorgias better than Zendesk for Shopify?', answer: 'Gorgias is more ecommerce-specific, with deeper Shopify order actions and ticket-based rather than per-agent pricing. Zendesk is more general and scalable, priced per agent. Small Shopify teams usually find Gorgias easier to start with.' },
        { question: 'Why is Gorgias so expensive?', answer: 'Gorgias bills by ticket volume, charges $0.36 to $0.40 for each ticket over your plan, and charges separately for AI-resolved interactions. Busy months and heavy AI use raise the bill.' },
        { question: 'Can I keep Gorgias and still cut costs?', answer: 'Yes. Some brands move to a lower Gorgias plan and have a service such as Dooza answer tickets inside Gorgias, so they keep their setup and history without paying for higher tiers or heavy AI usage.' },
    ],
    related: [
        { href: '/blog/gorgias-pricing', label: 'Gorgias pricing, explained', desc: 'Plans, overages, AI fees and worked examples.' },
        { href: '/blog/gorgias-ai', label: 'Gorgias AI Agent review', desc: 'What it does, what it costs, where it struggles.' },
        { href: '/ecommerce-customer-service-outsourcing', label: 'Ecommerce customer service outsourcing', desc: 'If you would rather not run a helpdesk.' },
        { href: '/alternatives', label: 'All Dooza comparisons', desc: 'Alternatives and head-to-heads.' },
    ],
    service: { name: 'Dooza AI Customer Support', type: 'Done-for-you ecommerce customer support', audience: 'Shopify and ecommerce brands' },
};

export default page;
