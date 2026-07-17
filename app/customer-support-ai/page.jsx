import Link from 'next/link';
import {
    ArrowRight,
    Bot,
    CheckCircle2,
    Clock,
    DollarSign,
    Headphones,
    Moon,
    Sparkles,
    Workflow,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import ScrollReveal from '@/components/ScrollReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { WORKFLOW_SIGNUP_URL, WORKFLOW_SIGNIN_URL, getProductSignupUrl } from '@/lib/links';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/customer-support-ai`;

export const metadata = {
    title: {
        absolute: 'Automate Customer Support with Dooza Agent | AI Support Done For You',
    },
    description:
        'Build an AI-powered customer support workflow that replies to customers in seconds. Dooza Agent + AI employees handle email, chat, and tickets 24/7. $199/mo, done for you.',
    keywords: [
        'customer support workflow',
        'AI customer support automation',
        'support workflow automation',
        'Dooza Agent',
        'AI help desk workflow',
        'automated customer support',
        'customer service workflow',
        'AI support agent',
        'email support automation',
        'customer support software',
    ],
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    openGraph: {
        title: 'Automate Customer Support with Dooza Agent | AI Support Done For You',
        description: 'Build a support workflow that replies in seconds. Dooza Agent + AI employees. Done-for-you at $199/mo.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Agent - Customer Support Automation' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Automate Customer Support with Dooza Agent | Dooza',
        description: 'AI-powered support workflow that replies in seconds. Dooza Agent + AI employees. $199/mo done-for-you.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What is Dooza Agent?',
        answer: 'Dooza Agent is an automation platform that connects your business tools and runs AI-powered processes. For customer support, it detects new emails or messages, sends them to a Dooza AI employee for understanding and drafting, and delivers instant replies to your customers.',
    },
    {
        question: 'How is this different from a chatbot?',
        answer: 'Chatbots follow rigid scripts and break when questions go off-script. Dooza Agent runs a full AI employee that reads, understands context, checks your knowledge base, and writes natural replies. It handles the entire workflow — not just a chat widget.',
    },
    {
        question: 'What happens with questions the AI can\'t answer?',
        answer: 'You stay in control. Sensitive issues like refunds, complaints, or complex technical problems are flagged and routed to your team with full context and a suggested reply. The AI never sends a response it\'s not confident about.',
    },
    {
        question: 'How long does setup take?',
        answer: 'We do it for you. Our team connects your email, uploads your knowledge base, configures the workflow, and tests it — usually within 24-48 hours. You don\'t touch any code or settings.',
    },
    {
        question: 'Can I cancel if it\'s not working?',
        answer: 'Yes. We offer a 7-day money-back guarantee. If you\'re not happy with the results, you get a full refund — no questions asked.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Automate Customer Support with Dooza Agent',
        url: pageUrl,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: 'Dooza', url: SITE_URL },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Customer Support AI Workflow', item: pageUrl },
            ],
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dooza Agent - Customer Support',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: pageUrl,
        description: 'AI-powered customer support workflow that replies to customers in seconds. Powered by Dooza AI employees.',
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

export default function CustomerSupportSimplePage() {
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
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                <Workflow className="h-4 w-4" />
                                Dooza Agent &mdash; Customer Support
                            </div>
                            <h1 className="mb-7 font-serif text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                Build a support workflow that replies in <span className="text-primary-600">seconds</span>
                            </h1>
                            <p className="mb-9 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
                                Use Dooza Agent to create an automated support system. An AI employee reads every customer email, understands the problem, and replies instantly &mdash; you only step in when it actually needs you.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href={WORKFLOW_SIGNUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-center text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-xl sm:w-auto"
                                >
                                    Build Your Workflow <ArrowRight className="h-4 w-4" />
                                </a>
                                <BookDemoButton source="support_wf_hero" variant="secondary" size="lg">
                                    See It In Action
                                </BookDemoButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Pain points */}
                <section className="bg-white border-y border-slate-100 px-4 py-16 md:py-20">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="font-serif text-2xl font-bold text-slate-950 md:text-4xl text-center mb-12">Sound familiar?</h2>
                        </ScrollReveal>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                                <Clock className="h-8 w-8 text-red-400 mb-4" />
                                <h3 className="font-sans text-base font-extrabold text-slate-900 mb-2">Customers wait hours for a reply</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">By the time you respond, they&apos;ve already gone to your competitor.</p>
                            </div>
                            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                                <DollarSign className="h-8 w-8 text-red-400 mb-4" />
                                <h3 className="font-sans text-base font-extrabold text-slate-900 mb-2">Hiring support staff is expensive</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">One agent costs $3,000-6,000/month. You can&apos;t afford 24/7 coverage.</p>
                            </div>
                            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                                <Moon className="h-8 w-8 text-red-400 mb-4" />
                                <h3 className="font-sans text-base font-extrabold text-slate-900 mb-2">Nights and weekends go unanswered</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">Customers don&apos;t stop having problems at 6pm. But your team does.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How the workflow works */}
                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl text-center mb-4">How the workflow works</h2>
                            <p className="text-lg text-slate-600 text-center mb-16 max-w-xl mx-auto">Dooza Agent connects to your email, runs an AI employee on every ticket, and handles the rest.</p>
                        </ScrollReveal>
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-white font-extrabold text-lg">1</div>
                                <div>
                                    <h3 className="font-sans text-xl font-extrabold text-slate-950 mb-2">New email arrives</h3>
                                    <p className="text-slate-600 leading-relaxed">Dooza Agent detects a new support email the moment it hits your inbox. Works with Gmail, Outlook, or any email provider.</p>
                                </div>
                            </div>
                            <div className="border-l-2 border-dashed border-primary-200 ml-6 h-6" />
                            <div className="flex gap-6 items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-white font-extrabold text-lg">2</div>
                                <div>
                                    <h3 className="font-sans text-xl font-extrabold text-slate-950 mb-2">AI employee reads and understands it</h3>
                                    <p className="text-slate-600 leading-relaxed">A Dooza AI employee classifies the issue &mdash; is it a FAQ, billing question, refund request, or something that needs a human? It uses your knowledge base to draft the perfect reply.</p>
                                </div>
                            </div>
                            <div className="border-l-2 border-dashed border-primary-200 ml-6 h-6" />
                            <div className="flex gap-6 items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-white font-extrabold text-lg">3</div>
                                <div>
                                    <h3 className="font-sans text-xl font-extrabold text-slate-950 mb-2">Customer gets a reply in seconds</h3>
                                    <p className="text-slate-600 leading-relaxed">Routine questions get answered instantly. Sensitive cases (refunds, complaints) wait for your approval first. You stay in control, without doing the grunt work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Before vs After */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl text-center mb-14">Before vs After Dooza Agent</h2>
                        </ScrollReveal>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-3xl border border-red-100 bg-red-50/50 p-8">
                                <h3 className="font-sans text-lg font-extrabold text-red-900 mb-6 flex items-center gap-2">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500 text-sm">&#10005;</span>
                                    Without a workflow
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        'Customers wait 4-24 hours for a reply',
                                        'Support stops at night and weekends',
                                        'Same questions answered over and over',
                                        'Hiring costs $3,000-6,000/month per agent',
                                        'Tickets pile up and get missed',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-red-800">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-3xl border border-primary-100 bg-primary-50/50 p-8">
                                <h3 className="font-sans text-lg font-extrabold text-primary-900 mb-6 flex items-center gap-2">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>
                                    With Dooza Agent
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        'Customers get a reply in under 30 seconds',
                                        'Workflow runs 24/7, including holidays',
                                        'AI employee handles routine questions automatically',
                                        '$199/month — replaces a full-time hire',
                                        'Every ticket answered, nothing falls through',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-primary-800">
                                            <CheckCircle2 className="h-4 w-4 text-primary-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dooza Ecosystem callout */}
                <section className="bg-primary-50/40 border-y border-primary-100 px-4 py-16 md:py-20">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <div className="grid gap-8 md:grid-cols-[1fr_auto] items-center">
                                <div>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-bold text-primary-700">
                                        <Zap className="h-4 w-4" />
                                        Powered by Dooza
                                    </div>
                                    <h2 className="font-serif text-2xl font-bold text-slate-950 md:text-4xl mb-4">
                                        Dooza Agent + Dooza AI Employees
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        Dooza Agent is the automation engine &mdash; it connects your tools, triggers actions, and runs your support process. Dooza AI employees are the brains &mdash; they read, understand, decide, and reply like a trained support agent.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        Together, they replace your entire support stack. Not just a chatbot &mdash; a full support workflow that thinks, acts, and learns.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-50 text-primary-700 border border-primary-200">
                                        <Workflow className="h-10 w-10" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">Workflow</span>
                                    <div className="h-6 border-l border-dashed border-primary-200" />
                                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-50 text-primary-700 border border-primary-200">
                                        <Bot className="h-10 w-10" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">AI Employee</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Pricing */}
                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <span className="section-label block mb-4">Pricing</span>
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl mb-4">We build the workflow. You sit back.</h2>
                                <p className="text-lg text-slate-600">No DIY. No learning curve. We set up everything for you.</p>
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
                                    <p className="text-sm text-slate-500 mb-6">We build your support workflow, connect your tools, train the AI employee on your business, and keep it running.</p>
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
                                        <BookDemoButton source="support_wf_pricing" variant="secondary" size="lg">
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

                {/* FAQ */}
                <section className="bg-white border-t border-slate-100 px-4 py-20 md:py-28">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <span className="section-label block mb-4">FAQ</span>
                                <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">Common questions</h2>
                            </div>
                        </ScrollReveal>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative overflow-hidden bg-warm px-4 py-20 md:py-28">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/80 via-warm to-warm" />
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="mb-6 font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                                Stop replying manually. Build a workflow that does it for you.
                            </h2>
                            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                                Dooza Agent + AI employees = customer support on autopilot. Try it free, cancel within 7 days if it&apos;s not for you.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href={WORKFLOW_SIGNUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
                                >
                                    Build Your Support Workflow <ArrowRight className="h-4 w-4" />
                                </a>
                                <BookDemoButton source="support_wf_final" variant="secondary" size="lg">
                                    Talk to Us First
                                </BookDemoButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <Footer />
        </BookingModalProvider>
    );
}
