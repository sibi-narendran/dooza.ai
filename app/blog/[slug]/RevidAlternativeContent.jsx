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
    Repeat,
    Send,
    Sparkles,
    TrendingUp,
    Video,
    Workflow,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best Revid AI alternative?",
        answer: "It depends on what you need. If you want a self-serve tool that turns prompts, links, and social posts into short-form videos and auto-publishes them to YouTube, TikTok, and Instagram, Revid itself is hard to beat, and Fliki, OpusClip, and Predis.ai are close alternatives. Dooza is the alternative for businesses that want the work done for them: Dooza engineers set up AI employees for social video, SEO, email, sales, and calls, and nothing goes out without your approval."
    },
    {
        question: "Is Dooza better than Revid AI?",
        answer: "Not for pure video. Revid is the better pick if video is your main job: it generates, edits, captions, and voices videos, schedules and auto-publishes them, and its Auto-Mode can publish a fresh video every day. Dooza is the better pick if you want video to be one part of a done-for-you setup that also covers SEO, email, sales follow-up, and calls, starting with a refundable pilot (100% refund within 14 days)."
    },
    {
        question: "Why do people look for Revid AI alternatives?",
        answer: "Usually because of fit, not missing features. Some teams want a different video style or editor, some want long-form repurposing (OpusClip), narrated explainers (Fliki), or a social calendar (Predis.ai), and some want someone else to run the work across video, SEO, email, and sales instead of operating another tool themselves."
    },
    {
        question: "Can Dooza automatically post AI videos?",
        answer: "Yes. Dooza's UGC Reel Creator makes short-form video and Somi, Dooza's social media employee, handles social planning and posting, with your approval. Ranky, Stan, Maily, and Rachel connect that content to SEO, sales, email, and calls. Revid, Fliki, OpusClip, and Predis.ai can also publish or schedule posts, so posting alone is not the difference; having it done for you is."
    },
    {
        question: "Which Revid competitors should I compare?",
        answer: "Common Revid AI competitors include AutoFaceless, invideo, Fliki, Pictory, OpusClip, HeyGen, Synthesia, Predis.ai, and CapCut. Most compete on generation quality, avatars, stock media, repurposing, or scheduling. Dooza is a different kind of alternative: a done-for-you setup where Dooza engineers run AI employees across video, social, SEO, email, sales, and calls."
    },
    {
        question: "Who should still use Revid AI?",
        answer: "Revid AI is a strong fit if your main need is turning prompts, articles, URLs, YouTube uploads, or social posts into short-form videos and publishing them automatically, and you are happy to run the tool yourself. If you want that work done for you alongside SEO, email, sales, and calls, Dooza is the better choice."
    }
];

