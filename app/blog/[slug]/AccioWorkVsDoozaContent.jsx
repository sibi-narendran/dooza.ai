'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CAL_BOOKING_URL } from '../../../lib/links';
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
        question: "How much does Accio Work cost?",
        answer: "Accio Work (accio.com) has a Free plan, then Pro at $19.9/month ($199/year), Elite at $99/month ($999/year) and Ultra at $199/month ($1,999/year). Accio lists Ultra as \"For enterprises\" with a Contact sales button (accio.com/wow, checked October 26, 2026). Prices change, so check Accio's page before you buy. For comparison, Dooza Crew is free for 7 days (card required), then $49/month per organization with unlimited users and agents, AI usage included and a hard spending cap."
    },
    {
        question: "Is Accio Work free?",
        answer: "Partly. Accio describes its Free plan as \"Free forever, web search only\" and says Accio Work is a free desktop AI agent with no credit card required to start (accio.com/wow, checked October 26, 2026). Deeper features need a paid plan: Pro from $19.9/month ($199/year), Elite from $99/month ($999/year) and Ultra from $199/month ($1,999/year). Dooza Crew is free for 7 days (card required), then $49/month per organization. Cancel before day 8 and you pay nothing."
    },
    {
        question: "What is Accio Work?",
        answer: "Accio Work is a desktop AI agent platform by Alibaba International, announced in March 2026. It runs on your computer and can access files, execute terminal commands, automate your browser, and call external APIs. It is heavily optimized for e-commerce sourcing and global trade workflows."
    },
    {
        question: "Is Accio Work legit?",
        answer: "Accio is Alibaba International's product, and Digital Commerce 360 reported the Accio Work announcement on March 24, 2026. We have not run a long hands-on test, so this post reports published facts, not a verdict on quality. Read the plan limits on accio.com before you pay."
    },
    {
        question: "What is a good Accio Work alternative for a small business?",
        answer: "For a small business that is not sourcing from Alibaba, our top pick is Dooza Crew (our product). You tell Dooza, your master agent, the job in plain words from the web or your phone. It plans it, builds the helper agents it needs (a researcher, a writer, an outreach agent) and reports back. Each agent has its own computer and browser in a private, isolated workspace, and you watch every step live in chat. It is $49/month per organization after a 7-day free trial (card required), and agents can take phone calls, included. If you do cross-border sourcing on Alibaba, Accio Work fits that job better."
    },
    {
        question: "How is Dooza Crew different from Accio Work?",
        answer: "Accio Work is a desktop agent focused on e-commerce sourcing and global trade, tied to Alibaba's supplier ecosystem. Dooza Crew is a team of agents in the cloud: you give Dooza a job in plain words, it builds the helper agents it needs, and each agent works in its own private computer and browser while you watch in chat. Crew asks you to Approve, Edit or Reject before it clicks Send or Pay. Crew has no supplier network. Accio does."
    },
    {
        question: "Can Accio Work answer phone calls?",
        answer: "We found no phone-call feature in Accio's published materials (checked October 26, 2026). Dooza Crew agents can take phone calls, and it is included in the plan: $49 per organization per month after a 7-day free trial (card required)."
    },
    {
        question: "Does Accio Work handle social media and email?",
        answer: "We found no email inbox automation or social media posting in Accio's published materials (checked October 26, 2026). It is designed for product sourcing, store setup, and supply chain tasks. With Dooza Crew you can ask for that work in plain words, and Dooza builds the helper agents it needs, such as a writer or an outreach agent."
    },
    {
        question: "Can I use both Accio Work and Dooza Crew?",
        answer: "Yes. If you run an e-commerce business, Accio Work can handle product sourcing and supplier work inside Alibaba's ecosystem, while Dooza Crew handles research, writing and outreach jobs you describe in plain words. Crew has a 7-day free trial (card required), so you can test it next to Accio."
    },
    {
        question: "Does Dooza Crew require technical skills?",
        answer: "No. You describe the job in plain words from the web or your phone, and Dooza plans it and builds the helper agents. Your staff can join the same chat. Accio Work asks you to manage agent orchestration yourself and write clear, outcome-focused prompts."
    }
];

const CREW_URL = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=accio-work-vs-dooza-body';

export default function AccioWorkVsDoozaContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && /calendly\.com|cal\.com|\/book(\/|\?|$)/.test(url)) {
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
                            Accio Work (accio.com) Review: <span className="text-primary-600">Pricing, Features</span> & Verdict
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Accio Work is Alibaba's e-commerce sourcing agent. Pricing: Free, Pro $19.9/mo, Elite $99/mo, Ultra $199/mo (checked October 26, 2026). Dooza Crew, our product and our top pick for small businesses, is a team of agents for any business: free for 7 days, then $49/mo per organization.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 26, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={CREW_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Try Dooza Crew free for 7 days
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/accio-work-vs-dooza.png"
                                alt="Accio Work vs Dooza Crew comparison: Alibaba e-commerce AI agent versus a team of AI agents for small business"
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
                                <p className="text-sm text-slate-600 mb-4">Try a team of agents, free for 7 days</p>
                                <a
                                    href={CREW_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Crew
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
                                    <strong>Accio Work pricing in short:</strong> a Free plan, Pro at $19.9/month, Elite at $99/month and Ultra at $199/month (accio.com, checked October 26, 2026). Annual billing is $199, $999 and $1,999 a year. It is a desktop AI agent from Alibaba International, built for e-commerce sourcing.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>Is it right for your business?</strong> If you source products from Alibaba, it may be. If you run any other small business, we think <a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Dooza Crew</a> is the better pick: you tell Dooza the job in plain words, it builds the helper agents it needs, and you pay $49 a month per organization after a 7-day free trial (card required). Dooza Crew is our product, so weigh that, and read where Accio is stronger below.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Alibaba's Accio Work promises to let anyone launch and run a global e-commerce business using AI agents: product sourcing, store setup, supplier negotiations, even customs documentation. All from your desktop. This review separates published facts from positioning claims and explains where each product fits.
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
                                    Alibaba International announced Accio Work in March 2026 as its enterprise AI agent platform (<a href="https://www.digitalcommerce360.com/2026/03/24/alibaba-international-announces-ai-agent-fleets-via-accio-work/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Digital Commerce 360, March 24, 2026</a>). It's actually two products rolled into one brand:
                                </p>
                                <ul>
                                    <li><strong>Accio (accio.com)</strong> — An AI-powered B2B sourcing engine integrated with Alibaba.com, 1688.com, AliExpress, and Europages. Alibaba reported more than 10 million monthly active users for Accio in March 2026 (per the Digital Commerce 360 report above).</li>
                                    <li><strong>Accio Work (work.accio.com)</strong> — A local-first desktop AI agent platform that goes beyond sourcing (check Accio's site for supported operating systems). It can read local files, run terminal commands, control your browser, and call external APIs.</li>
                                </ul>
                                <p>
                                    Think of it as <strong>Alibaba's supply chain wrapped in an AI agent shell</strong>. You describe what you want to sell, and Accio's agents handle market analysis, product sourcing, store design, listing creation, and logistics.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: HardDrive, title: "Desktop Agent", desc: "Runs locally on your computer" },
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
                                    "Heavily e-commerce focused — not useful for service businesses, agencies, or consultants",
                                    "Locked to Alibaba's ecosystem — limited supplier options beyond Alibaba's network",
                                    "Email automation not listed — we found no inbox management or follow-ups in Accio's published materials (checked October 8, 2026)",
                                    "Social media posting not listed — no content scheduling in Accio's published materials",
                                    "Phone calls not listed — no call answering in Accio's published materials",
                                    "Desktop app — runs on your own computer, so it needs local installation",
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

                        {/* Section 3: What Is Dooza Crew? */}
                        <section id="what-is-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Bot className="w-8 h-8 text-primary-600" />
                                What Is Dooza Crew?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You tell Dooza, your master agent, the job in plain words from the web or your phone. It plans the job, builds the helper agents it needs (a researcher, a writer, an outreach agent) and reports back. Each agent has its own computer and browser in a private, isolated workspace, and you watch every step live in chat. Agents can take phone calls, included.
                                </p>
                                <p>
                                    Crew is the main product from <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link>. It costs <strong>$49 a month per organization</strong> (unlimited users and agents), with AI usage included and a hard spending cap. It starts free for 7 days (card required). Cancel before day 8 and you pay nothing.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                                {[
                                    { icon: Monitor, title: "Its own computer", desc: "Every agent has its own computer and browser in a private, isolated workspace." },
                                    { icon: MessageSquare, title: "Watch live in chat", desc: "You see every step as it happens, and your staff can join the same chat." },
                                    { icon: ShieldCheck, title: "You approve", desc: "Before it clicks Send or Pay, it asks you to Approve, Edit or Reject in chat." },
                                    { icon: Phone, title: "Phone calls", desc: "Agents can take phone calls, included in the plan." },
                                    { icon: DollarSign, title: "One flat price", desc: "$49/mo per organization, unlimited users and agents, AI usage included with a hard spending cap." },
                                    { icon: Timer, title: "Risk-free start", desc: "7 days free (card required). Cancel before day 8 and you pay nothing." }
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
                                        <h4 className="font-bold text-slate-900 mb-2">Why Crew is our top pick for a small business</h4>
                                        <p className="text-slate-700">
                                            It is one flat price with no surprise AI bills, you stay in control because it asks before it sends or pays, and you do not need a supplier network to get value from it. <strong>Watch for:</strong> Crew has no sourcing network. If Alibaba suppliers are the core of your business, Accio Work fits that job better.
                                        </p>
                                        <p className="mt-3"><a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Try Dooza Crew free for 7 days</a></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: The Core Difference */}
                        <section id="core-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                The Core Difference: Sourcing Agent vs Team of Agents
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
                                            "Runs locally on your desktop",
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
                                        Dooza Crew = Team of Agents
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "You give Dooza the job in plain words, from the web or your phone",
                                            "Dooza builds the helper agents it needs and reports back",
                                            "Each agent has its own computer and browser, private and isolated",
                                            "Watch every step live in chat",
                                            "Agents can take phone calls, included",
                                            "$49/mo per organization, 7 days free (card required)",
                                            "Asks you to Approve, Edit or Reject before Send or Pay"
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
                                    Accio Work is like hiring a sourcing specialist who works with Alibaba's supplier network. Dooza Crew is like having a master agent that builds a small team for each job you describe, with a researcher, a writer or an outreach agent, and asks before it sends or pays. <strong>One helps you find products. The other works on the jobs you hand it.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side Comparison */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Accio Work vs Dooza Crew: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-orange-700 bg-orange-50">Accio Work</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza Crew</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", accio: "Desktop AI agent (e-commerce)", dooza: "Team of agents built by a master agent (all industries)" },
                                            { feature: "Runs On", accio: "Desktop app on your computer", dooza: "Cloud, from the web or your phone" },
                                            { feature: "Primary Focus", accio: "Product sourcing & global trade", dooza: "Jobs you describe in plain words" },
                                            { feature: "Phone Calls", accio: "Not listed", dooza: "Yes, agents can take phone calls, included" },
                                            { feature: "Social Media", accio: "Not listed", dooza: "Ask for it in plain words" },
                                            { feature: "Email Management", accio: "Not listed", dooza: "Ask for it in plain words" },
                                            { feature: "Research & Writing", accio: "Deep research tasks on paid plans", dooza: "Researcher and writer agents" },
                                            { feature: "Sales Outreach", accio: "Not listed", dooza: "Outreach agent" },
                                            { feature: "Supplier Sourcing", accio: "Core strength (Alibaba network)", dooza: "No supplier network" },
                                            { feature: "Approval", accio: "See Accio's site", dooza: "Approve, Edit or Reject before Send or Pay" },
                                            { feature: "Workspace", accio: "Your own computer", dooza: "Each agent has its own computer and browser, private and isolated" },
                                            { feature: "Status", accio: "Announced March 2026", dooza: "Live; 7 days free" },
                                            { feature: "Setup", accio: "Desktop app, self-serve", dooza: "Tell Dooza the job in plain words" },
                                            { feature: "Starting Price", accio: "Free plan; Pro from $19.9/mo", dooza: "Free 7 days (card required), then $49/mo per organization" },
                                            { feature: "Best For", accio: "E-commerce & dropshipping", dooza: "Small businesses that want a team of agents" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600 bg-orange-50/30">{row.accio}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50/50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="mt-2 text-xs text-slate-500">Accio Work facts from accio.com and Alibaba&apos;s March 2026 announcement (<a href="https://www.digitalcommerce360.com/2026/03/24/alibaba-international-announces-ai-agent-fleets-via-accio-work/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Digital Commerce 360, March 24, 2026</a>), checked October 26, 2026. &quot;Not listed&quot; means we found no such feature in Accio&apos;s published materials; check Accio&apos;s site before you decide.</p>
                            </div>
                        </section>

                        {/* Section 6: Pricing Breakdown */}
                        <section id="pricing-breakdown" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-green-600" />
                                How Much Does Accio Work Cost?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <strong>Accio Work has a Free tier (a one-time 7-day onboarding allowance with bonus credits, then a base daily credit allowance) and three paid plans: Pro from $19.9/month ($199/year), Elite from $99/month ($999/year) and Ultra from $199/month ($1,999/year).</strong> That is how Accio itself answers &quot;How much does Accio Work cost?&quot; on <a href="https://www.accio.com/wow/index.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">accio.com</a> (checked October 26, 2026). Accio lists Ultra as &quot;For enterprises&quot; with a Contact sales button, and Pro and Elite with a free trial. Check Accio&apos;s site for what each plan includes before you buy.
                                </p>
                            </div>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200 text-left">
                                            <th className="py-3 pr-4 font-bold text-slate-900">Accio Work plan</th>
                                            <th className="py-3 pr-4 font-bold text-slate-900">Monthly</th>
                                            <th className="py-3 pr-4 font-bold text-slate-900">Yearly</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { plan: 'Free (7-day onboarding allowance, then daily credits)', monthly: '$0', yearly: '$0' },
                                            { plan: 'Pro', monthly: 'from $19.9', yearly: '$199' },
                                            { plan: 'Elite', monthly: 'from $99', yearly: '$999' },
                                            { plan: 'Ultra', monthly: 'from $199', yearly: '$1,999' },
                                        ].map((row) => (
                                            <tr key={row.plan} className="border-b border-slate-100">
                                                <td className="py-3 pr-4 text-slate-800">{row.plan}</td>
                                                <td className="py-3 pr-4 text-slate-700">{row.monthly}</td>
                                                <td className="py-3 pr-4 text-slate-700">{row.yearly}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="mt-2 text-xs text-slate-500">Source: <a href="https://www.accio.com/wow/index.html" target="_blank" rel="noopener noreferrer" className="underline">accio.com</a>, checked October 26, 2026. Annual price is the "billed annually" total Accio shows.</p>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-2">How Dooza Crew is priced</h4>
                                <p className="text-slate-700 text-sm">
                                    Free for 7 days (card required), then $49/mo per organization (unlimited users and agents) with AI usage included and a hard spending cap. Cancel before day 8 and you pay nothing. Agents can take phone calls, included. If you only need sourcing research, Accio&apos;s free plan is the cheaper place to start. <a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Try Dooza Crew free for 7 days</a>.
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
                                            "Are comfortable with new software and agent orchestration",
                                            "Don't need research, writing, outreach, or phone help"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <ShoppingCart className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 text-lg">Choose Dooza Crew If You...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Run any type of small business: service, SaaS, agency, practice, shop",
                                            "Want to describe a job in plain words, not write workflows",
                                            "Want a researcher, a writer or an outreach agent built for the job",
                                            "Want agents that can take phone calls",
                                            "Want to approve before anything is sent or paid",
                                            "Want one flat price: $49/mo per organization, AI usage included",
                                            "Want to try it free for 7 days (card required) and cancel any time before day 8"
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
                                            <Bot className="w-4 h-4" /> Dooza Crew Handles:
                                        </h4>
                                        <div className="space-y-2">
                                            {[
                                                "Research on markets and competitors",
                                                "Writing: product copy, posts, emails",
                                                "Outreach to prospects",
                                                "Phone calls, included"
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
                                    <strong>For non-e-commerce businesses</strong> (consultants, agencies, SaaS companies, medical practices, real estate agents, law firms), Accio Work offers very little value. Dooza Crew is the clear choice: you describe the job in plain words, Dooza builds the helper agents it needs, and you approve before anything is sent or paid.
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
                                    Accio Work and Dooza Crew serve different jobs.
                                </p>
                                <p>
                                    <strong>Accio Work</strong> is an e-commerce sourcing agent built by Alibaba, for Alibaba's ecosystem. If you are launching a dropshipping business or scaling cross-border trade, it is worth exploring, and its free plan costs nothing to try. Its published materials do not list email, social media, outreach, or phone calls.
                                </p>
                                <p>
                                    <strong>Dooza Crew</strong> is our top pick for a small business. You tell Dooza the job in plain words, it builds the helper agents it needs, each agent works in its own private computer and browser, and you watch every step live in chat. It is free for 7 days (card required), then $49 a month per organization.
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
                                            <p className="text-slate-600">Use Dooza Crew. A master agent that builds helper agents for each job, phone calls included, $49/mo per organization, 7 days free.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Layers className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">E-commerce business needing both?</p>
                                            <p className="text-slate-600">Use Accio Work for sourcing and Dooza Crew for research, writing and outreach. They do different jobs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <a
                                    href={CREW_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                                >
                                    Try Dooza Crew free for 7 days
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <p className="text-sm text-slate-500 mt-3">Card required. Cancel before day 8 and you pay nothing. Then $49/mo per organization.</p>
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
