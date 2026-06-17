import Link from 'next/link';
import {
    ArrowRight,
    BriefcaseBusiness,
    CheckCircle2,
    ClipboardCheck,
    FileCheck2,
    Gavel,
    Mail,
    MessageSquareText,
    Scale,
    ShieldCheck,
    Sparkles,
    Users,
    Workflow,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/industries/law-firms`;

export const metadata = {
    title: {
        absolute: 'AI Workflow Automation for Law Firms | Dooza',
    },
    description:
        'Dooza helps law firms automate client intake, conflict checks, onboarding, document collection, client updates, billing reminders, and attorney-approved workflows.',
    keywords: [
        'law firm workflow automation',
        'legal workflow automation',
        'AI automation for law firms',
        'law firm client intake automation',
        'legal operations automation',
        'law firm document workflow',
        'law firm onboarding workflow',
        'AI assistant for law firms',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'AI Workflow Automation for Law Firms | Dooza',
        description:
            'Human-approved AI workflows for law firm intake, onboarding, matter admin, documents, updates, and follow-ups.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Workflow Automation for Law Firms | Dooza',
        description:
            'Automate repeat law firm operations while keeping attorneys in control of sensitive client-facing work.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const workflowSteps = [
    {
        icon: MessageSquareText,
        title: 'Intake captured',
        desc: 'Website, email, phone, or form inquiry becomes a structured lead record.',
    },
    {
        icon: Scale,
        title: 'Conflict review routed',
        desc: 'Parties and matter details are prepared for attorney or staff review.',
    },
    {
        icon: FileCheck2,
        title: 'Onboarding prepared',
        desc: 'Engagement tasks, document requests, folders, and next steps are created.',
    },
    {
        icon: CheckCircle2,
        title: 'Attorney approval',
        desc: 'Sensitive replies and client-facing actions wait for human review.',
    },
];

const servicePackages = [
    'New client intake assistant',
    'Conflict-check preparation flow',
    'Matter opening checklist',
    'Document request tracker',
    'Consultation booking workflow',
    'Client status update drafts',
    'Billing and payment reminders',
    'Daily attorney workload report',
];

const guardrails = [
    'AI prepares drafts and summaries, not legal advice',
    'Attorney approval before sensitive client-facing output',
    'Least-privilege access to inboxes, files, calendars, and matter tools',
    'Audit-friendly logs for workflow runs and approvals',
];

const faqData = [
    {
        question: 'Does Dooza give legal advice?',
        answer:
            'No. Dooza helps with operational workflows such as intake, routing, document collection, draft preparation, reminders, and reporting. Legal advice and final client-facing decisions stay with the law firm.',
    },
    {
        question: 'Can this replace a paralegal or intake coordinator?',
        answer:
            'The goal is to reduce repetitive admin work, not remove professional judgment. Dooza can handle structured intake, reminders, drafts, and routing so staff spend more time on higher-value work.',
    },
    {
        question: 'Can it work with our current tools?',
        answer:
            'Yes. Dooza can connect with common tools such as email, calendars, forms, CRMs, spreadsheets, file storage, and workflow systems. The exact setup depends on the firm stack.',
    },
    {
        question: 'What should a law firm automate first?',
        answer:
            'Start with intake and onboarding. Those workflows are repeatable, easy to measure, and often expose missed follow-ups, inconsistent data collection, and delayed matter setup.',
    },
    {
        question: 'How do approvals work?',
        answer:
            'A workflow can pause before sending a reply, updating a sensitive record, or creating a client-facing document. The attorney or assigned staff member reviews, edits, and approves the action.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Workflow Automation for Law Firms',
        serviceType: 'Legal Operations Workflow Automation',
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
            audienceType: 'Law firms, attorneys, legal operations teams, and intake teams',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE_URL}/industries` },
            { '@type': 'ListItem', position: 3, name: 'Law Firms', item: pageUrl },
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