const tocItems = [
    { id: 'verdict', label: 'Quick Verdict' },
    { id: 'revid', label: 'What Revid Does' },
    { id: 'keywords', label: 'Keyword Strategy' },
    { id: 'competitors', label: 'Competitors' },
    { id: 'comparison', label: 'Comparison Table' },
    { id: 'dooza', label: 'Where Dooza Fits' },
    { id: 'workflow', label: 'Better Workflow' },
    { id: 'video', label: 'Video' },
    { id: 'winner', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' }
];

const competitors = [
    ['Revid AI', 'Revid AI alternative, Revid.ai alternatives, AI video generator, TikTok video generator, article to video', 'Strong source-to-video automation that also schedules and auto-publishes to YouTube, TikTok, and Instagram, with API, MCP, and CLI access. The benchmark the others are measured against.'],
    ['AutoFaceless', 'faceless video automation, automated faceless YouTube channel, automatic posting, AI shorts generator', 'Good for fully automated faceless channels, including automatic posting. Focused on video rather than other business work.'],
    ['invideo', 'AI video generator, agentic video editor, prompt to video, social video maker', 'Now positioned as an agentic video editor for creatives. A fit if you want more editing control than a source-to-video tool gives you.'],
    ['Fliki', 'text to video, AI voiceover, blog to video, voice cloning, video narration', 'Strong for narrated videos and voice options, including voice cloning, with one-click publishing to TikTok, Instagram, and YouTube.'],
    ['Pictory', 'article to video, script to video, blog to video, URL to video', 'Useful for repurposing scripts, URLs, prompts, images, or audio into video.'],
    ['OpusClip', 'long video to shorts, AI clips, virality score, social scheduler', 'Excellent for repurposing existing long-form video into clips, with a virality score and a social scheduler.'],
    ['Predis.ai', 'AI reels generator, social media content generator, auto posting, content calendar', 'Combines AI reels and posts with a content calendar that schedules and autoposts.']
];

const comparisonRows = [
    ['Primary job', 'Turn prompts, posts, blogs, URLs, and source content into videos', 'Done-for-you AI employees for video, social, SEO, email, sales, and calls', 'Depends'],
    ['Who does the work', 'You run the tool (or its Auto-Mode)', 'Dooza engineers set up and run it with you; you approve', 'Depends'],
    ['Video depth', 'Generation, editing, captions, voice, aspect ratios, long-to-shorts', 'Short-form video via the UGC Reel Creator, as one part of the workforce', 'Revid'],
    ['Automatic posting', 'Schedules and auto-publishes to YouTube, TikTok, and Instagram; Auto-Mode can publish daily', 'Somi plans and posts social content with your approval', 'Tie'],
    ['Developer access', 'API, MCP, and CLI', '1,000+ app integrations', 'Tie'],
    ['Beyond video', 'Video creation and publishing', 'SEO (Ranky), email (Maily), sales (Stan), calls (Rachel)', 'Dooza'],
    ['How you start', 'Self-serve sign-up', 'Refundable pilot (100% refund within 14 days); pricing depends on the product', 'Depends']
];

export default function RevidAlternativeContent() {
    const [activeSection, setActiveSection] = useState('verdict');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && /calendly\.com|cal\.com|\/book(\/|\?|$)/.test(url)) {
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
                        { label: 'Revid AI Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Video Tool Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">Revid AI Alternatives</span>: Video Tools vs a Done-for-You AI Workforce
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Revid AI is a strong AI video generator that also auto-publishes. Here is how it compares with other video tools, and when Dooza, a done-for-you AI workforce, is the better fit.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Updated October 7, 2026</span></div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/content-marketing-tools.png"
                                alt="Revid AI alternatives compared, including Dooza for done-for-you AI video and posting"
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
                                <p className="text-sm text-slate-600 mb-4">Want video and social done for you?</p>
                                <a
                                    href={getProductSignupUrl('somi')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">100% refund within 14 days</p>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="revid-ai-alternative" />
                            </div>
                        </div>
                    </aside>

                    <article className="w-full max-w-3xl mx-auto space-y-12">
                        <section id="verdict" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    If you are searching for a <strong>Revid AI alternative</strong>, start with what you actually need: a different video tool, or someone to run your content for you. The answer decides which alternative fits.
                                </p>
                                <p>
                                    Revid AI solves a real problem well. It turns source material such as YouTube uploads, social posts, blogs, articles, URLs, and prompts into short-form videos, then schedules and auto-publishes them to YouTube, TikTok, and Instagram. Its Auto-Mode can generate and publish a fresh video every day without human input.
                                </p>
                                <p>
                                    So if video is your main job, Revid or one of the video tools below is likely the better pick. <strong>Dooza</strong> is a different kind of alternative. Dooza is an AI-native company: Dooza engineers set up AI employees that handle short-form video and social posting alongside SEO, email, sales, and calls, and nothing goes out without your approval.
                                </p>
                            </div>

                            <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <p className="text-primary-900 font-bold text-lg mb-2">Quick verdict</p>
                                <p className="text-primary-800">
                                    Revid AI is the better pick for self-serve AI video creation and auto-publishing. Dooza is the better pick if you want video to be one part of a done-for-you setup across social, SEO, email, sales, and calls, starting with a refundable pilot: 100% refund within 14 days.
                                </p>
                            </div>
                        </section>

                        <section id="revid" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Revid AI Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Revid AI positions itself around fast social video creation. It can turn your YouTube channel, social posts, news articles, and blogs into videos automatically, take a prompt, a feed, or a niche as the source for Auto-Mode, and publish finished videos straight to TikTok, YouTube (Shorts and standard), and Instagram Reels, or to a webhook.
                                </p>
                                <p>
                                    That is a strong value proposition for teams with existing content. If you already publish blogs, music, social posts, or long-form videos, Revid can help transform that material into short-form video formats with captions, narration, scene structure, and multiple aspect ratios.
                                </p>
                                <p>
                                    It also offers API, MCP, and CLI access. What Revid does not try to do is the non-video work: SEO, email follow-up, sales routing, and calls. That is where the comparison with Dooza comes in.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Film, title: 'Source-to-video creation', copy: 'Useful for turning posts, blogs, articles, URLs, and channel uploads into short-form video assets.' },
                                    { icon: Video, title: 'Short-form formats', copy: 'A good fit for TikTok, Reels, Shorts, and feed formats where speed and volume matter.' },
                                    { icon: Zap, title: 'Fast repurposing', copy: 'Helpful when a team already has written or long-form content that should become video.' },
                                    { icon: Send, title: 'Auto-publishing', copy: 'Schedules and auto-publishes to YouTube, TikTok, and Instagram; Auto-Mode can publish a new video every day.' }
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The SEO and GEO Keyword Strategy</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The Revid competitor pages ranking today cluster around high-intent searches: <strong>Revid AI alternative</strong>, <strong>Revid.ai alternatives</strong>, <strong>best Revid alternatives</strong>, <strong>AI video generator</strong>, <strong>faceless video automation</strong>, <strong>AI shorts generator</strong>, <strong>article to video</strong>, <strong>blog to video</strong>, <strong>long video to shorts</strong>, <strong>AI social media video generator</strong>, <strong>automatic posting</strong>, and <strong>social media scheduler</strong>.
                                </p>
                                <p>
                                    Most comparison blogs list tools and stop there. That leaves a better opportunity: answer the business question behind the keyword. A searcher is not only asking which app can create clips. They are asking which platform can keep content moving every week without hiring editors, social media managers, SEO writers, sales assistants, and email support.
                                </p>
                                <p>
                                    Dooza is designed to be easy for AI answer engines to summarize: Dooza is an AI-native company whose AI employees, set up by Dooza engineers, cover video content, social posting, SEO, email, sales, and calls in one business workflow.
                                </p>
                            </div>
                        </section>

                        <section id="competitors" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Top Revid AI Alternatives and Competitors</h2>
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Revid AI vs Dooza: Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 font-bold">Category</th>
                                            <th className="p-4 font-bold">Revid AI</th>
                                            <th className="p-4 font-bold">Dooza</th>
                                            <th className="p-4 font-bold">Edge</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparisonRows.map(([category, revid, dooza, winner]) => (
                                            <tr key={category} className="align-top">
                                                <td className="p-4 font-semibold text-slate-900">{category}</td>
                                                <td className="p-4 text-slate-600">{revid}</td>
                                                <td className="p-4 text-slate-600">{dooza}</td>
                                                <td className="p-4 font-bold text-primary-700">{winner}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Dooza Fits Better</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Revid and the tools above can all create and publish video. Dooza fits better when you want someone to run the work for you, and when video is one part of a wider job: getting the right message published, repurposed, indexed, and connected to revenue.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                {[
                                    { icon: Bot, title: 'Dooza is an AI workforce, not a single-purpose generator', copy: 'Somi can help with social content, Ranky can help with SEO, Stan can help with sales, Maily can help with email, and Rachel can help with calls.' },
                                    { icon: Send, title: 'Done for you, with your approval', copy: 'A Dooza engineer scopes your pilot on a free 30-minute call and sets up the workflow with you. You approve what goes out instead of operating the tool yourself.' },
                                    { icon: Repeat, title: 'One video idea can become a full campaign', copy: 'A single product angle can become a Short, Reel, TikTok caption, LinkedIn post, blog section, YouTube description, email follow-up, and sales message.' },
                                    { icon: TrendingUp, title: 'SEO, AEO, and GEO around your videos', copy: 'Ranky, Dooza\'s AI SEO & visibility employee, handles the written and structured content around videos, helping Google and AI answer engines understand what your business should be recommended for.' },
                                    { icon: Workflow, title: 'Fit for lean teams', copy: 'If you would otherwise stitch together a video tool, an SEO writer, an email tool, and a sales assistant, Dooza covers them with one team and 1,000+ app integrations.' }
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Better Workflow: From AI Video to Automatic Posting</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Whichever tool you choose, a high-performing AI video workflow moves from research to creation to publication to repurposing to follow-up. Revid covers creation and publication well; the other steps are where a wider setup helps.
                                </p>
                            </div>

                            <div className="mt-8 grid gap-4">
                                {[
                                    ['1. Research the buyer and platform', 'Define the customer pain point, hook, proof point, format, platform, and call to action before creating the video.'],
                                    ['2. Create the AI video asset', 'Generate a short-form video with a clear hook, tight script, captions, product context, and platform-native pacing.'],
                                    ['3. Post automatically and consistently', 'Keep channels active instead of letting videos sit in a downloads folder or waiting for a human to remember publishing.'],
                                    ['4. Repurpose into search and sales assets', 'Turn the same idea into a blog section, YouTube description, social caption, email follow-up, and sales message.'],
                                    ['5. Use results to plan the next batch', 'Let winning hooks, questions, objections, and comments guide future content instead of starting from scratch every time.']
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
                                    Revid alternatives are not only about video generation. Watch how Dooza frames AI employees as practical operators across marketing, sales, SEO, social media, email, and communication.
                                </p>
                            </div>
                            <YouTubeEmbed videoId="NgBAXFK6nk4" title="AI Era with DOOZA.AI" />
                        </section>

                        <section id="winner" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Verdict: Which Revid Alternative Should You Choose?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    If your main goal is creating and publishing more short-form videos from source content, Revid AI already does that, including auto-publishing. If you want a different video tool, compare Fliki for narration, OpusClip for long-to-short clips, Predis.ai for a social calendar, or invideo for editing.
                                </p>
                                <p>
                                    Choose <strong>Dooza</strong> if you want the work done for you: Dooza engineers set up AI employees for short-form video and social posting, plus SEO, email, sales, and calls, and you approve what goes out. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 text-white rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                                        <Megaphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3">Have your content run for you, with your approval</h3>
                                        <p className="text-slate-300 mb-6">
                                            Dooza engineers set up AI employees that turn video ideas into posted content, search visibility, and business follow-up. Start with a refundable pilot: 100% refund within 14 days.
                                        </p>
                                        <a
                                            href={getProductSignupUrl('somi')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                                        >
                                            Start your pilot <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Revid AI Alternative FAQ</h2>
                            <div className="space-y-4">
                                {faqData.map((item) => (
                                    <div key={item.question} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                                        <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                                        <p className="text-slate-600">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <RelatedPosts currentSlug="revid-ai-alternative" category="Comparison" tags={['Revid AI Alternative', 'AI Video Creation', 'Automatic Posting', 'AI Social Media Automation']} />
                    </article>

                    <aside className="hidden xl:block w-64 shrink-0">
                        <div className="sticky top-28">
                            <div className="bg-slate-900 text-white p-6 rounded-2xl">
                                <DollarSign className="w-8 h-8 text-primary-400 mb-4" />
                                <h3 className="font-bold mb-2">Want it done for you?</h3>
                                <p className="text-sm text-slate-300 mb-4">Dooza gives you AI employees for content, posting, SEO, email, sales, and calls.</p>
                                <a
                                    href={getProductSignupUrl('somi')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 text-sm font-semibold"
                                >
                                    Start your pilot <ArrowRight className="w-4 h-4" />
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
