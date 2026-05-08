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
    {
        slug: 'outbound-pro',
        name: 'Outbound Pro',
        emoji: 'O',
        role: 'Outbound Email Automation Employee',
        sourceAgent: 'outreach',
        title: 'Outbound Pro — Outbound Email Automation That Finds the Reply',
        metaDescription: 'Outbound Pro helps connect sender mailboxes, create approved outbound campaigns, import leads, preview sequences, sync replies, and report campaign stats.',
        keywords: [
            'outbound email automation', 'AI outbound email agent', 'cold email automation',
            'email campaign automation', 'AI email follow up', 'sales outreach automation',
            'AI email campaign agent', 'Dooza Outbound Pro',
        ],
        image: '/logo.png',
        date: '2026-05-08',
        modifiedDate: '2026-05-08',
        eyebrow: 'Email Automation',
        heroPitch: 'Outbound Email Automation That Finds the Reply, Not Just the Send',
        heroDescription: 'Outbound Pro connects sender mailboxes, builds approved campaigns, imports leads, sends sequences after approval, syncs replies, and reports what happened.',
        heroNote: 'Do the whole workflow by chatting with the AI: connect, draft, approve, send, sync replies, and review stats.',
        primaryCta: 'Start with Outbound Pro',
        accent: {
            from: 'from-emerald-600',
            to: 'to-teal-700',
            text: 'text-emerald-800',
            bg: 'bg-emerald-50',
            border: 'border-emerald-100',
            ring: 'ring-emerald-100',
        },
        proof: [
            { label: 'Approval-first', value: 'No blind sends' },
            { label: 'Workflow', value: 'Sender to reply' },
            { label: 'Visibility', value: 'Stats included' },
        ],
        heroPreview: {
            title: 'Campaign control room',
            rows: [
                { label: 'Sender mailbox', value: 'Connected', status: 'Ready' },
                { label: 'Sequence preview', value: 'Approved', status: 'Safe' },
                { label: 'Replies', value: 'Synced', status: 'Visible' },
            ],
        },
        capabilities: [
            {
                icon: 'MailCheck',
                title: 'Sender Setup Without Credential Chaos',
                description: 'Outbound Pro helps users connect sender mailboxes through a secure setup link, then checks sender status before campaign work begins.',
                details: ['Secure mailbox connection flow', 'Sender status checks', 'Mailbox readiness review'],
            },
            {
                icon: 'Send',
                title: 'Approved Campaign Creation',
                description: 'It creates campaigns, sets sequences, imports leads, and shows rendered previews before any campaign is started.',
                details: ['Campaign and sequence setup', 'Lead import support', 'Rendered previews for review'],
            },
            {
                icon: 'Inbox',
                title: 'Reply Sync and Follow-Up',
                description: 'After a campaign runs, Outbound Pro can sync replies, list responses, draft follow-ups, and send only after explicit approval.',
                details: ['Reply sync', 'Stored reply lists', 'Approved response sending'],
            },
            {
                icon: 'BarChart3',
                title: 'Campaign Stats You Can Read',
                description: 'It reports campaign stats so teams can see what was connected, what was sent, and what came back.',
                details: ['Campaign status', 'Reply visibility', 'Send/reply reporting'],
            },
        ],
        workflow: [
            { icon: 'Plug', title: 'Connect Sender', description: 'Use the secure sender setup flow and check mailbox readiness.' },
            { icon: 'FileText', title: 'Build Sequence', description: 'Create the campaign, write the subject and body, and import leads.' },
            { icon: 'ShieldCheck', title: 'Preview and Approve', description: 'Review rendered emails and approve the sender, leads, subject, and body.' },
            { icon: 'MessageCircleReply', title: 'Sync Replies', description: 'List replies, review stats, and approve any follow-up responses.' },
        ],
        useCases: [
            'Founder-led sales outreach',
            'Agency prospecting campaigns',
            'Warm follow-up to imported lead lists',
            'Small controlled demo sends before scaling',
        ],
        safety: [
            'Campaign emails are not sent until the sender, leads, subject, and body are approved.',
            'Warmup is only described as active after warmup status confirms it.',
            'Outbound Pro does not promise guaranteed replies or guaranteed inbox placement.',
        ],
        relatedAgents: ['lead-gen-pro', 'maily', 'voice-pro'],
        faqData: [
            {
                question: 'What does Outbound Pro actually automate?',
                answer: 'Outbound Pro helps connect sender mailboxes, create campaigns, set sequences, import leads, preview campaign emails, start or pause approved campaigns, sync replies, send approved responses, and show campaign stats.',
            },
            {
                question: 'Does Outbound Pro send emails without approval?',
                answer: 'No. Campaign emails require explicit approval of the sender, lead list, subject, and body before sending.',
            },
            {
                question: 'Does it guarantee replies or inbox placement?',
                answer: 'No. Outbound Pro gives you an operational workflow for approved outbound email campaigns, reply syncing, and stats. It does not guarantee deliverability, replies, or revenue.',
            },
            {
                question: 'Is this the same as Maily?',
                answer: 'No. Outbound Pro is for outbound campaign workflows. Maily is the inbox-side email employee for reading, drafting, replying, searching, and organizing Gmail.',
            },
        ],
    },
    {
        slug: 'lead-gen-pro',
        name: 'Lead Gen Pro',
        emoji: 'L',
        role: 'AI Lead Generation Employee',
        sourceAgent: 'leady',
        title: 'Lead Gen Pro — AI Lead Generation Agent for Clean Prospect Lists',
        metaDescription: 'Lead Gen Pro finds prospects through Apify-backed searches, checks lead credits, saves CSVs, supports saved ICP re-runs, and deduplicates delivered leads.',
        keywords: [
            'AI lead generation agent', 'AI lead finder', 'B2B lead generation AI',
            'AI prospecting tool', 'AI sales leads', 'Apify lead generation',
            'lead list generator', 'Dooza Lead Gen Pro',
        ],
        image: '/logo.png',
        date: '2026-05-08',
        modifiedDate: '2026-05-08',
        eyebrow: 'Lead Generation',
        heroPitch: 'Find Prospects Without Building a Scraping Stack',
        heroDescription: 'Lead Gen Pro turns a target customer profile into a clean lead search, estimates credits, runs verified lead sources, previews results, and saves a CSV to your Files tab.',
        primaryCta: 'Start with Lead Gen Pro',
        accent: {
            from: 'from-orange-600',
            to: 'to-amber-700',
            text: 'text-orange-800',
            bg: 'bg-orange-50',
            border: 'border-orange-100',
            ring: 'ring-orange-100',
        },
        proof: [
            { label: 'Sources', value: 'Apify-backed' },
            { label: 'Output', value: 'CSV lists' },
            { label: 'Reuse', value: 'Saved ICPs' },
        ],
        heroPreview: {
            title: 'Lead search preview',
            rows: [
                { label: 'ICP', value: 'B2B founders', status: 'Scoped' },
                { label: 'Credits', value: 'Estimated first', status: 'Clear' },
                { label: 'CSV', value: 'Saved to Files', status: 'Ready' },
            ],
        },
        capabilities: [
            {
                icon: 'Search',
                title: 'ICP-Based Prospect Searches',
                description: 'Lead Gen Pro can search for B2B people, local businesses, LinkedIn companies, Instagram creators, hiring companies, and web content sources.',
                details: ['B2B people by role', 'Local businesses by location', 'Companies and hiring signals'],
            },
            {
                icon: 'BadgeDollarSign',
                title: 'Credit-Aware Runs',
                description: 'It checks lead credits and gives a cost estimate before running searches, because scraping credits are real usage.',
                details: ['Credit balance check', 'Upfront estimate', 'No silent double-runs'],
            },
            {
                icon: 'Table',
                title: 'Clean CSV Delivery',
                description: 'Completed searches can be saved as CSV files and summarized with a short inline preview.',
                details: ['CSV saved to Files', 'Inline lead preview', 'Normalized lead fields'],
            },
            {
                icon: 'RefreshCw',
                title: 'Saved ICP Re-Runs',
                description: 'When a search works, Lead Gen Pro can save the ICP so users can re-run the same target profile later.',
                details: ['Named ICPs', 'On-demand re-runs', 'Past leads remain available'],
            },
        ],
        workflow: [
            { icon: 'Target', title: 'Define the ICP', description: 'Give the role, industry, location, signal, or source you want.' },
            { icon: 'BadgeDollarSign', title: 'Estimate Credits', description: 'Lead Gen Pro checks available credits and gives the expected usage.' },
            { icon: 'Search', title: 'Run the Search', description: 'It uses a verified actor or discovers a matching actor safely.' },
            { icon: 'Table', title: 'Review the CSV', description: 'Preview leads inline and open the saved CSV from the Files tab.' },
        ],
        useCases: [
            'B2B decision-maker prospecting',
            'Local business lead lists',
            'Hiring-signal company searches',
            'Creator or company discovery',
        ],
        safety: [
            'Lead Gen Pro does not claim every email is verified unless the source provides that field.',
            'CRM push is not claimed here because the current Leady docs mark it out of scope.',
            'Saved ICPs are on-demand re-runs, not scheduled automatic searches.',
        ],
        relatedAgents: ['outbound-pro', 'voice-pro', 'ranky'],
        faqData: [
            {
                question: 'What kinds of leads can Lead Gen Pro find?',
                answer: 'It supports B2B people searches, local business searches, LinkedIn company searches, Instagram creator searches, hiring-company searches, and web-content crawls when the source fits.',
            },
            {
                question: 'Does Lead Gen Pro save results as CSV?',
                answer: 'Yes. Completed lead searches can be saved as CSV files in the Files tab, with a short preview shown in chat.',
            },
            {
                question: 'Does it push leads to a CRM?',
                answer: 'Not on this page. The current Lead Gen Pro workflow focuses on finding, normalizing, deduplicating, previewing, and saving leads as CSVs.',
            },
            {
                question: 'Can I re-run the same target profile?',
                answer: 'Yes. Lead Gen Pro can save an ICP by name so you can run it again later on demand.',
            },
        ],
    },
    {
        slug: 'ugc-reel-creator',
        name: 'UGC Reel Creator',
        emoji: 'R',
        role: 'AI Video Creation Employee',
        sourceAgent: 'reely',
        title: 'UGC Reel Creator — AI Video Creation for Short-Form Product Reels',
        metaDescription: 'UGC Reel Creator drafts scripts, gets approval, generates short vertical AI avatar videos through fal.ai/HeyGen, and delivers MP4 reels.',
        keywords: [
            'AI video creation agent', 'AI UGC video generator', 'AI reel creator',
            'AI avatar video generator', 'AI TikTok video creator', 'Instagram Reel AI',
            'short form video AI', 'Dooza UGC Reel Creator',
        ],
        image: '/logo.png',
        date: '2026-05-08',
        modifiedDate: '2026-05-08',
        eyebrow: 'Video Creation',
        heroPitch: 'Create UGC-Style Product Reels Without Hiring a Creator for Every Draft',
        heroDescription: 'UGC Reel Creator writes a short hook-first script, gets approval, submits an AI avatar reel through fal.ai/HeyGen, and delivers the finished MP4 when generation completes.',
        primaryCta: 'Start with UGC Reel Creator',
        accent: {
            from: 'from-pink-600',
            to: 'to-rose-700',
            text: 'text-pink-700',
            bg: 'bg-pink-50',
            border: 'border-pink-100',
            ring: 'ring-pink-100',
        },
        proof: [
            { label: 'Format', value: '9:16 reels' },
            { label: 'Flow', value: 'Approve first' },
            { label: 'Output', value: 'MP4 video' },
        ],
        heroPreview: {
            title: 'Reel generation flow',
            rows: [
                { label: 'Script', value: '150 chars max', status: 'Drafted' },
                { label: 'Approval', value: 'Required', status: 'Cost-safe' },
                { label: 'Video', value: 'MP4 delivered', status: 'Ready' },
            ],
        },
        capabilities: [
            {
                icon: 'Video',
                title: 'Short-Form Script Drafting',
                description: 'It drafts concise UGC-style scripts with a hook, one idea, and a CTA before generation starts.',
                details: ['Hook-first structure', 'Short spoken script', 'Brand context included'],
            },
            {
                icon: 'UserCheck',
                title: 'Approval Before Generation',
                description: 'Video generation costs real money, so UGC Reel Creator waits for explicit script approval before submitting the job.',
                details: ['Script preview', 'User approval', 'No silent regenerations'],
            },
            {
                icon: 'Clapperboard',
                title: 'AI Avatar Reel Generation',
                description: 'It submits vertical AI avatar reels through fal.ai using the HeyGen video-agent model configured in the workforce repo.',
                details: ['fal.ai connector', 'HeyGen video-agent', 'Vertical reel dimensions'],
            },
            {
                icon: 'FileVideo',
                title: 'MP4 Delivery',
                description: 'When the generation finishes, the final MP4 URL is delivered so the reel can be viewed and reused.',
                details: ['Async status checks', 'MP4 output', 'Stored media URL'],
            },
        ],
        workflow: [
            { icon: 'ClipboardList', title: 'Give the Brief', description: 'Share product, hook, audience, and platform.' },
            { icon: 'FileText', title: 'Approve Script', description: 'Review the short UGC script before any generation cost is used.' },
            { icon: 'Video', title: 'Generate Reel', description: 'UGC Reel Creator submits the approved script for avatar video generation.' },
            { icon: 'FileVideo', title: 'Get the MP4', description: 'The finished reel is returned as a playable MP4 URL.' },
        ],
        useCases: [
            'Product launch reels',
            'Offer announcements',
            'Testimonial-style avatar clips',
            'Short educational hooks for social feeds',
        ],
        safety: [
            'No real person likeness claims; use stock AI avatars only.',
            'No unverified product claims are invented for scripts.',
            'No automatic regeneration after tool errors or failed jobs without user approval.',
        ],
        relatedAgents: ['outbound-pro', 'lead-gen-pro', 'ranky'],
        faqData: [
            {
                question: 'Does UGC Reel Creator generate the video immediately?',
                answer: 'It drafts the script first and waits for approval. After approval, video generation is submitted asynchronously and can take a few minutes.',
            },
            {
                question: 'What kind of video does it create?',
                answer: 'It creates short vertical AI avatar reels designed for formats like Instagram Reels, TikTok, and Shorts.',
            },
            {
                question: 'Can it impersonate a real person?',
                answer: 'No. The workflow is built around stock AI avatars and avoids real-person likeness impersonation.',
            },
            {
                question: 'Does it guarantee views or virality?',
                answer: 'No. It helps produce short-form video assets, but it does not guarantee reach, views, or conversions.',
            },
        ],
    },
    {
        slug: 'voice-pro',
        name: 'Voice Pro',
        emoji: 'V',
        role: 'AI Voice Agent',
        sourceAgent: 'rachel',
        title: 'Voice Pro — AI Voice Agent for Missed Calls and Lead Capture',
        metaDescription: 'Voice Pro is Dooza’s voice-agent offer for answering calls, qualifying callers, booking appointments, and sending summaries through onboarding-configured workflows.',
        keywords: [
            'AI voice agent', 'AI receptionist', 'AI phone answering',
            'AI call answering service', 'AI appointment booking', 'AI missed call assistant',
            'voice agent for small business', 'Dooza Voice Pro',
        ],
        image: '/logo.png',
        date: '2026-05-08',
        modifiedDate: '2026-05-08',
        eyebrow: 'Voice Agent',
        heroPitch: 'Turn Missed Calls Into Captured Conversations',
        heroDescription: 'Voice Pro is the Dooza voice-agent offer for businesses that need calls answered, callers qualified, appointments booked, and summaries routed without relying on voicemail.',
        primaryCta: 'Start with Voice Pro',
        verificationNote: 'Voice Pro is presented from existing Dooza marketing evidence for Rachel/voice workflows, not as a verified installable workforce template.',
        accent: {
            from: 'from-blue-600',
            to: 'to-cyan-700',
            text: 'text-blue-800',
            bg: 'bg-blue-50',
            border: 'border-blue-100',
            ring: 'ring-blue-100',
        },
        proof: [
            { label: 'Coverage', value: 'Call handling' },
            { label: 'Goal', value: 'Lead capture' },
            { label: 'Setup', value: 'Onboarding-led' },
        ],
        heroPreview: {
            title: 'Call capture workflow',
            rows: [
                { label: 'Caller need', value: 'Captured', status: 'Logged' },
                { label: 'Qualification', value: 'Asked live', status: 'Clear' },
                { label: 'Summary', value: 'Sent to team', status: 'Routed' },
            ],
        },
        capabilities: [
            {
                icon: 'PhoneCall',
                title: 'Call Answering for Busy Teams',
                description: 'Voice Pro is positioned for teams that lose leads when calls go unanswered during work, after hours, or while staff are busy.',
                details: ['Inbound call coverage', 'Missed-call reduction', 'Professional greeting flow'],
            },
            {
                icon: 'ListChecks',
                title: 'Caller Qualification',
                description: 'The voice-agent workflow can be configured around business-specific questions, service types, urgency, and next steps.',
                details: ['Custom questions', 'Lead context capture', 'Urgency routing'],
            },
            {
                icon: 'CalendarCheck',
                title: 'Appointment Booking Workflows',
                description: 'Existing Dooza marketing describes appointment booking and confirmations as part of Rachel/voice-agent setup.',
                details: ['Calendar-oriented flow', 'Booking intent capture', 'Confirmation workflow'],
            },
            {
                icon: 'MessagesSquare',
                title: 'Summaries and Handoffs',
                description: 'Voice Pro is planned around giving teams call summaries and routing context instead of forcing them to decode voicemail.',
                details: ['Call summaries', 'Team handoff', 'Follow-up context'],
            },
        ],
        workflow: [
            { icon: 'ClipboardList', title: 'Configure the Script', description: 'Set the greeting, business info, FAQs, and qualification questions during onboarding.' },
            { icon: 'PhoneForwarded', title: 'Route Calls', description: 'Forward business calls into the configured voice-agent workflow.' },
            { icon: 'ListChecks', title: 'Qualify Caller', description: 'Capture needs, contact details, urgency, and booking intent.' },
            { icon: 'MessagesSquare', title: 'Send Summary', description: 'Route the call summary and next step to the team.' },
        ],
        useCases: [
            'Local service businesses that miss calls on job sites',
            'Salons and appointment-based teams',
            'Real estate lead intake',
            'After-hours call capture',
        ],
        safety: [
            'Voice Pro should not be described as a verified workforce template until Rachel/Voice Pro code is confirmed.',
            'Do not claim legal, medical, or financial advice. Route complex questions to humans.',
            'Do not promise callers will never know it is AI; use transparent wording when asked.',
        ],
        relatedAgents: ['lead-gen-pro', 'outbound-pro', 'ranky'],
        faqData: [
            {
                question: 'Is Voice Pro a verified workforce agent template?',
                answer: 'This page presents Voice Pro from existing Dooza marketing evidence for Rachel and voice-agent workflows. It should not be treated as a verified installable workforce template until that code is confirmed.',
            },
            {
                question: 'What is Voice Pro for?',
                answer: 'Voice Pro is for businesses that want a configured voice-agent workflow to answer calls, capture caller context, qualify leads, support booking flows, and route summaries.',
            },
            {
                question: 'Does Voice Pro give professional advice?',
                answer: 'No. Voice workflows should collect information, answer approved FAQs, and route complex or regulated questions to humans.',
            },
            {
                question: 'How is it set up?',
                answer: 'The safe positioning is onboarding-led setup: business info, greeting, FAQs, qualification questions, routing rules, and booking workflow are configured before use.',
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
    "name": `How to Get Started with ${page.name}`,
    "description": `Get started with ${page.name}, your ${page.role}. ${page.heroPitch}`,
    "totalTime": "PT5M",
    "step": (page.howItWorks || page.workflow || []).map((step, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": step.title,
        "text": step.description,
        "url": `${siteUrl}/agents/${page.slug}`,
    })),
});
