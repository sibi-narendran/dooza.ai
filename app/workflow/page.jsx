import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    Boxes,
    BrainCircuit,
    CheckCircle2,
    Code2,
    DatabaseZap,
    Eye,
    FileCheck2,
    GitBranch,
    LockKeyhole,
    Mail,
    MessageSquare,
    Play,
    RefreshCcw,
    Server,
    ShieldCheck,
    Sparkles,
    Users,
    Workflow,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoSection from '@/components/sections/VideoSection';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import { WORKFLOW_SIGNIN_URL, WORKFLOW_SIGNUP_URL } from '@/lib/links';
import { SITE_URL } from '@/lib/site';
import { testimonials } from '@/lib/homeData';

const pageUrl = `${SITE_URL}/workflow`;
const workflowSignupUrl = WORKFLOW_SIGNUP_URL;
const workflowSigninUrl = WORKFLOW_SIGNIN_URL;

export const metadata = {
    title: {
        absolute: 'Dooza Workflow | AI Agents and Workflow Automation',
    },
    description:
        'Build visible, testable AI workflows with tool connections, approvals, traces, and governance controls in Dooza Workflow.',
    keywords: [
        'Dooza Workflow',
        'AI agents workflow',
        'AI workflow automation',
        'workflow automation platform',
        'AI governance',
        'human in the loop AI',
        'workflow diffs',
        'approval based AI workflows',
        'privacy aware workflow automation',
        'business process automation',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Dooza Workflow | AI Agents and Workflow Automation',
        description:
            'Visual AI workflows with code depth, integrations, approvals, traces, and governance controls.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Workflow' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Workflow | AI Agents and Workflow Automation',
        description:
            'Build AI agents and workflows your team can inspect, test, approve, and deploy.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const heroStats = [
    { value: 'Tool', label: 'connections' },
    { value: 'Run', label: 'history' },
    { value: 'Human', label: 'approval gates' },
];

const heroNodes = [
    {
        icon: Mail,
        label: 'Inbox',
        title: 'New request',
        meta: 'Email or form',
        position: 'left-[6%] top-[24%]',
    },
    {
        icon: BrainCircuit,
        label: 'AI',
        title: 'Triage',
        meta: 'Classify + draft',
        position: 'left-[37%] top-[16%]',
    },
    {
        icon: ShieldCheck,
        label: 'Review',
        title: 'Approve',
        meta: 'Sensitive cases',
        position: 'right-[8%] top-[29%]',
    },
    {
        icon: MessageSquare,
        label: 'Action',
        title: 'Reply + sync',
        meta: 'CRM and Slack',
        position: 'left-[36%] bottom-[16%]',
    },
];

const teamUseCases = [
    {
        team: 'IT Ops',
        action: 'Onboard new employees',
        detail: 'Create accounts, request approvals, send welcome tasks, and log every step.',
    },
    {
        team: 'Sec Ops',
        action: 'Enrich incident tickets',
        detail: 'Pull context from alerts, classify risk, route owners, and preserve the audit trail.',
    },
    {
        team: 'Dev Ops',
        action: 'Turn natural language into API calls',
        detail: 'Translate requests into controlled actions with schema checks before execution.',
    },
    {
        team: 'Sales',
        action: 'Generate customer insights',
        detail: 'Summarize reviews, calls, emails, and CRM notes into useful next steps.',
    },
];

const integrationRows = [
    ['Gmail', 'Slack', 'Salesforce', 'HubSpot', 'Shopify', 'WordPress', 'Google Sheets', 'Notion'],
    ['Airtable', 'Asana', 'Stripe', 'Calendly', 'Webhooks', 'Postgres', 'Drive', 'ServiceNow'],
];

const capabilityCards = [
    {
        icon: Eye,
        title: 'Trace every AI decision',
        desc: 'Inspect inputs, prompts, model outputs, tool calls, approvals, and final actions on the same canvas.',
    },
    {
        icon: BrainCircuit,
        title: 'Build multi-agent systems',
        desc: 'Route work between AI employees, specialist agents, retrieval steps, and business rules.',
    },
    {
        icon: DatabaseZap,
        title: 'Use your own data',
        desc: 'Connect inboxes, CRMs, docs, stores, databases, APIs, and private knowledge sources.',
    },
    {
        icon: LockKeyhole,
        title: 'Keep humans in control',
        desc: 'Require approvals before sensitive sends, record updates, refunds, publishing, or escalations.',
    },
];

const complexAiItems = [
    'Multi-agent routing for support, sales, content, and operations',
    'RAG-style retrieval from docs, tickets, websites, and CRM records',
    'Cloud model, private model, and offline model options by deployment scope',
    'MCP-ready architecture for connecting future tools and internal systems',
];

const deploymentOptions = [
    {
        icon: Server,
        title: 'Runs where you decide',
        desc: 'Use Dooza-hosted workflows or have a Dooza engineer set up workflows inside your stack.',
    },
    {
        icon: Code2,
        title: 'Code when needed',
        desc: 'Add JavaScript, Python-style logic, webhooks, custom APIs, and structured transformations when visual steps are not enough.',
    },
    {
        icon: RefreshCcw,
        title: 'Move fast, break less',
        desc: 'Re-run single steps, replay data, test branches, review logs, and evaluate AI output before customers see it.',
    },
];

const governanceItems = [
    {
        icon: Users,
        title: 'Human-in-the-loop',
        desc: 'Route risky work to a teammate before publishing, sending, updating, or closing a task.',
    },
    {
        icon: ShieldCheck,
        title: 'Guardrails',
        desc: 'Use structured inputs, output schemas, role permissions, and stop rules to contain AI actions.',
    },
    {
        icon: FileCheck2,
        title: 'Evaluations',
        desc: 'Score output quality, compare workflow runs, and catch regressions before a workflow goes live.',
    },
];

const enterpriseControls = [
    'Git-based control',
    'Isolated environments',
    'Multi-user workflows',
    'Workflow diffs',
    'Role-based permissions',
    'Audit-ready run history',
];

const trustItems = [
    {
        title: 'Access and approval controls',
        desc: 'Role permissions, approval trails, change review, environment separation, and evidence-friendly workflow history.',
    },
    {
        title: 'Privacy-aware workflow design',
        desc: 'Data minimization, deletion workflows, export paths, retention rules, and scoped automation design.',
    },
    {
        title: 'Security review practices',
        desc: 'Workflow patterns that support risk reviews, documentation, access policies, and incident process planning.',
    },
    {
        title: 'Sensitive-workflow safeguards',
        desc: 'Human review, least-privilege access, logging, and deployment scoping for sensitive workflows.',
    },
];

const feedbackLoops = [
    'Re-run one step instead of the entire workflow',
    'Mock or replay data from previous runs',
    'Inspect logs without hunting through tabs',
    'Evaluate AI output against saved examples',
];

const faqData = [
    {
        question: 'What is Dooza Workflow?',
        answer:
            'Dooza Workflow is the automation layer for Dooza AI employees. It helps teams connect tools, run routines, add approvals, inspect reasoning, and move business work across systems.',
    },
    {
        question: 'Is Dooza Workflow the same as Dooza?',
        answer:
            'No. Dooza is the AI employee experience. Dooza Workflow is the visual and programmable automation layer used to connect tools, run routines, and control multi-step processes.',
    },
    {
        question: 'Can technical teams use code?',
        answer:
            'Yes. Dooza Workflow is designed for a visual building experience with deeper code, webhook, API, and data transformation paths when teams need more control.',
    },
    {
        question: 'Can non-technical teams use it?',
        answer:
            'Yes. Operators can start with triggers, AI steps, approvals, and actions. Technical teams can extend the same workflow with custom logic.',
    },
    {
        question: 'Does Dooza claim security certifications?',
        answer:
            'No certification claim is made here. This page describes controls and deployment patterns such as approvals, scoped access, logs, and review workflows.',
    },
];

const featuredTestimonials = testimonials.slice(0, 2);

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dooza Workflow',
        url: pageUrl,
        description: metadata.description,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Dooza',
            url: SITE_URL,
        },
        about: [
            { '@type': 'Thing', name: 'AI workflow automation' },
            { '@type': 'Thing', name: 'Dooza Workflow' },
            ...capabilityCards.map((item) => ({ '@type': 'Thing', name: item.title })),
            ...governanceItems.map((item) => ({ '@type': 'Thing', name: item.title })),
            ...enterpriseControls.map((item) => ({ '@type': 'Thing', name: item })),
        ],
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

