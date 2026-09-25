'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    BarChart3,
    Bell,
    Building2,
    CheckCircle2,
    Code2,
    Eye,
    FileText,
    Globe,
    Hammer,
    Map as MapIcon,
    MapPin,
    MessageSquare,
    Newspaper,
    Quote,
    Rocket,
    Search,
    ShoppingBag,
    Sparkles,
    Store,
    Users,
    XCircle,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { trackFBViewContent } from '@/lib/analytics';

const PRINCETON_GEO_PAPER = 'https://arxiv.org/abs/2311.09735';

const summary = [
    'GEO gets your business mentioned and cited inside AI answers from ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews.',
    'GEO tools such as Profound, Otterly and Peec AI measure your AI visibility. They do not write the content or earn the citations for you.',
    'Dooza does the work: Ranky, the AI Visibility employee, publishes citable content, fixes schema and builds third-party presence every day.',
    'A Dooza forward-deployed engineer sets it up. Your first AI employee is free, and Ranky runs from $49/month with no contracts.',
];

const geoVsSeoRows = [
    { aspect: 'Goal', seo: 'Rank pages in search results and win the click', geo: 'Get your brand mentioned and cited inside the AI answer' },
    { aspect: 'Where it shows up', seo: 'Google and Bing results pages', geo: 'ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews and AI Mode' },
    { aspect: 'Unit of success', seo: 'Rankings, clicks, organic traffic', geo: 'Mentions, citations, share of voice in AI answers' },
    { aspect: 'What content wins', seo: 'Pages that match search intent and earn links', geo: 'Specific, citable claims with sources, statistics and quotations' },
    { aspect: 'Off-site signals', seo: 'Backlinks', geo: 'Third-party mentions on Reddit, reviews, lists, YouTube and news' },
    { aspect: 'Technical base', seo: 'Crawlability, speed, schema', geo: 'Same, plus AI crawler access and clean, consistent entity facts' },
];

const services = [
    {
        icon: FileText,
        title: 'Citable content, published daily',
        desc: 'Ranky researches topics with real search data and publishes GEO-ready articles on your cadence (daily or 3x a week) with specific claims, sources, featured images and embedded YouTube videos and Reddit threads.',
        color: 'bg-primary-50 text-primary-700',
    },
    {
        icon: Code2,
        title: 'Schema and on-page fixes',
        desc: 'Titles, meta descriptions, schema markup and internal links are handled on every page Ranky touches, so answer engines can parse who you are and what you offer.',
        color: 'bg-violet-50 text-violet-700',
    },
    {
        icon: Globe,
        title: 'AI-crawler readiness and llms.txt',
        desc: 'During setup, your Dooza engineer checks that AI crawlers are not blocked in robots.txt and can help add an llms.txt so your most important pages are easy for AI systems to find.',
        color: 'bg-sky-50 text-sky-700',
    },
    {
        icon: MessageSquare,
        title: 'Reddit, LinkedIn and YouTube presence',
        desc: 'Ranky finds relevant conversations and drafts brand-voice comments. You approve them or let them auto-send, so your business shows up where answer engines read.',
        color: 'bg-amber-50 text-amber-700',
    },
    {
        icon: Quote,
        title: 'Third-party citations',
        desc: 'GEO rewards what others say about you. Ranky builds content and presence designed to earn mentions on third-party pages, not only on your own site.',
        color: 'bg-rose-50 text-rose-700',
    },
    {
        icon: MapPin,
        title: 'Consistent NAP and brand facts',
        desc: 'Your name, address and phone number stay consistent across the web, which helps AI systems treat your business as one clear, trustworthy entity.',
        color: 'bg-teal-50 text-teal-700',
    },
    {
        icon: Eye,
        title: 'Mention monitoring',
        desc: 'Ranky watches who is mentioning you and where, so you can see the conversations that shape how AI describes your brand.',
        color: 'bg-indigo-50 text-indigo-700',
    },
    {
        icon: Bell,
        title: 'Nightly recap',
        desc: 'Every night you get an email recap of what Ranky published, commented on and found. No dashboard to log in to.',
        color: 'bg-emerald-50 text-emerald-700',
    },
];

