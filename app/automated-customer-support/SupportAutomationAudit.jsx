'use client';

import { useMemo, useState } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    ClipboardCheck,
    PackageSearch,
    RefreshCw,
    Route,
    ShieldCheck,
    ShoppingCart,
} from 'lucide-react';
import BookDemoButton from '@/components/buttons/BookDemoButton';

const workflows = [
    {
        id: 'orders',
        label: 'Order status',
        question: 'Where is my order?',
        icon: PackageSearch,
        firstWorkflow: 'Order status workflow',
        steps: ['Detect order question', 'Find tracking context', 'Draft customer update', 'Escalate missing scan'],
        result: 'Fewer repeated tracking replies.',
    },
    {
        id: 'returns',
        label: 'Returns',
        question: 'Can I return this?',
        icon: RefreshCw,
        firstWorkflow: 'Returns intake workflow',
        steps: ['Collect return reason', 'Check policy', 'Draft next step', 'Hold refund for approval'],
        result: 'Cleaner return requests before a human reviews.',
    },
    {
        id: 'sales',
        label: 'Product fit',
        question: 'Which product should I buy?',
        icon: ShoppingCart,
        firstWorkflow: 'Sales-intent support workflow',
        steps: ['Detect buying intent', 'Summarize need', 'Draft answer', 'Route high-intent shopper'],
        result: 'Support conversations become sales opportunities.',
    },
    {
        id: 'complaints',
        label: 'Escalations',
        question: 'I already emailed twice.',
        icon: Route,
        firstWorkflow: 'Complaint escalation workflow',
        steps: ['Detect urgency', 'Summarize thread', 'Assign owner', 'Track follow-up'],
        result: 'Urgent tickets reach the right person faster.',
    },
];

export default function SupportAutomationAudit() {
    const [selectedId, setSelectedId] = useState('orders');
    const active = useMemo(
        () => workflows.find((workflow) => workflow.id === selectedId) || workflows[0],
        [selectedId]
    );
    const ActiveIcon = active.icon;

    return (
        <section id="support-audit" className="bg-white px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 max-w-3xl">
                    <span className="section-label mb-4 block text-primary-700">Interactive workflow picker</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        Pick the ticket your team repeats most
                    </h2>
                    <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-600">
                        Then see the first Dooza Agents as a simple graph. This keeps the page skimmable and makes the next step obvious.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4 md:p-5">
                        <div className="mb-4 text-sm font-black uppercase tracking-[0.14em] text-slate-500">Choose a support problem</div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            {workflows.map((workflow) => {
                                const Icon = workflow.icon;
                                const isActive = workflow.id === active.id;
                                return (
                                    <button
                                        key={workflow.id}
                                        type="button"
                                        onClick={() => setSelectedId(workflow.id)}
                                        className={`rounded-2xl border p-4 text-left transition ${isActive
                                            ? 'border-primary-300 bg-white shadow-lg shadow-primary-100/60'
                                            : 'border-slate-200 bg-white hover:border-primary-200 hover:bg-primary-50/40'
                                        }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${isActive ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-700'}`}>
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="text-base font-black text-slate-950">{workflow.label}</div>
                                                <div className="mt-1 text-sm font-bold text-slate-600">{workflow.question}</div>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 md:p-6">
                        <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                    <ActiveIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">Recommended first build</div>
                                    <h3 className="text-2xl font-black text-slate-950">{active.firstWorkflow}</h3>
                                </div>
                            </div>
                            <div className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700">
                                Low-risk start
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <div className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">Customer asks</div>
                            <div className="text-xl font-black text-slate-950">{active.question}</div>
                        </div>

                        <div className="my-5 hidden items-stretch gap-3 lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
                            {active.steps.map((step, index) => (
                                <div key={step} className="contents">
                                    <div className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary-700">
                                            {index === active.steps.length - 1 ? <ShieldCheck className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                                        </div>
                                        <div className="text-sm font-black leading-snug text-slate-950">{step}</div>
                                    </div>
                                    {index < active.steps.length - 1 && (
                                        <div className="flex items-center text-primary-700">
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="my-5 grid gap-3 lg:hidden">
                            {active.steps.map((step, index) => (
                                <div key={step} className="flex items-center gap-3 rounded-2xl border border-primary-100 bg-primary-50 p-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700">
                                        {index === active.steps.length - 1 ? <ShieldCheck className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                                    </div>
                                    <div className="text-sm font-black leading-snug text-slate-950">{step}</div>
                                </div>
                            ))}
                        </div>

                        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                            <div className="flex items-start gap-3">
                                <ClipboardCheck className="mt-1 h-5 w-5 shrink-0 text-primary-700" />
                                <div>
                                    <div className="text-sm font-black text-slate-950">{active.result}</div>
                                    <div className="mt-1 text-sm font-semibold text-slate-600">Audit goal: confirm volume, tools, approval rules, and first workflow scope.</div>
                                </div>
                            </div>
                            <BookDemoButton source="automated_customer_support_audit_picker" variant="primary" size="lg">
                                Book Audit
                            </BookDemoButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
