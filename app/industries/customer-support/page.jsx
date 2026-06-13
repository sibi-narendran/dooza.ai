import Link from 'next/link';
import {
    ArrowRight,
    CheckCircle2,
    ClipboardCheck,
    Eye,
    FileText,
    Headphones,
    MessageSquareText,
    PhoneCall,
    RefreshCcw,
    ShieldCheck,
    ShoppingBag,
    Sparkles,
    Timer,
    Users,
    Workflow,
    Wrench,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/industries/customer-support`;

export const metadata = {
    title: {
        absolute: 'AI Customer Support Automation for Stores | Dooza',
    },
    description:
        'Dooza sets up and manages AI that answers phone calls, sends quotes, and handles customer support across email and chat for ecommerce stores and SMBs.',
    keywords: [
        'AI customer support automation for stores',
        'AI phone answering for ecommerce',
        'AI quote automation',
        'Shopify customer support automation',
        'store customer operations automation',
        'managed AI automation for SMBs',
        'AI support agent for ecommerce',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'AI Customer Support Automation for Stores | Dooza',
        description:
            'Managed AI for store operations: phone calls, quotes, email support, chat support, and human approval where it matters.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Customer Support Automation for Stores | Dooza',
        description:
            'Dooza manages AI workflows for store calls, quote requests, and repetitive customer support.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const problemBullets = [
    'The phone rings during the busiest part of the day, and half the time nobody can pick up.',
    "Quote requests sit in the inbox for hours because everyone's busy, and the lead goes cold.",
    'The same support questions come in over and over: "Where is my order?" "Can I return this?" "Do you ship to..."',
    "You know AI could handle a lot of it, but you're not sure how to set it up or whether you can trust it with customers.",
];

const workflowSteps = [
    {
        icon: PhoneCall,
        title: 'Call answered',
        desc: 'The customer gets an instant response instead of a missed call.',
    },
    {
        icon: FileText,
        title: 'Quote drafted',
        desc: 'The request becomes a structured quote or estimate for review.',
    },
    {
        icon: MessageSquareText,
        title: 'Support handled',
        desc: 'Repeat questions get resolved across email and chat.',
    },
    {
        icon: Users,
        title: 'Human approval',
        desc: 'Sensitive actions wait for your review before they go out.',
    },
];

const pillars = [
    {
        icon: PhoneCall,
        title: 'Phone calls',
        body:
            'An AI voice agent answers your calls instantly, every time, even after hours. It handles common questions, takes order and booking details, captures caller info, and routes anything important to a human.',
        examples: 'Store hours, product availability, order status, booking appointments, callback details.',
    },
    {
        icon: FileText,
        title: 'Quotes',
        body:
            'Quote requests get answered in minutes, not hours. The system reads the inquiry, pulls the right pricing and product info, drafts a quote, and waits for your one-click approval where you want control.',
        examples: 'Bulk-order pricing, custom product quotes, service estimates, unanswered quote follow-up.',
    },
    {
        icon: MessageSquareText,
        title: 'Customer support',
        body:
            'The repetitive support load gets handled across email and chat. Sensitive replies can wait for your review, so your team stops drowning in tickets and only touches what needs a person.',
        examples: 'Order status, returns, refunds, shipping questions, product FAQs, escalation to a person.',
    },
];

const controlPoints = [
    {
        icon: ShieldCheck,
        title: 'Human approval where it matters',
        body:
            'Refunds, customer-facing replies, and anything sensitive can wait for your one-click review before it happens. You decide where the line is.',
    },
    {
        icon: Wrench,
        title: 'Connects to your existing tools',
        body:
            'We plug into what you already run: Shopify, your helpdesk, Gmail, your phone system, spreadsheets, and the tools your team already knows.',
    },
    {
        icon: Eye,
        title: 'Full visibility',
        body:
            'You can see what the AI did, what it drafted, and what still needs attention. No black box. No wondering what happened.',
    },
    {
        icon: ClipboardCheck,
        title: 'Tested before it goes live',
        body:
            'We define the workflow, test the edge cases, and make sure it behaves before any customer ever touches it.',
    },
];

const storeFitBullets = [
    'Works with Shopify and the tools your store already uses',
    'Starts with one workflow, proves it, then expands',
    'No new dashboard for your team to babysit',
    "Managed end to end, so you do not hire or train anyone",
];

const processSteps = [
    {
        number: '01',
        title: 'Find',
        icon: Sparkles,
        body:
            'We look at where customer work piles up: missed calls, slow quotes, repeat questions, and the workflow worth automating first.',
    },
    {
        number: '02',
        title: 'Build',
        icon: Workflow,
        body:
            'We connect your tools, set the rules, and put approval steps where mistakes would be expensive.',
    },
    {
        number: '03',
        title: 'Launch',
        icon: Zap,
        body:
            'We turn it on carefully, with visibility into what the system is doing and what still needs a human.',
    },
    {
        number: '04',
        title: 'Improve',
        icon: RefreshCcw,
        body:
            'We measure the result, tune it, and only then decide together what to automate next.',
    },
];

const faqData = [
    {
        question: 'Will the AI talk to my customers without me checking?',
        answer:
            'Only where you allow it. Sensitive and customer-facing actions such as refunds and important replies can require your one-click approval first. You set the boundaries.',
    },
    {
        question: 'Do I need any technical skills?',
        answer:
            'No. We handle setup, tool connections, testing, and ongoing improvements. You bring the messy work; we build the system.',
    },
    {
        question: 'Does it work with Shopify and my current tools?',
        answer:
            'Yes. We connect to the tools you already use, such as Shopify, helpdesks, Gmail, calendars, your phone system, and spreadsheets, instead of replacing them.',
    },
    {
        question: "What if I don't know what to automate first?",
        answer:
            'That is exactly where we start. We look at where calls, quotes, and support questions pile up and pick the one with the clearest payoff.',
    },
    {
        question: 'Can the AI really answer my phone?',
        answer:
            'Yes. An AI voice agent can answer calls, handle common questions, capture details, and route anything important to a human.',
    },
    {
        question: 'How fast can it go live?',
        answer:
            'A first useful workflow can launch quickly. Larger setups roll out in stages over a few weeks.',
    },
    {
        question: 'Will this replace my team?',
        answer:
            'No. It removes repetitive work so your team spends time on the customers and decisions that actually need a person.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Customer Support Automation for Stores',
        serviceType: 'Managed Store Customer Operations Automation',
        url: pageUrl,
        description: metadata.description,
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
            audienceType: 'Ecommerce stores, retail stores, SMB owners, and customer operations teams',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE_URL}/industries` },
            { '@type': 'ListItem', position: 3, name: 'Customer Support', item: pageUrl },
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
];

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
    return (
        <div className={`${align === 'center' ? 'mx-auto text-center' : ''} mb-10 max-w-3xl md:mb-14`}>
            <span className="section-label mb-4 block text-primary-600">{eyebrow}</span>
            <h2 className="font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                    {description}
                </p>
            )}
        </div>
    );
}

