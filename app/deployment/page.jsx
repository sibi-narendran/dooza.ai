import Link from 'next/link';
import {
    ArrowRight,
    Brain,
    CheckCircle2,
    Clock,
    DatabaseZap,
    DollarSign,
    FileCheck2,
    MessageSquare,
    PhoneCall,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    Workflow,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IntegrationsBar from '@/components/sections/IntegrationsBar';
import VideoSection from '@/components/sections/VideoSection';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/deployment`;

export const metadata = {
    title: {
        absolute: 'AI Deployment Company for SMB Automation | Dooza.ai',
    },
    description:
        'Dooza Deployment helps SMBs find, build, and manage the first AI workflow that saves time, protects revenue, and stays under human control.',
    keywords: [
        'AI deployment company',
        'AI deployment services',
        'AI implementation services',
        'AI automation services',
        'AI agents deployment',
        'AI workflow automation',
        'AI deployment for business',
        'custom AI automation services',
        'AI employees implementation',
        'done for you AI automation',
        'AI consulting for small business',
    ],
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
        title: 'AI Deployment Company for SMB Automation | Dooza.ai',
        description:
            'Managed AI workflow deployment for businesses that want useful automation without figuring it out alone.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'AI Deployment Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'AI Deployment Company for SMB Automation | Dooza.ai',
        description:
            'Speak with the founder to find the first AI workflow worth deploying in your business.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const ownerSignals = [
    'Work keeps repeating, but nobody has time to turn it into a real system.',
    'Important follow-ups still depend on memory, inbox checks, and manual reminders.',
    'Information sits across too many tools, tabs, forms, calendars, and spreadsheets.',
    'You know AI can help, but you are not sure what to automate first or how to trust it.',
    'Your team is busy, but too much energy goes into work that should already be moving.',
];

const deploymentChanges = [
    'We find one workflow with a clear business reason to automate.',
    'We connect the tools and context your team already uses.',
    'We add approval points where mistakes would be expensive.',
    'We launch small, watch the workflow, and improve it over time.',
    'You see what happened instead of wondering what the AI did.',
];

const startingPoints = [
    'A repeated handoff that slows the team down every week.',
    'A customer or lead response that should happen faster.',
    'A content, research, or GTM routine that never runs consistently.',
    'An internal admin process where the same information gets copied around.',
    'A reporting or update workflow that takes time but rarely needs judgment.',
];

const platformLinks = [
    {
        icon: Brain,
        title: 'Built on Dooza AI',
        href: '/',
        desc: 'Ready AI employees reduce custom setup when a workflow needs writing, reasoning, routing, or follow-up.',
    },
    {
        icon: Workflow,
        title: 'Built on Dooza Workflow',
        href: '/workflow',
        desc: 'Reusable approvals, traces, app steps, and tests make each deployment easier to control and improve.',
    },
];

const processSteps = [
    {
        step: '01',
        title: 'Understand the messy work',
        time: 'Find',
        desc: 'Map the work that repeats, slows people down, or creates avoidable risk.',
    },
    {
        step: '02',
        title: 'Choose the first workflow',
        time: 'Pick',
        desc: 'Start where the business value is easiest to see, not where AI sounds most impressive.',
    },
    {
        step: '03',
        title: 'Build with controls',
        time: 'Build',
        desc: 'Connect tools, add context, define rules, and keep approvals where they matter.',
    },
    {
        step: '04',
        title: 'Launch carefully',
        time: 'Run',
        desc: 'Run the workflow with visibility into what happened and what still needs review.',
    },
    {
        step: '05',
        title: 'Improve and expand',
        time: 'Grow',
        desc: 'Measure the result, tune the workflow, then decide whether the next one is worth it.',
    },
];

const trustItems = [
    {
        icon: ShieldCheck,
        title: 'Human approval where it matters',
        desc: 'Sensitive replies, customer-facing actions, refunds, and important updates can wait for review.',
    },
    {
        icon: FileCheck2,
        title: 'Tested before launch',
        desc: 'We define the workflow, test edge cases, and make sure the system behaves before it goes live.',
    },
    {
        icon: CheckCircle2,
        title: 'Clear logs and visibility',
        desc: 'Your team can see what the automation did, what it drafted, and what still needs attention.',
    },
    {
        icon: DatabaseZap,
        title: 'Existing tools first',
        desc: 'We connect the apps your business already runs on before asking anyone to change behavior.',
    },
];

const trustFoundations = [
    {
        title: 'One workflow first',
        desc: 'We do not try to automate the whole business on day one. We choose one workflow that is clear enough to test and improve.',
    },
    {
        title: 'Scoped access',
        desc: 'Automations should only touch the tools, inboxes, records, and actions required for the workflow.',
    },
    {
        title: 'Available connectors, not inflated claims',
        desc: 'We deploy using available integration infrastructure and your existing stack, then confirm what is actually needed before launch.',
    },
];

const callDeliverables = [
    'A plain-English map of the first workflow worth automating',
    'The tools, access, and approval points needed to make it safe',
    'A success metric so the automation can be judged honestly',
    'A launch path that starts small before adding more workflows',
];

const faqData = [
    {
        question: 'What do you deploy?',
        answer:
            'We deploy managed AI workflows that handle repeated business work with rules, tool connections, approvals, and ongoing improvement.',
    },
    {
        question: 'What if we do not know what to automate first?',
        answer:
            'That is exactly where we start. We look for repeated work, slow handoffs, missed opportunities, and manual tasks where AI can create measurable value without adding risk.',
    },
    {
        question: 'What should we automate first?',
        answer:
            'The first workflow should be small enough to launch safely and valuable enough to prove the business case. We help choose that with you.',
    },
    {
        question: 'Can you automate customer-facing work?',
        answer:
            'Yes, but we do it carefully. Customer-facing work can include human approval, escalation rules, logs, and limits so the business stays in control.',
    },
    {
        question: 'Do we need technical skills?',
        answer:
            'No. We handle workflow design, tool connections, tests, launch support, and ongoing improvements.',
    },
    {
        question: 'Is this built for SMBs?',
        answer:
            'Yes. We start with one useful workflow, keep scope practical, and expand only after the first automation proves value.',
    },
    {
        question: 'How do you handle compliance?',
        answer:
            'We use practical controls such as scoped access, approval steps, logs, deletion and retention planning, and privacy-aware data handling. We do not present those as a compliance certification.',
    },
    {
        question: 'Can you use our current tools?',
        answer:
            'Yes. We can connect common tools like Gmail, calendars, Shopify, WordPress, CRMs, forms, helpdesks, spreadsheets, and more.',
    },
    {
        question: 'How long does it take?',
        answer:
            'A first useful automation can start quickly. Larger managed deployments usually roll out in stages over a few weeks.',
    },
    {
        question: 'Will AI replace our team?',
        answer:
            'No. The goal is to remove repetitive work and keep important customer-facing actions inside review steps your team controls.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'AI Deployment Company for SMB Automation',
        description: metadata.description,
        url: pageUrl,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Dooza',
            url: SITE_URL,
        },
        about: [
            { '@type': 'Thing', name: 'sales automation' },
            { '@type': 'Thing', name: 'customer support automation' },
            { '@type': 'Thing', name: 'AI deployment services for SMBs' },
            { '@type': 'Thing', name: 'AI implementation services' },
            { '@type': 'Thing', name: 'AI workflow automation' },
            { '@type': 'Thing', name: 'AI agents for business' },
        ],
        publisher: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
        },
        dateModified: '2026-06-09',
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Deployment Services by Dooza',
        serviceType: 'AI Deployment Services',
        url: pageUrl,
        description:
            'Managed AI workflow deployment for repeated business work, tool integrations, approvals, launch support, and ongoing improvements.',
        provider: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
        },
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
        },
        audience: {
            '@type': 'BusinessAudience',
            audienceType: 'Founders, small businesses, agencies, and operations teams',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI Deployment Service Areas',
            itemListElement: [
                'AI workflow discovery',
                'Managed AI workflow setup',
                'Business tool integration',
                'Human approval workflows',
                'AI automation monitoring',
            ].map((service, index) => ({
                '@type': 'Offer',
                position: index + 1,
                itemOffered: {
                    '@type': 'Service',
                    name: service,
                },
            })),
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'AI Deployment Services', item: pageUrl },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How Dooza Deploys AI Automation in a Business',
        description: 'A simple process for deploying managed AI automation in sales, support, and operations.',
        step: processSteps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.title,
            text: step.desc,
        })),
    },
];

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
    return (
        <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl mb-10 md:mb-14`}>
            <span className="section-label block mb-4 text-primary-600">{eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 font-serif leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-lg text-slate-600 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}

