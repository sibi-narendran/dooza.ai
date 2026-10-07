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
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best MakeUGC alternative?",
        answer: "It depends on the job. For AI UGC ad creatives, the closest alternatives are Creatify, Arcads, and HeyGen; Creatify can also launch ads straight to Meta, TikTok, YouTube, Snap, and Amazon ad accounts. Dooza is the alternative for businesses that want the work done for them: Dooza engineers set up AI employees for short-form video and social posting, plus SEO, email, sales, and calls, and nothing goes out without your approval."
    },
    {
        question: "Is Dooza better than MakeUGC?",
        answer: "Not for UGC ad creatives. MakeUGC is the better pick if you want to generate many UGC-style video ads yourself, with 1,000+ AI creators, product-holding avatars, and fast variations; its Enterprise plan adds an AI media buyer, custom AI workflows, and API access. Dooza is the better pick if you want social video and posting done for you, together with SEO, email, sales, and calls, starting with a refundable pilot (100% refund within 14 days)."
    },
    {
        question: "Why do people look for MakeUGC alternatives?",
        answer: "Usually because of fit. Some teams want a different avatar style or URL-to-video ads (Creatify), more AI actors (Arcads), localization (HeyGen), organic social scheduling (Predis.ai, Infinite UGC), or someone to run their content across video, SEO, email, and sales instead of operating another tool."
    },
    {
        question: "Can Dooza automatically post AI videos?",
        answer: "Yes. Dooza's UGC Reel Creator makes short-form video and Somi, Dooza's social media employee, plans and posts social content with your approval. Other Dooza AI employees connect that content to SEO, sales follow-up, email, and customer communication."
    },
    {
        question: "Which MakeUGC competitors should I compare?",
        answer: "Common MakeUGC competitors and adjacent AI UGC tools include Creatify, Arcads, HeyGen, Synthesia, Captions, invideo, Predis.ai, AutoUGC, and Infinite UGC. Most compete on avatar quality, scripts, URL-to-video, pricing, languages, or ad launching. Dooza is a different kind of alternative: a done-for-you setup where Dooza engineers run AI employees across video, social, SEO, email, sales, and calls."
    },
    {
        question: "Who should still use MakeUGC?",
        answer: "MakeUGC is a strong option if your main need is generating UGC-style video ads from scripts, product images, and AI avatars, and you are happy to run the tool yourself. If you want social video and posting done for you, alongside SEO, email, and sales, Dooza is the better choice."
    }
];