function LawFirmWorkflowVisual() {
    return (
        <div className="workflow-hero-surface rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-primary-100/50 backdrop-blur">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Scale className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Law firm intake run</div>
                        <div className="text-xs text-slate-500">lead, review, matter setup</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Review gated</span>
            </div>

            <div className="relative mb-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Before</div>
                    <div className="font-bold text-slate-950">Manual intake</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Phone notes, inbox threads, missed follow-ups.</p>
                </div>

                <svg className="hidden h-16 w-24 sm:block" viewBox="0 0 96 64" fill="none" aria-hidden="true">
                    <path className="deployment-flow-line" d="M8 32 C28 8 68 8 88 32" />
                    <path className="deployment-flow-line deployment-flow-line-delay" d="M8 32 C28 56 68 56 88 32" />
                </svg>

                <div className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wide text-primary-700">After</div>
                    <div className="font-bold text-slate-950">Structured workflow</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Qualified, routed, approved, and tracked.</p>
                </div>
            </div>

            <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                        <div className="text-sm font-bold text-slate-950">New matter pipeline</div>
                        <div className="text-xs font-semibold text-slate-500">repeatable steps without losing context</div>
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">Approval</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                    <div className="grid gap-2">
                        {['New inquiry', 'Opposing party', 'Signed retainer'].map((item, index) => (
                            <div key={item} className="deployment-queue-item rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700" style={{ animationDelay: `${index * 0.25}s` }}>
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
                        {['Conflict review', 'Folder created', 'Next tasks assigned'].map((item, index) => (
                            <div key={item} className="deployment-queue-item rounded-xl border border-primary-100 bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-900" style={{ animationDelay: `${0.45 + index * 0.25}s` }}>
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
                            <span className="flex-1 text-sm font-semibold text-slate-700">{item.title}</span>
                            <CheckCircle2 className="h-4 w-4 text-primary-600" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function MatterProcessFlow() {
    const steps = [
        ['01', 'Capture', 'Collect client and matter details from forms, calls, or email.', MessageSquareText],
        ['02', 'Review', 'Prepare conflict context and route to the right reviewer.', Scale],
        ['03', 'Open', 'Create onboarding tasks, folders, and document requests.', FileCheck2],
        ['04', 'Update', 'Draft client updates and internal reports for approval.', Mail],
    ];

    return (
        <div className="workflow-tree-surface relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0d_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0d_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="relative z-10 mb-5 flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Workflow className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Matter opening flow</div>
                        <div className="text-xs text-slate-500">built around attorney control</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                    Legal ops
                </span>
            </div>

            <div className="relative z-10">
                <div className="absolute left-6 right-6 top-9 hidden h-px bg-primary-100 md:block" />
                <div className="grid gap-3 md:grid-cols-4">
                    {steps.map(([number, title, desc, Icon], index) => (
                        <div
                            key={number}
                            className="workflow-node-live relative rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-sm"
                            style={{ animationDelay: `${index * 0.14}s` }}
                        >
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${index === 0 ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                <span className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-500">{number}</span>
                            </div>
                            <h3 className="font-sans text-base font-extrabold text-slate-950">{title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm font-bold text-primary-900">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-700" />
                    Every client-facing action can pause for attorney or staff approval.
                </div>
            </div>
        </div>
    );
}

function LawFirmComparisonSection() {
    const comparisonRows = [
        {
            problem: 'Missed intake',
            problemDetail: 'Prospects wait too long and high-intent leads go cold.',
            solution: 'Client intake and qualification',
            solutionDetail: 'Collect case details, urgency, jurisdiction, and consultation preferences.',
            icon: ClipboardCheck,
        },
        {
            problem: 'Inconsistent onboarding',
            problemDetail: 'Every coordinator opens matters slightly differently.',
            solution: 'Conflict review and matter opening',
            solutionDetail: 'Prepare parties, context, folders, checklists, and document requests.',
            icon: ShieldCheck,
        },
        {
            problem: 'Manual follow-up',
            problemDetail: 'Updates, reminders, and task nudges depend on memory.',
            solution: 'Updates, reminders, and reporting',
            solutionDetail: 'Draft replies, book reminders, maintain checklists, and surface blocked matters.',
            icon: Mail,
        },
    ];

    return (
        <section className="relative overflow-hidden border-y border-slate-200 bg-white px-4 py-14 md:py-16">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div>
                    <span className="section-label mb-4 block text-primary-600">Why now</span>
                    <h2 className="font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                        Law firms are hiring for work that should be a workflow
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                        If your team is chasing intake forms, copying client details, sending the same reminders, and rebuilding matter checklists by hand, Dooza can turn that operational work into a controlled system.
                    </p>
                </div>

                <div className="workflow-tree-surface relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0d_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0d_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="relative z-10 mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em]">
                        <div className="text-slate-400">Manual work now</div>
                        <div className="text-primary-700">Dooza</div>
                        <div className="text-primary-700">Managed workflow</div>
                    </div>

                    <div className="relative z-10 grid gap-3">
                        {comparisonRows.map((row, index) => {
                            const Icon = row.icon;
                            return (
                                <div
                                    key={row.problem}
                                    className="grid gap-3 rounded-2xl border border-slate-100 bg-white/95 p-3 shadow-sm md:grid-cols-[1fr_auto_1fr] md:items-center"
                                >
                                    <div className="rounded-xl bg-slate-50 p-4">
                                        <div className="text-sm font-extrabold text-slate-950">{row.problem}</div>
                                        <p className="mt-1 text-xs leading-relaxed text-slate-600">{row.problemDetail}</p>
                                    </div>

                                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-700 text-white shadow-lg shadow-primary-700/20">
                                        <ArrowRight className="h-5 w-5" />
                                    </div>

                                    <div
                                        className="workflow-node-live rounded-xl border border-primary-100 bg-primary-50 p-4"
                                        style={{ animationDelay: `${index * 0.16}s` }}
                                    >
                                        <div className="mb-2 flex items-center gap-2">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-primary-700 shadow-sm">
                                                <Icon className="h-4 w-4" />
                                            </span>
                                            <div className="text-sm font-extrabold text-slate-950">{row.solution}</div>
                                        </div>
                                        <p className="text-xs leading-relaxed text-slate-600">{row.solutionDetail}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="relative z-10 mt-4 grid gap-3 md:grid-cols-[auto_1fr] md:items-center">
                        <div className="deployment-automation-core flex items-center gap-3 rounded-2xl bg-primary-700 px-4 py-3 text-white shadow-lg shadow-primary-700/20">
                            <Workflow className="h-5 w-5" />
                            <span className="text-sm font-extrabold">Workflow layer</span>
                        </div>
                        <div className="rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm font-bold leading-relaxed text-primary-900">
                            Start with one operational bottleneck. Then expand after the first workflow is running cleanly.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function LawFirmsPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar ctaType="demo" ctaSource="law_firms_nav" />
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
                                Law firm workflow automation
                            </div>
                            <h1 className="mb-7 max-w-4xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                Hire AI workflows before you hire more admin
                            </h1>
                            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                Dooza helps law firms automate intake, onboarding, document collection, client updates, billing reminders, and matter admin with attorney approval built in.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <BookDemoButton source="law_firms_hero" variant="primary" size="xl">
                                    Book a Law Firm Workflow Call
                                </BookDemoButton>
                                <Link
                                    href="/workflow"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-4 text-base font-bold text-primary-800 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50"
                                >
                                    See Dooza Workflow <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                {['Intake', 'Conflict review', 'Onboarding', 'Document collection', 'Approvals'].map((item) => (
                                    <span key={item} className="rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="hero-entrance-right">
                            <LawFirmWorkflowVisual />
                        </div>
                    </div>
                </section>

                <LawFirmComparisonSection />

                <section className="relative overflow-hidden bg-white px-4 py-14 md:py-16">
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                        <div>
                            <span className="section-label mb-4 block">Process</span>
                            <h2 className="mb-5 max-w-xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
                                One law firm workflow at a time
                            </h2>
                            <p className="mb-7 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
                                We pick the repeatable process, connect the tools, add review steps, test the run, and hand your team a workflow they can actually operate.
                            </p>
                            <BookDemoButton source="law_firms_process" variant="primary">
                                Map My First Workflow
                            </BookDemoButton>
                        </div>
                        <MatterProcessFlow />
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <span className="section-label mb-5 block">Packages</span>
                            <h2 className="mb-6 font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                                Useful workflows a law firm can deploy first
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                These are operational workflows. They help the firm move work, collect information, draft admin output, and keep lawyers in control.
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {servicePackages.map((item) => (
                                <div key={item} className="workflow-rise rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="Controls"
                            title="Built for legal work that needs review"
                            description="The safest law-firm automations are not uncontrolled bots. They are structured workflows with clear review points and scoped access."
                        />
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {guardrails.map((item, index) => (
                                <div key={item} className="deployment-trust-card rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ animationDelay: `${index * 0.25}s` }}>
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                        {index === 0 ? <Gavel className="h-6 w-6" /> : index === 1 ? <Users className="h-6 w-6" /> : index === 2 ? <ShieldCheck className="h-6 w-6" /> : <BriefcaseBusiness className="h-6 w-6" />}
                                    </div>
                                    <p className="font-semibold leading-relaxed text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 text-center">
                            <span className="section-label mb-4 block text-primary-600">FAQ</span>
                            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-5xl">
                                Law firm workflow questions
                            </h2>
                        </div>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                <section className="relative overflow-hidden bg-warm px-4 py-20 text-slate-900 md:py-28">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/80 via-warm to-warm" />
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                            <Scale className="h-8 w-8" />
                        </div>
                        <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
                            Bring one workflow your firm keeps hiring around
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                            We will map the process, connect the tools, add approvals, and show what can be automated without losing attorney control.
                        </p>
                        <BookDemoButton source="law_firms_final" variant="primary" size="xl">
                            Book a Law Firm Workflow Call
                        </BookDemoButton>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
