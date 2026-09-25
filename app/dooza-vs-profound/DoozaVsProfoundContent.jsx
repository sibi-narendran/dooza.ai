'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, Sparkles, TrendingUp, Wrench,
    Users, FileText, Search, Eye, Target, BarChart3, Bot, Quote, Link2, PenTool,
} from 'lucide-react';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import BookingModalProvider from '@/components/BookingModalProvider';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trackFBViewContent } from '@/lib/analytics';

const summaryBullets = [
    'Profound is an AI visibility analytics platform: it tracks how ChatGPT, Perplexity, Gemini, Claude, and other answer engines mention and cite your brand.',
    'Dooza is an execution alternative: Ranky, Dooza\'s AI Visibility & Growth Employee, does the generative engine optimization (GEO) work that changes those answers.',
    'Profound wins on engine coverage (9 answer engines on Enterprise), Prompt Volumes data, and enterprise security (SSO/SAML, SOC 2).',
    'Dooza wins on doing the work — content, schema, citations, Reddit and Quora presence — at a published $49/mo, with engineers who set up your first AI employee free.',
];

const doozaAdvantages = [
    { icon: Wrench, title: 'It does the work, not just the report', desc: 'A share-of-voice chart does not publish a page, add schema, or earn a citation. Ranky researches topics, writes GEO-ready content, fixes on-page SEO, and publishes it to your site.' },
    { icon: Target, title: 'Published, SMB-sized pricing', desc: 'Ranky starts at $49/mo on Dooza Workforce, with a 7-day money-back guarantee and no contracts. Profound\'s Enterprise plan is custom-priced and requires a demo.' },
    { icon: Users, title: 'Engineers set it up with you', desc: 'Dooza is a Forward Deployed Engineer company. A human engineer maps your workflow on Day 1, builds on Day 2, and your first AI employee is live by Day 4 — setup is free.' },
    { icon: Quote, title: 'Built around how answer engines cite', desc: 'Ranky writes specific, citable claims with third-party sources, adds schema markup, keeps your name, address, and phone consistent, and shows up on Reddit and Quora threads.' },
];

// winner: 'dooza' | 'profound' | 'tie'
const comparisonRows = [
    { feature: 'What it is', dooza: 'AI employee (Ranky) that does SEO + GEO work, set up by Dooza engineers', competitor: 'AI visibility / answer engine optimization (AEO) analytics platform', winner: 'tie' },
    { feature: 'Core job', dooza: 'Execution — research, write, optimize, publish, engage', competitor: 'Monitoring — share of voice, citations, prompt tracking', winner: 'tie' },
    { feature: 'Answer engines tracked', dooza: 'Content built for ChatGPT, Perplexity, Claude, Gemini; brand-mention monitoring', competitor: 'Up to 9 on Enterprise: ChatGPT, Perplexity, Google AI Mode, Gemini, Copilot, DeepSeek, Claude, AI Overviews, Exa', winner: 'profound' },
    { feature: 'Prompt volume data', dooza: 'Not offered — uses real search data for keyword and topic research', competitor: 'Prompt Volumes', winner: 'profound' },
    { feature: 'AI crawler analytics', dooza: 'Not offered', competitor: 'Agent Analytics (AI bot visits to your site)', winner: 'profound' },
    { feature: 'Content creation & publishing', dooza: 'Daily or 3x/week posts with featured images; publishes to Shopify, WordPress, Wix, or custom sites', competitor: 'AI Marketer credits (limited on Trial, unlimited on Enterprise)', winner: 'dooza' },
    { feature: 'On-page SEO & schema', dooza: 'Ranky handles titles, meta, schema, and internal links', competitor: 'Surfaces Opportunities — implementation typically sits with your team', winner: 'dooza' },
    { feature: 'Off-site presence', dooza: 'Drafts brand-voice comments on Reddit, LinkedIn, YouTube; builds Reddit and Quora presence', competitor: 'Shows which sources answer engines cite', winner: 'dooza' },
    { feature: 'Human setup', dooza: 'Engineer sets up your first AI employee free, live in days', competitor: 'Self-serve 7-day trial; Enterprise requires a demo', winner: 'dooza' },
    { feature: 'Starting price', dooza: '$49/mo, published', competitor: 'Custom Enterprise pricing (demo required)', winner: 'dooza' },
    { feature: 'Try before you commit', dooza: '7-day money-back guarantee', competitor: '7-day free trial (50 prompts, 3 engines)', winner: 'tie' },
    { feature: 'Enterprise security', dooza: 'Not positioned as a SOC 2 enterprise suite', competitor: 'SSO/SAML + SOC 2 on Enterprise', winner: 'profound' },
    { feature: 'API & data exports', dooza: '1,000+ apps via Zapier; Close CRM, Notion, Drive context', competitor: 'API and exports on Enterprise', winner: 'profound' },
    { feature: 'Integrations', dooza: 'Shopify, WordPress, Wix, custom sites, 1,000+ apps via Zapier', competitor: 'Akamai, AWS, Cloudflare, Fastly, Google Analytics, GCP, Netlify, Vercel, WordPress', winner: 'tie' },
    { feature: 'Best for', dooza: 'SMBs, founders, local businesses, lean marketing teams, agencies that need outcomes', competitor: 'Large brands and agencies with analytics teams', winner: 'tie' },
];

