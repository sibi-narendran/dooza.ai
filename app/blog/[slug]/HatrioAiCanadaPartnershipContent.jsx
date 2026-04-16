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
import {
    CheckCircle2,
    Clock,
    Calendar,
    ArrowRight,
    Sparkles,
    Bot,
    Rocket,
    HeartHandshake,
    Globe,
    MapPin,
    Users,
    TrendingUp,
    FileText,
    Search,
    Mail,
    MessageSquare,
    Zap,
    Award,
    Building2,
    BarChart3,
    Target,
    Layers,
    Lightbulb
} from 'lucide-react';

const faqData = [
    {
        question: "What is Hatrio AI?",
        answer: "Hatrio AI is a Canadian AI content engine that researches, writes, and ranks SEO-optimized blog content autonomously. Founded by Dinakar Sakthivel and based in Vancouver, BC, Hatrio is used by 10,000+ creators in 50+ countries to publish over 1 million posts — saving users 25+ hours per week on content production."
    },
    {
        question: "Where is Hatrio based?",
        answer: "Hatrio Canada Inc. is headquartered in Vancouver, British Columbia. It's one of the fastest-growing AI content platforms out of Canada and is trusted by agencies, startups, and SMBs across the globe."
    },
    {
        question: "Is Hatrio a good fit for marketing agencies in Canada?",
        answer: "Yes — Hatrio is purpose-built for agencies. It lets agencies deliver high-quality, SEO-optimized articles to multiple clients without increasing headcount. Each client gets their own brand voice, content strategy, and publishing cadence, all managed from a single platform."
    },
    {
        question: "Why did Hatrio partner with Dooza?",
        answer: "Hatrio already nails autonomous content production. Dooza handles everything around content — email, customer support, social distribution, sales outreach, SEO ranking, and phone calls. Together, Hatrio + Dooza gives any business or agency a complete AI workforce from content creation to customer conversion."
    },
    {
        question: "Does Hatrio actually use Dooza internally?",
        answer: "Yes. Hatrio's own team uses Dooza's AI employees to run their internal operations — email management, social distribution of their content, inbound lead handling, and SEO workflows. An AI-native company running on Dooza is the strongest validation we could ask for."
    },
    {
        question: "Can I use Hatrio and Dooza together?",
        answer: "Absolutely. Hatrio produces the content (blog posts, SEO articles, brand-voiced copy). Dooza's AI employees distribute it, manage inbox replies, post to social, generate leads, and answer phone calls about it. It's a full content-to-customer pipeline with zero human bottlenecks."
    },
    {
        question: "What does this partnership mean for new users?",
        answer: "If you're a Hatrio user, you get streamlined access to Dooza's AI workforce — with onboarding support built for content-led businesses. If you're a Dooza user, you get first-class access to Hatrio's content engine to keep your SEO pipeline full. The two platforms complement each other end-to-end."
    }
];

