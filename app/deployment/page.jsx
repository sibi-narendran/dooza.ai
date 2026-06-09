import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Bot,
    Brain,
    CalendarCheck,
    CheckCircle2,
    DatabaseZap,
    Mail,
    MessageSquare,
    PhoneCall,
    ShieldCheck,
    Sparkles,
    Workflow,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IntegrationsBar from '@/components/sections/IntegrationsBar';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import SignupTextLink from '@/components/buttons/SignupTextLink';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { testimonials } from '@/lib/homeData';

const pageUrl = `${SITE_URL}/deployment`;

export const metadata = {
    title: {
        absolute: 'AI Deployment Services for Business | Dooza.ai',
    },
    description:
        'Dooza helps businesses deploy AI employees and simple AI workflows with setup, tool connections, review steps, and launch support.',
    keywords: [
        'AI deployment services',
        'AI implementation services',
        'AI automation services',
        'AI agents deployment',
        'AI workflow automation',
        'AI deployment for business',
        'custom AI automation services',
        'AI employees implementation',
        'done for you AI automation',
        'AI consulting for small business',
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
        title: 'AI Deployment Services for Business | Dooza.ai',
        description:
            'Launch AI employees and simple workflows without hiring an AI team.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza AI Deployment Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'AI Deployment Services for Business | Dooza.ai',
        description:
            'Done-for-you AI deployment for AI employees, workflows, and business tools.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const deploymentServices = [
    {
        icon: Workflow,
        title: 'Workflows',
        desc: 'We turn repeated tasks into simple AI workflows.',
    },
    {
        icon: Bot,
        title: 'AI Employees',
        desc: 'We set up AI help for email, content, leads, calls, and support.',
    },
    {
        icon: DatabaseZap,
        title: 'Tool Connections',
        desc: 'We connect the tools your team already uses.',
    },
    {
        icon: ShieldCheck,
        title: 'Review Steps',
        desc: 'We add approvals before AI work reaches customers.',
    },
];

const outcomes = [
    { icon: Mail, title: 'Faster email', desc: 'Sort, draft, and follow up.' },
    { icon: MessageSquare, title: 'Steady content', desc: 'Plan, draft, and post.' },
    { icon: Zap, title: 'Less busywork', desc: 'Move repeat tasks off your plate.' },
    { icon: PhoneCall, title: 'Cleaner handoffs', desc: 'Capture next steps from calls and leads.' },
];

const deploymentStats = [
    { value: '170+', label: 'countries supported' },
    { value: '1,000+', label: 'tools and app connections' },
    { value: '7 days', label: 'guided launch window' },
];

const processSteps = [
    {
        step: '01',
        title: 'Find the best use case',
        time: 'Audit',
        desc: 'We look at your work and pick one useful place to start.',
    },
    {
        step: '02',
        title: 'Build the first workflow',
        time: 'Setup',
        desc: 'We connect tools, add context, and test real examples.',
    },
    {
        step: '03',
        title: 'Launch with review',
        time: 'Go live',
        desc: 'Your team keeps control while AI handles the routine work.',
    },
];

const faqData = [
    {
        question: 'What do you deploy?',
        answer:
            'We deploy AI employees, workflow automations, tool connections, and review steps.',
    },
    {
        question: 'Do we need technical skills?',
        answer:
            'No. We handle the setup and keep the process simple.',
    },
    {
        question: 'Can Dooza use our current tools?',
        answer:
            'Yes. We can connect common tools like Gmail, calendars, Shopify, WordPress, CRMs, forms, and more.',
    },
    {
        question: 'How long does it take?',
        answer:
            'A first useful workflow can start quickly. Larger rollouts usually take a few weeks.',
    },
    {
        question: 'Will AI replace our team?',
        answer:
            'No. The goal is to remove repetitive work so your team can focus on better decisions.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'AI Deployment Services for Business',
        description: metadata.description,
        url: pageUrl,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Dooza',
            url: SITE_URL,
        },
        about: [
            { '@type': 'Thing', name: 'AI deployment services' },
            { '@type': 'Thing', name: 'AI implementation services' },
            { '@type': 'Thing', name: 'AI workflow automation' },
            { '@type': 'Thing', name: 'AI agents for business' },
        ],
        publisher: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
        },
        dateModified: '2026-05-18',
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza AI Deployment Services',
        serviceType: 'AI Deployment Services',
        url: pageUrl,
        description:
            'Done-for-you AI deployment for AI employees, workflows, integrations, and launch support.',
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
            audienceType: 'Founders, small businesses, agencies, and operations teams',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI Deployment Service Areas',
            itemListElement: deploymentServices.map((service, index) => ({
                '@type': 'Offer',
                position: index + 1,
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                    description: service.desc,
                },
            })),
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'AI Deployment Services', item: pageUrl },
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
    {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How Dooza Deploys AI in a Business',
        description: 'A simple process for deploying AI employees and workflows.',
        step: processSteps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.title,
            text: step.desc,
        })),
    },
];

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

