import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import {
    ArrowRight,
    Brain,
    CheckCircle2,
    ClipboardList,
    Clock,
    DollarSign,
    ShieldCheck,
    Sparkles,
    UserCheck,
    Workflow,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IntegrationsBar from '@/components/sections/IntegrationsBar';
import VideoSection from '@/components/sections/VideoSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import SignupTextLink from '@/components/buttons/SignupTextLink';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

export const metadata = {
    title: { absolute: 'Forward Deployed AI Engineers for Small Business | Dooza.ai' },
    description: 'We set up AI on your business for free. Live in days. Use it, see the results, and pay only if you want to keep it. No contracts.',
    keywords: [
        'forward deployed engineers',
        'AI deployment company',
        'AI deployment services',
        'done for you AI',
        'AI for small business',
        'AI implementation',
        'AI automation services',
        'hire AI engineer',
        'AI workflow automation',
    ],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: 'Forward Deployed AI Engineers for Small Business | Dooza.ai',
        description: 'Free AI setup by a real engineer. Live in days. Pay only if you want to keep it. No contracts.',
        url: SITE_URL,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza - Forward Deployed AI Engineers' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'Forward Deployed AI Engineers for Small Business | Dooza.ai',
        description: 'Free AI setup by a real engineer. Live in days. Pay only if you want to keep it. No contracts.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const todaySignals = [
    'The same manual work, every week.',
    'Follow-ups that run on memory.',
    'AI tools bought, tried once, forgotten.',
];

const engineerChanges = [
    'We find the right task and set up the AI. Free.',
    'You approve anything important before it happens.',
    'You pay only if you want to keep it.',
];

const engagementSteps = [
    {
        step: '01',
        title: 'Map',
        time: 'Day 1',
        desc: 'One call. We find the task worth automating.',
    },
    {
        step: '02',
        title: 'Build',
        time: 'Day 2',
        desc: 'We set everything up and connect your tools. Free.',
    },
    {
        step: '03',
        title: 'Live',
        time: 'Day 4',
        desc: 'It runs on real work. You watch and approve.',
    },
    {
        step: '04',
        title: 'Keep',
        time: 'You choose',
        desc: 'Love it? Keep it and pay. If not, walk away.',
    },
];

const automationExamples = [
    'Emails',
    'Voice calls',
    'Support inbox drafts',
    'Missed-call follow-ups',
    'Invoice chasing',
    'Review replies',
    'Daily social posts',
    'Lead follow-ups',
];

const platformProducts = [
    {
        icon: Brain,
        title: 'Dooza Workforce',
        href: '/workforce',
        desc: 'AI employees for email, social, SEO, leads, and calls. From $49/mo.',
    },
    {
        icon: Workflow,
        title: 'Dooza Agent',
        href: '/workflow',
        desc: 'Approvals and logs that keep every automation under control.',
    },
];

const fdeFaqData = [
    {
        question: 'What is a forward deployed engineer?',
        answer:
            'An engineer who works inside your business, not behind a support desk. They set up AI on your real work and stay until it delivers.',
    },
    {
        question: 'Is the setup really free?',
        answer:
            'Yes. A Dooza engineer builds your first automation for free and puts it live on your real work. You pay only if you want to keep using it.',
    },
    {
        question: 'What if we do not want to continue?',
        answer:
            'We switch it off. No bill, no contract, no hard feelings.',
    },
    {
        question: 'Do we need technical staff?',
        answer:
            'No. We build, connect, and test everything. Your team just approves.',
    },
    {
        question: 'How fast is it live?',
        answer:
            'Your first automation usually runs within days — day 2 to day 4 in most cases.',
    },
    {
        question: 'Can we start self-serve instead?',
        answer:
            'Yes. Dooza Workforce is $49/mo with free onboarding. Add an engineer later if you want more.',
    },
    {
        question: 'Will AI replace our team?',
        answer:
            'No. It takes over the repetitive work. Your team stays in control of anything important.',
    },
];

// Organization Schema for brand recognition
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dooza",
    "legalName": "Dooza AI",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "description": "Forward deployed AI engineers who deploy and run AI for small businesses on the Dooza Workforce and Workflow platform.",
    "foundingDate": "2024",
    "founder": {
        "@type": "Person",
        "name": "Sibi Narendran",
        "url": "https://twitter.com/sibinarendran"
    },
    "sameAs": [
        "https://twitter.com/sibinarendran",
        "https://www.linkedin.com/company/110144933/",
        "https://www.crunchbase.com/organization/dooza",
        "https://www.g2.com/products/dooza"
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "support@dooza.ai",
            "availableLanguage": ["English"]
        },
        {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "support@dooza.ai",
            "availableLanguage": ["English"]
        }
    ],
    "knowsAbout": [
        "Artificial Intelligence",
        "Forward Deployed Engineering",
        "Business Automation",
        "AI Employees",
        "Email Automation",
        "Social Media Management",
        "SEO Optimization",
        "Customer Support Automation",
        "Sales Automation"
    ]
};

