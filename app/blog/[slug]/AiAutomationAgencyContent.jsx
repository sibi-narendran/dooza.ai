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
    Users,
    Layers,
    Brain,
    Settings,
    Laptop,
    Workflow,
    Timer,
    Rocket,
    BarChart3,
    TrendingUp,
    MessageSquare,
    Mail,
    Search,
    Phone,
    Globe,
    FileText,
    Target,
    Lightbulb,
    Building2,
    Briefcase,
    GraduationCap,
    PieChart,
    Wrench,
    Star,
    ChevronRight
} from 'lucide-react';

const faqData = [
    {
        question: "What is an AI automation agency?",
        answer: "An AI automation agency is a service-based business that helps other companies implement artificial intelligence and automation tools to streamline their operations. Services typically include workflow automation, AI chatbot development, email automation, social media management, lead generation, and process optimization. Unlike traditional digital agencies, AI automation agencies leverage platforms like Dooza.ai to deploy AI employees that handle repetitive tasks 24/7."
    },
    {
        question: "How much does it cost to start an AI automation agency?",
        answer: "You can start an AI automation agency for under $500. Essential costs include a domain and website ($50-200/year), an AI platform like Dooza.ai ($29-49/month), business registration ($50-200), and basic marketing tools. The barrier to entry is significantly lower than traditional agencies because you don't need to hire employees upfront — platforms like Dooza.ai provide ready-made AI employees that you can white-label for clients."
    },
    {
        question: "Do I need coding or technical skills to run an AI automation agency?",
        answer: "No. Modern no-code AI platforms have eliminated the need for programming knowledge. Dooza.ai, for example, provides 6 pre-built AI employees that handle email, social media, SEO, sales, legal, and phone calls — all configurable without writing a single line of code. The most important skills are understanding client business processes, identifying automation opportunities, and communicating the value of AI solutions."
    },
    {
        question: "How much can an AI automation agency earn?",
        answer: "AI automation agencies typically earn $5,000-$50,000+ per month depending on their client base and pricing model. Retainer-based agencies charging $1,500-$5,000/month per client can reach six figures annually with just 10-20 clients. Profit margins are exceptionally high (60-80%) because AI platforms like Dooza.ai cost a fraction of what you charge clients — you might pay $49/month for AI employees and charge clients $2,000/month for the same service."
    },
    {
        question: "What services should an AI automation agency offer?",
        answer: "The most profitable AI automation agency services include: workflow automation (connecting business tools), AI chatbot development (customer support bots), email automation and management, social media automation, AI-powered lead generation, sales pipeline automation, SEO content automation, and AI receptionist/phone answering services. Start with 2-3 core services and expand as you gain clients."
    },
    {
        question: "Is an AI automation agency a good business in 2026?",
        answer: "Yes. The AI market is projected to reach $407 billion by 2027, and 64% of business owners believe AI will improve customer relationships. Demand for AI services far outpaces supply — most small businesses want AI automation but lack the knowledge to implement it themselves. With platforms like Dooza.ai making deployment easy and affordable, the profit potential for agencies has never been higher."
    },
    {
        question: "How do I get my first AI automation agency clients?",
        answer: "The fastest client acquisition strategies include: cold outreach to local businesses (especially dental offices, law firms, real estate agents), offering free AI audits to demonstrate value, creating case studies from your own business automation, networking in local business groups and LinkedIn, running targeted ads on Facebook/Google, and asking for referrals from early clients. Most successful agencies land their first client within 2-4 weeks of launch."
    }
];

