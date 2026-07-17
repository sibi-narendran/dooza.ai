import {
    ArrowRight,
    Bot,
    CheckCircle2,
    Clock,
    ExternalLink,
    Headphones,
    MessageSquareText,
    Plug,
    Settings,
    ShieldCheck,
    Sparkles,
    TrendingDown,
    UserCheck,
    Users,
    Wrench,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
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
        'Done-for-you automated customer service for $199/mo. We set up your AI support workflows, connect your tools, and handle everything. 7-day money-back guarantee.',
    keywords: [
        'automated customer service',
        'customer service automation',
        'customer support automation',
        'automated customer support',
        'AI customer service',
        'customer support software',
        'customer service software',
        'automated customer support system',
        'Gorgias alternative',
        'Zendesk alternative',
    ],
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    openGraph: {
        title: 'Automated Customer Service & Support Software | Dooza',
        description: 'Done-for-you AI customer service. We set it up, you sit back. $199/mo with 7-day money-back guarantee.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza automated customer service software' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Automated Customer Service & Support Software | Dooza',
        description: 'Done-for-you AI customer service. We set it up, you sit back. $199/mo with 7-day money-back guarantee.',
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
        title: 'We connect your tools',
        text: 'Our team connects your Shopify, Zendesk, Gmail, CRM, or any of 1,000+ apps. You don\'t touch a thing.',
    },
    {
        icon: Bot,
        step: '02',
        title: 'We build your AI workflows',
        text: 'We set up support rules, draft templates, escalation paths, and approval flows based on your real tickets.',
    },
    {
        icon: UserCheck,
        step: '03',
        title: 'You review, we iterate',
        text: 'We run the first workflows on real tickets, review results with you, and optimize until it\'s working perfectly.',
    },
];

const managedFeatures = [
    'All AI employees included',
    '84 hours of done-for-you work capacity',
    'Complete setup handled by our team',
    'Dooza Agent connected for writing workflows',
    'Priority workflow setup and review',
    '1,000+ app integrations',
    'Connect Shopify, Zendesk, Freshdesk, and more',
    '7-day money-back guarantee',
];

const competitors = [
    {
        name: 'Gorgias',
        logo: '/logos/gorgias.svg',
        desc: 'Ecommerce helpdesk for Shopify. Powerful, but you need to configure macros, rules, and automations yourself.',
    },
    {
        name: 'Intercom Fin',
        logo: '/logos/intercom.svg',
        desc: 'AI chatbot that resolves tickets. You still need to build the knowledge base, set up workflows, and manage the AI.',
    },
    {
        name: 'Freshdesk',
        logo: '/logos/freshdesk.svg',
        desc: 'Multi-channel helpdesk. Feature-rich, but setup means configuring ticket fields, automations, SLAs, and routing rules.',
    },
    {
        name: 'Zendesk',
        logo: '/logos/zendesk.svg',
        desc: 'Enterprise support platform. The most customizable option — and the most time-consuming to set up properly.',
    },
];