export default function HatrioAiCanadaPartnershipContent() {
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
            const sections = ['introduction', 'meet-hatrio', 'canada-leader', 'the-problem', 'inside-hatrio', 'why-dooza', 'the-partnership', 'better-together', 'verdict', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-red-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Hatrio AI × Dooza Partnership' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
                            <HeartHandshake size={16} />
                            <span>Partnership Announcement</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Hatrio AI: <span className="text-primary-600">Canada's AI Content Engine</span> — Now Partnered With Dooza
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Hatrio is one of Canada's fastest-growing AI content platforms — 10,000+ creators, 1M+ posts, 50+ countries. We're announcing our partnership, and the story behind why an AI-native company chose Dooza to run their own operations.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 16, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://hatrio.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg"
                            >
                                Visit Hatrio AI
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Try Dooza Free
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/hatrio-ai-canada-partnership.png"
                                alt="Hatrio AI Canada partnership with Dooza — Canadian AI content platform and AI employees workforce"
                                priority={true}
                            />
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
                                    { id: 'introduction', label: 'The Announcement' },
                                    { id: 'meet-hatrio', label: 'Meet Hatrio' },
                                    { id: 'canada-leader', label: 'Why Hatrio Leads in Canada' },
                                    { id: 'the-problem', label: 'The Problem Hatrio Solves' },
                                    { id: 'inside-hatrio', label: 'Inside the Hatrio Engine' },
                                    { id: 'why-dooza', label: 'Why Hatrio Runs on Dooza' },
                                    { id: 'the-partnership', label: 'What the Partnership Unlocks' },
                                    { id: 'better-together', label: 'Better Together' },
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
                                <p className="text-sm text-slate-600 mb-4">Hire your AI workforce today</p>
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
                                <InternalLinks currentSlug="hatrio-ai-canada-partnership" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Every few months, one Canadian AI company breaks out. This year, that company is <strong>Hatrio AI</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Built in Vancouver by founder <strong>Dinakar Sakthivel</strong>, Hatrio has quietly become one of the most-used AI content engines on the planet — <strong>10,000+ creators, over 1 million posts published, 50+ countries</strong>, and a product that genuinely saves users 25+ hours per week.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Today we're announcing that <strong>Dooza is officially partnering with Hatrio AI</strong> — and the best part of this story isn't the partnership itself. It's that Hatrio's own team runs on Dooza. An AI-native Canadian company chose our AI employees to power their own operations. That's the kind of validation you don't buy with marketing.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Here's the full story: who Hatrio is, why they're a top contender for the best AI content platform coming out of Canada, what they built, and what our partnership unlocks for anyone trying to scale content and customer operations in 2026.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Meet Hatrio */}
                        <section id="meet-hatrio" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Sparkles className="w-8 h-8 text-red-600" />
                                Meet Hatrio
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Hatrio Canada Inc. is an <strong>autonomous AI content engine</strong>. Point it at a brand, and it will research topics, write SEO-optimized articles in your voice, and publish on a schedule — without you touching a keyboard.
                                </p>
                                <p>
                                    Founder Dinakar Sakthivel spent years building startups and kept running into the same wall: every business needs content, and every business hates making it. The choices were either "produce nothing" or "burn weeks a month writing." So he built the third option.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: MapPin, title: "Vancouver, BC", desc: "Canadian-built and headquartered" },
                                    { icon: Users, title: "10K+ Creators", desc: "Agencies, startups, SMBs" },
                                    { icon: FileText, title: "1M+ Posts", desc: "Published across client sites" },
                                    { icon: Globe, title: "50+ Countries", desc: "Global user base" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-200 p-4 rounded-xl text-center">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mx-auto mb-2">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">In Dinakar's Words</h4>
                                        <p className="text-slate-700 italic">
                                            "We didn't want to build another AI writer. We wanted a system that understood your brand, learned your voice, and shipped publish-ready articles — so you could focus on the business instead of the blog."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Canada Leader */}
                        <section id="canada-leader" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Award className="w-8 h-8 text-primary-600" />
                                Why Hatrio Leads Canada's AI Content Scene
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Canada has a thriving AI ecosystem — Toronto, Montreal, and Vancouver produce some of the best ML talent in the world. But translating research into <em>shipped product</em> is a different sport. Hatrio is one of the few Canadian AI companies that's both technically serious and commercially mature.
                                </p>
                                <p>
                                    If you're a Canadian business looking for an <strong>AI content partner or AI agency alternative</strong>, Hatrio sits at the top of the list for three reasons:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        icon: Target,
                                        title: "Built for agencies, not just individuals",
                                        desc: "Hatrio scales content across multiple clients from one workspace. Marketing agencies in Canada and beyond use it to deliver SEO-optimized articles to their book of business without hiring a single new writer."
                                    },
                                    {
                                        icon: Search,
                                        title: "SEO-first, not vanity-first",
                                        desc: "Most AI writers generate text. Hatrio researches search intent, optimizes on-page SEO, and is designed to rank — not just to produce words. That's why output actually drives traffic."
                                    },
                                    {
                                        icon: Building2,
                                        title: "Proven at scale",
                                        desc: "1M+ posts across 50+ countries is not a demo — it's production traffic. Canadian startups can ship on top of Hatrio with confidence."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
                                <p className="text-slate-700">
                                    If you've been searching for the <strong>best AI content agency in Canada</strong>, you're looking for the outcome Hatrio already delivers: high-quality, ranked, brand-voiced content, at scale, without a traditional agency's overhead. Except you don't wait on a content calendar — you get publish-ready output.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: The Problem */}
                        <section id="the-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Zap className="w-8 h-8 text-amber-500" />
                                The Problem Hatrio Set Out to Solve
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's the uncomfortable truth about content in 2026: <strong>Google rewards publishing cadence</strong>. Brands that ship 4–8 quality posts per month compound organic traffic. Brands that don't, stall.
                                </p>
                                <p>
                                    But the math doesn't work with humans alone:
                                </p>
                                <ul>
                                    <li>A decent SEO writer costs $0.15–$0.50 per word</li>
                                    <li>A 2,000-word article takes 6–10 hours end-to-end</li>
                                    <li>Agencies mark that up 3–5x</li>
                                    <li>And you still need to brief, edit, and publish</li>
                                </ul>
                                <p>
                                    Hatrio collapses that stack. Research, drafting, SEO optimization, and publishing — handled by one autonomous system, tuned to your brand voice. The 25+ hours a week users get back isn't a tagline; it's just the cost of the old workflow disappearing.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Inside Hatrio */}
                        <section id="inside-hatrio" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                Inside the Hatrio Engine
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    At its core, Hatrio is four systems working as one:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5 mb-8">
                                {[
                                    { icon: Search, title: "Autonomous Research", desc: "Pulls live search data, competitor content, and topic clusters to decide what's worth writing." },
                                    { icon: FileText, title: "Brand-Voiced Writing", desc: "Learns your tone from examples and produces articles that read like you — not like AI." },
                                    { icon: TrendingUp, title: "SEO Optimization", desc: "On-page structure, keyword placement, internal links, and meta data — all handled." },
                                    { icon: Rocket, title: "Scheduled Publishing", desc: "Drops articles into your CMS on a cadence you set. Zero manual copy-paste." }
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

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-2">The Net Effect</h4>
                                <p className="text-blue-800">
                                    You stop thinking about content. Hatrio's been running for months with real customers in 50+ countries, so this isn't a "future roadmap" product — it's what the product already does.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Why Hatrio Runs on Dooza */}
                        <section id="why-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Bot className="w-8 h-8 text-primary-600" />
                                Why Hatrio Runs on Dooza
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is the part we're most proud of.
                                </p>
                                <p>
                                    Hatrio doesn't just partner with Dooza — <strong>Hatrio's own team runs on Dooza</strong>. An AI-native company, building AI products for 10,000+ creators, picked <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">Dooza's AI employees</Link> to operate their own business. Email, social distribution, lead handling, SEO workflows — all running on our AI workforce.
                                </p>
                                <p>
                                    When a team that <em>builds AI</em> chooses your AI, that's not marketing. That's product validation.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-primary-50 to-red-50 border-2 border-primary-200 p-6 rounded-2xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary-600" />
                                    What Hatrio Uses Dooza For
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { icon: Mail, name: "Maily", role: "Handles inbound email from creators and agencies" },
                                        { icon: MessageSquare, name: "Somi", role: "Distributes Hatrio's content across social channels" },
                                        { icon: Search, name: "Ranky", role: "Runs SEO on Hatrio's own marketing site" },
                                        { icon: TrendingUp, name: "Stan", role: "Qualifies inbound leads and books calls" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl">
                                            <div className="flex items-start gap-3">
                                                <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                                    <item.icon size={18} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                                                    <p className="text-xs text-slate-600">{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-6 rounded-xl">
                                <p className="text-lg italic leading-relaxed">
                                    "We're obsessive about what we ship to customers. So when we needed to offload our own internal operations, we weren't going to settle. Dooza's AI employees are the only thing we've tried that feels like actual colleagues — not tools we have to babysit."
                                </p>
                                <p className="mt-4 text-sm text-slate-400">— Hatrio AI team</p>
                            </div>
                        </section>

                        {/* Section 7: The Partnership */}
                        <section id="the-partnership" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <HeartHandshake className="w-8 h-8 text-pink-600" />
                                What the Partnership Unlocks
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Hatrio builds the content pipeline. Dooza runs the business around it. Together, they close the loop from <strong>"traffic you want" → "customers you keep"</strong>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
                                        <FileText className="w-5 h-5" />
                                        Hatrio Handles
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "Autonomous topic research",
                                            "Brand-voiced SEO articles",
                                            "Publish-ready content on schedule",
                                            "Multi-client agency workspaces",
                                            "On-page SEO structure and meta",
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
                                        <Bot className="w-5 h-5" />
                                        Dooza Handles
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "Email inbox (Maily)",
                                            "Social distribution (Somi)",
                                            "Site-wide SEO and ranking (Ranky)",
                                            "Phone calls and booking (Rachel)",
                                            "Sales outreach and qualification (Stan)",
                                            "Contract and legal review (Linda)",
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
                                <h4 className="font-bold text-blue-900 mb-2">What Users Get</h4>
                                <p className="text-blue-800">
                                    Hatrio customers get streamlined onboarding into Dooza's AI workforce. Dooza customers get first-class access to Hatrio's content engine. And any business that was about to hire a content agency now has a better option: <strong>two production-grade platforms that compose into a complete operation</strong>.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Better Together */}
                        <section id="better-together" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BarChart3 className="w-8 h-8 text-indigo-600" />
                                Better Together: The Full Stack
                            </h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Workflow</th>
                                            <th className="text-left py-3 px-4 font-bold text-red-700 bg-red-50">Hatrio</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Topic & keyword research", hatrio: "✅ Autonomous", dooza: "Complements via Ranky" },
                                            { feature: "Article writing (brand voice)", hatrio: "✅ Core strength", dooza: "Handoff to Hatrio" },
                                            { feature: "On-page SEO structure", hatrio: "✅ Built in", dooza: "Site-wide monitoring" },
                                            { feature: "Publish to CMS", hatrio: "✅ Scheduled", dooza: "Integrates via Zapier" },
                                            { feature: "Social distribution", hatrio: "—", dooza: "✅ Somi handles it" },
                                            { feature: "Email replies from readers", hatrio: "—", dooza: "✅ Maily handles it" },
                                            { feature: "Inbound lead qualification", hatrio: "—", dooza: "✅ Stan handles it" },
                                            { feature: "Phone calls & bookings", hatrio: "—", dooza: "✅ Rachel handles it" },
                                            { feature: "Agency multi-client support", hatrio: "✅ Built for agencies", dooza: "Per-client workspaces" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600 bg-red-50/30">{row.hatrio}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50/50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-gradient-to-r from-red-50 to-primary-50 border border-slate-200 p-6 rounded-xl">
                                <p className="text-slate-700 text-lg">
                                    <strong>The short version:</strong> Hatrio makes the content. Dooza runs everything around it. If you're a Canadian business, a global agency, or a solo operator trying to compete with teams 10x your size — this is the stack.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Verdict */}
                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Zap className="w-8 h-8 text-yellow-500" />
                                The Verdict
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Hatrio earned its reputation the hard way — by shipping a product that works at scale, for real users, in real markets. Vancouver-built, globally used, and quietly becoming one of the strongest AI content platforms out of Canada.
                                </p>
                                <p>
                                    We're proud to partner with them, and prouder still that their team chose Dooza to run their own operations. If Hatrio trusts Dooza to handle their internal workforce, we think you can too.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-primary-50 to-red-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Two Links. One Stack.</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                                            <FileText className="w-4 h-4 text-red-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Need content on autopilot?</p>
                                            <p className="text-slate-600">
                                                Try Hatrio at <a href="https://hatrio.ai" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">hatrio.ai</a> — research, brand-voiced writing, SEO, and publishing handled.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                            <Bot className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Need the business to run itself?</p>
                                            <p className="text-slate-600">Hire Dooza's AI workforce — email, social, SEO, sales, legal, and phone calls. $49/month, all included, free onboarding.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                                >
                                    Try Dooza Free — Hire Your AI Team Today
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <p className="text-sm text-slate-500 mt-3">$1 trial for 3 days. No commitment. Free concierge onboarding included.</p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <MessageSquare className="w-8 h-8 text-primary-600" />
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-3">
                                {faqData.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="border border-slate-200 rounded-xl overflow-hidden"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                                        >
                                            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                                            <ArrowRight
                                                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-90' : ''}`}
                                            />
                                        </button>
                                        {openFaqIndex === index && (
                                            <div className="px-5 pb-5">
                                                <p className="text-slate-600">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Related Posts */}
                        <RelatedPosts currentSlug="hatrio-ai-canada-partnership" />
                    </div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                calUrl={CAL_BOOKING_URL}
            />
        </div>
    );
}
