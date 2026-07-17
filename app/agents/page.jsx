import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    CheckCircle2,
    DatabaseZap,
    GitBranch,
    Mail,
    Megaphone,
    MessageCircle,
    MessageSquare,
    Phone,
    ShieldCheck,
    Sparkles,
    Target,
    Workflow,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import AgentPromptBox from './AgentPromptBox';
import FAQAccordion from '@/components/FAQAccordion';
import { WORKFLOW_SIGNIN_URL, WORKFLOW_SIGNUP_URL } from '@/lib/links';
import { SITE_URL } from '@/lib/site';
import { testimonials } from '@/lib/homeData';

const pageUrl = `${SITE_URL}/agents`;
const workflowSignupUrl = WORKFLOW_SIGNUP_URL;
const workflowSigninUrl = WORKFLOW_SIGNIN_URL;

export const metadata = {
    title: {
        absolute: 'Dooza Agents | AI Agent Builder for Marketing, Sales & Support',
    },
    description:
        'Describe the agent you want and Dooza Agents builds it — AI agents that automate your marketing, sales, and support with approvals, traces, and governance controls.',
    keywords: [
        'Dooza Agents',
        'AI agent builder',
        'AI agents for marketing',
        'AI sales agent',
        'AI customer support agent',
        'WhatsApp AI agent',
        'AI chatbot',
        'text to agent',
        'human in the loop AI',
        'business process automation',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Dooza Agents | AI Agent Builder for Marketing, Sales & Support',
        description:
            'Describe the agent you want in plain language. Dooza builds it with you — connected to your tools, with approvals on everything sensitive.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Agents' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Agents | AI Agent Builder for Marketing, Sales & Support',
        description:
            'AI agents for marketing, sales, and support — built from a plain-language brief, with approvals on everything sensitive.',
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
        team: 'Customer Support',
        action: 'Resolve tickets around the clock',
        detail: 'Classify intent, draft on-brand replies, check order records, and escalate the sensitive cases to a human.',
    },
    {
        team: 'Sales',
        action: 'Get qualified leads daily',
        detail: 'Research prospects, qualify inbound leads in minutes, follow up automatically, and book the meeting.',
    },
    {
        team: 'Marketing',
        action: 'Ship content on schedule',
        detail: 'Repurpose long-form into posts, publish SEO content weekly, and keep every channel active.',
    },
    {
        team: 'Ecommerce',
        action: 'Recover revenue automatically',
        detail: 'Win back abandoned carts, answer product questions instantly, and follow up on every missed order.',
    },
];

const prebuiltAgents = [
    {
        title: 'Abandoned cart recovery agent',
        detail: 'Watches your store, spots abandoned carts, and wins customers back with a personal, on-brand email at the right moment.',
        steps: ['Cart abandoned', 'Customer context pulled', 'Personal email drafted', 'Sent or held for approval'],
    },
    {
        title: 'Daily qualified leads agent',
        detail: 'Researches your ideal customers every morning, qualifies them against your criteria, and delivers a ready-to-work list.',
        steps: ['ICP defined once', 'Prospects researched daily', 'Leads scored + qualified', 'List delivered to CRM'],
    },
    {
        title: 'YouTube to LinkedIn agent',
        detail: 'Turns every video you publish into platform-native LinkedIn posts in your voice — drafted, scheduled, and reported.',
        steps: ['New video detected', 'Transcript analyzed', 'Posts drafted in your voice', 'Scheduled after approval'],
    },
];

const marketingRunItems = [
    ['New blog post detected', 'completed'],
    ['3 LinkedIn posts drafted', 'completed'],
    ['5 X posts drafted', 'completed'],
    ['Newsletter section drafted', 'running'],
    ['Scheduled after your approval', 'queued'],
];

const salesLeads = [
    { who: 'Head of Ops, logistics company', score: '92', status: 'Meeting booked' },
    { who: 'Founder, DTC skincare brand', score: '87', status: 'Follow-up sent' },
    { who: 'VP Support, SaaS scale-up', score: '81', status: 'Draft for review' },
];

