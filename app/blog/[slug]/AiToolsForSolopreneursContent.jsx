'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    DollarSign,
    Users,
    Mail,
    Share2,
    FileText,
    Target,
    TrendingUp,
    Calculator,
    Palette,
    MessageSquare,
    Video,
    Rocket,
    Monitor,
    ShieldCheck,
    Phone,
    Timer
} from 'lucide-react';

const CREW_URL = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=ai-tools-for-solopreneurs-body';

const faqData = [
    {
        question: "What is the best AI tool for solopreneurs in 2026?",
        answer: "Our top pick is Dooza Crew (our product, so weigh that). You tell Dooza, your master agent, the job in plain words from the web or your phone. It plans the job, builds the helper agents it needs (for example a researcher, a writer or an outreach agent) and reports back. Every agent has its own computer and browser in a private, isolated workspace, and you watch every step live in chat. Before it clicks Send or Pay it asks you to Approve, Edit or Reject. Crew is free to try (no card needed). Alongside it, most solopreneurs also use single-purpose tools for writing (ChatGPT, Jasper), design (Canva AI, Midjourney), email (Superhuman), social scheduling (Buffer, Hootsuite), meeting notes (Otter.ai), automation (Zapier, Make) and accounting (QuickBooks)."
    },
    {
        question: "How much do AI tools cost for a solopreneur?",
        answer: "Individual AI tools vary widely, from free tiers to tens of dollars a month each (see each vendor’s pricing page). A full stack covering content creation, design, email, social media, automation, and accounting adds up quickly. Dooza Crew, our top pick, is free to try (no card needed)."
    },
    {
        question: "Can AI replace a virtual assistant for solopreneurs?",
        answer: "AI can handle many VA tasks including email management, scheduling, social media posting, content drafting, and lead response. For repetitive, 24/7 tasks, AI is often more cost-effective. However, human VAs still excel at relationship-building, complex judgment calls, and tasks requiring emotional intelligence. Many solopreneurs use both: AI for automation and human VAs for high-touch work."
    },
    {
        question: "What is tool stack fatigue?",
        answer: "Tool stack fatigue occurs when solopreneurs juggle too many separate software subscriptions. Symptoms include: spending more time managing tools than doing actual work, paying for overlapping features, forgetting passwords, dealing with integration issues, and subscription creep. Consolidating overlapping tools reduces cognitive load and often cost."
    },
    {
        question: "Is Dooza Crew good for solopreneurs?",
        answer: "We think so, and it is our top pick, but it is our own product, so judge for yourself with the free trial. You describe the job in plain words from the web or your phone, and Dooza plans it and builds the helper agents it needs. Each agent has its own computer and browser in a private, isolated workspace, you watch every step live in chat, and it asks you to Approve, Edit or Reject before it clicks Send or Pay. Agents can take phone calls, included in the plan. No coding is needed. It is free to try (no card needed)."
    },
    {
        question: "How much time can AI tools save solopreneurs?",
        answer: "It depends on how much of your week goes to repeatable work. The biggest savings usually come from first drafts (emails, posts, blog outlines), meeting notes and follow-ups, and scheduling social posts in batches. A simple way to measure it: log how long each recurring task takes for one week, hand it to an AI tool for the next week, and compare. Keep the tools that clearly save time and cancel the rest."
    }
];

