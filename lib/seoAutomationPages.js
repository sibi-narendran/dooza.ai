import { SITE_URL } from './site';

export const automationSeoPages = {
    'ai-automation-services': {
        slug: 'ai-automation-services',
        keyword: 'ai automation services',
        kd: 19,
        volume: '1.3K',
        cpc: '$6.00',
        title: 'AI Automation Services for Small Business',
        metadataTitle: 'AI Automation Services for Small Business | Dooza',
        description:
            'Dooza builds AI automation services with AI employees and Dooza Workflow for support, content, SEO, lead generation, inboxes, and operations.',
        eyebrow: 'AI automation services',
        heroTitle: 'AI automation services that ship workflows, not slide decks',
        heroText:
            'Use Dooza to map repetitive work, connect the tools your team already uses, and launch AI employees that handle support, content, SEO, leads, and operations with approval gates where they matter.',
        toolTitle: 'AI automation service planner',
        toolDescription:
            'Pick the work type and handoff style to see the first workflow we would build for your business.',
        toolFields: [
            {
                id: 'work',
                label: 'Workflow focus',
                options: ['Customer support', 'Content and SEO', 'Lead generation', 'Email operations'],
            },
            {
                id: 'control',
                label: 'Control level',
                options: ['Human approval', 'Auto-run low-risk work', 'Report-only first'],
            },
        ],
        recommendations: {
            'Customer support':
                'Start with support triage: classify each message, draft the reply, route urgent cases, and save the run history in Dooza Workflow.',
            'Content and SEO':
                'Start with a weekly content workflow: collect keyword intent, draft the article, prepare social snippets, and send a review task before publishing.',
            'Lead generation':
                'Start with a lead list workflow: define target accounts, collect prospects, score relevance, and prepare outreach drafts for approval.',
            'Email operations':
                'Start with an inbox workflow: summarize threads, label priority, draft responses, and escalate billing or sensitive messages.',
        },
        steps: [
            'Audit one repeated workflow with clear volume and business value.',
            'Connect the apps needed for that workflow: email, sheets, CRM, website, Slack, or calendar.',
            'Add AI employee instructions, approval rules, and failure handling.',
            'Run the workflow, review the output, and expand only after the first workflow is reliable.',
        ],
        useCases: [
            'Customer support triage and drafted replies',
            'Lead enrichment and outreach preparation',
            'Weekly SEO blog and content workflows',
            'CRM, spreadsheet, and inbox updates',
            'Daily reporting from connected tools',
            'Human approval queues for risky actions',
        ],
        proofPoints: [
            'Built around AI employees and workflow execution',
            'Useful for service businesses, agencies, clinics, ecommerce, and local operators',
            'Human approval can stay on refunds, publishing, spend, and customer commitments',
        ],
        ctaTitle: 'Turn one painful workflow into an AI automation system',
        ctaText:
            'Book a demo and we will map the first workflow that should be automated with Dooza and Dooza Workflow.',
        faq: [
            {
                question: 'What are AI automation services?',
                answer:
                    'AI automation services help a business replace repeated manual work with AI-assisted workflows. A proper service maps the workflow, connects tools, creates AI instructions, adds approval rules, and measures the output.',
            },
            {
                question: 'Is Dooza an AI automation agency?',
                answer:
                    'Dooza is an AI employee and workflow platform. It can be used like an AI automation service because the team can help map and launch workflows, but the long-term system runs inside your Dooza workspace.',
            },
            {
                question: 'What should we automate first?',
                answer:
                    'Start with high-volume, low-risk work such as support triage, lead research, content drafting, reporting, or inbox summaries. Keep sensitive actions behind approval until the workflow is trusted.',
            },
        ],
    },
    'ai-content-automation': {
        slug: 'ai-content-automation',
        keyword: 'ai content automation',
        kd: 10,
        volume: '600',
        cpc: 'N/A',
        title: 'AI Content Automation Workflow Generator',
        metadataTitle: 'AI Content Automation Workflow Generator | Dooza',
        description:
            'Plan AI content automation workflows for blogs, social posts, email campaigns, repurposing, approvals, and publishing with Dooza.',
        eyebrow: 'AI content automation',
        heroTitle: 'Plan an AI content automation workflow that still has quality control',
        heroText:
            'Dooza helps turn content work into repeatable workflows: research, draft, repurpose, review, publish, and report without asking your team to manage five separate tools.',
        toolTitle: 'Content automation workflow generator',
        toolDescription:
            'Choose the content channel and cadence to get a practical workflow blueprint.',
        toolFields: [
            {
                id: 'work',
                label: 'Content channel',
                options: ['SEO blog', 'LinkedIn posts', 'Email newsletter', 'Short-form video ideas'],
            },
            {
                id: 'control',
                label: 'Review style',
                options: ['Approve before publish', 'Draft-only', 'Auto-schedule after approval'],
            },
        ],
        recommendations: {
            'SEO blog':
                'Create a workflow where Ranky finds the keyword, drafts the article, adds internal links, and sends a review task before publishing.',
            'LinkedIn posts':
                'Create a workflow where Somi converts one topic into multiple LinkedIn drafts, waits for approval, then schedules the selected posts.',
            'Email newsletter':
                'Create a workflow where Maily summarizes recent content, drafts the newsletter, checks the CTA, and waits for approval before send.',
            'Short-form video ideas':
                'Create a workflow that turns one customer pain point into hooks, scripts, captions, and a production checklist for short-form videos.',
        },
        steps: [
            'Define the source of truth: topic list, customer notes, product updates, or keyword research.',
            'Create one output format first, such as a blog draft or social post batch.',
            'Add review rules for claims, brand voice, and links.',
            'Repurpose the approved asset into secondary channels and report what shipped.',
        ],
        useCases: [
            'SEO article drafts from keyword briefs',
            'Social post batches from one topic',
            'Newsletter drafts from new articles',
            'Content calendar creation',
            'Repurposing blogs into posts and emails',
            'Publishing approval workflows',
        ],
        proofPoints: [
            'Targets a low-difficulty keyword with direct marketing intent',
            'Connects Ranky, Somi, Maily, and Dooza Workflow into one system',
            'Keeps publishing approvals visible instead of hidden inside a chatbot',
        ],
        ctaTitle: 'Automate content output without losing editorial control',
        ctaText:
            'Book a demo and see how Dooza can turn one topic into blogs, posts, emails, and reports.',
        faq: [
            {
                question: 'What is AI content automation?',
                answer:
                    'AI content automation uses AI and workflow rules to research, draft, review, repurpose, publish, and report on content with less manual work.',
            },
            {
                question: 'Can AI content automation publish automatically?',
                answer:
                    'It can, but many teams should start with approval before publishing. Dooza Workflow can keep publishing, claims, and brand decisions behind human approval.',
            },
            {
                question: 'Which Dooza AI employees help with content automation?',
                answer:
                    'Ranky helps with SEO content, Somi helps with social content, Maily helps with email content, and Dooza Workflow connects the steps.',
            },
        ],
    },
    'ai-automation-examples': {
        slug: 'ai-automation-examples',
        keyword: 'ai automation examples',
        kd: 5,
        volume: '350',
        cpc: '$0.60',
        title: 'AI Automation Examples Library',
        metadataTitle: 'AI Automation Examples Library for Business | Dooza',
        description:
            'Explore practical AI automation examples for support, content, SEO, lead generation, email, reporting, and operations using Dooza Workflow.',
        eyebrow: 'AI automation examples',
        heroTitle: 'AI automation examples you can actually build inside a business',
        heroText:
            'Most AI automation examples are vague. This library focuses on workflows with triggers, actions, approvals, and outputs that a small business can explain to a team.',
        toolTitle: 'Example workflow picker',
        toolDescription:
            'Choose a department to see a concrete AI automation example for Dooza.',
        toolFields: [
            {
                id: 'work',
                label: 'Department',
                options: ['Support', 'Sales', 'Marketing', 'Operations'],
            },
            {
                id: 'control',
                label: 'Goal',
                options: ['Save time', 'Increase output', 'Improve follow-up'],
            },
        ],
        recommendations: {
            Support:
                'New support email triggers a workflow. Dooza classifies the issue, drafts a reply, checks whether it needs approval, updates the sheet, and reports the outcome.',
            Sales:
                'New lead source triggers research. Dooza enriches the lead, scores fit, drafts outreach, and routes high-fit prospects for approval.',
            Marketing:
                'New keyword triggers a content workflow. Ranky creates a brief, drafts content, Somi prepares social posts, and a final task waits for approval.',
            Operations:
                'Daily schedule triggers a report. Dooza collects updates from tools, summarizes blockers, flags missing data, and sends a concise status report.',
        },
        steps: [
            'Start with a trigger: message, form, schedule, file upload, or new row.',
            'Add one AI decision: classify, summarize, draft, score, or route.',
            'Connect one action tool: email, sheet, CRM, calendar, Slack, or database.',
            'Add approval when the action affects customers, money, data, or publishing.',
        ],
        useCases: [
            'Support email triage',
            'Lead enrichment and scoring',
            'SEO content production',
            'Social post approval',
            'Daily operations reporting',
            'Missed-call follow-up',
        ],
        proofPoints: [
            'KD 5 makes this a practical SEO target',
            'Examples naturally link to Dooza Workflow and AI employees',
            'Useful for visitors who are searching before they are ready to buy',
        ],
        ctaTitle: 'Pick one example and turn it into your first workflow',
        ctaText:
            'Book a demo and we will help choose the first automation that should run in your business.',
        faq: [
            {
                question: 'What is a good AI automation example?',
                answer:
                    'A good AI automation example has a clear trigger, a repeatable AI task, an action tool, and a visible output such as a reply, report, CRM update, or approval task.',
            },
            {
                question: 'Which AI automations are safest to start with?',
                answer:
                    'Start with low-risk workflows such as summaries, drafts, triage, reporting, and lead research. Add approval before publishing, sending, deleting, or spending money.',
            },
            {
                question: 'Can these examples run in Dooza Workflow?',
                answer:
                    'Yes. Dooza Workflow is built to connect triggers, AI steps, business tools, approval branches, and reports into one workflow.',
            },
        ],
    },
    'ai-blog-automation': {
        slug: 'ai-blog-automation',
        keyword: 'ai blog automation',
        kd: 7,
        volume: '150',
        cpc: 'N/A',
        title: 'AI Blog Automation Workflow',
        metadataTitle: 'AI Blog Automation Workflow for SEO | Dooza',
        description:
            'Build an AI blog automation workflow for keyword research, briefs, article drafts, internal links, review, publishing, and reporting with Dooza.',
        eyebrow: 'AI blog automation',
        heroTitle: 'AI blog automation that creates a repeatable SEO publishing system',
        heroText:
            'Dooza turns blogging into a workflow: find the keyword, create the brief, draft the post, add links, prepare snippets, wait for review, and report what changed.',
        toolTitle: 'Blog automation planner',
        toolDescription:
            'Choose your publishing goal to see the workflow structure for AI blog automation.',
        toolFields: [
            {
                id: 'work',
                label: 'Blog goal',
                options: ['SEO traffic', 'Product education', 'Comparison pages', 'Industry pages'],
            },
            {
                id: 'control',
                label: 'Publishing control',
                options: ['Editor approves', 'Draft only', 'Schedule after approval'],
            },
        ],
        recommendations: {
            'SEO traffic':
                'Use Ranky to pick a low-KD keyword, create a brief, draft the article, add internal links, and prepare the post for review.',
            'Product education':
                'Turn product workflows into explainers, FAQs, screenshots, and CTA blocks that teach visitors how Dooza works.',
            'Comparison pages':
                'Create a comparison workflow that gathers competitor positioning, maps differences, drafts the page, and routes claims for review.',
            'Industry pages':
                'Build a repeatable template for each industry: pain points, workflows, proof, FAQ, and CTA to book a demo.',
        },
        steps: [
            'Choose a keyword with clear intent and realistic difficulty.',
            'Build a brief with search intent, outline, internal links, and CTA.',
            'Draft the article and check claims before publishing.',
            'Repurpose the published article into social posts and email snippets.',
        ],
        useCases: [
            'Low-KD keyword article workflows',
            'Programmatic industry page drafts',
            'Competitor comparison pages',
            'Internal link suggestions',
            'Meta title and description drafts',
            'Post-publish performance reporting',
        ],
        proofPoints: [
            'Ranky can own the SEO research and draft loop',
            'Dooza Workflow can add review and publishing checkpoints',
            'This page targets a low-competition keyword with clear SEO intent',
        ],
        ctaTitle: 'Turn SEO publishing into a weekly workflow',
        ctaText:
            'Book a demo and see how Ranky and Dooza Workflow can produce SEO content without a messy manual process.',
        faq: [
            {
                question: 'What is AI blog automation?',
                answer:
                    'AI blog automation is a workflow that helps choose topics, create briefs, draft articles, add links, prepare metadata, send reviews, and publish or schedule content.',
            },
            {
                question: 'Should AI blog posts publish automatically?',
                answer:
                    'Most businesses should start with human review. Dooza Workflow can draft and prepare posts while keeping publishing behind approval.',
            },
            {
                question: 'Can AI blog automation help SEO?',
                answer:
                    'It can help when the workflow is based on keyword research, useful content, internal links, correct metadata, and regular review. Automation should improve consistency, not create thin content.',
            },
        ],
    },
    'start-ai-automation-agency': {
        slug: 'start-ai-automation-agency',
        keyword: 'how to start an ai automation agency',
        kd: 4,
        volume: '100',
        cpc: 'N/A',
        title: 'How to Start an AI Automation Agency',
        metadataTitle: 'How to Start an AI Automation Agency with Dooza',
        description:
            'Learn how to start an AI automation agency by packaging repeatable workflows, choosing offers, delivering with Dooza Workflow, and selling clear outcomes.',
        eyebrow: 'Start an AI automation agency',
        heroTitle: 'Start an AI automation agency by selling workflows businesses already need',
        heroText:
            'A good AI automation agency does not sell vague AI. It sells specific outcomes: faster replies, cleaner lead lists, published content, follow-ups, reports, and tool updates.',
        toolTitle: 'AI automation agency offer builder',
        toolDescription:
            'Choose a niche and offer type to see the first service package to sell.',
        toolFields: [
            {
                id: 'work',
                label: 'Client niche',
                options: ['Local services', 'Clinics', 'Agencies', 'Ecommerce'],
            },
            {
                id: 'control',
                label: 'Offer type',
                options: ['Done-for-you setup', 'Monthly workflow ops', 'Audit and build sprint'],
            },
        ],
        recommendations: {
            'Local services':
                'Sell missed-call and lead follow-up automation: capture requests, qualify intent, draft replies, book appointments, and report new opportunities.',
            Clinics:
                'Sell patient enquiry triage: classify requests, send safe replies for approved topics, route urgent cases, and create follow-up tasks.',
            Agencies:
                'Sell content and reporting workflows: produce drafts, summarize campaign results, prepare client updates, and keep approvals visible.',
            Ecommerce:
                'Sell support and retention automation: answer common questions, route refunds, update order notes, and prepare review requests.',
        },
        steps: [
            'Pick one niche with repeated operational pain.',
            'Create one narrow offer with a clear before-and-after result.',
            'Build delivery using Dooza AI employees and Dooza Workflow templates.',
            'Show the workflow visually, then sell the outcome and monthly support.',
        ],
        useCases: [
            'Support automation packages',
            'Lead generation workflow setup',
            'SEO and content automation retainers',
            'Clinic enquiry automation',
            'Ecommerce support workflow builds',
            'Monthly workflow monitoring',
        ],
        proofPoints: [
            'KD 4 gives this page a realistic SEO angle',
            'The topic connects naturally to Dooza partners and resellers',
            'Dooza Workflow makes the demo visual and easier to sell',
        ],
        ctaTitle: 'Build the agency offer around one repeatable workflow',
        ctaText:
            'Book a partner demo and see how Dooza can power your AI automation agency offers.',
        faq: [
            {
                question: 'How do you start an AI automation agency?',
                answer:
                    'Start by choosing one niche, finding one repeated workflow, building a clear service package, and using a platform like Dooza Workflow to deliver the automation reliably.',
            },
            {
                question: 'What should an AI automation agency sell first?',
                answer:
                    'Sell a narrow outcome such as support triage, lead follow-up, content production, reporting, or CRM updates. Avoid broad promises like automating the whole business.',
            },
            {
                question: 'Can Dooza help agencies deliver AI automation?',
                answer:
                    'Yes. Agencies can use Dooza AI employees and Dooza Workflow to create visual workflows, connect tools, add approvals, and run repeatable client systems.',
            },
        ],
    },
};