// WebSite Schema with SearchAction for site links
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dooza",
    "alternateName": "Dooza AI",
    "url": SITE_URL,
    "description": "Forward deployed AI engineers who deploy and run AI for small businesses",
    "publisher": {
        "@type": "Organization",
        "name": "Dooza"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
    }
};

// Service Schema for the FDE offering
const fdeServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Forward Deployed AI Engineering by Dooza",
    "serviceType": "Forward Deployed AI Engineering",
    "url": SITE_URL,
    "description": "A Dooza engineer sets up AI on your business for free — live in days on the Dooza Workforce and Workflow platform. Pay only to keep it. No contracts.",
    "provider": {
        "@type": "Organization",
        "name": "Dooza",
        "url": SITE_URL
    },
    "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
    },
    "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Founders, small businesses, and operations teams"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Forward Deployed Engineering Service Areas",
        "itemListElement": [
            'Workflow discovery and mapping',
            'Embedded AI engineering',
            'Platform deployment on Dooza Workforce and Workflow',
            'Human approval workflow setup',
            'Ongoing monitoring and expansion',
        ].map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
                "@type": "Service",
                "name": service
            }
        }))
    }
};

// FAQ Schema generated from the on-page FAQ
const fdeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": fdeFaqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

const schemas = [organizationSchema, websiteSchema, fdeServiceSchema, fdeFaqSchema];

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