const aiTools = [
    {
        name: "Content Creation AI",
        examples: "ChatGPT, Jasper, Claude, Copy.ai",
        price: "Jasper Pro $59-69/seat/mo",
        icon: FileText,
        color: "purple",
        description: "Write blog posts, emails, social captions, ad copy, and more. The backbone of modern content marketing.",
        features: ["Blog writing", "Email drafts", "Social posts", "Ad copy"],
        note: (
            <>
                <strong>For a weekly newsletter:</strong>{' '}
                <a href="https://heynews.co" className="text-primary-600 hover:underline" target="_blank" rel="noopener">HeyNews</a>{' '}
                is an AI newsletter writer that trains on your past issues and drafts new ones in your voice. It watches the
                sources you pick (RSS, blogs, social, Reddit), scores the stories, and hands you a draft to review before
                anything is sent, so you can publish every week without giving up the whole afternoon to it.
            </>
        )
    },
    {
        name: "Visual Design AI",
        examples: "Canva AI, Midjourney, DALL-E, Adobe Firefly",
        price: null,
        icon: Palette,
        color: "pink",
        description: "Create social graphics, product images, presentations, and brand assets without hiring a designer.",
        features: ["Social graphics", "Product images", "Presentations", "Logo variations"]
    },
    {
        name: "Email Management AI",
        examples: "Superhuman, Lindy, SaneBox, Mailbutler",
        price: null,
        icon: Mail,
        color: "blue",
        description: "Triage inbox, draft responses, schedule sends, and actually hit inbox zero for once.",
        features: ["Auto-drafts", "Smart sorting", "Follow-ups", "Scheduling"]
    },
    {
        name: "Social Media AI",
        examples: "Buffer, Hootsuite, Later, Sprout Social",
        price: "Buffer from $5/channel/mo",
        icon: Share2,
        color: "green",
        description: "Schedule posts, generate captions, analyze performance, and maintain consistent presence across platforms without living on your phone.",
        features: ["Scheduling", "Caption AI", "Analytics", "Multi-platform"]
    },
    {
        name: "Meeting Notes AI",
        examples: "Otter.ai, Fireflies, Grain, Fathom",
        price: "Otter Pro $16.99/mo",
        icon: Video,
        color: "amber",
        description: "Auto-transcribe meetings, generate summaries, extract action items, and never miss a follow-up again.",
        features: ["Transcription", "Summaries", "Action items", "Search"]
    },
    {
        name: "Automation Platform",
        examples: "Zapier, Make, workflow automation tools",
        price: "Zapier Pro $19.99-29.99/mo",
        icon: Zap,
        color: "orange",
        description: "Connect your apps, automate workflows, and eliminate repetitive tasks. The glue that holds your tech stack together.",
        features: ["App connections", "Workflows", "Triggers", "500+ integrations"],
        note: (
            <>
                <strong>For spreadsheets, reports and decks:</strong>{' '}
                <a href="https://ajelix.com" className="text-primary-600 hover:underline" target="_blank" rel="noopener">Ajelix</a>{' '}
                is a European agentic AI workspace that turns raw data into analysis, Excel files, documents and
                presentations, with custom agents and workflow automation in the same place. It runs on European cloud
                infrastructure or inside your own, which matters if your clients ask where their data lives. Plans start at
                $39 per user per month (Lite, billed monthly).
            </>
        )
    },
    {
        name: "AI Accounting",
        examples: "QuickBooks AI, FreshBooks, Wave, Xero",
        price: "QuickBooks from $38/mo",
        icon: Calculator,
        color: "indigo",
        description: "Auto-categorize expenses, generate invoices, track time, and prepare for taxes without spreadsheet nightmares.",
        features: ["Expense tracking", "Invoicing", "Tax prep", "Reports"]
    }
];

const doozaEmployees = [
    { name: "Its own computer", desc: "Every agent has its own computer and browser in a private, isolated workspace", icon: Monitor },
    { name: "Watch live in chat", desc: "You see every step as it happens, and your staff can join the same chat", icon: MessageSquare },
    { name: "You approve", desc: "Before it clicks Send or Pay, it asks you to Approve, Edit or Reject", icon: ShieldCheck },
    { name: "Phone calls", desc: "Agents can take phone calls, included in the plan", icon: Phone },
    { name: "Free to try", desc: "no card needed", icon: DollarSign },
    { name: "Risk-free start", desc: "Free to try, no card needed. No card needed", icon: Timer }
];