const monitoringVsExecution = [
    { icon: Eye, feature: 'Answer Engine Insights', profound: 'Shows the answers where your brand is missing or misrepresented.', ranky: 'Researches those topics with real search data and publishes GEO-ready pages that answer them directly.' },
    { icon: BarChart3, feature: 'Share of voice', profound: 'Tells you competitors are mentioned more often than you.', ranky: 'Writes specific, citable claims with third-party sources — the content answer engines can quote.' },
    { icon: Link2, feature: 'Citations', profound: 'Lists the sources answer engines cite for your category.', ranky: 'Builds presence where citations come from: Reddit and Quora threads, consistent NAP listings, schema markup.' },
    { icon: Search, feature: 'Prompt Volumes', profound: 'Estimates which prompts people ask answer engines.', ranky: 'Turns priority topics into a publishing plan — daily or 3x/week, on your cadence.' },
    { icon: Bot, feature: 'Agent Analytics', profound: 'Reports which AI crawlers visit your pages.', ranky: 'Makes the pages they crawl easier to extract: titles, meta, schema, and internal links.' },
    { icon: PenTool, feature: 'AI Marketer', profound: 'Profound\'s content assistant, credit-limited on the Trial.', ranky: 'Trained on your brand voice in plain English, publishes to your CMS, and sends a nightly email recap.' },
];

const profoundTrial = [
    { text: '50 prompts, run daily for 7 days', neg: false },
    { text: '3 answer engines: ChatGPT, Gemini, Google AI Overviews', neg: false },
    { text: '1 language / region', neg: false },
    { text: 'Limited AI Marketer credits', neg: true },
    { text: 'No SSO, API, or support', neg: true },
];

const profoundEnterprise = [
    { text: 'Custom prompts across 9 answer engines', neg: false },
    { text: 'Unlimited AI Marketer credits', neg: false },
    { text: 'API, exports, SSO/SAML, SOC 2', neg: false },
    { text: 'Slack support', neg: false },
    { text: 'Custom pricing — demo required', neg: true },
];

const pickProfound = [
    'You are a large brand or agency with an analytics team that will act on dashboards',
    'You need coverage across 9 answer engines and prompt-volume data',
    'Procurement requires SSO/SAML, SOC 2, API access, and exports',
    'You already have writers and SEO staff to implement what the data shows',
];

const pickDooza = [
    'You are a small or mid-sized business, founder, or lean marketing team',
    'Nobody on your team has time to write, optimize, and publish every week',
    'You want a published price ($49/mo) instead of a sales-led quote',
    'You want an engineer to set it up with you instead of learning another tool',
];

