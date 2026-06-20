import { SITE_URL } from './site';

export const customerServiceToolSlugs = [
    'best-customer-service-automation-software',
    'customer-service-automation-software',
    'customer-service-automation-solutions',
];

const sharedFaq = [
    {
        question: 'What should customer service automation handle first?',
        answer:
            'Start with repeated, high-volume support work such as FAQ replies, ticket triage, routing, customer summaries, follow-up reminders, and internal updates. Keep refunds, complaints, billing changes, and sensitive replies behind human approval.',
    },
    {
        question: 'How is Dooza different from a normal chatbot?',
        answer:
            'A chatbot usually answers inside one conversation. Dooza combines AI employees with Dooza Workflow, so support work can trigger from email, chat, or forms, route through approval steps, update tools, and leave a visible run history.',
    },
    {
        question: 'Will the tool send customer replies automatically?',
        answer:
            'The recommended Dooza setup can start in draft-only or approval-first mode. Customer-facing replies, refunds, account changes, and risky actions can require a human reviewer before anything is sent.',
    },
];

export const customerServiceToolPages = {
    'best-customer-service-automation-software': {
        slug: 'best-customer-service-automation-software',
        keyword: 'best customer service automation software',
        keywordStats: {
            kd: 10,
            volume: '200',
            cpc: '$50.00',
        },
        metadataTitle: 'Best Customer Service Automation Software Calculator | Dooza',
        description:
            'Use this customer service automation calculator to estimate support workload, request a savings report, and see how Dooza combines AI employees with Dooza Workflow.',
        heroEyebrow: 'Best customer service automation software',
        heroTitle: 'Find the best support automation setup for your workload',
        heroText:
            'Answer a few support workload questions. We calculate where automation can save time, then send a practical report with the workflow Dooza can build.',
        toolTitle: 'Support Automation Savings Calculator',
        toolSubtitle:
            'Built for teams comparing customer service automation software and wanting a real workload estimate before booking a call.',
        primaryCta: 'Calculate my savings report',
        resultPromise: 'Savings estimate, workflow map, approval rules, and recommended Dooza setup',
        pitchTitle: 'Software alone is not the full answer',
        pitchText:
            'Dooza pitches a complete operating system: an AI employee for support work, and Dooza Workflow to connect tools, add approvals, route exceptions, and log every run.',
        comparisonTitle: 'What the calculator compares',
        comparisonRows: [
            ['Basic chatbot', 'Good for simple FAQs, weak when the answer needs tool access, routing, or approval.'],
            ['Helpdesk automation', 'Useful for ticket rules, but usually still needs humans to draft, summarize, and update records.'],
            ['Dooza + Dooza Workflow', 'AI drafts and classifies while workflows handle approvals, tool updates, routing, reporting, and audit history.'],
        ],
        faqs: sharedFaq,
    },
    'customer-service-automation-software': {
        slug: 'customer-service-automation-software',
        keyword: 'customer service automation software',
        keywordStats: {
            kd: 22,
            volume: '700',
            cpc: '$0.50',
        },
        metadataTitle: 'Customer Service Automation Software Fit Checker | Dooza',
        description:
            'Check which customer service automation software workflow fits your team and request a Dooza report for support triage, replies, routing, and approvals.',
        heroEyebrow: 'Customer service automation software',
        heroTitle: 'Check what support automation software your team actually needs',
        heroText:
            'Use the fit checker to describe your ticket volume, channels, team cost, and support pain points. We turn that into a practical Dooza workflow recommendation.',
        toolTitle: 'Support Automation Fit Checker',
        toolSubtitle:
            'For teams deciding whether they need a chatbot, helpdesk rules, AI reply drafts, workflow automation, or a full AI support employee.',
        primaryCta: 'Get my software fit report',
        resultPromise: 'Recommended automation type, required integrations, risk controls, and Dooza Workflow plan',
        pitchTitle: 'Dooza fits between chatbot and operations workflow',
        pitchText:
            'Dooza can answer and draft support replies, but Dooza Workflow is what makes it operational: triggers, branches, approvals, CRM or sheet updates, Slack summaries, and logs.',
        comparisonTitle: 'What your report decides',
        comparisonRows: [
            ['Answer automation', 'Useful when most tickets are repetitive questions with approved answers.'],
            ['Routing automation', 'Useful when tickets need urgency labels, owner assignment, and exception handling.'],
            ['Workflow automation', 'Useful when support work must update systems, create tasks, request approvals, and report outcomes.'],
        ],
        faqs: sharedFaq,
    },
    'customer-service-automation-solutions': {
        slug: 'customer-service-automation-solutions',
        keyword: 'customer service automation solutions',
        keywordStats: {
            kd: 21,
            volume: '300',
            cpc: 'N/A',
        },
        metadataTitle: 'Customer Service Automation Solutions Planner | Dooza',
        description:
            'Plan customer service automation solutions with Dooza. Request a support workflow report for triage, AI drafted replies, approvals, CRM updates, and reporting.',
        heroEyebrow: 'Customer service automation solutions',
        heroTitle: 'Plan a customer service automation solution before you build it',
        heroText:
            'Use this planner to capture your current support process. We prepare a workflow report showing what Dooza can automate first and what should stay under human review.',
        toolTitle: 'Support Automation Solution Planner',
        toolSubtitle:
            'For founders and operators who want a done-for-you support automation plan instead of another generic software list.',
        primaryCta: 'Request my implementation plan',
        resultPromise: 'First workflow scope, rollout sequence, approval gates, and implementation notes',
        pitchTitle: 'The offer is implementation, not just advice',
        pitchText:
            'Dooza can turn the report into a working support workflow: intake, AI classification, draft replies, approval steps, CRM or sheet updates, Slack alerts, and reporting.',
        comparisonTitle: 'What the implementation plan covers',
        comparisonRows: [
            ['Support intake', 'Which channels trigger the workflow and what data should be captured.'],
            ['Decision rules', 'Which tickets can be drafted, escalated, routed, or held for human approval.'],
            ['Connected actions', 'Where Dooza Workflow should update tools, save records, notify the team, and report results.'],
        ],
        faqs: sharedFaq,
    },
};

