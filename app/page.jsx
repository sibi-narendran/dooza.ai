import Link from 'next/link';
import {
    ArrowRight,
    Brain,
    CheckCircle2,
    ClipboardList,
    LineChart,
    Rocket,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    UserCheck,
    Workflow,
    Wrench,
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
    description: 'A Dooza engineer embeds with your business, finds the work that repeats, and deploys AI that handles it — with human approval where it matters. Book a founder call.',
    keywords: [
        'forward deployed engineers',
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
        description: 'A Dooza engineer embeds with your business, finds the work that repeats, and deploys AI that handles it — with human approval where it matters.',
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
        description: 'A Dooza engineer embeds with your business, finds the work that repeats, and deploys AI that handles it. Book a founder call.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const todaySignals = [
    'Every week ends with the same manual work it started with.',
    'Follow-ups run on memory, inbox checks, and sticky notes.',
    'AI subscriptions were bought, tried once, and forgotten.',
    'Tools do not talk to each other, so people copy data between them.',
    'Nobody owns making automation actually happen.',
];

const engineerChanges = [
    'Maps how work actually flows through your business.',
    'Picks the first workflow with a clear business reason to automate.',
    'Deploys it on the Dooza platform, connected to your tools.',
    'Adds approval points where mistakes would be expensive.',
    'Reports what the AI did — and expands only when it pays off.',
];

const engagementSteps = [
    {
        step: '01',
        title: 'Embed',
        time: 'Week 1',
        desc: 'Your engineer learns how work actually flows through the business — not how the org chart says it does.',
    },
    {
        step: '02',
        title: 'Map',
        time: 'Week 1',
        desc: 'Together we pick the first workflow with a clear business reason to automate.',
    },
    {
        step: '03',
        title: 'Deploy',
        time: 'Week 2',
        desc: 'We build it on Dooza Workforce and Workflow — connected to your tools, with approvals where mistakes are expensive.',
    },
    {
        step: '04',
        title: 'Run',
        time: 'Live',
        desc: 'It goes live small. You see every action it takes and approve what matters.',
    },
    {
        step: '05',
        title: 'Expand',
        time: 'Ongoing',
        desc: 'When the numbers prove it, we deploy the next one.',
    },
];

const platformProducts = [
    {
        icon: Brain,
        title: 'Dooza Workforce',
        href: '/workforce',
        desc: 'Ready AI employees for email, social, SEO, leads, and calls. From $49/mo — also available self-serve.',
    },
    {
        icon: Workflow,
        title: 'Dooza Workflow',
        href: '/workflow',
        desc: 'Approvals, traces, app steps, and tests that keep every deployment under control.',
    },
];

const fdeFaqData = [
    {
        question: 'What is a forward deployed engineer?',
        answer:
            'An engineer who works inside your business instead of behind a support desk. They learn how your work flows, pick what to automate, deploy it on the Dooza platform, and stay accountable for the result.',
    },
    {
        question: 'Do we need technical staff?',
        answer:
            'No. Your engineer handles workflow design, tool connections, testing, launch, and ongoing improvements. Your team only reviews and approves.',
    },
    {
        question: 'What does it cost compared to hiring?',
        answer:
            'Far less than a full-time hire. There is no salary, onboarding, or management overhead — you get an engineer plus the platform they deploy on. Pricing is scoped on the founder call.',
    },
    {
        question: 'What actually gets deployed?',
        answer:
            'AI workflows built on Dooza Workforce and Dooza Workflow — AI employees for email, social, SEO, leads, and calls, plus the approvals, traces, and tests that keep them under control.',
    },
    {
        question: 'How fast do we see results?',
        answer:
            'The first workflow typically goes live within the first two weeks — small enough to launch safely, valuable enough to measure honestly.',
    },
    {
        question: 'Can we start self-serve instead?',
        answer:
            'Yes. Dooza Workforce is self-serve from $49/mo with free founder onboarding. Many businesses start there and add an engineer when they want to go deeper.',
    },
    {
        question: 'Will AI replace our team?',
        answer:
            'No. The goal is to remove repetitive work and keep important customer-facing actions inside review steps your team controls.',
    },
    {
        question: 'What tools do you work with?',
        answer:
            'The ones you already use — Gmail, calendars, CRMs, Shopify, WordPress, helpdesks, forms, spreadsheets, and 1000+ more through our integrations.',
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
    "description": "A Dooza engineer embeds with your business, finds the work that repeats, and deploys AI workflows that handle it — built on the Dooza Workforce and Workflow platform, with human approval where it matters.",
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
            phase: 'Week 1',
            title: 'Embed & map',
            desc: 'Your engineer sits with the business and finds the work that repeats.',
            state: 'done',
        },
        {
            phase: 'Week 2',
            title: 'First workflow live',
            desc: 'Built on Dooza Workforce and Workflow, connected to your tools.',
            state: 'done',
        },
        {
            phase: 'Live',
            title: 'Run with approvals',
            desc: 'You see every action and approve what matters.',
            state: 'control',
        },
        {
            phase: 'Ongoing',
            title: 'Measure & expand',
            desc: 'The next workflow ships when the first one pays off.',
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
                        <div className="text-sm font-bold text-slate-950">Forward deployed engagement</div>
                        <div className="text-xs text-slate-500">embed, deploy, run, expand</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">FDE</span>
            </div>

            <div className="mb-6 grid gap-3">
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

            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="deployment-automation-core flex h-10 w-10 items-center justify-center rounded-xl bg-primary-700 text-xs font-extrabold text-white shadow-lg shadow-primary-700/20">
                            AI
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-950">Workflow running</div>
                            <div className="text-xs font-semibold text-slate-500">logged, approved, improving</div>
                        </div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-primary-600" />
                </div>
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
                        <div className="text-sm font-bold text-slate-950">The engagement</div>
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
            <Navbar showLogin ctaType="demo" ctaSource="home_nav" />
            <main id="main-content" className="bg-warm text-slate-900 font-sans">
                <section className="relative overflow-hidden px-4 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-warm to-warm" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>

                    <div className="relative z-10 mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="min-w-0">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                Forward deployed AI engineers for small business
                            </div>
                            <h1 className="mb-7 max-w-[21.5rem] break-words font-serif text-[2rem] font-extrabold leading-[1.08] tracking-normal text-slate-950 sm:max-w-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="block">AI won't deploy itself.</span>
                                <span className="block">So we send</span>
                                <span className="block">an engineer.</span>
                            </h1>
                            <p className="mb-10 max-w-[21.5rem] text-base leading-relaxed text-slate-600 sm:max-w-xl md:text-xl">
                                A Dooza engineer embeds with your team, finds the work that repeats, and deploys AI that handles it — built on our own platform, with human approval where it matters.
                            </p>
                            <div className="flex flex-col items-start gap-4">
                                <BookDemoButton source="home_hero" variant="primary" size="xl" className="w-auto px-5 text-base sm:px-8 sm:text-lg md:px-10 md:text-xl">
                                    Book a Call with the Founder
                                </BookDemoButton>
                                <p className="text-sm text-slate-500">
                                    Prefer to start yourself?{' '}
                                    <Link href="/workforce" className="font-semibold text-primary-700 underline underline-offset-4 decoration-primary-200 hover:text-primary-900 hover:decoration-primary-400 transition-colors">
                                        Try Dooza Workforce from $49/mo →
                                    </Link>
                                </p>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Badge icon={UserCheck}>A real engineer</Badge>
                                <Badge icon={TrendingUp}>One workflow first</Badge>
                                <Badge icon={ShieldCheck}>Human approval</Badge>
                                <Badge icon={Wrench}>Your existing tools</Badge>
                                <Badge icon={LineChart}>Measured results</Badge>
                            </div>
                        </div>

                        <EngagementTimelineVisual />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                        <div className="min-w-0">
                            <span className="section-label mb-5 block">THE REAL PROBLEM</span>
                            <h2 className="mb-6 max-w-[21.5rem] break-words font-serif text-[1.9rem] font-extrabold leading-tight tracking-normal text-slate-950 sm:max-w-xl md:text-5xl">
                                <span className="block">The tools exist.</span>
                                <span className="block">The time to deploy</span>
                                <span className="block">them doesn't.</span>
                            </h2>
                            <p className="max-w-[21.5rem] text-base leading-relaxed text-slate-600 sm:max-w-xl md:text-lg">
                                Most founders don't need convincing that AI works. They need someone to sit with the business, pick the right workflow, wire it into the tools they already use, and stay accountable for the result.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="rounded-[28px] border border-slate-100 bg-warm p-6 shadow-sm">
                                <h3 className="mb-5 font-sans text-lg font-extrabold text-slate-950">
                                    What it feels like today
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
                                    What a forward deployed engineer changes
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
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
                    </div>
                    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <span className="section-label mb-5 block">
                                How it works
                            </span>
                            <h2 className="mb-7 max-w-xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
                                One engineer. One workflow. Then the next.
                            </h2>
                            <p className="mb-9 max-w-lg text-lg leading-relaxed text-slate-600">
                                No transformation roadmap, no six-month discovery. Your engineer starts with one workflow, proves it works, and expands from there.
                            </p>
                            <BookDemoButton source="home_process" variant="primary">
                                See What We'd Deploy First
                            </BookDemoButton>
                        </div>
                        <EngagementProcessFlow />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="THE PLATFORM"
                            title="Deployed on products we build, not glue code"
                            description="Your engineer doesn't stitch together fragile scripts. Every deployment runs on the same two products we build and operate ourselves."
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

                <section className="border-y border-slate-200 bg-white px-4 py-14">
                    <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                        <div>
                            <h2 className="mb-2 font-serif text-2xl font-bold text-slate-900 md:text-3xl">
                                Not ready for an engineer?
                            </h2>
                            <p className="max-w-xl text-base leading-relaxed text-slate-600">
                                Dooza Workforce is self-serve from $49/mo, with free founder onboarding. Start there and add an engineer when you want to go deeper.
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
                        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                            <Rocket className="h-8 w-8" />
                        </div>
                        <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                            Bring the messy work. We'll bring the engineer.
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                            You don't need a plan before the call. On a free founder call we'll map the first workflow worth deploying — and you'll know exactly what happens next.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <BookDemoButton source="home_final" variant="primary" size="xl">
                                Book a Founder Call
                            </BookDemoButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
