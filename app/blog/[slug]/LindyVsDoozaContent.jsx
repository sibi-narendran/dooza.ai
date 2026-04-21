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
    Workflow,
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
    CreditCard,
    Code,
    Headphones
} from 'lucide-react';

const faqData = [
    {
        question: "What is Lindy AI?",
        answer: "Lindy AI is a no-code AI agent builder that lets you create custom automation workflows using natural language. It connects to 3,000+ apps and uses a credit-based pricing model starting at $0/month (free tier with 400 credits) up to $299/month for business plans. It's best known for email triage, meeting scheduling, and lead qualification."
    },
    {
        question: "How is Dooza different from Lindy AI?",
        answer: "Dooza provides pre-built AI employees that work autonomously 24/7 — handling email, social media, SEO, sales, legal reviews, and phone calls. You don't build agents from scratch. Lindy AI is a DIY agent builder where you create your own automations using natural language prompts. Dooza is ready out of the box; Lindy requires setup and ongoing credit management."
    },
    {
        question: "Does Lindy AI use credits?",
        answer: "Yes. Lindy AI uses a credit-based system where every action consumes credits. Simple tasks cost $0.01 per credit, but premium actions (like GPT-4 calls or complex workflows) cost significantly more. Users frequently report credits depleting faster than expected, making monthly costs unpredictable."
    },
    {
        question: "Can Lindy AI answer phone calls?",
        answer: "Lindy AI offers Gaia, a voice AI agent, but it costs $0.19/minute plus $10/month per phone number — on top of your existing plan credits. Dooza includes Rachel, an AI receptionist, in all plans at no extra cost — she answers calls, books appointments, and handles inquiries 24/7."
    },
    {
        question: "Is Dooza cheaper than Lindy AI?",
        answer: "For most businesses, yes. Lindy AI's Pro plan costs $49.99/month for 5,000 credits, but credits burn quickly with premium actions — real-world costs often hit $100-200+/month. Dooza is $49/month flat with all AI employees included and no credit system or usage limits."
    },
    {
        question: "Can I migrate from Lindy AI to Dooza?",
        answer: "Yes. Dooza's pre-built AI employees are ready to use immediately — no migration required. You can run both platforms in parallel during the transition, and Dooza's free concierge onboarding team will help you replicate your workflows in a 30-minute call."
    },
    {
        question: "What does Dooza offer that Lindy AI doesn't?",
        answer: "Dooza offers: predictable flat-rate pricing ($49/month), pre-built AI employees for specific roles (email, social media, SEO, sales, phone calls, legal review), free concierge onboarding, no credit system or usage limits, autonomous daily operations without prompting, and dedicated support with under 2-hour response times."
    }
];