function Badge({ icon: Icon, children }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <Icon className="h-4 w-4 text-primary-600" />
            {children}
        </div>
    );
}

function DeploymentSavingsVisual() {
    const workflowSteps = [
        ['Workflow found', 'sales'],
        ['Rules defined', 'support'],
        ['Human approved', 'control'],
        ['System improved', 'done'],
    ];

    return (
        <div className="workflow-hero-surface mx-0 w-full max-w-[22rem] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-primary-100/50 backdrop-blur sm:mx-auto sm:max-w-full">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Workflow className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Managed AI workflow</div>
                        <div className="text-xs text-slate-500">find, build, review, improve</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Managed</span>
            </div>

            <div className="relative mb-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Before</div>
                    <div className="font-bold text-slate-950">Messy repeated work</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Too many steps, tools, checks, and handoffs.</p>
                </div>

                <svg className="hidden h-16 w-24 sm:block" viewBox="0 0 96 64" fill="none" aria-hidden="true">
                    <path className="deployment-flow-line" d="M8 32 C28 8 68 8 88 32" />
                    <path className="deployment-flow-line deployment-flow-line-delay" d="M8 32 C28 56 68 56 88 32" />
                </svg>

                <div className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-primary-700">After</div>
                    <div className="font-bold text-slate-950">Managed AI system</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Drafted, routed, approved, logged, and improved.</p>
                </div>
            </div>

            <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                        <div className="text-sm font-bold text-slate-950">Automation run</div>
                        <div className="text-xs font-semibold text-slate-500">one workflow starts moving with control</div>
                    </div>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Live</span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                    <div className="grid gap-2">
                        {['New input', 'Business rule', 'Tool context'].map((item, index) => (
                            <div key={item} className="deployment-queue-item rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700" style={{ animationDelay: `${index * 0.25}s` }}>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="hidden items-center justify-center sm:flex">
                        <div className="deployment-automation-core flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-xs font-extrabold text-white shadow-lg shadow-primary-700/20">
                            AI
                        </div>
                    </div>

                    <div className="grid gap-2">
                        {['Draft prepared', 'Owner notified', 'Record updated'].map((item, index) => (
                            <div key={item} className="deployment-queue-item rounded-xl border border-primary-100 bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-900" style={{ animationDelay: `${0.45 + index * 0.25}s` }}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid gap-2">
                {workflowSteps.map(([label, type]) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${type === 'control' ? 'bg-amber-500' : type === 'done' ? 'bg-primary-600' : 'bg-slate-300'}`} />
                        <span className="flex-1 text-sm font-semibold text-slate-700">{label}</span>
                        <CheckCircle2 className="h-4 w-4 text-primary-600" />
                    </div>
                ))}
            </div>
        </div>
    );
}

function DeploymentProcessFlow() {
    return (
        <div className="workflow-tree-surface rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 md:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Workflow className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Simple AI rollout</div>
                        <div className="text-xs text-slate-500">start where value is clearest</div>
                    </div>
                </div>

                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                    SMB
                </span>
            </div>

            <div className="relative grid gap-4">
                <div className="absolute bottom-12 left-5 top-6 hidden w-px bg-primary-100 sm:block" />
                <span className="deployment-vertical-flow absolute left-[17px] top-6 hidden h-16 w-2 rounded-full bg-primary-600 sm:block" />

                {processSteps.map((item, index) => (
                    <div key={item.step} className="relative flex gap-4 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm md:p-5">
                        <div className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${index === 0 ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'}`}>
                            {item.step}
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-bold text-primary-700">{item.time}</span>
                                <h3 className="font-sans text-base font-extrabold leading-snug text-slate-950">{item.title}</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function DeploymentPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar showLogin={false} showIndustry ctaType="demo" ctaSource="deployment_nav" />
            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden px-4 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-warm to-warm" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>

                    <div className="relative z-10 mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="min-w-0">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                Managed AI deployment for businesses
                            </div>
                            <h1 className="mb-7 max-w-[21.5rem] break-words font-serif text-[2rem] font-extrabold leading-[1.08] tracking-normal text-slate-950 sm:max-w-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="block">AI is moving fast.</span>
                                <span className="block">You don't have to</span>
                                <span className="block">figure it out alone.</span>
                            </h1>
                            <p className="mb-10 max-w-[21.5rem] text-base leading-relaxed text-slate-600 sm:max-w-xl md:text-xl">
                                Dooza Deployment helps you find, build, and manage the first AI workflow that actually saves time or protects revenue, without adding another tool your team has to babysit.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <BookDemoButton source="deployment_hero" variant="primary" size="xl" className="w-auto px-5 text-base sm:px-8 sm:text-lg md:px-10 md:text-xl">
                                    Find My First Automation
                                </BookDemoButton>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Badge icon={TrendingUp}>Start small</Badge>
                                <Badge icon={MessageSquare}>Human approval</Badge>
                                <Badge icon={PhoneCall}>Existing tools</Badge>
                                <Badge icon={Clock}>Managed setup</Badge>
                                <Badge icon={DollarSign}>Measured value</Badge>
                            </div>
                        </div>

                        <DeploymentSavingsVisual />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                        <div className="min-w-0">
                            <span className="section-label mb-5 block">THE REAL PROBLEM</span>
                            <h2 className="mb-6 max-w-[21.5rem] break-words font-serif text-[1.9rem] font-extrabold leading-tight tracking-normal text-slate-950 sm:max-w-xl md:text-5xl">
                                <span className="block">The hard part is</span>
                                <span className="block">knowing where</span>
                                <span className="block">to start.</span>
                            </h2>
                            <p className="max-w-[21.5rem] text-base leading-relaxed text-slate-600 sm:max-w-xl md:text-lg">
                                Most owners already know AI can help. The hard part is choosing the first workflow, setting it up correctly, and making sure it does not create more work for the team.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="rounded-[28px] border border-slate-100 bg-warm p-6 shadow-sm">
                                <h3 className="mb-5 font-sans text-lg font-extrabold text-slate-950">
                                    You probably already feel the gap
                                </h3>
                                <div className="grid gap-3">
                                    {ownerSignals.map((item) => (
                                        <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm">
                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[28px] border border-primary-100 bg-primary-50 p-6 shadow-sm">
                                <h3 className="mb-5 font-sans text-lg font-extrabold text-slate-950">
                                    What Dooza Deployment changes
                                </h3>
                                <div className="grid gap-3">
                                    {deploymentChanges.map((item) => (
                                        <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-slate-200 bg-white px-4 py-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                            <div>
                                <span className="section-label mb-3 block">SMB trust signals</span>
                                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                                    Built for control, not blind automation
                                </h2>
                            </div>
                            <p className="max-w-2xl text-base leading-relaxed text-slate-600 lg:ml-auto">
                                Small teams need automation that makes work lighter without making the business feel out of control.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div className="deployment-trust-stack rounded-[28px] border border-slate-100 bg-slate-50 p-4 shadow-sm md:p-5">
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div>
                                        <div className="text-sm font-bold text-slate-950">Managed deployment base</div>
                                        <div className="text-xs font-semibold text-slate-500">built for practical rollout</div>
                                    </div>
                                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Trust</span>
                                </div>

                                <div className="grid gap-3">
                                    {trustFoundations.map((item, index) => (
                                        <div key={item.title} className="deployment-trust-card rounded-2xl border border-slate-100 bg-white p-4 shadow-sm" style={{ animationDelay: `${index * 0.35}s` }}>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                                <div>
                                                    <div className="text-sm font-extrabold text-slate-950">{item.title}</div>
                                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {trustItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="font-sans text-lg font-extrabold text-slate-950">{item.title}</h3>
                                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="managed-plan" className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                        <div>
                            <span className="section-label mb-5 block">MANAGED PLAN</span>
                            <h2 className="mb-5 font-serif text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                                Managed automation without hiring an AI team
                            </h2>
                            <p className="mb-6 text-lg leading-relaxed text-slate-600">
                                Most businesses do not need another AI subscription. They need someone to choose the right workflow, connect the tools, test the logic, monitor the output, and improve it over time.
                            </p>
                            <p className="mb-8 text-sm font-semibold text-slate-500">
                                Managed plan pricing: <Link href="/pricing" className="text-primary-700 underline underline-offset-4 hover:text-primary-900">View pricing</Link>
                            </p>
                            <BookDemoButton source="deployment_managed_plan" variant="primary">
                                Find My First Automation
                            </BookDemoButton>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {platformLinks.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link key={item.title} href={item.href} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-lg">
                                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="flex items-center gap-2 font-sans text-xl font-extrabold text-slate-950">
                                                {item.title}
                                                <ArrowRight className="h-4 w-4 text-primary-600 transition group-hover:translate-x-0.5" />
                                            </h3>
                                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {[
                                    'Start with one workflow before expanding',
                                    'Use proven workflow patterns where they fit',
                                    'Connect existing tools instead of replacing them',
                                    'Managed improvements without hiring an AI team',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <IntegrationsBar className="border-y border-slate-100" />

                <section className="relative overflow-hidden bg-warm px-4 py-20 text-slate-900 md:py-28">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
                    </div>
                    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <span className="section-label mb-5 block">
                                Process
                            </span>
                            <h2 className="mb-7 max-w-xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
                                A simple rollout when you do not know where to start
                            </h2>
                            <p className="mb-9 max-w-lg text-lg leading-relaxed text-slate-600">
                                We start with one workflow, prove it works, then decide together whether the next one is worth automating.
                            </p>
                            <BookDemoButton source="deployment_process" variant="primary">
                                See What We Would Automate
                            </BookDemoButton>
                        </div>
                        <DeploymentProcessFlow />
                    </div>
                </section>

                <VideoSection />

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="WHERE WE LOOK"
                            title="If you are not sure what to automate first, that is exactly where we start"
                            description="We do not assume the answer before we understand your business. During discovery, we look for repeated work, slow handoffs, and places where a managed AI workflow can create visible value."
                        />
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4">
                            {startingPoints.map((item, index) => (
                                <div key={item} className="flex gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-sm font-extrabold text-primary-700">
                                        {index + 1}
                                    </div>
                                    <p className="text-base font-semibold leading-relaxed text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <SectionHeader
                            eyebrow="WHAT HAPPENS NEXT"
                            title="The first call should produce a useful automation map"
                            description="Before you trust us with a workflow, you should understand what we would build, where approval is needed, and how success will be measured."
                            align="left"
                        />
                        <div className="rounded-[28px] border border-slate-100 bg-warm p-6 shadow-sm">
                            <div className="mb-5 text-sm font-extrabold uppercase tracking-[2px] text-primary-700">
                                On the founder call
                            </div>
                            <div className="grid gap-4">
                                {callDeliverables.map((item) => (
                                    <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 text-center">
                            <span className="section-label mb-4 block text-primary-600">FAQ</span>
                            <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                                Quick answers
                            </h2>
                        </div>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                <section className="relative overflow-hidden bg-warm px-4 py-20 text-slate-900 md:py-28">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/80 via-warm to-warm" />
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                            <Brain className="h-8 w-8" />
                        </div>
                        <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                            Find the first workflow AI should take off your plate
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                            You do not need to know the answer before the call. Bring the messy work. We will help find the first practical automation.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <BookDemoButton source="deployment_final" variant="primary" size="xl">
                                Get My Automation Roadmap
                            </BookDemoButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