const integrations = [
    { name: 'Shopify', logo: '/logos/shopify.svg', desc: 'Pull order data, track shipments, handle returns' },
    { name: 'Zendesk', logo: '/logos/zendesk.svg', desc: 'Sync tickets, tags, and agent assignments' },
    { name: 'Freshdesk', logo: '/logos/freshdesk.svg', desc: 'Import tickets and automate responses' },
    { name: 'Gmail', logo: '/logos/gmail.svg', desc: 'Read, draft, label, and send support emails' },
    { name: 'Intercom', logo: '/logos/intercom.svg', desc: 'Connect chat conversations and customer data' },
    { name: 'HubSpot', logo: '/logos/hubspot.svg', desc: 'Sync contacts, deals, and support tickets' },
    { name: 'Slack', logo: '/logos/slack.svg', desc: 'Get alerts, approvals, and summaries in channels' },
    { name: 'WooCommerce', logo: '/logos/woocommerce.svg', desc: 'Connect orders, products, and customer queries' },
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
        question: 'What does "done-for-you" mean?',
        answer: 'It means our team handles the entire setup. We connect your tools (Shopify, Zendesk, Gmail, etc.), build your AI workflows, configure approval rules, test with real tickets, and optimize until everything works. You don\'t need to spend any time on setup.',
    },
    {
        question: 'How is Dooza different from Gorgias or Zendesk?',
        answer: 'Gorgias, Zendesk, Freshdesk, and Intercom are powerful tools — but they require your team to configure automations, rules, and workflows. With Dooza\'s Managed plan, we do all of that for you. You get the automation without the setup headache.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes. The Managed plan comes with a 7-day money-back guarantee. If we don\'t deliver value in the first week, you get a full refund — no questions asked. Cancel anytime, no contracts.',
    },
    {
        question: 'Will AI send replies without my approval?',
        answer: 'Only if you allow it. Most teams start with draft-only or approval-first mode, where Dooza prepares responses but waits for a human to approve before sending. You can gradually automate more as trust builds.',
    },
    {
        question: 'What tools can Dooza connect to?',
        answer: 'Dooza integrates with 1,000+ apps including Shopify, WooCommerce, Zendesk, Freshdesk, Intercom, Gmail, HubSpot, Slack, Notion, Google Sheets, and more. We handle all the connections during setup.',
    },
    {
        question: 'How long does setup take?',
        answer: 'Our team typically has your first workflow live within 3 days. By day 7, you\'ll have a full review of what\'s working, what it costs to run monthly, and whether to continue. The entire setup is handled by us.',
    },
    {
        question: 'Can Dooza replace outsourcing?',
        answer: 'For most small and mid-size businesses, yes. Outsourced agents cost $1,500–3,500/mo per person. Dooza\'s Managed plan is $199/mo total and handles the same repetitive tickets 24/7 with faster response times and no training ramp-up.',
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
        offers: { '@type': 'Offer', name: 'Managed', price: '199', priceCurrency: 'USD', url: pageUrl },
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
                            Done-for-you · $199/mo · We set it up
                        </div>
                        <h1 className="font-serif text-4xl font-extrabold leading-[1.08] text-slate-950 md:text-6xl">
                            Automated Customer Service — We Set It Up For You
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-slate-600 md:text-xl">
                            Stop spending weeks configuring support software. Our team connects your tools, builds your AI workflows, and handles everything — so you don't have to.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <BookDemoButton source="automated_customer_support_hero" variant="primary" size="xl">
                                Get Started — $199/mo
                            </BookDemoButton>
                            <a
                                href="#comparison"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50"
                            >
                                Compare with alternatives
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

                {/* ── Software Comparison ── */}
                <section id="comparison" className="scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center">
                            <SectionLabel>
                                <Settings className="h-4 w-4" />
                                Why not just use existing tools?
                            </SectionLabel>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
                                Even AI tools need someone to set them up
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-slate-600">
                                Great software still requires weeks of configuration, rule-building, and testing. That's where most teams get stuck — and where Dooza comes in.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-5 md:grid-cols-2">
                            {competitors.map((comp) => (
                                <div key={comp.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="mb-4 flex items-center gap-3">
                                        <img src={comp.logo} alt={`${comp.name} logo`} className="h-10 w-10 rounded-xl" />
                                        <h3 className="text-lg font-black text-slate-950">{comp.name}</h3>
                                    </div>
                                    <p className="text-sm font-semibold leading-relaxed text-slate-600">{comp.desc}</p>
                                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800">
                                        <Wrench className="h-4 w-4 shrink-0" />
                                        You configure it yourself
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-3xl border-2 border-primary-400 bg-white p-6 shadow-xl shadow-primary-100/50 md:p-8">
                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <div className="mb-2 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-800">
                                        The Dooza difference
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-950">Dooza Managed — $199/mo</h3>
                                    <p className="mt-2 max-w-lg text-base font-semibold leading-relaxed text-slate-600">
                                        We connect your tools, build your workflows, configure your rules, test with real tickets, and optimize everything. You don't spend a single hour on setup.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800">
                                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                                        We set it up for you — completely
                                    </div>
                                </div>
                                <BookDemoButton source="automated_customer_support_comparison" variant="primary" size="lg">
                                    Get Started
                                </BookDemoButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── How it works ── */}
                <section className="bg-slate-50 px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center">
                            <SectionLabel>How it works</SectionLabel>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
                                You sit back. We handle the setup.
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-slate-600">
                                No engineering team needed. No hours spent configuring. Our team does everything.
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

                {/* ── Connect Your Tools ── */}
                <section className="px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center">
                            <SectionLabel>
                                <ExternalLink className="h-4 w-4" />
                                Integrations
                            </SectionLabel>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
                                Connect your existing tools to Dooza
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-slate-600">
                                Already using Zendesk, Shopify, or Freshdesk? We connect them to Dooza so your AI workflows pull real data from the tools you already use. 1,000+ integrations supported.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {integrations.map((tool) => (
                                <div key={tool.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md">
                                    <div className="mb-3 flex items-center gap-3">
                                        <img src={tool.logo} alt={`${tool.name} logo`} className="h-10 w-10 rounded-xl" />
                                        <h3 className="text-base font-black text-slate-950">{tool.name}</h3>
                                    </div>
                                    <p className="text-sm font-semibold leading-relaxed text-slate-600">{tool.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-center text-sm font-bold text-slate-500">
                            + 1,000 more apps via Zapier, Make, and native API connections
                        </p>
                    </div>
                </section>

                {/* ── Testimonials ── */}
                <TestimonialsSection />

                {/* ── Dooza demo video ── */}
                <VideoSection />

                {/* ── Managed Plan ── */}
                <section id="pricing" className="scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 text-center">
                            <SectionLabel>Pricing</SectionLabel>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
                                One plan. Everything included.
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-slate-600">
                                No per-agent fees. No setup charges. No surprises.
                            </p>
                        </div>

                        <div className="rounded-3xl border-2 border-primary-400 bg-white p-8 shadow-xl shadow-primary-100/50 md:p-10">
                            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="text-2xl font-black text-slate-950">Managed Plan</h3>
                                    <p className="mt-1 text-base font-semibold text-slate-600">We set up everything — you don't lift a finger</p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-extrabold text-slate-950 font-serif">$199</span>
                                        <span className="text-slate-600 text-sm">USD/ month</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {managedFeatures.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-bold text-slate-800">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-5">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
                                    <div>
                                        <div className="text-base font-black text-slate-950">7-day money-back guarantee</div>
                                        <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-600">
                                            Review the first workflow by day 7. If it doesn't prove value, get a full refund — no questions asked. Cancel anytime.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col items-center gap-3">
                                <BookDemoButton source="automated_customer_support_pricing" variant="primary" size="xl">
                                    Get Started — $199/mo
                                </BookDemoButton>
                                <p className="text-sm font-semibold text-slate-500">Free setup call with the founder · No commitment before the call</p>
                            </div>
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
                                Watch how AI handles order questions, return requests, ticket routing, and human handoff — all set up by our team.
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
                                Common questions about managed customer service automation
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
                                    Done-for-you setup
                                </div>
                                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                                    Stop configuring. Start automating.
                                </h2>
                                <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-slate-600">
                                    $199/mo. We set up your AI support workflows, connect your tools, and handle everything. 7-day money-back guarantee.
                                </p>
                            </div>
                            <BookDemoButton source="automated_customer_support_final" variant="primary" size="xl">
                                Get Started — $199/mo
                            </BookDemoButton>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </BookingModalProvider>
    );
}
