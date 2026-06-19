'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Bot,
    CheckCircle2,
    ChevronDown,
    ClipboardCheck,
    Copy,
    FileText,
    GitBranch,
    Layers3,
    ListChecks,
    Rocket,
    Search,
    Settings2,
    ShieldCheck,
    Sparkles,
    Workflow,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import { automationSeoPages } from '@/lib/seoAutomationPages';

const relatedIcons = [Workflow, Search, FileText, Layers3, Rocket];

function SectionHeader({ eyebrow, title, description, dark = false }) {
    return (
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <span className="section-label mb-4 block text-primary-600">{eyebrow}</span>
            <h2 className={`mb-5 font-serif text-3xl font-bold leading-tight md:text-5xl ${dark ? 'text-white' : 'text-slate-950'}`}>
                {title}
            </h2>
            {description && (
                <p className={`text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {description}
                </p>
            )}
        </div>
    );
}

function buildPlanText(page, selected, result, controlPlan) {
    const selectedLines = Object.entries(selected)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    const weekPlan = result.weekPlan?.map((item, index) => `${index + 1}. ${item}`).join('\n') || '';

    return [
        page.toolTitle,
        '',
        'Inputs:',
        selectedLines,
        '',
        `Recommended workflow: ${result.workflow}`,
        result.summary,
        '',
        `Trigger: ${result.trigger}`,
        `AI action: ${result.action}`,
        `Connected apps: ${result.apps?.join(', ')}`,
        `Approval rule: ${controlPlan.approval || result.approval}`,
        `Final output: ${result.output}`,
        `Dooza fit: ${result.employee}`,
        `Setup complexity: ${result.effort}`,
        '',
        'First week plan:',
        weekPlan,
    ].filter(Boolean).join('\n');
}

function ToolSelect({ field, value, onChange }) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-extrabold text-slate-900">{field.label}</span>
            <div className="relative">
                <select
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="min-h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-bold text-slate-950 shadow-sm outline-none transition hover:border-primary-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
                >
                    {field.options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <ChevronDown className="h-4 w-4" />
                </div>
            </div>
            {field.helper && <span className="mt-2 block text-xs font-semibold leading-relaxed text-slate-500">{field.helper}</span>}
        </label>
    );
}

function FreeAutomationTool({ page }) {
    const [selected, setSelected] = useState(() => (
        Object.fromEntries(page.toolFields.map((field) => [field.id, field.options[0]]))
    ));
    const [copied, setCopied] = useState(false);

    const primaryField = page.toolFields[0];
    const controlField = page.toolFields[1];
    const primaryChoice = selected[primaryField.id];
    const controlChoice = controlField ? selected[controlField.id] : undefined;
    const result = page.toolResults?.[primaryChoice] || Object.values(page.toolResults || {})[0];
    const controlPlan = page.controlPlans?.[controlChoice] || {};
    const planText = useMemo(
        () => buildPlanText(page, selected, result, controlPlan),
        [controlPlan, page, result, selected],
    );

    async function copyPlan() {
        try {
            await navigator.clipboard.writeText(planText);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch (error) {
            setCopied(false);
        }
    }

    return (
        <div className="rounded-[28px] border border-primary-100 bg-white/95 p-4 shadow-2xl shadow-primary-100/50 backdrop-blur md:p-6">
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <span className="section-label mb-2 block text-primary-600">Free planner</span>
                    <h2 className="font-serif text-2xl font-bold leading-tight text-slate-950 md:text-[1.65rem]">{page.toolTitle}</h2>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-xs font-extrabold text-primary-800">
                    <Workflow className="h-4 w-4" />
                    Live workflow output
                </div>
            </div>

            <div className="mt-4 grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
                <div className="space-y-4">
                    {page.toolFields.map((field) => (
                        <ToolSelect
                            key={field.id}
                            field={field}
                            value={selected[field.id]}
                            onChange={(value) => setSelected((current) => ({ ...current, [field.id]: value }))}
                        />
                    ))}

                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-slate-950">
                            <Settings2 className="h-4 w-4 text-primary-700" />
                            What changes when you select
                        </div>
                        <div className="space-y-2">
                            {page.toolBullets.map((item) => (
                                <div key={item} className="flex items-start gap-2">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                                    <span className="text-xs font-semibold leading-relaxed text-slate-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-slate-950 md:p-5">
                    <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-sm font-extrabold text-primary-700">
                                <Sparkles className="h-4 w-4" />
                                Generated workflow
                            </div>
                            <h3 className="text-xl font-extrabold leading-tight text-slate-950 md:text-2xl">{result.workflow}</h3>
                        </div>
                        <button
                            type="button"
                            onClick={copyPlan}
                            className="inline-flex shrink-0 self-start items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:border-primary-200 hover:bg-primary-50 sm:justify-self-end"
                        >
                            {copied ? <ClipboardCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            {copied ? 'Copied' : 'Copy plan'}
                        </button>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{result.summary}</p>

                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="space-y-3">
                            {[
                                ['Trigger', result.trigger],
                                ['AI action', result.action],
                                ['Output', result.output],
                            ].map(([label, value], index) => (
                                <div key={label} className="grid gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0 sm:grid-cols-[5.5rem_1fr]">
                                    <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-50 text-primary-700">{index + 1}</span>
                                        {label}
                                    </div>
                                    <div className="text-sm font-bold leading-relaxed text-slate-900">{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                        {[
                            ['Apps', result.apps?.join(', ')],
                            ['Approval', controlPlan.approval || result.approval],
                            ['Setup', result.effort],
                        ].map(([label, value]) => (
                            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                                <div className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary-700">{label}</div>
                                <div className="mt-2 text-xs font-semibold leading-relaxed text-slate-600">{value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex items-start gap-2 rounded-2xl border border-primary-100 bg-white p-3">
                        <Settings2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                        <p className="text-xs font-semibold leading-relaxed text-slate-600">
                            Copy includes the rollout checklist, apps, approval rule, and Dooza Workflow build notes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WorkflowStrip() {
    const items = [
        { label: 'Problem', icon: Search },
        { label: 'Generated plan', icon: ListChecks },
        { label: 'Workflow build', icon: GitBranch },
        { label: 'Dooza CTA', icon: Bot },
    ];

    return (
        <div className="grid gap-3 md:grid-cols-4">
            {items.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={item.label} className="relative rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                            <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">Step {index + 1}</div>
                        <div className="mt-1 text-lg font-extrabold text-slate-950">{item.label}</div>
                    </div>
                );
            })}
        </div>
    );
}

function RelatedPages({ currentSlug }) {
    const pages = Object.values(automationSeoPages).filter((item) => item.slug !== currentSlug);

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {pages.map((item, index) => {
                const Icon = relatedIcons[index % relatedIcons.length];
                return (
                    <Link
                        key={item.slug}
                        href={`/${item.slug}`}
                        className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="font-extrabold text-slate-950 group-hover:text-primary-700">{item.title}</div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    {item.heroText}
                                </p>
                                <div className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-primary-700">
                                    Open planner <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default function SeoAutomationPage({ page }) {
    const faqData = useMemo(() => page.faq, [page.faq]);

    return (
        <BookingModalProvider>
            <Navbar showLogin={false} showIndustry ctaType="demo" ctaSource={`${page.slug}_nav`} />

            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden px-4 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-100/50 blur-3xl" />
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl">
                        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div>
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                    <Sparkles className="h-4 w-4" />
                                    {page.eyebrow}
                                </div>
                                <h1 className="max-w-4xl font-serif text-4xl font-extrabold leading-[1.04] tracking-tight text-slate-950 md:text-6xl lg:text-[4rem]">
                                    {page.heroTitle}
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                                    {page.heroText}
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                                <BookDemoButton source={`${page.slug}_hero`} variant="primary" size="xl">
                                    Book a Demo
                                </BookDemoButton>
                                <Link
                                    href="/workflow"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50"
                                >
                                    See Dooza Workflow <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <FreeAutomationTool page={page} />
                    </div>
                </section>

                <section className="border-y border-slate-200 bg-white px-4 py-12 md:px-8">
                    <div className="mx-auto max-w-7xl">
                        <WorkflowStrip />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="Workflow plan"
                            title="What the free tool gives you"
                            description="Each answer turns into a concrete automation plan with a trigger, action, app stack, approval rule, and next step."
                        />
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            {page.steps.map((step, index) => (
                                <div key={step} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-700 text-sm font-extrabold text-white">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-semibold leading-relaxed text-slate-700">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
                        <div>
                            <span className="section-label mb-4 block text-primary-600">Use cases</span>
                            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Practical workflows this can lead into
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                The generated plan is designed to be simple enough to explain, then strong enough to demo in Dooza Workflow.
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {page.useCases.map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                    <span className="text-sm font-bold leading-relaxed text-slate-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-950 px-4 py-20 text-white md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="Trust and control"
                            title="Built for automation your team can actually trust"
                            description="Dooza Workflow keeps every step visible: what triggered, what AI decided, which apps changed, who approved it, and what happened next."
                            dark
                        />
                        <div className="grid gap-5 md:grid-cols-3">
                            {page.proofPoints.map((item) => (
                                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <ShieldCheck className="mb-5 h-7 w-7 text-primary-300" />
                                    <p className="font-semibold leading-relaxed text-slate-200">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="More planners"
                            title="Plan the next workflow"
                            description="Pick another area of the business and generate a practical workflow plan with apps, approvals, and rollout steps."
                        />
                        <RelatedPages currentSlug={page.slug} />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-4xl">
                        <SectionHeader eyebrow="FAQ" title="Questions this page answers" />
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-5xl rounded-[32px] bg-slate-950 p-8 text-center text-white shadow-2xl shadow-slate-300/60 md:p-12">
                        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white">
                            <Rocket className="h-7 w-7" />
                        </div>
                        <h2 className="mx-auto mb-4 max-w-3xl font-serif text-3xl font-bold text-white md:text-5xl">{page.ctaTitle}</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">{page.ctaText}</p>
                        <BookDemoButton source={`${page.slug}_bottom`} variant="primary" size="xl">
                            Book a Demo
                        </BookDemoButton>
                    </div>
                </section>
            </main>

            <Footer />
        </BookingModalProvider>
    );
}