export default function AiAutomationAgencyContent() {
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
            const sections = ['introduction', 'what-is-aaa', 'why-2026', 'services', 'business-model', 'how-to-start', 'getting-clients', 'best-tools', 'mistakes', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-violet-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI Automation Agency Guide' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Business Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Automation Agency: <span className="text-primary-600">How to Start</span> and Scale in 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            The AI automation market is projected to hit $407 billion by 2027. Learn how to start a profitable AI automation agency — services, pricing, tools, and client acquisition strategies that actually work.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>16 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 21, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/8d923bb0-e6b3-42dc-9db1-98e923d5b2f4.jpg"
                                alt="AI automation agency guide — how to start, scale, and profit from AI automation services in 2026"
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
                                Start Your Agency with Dooza
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
                                    { id: 'what-is-aaa', label: 'What Is an AI Automation Agency?' },
                                    { id: 'why-2026', label: 'Why 2026 Is the Perfect Time' },
                                    { id: 'services', label: 'Services You Can Offer' },
                                    { id: 'business-model', label: 'Business Model & Pricing' },
                                    { id: 'how-to-start', label: 'How to Start' },
                                    { id: 'getting-clients', label: 'Getting Your First Clients' },
                                    { id: 'best-tools', label: 'Best Tools' },
                                    { id: 'mistakes', label: 'Common Mistakes' },
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
                                <p className="text-sm text-slate-600 mb-4">Power your agency with AI employees</p>
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
                                <InternalLinks currentSlug="ai-automation-agency" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Here's a number that should get your attention: the global AI market is projected to reach <strong>$407 billion by 2027</strong>, growing at 36.2% annually. Yet 73% of small businesses still haven't implemented a single AI tool. That gap between demand and adoption is where the <strong>AI automation agency</strong> opportunity lives.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    An AI automation agency is a service business that helps companies implement AI tools, automate workflows, and deploy AI-powered solutions — without those companies needing to hire technical staff or figure it out themselves. Think of it as being the bridge between powerful AI platforms and the businesses that desperately need them.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this guide, you'll learn exactly how to start an AI automation agency from scratch — the services to offer, how to price them, which tools to use (including platforms like <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza.ai</Link> that give you ready-made AI employees), and how to land your first paying clients within weeks, not months.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Whether you're a freelancer looking to scale, an entrepreneur exploring the AI space, or someone searching for the best AI automation agency course to learn from — this is the no-fluff blueprint you've been looking for.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is an AI Automation Agency? */}
                        <section id="what-is-aaa" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Brain className="w-8 h-8 text-primary-600" />
                                What Is an AI Automation Agency?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An <strong>AI automation agency</strong> is a business that sells AI-powered automation services to other companies. Instead of building software from scratch, you leverage existing AI platforms to solve real business problems — email overload, slow customer response times, inconsistent social media, manual data entry, and dozens of other bottlenecks that cost businesses thousands of hours annually.
                                </p>
                                <p>
                                    The key difference between an AI automation agency and a traditional digital agency is <strong>leverage</strong>. A social media agency needs to hire content creators and account managers for every new client. An AI automation agency deploys AI employees that scale infinitely. You set up the system once, and it runs 24/7 without additional labor costs.
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8">
                                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                                    <div className="p-6">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <XCircle className="w-5 h-5 text-red-500" />
                                            Traditional Agency
                                        </h3>
                                        <ul className="space-y-3 text-sm text-slate-600">
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Revenue limited by team size</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>High overhead (salaries, benefits)</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Services stop when team sleeps</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Scaling requires hiring</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>30-50% profit margins typical</li>
                                        </ul>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            AI Automation Agency
                                        </h3>
                                        <ul className="space-y-3 text-sm text-slate-600">
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Revenue scales with software, not headcount</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Low overhead (AI platform subscriptions)</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>AI employees work 24/7/365</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Scaling requires new subscriptions, not hires</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>60-80% profit margins achievable</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The types of businesses that hire AI automation agencies range widely: dental offices that want an <Link href="/blog/ai-receptionist-for-dental-office" className="text-primary-600 hover:underline font-medium">AI receptionist</Link>, real estate agents that need <Link href="/blog/ai-for-real-estate-agents" className="text-primary-600 hover:underline font-medium">automated lead follow-up</Link>, e-commerce stores that want <Link href="/blog/ai-for-shopify-store" className="text-primary-600 hover:underline font-medium">AI-powered customer support</Link>, law firms looking for <Link href="/blog/ai-legal-assistant" className="text-primary-600 hover:underline font-medium">AI legal assistants</Link>, and virtually any business drowning in repetitive tasks.
                                </p>
                                <p>
                                    The best part? You don't need to build AI from scratch. Platforms like <strong>Dooza.ai</strong> provide ready-to-use AI employees that can handle email management, customer support, social media, sales follow-ups, and more — without requiring coding knowledge. Dooza offers 6 dedicated AI employees starting at $29/month, making it affordable for agencies and small businesses alike.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Why 2026 Is the Perfect Time */}
                        <section id="why-2026" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-green-600" />
                                Why 2026 Is the Perfect Time to Start an AI Automation Agency
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    If you've been watching the AI space from the sidelines, the window is still wide open — but it's closing. Here's why starting an <strong>AI automation agency</strong> in 2026 gives you a significant first-mover advantage:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    {
                                        icon: BarChart3,
                                        title: "Market Size Explosion",
                                        stat: "$407B",
                                        desc: "The global AI market is projected to reach $407 billion by 2027 (MarketsandMarkets). AI automation services represent one of the fastest-growing segments."
                                    },
                                    {
                                        icon: Users,
                                        title: "Massive Demand Gap",
                                        stat: "73%",
                                        desc: "73% of small businesses haven't adopted AI yet, but 64% of business owners believe AI will improve customer relationships (Forbes). They need help — your help."
                                    },
                                    {
                                        icon: Target,
                                        title: "Low Competition",
                                        stat: "Early",
                                        desc: "Most 'AI agencies' are still just ChatGPT consultants. Few offer end-to-end AI employee deployment. The market for genuine AI automation agency services is still uncrowded."
                                    },
                                    {
                                        icon: DollarSign,
                                        title: "Low Startup Costs",
                                        stat: "<$500",
                                        desc: "No-code AI platforms have eliminated the need for developers. Start an AI automation agency for under $500 — a fraction of what traditional agencies require."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl hover:border-green-200 transition-colors">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                                                <item.icon size={20} />
                                            </div>
                                            <span className="text-2xl font-bold text-green-600">{item.stat}</span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Rocket className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Reddit Factor</h4>
                                        <p className="text-slate-700 text-sm">
                                            Search "AI automation agency" on Reddit, and you'll find thousands of threads from entrepreneurs asking how to start, what tools to use, and whether it's too late. The answer: it's not too late — it's barely started. The businesses posting on <strong>AI automation agency Reddit</strong> threads are looking for exactly the services you're about to learn how to offer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: AI Automation Agency Services */}
                        <section id="services" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                AI Automation Agency Services You Can Offer
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The most profitable <strong>AI automation agency services</strong> solve specific, recurring pain points. Don't try to be everything to everyone — pick 2-3 services to start and expand as you grow. Here are the highest-demand services with real revenue potential:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        icon: Mail,
                                        title: "Email Automation & Management",
                                        desc: "Deploy AI employees that read, categorize, draft, and send emails automatically. Businesses waste 2.5 hours/day on email — you eliminate that.",
                                        revenue: "$500-2,000/mo per client",
                                        tool: "Dooza's Maily handles this end-to-end"
                                    },
                                    {
                                        icon: MessageSquare,
                                        title: "Social Media Automation",
                                        desc: "AI-powered content creation, scheduling, and engagement across all platforms. Consistent posting without the client lifting a finger.",
                                        revenue: "$800-3,000/mo per client",
                                        tool: "Dooza's Somi creates and posts daily"
                                    },
                                    {
                                        icon: Phone,
                                        title: "AI Receptionist & Phone Answering",
                                        desc: "24/7 phone answering for businesses that miss calls after hours. Perfect for dental offices, law firms, salons, and medical practices.",
                                        revenue: "$300-1,500/mo per client",
                                        tool: "Dooza's Rachel answers calls 24/7"
                                    },
                                    {
                                        icon: Search,
                                        title: "SEO Content Automation",
                                        desc: "Automated keyword research, content writing, and publishing. Help clients rank on Google without hiring content writers.",
                                        revenue: "$1,000-5,000/mo per client",
                                        tool: "Dooza's Ranky writes & publishes SEO content"
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: "Sales Pipeline Automation",
                                        desc: "AI-powered lead qualification, outreach sequences, follow-ups, and CRM management. Close more deals without hiring SDRs.",
                                        revenue: "$1,500-5,000/mo per client",
                                        tool: "Dooza's Stan manages the full pipeline"
                                    },
                                    {
                                        icon: Bot,
                                        title: "AI Chatbot Development",
                                        desc: "Custom chatbots for websites, e-commerce stores, and customer support. Reduce support tickets by 60-80%.",
                                        revenue: "$1,000-3,000 setup + $500/mo",
                                        tool: "Deploy on Shopify, WooCommerce, or any site"
                                    },
                                    {
                                        icon: Workflow,
                                        title: "Workflow Automation & Integration",
                                        desc: "Connect business tools (CRM, email, calendar, invoicing) with automated workflows. Eliminate manual data entry and handoffs.",
                                        revenue: "$1,000-3,000 setup + $500-1,500/mo",
                                        tool: "Combine Dooza with Zapier/Make for full stack"
                                    },
                                    {
                                        icon: Shield,
                                        title: "AI Legal & Document Review",
                                        desc: "AI-powered contract review, risk flagging, and document drafting for small businesses and law firms.",
                                        revenue: "$1,000-4,000/mo per client",
                                        tool: "Dooza's Linda reviews contracts automatically"
                                    },
                                    {
                                        icon: BarChart3,
                                        title: "Data Analysis & Reporting",
                                        desc: "Automated dashboards, performance reports, and business intelligence. Turn raw data into actionable insights.",
                                        revenue: "$800-2,500/mo per client",
                                        tool: "AI analyzes data and generates reports weekly"
                                    },
                                    {
                                        icon: Globe,
                                        title: "AI-Powered Customer Support",
                                        desc: "24/7 customer support across email, chat, and phone. Resolve 80% of inquiries without human intervention.",
                                        revenue: "$1,000-5,000/mo per client",
                                        tool: "Full suite: Maily (email) + Rachel (phone) + chatbot"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-blue-200 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                                                    <span className="text-sm font-semibold text-green-600">{item.revenue}</span>
                                                </div>
                                                <p className="text-sm text-slate-600 mb-2">{item.desc}</p>
                                                <p className="text-xs text-primary-600 font-medium">{item.tool}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Lightbulb className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Pro Tip: Bundle Services for Higher Revenue</h4>
                                        <p className="text-slate-700 text-sm">
                                            The best AI automation agencies don't sell individual services — they sell transformation packages. Bundle email + social media + SEO for a "Digital Presence" package at $3,000-5,000/month. Your cost with Dooza.ai? $49/month. That's a 98% profit margin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Business Model & Pricing */}
                        <section id="business-model" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-emerald-600" />
                                AI Automation Agency Business Model & Pricing
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Your <strong>AI automation agency business model</strong> determines everything — revenue predictability, scalability, and profit margins. Here are the four most common models, with the one we recommend for maximum growth:
                                </p>
                            </div>

                            {/* Pricing Models */}
                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        model: "Monthly Retainer (Recommended)",
                                        price: "$1,500 - $5,000/month",
                                        pros: ["Predictable recurring revenue", "Builds long-term client relationships", "High lifetime value per client", "Easy to scale with AI tools"],
                                        cons: ["Requires ongoing value delivery", "Clients expect constant results"],
                                        best: "Agencies focused on ongoing services like email, social media, and SEO automation",
                                        recommended: true
                                    },
                                    {
                                        model: "Project-Based",
                                        price: "$2,000 - $15,000 per project",
                                        pros: ["High upfront revenue", "Clear scope and deliverables", "Good for complex integrations"],
                                        cons: ["Feast-or-famine income cycle", "Constant need for new clients", "No recurring revenue"],
                                        best: "Custom chatbot builds, CRM integrations, one-time workflow setups",
                                        recommended: false
                                    },
                                    {
                                        model: "Hybrid (Setup Fee + Retainer)",
                                        price: "$2,000-5,000 setup + $1,000-3,000/month",
                                        pros: ["Upfront revenue covers onboarding costs", "Retainer provides recurring income", "Aligns incentives with client success"],
                                        cons: ["Higher initial price can slow sales", "More complex proposal needed"],
                                        best: "Full-service AI automation agency services with custom configuration",
                                        recommended: false
                                    },
                                    {
                                        model: "Performance-Based",
                                        price: "10-30% of revenue generated or saved",
                                        pros: ["Easy sell — clients pay only for results", "Unlimited upside potential"],
                                        cons: ["Income is unpredictable", "Hard to track attribution", "Risk of non-payment disputes"],
                                        best: "AI sales automation and lead generation — only if you can track results clearly",
                                        recommended: false
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`border rounded-xl overflow-hidden ${item.recommended ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-slate-200'}`}>
                                        <div className={`px-6 py-4 flex items-center justify-between ${item.recommended ? 'bg-emerald-50' : 'bg-slate-50'}`}>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold text-slate-900">{item.model}</h3>
                                                    {item.recommended && (
                                                        <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full font-medium">Best for Growth</span>
                                                    )}
                                                </div>
                                                <p className="text-emerald-700 font-semibold text-lg mt-1">{item.price}</p>
                                            </div>
                                        </div>
                                        <div className="px-6 py-4">
                                            <div className="grid md:grid-cols-2 gap-4 mb-3">
                                                <div>
                                                    <p className="text-xs font-semibold text-green-700 uppercase mb-2">Pros</p>
                                                    {item.pros.map((pro, i) => (
                                                        <div key={i} className="flex items-start gap-2 mb-1">
                                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                            <span className="text-sm text-slate-600">{pro}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-red-700 uppercase mb-2">Cons</p>
                                                    {item.cons.map((con, i) => (
                                                        <div key={i} className="flex items-start gap-2 mb-1">
                                                            <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                            <span className="text-sm text-slate-600">{con}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500"><strong>Best for:</strong> {item.best}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing Comparison Table */}
                            <h3 className="text-xl font-bold text-slate-900 mb-4">AI Automation Agency Pricing: What to Charge vs. What You Pay</h3>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="text-left px-4 py-3 text-sm font-semibold text-slate-900 border-b border-slate-200">Service</th>
                                            <th className="text-left px-4 py-3 text-sm font-semibold text-slate-900 border-b border-slate-200">Client Charge</th>
                                            <th className="text-left px-4 py-3 text-sm font-semibold text-slate-900 border-b border-slate-200">Your Cost (Dooza)</th>
                                            <th className="text-left px-4 py-3 text-sm font-semibold text-slate-900 border-b border-slate-200">Profit Margin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { service: "Email Automation", charge: "$1,000/mo", cost: "$29-49/mo", margin: "95-97%" },
                                            { service: "Social Media Management", charge: "$1,500/mo", cost: "$29-49/mo", margin: "96-98%" },
                                            { service: "SEO Content Automation", charge: "$2,000/mo", cost: "$29-49/mo", margin: "97-98%" },
                                            { service: "AI Receptionist (Phone)", charge: "$800/mo", cost: "$29-49/mo", margin: "94-96%" },
                                            { service: "Sales Pipeline Automation", charge: "$2,500/mo", cost: "$29-49/mo", margin: "98%" },
                                            { service: "Full Stack Bundle", charge: "$5,000/mo", cost: "$49/mo", margin: "99%" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                                                <td className="px-4 py-3 text-sm text-slate-700 font-medium border-b border-slate-100">{row.service}</td>
                                                <td className="px-4 py-3 text-sm text-slate-700 border-b border-slate-100">{row.charge}</td>
                                                <td className="px-4 py-3 text-sm text-green-600 font-medium border-b border-slate-100">{row.cost}</td>
                                                <td className="px-4 py-3 text-sm text-emerald-700 font-bold border-b border-slate-100">{row.margin}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 border-l-4 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">Pricing Reality Check</h4>
                                        <p className="text-amber-800 text-sm">
                                            Don't underprice your services. Compared to hiring virtual assistants ($2,000+/month) or building custom AI solutions ($10,000+), Dooza.ai's subscription model offers predictable pricing that typically pays for itself within weeks through increased productivity. Your clients are comparing you to human hires, not to raw software costs. Charge accordingly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: How to Start */}
                        <section id="how-to-start" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Rocket className="w-8 h-8 text-violet-600" />
                                How to Start an AI Automation Agency (Step-by-Step)
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's exactly <strong>how to start an AI automation agency</strong> — from zero to your first paying client. No fluff, no theory. Just the steps that work.
                                </p>
                            </div>

                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        step: 1,
                                        title: "Choose Your Niche and Services",
                                        desc: "Don't try to serve everyone. Pick an industry (dental, real estate, e-commerce, legal) and 2-3 core services. Specialization lets you charge premium prices and build expertise fast.",
                                        action: "Research which industries near you have the most unmet AI needs. Check Google 'AI automation agency near me' to see local competition.",
                                        time: "Day 1-2"
                                    },
                                    {
                                        step: 2,
                                        title: "Set Up Your AI Tool Stack",
                                        desc: "Sign up for Dooza.ai to get immediate access to 6 AI employees — email (Maily), social media (Somi), SEO (Ranky), phone (Rachel), sales (Stan), and legal (Linda). This is your service delivery engine.",
                                        action: "Start your Dooza free trial. Configure AI employees for your OWN business first — this becomes your proof of concept and case study.",
                                        time: "Day 3-5"
                                    },
                                    {
                                        step: 3,
                                        title: "Automate Your Own Business First",
                                        desc: "Use Dooza to run your agency's own email, social media, and lead generation. This gives you firsthand experience, builds your portfolio, and proves the results work.",
                                        action: "Let Somi post to your agency's social media for 2 weeks. Document the results — posts created, engagement, time saved.",
                                        time: "Week 1-2"
                                    },
                                    {
                                        step: 4,
                                        title: "Build Your Agency Website and Brand",
                                        desc: "Create a simple website showcasing your services, pricing, and results. Include case studies from your own AI automation. You don't need a fancy site — a clear value proposition and call-to-action are enough.",
                                        action: "Use a simple website builder. Include a 'Free AI Audit' offer as your lead magnet.",
                                        time: "Week 2"
                                    },
                                    {
                                        step: 5,
                                        title: "Create a Pricing Package",
                                        desc: "Start with a simple tiered model: Starter ($997/mo — 1 AI employee), Growth ($1,997/mo — 3 AI employees), and Scale ($3,997/mo — full AI team). Keep it simple.",
                                        action: "Create a one-page proposal template. Include ROI calculations showing how your services save $3,000-10,000/month in labor costs.",
                                        time: "Week 2"
                                    },
                                    {
                                        step: 6,
                                        title: "Land Your First Client",
                                        desc: "Use cold outreach, free AI audits, and local networking to find your first client. Offer a discounted pilot engagement (e.g., $497 for the first month) in exchange for a case study and testimonial.",
                                        action: "Send 20 personalized outreach messages per day to local businesses. Offer a free 'AI Automation Audit' call.",
                                        time: "Week 3-4"
                                    },
                                    {
                                        step: 7,
                                        title: "Deliver, Document, and Scale",
                                        desc: "Deploy Dooza AI employees for your client. Document results religiously — hours saved, leads generated, revenue impact. Use these results to sell to the next client.",
                                        action: "Set up weekly reporting. After 30 days, ask for a testimonial. After 60 days, ask for referrals.",
                                        time: "Month 2+"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                                                {item.step}
                                            </div>
                                            {idx < 6 && <div className="w-0.5 h-full bg-violet-200 mt-2" />}
                                        </div>
                                        <div className="pb-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                                                <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-medium">{item.time}</span>
                                            </div>
                                            <p className="text-slate-600 mb-2">{item.desc}</p>
                                            <div className="bg-violet-50 border border-violet-200 px-4 py-3 rounded-lg">
                                                <p className="text-sm text-violet-800"><strong>Action:</strong> {item.action}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <GraduationCap className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Skip the AI Automation Agency Course — Start Doing</h4>
                                        <p className="text-slate-700 text-sm">
                                            Many people search for an <strong>AI automation agency course</strong> before starting. While courses can provide structure, the fastest path is to start with real tools and real clients. Sign up for Dooza.ai, automate your own business for 2 weeks, and you'll have more practical knowledge than any $2,000 course can teach. The best education is execution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Getting Clients */}
                        <section id="getting-clients" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-orange-600" />
                                Getting Your First AI Automation Agency Clients
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The number one question on every <strong>AI automation agency Reddit</strong> thread: "How do I get clients?" Here are the strategies that actually work, ranked by effectiveness:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        title: "Free AI Audit Outreach",
                                        desc: "Offer a free 15-minute 'AI Automation Audit' to local businesses. Review their current processes, identify 3 automation opportunities, and show the potential time/cost savings. Most businesses have never had anyone do this for them.",
                                        effectiveness: "High",
                                        cost: "Free"
                                    },
                                    {
                                        title: "LinkedIn Outreach + Content",
                                        desc: "Post daily about AI automation results, case studies, and tips. Connect with business owners in your target niche. Send personalized messages referencing their specific pain points — not generic sales pitches.",
                                        effectiveness: "High",
                                        cost: "Free"
                                    },
                                    {
                                        title: "Local Business Networking",
                                        desc: "Attend Chamber of Commerce meetings, BNI groups, and local business events. You'll be the only person in the room talking about AI automation. Bring a tablet showing Dooza's AI employees in action.",
                                        effectiveness: "High",
                                        cost: "$20-50/event"
                                    },
                                    {
                                        title: "Cold Email Campaigns",
                                        desc: "Research businesses in your niche that clearly need automation (slow response times, inconsistent social media, no blog content). Send personalized emails showing specific improvements you can make.",
                                        effectiveness: "Medium",
                                        cost: "Free-$50/mo"
                                    },
                                    {
                                        title: "Referral Program",
                                        desc: "Once you have 2-3 clients, offer a referral bonus ($200-500 per new client) or a free month of service. Happy clients are your best salespeople.",
                                        effectiveness: "Very High",
                                        cost: "$200-500/referral"
                                    },
                                    {
                                        title: "Content Marketing + SEO",
                                        desc: "Write blog posts targeting 'AI automation agency near me' and related local keywords. Use Dooza's Ranky to automate your content production — let your AI employee build your SEO presence while you focus on sales.",
                                        effectiveness: "Long-term High",
                                        cost: "$49/mo (Dooza)"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-orange-200 transition-colors">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-bold text-slate-900">{item.title}</h3>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                                    item.effectiveness === 'Very High' ? 'bg-green-100 text-green-700' :
                                                    item.effectiveness === 'High' ? 'bg-blue-100 text-blue-700' :
                                                    item.effectiveness === 'Long-term High' ? 'bg-violet-100 text-violet-700' :
                                                    'bg-amber-100 text-amber-700'
                                                }`}>{item.effectiveness}</span>
                                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{item.cost}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Star className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Free Audit Script That Converts</h4>
                                        <p className="text-slate-700 text-sm">
                                            "Hi [Name], I noticed [specific observation — e.g., 'your social media hasn't been updated in 3 weeks' or 'your Google reviews mention long response times']. I run an AI automation agency and I've helped similar businesses [specific result]. I'd love to do a free 15-minute AI audit showing exactly what you could automate. No strings attached — just actionable insights you can use whether we work together or not. Interested?"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 8: Best Tools */}
                        <section id="best-tools" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Wrench className="w-8 h-8 text-indigo-600" />
                                Best Tools for Your AI Automation Agency
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Your tool stack is the backbone of your <strong>automation agency business</strong>. Here are the essential platforms, with Dooza.ai at the center of service delivery:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        name: "Dooza.ai",
                                        category: "AI Employee Platform (Core)",
                                        price: "From $29/month",
                                        desc: "6 AI employees (email, social media, SEO, phone, sales, legal) that work 24/7. The foundation of your service delivery. Deploy for clients in minutes with free concierge onboarding.",
                                        highlight: true
                                    },
                                    {
                                        name: "Make (Integromat)",
                                        category: "Workflow Automation",
                                        price: "From $9/month",
                                        desc: "Visual workflow builder for connecting thousands of apps. Use alongside Dooza for complex multi-step integrations that go beyond AI employee capabilities.",
                                        highlight: false
                                    },
                                    {
                                        name: "Zapier",
                                        category: "Simple Integrations",
                                        price: "From $19.99/month",
                                        desc: "Point-and-click integration for basic app connections. Easier to learn than Make but less powerful. Good for simple triggers and actions.",
                                        highlight: false
                                    },
                                    {
                                        name: "HighLevel / GoHighLevel",
                                        category: "Agency CRM",
                                        price: "From $97/month",
                                        desc: "All-in-one CRM, landing pages, and client management for agencies. Manage multiple client accounts from a single dashboard.",
                                        highlight: false
                                    },
                                    {
                                        name: "Loom / Tella",
                                        category: "Client Communication",
                                        price: "Free-$12.50/month",
                                        desc: "Record video updates for clients showing results, explaining automations, and building relationships without scheduling calls.",
                                        highlight: false
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`border p-5 rounded-xl ${item.highlight ? 'border-primary-300 bg-primary-50 ring-2 ring-primary-100' : 'border-slate-200 bg-white'}`}>
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                                                    {item.highlight && (
                                                        <span className="text-xs bg-primary-600 text-white px-2 py-0.5 rounded-full font-medium">Recommended</span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-slate-500 mt-0.5">{item.category}</p>
                                            </div>
                                            <span className="text-sm font-semibold text-slate-700">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-4">
                                <p>
                                    For agencies looking to scale, <strong>Dooza.ai's AI employee platform</strong> allows you to deploy multiple AI agents that work 24/7, handling repetitive tasks while you focus on client acquisition and strategy. Unlike Make or Zapier, which require you to build every workflow manually, Dooza's AI employees come pre-trained for their roles and start working immediately.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Common Mistakes */}
                        <section id="mistakes" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                                Common AI Automation Agency Mistakes to Avoid
                            </h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        mistake: "Underpricing Your Services",
                                        why: "New agencies charge $200-500/month because they're comparing to software costs, not to the human labor they're replacing. Your client isn't choosing between Dooza at $49/month and your service — they're choosing between your $2,000/month service and a $4,000/month employee.",
                                        fix: "Price based on the value delivered (time saved, revenue generated), not on your tool costs. A $2,000/month retainer that saves a business $6,000/month in labor is a no-brainer."
                                    },
                                    {
                                        mistake: "Over-Promising Results",
                                        why: "AI is powerful but not magic. Promising '10x revenue in 30 days' destroys trust when reality doesn't match. Overpromising is the fastest way to churn clients.",
                                        fix: "Set realistic expectations upfront. Promise specific, measurable outcomes: '20+ hours/week saved on email,' 'consistent daily social media posting,' '24/7 phone coverage.' Under-promise, over-deliver."
                                    },
                                    {
                                        mistake: "Not Automating Your Own Agency First",
                                        why: "If you're manually handling your own email, social media, and lead follow-up while selling automation services, you have zero credibility. Prospects will ask 'Do you use this yourself?'",
                                        fix: "Deploy Dooza's AI employees for your own agency from day one. Use Maily for email, Somi for social media, Ranky for blog content, and Stan for lead follow-up. Your own results become your best case study."
                                    },
                                    {
                                        mistake: "Trying to Build Custom AI Instead of Using Platforms",
                                        why: "Some agencies spend months building custom AI solutions from scratch using APIs. Meanwhile, competitors deploy pre-built solutions in hours and start earning revenue immediately.",
                                        fix: "Start with proven platforms like Dooza.ai that provide ready-made AI employees. Only build custom solutions when a client's needs genuinely can't be met by existing tools."
                                    },
                                    {
                                        mistake: "Not Niching Down",
                                        why: "Offering 'AI automation for everyone' makes you invisible. No specific audience sees you as their expert. Marketing becomes expensive and unfocused.",
                                        fix: "Pick a niche: AI automation for dental offices, for real estate agents, for e-commerce stores. You can always expand later. The best AI automation agency is the one that dominates a specific market."
                                    },
                                    {
                                        mistake: "Ignoring Client Education",
                                        why: "Most clients don't understand AI. If you don't educate them on what's possible and set proper expectations, they'll either expect too much or undervalue your services.",
                                        fix: "Create a simple onboarding process that explains exactly what the AI employees do, what results to expect in 30/60/90 days, and how to interact with the automated systems."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                                                <XCircle size={18} />
                                            </div>
                                            <h3 className="font-bold text-slate-900 text-lg">{item.mistake}</h3>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">{item.why}</p>
                                        <div className="bg-green-50 border border-green-200 px-4 py-3 rounded-lg">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <p className="text-sm text-green-800"><strong>Fix:</strong> {item.fix}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Before FAQ */}
                        <section className="scroll-mt-28">
                            <div className="bg-gradient-to-br from-primary-600 to-violet-700 text-white p-8 md:p-10 rounded-2xl text-center">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Ready to Launch Your AI Automation Agency?
                                </h3>
                                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                    Dooza.ai gives you everything you need to start delivering AI automation services today. 6 AI employees, no coding required, free onboarding — your agency's secret weapon.
                                </p>

                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-xl mx-auto text-left">
                                    {[
                                        { icon: Bot, text: "6 pre-built AI employees" },
                                        { icon: DollarSign, text: "Starting at $29/month" },
                                        { icon: Zap, text: "Deploy for clients in minutes" },
                                        { icon: Phone, text: "AI receptionist included" },
                                        { icon: Users, text: "Free concierge onboarding" },
                                        { icon: Timer, text: "30-minute setup per client" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                                <item.icon size={16} />
                                            </div>
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-lg"
                                    >
                                        Start Free with Dooza
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={CAL_BOOKING_URL}
                                        onClick={handleAction}
                                        className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/60 transition-all"
                                    >
                                        Book a Free Demo
                                    </a>
                                </div>
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

            <RelatedPosts category="Business Guide" tags={['AI Automation', 'AI Agency', 'AI Employees', 'Business']} currentSlug="ai-automation-agency" />
            <BottomCTA />
            <Footer />

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
