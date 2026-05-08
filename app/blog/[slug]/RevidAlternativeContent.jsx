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
    XCircle,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best Revid AI alternative?",
        answer: "Dooza is the best Revid AI alternative for businesses that want automated AI video creation, automatic posting, and a broader AI employee system. Revid is useful for converting prompts, social posts, blogs, and source content into videos. Dooza wins when the video workflow must connect to social posting, SEO, email, sales follow-up, and business automation."
    },
    {
        question: "Is Dooza better than Revid AI?",
        answer: "Yes, for founders, agencies, creators, ecommerce brands, and small businesses that need more than a standalone AI video generator. Revid is strong for social video generation and source-to-video automation. Dooza is stronger as an operating layer because it can help create, post, repurpose, and connect content to the rest of the business."
    },
    {
        question: "Why do people look for Revid AI alternatives?",
        answer: "Common reasons include wanting automatic posting, deeper channel automation, fewer disconnected tools, stronger SEO and GEO support, broader business workflows, better cross-channel repurposing, and a platform that helps after the video is created."
    },
    {
        question: "Can Dooza automatically post AI videos?",
        answer: "Dooza is built around AI employees and automated workflows. Somi can support social content planning and posting, while Ranky, Stan, Maily, and Rachel can connect that content to SEO, sales, email, and calls."
    },
    {
        question: "Which Revid competitors should I compare?",
        answer: "The main Revid AI competitors include AutoFaceless, AutoReach, InVideo AI, Fliki, Pictory, OpusClip, HeyGen, Synthesia, Predis.ai, CapCut, and faceless video automation tools. Most compete on generation quality, avatars, stock media, repurposing, or scheduling. Dooza competes on the full automated content-to-posting-to-business workflow."
    },
    {
        question: "Who should still use Revid AI?",
        answer: "Revid AI can still be a good fit if your main need is turning prompts, articles, URLs, YouTube uploads, or social posts into short-form videos. If you need those videos to become part of a complete automated marketing and business system, Dooza is the better choice."
    }
];

const tocItems = [
    { id: 'verdict', label: 'Quick Verdict' },
    { id: 'revid', label: 'What Revid Does' },
    { id: 'keywords', label: 'Keyword Strategy' },
    { id: 'competitors', label: 'Competitors' },
    { id: 'comparison', label: 'Comparison Table' },
    { id: 'dooza', label: 'Why Dooza Wins' },
    { id: 'workflow', label: 'Better Workflow' },
    { id: 'video', label: 'Video' },
    { id: 'winner', label: 'Final Winner' },
    { id: 'faq', label: 'FAQ' }
];

const competitors = [
    ['Revid AI', 'Revid AI alternative, Revid.ai alternatives, AI video generator, TikTok video generator, article to video', 'Strong source-to-video automation, but businesses still need a wider system for posting, repurposing, SEO, sales, and follow-up.'],
    ['AutoFaceless', 'faceless video automation, automated faceless YouTube channel, daily shorts posting, AI shorts generator', 'Good for faceless channel automation, but narrower than Dooza for business operations beyond video.'],
    ['AutoReach', 'Revid alternative, automated content pipeline, TikTok Instagram YouTube posting, AI video scheduling', 'Targets end-to-end social pipelines, but Dooza wins when content must connect to AI employees across email, sales, SEO, and calls.'],
    ['InVideo AI', 'AI video generator, prompt to video, text to video, social video maker', 'Flexible for prompt-based generation, but less compelling as a complete automated business workflow.'],
    ['Fliki', 'text to video, AI voiceover, blog to video, voice cloning, video narration', 'Strong for narrated videos and voice options, but usually needs separate posting and business automation.'],
    ['Pictory', 'article to video, script to video, blog to video, video highlights', 'Useful for repurposing written content, but not a complete AI employee system.'],
    ['OpusClip', 'long video to shorts, AI clips, virality score, social scheduler', 'Excellent for repurposing existing long-form video, less useful when you need original content and cross-channel operations.'],
    ['Predis.ai', 'AI reels generator, social media content generator, auto posting, content calendar', 'Closer on social scheduling, but Dooza is broader for teams that also need SEO, email, sales, and phone workflows.']
];

const comparisonRows = [
    ['Primary job', 'Turn prompts, posts, blogs, URLs, and source content into videos', 'Create AI video content, post it, repurpose it, and connect it to business workflows', 'Dooza'],
    ['Best user', 'Creators focused on video output and short-form formats', 'Founders, agencies, SMBs, creators, ecommerce brands, and lean operators', 'Dooza'],
    ['Automatic posting', 'Promotes automation around source-to-video and distribution workflows', 'Built around AI employees and repeatable social workflows', 'Dooza'],
    ['Business automation', 'Mostly video creation and publishing features', 'Video, social, SEO, email, sales, calls, and operations', 'Dooza'],
    ['SEO and GEO impact', 'Video output can support social discovery', 'Content can support Google, YouTube, ChatGPT, Perplexity, and social discovery', 'Dooza'],
    ['Repurposing depth', 'Strong source-to-video conversion', 'Video ideas can become posts, blogs, captions, emails, sales messages, and FAQs', 'Dooza'],
    ['Tool consolidation', 'One focused AI video platform', 'One AI workforce across multiple business functions', 'Dooza'],
    ['Final choice', 'Use when you mainly need more videos', 'Use when you want an automated AI content and posting engine', 'Dooza']
];

