'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Bot,
    Calculator,
    CheckCircle2,
    ClipboardCheck,
    Copy,
    FileText,
    GitBranch,
    HelpCircle,
    Layers3,
    ListChecks,
    MousePointerClick,
    PencilLine,
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

function toNumber(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function formatNumber(value, digits = 0) {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: digits,
        minimumFractionDigits: digits,
    }).format(value);
}

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value);
}

function getToolInput(page, inputs, id, fallback = '') {
    const field = page.toolInputs?.find((item) => item.id === id);
    return inputs[id] ?? field?.defaultValue ?? fallback;
}

function calculateToolOutput(page, selected, inputs, result, controlPlan) {
    const automationRate = page.automationRates?.[selected.control]
        || page.automationRates?.[selected.risk]
        || page.automationRates?.[selected.offer]
        || 0.55;

    if (page.toolType === 'agency-offer') {
        const prospects = toNumber(getToolInput(page, inputs, 'prospectsPerMonth'), 20);
        const closeRate = toNumber(getToolInput(page, inputs, 'closeRate'), 15);
        const setupFee = toNumber(getToolInput(page, inputs, 'setupFee'), 1500);
        const retainer = toNumber(getToolInput(page, inputs, 'monthlyRetainer'), 750);
        const expectedClients = prospects * (closeRate / 100);
        const firstMonthRevenue = expectedClients * (setupFee + retainer);
        const recurringRevenue = expectedClients * retainer;

        return {
            primaryLabel: 'Expected new clients/mo',
            primaryValue: formatNumber(expectedClients, 1),
            secondaryLabel: 'First-month pipeline value',
            secondaryValue: formatCurrency(firstMonthRevenue),
            tertiaryLabel: 'Recurring monthly value',
            tertiaryValue: formatCurrency(recurringRevenue),
            insight:
                `${formatNumber(prospects)} qualified prospects at ${formatNumber(closeRate)}% close rate creates about ${formatNumber(expectedClients, 1)} new clients per month if the offer is positioned clearly.`,
        };
    }

    if (page.toolType === 'blog-workflow') {
        const posts = toNumber(getToolInput(page, inputs, 'postsPerMonth'), 4);
        const draftHours = toNumber(getToolInput(page, inputs, 'researchDraftHours'), 4);
        const editHours = toNumber(getToolInput(page, inputs, 'editHours'), 1.5);
        const hourlyCost = toNumber(getToolInput(page, inputs, 'hourlyCost'), 35);
        const manualHours = posts * (draftHours + editHours);
        const savedHours = manualHours * automationRate;
        const reviewHours = manualHours - savedHours;

        return {
            primaryLabel: 'Estimated hours saved/mo',
            primaryValue: `${formatNumber(savedHours, 1)}h`,
            secondaryLabel: 'Manual workload replaced',
            secondaryValue: `${formatNumber(manualHours, 1)}h`,
            tertiaryLabel: 'Monthly time value',
            tertiaryValue: formatCurrency(savedHours * hourlyCost),
            insight:
                `${formatNumber(posts)} posts per month currently take about ${formatNumber(manualHours, 1)} hours. This workflow should keep humans focused on roughly ${formatNumber(reviewHours, 1)} hours of review and strategy.`,
        };
    }

    if (page.toolType === 'content-workflow') {
        const pieces = toNumber(getToolInput(page, inputs, 'monthlyPieces'), 12);
        const minutes = toNumber(getToolInput(page, inputs, 'minutesPerPiece'), 45);
        const reviewMinutes = toNumber(getToolInput(page, inputs, 'reviewMinutes'), 12);
        const hourlyCost = toNumber(getToolInput(page, inputs, 'hourlyCost'), 30);
        const manualHours = (pieces * minutes) / 60;
        const savedHours = Math.max(0, manualHours * automationRate - ((pieces * reviewMinutes) / 60) * 0.2);

        return {
            primaryLabel: 'Estimated hours saved/mo',
            primaryValue: `${formatNumber(savedHours, 1)}h`,
            secondaryLabel: 'Content pieces planned',
            secondaryValue: formatNumber(pieces),
            tertiaryLabel: 'Monthly time value',
            tertiaryValue: formatCurrency(savedHours * hourlyCost),
            insight:
                `${formatNumber(pieces)} content pieces per month can move through a repeatable draft, review, and approval workflow instead of being recreated manually every time.`,
        };
    }

    const volume = toNumber(
        getToolInput(page, inputs, 'monthlyRuns')
        || getToolInput(page, inputs, 'monthlyRepetitions')
        || getToolInput(page, inputs, 'monthlyTasks'),
        100,
    );
    const minutes = toNumber(
        getToolInput(page, inputs, 'minutesPerRun')
        || getToolInput(page, inputs, 'minutesPerTask'),
        10,
    );
    const hourlyCost = toNumber(getToolInput(page, inputs, 'hourlyCost'), 30);
    const manualHours = (volume * minutes) / 60;
    const savedHours = manualHours * automationRate;

    return {
        primaryLabel: 'Estimated hours saved/mo',
        primaryValue: `${formatNumber(savedHours, 1)}h`,
        secondaryLabel: 'Manual workload',
        secondaryValue: `${formatNumber(manualHours, 1)}h`,
        tertiaryLabel: 'Monthly time value',
        tertiaryValue: formatCurrency(savedHours * hourlyCost),
        insight:
            `${formatNumber(volume)} monthly repetitions at ${formatNumber(minutes)} minutes each creates about ${formatNumber(manualHours, 1)} hours of manual work. This is enough volume for a first workflow pilot.`,
    };
}

