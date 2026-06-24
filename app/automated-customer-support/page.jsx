import Image from 'next/image';
import {
    ArrowRight,
    BarChart3,
    Bot,
    CheckCircle2,
    Clock3,
    FileCheck2,
    GitBranch,
    Headphones,
    Inbox,
    LockKeyhole,
    MessageSquareText,
    PackageSearch,
    RefreshCw,
    Route,
    ShieldCheck,
    ShoppingCart,
    Sparkles,
    Truck,
    UserCheck,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import SupportAutomationAudit from './SupportAutomationAudit';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/automated-customer-support`;

const targetKeywords = [
    'automated customer support',
    'ecommerce customer support automation software',
    'customer support automation for ecommerce',
    'automated customer support system',
    'AI customer support for ecommerce',
];

export const metadata = {
    title: {
        absolute: 'Automated Customer Support for Ecommerce Teams | Dooza',
    },
    description:
        'Automated customer support for ecommerce teams. Dooza helps automate order questions, returns, FAQs, escalations, reporting, and approval-first AI support workflows.',
    keywords: targetKeywords,
    alternates: {
        canonical: pageUrl,
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
        title: 'Automated Customer Support for Ecommerce Teams | Dooza',
        description:
            'A skimmable landing page for ecommerce teams that want order, return, FAQ, and escalation workflows automated with human approval.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza automated customer support' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Automated Customer Support for Ecommerce Teams | Dooza',
        description:
            'Automate repeated ecommerce support questions without losing human control over risky cases.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const problemTickets = [
    {
        icon: PackageSearch,
        question: 'Where is my order?',
        detail: 'Tracking, delays, delivery windows',
    },
    {
        icon: RefreshCw,
        question: 'Can I return this?',
        detail: 'Policy checks, photos, refunds',
    },
    {
        icon: ShoppingCart,
        question: 'Which product should I buy?',
        detail: 'Sales intent inside support',
    },
    {
        icon: MessageSquareText,
        question: 'I already emailed twice.',
        detail: 'Complaints, urgency, escalation',
    },
];

const graphSteps = [
    {
        icon: Inbox,
        label: 'Problem',
        title: 'Repeated support tickets',
        text: 'Order, return, FAQ, shipping, and complaint messages keep coming back.',
    },
    {
        icon: Bot,
        label: 'Triage',
        title: 'AI reads the intent',
        text: 'Dooza identifies topic, urgency, missing data, and customer risk.',
    },
    {
        icon: GitBranch,
        label: 'Decision',
        title: 'Route by rule',
        text: 'Safe reply, approval, escalation, CRM update, or support owner handoff.',
    },
    {
        icon: FileCheck2,
        label: 'Action',
        title: 'Draft, log, or send',
        text: 'The workflow prepares the next step and keeps a visible record.',
    },
    {
        icon: BarChart3,
        label: 'Report',
        title: 'Know what repeats',
        text: 'See the categories, saved time, risky cases, and next workflow to build.',
    },
];

const heroWorkflowSteps = [
    {
        icon: MessageSquareText,
        label: '01',
        title: 'Repeated ticket',
        text: '"Where is my order?"',
    },
    {
        icon: Bot,
        label: '02',
        title: 'AI triage',
        text: 'Intent, risk, missing data',
    },
    {
        icon: FileCheck2,
        label: '03',
        title: 'Draft reply',
        text: 'Safe tickets get a ready response',
    },
    {
        icon: UserCheck,
        label: '04',
        title: 'Human review',
        text: 'Risky tickets go to the team',
    },
    {
        icon: BarChart3,
        label: '05',
        title: 'Reply and report',
        text: 'Customer update plus support insight',
    },
];

const automationExamples = [
    {
        icon: Truck,
        title: 'Order status',
        points: ['Read order question', 'Draft tracking reply', 'Escalate missing data'],
    },
    {
        icon: RefreshCw,
        title: 'Returns',
        points: ['Collect return reason', 'Check policy', 'Hold refund for approval'],
    },
    {
        icon: ShoppingCart,
        title: 'Product questions',
        points: ['Answer FAQs', 'Use approved knowledge', 'Route buying intent'],
    },
    {
        icon: Route,
        title: 'Escalations',
        points: ['Detect complaints', 'Summarize context', 'Send to the right owner'],
    },
    {
        icon: Clock3,
        title: 'SLA follow-up',
        points: ['Find waiting tickets', 'Prepare update', 'Flag delayed replies'],
    },
    {
        icon: BarChart3,
        title: 'Weekly report',
        points: ['Show ticket themes', 'Show approval cases', 'Recommend next workflow'],
    },
];

const beforeAfter = [
    ['Every agent writes the same replies', 'Dooza drafts from approved support context'],
    ['Refunds feel risky to automate', 'Refund workflows can require human approval'],
    ['Urgent cases hide in the inbox', 'Complaints and VIPs route to the right owner'],
    ['No clear automation roadmap', 'Reports show which ticket type to automate next'],
];

const guardrails = [
    {
        icon: ShieldCheck,
        title: 'Approval-first launch',
        text: 'Start draft-only. Let humans approve refunds, complaints, VIPs, and sensitive replies.',
    },
    {
        icon: LockKeyhole,
        title: 'Scoped access',
        text: 'Connect only the inbox, helpdesk, sheet, store, CRM, or webhook required for the workflow.',
    },
    {
        icon: UserCheck,
        title: 'Human handoff',
        text: 'When data is missing or risk is high, Dooza creates a clean summary for the support owner.',
    },
];

const supportAutomationVideo = {
    id: 'tC1BhYRCqgE',
    title: 'What Is Customer Service Automation For eCommerce Operations?',
    channel: 'Ecom SaaS Stack',
    url: 'https://www.youtube.com/watch?v=tC1BhYRCqgE',
    embedUrl: 'https://www.youtube-nocookie.com/embed/tC1BhYRCqgE?rel=0',
    thumbnailUrl: 'https://i.ytimg.com/vi/tC1BhYRCqgE/maxresdefault.jpg',
    uploadDate: '2025-09-18',
    duration: 'PT3M46S',
};

const videoTakeaways = [
    ['Order status', 'Customers get instant status answers without waiting for a human agent.'],
    ['Ticket routing', 'Requests can be categorized, assigned, and followed up automatically.'],
    ['Self-service', 'FAQs and knowledge bases reduce simple tickets before they reach the team.'],
    ['Human handoff', 'Support agents stay focused on complex, sensitive, or high-value cases.'],
];

const faqs = [
    {
        question: 'What is automated customer support?',
        answer:
            'Automated customer support uses AI and workflows to classify support messages, draft replies, route urgent cases, update tools, and report outcomes. For ecommerce teams, the best first workflows are usually order status, returns, shipping questions, product FAQs, and escalations.',
    },
    {
        question: 'Is this for ecommerce and Shopify-style stores?',
        answer:
            'Yes. This page is built around customer support automation for ecommerce teams, including Shopify-style stores, DTC brands, marketplace operators, and support teams handling repeated order, return, and product questions.',
    },
    {
        question: 'Is Dooza just a chatbot?',
        answer:
            'No. Dooza is closer to an automated customer support system. A chatbot answers a conversation. Dooza can create workflows with AI decisions, approvals, routing, tool actions, summaries, and reporting.',
    },
    {
        question: 'Can AI send replies automatically?',
        answer:
            'Only where you allow it. Most teams should begin with draft-only or approval-first AI customer support for ecommerce, then automate more once the workflow is proven.',
    },
    {
        question: 'What should we automate first?',
        answer:
            'Start with a high-volume, low-risk ticket type. Order status, delivery questions, return intake, FAQ replies, and ticket summaries are usually better first workflows than complex refund decisions.',
    },
    {
        question: 'How does the audit work?',
        answer:
            'Dooza reviews your support categories, repeated tickets, tools, approval rules, and support goals. Then it recommends the first workflow worth building with ecommerce customer support automation software.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Automated Customer Support for Ecommerce Teams',
        description: metadata.description,
        url: pageUrl,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Dooza',
            url: SITE_URL,
        },
        about: targetKeywords.map((keyword) => ({ '@type': 'Thing', name: keyword })),
        publisher: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
        },
        dateModified: '2026-06-24',
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Automated Customer Support for Ecommerce',
        serviceType: 'AI Customer Support Automation',
        url: pageUrl,
        provider: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
        },
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
        },
        description:
            'AI customer support automation for ecommerce teams using Dooza AI employees and Dooza Workflow for classification, draft replies, routing, approvals, tool updates, and reporting.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Ecommerce Support Automation Workflows',
            itemListElement: automationExamples.map((item) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: item.title,
                    description: item.points.join(', '),
                },
            })),
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
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
        '@type': 'VideoObject',
        name: supportAutomationVideo.title,
        description:
            'An ecommerce customer service automation explainer covering order status, automated ticket management, self-service resources, follow-up messages, AI intent, and human agent handoff.',
        thumbnailUrl: [supportAutomationVideo.thumbnailUrl],
        uploadDate: supportAutomationVideo.uploadDate,
        duration: supportAutomationVideo.duration,
        embedUrl: supportAutomationVideo.embedUrl,
        contentUrl: supportAutomationVideo.url,
        publisher: {
            '@type': 'Organization',
            name: supportAutomationVideo.channel,
        },
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
                name: 'Automated Customer Support',
                item: pageUrl,
            },
        ],
    },
];

function SectionIntro({ eyebrow, title, text, centered = false }) {
    return (
        <div className={centered ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
            <span className="section-label mb-4 block text-primary-700">{eyebrow}</span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">{title}</h2>
            {text && <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-600">{text}</p>}
        </div>
    );
}

function HeroGraph() {
    const graphNodes = [
        {
            id: 'problem',
            icon: MessageSquareText,
            label: 'Input',
            title: 'Repeated ticket',
            text: '"Where is my order?"',
            tone: 'danger',
            left: '4%',
            top: '38%',
            width: '150px',
        },
        {
            id: 'triage',
            icon: Bot,
            label: 'AI decision',
            title: 'Triage ticket',
            text: 'Topic, risk, missing data',
            left: '35%',
            top: '34%',
            width: '160px',
        },
        {
            id: 'draft',
            icon: FileCheck2,
            label: 'Safe path',
            title: 'Prepare reply',
            text: 'Draft tracking response',
            left: '60%',
            top: '12%',
            width: '130px',
        },
        {
            id: 'approval',
            icon: UserCheck,
            label: 'Risk path',
            title: 'Human review',
            text: 'Missing data or sensitive case',
            left: '60%',
            top: '58%',
            width: '130px',
        },
        {
            id: 'done',
            icon: BarChart3,
            label: 'Output',
            title: 'Reply + report',
            text: 'Sent and logged',
            tone: 'success',
            left: '78%',
            top: '38%',
            width: '130px',
        },
    ];

    return (
        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl shadow-primary-100/60 md:p-5">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Dooza"
                        width={34}
                        height={34}
                        className="rounded-xl"
                        style={{ width: '34px', height: '34px' }}
                    />
                    <div>
                        <div className="text-sm font-black text-slate-950">Support automation graph</div>
                        <div className="text-xs font-bold text-slate-500">One repeated ticket becomes a controlled workflow</div>
                    </div>
                </div>
            </div>

            <div className="relative mt-5 hidden h-[410px] overflow-hidden rounded-2xl border border-slate-200 bg-[radial-gradient(#0f766e1a_1px,transparent_1px)] bg-[size:18px_18px] p-4 lg:block">
                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <defs>
                        <marker id="hero-arrow" markerWidth="4" markerHeight="4" refX="3.3" refY="2" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,4 L4,2 z" fill="#0f766e" />
                        </marker>
                    </defs>
                    <path d="M25 51 C30 51 31 50 35 50" fill="none" stroke="#0f766e" strokeWidth="0.75" markerEnd="url(#hero-arrow)" />
                    <path d="M52 47 C57 39 57 29 60 28" fill="none" stroke="#0f766e" strokeWidth="0.75" markerEnd="url(#hero-arrow)" />
                    <path d="M52 55 C57 64 57 69 60 70" fill="none" stroke="#64748b" strokeDasharray="1.8 1.8" strokeWidth="0.7" markerEnd="url(#hero-arrow)" />
                    <path d="M76 29 C81 32 79 47 82 50" fill="none" stroke="#0f766e" strokeWidth="0.75" markerEnd="url(#hero-arrow)" />
                    <path d="M76 70 C81 68 79 53 82 52" fill="none" stroke="#0f766e" strokeWidth="0.75" markerEnd="url(#hero-arrow)" />
                </svg>
                {graphNodes.map((node) => {
                    const Icon = node.icon;
                    const toneClasses = node.tone === 'danger'
                        ? 'border-rose-200 bg-rose-50'
                        : node.tone === 'success'
                            ? 'border-emerald-200 bg-emerald-50'
                            : 'border-primary-100 bg-white';
                    const iconClasses = node.tone === 'danger'
                        ? 'bg-white text-rose-700'
                        : node.tone === 'success'
                            ? 'bg-white text-emerald-700'
                            : 'bg-primary-50 text-primary-700';

                    return (
                        <div
                            key={node.id}
                            data-hero-graph-node
                            className={`absolute z-10 rounded-2xl border p-4 shadow-lg shadow-slate-200/70 ${toneClasses}`}
                            style={{ left: node.left, top: node.top, width: node.width }}
                        >
                            <div className="mb-3 flex items-center justify-between gap-2">
                                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconClasses}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                <span className="rounded-full bg-white px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.08em] text-slate-600">
                                    {node.label}
                                </span>
                            </div>
                            <div className="text-sm font-black leading-tight text-slate-950">{node.title}</div>
                            <p className="mt-2 text-xs font-bold leading-relaxed text-slate-600">{node.text}</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-5 rounded-2xl border border-rose-100 bg-rose-50 p-4 text-center lg:hidden">
                <div className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-rose-700">Problem statement</div>
                <div className="text-xl font-black leading-tight text-slate-950">
                    Too many repeated ecommerce support tickets
                </div>
                <p className="mt-2 text-sm font-bold leading-relaxed text-slate-600">
                    Example ticket: "Where is my order?"
                </p>
            </div>

            <div className="mt-5 grid gap-3 lg:hidden">
                {heroWorkflowSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div key={step.title} className="grid grid-cols-[44px_1fr] items-stretch gap-3">
                            <div className="flex flex-col items-center">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 text-primary-700">
                                    <Icon className="h-5 w-5" />
                                </div>
                                {index < heroWorkflowSteps.length - 1 && <div className="mt-2 h-full min-h-6 w-px bg-primary-100" />}
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">{step.label}</div>
                                <div className="mt-1 text-base font-black text-slate-950">{step.title}</div>
                                <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-600">{step.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function SupportAutomationVideo() {
    return (
        <section id="video" className="bg-white px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <span className="section-label mb-4 block text-primary-700">3-minute explainer</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        See the support automation idea before booking
                    </h2>
                    <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-600">
                        This ecommerce explainer matches the problem on this page: repeated order questions, return questions, ticket routing, self-service, automated updates, and human handoff for complex cases.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {videoTakeaways.map(([label, text]) => (
                            <div key={label} className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                                <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">{label}</div>
                                <p className="mt-2 text-sm font-bold leading-relaxed text-slate-700">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-2xl shadow-primary-100/50 md:p-4">
                    <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                        <iframe
                            className="h-full w-full"
                            src={supportAutomationVideo.embedUrl}
                            title={supportAutomationVideo.title}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="text-sm font-black text-slate-950">{supportAutomationVideo.title}</div>
                            <div className="mt-1 text-xs font-bold text-slate-500">
                                Transcript checked for ecommerce support automation fit
                            </div>
                        </div>
                        <a
                            href={supportAutomationVideo.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-black text-primary-800 transition hover:-translate-y-0.5 hover:bg-primary-50"
                        >
                            Watch on YouTube
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProblemStatement() {
    return (
        <section id="problem" className="bg-white px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <SectionIntro
                    eyebrow="Start with the problem"
                    title="The first workflow should come from the tickets your team repeats most"
                    text="A useful page for automated customer support should feel like your inbox. These are the ecommerce questions Dooza is designed to handle first."
                />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {problemTickets.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.question} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-base font-black text-slate-950">
                                    {item.question}
                                </div>
                                <p className="mt-4 text-sm font-bold leading-relaxed text-slate-600">{item.detail}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function WorkflowGraph() {
    return (
        <section id="workflow-graph" className="px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <SectionIntro
                    eyebrow="Simple workflow graph"
                    title="From repeated ticket to approved response"
                    text="Dooza turns customer support automation for ecommerce into a visible path, so your team sees what the AI understood, what it drafted, and where humans approve."
                    centered
                />

                <div className="hidden items-stretch gap-3 lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
                    {graphSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.title} className="contents">
                                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                                    <div className="mb-5 flex items-center justify-between gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">{step.label}</div>
                                    <h3 className="mt-2 text-lg font-black leading-tight text-slate-950">{step.title}</h3>
                                    <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{step.text}</p>
                                </div>
                                {index < graphSteps.length - 1 && (
                                    <div className="flex items-center text-primary-700">
                                        <ArrowRight className="h-6 w-6" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="grid gap-3 lg:hidden">
                    {graphSteps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.title} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">{step.label}</div>
                                        <h3 className="text-lg font-black leading-tight text-slate-950">{step.title}</h3>
                                    </div>
                                </div>
                                <p className="text-sm font-semibold leading-relaxed text-slate-600">{step.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function AutomationCards() {
    return (
        <section className="bg-white px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <SectionIntro
                    eyebrow="What gets automated first"
                    title="High-volume support work, shown as clear steps"
                    text="Dooza works as ecommerce customer support automation software for the work that is repetitive, measurable, and safe to control with approvals."
                />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {automationExamples.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                                </div>
                                <div className="space-y-2">
                                    {item.points.map((point) => (
                                        <div key={point} className="flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function BeforeAfter() {
    return (
        <section className="px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                <div>
                    <span className="section-label mb-4 block text-primary-700">Why this works</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        Less inbox cleanup. More controlled support operations.
                    </h2>
                    <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-600">
                        Dooza does not force you into risky auto-replies. It gives ecommerce teams a controlled automated customer support system that can start draft-only.
                    </p>
                    <div className="mt-8">
                        <BookDemoButton source="automated_customer_support_before_after" variant="primary" size="lg">
                            Book Support Automation Audit
                        </BookDemoButton>
                    </div>
                </div>
                <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 md:p-5">
                    <div className="grid gap-3">
                        {beforeAfter.map(([before, after]) => (
                            <div key={before} className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 md:grid-cols-[0.9fr_1.1fr]">
                                <div className="rounded-xl bg-white p-4">
                                    <div className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-rose-600">Before</div>
                                    <div className="text-sm font-black text-slate-950">{before}</div>
                                </div>
                                <div className="rounded-xl border border-primary-100 bg-primary-50 p-4">
                                    <div className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-primary-700">After Dooza</div>
                                    <div className="text-sm font-black text-slate-950">{after}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Guardrails() {
    return (
        <section className="bg-white px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <SectionIntro
                    eyebrow="Control layer"
                    title="Fast support, without reckless automation"
                    text="Use AI customer support for ecommerce where it is safe. Keep sensitive decisions under approval."
                    centered
                />
                <div className="grid gap-4 md:grid-cols-3">
                    {guardrails.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default function AutomatedCustomerSupportPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar showLogin={false} showIndustry ctaType="demo" ctaSource="automated_customer_support_nav" />
            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden bg-white px-4 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:28px_28px]" />
                        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary-50 via-white to-transparent" />
                    </div>
                    <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-4 py-2 text-sm font-black text-primary-800 shadow-sm backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                Automated customer support for ecommerce
                            </div>
                            <h1 className="font-serif text-4xl font-extrabold leading-[1.04] text-slate-950 md:text-6xl">
                                Automated customer support for ecommerce teams
                            </h1>
                            <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-slate-600 md:text-xl">
                                Turn repeated order, return, FAQ, and complaint tickets into clear AI workflows with human approval where it matters.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <BookDemoButton source="automated_customer_support_hero" variant="primary" size="xl">
                                    Book Support Automation Audit
                                </BookDemoButton>
                                <a
                                    href="#workflow-graph"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50"
                                >
                                    See workflow graph
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                            </div>
                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                {[
                                    ['Problem', 'Repeating tickets'],
                                    ['First workflow', 'Orders, returns, FAQs'],
                                    ['Control', 'Draft or approval-first'],
                                ].map(([label, value]) => (
                                    <div key={label} className="rounded-2xl border border-primary-100 bg-white/90 p-4 shadow-sm">
                                        <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">{label}</div>
                                        <div className="mt-2 text-sm font-black leading-snug text-slate-950">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <HeroGraph />
                    </div>
                </section>

                <SupportAutomationVideo />
                <ProblemStatement />
                <WorkflowGraph />
                <SupportAutomationAudit />
                <AutomationCards />
                <BeforeAfter />
                <Guardrails />

                <section className="bg-white px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-4xl">
                        <SectionIntro
                            eyebrow="FAQ"
                            title="Questions ecommerce teams ask before automating support"
                            text="Short answers for teams comparing automated customer support, chatbot tools, and workflow-based automation."
                            centered
                        />
                        <FAQAccordion items={faqs} />
                    </div>
                </section>

                <section className="px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto grid max-w-6xl gap-8 rounded-[32px] border border-primary-100 bg-white p-6 shadow-2xl shadow-primary-100/60 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-primary-800">
                                <Headphones className="h-4 w-4" />
                                First workflow audit
                            </div>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Want to know which support workflow to automate first?
                            </h2>
                            <p className="mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-slate-600">
                                Book a short call. We will map repeated tickets, support tools, approval rules, and the first Dooza workflow worth building.
                            </p>
                        </div>
                        <BookDemoButton source="automated_customer_support_final" variant="primary" size="xl">
                            Book 15-Min Audit
                        </BookDemoButton>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