function HeroWorkflowCanvas() {
    return (
        <div className="workflow-hero-surface relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 md:h-[440px] md:p-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative md:hidden">
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 backdrop-blur">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                            <Workflow className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-950">Support workflow</div>
                            <div className="text-xs text-slate-500">Triage, review, reply</div>
                        </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Running
                    </div>
                </div>

                <div className="mt-4 grid gap-3">
                    {heroNodes.map((node) => {
                        const Icon = node.icon;
                        return (
                            <div key={node.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-bold text-primary-700">
                                        {node.label}
                                    </span>
                                </div>
                                <h3 className="font-sans text-sm font-bold text-slate-950">{node.title}</h3>
                                <p className="mt-1 text-xs leading-relaxed text-slate-500">{node.meta}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-primary-100 bg-primary-50 p-3 shadow-sm">
                    {['Trace visible', 'Draft ready', 'CRM synced'].map((item) => (
                        <span key={item} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-primary-800 shadow-sm">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <svg className="absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 720 440" aria-hidden="true">
                <path className="workflow-canvas-line" d="M150 148 C238 116 315 116 400 142 C492 170 548 196 610 242" />
                <path className="workflow-canvas-line workflow-canvas-line-delay" d="M412 176 C392 242 386 293 389 334" />
            </svg>

            <div className="absolute left-5 right-5 top-5 hidden items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 backdrop-blur md:flex">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                        <Workflow className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Support workflow</div>
                        <div className="text-xs text-slate-500">Triage, review, reply</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Running
                </div>
            </div>

            {heroNodes.map((node, index) => {
                const Icon = node.icon;
                return (
                    <div
                        key={node.title}
                        className={`workflow-node-live absolute hidden w-[180px] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/80 md:block ${node.position}`}
                        style={{ animationDelay: `${index * 0.22}s` }}
                    >
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                                <Icon className="h-5 w-5" />
                            </div>
                            <span className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-bold text-primary-700">
                                {node.label}
                            </span>
                        </div>
                        <h3 className="font-sans text-sm font-bold text-slate-950">{node.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{node.meta}</p>
                    </div>
                );
            })}

            <div className="absolute bottom-5 left-5 right-5 hidden flex-wrap items-center gap-2 rounded-2xl border border-primary-100 bg-primary-50 p-3 shadow-xl shadow-primary-100/60 md:flex">
                {['Trace visible', 'Draft ready', 'CRM synced'].map((item, index) => (
                    <span key={item} className="workflow-trace-pill rounded-full bg-white px-3 py-1.5 text-xs font-bold text-primary-800 shadow-sm" style={{ animationDelay: `${index * 0.25}s` }}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

const supportTreeSteps = [
    {
        icon: Mail,
        eyebrow: 'Trigger',
        title: 'New ticket',
        detail: 'Email, chat, form, webhook',
    },
    {
        icon: BrainCircuit,
        eyebrow: 'AI',
        title: 'Classify intent',
        detail: 'FAQ, billing, refund risk',
    },
    {
        icon: MessageSquare,
        eyebrow: 'FAQ',
        title: 'Draft answer',
        detail: 'Use approved knowledge',
    },
    {
        icon: DatabaseZap,
        eyebrow: 'Billing',
        title: 'Check records',
        detail: 'Lookup invoice and plan',
    },
    {
        icon: ShieldCheck,
        eyebrow: 'Refund',
        title: 'Ask approval',
        detail: 'Human reviews exceptions',
    },
];

function SupportTreeNode({ icon: Icon, eyebrow, title, detail, className, active = false }) {
    return (
        <div className={`workflow-tree-node absolute w-[210px] rounded-2xl border bg-white p-4 shadow-lg shadow-slate-200/80 ${active ? 'border-primary-200 ring-4 ring-primary-50' : 'border-slate-200'} ${className}`}>
            <div className="mb-3 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${active ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'}`}>
                    <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">{eyebrow}</span>
            </div>
            <h3 className="font-sans text-sm font-extrabold text-slate-950">{title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{detail}</p>
        </div>
    );
}

function CustomerSupportWorkflowTree() {
    return (
        <>
            <div className="grid gap-3 lg:hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                            <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-950">Customer support tree</div>
                            <div className="text-xs text-slate-500">Classify, branch, approve, resolve</div>
                        </div>
                    </div>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Live test run</span>
                </div>

                {supportTreeSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${index === 0 ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">{step.eyebrow}</span>
                                </div>
                                <span className="text-xs font-bold text-slate-300">{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <h3 className="font-sans text-sm font-extrabold text-slate-950">{step.title}</h3>
                            <p className="mt-1 text-xs leading-relaxed text-slate-500">{step.detail}</p>
                        </div>
                    );
                })}

                <div className="flex items-center gap-3 rounded-2xl bg-primary-700 p-4 text-white shadow-lg">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary-200" />
                    <span className="text-sm font-bold">Resolved</span>
                </div>
            </div>

            <div className="hidden overflow-x-auto pb-2 lg:block">
            <div className="workflow-tree-surface relative h-[620px] min-w-[1060px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)] bg-[size:32px_32px]" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1100 620" aria-hidden="true">
                    <path className="workflow-tree-line" d="M205 310 H355" />
                    <path className="workflow-tree-line workflow-tree-line-delay-1" d="M460 310 H540 V150 H650" />
                    <path className="workflow-tree-line workflow-tree-line-delay-2" d="M460 310 H650" />
                    <path className="workflow-tree-line workflow-tree-line-delay-3" d="M460 310 H540 V470 H650" />
                    <path className="workflow-tree-line workflow-tree-line-delay-4" d="M860 150 H930 V310 H940" />
                    <path className="workflow-tree-line workflow-tree-line-delay-4" d="M860 310 H940" />
                    <path className="workflow-tree-line workflow-tree-line-delay-4" d="M860 470 H930 V310 H940" />
                </svg>

            <div className="absolute left-5 top-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 backdrop-blur">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                        <GitBranch className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Customer support tree</div>
                        <div className="text-xs text-slate-500">Classify, branch, approve, resolve</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Live test run</span>
            </div>

            <SupportTreeNode
                icon={Mail}
                eyebrow="Trigger"
                title="New ticket"
                detail="Email, chat, form, webhook"
                className="left-[4%] top-[258px]"
                active
            />
            <SupportTreeNode
                icon={BrainCircuit}
                eyebrow="AI"
                title="Classify intent"
                detail="FAQ, billing, refund risk"
                className="left-[31%] top-[258px]"
            />
            <SupportTreeNode
                icon={MessageSquare}
                eyebrow="FAQ"
                title="Draft answer"
                detail="Use approved knowledge"
                className="left-[62%] top-[98px]"
            />
            <SupportTreeNode
                icon={DatabaseZap}
                eyebrow="Billing"
                title="Check records"
                detail="Lookup invoice and plan"
                className="left-[62%] top-[258px]"
            />
            <SupportTreeNode
                icon={ShieldCheck}
                eyebrow="Refund"
                title="Ask approval"
                detail="Human reviews exceptions"
                className="left-[62%] top-[418px]"
            />
                <div className="workflow-tree-result absolute right-[4%] top-[274px] hidden w-[140px] items-center gap-3 rounded-2xl bg-primary-700 p-4 text-white shadow-xl lg:flex">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary-200" />
                    <span className="text-sm font-bold">Resolved</span>
                </div>
            </div>
        </div>
        </>
    );
}

function IntegrationMarquee() {
    const repeatedRows = integrationRows.map((row) => [...row, ...row]);

    return (
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white py-6 shadow-xl shadow-slate-200/70">
            {repeatedRows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`workflow-marquee-track flex w-max gap-3 px-3 ${rowIndex === 1 ? 'workflow-marquee-reverse mt-3' : ''}`}
                >
                    {row.map((name, index) => (
                        <div
                            key={`${rowIndex}-${name}-${index}`}
                            className="flex min-w-[148px] items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-bold text-slate-700"
                        >
                            {name}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

function CodeWindow() {
    return (
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 font-mono text-sm text-slate-700 shadow-xl shadow-slate-200/60">
            <div className="workflow-code-scan absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-primary-200/35 to-transparent" />
            <div className="relative mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-500">approved-response.js</span>
            </div>
            <div className="relative space-y-2">
                <p><span className="text-primary-700">trigger</span>: new_support_reply</p>
                <p><span className="text-sky-700">ai_step</span>: classify_intent(reply)</p>
                <p><span className="text-amber-700">guardrail</span>: require_schema(output)</p>
                <p><span className="text-primary-700">if</span>: output.risk === "high"</p>
                <p className="pl-4">approval.request("support_lead")</p>
                <p><span className="text-primary-700">else</span>:</p>
                <p className="pl-4">crm.update(customer.id, summary)</p>
                <p className="pl-4">slack.post(run.report)</p>
            </div>
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
            <Navbar signupUrl={workflowSignupUrl} loginUrl={workflowSigninUrl} showIndustry />
            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]">
                        <div className="hero-entrance">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                Dooza Workflow
                            </div>
                            <h1 className="mb-7 max-w-4xl font-serif text-4xl font-extrabold leading-[1.04] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                AI agents and workflows you can see and control
                            </h1>
                            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                Build visually, extend with code, connect to business tools, and trace every AI decision before it becomes action.
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <a
                                    href={workflowSignupUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-xl sm:w-auto sm:px-7"
                                >
                                    Get started for free <ArrowRight className="h-4 w-4" />
                                </a>
                                <BookDemoButton source="workflow_hero_sales" variant="secondary" size="lg">
                                    Talk to sales
                                </BookDemoButton>
                            </div>

                            <div className="mt-10 grid max-w-2xl gap-3 rounded-3xl border border-white/80 bg-white/75 p-3 shadow-sm backdrop-blur sm:grid-cols-3">
                                {heroStats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl bg-white px-3 py-4 text-center shadow-sm">
                                        <div className="text-xl font-extrabold text-slate-950 md:text-2xl">{stat.value}</div>
                                        <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hero-entrance-right">
                            <HeroWorkflowCanvas />
                        </div>
                    </div>
                </section>

                <VideoSection />

                <section className="border-y border-slate-200 bg-white px-4 py-8">
                    <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
                        {teamUseCases.map((item) => (
                            <div key={item.team} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                                <p className="mb-2 text-sm font-bold text-primary-700">{item.team} can</p>
                                <h2 className="font-sans text-xl font-extrabold text-slate-950">{item.action}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                        <div>
                            <span className="section-label mb-4 block">Customer support</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                A workflow tree your team can follow
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                Route support tickets by intent, pull the right context, pause risky cases for approval, and keep the final action visible.
                            </p>
                            <div className="grid gap-3">
                                {['FAQ requests get approved answers', 'Billing questions check records first', 'Refund exceptions ask a human'].map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <CustomerSupportWorkflowTree />
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div>
                            <span className="section-label mb-4 block">Integrations</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Plug AI into your data and the tools your team already uses
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                Start with pre-built app steps. Use custom API calls and webhooks when you need to reach internal systems, legacy software, or private databases.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-primary-200 hover:text-primary-800"
                            >
                                Get integration help <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <IntegrationMarquee />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 max-w-3xl">
                            <span className="section-label mb-4 block">AI agents</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Build AI agents you can actually follow
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                Connect any model, inspect the reasoning path, and keep sensitive actions behind approvals.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {capabilityCards.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-sans text-xl font-extrabold text-slate-950">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 text-slate-900 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                        <div>
                            <span className="section-label mb-5 block">
                                Deep automation
                            </span>
                            <h2 className="mb-6 max-w-2xl font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
                                Build complex AI without getting boxed in
                            </h2>
                            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
                                Dooza Workflow is built for practical business automation: AI employees, retrieval, approvals, code steps, APIs, and deployment paths that can grow with your team.
                            </p>
                            <div className="grid gap-3">
                                {complexAiItems.map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/60">
                            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                        <Boxes className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-950">AI release workflow</div>
                                        <div className="text-xs text-slate-500">testing, rollback, notification</div>
                                    </div>
                                </div>
                                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">Simulated run</span>
                            </div>
                            <div className="grid gap-3">
                                {[
                                    ['Update detected', 'completed'],
                                    ['Running custom unit testing', 'running'],
                                    ['Custom unit testing failed', 'failed'],
                                    ['Update rolled back automatically', 'completed'],
                                    ['IT team notified of new ticket', 'completed'],
                                ].map(([label, state], index) => (
                                    <div key={label} className="workflow-rise flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4" style={{ animationDelay: `${index * 0.18}s` }}>
                                        <span className={`h-3 w-3 rounded-full ${state === 'failed' ? 'bg-rose-500' : state === 'running' ? 'bg-amber-500' : 'bg-primary-600'}`} />
                                        <span className="flex-1 text-sm font-semibold text-slate-700">{label}</span>
                                        <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{state}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
                        {deploymentOptions.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h2 className="font-sans text-2xl font-extrabold text-slate-950">{item.title}</h2>
                                    <p className="mt-4 leading-relaxed text-slate-600">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                        <div>
                            <span className="section-label mb-4 block">Control</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Code when you need it, UI when you do not
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                Operators can build on the canvas. Technical teams can add code, APIs, schema validation, and transformations without leaving the workflow.
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {feedbackLoops.map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                        <Zap className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <CodeWindow />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                            <div>
                                <span className="section-label mb-4 block">Enterprise-ready</span>
                                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                    Governance for teams that need control before scale
                                </h2>
                            </div>
                            <p className="text-lg leading-relaxed text-slate-600">
                                Give every team a shared way to retrieve data, transform it, approve risky actions, and keep a clean record of what changed.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                        <GitBranch className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-sans text-xl font-extrabold text-slate-950">Team workflow controls</h3>
                                        <p className="text-sm text-slate-500">Review changes before they affect production.</p>
                                    </div>
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {enterpriseControls.map((item) => (
                                        <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                                            <span className="text-sm font-bold text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                {governanceItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="font-sans text-lg font-extrabold text-slate-950">{item.title}</h3>
                                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 max-w-3xl">
                            <span className="section-label mb-4 block">Trust and compliance</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Compliance-ready workflow patterns
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                Use Dooza Workflow to design approval, logging, privacy, and evidence flows that support formal security and privacy reviews.
                            </p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            {trustItems.map((item) => (
                                <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                                    <div className="mb-5 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                                        Trust control
                                    </div>
                                    <h3 className="font-sans text-xl font-extrabold text-slate-950">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <span className="section-label mb-4 block">Results</span>
                                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                    Teams use Dooza to turn AI into operating leverage
                                </h2>
                            </div>
                            <Link href="/blog/hatrio-ai-canada-partnership" className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-900">
                                Read case studies <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {featuredTestimonials.map((item) => (
                                <div key={item.author} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                                    <p className="text-lg leading-relaxed text-slate-700">"{item.quote}"</p>
                                    <div className="mt-7 flex items-center gap-3">
                                        {item.logo ? (
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white">
                                                <Image src={item.logo} alt={item.author} width={44} height={44} className="object-contain p-1" />
                                            </div>
                                        ) : (
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-sm font-bold text-white">
                                                {item.initials}
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-bold text-slate-950">{item.author}</div>
                                            <div className="text-sm text-slate-500">{item.role}</div>
                                            {item.linkedin && (
                                                <a
                                                    href={item.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary-600 transition-colors hover:text-primary-700"
                                                >
                                                    LinkedIn <ArrowUpRight className="h-3 w-3" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-warm px-4 py-20 text-slate-900 md:py-28">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/80 via-warm to-warm" />
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                            <Workflow className="h-8 w-8" />
                        </div>
                        <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
                            Build the workflow your AI employees can run
                        </h2>
                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                            Start with one process. Connect the data, add the agent, set the guardrails, and make every run visible.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href={workflowSignupUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
                            >
                                Get started for free <ArrowRight className="h-4 w-4" />
                            </a>
                            <BookDemoButton source="workflow_final_sales" variant="secondary" size="lg">
                                Talk to sales
                            </BookDemoButton>
                            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">
                                Explore Dooza <Play className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 px-4 py-20 text-slate-900 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 text-center">
                            <span className="section-label mb-4 block">FAQ</span>
                            <h2 className="font-serif text-3xl font-bold md:text-5xl">Dooza Workflow questions</h2>
                        </div>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
