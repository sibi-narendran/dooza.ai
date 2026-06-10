import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Brain,
    CheckCircle2,
    Clock,
    DatabaseZap,
    DollarSign,
    FileCheck2,
    Mail,
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
import { testimonials } from '@/lib/homeData';

const pageUrl = `${SITE_URL}/deployment`;

export const metadata = {
    title: {
        absolute: 'AI Deployment Company for SMB Automation | Dooza.ai',
    },
    description:
        'Dooza is an AI deployment company for SMBs that sets up managed sales, customer support, calls, email, leads, and operations automation.',
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
            'Managed AI automation setup for sales, customer support, calls, email, leads, operations, and business tools.',
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
            'Book a call to deploy managed AI automations for sales, customer support, calls, email, leads, and operations.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const outcomes = [
    { icon: TrendingUp, title: 'Sales follow-up', desc: 'Respond faster, revive stalled leads, and keep deals moving.' },
    { icon: MessageSquare, title: 'Customer support', desc: 'Reduce response time without losing human control.' },
    { icon: PhoneCall, title: 'Calls and missed leads', desc: 'Capture caller details, summarize intent, and create next steps.' },
    { icon: Mail, title: 'Email and admin', desc: 'Sort messages, draft replies, route work, and update records.' },
];

const platformLinks = [
    {
        icon: Brain,
        title: 'Built on Dooza AI',
        href: '/',
        desc: 'Ready AI employees reduce custom setup for calls, sales, email, content, and support.',
    },
    {
        icon: Workflow,
        title: 'Built on Dooza Workflow',
        href: '/workflow',
        desc: 'Reusable approvals, traces, app steps, and tests reduce engineering time for every deployment.',
    },
];

const processSteps = [
    {
        step: '01',
        title: 'Find the money leak',
        time: 'Find',
        desc: 'Missed leads, slow replies, repeated admin.',
    },
    {
        step: '02',
        title: 'Pick one workflow',
        time: 'Pick',
        desc: 'Choose the sales or support task with clear ROI.',
    },
    {
        step: '03',
        title: 'Build with controls',
        time: 'Build',
        desc: 'Connect tools, context, approvals, and tests.',
    },
    {
        step: '04',
        title: 'Run the automation',
        time: 'Run',
        desc: 'Handle follow-ups, tickets, calls, and email.',
    },
    {
        step: '05',
        title: 'Improve and expand',
        time: 'Grow',
        desc: 'Track savings, tune the flow, add the next one.',
    },
];

const trustItems = [
    {
        icon: ShieldCheck,
        title: 'SOC 2-ready controls',
        desc: 'Approval gates, audit evidence, access scoping, and change review for security-minded SMBs.',
    },
    {
        icon: FileCheck2,
        title: 'GDPR-aware workflows',
        desc: 'Data minimization, deletion paths, retention planning, and privacy-aware automation design.',
    },
    {
        icon: CheckCircle2,
        title: 'Human review built in',
        desc: 'Sensitive replies, refunds, CRM changes, and customer-facing actions can wait for approval.',
    },
    {
        icon: DatabaseZap,
        title: 'Least-privilege tool access',
        desc: 'Automations only touch the apps, inboxes, records, and actions needed for the workflow.',
    },
];

const trustStats = [
    {
        value: '12,000+',
        label: 'workflows built',
        desc: 'Reusable sales, support, email, and operations patterns speed up deployment.',
    },
    {
        value: '140+',
        label: 'countries reached',
        desc: 'Used across global teams and SMB use cases.',
    },
    {
        value: '1,000+',
        label: 'app connections',
        desc: 'Connect the tools you already use instead of replacing your stack.',
    },
];

