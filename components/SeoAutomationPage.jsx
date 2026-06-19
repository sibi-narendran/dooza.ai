'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    BadgeCheck,
    BarChart3,
    Bot,
    CheckCircle2,
    CircleDollarSign,
    FileText,
    GitBranch,
    Layers3,
    ListChecks,
    Rocket,
    Search,
    ShieldCheck,
    Sparkles,
    Workflow,
    Zap,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import { automationSeoPages } from '@/lib/seoAutomationPages';

const relatedIcons = [Workflow, Search, FileText, Layers3, Rocket];

function metricLabel(value) {
    return value === 'N/A' ? 'not listed' : value;
}

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

function SearchSignalCard({ page }) {
    const metrics = [
        { label: 'Target keyword', value: page.keyword, icon: Search },
        { label: 'Keyword difficulty', value: `KD ${page.kd}`, icon: BarChart3 },
        { label: 'US search volume', value: page.volume, icon: Zap },
        { label: 'CPC', value: metricLabel(page.cpc), icon: CircleDollarSign },
    ];

    return (
        <div className="grid gap-3 rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 md:p-6">
            <div className="mb-2 flex items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary-600">Search opportunity</p>
                    <h2 className="mt-2 text-xl font-extrabold text-slate-950">Low-difficulty SEO target</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                    <BadgeCheck className="h-6 w-6" />
                </div>
            </div>
            {metrics.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 shadow-sm">
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{item.label}</div>
                                <div className="mt-1 text-base font-extrabold text-slate-950">{item.value}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <p className="rounded-2xl border border-primary-100 bg-primary-50 p-4 text-sm font-semibold leading-relaxed text-primary-900">
                This page is built from the video playbook: pick a realistic keyword, create a useful page or tool, then route visitors into the product.
            </p>
        </div>
    );
}

function PlannerTool({ page }) {
    const [selected, setSelected] = useState(() => (
        Object.fromEntries(page.toolFields.map((field) => [field.id, field.options[0]]))
    ));

    const primaryChoice = selected[page.toolFields[0].id];
    const recommendation = page.recommendations[primaryChoice] || Object.values(page.recommendations)[0];

    return (
        <div className="rounded-[28px] border border-primary-100 bg-white p-5 shadow-xl shadow-primary-100/50 md:p-7">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                    <span className="section-label mb-3 block text-primary-600">Free planner</span>
                    <h2 className="font-serif text-3xl font-bold text-slate-950">{page.toolTitle}</h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">{page.toolDescription}</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-white shadow-lg shadow-primary-200">
                    <Workflow className="h-7 w-7" />
                </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
                <div className="space-y-5">
                    {page.toolFields.map((field) => (
                        <label key={field.id} className="block">
                            <span className="mb-2 block text-sm font-extrabold text-slate-900">{field.label}</span>
                            <select
                                value={selected[field.id]}
                                onChange={(event) => setSelected((current) => ({ ...current, [field.id]: event.target.value }))}
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100"
                            >
                                {field.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>
                    ))}
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white md:p-6">
                    <div className="mb-4 flex items-center gap-2 text-sm font-extrabold text-primary-300">
                        <Sparkles className="h-4 w-4" />
                        Recommended first workflow
                    </div>
                    <p className="text-lg font-bold leading-relaxed">{recommendation}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {['Trigger', 'AI step', 'Approval'].map((item, index) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                                <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Step {index + 1}</div>
                                <div className="mt-1 font-bold text-white">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function WorkflowStrip() {
    const items = [
        { label: 'Keyword', icon: Search },
        { label: 'Useful tool', icon: ListChecks },
        { label: 'Workflow demo', icon: GitBranch },
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
                                    KD {item.kd} | US volume {item.volume} | {item.keyword}
                                </p>
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
                <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
                        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-100/50 blur-3xl" />
                    </div>

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                {page.eyebrow}
                            </div>
                            <h1 className="mb-7 max-w-4xl font-serif text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                                {page.heroTitle}
                            </h1>
                            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                {page.heroText}
                            </p>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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

                        <SearchSignalCard page={page} />
                    </div>
                </section>

                <section className="border-y border-slate-200 bg-white px-4 py-12 md:px-8">
                    <div className="mx-auto max-w-7xl">
                        <WorkflowStrip />
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <PlannerTool page={page} />
                    </div>
                </section>

                <section className="bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeader
                            eyebrow="Workflow plan"
                            title="What this page should help the visitor understand"
                            description="The page is useful on its own, then moves the visitor toward a Dooza workflow demo."
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
                                Each page connects search intent to a business workflow that Dooza can demonstrate visually.
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
                            eyebrow="Why this can rank"
                            title="Built around search intent, not generic AI copy"
                            description="The target keyword is visible in the page, the page contains a useful planner, and every CTA ties back to Dooza."
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
                            eyebrow="Topic cluster"
                            title="More AI automation pages"
                            description="These pages internally link together so crawlers and visitors can move through the full AI automation topic cluster."
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