const faqData = [
    {
        question: 'What is Dooza Agents?',
        answer:
            'Dooza Agents is the automation layer for Dooza AI employees. It helps teams connect tools, run routines, add approvals, inspect reasoning, and move business work across systems.',
    },
    {
        question: 'Is Dooza Agents the same as Dooza?',
        answer:
            'No. Dooza is the AI employee experience. Dooza Agents is the visual and programmable automation layer used to connect tools, run routines, and control multi-step processes.',
    },
    {
        question: 'Is Dooza Agents just a chatbot builder?',
        answer:
            'No. Chat is one channel. Dooza Agents run multi-step work — research, drafting, follow-ups, approvals, and record updates across your tools — and use chat, email, and WhatsApp as the places they talk to customers.',
    },
    {
        question: 'Can technical teams use code?',
        answer:
            'Yes. Dooza Agents is designed for a visual building experience with deeper code, webhook, API, and data transformation paths when teams need more control.',
    },
    {
        question: 'Can non-technical teams use it?',
        answer:
            'Yes. Operators can start with triggers, AI steps, approvals, and actions. Technical teams can extend the same workflow with custom logic.',
    },
    {
        question: 'What happens after I describe my agent on this page?',
        answer:
            'Your agent brief is saved with your Dooza account context. Sign up free and the Dooza team uses your brief to set up the agent with you — connected to your tools, in draft-and-approve mode until it earns autonomy.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dooza Agents',
        url: pageUrl,
        description: metadata.description,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Dooza',
            url: SITE_URL,
        },
        about: [
            { '@type': 'Thing', name: 'AI agent builder' },
            { '@type': 'Thing', name: 'Dooza Agents' },
            { '@type': 'Thing', name: 'Marketing AI agent' },
            { '@type': 'Thing', name: 'Sales AI agent' },
            { '@type': 'Thing', name: 'Customer support AI agent' },
            { '@type': 'Thing', name: 'Live chat and AI chatbot' },
            { '@type': 'Thing', name: 'WhatsApp AI agent' },
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
            { '@type': 'ListItem', position: 2, name: 'Dooza Agents', item: pageUrl },
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

function MarketingRunCard() {
    return (
        <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/60">
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Megaphone className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Content repurposing run</div>
                        <div className="text-xs text-slate-500">one blog post, every channel</div>
                    </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">This morning</span>
            </div>
            <div className="grid gap-3">
                {marketingRunItems.map(([label, state], index) => (
                    <div key={label} className="workflow-rise flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4" style={{ animationDelay: `${index * 0.18}s` }}>
                        <span className={`h-3 w-3 rounded-full ${state === 'running' ? 'bg-amber-500' : state === 'queued' ? 'bg-slate-300' : 'bg-primary-600'}`} />
                        <span className="flex-1 text-sm font-semibold text-slate-700">{label}</span>
                        <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{state}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SalesLeadCard() {
    return (
        <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/60">
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Target className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Morning lead drop</div>
                        <div className="text-xs text-slate-500">researched and scored overnight</div>
                    </div>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">Synced to CRM</span>
            </div>
            <div className="grid gap-3">
                {salesLeads.map((lead, index) => (
                    <div key={lead.who} className="workflow-rise flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4" style={{ animationDelay: `${index * 0.18}s` }}>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-sm font-extrabold text-white">
                            {lead.score}
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-bold text-slate-800">{lead.who}</p>
                            <p className="text-xs font-semibold text-slate-500">ICP match score {lead.score}/100</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary-700 shadow-sm">{lead.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function LiveChatCard() {
    return (
        <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/60">
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Website chat</div>
                        <div className="text-xs text-slate-500">answers from your knowledge</div>
                    </div>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Online
                </span>
            </div>
            <div className="grid gap-3">
                <div className="workflow-rise max-w-[85%] rounded-2xl rounded-bl-md border border-slate-100 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-700">Do you offer annual billing? And can I move my existing data over?</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-400">Visitor · 2:14 pm</p>
                </div>
                <div className="workflow-rise ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary-700 p-4 text-white" style={{ animationDelay: '0.18s' }}>
                    <p className="text-sm font-semibold">Yes — annual billing saves two months, and migration is included on every plan. Want me to set up a walkthrough?</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-primary-200">Dooza agent · 2:14 pm</p>
                </div>
                <div className="workflow-rise flex items-center gap-3 rounded-2xl border border-primary-100 bg-primary-50 p-4" style={{ animationDelay: '0.36s' }}>
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary-700" />
                    <span className="text-sm font-semibold text-primary-800">Pricing negotiation detected — handed to a human with the full conversation attached.</span>
                </div>
            </div>
        </div>
    );
}

function WhatsAppCard() {
    return (
        <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/60">
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">WhatsApp</div>
                        <div className="text-xs text-slate-500">same agent, customer&apos;s favorite channel</div>
                    </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Replied in 8s</span>
            </div>
            <div className="grid gap-3">
                <div className="workflow-rise max-w-[85%] rounded-2xl rounded-bl-md border border-slate-100 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-700">Hi! My order #4821 hasn&apos;t arrived yet — can you check?</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-400">Customer · 9:02 pm</p>
                </div>
                <div className="workflow-rise ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-emerald-600 p-4 text-white" style={{ animationDelay: '0.18s' }}>
                    <p className="text-sm font-semibold">Found it — order #4821 cleared customs today and is out for delivery tomorrow. I&apos;ll message you the moment it&apos;s delivered.</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-emerald-100">Dooza agent · 9:02 pm</p>
                </div>
                <div className="workflow-rise flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4" style={{ animationDelay: '0.36s' }}>
                    <MessageSquare className="h-5 w-5 shrink-0 text-primary-700" />
                    <span className="text-sm font-semibold text-slate-700">Logged to the same inbox as email, chat, and DMs — one thread per customer.</span>
                </div>
            </div>
        </div>
    );
}

export default function AgentsPage() {
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
                    <div className="relative z-10 mx-auto max-w-7xl">
                        <div className="hero-entrance mx-auto flex max-w-4xl flex-col items-center text-center">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                Dooza Agents
                            </div>
                            <h1 className="mb-6 font-serif text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-950 md:text-6xl">
                                AI agents that automate your marketing, sales, and support
                            </h1>
                            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                Describe the agent you want in plain language. Dooza builds it with you — connected to your tools, with approvals on everything sensitive.
                            </p>
                            <div className="mb-8 w-full max-w-3xl">
                                <AgentPromptBox signupUrl={workflowSignupUrl} />
                            </div>
                            <div className="flex flex-col items-center gap-4 sm:flex-row">
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

                            <div className="mt-10 grid w-full max-w-2xl gap-3 rounded-3xl border border-white/80 bg-white/75 p-3 shadow-sm backdrop-blur sm:grid-cols-3">
                                {heroStats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl bg-white px-3 py-4 text-center shadow-sm">
                                        <div className="text-xl font-extrabold text-slate-950 md:text-2xl">{stat.value}</div>
                                        <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hero-entrance-right mx-auto mt-16 max-w-5xl">
                            <HeroWorkflowCanvas />
                        </div>
                    </div>
                </section>

                <section className="border-y border-slate-200 bg-white px-4 py-10">
                    <div className="mx-auto max-w-7xl">
                        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            Teams running on Dooza Agents
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                            {testimonials.map((t) => (
                                <div key={t.author} className="flex items-center gap-2 opacity-70 transition hover:opacity-100">
                                    <Image src={t.logo} alt={t.author} width={28} height={28} className="h-7 w-7 rounded-full object-contain" />
                                    <span className="text-sm font-bold text-slate-600">{t.author}</span>
                                </div>
                            ))}
                            {['FIN', 'Pawan'].map((name) => (
                                <div key={name} className="flex items-center gap-2 opacity-70 transition hover:opacity-100">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[11px] font-extrabold text-slate-500">
                                        {name.slice(0, 1)}
                                    </span>
                                    <span className="text-sm font-bold text-slate-600">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 max-w-3xl">
                            <span className="section-label mb-4 block">Pre-built agents</span>
                            <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Start from an agent that already works
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                Pick a proven agent, connect your tools, and go live in days — or describe your own above and we&apos;ll build it with you.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {prebuiltAgents.map((agent) => (
                                <div key={agent.title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                    <h3 className="mb-3 font-sans text-xl font-extrabold text-slate-950">{agent.title}</h3>
                                    <p className="mb-5 text-sm leading-relaxed text-slate-600">{agent.detail}</p>
                                    <div className="mb-6 grid gap-2">
                                        {agent.steps.map((step, stepIndex) => (
                                            <div key={step} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-700 text-[11px] font-bold text-white">{stepIndex + 1}</span>
                                                <span className="text-xs font-semibold text-slate-700">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href={workflowSignupUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary-700 transition hover:text-primary-800"
                                    >
                                        Start with this agent <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-24">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div>
                            <span className="section-label mb-4 block">Text to agent</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Type what you need. Get a working agent.
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                No canvas to learn, no flowchart to draw. Describe the job in plain language — Dooza turns it into a connected agent with triggers, tools, and approval rules, and the team tunes it with you before it goes live.
                            </p>
                            <div className="grid gap-3">
                                {[
                                    'Plain-language brief becomes a connected agent',
                                    'Your tools wired in: inbox, store, CRM, calendar, socials',
                                    'Draft-and-approve mode until accuracy is proven',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-warm p-4">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-[28px] border border-slate-200 bg-warm p-6 shadow-xl shadow-slate-200/60">
                            <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-400">You type</p>
                                <p className="text-sm font-semibold text-slate-800">&ldquo;Follow up every lead from my website within 5 minutes, and book qualified ones into my calendar.&rdquo;</p>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <ArrowRight className="h-5 w-5 rotate-90 text-primary-600" />
                            </div>
                            <div className="rounded-2xl border border-primary-100 bg-white p-4">
                                <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-primary-600">Dooza builds</p>
                                <div className="grid gap-2">
                                    {['Trigger: new website lead', 'Enrich + qualify against your ICP', 'Personal follow-up in your voice', 'Booked into your calendar', 'Everything logged to your CRM'].map((step, i) => (
                                        <div key={step} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-700 text-[11px] font-bold text-white">{i + 1}</span>
                                            <span className="text-xs font-semibold text-slate-700">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                        <div>
                            <span className="section-label mb-4 block">Marketing AI agent</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                A marketing agent that ships, not just suggests
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                Give it your voice, your channels, and your calendar. It researches, drafts, repurposes, and publishes on schedule — and you approve anything before it goes public.
                            </p>
                            <div className="grid gap-3">
                                {[
                                    'Turns one long-form piece into a week of channel-native posts',
                                    'Keeps SEO content shipping on a fixed cadence',
                                    'Reports what went out and how it performed',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <MarketingRunCard />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
                        <div className="order-2 lg:order-1">
                            <SalesLeadCard />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="section-label mb-4 block">Sales AI agent</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Wake up to qualified leads, every day
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                It researches prospects that match your ICP overnight, scores them against your criteria, writes the first touch in your voice, and books the meeting.
                            </p>
                            <div className="grid gap-3">
                                {[
                                    'Prospect research and enrichment on autopilot',
                                    'Follow-ups that never slip through the cracks',
                                    'Meetings booked into your calendar, synced to CRM',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                        <div>
                            <span className="section-label mb-4 block">Customer support AI agent</span>
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

                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
                        <div className="order-2 lg:order-1">
                            <LiveChatCard />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="section-label mb-4 block">Live chat + AI chatbot</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Answer every visitor in seconds, hand off like a pro
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                A chat agent trained on your knowledge answers instantly, captures the lead, and hands complex conversations to a human — with the full context attached.
                            </p>
                            <div className="grid gap-3">
                                {[
                                    'Trained on your docs, policies, and past tickets',
                                    'Captures leads while it answers questions',
                                    'Human handoff with the whole conversation attached',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                        <div>
                            <span className="section-label mb-4 block">WhatsApp AI agent</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Be there on WhatsApp, around the clock
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                Answer order, booking, and product questions where your customers actually are — from the same agent that runs your email and chat, in one shared inbox.
                            </p>
                            <div className="grid gap-3">
                                {[
                                    'Instant replies on WhatsApp, day and night',
                                    'One inbox across WhatsApp, email, chat, and DMs',
                                    'Sensitive replies held for human approval',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <span className="text-sm font-semibold leading-relaxed text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <WhatsAppCard />
                    </div>
                </section>

                <section className="bg-slate-50 px-4 py-20 text-slate-900 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-10 text-center">
                            <span className="section-label mb-4 block">FAQ</span>
                            <h2 className="font-serif text-3xl font-bold md:text-5xl">Dooza Agents questions</h2>
                        </div>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:py-24">
                    <div className="mx-auto max-w-4xl rounded-[32px] border border-primary-100 bg-warm p-8 text-center shadow-xl shadow-primary-100/40 md:p-12">
                        <span className="section-label mb-4 block">Pricing</span>
                        <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                            Simple pricing. Agents that pay for themselves.
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
                            Start free, add agents as they earn their keep, and get concierge onboarding on every plan — no per-resolution meters, no per-seat surprises.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
                            >
                                See pricing <ArrowRight className="h-4 w-4" />
                            </Link>
                            <BookDemoButton source="agents_pricing" variant="secondary" size="lg">
                                Talk to sales
                            </BookDemoButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