export default function DeploymentPage() {
    const featuredTestimonials = testimonials.slice(0, 2);

    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar />
            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden px-4 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-warm to-warm" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                Done-for-you AI setup
                            </div>
                            <h1 className="mb-7 max-w-4xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                Deploy AI without the messy setup
                            </h1>
                            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                We find the right workflow, connect your tools, and launch AI your team can trust.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <BookDemoButton source="deployment_hero" variant="primary" size="xl">
                                    Book a Free Call
                                </BookDemoButton>
                                <SignupTextLink source="deployment_hero">
                                    Try Dooza yourself
                                </SignupTextLink>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <Badge icon={CalendarCheck}>Plan first</Badge>
                                <Badge icon={ShieldCheck}>Review built in</Badge>
                                <Badge icon={Zap}>Launch fast</Badge>
                            </div>

                            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                                {deploymentStats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-5 shadow-sm backdrop-blur">
                                        <div className="text-2xl font-extrabold text-slate-950">{stat.value}</div>
                                        <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-slate-100 bg-slate-950 p-6 text-white shadow-2xl shadow-primary-900/10">
                            <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-5">
                                <Image src="/logo.png" alt="Dooza" width={36} height={36} className="rounded-lg" priority />
                                <div>
                                    <div className="text-sm font-bold">AI launch plan</div>
                                    <div className="text-xs text-slate-400">Clear, short, useful</div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {[
                                    ['Audit', 'Pick one workflow that matters.'],
                                    ['Build', 'Connect the tools and context.'],
                                    ['Review', 'Keep humans in control.'],
                                ].map(([label, detail]) => (
                                    <div key={label} className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary-300" />
                                        <div>
                                            <div className="font-semibold">{label}</div>
                                            <div className="mt-1 text-sm leading-relaxed text-slate-400">{detail}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="WHAT WE SET UP"
                            title="AI that fits your real work"
                            description="No long AI project. Start with one clear workflow. Make it useful. Then expand."
                        />
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {deploymentServices.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <div key={service.title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                                        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">{service.title}</h3>
                                        <p className="leading-relaxed text-slate-600">{service.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <IntegrationsBar className="border-y border-slate-100" />

                <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white md:py-28">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>
                    <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <span className="mb-5 inline-flex rounded-full border border-primary-300/30 bg-primary-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary-200">
                                Process
                            </span>
                            <h2 className="mb-7 max-w-xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl">
                                Simple rollout. Clear control.
                            </h2>
                            <p className="mb-9 max-w-lg text-lg leading-relaxed text-slate-200">
                                We start small. We prove value. Then we add more.
                            </p>
                            <BookDemoButton source="deployment_process" variant="dark">
                                Plan My Deployment
                            </BookDemoButton>
                        </div>
                        <div className="grid gap-5">
                            {processSteps.map((item) => (
                                <div key={item.step} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7">
                                    <div className="mb-5 flex items-center justify-between gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-300/10 text-sm font-bold text-primary-200 ring-1 ring-primary-300/20">
                                            {item.step}
                                        </div>
                                        <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">{item.time}</div>
                                    </div>
                                    <h3 className="mb-3 font-serif text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="leading-relaxed text-slate-200">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="WHERE IT HELPS"
                            title="Less manual work. More time back."
                            description="Use AI where the task is repeated, slow, or easy to forget."
                        />
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {outcomes.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                                        <Icon className="mb-7 h-7 w-7 text-primary-600" />
                                        <h3 className="mb-3 font-serif text-xl font-bold">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-6xl">
                        <SectionHeader
                            eyebrow="PROOF"
                            title="Used by teams that want AI to do real work"
                        />
                        <div className="grid gap-6 md:grid-cols-2">
                            {featuredTestimonials.map((item) => (
                                <div key={item.author} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                                    <div className="mb-6 flex items-center gap-3">
                                        {item.logo ? (
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-white">
                                                <Image src={item.logo} alt={item.author} width={48} height={48} className="object-contain p-1" />
                                            </div>
                                        ) : (
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 font-bold text-white">
                                                {item.initials}
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-bold text-slate-900">{item.author}</div>
                                            <div className="text-xs text-slate-500">{item.role}</div>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                                </div>
                            ))}
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
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white md:py-28">
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-400/10 text-primary-300">
                            <Brain className="h-8 w-8" />
                        </div>
                        <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                            Ready to make AI useful?
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-200">
                            Bring one workflow. We will help turn it into a working AI system.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <BookDemoButton source="deployment_final" variant="dark" size="xl">
                                Book a Free Call
                            </BookDemoButton>
                            <Link
                                href="/ai-solutions-for-business"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 underline underline-offset-4 hover:text-primary-100"
                            >
                                Read the AI guide <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