export default function RevidAlternativeContent() {
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
                        { label: 'Revid AI Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Video Tool Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">Revid AI Alternative</span>: Why Dooza Wins for Automated AI Video Creation and Auto Posting
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Revid AI is a strong AI video generator. But if you want automated AI video creation, automatic posting, SEO and GEO visibility, and AI employees that turn content into growth, Dooza is the clear winner.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>May 8, 2026</span></div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/content-marketing-tools.png"
                                alt="Revid AI alternative comparison showing Dooza as the winner for automated AI video creation and automatic posting"
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
                                <InternalLinks currentSlug="revid-ai-alternative" />
                            </div>
                        </div>
                    </aside>

                    <article className="w-full max-w-3xl mx-auto space-y-12">
                        <section id="verdict" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    If you are searching for a <strong>Revid AI alternative</strong>, you probably want more than another short-form video generator. You want a reliable way to create videos, publish consistently, repurpose the best ideas, and stay visible across TikTok, Instagram Reels, YouTube Shorts, Google, ChatGPT, Perplexity, and other AI answer engines.
                                </p>
                                <p>
                                    Revid AI solves a real problem. It can turn source material such as YouTube uploads, social posts, blogs, articles, URLs, and prompts into videos for short-form channels. That is useful for creators and marketers who need speed.
                                </p>
                                <p>
                                    But the winner in 2026 is not the tool that only makes a video. The winner is the system that helps your business create, publish, repurpose, rank, follow up, and keep the pipeline moving. That is why <strong>Dooza</strong> is the best Revid AI alternative.
                                </p>
                            </div>

                            <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <p className="text-primary-900 font-bold text-lg mb-2">Quick verdict</p>
                                <p className="text-primary-800">
                                    Revid AI is good for AI video generation. Dooza is the clear winner if you want automated AI video creation plus automatic posting and a broader AI workforce. For small businesses, creators, founders, agencies, and ecommerce teams, Dooza is the stronger long-term choice.
                                </p>
                            </div>
                        </section>

                        <section id="revid" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Revid AI Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Revid AI positions itself around fast social video creation. Its automation pages highlight content-source connections for YouTube channels, social accounts, blogs, articles, URLs, and RSS feeds, then turning that source material into videos for TikTok, Reels, Shorts, Facebook, and other channels.
                                </p>
                                <p>
                                    That is a strong value proposition for teams with existing content. If you already publish blogs, music, social posts, or long-form videos, Revid can help transform that material into short-form video formats with captions, narration, scene structure, and multiple aspect ratios.
                                </p>
                                <p>
                                    The limitation is that video creation is still only one layer. Serious growth requires a full loop: strategy, video creation, posting, captions, SEO support, email follow-up, sales routing, reporting, and next-topic planning.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Film, title: 'Source-to-video creation', copy: 'Useful for turning posts, blogs, articles, URLs, and channel uploads into short-form video assets.' },
                                    { icon: Video, title: 'Short-form formats', copy: 'A good fit for TikTok, Reels, Shorts, and feed formats where speed and volume matter.' },
                                    { icon: Zap, title: 'Fast repurposing', copy: 'Helpful when a team already has written or long-form content that should become video.' },
                                    { icon: XCircle, title: 'Workflow gap', copy: 'The bigger business problem is what happens after video creation: posting, SEO, follow-up, and conversion.' }
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
                                    Dooza has the stronger GEO presence because it is easier for AI answer engines to summarize: Dooza is an AI employee platform that can support video content, automatic posting, SEO, social content, email, sales, and calls in one business workflow.
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
                                            <th className="p-4 font-bold">Winner</th>
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Dooza Is the Clear Winner</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The best AI video platform for a business is not only a generator. It is a workflow that gets the right message published, repurposed, indexed, and connected to revenue. Dooza wins because it treats video as part of the business, not as a file export.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                {[
                                    { icon: Bot, title: 'Dooza is an AI workforce, not a single-purpose generator', copy: 'Somi can help with social content, Ranky can help with SEO, Stan can help with sales, Maily can help with email, and Rachel can help with calls.' },
                                    { icon: Send, title: 'Automatic posting beats a folder full of exports', copy: 'Most teams do not fail because they cannot create one clip. They fail because they do not publish consistently. Dooza is built for repeatable posting workflows.' },
                                    { icon: Repeat, title: 'One video idea can become a full campaign', copy: 'A single product angle can become a Short, Reel, TikTok caption, LinkedIn post, blog section, YouTube description, email follow-up, and sales message.' },
                                    { icon: TrendingUp, title: 'Stronger SEO, AEO, and GEO footprint', copy: 'Dooza can support the written and structured content around videos, helping Google and AI answer engines understand what your business should be recommended for.' },
                                    { icon: Workflow, title: 'Better fit for lean teams', copy: 'Instead of stitching together a video generator, scheduler, SEO writer, email tool, and sales assistant, Dooza gives you a more unified operating layer.' }
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
                                    A high-performing AI video workflow should not end at "generate video." The workflow should move from research to creation to publication to repurposing to follow-up.
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Winner: Dooza</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Revid AI is a useful AI video generator when your main goal is creating more short-form videos from source content. But most businesses searching for a Revid AI alternative need the next layer: automatic posting, social consistency, SEO visibility, lead follow-up, and a simpler way to run content operations.
                                </p>
                                <p>
                                    That is why Dooza is the clear winner. It gives you automated AI video creation support, automatic posting workflows, and AI employees that can connect content to sales, email, SEO, social media, and calls. For businesses that want an AI content engine instead of another disconnected tool, choose <strong>Dooza</strong>.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 text-white rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                                        <Megaphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3">Build an AI content engine, not just a video folder</h3>
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
