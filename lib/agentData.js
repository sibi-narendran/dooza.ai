import { SITE_URL } from './site';

export const agentPages = [
    {
        slug: 'ranky',
        name: 'Ranky',
        emoji: '🌱',
        role: 'AI Visibility & Growth Employee',
        title: 'Ranky — AI Visibility Employee: Get Found on Google, ChatGPT & Social ($49/mo)',
        metaDescription: 'Ranky makes your business visible everywhere — Google, ChatGPT, LinkedIn, YouTube, Reddit. Publishes daily blogs, finds posts to comment on, generates images, and writes in your brand voice. $49/month.',
        keywords: [
            'AI visibility employee', 'AI brand growth', 'AI content agent',
            'AI SEO', 'AI GEO', 'generative engine optimization', 'AI chatbot visibility',
            'AI Reddit agent', 'AI LinkedIn engagement', 'AI YouTube agent',
            'AI blog publisher', 'AI content distribution', 'AI image generation',
            'AI for Shopify', 'AI for WordPress', 'AI comment generator',
            'brand voice AI', 'Dooza Ranky',
        ],
        image: '/agents/ranky-og.png',
        date: '2026-03-21',
        modifiedDate: '2026-04-16',

        // Hero
        heroPitch: 'Makes your brand visible everywhere — Google, ChatGPT, LinkedIn, Reddit, YouTube.',
        heroDescription: 'Ranky publishes SEO blogs daily, finds posts for you to comment on, generates images and captions, and trains on your brand voice. One AI employee, infinite distribution. $49/month.',

        // Capability cards
        capabilities: [
            {
                icon: 'Search',
                title: 'Google + AI Chatbot Visibility (GEO)',
                description: 'Gets you ranked on Google and cited by ChatGPT, Perplexity, Claude, and Gemini. Traditional SEO + Generative Engine Optimization in one employee.',
                stat: '2x',
                statLabel: 'citation surfaces (Google + AI)',
                details: [
                    'Keyword and topic research with real search data',
                    'On-page SEO — title, meta, schema, internal links',
                    'GEO-ready content that gets cited in ChatGPT answers',
                    'Live monitoring — who\'s mentioning you, and where',
                ],
                preview: {
                    type: 'table',
                    rows: [
                        { keyword: 'best ai employee software', volume: '1.4K/mo', difficulty: 'Low', intent: 'Commercial' },
                        { keyword: 'sintra ai alternative', volume: '2.9K/mo', difficulty: 'Medium', intent: 'Commercial' },
                        { keyword: 'ai agent for small business', volume: '3.1K/mo', difficulty: 'Low', intent: 'Commercial' },
                    ],
                },
            },
            {
                icon: 'MessageSquare',
                title: 'Social Listening + Auto-Commenting',
                description: 'Finds relevant conversations on LinkedIn, YouTube, and Reddit — and drafts on-brand comments ready for you to approve (or auto-send on a schedule).',
                stat: '25+',
                statLabel: 'engagement opportunities per day',
                details: [
                    'Searches LinkedIn, YouTube, and Reddit for your topics',
                    'Surfaces high-visibility threads worth commenting on',
                    'Drafts brand-voice comments — auto-send or approve each',
                    'Nightly email recap of what Ranky posted and plans to post',
                ],
                preview: {
                    type: 'checklist',
                    items: [
                        { label: 'r/smallbusiness thread — 840 upvotes', status: 'pass', note: 'Comment drafted' },
                        { label: 'LinkedIn post from target account', status: 'pass', note: 'Comment queued for 9am' },
                        { label: 'YouTube video in your niche — 12K views', status: 'warn', note: 'Awaiting approval' },
                        { label: 'Nightly email recap — scheduled 9pm', status: 'pass' },
                    ],
                },
            },
            {
                icon: 'CalendarClock',
                title: 'Daily Blog Publishing + Media Embeds',
                description: 'Writes and publishes SEO-ready blogs on your cadence — with YouTube videos, Reddit threads, and AI-generated images embedded automatically.',
                stat: '7x',
                statLabel: 'posts per week on autopilot',
                details: [
                    'Set cadence — daily, 3x/week, or custom routines',
                    'Generates featured images + inline illustrations',
                    'Embeds relevant YouTube videos and Reddit threads',
                    'Publishes to Shopify, WordPress, Wix, or your custom site',
                ],
                preview: {
                    type: 'schedule',
                    items: [
                        { day: 'Mon', status: 'published', title: 'AI Visibility Trends 2026' },
                        { day: 'Tue', status: 'published', title: 'Why Reddit Beats Ads for B2B' },
                        { day: 'Wed', status: 'scheduled', title: 'GEO Playbook: Get Cited by ChatGPT' },
                        { day: 'Thu', status: 'scheduled', title: 'How to Win Your Niche on LinkedIn' },
                    ],
                },
            },
            {
                icon: 'BarChart3',
                title: 'Brand-Voice Training + 1,000+ Integrations',
                description: 'Train Ranky in plain English — "write like this", "images look like this", "comment like this". Connects to 1,000+ apps including Close CRM, Shopify, WordPress, and your custom stack.',
                stat: '1,000+',
                statLabel: 'apps connected via Zapier',
                details: [
                    'Natural-language training — paste examples, Ranky learns',
                    'Brand voice, image style, and comment tone — all tunable',
                    'Pulls context from Close CRM, Notion, Drive, and more',
                    'Schedule routines — "email me every night what you posted"',
                ],
                preview: {
                    type: 'bars',
                    items: [
                        { label: 'Brand voice match', value: 96, color: 'emerald' },
                        { label: 'Image style match', value: 89, color: 'emerald' },
                        { label: 'Comment tone match', value: 92, color: 'emerald' },
                    ],
                },
            },
        ],

        // Chat demo
        chatDemo: [
            { role: 'user', text: 'Find a Reddit post I should comment on today' },
            { role: 'agent', text: 'Found 4 high-signal threads in r/smallbusiness and r/Entrepreneur. Top pick: "What AI tools are actually worth paying for?" — 1,240 upvotes, OP open to recommendations. Brand-voice comment drafted for your approval.' },
            { role: 'user', text: 'Publish it and write today\'s blog — embed the thread' },
            { role: 'agent', text: 'Comment posted. 1,900-word blog published: "4 AI Tools Small Business Owners Actually Recommend on Reddit" — includes the thread embed, two YouTube videos, and a generated hero image. Nightly recap coming at 9pm.' },
        ],

        // How it works
        howItWorks: [
            { num: '1', icon: 'UserPlus', title: 'Hire Ranky', description: 'Add Ranky to your workforce in one click. Connect your site, socials, and CRM.' },
            { num: '2', icon: 'MessageSquare', title: 'Train in Your Voice', description: 'Paste examples. Tell Ranky "write like this" and "images look like this." He learns your tone, fast.' },
            { num: '3', icon: 'TrendingUp', title: 'Set the Routine', description: 'Pick the cadence — blogs per day, comments per day, nightly email recap. Ranky runs it on autopilot.' },
        ],

        // Expertise accordion
        expertise: [
            {
                question: 'Generative Engine Optimization (GEO)',
                answer: 'Ranky optimizes for the new search layer — ChatGPT, Perplexity, Claude, Gemini — not just Google. That means specific claims, third-party citations, schema markup, Reddit and Quora presence, and consistent NAP across the web. Ranky handles all of it, so your brand gets cited when AI answers questions in your niche.',
            },
            {
                question: 'Social Engagement That Doesn\'t Sound Like a Bot',
                answer: 'Ranky studies your existing comments, posts, and emails to learn your tone. Every comment he drafts for LinkedIn, YouTube, or Reddit sounds like you wrote it. You review the queue each morning — approve, edit, or auto-send. Nothing goes live outside the rules you set.',
            },
            {
                question: 'Publishing Without the Boring Part',
                answer: 'Ranky writes the article, generates the hero image, embeds relevant YouTube videos and Reddit threads for depth, sets the internal links, and publishes on your schedule. Works with Shopify, WordPress, Wix, and custom sites via API or Zapier.',
            },
            {
                question: 'Training Ranky in Plain English',
                answer: 'No prompt engineering. Just say "Here\'s how I write," "Generate images like this mockup," "Never comment on political threads," "Email me a summary at 9pm." Ranky remembers and follows. Update the rules anytime — he adapts instantly.',
            },
        ],

        // Integrations
        integrations: [
            { name: 'Google', description: 'SEO + Search Console' },
            { name: 'ChatGPT / Perplexity', description: 'GEO targeting' },
            { name: 'LinkedIn', description: 'Post-finding + commenting' },
            { name: 'YouTube', description: 'Video discovery + embeds' },
            { name: 'Reddit', description: 'Thread discovery + commenting' },
            { name: 'Shopify', description: 'Blog publishing' },
            { name: 'WordPress', description: 'Blog publishing' },
            { name: 'Wix', description: 'Blog publishing' },
            { name: 'Close CRM', description: 'Voice + context inspiration' },
            { name: 'Zapier', description: '1,000+ apps connected' },
        ],

        // FAQ
        faqData: [
            {
                question: 'What does Ranky actually do?',
                answer: 'Ranky is your AI visibility and growth employee. He publishes SEO blogs daily, finds posts on LinkedIn, YouTube, and Reddit for you to engage with, drafts brand-voice comments, generates images, and makes sure your business shows up in Google AND AI chatbot answers (ChatGPT, Perplexity, Claude, Gemini).',
            },
            {
                question: 'How do I train Ranky to sound like me?',
                answer: 'Plain English. Paste a few examples of your writing, your image preferences, and your commenting style. Say "always mention our free trial," "never talk politics," "use this tone for Reddit, this tone for LinkedIn." Ranky learns the rules and applies them going forward.',
            },
            {
                question: 'Can Ranky actually comment on LinkedIn, YouTube, and Reddit?',
                answer: 'Yes. Ranky finds relevant conversations by keyword and intent, drafts on-brand comments, and either queues them for your approval or auto-sends within the rate limits each platform allows. Nothing happens outside the rules you set.',
            },
            {
                question: 'What is GEO and why do I care?',
                answer: 'GEO — Generative Engine Optimization — is SEO for AI chatbots. When people ask ChatGPT or Perplexity "best X for Y," you want your brand in the answer. Ranky writes content with the specific claims, citations, and schema AI trusts, and keeps your Reddit and Quora footprint active — the top domains AI pulls from.',
            },
            {
                question: 'Can Ranky publish to my custom site?',
                answer: 'Yes. Shopify, WordPress, and Wix work out of the box. Custom sites connect via API, webhooks, or Zapier (1,000+ apps). Ranky writes the article, generates images, embeds YouTube and Reddit references, and publishes on your schedule.',
            },
            {
                question: 'Can I set a routine like "write 2 blogs a day, email me every night"?',
                answer: 'Exactly that. Tell Ranky "publish 2 blogs per day at 9am and 2pm, comment on 5 Reddit threads before noon, and email me a recap at 9pm." He runs the routine on autopilot and reports back every night.',
            },
            {
                question: 'Does Ranky guarantee rankings or virality?',
                answer: 'No — and anyone who promises that is lying. Google and AI chatbot algorithms are probabilistic. Ranky maximizes your odds with proven playbooks — GEO-first content, strategic social engagement, and consistent publishing — but outcomes are never guaranteed.',
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
    "name": `How to Get Visible Everywhere with ${page.name}`,
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