const steps = [
    {
        icon: MapIcon,
        step: 'Day 1',
        title: 'Map',
        desc: 'A Dooza engineer learns your business, your buyers and the questions they ask AI. We agree on topics, cadence, channels and approval rules.',
        color: 'bg-primary-50 text-primary-700',
        badge: 'text-primary-700 bg-primary-50',
    },
    {
        icon: Hammer,
        step: 'Day 2',
        title: 'Build',
        desc: 'We connect your site (Shopify, WordPress, Wix or custom), train Ranky on your brand voice in plain English, and check schema, robots.txt and llms.txt.',
        color: 'bg-violet-50 text-violet-700',
        badge: 'text-violet-700 bg-violet-50',
    },
    {
        icon: Rocket,
        step: 'Day 4',
        title: 'Live',
        desc: 'Ranky starts publishing, commenting and monitoring on your real accounts. You get a nightly recap and pay only if you want to keep it.',
        color: 'bg-amber-50 text-amber-700',
        badge: 'text-amber-700 bg-amber-50',
    },
];

const signals = [
    {
        title: 'Cite credible sources',
        desc: 'Link claims to primary sources. In the Princeton GEO study, adding citations was one of the strongest methods for improving visibility in generative engine responses.',
        research: true,
    },
    {
        title: 'Add quotations',
        desc: 'Quote named experts, customers or official documents. Quotation addition was another top-performing method in the study.',
        research: true,
    },
    {
        title: 'Use specific statistics',
        desc: 'Replace vague claims with real numbers and link where they came from. Statistics addition also ranked among the most effective methods.',
        research: true,
    },
    {
        title: 'Answer directly, early',
        desc: 'Put a one-paragraph answer at the top of the page, then use clear headings, lists and tables. Short, self-contained passages are easier for AI to extract.',
        research: false,
    },
    {
        title: 'Mark it up with schema',
        desc: 'Organization, Service, Product, FAQPage and Article schema tell machines exactly what a page is about and who stands behind it.',
        research: false,
    },
    {
        title: 'Earn third-party mentions',
        desc: 'Answer engines lean on community threads, reviews, videos and lists. Presence on Reddit, LinkedIn and YouTube gives them more places to find you.',
        research: false,
    },
    {
        title: 'Keep entity facts consistent',
        desc: 'The same name, address, phone, pricing and descriptions everywhere, plus open access for AI crawlers, so models do not have to guess.',
        research: false,
    },
];

const comparisonRows = [
    {
        feature: 'What you get',
        dooza: 'The work done: content, schema, mentions and monitoring',
        tools: 'Dashboards that measure AI visibility, citations and share of voice',
        agency: 'A team that plans and delivers GEO work',
    },
    {
        feature: 'Who does the work',
        dooza: 'Ranky daily, set up by a Dooza engineer',
        tools: 'Your team (the tool shows where to act)',
        agency: 'Agency staff',
    },
    {
        feature: 'Price',
        dooza: 'Ranky from $49/mo; first AI employee set up free',
        tools: 'Otterly.ai ~$29/mo Lite, Peec AI ~$89–95/mo (third-party reported); Profound Enterprise is custom-priced',
        agency: 'Monthly retainer; varies by agency and scope',
    },
    {
        feature: 'Publishes content',
        dooza: 'Yes, on your cadence',
        tools: 'Mostly no (Profound offers an AI Marketer content feature)',
        agency: 'Yes',
    },
    {
        feature: 'Community presence (Reddit, LinkedIn, YouTube)',
        dooza: 'Yes, brand-voice comments you approve or auto-send',
        tools: 'No',
        agency: 'Sometimes, often at extra cost',
    },
    {
        feature: 'Answer-engine tracking depth',
        dooza: 'Mention monitoring and nightly recap, not prompt-level dashboards',
        tools: 'Strongest: prompt tracking across engines (Profound Enterprise lists 9 answer engines)',
        agency: 'Depends on the tools the agency uses',
    },
    {
        feature: 'Contract',
        dooza: 'No contracts, 7-day money-back guarantee on Workforce',
        tools: 'Monthly plans; Profound Enterprise requires a demo',
        agency: 'Usually a retainer agreement',
    },
    {
        feature: 'Best for',
        dooza: 'SMBs, local businesses, SaaS, ecommerce and agencies that need output',
        tools: 'Brands and agencies with an analytics team to act on the data',
        agency: 'Companies that want a fully managed human team and have the budget',
    },
];

