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
    Zap,
    Mail,
    FileText,
    Star,
    TrendingUp,
    Users,
    AlertTriangle,
    MessageSquare,
    Phone,
    Settings,
    BarChart3,
    Target,
    Workflow,
    RefreshCw,
    Timer
} from 'lucide-react';

const faqData = [
    {
        question: "What is marketing automation?",
        answer: "Marketing automation uses software to automate repetitive marketing tasks: email sequences, social media posting, lead nurturing, ad campaigns, and more. Instead of manually sending follow-up emails or posting to social media, automation handles these tasks based on triggers and schedules you set up."
    },
    {
        question: "Is marketing automation worth it for small businesses?",
        answer: "Yes—small businesses using marketing automation see 25% higher ROI and 451% more qualified leads according to industry research. The key is choosing the right tool. Enterprise platforms like HubSpot or Marketo are overkill (and overpriced) for most SMBs. AI-powered automation like Dooza provides similar benefits at SMB-friendly prices."
    },
    {
        question: "What's the difference between marketing automation and AI automation?",
        answer: "Traditional marketing automation follows rules you set: 'If lead opens email, then send follow-up after 2 days.' AI automation is more intelligent: it decides WHAT to send, WHEN to send it, and can create content dynamically. AI automation is essentially marketing automation that thinks for itself."
    },
    {
        question: "What tasks should I automate first?",
        answer: "Start with the tasks that: (1) you do repeatedly, (2) take significant time, and (3) don't require creative judgment. Email follow-ups, social media posting, lead response, and appointment reminders are ideal starting points. These have the highest ROI and lowest risk."
    },
    {
        question: "How long does it take to set up marketing automation?",
        answer: "Traditional automation platforms like HubSpot or ActiveCampaign can take weeks or months to set up properly—building workflows, writing email sequences, creating triggers. AI automation like Dooza sets up in a single 30-minute onboarding call because the AI handles the complexity."
    },
    {
        question: "Will automation make my marketing feel impersonal?",
        answer: "Bad automation feels robotic. Good automation feels personal because it responds quickly, remembers context, and delivers relevant content. AI automation is particularly good at personalization because it can adapt messaging dynamically rather than sending the same canned responses to everyone."
    }
];

const automationTools = [
    {
        name: "HubSpot",
        price: "$20-3,600+/mo",
        type: "All-in-one platform",
        bestFor: "Mid-market to enterprise",
        limitations: "Expensive as you scale, complex setup, steep learning curve"
    },
    {
        name: "ActiveCampaign",
        price: "$29-149/mo",
        type: "Email + automation",
        bestFor: "Email-focused SMBs",
        limitations: "Limited beyond email, requires manual setup, no AI content creation"
    },
    {
        name: "Mailchimp",
        price: "$13-350/mo",
        type: "Email marketing",
        bestFor: "Basic email automation",
        limitations: "Limited automation features, pricing increases with contacts"
    },
    {
        name: "Zapier",
        price: "$29.99-599/mo",
        type: "Integration platform",
        bestFor: "Connecting apps",
        limitations: "Just connects tools, doesn't do the work itself"
    },
    {
        name: "Marketo",
        price: "$1,000-4,000+/mo",
        type: "Enterprise automation",
        bestFor: "Large enterprises",
        limitations: "Way too expensive and complex for SMBs"
    }
];

