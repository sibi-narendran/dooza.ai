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
    XCircle,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best Outrank.so alternative?",
        answer: "Dooza Ranky is the best Outrank.so alternative for businesses that want SEO content with more strategic control. Outrank is useful for hands-off daily publishing, but Dooza wins for teams that want guided AI research, brand-specific content, internal linking, YouTube embeds, and predictable pricing inside a broader AI employee platform."
    },
    {
        question: "Is Dooza better than Outrank.so?",
        answer: "Yes, for most small businesses, agencies, founders, and operators. Outrank focuses on automated SEO content and backlink exchange. Dooza gives you Ranky for SEO plus other AI employees for email, social media, sales, and calls, so the content work connects to the rest of your business."
    },
    {
        question: "How much does Outrank.so cost?",
        answer: "Outrank.so publicly lists its all-in-one plan at $99/month, discounted from $200/month, with 30 articles per month, CMS publishing, AI images, backlink exchange, YouTube videos, and 150+ languages."
    },
    {
        question: "Why should I choose Dooza instead of Outrank.so?",
        answer: "Choose Dooza if you want an AI employee that can help plan, research, write, publish, and connect SEO content to business outcomes. Dooza is stronger when content quality, brand voice, human direction, and cross-channel automation matter more than pure autopilot publishing."
    },
    {
        question: "Can Dooza Ranky create SEO blog posts with YouTube videos?",
        answer: "Yes. Ranky can produce SEO blog content with relevant YouTube embeds, supporting research, internal links, FAQs, and conversion sections. That makes the article more useful for readers and stronger for engagement than plain text-only content."
    },
    {
        question: "Who should still consider Outrank.so?",
        answer: "Outrank.so can make sense if you want a simple autopilot blog machine, your main goal is publishing 30 posts per month, and you are comfortable reviewing drafts inside your CMS. If you want a broader AI workforce and tighter strategic control, Dooza is the better alternative."
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
    { id: 'winner', label: 'Clear Winner' },
    { id: 'faq', label: 'FAQ' }
];