const faqData = [
    {
        question: 'What do you deploy?',
        answer:
            'We deploy managed AI automation systems for sales, customer support, calls, email, lead handling, reporting, and repeat business work.',
    },
    {
        question: 'What should we automate first?',
        answer:
            'Usually sales follow-up or customer support. They are easy to measure because they affect missed revenue, response time, and team workload.',
    },
    {
        question: 'Can you automate sales and customer support?',
        answer:
            'Yes. We can automate lead capture, CRM updates, follow-up, support triage, draft replies, customer summaries, escalations, and team alerts.',
    },
    {
        question: 'Do we need technical skills?',
        answer:
            'No. We handle workflow design, tool connections, tests, launch support, and ongoing improvements.',
    },
    {
        question: 'Is this built for SMBs?',
        answer:
            'Yes. We start with one high-value workflow, keep pricing and scope practical, and expand only after the first automation proves value.',
    },
    {
        question: 'How do you handle compliance?',
        answer:
            'We design SOC 2-ready controls and GDPR-aware workflow patterns such as approvals, audit trails, scoped access, deletion paths, and privacy-aware data handling.',
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
            'Managed AI deployment for sales, customer support, calls, email, leads, operations, tool integrations, and launch support.',
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
                'Sales automation',
                'Customer support automation',
                'Call automation',
                'Email automation',
                'Business operations automation',
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
        ['Lead captured', 'sales'],
        ['Reply drafted', 'support'],
        ['Human approved', 'control'],
        ['CRM updated', 'done'],
    ];

    return (
        <div className="workflow-hero-surface rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-primary-100/50 backdrop-blur">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Workflow className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">SMB automation map</div>
                        <div className="text-xs text-slate-500">workflow, savings, review</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Managed</span>
            </div>

            <div className="relative mb-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Before</div>
                    <div className="font-bold text-slate-950">Manual work</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Slow replies, missed leads, repeated updates.</p>
                </div>

                <svg className="hidden h-16 w-24 sm:block" viewBox="0 0 96 64" fill="none" aria-hidden="true">
                    <path className="deployment-flow-line" d="M8 32 C28 8 68 8 88 32" />
                    <path className="deployment-flow-line deployment-flow-line-delay" d="M8 32 C28 56 68 56 88 32" />
                </svg>

                <div className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-primary-700">After</div>
                    <div className="font-bold text-slate-950">AI workflow</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Drafted, routed, approved, and logged.</p>
                </div>
            </div>

            <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                        <div className="text-sm font-bold text-slate-950">Automation run</div>
                        <div className="text-xs font-semibold text-slate-500">sales and support tasks move automatically</div>
                    </div>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Live</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                    <div className="grid gap-2">
                        {['New lead', 'Support email', 'Missed call'].map((item, index) => (
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
                        {['Follow-up drafted', 'Ticket routed', 'CRM updated'].map((item, index) => (
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
                        <div className="text-xs text-slate-500">one workflow at a time</div>
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
    const featuredTestimonials = testimonials.slice(0, 2);

    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar showLogin={false} ctaType="demo" ctaSource="deployment_nav" />
            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden px-4 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-warm to-warm" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                AI deployment for SMBs
                            </div>
                            <h1 className="mb-7 max-w-4xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                We make AI work for SMBs
                            </h1>
                            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                We find one workflow that wastes time or loses money, connect your tools, add approvals, and manage the automation for your team.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <BookDemoButton source="deployment_hero" variant="primary" size="xl">
                                    Book a Free Call
                                </BookDemoButton>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Badge icon={TrendingUp}>Sales</Badge>
                                <Badge icon={MessageSquare}>Customer support</Badge>
                                <Badge icon={PhoneCall}>Calls</Badge>
                                <Badge icon={Clock}>Time saved</Badge>
                                <Badge icon={DollarSign}>Money saved</Badge>
                            </div>
                        </div>

                        <DeploymentSavingsVisual />
                    </div>
                </section>

                <VideoSection />

                <section className="border-y border-slate-200 bg-white px-4 py-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                            <div>
                                <span className="section-label mb-3 block">SMB trust signals</span>
                                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                                    Built to automate without losing control
                                </h2>
                            </div>
                            <p className="max-w-2xl text-base leading-relaxed text-slate-600 lg:ml-auto">
                                Small teams need automation that is practical, affordable, and safe enough for customer-facing work.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div className="deployment-trust-stack rounded-[28px] border border-slate-100 bg-slate-50 p-4 shadow-sm md:p-5">
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div>
                                        <div className="text-sm font-bold text-slate-950">Proven automation base</div>
                                        <div className="text-xs font-semibold text-slate-500">built for practical SMB rollout</div>
                                    </div>
                                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Trust</span>
                                </div>

                                <div className="grid gap-3">
                                    {trustStats.map((stat, index) => (
                                        <div key={stat.label} className="deployment-trust-card rounded-2xl border border-slate-100 bg-white p-4 shadow-sm" style={{ animationDelay: `${index * 0.35}s` }}>
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <div className="font-serif text-3xl font-extrabold text-slate-950">{stat.value}</div>
                                                    <div className="mt-1 text-xs font-bold uppercase tracking-wide text-primary-700">{stat.label}</div>
                                                </div>
                                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary-600" />
                                            </div>
                                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{stat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
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
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                        <div>
                            <span className="section-label mb-5 block">MANAGED PLAN</span>
                            <h2 className="mb-5 font-serif text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                                Priced for SMBs
                            </h2>
                            <p className="mb-6 text-lg leading-relaxed text-slate-600">
                                We do not rebuild every automation from zero. We use Dooza AI and Dooza Workflow behind the scenes, then customize the workflow around your tools, approvals, and business rules.
                            </p>
                            <p className="mb-8 text-sm font-semibold text-slate-500">
                                Managed plan pricing: <Link href="/pricing" className="text-primary-700 underline underline-offset-4 hover:text-primary-900">View pricing</Link>
                            </p>
                            <BookDemoButton source="deployment_managed_plan" variant="primary">
                                Book a Free Call
                            </BookDemoButton>
                        </div>

                        <div className="grid gap-4">
                            <div className="grid gap-4 sm:grid-cols-2">
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

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    'Start with one workflow before expanding',
                                    'Reuse proven sales and support patterns',
                                    'Connect existing tools instead of replacing them',
                                    'Managed improvements without a full-time AI hire',
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
                    <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <span className="section-label mb-5 block">
                                Process
                            </span>
                            <h2 className="mb-7 max-w-xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
                                A simple rollout for SMB automation
                            </h2>
                            <p className="mb-9 max-w-lg text-lg leading-relaxed text-slate-600">
                                We start with one workflow, prove it works, then expand into the next process.
                            </p>
                            <BookDemoButton source="deployment_process" variant="primary">
                                Book a Free Call
                            </BookDemoButton>
                        </div>
                        <DeploymentProcessFlow />
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="WHERE IT HELPS"
                            title="We automate more than one thing"
                            description="Start with sales or customer support, then expand into the next repeated process once the savings are clear."
                        />
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {outcomes.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                        <Icon className="mb-7 h-7 w-7 text-primary-600" />
                                        <h3 className="mb-3 font-serif text-xl font-bold">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-6xl">
                        <SectionHeader
                            eyebrow="PROOF"
                            title="Teams use AI automation to save time and protect revenue"
                        />
                        <div className="grid gap-6 md:grid-cols-2">
                            {featuredTestimonials.map((item) => (
                                <div key={item.author} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                                    <div className="mb-6 flex items-center gap-3">
                                        {item.logo ? (
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-white">
                                                <Image src={item.logo} alt={item.author} width={48} height={48} className="object-contain p-1" />
                                            </div>
                                        ) : (
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 font-bold text-white">
                                                {item.initials}
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-bold text-slate-900">{item.author}</div>
                                            <div className="text-xs text-slate-500">{item.role}</div>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                                </div>
                            ))}
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
                            Ready to make AI useful?
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                            Bring one sales or support process. We will help turn it into a working AI system.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <BookDemoButton source="deployment_final" variant="primary" size="xl">
                                Book a Free Call
                            </BookDemoButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
