import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    Bot,
    CheckCircle2,
    Clock,
    DatabaseZap,
    FileCheck2,
    GitBranch,
    Headphones,
    Inbox,
    LockKeyhole,
    MessageSquare,
    Route,
    ShieldCheck,
    Sparkles,
    Star,
    Workflow,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { testimonials } from '@/lib/homeData';

const pageUrl = `${SITE_URL}/customer-support-automation-agency`;
const marqueeTestimonials = [...testimonials, ...testimonials];

export const metadata = {
    title: {
        absolute: 'Customer Support Automation Agency for AI Workflows | Dooza',
    },
    description:
        'Dooza builds customer support automation with AI employees and Dooza Agents for triage, drafted replies, approvals, routing, tool updates, and reporting.',
    keywords: [
        'customer support automation agency',
        'customer service automation agency',
        'AI customer support automation',
        'support workflow automation',
        'customer support AI agency',
        'done for you customer support automation',
        'AI support automation services',
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
        title: 'Customer Support Automation Agency for AI Workflows | Dooza',
        description:
            'Automate support triage, replies, routing, approvals, CRM updates, and follow-ups with Dooza and Dooza Agents.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza customer support automation' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Customer Support Automation Agency for AI Workflows | Dooza',
        description:
            'Book a support automation audit and see which customer support workflows Dooza can automate first.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const painPoints = [
    {
        icon: Inbox,
        title: 'Repeated questions bury the inbox',
        desc: 'Your team answers the same delivery, billing, appointment, refund, and status questions every day.',
    },
    {
        icon: Clock,
        title: 'Slow replies cost trust',
        desc: 'Customers expect quick answers. Long waits create more follow-ups, more pressure, and more churn risk.',
    },
    {
        icon: Route,
        title: 'Urgent work gets mixed with routine tickets',
        desc: 'Refunds, complaints, VIP requests, and sales-ready leads need different routing than normal FAQs.',
    },
    {
        icon: DatabaseZap,
        title: 'Updates still happen manually',
        desc: 'Support details get copied between Gmail, chat, CRMs, helpdesks, spreadsheets, and internal tools.',
    },
];

const sprintItems = [
    'Support inbox and channel audit',
    'FAQ, billing, urgent, and sales-intent routing map',
    'AI draft replies with your tone and approved knowledge',
    'Human approval rules for refunds, complaints, and sensitive cases',
    'Tool updates for CRM, sheets, helpdesk, Slack, or email',
    'Run history, reporting, and next-workflow recommendations',
];

const supportFlow = [
    {
        icon: MessageSquare,
        label: 'Customer message',
        detail: 'Email, chat, form, WhatsApp, or helpdesk',
    },
    {
        icon: Bot,
        label: 'Dooza classifies it',
        detail: 'FAQ, billing, booking, refund, complaint, or sales lead',
    },
    {
        icon: GitBranch,
        label: 'Workflow routes it',
        detail: 'Approved answer, human review, tool lookup, or escalation',
    },
    {
        icon: CheckCircle2,
        label: 'Action is logged',
        detail: 'Reply sent, CRM updated, task created, or follow-up scheduled',
    },
];

const useCases = [
    'Answer common questions from approved knowledge',
    'Triage support inboxes by urgency and intent',
    'Draft replies for a teammate to approve',
    'Escalate refunds, complaints, and VIP cases',
    'Update CRM, helpdesk, sheets, or Slack',
    'Summarize conversations before handoff',
    'Follow up after resolution',
    'Report response time and support load',
];

const trustItems = [
    {
        icon: ShieldCheck,
        title: 'Human approval built in',
        desc: 'Keep risky replies, refunds, record updates, and sensitive cases behind approval steps.',
    },
    {
        icon: LockKeyhole,
        title: 'Scoped tool access',
        desc: 'Automations can be limited to the apps, inboxes, sheets, and records needed for the support flow.',
    },
    {
        icon: FileCheck2,
        title: 'Audit-ready run history',
        desc: 'See inputs, AI outputs, branch decisions, approvals, and final actions in one workflow trail.',
    },
];

const comparisonRows = [
    {
        label: 'Generic chatbot',
        desc: 'Answers basic questions but often stops when a tool update, escalation, or approval is needed.',
    },
    {
        label: 'More support hires',
        desc: 'Adds human capacity, but repetitive tickets still consume expensive time every week.',
    },
    {
        label: 'Dooza',
        desc: 'Combines AI employees, Dooza Agents, integrations, approvals, and reporting into one support automation system.',
    },
];

const faqData = [
    {
        question: 'What does a customer support automation agency do?',
        answer:
            'A customer support automation agency maps your repeated support work, connects your tools, creates AI-assisted replies, adds routing rules, and builds approval steps so your team can respond faster without losing control.',
    },
    {
        question: 'Is Dooza just a chatbot?',
        answer:
            'No. Dooza can answer and draft messages, but Dooza Agents also routes tickets, updates systems, asks for approvals, logs actions, and triggers follow-ups across your business tools.',
    },
    {
        question: 'Which tools can this connect to?',
        answer:
            'Dooza Agents can connect common support tools such as Gmail, Slack, forms, CRMs, spreadsheets, helpdesks, webhooks, databases, and many other business apps.',
    },
    {
        question: 'Will AI send customer replies without review?',
        answer:
            'It does not have to. The workflow can require human approval for refunds, complaints, legal or medical topics, billing changes, VIP customers, and any other sensitive case.',
    },
    {
        question: 'What should we automate first?',
        answer:
            'Start with the support category that is high volume and low risk: FAQs, appointment questions, order status, booking requests, basic billing questions, or internal ticket summaries.',
    },
    {
        question: 'Do we need technical skills?',
        answer:
            'No. The page offer is built around a support automation audit and sprint. Dooza helps map the workflow, connect tools, set approval rules, and launch the first useful automation.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Customer Support Automation Agency',
        description: metadata.description,
        url: pageUrl,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Dooza',
            url: SITE_URL,
        },
        about: [
            { '@type': 'Thing', name: 'customer support automation agency' },
            { '@type': 'Thing', name: 'AI customer support automation' },
            { '@type': 'Thing', name: 'support workflow automation' },
            { '@type': 'Thing', name: 'Dooza Agents' },
        ],
        publisher: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
        },
        dateModified: '2026-06-16',
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Customer Support Automation Agency',
        serviceType: 'Customer Support Automation Services',
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
            'Done-for-you customer support automation using Dooza AI employees and Dooza Agents for triage, replies, routing, approvals, and tool updates.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Support Automation Sprint',
            itemListElement: sprintItems.map((item, index) => ({
                '@type': 'Offer',
                position: index + 1,
                itemOffered: {
                    '@type': 'Service',
                    name: item,
                },
            })),
        },
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
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Customer Support Automation Agency', item: pageUrl },
        ],
    },
];

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
    return (
        <div className={`${align === 'center' ? 'mx-auto text-center' : ''} mb-10 max-w-3xl md:mb-14`}>
            <span className="section-label mb-4 block text-primary-600">{eyebrow}</span>
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="text-lg leading-relaxed text-slate-600">
                    {description}
                </p>
            )}
        </div>
    );
}

