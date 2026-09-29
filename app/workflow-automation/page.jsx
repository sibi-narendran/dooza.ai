import Link from 'next/link';
import {
    ArrowRight,
    BrainCircuit,
    CheckCircle2,
    Code2,
    Eye,
    GitBranch,
    Link2,
    LockKeyhole,
    Rocket,
    ShieldCheck,
    Sparkles,
    Users,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import { getProductSignupUrl } from '@/lib/links';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { WORKFLOW_SIGNUP_URL, WORKFLOW_SIGNIN_URL } from '@/lib/links';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/workflow-automation`;

export const metadata = {
    title: {
        absolute: 'Dooza Agents Automation | The #1 Zapier Alternative with AI',
    },
    description:
        'Workflow automation is a Dooza Agents service: Dooza engineers build and maintain AI-powered workflows across 1,000+ app integrations. Start with a refundable pilot: 100% refund within 14 days.',
    keywords: [
        'workflow automation',
        'Zapier alternative',
        'AI workflow automation',
        'business process automation',
        'no-code automation',
        'Make alternative',
        'n8n alternative',
        'workflow builder',
        'AI agents workflow',
        'automate business processes',
    ],
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    openGraph: {
        title: 'Dooza Agents Automation | The #1 Zapier Alternative with AI',
        description: 'Build AI-powered workflows with 1,000+ app integrations. Visual builder, AI agents, and human-in-the-loop controls. Start with a refundable pilot.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Agents Automation' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Agents Automation | The #1 Zapier Alternative with AI',
        description: 'Build AI-powered workflows with 1,000+ app integrations. Visual builder, AI agents, and human-in-the-loop controls.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const steps = [
    {
        icon: Link2,
        step: 'Step 1',
        title: 'Connect Your Apps',
        desc: 'Link Gmail, Slack, Salesforce, Shopify, and 1,000+ other apps in one dashboard.',
        color: 'bg-primary-50 text-primary-700',
        badge: 'text-primary-700 bg-primary-50',
    },
    {
        icon: BrainCircuit,
        step: 'Step 2',
        title: 'Build AI Workflows',
        desc: 'Drag-and-drop workflow builder with AI agents, triggers, conditions, and actions.',
        color: 'bg-violet-50 text-violet-700',
        badge: 'text-violet-700 bg-violet-50',
    },
    {
        icon: Rocket,
        step: 'Step 3',
        title: 'Watch It Run',
        desc: 'Monitor every AI decision, trace runs, and optimize your automations in real-time.',
        color: 'bg-amber-50 text-amber-700',
        badge: 'text-amber-700 bg-amber-50',
    },
];

const features = [
    {
        icon: BrainCircuit,
        title: 'AI-Powered Agents',
        desc: 'Built-in AI that classifies, drafts, decides, and acts — not just passes data between apps.',
        color: 'bg-primary-50 text-primary-700',
    },
    {
        icon: GitBranch,
        title: 'Visual Workflow Builder',
        desc: 'Drag-and-drop canvas with branching logic, loops, conditions, and error handling.',
        color: 'bg-violet-50 text-violet-700',
    },
    {
        icon: ShieldCheck,
        title: 'Human-in-the-Loop',
        desc: 'Add approval gates for sensitive actions — refunds, publishing, emails, or any high-risk step.',
        color: 'bg-amber-50 text-amber-700',
    },
    {
        icon: Eye,
        title: 'Full Run Tracing',
        desc: 'See every input, AI decision, tool call, and output in a single trace view. Debug in seconds.',
        color: 'bg-rose-50 text-rose-700',
    },
    {
        icon: Code2,
        title: 'Code When Needed',
        desc: 'Add JavaScript, custom APIs, webhooks, and data transformations when visual steps aren\'t enough.',
        color: 'bg-sky-50 text-sky-700',
    },
    {
        icon: Users,
        title: 'Team Collaboration',
        desc: 'Role-based permissions, workflow diffs, approval flows, and shared workspaces for your entire team.',
        color: 'bg-indigo-50 text-indigo-700',
    },
];

const integrationRows = [
    ['Gmail', 'Slack', 'Salesforce', 'HubSpot', 'Shopify', 'WordPress', 'Google Sheets', 'Notion', 'Stripe', 'Calendly'],
    ['Airtable', 'Asana', 'Webhooks', 'Postgres', 'Google Drive', 'ServiceNow', 'Twilio', 'Zendesk', 'Intercom', 'Jira'],
];

const faqData = [
    {
        question: 'What is Dooza Agents?',
        answer: 'Dooza Agents is Dooza\'s AI agentic platform: custom AI agents built and maintained by Dooza engineers. Workflow automation is one Dooza Agents use case, where agents connect your business tools and run intelligent workflows that classify, draft, decide, and act on your behalf. Dooza is an AI-native company that builds AI products and services for small businesses.',
    },
    {
        question: 'How is Dooza different from Zapier?',
        answer: 'Unlike Zapier, Dooza includes built-in AI agents that can make decisions, not just pass data. You also get human-in-the-loop approvals, full run tracing, and the ability to add custom code, with Dooza engineers building and maintaining the workflows for you.',
    },
    {
        question: 'How many integrations are available?',
        answer: 'Dooza Agents supports 1,000+ app integrations including Gmail, Slack, Salesforce, HubSpot, Shopify, Stripe, and more. You can also connect any API through webhooks and custom code.',
    },
    {
        question: 'Can I migrate my Zapier workflows?',
        answer: 'Yes. You can recreate your existing Zapier workflows in Dooza\'s visual builder in minutes. Our engineers can also migrate your workflows for you during the pilot.',
    },
    {
        question: 'Is there a free plan?',
        answer: 'No. Every Dooza product starts with a refundable pilot: you pay for the pilot, and if you ask within 14 days you get a 100% refund. A Dooza engineer scopes your pilot on a free 30-minute call. Pricing depends on the product; see dooza.ai/pricing.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dooza Agents Automation',
        url: pageUrl,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: 'Dooza', url: SITE_URL },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Workflow Automation', item: pageUrl },
            ],
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dooza Agents',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: pageUrl,
        description: 'Workflow automation built on Dooza Agents, Dooza\'s AI agentic platform: custom AI agents built and maintained by Dooza engineers, with 1,000+ app integrations.',
        offers: {
            '@type': 'Offer',
            name: 'Refundable pilot',
            description: 'Refundable pilot, 100% refund within 14 days. Pricing depends on the product; see https://www.dooza.ai/pricing.',
            availability: 'https://schema.org/InStock',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    },
];

export default function WorkflowAutomationPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <Navbar signupUrl={WORKFLOW_SIGNUP_URL} loginUrl={WORKFLOW_SIGNIN_URL} />

            <main id="main-content" className="bg-warm text-slate-900">

                {/* Hero */}
                <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="relative z-10 max-w-5xl mx-auto text-center">
                        <ScrollReveal>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                The #1 Zapier Alternative with AI
                            </div>
                            <h1 className="mb-7 max-w-4xl mx-auto font-serif text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                Automate everything with <span className="text-primary-600">AI workflows</span>
                            </h1>
                            <p className="mb-9 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
                                Connect 1,000+ apps, build AI-powered automations, and run your business on autopilot. Dooza engineers build and maintain the workflows on Dooza Agents. Start with a refundable pilot.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href={WORKFLOW_SIGNUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-center text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-xl sm:w-auto"
                                >
                                    Start your pilot <ArrowRight className="h-4 w-4" />
                                </a>
                                <BookDemoButton source="workflow_auto_hero" variant="secondary" size="lg">
                                    Talk to Sales
                                </BookDemoButton>
                            </div>
                            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Built by Dooza engineers</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Refundable pilot</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> 100% refund within 14 days</span>
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Migration Banner */}
                <section className="border-y border-primary-100 bg-primary-50/40 px-4 py-5">
                    <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">Migrate from Zapier in Minutes</h3>
                                <p className="text-xs text-slate-600">Import your existing workflows, connections, and automations with one click.</p>
                            </div>
                        </div>
                        <a
                            href={WORKFLOW_SIGNUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary-800 whitespace-nowrap"
                        >
                            IMPORT FROM ZAPIER <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </section>

                {/* 3-Step How It Works */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">Automate Your Business in 3 Steps</h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">From a free pilot call to AI workflows running across your tools in days</p>
                            </div>
                        </ScrollReveal>
                        <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
                            {steps.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <StaggerItem key={s.title}>
                                        <div className="text-center rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                            <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${s.color}`}>
                                                <Icon className="h-8 w-8" />
                                            </div>
                                            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold mb-4 ${s.badge}`}>{s.step}</span>
                                            <h3 className="font-sans text-xl font-extrabold text-slate-950 mb-3">{s.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Features */}
                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <span className="section-label block mb-4">Features</span>
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">Everything you need to automate your business</h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">AI-powered automation that goes beyond simple triggers and actions</p>
                            </div>
                        </ScrollReveal>
                        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.12}>
                            {features.map((f) => {
                                const Icon = f.icon;
                                return (
                                    <StaggerItem key={f.title}>
                                        <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg h-full">
                                            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}>
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="font-sans text-lg font-extrabold text-slate-950 mb-2">{f.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Integrations */}
                <section className="bg-white px-4 py-20 md:py-28 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-14">
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">1,000+ Integrations, One Platform</h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Connect every tool your team uses — CRM, email, databases, payment, messaging, and more</p>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                            <div className="space-y-3 overflow-hidden py-6">
                                {integrationRows.map((row, rowIndex) => (
                                    <div key={rowIndex} className={`workflow-marquee-track flex w-max gap-3 px-3 ${rowIndex === 1 ? 'workflow-marquee-reverse' : ''}`}>
                                        {[...row, ...row].map((name, i) => (
                                            <div key={`${rowIndex}-${i}`} className="flex min-w-[148px] items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-bold text-slate-700">
                                                {name}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <span className="section-label block mb-4">Pricing</span>
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">We build it. You sit back.</h2>
                                <p className="text-lg text-slate-600">Done-for-you automation setup. No learning curve. No DIY headaches.</p>
                            </div>
                        </ScrollReveal>
                        <div className="relative rounded-3xl border-2 border-primary-400 bg-white p-8 md:p-10 shadow-xl shadow-primary-100/50 ring-1 ring-primary-100">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="bg-gradient-to-r from-primary-600 to-teal-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                                    Done For You
                                </span>
                            </div>
                            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                                <div>
                                    <h3 className="font-sans text-2xl font-extrabold text-slate-900 mb-2">Refundable pilot</h3>
                                    <p className="text-sm text-slate-500 mb-6">We set up your workflows, connect your tools, and handle everything for you.</p>
                                    <ul className="space-y-3">
                                        {[
                                            'Scoped with a Dooza engineer on a free pilot call',
                                            'Built and maintained by Dooza engineers',
                                            'Managed sales and support automation setup',
                                            'Calls, email, leads, and operations setup',
                                            'Priority workflow review and improvements',
                                            '1000+ app integrations',
                                        ].map((f) => (
                                            <li key={f} className={`flex items-center gap-2.5 ${f.includes('free pilot call') ? 'rounded-2xl border border-primary-200 bg-primary-50 px-3 py-2.5 shadow-sm' : ''}`}>
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 ${f.includes('free pilot call') ? 'text-primary-700' : 'text-primary-500'}`} />
                                                <span className={`text-sm ${f.includes('free pilot call') ? 'font-extrabold text-primary-900' : 'text-slate-600'}`}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-center md:text-right md:pl-8 md:border-l md:border-slate-100">
                                    <p className="text-2xl font-extrabold text-slate-900 mb-1">100% refund within 14 days</p>
                                    <p className="text-xs text-slate-500 mb-6">
                                        Pricing depends on the product; every Dooza product starts with a refundable pilot.{' '}
                                        <Link href="/pricing" className="font-semibold text-primary-700 underline">See pricing</Link>
                                    </p>
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        Start your pilot <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <div className="mt-4">
                                        <BookDemoButton source="workflow_auto_pricing" variant="secondary" size="lg">
                                            Book a free pilot call
                                        </BookDemoButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <TestimonialsSection />

                {/* Final CTA */}
                <section className="relative overflow-hidden bg-warm px-4 py-20 md:py-28">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/80 via-warm to-warm" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                <Zap className="h-8 w-8" />
                            </div>
                            <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
                                Stop paying Zapier prices for simple automations
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                                Build AI-powered workflows that actually think, decide, and act. Start with a refundable pilot — 100% refund within 14 days.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href={WORKFLOW_SIGNUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
                                >
                                    START AUTOMATING NOW <ArrowRight className="h-4 w-4" />
                                </a>
                                <BookDemoButton source="workflow_auto_final" variant="secondary" size="lg">
                                    Book a free pilot call
                                </BookDemoButton>
                            </div>
                            <p className="mt-6 text-sm text-slate-500">Pricing depends on the product; every Dooza product starts with a refundable pilot. <Link href="/pricing" className="font-semibold text-primary-700 underline">See pricing</Link></p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-slate-50 px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <ScrollReveal>
                            <div className="mb-10 text-center">
                                <span className="section-label mb-4 block">FAQ</span>
                                <h2 className="font-serif text-3xl font-bold md:text-5xl">Workflow Automation Questions</h2>
                            </div>
                        </ScrollReveal>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

            </main>
            <Footer />
        </BookingModalProvider>
    );
}
