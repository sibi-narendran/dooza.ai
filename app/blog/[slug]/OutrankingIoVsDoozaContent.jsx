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
import BlogHeroImage from '../../../components/BlogHeroImage';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ArrowRight,
    Zap,
    AlertTriangle,
    Bot,
    Sparkles,
    Shield,
    DollarSign,
    Users,
    Layers,
    Brain,
    Settings,
    Rocket,
    HeartHandshake,
    BarChart3,
    TrendingUp,
    MessageSquare,
    Mail,
    Search,
    Phone,
    Globe,
    FileText,
    Repeat,
    CreditCard,
    Workflow,
    PenTool,
    Target,
    Lock
} from 'lucide-react';

const faqData = [
    {
        question: "What is Outranking.io?",
        answer: "Outranking.io is an AI-powered SEO content writing and optimization platform. It uses SERP-based keyword clustering, automated content briefs, AI-assisted writing, and SEO scoring to help content creators produce optimized blog posts. Plans range from $19/month to $999/month for enterprise."
    },
    {
        question: "How much does Outranking.io cost compared to Dooza?",
        answer: "Outranking.io's Solo plan costs $129/month and Pro costs $229/month. Most users need at least the Solo plan for meaningful features. Dooza starts at $29/month and includes 6 AI employees that handle SEO, email, social media, sales, legal, and phone calls — no credit system, no usage caps."
    },
    {
        question: "Is Outranking.io better than Dooza for SEO?",
        answer: "Outranking.io is a manual SEO writing assistant — you still write, optimize, and publish content yourself. Dooza's Ranky is a fully autonomous AI SEO employee that researches, writes, optimizes, and publishes blog posts on autopilot. If you want hands-off SEO operations, Dooza is the better choice."
    },
    {
        question: "Can Outranking.io answer phone calls or manage email?",
        answer: "No. Outranking.io is exclusively an SEO content writing tool. It cannot handle phone calls, emails, social media, or sales outreach. Dooza includes AI employees for all of these functions — Rachel answers calls, Maily manages email, Somi handles social media, and Stan runs sales."
    },
    {
        question: "Does Outranking.io publish content automatically?",
        answer: "No. Outranking.io helps you write and optimize content, but publishing is manual. Dooza's Ranky researches, writes, optimizes, and publishes SEO content directly to your website on a daily schedule without any manual intervention."
    },
    {
        question: "Does Outranking.io use a credit system?",
        answer: "Yes. Outranking.io's AI features consume credits — especially the Concepts feature which pulls data from top-ranking articles. Users report burning through credits quickly during heavy research sessions. Dooza has no credit system — flat monthly pricing with unlimited usage."
    },
    {
        question: "Can I use both Outranking.io and Dooza?",
        answer: "Yes. Some businesses use Outranking.io for hands-on content optimization and research, and Dooza for autonomous daily content publishing, email management, social media, sales outreach, and phone answering. They can complement each other if you want both manual editorial control and autonomous operations."
    }
];

export default function OutrankingIoVsDoozaContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['introduction', 'what-is-outranking', 'what-is-dooza', 'core-difference', 'side-by-side', 'pricing-breakdown', 'credit-problem', 'seo-content-showdown', 'who-should-use-what', 'can-you-use-both', 'verdict', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-orange-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Outranking.io vs Dooza' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Dooza vs Outranking.io: <span className="text-primary-600">AI Writing Assistant</span> or AI Employees?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Outranking.io helps you write SEO content for $129/month. Dooza gives you 6 AI employees that write, publish, email, post, sell, and answer calls for $29/month. One is a writing tool. The other is a workforce.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 21, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/outranking-io-vs-dooza.png"
                                alt="Outranking.io vs Dooza comparison — AI SEO writing assistant at $129/month versus 6 AI employees at $29/month"
                                priority={true}
                            />
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Try Dooza Free — No Card Required
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-200 hover:border-primary-400 transition-all"
                            >
                                Book Free Demo
                            </a>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <YouTubeEmbed
                                videoId="yfE40Po7fzk"
                                title="AI SEO Tools Review: Outranking and AI Content Tools Compared"
                            />
                            <p className="text-sm text-slate-500 text-center mt-3">
                                Watch: Honest review of AI SEO content tools and what actually works
                            </p>
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
                                    { id: 'what-is-outranking', label: 'What Is Outranking.io?' },
                                    { id: 'what-is-dooza', label: 'What Is Dooza?' },
                                    { id: 'core-difference', label: 'The Core Difference' },
                                    { id: 'side-by-side', label: 'Side-by-Side Comparison' },
                                    { id: 'pricing-breakdown', label: 'Pricing Breakdown' },
                                    { id: 'credit-problem', label: 'The Credit Problem' },
                                    { id: 'seo-content-showdown', label: 'SEO Content Showdown' },
                                    { id: 'who-should-use-what', label: 'Who Should Use What' },
                                    { id: 'can-you-use-both', label: 'Can You Use Both?' },
                                    { id: 'verdict', label: 'The Verdict' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button
                                        type="button"
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
                                <p className="text-sm text-slate-600 mb-4">Get AI employees that work 24/7</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="outranking-io-vs-dooza" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Outranking.io has carved out a niche as one of the more sophisticated AI SEO writing assistants on the market. SERP-based keyword clustering, automated content briefs, AI-powered optimization scoring &mdash; it's a solid toolkit for content writers who want data-backed guidance.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But here's the question nobody asks: <strong>do you need an AI writing assistant, or do you need an AI employee that handles your entire SEO operation?</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Outranking.io still requires you to write, edit, optimize, and publish content yourself. It's a co-pilot, not an autopilot. At $129/month for the Solo plan (and $229/month for Pro), you're paying premium prices for a tool that still depends on your time and effort to produce results.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">Dooza's AI employees</Link> take a fundamentally different approach. Ranky &mdash; your AI SEO specialist &mdash; doesn't just help you write. It researches, writes, optimizes, and publishes content autonomously. And Ranky is just one of six AI employees you get for $29/month.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This is the honest comparison. No fluff, no agenda &mdash; just the facts so you can pick the right tool.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is Outranking.io? */}
                        <section id="what-is-outranking" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <PenTool className="w-8 h-8 text-orange-600" />
                                What Is Outranking.io?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Outranking.io is an AI-powered SEO content writing and optimization platform. It's designed for content creators, SEO professionals, and agencies who want AI assistance in producing search-optimized blog posts and articles. Think of it as a <strong>research and writing co-pilot</strong> that sits alongside you while you create content.
                                </p>
                                <p>
                                    The platform's standout feature is its <strong>"Concepts" system</strong> &mdash; it analyzes top-ranking pages for your target keyword, extracts factual claims, arguments, and data points, then feeds them to the AI during writing. This helps reduce hallucinations and produces more factually grounded content than generic AI writers.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Search, title: "SERP Clustering", desc: "Groups keywords by analyzing live search results" },
                                    { icon: FileText, title: "Content Briefs", desc: "Automated outlines based on top-ranking pages" },
                                    { icon: Brain, title: "Concepts AI", desc: "Extracts facts from competitors to reduce hallucinations" },
                                    { icon: Target, title: "SEO Scoring", desc: "Real-time optimization scoring with keyword gaps" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-orange-50 border border-orange-200 p-4 rounded-xl text-center">
                                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mx-auto mb-2">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">What Outranking.io Does Well</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "SERP-grounded AI writing reduces hallucinations vs generic AI writers",
                                    "Detailed content briefs with keyword clustering and outline generation",
                                    "SEO optimization scoring that identifies content gaps in real-time",
                                    "Internal linking suggestions based on your existing content",
                                    "Users report ~30% average increase in organic traffic",
                                    "Strong research capabilities for data-driven content creation"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">Where Outranking.io Falls Short</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Still requires manual writing, editing, and publishing — it's an assistant, not an employee",
                                    "Credit-based AI system — Concepts feature burns through credits fast",
                                    "Solo plan at $129/month just for content writing assistance",
                                    "No social media management, email automation, or sales outreach",
                                    "Cannot answer phone calls or handle customer inquiries",
                                    "Steep learning curve — requires understanding of SEO concepts to maximize value",
                                    "No autonomous publishing — you must manually export and publish every piece",
                                    "No free plan — only a 7-day money-back guarantee"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed
                                    videoId="Y7TnxUL8I3M"
                                    title="AI SEO Tool Review: Is It Worth $99+ Per Month?"
                                />
                                <p className="text-sm text-slate-500 text-center mt-3">
                                    Watch: Honest review of AI SEO content writing tools and their real value
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 border-l-4 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">The Fundamental Problem</h4>
                                        <p className="text-amber-800 text-sm">
                                            Outranking.io is a writing assistant, not a content engine. You still need to sit down, research topics, guide the AI, edit drafts, optimize manually, and publish to your CMS yourself. For $129+/month, you're paying for guidance &mdash; not execution. The content doesn't create itself.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Is Dooza? */}
                        <section id="what-is-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Bot className="w-8 h-8 text-primary-600" />
                                What Is Dooza?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza is a platform of <strong>purpose-built AI employees</strong> that handle specific business functions autonomously. Not a writing assistant. Not an optimization tool. <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium">Dedicated AI employees</Link> with defined roles, daily routines, and the ability to operate without your involvement.
                                </p>
                                <p>
                                    Each AI employee runs in the cloud 24/7. They don't need credits. They don't need you to sit at a keyboard editing drafts. They wake up, do their job, and deliver results &mdash; like a real employee who never takes a day off.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                                {[
                                    { icon: Mail, title: "Maily — Email Manager", desc: "Reads, drafts, and sends emails. Handles customer inquiries. Follows up automatically." },
                                    { icon: MessageSquare, title: "Somi — Social Media", desc: "Creates and posts content across platforms. Engages with comments. Runs on autopilot." },
                                    { icon: Search, title: "Ranky — SEO Specialist", desc: "Researches, writes, optimizes, and publishes SEO blog posts autonomously." },
                                    { icon: Phone, title: "Rachel — AI Receptionist", desc: "Answers phone calls 24/7. Books appointments. Handles customer inquiries live." },
                                    { icon: TrendingUp, title: "Stan — Sales Agent", desc: "Qualifies leads. Sends outreach. Books meetings. Manages your pipeline." },
                                    { icon: Shield, title: "Linda — Legal Assistant", desc: "Reviews contracts. Flags risks. Drafts legal documents." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Rocket className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Ranky vs Outranking.io &mdash; The SEO Difference</h4>
                                        <p className="text-slate-700">
                                            Where Outranking.io helps you research and write, Ranky does the entire job. It identifies trending topics, does deep web research including YouTube transcript analysis, writes long-form SEO content, embeds multimedia, optimizes for both Google and AI search engines, and publishes directly to your website &mdash; all without you lifting a finger. <strong>Outranking.io is a co-pilot. Ranky is a full-time employee.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Core Difference */}
                        <section id="core-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                The Core Difference: Writing Tool vs AI Workforce
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is the distinction most comparison articles miss. Outranking.io and Dooza aren't in the same category. One is an <strong>AI-assisted content writing tool</strong>. The other is an <strong>AI employee platform that includes SEO as one of six autonomous functions</strong>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Outranking.io */}
                                <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2 text-lg">
                                        <PenTool className="w-5 h-5" />
                                        Outranking.io = Writing Co-Pilot
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "You write content → AI assists with research & optimization",
                                            "Built for content writers and SEO professionals",
                                            "Credit-based usage — heavy research burns credits fast",
                                            "Requires SEO knowledge to maximize results",
                                            "Single-purpose — content writing assistance only",
                                            "Best for: freelance writers & content teams",
                                            "Model: you do the work → AI improves it"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0 mt-2"></div>
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
                                        <Bot className="w-5 h-5" />
                                        Dooza = AI Workforce
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "AI employees have defined roles & publish on autopilot",
                                            "Built for business owners who need operations handled",
                                            "Flat $29/month — no usage caps or credits",
                                            "Zero learning curve — free concierge onboarding",
                                            "6 AI employees — SEO, email, social, sales, legal, phone",
                                            "Best for: businesses needing autonomous operations",
                                            "Model: AI does the work → you review results"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-2">Think of It This Way</h4>
                                <p className="text-blue-800">
                                    Outranking.io is like hiring a research librarian who hands you notes, outlines, and fact-checks &mdash; but you still have to write the paper, format it, and submit it yourself. Dooza is like hiring six full-time employees who research, write, publish, email clients, post on social media, and answer the phones &mdash; all while you sleep. <strong>One gives you better inputs. The other gives you finished outputs.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Outranking.io vs Dooza: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-orange-700 bg-orange-50">Outranking.io</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", outranking: "AI writing assistant", dooza: "AI employee platform" },
                                            { feature: "Primary Function", outranking: "SEO content writing assistance", dooza: "Full business operations (6 AI employees)" },
                                            { feature: "SEO Content", outranking: "Assists writing & optimization", dooza: "Fully autonomous (Ranky writes & publishes)" },
                                            { feature: "Content Publishing", outranking: "Manual — export & publish yourself", dooza: "Auto-publishes to your website" },
                                            { feature: "Phone Calls", outranking: "Not supported", dooza: "AI receptionist (Rachel) 24/7" },
                                            { feature: "Social Media", outranking: "Not supported", dooza: "Automated daily posting (Somi)" },
                                            { feature: "Email Management", outranking: "Not supported", dooza: "Full automation (Maily)" },
                                            { feature: "Sales Outreach", outranking: "Not supported", dooza: "Automated pipeline (Stan)" },
                                            { feature: "Legal Reviews", outranking: "Not supported", dooza: "Contract review (Linda)" },
                                            { feature: "YouTube Embeds", outranking: "Not supported", dooza: "Built-in with transcript reading" },
                                            { feature: "Autonomy Level", outranking: "Co-pilot — you drive", dooza: "Autopilot — runs on schedule, 24/7" },
                                            { feature: "Setup Difficulty", outranking: "Medium — SEO knowledge required", dooza: "None — free concierge onboarding" },
                                            { feature: "Pricing Model", outranking: "Credits + subscription ($129-$999/mo)", dooza: "Flat $29/mo — no credits, no caps" },
                                            { feature: "Free Plan", outranking: "No — 7-day money-back only", dooza: "Free trial — no card required" },
                                            { feature: "Best For", outranking: "SEO writers & content teams", dooza: "Business owners needing AI operations" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600 bg-orange-50/30">{row.outranking}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50/50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 6: Pricing */}
                        <section id="pricing-breakdown" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-green-600" />
                                Pricing: The Real Cost Comparison
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Outranking.io has multiple pricing tiers, but the entry-level plan is too limited for serious use. Most users need the Solo plan at $129/month or Pro at $229/month to access meaningful features. Let's break down what you actually get at each price point.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {/* Outranking Starter */}
                                <div className="bg-orange-50 border border-orange-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-orange-800 mb-1 text-sm">Outranking Starter</h3>
                                    <p className="text-2xl font-bold text-orange-600 mb-2">$19<span className="text-sm text-orange-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "Basic features only", good: false },
                                            { text: "Very limited credits", good: false },
                                            { text: "No advanced research", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <XCircle className="w-3 h-3 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Outranking Solo */}
                                <div className="bg-orange-50 border border-orange-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-orange-800 mb-1 text-sm">Outranking Solo</h3>
                                    <p className="text-2xl font-bold text-orange-600 mb-2">$129<span className="text-sm text-orange-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "AI processing & Concepts", good: true },
                                            { text: "Keyword research", good: true },
                                            { text: "Credits burn fast", good: false },
                                            { text: "Still manual publishing", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <XCircle className="w-3 h-3 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Outranking Pro */}
                                <div className="bg-orange-50 border border-orange-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-orange-800 mb-1 text-sm">Outranking Pro</h3>
                                    <p className="text-2xl font-bold text-orange-600 mb-2">$229<span className="text-sm text-orange-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "More credits & features", good: true },
                                            { text: "Team collaboration", good: true },
                                            { text: "Still just a writing tool", good: false },
                                            { text: "No business operations", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <XCircle className="w-3 h-3 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-5 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-1 text-sm">Dooza</h3>
                                    <p className="text-2xl font-bold text-green-600 mb-2">$29<span className="text-sm text-green-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "All 6 AI employees", good: true },
                                            { text: "No credits or caps", good: true },
                                            { text: "Auto-publishes content", good: true },
                                            { text: "Free concierge onboarding", good: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl">
                                <p className="text-lg font-bold mb-2">The bottom line:</p>
                                <p className="text-slate-300">
                                    One month of Outranking.io's Solo plan ($129) buys you <strong className="text-white">over 4 months of Dooza</strong> &mdash; with 6 AI employees handling your SEO, email, social media, sales, legal reviews, and phone calls around the clock. No credits to manage. No manual publishing. No writing sessions required.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: The Credit Problem */}
                        <section id="credit-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <CreditCard className="w-8 h-8 text-red-600" />
                                The Outranking.io Credit Problem
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Outranking.io's credit system is the hidden cost that catches most users off guard. The platform's most powerful feature &mdash; the Concepts system that pulls factual data from top-ranking pages &mdash; is also its biggest credit drain.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    { title: "Basic content brief generation", credits: "Low credits", note: "Simple outline and keyword suggestions" },
                                    { title: "Concepts research (per article)", credits: "High credits", note: "Pulls facts from 10+ top-ranking pages" },
                                    { title: "Full AI-assisted article writing", credits: "Very high credits", note: "Concepts + writing + optimization" },
                                    { title: "Batch content production (10+ articles)", credits: "Credits exhausted", note: "Heavy users report running out mid-month" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-200 p-4 rounded-xl">
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.note}</p>
                                        </div>
                                        <span className="text-sm font-bold text-red-600 whitespace-nowrap ml-4">{item.credits}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-red-900 mb-3">What Users Actually Report</h4>
                                <div className="space-y-2 text-sm text-red-800">
                                    <p>The Concepts feature &mdash; Outranking's key differentiator &mdash; <strong>burns through credits fastest</strong>.</p>
                                    <p>Users doing serious content production report running out of credits halfway through the month.</p>
                                    <p>When credits run out, you're stuck with basic AI writing &mdash; no better than ChatGPT.</p>
                                    <p>Upgrading to get more credits means jumping to $229/month (Pro) or $429/month (Company).</p>
                                    <p className="font-bold">Dooza's $29/month has no credits, no caps, and Ranky publishes content daily without limit.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 8: SEO Content Showdown */}
                        <section id="seo-content-showdown" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Search className="w-8 h-8 text-primary-600" />
                                SEO Content Showdown: Outranking.io vs Dooza Ranky
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Since SEO content is where these two tools have the most overlap, let's do a direct comparison of the content creation workflow. This is where the writing-tool-vs-AI-employee difference becomes crystal clear.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "Step 1: Topic Research",
                                        outranking: "You manually enter target keywords. Outranking clusters them by SERP overlap and suggests related topics. Takes 15-30 minutes per article.",
                                        dooza: "Ranky autonomously identifies trending topics in your niche, analyzes competitor content, and selects high-opportunity keywords. Takes zero of your time."
                                    },
                                    {
                                        step: "Step 2: Content Brief",
                                        outranking: "Outranking generates an outline with headings, questions to answer, and competitor insights. You review and adjust. 10-20 minutes.",
                                        dooza: "Ranky generates its own research-backed outline, including YouTube transcript insights and web research. No review needed — or you can customize it."
                                    },
                                    {
                                        step: "Step 3: Writing",
                                        outranking: "AI assists section-by-section. You guide, edit, and refine each section. The Concepts feature adds factual grounding. 1-3 hours per article.",
                                        dooza: "Ranky writes the full article autonomously — long-form, research-backed, with embedded YouTube videos and optimized for AI search engines. Zero writing time."
                                    },
                                    {
                                        step: "Step 4: Optimization",
                                        outranking: "SEO scoring shows keyword gaps. You manually add missing terms, adjust density, fix structure. 20-40 minutes.",
                                        dooza: "Ranky optimizes during writing — keyword placement, internal linking, meta tags, schema markup, all built into the content generation process."
                                    },
                                    {
                                        step: "Step 5: Publishing",
                                        outranking: "You export the content, manually paste it into your CMS, add images, format it, and hit publish.",
                                        dooza: "Ranky publishes directly to your website. Blog post goes live on schedule. You don't touch a thing."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="bg-slate-100 px-5 py-3">
                                            <h4 className="font-bold text-slate-900">{item.step}</h4>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                            <div className="p-4">
                                                <span className="text-xs font-semibold text-orange-600 uppercase">Outranking.io</span>
                                                <p className="text-sm text-slate-600 mt-1">{item.outranking}</p>
                                            </div>
                                            <div className="p-4 bg-green-50/30">
                                                <span className="text-xs font-semibold text-green-600 uppercase">Dooza Ranky</span>
                                                <p className="text-sm text-slate-700 mt-1">{item.dooza}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-900 text-white p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-white mb-2">Total Time Per Article</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-orange-300 font-semibold">Outranking.io</p>
                                        <p className="text-2xl font-bold">2-4 hours</p>
                                        <p className="text-slate-400 text-sm">of your hands-on time per article</p>
                                    </div>
                                    <div>
                                        <p className="text-green-300 font-semibold">Dooza Ranky</p>
                                        <p className="text-2xl font-bold">0 minutes</p>
                                        <p className="text-slate-400 text-sm">fully autonomous — publishes while you sleep</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed
                                    videoId="e49fkI05NCQ"
                                    title="AI SEO Content Tools: How Much Time Do They Actually Save?"
                                />
                                <p className="text-sm text-slate-500 text-center mt-3">
                                    Watch: How AI SEO tools compare on actual time savings and content quality
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Who Should Use What */}
                        <section id="who-should-use-what" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-blue-600" />
                                Who Should Use What?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Use Outranking.io */}
                                <div className="border border-orange-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-orange-700 mb-4 text-lg">Use Outranking.io if you...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Are a professional SEO writer who wants AI-assisted research",
                                            "Run a content agency and need SERP-grounded briefs",
                                            "Want granular control over every sentence and keyword",
                                            "Already have systems for publishing, email, and social media",
                                            "Have $129-229/month budget for a writing assistant only",
                                            "Enjoy the hands-on content creation process"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <PenTool className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Use Dooza */}
                                <div className="border-2 border-green-300 p-6 rounded-xl bg-green-50/30">
                                    <h3 className="font-bold text-green-700 mb-4 text-lg">Use Dooza if you...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Run a business and need AI handling operations end-to-end",
                                            "Want SEO content published automatically without writing yourself",
                                            "Need AI for more than just writing — email, social, sales, phone",
                                            "Want predictable pricing with no credit surprises",
                                            "Don't have time to sit down and write content manually",
                                            "Want set-and-forget AI employees, not a writing tool"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-2">Real Talk</h4>
                                <p className="text-blue-800">
                                    If you're a content professional who loves the craft of SEO writing and wants AI to sharpen your process, Outranking.io is a capable tool. If you're a business owner who needs SEO results without becoming a content writer yourself, <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Dooza is the smarter investment</Link> &mdash; at a quarter of the price and with five additional AI employees included.
                                </p>
                            </div>
                        </section>

                        {/* Section 10: Can You Use Both? */}
                        <section id="can-you-use-both" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Workflow className="w-8 h-8 text-primary-600" />
                                Can You Use Both? (Yes &mdash; Here's How)
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    If you have the budget and want the best of both worlds, there's a legitimate case for using both tools. The key is understanding where each excels.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        scenario: "Daily SEO Content",
                                        outranking: "Not practical — too time-intensive for daily production at scale",
                                        dooza: "Ranky publishes SEO-optimized content to your blog daily on autopilot"
                                    },
                                    {
                                        scenario: "High-Stakes Pillar Content",
                                        outranking: "Use Outranking's Concepts research for deep, hand-crafted cornerstone pieces",
                                        dooza: "Ranky handles the supporting cluster content and internal linking automatically"
                                    },
                                    {
                                        scenario: "Business Operations",
                                        outranking: "Cannot help — content writing only",
                                        dooza: "Maily handles email, Somi posts social content, Stan manages sales, Rachel answers calls"
                                    },
                                    {
                                        scenario: "After Hours",
                                        outranking: "Nothing happens — requires your active involvement to work",
                                        dooza: "AI employees keep working — answering calls, replying to emails, publishing content, nurturing leads"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="bg-slate-100 px-5 py-3">
                                            <h4 className="font-bold text-slate-900">{item.scenario}</h4>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                            <div className="p-4">
                                                <span className="text-xs font-semibold text-orange-600 uppercase">Outranking.io</span>
                                                <p className="text-sm text-slate-600 mt-1">{item.outranking}</p>
                                            </div>
                                            <div className="p-4 bg-green-50/30">
                                                <span className="text-xs font-semibold text-green-600 uppercase">Dooza</span>
                                                <p className="text-sm text-slate-700 mt-1">{item.dooza}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 11: Verdict */}
                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BarChart3 className="w-8 h-8 text-primary-600" />
                                The Verdict
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Outranking.io is a well-built AI writing assistant for SEO professionals. Its SERP-grounded research, Concepts feature, and optimization scoring are genuinely useful for writers who want AI to sharpen their process.
                                </p>
                                <p>
                                    But for <strong>business owners who need results without the manual work</strong> &mdash; who need SEO content published, emails managed, social media running, sales outreach happening, and phones answered &mdash; Dooza delivers exponentially more value at a fraction of the cost.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 text-xl mb-4">Why Businesses Choose Dooza Over Outranking.io</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: DollarSign, text: "$29/mo vs $129-229/mo — 4-8x cheaper with 6x more functions" },
                                        { icon: Users, text: "6 specialized AI employees, not just a writing assistant" },
                                        { icon: Repeat, text: "Fully autonomous — publishes, emails, posts, sells 24/7" },
                                        { icon: Phone, text: "AI phone answering — Outranking can't do this" },
                                        { icon: HeartHandshake, text: "Free concierge onboarding — zero setup required" },
                                        { icon: Lock, text: "No credit anxiety — flat pricing, unlimited usage" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                                <item.icon size={16} />
                                            </div>
                                            <span className="text-sm text-slate-700 font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                                >
                                    Start Free with Dooza
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href={CAL_BOOKING_URL}
                                    onClick={handleAction}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-200 hover:border-primary-400 transition-all"
                                >
                                    Book a Free Demo
                                </a>
                            </div>
                        </section>

                        {/* YouTube Video - Near bottom */}
                        <section className="scroll-mt-28">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-4 text-center">AI SEO Tools Compared &mdash; What Actually Works in 2026</h3>
                                <YouTubeEmbed
                                    videoId="nLZnY8hN74A"
                                    title="10 Popular AI SEO Tools Tested: Expectations vs Reality"
                                />
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <MessageSquare className="w-8 h-8 text-primary-600" />
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                                        >
                                            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                                            <span className={`text-primary-600 text-xl font-bold shrink-0 transition-transform ${openFaqIndex === idx ? 'rotate-45' : ''}`}>+</span>
                                        </button>
                                        {openFaqIndex === idx && (
                                            <div className="px-6 pb-4">
                                                <p className="text-slate-600">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right spacer for layout balance */}
                    <div className="hidden lg:block w-64 shrink-0" />
                </div>
            </div>

            <RelatedPosts category="Comparison" tags={['Outranking.io', 'AI SEO Tools', 'AI Employees', 'Comparison']} currentSlug="outranking-io-vs-dooza" />
            <BottomCTA />
            <Footer />

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