function StoreOpsWorkflowVisual() {
    return (
        <div className="workflow-hero-surface overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-primary-100/50 backdrop-blur">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <ShoppingBag className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Store customer ops run</div>
                        <div className="text-xs text-slate-500">calls, quotes, support, approvals</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Managed</span>
            </div>

            <div className="relative mb-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Before</div>
                    <div className="font-bold text-slate-950">Customer work piles up</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        Missed calls, slow quotes, repeated questions.
                    </p>
                </div>

                <svg className="hidden h-16 w-24 sm:block" viewBox="0 0 96 64" fill="none" aria-hidden="true">
                    <path className="deployment-flow-line" d="M8 32 C28 8 68 8 88 32" />
                    <path className="deployment-flow-line deployment-flow-line-delay" d="M8 32 C28 56 68 56 88 32" />
                </svg>

                <div className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-primary-700">After</div>
                    <div className="font-bold text-slate-950">Handled workflow</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        Answered, drafted, routed, and approved.
                    </p>
                </div>
            </div>

            <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                        <div className="text-sm font-bold text-slate-950">Live customer queue</div>
                        <div className="text-xs font-semibold text-slate-500">repetitive work becomes a controlled system</div>
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">Approval ready</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                    <div className="grid gap-2">
                        {['Missed call', 'Quote request', 'Return question'].map((item, index) => (
                            <div
                                key={item}
                                className="deployment-queue-item rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                                style={{ animationDelay: `${index * 0.25}s` }}
                            >
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
                        {['Call summary', 'Quote draft', 'Reply queued'].map((item, index) => (
                            <div
                                key={item}
                                className="deployment-queue-item rounded-xl border border-primary-100 bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-900"
                                style={{ animationDelay: `${0.45 + index * 0.25}s` }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid gap-2">
                {workflowSteps.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${index === 3 ? 'bg-amber-50 text-amber-700' : 'bg-primary-50 text-primary-700'}`}>
                                <Icon className="h-4 w-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="block text-sm font-semibold text-slate-800">{item.title}</span>
                                <span className="block text-xs leading-relaxed text-slate-500">{item.desc}</span>
                            </div>
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function ProblemSection() {
    return (
        <section className="relative overflow-hidden border-y border-slate-200 bg-white px-4 py-16 md:py-20">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
                <div>
                    <span className="section-label mb-4 block text-primary-600">The real problem</span>
                    <h2 className="font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                        The customer work never stops, and it all lands on you
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-slate-600">
                        Every missed call is a missed sale. Every slow quote is a customer who bought elsewhere. Every support question you answer yourself is time you did not spend growing the business.
                    </p>
                </div>

                <div className="workflow-tree-surface relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0d_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0d_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="relative z-10 mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                            <Timer className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-950">What store owners feel every day</div>
                            <div className="text-xs text-slate-500">revenue leaks, staff burnout, customers waiting</div>
                        </div>
                    </div>

                    <div className="relative z-10 grid gap-3">
                        {problemBullets.map((item, index) => (
                            <div
                                key={item}
                                className="workflow-node-live rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-sm"
                                style={{ animationDelay: `${index * 0.12}s` }}
                            >
                                <div className="flex gap-3">
                                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-extrabold text-amber-700">
                                        {index + 1}
                                    </span>
                                    <p className="text-sm font-semibold leading-relaxed text-slate-700">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative z-10 mt-5 rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm font-bold leading-relaxed text-primary-900">
                        For a store, repetitive customer work is not a minor annoyance. It is lost revenue and burned-out staff.
                    </div>
                </div>
            </div>
        </section>
    );
}

function PillarsSection() {
    return (
        <section className="bg-warm px-4 py-20 md:py-28">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="What gets handled"
                    title="Three things eating your day. All handled, with you in control."
                    description="Dooza starts with the customer work your store already feels, then turns it into a managed workflow your team can trust."
                />

                <div className="grid gap-6 lg:grid-cols-3">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="workflow-rise flex h-full flex-col rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm"
                                style={{ animationDelay: `${index * 0.16}s` }}
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 font-serif text-2xl font-extrabold text-slate-950">{pillar.title}</h3>
                                <p className="mb-5 flex-1 text-base leading-relaxed text-slate-600">{pillar.body}</p>
                                <div className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                                    <div className="mb-1 text-xs font-extrabold uppercase tracking-wide text-primary-700">Examples</div>
                                    <p className="text-sm font-semibold leading-relaxed text-primary-950">{pillar.examples}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ControlSection() {
    return (
        <section className="bg-white px-4 py-20 md:py-28">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Built for control"
                    title="Automation that makes work lighter, without making your store feel out of control"
                    description="This is not a loose chatbot dropped onto your business. It is a managed workflow with rules, review points, and visibility built in."
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {controlPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <div
                                key={point.title}
                                className="deployment-trust-card rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                                style={{ animationDelay: `${index * 0.18}s` }}
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 text-lg font-extrabold text-slate-950">{point.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-600">{point.body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function StoreFitSection() {
    return (
        <section className="relative overflow-hidden bg-warm px-4 py-20 text-slate-900 md:py-28">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <span className="section-label mb-5 block text-primary-600">Made for stores</span>
                    <h2 className="font-serif text-3xl font-extrabold leading-tight md:text-5xl">
                        Made for stores, not enterprises
                    </h2>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                        You do not have an engineering team, and you should not need one. We handle the setup, tool connections, testing, and ongoing improvements. You run the store; we run the automation behind it.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    {storeFitBullets.map((item, index) => (
                        <div
                            key={item}
                            className="workflow-node-live rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <CheckCircle2 className="mb-4 h-6 w-6 text-primary-600" />
                            <p className="font-semibold leading-relaxed text-slate-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StoreProcessFlow() {
    return (
        <div className="workflow-tree-surface relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0d_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0d_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="relative z-10 mb-5 flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Workflow className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">First workflow rollout</div>
                        <div className="text-xs text-slate-500">start small, prove it, then expand</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                    Controlled launch
                </span>
            </div>

            <div className="relative z-10">
                <div className="absolute left-6 right-6 top-9 hidden h-px bg-primary-100 md:block" />
                <div className="grid gap-3 md:grid-cols-4">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="workflow-node-live relative rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-sm"
                                style={{ animationDelay: `${index * 0.14}s` }}
                            >
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${index === 0 ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-500">{step.number}</span>
                                </div>
                                <h3 className="font-sans text-base font-extrabold text-slate-950">{step.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.body}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm font-bold text-primary-900">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-700" />
                    We do not assume the answer before the call. We find the first workflow worth deploying.
                </div>
            </div>
        </div>
    );
}

function ProcessSection() {
    return (
        <section id="how-it-works" className="relative overflow-hidden bg-white px-4 py-20 md:py-28">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div>
                    <span className="section-label mb-4 block text-primary-600">The process</span>
                    <h2 className="mb-5 max-w-xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
                        A simple rollout, starting where the value is clearest
                    </h2>
                    <p className="mb-7 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
                        We start with the customer work that is already costing you time, missed sales, or staff energy. Then we launch carefully instead of automating everything at once.
                    </p>
                    <BookDemoButton source="customer_support_process" variant="primary">
                        Show Me What You'd Automate First
                    </BookDemoButton>
                </div>
                <StoreProcessFlow />
            </div>
        </section>
    );
}

function ProofSection() {
    return (
        <section className="bg-warm px-4 py-20 md:py-28">
            <div className="mx-auto max-w-5xl">
                <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm md:p-8">
                    <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
                        <div>
                            <span className="section-label mb-4 block text-primary-600">Proof</span>
                            <h2 className="font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
                                Real businesses, real workflows
                            </h2>
                        </div>
                        <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
                            <p className="text-lg font-bold leading-relaxed text-primary-950">
                                Built on Dooza's managed workflow runtime, with existing-tool integrations and human-approval controls on customer-facing actions.
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-primary-800">
                                On the call, we can walk through how the first workflow would be scoped, reviewed, launched, and improved for your store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function CustomerSupportIndustryPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar showIndustry ctaType="demo" ctaSource="customer_support_nav" />
            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-32">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-warm to-warm" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="hero-entrance">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                Managed AI for store operations
                            </div>
                            <h1 className="mb-7 max-w-4xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                Calls, quotes, and support handled for your store
                            </h1>
                            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                Dooza sets up managed AI for your phone, inbox, and chat. It answers common questions, drafts quotes, and asks for approval when needed.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <BookDemoButton source="customer_support_hero" variant="primary" size="xl">
                                    Get My Store Automated
                                </BookDemoButton>
                                <Link
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-4 text-base font-bold text-primary-800 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50"
                                >
                                    See How It Works <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                {['Human approval on sensitive actions', 'Connects to the tools you already use', 'Start with one workflow'].map((item) => (
                                    <span key={item} className="rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="hero-entrance-right">
                            <StoreOpsWorkflowVisual />
                        </div>
                    </div>
                </section>

                <ProblemSection />
                <PillarsSection />
                <ControlSection />
                <StoreFitSection />
                <ProcessSection />
                <ProofSection />

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 text-center">
                            <span className="section-label mb-4 block text-primary-600">FAQ</span>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
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
                            <Headphones className="h-8 w-8" />
                        </div>
                        <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
                            Stop answering the same calls, quotes, and questions yourself
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                            Bring us the customer work that eats your day. We will find the first thing worth automating and run it for you.
                        </p>
                        <BookDemoButton source="customer_support_final" variant="primary" size="xl">
                            Get My Store Automated
                        </BookDemoButton>
                        <p className="mx-auto mt-4 max-w-md text-sm font-semibold text-slate-500">
                            A short call to find the first workflow worth deploying. No prep needed.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