const pickBoth = [
    'Profound tells you which prompts and answer engines you are missing from',
    'Ranky publishes the content, fixes the schema, and builds the citations to close those gaps',
    'Profound then shows whether share of voice moved',
];

export default function DoozaVsProfoundContent({ faqData }) {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
        trackFBViewContent('dooza_vs_profound', 'comparison_page');
    }, []);

    return (
        <BookingModalProvider>
            <Navbar />

            <main className={jsLoaded ? 'js-loaded' : ''}>
                {/* ── Hero ── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-teal-50 pt-36 pb-24 lg:pt-48 lg:pb-36">
                    <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-200/30 blur-3xl animate-blob" />
                        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl animate-blob animation-delay-2000" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="hero-entrance hero-delay-1">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    Comparison — Updated September 2026
                                </div>
                            </div>

                            <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Dooza vs <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Profound AI</span>
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                Profound shows you where you&apos;re invisible in AI answers. Dooza fixes it.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Profound (tryprofound.com) is an AI visibility platform that measures how answer engines like ChatGPT and Perplexity mention your brand. Dooza is the Profound alternative for teams that need generative engine optimization done: Ranky does the GEO work from $49/mo, and Dooza engineers set up your first AI employee free.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <BookDemoButton source="profound_hero" variant="primary">Get Your First AI Employee Free</BookDemoButton>
                                <SignupButton source="profound_hero" variant="inverse">Hire Ranky — $49/mo</SignupButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Quick Verdict ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="bg-gradient-to-br from-primary-50 to-teal-50 border border-primary-100 rounded-3xl p-8 md:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Quick Verdict</h2>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    <strong>Profound is a measurement tool. Dooza is an execution team.</strong> Profound tells you your share of voice, which sources answer engines cite, and which prompts you lose. It does not write your pages, fix your schema, or show up in the Reddit threads ChatGPT quotes. Someone still has to do that work.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Pick <strong>Profound</strong> if you are a large brand with an analytics team and need 9-engine coverage, prompt volumes, and SOC 2. Pick <strong>Dooza</strong> if you are a small or mid-sized business that needs AI visibility to actually improve — at a published price, with engineers who set it up.
                                </p>
                                <ul className="space-y-3">
                                    {summaryBullets.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <CheckCircle2 size={18} className="text-primary-500 shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Why Dooza — Feature Cards ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Why Dooza</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Why Teams Choose Dooza Over Profound</h2>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {doozaAdvantages.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full hover:border-primary-200 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                                            <item.icon className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── Full Comparison Table ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Head-to-Head</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Dooza vs Profound: Full Feature Comparison</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Honest scoring. Profound wins five rows. That is the point — they solve different problems.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white min-w-[680px] card-shadow">
                                    <table className="w-full border-collapse text-left">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-900 w-[24%]">Feature</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-primary-700 bg-primary-50/50 w-[38%]">Dooza (Ranky + engineers)</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[38%]">Profound</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-slate-600">
                                            {comparisonRows.map((row, i) => (
                                                <tr key={i} className="border-b border-slate-100 last:border-0">
                                                    <td className="p-4 md:p-5 font-medium text-slate-900">{row.feature}</td>
                                                    <td className={`p-4 md:p-5 ${row.winner === 'dooza' ? 'bg-primary-50/30 text-primary-800 font-medium' : ''}`}>
                                                        <div className="flex items-start gap-2">
                                                            {row.winner === 'dooza' && <CheckCircle2 size={16} className="text-primary-500 shrink-0 mt-0.5" />}
                                                            <span>{row.dooza}</span>
                                                        </div>
                                                    </td>
                                                    <td className={`p-4 md:p-5 ${row.winner === 'profound' ? 'bg-slate-50 text-slate-900 font-medium' : ''}`}>
                                                        <div className="flex items-start gap-2">
                                                            {row.winner === 'profound' && <CheckCircle2 size={16} className="text-slate-700 shrink-0 mt-0.5" />}
                                                            <span>{row.competitor}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4 italic text-center">
                                Check mark = stronger on that row. Unmarked rows are a tie or a different approach. Profound features from{' '}
                                <a href="https://www.tryprofound.com/pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">tryprofound.com/pricing</a>, checked September 25, 2026.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Pricing Breakdown ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 overflow-hidden relative">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Pricing Breakdown</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">Profound Pricing vs Dooza Pricing</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    Profound&apos;s pricing page lists a 7-day free trial and custom Enterprise pricing. Dooza publishes its price.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-primary-500/10 backdrop-blur-sm border border-primary-400/20 rounded-2xl p-8">
                                    <p className="text-primary-300 font-bold text-sm uppercase tracking-wider mb-2">Dooza</p>
                                    <div className="text-4xl font-bold text-white mb-1">$49<span className="text-base font-normal text-slate-400">/month</span></div>
                                    <p className="text-sm text-slate-400 mb-5">Ranky on Dooza Workforce. Growth plan $79/mo.</p>
                                    <ul className="space-y-2.5 text-sm">
                                        {[
                                            'Ranky: SEO + GEO in one AI employee',
                                            'Publishes content to your site on your cadence',
                                            'On-page SEO, schema, internal links',
                                            'First AI employee set up free by an engineer',
                                            'No contracts, cancel anytime',
                                            '7-day money-back guarantee',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-slate-300">
                                                <CheckCircle2 size={16} className="text-primary-400 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">Profound Trial</p>
                                    <div className="text-4xl font-bold text-white mb-1">Free<span className="text-base font-normal text-slate-400"> / 7 days</span></div>
                                    <p className="text-sm text-slate-500 mb-5">Listed on tryprofound.com/pricing.</p>
                                    <ul className="space-y-2.5 text-sm">
                                        {profoundTrial.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-slate-400">
                                                {item.neg
                                                    ? <XCircle size={16} className="text-red-400/60 shrink-0 mt-0.5" />
                                                    : <CheckCircle2 size={16} className="text-slate-500 shrink-0 mt-0.5" />
                                                }
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">Profound Enterprise</p>
                                    <div className="text-4xl font-bold text-white mb-1">Custom</div>
                                    <p className="text-sm text-slate-500 mb-5">Demo required before pricing.</p>
                                    <ul className="space-y-2.5 text-sm">
                                        {profoundEnterprise.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-slate-400">
                                                {item.neg
                                                    ? <XCircle size={16} className="text-red-400/60 shrink-0 mt-0.5" />
                                                    : <CheckCircle2 size={16} className="text-slate-500 shrink-0 mt-0.5" />
                                                }
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                                <h3 className="text-white font-bold text-lg mb-3">What Profound has cost, according to third-party reviews</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                    Reviews published in early-to-mid 2026 reported earlier self-serve tiers of about <strong className="text-white">$99/mo (Starter — ChatGPT only, 50 prompts)</strong> and <strong className="text-white">$399/mo (Growth — 3 engines, 100 prompts)</strong>, and enterprise deployments of roughly <strong className="text-white">$2,000–$5,000+ per month</strong>. These are not Profound&apos;s official current prices; its pricing page now shows only the Trial and custom Enterprise.
                                </p>
                                <p className="text-slate-400 text-xs">
                                    Sources:{' '}
                                    <a href="https://www.rankability.com/blog/profound-ai-review/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-300">Rankability Profound review</a>,{' '}
                                    <a href="https://arobis.ai/blog/profound-pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-300">Arobis Profound pricing</a>,{' '}
                                    <a href="https://www.tryprofound.com/pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-300">tryprofound.com/pricing</a>. Full breakdown in our{' '}
                                    <Link href="/blog/profound-ai-pricing" className="underline hover:text-primary-300">Profound AI pricing guide</Link>.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Monitoring vs Execution ── */}
                <section className="py-20 lg:py-28 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Monitoring vs Execution</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">What Profound Tells You — and What Ranky Does About It</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-3xl mx-auto">
                                    Every Profound insight ends with a to-do list. Here is each Profound feature, the gap it reveals, and the work Ranky does to close it.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 gap-6">
                            {monitoringVsExecution.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full">
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                                                <item.icon className="w-5 h-5 text-primary-600" />
                                            </div>
                                            <h3 className="text-lg font-bold">{item.feature}</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Profound shows you</p>
                                                <p className="text-sm text-slate-600 leading-relaxed">{item.profound}</p>
                                            </div>
                                            <div className="border-t border-slate-100 pt-4">
                                                <p className="text-xs text-primary-600 uppercase tracking-wider font-semibold mb-1">Ranky does</p>
                                                <p className="text-sm text-slate-800 leading-relaxed font-medium">{item.ranky}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <ScrollReveal>
                            <p className="text-sm text-slate-500 mt-10 text-center max-w-3xl mx-auto">
                                Why this work matters: the{' '}
                                <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">Princeton GEO study</a>{' '}
                                found that adding citations, quotations, and statistics can boost visibility in generative engine responses by up to roughly 40%. No tool can guarantee a citation — but the work is what moves the number.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Who Should Pick Which ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Decision Guide</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Should You Choose Profound or Dooza?</h2>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-3 gap-6">
                            <StaggerItem>
                                <div className="card-shadow bg-white rounded-2xl border border-slate-200 p-8 h-full">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                                        <BarChart3 className="w-5 h-5 text-slate-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Choose Profound if…</h3>
                                    <ul className="space-y-3">
                                        {pickProfound.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle2 size={16} className="text-slate-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="card-shadow bg-white rounded-2xl ring-2 ring-primary-200 border border-primary-200 p-8 h-full">
                                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                                        <Wrench className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Choose Dooza if…</h3>
                                    <ul className="space-y-3">
                                        {pickDooza.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                                <CheckCircle2 size={16} className="text-primary-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="card-shadow bg-white rounded-2xl border border-slate-200 p-8 h-full">
                                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                                        <FileText className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Use both if…</h3>
                                    <p className="text-sm text-slate-600 mb-3">You have the budget for enterprise monitoring and want the work done too:</p>
                                    <ol className="space-y-3 list-decimal list-inside text-sm text-slate-600">
                                        {pickBoth.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ol>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Frequently Asked Questions</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Dooza vs Profound FAQ</h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <FAQAccordion items={faqData} />
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── CTA Banner ── */}
                <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-teal-50 to-primary-50 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="cta-blob-1 absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-200/20 blur-3xl" />
                        <div className="cta-blob-2 absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal-200/20 blur-3xl" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Stop Watching the Dashboard. Start Fixing It.</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Book a call and a Dooza engineer will set up your first AI employee free — live in days, and you only pay to keep it. Or hire Ranky self-serve for $49/mo, backed by a 7-day money-back guarantee.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <BookDemoButton source="profound_cta" variant="primary">Get Your First AI Employee Free</BookDemoButton>
                                <SignupButton source="profound_cta" variant="inverse">Hire Ranky — $49/mo</SignupButton>
                            </div>
                            <p className="text-sm text-slate-500 mt-6">
                                <Link href="/agents/ranky" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium">
                                    See everything Ranky does <ArrowRight size={14} />
                                </Link>
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Related ── */}
                <section className="py-12 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="font-bold text-slate-900 mb-4">Related Guides &amp; Comparisons</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { href: '/profound-alternatives', label: 'Best Profound Alternatives' },
                                { href: '/generative-engine-optimization', label: 'Generative Engine Optimization Services' },
                                { href: '/agents/ranky', label: 'Meet Ranky' },
                                { href: '/blog/profound-ai-pricing', label: 'Profound AI Pricing 2026' },
                                { href: '/blog/best-geo-tools', label: 'Best GEO Tools' },
                                { href: '/alternatives', label: 'All Comparisons' },
                            ].map((link) => (
                                <Link key={link.href} href={link.href} className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                    {link.label} →
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
