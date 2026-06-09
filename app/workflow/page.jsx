import Link from 'next/link';
import {
    ArrowRight,
    Bot,
    BrainCircuit,
    CheckCircle2,
    Clock3,
    Code2,
    GitBranch,
    Globe2,
    LockKeyhole,
    Play,
    PlugZap,
    Route,
    ShieldCheck,
    Sparkles,
    Webhook,
    Workflow,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import SignupTextLink from '@/components/buttons/SignupTextLink';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/workflow`;

export const metadata = {
    title: {
        absolute: 'Dooza Workflow | AI Workflow Automation Platform',
    },
    description:
        'Build AI workflows, connect apps, add approvals, run schedules, and automate business operations with Dooza Workflow.',
    keywords: [
        'Dooza Workflow',
        'AI workflow automation',
        'workflow automation platform',
        'AI automation builder',
        'business process automation',
        'AI agents workflow',
        'no-code workflow automation',
        'app integration automation',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Dooza Workflow | AI Workflow Automation Platform',
        description:
            'A visual workflow layer for AI employees, app integrations, schedules, webhooks, and human approvals.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Workflow' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Workflow | AI Workflow Automation Platform',
        description:
            'Build AI workflows that connect tools, run routines, and keep humans in control.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const stats = [
    { value: '170+', label: 'countries' },
    { value: '1,000+', label: 'app connections' },
    { value: '24/7', label: 'scheduled workflows' },
];

const workflowNodes = [
    { icon: Webhook, title: 'Trigger', desc: 'Webhook, schedule, form, email, or manual start.' },
    { icon: BrainCircuit, title: 'AI Step', desc: 'Draft, classify, summarize, enrich, or decide.' },
    { icon: ShieldCheck, title: 'Review', desc: 'Add approval before publishing or sending.' },
    { icon: PlugZap, title: 'Action', desc: 'Post, email, update CRM, create tasks, or notify.' },
];

const capabilities = [
    {
        icon: GitBranch,
        title: 'Visual workflow logic',
        desc: 'Map branches, retries, approvals, and actions without turning every automation into a custom engineering project.',
    },
    {
        icon: Bot,
        title: 'AI employees inside flows',
        desc: 'Use Dooza agents for content, SEO, replies, lead handling, research, and follow-up inside the same operating flow.',
    },
    {
        icon: Clock3,
        title: 'Routines and schedules',
        desc: 'Run daily reports, weekly content checks, reply syncs, lead updates, and internal handoffs on a predictable cadence.',
    },
    {
        icon: LockKeyhole,
        title: 'Human-safe automation',
        desc: 'Keep review gates for risky work so AI can move fast while the team stays in control.',
    },
];

const useCases = [
    'Publish SEO content after approval',
    'Sync replies and send campaign reports',
    'Route leads from forms into outbound workflows',
    'Summarize calls and create next steps',
    'Monitor websites, stores, and connected tools',
    'Create internal alerts when something breaks',
];

const faqData = [
    {
        question: 'Is Dooza Workflow the same as Dooza Marketing?',
        answer:
            'No. Dooza Marketing is the AI marketing employee experience. Dooza Workflow is the automation layer used to connect tools, run routines, and control multi-step processes.',
    },
    {
        question: 'Can non-technical teams use it?',
        answer:
            'Yes. The page is designed for business workflows first: triggers, AI steps, approvals, and actions. Technical teams can go deeper with webhooks and integrations.',
    },
    {
        question: 'Can workflows use human approval?',
        answer:
            'Yes. Approval steps can be used before publishing, sending, updating records, or taking customer-facing actions.',
    },
    {
        question: 'What can it connect to?',
        answer:
            'Dooza Workflow is designed for common business tools like email, calendars, forms, social platforms, CRMs, spreadsheets, ecommerce platforms, and webhook-based systems.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dooza Workflow',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'AI Workflow Automation',
        operatingSystem: 'Web',
        url: pageUrl,
        description: metadata.description,
        featureList: capabilities.map((item) => item.title),
        publisher: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
        },
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
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Dooza Workflow', item: pageUrl },
        ],
    },
];

function NodeCard({ item, index }) {
    const Icon = item.icon;

    return (
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-300/10 text-teal-200 ring-1 ring-teal-300/20">
                    <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">0{index + 1}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{item.desc}</p>
        </div>
    );
}

export default function WorkflowPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar variant="dark" />
            <main id="main-content" className="bg-[#070812] text-white">
                <section className="relative min-h-[92dvh] overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.28),transparent_32%),radial-gradient(circle_at_78%_20%,rgba(99,102,241,0.22),transparent_30%),linear-gradient(180deg,#070812_0%,#0b1020_58%,#101827_100%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:36px_36px]" />
                    </div>

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-bold text-teal-100">
                                <Sparkles className="h-4 w-4" />
                                Dooza Workflow
                            </div>
                            <h1 className="mb-7 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white md:text-6xl lg:text-7xl">
                                Automate the work between your AI employees
                            </h1>
                            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                                Build workflows that connect apps, run routines, call AI agents, wait for approval, and move real business tasks forward.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <BookDemoButton source="workflow_hero" variant="dark" size="xl">
                                    Build My Workflow
                                </BookDemoButton>
                                <SignupTextLink source="workflow_hero">
                                    Try Dooza Marketing first
                                </SignupTextLink>
                            </div>

                            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-5 text-center backdrop-blur">
                                        <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                                        <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-teal-400/20 via-indigo-400/10 to-cyan-400/20 blur-2xl" />
                            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/40 backdrop-blur">
                                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-300/10 text-teal-200">
                                            <Workflow className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold">Customer reply workflow</div>
                                            <div className="text-xs text-slate-400">Live automation map</div>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                                        Ready
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    {workflowNodes.map((item, index) => (
                                        <NodeCard key={item.title} item={item} index={index} />
                                    ))}
                                </div>

                                <div className="mt-5 rounded-3xl border border-teal-300/20 bg-teal-300/10 p-5">
                                    <div className="mb-3 flex items-center gap-2 text-sm font-bold text-teal-100">
                                        <Route className="h-4 w-4" />
                                        Branch rule
                                    </div>
                                    <p className="text-sm leading-relaxed text-slate-300">
                                        If confidence is low, ask the user. If approved, publish. If blocked, notify the team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 text-slate-900 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 max-w-3xl">
                            <span className="section-label mb-4 block text-teal-600">CAPABILITIES</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight md:text-5xl">
                                A workflow layer built for AI operations
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                Inspired by modern automation builders, but designed around Dooza’s AI employee model and customer-facing review flows.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {capabilities.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                                        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="mb-3 font-serif text-2xl font-bold text-slate-950">{item.title}</h3>
                                        <p className="leading-relaxed text-slate-600">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#0b1020] px-4 py-20 md:py-28">
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:36px_36px]" />
                    <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <span className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">
                                Use cases
                            </span>
                            <h2 className="mb-6 max-w-xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                                Make the routine parts of work run themselves
                            </h2>
                            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-300">
                                Dooza Workflow is best for the repeated processes that sit between people, AI employees, and business tools.
                            </p>
                            <Link
                                href="/deployment"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
                            >
                                Get it deployed for me <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {useCases.map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-200" />
                                    <span className="font-semibold leading-relaxed text-slate-100">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 text-slate-900 md:py-28">
                    <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-100 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 md:p-10">
                        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                            <div>
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">
                                    <Code2 className="h-4 w-4" />
                                    Built for operators and builders
                                </div>
                                <h2 className="mb-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                                    Start simple. Add power when you need it.
                                </h2>
                                <p className="text-lg leading-relaxed text-slate-300">
                                    Business teams can launch approved routines. Technical teams can use webhooks, branching, and deeper integrations.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 font-mono text-sm text-slate-300">
                                <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
                                    <span className="h-3 w-3 rounded-full bg-red-400" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <span className="h-3 w-3 rounded-full bg-green-400" />
                                </div>
                                <div className="space-y-2">
                                    <p><span className="text-teal-300">trigger</span>: new_reply_received</p>
                                    <p><span className="text-indigo-300">ai_step</span>: classify_intent</p>
                                    <p><span className="text-cyan-300">if</span>: needs_human_review</p>
                                    <p className="pl-4">notify: team_channel</p>
                                    <p><span className="text-cyan-300">else</span>:</p>
                                    <p className="pl-4">draft: approved_response</p>
                                    <p className="pl-4">send: after_review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 px-4 py-20 text-slate-900 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 text-center">
                            <span className="section-label mb-4 block text-teal-600">FAQ</span>
                            <h2 className="font-serif text-3xl font-bold md:text-5xl">Dooza Workflow questions</h2>
                        </div>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                <section className="bg-[#070812] px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-300/10 text-teal-200">
                            <Zap className="h-8 w-8" />
                        </div>
                        <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                            Ready to automate the work behind the work?
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-300">
                            Bring one process. Dooza can help turn it into a workflow your team can trust.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <BookDemoButton source="workflow_final" variant="dark" size="xl">
                                Book a Workflow Demo
                            </BookDemoButton>
                            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-100 underline underline-offset-4 hover:text-white">
                                Explore Dooza Marketing <Play className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