export const automationSeoPageSlugs = Object.keys(automationSeoPages);

export function getAutomationSeoPage(slug) {
    return automationSeoPages[slug];
}

export function getAutomationSeoPageUrl(slug) {
    return `${SITE_URL}/${slug}`;
}

export function getAutomationSeoMetadata(slug) {
    const page = getAutomationSeoPage(slug);
    const url = getAutomationSeoPageUrl(slug);

    return {
        title: {
            absolute: page.metadataTitle,
        },
        description: page.description,
        keywords: [
            page.keyword,
            'AI automation',
            'Dooza Workflow',
            'AI employees',
            'business automation',
            'workflow automation',
            ...page.useCases.slice(0, 4),
        ],
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-snippet': -1,
                'max-image-preview': 'large',
                'max-video-preview': -1,
            },
        },
        openGraph: {
            title: page.metadataTitle,
            description: page.description,
            url,
            siteName: 'Dooza',
            type: 'website',
            images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: `${page.title} - Dooza` }],
        },
        twitter: {
            card: 'summary_large_image',
            title: page.metadataTitle,
            description: page.description,
            images: [`${SITE_URL}/logo.png`],
        },
    };
}

export function getAutomationSeoSchemas(slug) {
    const page = getAutomationSeoPage(slug);
    const url = getAutomationSeoPageUrl(slug);

    return [
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: page.title,
            description: page.description,
            url,
            isPartOf: {
                '@type': 'WebSite',
                name: 'Dooza',
                url: SITE_URL,
            },
            about: [
                { '@type': 'Thing', name: page.keyword },
                { '@type': 'Thing', name: 'AI automation' },
                { '@type': 'Thing', name: 'Dooza Workflow' },
            ],
            publisher: {
                '@type': 'Organization',
                name: 'Dooza',
                url: SITE_URL,
                logo: `${SITE_URL}/logo.png`,
            },
            dateModified: '2026-06-19',
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                },
            })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: page.title, item: url },
            ],
        },
    ];
}
