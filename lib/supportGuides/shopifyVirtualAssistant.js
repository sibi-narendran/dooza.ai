// "shopify virtual assistant" / "virtual assistant shopify": 110/mo each, KD 9,
// CPC ~$39 (DataForSEO, US, 2026-09-30). SERP is VA agencies, Upwork, Reddit.

const src = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const page = {
    slug: 'shopify-virtual-assistant',
    seoTitle: 'Shopify Virtual Assistant: Tasks, Cost & Safe Setup (2026) | Dooza',
    ogTitle: 'Shopify Virtual Assistant: What to Delegate and How to Set Them Up',
    seoDescription: 'What a Shopify virtual assistant does, 2026 costs, which Shopify staff permissions to give, how to hire, and how AI now handles Shopify customer support with a human check.',
    keywords: [
        'shopify virtual assistant', 'virtual assistant shopify', 'shopify virtual assistant services',
        'hire shopify virtual assistant', 'virtual assistant for shopify store',
        'shopify va', 'shopify customer support virtual assistant',
    ],
    eyebrow: 'Shopify hiring guide',
    h1: 'Shopify Virtual Assistant: What They Do, Cost, and How to Set One Up',
    lede: '<p><strong>A Shopify virtual assistant is a remote worker who runs day-to-day tasks inside your Shopify admin: customer support, orders, product listings, collections, discounts and apps.</strong> Most cost $5–15 an hour offshore or $25 an hour and up in the US. This guide covers what to delegate, which staff permissions to give, and which Shopify tasks AI now does better.</p>',
    hero: { src: '/support-guides/shopify-va-hero.jpg', alt: 'Online apparel store owner checking an order notification on a phone in a small studio' },
    breadcrumb: 'Shopify Virtual Assistant',
    updated: '2026-09-30',
    quickAnswer: {
        title: 'The short answer',
        bullets: [
            '<strong>Common Shopify VA tasks:</strong> customer emails and Shopify Inbox chats, order edits and returns, product uploads, collections, discount codes, app admin.',
            '<strong>Cost:</strong> about $5–15/hour for Philippines or India VAs and $25–75/hour for US-based VAs in 2026 (sources below).',
            '<strong>Set up safely:</strong> add them as a Shopify staff account with only the permissions their tasks need.',
            '<strong>Shopify\'s own AI:</strong> Shopify Inbox is free and includes AI-suggested replies, but you or your VA still read and send each one.',
            '<strong>For the support inbox specifically,</strong> an AI-plus-human service replies day and night without a hire.',
        ],
    },
    offerAfter: 2,
    sections: [
        {
            id: 'tasks',
            heading: 'What does a Shopify virtual assistant do?',
            nav: 'What they do',
            html: `
<ul>
<li><strong>Customer support:</strong> answer emails and Shopify Inbox chats, check order status and tracking, handle returns and exchanges, reply to reviews.</li>
<li><strong>Order management:</strong> edit orders, update addresses before fulfilment, tag and route orders, chase stuck shipments.</li>
<li><strong>Product management:</strong> upload products and variants, write descriptions, add alt text, organise collections, bulk-edit prices with CSVs.</li>
<li><strong>Store upkeep:</strong> update banners and pages, set up discount codes, test checkout, keep apps configured.</li>
<li><strong>Marketing help:</strong> Shopify Email or Klaviyo campaigns, social posts, gathering UGC and reviews.</li>
<li><strong>Reporting:</strong> weekly sales, returns and support summaries from Shopify analytics.</li>
</ul>`,
        },
        {
            id: 'cost',
            heading: 'How much does a Shopify virtual assistant cost?',
            nav: 'What they cost',
            html: `
<table>
<thead><tr><th>Type</th><th>Typical rate (2026)</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>Philippines or India VA, freelance</td><td>$5–15 per hour</td><td>Listings, orders, support during their shift</td></tr>
<tr><td>Filipino VA, full-time salary</td><td>About $880–1,267 per month</td><td>A dedicated daily operator</td></tr>
<tr><td>US-based VA</td><td>$25–75 per hour</td><td>US-hours support, higher-touch work</td></tr>
<tr><td>Shopify expert (theme or app work)</td><td>Higher, per project</td><td>Code and theme changes, not daily ops</td></tr>
<tr><td>VA agency</td><td>Freelance rate + 20–40%</td><td>Vetting and replacements</td></tr>
</tbody>
</table>
<p>Sources: ${src('https://stealthagents.com/research/cost-of-hiring-a-virtual-assistant-2026', 'Stealth Agents VA cost research')} (May 2026); ${src('https://hiretalent.ph/salary-guide-for-hiring-filipino-virtual-assistants', 'HireTalent.ph salary guide')}.</p>
<p>A Shopify VA is not a Shopify developer. For theme code, custom apps or checkout changes, hire a Shopify Partner or expert for the project.</p>`,
        },
        {
            id: 'permissions',
            heading: 'Which Shopify permissions to give a virtual assistant',
            nav: 'Safe permissions',
            html: `
<p>Add your VA as a staff member in Shopify admin (Settings → Users) rather than sharing your login, and turn on only what their tasks need. A sensible starting point:</p>
<table>
<thead><tr><th>VA role</th><th>Give</th><th>Hold back</th></tr></thead>
<tbody>
<tr><td>Customer support VA</td><td>Orders (view, edit), customers, Inbox, returns app</td><td>Payments settings, payouts, store settings, staff management</td></tr>
<tr><td>Product / listings VA</td><td>Products, collections, files, online store pages</td><td>Orders refunds, payments, finances</td></tr>
<tr><td>Marketing VA</td><td>Marketing, discounts, Shopify Email</td><td>Payments, refunds, apps with billing access</td></tr>
</tbody>
</table>
<p>Also: require two-factor authentication, use a password manager for any other tools, and review staff access when someone leaves. Shopify's permission names change over time, so check the current list in your admin.</p>`,
        },
        {
            id: 'ai-vs-va',
            heading: 'Shopify support: VA, Shopify Inbox AI, or AI plus human?',
            nav: 'VA vs AI',
            html: `
<table>
<thead><tr><th></th><th>Shopify VA</th><th>Shopify Inbox AI suggestions</th><th>AI + human service (e.g. Dooza)</th></tr></thead>
<tbody>
<tr><td><strong>Cost</strong></td><td>Hourly or monthly salary</td><td>Free app</td><td>Flat monthly plan</td></tr>
<tr><td><strong>Who sends the reply</strong></td><td>The VA</td><td>You or your VA, one at a time</td><td>Routine replies send; sensitive ones wait for your tap</td></tr>
<tr><td><strong>Hours</strong></td><td>Their shift</td><td>Whenever someone is online</td><td>Day and night</td></tr>
<tr><td><strong>Order lookups</strong></td><td>Manual in admin</td><td>Shows customer and order context</td><td>Automatic before drafting</td></tr>
<tr><td><strong>Email support</strong></td><td>Yes</td><td>Inbox is chat-focused</td><td>Yes: Gmail, Shopify Inbox or Gorgias</td></tr>
</tbody>
</table>
<p>Shopify Inbox is free and offers AI-suggested replies and instant answers (${src('https://apps.shopify.com/inbox', 'Shopify App Store')}), which is a good start for chat. It still needs a person to read and send, and it doesn't cover your email inbox. For more on Shopify AI tools, see <a href="/blog/best-ai-chatbot-shopify">the best AI chatbots for Shopify</a> and <a href="/blog/ai-for-shopify-store">AI for Shopify stores</a>.</p>`,
            video: {
                id: 'fkCgQ303lcs',
                title: 'Virtual Assistant: How & When To Hire A Shopify Virtual Assistant',
                channel: 'Upsellcom ex ReConvert',
                uploadDate: '2021-02-17T07:00:15-08:00',
                seconds: 1928,
                description: 'When a Shopify store should hire a virtual assistant and how to do it.',
                caption: 'when a Shopify store is ready for a VA, and how to hire one.',
            },
        },
        {
            id: 'how-to-hire',
            heading: 'How to hire a Shopify virtual assistant',
            nav: 'How to hire',
            html: `
<ol>
<li><strong>Choose the role:</strong> support, listings or marketing. One primary role works better than "everything".</li>
<li><strong>Record your SOPs:</strong> screen recordings of you editing an order, uploading a product, answering a return.</li>
<li><strong>Post the job</strong> on OnlineJobs.ph, Upwork or through an agency, naming Shopify and your apps.</li>
<li><strong>Paid test:</strong> five real customer messages and one product upload in a development store or draft product.</li>
<li><strong>Create a staff account</strong> with the permissions above and two-factor authentication.</li>
<li><strong>Review weekly</strong> for two months: reply quality, listing accuracy, response times.</li>
</ol>`,
        },
        {
            id: 'dooza',
            heading: 'Dooza: Shopify customer support, handled',
            nav: 'Where Dooza fits',
            html: `
<p>Dooza is an AI-native company that builds AI products and services for small businesses. <a href="/customer-support-automation-agency">Dooza AI customer support</a> takes the Shopify support inbox off your plate:</p>
<ul>
<li>Looks up the order and carrier scan in Shopify, then drafts the reply from your policies and past answers.</li>
<li>A Dooza specialist checks anything the AI is unsure about.</li>
<li>Refunds, complaints and anything sensitive come to you for one-tap approval.</li>
<li>Works inside Gmail, Shopify Inbox or Gorgias, live in 48 hours, day and night.</li>
</ul>
<p>Send 20 real customer messages and Dooza answers them in your voice before you decide.</p>`,
        },
    ],
    faqs: [
        { question: 'What is a Shopify virtual assistant?', answer: 'A Shopify virtual assistant is a remote worker who handles daily store tasks inside Shopify admin, such as customer support, order edits, returns, product uploads, collections and discount codes.' },
        { question: 'How much does a Shopify virtual assistant cost?', answer: 'In 2026, Philippines and India VAs typically charge about $5 to $15 per hour and full-time Filipino VAs earn roughly $880 to $1,267 per month. US-based VAs charge about $25 to $75 per hour.' },
        { question: 'How do I give a VA access to my Shopify store?', answer: 'Add them as a staff member in Shopify admin under Settings and Users, grant only the permissions their tasks need, and require two-factor authentication. Never share the owner login.' },
        { question: 'Is a Shopify VA the same as a Shopify expert?', answer: 'No. A VA runs daily operations such as orders, listings and support. A Shopify expert or Partner does technical work such as theme code, custom apps and integrations, usually per project.' },
        { question: 'Does Shopify have a free AI for customer support?', answer: 'Shopify Inbox is a free app with AI-suggested replies and instant answers for chat. Someone still needs to review and send replies, and it does not cover your email inbox.' },
        { question: 'Should I hire a Shopify VA or use AI for customer support?', answer: 'If most messages are order status, shipping and returns, AI with human review usually covers them faster and around the clock. Hire a VA for listings, suppliers and work that needs hands-on judgment.' },
    ],
    related: [
        { href: '/ecommerce-virtual-assistant', label: 'Ecommerce virtual assistant', desc: 'Tasks and costs across all store platforms.' },
        { href: '/customer-service-virtual-assistant', label: 'Customer service virtual assistant', desc: 'Hiring for the support inbox.' },
        { href: '/gorgias-alternatives', label: 'Gorgias alternatives', desc: 'Shopify helpdesks and services compared.' },
        { href: '/ecommerce-customer-service-outsourcing', label: 'Ecommerce customer service outsourcing', desc: 'When to outsource store support.' },
    ],
    service: { name: 'Dooza AI Customer Support', type: 'Shopify customer support with AI and human review', audience: 'Shopify stores' },
};

export default page;