function EngagementTimelineVisual() {
    const timeline = [
        {
            phase: 'Day 1',
            title: 'We map your work',
            desc: 'One call to find the task AI should do first.',
            state: 'done',
        },
        {
            phase: 'Day 2',
            title: 'AI goes live',
            desc: 'Built free. Connected to your tools.',
            state: 'done',
        },
        {
            phase: 'Day 4',
            title: 'You see results',
            desc: 'Every action logged. You approve.',
            state: 'control',
        },
        {
            phase: 'Then',
            title: 'Keep it or walk away',
            desc: 'Pay only if you continue. No contracts.',
            state: 'next',
        },
    ];

    return (
        <div className="workflow-hero-surface mx-0 w-full max-w-[22rem] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-primary-100/50 backdrop-blur sm:mx-auto sm:max-w-full">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <UserCheck className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Your free AI setup</div>
                        <div className="text-xs text-slate-500">live in days, not months</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Free</span>
            </div>

            <div className="grid gap-3">
                {timeline.map((item, index) => (
                    <div key={item.title} className="deployment-queue-item flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4" style={{ animationDelay: `${index * 0.25}s` }}>
                        <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.state === 'control' ? 'bg-amber-500' : item.state === 'next' ? 'bg-slate-300' : 'bg-primary-600'}`} />
                        <div className="min-w-0 flex-1">
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-bold text-primary-700">{item.phase}</span>
                                <span className="text-sm font-extrabold text-slate-950">{item.title}</span>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function EngagementProcessFlow() {
    return (
        <div className="workflow-tree-surface rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 md:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <ClipboardList className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">How it works</div>
                        <div className="text-xs text-slate-500">one task at a time</div>
                    </div>
                </div>

                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                    Days
                </span>
            </div>

            <div className="relative grid gap-4">
                <div className="absolute bottom-12 left-5 top-6 hidden w-px bg-primary-100 sm:block" />
                <span className="deployment-vertical-flow absolute left-[17px] top-6 hidden h-16 w-2 rounded-full bg-primary-600 sm:block" />

                {engagementSteps.map((item, index) => (
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

export default function Home() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar showLogin ctaType="demo" ctaSource="home_nav" signupLabel="Get Free Setup" />
            <main id="main-content" className="bg-warm text-slate-900 font-sans">
                <section className="relative overflow-hidden px-4 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-warm to-warm" />
                    </div>

                    <div className="relative z-10 mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="min-w-0">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                Forward deployed AI engineers
                            </div>
                            <h1 className="mb-7 max-w-[21.5rem] break-words font-serif text-[2rem] font-extrabold leading-[1.08] tracking-normal text-slate-950 sm:max-w-4xl sm:text-5xl md:text-6xl">
                                <span className="block">Your first</span>
                                <span className="block">AI employee</span>
                                <span className="block">is free.</span>
                            </h1>
                            <p className="mb-10 max-w-[21.5rem] text-base leading-relaxed text-slate-600 sm:max-w-xl md:text-xl">
                                A Dooza engineer sets it up on your real work — live in days. Keep it only if you love it. No contracts.
                            </p>
                            <div className="flex flex-col items-start gap-4">
                                <BookDemoButton source="home_hero" variant="primary" size="xl" className="w-auto px-5 text-base sm:px-8 sm:text-lg md:px-10 md:text-xl">
                                    Get My Free Setup
                                </BookDemoButton>
                                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                                    </span>
                                    Due to high demand, we take on 5 free setups a week.
                                </p>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/founder-sibi.jpeg"
                                        alt="Sibi Narendran, founder of Dooza"
                                        width={44}
                                        height={44}
                                        className="rounded-full border-2 border-white shadow-md"
                                    />
                                    <p className="text-sm text-slate-600">
                                        You'll talk to <strong className="text-slate-900">Sibi, Dooza's founder</strong> — not a sales rep.
                                    </p>
                                </div>
                                <p className="text-sm text-slate-500">
                                    Prefer to start yourself?{' '}
                                    <Link href="/workforce" className="font-semibold text-primary-700 underline underline-offset-4 decoration-primary-200 hover:text-primary-900 hover:decoration-primary-400 transition-colors">
                                        Try Dooza Workforce from $49/mo →
                                    </Link>
                                </p>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Badge icon={DollarSign}>Free setup</Badge>
                                <Badge icon={Clock}>Live in days</Badge>
                                <Badge icon={ShieldCheck}>No contracts</Badge>
                                <Badge icon={UserCheck}>A real engineer</Badge>
                            </div>
                        </div>

                        <EngagementTimelineVisual />
                    </div>
                </section>

                <section className="border-y border-slate-100 bg-white px-4 py-10">
                    <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
                        <span className="section-label block">Things we automate</span>
                        <div className="flex flex-wrap justify-center gap-3">
                            {automationExamples.map((item) => (
                                <span key={item} className="rounded-full border border-slate-200 bg-warm px-4 py-2 text-sm font-semibold text-slate-700">
                                    {item}
                                </span>
                            ))}
                            <span className="rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                                + whatever eats your week
                            </span>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                        <div className="min-w-0">
                            <span className="section-label mb-5 block">THE PROBLEM</span>
                            <h2 className="mb-6 max-w-[21.5rem] break-words font-serif text-[1.9rem] font-extrabold leading-tight tracking-normal text-slate-950 sm:max-w-xl md:text-5xl">
                                <span className="block">The tools exist.</span>
                                <span className="block">The time doesn't.</span>
                            </h2>
                            <p className="max-w-[21.5rem] text-base leading-relaxed text-slate-600 sm:max-w-xl md:text-lg">
                                You know AI can help. You don't have time to set it up. So we set it up for you — free, at our risk, not yours.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="rounded-[28px] border border-slate-100 bg-warm p-6 shadow-sm">
                                <h3 className="mb-5 font-sans text-lg font-extrabold text-slate-950">
                                    Today
                                </h3>
                                <div className="grid gap-3">
                                    {todaySignals.map((item) => (
                                        <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm">
                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[28px] border border-primary-100 bg-primary-50 p-6 shadow-sm">
                                <h3 className="mb-5 font-sans text-lg font-extrabold text-slate-950">
                                    With an engineer
                                </h3>
                                <div className="grid gap-3">
                                    {engineerChanges.map((item) => (
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

                <section className="relative overflow-hidden bg-warm px-4 py-20 text-slate-900 md:py-28">
                    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <span className="section-label mb-5 block">
                                How it works
                            </span>
                            <h2 className="mb-7 max-w-xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
                                Live in days. Not months.
                            </h2>
                            <p className="mb-9 max-w-lg text-lg leading-relaxed text-slate-600">
                                Free setup. No long projects. Your first automation runs this week.
                            </p>
                            <BookDemoButton source="home_process" variant="primary">
                                Start My Free Setup
                            </BookDemoButton>
                        </div>
                        <EngagementProcessFlow />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="THE PLATFORM"
                            title="Built on our own products"
                            description="No duct tape. Your automation runs on two products we build and run ourselves."
                        />
                        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
                            {platformProducts.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link key={item.title} href={item.href} className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:border-primary-200 hover:shadow-lg hover:-translate-y-0.5">
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
                    </div>
                </section>

                <IntegrationsBar className="border-y border-slate-100" />

                <VideoSection />

                <TestimonialsSection />

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="section-label mb-4 block text-primary-600">The big picture</span>
                        <h2 className="mb-5 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                            What is AI going to do to the world?
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                            Watch this. Then let's talk about what it can do for your business.
                        </p>
                        <div className="flex justify-center">
                            <blockquote className="twitter-tweet" data-media-max-width="560" data-dnt="true">
                                <a href="https://twitter.com/claudeai/status/2075271759289303522">
                                    Watch &ldquo;There&rsquo;s hope in hard questions&rdquo; on X
                                </a>
                            </blockquote>
                        </div>
                        <p className="mt-6 text-sm text-slate-500">
                            Film by Anthropic — 5.3M views on X
                        </p>
                    </div>
                </section>
                <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />

                <section className="border-y border-slate-200 bg-white px-4 py-14">
                    <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                        <div>
                            <h2 className="mb-2 font-serif text-2xl font-bold text-slate-900 md:text-3xl">
                                Want to try it yourself?
                            </h2>
                            <p className="max-w-xl text-base leading-relaxed text-slate-600">
                                Dooza Workforce is self-serve from $49/mo. Free onboarding included.
                            </p>
                        </div>
                        <div className="flex shrink-0 flex-col items-center gap-3 md:items-end">
                            <Link href="/workforce" className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">
                                Explore Dooza Workforce
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <SignupTextLink source="home_selfserve_band">Or sign up directly →</SignupTextLink>
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
                        <FAQAccordion items={fdeFaqData} />
                    </div>
                </section>

                <section className="relative overflow-hidden bg-warm px-4 py-20 text-slate-900 md:py-28">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/80 via-warm to-warm" />
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <Image
                            src="/founder-sibi.jpeg"
                            alt="Sibi Narendran, founder of Dooza"
                            width={72}
                            height={72}
                            className="mx-auto mb-7 rounded-full border-4 border-white shadow-lg"
                        />
                        <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                            Get your first automation. Free.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                            One call with Sibi, the founder. We set up AI on your real work — free. Keep it only if it earns its keep.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <BookDemoButton source="home_final" variant="primary" size="xl">
                                Get My Free Setup
                            </BookDemoButton>
                            <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                                </span>
                                Due to high demand, we take on 5 free setups a week.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
