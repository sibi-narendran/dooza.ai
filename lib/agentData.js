import { SITE_URL } from './site';

export const agentPages = [
    {
        slug: 'ranky',
        name: 'Ranky',
        emoji: '🔍',
        role: 'AI SEO Specialist',
        title: 'Ranky — AI SEO That Ranks You on Page 1 ($49/mo)',
        metaDescription: 'Ranky does your SEO on autopilot: keyword research, content optimization, competitor analysis, and daily blog publishing. Proven results starting at $49/month.',
        keywords: [
            'AI SEO specialist', 'automated keyword research', 'AI content optimization',
            'AI blog writer', 'SEO automation tool', 'AI competitor analysis',
            'automated SEO', 'AI search engine optimization', 'SEO AI agent',
            'automated blog publishing', 'AI meta tag generator', 'Dooza Ranky',
        ],
        image: '/agents/ranky-og.png',
        date: '2026-03-21',
        modifiedDate: '2026-03-21',

        // Hero
        heroPitch: 'Puts you on page one. Watches your competitors so you don\'t have to.',
        heroDescription: 'Ranky researches keywords, optimizes your content, analyzes competitors, and publishes SEO-ready blog posts — automatically. Your full-stack SEO department, for $49/month.',

        // Capability cards
        capabilities: [
            {
                icon: 'Search',
                title: 'Keyword Research',
                description: 'Finds high-impact keywords with real search data — volume, difficulty, CPC, and intent.',
                stat: '47+',
                statLabel: 'keywords per research',
                details: [
                    'Google Autocomplete-powered suggestions',
                    'Search intent classification (informational, commercial, transactional)',
                    'Long-tail vs short-tail keyword clusters',
                    'Difficulty & volume tradeoff analysis',
                ],
                preview: {
                    type: 'table',
                    rows: [
                        { keyword: 'ai employee software', volume: '1.2K/mo', difficulty: 'Low', intent: 'Commercial' },
                        { keyword: 'virtual assistant for business', volume: '2.4K/mo', difficulty: 'Medium', intent: 'Informational' },
                        { keyword: 'ai automation tools', volume: '890/mo', difficulty: 'Low', intent: 'Transactional' },
                    ],
                },
            },
            {
                icon: 'FileSearch',
                title: 'Content Optimization',
                description: 'Audits pages with 100+ on-page checks and gives you a prioritized fix list.',
                stat: '100+',
                statLabel: 'on-page checks per audit',
                details: [
                    'Title tags, meta descriptions, heading hierarchy',
                    'SERP analysis — see what\'s ranking and why',
                    'E-E-A-T signals and readability scoring',
                    'Internal linking opportunities',
                ],
                preview: {
                    type: 'checklist',
                    items: [
                        { label: 'Title tag (58 chars)', status: 'pass' },
                        { label: 'Meta description', status: 'warn', note: '172 chars — trim to 160' },
                        { label: 'H1 contains keyword', status: 'pass' },
                        { label: 'Internal links', status: 'fail', note: '0 found — add 3-5 links' },
                        { label: 'Image alt text', status: 'pass' },
                    ],
                },
            },
            {
                icon: 'BarChart3',
                title: 'Competitor Analysis',
                description: 'Monitors competitor rankings and finds the content gaps you\'re missing.',
                stat: '3x',
                statLabel: 'more keyword opportunities found',
                details: [
                    'Discover competing domains by keyword overlap',
                    'Content gap analysis — keywords they rank for, you don\'t',
                    'Backlink profile comparison',
                    'Ranked keywords audit with traffic estimates',
                ],
                preview: {
                    type: 'bars',
                    items: [
                        { label: 'Your domain', value: 42, color: 'emerald' },
                        { label: 'Competitor A', value: 78, color: 'slate' },
                        { label: 'Competitor B', value: 65, color: 'slate' },
                    ],
                },
            },
            {
                icon: 'CalendarClock',
                title: 'Auto Publishing',
                description: 'Writes and publishes SEO-optimized blog posts on your schedule — daily, weekly, or custom.',
                stat: '7x',
                statLabel: 'posts per week on autopilot',
                details: [
                    'Set your schedule — daily, weekly, or custom days',
                    'Drafts reviewed and queued automatically',
                    'Publishes to Shopify, WordPress, or Wix',
                    'Featured images generated and attached',
                ],
                preview: {
                    type: 'schedule',
                    items: [
                        { day: 'Mon', status: 'published', title: 'AI Automation Trends 2026' },
                        { day: 'Wed', status: 'published', title: 'How to Reduce Customer Churn' },
                        { day: 'Fri', status: 'scheduled', title: 'Top 10 SaaS SEO Strategies' },
                    ],
                },
            },
        ],

        // Chat demo
        chatDemo: [
            { role: 'user', text: 'Find keywords for our SaaS landing page' },
            { role: 'agent', text: 'Found 47 keywords. Top 3: "ai employee software" (1.2K/mo, low difficulty), "virtual assistant for business" (2.4K/mo, medium), "ai automation tools" (890/mo, low). Want me to write a blog post targeting the first one?' },
            { role: 'user', text: 'Yes, write and publish it to our blog' },
            { role: 'agent', text: 'Done! 1,800-word article published with optimized title tag, meta description, H1/H2 hierarchy, internal links, and FAQ schema. Featured image generated and attached.' },
        ],

        // How it works
        howItWorks: [
            { num: '1', icon: 'UserPlus', title: 'Hire Ranky', description: 'Add Ranky to your workforce in one click. Tell him about your brand, industry, and goals.' },
            { num: '2', icon: 'MessageSquare', title: 'Brief Your SEO', description: 'Share your target keywords, competitors, and content calendar preferences. Ranky learns your brand voice.' },
            { num: '3', icon: 'TrendingUp', title: 'Watch Rankings Climb', description: 'Ranky researches, writes, optimizes, and publishes — automatically. You review and approve from your dashboard.' },
        ],

        // SEO expertise accordion
        expertise: [
            {
                question: 'On-Page SEO',
                answer: 'Ranky optimizes every on-page signal: title tags (50-60 chars, keyword front-loaded), meta descriptions (150-160 chars with CTA), H1/H2/H3 heading hierarchy, internal linking, image alt text, keyword density (1-2%, never stuffed), and content length benchmarked against top-ranking competitors.',
            },
            {
                question: 'Keyword Strategy',
                answer: 'Ranky classifies every keyword by search intent — informational, navigational, transactional, or commercial. He balances long-tail (low competition, high conversion) against short-tail (high volume, brand awareness), builds topic clusters around pillar content, and identifies content gaps your competitors are filling.',
            },
            {
                question: 'Technical SEO',
                answer: 'Ranky checks page speed, mobile-first indexing, structured data (JSON-LD), crawlability, Core Web Vitals, and site architecture. Every blog post he publishes includes proper heading IDs for table-of-contents generation, responsive YouTube embeds, and FAQ schema markup.',
            },
        ],

        // Integrations
        integrations: [
            { name: 'DataForSEO', description: 'Keyword & SERP data' },
            { name: 'Shopify', description: 'Blog publishing' },
            { name: 'WordPress', description: 'Blog publishing' },
            { name: 'Wix', description: 'Blog publishing' },
            { name: 'YouTube', description: 'Content enrichment' },
        ],

        // FAQ
        faqData: [
            {
                question: 'What SEO tools does Ranky use?',
                answer: 'Ranky uses DataForSEO for keyword research (search volume, difficulty, CPC, intent), SERP analysis, on-page audits (100+ checks), backlink profiling, and competitor domain analysis. All data is real-time, not cached or estimated.',
            },
            {
                question: 'Can Ranky publish directly to my blog?',
                answer: 'Yes. Ranky connects to Shopify, WordPress, Wix, and custom websites. He writes the article, generates a featured image, and saves it as a draft in your content calendar. You review and approve — then it auto-publishes to your platform.',
            },
            {
                question: 'Does Ranky guarantee rankings?',
                answer: 'No — and anyone who does is lying. SEO is probabilistic. Ranky maximizes your chances by following proven best practices: keyword-intent matching, E-E-A-T signals, competitor gap analysis, and technically sound content. But Google\'s algorithm is theirs, not ours.',
            },
            {
                question: 'How does the keyword research work?',
                answer: 'Ranky uses keyword_suggestions (Google Autocomplete data) and keyword_info (volume, difficulty, CPC, competition level) to find opportunities. He clusters keywords by intent and priority, then recommends which to target first based on your site\'s authority and competition.',
            },
            {
                question: 'Can Ranky analyze my competitors?',
                answer: 'Yes. Ranky discovers competing domains by keyword overlap, runs content gap analysis to find keywords they rank for that you don\'t, compares backlink profiles, and audits their ranked keywords with traffic estimates. He saves findings to memory for ongoing strategy.',
            },
        ],
    },
];

// Schema generators

export const generateAgentSchema = (page, siteUrl = SITE_URL) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `${page.name} - ${page.role}`,
    "description": page.metaDescription,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": `${siteUrl}/agents/${page.slug}`,
    "offers": {
        "@type": "Offer",
        "price": "39",
        "priceCurrency": "USD",
        "priceValidUntil": "2027-12-31",
    },
    "featureList": page.capabilities.map(c => c.title),
    "author": {
        "@type": "Organization",
        "name": "Dooza",
        "url": siteUrl,
    },
});

export const generateHowToSchema = (page, siteUrl = SITE_URL) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Automate SEO with ${page.name}`,
    "description": `Get started with ${page.name}, your ${page.role}. ${page.heroPitch}`,
    "totalTime": "PT5M",
    "step": page.howItWorks.map((step, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": step.title,
        "text": step.description,
        "url": `${siteUrl}/agents/${page.slug}`,
    })),
});
