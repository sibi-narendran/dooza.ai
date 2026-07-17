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
        absolute: 'Dooza Agent Automation | The #1 Zapier Alternative with AI',
    },
    description:
        'Build AI-powered workflows that automate your business. 300+ integrations, visual builder, and AI agents. Save 70% compared to Zapier. Start free.',
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
        title: 'Dooza Agent Automation | The #1 Zapier Alternative with AI',
        description: 'Build AI-powered workflows with 300+ integrations. Visual builder, AI agents, and human-in-the-loop controls. Save 70% vs Zapier.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Agent Automation' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Agent Automation | The #1 Zapier Alternative with AI',
        description: 'Build AI-powered workflows with 300+ integrations. Visual builder, AI agents, and human-in-the-loop controls.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const steps = [
    {
        icon: Link2,
        step: 'Step 1',
        title: 'Connect Your Apps',
        desc: 'Link Gmail, Slack, Salesforce, Shopify, and 300+ other apps in one dashboard.',
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
        question: 'What is Dooza Agent?',
        answer: 'Dooza Agent is an AI-powered automation platform that connects your business tools and runs intelligent workflows. It combines a visual builder with AI agents that can classify, draft, decide, and act on your behalf.',
    },
    {
        question: 'How is Dooza different from Zapier?',
        answer: 'Unlike Zapier, Dooza includes built-in AI agents that can make decisions, not just pass data. You also get human-in-the-loop approvals, full run tracing, and the ability to add custom code — all at 70% less cost.',
    },
    {
        question: 'How many integrations are available?',
        answer: 'Dooza Agent supports 300+ integrations including Gmail, Slack, Salesforce, HubSpot, Shopify, Stripe, and more. You can also connect any API through webhooks and custom code.',
    },
    {
        question: 'Can I migrate my Zapier workflows?',
        answer: 'Yes. You can recreate your existing Zapier workflows in Dooza\'s visual builder in minutes. Our team can also help migrate your workflows for free during onboarding.',
    },
    {
        question: 'Is there a free plan?',
        answer: 'Yes. Dooza Agent offers a free plan with up to 5 workflows and 100 executions per month. No credit card required to get started.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dooza Agent Automation',
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
        name: 'Dooza Agent',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: pageUrl,
        description: 'AI-powered workflow automation platform with 300+ integrations, visual builder, and intelligent AI agents.',
        offers: {
            '@type': 'Offer',
            price: '199',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '120',
            bestRating: '5',
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
                                Connect 300+ apps, build AI-powered automations, and run your business on autopilot. No code required. Save 70% compared to Zapier.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href={WORKFLOW_SIGNUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-center text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-xl sm:w-auto"
                                >
                                    Start Free Trial <ArrowRight className="h-4 w-4" />
                                </a>
                                <BookDemoButton source="workflow_auto_hero" variant="secondary" size="lg">
                                    Talk to Sales
                                </BookDemoButton>
                            </div>
                            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> No credit card required</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Setup in 5 minutes</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> 7-day guarantee</span>
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
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">From setup to running AI workflows across all your tools in under 5 minutes</p>
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
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">300+ Integrations, One Platform</h2>
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
                                    <h3 className="font-sans text-2xl font-extrabold text-slate-900 mb-2">Managed</h3>
                                    <p className="text-sm text-slate-500 mb-6">We set up your workflows, connect your tools, and handle everything for you.</p>
                                    <ul className="space-y-3">
                                        {[
                                            'All AI employees included',
                                            '84 hours of done-for-you work capacity',
                                            'Managed sales and support automation setup',
                                            'Calls, email, leads, and operations setup',
                                            'Priority workflow review and improvements',
                                            '1000+ app integrations',
                                        ].map((f) => (
                                            <li key={f} className={`flex items-center gap-2.5 ${f.includes('84 hours') ? 'rounded-2xl border border-primary-200 bg-primary-50 px-3 py-2.5 shadow-sm' : ''}`}>
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 ${f.includes('84 hours') ? 'text-primary-700' : 'text-primary-500'}`} />
                                                <span className={`text-sm ${f.includes('84 hours') ? 'font-extrabold text-primary-900' : 'text-slate-600'}`}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-center md:text-right md:pl-8 md:border-l md:border-slate-100">
                                    <div className="flex items-baseline justify-center md:justify-end gap-1 mb-1">
                                        <span className="text-5xl md:text-6xl font-extrabold text-slate-900">$199</span>
                                        <span className="text-slate-500 text-sm">/ month</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-6">7-day money-back guarantee</p>
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        Get Started <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <div className="mt-4">
                                        <BookDemoButton source="workflow_auto_pricing" variant="secondary" size="lg">
                                            Book Free Setup Call
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
                                Build AI-powered workflows that actually think, decide, and act. Start free and automate your first process in 5 minutes.
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
                                    Book a Demo
                                </BookDemoButton>
                            </div>
                            <p className="mt-6 text-sm text-slate-500">Join businesses saving 70% on workflow automation with Dooza</p>
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