function buildWorkflowPrompt(page, selected, inputs, result, controlPlan, estimate) {
    const inputLines = (page.toolInputs || [])
        .map((field) => `${field.label}: ${inputs[field.id] ?? field.defaultValue ?? ''}`)
        .join('\n');

    return [
        `Create a Dooza Agent for: ${result.workflow}`,
        '',
        `Page/tool: ${page.toolTitle}`,
        `Selected plan: ${Object.values(selected).join(' / ')}`,
        inputLines,
        '',
        `Goal: ${result.summary}`,
        `Trigger: ${result.trigger}`,
        `AI action: ${result.action}`,
        `Connected apps: ${result.apps?.join(', ')}`,
        `Approval rule: ${controlPlan.approval || controlPlan || result.approval}`,
        `Final output: ${result.output}`,
        '',
        `Estimated impact: ${estimate?.primaryValue} ${estimate?.primaryLabel}; ${estimate?.tertiaryValue} ${estimate?.tertiaryLabel}.`,
        '',
        'Build requirements:',
        '- Add a manual test trigger for demoing the flow.',
        '- Add AI instructions with clear allowed and blocked actions.',
        '- Add an approval branch before customer-facing, publishing, deletion, payment, refund, or record-changing actions.',
        '- Save a run summary to Google Sheets or the selected system of record.',
        '- Send a Slack or email summary when the workflow finishes.',
    ].filter(Boolean).join('\n');
}

function buildFullPlanText(page, selected, inputs, result, controlPlan, estimate) {
    const selectedLines = Object.entries(selected)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    const inputLines = (page.toolInputs || [])
        .map((field) => `${field.label}: ${inputs[field.id] ?? field.defaultValue ?? ''}`)
        .join('\n');
    const weekPlan = result.weekPlan?.map((item, index) => `${index + 1}. ${item}`).join('\n') || '';
    const prompt = buildWorkflowPrompt(page, selected, inputs, result, controlPlan, estimate);

    return [
        page.toolTitle,
        '',
        'Selected options:',
        selectedLines,
        inputLines && '',
        inputLines && 'User inputs:',
        inputLines,
        estimate && '',
        estimate && 'Estimated impact:',
        estimate && `${estimate.primaryLabel}: ${estimate.primaryValue}`,
        estimate && `${estimate.secondaryLabel}: ${estimate.secondaryValue}`,
        estimate && `${estimate.tertiaryLabel}: ${estimate.tertiaryValue}`,
        estimate && estimate.insight,
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
        '',
        'Dooza Agent build prompt:',
        prompt,
    ].filter(Boolean).join('\n');
}

