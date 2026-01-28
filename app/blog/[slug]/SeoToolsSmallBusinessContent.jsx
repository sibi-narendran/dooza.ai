'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
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
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ArrowRight,
    DollarSign,
    Bot,
    Search,
    FileText,
    Star,
    TrendingUp,
    AlertTriangle,
    Globe,
    BarChart3,
    Target,
    Briefcase,
    Link2,
    Eye,
    PenTool,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "Do small businesses really need SEO tools?",
        answer: "Yes, but not necessarily the expensive ones. 75% of users never scroll past page one of Google, and 46% of all searches have local intent. If customers can't find you online, they'll find your competitors. The question is whether you need a $139/month tool or whether AI can handle your SEO needs for $29/month."
    },
    {
        question: "What's the best free SEO tool for small businesses?",
        answer: "Google Search Console and Google Analytics are essential free tools that show how your site performs in search. Google Business Profile is crucial for local SEO. These provide data, but you still need to take action on what they show—which is where AI SEO tools shine by automating the work."
    },
    {
        question: "Is Ahrefs or Semrush better for small businesses?",
        answer: "Both are overkill for most small businesses. Ahrefs starts at $29/month (limited) or $129/month (Lite), while Semrush starts at $139.95/month. Most SMBs don't need enterprise-level backlink analysis. SE Ranking ($65/month) or Moz ($49/month) offer more appropriate features at better prices. Or let Seomi handle your SEO automatically for $29/month."
    },
    {
        question: "How long does SEO take to show results?",
        answer: "Typically 3-6 months to see measurable improvements, 6-12 months for significant results. SEO is a compounding investment—the longer you do it consistently, the stronger results become. This is why automation is valuable: AI ensures consistent execution even when you're too busy to do it manually."
    },
    {
        question: "What's more important: on-page SEO or backlinks?",
        answer: "For small businesses, start with on-page SEO and content. You control these directly. Technical SEO (site speed, mobile-friendly, etc.) and quality content are foundational. Backlinks matter, but for local businesses, Google Business Profile optimization and local citations often have more immediate impact."
    },
    {
        question: "Can AI really do SEO as well as an agency?",
        answer: "AI handles the execution tasks excellently: writing optimized content, updating Google Business Profile, monitoring rankings, and identifying opportunities. What AI can't do is high-level strategy for complex competitive markets. For most small businesses, AI execution is more valuable than agency strategy because the bottleneck is usually doing the work, not knowing what to do."
    }
];

const seoTools = [
    {
        name: "Semrush",
        price: "$139.95-499.95/mo",
        bestFor: "Enterprise, agencies",
        pros: ["55+ tools", "Comprehensive PPC + SEO", "Large keyword database"],
        cons: ["Expensive for SMBs", "Overwhelming features", "Learning curve"],
        verdict: "Overkill for most small businesses"
    },
    {
        name: "Ahrefs",
        price: "$29-449/mo",
        bestFor: "SEO-focused teams",
        pros: ["Best backlink data", "Content explorer", "Accurate rankings"],
        cons: ["Credit-based pricing", "Lite plan limited", "No free trial"],
        verdict: "Good value if you need backlink analysis"
    },
    {
        name: "Moz Pro",
        price: "$49-179/mo",
        bestFor: "Beginners, single domain",
        pros: ["User-friendly", "Domain Authority metric", "Good learning resources"],
        cons: ["Smaller database", "Slower updates", "Basic features"],
        verdict: "Budget-friendly starting point"
    },
    {
        name: "SE Ranking",
        price: "$65-239/mo",
        bestFor: "Small-mid businesses",
        pros: ["AI-powered features", "Good value", "All-in-one SEO"],
        cons: ["Less known brand", "Smaller database", "Fewer integrations"],
        verdict: "Best balance of price and features"
    },
    {
        name: "Ubersuggest",
        price: "$29-99/mo",
        bestFor: "Budget-conscious",
        pros: ["Affordable", "Simple interface", "Chrome extension"],
        cons: ["Limited data", "Basic features", "Accuracy concerns"],
        verdict: "Entry-level option"
    }
];

