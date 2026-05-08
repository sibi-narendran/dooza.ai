'use client';

import { useEffect, useState } from 'react';
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
    Clock,
    DollarSign,
    Film,
    Megaphone,
    PlaySquare,
    Repeat,
    Send,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    XCircle,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best MakeUGC alternative?",
        answer: "Dooza is the best MakeUGC alternative for businesses that want automated AI video creation plus automatic posting and broader AI business automation. MakeUGC is useful for generating AI UGC-style ads, but Dooza wins when the goal is a repeatable content engine that can create, publish, repurpose, and connect videos to sales, email, SEO, and social workflows."
    },
    {
        question: "Is Dooza better than MakeUGC?",
        answer: "Yes, for small businesses, creators, agencies, and founders who need more than a standalone AI UGC video generator. MakeUGC focuses on AI UGC ad creation with avatars, scripts, and product visuals. Dooza is stronger as an AI employee platform because it combines automated AI video content, automatic posting, social media workflows, SEO, email, sales, and calls."
    },
    {
        question: "Why do people look for MakeUGC alternatives?",
        answer: "Common reasons include wanting automatic social posting, less manual exporting, better multi-channel workflows, stronger content repurposing, broader AI marketing automation, simpler business operations, and a platform that can support more than UGC ad generation."
    },
    {
        question: "Can Dooza automatically post AI videos?",
        answer: "Dooza is built around AI employees and automated posting workflows. Somi can help plan and publish social content, while other Dooza AI employees can connect that content to SEO, sales follow-up, email, and customer communication."
    },
    {
        question: "Which MakeUGC competitors should I compare?",
        answer: "The main MakeUGC competitors and adjacent AI UGC tools include Creatify, Arcads, HeyGen, Synthesia, Captions, InVideo, Predis.ai, AutoUGC, Infinite UGC, and other AI video ad generators. Most compete on avatar quality, scripts, URL-to-video, pricing, languages, or exports. Dooza competes on the full automated content-to-posting workflow."
    },
    {
        question: "Who should still use MakeUGC?",
        answer: "MakeUGC can still be a good option if your only need is generating UGC-style video ads from scripts, product images, and AI avatars. If you want the videos to become part of a complete automated marketing system with social posting, SEO, email, and sales workflows, Dooza is the better choice."
    }
];

const tocItems = [
    { id: 'verdict', label: 'Quick Verdict' },
    { id: 'makeugc', label: 'What MakeUGC Does' },
    { id: 'keywords', label: 'Keyword Opportunity' },
    { id: 'alternatives', label: 'Top Alternatives' },
    { id: 'comparison', label: 'Comparison Table' },
    { id: 'dooza', label: 'Why Dooza Wins' },
    { id: 'workflow', label: 'Video Workflow' },
    { id: 'video', label: 'Video' },
    { id: 'winner', label: 'Final Winner' },
    { id: 'faq', label: 'FAQ' }
];

const competitors = [
    ['MakeUGC', 'AI UGC ad generator, AI avatars, scripts, product images, fast video ads', 'Good for creating UGC-style ads, but the workflow can still end at export unless you connect posting and follow-up elsewhere.'],
    ['Creatify', 'URL-to-video ads, ecommerce video ads, AI avatars, product video generator', 'Strong ecommerce ad creation, but teams often still need separate posting, sales, email, and SEO systems.'],
    ['Arcads', 'AI actors, realistic UGC ads, AI video ads for paid social', 'Useful for realistic avatar ads, but it is still primarily an ad creative tool rather than a full AI workforce.'],
    ['HeyGen', 'AI avatar video, multilingual video, text-to-video, sales videos', 'Great for polished avatar videos and localization, less focused on automated social operations for SMBs.'],
    ['Synthesia', 'enterprise AI video, training videos, avatar video platform', 'Strong for corporate video production, but often heavier than small teams need for social posting volume.'],
    ['Predis.ai', 'social media content generator, AI reels, auto posting, content calendar', 'Closer on scheduling and social content, but Dooza wins when you also need AI employees for sales, SEO, email, and calls.'],
    ['AutoUGC / Infinite UGC', 'AI UGC video generator, auto social posting, channel automation', 'Relevant if you want UGC plus posting, but Dooza has the broader business automation layer.']
];