function HeroWorkflowVisual() {
    return (
        <div className="card-interactive-scale rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 transition-all hover:border-primary-100 md:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Workflow className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Support automation map</div>
                        <div className="text-xs font-semibold text-slate-500">triage, approve, update</div>
                    </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Live workflow
                </span>
            </div>

            <div className="grid gap-3">
                {supportFlow.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === supportFlow.length - 1;
                    return (
                        <div key={step.label} className="relative">
                            <div
                                className="card-interactive-sm group rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition-all hover:border-primary-100 hover:bg-white hover:shadow-md"
                                style={{ animationDelay: `${index * 0.12}s` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 ${index === 0 ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="mb-1 flex flex-wrap items-center gap-2">
                                            <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-primary-700 shadow-sm">
                                                Step {index + 1}
                                            </span>
                                            <div className="font-sans text-base font-extrabold text-slate-950">
                                                {step.label}
                                            </div>
                                        </div>
                                        <p className="text-sm leading-relaxed text-slate-600">{step.detail}</p>
                                    </div>
                                </div>
                            </div>
                            {!isLast && (
                                <div className="mx-8 h-3 w-px bg-primary-200" aria-hidden="true" />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-5 grid gap-3 rounded-2xl border border-primary-100 bg-primary-50 p-4 sm:grid-cols-3">
                {['AI reply drafted', 'Human review ready', 'CRM updated'].map((item, index) => (
                    <div key={item} className="workflow-trace-pill rounded-xl bg-white px-3 py-3 text-center text-xs font-bold text-primary-900 shadow-sm" style={{ animationDelay: `${index * 0.2}s` }}>
                        {item}
                    </div>
                ))}
            </div>
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

function TestimonialCard({ item, index }) {
    return (
        <article className="card-interactive-sm flex min-h-[250px] w-[320px] shrink-0 flex-col justify-between rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-primary-100 hover:shadow-lg md:w-[430px] md:p-6">
            <div>
                <div className="mb-5 flex items-start gap-3">
                    {item.logo ? (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white">
                            <Image src={item.logo} alt={item.author} width={48} height={48} className="h-auto w-auto object-contain p-1" />
                        </div>
                    ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-sm font-extrabold text-white">
                            {item.initials}
                        </div>
                    )}
                    <div className="min-w-0 flex-1">
                        <div className="font-sans text-sm font-extrabold text-slate-950">{item.author}</div>
                        <div className="mt-0.5 text-xs font-semibold leading-relaxed text-slate-500">{item.role}</div>
                    </div>
                    <div className="hidden gap-0.5 text-yellow-500 sm:flex" aria-hidden="true">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={`${item.author}-${index}-${star}`} className="h-3.5 w-3.5 fill-current" />
                        ))}
                    </div>
                </div>

                <p className="text-base font-semibold leading-relaxed text-slate-700">
                    &ldquo;{item.quote}&rdquo;
                </p>
            </div>

            {(item.website || item.link || item.linkedin) && (
                <a
                    href={item.website || item.link || item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary-700 transition hover:text-primary-900"
                >
                    View source <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
            )}
        </article>
    );
}

function TestimonialMarquee() {
    return (
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-warm to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-warm to-transparent md:w-24" />
            <div className="workflow-marquee-track flex w-max gap-4 px-4 py-2 hover:[animation-play-state:paused]">
                {marqueeTestimonials.map((item, index) => (
                    <TestimonialCard key={`${item.author}-${index}`} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}

export default function CustomerSupportAutomationAgencyPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}

            <Navbar showLogin={false} showIndustry ctaType="demo" ctaSource="support_automation_nav" />

            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                Customer support automation agency
                            </div>
                            <h1 className="mb-7 max-w-4xl font-serif text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                Customer support automation agency that builds the system for you
                            </h1>
                            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                Dooza combines AI employees with Dooza Agents to automate repetitive support questions, triage urgent issues, draft replies, update your tools, and keep humans in control.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <BookDemoButton source="support_automation_hero" variant="primary" size="xl">
                                    Book a Support Automation Audit
                                </BookDemoButton>
                                <Link
                                    href="/agents"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50"
                                >
                                    See Dooza Agents <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Badge icon={Zap}>Faster replies</Badge>
                                <Badge icon={ShieldCheck}>Human approval</Badge>
                                <Badge icon={Workflow}>Tool updates</Badge>
                            </div>
                        </div>

                        <HeroWorkflowVisual />
                    </div>
                </section>

                <section className="border-y border-slate-200 bg-white px-4 py-12 md:px-8">
                    <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
                        <div className="card-interactive-sm rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:border-primary-100 hover:bg-white hover:shadow-md">
                            <div className="font-serif text-3xl font-extrabold text-slate-950">1,000+</div>
                            <div className="mt-1 text-sm font-bold text-primary-700">app connections</div>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">Connect your support stack instead of replacing it.</p>
                        </div>
                        <div className="card-interactive-sm rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:border-primary-100 hover:bg-white hover:shadow-md">
                            <div className="font-serif text-3xl font-extrabold text-slate-950">24/7</div>
                            <div className="mt-1 text-sm font-bold text-primary-700">support workflow coverage</div>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">Classify and route requests even when the team is offline.</p>
                        </div>
                        <div className="card-interactive-sm rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:border-primary-100 hover:bg-white hover:shadow-md">
                            <div className="font-serif text-3xl font-extrabold text-slate-950">Human</div>
                            <div className="mt-1 text-sm font-bold text-primary-700">approval gates</div>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">Keep sensitive customer actions under team control.</p>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="The problem"
                            title="Support gets expensive when every question needs a human"
                            description="Most teams do not need another disconnected chatbot. They need a controlled workflow that removes repeated work and keeps exceptions visible."
                        />
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            {painPoints.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="card-interactive group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-primary-100 hover:shadow-lg">
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-transform group-hover:scale-110">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-sans text-lg font-extrabold text-slate-950">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                        <div>
                            <span className="section-label mb-5 block">The offer</span>
                            <h2 className="mb-5 font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                                Book a Support Automation Sprint
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                Bring one messy support process. We map the work, show what can be automated, and build a practical first workflow around your existing tools.
                            </p>
                            <BookDemoButton source="support_automation_offer" variant="primary">
                                Book the Audit
                            </BookDemoButton>
                        </div>

                        <div className="rounded-[28px] border border-slate-100 bg-slate-50 p-5 shadow-sm md:p-6">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-700 text-white">
                                    <Headphones className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-extrabold text-slate-950">What we build first</div>
                                    <div className="text-xs font-semibold text-slate-500">support automation sprint</div>
                                </div>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {sprintItems.map((item) => (
                                    <div key={item} className="card-interactive-sm group flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:border-primary-100 hover:shadow-md">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 transition-transform group-hover:scale-110" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="Dooza + Dooza Agents"
                            title="AI replies are only one part of the system"
                            description="Dooza handles the support thinking. Dooza Agents handles the routing, approvals, records, tool actions, and evidence trail."
                        />
                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="card-interactive group rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-primary-100 hover:shadow-lg md:p-8">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-transform group-hover:scale-110">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <h3 className="font-sans text-2xl font-extrabold text-slate-950">Dooza AI employees</h3>
                                <p className="mt-4 text-base leading-relaxed text-slate-600">
                                    Read customer messages, classify intent, summarize context, draft replies, and use your approved knowledge base.
                                </p>
                            </div>
                            <div className="card-interactive group rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-primary-100 hover:shadow-lg md:p-8">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-transform group-hover:scale-110">
                                    <Workflow className="h-6 w-6" />
                                </div>
                                <h3 className="font-sans text-2xl font-extrabold text-slate-950">Dooza Agents</h3>
                                <p className="mt-4 text-base leading-relaxed text-slate-600">
                                    Connect apps, branch tickets, request human approval, update records, create tasks, and log what happened.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <SectionHeader
                            eyebrow="Use cases"
                            title="Start with the support work your team repeats every week"
                            description="The fastest ROI usually comes from automating high-volume, low-risk requests first, then adding approval steps for more sensitive branches."
                            align="left"
                        />
                        <div className="grid gap-3 sm:grid-cols-2">
                            {useCases.map((item) => (
                                <div key={item} className="card-interactive-sm group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-primary-100 hover:bg-white hover:shadow-md">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600 transition-transform group-hover:scale-110" />
                                    <span className="text-sm font-bold leading-relaxed text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="Trust"
                            title="Automation with controls, not blind autopilot"
                            description="Support automation should help your team move faster while protecting customer relationships and sensitive decisions."
                        />
                        <TestimonialMarquee />

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {trustItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="card-interactive-sm group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-primary-100 hover:shadow-md">
                                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-transform group-hover:scale-110">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-sans text-base font-extrabold text-slate-950">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-950 px-4 py-20 text-white md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 max-w-3xl">
                            <span className="mb-4 block font-sans text-sm font-bold uppercase tracking-[3px] text-white">Why Dooza</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
                                Better than a chatbot. More practical than hiring more people.
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-300">
                                The goal is not to replace your support team. The goal is to remove the repeated work so the team can focus on the cases that actually need judgment.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {comparisonRows.map((item, index) => (
                                <div key={item.label} className={`card-interactive-sm rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:bg-white/10 ${index === 2 ? 'border-primary-400 bg-primary-500/10 hover:border-primary-300' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
                                    <h3 className="font-sans text-xl font-extrabold text-white">{item.label}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <span className="section-label mb-5 block">FAQ</span>
                            <h2 className="mb-5 font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                                Questions before you automate support
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                The safest way to start is one support workflow with clear rules, approvals, and measurable response-time savings.
                            </p>
                        </div>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="card-interactive-scale mx-auto max-w-5xl rounded-[32px] border border-primary-100 bg-primary-50 p-8 text-center shadow-xl shadow-primary-100/50 transition-all hover:border-primary-200 hover:shadow-primary-200/60 md:p-12">
                        <span className="section-label mb-4 block">Book the audit</span>
                        <h2 className="mb-5 font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                            Bring us your support inbox. We will show what can be automated.
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
                            In 20 minutes, we can identify the first support workflow worth automating and show how Dooza plus Dooza Agents would handle it.
                        </p>
                        <BookDemoButton source="support_automation_final" variant="primary" size="xl">
                            Book a Support Automation Audit
                        </BookDemoButton>
                    </div>
                </section>
            </main>

            <Footer />
        </BookingModalProvider>
    );
}
