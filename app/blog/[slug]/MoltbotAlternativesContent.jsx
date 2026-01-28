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
    Star,
    Users,
    Settings,
    Headphones,
    Mail,
    TrendingUp,
    MessageSquare,
    Code,
    Lock,
    Wrench
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best MoltBot alternative for businesses?",
        answer: "Dooza is the top MoltBot alternative for businesses. It offers pre-built AI employees for email, social media, SEO, and sales with enterprise-grade security, predictable pricing ($29/month), and zero coding required - unlike MoltBot which requires extensive technical expertise."
    },
    {
        question: "Why should I consider alternatives to MoltBot?",
        answer: "MoltBot has significant drawbacks: security vulnerabilities (1,000+ exposed instances found), unpredictable API costs ($100-300+/day), complex setup requiring technical expertise, and no dedicated support. Managed alternatives offer better security, predictable costs, and professional support."
    },
    {
        question: "Can I use MoltBot features without the security risks?",
        answer: "Yes, platforms like Dooza offer similar AI automation capabilities (email management, social media, task automation) without the security risks. These managed solutions handle infrastructure, security, and updates for you."
    },
    {
        question: "Is ChatGPT a good MoltBot alternative?",
        answer: "ChatGPT is useful for conversational AI but cannot take real actions like MoltBot. It won't send emails, manage files, or automate workflows on your behalf. For action-taking AI, consider Dooza or similar platforms that offer AI employees."
    },
    {
        question: "How much do MoltBot alternatives cost?",
        answer: "Costs vary significantly. Dooza starts at $29/month with all features included. ChatGPT Plus is $20/month but lacks automation features. MoltBot itself is 'free' but API costs run $100-300+/day for active use."
    },
    {
        question: "Can developers bring their MoltBot agents to other platforms?",
        answer: "Yes, developers who've built custom agents in MoltBot or ClawdBot can often port their workflows to managed platforms like Dooza, which offers API access and customization options while handling the infrastructure and security."
    }
];

const alternatives = [
    {
        name: "Dooza",
        tagline: "Pre-built AI Employees for Business",
        description: "Dooza offers ready-to-use AI employees that handle email, social media, SEO, sales, and customer support. No coding required, enterprise-grade security, and predictable monthly pricing.",
        price: "$29/month",
        priceNote: "All features included",
        rating: 4.9,
        pros: [
            "5-minute setup, no coding required",
            "Pre-built AI employees for all business functions",
            "Enterprise-grade security (SOC 2 compliant)",
            "Predictable pricing - no surprise API costs",
            "Free concierge onboarding support",
            "Native integrations with popular tools"
        ],
        cons: [
            "Less customizable than self-hosted options",
            "Requires internet connection"
        ],
        bestFor: "Small to medium businesses wanting AI automation without technical complexity",
        featured: true,
        url: "workforce"
    },
    {
        name: "ChatGPT / Claude",
        tagline: "Conversational AI Assistants",
        description: "Leading AI chat interfaces for brainstorming, writing, and research. Great for conversation but cannot take real-world actions on your behalf.",
        price: "$20-200/month",
        priceNote: "Depending on tier",
        rating: 4.5,
        pros: [
            "Excellent conversational abilities",
            "Simple web interface",
            "Good for writing and research",
            "Managed security"
        ],
        cons: [
            "Cannot take real actions (send emails, manage files)",
            "No automation or scheduling",
            "No persistent memory across sessions",
            "Limited integrations"
        ],
        bestFor: "Users who need AI assistance for writing, research, and brainstorming only",
        featured: false
    },
    {
        name: "Zapier + AI",
        tagline: "Workflow Automation Platform",
        description: "Connect apps and automate workflows with AI-powered steps. Requires building your own automations but offers extensive integration options.",
        price: "$19-99/month",
        priceNote: "Based on usage",
        rating: 4.3,
        pros: [
            "6,000+ app integrations",
            "Visual workflow builder",
            "AI-powered automation steps",
            "Established, reliable platform"
        ],
        cons: [
            "Need to build automations yourself",
            "Pricing scales with usage",
            "No conversational interface",
            "Learning curve for complex workflows"
        ],
        bestFor: "Tech-savvy users who want to build custom integrations between specific apps",
        featured: false
    },
    {
        name: "Reclaim / Motion",
        tagline: "AI Calendar & Task Management",
        description: "Specialized AI tools for calendar management and task scheduling. Limited scope but excellent at what they do.",
        price: "$8-19/month",
        priceNote: "Per user",
        rating: 4.2,
        pros: [
            "Excellent calendar optimization",
            "Smart task scheduling",
            "Meeting time protection",
            "Simple setup"
        ],
        cons: [
            "Limited to calendar/scheduling only",
            "No email or content automation",
            "No general AI assistant features",
            "Single-purpose tool"
        ],
        bestFor: "Users whose primary need is calendar and schedule management",
        featured: false
    }
];

