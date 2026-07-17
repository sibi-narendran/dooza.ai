'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
    AlertCircle,
    ArrowRight,
    Bot,
    BriefcaseBusiness,
    Calculator,
    CheckCircle2,
    ChevronRight,
    Clock3,
    DatabaseZap,
    FileText,
    Loader2,
    LockKeyhole,
    Mail,
    MessageSquareText,
    Phone,
    Route,
    ShieldCheck,
    Sparkles,
    Workflow,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import {
    calculateCustomerServiceReport,
    customerServiceToolPages,
    customerServiceToolSlugs,
} from '@/lib/customerServiceAutomation';

const channelOptions = ['Email', 'Live chat', 'Forms', 'Helpdesk', 'WhatsApp', 'Phone notes'];
const painOptions = ['Slow replies', 'Repeated FAQs', 'Poor routing', 'Manual updates'];
const businessOptions = ['Ecommerce', 'Local service', 'SaaS', 'Clinic', 'Agency', 'Other'];

const initialInputs = {
    businessType: 'Ecommerce',
    currentStack: 'Gmail, chat, Google Sheets',
    mainPain: 'Slow replies',
    monthlyTickets: 650,
    avgMinutesPerTicket: 8,
    hourlySupportCost: 30,
    teamSize: 3,
    urgentPercent: 12,
    automationCoverage: 55,
    channels: ['Email', 'Live chat'],
};

const initialContact = {
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
};

function formatCompactNumber(value) {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0,
    }).format(value);
}

function MetricPill({ icon: Icon, label, value }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <Icon className="h-4 w-4" />
            </div>
            <div className="text-xl font-black text-slate-950">{value}</div>
            <div className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-slate-500">{label}</div>
        </div>
    );
}

