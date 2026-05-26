import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Bot,
    Brain,
    CalendarCheck,
    CheckCircle2,
    Clock,
    DatabaseZap,
    FileCheck2,
    Layers3,
    Mail,
    MessageSquare,
    PhoneCall,
    Search,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
    Workflow,
    Wrench,
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
        'Dooza deploys AI employees, AI agents, and workflow automations for businesses. Get a done-for-you AI deployment plan for email, SEO, social media, leads, calls, and operations.',
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
            'Deploy AI employees and workflow automations across your business without hiring a full AI team.',
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
            'Done-for-you AI deployment for AI employees, workflow automation, integrations, and business operations.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const deploymentServices = [
    {
        icon: Workflow,
        title: 'AI Workflow Automation',
        desc: 'Map repetitive work, design the automation, connect the tools, and launch workflows your team can actually use.',
    },
    {
        icon: Bot,
        title: 'AI Employee Deployment',
        desc: 'Deploy specialist AI employees for email, social media, SEO, lead generation, support, calls, and internal operations.',
    },
    {
        icon: DatabaseZap,
        title: 'Tool & Data Integration',
        desc: 'Connect Gmail, Google Drive, Shopify, WordPress, CRMs, social platforms, calendars, and your existing business stack.',
    },
    {
        icon: Brain,
        title: 'Business Context Training',
        desc: 'Train AI agents on your offers, tone, workflows, rules, examples, approvals, and operating knowledge.',
    },
    {
        icon: ShieldCheck,
        title: 'Human Review & Governance',
        desc: 'Set review steps, approvals, escalation rules, and safety boundaries before AI actions reach customers.',
    },
    {
        icon: Wrench,
        title: 'Ongoing Optimization',
        desc: 'Improve prompts, workflows, integrations, and routines after launch based on real outputs and business feedback.',
    },
];

const outcomes = [
    { icon: Mail, title: 'Email handled faster', desc: 'Draft replies, sort inboxes, prepare follow-ups, and reduce response delays.' },
    { icon: MessageSquare, title: 'Content shipped consistently', desc: 'Plan, draft, publish, and repurpose social posts and campaigns.' },
    { icon: Search, title: 'SEO execution on repeat', desc: 'Research topics, write blogs, optimize pages, and build search visibility.' },
    { icon: Target, title: 'More leads followed up', desc: 'Capture, enrich, qualify, route, and follow up with leads before they go cold.' },
    { icon: PhoneCall, title: 'Calls and bookings covered', desc: 'Qualify callers, capture intent, summarize calls, and hand off next steps.' },
    { icon: Layers3, title: 'Operations less manual', desc: 'Turn repeated SOPs into AI-assisted routines your team can supervise.' },
];

const processSteps = [
    {
        step: '01',
        title: 'AI Deployment Audit',
        time: 'Week 1',
        desc: 'We review your workflows, bottlenecks, tools, data sources, team roles, customer journey, and current manual tasks.',
    },
    {
        step: '02',
        title: 'Automation Blueprint',
        time: 'Week 1',
        desc: 'You get a practical deployment plan: what to automate first, what needs human review, what tools connect, and what success looks like.',
    },
    {
        step: '03',
        title: 'Build, Connect, Train',
        time: 'Weeks 2-3',
        desc: 'We configure AI employees, connect apps, add brand and business context, define routines, and test real scenarios.',
    },
    {
        step: '04',
        title: 'Launch With Controls',
        time: 'Week 3+',
        desc: 'We launch with approvals, monitoring, handoff rules, and clear ownership so AI helps the team instead of creating chaos.',
    },
];

const industries = [
    'Agencies',
    'Ecommerce & Shopify stores',
    'Local service businesses',
    'Real estate teams',
    'Clinics and appointment-led businesses',
    'B2B service companies',
    'Creators and media brands',
    'Operations-heavy small teams',
];