const tocItems = [
    { id: 'verdict', label: 'Quick Verdict' },
    { id: 'makeugc', label: 'What MakeUGC Does' },
    { id: 'keywords', label: 'Keyword Opportunity' },
    { id: 'alternatives', label: 'Top Alternatives' },
    { id: 'comparison', label: 'Comparison Table' },
    { id: 'dooza', label: 'Where Dooza Fits' },
    { id: 'workflow', label: 'Video Workflow' },
    { id: 'video', label: 'Video' },
    { id: 'winner', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' }
];

const competitors = [
    ['MakeUGC', 'AI UGC ad generator, AI avatars, scripts, product images, fast video ads', 'Strong for UGC-style ads: 1,000+ AI creators, avatars that hold your product, and fast variations across hooks, languages, and formats. Enterprise adds an AI media buyer, custom workflows, and API access.'],
    ['Creatify', 'URL-to-video ads, ecommerce video ads, AI avatars, product video generator', 'Strong ecommerce ad creation from a product page, and it can launch ads to connected Meta, TikTok, YouTube, Snap, and Amazon ad accounts.'],
    ['Arcads', 'AI actors, realistic UGC ads, AI video ads for paid social', 'An AI ad platform with 1,000+ AI actors, built for paid-social ad creatives.'],
    ['HeyGen', 'AI avatar video, multilingual video, text-to-video, sales videos', 'Great for polished avatar videos and localization, with AI video translation across 175+ languages and dialects.'],
    ['Synthesia', 'enterprise AI video, training videos, avatar video platform', 'Strong for corporate video such as employee and compliance training, and widely used by large enterprises.'],
    ['Predis.ai', 'social media content generator, AI reels, auto posting, content calendar', 'Combines AI reels and posts with a content calendar that schedules and autoposts.'],
    ['AutoUGC / Infinite UGC', 'AI UGC video generator, UGC ads, TikTok, Reels and Shorts formats', 'AutoUGC makes UGC ads in TikTok, Reels, and Shorts formats; Infinite UGC adds auto social posting.']
];

const comparisonRows = [
    ['Primary job', 'Generate AI UGC-style video ads', 'Done-for-you AI employees for video, social, SEO, email, sales, and calls', 'Depends'],
    ['Who does the work', 'You run the tool', 'Dooza engineers set up and run it with you; you approve', 'Depends'],
    ['UGC ad creation', '1,000+ AI creators, product-holding avatars, fast variations', 'Short-form video via the UGC Reel Creator, as one part of the workforce', 'MakeUGC'],
    ['Automatic posting', 'Not part of its public positioning', 'Somi plans and posts social content with your approval', 'Dooza'],
    ['Advanced options', 'Enterprise: AI media buyer, custom AI workflows, API access', '1,000+ app integrations', 'Tie'],
    ['Beyond video', 'Focused on video ads', 'SEO (Ranky), email (Maily), sales (Stan), calls (Rachel)', 'Dooza'],
    ['How you start', 'Self-serve sign-up', 'Refundable pilot (100% refund within 14 days); pricing depends on the product', 'Depends']
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
                            Best <span className="text-primary-600">MakeUGC Alternatives</span>: UGC Ad Tools vs a Done-for-You AI Workforce
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            MakeUGC is a strong AI UGC ad generator. Here is how it compares with other UGC tools, and when Dooza, a done-for-you AI workforce, is the better fit.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Updated October 7, 2026</span></div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/content-marketing-tools.png"
                                alt="MakeUGC alternatives compared, including Dooza for done-for-you AI video and posting"
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
                                <InternalLinks currentSlug="makeugc-alternative" />
                            </div>
                        </div>
                    </aside>

                    <article className="w-full max-w-3xl mx-auto space-y-12">
                        <section id="verdict" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    If you are searching for a <strong>MakeUGC alternative</strong>, start with what you actually need: a different UGC ad tool, or someone to run your content for you. The answer decides which alternative fits.
                                </p>
                                <p>
                                    MakeUGC does its job well: creating UGC-style video ads with AI, fast, in many variations. If ad creatives are what you need, MakeUGC or one of the UGC tools below is likely the better pick.
                                </p>
                                <p>
                                    <strong>Dooza</strong> is a different kind of alternative. Dooza is an AI-native company: Dooza engineers set up AI employees that handle short-form video and social posting alongside SEO content, email replies, sales follow-up, and calls, and nothing goes out without your approval.
                                </p>
                            </div>

                            <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <p className="text-primary-900 font-bold text-lg mb-2">Quick verdict</p>
                                <p className="text-primary-800">
                                    MakeUGC is the better pick for self-serve AI UGC ad generation. Dooza is the better pick if you want social video and posting done for you as part of a wider setup across SEO, email, sales, and calls, starting with a refundable pilot: 100% refund within 14 days.
                                </p>
                            </div>
                        </section>

                        <section id="makeugc" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What MakeUGC Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    MakeUGC is positioned as an AI UGC platform for creating video ads without creators, delays, or editing. Its site highlights 1,000+ realistic AI creators, avatars that hold and present your product, unlimited scripts with dozens of real winning ads for reference, multiple variations across hooks, avatars, languages, and formats, and fast processing.
                                </p>
                                <p>
                                    That makes it attractive for ecommerce operators and performance marketers who want to test more ad creatives. Instead of waiting days for creator footage, a team can generate multiple versions of a product pitch, test hooks, and ship more creative volume.
                                </p>
                                <p>
                                    Its Enterprise plan adds an AI media buyer, custom AI workflows, and API access. What MakeUGC does not position itself around is organic social posting or the non-video work: SEO, email follow-up, sales, and calls. That is where the comparison with Dooza comes in.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Film, title: 'AI UGC video ads', copy: 'Useful for turning scripts, product ideas, and visual inputs into UGC-style video creatives.' },
                                    { icon: PlaySquare, title: 'Avatar-led content', copy: 'A fit for brands that need talking-head creator-style ads without a live creator shoot.' },
                                    { icon: Zap, title: 'Fast creative testing', copy: 'Helpful when paid social teams need more hooks, angles, and variants.' },
                                    { icon: Send, title: 'Enterprise options', copy: 'An AI media buyer, custom AI workflows, and API access on the Enterprise plan.' }
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
                                    Most comparison posts compare avatars, pricing, languages, script generation, and video exports. That helps searchers evaluate features. Many businesses also want to know who will run the content week to week.
                                </p>
                                <p>
                                    This post tries to answer that question directly: which tools create ads, which ones also post, and when a done-for-you setup like Dooza makes more sense than another tool.
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
                                            <th className="p-4 font-bold">Edge</th>
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Dooza Fits Better</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    MakeUGC and the tools above are strong at creating ad creatives. Dooza fits better when you want someone to run the work for you, and when video is one part of a wider job: publishing the right clip at the right time, with the right follow-up.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                {[
                                    { icon: Bot, title: 'Dooza works like an AI team, not a single-purpose video tool', copy: 'Somi can support social content, Ranky can support SEO, Stan can support sales, Maily can support email, and Rachel can support calls. Your video work does not sit alone.' },
                                    { icon: Send, title: 'Done for you, with your approval', copy: 'A Dooza engineer scopes your pilot on a free 30-minute call and sets up the workflow with you, including social posting. You approve what goes out.' },
                                    { icon: Repeat, title: 'One video can become a full content cycle', copy: 'A product video can become a Short, Reel, TikTok caption, LinkedIn post, SEO blog section, email follow-up, sales message, and FAQ answer.' },
                                    { icon: TrendingUp, title: 'SEO, AEO, and GEO around your videos', copy: 'Ranky, Dooza\'s AI SEO & visibility employee, handles search-driven content around your videos so Google and AI answer engines have more context to understand and recommend your business.' },
                                    { icon: ShieldCheck, title: 'Fit for lean teams', copy: 'Small teams need fewer tools and clear ownership. Dooza engineers own the setup, and Dooza connects to 1,000+ apps.' }
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
                                    Whichever tool you choose, a high-performing AI UGC workflow moves from idea to creation to publication to repurposing to follow-up. MakeUGC covers creation well; the other steps are where a wider setup helps.
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Verdict: Which MakeUGC Alternative Should You Choose?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    If your job is creating more ad creatives, MakeUGC is a strong choice, and Creatify, Arcads, and HeyGen are the closest alternatives. Creatify is worth a look if you also want ads launched to your ad accounts; Predis.ai or Infinite UGC if you want organic posting.
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