function ChoiceGroup({ field, value, onChange, step }) {
    return (
        <div>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-50 text-xs font-black text-primary-700">
                        {step}
                    </span>
                    {field.label}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                    <MousePointerClick className="h-3.5 w-3.5" />
                    Click one
                </span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
                {field.options.map((option) => {
                    const isActive = value === option;
                    return (
                        <button
                            key={option}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => onChange(option)}
                            className={`group flex min-h-12 items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left text-sm font-extrabold transition hover:-translate-y-0.5 ${
                                isActive
                                    ? 'border-primary-500 bg-primary-50 text-primary-950 shadow-sm shadow-primary-100 ring-2 ring-primary-100'
                                    : 'border-slate-200 bg-white text-slate-700 hover:border-primary-300 hover:bg-primary-50/40 hover:text-slate-950'
                            }`}
                        >
                            <span>{option}</span>
                            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                                isActive
                                    ? 'border-primary-500 bg-primary-600 text-white'
                                    : 'border-slate-300 bg-white text-transparent group-hover:border-primary-400'
                            }`}
                            >
                                <CheckCircle2 className="h-3.5 w-3.5" />
                            </span>
                        </button>
                    );
                })}
            </div>
            {field.helper && <span className="mt-2 block text-xs font-semibold leading-relaxed text-slate-500">{field.helper}</span>}
        </div>
    );
}

function ToolInput({ field, value, onChange }) {
    return (
        <label className={field.type === 'number' ? 'block' : 'block sm:col-span-2'}>
            <span className="mb-2 flex items-center justify-between gap-2 text-sm font-extrabold text-slate-900">
                <span className="inline-flex items-center gap-2">
                    <PencilLine className="h-3.5 w-3.5 text-primary-700" />
                    {field.label}
                </span>
                <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[0.62rem] font-black uppercase tracking-[0.12em] text-primary-700">
                    Edit
                </span>
            </span>
            <div className="relative">
                <input
                    type={field.type || 'text'}
                    min={field.min}
                    max={field.max}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md focus:-translate-y-0.5 focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
                    placeholder={field.placeholder}
                />
                {field.suffix && (
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                        {field.suffix}
                    </span>
                )}
            </div>
            {field.helper && <span className="mt-2 block text-xs font-semibold leading-relaxed text-slate-500">{field.helper}</span>}
        </label>
    );
}

function FreeAutomationTool({ page }) {
    const [selected, setSelected] = useState(() => (
        Object.fromEntries(page.toolFields.map((field) => [field.id, field.options[0]]))
    ));
    const [inputs, setInputs] = useState(() => (
        Object.fromEntries((page.toolInputs || []).map((field) => [field.id, field.defaultValue ?? '']))
    ));
    const [copied, setCopied] = useState(null);

    const primaryField = page.toolFields[0];
    const controlField = page.toolFields[1];
    const primaryChoice = selected[primaryField.id];
    const controlChoice = controlField ? selected[controlField.id] : undefined;
    const result = page.toolResults?.[primaryChoice] || Object.values(page.toolResults || {})[0];
    const controlPlan = page.controlPlans?.[controlChoice] || {};
    const estimate = useMemo(
        () => calculateToolOutput(page, selected, inputs, result, controlPlan),
        [controlPlan, inputs, page, result, selected],
    );
    const workflowPrompt = useMemo(
        () => buildWorkflowPrompt(page, selected, inputs, result, controlPlan, estimate),
        [controlPlan, estimate, inputs, page, result, selected],
    );
    const planText = useMemo(
        () => buildFullPlanText(page, selected, inputs, result, controlPlan, estimate),
        [controlPlan, estimate, inputs, page, result, selected],
    );

    async function copyText(text, key) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(key);
            window.setTimeout(() => setCopied(null), 1800);
        } catch (error) {
            setCopied(null);
        }
    }

    return (
        <div className="rounded-[28px] border border-primary-100 bg-white/95 p-4 shadow-2xl shadow-primary-100/50 backdrop-blur md:p-5">
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <span className="section-label mb-2 inline-flex items-center gap-2 text-primary-600">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-600" />
                        </span>
                        Interactive free tool
                    </span>
                    <h2 className="font-serif text-2xl font-bold leading-tight text-slate-950 md:text-[1.65rem]">{page.toolTitle}</h2>
                    <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-slate-600">{page.toolDescription}</p>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-xs font-extrabold text-primary-800">
                    <Workflow className="h-4 w-4" />
                    Live output
                </div>
            </div>

            <div className="mt-4 rounded-2xl border border-primary-100 bg-gradient-to-r from-primary-50 to-white p-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-white shadow-lg shadow-primary-100">
                            <HelpCircle className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="text-sm font-black text-slate-950">Try it now: choose, edit, copy.</div>
                            <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-600">
                                Click a workflow focus, change the numbers, and watch the estimate and workflow plan update instantly.
                            </p>
                        </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-3 gap-2 text-center text-[0.64rem] font-black uppercase tracking-[0.12em] text-primary-800">
                        <span className="rounded-full bg-white px-2 py-1 shadow-sm">1 Pick</span>
                        <span className="rounded-full bg-white px-2 py-1 shadow-sm">2 Edit</span>
                        <span className="rounded-full bg-white px-2 py-1 shadow-sm">3 Copy</span>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[0.44fr_0.56fr]">
                <div className="space-y-5">
                    {page.toolFields.map((field, index) => (
                        <ChoiceGroup
                            key={field.id}
                            field={field}
                            value={selected[field.id]}
                            step={index + 1}
                            onChange={(value) => setSelected((current) => ({ ...current, [field.id]: value }))}
                        />
                    ))}

                    <div className="grid gap-4 sm:grid-cols-2">
                        {(page.toolInputs || []).map((field) => (
                            <ToolInput
                                key={field.id}
                                field={field}
                                value={inputs[field.id] ?? ''}
                                onChange={(value) => setInputs((current) => ({ ...current, [field.id]: value }))}
                            />
                        ))}
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-slate-950">
                            <Settings2 className="h-4 w-4 text-primary-700" />
                            What this tool creates
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

                <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-slate-950 md:p-5" aria-live="polite">
                    <div className="pointer-events-none absolute right-4 top-4 h-20 w-20 rounded-full bg-primary-100/60 blur-2xl" />
                    <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-sm font-extrabold text-primary-700">
                                <Sparkles className="h-4 w-4" />
                                Generated workflow updates live
                            </div>
                            <h3 className="text-xl font-extrabold leading-tight text-slate-950 md:text-2xl">{result.workflow}</h3>
                        </div>
                        <button
                            type="button"
                            onClick={() => copyText(planText, 'plan')}
                            className="inline-flex shrink-0 self-start items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:border-primary-200 hover:bg-primary-50 sm:justify-self-end"
                        >
                            {copied === 'plan' ? <ClipboardCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            {copied === 'plan' ? 'Copied' : 'Copy full result'}
                        </button>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{result.summary}</p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {[
                            [estimate.primaryLabel, estimate.primaryValue],
                            [estimate.secondaryLabel, estimate.secondaryValue],
                            [estimate.tertiaryLabel, estimate.tertiaryValue],
                        ].map(([label, value]) => (
                            <div key={label} className="rounded-2xl border border-primary-100 bg-white p-4 shadow-sm" data-tool-metric={label}>
                                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                                    <Calculator className="h-4 w-4" />
                                </div>
                                <div className="text-xl font-black text-slate-950" data-tool-metric-value>{value}</div>
                                <div className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 text-xs font-semibold leading-relaxed text-slate-600">
                        {estimate.insight}
                    </p>

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

                    <div className="mt-4 rounded-2xl border border-primary-100 bg-white p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-950">
                                <GitBranch className="h-4 w-4 text-primary-700" />
                                Dooza Agent build prompt
                            </div>
                            <button
                                type="button"
                                onClick={() => copyText(workflowPrompt, 'prompt')}
                                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-2 text-xs font-extrabold text-white transition hover:bg-primary-700"
                            >
                                {copied === 'prompt' ? <ClipboardCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                {copied === 'prompt' ? 'Copied' : 'Copy prompt'}
                            </button>
                        </div>
                        <pre className="max-h-36 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-3 text-xs font-semibold leading-relaxed text-slate-100">
                            {workflowPrompt}
                        </pre>
                    </div>

                    <div className="mt-4 flex items-start gap-2 rounded-2xl border border-primary-100 bg-white p-3">
                        <Settings2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                        <p className="text-xs font-semibold leading-relaxed text-slate-600">
                            The copied output includes your inputs, estimate, workflow plan, rollout checklist, and a build prompt for Dooza Agent.
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
                        <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
                            <div className="xl:sticky xl:top-24">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                    <Sparkles className="h-4 w-4" />
                                    {page.eyebrow}
                                </div>
                                <h1 className="max-w-3xl font-serif text-4xl font-extrabold leading-[1.04] tracking-tight text-slate-950 md:text-6xl xl:text-[3.8rem]">
                                    {page.heroTitle}
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                                    {page.heroText}
                                </p>
                                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                                    <BookDemoButton source={`${page.slug}_hero`} variant="primary" size="xl">
                                        Book a Demo
                                    </BookDemoButton>
                                    <Link
                                        href="/workflow"
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50"
                                    >
                                        See Dooza Agent <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <FreeAutomationTool page={page} />
                        </div>
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
                                The generated plan is designed to be simple enough to explain, then strong enough to demo in Dooza Agent.
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
                            description="Dooza Agent keeps every step visible: what triggered, what AI decided, which apps changed, who approved it, and what happened next."
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