const audiences = [
    { icon: Store, title: 'Small and mid-sized businesses', desc: 'Show up when buyers ask AI for the best option in your category, without hiring a content team.' },
    { icon: MapPin, title: 'Local businesses', desc: 'Consistent NAP, local content and community mentions help AI recommend you for "near me" questions.', link: { href: '/industries', label: 'See industries we serve' } },
    { icon: BarChart3, title: 'SaaS companies', desc: 'Earn citations in comparison and "best tool for" answers, where software buyers now start their research.' },
    { icon: ShoppingBag, title: 'Ecommerce stores', desc: 'Ranky publishes directly to Shopify, WordPress and Wix, so product and buying-guide content keeps flowing.' },
    { icon: Building2, title: 'Agencies', desc: 'Deliver GEO execution for clients without adding headcount. Pair Ranky with the tracker your clients already use.' },
    { icon: Users, title: 'Founders and lean teams', desc: 'If you already know you are invisible in AI search, you need someone to do the work. That is what Ranky is for.' },
];

const relatedLinks = [
    { href: '/dooza-vs-profound', label: 'Dooza vs Profound' },
    { href: '/profound-alternatives', label: 'Best Profound alternatives' },
    { href: '/agents/ranky', label: 'Meet Ranky, the AI Visibility employee' },
    { href: '/blog/what-is-generative-engine-optimization', label: 'What is generative engine optimization?' },
    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO explained' },
    { href: '/blog/how-to-rank-in-chatgpt', label: 'How to rank in ChatGPT' },
    { href: '/blog/best-geo-tools', label: 'Best GEO tools' },
    { href: '/pricing', label: 'Dooza pricing' },
];