export default function MoltbotAlternativesContent() {
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
            const sections = ['introduction', 'why-alternatives', 'what-to-look-for', 'alternatives', 'comparison', 'why-dooza', 'for-developers', 'decision-guide', 'conclusion', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'MoltBot Alternatives' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">MoltBot</span> Alternatives: 5 Safer AI Assistants for Business
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Compare the best MoltBot and ClawdBot alternatives. Find secure, affordable AI assistants that don't require coding expertise.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 27, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/moltbot-alternatives.png"
                                alt="MoltBot alternatives comparison"
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
                                    { id: 'why-alternatives', label: 'Why Look Elsewhere' },
                                    { id: 'what-to-look-for', label: 'What to Look For' },
                                    { id: 'alternatives', label: 'Top Alternatives' },
                                    { id: 'comparison', label: 'Comparison Table' },
                                    { id: 'why-dooza', label: 'Why Dooza Wins' },
                                    { id: 'for-developers', label: 'For Developers' },
                                    { id: 'decision-guide', label: 'Decision Guide' },
                                    { id: 'conclusion', label: 'Conclusion' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to switch?</p>
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
                                <InternalLinks currentSlug="moltbot-alternatives" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/what-is-moltbot" className="text-primary-600 hover:underline">MoltBot</Link> (formerly <Link href="/blog/what-is-clawdbot" className="text-primary-600 hover:underline">ClawdBot</Link>) has captured the imagination of the tech community with its vision of a personal AI assistant that can actually take action. But for many users, the security risks, unpredictable costs, and technical complexity make it impractical.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you're looking for AI automation without the headaches, this guide covers the best MoltBot alternatives - with a focus on solutions that are secure, affordable, and don't require a computer science degree to use.
                                </p>
                            </div>
                        </section>

                        <section id="why-alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Consider MoltBot Alternatives?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    MoltBot is impressive technology, but it comes with significant drawbacks that make it unsuitable for most business users:
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Security Vulnerabilities",
                                        desc: "Over 1,000 exposed control panels found by security researchers. API keys, credentials, and conversation histories publicly accessible.",
                                        color: "red"
                                    },
                                    {
                                        icon: DollarSign,
                                        title: "Unpredictable Costs",
                                        desc: "Users report $100-300+ per day in API costs. The AI defaults to expensive models, burning through budgets rapidly.",
                                        color: "red"
                                    },
                                    {
                                        icon: Settings,
                                        title: "Technical Complexity",
                                        desc: "Hours or days to configure properly. Requires Docker, security hardening, and ongoing maintenance expertise.",
                                        color: "red"
                                    },
                                    {
                                        icon: Headphones,
                                        title: "No Professional Support",
                                        desc: "Open-source project with community support only. When things break (which users report regularly), you're on your own.",
                                        color: "red"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-5 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-slate-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <YouTubeEmbed
                                    videoId="NhJxxv3f7lI"
                                    title="MoltBot Overview and Limitations"
                                />
                            </div>
                        </section>

                        <section id="what-to-look-for" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Look for in an AI Assistant</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: Lock, title: "Security First", desc: "Enterprise-grade security with proper authentication, encryption, and compliance certifications." },
                                    { icon: DollarSign, title: "Predictable Pricing", desc: "Know what you'll pay each month. No surprise API bills or usage-based cost explosions." },
                                    { icon: Zap, title: "Easy Setup", desc: "Get running in minutes, not hours or days. No coding or technical expertise required." },
                                    { icon: Headphones, title: "Real Support", desc: "Professional support team to help when things go wrong, not just community forums." },
                                    { icon: Bot, title: "Action-Taking AI", desc: "AI that can actually do things - send emails, post content, manage tasks - not just chat." },
                                    { icon: Wrench, title: "Pre-built Solutions", desc: "Ready-to-use workflows for common business needs, not build-it-yourself toolkits." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Top MoltBot Alternatives</h2>
                            <div className="space-y-8">
                                {alternatives.map((alt, idx) => (
                                    <div key={idx} className={`border-2 rounded-2xl overflow-hidden ${alt.featured ? 'border-primary-300 bg-primary-50/30' : 'border-slate-200 bg-white'}`}>
                                        {alt.featured && (
                                            <div className="bg-primary-600 text-white text-center py-2 text-sm font-medium">
                                                Recommended Alternative
                                            </div>
                                        )}
                                        <div className="p-6 md:p-8">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{alt.name}</h3>
                                                    <p className="text-slate-500">{alt.tagline}</p>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-primary-600">{alt.price}</div>
                                                    <div className="text-sm text-slate-500">{alt.priceNote}</div>
                                                    <div className="flex items-center gap-1 mt-2 justify-end">
                                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                        <span className="font-medium">{alt.rating}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-slate-600 mb-6">{alt.description}</p>

                                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        Pros
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {alt.pros.map((pro, i) => (
                                                            <li key={i} className="flex gap-2 text-sm text-slate-600">
                                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                                {pro}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                                                        <XCircle className="w-4 h-4" />
                                                        Cons
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {alt.cons.map((con, i) => (
                                                            <li key={i} className="flex gap-2 text-sm text-slate-600">
                                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                                {con}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="bg-slate-100 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                <div>
                                                    <span className="text-sm font-medium text-slate-700">Best for: </span>
                                                    <span className="text-sm text-slate-600">{alt.bestFor}</span>
                                                </div>
                                                {alt.featured && (
                                                    <a
                                                        href={getProductSignupUrl(alt.url)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                                                    >
                                                        Try Free <ArrowRight className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">MoltBot vs Alternatives: Full Comparison</h2>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white text-sm">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold">MoltBot</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                            <th className="p-4 border-b font-bold">ChatGPT</th>
                                            <th className="p-4 border-b font-bold">Zapier+AI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Monthly Cost</td>
                                            <td className="p-4 border-b text-red-500">$3,000-9,000+</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">$29</td>
                                            <td className="p-4 border-b">$20-200</td>
                                            <td className="p-4 border-b">$19-99+</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Setup Time</td>
                                            <td className="p-4 border-b text-red-500">Hours-Days</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">5 min</td>
                                            <td className="p-4 border-b text-green-600">Instant</td>
                                            <td className="p-4 border-b">30+ min</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Coding Required</td>
                                            <td className="p-4 border-b text-red-500">Yes</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">No</td>
                                            <td className="p-4 border-b text-green-600">No</td>
                                            <td className="p-4 border-b">Some</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Takes Real Actions</td>
                                            <td className="p-4 border-b text-green-600">Yes</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                            <td className="p-4 border-b text-green-600">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Security</td>
                                            <td className="p-4 border-b text-red-500">Self-managed</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Enterprise-grade</td>
                                            <td className="p-4 border-b text-green-600">Managed</td>
                                            <td className="p-4 border-b text-green-600">Managed</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Support</td>
                                            <td className="p-4 border-b text-red-500">Community</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Priority Team</td>
                                            <td className="p-4 border-b">Email</td>
                                            <td className="p-4 border-b">Tiered</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Pre-built AI Employees</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes - 10+ roles</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="why-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Businesses Choose Dooza Over MoltBot</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Enterprise Security",
                                        desc: "Your data is protected with encryption, access controls, and regular security audits. No exposed control panels or leaked credentials."
                                    },
                                    {
                                        icon: DollarSign,
                                        title: "Predictable Pricing",
                                        desc: "$29/month covers everything. No API costs, no usage surprises, no $300/day bills. Budget with confidence."
                                    },
                                    {
                                        icon: Bot,
                                        title: "Pre-built AI Employees",
                                        desc: "Email assistant, social media manager, SEO writer, sales rep, support agent - all ready to work on day one."
                                    },
                                    {
                                        icon: Zap,
                                        title: "5-Minute Setup",
                                        desc: "Connect your accounts, activate your AI employees, and start automating. No Docker, no security hardening, no coding."
                                    },
                                    {
                                        icon: Headphones,
                                        title: "Dedicated Support",
                                        desc: "Real humans who respond in hours, not days. Free concierge onboarding to help you get maximum value."
                                    },
                                    {
                                        icon: Wrench,
                                        title: "Maintained for You",
                                        desc: "We handle updates, security patches, and improvements. You focus on your business, not managing AI infrastructure."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-primary-50 border border-primary-100 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">The Dooza Difference</h3>
                                        <p className="text-slate-300">
                                            With MoltBot, you're given software and left to figure it out. With Dooza, you get a team. We set up your AI employees, customize them for your business, and provide ongoing support to ensure success.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-500 transition-all"
                                >
                                    Start Your Free Trial <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </section>

                        <section id="for-developers" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">For Developers: Bring Your Agents to Dooza</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    If you've built custom agents in MoltBot or ClawdBot and want the benefits of managed infrastructure, Dooza offers a path forward.
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-6">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-primary-600" />
                                    Developer Benefits
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span><strong>API Access:</strong> Full API for custom integrations and workflows</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span><strong>Custom Agents:</strong> Build and deploy your own AI agents on our infrastructure</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span><strong>Security Handled:</strong> We manage auth, encryption, and compliance</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span><strong>Scale Without Worry:</strong> Infrastructure that grows with your needs</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <p className="text-amber-800 text-sm">
                                        <strong>Note:</strong> While Dooza offers powerful customization options, developers with very specific requirements (local-only processing, custom LLM backends) may still prefer self-hosted solutions. Evaluate your specific needs before choosing.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <YouTubeEmbed
                                    videoId="muMVO4Ud4V8"
                                    title="Building AI Agents - Technical Overview"
                                />
                            </div>
                        </section>

                        <section id="decision-guide" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Which Alternative is Right for You?</h2>
                            <div className="space-y-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-primary-800 mb-3">Choose Dooza if you...</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Want AI automation without technical complexity</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Need predictable, affordable monthly pricing</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Value security and don't want to manage it yourself</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Need AI employees for multiple business functions</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Want real support when you need help</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-800 mb-3">Consider MoltBot if you...</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Are an experienced developer who enjoys tinkering</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Have unlimited API budgets ($100-300+/day)</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Can properly secure and isolate your deployment</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Want maximum customization at any cost</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-800 mb-3">Choose ChatGPT/Claude if you...</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Only need conversational AI (no real actions)</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Primarily need help with writing and research</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Don't need automation or scheduled tasks</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion: The Smarter Choice for Business AI</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    MoltBot opened our eyes to what AI assistants could become - but it also showed us the pitfalls of self-hosted, technically complex solutions. For most businesses, the risks simply aren't worth the reward.
                                </p>
                                <p>
                                    Modern alternatives like Dooza deliver the promise of AI automation - agents that actually take action on your behalf - without the security nightmares, unpredictable costs, or technical hurdles.
                                </p>
                                <p>
                                    The question isn't whether AI assistants are the future. It's whether you want to spend your time managing infrastructure or growing your business.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Experience the Difference?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Join thousands of businesses using Dooza's AI employees. 14-day free trial, no credit card required.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start Free Trial <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a Demo
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

                        <RelatedPosts currentSlug="moltbot-alternatives" category="Comparison" tags={['MoltBot Alternatives', 'AI Employees', 'Comparison']} />
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