const comparisonRows = [
    ['Best fit', 'Hands-off daily blog publishing', 'AI SEO employee plus business automation', 'Dooza'],
    ['Publishing model', '30 articles/month on autopilot', 'Guided content workflows with strategic control', 'Dooza'],
    ['Content control', 'Review and edit drafts after generation', 'Guide research, tone, structure, internal links, and conversion angle', 'Dooza'],
    ['SEO strategy', 'Keyword plan and automated articles', 'Keyword strategy, human direction, internal links, FAQs, and business context', 'Dooza'],
    ['YouTube support', 'Publicly lists relevant YouTube videos in articles', 'Relevant YouTube embeds plus article strategy around the video', 'Tie'],
    ['Backlinks', 'Backlink exchange network', 'Focuses on owned content quality and internal authority', 'Depends'],
    ['Business automation', 'SEO content only', 'SEO, email, social, sales, and phone AI employees', 'Dooza'],
    ['Price/value', '$99/month public plan', 'Lower-cost AI workforce entry point with Ranky included', 'Dooza']
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
                            Best <span className="text-primary-600">Outrank.so Alternative</span>: Why Dooza Is the Clear Winner
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Outrank.so promises autopilot SEO content. Dooza gives you an AI employee that can build content with strategy, context, multimedia, internal links, and the rest of your business in mind.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>13 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>May 8, 2026</span></div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/outrank-vs-dooza-ranky.png"
                                alt="Outrank.so alternative comparison showing Dooza Ranky as the clear SEO content winner"
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
                                    Try Ranky
                                </a>
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
                                    The question is not whether Outrank.so is useful. It is. Outrank publicly positions itself as an autopilot SEO platform that creates daily articles, publishes to your CMS, adds backlinks, generates images, and can include relevant YouTube videos. For a founder with an empty blog, that is a tempting offer.
                                </p>
                                <p>
                                    But autopilot is not the same as strategy. The real winner is the platform that helps you publish content people trust, connect that content to your product, and use it across the rest of your business. That is where <strong>Dooza Ranky</strong> wins. It is not just a blog generator. It is an AI SEO employee inside Dooza&apos;s broader AI workforce.
                                </p>
                                <div className="not-prose mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                    <p className="text-primary-900 font-bold text-lg mb-2">Quick verdict</p>
                                    <p className="text-primary-800">
                                        Outrank.so is a good autopilot blog tool. Dooza is the better Outrank.so alternative because it gives you Ranky for SEO content plus specialist AI employees for email, social media, sales, and calls. If you want content that supports actual business growth, Dooza is the clear winner.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-outrank" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Outrank.so Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Outrank.so is built around a simple promise: grow organic traffic on autopilot. According to Outrank&apos;s current public website, the platform handles keyword research, content generation, content optimization, AI images, localization, and publishing across platforms like WordPress, Webflow, Shopify, Notion, Wix, Framer, and webhooks.
                                </p>
                                <p>
                                    Its all-in-one plan is publicly listed at <strong>$99/month</strong> and includes <strong>30 articles per month</strong>, unlimited organization users, automated keyword research, CMS publishing, AI images, backlink exchange, relevant YouTube videos in articles, 150+ languages, unlimited AI rewrites, and custom feature requests.
                                </p>
                                <p>
                                    That is a real offer. If your only goal is &quot;publish one SEO article per day with minimal involvement,&quot; Outrank.so belongs on the shortlist. The problem starts when you need more than volume.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Search, title: 'Keyword automation', copy: 'Outrank can build a content plan and generate SEO articles around target phrases.' },
                                    { icon: PenTool, title: 'Daily publishing', copy: 'The public plan focuses on 30 articles per month, which maps to roughly one post per day.' },
                                    { icon: Layers, title: 'CMS integrations', copy: 'Outrank lists support for WordPress, Shopify, Webflow, Wix, Notion, Framer, and webhooks.' },
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
                                    The biggest weakness of a pure autopilot content tool is that it treats publishing as the finish line. In modern SEO, publishing is only the starting point. To rank, convert, and appear in AI answers, your content needs clear positioning, first-hand context, strong internal linking, multimedia, topical coverage, and a real reason to exist.
                                </p>
                                <p>
                                    Search engines and AI answer engines are getting better at spotting generic content. A blog full of automated posts can fill the calendar, but it may not build trust if the articles do not reflect your product, your customer conversations, your pricing, your objections, your use cases, and your real proof.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                {[
                                    ['Volume can outrun quality', 'Thirty posts per month sounds strong until weak posts start competing with each other, missing search intent, or failing to mention what actually makes your business different.'],
                                    ['Backlink exchange needs caution', 'Backlinks help SEO when they are relevant and trusted. Automated link exchange networks can be less useful if the links are not contextually strong, editorially earned, or aligned with your niche.'],
                                    ['SEO now includes AI search', 'Winning Google is not enough. Buyers ask ChatGPT, Perplexity, Claude, Gemini, and Reddit-shaped search queries. Your articles need direct answers, comparisons, FAQs, and product-specific clarity.'],
                                    ['Content should connect to operations', 'A blog post is more valuable when it feeds social posts, sales follow-ups, email replies, lead nurturing, and customer education. Outrank is built around SEO content. Dooza is built around AI employees doing business work.']
                                ].map(([title, copy]) => (
                                    <div key={title} className="bg-red-50 border border-red-100 rounded-xl p-6 flex gap-4">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                                            <p className="text-slate-600">{copy}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="dooza-alternative" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dooza Ranky: The Better Outrank.so Alternative</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> takes a different approach. Instead of giving you a one-purpose content machine, Dooza gives you AI employees. <strong>Ranky</strong> is the SEO employee: it helps research topics, write optimized blog posts, structure articles for search intent, add internal links, include FAQs, and connect the post to your product.
                                </p>
                                <p>
                                    The difference matters. A blog post about &quot;best AI receptionist for salons&quot; should connect to Rachel. A post about &quot;AI email assistant&quot; should connect to Maily. A comparison post should link readers to the exact Dooza employee that solves the problem. Dooza can think across the whole business, not just the article.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-6 md:p-8 text-white">
                                <h3 className="text-2xl font-bold mb-5">Why Dooza wins</h3>
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
                                            <th className="text-left p-4 font-semibold">Winner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparisonRows.map(([category, outrank, dooza, winner], index) => (
                                            <tr key={category} className={index % 2 ? 'bg-slate-50' : 'bg-white'}>
                                                <td className="p-4 font-semibold text-slate-900">{category}</td>
                                                <td className="p-4 text-slate-600">{outrank}</td>
                                                <td className="p-4 text-slate-600">{dooza}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${winner === 'Dooza' ? 'bg-emerald-100 text-emerald-700' : winner === 'Tie' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
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
                                    This is where Dooza&apos;s model is stronger. Ranky can create the post, but the post can also be shaped around Dooza&apos;s other AI employees and your actual growth workflow. You are not just publishing to satisfy a content calendar. You are building an asset that supports sales, support, social media, email, and AI search visibility.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-3 gap-4">
                                {[
                                    { stat: 'Better', label: 'Search Intent Fit', copy: 'Dooza content can be guided around buyer intent, not only keyword volume.' },
                                    { stat: 'More', label: 'Business Context', copy: 'Posts can reference services, workflows, internal pages, and real customer problems.' },
                                    { stat: 'Higher', label: 'Conversion Value', copy: 'The article can move readers toward a demo, signup, or specific AI employee.' }
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing: Outrank.so Is $99/mo, Dooza Delivers More Value</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Outrank.so publicly lists its all-in-one plan at <strong>$99/month</strong>. For that, you get a dedicated SEO content automation platform. That can be reasonable if you only need SEO articles.
                                </p>
                                <p>
                                    The stronger value case for Dooza is that Ranky is part of a broader AI workforce. You are not buying one content tool. You are buying a system that can help with SEO, email, social media, sales follow-up, and phone calls. For small businesses, that matters because SEO is rarely the only bottleneck.
                                </p>
                            </div>

                            <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4">
                                <DollarSign className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">The value test</h3>
                                    <p className="text-slate-700">
                                        If two platforms help you publish SEO content, choose the one that also helps you convert traffic after the click. That is why Dooza beats Outrank.so for operators who care about revenue, not just article count.
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Verdict: Dooza Is the Clear Winner</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Outrank.so is a solid tool if your goal is straightforward: publish 30 SEO articles per month with minimal involvement. It is easy to understand, automation-heavy, and built for users who want to stop thinking about blog production.
                                </p>
                                <p>
                                    But the best <strong>Outrank.so alternative</strong> is not just another autopilot blog tool. It is a platform that helps you turn content into business outcomes. Dooza wins because Ranky handles SEO content while the rest of the Dooza workforce handles the jobs around that content: social distribution, email responses, lead follow-up, and phone calls.
                                </p>
                                <p>
                                    If your blog is just a publishing calendar, Outrank.so can work. If your blog is supposed to become a growth engine, <strong>Dooza is the better choice</strong>.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center">
                                <ShieldCheck className="w-10 h-10 text-emerald-300 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-3">Build SEO content with an AI employee, not a black box</h3>
                                <p className="text-white/75 mb-6 max-w-2xl mx-auto">
                                    Use Ranky to create blog content that fits your brand, links to the right pages, supports AI search visibility, and connects to the rest of your business automation.
                                </p>
                                <a
                                    href={getProductSignupUrl('ranky')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-colors"
                                >
                                    Try Dooza Ranky <ArrowRight className="w-5 h-5" />
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