export default function SeoToolsSmallBusinessContent() {
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
            const sections = ['introduction', 'why-seo-matters', 'tool-comparison', 'free-tools', 'ai-alternative', 'what-seomi-does', 'getting-started', 'faq'];
            for (const section of sections) {
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
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-50 via-white to-teal-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'SEO Tools for Small Business' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                            <Search size={16} />
                            <span>SEO Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">SEO Tools for Small Business</span>: Complete 2026 Guide
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            75% of users never scroll past page one of Google. Learn which SEO tools actually make sense for small businesses—and why AI might be a better investment than expensive subscriptions.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 24, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Try AI-Powered SEO - $29/mo
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'why-seo-matters', label: 'Why SEO Matters' },
                                    { id: 'tool-comparison', label: 'Tool Comparison' },
                                    { id: 'free-tools', label: 'Free SEO Tools' },
                                    { id: 'ai-alternative', label: 'The AI Alternative' },
                                    { id: 'what-seomi-does', label: 'What Seomi Does' },
                                    { id: 'getting-started', label: 'Getting Started' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === item.id
                                            ? 'bg-primary-50 text-primary-700 font-medium'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Skip the complexity</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Seomi Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="seo-tools-small-business" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Here's the SEO tool paradox: the tools that show you what to do are expensive, but they don't actually do the work for you.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    You pay $139/month for <a href="https://www.semrush.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Semrush</a>. It tells you to write more blog posts, optimize your Google Business Profile, and build backlinks. Great advice—but who has time to actually do all that?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to <a href="https://seranking.com/blog/ahrefs-vs-semrush/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SE Ranking's analysis</a>, many small business owners feel they're "paying for features they don't need" and that "the complexity and cost doesn't match their actual usage."
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide compares the major SEO tools honestly—what they cost, what they're good for, and when you should skip them entirely for an AI that actually does the SEO work for you.
                                </p>

                                {/* YouTube Video Embed */}
                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="btwC4zmewss"
                                        title="SEO Course for Beginners - Learn SEO Step by Step"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: How to choose the right SEO tools for your business</p>
                                </div>

                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Search className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Key Question</h4>
                                            <p className="text-slate-700">
                                                Do you need a tool that <strong>tells you what to do</strong>, or do you need something that <strong>actually does the work</strong>? For most small businesses, the bottleneck isn't knowledge—it's execution.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="why-seo-matters" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why SEO Still Matters for Small Businesses</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Before we dive into tools, let's establish why SEO is worth investing in. Data from <a href="https://backlinko.com/ahrefs-vs-semrush" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Backlinko</a>, <a href="https://moz.com/local-search-ranking-factors" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Moz</a>, and <a href="https://www.thinkwithgoogle.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google</a>:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "75%", label: "of users never scroll past page one", source: "Backlinko", link: "https://backlinko.com/google-ctr-stats" },
                                    { stat: "46%", label: "of all Google searches have local intent", source: "Moz", link: "https://moz.com/local-search-ranking-factors" },
                                    { stat: "28%", label: "of local searches result in a purchase", source: "Think With Google", link: "https://www.thinkwithgoogle.com/" },
                                    { stat: "53%", label: "of website traffic comes from organic search", source: "BrightEdge", link: "https://www.brightedge.com/resources/research-reports" },
                                    { stat: "70%", label: "of marketers say SEO is more effective than PPC", source: "Databox", link: "https://databox.com/" },
                                    { stat: "5.7x", label: "more keywords ranked with consistent blogging", source: "HubSpot", link: "https://www.hubspot.com/marketing-statistics" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-green-50 border border-green-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-green-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline">{item.source}</a>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    The Compounding Effect
                                </h4>
                                <p className="text-blue-700">
                                    Unlike paid ads that stop when you stop paying, SEO compounds over time. A blog post you write today can drive traffic for years. According to <a href="https://ahrefs.com/blog/how-long-does-it-take-to-rank/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Ahrefs research</a>, the average top-10 ranking page is 2+ years old. Start now; benefit later.
                                </p>
                            </div>
                        </section>

                        <section id="tool-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">SEO Tools Compared: Honest Breakdown</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Based on testing and research from <a href="https://learn.g2.com/semrush-alternatives" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">G2</a>, <a href="https://selfmademillennials.com/semrush-vs-ahrefs/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Self Made Millennials</a>, and <a href="https://trafficthinktank.com/semrush-alternatives/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Traffic Think Tank</a>:
                            </p>

                            <div className="space-y-6 mb-8">
                                {seoTools.map((tool, idx) => (
                                    <div key={idx} className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-xl">{tool.name}</h3>
                                                <p className="text-sm text-slate-500">Best for: {tool.bestFor}</p>
                                            </div>
                                            <div className="bg-slate-100 px-4 py-2 rounded-lg">
                                                <span className="font-bold text-slate-900">{tool.price}</span>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <div className="text-xs font-bold text-green-600 mb-2">PROS</div>
                                                <ul className="space-y-1">
                                                    {tool.pros.map((pro, pidx) => (
                                                        <li key={pidx} className="flex items-start gap-2 text-sm text-slate-600">
                                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                            {pro}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-red-600 mb-2">CONS</div>
                                                <ul className="space-y-1">
                                                    {tool.cons.map((con, cidx) => (
                                                        <li key={cidx} className="flex items-start gap-2 text-sm text-slate-600">
                                                            <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                                            {con}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 p-3 rounded-lg">
                                            <span className="text-sm font-medium text-slate-700">Verdict: </span>
                                            <span className="text-sm text-slate-600">{tool.verdict}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="free-tools" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Essential Free SEO Tools</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Before paying for anything, make sure you're using these free tools from Google:
                            </p>

                            <div className="grid gap-6 mb-8">
                                {[
                                    {
                                        name: "Google Search Console",
                                        icon: Search,
                                        what: "Shows how Google sees your site, which queries you rank for, and technical issues",
                                        link: "https://search.google.com/search-console",
                                        mustDo: "Submit your sitemap, monitor indexing, fix errors"
                                    },
                                    {
                                        name: "Google Analytics",
                                        icon: BarChart3,
                                        what: "Traffic data, user behavior, conversion tracking",
                                        link: "https://analytics.google.com/",
                                        mustDo: "Set up goals, track which pages drive business"
                                    },
                                    {
                                        name: "Google Business Profile",
                                        icon: Globe,
                                        what: "Your local SEO foundation—shows in Maps and local search",
                                        link: "https://www.google.com/business/",
                                        mustDo: "Complete profile, post weekly, respond to reviews"
                                    },
                                    {
                                        name: "Google PageSpeed Insights",
                                        icon: Zap,
                                        what: "Site speed analysis and Core Web Vitals",
                                        link: "https://pagespeed.web.dev/",
                                        mustDo: "Fix critical issues, improve mobile speed"
                                    }
                                ].map((tool, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                                <tool.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-lg mb-1">{tool.name}</h3>
                                                <p className="text-slate-600 mb-2">{tool.what}</p>
                                                <p className="text-sm text-primary-600 mb-2">
                                                    <strong>Must do:</strong> {tool.mustDo}
                                                </p>
                                                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:underline">
                                                    Set up free →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Problem with Free Tools</h4>
                                        <p className="text-slate-700">
                                            Free tools show you data—they don't do the work. Google Search Console tells you to write more content; it doesn't write it. Google Business Profile shows you need to post; it doesn't create posts. This is where paid tools OR AI automation become valuable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="ai-alternative" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The AI Alternative: Tools That Do the Work</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">A Different Way to Think About SEO Tools</h3>
                                <p className="text-lg text-slate-700 mb-6">
                                    Traditional SEO tools: <strong>Tell you what to do</strong> (then you have to do it)
                                </p>
                                <p className="text-lg text-slate-700 mb-6">
                                    AI SEO tools: <strong>Actually do the work</strong> (you approve what gets published)
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="text-sm font-bold text-slate-500 mb-2">SEMRUSH TELLS YOU:</div>
                                        <p className="text-slate-600">"Write 2 blog posts targeting these keywords this week"</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="text-sm font-bold text-primary-600 mb-2">SEOMI DOES:</div>
                                        <p className="text-slate-600">Writes and publishes those blog posts automatically</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-seomi-does" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Seomi (Your AI SEO Employee) Actually Does</h2>

                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        icon: PenTool,
                                        title: "Writes SEO-Optimized Blog Posts",
                                        description: "Daily blog posts targeting keywords your customers search for. Proper headings, internal links, meta descriptions—all the on-page SEO handled.",
                                        traditional: "You'd spend 2-4 hours per post doing this yourself"
                                    },
                                    {
                                        icon: Globe,
                                        title: "Manages Google Business Profile",
                                        description: "Weekly posts, photo updates, service descriptions, Q&A management. Keeps your profile active so Google keeps you visible.",
                                        traditional: "Most businesses let their GBP go stale"
                                    },
                                    {
                                        icon: Link2,
                                        title: "Builds Content That Attracts Links",
                                        description: "Creates comprehensive, linkable content that naturally attracts backlinks over time through quality and depth.",
                                        traditional: "Link building is time-intensive and often sketchy"
                                    },
                                    {
                                        icon: Eye,
                                        title: "Monitors Rankings & Adjusts",
                                        description: "Tracks which content performs, identifies opportunities, and adjusts strategy based on what's working.",
                                        traditional: "Requires constant monitoring and tool subscriptions"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                                                <p className="text-slate-600 mb-3">{item.description}</p>
                                                <p className="text-sm text-amber-600 bg-amber-50 p-2 rounded">
                                                    <strong>Without AI:</strong> {item.traditional}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-3">The Cost Comparison</h4>
                                <div className="grid md:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">$139.95/mo</div>
                                        <p className="text-sm text-slate-600">Semrush Pro (tells you what to do)</p>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">$65/mo</div>
                                        <p className="text-sm text-slate-600">SE Ranking (budget option)</p>
                                    </div>
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <div className="text-2xl font-bold text-green-700">$29/mo</div>
                                        <p className="text-sm text-green-600">Seomi (does the work for you)</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with SEO</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Set Up Free Google Tools",
                                        desc: "Google Search Console + Analytics + Business Profile. These are non-negotiable and free. Do this first regardless of what else you use."
                                    },
                                    {
                                        step: "2",
                                        title: "Decide: Research or Execution?",
                                        desc: "Do you need a tool to tell you what to do (Semrush, Ahrefs)? Or do you need something that does the work (Seomi)? Most small businesses need execution more than research."
                                    },
                                    {
                                        step: "3",
                                        title: "Start Creating Content Consistently",
                                        desc: "SEO success comes from consistent execution over time. Whether you write yourself, hire, or use AI—consistency beats perfection."
                                    },
                                    {
                                        step: "4",
                                        title: "Be Patient",
                                        desc: "SEO takes 3-6 months to show results. Don't quit after 30 days. The businesses that win at SEO are the ones that keep going."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Ranking?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Skip the expensive tools that just tell you what you already know. Let Seomi handle your SEO execution while you run your business.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Seomi - $29/month <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Onboarding
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqData.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Sources Section */}
                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources & References</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">SEO Tool Comparisons</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://backlinko.com/ahrefs-vs-semrush" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Backlinko - Ahrefs vs Semrush</a></li>
                                        <li>• <a href="https://seranking.com/blog/ahrefs-vs-semrush/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SE Ranking - Tool Comparison</a></li>
                                        <li>• <a href="https://learn.g2.com/semrush-alternatives" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">G2 - Semrush Alternatives</a></li>
                                        <li>• <a href="https://trafficthinktank.com/semrush-alternatives/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Traffic Think Tank - Alternatives</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">SEO Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://backlinko.com/google-ctr-stats" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Backlinko - Google CTR Statistics</a></li>
                                        <li>• <a href="https://moz.com/local-search-ranking-factors" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Moz - Local Search Ranking Factors</a></li>
                                        <li>• <a href="https://ahrefs.com/blog/how-long-does-it-take-to-rank/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ahrefs - How Long to Rank</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="seo-tools-small-business" category="SEO" tags={['SEO Tools', 'Small Business SEO', 'AI SEO']} />
                    </div>

                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