function ChoiceButton({ active, children, onClick }) {
    return (
        <button
            type="button"
            aria-pressed={active}
            onClick={onClick}
            className={`flex min-h-12 items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-extrabold transition ${
                active
                    ? 'border-primary-500 bg-primary-50 text-primary-950 shadow-sm ring-4 ring-primary-100'
                    : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50/40 hover:text-slate-950'
            }`}
        >
            <span>{children}</span>
            <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    active ? 'border-primary-600 bg-primary-600 text-white' : 'border-slate-300 bg-slate-50 text-transparent'
                }`}
            >
                <CheckCircle2 className="h-3.5 w-3.5" />
            </span>
        </button>
    );
}

function NumberInput({ label, helper, value, min, max, suffix, onChange }) {
    const numericValue = Number(value);

    return (
        <label className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-100">
            <span className="flex items-start justify-between gap-3">
                <span>
                    <span className="block text-sm font-extrabold text-slate-950">{label}</span>
                    <span className="mt-1 block text-xs font-semibold leading-relaxed text-slate-500">{helper}</span>
                </span>
                <span className="shrink-0 rounded-full bg-primary-50 px-3 py-1 text-xs font-black text-primary-800">
                    {formatCompactNumber(numericValue)}{suffix ? ` ${suffix}` : ''}
                </span>
            </span>
            <input
                type="range"
                min={min}
                max={max}
                value={numericValue}
                onChange={(event) => onChange(Number(event.target.value))}
                className="mt-4 w-full accent-primary-600"
            />
            <div className="mt-3 flex items-center gap-3">
                <input
                    type="number"
                    min={min}
                    max={max}
                    value={numericValue}
                    onChange={(event) => onChange(event.target.value)}
                    className="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-950 outline-none transition focus:border-primary-500 focus:bg-white"
                />
                {suffix && <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">{suffix}</span>}
            </div>
        </label>
    );
}

function TextInput({ label, value, onChange, placeholder, type = 'text', required = false }) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-extrabold text-slate-950">
                {label} {required && <span className="text-primary-700">*</span>}
            </span>
            <input
                type={type}
                value={value}
                required={required}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-primary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
            />
        </label>
    );
}

function ChannelToggle({ channel, active, onClick }) {
    return (
        <button
            type="button"
            aria-pressed={active}
            onClick={onClick}
            className={`inline-flex min-h-10 items-center justify-center rounded-full border px-3 py-2 text-xs font-extrabold transition ${
                active
                    ? 'border-primary-500 bg-primary-600 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-primary-200 hover:bg-primary-50'
            }`}
        >
            {channel}
        </button>
    );
}

function ToolPanel({ page }) {
    const [inputs, setInputs] = useState(initialInputs);
    const [step, setStep] = useState('configure');
    const [contact, setContact] = useState(initialContact);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const internalPreview = useMemo(
        () => calculateCustomerServiceReport(page.slug, inputs),
        [inputs, page.slug],
    );

    const selectedChannels = inputs.channels || [];
    const readiness = [
        inputs.monthlyTickets >= 300 ? 'Enough ticket volume for a first workflow' : 'Start with one narrow ticket category',
        selectedChannels.length > 1 ? 'Multi-channel routing should be mapped' : 'Single-channel pilot is simple to launch',
        inputs.urgentPercent >= 15 ? 'Approval routing is important for sensitive cases' : 'Draft-first automation can be tested quickly',
    ];

    const setInput = (key, value) => {
        setInputs((current) => ({ ...current, [key]: value }));
    };

    const toggleChannel = (channel) => {
        setInputs((current) => {
            const currentChannels = current.channels || [];
            const nextChannels = currentChannels.includes(channel)
                ? currentChannels.filter((item) => item !== channel)
                : [...currentChannels, channel];

            return {
                ...current,
                channels: nextChannels.length > 0 ? nextChannels : currentChannels,
            };
        });
    };

    const handleStartLeadGate = () => {
        setError('');
        setStep('details');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('submitting');
        setError('');

        try {
            const response = await fetch('/api/customer-service-tool-leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    slug: page.slug,
                    inputs,
                    contact,
                    pageUrl: window.location.href,
                    utm: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
                }),
            });

            const body = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(body.error || 'Could not submit the report request.');
            }

            setStatus('success');
            setStep('submitted');
        } catch (submitError) {
            setStatus('idle');
            setError(submitError.message || 'Could not submit the report request.');
        }
    };

    return (
        <div id="free-tool" className="scroll-mt-24 rounded-[30px] border border-primary-100 bg-white p-4 shadow-2xl shadow-primary-100/50 md:p-5 lg:p-6">
            <div className="mb-5 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <div className="section-label mb-2 flex items-center gap-2 text-primary-700">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-70" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-600" />
                        </span>
                        Free interactive tool
                    </div>
                    <h2 className="font-serif text-2xl font-bold leading-tight text-slate-950 md:text-3xl">{page.toolTitle}</h2>
                    <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-slate-600">{page.toolSubtitle}</p>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-xs font-black text-primary-800">
                    <LockKeyhole className="h-4 w-4" />
                    Report sent after details
                </div>
            </div>

            <div className="mb-5 grid gap-3 sm:grid-cols-3">
                <div className={`rounded-2xl border p-3 ${step === 'configure' ? 'border-primary-300 bg-primary-50' : 'border-slate-200 bg-slate-50'}`}>
                    <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">Step 1</div>
                    <div className="mt-1 text-sm font-extrabold text-slate-950">Enter workload</div>
                </div>
                <div className={`rounded-2xl border p-3 ${step === 'details' ? 'border-primary-300 bg-primary-50' : 'border-slate-200 bg-slate-50'}`}>
                    <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">Step 2</div>
                    <div className="mt-1 text-sm font-extrabold text-slate-950">Add details</div>
                </div>
                <div className={`rounded-2xl border p-3 ${step === 'submitted' ? 'border-primary-300 bg-primary-50' : 'border-slate-200 bg-slate-50'}`}>
                    <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">Step 3</div>
                    <div className="mt-1 text-sm font-extrabold text-slate-950">Receive report</div>
                </div>
            </div>

            {step === 'configure' && (
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_400px]">
                    <div className="space-y-6">
                        <div>
                            <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-slate-950">
                                <BriefcaseBusiness className="h-4 w-4 text-primary-700" />
                                Business type
                            </div>
                            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                                {businessOptions.map((option) => (
                                    <ChoiceButton
                                        key={option}
                                        active={inputs.businessType === option}
                                        onClick={() => setInput('businessType', option)}
                                    >
                                        {option}
                                    </ChoiceButton>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <NumberInput
                                label="Monthly support tickets"
                                helper="Emails, chats, forms, or helpdesk tickets."
                                value={inputs.monthlyTickets}
                                min={50}
                                max={5000}
                                suffix="/mo"
                                onChange={(value) => setInput('monthlyTickets', value)}
                            />
                            <NumberInput
                                label="Average time per ticket"
                                helper="Current manual handling time."
                                value={inputs.avgMinutesPerTicket}
                                min={2}
                                max={45}
                                suffix="min"
                                onChange={(value) => setInput('avgMinutesPerTicket', value)}
                            />
                            <NumberInput
                                label="Support cost per hour"
                                helper="Loaded hourly staff cost or rough value."
                                value={inputs.hourlySupportCost}
                                min={10}
                                max={150}
                                suffix="$"
                                onChange={(value) => setInput('hourlySupportCost', value)}
                            />
                            <NumberInput
                                label="Urgent or sensitive tickets"
                                helper="Refunds, complaints, VIPs, billing, risk."
                                value={inputs.urgentPercent}
                                min={0}
                                max={60}
                                suffix="%"
                                onChange={(value) => setInput('urgentPercent', value)}
                            />
                        </div>

                        <div className="grid gap-4 lg:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="mb-3 text-sm font-extrabold text-slate-950">Support channels</div>
                                <div className="flex flex-wrap gap-2">
                                    {channelOptions.map((channel) => (
                                        <ChannelToggle
                                            key={channel}
                                            channel={channel}
                                            active={selectedChannels.includes(channel)}
                                            onClick={() => toggleChannel(channel)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="mb-3 text-sm font-extrabold text-slate-950">Main pain point</div>
                                <div className="grid gap-2">
                                    {painOptions.map((option) => (
                                        <ChoiceButton
                                            key={option}
                                            active={inputs.mainPain === option}
                                            onClick={() => setInput('mainPain', option)}
                                        >
                                            {option}
                                        </ChoiceButton>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <TextInput
                            label="Current support tools"
                            value={inputs.currentStack}
                            placeholder="Example: Gmail, Zendesk, Intercom, Slack"
                            onChange={(value) => setInput('currentStack', value)}
                        />
                    </div>

                    <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-5 text-white shadow-xl">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <div>
                                <div className="mb-2 flex items-center gap-2 text-sm font-extrabold text-primary-300">
                                    <Sparkles className="h-4 w-4" />
                                    Report preview
                                </div>
                                <h3 className="font-serif text-2xl font-bold leading-tight text-white">{internalPreview.recommendedWorkflow}</h3>
                            </div>
                            <Calculator className="h-8 w-8 shrink-0 text-primary-300" />
                        </div>
                        <p className="text-sm font-semibold leading-relaxed text-slate-300">
                            The full numbers are gated. Submit your details and we will email the savings estimate, workflow map, and Dooza setup plan.
                        </p>
                        <div className="mt-5 grid gap-3">
                            {readiness.map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                                    <span className="text-sm font-bold leading-relaxed text-slate-100">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 rounded-2xl border border-primary-400/30 bg-primary-400/10 p-4">
                            <div className="text-xs font-black uppercase tracking-[0.16em] text-primary-200">Your report will include</div>
                            <div className="mt-3 grid gap-3 text-sm font-bold text-slate-100">
                                <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary-300" /> Hours and cost saved per month</div>
                                <div className="flex items-center gap-2"><Workflow className="h-4 w-4 text-primary-300" /> First workflow to build in Dooza Agents</div>
                                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary-300" /> Approval rules for risky support cases</div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={handleStartLeadGate}
                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-4 text-base font-black text-white shadow-xl shadow-primary-950/20 transition hover:-translate-y-0.5 hover:bg-primary-400"
                        >
                            {page.primaryCta}
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}

            {step === 'details' && (
                <div className="grid gap-6 xl:grid-cols-[0.52fr_0.48fr]">
                    <div className="rounded-[24px] border border-primary-100 bg-primary-50 p-5">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-700 text-white shadow-lg shadow-primary-100">
                            <Mail className="h-5 w-5" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold leading-tight text-slate-950">Where should we send the report?</h3>
                        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
                            We save your inputs and prepare the report for manual follow-up. The full result is not shown publicly on this page.
                        </p>
                        <div className="mt-5 grid gap-3">
                            <MetricPill icon={MessageSquareText} label="Monthly support tickets" value={formatCompactNumber(inputs.monthlyTickets)} />
                            <MetricPill icon={Route} label="Support channels selected" value={selectedChannels.length} />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        {error && (
                            <div className="mb-4 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-3 text-sm font-semibold leading-relaxed text-red-700">
                                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <TextInput
                                label="Name"
                                required
                                value={contact.name}
                                placeholder="Your name"
                                onChange={(value) => setContact((current) => ({ ...current, name: value }))}
                            />
                            <TextInput
                                label="Work email"
                                required
                                type="email"
                                value={contact.email}
                                placeholder="you@company.com"
                                onChange={(value) => setContact((current) => ({ ...current, email: value }))}
                            />
                            <TextInput
                                label="Company"
                                required
                                value={contact.company}
                                placeholder="Company name"
                                onChange={(value) => setContact((current) => ({ ...current, company: value }))}
                            />
                            <TextInput
                                label="Website"
                                value={contact.website}
                                placeholder="https://company.com"
                                onChange={(value) => setContact((current) => ({ ...current, website: value }))}
                            />
                            <div className="sm:col-span-2">
                                <TextInput
                                    label="Phone"
                                    value={contact.phone}
                                    placeholder="Optional"
                                    onChange={(value) => setContact((current) => ({ ...current, phone: value }))}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-base font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Sending request...
                                </>
                            ) : (
                                <>
                                    Send me the report
                                    <ArrowRight className="h-5 w-5" />
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => setStep('configure')}
                            className="mt-3 w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-extrabold text-slate-700 transition hover:border-primary-200 hover:bg-primary-50"
                        >
                            Edit workload inputs
                        </button>
                    </form>
                </div>
            )}

            {step === 'submitted' && (
                <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
                    <div className="rounded-[24px] border border-primary-100 bg-primary-50 p-6">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-white shadow-lg shadow-primary-100">
                            <CheckCircle2 className="h-7 w-7" />
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-slate-950">Report request captured</h3>
                        <p className="mt-3 text-base font-semibold leading-relaxed text-slate-600">
                            We will email the customer service automation report manually. It includes the savings estimate, workflow map, and Dooza implementation plan.
                        </p>
                        <div className="mt-5 rounded-2xl border border-white bg-white/80 p-4 text-sm font-bold leading-relaxed text-slate-700">
                            Saved request for: {contact.email}
                        </div>
                    </div>
                    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-primary-700">
                            <Bot className="h-4 w-4" />
                            Next step
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-slate-950">Turn the report into a workflow demo</h4>
                        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
                            In a demo, Dooza can show how the same support process becomes a visible workflow with AI classification, drafted replies, approvals, and tool updates.
                        </p>
                        <div className="mt-5">
                            <BookDemoButton source={`${page.slug}_submitted`} variant="primary" size="xl">
                                Book a Demo
                            </BookDemoButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function PitchSection({ page }) {
    return (
        <section className="bg-white px-4 py-20 md:px-8 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                    <span className="section-label mb-4 block text-primary-700">Dooza pitch</span>
                    <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        {page.pitchTitle}
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-600">{page.pitchText}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <BookDemoButton source={`${page.slug}_pitch`} variant="primary" size="lg">
                            Speak to Founder
                        </BookDemoButton>
                        <Link
                            href="/agents"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50"
                        >
                            See Dooza Agents
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
                <div className="grid gap-4">
                    {[
                        ['AI employee', 'Classifies tickets, drafts replies, summarizes threads, and suggests next actions.'],
                        ['Dooza Agents', 'Connects inboxes, branches logic, asks for approvals, updates tools, and logs every run.'],
                        ['Human control', 'Sensitive replies and record-changing actions can wait for approval before going out.'],
                    ].map(([title, text], index) => {
                        const icons = [Bot, Workflow, ShieldCheck];
                        const Icon = icons[index];
                        return (
                            <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-950">{title}</h3>
                                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ComparisonSection({ page }) {
    return (
        <section className="px-4 py-20 md:px-8 md:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <span className="section-label mb-4 block text-primary-700">Decision guide</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        {page.comparisonTitle}
                    </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {page.comparisonRows.map(([title, text]) => (
                        <div key={title} className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
                            <DatabaseZap className="mb-5 h-7 w-7 text-primary-700" />
                            <h3 className="text-xl font-extrabold text-slate-950">{title}</h3>
                            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RelatedKeywordLinks({ currentSlug }) {
    const pages = customerServiceToolSlugs
        .filter((slug) => slug !== currentSlug)
        .map((slug) => customerServiceToolPages[slug]);

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {pages.map((page) => (
                <Link
                    key={page.slug}
                    href={`/${page.slug}`}
                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
                >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <FileText className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-extrabold text-slate-950 group-hover:text-primary-700">{page.heroEyebrow}</div>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">{page.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary-700">
                        Open tool <ArrowRight className="h-4 w-4" />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default function CustomerServiceToolPage({ page }) {
    return (
        <BookingModalProvider>
            <Navbar showLogin={false} showIndustry ctaType="demo" ctaSource={`${page.slug}_nav`} />
            <main id="main-content" className="bg-warm text-slate-900">
                <section className="relative overflow-hidden px-4 pb-14 pt-24 md:px-8 md:pb-16 md:pt-28">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary-100/60 blur-3xl" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-6xl text-center">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-4 py-2 text-sm font-extrabold text-primary-800 shadow-sm backdrop-blur">
                            <Sparkles className="h-4 w-4" />
                            {page.heroEyebrow}
                        </div>
                        <h1 className="mx-auto max-w-4xl font-serif text-4xl font-extrabold leading-[1.04] text-slate-950 md:text-6xl">
                            {page.heroTitle}
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-relaxed text-slate-600 md:text-lg">
                            {page.heroText}
                        </p>
                        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                            <a
                                href="#free-tool"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-black text-white shadow-lg shadow-primary-100 transition hover:-translate-y-0.5 hover:bg-primary-600"
                            >
                                <Calculator className="h-5 w-5" />
                                Use the free calculator
                            </a>
                            <Link
                                href="/agents"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50"
                            >
                                See Dooza Agents
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                        <div className="mx-auto mt-8 grid max-w-5xl gap-3 text-left sm:grid-cols-3">
                            <div className="rounded-2xl border border-primary-100 bg-white/90 p-4 shadow-sm">
                                <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">Built for</div>
                                <div className="mt-1 text-sm font-extrabold text-slate-950">{page.keyword}</div>
                            </div>
                            <div className="rounded-2xl border border-primary-100 bg-white/90 p-4 shadow-sm">
                                <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">Tool output</div>
                                <div className="mt-1 text-sm font-extrabold text-slate-950">{page.resultPromise}</div>
                            </div>
                            <div className="rounded-2xl border border-primary-100 bg-white/90 p-4 shadow-sm">
                                <div className="text-xs font-black uppercase tracking-[0.14em] text-primary-700">Powered by</div>
                                <div className="mt-1 text-sm font-extrabold text-slate-950">Dooza + Dooza Agents</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative px-4 pb-20 md:px-8 md:pb-28">
                    <div className="mx-auto max-w-[1500px]">
                        <ToolPanel page={page} />
                    </div>
                </section>

                <PitchSection page={page} />
                <ComparisonSection page={page} />

                <section className="bg-slate-950 px-4 py-20 text-white md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <span className="section-label mb-4 block text-primary-300">Workflow controls</span>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
                                The page sells automation with guardrails
                            </h2>
                            <p className="mt-5 text-lg leading-relaxed text-slate-300">
                                The report does not just promise fewer tickets. It shows how the work moves through intake, AI, approval, connected tools, and reporting.
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-4">
                            {[
                                ['Intake', 'Capture customer context from support channels.'],
                                ['AI draft', 'Classify, summarize, and prepare the reply.'],
                                ['Approval', 'Hold risky actions for a person.'],
                                ['Run history', 'Log outcomes and report workload.'],
                            ].map(([title, text], index) => (
                                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-400 text-sm font-black text-slate-950">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-extrabold text-white">{title}</h3>
                                    <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-300">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <span className="section-label mb-4 block text-primary-700">More support tools</span>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Related customer service automation pages
                            </h2>
                        </div>
                        <RelatedKeywordLinks currentSlug={page.slug} />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-4xl">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <span className="section-label mb-4 block text-primary-700">FAQ</span>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                                Questions this tool answers
                            </h2>
                        </div>
                        <FAQAccordion items={page.faqs} />
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-5xl rounded-[32px] bg-slate-950 p-8 text-center text-white shadow-2xl shadow-slate-300/60 md:p-12">
                        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white">
                            <Phone className="h-7 w-7" />
                        </div>
                        <h2 className="mx-auto mb-4 max-w-3xl font-serif text-3xl font-bold text-white md:text-5xl">
                            Want the workflow built after the report?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
                            Book a demo and we will show how Dooza turns customer support automation from a calculator result into a working workflow.
                        </p>
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
