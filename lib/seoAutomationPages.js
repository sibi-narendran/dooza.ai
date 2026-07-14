import { SITE_URL } from './site';

const approvalControls = {
    'Human approval':
        'Drafts and customer-facing actions wait for human review before sending, publishing, updating records, or making commitments.',
    'Auto-run low-risk work':
        'Low-risk classification, summaries, draft creation, and reporting can run automatically. Customer-facing actions still keep approval gates.',
    'Report-only first':
        'Start by producing reports and recommendations only. Add write actions after the team trusts the output quality.',
};

export const automationSeoPages = {
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
        heroTitle: 'Generate a content automation workflow with review built in',
        heroText:
            'Use this free generator to turn a content channel into a repeatable workflow for research, drafting, repurposing, approval, publishing, and reporting.',
        toolType: 'content-workflow',
        toolTitle: 'AI Content Automation Workflow Generator',
        toolDescription:
            'Enter your content volume and production time. The generator estimates the monthly time saved, then creates a controlled content workflow and build prompt.',
        toolHighlights: [
            { label: 'Best for', value: 'Teams producing blogs, posts, emails, and scripts' },
            { label: 'Output', value: 'Content workflow with review and publishing steps' },
            { label: 'Dooza fit', value: 'Ranky, Somi, Maily, and Dooza Workflow' },
            { label: 'Control', value: 'Draft, review, approve, then publish' },
        ],
        toolFields: [
            {
                id: 'channel',
                label: 'Content channel',
                helper: 'Pick the main output you want to create repeatedly.',
                options: ['SEO blog', 'LinkedIn posts', 'Email newsletter', 'Short-form video ideas'],
            },
            {
                id: 'control',
                label: 'Review style',
                helper: 'Choose how the workflow should handle publishing decisions.',
                options: ['Approve before publish', 'Draft-only', 'Auto-schedule after approval'],
            },
        ],
        toolInputs: [
            {
                id: 'contentTopic',
                label: 'Main topic',
                defaultValue: 'customer support automation',
                placeholder: 'Example: ecommerce retention, clinic enquiries',
                helper: 'Used to shape the workflow prompt.',
            },
            {
                id: 'audience',
                label: 'Audience',
                defaultValue: 'small business owners',
                placeholder: 'Example: dentists, agencies, Shopify stores',
                helper: 'Keeps the generated content workflow specific.',
            },
            {
                id: 'monthlyPieces',
                label: 'Pieces per month',
                type: 'number',
                min: 1,
                defaultValue: 16,
                suffix: '/mo',
                helper: 'How many posts, emails, scripts, or articles you produce.',
            },
            {
                id: 'minutesPerPiece',
                label: 'Minutes per piece',
                type: 'number',
                min: 1,
                defaultValue: 45,
                suffix: 'min',
                helper: 'Current manual creation time per asset.',
            },
            {
                id: 'reviewMinutes',
                label: 'Review minutes',
                type: 'number',
                min: 0,
                defaultValue: 12,
                suffix: 'min',
                helper: 'Expected human review time after automation.',
            },
            {
                id: 'hourlyCost',
                label: 'Team cost per hour',
                type: 'number',
                min: 1,
                defaultValue: 30,
                suffix: '$',
                helper: 'Used for the value estimate.',
            },
        ],
        toolBullets: [
            'A repeatable content production workflow',
            'The AI employee that should own each stage',
            'A review process that avoids blind publishing',
        ],
        controlPlans: {
            'Approve before publish':
                'Every asset is drafted automatically, but publishing waits for a human to approve claims, links, tone, and timing.',
            'Draft-only':
                'The workflow stops at drafts, briefs, captions, and checklists. A human handles publishing manually.',
            'Auto-schedule after approval':
                'Approved assets can be scheduled automatically, while unapproved or risky content stays in review.',
        },
        automationRates: {
            'Approve before publish': 0.55,
            'Draft-only': 0.45,
            'Auto-schedule after approval': 0.68,
        },
        toolResults: {
            'SEO blog': {
                workflow: 'Keyword-to-blog content workflow',
                summary:
                    'Ranky turns one keyword into a brief, draft, internal link checklist, meta title, meta description, and a review task before publishing.',
                trigger: 'A keyword or customer question is added to the content queue.',
                action: 'Research what the reader needs, draft the article, add links, prepare metadata, and flag claims.',
                output: 'A review-ready SEO article and publishing checklist.',
                apps: ['Google Docs', 'WordPress', 'Google Sheets', 'Dooza Workflow'],
                employee: 'Ranky for SEO content',
                approval: 'Editor approves before publishing.',
                effort: 'Medium: needs brand voice, examples, and internal link rules.',
                weekPlan: [
                    'Add 5 target topics and one example article style.',
                    'Generate one brief and draft for review.',
                    'Add internal links, FAQ, and meta fields.',
                    'Publish only after human review, then track performance.',
                ],
            },
            'LinkedIn posts': {
                workflow: 'Topic-to-LinkedIn post batch workflow',
                summary:
                    'Somi converts one topic into multiple post angles, hooks, captions, and approval-ready drafts for LinkedIn.',
                trigger: 'A topic, product update, or customer story is added.',
                action: 'Create hooks, draft posts, adapt tone, and create a weekly posting queue.',
                output: 'A batch of LinkedIn drafts ready for approval or scheduling.',
                apps: ['LinkedIn', 'Google Sheets', 'Google Docs', 'Dooza Workflow'],
                employee: 'Somi for social content',
                approval: 'Owner approves posts before scheduling.',
                effort: 'Low-medium: needs voice examples and banned claims.',
                weekPlan: [
                    'Collect 10 past posts or brand examples.',
                    'Generate 5 post drafts from one topic.',
                    'Approve the best 2 and revise tone rules.',
                    'Schedule approved posts and report engagement.',
                ],
            },
            'Email newsletter': {
                workflow: 'Newsletter draft and approval workflow',
                summary:
                    'Maily summarizes recent content or updates, drafts the newsletter, checks the CTA, and waits for approval before sending.',
                trigger: 'A weekly send date or new approved content is available.',
                action: 'Collect source material, draft subject lines, write the email, and prepare CTA variants.',
                output: 'A newsletter draft with subject lines and approval checklist.',
                apps: ['Gmail', 'Google Docs', 'Google Sheets', 'Dooza Workflow'],
                employee: 'Maily for email content',
                approval: 'Email waits for approval before send.',
                effort: 'Low-medium: needs audience, offer, and tone rules.',
                weekPlan: [
                    'Define the audience and newsletter goal.',
                    'Generate one draft from existing content.',
                    'Review subject lines and CTA clarity.',
                    'Move approved drafts into the email sending process.',
                ],
            },
            'Short-form video ideas': {
                workflow: 'Video idea and script workflow',
                summary:
                    'Somi turns one customer pain point into short-form hooks, script outlines, captions, and production notes.',
                trigger: 'A product feature, customer problem, or campaign angle is submitted.',
                action: 'Generate hooks, scripts, captions, and a short production checklist.',
                output: 'A set of short-form video ideas ready for recording or AI video generation.',
                apps: ['Google Docs', 'Google Drive', 'Instagram', 'Dooza Workflow'],
                employee: 'Somi for social and UGC-style scripts',
                approval: 'Scripts wait for approval before production.',
                effort: 'Medium: needs offer, audience, and visual style rules.',
                weekPlan: [
                    'Choose one customer pain point and one offer.',
                    'Generate 10 hooks and 3 scripts.',
                    'Approve the strongest script and caption.',
                    'Send approved assets into video production or scheduling.',
                ],
            },
        },
        steps: [
            'Define the content source and one primary output channel.',
            'Generate drafts with brand voice and banned claims included.',
            'Add approval rules before publishing or sending.',
            'Repurpose approved assets into secondary channels.',
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
            'Ranky can handle keyword research, briefs, drafts, metadata, and internal-link suggestions from one workflow.',
            'Somi and Maily can repurpose approved content into posts, newsletters, and follow-up messages.',
            'Human review keeps brand voice, factual claims, legal language, and publishing decisions under control.',
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
        heroTitle: 'Find AI automation examples your business can actually run',
        heroText:
            'Use this free finder to turn a department and risk level into practical examples with triggers, AI actions, connected tools, approval rules, and outputs.',
        toolType: 'example-finder',
        toolTitle: 'AI Automation Example Finder',
        toolDescription:
            'Enter your repeated task volume and current tools. The finder returns examples, estimated effort, a first workflow candidate, and a Dooza Workflow prompt.',
        toolHighlights: [
            { label: 'Best for', value: 'Teams deciding what AI should automate first' },
            { label: 'Output', value: 'Three practical examples plus rollout steps' },
            { label: 'Dooza fit', value: 'Examples map into visible Dooza workflows' },
            { label: 'Control', value: 'Risk-aware approval design' },
        ],
        toolFields: [
            {
                id: 'department',
                label: 'Department',
                helper: 'Choose where the repeated work happens.',
                options: ['Support', 'Sales', 'Marketing', 'Operations'],
            },
            {
                id: 'risk',
                label: 'Risk level',
                helper: 'Choose how sensitive the action is.',
                options: ['Low-risk drafts', 'Customer-facing work', 'Internal reporting'],
            },
        ],
        toolInputs: [
            {
                id: 'companyType',
                label: 'Company type',
                defaultValue: 'small service business',
                placeholder: 'Example: agency, clinic, ecommerce store',
                helper: 'Makes the examples easier to explain.',
            },
            {
                id: 'currentTask',
                label: 'Repeated task',
                defaultValue: 'sorting and replying to customer requests',
                placeholder: 'Example: qualifying new leads',
                helper: 'The work you want examples for.',
            },
            {
                id: 'monthlyRepetitions',
                label: 'Monthly repetitions',
                type: 'number',
                min: 1,
                defaultValue: 80,
                suffix: '/mo',
                helper: 'How often this work happens.',
            },
            {
                id: 'minutesPerTask',
                label: 'Minutes per task',
                type: 'number',
                min: 1,
                defaultValue: 10,
                suffix: 'min',
                helper: 'Current manual time per task.',
            },
            {
                id: 'hourlyCost',
                label: 'Team cost per hour',
                type: 'number',
                min: 1,
                defaultValue: 28,
                suffix: '$',
                helper: 'Used for the value estimate.',
            },
            {
                id: 'currentApps',
                label: 'Current tools',
                defaultValue: 'Gmail, Google Sheets, Slack',
                placeholder: 'Example: Gmail, HubSpot, Notion',
                helper: 'Used to choose connected apps in the workflow.',
            },
        ],
        toolBullets: [
            'Three examples for the selected department',
            'Trigger, AI action, connected app, and approval rule',
            'A simple rollout plan to turn an example into a workflow',
        ],
        controlPlans: {
            'Low-risk drafts':
                'Use automation freely for drafts, summaries, labels, and recommendations. Keep final sends or updates manual.',
            'Customer-facing work':
                'Keep human approval before replies, publishing, refunds, promises, or account changes.',
            'Internal reporting':
                'Let AI collect and summarize data, then send reports to the team with links back to source systems.',
        },
        automationRates: {
            'Low-risk drafts': 0.6,
            'Customer-facing work': 0.48,
            'Internal reporting': 0.7,
        },
        toolResults: {
            Support: {
                workflow: 'Support automation example set',
                summary:
                    'Examples: support triage, drafted replies, and review-request follow-ups after resolved tickets.',
                trigger: 'A message, ticket, or support email arrives.',
                action: 'Classify the issue, draft a response, and route urgent cases.',
                output: 'A categorized queue, response drafts, and escalation tasks.',
                apps: ['Gmail', 'Slack', 'Google Sheets', 'Dooza Workflow'],
                employee: 'Maily plus a support workflow',
                approval: 'Approve before any customer-facing reply.',
                effort: 'Low-medium: good first workflow for most teams.',
                weekPlan: [
                    'Example 1: classify support messages by topic and urgency.',
                    'Example 2: draft replies from approved policy snippets.',
                    'Example 3: send review requests after resolved low-risk cases.',
                    'Pilot with 20 messages before expanding.',
                ],
            },
            Sales: {
                workflow: 'Sales automation example set',
                summary:
                    'Examples: lead enrichment, fit scoring, and follow-up drafts for prospects that match the ICP.',
                trigger: 'A new lead, uploaded list, or target company is added.',
                action: 'Research, score fit, prepare outreach angle, and create next-step tasks.',
                output: 'A prioritized lead list and approved outreach drafts.',
                apps: ['Google Sheets', 'Gmail', 'Apify', 'Dooza Workflow'],
                employee: 'Lead Gen Pro and Outbound Pro',
                approval: 'Approve lead quality and outreach before sending.',
                effort: 'Medium-high: needs clean ICP and sender rules.',
                weekPlan: [
                    'Example 1: enrich leads from company URLs.',
                    'Example 2: score fit by industry, location, and offer relevance.',
                    'Example 3: draft personalized first-touch emails.',
                    'Start with a small list and manually check lead quality.',
                ],
            },
            Marketing: {
                workflow: 'Marketing automation example set',
                summary:
                    'Examples: blog draft workflow, social repurposing, and campaign reporting from approved content.',
                trigger: 'A topic, campaign, or keyword is submitted.',
                action: 'Create briefs, drafts, snippets, and reporting summaries.',
                output: 'Marketing assets ready for review and a campaign status summary.',
                apps: ['Google Docs', 'WordPress', 'LinkedIn', 'Dooza Workflow'],
                employee: 'Ranky and Somi',
                approval: 'Approve claims, brand voice, and publishing schedule.',
                effort: 'Medium: needs voice, examples, and publishing rules.',
                weekPlan: [
                    'Example 1: turn a keyword into a blog brief and draft.',
                    'Example 2: repurpose approved blogs into social posts.',
                    'Example 3: summarize campaign outputs weekly.',
                    'Review asset quality before enabling scheduling.',
                ],
            },
            Operations: {
                workflow: 'Operations automation example set',
                summary:
                    'Examples: daily status reports, missing-data checks, and follow-up task creation from spreadsheets or inboxes.',
                trigger: 'A daily schedule, new row, file upload, or status update occurs.',
                action: 'Summarize updates, flag missing fields, and create follow-up tasks.',
                output: 'A clean daily report and owner-specific action list.',
                apps: ['Google Sheets', 'Slack', 'Google Drive', 'Dooza Workflow'],
                employee: 'Dooza assistant with scheduled workflow routines',
                approval: 'Internal reports can auto-run, while external updates need review.',
                effort: 'Low-medium: strong first internal workflow.',
                weekPlan: [
                    'Example 1: summarize daily spreadsheet changes.',
                    'Example 2: flag missing data and assign owners.',
                    'Example 3: send a daily action report to Slack.',
                    'Review report usefulness before adding write actions.',
                ],
            },
        },
        steps: [
            'Choose the department where the repeated work happens.',
            'Pick a risk level so the workflow has the right approval rule.',
            'Turn one example into a visible trigger, action, and output.',
            'Run a small pilot and expand after the output is trusted.',
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
            'Each example starts with a real business event: a lead arrives, a customer asks, a call is missed, or a report is due.',
            'The plan shows which apps are touched and what output should be reviewed, saved, sent, or escalated.',
            'Dooza employees can own the repeated work while Dooza Workflow keeps approvals and execution visible.',
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
        heroTitle: 'Build an AI blog automation workflow that produces review-ready posts',
        heroText:
            'Use this planner to turn a blog goal into a repeatable workflow for keywords, briefs, drafts, internal links, metadata, review, publishing, and reporting.',
        toolType: 'blog-workflow',
        toolTitle: 'AI Blog Automation Planner',
        toolDescription:
            'Enter your keyword and publishing workload. The planner estimates monthly content time saved and creates a blog workflow prompt with review gates.',
        toolHighlights: [
            { label: 'Best for', value: 'Teams trying to publish SEO content consistently' },
            { label: 'Output', value: 'Blog workflow, outline, links, and review plan' },
            { label: 'Dooza fit', value: 'Ranky plus Dooza Workflow' },
            { label: 'Control', value: 'Editor approval before publishing' },
        ],
        toolFields: [
            {
                id: 'goal',
                label: 'Blog goal',
                helper: 'Pick the type of SEO content you want to create repeatedly.',
                options: ['SEO traffic', 'Product education', 'Comparison pages', 'Industry pages'],
            },
            {
                id: 'control',
                label: 'Publishing control',
                helper: 'Choose where the workflow should stop.',
                options: ['Editor approves', 'Draft only', 'Schedule after approval'],
            },
        ],
        toolInputs: [
            {
                id: 'targetKeyword',
                label: 'Target keyword',
                defaultValue: 'ai automation services',
                placeholder: 'Example: customer support automation agency',
                helper: 'Used in the generated article workflow.',
            },
            {
                id: 'cms',
                label: 'CMS or publishing tool',
                defaultValue: 'WordPress',
                placeholder: 'Example: Webflow, WordPress, Shopify blog',
                helper: 'Used as the publishing destination.',
            },
            {
                id: 'postsPerMonth',
                label: 'Posts per month',
                type: 'number',
                min: 1,
                defaultValue: 4,
                suffix: '/mo',
                helper: 'How many posts you want to publish.',
            },
            {
                id: 'researchDraftHours',
                label: 'Research + draft',
                type: 'number',
                min: 0,
                defaultValue: 4,
                suffix: 'hrs',
                helper: 'Manual hours per article before editing.',
            },
            {
                id: 'editHours',
                label: 'Editing time',
                type: 'number',
                min: 0,
                defaultValue: 1.5,
                suffix: 'hrs',
                helper: 'Human edit/review time per article.',
            },
            {
                id: 'hourlyCost',
                label: 'Content cost per hour',
                type: 'number',
                min: 1,
                defaultValue: 35,
                suffix: '$',
                helper: 'Used for the value estimate.',
            },
        ],
        toolBullets: [
            'An SEO blog workflow with clear review stages',
            'A starter outline and internal link checklist',
            'A safe path from draft to publish',
        ],
        controlPlans: {
            'Editor approves':
                'The workflow creates briefs, drafts, links, and metadata. Publishing waits for editor approval.',
            'Draft only':
                'The workflow stops at briefs, drafts, and checklists. Publishing remains manual.',
            'Schedule after approval':
                'Approved posts can move into scheduling while unapproved posts stay in review.',
        },
        automationRates: {
            'Editor approves': 0.58,
            'Draft only': 0.5,
            'Schedule after approval': 0.68,
        },
        toolResults: {
            'SEO traffic': {
                workflow: 'Keyword-to-article SEO workflow',
                summary:
                    'Ranky turns one target keyword into a search-intent brief, article draft, internal link checklist, FAQ ideas, and metadata.',
                trigger: 'A keyword is added to the blog queue.',
                action: 'Analyze intent, create outline, draft sections, add internal links, and prepare metadata.',
                output: 'A review-ready SEO article with link and metadata checklist.',
                apps: ['Google Docs', 'WordPress', 'Google Sheets', 'Dooza Workflow'],
                employee: 'Ranky for SEO research and drafting',
                approval: 'Editor reviews before publishing.',
                effort: 'Medium: needs keywords, internal link rules, and editorial tone.',
                weekPlan: [
                    'Choose one keyword and one ranking intent.',
                    'Generate outline, title, FAQ, and metadata.',
                    'Draft the article and add internal links.',
                    'Review, publish, and track the URL in the content queue.',
                ],
            },
            'Product education': {
                workflow: 'Product workflow explainer system',
                summary:
                    'Turn product capabilities into educational posts that explain the problem, the workflow, and how Dooza solves it.',
                trigger: 'A product feature, customer question, or workflow demo is submitted.',
                action: 'Create explainer outline, screenshots checklist, examples, and CTA sections.',
                output: 'A product education post that links to Dooza and Dooza Workflow.',
                apps: ['Google Docs', 'Dooza Workflow', 'WordPress', 'Google Drive'],
                employee: 'Ranky for education content',
                approval: 'Product owner approves claims and screenshots.',
                effort: 'Medium: needs product details and proof examples.',
                weekPlan: [
                    'Pick one product workflow and one buyer pain point.',
                    'Generate problem, workflow, and solution sections.',
                    'Add screenshot or demo placeholders.',
                    'Review claims before publishing.',
                ],
            },
            'Comparison pages': {
                workflow: 'Competitor comparison draft workflow',
                summary:
                    'Create comparison pages with clear positioning, feature tables, pricing notes, and claim review before publishing.',
                trigger: 'A competitor or alternative keyword is added.',
                action: 'Collect positioning, outline comparison sections, draft claims, and flag review points.',
                output: 'A comparison draft with a claim-review checklist.',
                apps: ['Google Docs', 'Google Sheets', 'WordPress', 'Dooza Workflow'],
                employee: 'Ranky for comparison research and draft structure',
                approval: 'Claims and competitor references require approval.',
                effort: 'High: needs careful claims, pricing checks, and legal review.',
                weekPlan: [
                    'Choose one competitor keyword and comparison angle.',
                    'Draft feature, price, and best-fit sections.',
                    'Flag claims that need verification.',
                    'Publish only after human review.',
                ],
            },
            'Industry pages': {
                workflow: 'Industry page template workflow',
                summary:
                    'Create repeatable industry pages that map pain points to Dooza workflows, examples, trust signals, and CTAs.',
                trigger: 'An industry or niche is added to the content queue.',
                action: 'Create pain points, workflow examples, CTA sections, and FAQs for that industry.',
                output: 'An industry landing page draft with workflow examples.',
                apps: ['Google Docs', 'WordPress', 'Google Sheets', 'Dooza Workflow'],
                employee: 'Ranky for industry SEO pages',
                approval: 'Review industry claims and examples before publishing.',
                effort: 'Medium: needs niche examples and internal link plan.',
                weekPlan: [
                    'Pick one niche with clear buying intent.',
                    'Generate pain points and workflow examples.',
                    'Add industry-specific FAQs and CTA copy.',
                    'Review for relevance before publishing.',
                ],
            },
        },
        steps: [
            'Choose a keyword or page type with clear reader intent.',
            'Generate a brief with outline, internal links, and metadata.',
            'Draft the article and check claims before publishing.',
            'Repurpose the approved article into social posts and email snippets.',
        ],
        useCases: [
            'Focused keyword article workflows',
            'Programmatic industry page drafts',
            'Competitor comparison pages',
            'Internal link suggestions',
            'Meta title and description drafts',
            'Post-publish performance reporting',
        ],
        proofPoints: [
            'Ranky can turn keywords and customer questions into briefs, drafts, titles, descriptions, and internal-link notes.',
            'Editors can approve claims, tone, sources, and publishing before content goes live.',
            'Dooza Workflow makes SEO publishing repeatable with the same steps every week instead of scattered documents.',
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
        heroTitle: 'Build a sellable AI automation agency offer around one workflow',
        heroText:
            'Use this free offer builder to pick a niche, package a workflow, define deliverables, and create a demo angle you can sell with Dooza Workflow.',
        toolType: 'agency-offer',
        toolTitle: 'AI Automation Agency Offer Builder',
        toolDescription:
            'Enter your niche, prospect volume, pricing, and close-rate assumption. The builder creates a sellable workflow offer and revenue projection.',
        toolHighlights: [
            { label: 'Best for', value: 'Agencies packaging AI automation services' },
            { label: 'Output', value: 'Offer, deliverables, demo workflow, pitch angle' },
            { label: 'Dooza fit', value: 'Sell workflows powered by Dooza employees' },
            { label: 'Control', value: 'Narrow scoped offers, not vague AI promises' },
        ],
        toolFields: [
            {
                id: 'niche',
                label: 'Client niche',
                helper: 'Choose the market you want to sell into first.',
                options: ['Local services', 'Clinics', 'Agencies', 'Ecommerce'],
            },
            {
                id: 'offer',
                label: 'Offer type',
                helper: 'Choose how you want to package delivery.',
                options: ['Done-for-you setup', 'Monthly workflow ops', 'Audit and build sprint'],
            },
        ],
        toolInputs: [
            {
                id: 'agencyName',
                label: 'Agency name',
                defaultValue: 'Automation Studio',
                placeholder: 'Example: Oak Ops AI',
                helper: 'Used in the generated pitch prompt.',
            },
            {
                id: 'targetProblem',
                label: 'Client pain point',
                defaultValue: 'slow enquiry follow-up',
                placeholder: 'Example: missed calls, support backlog',
                helper: 'The pain your offer solves.',
            },
            {
                id: 'prospectsPerMonth',
                label: 'Qualified prospects',
                type: 'number',
                min: 1,
                defaultValue: 30,
                suffix: '/mo',
                helper: 'How many good prospects you can pitch monthly.',
            },
            {
                id: 'closeRate',
                label: 'Expected close rate',
                type: 'number',
                min: 1,
                max: 100,
                defaultValue: 12,
                suffix: '%',
                helper: 'Conservative assumption for offer planning.',
            },
            {
                id: 'setupFee',
                label: 'Setup fee',
                type: 'number',
                min: 0,
                defaultValue: 1500,
                suffix: '$',
                helper: 'One-time implementation fee.',
            },
            {
                id: 'monthlyRetainer',
                label: 'Monthly retainer',
                type: 'number',
                min: 0,
                defaultValue: 750,
                suffix: '$',
                helper: 'Ongoing monitoring/improvement fee.',
            },
        ],
        toolBullets: [
            'A focused offer name and workflow demo idea',
            'Deliverables a prospect can understand quickly',
            'A pitch angle that sells the outcome, not generic AI',
        ],
        controlPlans: {
            'Done-for-you setup':
                'Sell setup, onboarding, tool connection, test runs, and handoff documentation.',
            'Monthly workflow ops':
                'Sell ongoing monitoring, improvements, reports, and new workflow iterations.',
            'Audit and build sprint':
                'Sell a short diagnostic sprint that ends with one working workflow demo.',
        },
        automationRates: {
            'Done-for-you setup': 0.55,
            'Monthly workflow ops': 0.65,
            'Audit and build sprint': 0.45,
        },
        toolResults: {
            'Local services': {
                workflow: 'Local lead capture and follow-up offer',
                summary:
                    'Package a service that captures missed inquiries, qualifies intent, drafts replies, books calls, and reports new opportunities.',
                trigger: 'A website form, missed call, email, or lead list entry appears.',
                action: 'Qualify intent, draft a response, suggest next step, and create follow-up task.',
                output: 'A qualified lead, approved reply, and appointment or follow-up task.',
                apps: ['Gmail', 'Google Calendar', 'Google Sheets', 'Dooza Workflow'],
                employee: 'Lead Gen Pro, Maily, or Voice Pro depending on lead source',
                approval: 'Human approves customer-facing replies and appointment changes.',
                effort: 'Medium: needs offer, service area, calendar rules, and reply templates.',
                weekPlan: [
                    'Pitch: stop losing leads after hours or between jobs.',
                    'Demo: new inquiry becomes a reply draft and booking task.',
                    'Deliverables: connected inbox, qualification rules, approval queue, weekly lead report.',
                    'Upsell: monthly monitoring and additional source integrations.',
                ],
            },
            Clinics: {
                workflow: 'Patient enquiry triage offer',
                summary:
                    'Package a safe enquiry workflow that classifies patient requests, drafts approved replies, routes urgent cases, and creates follow-up tasks.',
                trigger: 'A patient enquiry arrives by form or email.',
                action: 'Classify request type, detect urgency, draft a safe reply, and route to the right owner.',
                output: 'A categorized enquiry, reviewed reply draft, and follow-up task.',
                apps: ['Gmail', 'Google Sheets', 'Google Calendar', 'Dooza Workflow'],
                employee: 'Maily plus Dooza Workflow approvals',
                approval: 'Clinical or sensitive messages stay behind human review.',
                effort: 'High: needs safety rules, disclaimers, and escalation criteria.',
                weekPlan: [
                    'Pitch: respond faster without letting AI make clinical decisions.',
                    'Demo: enquiry becomes category, draft reply, and staff task.',
                    'Deliverables: category rules, safe reply templates, escalation path, enquiry log.',
                    'Upsell: review requests and missed appointment follow-up.',
                ],
            },
            Agencies: {
                workflow: 'Client content and reporting workflow offer',
                summary:
                    'Package a workflow that produces client content drafts, approval tasks, and weekly performance summaries from campaign data.',
                trigger: 'A campaign topic, client note, or weekly report schedule starts.',
                action: 'Draft content, prepare client update, summarize metrics, and create approval steps.',
                output: 'Approved content drafts and a client-ready weekly report.',
                apps: ['Google Docs', 'Google Sheets', 'Slack', 'Dooza Workflow'],
                employee: 'Ranky, Somi, and Maily',
                approval: 'Client-facing claims and posts require agency approval.',
                effort: 'Medium: needs client voice, campaign data, and reporting template.',
                weekPlan: [
                    'Pitch: reduce manual client update and content prep work.',
                    'Demo: one campaign note becomes posts and a report.',
                    'Deliverables: content workflow, approval board, report template, client handoff.',
                    'Upsell: monthly workflow optimization.',
                ],
            },
            Ecommerce: {
                workflow: 'Ecommerce support and retention workflow offer',
                summary:
                    'Package support automation for order questions, common replies, refund routing, review requests, and retention follow-ups.',
                trigger: 'A support email, order issue, or post-purchase event occurs.',
                action: 'Identify issue type, draft reply, route refunds, and prepare review or retention message.',
                output: 'Resolved common tickets, escalated sensitive tickets, and review request tasks.',
                apps: ['Gmail', 'Shopify', 'Google Sheets', 'Dooza Workflow'],
                employee: 'Maily plus support workflow routines',
                approval: 'Refunds, complaints, and promises require approval.',
                effort: 'Medium-high: needs policies, product data, and support macros.',
                weekPlan: [
                    'Pitch: answer common customer questions faster without risky auto-refunds.',
                    'Demo: order question becomes draft reply and status update.',
                    'Deliverables: support categories, reply templates, approval rules, weekly support report.',
                    'Upsell: product FAQ and review generation workflows.',
                ],
            },
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
            'The offer starts with one painful workflow, one measurable outcome, and one clear delivery path.',
            'Dooza Workflow gives agencies a visual demo they can show clients before implementation starts.',
            'Narrow workflow packages are safer to deliver than broad AI automation promises with unclear scope.',
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