export default function GeoServicesContent({ faqData }) {
    useEffect(() => {
        trackFBViewContent('generative_engine_optimization', 'solution_page');
    }, []);

    return (
        <BookingModalProvider>
            <Navbar />

            <main id="main-content" className="bg-warm text-slate-900">
                {/* Hero */}
                <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden="true" />
                    <div className="relative z-10 mx-auto max-w-5xl">
                        <Breadcrumbs items={[{ label: 'Solutions', href: '/ai-solutions-for-business' }, { label: 'GEO Services' }]} />
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-bold text-primary-700 shadow-sm backdrop-blur">
                            <Sparkles className="h-4 w-4" />
                            GEO services · Updated September 2026
                        </div>
                        <h1 className="mb-7 font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-6xl">
                            Generative Engine Optimization (GEO) Services: Get Cited by <span className="text-primary-600">ChatGPT, Perplexity &amp; Google AI</span>
                        </h1>
                        <p className="mb-5 max-w-3xl text-lg leading-relaxed text-slate-700 md:text-xl">
                            <strong>Generative engine optimization (GEO)</strong> is the work of making your business easy for AI answer engines such as ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews to find, trust and cite. It is also called answer engine optimization (AEO) or LLM SEO.
                        </p>
                        <p className="mb-9 max-w-3xl text-lg leading-relaxed text-slate-600">
                            Dooza does GEO for you. <Link href="/agents/ranky" className="font-semibold text-primary-700 underline decoration-primary-200 underline-offset-4 hover:decoration-primary-500">Ranky</Link>, Dooza&apos;s AI Visibility employee, publishes citable content, fixes schema, builds your presence on Reddit, LinkedIn and YouTube, and monitors your mentions every day. Dooza forward-deployed engineers set it up, and your first AI employee is free.
                        </p>
                        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                            <BookDemoButton source="geo_hero" variant="primary">Get Your Free GEO Setup</BookDemoButton>
                            <SignupButton source="geo_hero" variant="primary" className="!bg-white !text-primary-800 border-2 border-primary-200 !shadow-none hover:!bg-primary-50">
                                Start Ranky at $49/mo
                            </SignupButton>
                        </div>
                        <p className="mt-8 flex flex-wrap items-start gap-x-5 gap-y-2 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Live in days</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> No contracts</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-500" /> 7-day money-back guarantee</span>
                        </p>
                    </div>
                </section>

                {/* Quick summary */}
                <section className="border-y border-primary-100 bg-white px-4 py-14">
                    <div className="mx-auto max-w-5xl">
                        <h2 className="mb-6 font-sans text-xl font-extrabold text-slate-950">GEO services in 30 seconds</h2>
                        <ul className="grid gap-4 md:grid-cols-2">
                            {summary.map((item) => (
                                <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-slate-700">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* The problem */}
                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-5xl">
                        <ScrollReveal>
                            <span className="section-label mb-4 block">The problem</span>
                            <h2 className="mb-6 font-serif text-3xl font-bold text-slate-950 md:text-5xl">Why does AI search visibility matter now?</h2>
                        </ScrollReveal>
                        <div className="grid gap-10 md:grid-cols-2">
                            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                                <p>
                                    Buyers now ask ChatGPT, Perplexity and Google AI Overviews questions like &quot;best accountant near me&quot; or &quot;which CRM should a 10-person team use?&quot; The AI writes one answer and names a handful of businesses.
                                </p>
                                <p>
                                    If your business is not mentioned or cited in that answer, you are invisible for that question, even if you rank well on Google.
                                </p>
                                <p>
                                    AI visibility platforms like Profound, Otterly and Peec AI are good at showing this gap. They track share of voice, citations and which prompts mention competitors. But a dashboard does not publish content, fix schema or earn a Reddit mention. Someone still has to do the work.
                                </p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                                        <Search className="h-5 w-5" />
                                    </div>
                                    <p className="font-bold text-slate-900">Profound shows you where you are invisible. Dooza fixes it.</p>
                                </div>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    {[
                                        'Monitoring tools: measure mentions, citations and share of voice',
                                        'Your team: turns those gaps into content, schema and outreach',
                                        'Dooza: Ranky does that execution daily, and an engineer sets it up',
                                    ].map((line) => (
                                        <li key={line} className="flex items-start gap-2.5">
                                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GEO vs SEO */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-5xl">
                        <ScrollReveal>
                            <div className="mb-12 text-center">
                                <span className="section-label mb-4 block">GEO vs SEO</span>
                                <h2 className="mb-4 font-serif text-3xl font-bold text-slate-950 md:text-5xl">How is GEO different from SEO?</h2>
                                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                                    SEO wins the click. GEO wins the mention inside the answer. You need both, which is why Ranky does Google SEO and GEO in one employee.
                                </p>
                            </div>
                        </ScrollReveal>
                        <div className="-mx-4 overflow-x-auto px-4">
                            <div className="card-shadow min-w-[640px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
                                <table className="w-full border-collapse text-left">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="w-[22%] border-b p-4 font-bold text-slate-900 md:p-5">&nbsp;</th>
                                            <th className="w-[39%] border-b p-4 font-bold text-slate-600 md:p-5">SEO</th>
                                            <th className="w-[39%] border-b bg-primary-50/50 p-4 font-bold text-primary-700 md:p-5">GEO</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-slate-600">
                                        {geoVsSeoRows.map((row) => (
                                            <tr key={row.aspect} className="border-b border-slate-100 last:border-0">
                                                <td className="p-4 font-medium text-slate-900 md:p-5">{row.aspect}</td>
                                                <td className="p-4 md:p-5">{row.seo}</td>
                                                <td className="bg-primary-50/30 p-4 text-primary-900 md:p-5">{row.geo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="mt-4 text-center text-sm text-slate-500">
                            Deeper dive: <Link href="/blog/geo-vs-seo" className="font-semibold text-primary-700 hover:underline">GEO vs SEO explained</Link>
                        </p>
                    </div>
                </section>

                {/* What's included */}
                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <ScrollReveal>
                            <div className="mb-16 text-center">
                                <span className="section-label mb-4 block">What&apos;s included</span>
                                <h2 className="mb-4 font-serif text-3xl font-bold text-slate-950 md:text-5xl">What do Dooza&apos;s GEO services include?</h2>
                                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                                    Everything below is done by Ranky, Dooza&apos;s AI Visibility employee, with setup and tuning by a Dooza engineer.
                                </p>
                            </div>
                        </ScrollReveal>
                        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {services.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <StaggerItem key={s.title}>
                                        <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${s.color}`}>
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="mb-2 font-sans text-lg font-extrabold text-slate-950">{s.title}</h3>
                                            <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
                            Ranky publishes to Shopify, WordPress, Wix and custom sites via API or Zapier, connects to 1,000+ apps, and learns your brand voice from plain-English instructions plus context from Close CRM, Notion and Google Drive.
                        </p>
                    </div>
                </section>

                {/* How it works */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <ScrollReveal>
                            <div className="mb-16 text-center">
                                <span className="section-label mb-4 block">How it works</span>
                                <h2 className="mb-4 font-serif text-3xl font-bold text-slate-950 md:text-5xl">How does Dooza set up GEO?</h2>
                                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                                    A forward-deployed engineer does the setup with you. Your first AI employee is free, and you pay only if you want to keep it.
                                </p>
                            </div>
                        </ScrollReveal>
                        <StaggerContainer className="grid gap-8 md:grid-cols-3">
                            {steps.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <StaggerItem key={s.step}>
                                        <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                            <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${s.color}`}>
                                                <Icon className="h-8 w-8" />
                                            </div>
                                            <span className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${s.badge}`}>{s.step}</span>
                                            <h3 className="mb-3 font-sans text-xl font-extrabold text-slate-950">{s.title}</h3>
                                            <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* GEO playbook */}
                <section className="bg-slate-50 px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-5xl">
                        <ScrollReveal>
                            <div className="mb-12 text-center">
                                <span className="section-label mb-4 block">GEO playbook</span>
                                <h2 className="mb-4 font-serif text-3xl font-bold text-slate-950 md:text-5xl">The 7 signals answer engines cite</h2>
                                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
                                    The first three come from the Princeton-led research paper{' '}
                                    <a href={PRINCETON_GEO_PAPER} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-700 underline decoration-primary-200 underline-offset-4 hover:decoration-primary-500">
                                        &quot;GEO: Generative Engine Optimization&quot;
                                    </a>
                                    , which found that adding citations, quotations and statistics can boost a source&apos;s visibility in generative engine responses by up to about 40%. The other four are practitioner signals Ranky applies on every page.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ol className="space-y-4">
                            {signals.map((s, i) => (
                                <li key={s.title} className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-700">{i + 1}</span>
                                    <div>
                                        <h3 className="mb-1 flex flex-wrap items-center gap-2 font-sans text-lg font-extrabold text-slate-950">
                                            {s.title}
                                            {s.research && (
                                                <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-bold text-teal-700">Backed by GEO research</span>
                                            )}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-8 text-center text-sm text-slate-500">
                            Step-by-step guide: <Link href="/blog/how-to-rank-in-chatgpt" className="font-semibold text-primary-700 hover:underline">How to rank in ChatGPT and Perplexity</Link>
                        </p>
                    </div>
                </section>

                {/* Comparison */}
                <section className="bg-white px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-6xl">
                        <ScrollReveal>
                            <div className="mb-12 text-center">
                                <span className="section-label mb-4 block">Compare your options</span>
                                <h2 className="mb-4 font-serif text-3xl font-bold text-slate-950 md:text-5xl">Dooza vs GEO tools vs GEO agencies</h2>
                                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                                    Each option fits a different team. Here is an honest breakdown.
                                </p>
                            </div>
                        </ScrollReveal>
                        <div className="-mx-4 overflow-x-auto px-4">
                            <div className="card-shadow min-w-[820px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
                                <table className="w-full border-collapse text-left">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="w-[19%] border-b p-4 font-bold text-slate-900 md:p-5">&nbsp;</th>
                                            <th className="w-[27%] border-b bg-primary-50/50 p-4 font-bold text-primary-700 md:p-5">Dooza (Ranky + engineers)</th>
                                            <th className="w-[27%] border-b p-4 font-bold text-slate-600 md:p-5">GEO monitoring tools (Profound, Otterly, Peec AI)</th>
                                            <th className="w-[27%] border-b p-4 font-bold text-slate-600 md:p-5">Traditional GEO/SEO agencies</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-slate-600">
                                        {comparisonRows.map((row) => (
                                            <tr key={row.feature} className="border-b border-slate-100 last:border-0">
                                                <td className="p-4 font-medium text-slate-900 md:p-5">{row.feature}</td>
                                                <td className="bg-primary-50/30 p-4 font-medium text-primary-900 md:p-5">{row.dooza}</td>
                                                <td className="p-4 md:p-5">{row.tools}</td>
                                                <td className="p-4 md:p-5">{row.agency}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="mx-auto mt-4 max-w-4xl text-center text-xs italic leading-relaxed text-slate-500">
                            As of September 2026. Profound lists a 7-day free trial and custom-priced Enterprise plan on its{' '}
                            <a href="https://www.tryprofound.com/pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">pricing page</a>
                            ; third-party reviews (for example{' '}
                            <a href="https://www.rankability.com/blog/profound-ai-review/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">Rankability</a>
                            ) report earlier self-serve tiers and enterprise deployments of roughly $2,000–$5,000+/mo. Otterly.ai and Peec AI prices are third-party reported. Check each vendor for current pricing.
                        </p>
                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-primary-100 bg-primary-50/40 p-6">
                                <p className="mb-3 flex items-center gap-2 font-bold text-slate-900"><CheckCircle2 className="h-5 w-5 text-primary-600" /> Choose Dooza if</p>
                                <p className="text-sm leading-relaxed text-slate-600">You know AI search matters and need the content, schema and mentions actually produced every week, on a small-business budget.</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <p className="mb-3 flex items-center gap-2 font-bold text-slate-900"><XCircle className="h-5 w-5 text-slate-400" /> Choose a monitoring tool if</p>
                                <p className="text-sm leading-relaxed text-slate-600">You have an analytics team that needs prompt-level share-of-voice data across many engines. Profound is strong here for large brands; you can also pair it with Ranky.</p>
                            </div>
                        </div>
                        <p className="mt-6 text-center text-sm text-slate-500">
                            Full breakdowns: <Link href="/dooza-vs-profound" className="font-semibold text-primary-700 hover:underline">Dooza vs Profound</Link>
                            {' · '}
                            <Link href="/profound-alternatives" className="font-semibold text-primary-700 hover:underline">Profound alternatives</Link>
                            {' · '}
                            <Link href="/blog/best-geo-tools" className="font-semibold text-primary-700 hover:underline">Best GEO tools</Link>
                        </p>
                    </div>
                </section>

                {/* Who it's for */}
                <section className="bg-warm px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <ScrollReveal>
                            <div className="mb-16 text-center">
                                <span className="section-label mb-4 block">Who it&apos;s for</span>
                                <h2 className="mb-4 font-serif text-3xl font-bold text-slate-950 md:text-5xl">Who are Dooza GEO services for?</h2>
                            </div>
                        </ScrollReveal>
                        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {audiences.map((a) => {
                                const Icon = a.icon;
                                return (
                                    <StaggerItem key={a.title}>
                                        <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="mb-2 font-sans text-lg font-extrabold text-slate-950">{a.title}</h3>
                                            <p className="text-sm leading-relaxed text-slate-600">{a.desc}</p>
                                            {a.link && (
                                                <Link href={a.link.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:underline">
                                                    {a.link.label} <ArrowRight className="h-3.5 w-3.5" />
                                                </Link>
                                            )}
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Pricing / offer */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 px-4 py-20 md:py-28">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" aria-hidden="true" />
                    <div className="relative mx-auto max-w-5xl">
                        <ScrollReveal>
                            <div className="mb-12 text-center">
                                <span className="section-label mb-4 block">Pricing</span>
                                <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">What do GEO services from Dooza cost?</h2>
                            </div>
                        </ScrollReveal>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-primary-400/20 bg-primary-500/10 p-8">
                                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary-300">Ranky on Dooza Workforce</p>
                                <div className="mb-1 text-4xl font-bold text-white">$49<span className="text-base font-normal text-slate-400">/month</span></div>
                                <p className="mb-5 text-sm text-slate-400">Growth plan $79/month. 7-day money-back guarantee.</p>
                                <ul className="space-y-2.5 text-sm">
                                    {['Daily or 3x-a-week publishing', 'Schema, meta and internal links', 'Reddit, LinkedIn and YouTube comments', 'Mention monitoring and nightly recap'].map((item) => (
                                        <li key={item} className="flex items-center gap-2.5 text-slate-300">
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-400" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-300">Dooza Agents setup</p>
                                <div className="mb-1 text-4xl font-bold text-white">Free<span className="text-base font-normal text-slate-400"> first AI employee</span></div>
                                <p className="mb-5 text-sm text-slate-400">Pay only if you keep it. No contracts.</p>
                                <ul className="space-y-2.5 text-sm">
                                    {['A Dooza engineer maps and builds with you', 'Live in days: Day 1 map, Day 2 build, Day 4 live', 'Brand-voice training in plain English', 'Ongoing tuning by the Dooza team'].map((item) => (
                                        <li key={item} className="flex items-center gap-2.5 text-slate-300">
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="mt-6 text-center text-sm text-slate-400">
                            See all plans on the <Link href="/pricing" className="font-semibold text-primary-300 hover:underline">pricing page</Link>.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-slate-50 px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-3xl">
                        <ScrollReveal>
                            <div className="mb-10 text-center">
                                <span className="section-label mb-4 block">FAQ</span>
                                <h2 className="font-serif text-3xl font-bold md:text-5xl">GEO services: frequently asked questions</h2>
                            </div>
                        </ScrollReveal>
                        <FAQAccordion items={faqData} />
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative overflow-hidden bg-warm px-4 py-20 md:py-28">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/80 via-warm to-warm" aria-hidden="true" />
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <ScrollReveal>
                            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                <Newspaper className="h-8 w-8" />
                            </div>
                            <h2 className="mb-6 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
                                Stop watching the dashboard. Start getting cited.
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                                Book a call with a Dooza engineer. We will map the questions your buyers ask AI, set up Ranky for free, and have it publishing within days.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <BookDemoButton source="geo_final" variant="primary">Book Your Free GEO Setup</BookDemoButton>
                                <SignupButton source="geo_final" className="!bg-white !text-primary-800 border-2 border-primary-200 !shadow-none hover:!bg-primary-50">
                                    Start Ranky at $49/mo
                                </SignupButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Related */}
                <section className="border-t border-slate-100 bg-white py-12">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-4 font-sans text-lg font-bold text-slate-900">Related GEO guides and comparisons</h2>
                        <div className="flex flex-wrap gap-3">
                            {relatedLinks.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="rounded-lg border border-primary-100 bg-primary-50 px-4 py-2 text-sm text-primary-600 transition-colors hover:border-primary-200 hover:text-primary-700"
                                >
                                    {l.label} →
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
