'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProductSignupUrl } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedPosts from '../../../components/RelatedPosts';
import InternalLinks from '../../../components/InternalLinks';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import BlogHeroImage from '../../../components/BlogHeroImage';
import {
    ArrowRight,
    Bot,
    Calendar,
    CheckCircle2,
    Clock,
    DollarSign,
    Layers,
    PenTool,
    Search,
    ShieldCheck,
    Sparkles,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best Outrank.so alternative?",
        answer: "It depends on who you want doing the work. Outrank.so is a strong self-serve autopilot tool: it plans keywords, writes in your voice, adds internal links and YouTube videos, and publishes to your CMS. Dooza Ranky is the alternative if you want the work done for you: Ranky, Dooza's AI SEO & visibility employee, and Dooza engineers research, write, and publish with your approval, and every Dooza product starts with a refundable pilot (100% refund within 14 days)."
    },
    {
        question: "Is Dooza better than Outrank.so?",
        answer: "Not for everyone. Outrank is the better pick if you want a self-serve tool you run yourself, with a published monthly price and its backlink exchange. Dooza is the better pick if you want Dooza engineers to set up and run the SEO work with you, and want Ranky alongside other AI employees for email, social media, sales, and calls."
    },
    {
        question: "How much does Outrank.so cost?",
        answer: "Outrank.so lists its all-in-one plan at $99/month (shown against a struck-through $199/month), or $999/year, with 30 articles per month. You can add 60 articles/month for +$85/month or 90 articles/month for +$160/month. The plan includes CMS publishing, AI images, backlink exchange, YouTube videos, and 150+ languages (checked October 7, 2026, on outrank.so/pricing)."
    },
    {
        question: "Why should I choose Dooza instead of Outrank.so?",
        answer: "Choose Dooza if you want the SEO and AI-visibility work done for you rather than another tool to run. A Dooza engineer scopes your pilot on a free 30-minute call, Ranky is trained on your brand voice, and nothing goes live without your approval. Dooza also connects the content to its other AI employees for email, social media, sales, and calls."
    },
    {
        question: "Can Dooza Ranky create SEO blog posts with YouTube videos?",
        answer: "Yes. Ranky can produce SEO blog content with relevant YouTube embeds, supporting research, internal links, FAQs, and conversion sections. Outrank.so also adds relevant YouTube videos to its articles, so this is not a point of difference between the two."
    },
    {
        question: "Who should still consider Outrank.so?",
        answer: "Outrank.so is a good fit if you want a self-serve autopilot blog tool with a published price, you are comfortable reviewing drafts inside your CMS, and you want options like its backlink exchange, REST API, or MCP server. If you want Dooza engineers to do the work with you, and a broader AI workforce, Dooza is the better alternative."
    }
];