export function getCustomerServiceToolPage(slug) {
    return customerServiceToolPages[slug];
}

export function normalizeNumber(value, fallback, min = 0, max = 100000) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.max(min, Math.min(max, parsed));
}

export function calculateCustomerServiceReport(slug, input = {}) {
    const page = getCustomerServiceToolPage(slug);
    if (!page) {
        throw new Error('Unknown customer service tool page');
    }

    const monthlyTickets = normalizeNumber(input.monthlyTickets, 600, 1, 100000);
    const avgMinutesPerTicket = normalizeNumber(input.avgMinutesPerTicket, 8, 1, 240);
    const hourlySupportCost = normalizeNumber(input.hourlySupportCost, 30, 1, 500);
    const teamSize = normalizeNumber(input.teamSize, 3, 1, 1000);
    const urgentPercent = normalizeNumber(input.urgentPercent, 12, 0, 100);
    const automationCoverage = normalizeNumber(input.automationCoverage, 55, 10, 85) / 100;
    const manualHours = (monthlyTickets * avgMinutesPerTicket) / 60;
    const estimatedHoursSaved = manualHours * automationCoverage;
    const monthlyTimeValue = estimatedHoursSaved * hourlySupportCost;
    const annualTimeValue = monthlyTimeValue * 12;
    const urgentTickets = monthlyTickets * (urgentPercent / 100);

    const businessType = String(input.businessType || 'small business').trim();
    const currentStack = String(input.currentStack || 'email, chat, spreadsheets').trim();
    const mainPain = String(input.mainPain || 'slow repeated replies').trim();
    const channels = Array.isArray(input.channels) && input.channels.length > 0
        ? input.channels.map((item) => String(item)).slice(0, 8)
        : ['Email', 'Chat'];

    const workflowSteps = [
        'Trigger from the support channel: email, chat, form, or helpdesk ticket.',
        'Classify the request by intent, urgency, customer type, and required next action.',
        'Draft a reply or internal summary using approved support context.',
        'Branch risky cases such as refunds, complaints, billing changes, or sensitive requests to human approval.',
        'Update the source system, sheet, CRM, or Slack channel after approval.',
        'Save a run summary so the team can audit what happened and improve the workflow.',
    ];

    const recommendedWorkflow = urgentPercent >= 20
        ? 'Urgent support triage and approval workflow'
        : monthlyTickets >= 1000
            ? 'High-volume support classification and drafted reply workflow'
            : 'Support inbox draft, route, and follow-up workflow';

    const doozaPitch =
        'Use Maily or a support-focused Dooza AI employee for classification, summarization, and reply drafting. Use Dooza Workflow for the visible operating layer: triggers, branches, approvals, connected tool updates, alerts, and run history.';

    const prompt = [
        `Build a Dooza Workflow for ${businessType} customer service automation.`,
        '',
        `Current stack: ${currentStack}`,
        `Support channels: ${channels.join(', ')}`,
        `Monthly tickets: ${Math.round(monthlyTickets)}`,
        `Average minutes per ticket: ${avgMinutesPerTicket}`,
        `Urgent or sensitive tickets: ${urgentPercent}%`,
        `Main pain point: ${mainPain}`,
        '',
        `Recommended workflow: ${recommendedWorkflow}`,
        '',
        'Workflow requirements:',
        '- Add a manual test trigger for demo runs.',
        '- Classify intent, urgency, customer type, and next action.',
        '- Draft customer replies but hold risky messages for human approval.',
        '- Route refunds, complaints, billing changes, legal, medical, or VIP cases to a human owner.',
        '- Update the CRM, helpdesk, spreadsheet, or Slack channel only after approval where needed.',
        '- Save a final run summary with input, AI decision, approval state, and action taken.',
    ].join('\n');

    return {
        pageSlug: slug,
        keyword: page.keyword,
        recommendedWorkflow,
        manualHours: Math.round(manualHours * 10) / 10,
        estimatedHoursSaved: Math.round(estimatedHoursSaved * 10) / 10,
        monthlyTimeValue: Math.round(monthlyTimeValue),
        annualTimeValue: Math.round(annualTimeValue),
        urgentTickets: Math.round(urgentTickets),
        workflowSteps,
        doozaPitch,
        prompt,
        inputSummary: {
            businessType,
            currentStack,
            mainPain,
            channels,
            monthlyTickets,
            avgMinutesPerTicket,
            hourlySupportCost,
            teamSize,
            urgentPercent,
            automationCoverage: Math.round(automationCoverage * 100),
        },
    };
}