export default function MarketingAutomationToolsContent() {
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
            const sections = ['introduction', 'what-is-automation', 'why-automate', 'tool-comparison', 'ai-vs-traditional', 'dooza-solution', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Marketing Automation Tools' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                            <Workflow size={16} />
                            <span>Automation Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Marketing Automation Tools</span>: The 2026 Guide for Small Business
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            76% of businesses use marketing automation—but most SMBs are stuck with tools built for enterprises. Learn which automation actually makes sense for small businesses and how AI is changing the game.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
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
                                Get AI Automation - $29/mo
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
                                    { id: 'what-is-automation', label: 'What is Automation?' },
                                    { id: 'why-automate', label: 'Why Automate?' },
                                    { id: 'tool-comparison', label: 'Tool Comparison' },
                                    { id: 'ai-vs-traditional', label: 'AI vs Traditional' },
                                    { id: 'dooza-solution', label: 'The Dooza Approach' },
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
                                <p className="text-sm text-slate-600 mb-4">Automate smarter</p>
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
                                <InternalLinks currentSlug="marketing-automation-tools" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Here's the dirty secret about marketing automation: most tools are designed for companies with dedicated marketing teams and six-figure budgets.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to <a href="https://inbeat.agency/blog/marketing-automation-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">inBeat Agency research</a>, 76% of businesses now use marketing automation. But there's a massive gap between enterprise tools like <a href="https://www.hubspot.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HubSpot</a> ($3,600+/month) and what small businesses actually need.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>The result?</strong> Small businesses either overpay for features they'll never use, or they cobble together multiple tools that don't talk to each other. Meanwhile, the promise of "automation" becomes hours spent setting up workflows that still require constant babysitting.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide cuts through the complexity. We'll show you what marketing automation actually is, compare the major tools honestly, and explain why AI-powered automation is changing the game for small businesses.
                                </p>

                                {/* YouTube Video Embed */}
                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="0R_3iarc8IA"
                                        title="Content Marketing & Automation - Complete Guide"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: How marketing automation can transform your business</p>
                                </div>

                                <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The 340% ROI Opportunity</h4>
                                            <p className="text-slate-700">
                                                According to <a href="https://medium.com/@ap3617180/the-340-roi-shift-why-smbs-must-automate-operational-tasks-to-achieve-scalable-growth-in-the-ai-7a3c5a97daf9" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">research published on Medium</a>, businesses investing in workflow automation see an average <strong>340% ROI within 18 months</strong>. The question isn't whether to automate—it's choosing the right approach.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-automation" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Marketing Automation?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Marketing automation uses software to handle repetitive marketing tasks automatically. Instead of manually doing these things, automation handles them based on triggers, schedules, and rules:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Mail, title: "Email Sequences", desc: "Welcome series, follow-ups, abandoned cart reminders" },
                                    { icon: MessageSquare, title: "Social Media Posting", desc: "Scheduled posts across multiple platforms" },
                                    { icon: Target, title: "Lead Nurturing", desc: "Moving prospects through your funnel automatically" },
                                    { icon: Users, title: "Lead Scoring", desc: "Identifying which leads are ready to buy" },
                                    { icon: Phone, title: "Follow-Up Reminders", desc: "Never forget to follow up with a prospect" },
                                    { icon: BarChart3, title: "Reporting", desc: "Automatic performance tracking and alerts" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                        <div className="flex items-start gap-3">
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
                        </section>

                        <section id="why-automate" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Marketing Automation Matters (The Numbers)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Data from <a href="https://www.demandsage.com/marketing-automation-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DemandSage</a>, <a href="https://www.venasolutions.com/blog/automation-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Vena Solutions</a>, and <a href="https://backlinko.com/marketing-automation-stats" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Backlinko</a>:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "340%", label: "average ROI within 18 months", source: "Industry Research", link: "https://medium.com/@ap3617180/the-340-roi-shift-why-smbs-must-automate-operational-tasks-to-achieve-scalable-growth-in-the-ai-7a3c5a97daf9" },
                                    { stat: "451%", label: "increase in qualified leads", source: "DemandSage", link: "https://www.demandsage.com/marketing-automation-statistics/" },
                                    { stat: "$46K", label: "annual savings for SMBs", source: "Vena Solutions", link: "https://www.venasolutions.com/blog/automation-statistics" },
                                    { stat: "25%", label: "higher marketing ROI", source: "Backlinko", link: "https://backlinko.com/marketing-automation-stats" },
                                    { stat: "70%", label: "reduction in manual tasks", source: "Forbes", link: "https://www.forbes.com/" },
                                    { stat: "82%", label: "of sales teams freed for relationship building", source: "Industry Data", link: "https://www.venasolutions.com/blog/automation-statistics" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-purple-50 border border-purple-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-purple-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline">{item.source}</a>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                    <Timer className="w-5 h-5" />
                                    The Time Savings Are Real
                                </h4>
                                <p className="text-green-700">
                                    According to <a href="https://www.venasolutions.com/blog/automation-statistics" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Vena Solutions research</a>, employees estimate saving <strong>240 hours per year</strong> through automation, while business leaders estimate <strong>360 hours</strong>. The average worker already saves 1 hour per day using AI automation—with projections suggesting 12 hours per week within five years.
                                </p>
                            </div>
                        </section>

                        <section id="tool-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Marketing Automation Tools Compared</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Here's an honest breakdown of the major automation platforms, based on <a href="https://www.marketingautomationinsider.com/marketing-automation-vendor-market-share/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Marketing Automation Insider</a> and <a href="https://www.emailvendorselection.com/marketing-automation-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Email Vendor Selection</a>:
                            </p>

                            <div className="space-y-4 mb-8">
                                {automationTools.map((tool, idx) => (
                                    <div key={idx} className="bg-white border-2 border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-lg">{tool.name}</h3>
                                                <p className="text-sm text-slate-500">{tool.type} • Best for: {tool.bestFor}</p>
                                            </div>
                                            <div className="bg-slate-100 px-4 py-2 rounded-lg shrink-0">
                                                <span className="font-bold text-slate-900">{tool.price}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
                                            <strong>Limitation:</strong> {tool.limitations}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Biggest Barrier to Adoption</h4>
                                        <p className="text-slate-700">
                                            According to <a href="https://www.emailvendorselection.com/marketing-automation-statistics/" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">Email Vendor Selection</a>, the top barriers to marketing automation are: <strong>lack of internal expertise (33%)</strong>, poor/insufficient data (24%), and lack of company prioritization (24%). The tools are complex enough that most small businesses never fully implement them.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="ai-vs-traditional" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Automation vs Traditional Automation</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Settings className="w-5 h-5 text-slate-600" />
                                        Traditional Automation
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You build workflows manually",
                                            "Follows rules you set: 'If X, then Y'",
                                            "You write all the content",
                                            "Requires ongoing maintenance",
                                            "Learning curve: weeks to months",
                                            "Scales with more setup work"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <span className="text-slate-400 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-primary-700 mb-4 flex items-center gap-2">
                                        <Bot className="w-5 h-5 text-primary-600" />
                                        AI Automation
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "AI builds and optimizes workflows",
                                            "Learns and adapts: 'What works best?'",
                                            "AI creates the content",
                                            "Self-maintaining and self-improving",
                                            "Setup: one onboarding call",
                                            "Scales automatically"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-primary-700">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3">The Key Difference</h4>
                                <p className="text-blue-700">
                                    Traditional automation tools are like giving you a kitchen—you still have to cook. AI automation is like having a chef who cooks for you. You tell them your preferences, approve the menu, and they handle everything else.
                                </p>
                            </div>
                        </section>

                        <section id="dooza-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Dooza Approach: AI Employees, Not Workflows</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-purple-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Bot size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Stop Building Workflows. Hire AI Employees.</h3>
                                        <p className="text-lg text-slate-700 mb-4">
                                            Instead of spending weeks building email sequences and social media workflows, Dooza gives you AI employees who handle entire functions:
                                        </p>
                                        <ul className="space-y-2 text-slate-700">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span><strong>Eva</strong> manages your email—sends, follows up, nurtures</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span><strong>Sonny</strong> handles social media—creates and posts content</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span><strong>Stan</strong> generates leads—finds and qualifies prospects</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span><strong>Rachel</strong> answers phones—24/7 call handling</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-green-800 mb-3">The Cost Comparison</h4>
                                <div className="grid md:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">$800+/mo</div>
                                        <p className="text-sm text-slate-600">HubSpot Marketing Hub</p>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">$149/mo</div>
                                        <p className="text-sm text-slate-600">ActiveCampaign Plus</p>
                                    </div>
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <div className="text-2xl font-bold text-green-700">$29/mo</div>
                                        <p className="text-sm text-green-600">Dooza (6 AI employees)</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with Marketing Automation</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Identify Your Biggest Time Drain",
                                        desc: "What marketing task takes the most time? Email follow-ups? Social posting? Lead response? Start there—you'll see the fastest ROI."
                                    },
                                    {
                                        step: "2",
                                        title: "Choose Your Approach",
                                        desc: "Traditional automation (you build workflows) vs AI automation (AI does the work). For most small businesses, AI automation delivers better results with less effort."
                                    },
                                    {
                                        step: "3",
                                        title: "Start Simple, Then Expand",
                                        desc: "Don't try to automate everything at once. Start with one function, see results, then add more. With Dooza, each AI employee handles one function—turn them on as you're ready."
                                    },
                                    {
                                        step: "4",
                                        title: "Measure and Optimize",
                                        desc: "Track what's working. Good automation should show clear ROI within 30-90 days. If it doesn't, something's wrong with the setup or the tool."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Automate Smarter?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Skip the complex workflows and expensive platforms. Get AI employees that actually do the work for less than most basic automation tools cost.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Started - $29/month <ArrowRight className="w-4 h-4" />
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Automation Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://inbeat.agency/blog/marketing-automation-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">inBeat - 70 Marketing Automation Statistics</a></li>
                                        <li>• <a href="https://www.demandsage.com/marketing-automation-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DemandSage - 89 Automation Statistics</a></li>
                                        <li>• <a href="https://backlinko.com/marketing-automation-stats" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Backlinko - Key Automation Statistics</a></li>
                                        <li>• <a href="https://www.venasolutions.com/blog/automation-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Vena Solutions - 70 Business Automation Stats</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Market Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.marketingautomationinsider.com/marketing-automation-vendor-market-share/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Marketing Automation Insider - Market Share</a></li>
                                        <li>• <a href="https://www.emailvendorselection.com/marketing-automation-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Email Vendor Selection - Statistics</a></li>
                                        <li>• <a href="https://www.smbguide.com/marketing-automation-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SMB Guide - Automation Facts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="marketing-automation-tools" category="Automation" tags={['Marketing Automation', 'Business Automation', 'AI Tools']} />
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