const tocItems = [
    { id: 'introduction', label: 'Quick Verdict' },
    { id: 'what-is-outrank', label: 'What Outrank Does' },
    { id: 'why-look', label: 'Why Look Elsewhere' },
    { id: 'dooza-alternative', label: 'Dooza Alternative' },
    { id: 'comparison', label: 'Side-by-Side' },
    { id: 'seo-quality', label: 'SEO Quality' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'youtube', label: 'Video Content' },
    { id: 'winner', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' }
];

const comparisonRows = [
    ['Best fit', 'Self-serve autopilot blog publishing', 'Done-for-you SEO and AI visibility, plus other AI employees', 'Depends'],
    ['Who does the work', 'You run the tool; it plans, writes, and publishes on autopilot', 'Ranky and Dooza engineers research, write, and publish; you approve', 'Depends'],
    ['Publishing volume', '8, 30, 60, or 90 articles/month; you pick which days they go live', 'Cadence agreed with you (for example daily or 3x/week)', 'Tie'],
    ['Content control', 'Custom voice; edit drafts with AI or manually', 'Trained on your brand voice; you approve what goes live', 'Tie'],
    ['YouTube support', 'Relevant YouTube videos in articles', 'Relevant YouTube embeds in articles', 'Tie'],
    ['Integrations', 'WordPress, Webflow, Shopify, Wix, Framer, Notion, Ghost, webhook, REST API, MCP', '1,000+ app integrations', 'Tie'],
    ['Backlinks', 'Backlink exchange: you host relevant links to earn credits for your own', 'No exchange; outreach and internal linking done with you', 'Depends'],
    ['Beyond SEO', 'Also sells a Free Tools Builder, directory submission, and AI visibility', 'Email, social, sales, and phone AI employees', 'Depends'],
    ['Price', '$99/month or $999/year (checked October 7, 2026)', 'Refundable pilot (100% refund within 14 days); pricing depends on the product', 'Outrank']
];

export default function OutrankSoAlternativeContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            for (const section of tocItems.map((item) => item.id)) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setActiveSection(id);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Outrank.so Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>SEO Tool Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">Outrank.so Alternative</span>: When Dooza Ranky Is the Better Fit
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Outrank.so is a self-serve autopilot for SEO content. Dooza Ranky is the done-for-you option: Ranky and Dooza engineers do the SEO and AI-visibility work with you, with your approval.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>13 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Updated October 7, 2026</span></div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/outrank-vs-dooza-ranky.png"
                                alt="Outrank.so alternative comparison of Outrank.so and Dooza Ranky for SEO content"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">
                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {tocItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === item.id ? 'bg-primary-50 text-primary-700 font-medium' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Want SEO that connects to revenue?</p>
                                <a
                                    href={getProductSignupUrl('ranky')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">100% refund within 14 days</p>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="outrank-so-alternative" />
                            </div>
                        </div>
                    </aside>

                    <article className="w-full max-w-3xl mx-auto space-y-12">
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    If you are searching for an <strong>Outrank.so alternative</strong>, you probably want the same outcome Outrank promises: more blog posts, more search visibility, and more chances to get recommended by Google, ChatGPT, Perplexity, and other AI search engines.
                                </p>
                                <p>
                                    The question is not whether Outrank.so is useful. It is. Outrank positions itself as an autopilot SEO platform that plans keywords, writes articles in your voice, publishes to your CMS, adds internal links, images, and relevant YouTube videos, and runs a backlink exchange. It also says it helps you get recommended by ChatGPT. For a founder with an empty blog, that is a strong offer.
                                </p>
                                <p>
                                    The real difference is who does the work. With Outrank, you run the tool. With <strong>Dooza Ranky</strong>, Dooza&apos;s AI SEO &amp; visibility employee, Ranky and Dooza engineers do the work for you, and nothing goes live without your approval. Dooza is an AI-native company, and Ranky sits inside its broader AI workforce.
                                </p>
                                <div className="not-prose mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                    <p className="text-primary-900 font-bold text-lg mb-2">Quick verdict</p>
                                    <p className="text-primary-800">
                                        Outrank.so is a good self-serve autopilot blog tool, and the better pick if you want to run it yourself at a published monthly price. Dooza is the better Outrank.so alternative if you want the work done for you, with your approval, plus specialist AI employees for email, social media, sales, and calls. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-outrank" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Outrank.so Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Outrank.so is built around a simple promise: grow organic traffic on autopilot. According to Outrank&apos;s website, the platform handles keyword research, content generation, content optimization, backlink building, AI images, localization, and publishing to WordPress, Webflow, Shopify, Wix, Framer, Notion, Ghost, and a custom webhook. It also offers a REST API and an MCP server.
                                </p>
                                <p>
                                    Its all-in-one plan is listed at <strong>$99/month</strong> or $999/year (checked October 7, 2026) and includes <strong>30 articles per month</strong>, with add-ons for 60 or 90 articles a month. It also includes unlimited organization users, automated keyword research, CMS publishing, AI images, backlink exchange, relevant YouTube videos in articles, 150+ languages, unlimited AI rewrites, and custom feature requests.
                                </p>
                                <p>
                                    That is a real offer. If you want to publish SEO articles on a schedule you set, with minimal involvement, and you are happy to run the tool yourself, Outrank.so belongs on the shortlist.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Search, title: 'Keyword automation', copy: 'Outrank can build a content plan and generate SEO articles around target phrases.' },
                                    { icon: PenTool, title: 'Scheduled publishing', copy: 'Choose 8, 30, 60, or 90 articles a month and pick which days they go live.' },
                                    { icon: Layers, title: 'CMS integrations', copy: 'Outrank lists WordPress, Shopify, Webflow, Wix, Notion, Framer, Ghost, a custom webhook, a REST API, and an MCP server.' },
                                    { icon: Zap, title: 'Hands-off workflow', copy: 'The platform is designed for people who want content generated and published with minimal manual work.' }
                                ].map((item) => (
                                    <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                        <item.icon className="w-6 h-6 text-primary-600 mb-3" />
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.copy}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="why-look" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Businesses Look for an Outrank.so Alternative</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Most people who look for an alternative are not unhappy with what Outrank produces. They want a different way of working. A self-serve tool still needs someone on your side to set the strategy, review drafts, and decide what the content should do for the business. Some teams have that person. Many small businesses do not.
                                </p>
                                <p>
                                    Whatever tool you use, search engines and AI answer engines reward content that reflects your product, your customer conversations, your objections, your use cases, and your real proof. The question is who brings that context into the articles: you, or a team that does it with you.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                {[
                                    ['You would rather not run another tool', 'Outrank automates the writing and publishing, but you still own the setup, the review, and the strategy. Dooza engineers set up and run Ranky with you, and you approve what goes live.'],
                                    ['You want to choose how links are built', 'Outrank says its exchange places relevant links inside real articles on real blogs and verifies each one. Some teams still prefer not to host links for other members, and want outreach and internal linking handled case by case instead.'],
                                    ['You want SEO and AI search handled together', 'Buyers ask ChatGPT, Perplexity, Claude, and Gemini as well as Google. Both tools target AI search; with Dooza, the GEO work (schema, citable claims, Reddit and Quora presence) is done for you.'],
                                    ['You want content tied to the rest of the business', 'A blog post is more valuable when it feeds social posts, sales follow-ups, email replies, and lead nurturing. Dooza adds AI employees for those jobs.']
                                ].map(([title, copy]) => (
                                    <div key={title} className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                                            <p className="text-slate-600">{copy}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="dooza-alternative" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dooza Ranky: The Done-for-You Outrank.so Alternative</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> takes a different approach. Dooza is an AI-native company, and instead of a self-serve content tool it gives you AI employees that Dooza engineers set up and run with you. <strong>Ranky</strong> is the AI SEO &amp; visibility employee: it researches topics, writes optimized blog posts, structures articles for search intent, adds internal links, schema, and FAQs, and publishes to your CMS with your approval.
                                </p>
                                <p>
                                    The difference matters. A blog post about &quot;best AI receptionist for salons&quot; should connect to Rachel. A post about &quot;AI email assistant&quot; should connect to Maily. A comparison post should link readers to the exact Dooza employee that solves the problem. Dooza can think across the whole business, not just the article.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-6 md:p-8 text-white">
                                <h3 className="text-2xl font-bold mb-5">What Dooza adds</h3>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {[
                                        ['Ranky writes SEO content', 'Keyword-led, search-intent-aware articles with internal links, FAQs, and conversion sections.'],
                                        ['Somi turns posts into social content', 'Your blog can become LinkedIn, Instagram, X, and Facebook content instead of sitting alone.'],
                                        ['Maily handles email follow-up', 'When content creates replies or leads, Maily helps manage the inbox work.'],
                                        ['Stan and Rachel convert demand', 'Sales follow-up and phone answering turn SEO traffic into booked conversations.']
                                    ].map(([title, copy]) => (
                                        <div key={title} className="bg-white/10 border border-white/10 rounded-xl p-5">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-300 mb-3" />
                                            <h4 className="font-bold mb-2">{title}</h4>
                                            <p className="text-white/75 text-sm">{copy}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Outrank.so vs Dooza: Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left p-4 font-semibold">Category</th>
                                            <th className="text-left p-4 font-semibold">Outrank.so</th>
                                            <th className="text-left p-4 font-semibold">Dooza Ranky</th>
                                            <th className="text-left p-4 font-semibold">Edge</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparisonRows.map(([category, outrank, dooza, winner], index) => (
                                            <tr key={category} className={index % 2 ? 'bg-slate-50' : 'bg-white'}>
                                                <td className="p-4 font-semibold text-slate-900">{category}</td>
                                                <td className="p-4 text-slate-600">{outrank}</td>
                                                <td className="p-4 text-slate-600">{dooza}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${winner === 'Dooza' || winner === 'Outrank' ? 'bg-emerald-100 text-emerald-700' : winner === 'Tie' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                                                        {winner}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="seo-quality" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The SEO Quality Difference</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The best AI SEO content in 2026 does not look like a generic article with keywords inserted. It looks like a useful answer from a company that understands the buyer. That means the article should explain tradeoffs, answer objections, include product-specific examples, and point the reader toward a next step.
                                </p>
                                <p>
                                    Good tools on both sides can produce that kind of article. Dooza&apos;s difference is that Dooza engineers work with you to bring your business context into each post, and the post can be shaped around Dooza&apos;s other AI employees and your growth workflow, so it supports sales, support, social media, email, and AI search visibility.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-3 gap-4">
                                {[
                                    { stat: 'Intent', label: 'Search Intent Fit', copy: 'Content guided around buyer intent, not only keyword volume.' },
                                    { stat: 'Context', label: 'Business Context', copy: 'Posts reference your services, workflows, internal pages, and real customer problems.' },
                                    { stat: 'Next step', label: 'Conversion Path', copy: 'Each article points readers toward a call, a signup, or the right AI employee.' }
                                ].map((item) => (
                                    <div key={item.label} className="bg-primary-50 border border-primary-100 rounded-xl p-5 text-center">
                                        <div className="text-3xl font-bold text-primary-600 mb-2">{item.stat}</div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.label}</h3>
                                        <p className="text-sm text-slate-600">{item.copy}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing: Outrank.so vs Dooza</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Outrank.so lists its all-in-one plan at <strong>$99/month</strong> or $999/year, with add-ons for more articles (+$85/month for 60, +$160/month for 90), checked October 7, 2026. It says there are no hidden fees and no per-seat charges. If you only need SEO articles and will run the tool yourself, that is a clear, published price.
                                </p>
                                <p>
                                    The case for Dooza is different: you are paying for the work to be done with you, not for a tool. Ranky is part of a broader AI workforce that can also help with email, social media, sales follow-up, and phone calls. Dooza pricing depends on the product (see <a href="/pricing" className="text-primary-600 hover:underline">pricing</a>), and every Dooza product starts with a refundable pilot — 100% refund within 14 days.
                                </p>
                            </div>

                            <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4">
                                <DollarSign className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">The value test</h3>
                                    <p className="text-slate-700">
                                        If you have someone to run an SEO tool, Outrank&apos;s published price is easy to justify. If you do not, compare it with having the work done for you. Dooza&apos;s refundable pilot (100% refund within 14 days) lets you test that before you commit.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="youtube" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Relevant YouTube Video: How Dooza AI Employees Work</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Video makes comparison content stronger because readers can see the product category in action. For this Outrank.so alternative guide, the most relevant video is a Dooza overview showing how AI employees handle real business work beyond content generation.
                                </p>
                            </div>
                            <YouTubeEmbed videoId="NgBAXFK6nk4" title="AI Era with DOOZA.AI" />
                        </section>

                        <section id="winner" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Verdict: Which One Should You Choose?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Outrank.so is a solid tool if your goal is straightforward: publish SEO articles on a schedule you choose, with minimal involvement, at a published monthly price. It is easy to understand, automation-heavy, and it also covers backlinks, integrations, and AI search.
                                </p>
                                <p>
                                    The best <strong>Outrank.so alternative</strong> is not another autopilot blog tool. It is a different model: Ranky and Dooza engineers do the SEO and AI-visibility work for you, with your approval, while the rest of the Dooza workforce handles the jobs around that content: social distribution, email responses, lead follow-up, and phone calls.
                                </p>
                                <p>
                                    If you want to run the tool yourself, Outrank.so is the better pick. If you want the work done for you, <strong>Dooza is the better choice</strong>, and you can start with a refundable pilot: 100% refund within 14 days.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center">
                                <ShieldCheck className="w-10 h-10 text-emerald-300 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-3">Get your SEO content done for you, with your approval</h3>
                                <p className="text-white/75 mb-6 max-w-2xl mx-auto">
                                    Use Ranky to create blog content that fits your brand, links to the right pages, supports AI search visibility, and connects to the rest of your business automation.
                                </p>
                                <a
                                    href={getProductSignupUrl('ranky')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-colors"
                                >
                                    Start your pilot <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Outrank.so Alternative FAQ</h2>
                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                        <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                                            <Bot className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                            {faq.question}
                                        </h3>
                                        <p className="text-slate-600 pl-8">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <RelatedPosts currentSlug="outrank-so-alternative" category="Comparison" tags={['Outrank.so', 'Dooza Ranky', 'AI SEO', 'SEO Tools']} />
                    </article>

                    <aside className="hidden xl:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-900 text-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-3">Need more than blog posts?</h3>
                            <p className="text-sm text-slate-300 mb-5">
                                Dooza gives you AI employees for SEO, email, social media, sales, and calls.
                            </p>
                            <Link href="/blog/ai-employees-vs-virtual-assistants" className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 text-sm font-medium">
                                See how AI employees work <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            <BottomCTA openModal={() => setIsBookingModalOpen(true)} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