const comparisonRows = [
    {
        label: 'Setup effort',
        tools: 'You compare tools, connect accounts, write prompts, and debug failures.',
        dooza: 'We design and deploy the first working workflows with you.',
    },
    {
        label: 'Business context',
        tools: 'Generic AI needs repeated instructions and forgets your process.',
        dooza: 'AI employees are trained around your offers, tone, examples, and SOPs.',
    },
    {
        label: 'Tool stack',
        tools: 'Separate tools for email, SEO, social, leads, calls, and content.',
        dooza: 'One AI workforce layer connected to your existing tools.',
    },
    {
        label: 'Review controls',
        tools: 'You have to invent approval flows yourself.',
        dooza: 'Human review, escalation, and launch boundaries are part of deployment.',
    },
];

const faqData = [
    {
        question: 'What are AI deployment services?',
        answer:
            'AI deployment services help a business move from AI ideas to working AI systems. Dooza audits your workflows, designs automations, deploys AI employees, connects your tools, trains the AI on your business context, and helps launch with human review controls.',
    },
    {
        question: 'How is AI deployment different from buying an AI tool?',
        answer:
            'Buying a tool gives you software. Deployment turns that software into a working business process. Dooza helps decide what to automate, connects the right apps, trains the AI, sets approval rules, and makes sure the workflow fits your real team.',
    },
    {
        question: 'What business functions can Dooza deploy AI for?',
        answer:
            'Dooza can deploy AI for email management, social media, SEO and blog publishing, lead generation, call handling, customer support, content repurposing, internal reporting, and repeated operations workflows.',
    },
    {
        question: 'Do I need technical skills to deploy AI with Dooza?',
        answer:
            'No. The deployment is designed for founders, operators, agencies, and small teams that want outcomes without building an internal AI engineering team.',
    },
    {
        question: 'Can Dooza connect with our existing tools?',
        answer:
            'Yes. Dooza is built to connect with common business tools such as Gmail, Google Drive, calendars, Shopify, WordPress, social platforms, CRMs, forms, and many other apps through integrations.',
    },
    {
        question: 'How long does an AI deployment take?',
        answer:
            'Simple deployments can start showing value in days. A more complete workflow deployment usually takes a few weeks because it includes audit, blueprint, setup, integrations, training, review flows, and launch testing.',
    },
    {
        question: 'Will AI replace our team?',
        answer:
            'The goal is not to remove the team. The goal is to remove repetitive execution from the team so people can focus on decisions, customers, strategy, and creative work.',
    },
    {
        question: 'Is Dooza AI deployment secure?',
        answer:
            'Dooza uses controlled integrations, scoped access, human review flows, and clear approval boundaries. Exact compliance requirements should be reviewed during deployment so the workflow matches your risk and data needs.',
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
            'Done-for-you AI deployment for businesses, including AI employees, AI agents, workflow automation, integrations, business context training, and launch support.',
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
        description: 'A practical process for deploying AI employees and AI workflow automation inside a business.',
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
        <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl mb-12 md:mb-16`}>
            <span className="section-label block mb-4 text-primary-600">{eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 font-serif leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}

function Badge({ icon: Icon, children }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <Icon className="h-4 w-4 text-primary-600" />
            {children}
        </div>
    );
}

export default function DeploymentPage() {
    const featuredTestimonials = testimonials.slice(0, 3);

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
                <section className="relative overflow-hidden px-4 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-warm to-warm" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:28px_28px]" />
                    </div>

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                Done-for-you AI deployment services
                            </div>
                            <h1 className="mb-6 max-w-4xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                Deploy AI across your business without building an AI team
                            </h1>
                            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                Dooza helps you plan, build, connect, train, and launch AI employees and workflow automations for email, SEO, social media, leads, calls, support, and operations.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <BookDemoButton source="deployment_hero" variant="primary" size="xl">
                                    Book a Free AI Deployment Call
                                </BookDemoButton>
                                <SignupTextLink source="deployment_hero">
                                    Explore the AI workforce →
                                </SignupTextLink>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Badge icon={CalendarCheck}>Founder-led strategy call</Badge>
                                <Badge icon={ShieldCheck}>Human review controls</Badge>
                                <Badge icon={Zap}>Launch-ready workflows</Badge>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-4 shadow-2xl shadow-primary-900/10 backdrop-blur">
                                <div className="rounded-[1.5rem] border border-slate-100 bg-slate-950 p-5 text-white">
                                    <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Image src="/logo.png" alt="Dooza" width={34} height={34} className="rounded-lg" priority />
                                            <div>
                                                <div className="text-sm font-bold">AI Deployment Plan</div>
                                                <div className="text-xs text-slate-400">From audit to launch</div>
                                            </div>
                                        </div>
                                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                                            Live workflow
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            ['Audit', '42 repetitive tasks found', 'Complete'],
                                            ['Integrations', 'Gmail, Shopify, WordPress, CRM', 'Connected'],
                                            ['AI employees', 'Email, SEO, social, leads', 'Training'],
                                            ['Approvals', 'Human review before publishing', 'Enabled'],
                                        ].map(([label, detail, status]) => (
                                            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                                <div className="mb-2 flex items-center justify-between gap-4">
                                                    <div className="font-semibold">{label}</div>
                                                    <div className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-primary-200">
                                                        {status}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-slate-400">{detail}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-5 rounded-2xl bg-gradient-to-r from-primary-500 to-teal-400 p-4 text-slate-950">
                                        <div className="text-sm font-bold">Next launch target</div>
                                        <div className="mt-1 text-2xl font-extrabold">15-20 hrs/week reclaimed</div>
                                        <div className="mt-1 text-sm text-slate-800">Projected from automating repeated weekly work.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-slate-100 bg-white py-6">
                    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 text-center md:justify-between">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Built for practical AI rollout</span>
                        {['Audit', 'Blueprint', 'Integrations', 'AI employees', 'Approvals', 'Optimization'].map((item) => (
                            <span key={item} className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                                {item}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="bg-warm px-4 py-16 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="WHY AI DEPLOYMENTS FAIL"
                            title="Most businesses do not need another AI demo. They need working AI in the business."
                            description="The hard part is not finding an AI tool. The hard part is choosing the right workflow, connecting the right data, training the AI correctly, and launching with review controls."
                        />
                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                ['Tool overload', 'Teams buy five AI subscriptions but still do the work manually because nothing fits the actual process.'],
                                ['No business context', 'Generic chatbots do not know your customers, offers, tone, policies, approvals, or edge cases.'],
                                ['No launch controls', 'AI outputs need human review, escalation rules, and ownership before they can safely touch real customers.'],
                            ].map(([title, desc]) => (
                                <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                                        <FileCheck2 className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-3 font-serif text-2xl font-bold text-slate-900">{title}</h3>
                                    <p className="leading-relaxed text-slate-600">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-16 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="AI DEPLOYMENT SERVICES"
                            title="What Dooza deploys for your business"
                            description="We combine AI employees, workflow automation, tool integrations, business context, and human review systems into one rollout."
                        />
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {deploymentServices.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <div key={service.title} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl">
                                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-teal-100 text-primary-700 transition-transform group-hover:scale-110">
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

                <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white md:py-24">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary-500/15 blur-3xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px]" />
                    </div>
                    <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <span className="mb-4 inline-flex rounded-full border border-primary-300/30 bg-primary-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary-200">
                                Deployment process
                            </span>
                            <h2 className="mb-6 max-w-xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl">
                                A clear path from AI idea to working operation
                            </h2>
                            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-200 md:text-xl">
                                We do not start by asking you to pick tools. We start by identifying where AI can create measurable leverage, then deploy the smallest reliable workflow first.
                            </p>
                            <BookDemoButton source="deployment_process" variant="dark">
                                Plan My AI Deployment
                            </BookDemoButton>
                        </div>
                        <div className="grid gap-4">
                            {processSteps.map((item) => (
                                <div key={item.step} className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300/35 hover:bg-white/[0.09]">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-300/10 text-sm font-bold text-primary-200 ring-1 ring-primary-300/20">
                                            {item.step}
                                        </div>
                                        <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">{item.time}</div>
                                    </div>
                                    <h3 className="mb-2 font-serif text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="leading-relaxed text-slate-200">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-warm px-4 py-16 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="BUSINESS OUTCOMES"
                            title="Deploy AI where it saves time, increases speed, and removes repeated work"
                            description="Dooza focuses on workflows that are easy to measure: faster responses, more consistent publishing, better lead follow-up, and fewer manual handoffs."
                        />
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {outcomes.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                                        <Icon className="mb-5 h-7 w-7 text-primary-600" />
                                        <h3 className="mb-2 font-serif text-xl font-bold">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-16 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="WHY DOOZA"
                            title="Services plus software. Strategy plus deployment."
                            description="Most companies either sell advice or sell tools. Dooza gives you a practical AI workforce platform and the deployment help to make it work."
                        />
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <div className="grid grid-cols-3 bg-slate-50 text-sm font-bold uppercase tracking-wide text-slate-500">
                                <div className="p-4">Decision</div>
                                <div className="p-4">Buying AI tools</div>
                                <div className="p-4 text-primary-700">Dooza deployment</div>
                            </div>
                            {comparisonRows.map((row) => (
                                <div key={row.label} className="grid grid-cols-1 border-t border-slate-100 md:grid-cols-3">
                                    <div className="bg-slate-50/60 p-4 font-bold text-slate-900">{row.label}</div>
                                    <div className="p-4 text-slate-600">{row.tools}</div>
                                    <div className="p-4 font-medium text-slate-800">
                                        <CheckCircle2 className="mr-2 inline h-5 w-5 text-primary-600" />
                                        {row.dooza}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-primary-50 via-warm to-white px-4 py-16 md:py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <SectionHeader
                                align="left"
                                eyebrow="WHO IT IS FOR"
                                title="Built for teams that need AI working now"
                                description="The best fit is a team with real workflows, repeated tasks, and no time to run a long AI experiment."
                            />
                            <div className="flex flex-col gap-4">
                                <BookDemoButton source="deployment_fit" variant="primary">
                                    Check If Dooza Fits
                                </BookDemoButton>
                                <SignupTextLink source="deployment_fit">
                                    Or start with the product →
                                </SignupTextLink>
                            </div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {industries.map((industry) => (
                                <div key={industry} className="flex items-center gap-3 rounded-2xl border border-primary-100 bg-white/90 p-4 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                                    <span className="font-semibold text-slate-800">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-16 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="PROOF"
                            title="Teams already use Dooza to move from manual work to AI-assisted operations"
                        />
                        <div className="grid gap-6 md:grid-cols-3">
                            {featuredTestimonials.map((item) => (
                                <div key={item.author} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                                    <div className="mb-5 flex items-center gap-3">
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

                <section className="bg-warm px-4 py-16 md:py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <span className="section-label mb-4 block text-primary-600">IMPLEMENTATION STANDARDS</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                                Practical controls before AI touches the business
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                This is not a fake certificate strip. These are the operating controls we design into deployments so AI remains useful, reviewable, and accountable.
                            </p>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                            {[
                                [ShieldCheck, 'Scoped access', 'Connect only the accounts and permissions each workflow needs.'],
                                [Users, 'Human approvals', 'Review high-impact outputs before publishing, sending, or escalating.'],
                                [Clock, 'Monitoring cadence', 'Define when outputs are checked and how improvements are logged.'],
                                [FileCheck2, 'Clear SOPs', 'Document what AI owns, what humans own, and when to pause.'],
                            ].map(([Icon, title, desc]) => (
                                <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                                    <Icon className="mb-4 h-7 w-7 text-primary-600" />
                                    <h3 className="mb-2 font-serif text-xl font-bold">{title}</h3>
                                    <p className="text-slate-600">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-16 md:py-24">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-12 text-center">
                            <span className="section-label mb-4 block text-primary-600">FAQ</span>
                            <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                                AI deployment services FAQ
                            </h2>
                        </div>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white md:py-24">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute left-1/2 top-1/2 h-80 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-5xl text-center">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-400/10 text-primary-300">
                            <Sparkles className="h-8 w-8" />
                        </div>
                        <h2 className="mb-5 font-serif text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                            Ready to deploy AI where it actually saves time?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                            Bring your workflows. We will help identify what to automate first and how to launch without overwhelming your team.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <BookDemoButton source="deployment_final" variant="dark" size="xl">
                                Book a Free AI Deployment Call
                            </BookDemoButton>
                            <Link
                                href="/ai-solutions-for-business"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 underline underline-offset-4 hover:text-primary-100"
                            >
                                Read the AI solutions guide <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
