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
    Monitor,
    Lock,
    Users,
    Layers,
    Brain,
    Settings,
    Database,
    Laptop,
    Workflow,
    Timer,
    ShieldCheck,
    Wrench,
    Package,
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
    ShoppingCart,
    Building2,
    Cloud,
    HardDrive
} from 'lucide-react';

const faqData = [
    {
        question: "What is Accio Work?",
        answer: "Accio Work is a desktop AI agent platform by Alibaba International (currently in beta v0.6.2). It runs locally on your computer and can access files, execute terminal commands, automate your browser, and call external APIs. It's heavily optimized for e-commerce sourcing and global trade workflows."
    },
    {
        question: "How is Dooza different from Accio Work?",
        answer: "Dooza provides purpose-built AI employees that run autonomously 24/7 in the cloud — handling email, social media, SEO, sales, legal reviews, and phone calls for any type of business. Accio Work is a desktop-based agent platform focused primarily on e-commerce sourcing and global trade, tied to Alibaba's supplier ecosystem."
    },
    {
        question: "Can Accio Work answer phone calls?",
        answer: "No. Accio Work is a desktop agent — it works with files, browsers, and terminal commands on your computer. Dooza includes Rachel, an AI receptionist that answers phone calls, books appointments, and handles customer inquiries 24/7."
    },
    {
        question: "Is Accio Work free?",
        answer: "Accio Work offers a freemium model with a 14-day free trial. However, pricing details beyond that aren't publicly transparent. Dooza starts at $49/month with all AI employees included and offers a $1 trial for 3 days."
    },
    {
        question: "Does Accio Work handle social media and email?",
        answer: "No — social media and email automation are among Accio Work's weakest areas. It's designed for product sourcing, store setup, and supply chain tasks. Dooza includes Maily for email automation and Somi for daily social media posting across all platforms."
    },
    {
        question: "Can I use both Accio Work and Dooza?",
        answer: "Yes. If you run an e-commerce business, Accio Work can handle product sourcing and supplier negotiations within Alibaba's ecosystem, while Dooza handles your day-to-day business operations — email, social media, SEO, sales outreach, legal reviews, and phone calls."
    },
    {
        question: "Does Dooza require technical skills?",
        answer: "Zero technical skills required. Dooza includes free concierge onboarding — our team configures your AI employees for your business in a 30-minute call. Accio Work requires you to manage agent orchestration yourself and write clear, outcome-focused prompts."
    }
];

