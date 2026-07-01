import {
    ArrowRight,
    Bot,
    CheckCircle2,
    Clock,
    Headphones,
    MessageSquareText,
    Plug,
    ShieldCheck,
    Sparkles,
    TrendingDown,
    UserCheck,
    Users,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import VideoSection from '@/components/sections/VideoSection';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/automated-customer-support`;

export const metadata = {
    title: {
        absolute: 'Automated Customer Service & Support Software | Dooza',
    },
    description:
        'Automated customer service software starting at $49/mo. AI handles tickets, returns, FAQs, and escalations 24/7 with human approval where it matters. 7-day money-back guarantee.',
    keywords: [
        'automated customer service',
        'customer service automation',
        'customer support automation',
        'automated customer support',
        'AI customer service',
        'customer support software',
        'customer service software',
        'automated customer support system',
    ],
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    openGraph: {
        title: 'Automated Customer Service & Support Software | Dooza',
        description: 'AI customer service that handles tickets 24/7. Starts at $49/mo with a 7-day money-back guarantee.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza automated customer service software' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Automated Customer Service & Support Software | Dooza',
        description: 'AI customer service that handles tickets 24/7. Starts at $49/mo with a 7-day money-back guarantee.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const painPoints = [
    {
        icon: Clock,
        title: 'Tickets pile up overnight',
        text: '78% of customers buy from whoever responds first. Slow replies cost you sales every day.',
    },
    {
        icon: Users,
        title: 'Hiring support staff is expensive',
        text: 'A single support agent costs $3,000–6,000/mo. Most small teams can\'t afford 24/7 coverage.',
    },
    {
        icon: TrendingDown,
        title: 'Repetitive work drains your team',
        text: '60% of support tickets are the same questions — order status, returns, shipping, FAQs.',
    },
];

const howItWorks = [
    {
        icon: Plug,
        step: '01',
        title: 'Connect your tools',
        text: 'Link your email, helpdesk, Shopify, CRM, or any of 1,000+ apps. Setup takes minutes, not weeks.',
    },
    {
        icon: Bot,
        step: '02',
        title: 'AI handles tickets 24/7',
        text: 'Dooza reads every message, understands intent, drafts responses, and resolves common questions instantly.',
    },
    {
        icon: UserCheck,
        step: '03',
        title: 'Humans review edge cases',
        text: 'Refunds, complaints, and sensitive cases get flagged for your team. You stay in control of what matters.',
    },
];

const trustBadges = [
    { icon: Zap, text: '24/7 operation' },
    { icon: Plug, text: '1,000+ integrations' },
    { icon: ShieldCheck, text: '7-day money-back guarantee' },
];

const faqs = [
    {
        question: 'What is automated customer service?',
        answer: 'Automated customer service uses AI to read support messages, understand what the customer needs, draft accurate responses, and resolve common questions without human intervention. Complex or sensitive cases are routed to your team automatically.',
    },
    {
        question: 'How much does Dooza cost?',
        answer: 'Dooza starts at $49/mo for the Starter plan, $79/mo for Growth (2X usage), and $199/mo for Managed (done-for-you setup with 84 hours of work capacity). All plans include every AI employee, free concierge onboarding, and 1,000+ integrations.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes. Every plan comes with a 7-day money-back guarantee. If Dooza doesn\'t deliver value in the first week, you get a full refund — no questions asked. You can also cancel anytime with no contracts or commitments.',
    },
    {
        question: 'Will AI send replies without my approval?',
        answer: 'Only if you allow it. Most teams start with draft-only or approval-first mode, where Dooza prepares responses but waits for a human to approve before sending. You can gradually automate more as trust builds.',
    },
    {
        question: 'What kind of tickets can Dooza handle?',
        answer: 'Order status, shipping questions, return requests, FAQs, product questions, appointment booking, complaint routing, and ticket summarization. Dooza works for ecommerce, SaaS, agencies, and service businesses.',
    },
    {
        question: 'How long does setup take?',
        answer: 'Most teams are live within 15 minutes. Connect your tools, point Dooza at your knowledge base or past tickets, and the AI starts working. Every plan includes free concierge onboarding where our team helps you set up.',
    },
    {
        question: 'Do I need a technical team to use Dooza?',
        answer: 'No. Dooza is built for business owners and support managers, not engineers. The interface is simple, and our team handles the setup with you during the free onboarding call.',
    },
    {
        question: 'Can Dooza replace outsourcing?',
        answer: 'For most small and mid-size businesses, yes. Outsourced agents cost $1,500–3,500/mo per person. Dooza starts at $49/mo total and handles the same repetitive tickets 24/7 with faster response times and no training ramp-up.',
    },
];

const videoData = {
    embedUrl: 'https://www.youtube-nocookie.com/embed/tC1BhYRCqgE?rel=0',
    title: 'What Is Customer Service Automation For eCommerce Operations?',
};

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Automated Customer Service & Support Software',
        description: metadata.description,
        url: pageUrl,
        isPartOf: { '@type': 'WebSite', name: 'Dooza', url: SITE_URL },
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL, logo: `${SITE_URL}/logo.png` },
        dateModified: '2026-07-01',
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dooza — Automated Customer Service Software',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: pageUrl,
        offers: [
            { '@type': 'Offer', name: 'Starter', price: '49', priceCurrency: 'USD', url: pageUrl },
            { '@type': 'Offer', name: 'Growth', price: '79', priceCurrency: 'USD', url: pageUrl },
            { '@type': 'Offer', name: 'Managed', price: '199', priceCurrency: 'USD', url: pageUrl },
        ],
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    },
];

function SectionLabel({ children }) {
    return (
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-black uppercase tracking-wider text-primary-800">
            {children}
        </div>
    );
}

export default function AutomatedCustomerSupportPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <Navbar showLogin={false} showIndustry ctaType="demo" ctaSource="automated_customer_support_nav" />

            <main id="main-content" className="bg-white text-slate-900">

                {/* ── Hero ── */}
                <section className="relative overflow-hidden px-4 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:28px_28px]" />
                        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary-50 via-white to-transparent" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-4 py-2 text-sm font-black text-primary-800 shadow-sm backdrop-blur">
                            <Sparkles className="h-4 w-4" />
                            Starts at $49/mo · Cancel anytime
                        </div>
                        <h1 className="font-serif text-4xl font-extrabold leading-[1.08] text-slate-950 md:text-6xl">
                            Automated Customer Service That Works 24/7
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-slate-600 md:text-xl">
                            AI customer support software that handles tickets, returns, FAQs, and escalations around the clock — with human approval where it matters.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <BookDemoButton source="automated_customer_support_hero" variant="primary" size="xl">
                                Get Started — $49/mo
                            </BookDemoButton>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50"
                            >
                                See pricing
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            {trustBadges.map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-4 py-2 shadow-sm">
                                    <Icon className="h-4 w-4 text-primary-700" />
                                    <span className="text-sm font-bold text-slate-800">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Problem ── */}
                <section className="bg-slate-50 px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center">
                            <SectionLabel>The problem</SectionLabel>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
                                Customer service shouldn't keep you up at night
                            </h2>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {painPoints.map(({ icon: Icon, title, text }) => (
                                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-950">{title}</h3>
                                    <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── How it works ── */}
                <section className="px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center">
                            <SectionLabel>How it works</SectionLabel>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
                                Three steps to automated customer support
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-slate-600">
                                No engineering team needed. Go live in 15 minutes with free concierge onboarding.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {howItWorks.map(({ icon: Icon, step, title, text }) => (
                                <div key={step} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <span className="absolute right-5 top-5 text-4xl font-black text-slate-100">{step}</span>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-950">{title}</h3>
                                    <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Testimonials ── */}
                <TestimonialsSection />

                {/* ── Dooza demo video ── */}
                <VideoSection />

                {/* ── Pricing ── */}
                <div id="pricing">
                    <PricingSection />
                </div>

                {/* ── Guarantee ── */}
                <section className="px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center md:p-12">
                        <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
                        <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-4xl">
                            7-Day Money-Back Guarantee
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-slate-600">
                            Try Dooza risk-free. If our customer service automation doesn't deliver value in the first 7 days, get a full refund — no questions asked. Cancel anytime, no contracts, no commitments.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-bold text-emerald-800">
                            {['Full refund within 7 days', 'Cancel anytime', 'No contracts', 'Free onboarding included'].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Video ── */}
                <section className="bg-slate-50 px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <SectionLabel>
                                <Headphones className="h-4 w-4" />
                                3-minute explainer
                            </SectionLabel>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                                See how customer support automation works
                            </h2>
                            <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-600">
                                Watch how AI handles order questions, return requests, ticket routing, and human handoff — all without writing code.
                            </p>
                            <div className="mt-6">
                                <BookDemoButton source="automated_customer_support_video" variant="primary" size="lg">
                                    Get Started
                                </BookDemoButton>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50 md:p-4">
                            <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                                <iframe
                                    className="h-full w-full"
                                    src={videoData.embedUrl}
                                    title={videoData.title}
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section id="faq" className="px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-10 text-center">
                            <SectionLabel>FAQ</SectionLabel>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
                                Common questions about customer service automation
                            </h2>
                        </div>
                        <FAQAccordion items={faqs} />
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section className="px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-5xl rounded-3xl border border-primary-100 bg-white p-8 shadow-2xl shadow-primary-100/60 md:p-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-800">
                                    <MessageSquareText className="h-4 w-4" />
                                    Start automating today
                                </div>
                                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                                    Stop losing customers to slow support
                                </h2>
                                <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-slate-600">
                                    Automated customer service from $49/mo. 7-day money-back guarantee. Free onboarding. Cancel anytime.
                                </p>
                            </div>
                            <BookDemoButton source="automated_customer_support_final" variant="primary" size="xl">
                                Get Started — $49/mo
                            </BookDemoButton>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </BookingModalProvider>
    );
}