export function buildCustomerServiceMetadata(page) {
    const url = `${SITE_URL}/${page.slug}`;

    return {
        title: {
            absolute: page.metadataTitle,
        },
        description: page.description,
        keywords: [
            page.keyword,
            'customer service automation calculator',
            'customer support automation software',
            'AI customer support automation',
            'Dooza Workflow',
            'support workflow automation',
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
            images: [
                {
                    url: `${SITE_URL}/logo.png`,
                    width: 512,
                    height: 512,
                    alt: `${page.keyword} tool by Dooza`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: page.metadataTitle,
            description: page.description,
            images: [`${SITE_URL}/logo.png`],
        },
    };
}

export function buildCustomerServiceSchemas(page) {
    const url = `${SITE_URL}/${page.slug}`;

    return [
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: page.metadataTitle,
            description: page.description,
            url,
            isPartOf: {
                '@type': 'WebSite',
                name: 'Dooza',
                url: SITE_URL,
            },
            about: [
                { '@type': 'Thing', name: page.keyword },
                { '@type': 'Thing', name: 'customer support automation' },
                { '@type': 'Thing', name: 'Dooza Workflow' },
            ],
            publisher: {
                '@type': 'Organization',
                name: 'Dooza',
                url: SITE_URL,
                logo: `${SITE_URL}/logo.png`,
            },
            dateModified: '2026-06-20',
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faqs.map((item) => ({
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
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: SITE_URL,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: page.keyword,
                    item: url,
                },
            ],
        },
    ];
}
