import Link from 'next/link';
import {
    ArrowRight,
    BarChart3,
    BookOpen,
    Bot,
    CheckCircle2,
    Clock,
    Facebook,
    Globe,
    Headphones,
    Instagram,
    Mail,
    MessageCircle,
    MessageSquare,
    Phone,
    Route,
    ShieldCheck,
    Sparkles,
    Users,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import { getProductSignupUrl } from '@/lib/links';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/ai-customer-support`;
const signupUrl = 'https://accounts.dooza.ai/signup';

export const metadata = {
    title: {
        absolute: 'AI Customer Support Automation | The #1 Zendesk Alternative | Dooza',
    },
    description:
        'AI-powered customer support that handles 80% of tickets automatically. Replace Zendesk and Intercom with smarter AI agents. Respond in seconds, not hours. $199/month done-for-you.',
    keywords: [
        'AI customer support',
        'customer support automation',
        'Zendesk alternative',
        'Intercom alternative',
        'AI help desk',
        'automated customer service',
        'AI chatbot',
        'customer service AI',
        'support ticket automation',
        'AI support agent',
    ],
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    openGraph: {
        title: 'AI Customer Support Automation | The #1 Zendesk Alternative | Dooza',
        description: 'AI agents that handle customer support 24/7. Automate 80% of tickets, respond in seconds, and cut support costs by 80%.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza AI Customer Support' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Customer Support Automation | Dooza',
        description: 'AI agents that handle 80% of tickets automatically. Respond in seconds, not hours.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const stats = [
    { value: '80%', label: 'Tickets auto-resolved' },
    { value: '<30s', label: 'Average response time' },
    { value: '24/7', label: 'Always available' },
    { value: '80%', label: 'Cost savings' },
];

const steps = [
    {
        icon: BookOpen,
        step: 'Step 1',
        title: 'Train Your AI Agent',
        desc: 'Upload your knowledge base, FAQs, product docs, and past tickets. The AI learns your brand voice and policies.',
        color: 'bg-primary-50 text-primary-700',
        badge: 'text-primary-700 bg-primary-50',
    },
    {
        icon: MessageSquare,
        step: 'Step 2',
        title: 'Connect Your Channels',
        desc: 'Link email, live chat, social DMs, and help desk tools. One AI agent handles all channels from a single inbox.',
        color: 'bg-violet-50 text-violet-700',
        badge: 'text-violet-700 bg-violet-50',
    },
    {
        icon: CheckCircle2,
        step: 'Step 3',
        title: 'Watch Tickets Resolve',
        desc: 'AI handles routine questions instantly. Complex issues get routed to your team with full context and suggested replies.',
        color: 'bg-amber-50 text-amber-700',
        badge: 'text-amber-700 bg-amber-50',
    },
];

const features = [
    {
        icon: Mail,
        title: 'AI Email Agent',
        desc: 'Automatically reads, classifies, and responds to support emails. Handles refunds, order status, and FAQs without human involvement.',
        color: 'bg-primary-50 text-primary-700',
    },
    {
        icon: MessageCircle,
        title: 'Live Chat Bot',
        desc: 'Real-time chat widget that answers questions instantly using your knowledge base. Seamless handoff to humans when needed.',
        color: 'bg-violet-50 text-violet-700',
    },
    {
        icon: Route,
        title: 'Smart Ticket Routing',
        desc: 'AI classifies tickets by intent, urgency, and sentiment. Routes to the right team or resolves automatically based on your rules.',
        color: 'bg-amber-50 text-amber-700',
    },
    {
        icon: ShieldCheck,
        title: 'Human-in-the-Loop',
        desc: 'AI drafts the response, a human approves it. Perfect for refunds, escalations, and high-value customer interactions.',
        color: 'bg-rose-50 text-rose-700',
    },
    {
        icon: BookOpen,
        title: 'Knowledge Base AI',
        desc: 'Upload docs, SOPs, past tickets, and product guides. AI learns your knowledge and uses it to give accurate, on-brand answers.',
        color: 'bg-sky-50 text-sky-700',
    },
    {
        icon: BarChart3,
        title: 'Analytics Dashboard',
        desc: 'Track resolution rates, response times, CSAT scores, and AI accuracy. See exactly where your support is improving.',
        color: 'bg-indigo-50 text-indigo-700',
    },
];

const channels = [
    { icon: Mail, name: 'Email', color: 'text-rose-500' },
    { icon: MessageCircle, name: 'Live Chat', color: 'text-primary-500' },
    { icon: Phone, name: 'WhatsApp', color: 'text-green-500' },
    { icon: MessageSquare, name: 'Slack', color: 'text-sky-500' },
    { icon: Instagram, name: 'Instagram', color: 'text-pink-500' },
    { icon: Facebook, name: 'Facebook', color: 'text-blue-500' },
    { icon: Globe, name: 'Website', color: 'text-slate-700' },
];

const faqData = [
    {
        question: 'How does the AI handle customer support tickets?',
        answer: 'Dooza\'s AI agent reads incoming tickets, classifies intent (FAQ, billing, refund, etc.), pulls relevant knowledge from your uploaded docs, and drafts a response. For routine questions, it responds automatically. For sensitive issues like refunds, it routes to your team with context and a suggested reply.',
    },
    {
        question: 'How is Dooza different from Zendesk or Intercom?',
        answer: 'Traditional help desks need you to hire agents to respond. Dooza replaces most of that work with AI that actually resolves tickets — not just routes them. You get AI-first support at a fraction of the cost, with human handoff when needed.',
    },
    {
        question: 'What channels does it support?',
        answer: 'Dooza AI agents work across email, live chat, WhatsApp, Slack, Instagram DMs, Facebook Messenger, and website chat widgets. One AI agent handles all channels from a unified inbox.',
    },
    {
        question: 'Can I review AI responses before they\'re sent?',
        answer: 'Yes. You can enable human-in-the-loop mode for any ticket type. The AI drafts the response and waits for your approval before sending. This is especially useful for refunds, escalations, and VIP customers.',
    },
    {
        question: 'How long does setup take?',
        answer: 'Most teams are up and running in under 10 minutes. Upload your knowledge base, connect your email, and the AI starts handling tickets immediately. Our team can help with setup for free.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'AI Customer Support Automation',
        url: pageUrl,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: 'Dooza', url: SITE_URL },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'AI Customer Support', item: pageUrl },
            ],
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dooza AI Customer Support',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: pageUrl,
        description: 'AI-powered customer support platform that resolves 80% of tickets automatically across email, chat, WhatsApp, and more.',
        offers: {
            '@type': 'Offer',
            price: '199',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '85',
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

export default function AICustomerSupportPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <Navbar />

            <main id="main-content" className="bg-warm text-slate-900">

                {/* Hero */}
                <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="relative z-10 max-w-7xl mx-auto grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <ScrollReveal>
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                    <Sparkles className="h-4 w-4" />
                                    The #1 Zendesk Alternative for AI-First Support
                                </div>
                                <h1 className="mb-7 max-w-xl font-serif text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                    AI support agents that <span className="text-primary-600">never sleep</span>
                                </h1>
                                <p className="mb-9 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                    Handle 80% of customer tickets automatically. Instant replies, smart routing, and human handoff when needed. Save 80% compared to Zendesk.
                                </p>
                                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                    <a
                                        href={signupUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-center text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-xl sm:w-auto"
                                    >
                                        Start Free Trial <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <BookDemoButton source="support_hero" variant="secondary" size="lg">
                                        Talk to Sales
                                    </BookDemoButton>
                                </div>
                                <p className="mt-8 flex flex-wrap items-start gap-x-5 gap-y-2 text-sm text-slate-500">
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Responds in under 30 seconds</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> No credit card required</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> 7-day guarantee</span>
                                </p>
                            </ScrollReveal>
                        </div>

                        {/* Chat Preview */}
                        <ScrollReveal>
                            <div className="rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 overflow-hidden">
                                <div className="bg-primary-700 px-6 py-4 flex items-center gap-3">
                                    <span className="h-3 w-3 rounded-full bg-green-400" />
                                    <span className="text-white text-sm font-bold">Dooza AI Support Agent &mdash; Online</span>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-end">
                                        <div className="bg-primary-50 text-primary-900 rounded-2xl rounded-br-md px-4 py-3 max-w-[80%] text-sm">
                                            Hi, I need to cancel my subscription and get a refund for the last month.
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center shrink-0">
                                            <Bot className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="bg-slate-50 text-slate-800 rounded-2xl rounded-bl-md px-4 py-3 max-w-[80%] text-sm leading-relaxed">
                                            I&apos;ve found your account and processed the cancellation. Your refund of $29.00 has been initiated and will arrive in 3-5 business days. Is there anything else I can help with?
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-400 pl-11">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                        Resolved in 12 seconds &bull; No human needed
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Migration Banner */}
                <section className="border-y border-primary-100 bg-primary-50/40 px-4 py-5">
                    <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
                                <Headphones className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">Switching from Zendesk or Intercom?</h3>
                                <p className="text-xs text-slate-600">Import your knowledge base, canned responses, and ticket history in minutes.</p>
                            </div>
                        </div>
                        <a
                            href={signupUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary-800 whitespace-nowrap"
                        >
                            MIGRATE NOW <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-white border-b border-slate-100 px-4 py-12">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <div className="text-3xl md:text-4xl font-extrabold text-primary-700">{s.value}</div>
                                <div className="text-sm text-slate-500 font-medium mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3-Step How It Works */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">AI Support in 3 Simple Steps</h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">From setup to handling real customer tickets in under 10 minutes</p>
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
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">Everything your support team needs</h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">AI-first customer support that actually understands your customers</p>
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

                {/* Channels */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-14">
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">One AI Agent, Every Channel</h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Your AI support agent works across all the platforms your customers use</p>
                            </div>
                        </ScrollReveal>
                        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4" staggerDelay={0.08}>
                            {channels.map((ch) => {
                                const Icon = ch.icon;
                                return (
                                    <StaggerItem key={ch.name}>
                                        <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                                                <Icon className={`h-6 w-6 ${ch.color}`} />
                                            </div>
                                            <span className="text-sm font-bold text-slate-700">{ch.name}</span>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Pricing */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <span className="section-label block mb-4">Pricing</span>
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">We set it up. You sit back.</h2>
                                <p className="text-lg text-slate-600">Done-for-you AI support setup. No learning curve. No hiring headaches.</p>
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
                                    <p className="text-sm text-slate-500 mb-6">We set up your AI support workflows, connect your tools, and handle everything for you.</p>
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
                                        <BookDemoButton source="support_pricing" variant="secondary" size="lg">
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
                                <Headphones className="h-8 w-8" />
                            </div>
                            <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
                                Stop paying for support agents that sleep
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                                Your AI support agent resolves 80% of tickets instantly, never takes breaks, and costs a fraction of a human team. Start free today.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href={signupUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
                                >
                                    START RESOLVING TICKETS <ArrowRight className="h-4 w-4" />
                                </a>
                                <BookDemoButton source="support_final" variant="secondary" size="lg">
                                    Book a Demo
                                </BookDemoButton>
                            </div>
                            <p className="mt-6 text-sm text-slate-500">Join businesses saving 80% on customer support with Dooza AI</p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-slate-50 px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <ScrollReveal>
                            <div className="mb-10 text-center">
                                <span className="section-label mb-4 block">FAQ</span>
                                <h2 className="font-serif text-3xl font-bold md:text-5xl">AI Customer Support Questions</h2>
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