export default function AccioWorkVsDoozaContent() {
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
            const sections = ['introduction', 'what-is-accio-work', 'what-is-dooza', 'core-difference', 'side-by-side', 'pricing-breakdown', 'who-should-use-what', 'can-you-use-both', 'verdict', 'faq'];
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
                        { label: 'Accio Work vs Dooza' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Accio Work vs Dooza: <span className="text-primary-600">E-Commerce Agent</span> vs AI Employees
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Accio Work is Alibaba's e-commerce AI agent. Dooza gives you an entire AI workforce for any business. One is locked to sourcing. The other runs your entire operation. Here's the honest breakdown.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 14, 2026</span>
                            </div>
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
                            <BlogHeroImage
                                src="/blog/accio-work-vs-dooza.png"
                                alt="Accio Work vs Dooza comparison — Alibaba e-commerce AI agent versus AI employees platform for business automation"
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
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'what-is-accio-work', label: 'What Is Accio Work?' },
                                    { id: 'what-is-dooza', label: 'What Is Dooza?' },
                                    { id: 'core-difference', label: 'The Core Difference' },
                                    { id: 'side-by-side', label: 'Side-by-Side Comparison' },
                                    { id: 'pricing-breakdown', label: 'Pricing Breakdown' },
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
                                <InternalLinks currentSlug="accio-work-vs-dooza" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Alibaba's Accio Work is turning heads. It promises to let anyone launch and run a global e-commerce business using AI agents — product sourcing, store setup, supplier negotiations, even customs documentation. All from your desktop.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But here's the question you should be asking: <strong>is an e-commerce sourcing agent the same thing as an AI employee?</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The answer is no. And if you're not running a cross-border e-commerce operation on Alibaba, the difference matters even more.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Accio Work is a powerful tool for e-commerce sourcing within Alibaba's ecosystem. <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">Dooza's AI employees</Link> are built for complete business operations — email, social media, SEO, sales, legal, and phone calls — for <em>any</em> type of business.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This is the honest comparison. No fluff.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is Accio Work? */}
                        <section id="what-is-accio-work" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <ShoppingCart className="w-8 h-8 text-orange-600" />
                                What Is Accio Work?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Accio Work launched in March 2026 as Alibaba International's enterprise-grade AI agent platform. It's actually two products rolled into one brand:
                                </p>
                                <ul>
                                    <li><strong>Accio (accio.com)</strong> — An AI-powered B2B sourcing engine integrated with Alibaba.com, 1688.com, AliExpress, and Europages. Trusted by 10M+ monthly active users for product discovery and supplier matching.</li>
                                    <li><strong>Accio Work (work.accio.com)</strong> — A local-first desktop AI agent platform (Electron app for macOS and Windows) that goes beyond sourcing. It can read local files, run terminal commands, control your browser, and call external APIs.</li>
                                </ul>
                                <p>
                                    Think of it as <strong>Alibaba's supply chain wrapped in an AI agent shell</strong>. You describe what you want to sell, and Accio's agents handle market analysis, product sourcing, store design, listing creation, and logistics.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: HardDrive, title: "Desktop Agent", desc: "Runs locally on Mac or Windows" },
                                    { icon: ShoppingCart, title: "E-Commerce Focus", desc: "Sourcing, store setup, inventory" },
                                    { icon: Globe, title: "Browser Automation", desc: "Web scraping, form filling, multi-step flows" },
                                    { icon: Users, title: "Multi-Agent Teams", desc: "Delegation and group chat between agents" }
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

                            <h3 className="text-xl font-bold text-slate-900 mb-4">What Accio Work Does Well</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Product sourcing from Alibaba's massive supplier network",
                                    "Autonomous supplier negotiations and RFQ management",
                                    "Store design and product listing creation for e-commerce",
                                    "Multi-agent collaboration with delegation between specialized agents",
                                    "Browser automation for web scraping and multi-step workflows",
                                    "Automated compliance — VAT filings, customs docs across 100+ markets",
                                    "MCP (Model Context Protocol) support for external tool integration"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">Where Accio Work Falls Short</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Still in beta (v0.6.2) — not production-ready for business-critical operations",
                                    "Heavily e-commerce focused — not useful for service businesses, agencies, or consultants",
                                    "Locked to Alibaba's ecosystem — limited supplier options beyond Alibaba's network",
                                    "No email automation — cannot manage your inbox or send follow-ups",
                                    "No social media posting — cannot create or schedule content",
                                    "Cannot make or answer phone calls",
                                    "Desktop-only — requires local installation and your computer running",
                                    "Weak on marketing — user reviews report generic recommendations for advertising",
                                    "Trustpilot concerns — allegations of recruiting people to write fake 5-star reviews",
                                    "Requires agent orchestration skill — success depends on clear prompting"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 border-l-4 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">The Alibaba Lock-In Problem</h4>
                                        <p className="text-amber-800 text-sm">
                                            Accio Work is deeply tied to Alibaba's supplier network. If you're not sourcing products from Chinese manufacturers or running a cross-border e-commerce operation, most of its core features become irrelevant. It's a brilliant tool for one specific workflow — but it's not a general-purpose business automation platform.
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
                                    Dooza is a platform of <strong>purpose-built AI employees</strong> that handle specific business functions autonomously. Not a sourcing tool. Not a desktop agent. <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium">Dedicated AI employees</Link> with defined roles, responsibilities, and workflows — for any industry.
                                </p>
                                <p>
                                    Each AI employee runs in the cloud 24/7. They don't need your computer. They don't need you to assign tasks. They wake up, do their job, and report back — just like a real employee.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                                {[
                                    { icon: Mail, title: "Maily — Email Manager", desc: "Reads, drafts, and sends emails. Handles customer inquiries. Follows up automatically." },
                                    { icon: MessageSquare, title: "Somi — Social Media", desc: "Creates and posts content across platforms. Engages with comments. Runs on autopilot." },
                                    { icon: Search, title: "Ranky — SEO Specialist", desc: "Writes optimized blog posts. Tracks rankings. Builds your organic traffic." },
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
                                        <h4 className="font-bold text-slate-900 mb-2">The Key Difference</h4>
                                        <p className="text-slate-700">
                                            Dooza's AI employees don't wait for instructions. They have defined roles, scheduled routines, and autonomous decision-making. Somi posts your social media at 9am whether you're awake or not. Rachel answers calls at 2am. Ranky publishes SEO content every week. <strong>They work like employees, not agents you need to prompt.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: The Core Difference */}
                        <section id="core-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                The Core Difference: Sourcing Agent vs AI Employees
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is the most important distinction most comparison articles miss. Accio Work and Dooza aren't competing — they're solving fundamentally different problems for fundamentally different audiences.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Accio Work */}
                                <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2 text-lg">
                                        <ShoppingCart className="w-5 h-5" />
                                        Accio Work = Sourcing Agent
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "Built for e-commerce and global trade",
                                            "Tied to Alibaba's supplier ecosystem",
                                            "Runs locally on your desktop (Electron app)",
                                            "Stops when your computer sleeps",
                                            "Still in beta — not production-ready",
                                            "Best for: dropshippers & cross-border sellers",
                                            "Model: reactive — you prompt, agents execute"
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
                                        Dooza = AI Employees
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "Built for any business type and industry",
                                            "Works with 1,000+ apps via integrations",
                                            "Runs on cloud infrastructure 24/7",
                                            "Works while you sleep, travel, or vacation",
                                            "Production-ready — businesses rely on it daily",
                                            "Best for: SMBs needing autonomous operations",
                                            "Model: proactive — employees execute on schedule"
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
                                    Accio Work is like hiring a sourcing specialist who only works with Alibaba's warehouse. Dooza is like hiring six full-time employees — email manager, social media pro, SEO writer, sales rep, legal reviewer, and receptionist — who show up every day, know their job, and don't need supervision. <strong>One helps you find products. The other runs your business.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side Comparison */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Accio Work vs Dooza: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-orange-700 bg-orange-50">Accio Work</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", accio: "Desktop AI agent (e-commerce)", dooza: "AI employee platform (all industries)" },
                                            { feature: "Runs On", accio: "Your computer (Electron app)", dooza: "Cloud — works 24/7" },
                                            { feature: "Works When PC Off?", accio: "No — stops completely", dooza: "Yes — always running" },
                                            { feature: "Primary Focus", accio: "Product sourcing & global trade", dooza: "Full business operations" },
                                            { feature: "Phone Calls", accio: "Not supported", dooza: "AI receptionist (Rachel)" },
                                            { feature: "Social Media", accio: "Not supported", dooza: "Automated daily posting (Somi)" },
                                            { feature: "Email Management", accio: "Not supported", dooza: "Full automation (Maily)" },
                                            { feature: "SEO Content", accio: "Not built-in", dooza: "Full pipeline (Ranky)" },
                                            { feature: "Sales Outreach", accio: "Not built-in", dooza: "Automated pipeline (Stan)" },
                                            { feature: "Legal Review", accio: "Not supported", dooza: "Contract review (Linda)" },
                                            { feature: "Supplier Sourcing", accio: "Core strength (Alibaba network)", dooza: "Not built-in" },
                                            { feature: "Product Listing", accio: "Automated via Alibaba", dooza: "Via integrations (Shopify, etc.)" },
                                            { feature: "Integrations", accio: "Telegram, Discord, DingTalk, Lark", dooza: "1,000+ via Zapier" },
                                            { feature: "Status", accio: "Beta (v0.6.2)", dooza: "Production-ready" },
                                            { feature: "Setup", accio: "Desktop install + self-service", dooza: "30 min (free onboarding call)" },
                                            { feature: "Starting Price", accio: "Freemium (unclear pricing)", dooza: "$49/mo (all employees included)" },
                                            { feature: "Best For", accio: "E-commerce & dropshipping", dooza: "Any business needing AI operations" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600 bg-orange-50/30">{row.accio}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50/50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 6: Pricing Breakdown */}
                        <section id="pricing-breakdown" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-green-600" />
                                Pricing: The Real Cost Comparison
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Accio Work's pricing is one of its biggest question marks. While the original Accio sourcing tool is currently free, Accio Work uses a tiered subscription model with pricing that isn't publicly disclosed. The 14-day free trial gives you a taste, but what comes after is unclear.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {/* Accio Free */}
                                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-orange-800 mb-1">Accio Work Free</h3>
                                    <p className="text-3xl font-bold text-orange-600 mb-3">$0<span className="text-lg text-orange-400">/trial</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "14-day free trial", good: true },
                                            { text: "Basic agent access", good: true },
                                            { text: "Pricing unclear after trial", good: false },
                                            { text: "E-commerce features only", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Accio Paid */}
                                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-orange-800 mb-1">Accio Work Paid</h3>
                                    <p className="text-3xl font-bold text-orange-600 mb-3">$??<span className="text-lg text-orange-400">/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "Full agent platform access", good: true },
                                            { text: "Multi-model support", good: true },
                                            { text: "Pricing not publicly disclosed", good: false },
                                            { text: "Still in beta", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-xs font-bold text-green-700 bg-green-200 px-2 py-0.5 rounded-full w-fit mb-2">BEST VALUE</div>
                                    <h3 className="font-bold text-green-800 mb-1">Dooza Starter</h3>
                                    <p className="text-3xl font-bold text-green-600 mb-3">$49<span className="text-lg text-green-400">/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "All 6 AI employees included", good: true },
                                            { text: "1,000+ integrations", good: true },
                                            { text: "Cloud-based — works 24/7", good: true },
                                            { text: "Free concierge onboarding", good: true },
                                            { text: "$1 trial for 3 days", good: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-2">The Transparency Factor</h4>
                                <p className="text-slate-700 text-sm">
                                    Dooza publishes its pricing clearly: $49/month Starter, $69/month Growth, $119/month Pro — with a 20% yearly discount and a 3-day money-back guarantee. Accio Work's pricing beyond the free trial isn't publicly available, making it hard to budget for. When you're running a business, <strong>predictable costs matter</strong>.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: Who Should Use What */}
                        <section id="who-should-use-what" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-indigo-600" />
                                Who Should Use What?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-orange-800 mb-4 text-lg">Choose Accio Work If You...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Run a cross-border e-commerce business",
                                            "Source products from Alibaba, 1688, or AliExpress",
                                            "Need help with supplier negotiations and RFQs",
                                            "Want AI-assisted store setup and product listings",
                                            "Need automated customs and compliance documentation",
                                            "Are comfortable with beta software and agent orchestration",
                                            "Don't need email, social media, SEO, or phone automation"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <ShoppingCart className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 text-lg">Choose Dooza If You...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Run any type of business — service, SaaS, e-commerce, agency, practice",
                                            "Need email handled automatically every day",
                                            "Want social media posted daily without lifting a finger",
                                            "Need SEO content that ranks on Google",
                                            "Want a 24/7 AI receptionist answering your phone",
                                            "Need lead generation and sales outreach on autopilot",
                                            "Want contract and legal document review",
                                            "Prefer a production-ready platform with transparent pricing"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 8: Can You Use Both? */}
                        <section id="can-you-use-both" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <HeartHandshake className="w-8 h-8 text-pink-600" />
                                Can You Use Both?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Absolutely — and for e-commerce businesses, this might be the smartest play.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-green-50 border border-slate-200 p-6 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4">The Power Combo for E-Commerce</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                                            <ShoppingCart className="w-4 h-4" /> Accio Work Handles:
                                        </h4>
                                        <div className="space-y-2">
                                            {[
                                                "Product research and sourcing",
                                                "Supplier negotiations",
                                                "Store setup and listings",
                                                "Customs and compliance docs",
                                                "Inventory monitoring"
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0 mt-2"></div>
                                                    <span className="text-sm text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                                            <Bot className="w-4 h-4" /> Dooza Handles:
                                        </h4>
                                        <div className="space-y-2">
                                            {[
                                                "Customer email support (Maily)",
                                                "Social media marketing (Somi)",
                                                "SEO and organic traffic (Ranky)",
                                                "Customer phone calls (Rachel)",
                                                "Lead generation and sales (Stan)"
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                    <span className="text-sm text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <p className="text-blue-800">
                                    <strong>For non-e-commerce businesses</strong> — consultants, agencies, SaaS companies, medical practices, real estate agents, law firms — Accio Work offers very little value. Dooza is the clear choice because it handles the daily operations these businesses actually need: email, social media, SEO, sales, calls, and legal review.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: The Verdict */}
                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Zap className="w-8 h-8 text-yellow-500" />
                                The Verdict
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Accio Work and Dooza serve different masters.
                                </p>
                                <p>
                                    <strong>Accio Work</strong> is a powerful e-commerce sourcing agent built by Alibaba, for Alibaba's ecosystem. If you're launching a dropshipping business or scaling cross-border trade, it's worth exploring — once it exits beta. But it doesn't handle email, social media, SEO, sales outreach, legal review, or phone calls. It's a single department head, not a workforce.
                                </p>
                                <p>
                                    <strong>Dooza</strong> gives you six AI employees that handle your entire business operation — autonomously, 24/7, in the cloud. Email gets answered. Social media gets posted. Blog content gets published. Phone calls get picked up. Leads get qualified. Contracts get reviewed. All for $49/month with transparent pricing and free onboarding.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Recommendation</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <ShoppingCart className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">E-commerce sourcing?</p>
                                            <p className="text-slate-600">Try Accio Work for product research and supplier management within Alibaba's network.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                            <Bot className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Business operations?</p>
                                            <p className="text-slate-600">Use Dooza. Six AI employees, 24/7 cloud operations, 1,000+ integrations, transparent pricing, and zero technical skills required.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Layers className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">E-commerce business needing both?</p>
                                            <p className="text-slate-600">Use Accio Work for sourcing + Dooza for everything else. They complement each other perfectly.</p>
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
                        <RelatedPosts currentSlug="accio-work-vs-dooza" />
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