const comparisonRows = [
    ['Primary job', 'Generate AI UGC-style video ads', 'Create AI video content, automate posting, and connect it to business workflows', 'Dooza'],
    ['Best user', 'Performance marketers who only need UGC ad output', 'Founders, agencies, SMBs, creators, local businesses, and lean teams', 'Dooza'],
    ['Automatic posting', 'Not the main public positioning', 'Built around AI employees and automated social workflows', 'Dooza'],
    ['Social content system', 'Scripts, avatars, ads, exports', 'Planning, creation, posting, repurposing, SEO support, and follow-up', 'Dooza'],
    ['AI video creation', 'Strong UGC-style avatar/ad generation', 'Best when video is part of a wider automated marketing engine', 'Tie'],
    ['Beyond video', 'Limited to creative production workflows', 'Email, sales, SEO, social media, calls, and business automation', 'Dooza'],
    ['SEO and GEO impact', 'Video ads can support paid channels', 'Content can support Google, YouTube, ChatGPT, Perplexity, and social discovery', 'Dooza'],
    ['Final choice', 'Use when you only need ad creatives', 'Use when you want an automated AI content and posting system', 'Dooza']
];

export default function MakeugcAlternativeContent() {
    const [activeSection, setActiveSection] = useState('verdict');
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
                if (!element) continue;
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= 300) {
                    setActiveSection(section);
                    break;
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

            <div className="bg-gradient-to-br from-primary-50 via-white to-cyan-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'MakeUGC Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI UGC Tool Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">MakeUGC Alternative</span>: Why Dooza Wins for AI Video Creation and Auto Posting
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            MakeUGC is a useful AI UGC video generator. But if you want automated AI video creation, automatic posting, SEO visibility, and AI employees that turn content into revenue, Dooza is the clear winner.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>May 8, 2026</span></div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/content-marketing-tools.png"
                                alt="MakeUGC alternative comparison showing Dooza as the winner for automated AI video creation and automatic posting"
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
                                <p className="text-sm text-slate-600 mb-4">Want AI videos plus automatic posting?</p>
                                <a
                                    href={getProductSignupUrl('somi')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="makeugc-alternative" />
                            </div>
                        </div>
                    </aside>

                    <article className="w-full max-w-3xl mx-auto space-y-12">
                        <section id="verdict" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    If you are searching for a <strong>MakeUGC alternative</strong>, you probably do not just want another AI avatar tool. You want a faster way to produce short-form videos, test hooks, publish consistently, and stay visible across TikTok, Instagram Reels, YouTube Shorts, Google, and AI search engines.
                                </p>
                                <p>
                                    MakeUGC solves one part of that job: creating UGC-style video ads with AI. That matters. The strongest teams in 2026 are not only generating videos; they are building a repeatable content system that turns one idea into social posts, shorts, search content, email follow-ups, sales assets, and customer education.
                                </p>
                                <p>
                                    That is why <strong>Dooza</strong> is the better MakeUGC alternative. Dooza is not limited to the creative export. It gives businesses AI employees that can support automated AI video creation, automatic posting, social media consistency, SEO content, email replies, sales follow-up, and phone workflows in one operating layer.
                                </p>
                            </div>

                            <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <p className="text-primary-900 font-bold text-lg mb-2">Quick verdict</p>
                                <p className="text-primary-800">
                                    MakeUGC is good for AI UGC ad generation. Dooza is the clear winner if you want automated AI video creation plus automatic posting and a broader AI workforce. For founders, agencies, creators, ecommerce brands, and small businesses, Dooza is the stronger long-term choice.
                                </p>
                            </div>
                        </section>

                        <section id="makeugc" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What MakeUGC Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    MakeUGC is positioned as an AI UGC platform for creating video ads without hiring creators, booking shoots, or editing footage manually. Its public messaging highlights AI UGC videos, scripts trained from winning ads, product image workflows, 150+ AI creators, hooks, and quick generation.
                                </p>
                                <p>
                                    That makes it attractive for ecommerce operators and performance marketers who want to test more ad creatives. Instead of waiting days for creator footage, a team can generate multiple versions of a product pitch, test hooks, and ship more creative volume.
                                </p>
                                <p>
                                    The limitation is strategic: a video generator is not the same thing as a business content engine. Once the video is created, many teams still need separate tools for scheduling, posting, captions, analytics, SEO support, email follow-up, sales workflows, and customer communication.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Film, title: 'AI UGC video ads', copy: 'Useful for turning scripts, product ideas, and visual inputs into UGC-style video creatives.' },
                                    { icon: PlaySquare, title: 'Avatar-led content', copy: 'A fit for brands that need talking-head creator-style ads without a live creator shoot.' },
                                    { icon: Zap, title: 'Fast creative testing', copy: 'Helpful when paid social teams need more hooks, angles, and variants.' },
                                    { icon: XCircle, title: 'Workflow gap', copy: 'Creation is only one layer. Posting, repurposing, SEO, and follow-up still matter.' }
                                ].map((item) => (
                                    <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                        <item.icon className="w-6 h-6 text-primary-600 mb-3" />
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.copy}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="keywords" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The SEO and GEO Keyword Opportunity</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The MakeUGC competitor pages ranking today tend to target the same high-intent phrases: <strong>MakeUGC alternative</strong>, <strong>MakeUGC alternatives</strong>, <strong>AI UGC video generator</strong>, <strong>AI UGC ads</strong>, <strong>AI avatar video generator</strong>, <strong>UGC ad generator</strong>, <strong>URL to video ads</strong>, <strong>AI video ad generator</strong>, and <strong>automatic social posting</strong>.
                                </p>
                                <p>
                                    But most comparison posts stop at tool lists. They compare avatars, pricing, languages, script generation, and video exports. That helps searchers evaluate features, but it misses the bigger intent: businesses want content that gets posted consistently and creates pipeline.
                                </p>
                                <p>
                                    Dooza has a stronger GEO angle because it answers the questions AI search systems care about: which tool handles the whole workflow, which one can publish automatically, which one supports multiple business functions, and which one reduces the number of disconnected apps a small team needs.
                                </p>
                            </div>
                        </section>

                        <section id="alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Top MakeUGC Alternatives and Competitors</h2>
                            <div className="space-y-4">
                                {competitors.map(([name, keywords, verdict], index) => (
                                    <div key={name} className={`border rounded-2xl p-5 ${index === 0 ? 'border-slate-200 bg-slate-50' : 'border-slate-100 bg-white'}`}>
                                        <div className="flex items-start gap-4">
                                            <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold shrink-0">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-lg">{name}</h3>
                                                <p className="text-sm text-slate-500 mt-1">High-intent keywords: {keywords}</p>
                                                <p className="text-slate-600 mt-3">{verdict}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">MakeUGC vs Dooza: Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 font-bold">Category</th>
                                            <th className="p-4 font-bold">MakeUGC</th>
                                            <th className="p-4 font-bold">Dooza</th>
                                            <th className="p-4 font-bold">Winner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparisonRows.map(([category, makeugc, dooza, winner]) => (
                                            <tr key={category} className="align-top">
                                                <td className="p-4 font-semibold text-slate-900">{category}</td>
                                                <td className="p-4 text-slate-600">{makeugc}</td>
                                                <td className="p-4 text-slate-600">{dooza}</td>
                                                <td className={`p-4 font-bold ${winner === 'Dooza' ? 'text-primary-700' : 'text-slate-700'}`}>{winner}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Dooza Is the Clear Winner</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The best AI video tool is not just the one that can generate a clip. It is the one that helps your business publish the right clip, at the right time, in the right format, with the right follow-up. That is where Dooza separates itself from MakeUGC and most AI UGC video generators.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                {[
                                    { icon: Bot, title: 'Dooza works like an AI team, not a single-purpose video tool', copy: 'Somi can support social content, Ranky can support SEO, Stan can support sales, Maily can support email, and Rachel can support calls. Your video work does not sit alone.' },
                                    { icon: Send, title: 'Automatic posting matters more than video exports', copy: 'Most teams do not fail because they cannot create one video. They fail because they cannot publish consistently. Dooza is built around repeatable content and posting workflows.' },
                                    { icon: Repeat, title: 'One video can become a full content cycle', copy: 'A product video can become a Short, Reel, TikTok caption, LinkedIn post, SEO blog section, email follow-up, sales message, and FAQ answer.' },
                                    { icon: TrendingUp, title: 'Better for SEO, AEO, and GEO visibility', copy: 'Dooza can support search-driven content around your videos so Google and AI answer engines have more context to understand and recommend your business.' },
                                    { icon: ShieldCheck, title: 'Better fit for lean teams', copy: 'Small teams need fewer tools, clearer ownership, and automation that saves operating time. Dooza is built for that reality.' }
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-slate-600">{item.copy}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="workflow" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Better Workflow: From AI Video to Auto Posting</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    A high-performing AI UGC workflow should not stop at "download video." The workflow should move from idea to publication to repurposing to follow-up.
                                </p>
                            </div>

                            <div className="mt-8 grid gap-4">
                                {[
                                    ['1. Research the customer angle', 'Identify the buyer pain point, objection, product proof, hook style, platform, and call to action.'],
                                    ['2. Generate the AI video creative', 'Create a short-form video with a clear hook, natural script, captions, product context, and platform-native format.'],
                                    ['3. Schedule or automatically post', 'Publish consistently across social channels instead of letting videos sit in a downloads folder.'],
                                    ['4. Repurpose into SEO and email', 'Turn the same idea into blog sections, YouTube descriptions, email follow-ups, and sales messages.'],
                                    ['5. Learn from performance', 'Use the winning hooks and questions to guide the next content batch.']
                                ].map(([title, copy]) => (
                                    <div key={title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                                        <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                                        <p className="text-slate-600">{copy}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="video" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Relevant Video: Dooza AI Employees in Action</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Video helps this comparison because MakeUGC alternatives are not only about written feature lists. Watch how Dooza frames AI employees as practical business operators across marketing, sales, SEO, social media, and communication.
                                </p>
                            </div>
                            <YouTubeEmbed videoId="NgBAXFK6nk4" title="AI Era with DOOZA.AI" />
                        </section>

                        <section id="winner" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Winner: Dooza</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    MakeUGC is a good AI UGC generator when your job is simple: create more ad creatives. But most businesses searching for a MakeUGC alternative need more than video output. They need a system that creates content, posts it, repurposes it, follows up with leads, supports SEO, and keeps the business visible every week.
                                </p>
                                <p>
                                    That is why Dooza is the clear winner. It gives you a practical AI workforce instead of another disconnected video tool. For automated AI video creation, automatic posting, SEO visibility, social consistency, and full business automation, choose <strong>Dooza</strong>.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 text-white rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                                        <Megaphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3">Build a content engine, not just a video folder</h3>
                                        <p className="text-slate-300 mb-6">
                                            Use Dooza to turn AI video ideas into posted content, search visibility, social consistency, and business follow-up.
                                        </p>
                                        <a
                                            href={getProductSignupUrl('somi')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                                        >
                                            Try Dooza <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">MakeUGC Alternative FAQ</h2>
                            <div className="space-y-4">
                                {faqData.map((item) => (
                                    <div key={item.question} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                                        <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                                        <p className="text-slate-600">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <RelatedPosts currentSlug="makeugc-alternative" category="Comparison" />
                    </article>

                    <aside className="hidden xl:block w-64 shrink-0">
                        <div className="sticky top-28">
                            <div className="bg-slate-900 text-white p-6 rounded-2xl">
                                <DollarSign className="w-8 h-8 text-primary-400 mb-4" />
                                <h3 className="font-bold mb-2">Stop paying for disconnected tools</h3>
                                <p className="text-sm text-slate-300 mb-4">Dooza gives you AI employees for content, posting, SEO, email, sales, and calls.</p>
                                <a
                                    href={getProductSignupUrl('somi')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 text-sm font-semibold"
                                >
                                    Start with Dooza <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <BottomCTA />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