export default function LindyVsDoozaContent() {
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
            const sections = ['introduction', 'what-is-lindy', 'what-is-dooza', 'core-difference', 'side-by-side', 'pricing-breakdown', 'credit-problem', 'who-should-use-what', 'can-you-use-both', 'verdict', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-purple-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Lindy AI vs Dooza' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Lindy AI vs Dooza: <span className="text-primary-600">DIY Agent Builder</span> vs Ready-Made AI Employees
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Lindy AI lets you build custom agents — but credits burn fast and costs spike. Dooza gives you 6 pre-built AI employees for $49/mo flat. One requires constant setup. The other just works. Here's the honest breakdown.
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
                                videoId="-9mX4e5zqHQ"
                                title="Lindy AI Review — Best Agentic AI Platform There Is?"
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
                                    { id: 'what-is-lindy', label: 'What Is Lindy AI?' },
                                    { id: 'what-is-dooza', label: 'What Is Dooza?' },
                                    { id: 'core-difference', label: 'The Core Difference' },
                                    { id: 'side-by-side', label: 'Side-by-Side Comparison' },
                                    { id: 'pricing-breakdown', label: 'Pricing Breakdown' },
                                    { id: 'credit-problem', label: 'The Credit Problem' },
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
                                <InternalLinks currentSlug="lindy-vs-dooza" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Lindy AI is one of the most popular no-code AI agent builders on the market. With 3,000+ integrations, natural language setup, and a 4.9/5 rating on G2, it looks like the perfect automation tool. Until you check your credit balance.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The number one complaint from Lindy users? <strong>Credits vanish faster than you expect.</strong> Simple automations burn through credits quickly, and premium actions — the ones you actually need — cost 5-10x more per task. What starts as $49/month often becomes $150-200+/month in practice.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Dooza takes a fundamentally different approach. Instead of a DIY agent builder with unpredictable costs, Dooza gives you <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">pre-built AI employees</Link> — each with a defined role, daily routines, and autonomous execution. All for $49/month flat. No credits. No surprises.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This is the honest comparison. No fluff.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is Lindy AI? */}
                        <section id="what-is-lindy" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Workflow className="w-8 h-8 text-purple-600" />
                                What Is Lindy AI?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Lindy AI (founded by Flo Crivello, based in San Francisco) is a no-code AI agent builder. You describe what you want in natural language, and Lindy creates an automation agent — called a "Lindy" — that connects to your apps and executes workflows.
                                </p>
                                <p>
                                    Think of it as <strong>a more intelligent Zapier</strong>. Instead of rigid if-then rules, Lindy's agents use AI to reason, understand context, and make decisions. It connects to 3,000+ apps including Gmail, Slack, HubSpot, Salesforce, Zoom, and Twilio.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Code, title: "No-Code Builder", desc: "Build agents with natural language" },
                                    { icon: Workflow, title: "3,000+ Integrations", desc: "Gmail, Slack, HubSpot, Salesforce" },
                                    { icon: Brain, title: "AI Reasoning", desc: "Context-aware decision making" },
                                    { icon: FileText, title: "100+ Templates", desc: "Pre-built workflow templates" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-purple-50 border border-purple-200 p-4 rounded-xl text-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mx-auto mb-2">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">What Lindy AI Does Well</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Natural language agent creation — describe what you want, Lindy builds it",
                                    "Email triage — categorizes, drafts replies, and flags important emails",
                                    "Meeting scheduling and preparation with calendar integration",
                                    "Lead qualification and CRM updates via integrations",
                                    "100+ pre-built templates for common workflows",
                                    "Knowledge base support for domain-specific automation",
                                    "Multi-step workflow automation with branching and conditions",
                                    "Gaia voice agent for AI-powered phone calls"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">Where Lindy AI Falls Short</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Credit system burns through fast — users report 'credit anxiety' that limits experimentation",
                                    "Premium actions cost 5-10x more credits — and most useful features require them",
                                    "Unused credits expire each billing cycle — no rollover",
                                    "Free plan is practically unusable (400 credits, no premium actions)",
                                    "Complex workflows require trial-and-error — steep learning curve for multi-step automations",
                                    "Billing issues — reports of continued charges after cancellation",
                                    "AI hallucinations — occasional inaccuracy in agent responses (noted in G2 reviews)",
                                    "Heavily reliant on Google services — requires extensive permissions upfront",
                                    "No autonomous daily operations — agents only run when triggered, not proactively",
                                    "Support responsiveness — some users report unanswered emails"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* YouTube Video Section */}
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 text-center">Honest Lindy AI Review: The Best and Worst Features</h3>
                                <YouTubeEmbed
                                    videoId="RYAv0C9BrjA"
                                    title="Honest Lindy AI Review: The Best and Worst Features + Pricing"
                                />
                            </div>

                            <div className="bg-amber-50 border border-amber-200 border-l-4 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">The Credit Anxiety Problem</h4>
                                        <p className="text-amber-800 text-sm">
                                            Lindy users frequently describe "credit anxiety" — the fear of running out of credits that prevents them from experimenting or building new automations. One reviewer on G2 described the credit system as "brutal." When every action has a variable cost, budgeting becomes impossible and innovation stalls. This is the #1 reason users look for Lindy alternatives.
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
                                    Dooza is a platform of <strong>purpose-built AI employees</strong> that handle specific business functions autonomously. Not a DIY builder. Not a credit-based agent platform. <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium">Dedicated AI employees</Link> with defined roles, daily routines, and autonomous execution — for any industry.
                                </p>
                                <p>
                                    Each AI employee runs in the cloud 24/7. They don't wait for triggers. They don't consume credits. They wake up, do their job, and report back — just like a real employee.
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
                                The Core Difference: Agent Builder vs AI Employees
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is the distinction most comparison articles miss. Lindy AI and Dooza solve the same problem — business automation — but their approaches are fundamentally different. One gives you tools. The other gives you workers.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Lindy */}
                                <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-4 flex items-center gap-2 text-lg">
                                        <Workflow className="w-5 h-5" />
                                        Lindy AI = Agent Builder
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "You build agents from scratch using prompts",
                                            "Credit-based pricing — costs vary per task",
                                            "Agents run when triggered, not autonomously",
                                            "Requires ongoing management and optimization",
                                            "Best for: tech-savvy users who want DIY control",
                                            "Steep learning curve for complex workflows",
                                            "Model: reactive — you configure, agents execute"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0 mt-2"></div>
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
                                            "Pre-built employees ready to work day one",
                                            "Flat-rate pricing — no credits, no surprises",
                                            "Employees work autonomously on daily schedules",
                                            "Free concierge onboarding handles setup for you",
                                            "Best for: business owners who want results, not tools",
                                            "5-minute setup, zero coding or prompting required",
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
                                    Lindy AI is like hiring a contractor and handing them a toolbox — you tell them what to build, how to build it, and pay by the hour. Dooza is like hiring six full-time employees — email manager, social media pro, SEO writer, sales rep, legal reviewer, and receptionist — who show up every day, know their job, and don't need supervision. <strong>One gives you tools. The other gives you a team.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side Comparison */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Lindy AI vs Dooza: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-purple-700 bg-purple-50">Lindy AI</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", lindy: "No-code AI agent builder", dooza: "AI employee platform (pre-built)" },
                                            { feature: "Pricing Model", lindy: "Credit-based (variable costs)", dooza: "Flat-rate ($49/mo all-inclusive)" },
                                            { feature: "Free Plan", lindy: "400 credits (very limited)", dooza: "$1 trial for 3 days (full access)" },
                                            { feature: "Setup Required", lindy: "Build agents from scratch", dooza: "Pre-built — 5 min setup" },
                                            { feature: "Phone Calls", lindy: "$0.19/min + $10/mo per number", dooza: "Included (Rachel AI Receptionist)" },
                                            { feature: "Social Media", lindy: "Requires custom agent build", dooza: "Automated daily posting (Somi)" },
                                            { feature: "Email Management", lindy: "Email triage agent available", dooza: "Full automation (Maily)" },
                                            { feature: "SEO Content", lindy: "Not built-in", dooza: "Full pipeline (Ranky)" },
                                            { feature: "Sales Outreach", lindy: "Requires custom agent build", dooza: "Automated pipeline (Stan)" },
                                            { feature: "Legal Review", lindy: "Not supported", dooza: "Contract review (Linda)" },
                                            { feature: "Integrations", lindy: "3,000+ apps", dooza: "1,000+ via Zapier" },
                                            { feature: "Autonomous Operation", lindy: "Trigger-based only", dooza: "Daily scheduled routines" },
                                            { feature: "Onboarding", lindy: "Self-service + docs", dooza: "Free concierge onboarding call" },
                                            { feature: "Credit System", lindy: "Yes — credits expire monthly", dooza: "None — unlimited usage" },
                                            { feature: "Voice AI", lindy: "Gaia (extra cost)", dooza: "Rachel (included)" },
                                            { feature: "Best For", lindy: "Tech-savvy DIY builders", dooza: "Business owners wanting results" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600 bg-purple-50/30">{row.lindy}</td>
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
                                    Lindy AI's pricing looks competitive on paper. But the credit-based model means your actual monthly cost depends entirely on how many actions you run — and which types of actions they are. Here's the reality.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {/* Lindy Free */}
                                <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-1 text-sm">Lindy Free</h3>
                                    <p className="text-2xl font-bold text-purple-600 mb-2">$0<span className="text-sm text-purple-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "400 credits", good: true },
                                            { text: "1M char knowledge base", good: true },
                                            { text: "No premium actions", good: false },
                                            { text: "Practically unusable", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <XCircle className="w-3.5 h-3.5 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Lindy Pro */}
                                <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-1 text-sm">Lindy Pro</h3>
                                    <p className="text-2xl font-bold text-purple-600 mb-2">$49.99<span className="text-sm text-purple-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "5,000 credits", good: true },
                                            { text: "Premium actions included", good: true },
                                            { text: "Credits deplete fast", good: false },
                                            { text: "No rollover — expires monthly", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <XCircle className="w-3.5 h-3.5 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Lindy Business */}
                                <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-1 text-sm">Lindy Business</h3>
                                    <p className="text-2xl font-bold text-purple-600 mb-2">$299.99<span className="text-sm text-purple-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "30,000 credits", good: true },
                                            { text: "Advanced features", good: true },
                                            { text: "Still credit-based", good: false },
                                            { text: "6x the price of Dooza", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <XCircle className="w-3.5 h-3.5 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-5 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-xs font-bold text-green-700 bg-green-200 px-2 py-0.5 rounded-full w-fit mb-1">BEST VALUE</div>
                                    <h3 className="font-bold text-green-800 mb-1 text-sm">Dooza Starter</h3>
                                    <p className="text-2xl font-bold text-green-600 mb-2">$49<span className="text-sm text-green-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "All 6 AI employees included", good: true },
                                            { text: "Unlimited usage — no credits", good: true },
                                            { text: "Phone calls included", good: true },
                                            { text: "Free concierge onboarding", good: true },
                                            { text: "$1 trial for 3 days", good: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-2">The Hidden Cost of Credits</h4>
                                <p className="text-slate-700 text-sm">
                                    Lindy's credit system charges $0.01 per basic action, but premium actions (GPT-4 calls, complex reasoning) cost $0.05-$0.10+ each. A single email triage workflow processing 50 emails/day with AI reasoning uses 1,500-3,000 credits/month — <strong>that's 30-60% of your Pro plan budget on just one automation.</strong> Add voice calls at $0.19/minute and phone numbers at $10/month each, and the "just $49" plan quickly becomes $150-200+.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: The Credit Problem */}
                        <section id="credit-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <CreditCard className="w-8 h-8 text-red-600" />
                                The Credit Problem: What Lindy Users Actually Say
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Don't take our word for it. Here's what real Lindy AI users report across G2, Trustpilot, and independent reviews:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        quote: "The credit system is brutal. I found myself hesitating to test new automations because I didn't want to burn through credits.",
                                        source: "G2 Review"
                                    },
                                    {
                                        quote: "Credits run out fast, especially with premium actions. What looks affordable on paper quickly adds up in practice.",
                                        source: "Independent Review"
                                    },
                                    {
                                        quote: "The free plan gives you 400 credits — barely enough to test a single workflow before you hit a wall.",
                                        source: "NoCode MBA Review"
                                    },
                                    {
                                        quote: "I was charged after cancellation. Getting a refund required multiple follow-ups.",
                                        source: "Trustpilot Review"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border-l-4 border-red-300 p-5 rounded-r-xl">
                                        <p className="text-slate-700 italic mb-2">"{item.quote}"</p>
                                        <p className="text-xs text-slate-500 font-medium">— {item.source}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    How Dooza Solves This
                                </h4>
                                <p className="text-green-700">
                                    Dooza has <strong>no credit system whatsoever</strong>. Your $49/month gets you all six AI employees running unlimited tasks. Maily can process 500 emails a day. Somi can post across 5 platforms daily. Rachel can answer 100 calls. The price doesn't change. Ever. What you see is what you pay — and that's it.
                                </p>
                            </div>
                        </section>

                        {/* YouTube Video — Lindy AI vs n8n */}
                        <section className="scroll-mt-28">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-4 text-center">Lindy AI vs n8n: AI Agents Comparison</h3>
                                <YouTubeEmbed
                                    videoId="27f38KPigFU"
                                    title="Lindy AI vs n8n — AI Agents Comparison"
                                />
                                <p className="text-sm text-slate-500 mt-3 text-center">
                                    See how Lindy compares to other automation platforms — and why businesses are choosing pre-built AI employees instead.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Who Should Use What */}
                        <section id="who-should-use-what" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-indigo-600" />
                                Who Should Use What?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-4 text-lg">Choose Lindy AI If You...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Are a developer or technical founder who enjoys building custom automations",
                                            "Need highly specific, niche workflows that no pre-built tool covers",
                                            "Have a large budget and don't mind variable monthly costs",
                                            "Want fine-grained control over every step of your automation",
                                            "Already use Lindy and have working agents you don't want to rebuild",
                                            "Need 3,000+ native integrations (more than Dooza's 1,000+)",
                                            "Want to experiment with AI agent building as a skill"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <Workflow className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 text-lg">Choose Dooza If You...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Run any type of business and want AI employees working today",
                                            "Need email handled automatically without building agents",
                                            "Want social media posted daily without lifting a finger",
                                            "Need SEO content that ranks on Google — written and published automatically",
                                            "Want a 24/7 AI receptionist answering your phone (included, not extra)",
                                            "Need predictable monthly costs with zero credit anxiety",
                                            "Prefer a production-ready platform with free onboarding support",
                                            "Don't have time to build, test, and maintain custom agents"
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

                        {/* Section 9: Can You Use Both? */}
                        <section id="can-you-use-both" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <HeartHandshake className="w-8 h-8 text-pink-600" />
                                Can You Use Both?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Yes — and for some businesses, this combination can be powerful. But for most, Dooza alone covers everything you need.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-green-50 border border-slate-200 p-6 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4">The Combined Approach</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                                            <Workflow className="w-4 h-4" /> Lindy AI Handles:
                                        </h4>
                                        <div className="space-y-2">
                                            {[
                                                "Highly custom niche automations",
                                                "Complex multi-step technical workflows",
                                                "Integrations Dooza doesn't cover",
                                                "Internal tool orchestration",
                                                "Developer-specific automation tasks"
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0 mt-2"></div>
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
                                                "Lead generation and sales (Stan)",
                                                "Legal document review (Linda)"
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
                                    <strong>For most small-to-medium businesses</strong> — agencies, consultants, SaaS companies, medical practices, real estate agents, law firms, e-commerce stores — Dooza alone handles everything. You only need Lindy if you have highly technical, custom automation needs that go beyond standard business operations.
                                </p>
                            </div>
                        </section>

                        {/* Section 10: The Verdict */}
                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Zap className="w-8 h-8 text-yellow-500" />
                                The Verdict
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Lindy AI and Dooza are both strong platforms — but they serve different users with different needs.
                                </p>
                                <p>
                                    <strong>Lindy AI</strong> is a powerful no-code agent builder with 3,000+ integrations and impressive AI reasoning capabilities. If you're technical, enjoy building custom automations, and don't mind unpredictable credit costs, it's a solid tool. But the credit anxiety is real, the free plan is unusable, and you're essentially becoming your own automation engineer.
                                </p>
                                <p>
                                    <strong>Dooza</strong> gives you six AI employees that handle your entire business operation — autonomously, 24/7, in the cloud. Email gets answered. Social media gets posted. Blog content gets published. Phone calls get picked up. Leads get qualified. Contracts get reviewed. All for $49/month with transparent pricing, no credits, and free onboarding.
                                </p>
                                <p>
                                    One platform asks: <em>"What do you want to build?"</em><br />
                                    The other says: <em>"Your team is already working."</em>
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Recommendation</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                                            <Workflow className="w-4 h-4 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Custom technical automation?</p>
                                            <p className="text-slate-600">Use Lindy AI if you're a developer who wants to build bespoke agents for niche technical workflows.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                            <Bot className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Business operations on autopilot?</p>
                                            <p className="text-slate-600">Use Dooza. Six AI employees, 24/7 cloud operations, 1,000+ integrations, transparent pricing, and zero technical skills required.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Layers className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Want the best of both worlds?</p>
                                            <p className="text-slate-600">Use Lindy for highly custom technical workflows + Dooza for daily business operations. They complement each other perfectly.</p>
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
                        <RelatedPosts currentSlug="lindy-vs-dooza" />
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