export default function AiToolsForSolopreneursContent() {
    const [activeSection, setActiveSection] = useState('introduction');
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
            const sections = ['introduction', 'solopreneur-dilemma', 'ai-tools', 'tool-stack-problem', 'all-in-one-solution', 'cost-comparison', 'getting-started', 'faq'];
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

    const getColorClasses = (color) => {
        const colors = {
            purple: { bg: 'bg-purple-100', text: 'text-purple-600', tag: 'bg-purple-50 text-purple-700' },
            pink: { bg: 'bg-pink-100', text: 'text-pink-600', tag: 'bg-pink-50 text-pink-700' },
            blue: { bg: 'bg-blue-100', text: 'text-blue-600', tag: 'bg-blue-50 text-blue-700' },
            green: { bg: 'bg-green-100', text: 'text-green-600', tag: 'bg-green-50 text-green-700' },
            amber: { bg: 'bg-amber-100', text: 'text-amber-600', tag: 'bg-amber-50 text-amber-700' },
            orange: { bg: 'bg-orange-100', text: 'text-orange-600', tag: 'bg-orange-50 text-orange-700' },
            indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', tag: 'bg-indigo-50 text-indigo-700' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: '7 AI Tools for Solopreneurs' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Rocket size={16} />
                            <span>Small Business</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            7 Best AI Tools for Solopreneurs in 2026{' '}
                            <span className="text-primary-600">(Our Top Pick: Dooza Crew)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            <strong>Our top pick for solopreneurs is Dooza Crew</strong> (our own product, disclosed):
                            you tell a master agent the job in plain words and it builds the helper agents it needs.
                            Free to try. Below: Crew, plus the essential
                            single-purpose AI tools by category.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 26, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/ai-tools-for-solopreneurs.png"
                                alt="AI tools for solopreneurs showing the essential tech stack and all-in-one alternative"
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
                                    { id: 'solopreneur-dilemma', label: 'The Solopreneur Dilemma' },
                                    { id: 'ai-tools', label: '7 Essential AI Tools' },
                                    { id: 'tool-stack-problem', label: 'Tool Stack Overwhelm' },
                                    { id: 'all-in-one-solution', label: 'The All-in-One Solution' },
                                    { id: 'cost-comparison', label: 'Cost Comparison' },
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
                                <p className="text-sm text-slate-600 mb-4">Try a team of agents, free</p>
                                <a
                                    href={CREW_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Crew
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">No card needed</p>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="ai-tools-for-solopreneurs" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    <strong>Short answer:</strong> our top pick for solopreneurs is{' '}
                                    <a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Dooza Crew</a>,
                                    which is our product. You tell Dooza, your master agent, the job in plain words and it builds
                                    the helper agents it needs and reports back. It is free to try (no card needed).
                                </p>
                                <p className="text-lg leading-relaxed">
                                    You're running a one-person empire. Content creation, customer service, sales,
                                    accounting, marketing—all you. Sound familiar?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Every morning you wake up to a list that never ends. Write blog posts.
                                    Design social graphics. Respond to leads. Send invoices. Post on LinkedIn.
                                    Schedule meetings. Update your website. The work never stops—because there's
                                    only one of you.
                                </p>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    But here's the problem: the AI landscape is overwhelming. ChatGPT for writing.
                                    Canva for design. Zapier for automation. QuickBooks for accounting. Otter for
                                    meetings. Buffer for social media. Before you know it, you're paying for a stack of
                                    subscriptions and switching between them all day.
                                </p>
                            </div>

                            <div className="my-8">
                                <h3 className="font-semibold text-slate-900 mb-4">Watch: The Solopreneur's AI Toolkit</h3>
                                <YouTubeEmbed
                                    videoId="Rr1iM0Bz95U"
                                    title="AI Tools for Solopreneurs - Complete Guide"
                                />
                            </div>
                        </section>

                        <section id="solopreneur-dilemma" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-7 h-7 text-amber-500" />
                                The Solopreneur's Dilemma: Tool Stack Chaos
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's be honest. You didn't start a business to become a software manager.
                                </p>
                                <p>
                                    Yet here you are, juggling 7+ subscriptions, remembering 15 different passwords,
                                    and spending precious hours each week just trying to make your tools talk to each other.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                                <h4 className="font-bold text-red-900 mb-4">Symptoms of Tool Stack Fatigue:</h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Paying for features you don't use",
                                        "Forgetting which tool does what",
                                        "Integration nightmares",
                                        "Subscription creep (one tool at a time)",
                                        "Context switching every 10 minutes",
                                        "Data scattered across platforms",
                                        "Can't remember all your passwords",
                                        "Spending more time on tools than work"
                                    ].map((symptom, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                            <span className="text-red-800 text-sm">{symptom}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Build a stack from the seven categories above and you have seven separate tools. That's 7 logins,
                                    7 billing cycles, 7 learning curves, and 7 potential points of failure.
                                </p>
                            </div>

                            <blockquote className="border-l-4 border-primary-500 pl-6 my-8 italic text-slate-700">
                                "I realized I was spending 3 hours every morning just getting my tools set up and
                                synced before I could do any real work. That's 15 hours a week—almost half a
                                full-time job—on overhead."
                                <footer className="text-sm text-slate-500 mt-2 not-italic">— Solopreneur on Reddit's r/Entrepreneur</footer>
                            </blockquote>
                        </section>

                        <section id="ai-tools" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Sparkles className="w-7 h-7 text-primary-600" />
                                Our Top Pick, Then the 7 AI Tool Categories Solopreneurs Use in 2026
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza Crew comes first below as our top pick. After it, these are the
                                    AI tools that every blog recommends, every influencer uses, and every solopreneur
                                    eventually adopts. Based on recommendations from <a href="https://www.entrepreneur.com/science-technology/7-ai-tools-solopreneurs-need-for-2026-to-hit-7-figures/499925" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Entrepreneur.com</a> and
                                    <a href="https://www.nextiva.com/blog/best-ai-tools-for-small-business.html" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer"> Nextiva's small business research</a>:
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-teal-50 border-2 border-primary-300 rounded-2xl p-8 mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold mb-4">
                                    <Sparkles size={14} />
                                    <span>#1 Top pick (our product)</span>
                                </div>
                                <h3 className="font-bold text-2xl text-slate-900 mb-3">1. Dooza Crew</h3>
                                <p className="text-slate-600 mb-4">
                                    Disclosure: Dooza Crew is our product. You tell Dooza, your master agent, the job in plain
                                    words from the web or your phone. It plans the job, builds the helper agents it needs (for example a
                                    researcher, a writer or an outreach agent) and reports back.
                                </p>
                                <h4 className="font-semibold text-slate-900 mb-2">Why it's our top pick</h4>
                                <ul className="space-y-2 mb-6">
                                    {[
                                        "Every agent has its own computer and browser in a private, isolated workspace",
                                        "You watch every step live in chat, and your staff can join the same chat",
                                        "Before it clicks Send or Pay, it asks you to Approve, Edit or Reject",
                                        "Agents can take phone calls, included in the plan",
                                        "free to try",
                                        "Free to try, no card needed. No card needed"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={CREW_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
                                >
                                    Join the Dooza Crew waitlist <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="space-y-6 mb-8">
                                {aiTools.map((tool, index) => {
                                    const colors = getColorClasses(tool.color);
                                    return (
                                        <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                                                        <tool.icon className={`w-6 h-6 ${colors.text}`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-slate-900">{index + 2}. {tool.name}</h3>
                                                        <p className="text-sm text-slate-500">{tool.examples}</p>
                                                    </div>
                                                </div>
                                                {tool.price && <span className="text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-full shrink-0">{tool.price}</span>}
                                            </div>
                                            <p className="text-slate-600 text-sm mb-3">{tool.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {tool.features.map((feature, i) => (
                                                    <span key={i} className={`text-xs ${colors.tag} px-2 py-1 rounded`}>{feature}</span>
                                                ))}
                                            </div>
                                            {tool.note && (
                                                <p className="text-slate-600 text-sm mt-4 pt-4 border-t border-slate-100">{tool.note}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <p className="text-xs text-slate-500 mb-4">
                                Prices shown are from each vendor’s own pricing page (checked Oct 2026), US plans, monthly billing unless noted (Jasper per seat, Buffer per channel on Essentials, Zapier $29.99 monthly or $19.99 billed annually). Tools without a price here have no price we could verify, so check the vendor.
                            </p>

                            {/* Cost Tally */}
                            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mt-8">
                                <h4 className="font-bold text-xl text-red-800 mb-6 flex items-center gap-2">
                                    <DollarSign className="w-6 h-6" />
                                    The Real Cost of Your AI Stack
                                </h4>
                                <div className="space-y-3 mb-6">
                                    {[
                                        { tool: "Social Media (Buffer Essentials, 1 channel)", cost: "$5/mo" },
                                        { tool: "Meetings (Otter.ai Pro, monthly)", cost: "$16.99/mo" },
                                        { tool: "Automation (Zapier Pro, monthly)", cost: "$29.99/mo" },
                                        { tool: "Accounting (QuickBooks Simple Start)", cost: "$38/mo" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-red-200 pb-2">
                                            <span className="text-slate-700">{item.tool}</span>
                                            <span className="font-bold text-red-700">{item.cost}</span>
                                        </div>
                                    ))}
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-bold text-slate-900">Total for these 4 (verified items only, checked Oct 2026)</span>
                                        <span className="font-bold text-red-700 text-xl">$89.98/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-700">Content, design and email tools</span>
                                        <span className="font-bold text-red-700">not included</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-slate-900">Annual Cost (verified items only)</span>
                                        <span className="font-bold text-red-700 text-xl">$1,079.76/year</span>
                                    </div>
                                </div>
                                <p className="text-red-700 text-sm">
                                    * And this doesn't count the time you spend switching between and managing separate tools
                                </p>
                            </div>
                        </section>

                        <section id="tool-stack-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-7 h-7 text-red-500" />
                                The Problem: More Tools ≠ More Productivity
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>Here's what nobody tells you about that 7-tool AI stack:</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        title: "Nothing Actually Integrates",
                                        desc: "Your content AI doesn't talk to your social scheduler. Your email tool doesn't know about your CRM. You need Zapier just to make them work together—that's another subscription and another learning curve."
                                    },
                                    {
                                        title: "Context Switching Kills Productivity",
                                        desc: "Every jump between apps breaks your focus, and getting back into deep work takes time. With seven separate tools, you're switching contexts all day. Track how often you change apps in a normal day before adding another one."
                                    },
                                    {
                                        title: "Feature Overlap = Wasted Money",
                                        desc: "ChatGPT can write social posts. So can Jasper. And Hootsuite has AI now too. You're paying for the same capability three times. Multiply this across your entire stack."
                                    },
                                    {
                                        title: "No Unified Memory",
                                        desc: "Each tool starts fresh. Your email AI doesn't remember what you wrote in your blog post. Your social AI doesn't know your brand voice from your content tool. There's no continuity."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-200 rounded-xl p-5">
                                        <h4 className="font-bold text-red-900 mb-2">{item.title}</h4>
                                        <p className="text-red-800 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="all-in-one-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Target className="w-7 h-7 text-primary-600" />
                                The Solution: One Master Agent, a Team of Helper Agents
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    What if instead of subscribing to 7 different tools, you described the job once
                                    and a team of agents did it?
                                </p>
                                <p>
                                    That's the approach of <a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Dooza Crew</a>,
                                    our product. Instead of cobbling together ChatGPT + Canva + Buffer + Superhuman + Zapier, you get:
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-teal-50 border border-primary-200 rounded-2xl p-8 mb-8">
                                <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                                    <Bot className="w-6 h-6 text-primary-600" />
                                    How Dooza Crew Works
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {doozaEmployees.map((employee, index) => (
                                        <div key={index} className="bg-white/80 rounded-xl p-4 flex items-start gap-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                                <employee.icon className="w-5 h-5 text-primary-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900 text-sm">{employee.name}</h4>
                                                <p className="text-slate-600 text-xs mt-1">{employee.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-primary-200">
                                    <div className="flex items-center justify-between flex-wrap gap-4">
                                        <div>
                                            <span className="text-sm text-slate-600">Start with</span>
                                            <div className="text-3xl font-bold text-primary-600">7 days<span className="text-lg font-normal text-slate-500"> free (no card needed)</span></div>
                                        </div>
                                        <a
                                            href={CREW_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
                                        >
                                            Join the Dooza Crew waitlist
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-bold text-xl text-slate-900 mb-4">Why This Approach Works Better</h3>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        title: "Plain Words In, Finished Work Out",
                                        desc: "You tell Dooza the job from the web or your phone. It plans it, builds the helper agents it needs (a researcher, a writer, an outreach agent) and reports back.",
                                        icon: Bot
                                    },
                                    {
                                        title: "You Stay in Control",
                                        desc: "You watch every step live in chat, and it asks you to Approve, Edit or Reject before it clicks Send or Pay.",
                                        icon: ShieldCheck
                                    },
                                    {
                                        title: "One Login, One Bill",
                                        desc: "Forget juggling subscriptions. One plan for the whole organization.",
                                        icon: DollarSign
                                    },
                                    {
                                        title: "Private Workspaces",
                                        desc: "Every agent has its own computer and browser in an isolated workspace.",
                                        icon: Monitor
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                            <benefit.icon className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{benefit.title}</h4>
                                            <p className="text-slate-600 text-sm mt-1">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="cost-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-7 h-7 text-green-600" />
                                Cost Comparison: Tool Stack vs Dooza Crew
                            </h2>

                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-8">
                                <table className="w-full border-collapse text-left bg-white text-sm">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold">7-Tool Stack</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza Crew</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Monthly Cost</td>
                                            <td className="p-4">$89.98+ for 4 verified tools (checked Oct 2026)</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">Free to try (no card needed)</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Annual Cost</td>
                                            <td className="p-4">$1,079.76+ (verified items only, checked Oct 2026)</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">$588 a year, unlimited users and agents</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Number of Logins</td>
                                            <td className="p-4">7+</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">1</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Integration Setup</td>
                                            <td className="p-4">Hours of Zapier</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">Describe the job in plain words</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Approval before Send or Pay</td>
                                            <td className="p-4 text-center">
                                                <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 bg-primary-50/30 text-center">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Learning Curve</td>
                                            <td className="p-4">7 different UIs</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">1 chat</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Technical Skill Required</td>
                                            <td className="p-4">Medium-High</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">None</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">Support</td>
                                            <td className="p-4">7 different companies</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">1 company</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                                <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    What You Get Back with Dooza Crew
                                </h4>
                                <p className="text-green-800 mb-4">
                                    Switching from a 7-tool stack to one platform gives you:
                                </p>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600">1 bill</div>
                                        <div className="text-sm text-slate-600">Instead of 7 subscriptions</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600">5-10 hrs</div>
                                        <div className="text-sm text-slate-600">Per week on tools</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600">50+ days</div>
                                        <div className="text-sm text-slate-600">Per year for actual work</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Rocket className="w-7 h-7 text-primary-600" />
                                How to Get Started
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>Ready to ditch the tool stack chaos? Here's how to make the switch:</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Audit Your Current Stack",
                                        desc: "List every AI tool you're paying for. Add up the monthly cost. Be honest about which ones you actually use vs. 'meant to use.'"
                                    },
                                    {
                                        step: "2",
                                        title: "Join the Dooza Crew waitlist",
                                        desc: "No card needed. Give Dooza a real task in plain words, such as researching a prospect list or drafting a blog outline, and watch the agents work live in chat."
                                    },
                                    {
                                        step: "3",
                                        title: "Cancel the Overlap",
                                        desc: "Once you see Dooza Crew handling the jobs you hand it, cancel the redundant subscriptions you no longer need."
                                    },
                                    {
                                        step: "4",
                                        title: "Reinvest the Savings",
                                        desc: "Whatever you stop paying for overlapping tools? Put it toward advertising, product development, or—radical idea—pay yourself more."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-primary-50 border border-primary-100 rounded-xl p-5">
                                        <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Box */}
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Stop Managing Tools. Start Building Your Business.
                                </h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Tell Dooza the job in plain words and let a team of agents do it. Free to try
                                    (no card needed), then free to try.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={CREW_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
                                    >
                                        Join the Dooza Crew waitlist <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <MessageSquare className="w-7 h-7 text-primary-600" />
                                Frequently Asked Questions
                            </h2>
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Solopreneur & AI Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.entrepreneur.com/science-technology/7-ai-tools-solopreneurs-need-for-2026-to-hit-7-figures/499925" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Entrepreneur - AI Tools for Solopreneurs</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Tool Comparisons</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.nextiva.com/blog/best-ai-tools-for-small-business.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Nextiva - Best AI Tools for Small Business</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-tools-for-solopreneurs" category="Small Business" tags={['AI Tools', 'Solopreneur', 'Small Business']} />
                    </div>

                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
