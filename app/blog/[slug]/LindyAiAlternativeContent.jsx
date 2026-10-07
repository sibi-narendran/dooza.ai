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
    CreditCard,
    Settings,
    Headphones,
    Users,
    TrendingUp,
    Code,
    Workflow
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best Lindy AI alternative?",
        answer: "It depends on what you want instead. If you want AI built for you, Dooza is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents with you, and every Dooza product starts with a refundable pilot (100% refund within 14 days). If you want to keep building yourself, Gumloop (Pro from $37/month, 14-day free trial) suits agentic workflows, and Zapier (free plan; Professional from $19.99/month; 9,000+ apps) suits app-to-app automation with AI steps. Prices checked October 7, 2026."
    },
    {
        question: "Why do teams look for a Lindy AI alternative?",
        answer: "Usually because they would rather not build and maintain agents themselves, or would rather not manage a per-seat credit pool. Lindy's billing itself is predictable: its pricing page says 'No surprise bills. If the pool runs low, Lindy pauses and tells you.' Lindy is still the better pick if you want self-serve control, strong meeting and calendar features, or SOC 2 Type II and HIPAA compliance."
    },
    {
        question: "How much does Lindy AI cost compared to alternatives?",
        answer: "Lindy is billed per seat in credits: Plus from $29.99/month for 3,000 credits, Pro $99.99 for 15,000, Max $199.99 for 35,000, and custom Enterprise pricing. A credit is about one cent, and new users get $50 in credits for 7 days. Gumloop Pro starts at $37/month with a 14-day free trial, and Zapier has a free plan (100 tasks/month) with Professional from $19.99/month. All checked October 7, 2026, on each vendor's pricing page. Dooza uses no credits; pricing depends on the product, and every Dooza product starts with a refundable pilot (see dooza.ai/pricing)."
    },
    {
        question: "Is Lindy AI good for small businesses?",
        answer: "Yes, if you are comfortable setting it up yourself. Lindy says setup takes 2 minutes, it has ready-made templates and 40+ skills, and its per-seat credit plans have no surprise bills: agents pause when credits run low. If you would rather have someone build and maintain your AI for you, a done-for-you option like Dooza fits better."
    },
    {
        question: "Can I migrate from Lindy AI to Dooza?",
        answer: "Yes. There's no direct migration tool, but a Dooza engineer scopes your pilot on a free 30-minute call and helps you replicate your Lindy workflows. Workforce employees can start working the same day. You can run both platforms in parallel during the transition."
    },
    {
        question: "What does Dooza offer that Lindy AI doesn't?",
        answer: "Dooza is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees (email, social, SEO, sales, phones) or custom agents with you. There's no credit system, and every product starts with a refundable pilot: 100% refund within 14 days. Lindy is self-serve: you set up your own agents from templates and 40+ skills, billed per seat in credits. Lindy has compliance certifications (SOC 2 Type II, HIPAA) that Dooza doesn't."
    }
];

const alternatives = [
    {
        name: "Dooza",
        tagline: "Done-for-You AI Employees and Custom Agents",
        description: "Dooza builds AI employees for email, social media, SEO, sales, and phones, plus custom agents. A Dooza engineer scopes your pilot on a free 30-minute call and builds it with you. No credit system to track. Every Dooza product starts with a refundable pilot.",
        price: "14-day",
        priceNote: "refundable pilot",
        pros: [
            "No credit system to track",
            "Workforce employees can start the same day",
            "Free 30-minute call to scope your pilot, zero coding required",
            "Refundable pilot: 100% refund within 14 days",
            "Encrypted connections and your approval on anything sensitive",
            "1,000+ app integrations"
        ],
        cons: [
            "Less DIY customization than Lindy",
            "Not SOC 2 certified (Lindy is SOC 2 Type II)",
            "Focused on business automation (not personal use)"
        ],
        bestFor: "Businesses that want AI built and tuned for them, without managing credits",
        featured: true,
        url: "workforce"
    },
    {
        name: "Gumloop",
        tagline: "Agentic Workflow Builder",
        description: "A Lindy alternative for building agentic workflows yourself. Pro starts at $37/month with a 14-day free trial; there is no free plan (checked October 7, 2026).",
        price: "$37+/month",
        priceNote: "14-day free trial",
        pros: [
            "Good for agentic workflows",
            "Templates and agents to start from",
            "Similar no-code approach",
            "14-day free trial"
        ],
        cons: [
            "No free plan",
            "Billed in credits, with usage billing beyond the included amount",
            "Self-serve: you build and maintain it"
        ],
        bestFor: "Teams that want to build their own AI workflows and agents",
        featured: false
    },
    {
        name: "Zapier + AI",
        tagline: "Backend Automation Leader",
        description: "The long-standing leader in no-code automation, with 9,000+ apps. It now also offers AI fields, Agents, Chatbots, and Copilot. Free plan with 100 tasks/month; Professional from $19.99/month (checked October 7, 2026).",
        price: "$0-19.99+/month",
        priceNote: "Free plan; paid tiers by task volume",
        pros: [
            "9,000+ app integrations",
            "Free plan (100 tasks/month)",
            "AI fields, Agents, and Chatbots",
            "Email and live chat support on paid plans"
        ],
        cons: [
            "Pricing scales with task volume",
            "Self-serve: you design and maintain the automations"
        ],
        bestFor: "Teams that want broad app-to-app automation with AI steps, and will build it themselves",
        featured: false
    }
];

export default function LindyAiAlternativeContent() {
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
            const sections = ['introduction', 'what-is-lindy', 'why-switch', 'alternatives', 'comparison', 'when-to-choose', 'migration', 'conclusion', 'faq'];
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
                        { label: 'Lindy AI Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Lindy AI</span> Alternative: Why Businesses Are Switching in 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Like the idea of AI employees but would rather not build them yourself? Compare Lindy AI alternatives on pricing, setup, and support, checked against each vendor's own pages.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 7, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/lindy-ai-alternative.png"
                                alt="Lindy AI alternatives comparison"
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
                                    { id: 'what-is-lindy', label: 'What is Lindy AI?' },
                                    { id: 'why-switch', label: 'Why Teams Look Elsewhere' },
                                    { id: 'alternatives', label: 'Top Alternatives' },
                                    { id: 'comparison', label: 'Comparison Table' },
                                    { id: 'when-to-choose', label: 'When to Choose Each' },
                                    { id: 'migration', label: 'How to Switch' },
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
                                    Start your pilot
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="lindy-ai-alternative" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    You've looked at <strong>Lindy AI</strong> and liked the concept. An AI teammate that handles emails, schedules meetings, and takes meeting notes? Useful.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>But Lindy is self-serve: you set it up, size the credits, and maintain it yourself.</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That suits many teams. Others would rather have someone build it for them, or want a different pricing model.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this guide, we'll look at why some teams look for a Lindy AI alternative and compare the options, with every competitor price checked on the vendor's own pricing page on October 7, 2026.
                                </p>
                            </div>
                        </section>

                        <section id="what-is-lindy" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Lindy AI?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <a href="https://www.lindy.ai" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lindy AI</a> describes itself as "an AI teammate that gets work done for you and your team." It is self-serve: Lindy says setup takes 2 minutes, and you start from ready-made templates and 40+ skills, or create your own. Lindy connects to thousands of apps, and computer use (browsing for you) is available on the Pro and Max levels.
                                </p>
                                <p>
                                    According to <a href="https://www.unite.ai/lindy-ai-review/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Unite.AI's review</a>, Lindy represents "a new wave of autonomous AI agents that can act on your behalf rather than merely respond to prompts."
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Bot className="w-5 h-5 text-primary-600" />
                                    Lindy AI Quick Facts
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li><strong>Type:</strong> Self-serve AI teammate</li>
                                    <li><strong>Best For:</strong> Email, meetings, scheduling, and everyday work tasks</li>
                                    <li><strong>Pricing:</strong> Per seat in credits; Plus from $29.99/month for 3,000 credits, about one cent per credit (checked October 7, 2026, on <a href="https://www.lindy.ai/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">lindy.ai/pricing</a>)</li>
                                    <li><strong>Trial:</strong> $50 in credits, valid for 7 days</li>
                                    <li><strong>Certifications:</strong> SOC 2 Type II, GDPR, HIPAA, and PIPEDA compliant</li>
                                </ul>
                            </div>
                            <div className="w-full mb-8">
                                <YouTubeEmbed
                                    videoId="5EluwJbN5Zk"
                                    title="Introducing Lindy 2.0 - AI Automation Platform"
                                />
                            </div>
                        </section>

                        <section id="why-switch" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Some Teams Look for a Lindy AI Alternative</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Lindy AI is a strong product. Teams that look elsewhere usually want one of these things instead:
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: CreditCard,
                                        title: "You'd Rather Not Manage a Credit Pool",
                                        desc: "Lindy bills per seat in credits worth about one cent each. Everyday asks use 2-250 credits, deep work 250-1,000, and big builds 1,000-2,500. There are no overage bills: when the pool runs low, Lindy pauses and tells you. But someone still has to size the pool and top it up ($10 per 1,000 credits).",
                                        source: "Lindy pricing page and docs"
                                    },
                                    {
                                        icon: Workflow,
                                        title: "You'd Rather Not Build It Yourself",
                                        desc: "Lindy makes building easy, with ready-made templates and 40+ skills. But the setup, testing, and upkeep are still yours. Busy owners may prefer to have it built and tuned for them.",
                                        source: "lindy.ai/pricing"
                                    },
                                    {
                                        icon: Settings,
                                        title: "You Want a Specialist for One Job",
                                        desc: "Lindy is a general AI teammate. If you want one employee built for one job, such as email, social media, SEO, sales, or phones, a specialist setup may fit better.",
                                        source: "Our take"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600 mb-2">{item.desc}</p>
                                                <span className="text-xs text-slate-500">Source: {item.source}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mt-8">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">What Lindy Says About Billing</h4>
                                        <blockquote className="text-amber-700 italic border-l-4 border-amber-300 pl-4">
                                            "No surprise bills. If the pool runs low, Lindy pauses and tells you."
                                        </blockquote>
                                        <p className="text-sm text-amber-600 mt-2">- <a href="https://www.lindy.ai/pricing" target="_blank" rel="noopener noreferrer" className="underline">Lindy pricing page</a>, checked October 7, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Top Lindy AI Alternatives in 2026</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Based on research from <a href="https://www.gumloop.com/blog/lindy-ai-alternatives" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Gumloop</a>, <a href="https://www.g2.com/products/lindy-lindy/competitors/alternatives" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">G2</a>, and <a href="https://www.nocode.mba/articles/lindy-ai-review" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">NoCode MBA</a>, here are the best alternatives. Competitor prices were checked on each vendor's own pricing page on October 7, 2026:
                                </p>
                            </div>
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
                                                    {alt.rating && (
                                                        <div className="flex items-center gap-1 mt-2 justify-end">
                                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                            <span className="font-medium">{alt.rating}</span>
                                                        </div>
                                                    )}
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
                                                        Start your pilot <ArrowRight className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Lindy AI vs Alternatives: Full Comparison</h2>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white text-sm">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold">Lindy AI</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                            <th className="p-4 border-b font-bold">Gumloop</th>
                                            <th className="p-4 border-b font-bold">Zapier</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Pricing Model</td>
                                            <td className="p-4 border-b text-amber-600">Per-seat credits</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">No credits</td>
                                            <td className="p-4 border-b">Credit-based</td>
                                            <td className="p-4 border-b">Task-based</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Starting Price</td>
                                            <td className="p-4 border-b">$29.99/month per seat (3,000 credits)</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold"><Link href="/pricing" className="hover:underline">Refundable pilot (see /pricing)</Link></td>
                                            <td className="p-4 border-b">$37/month (14-day free trial)</td>
                                            <td className="p-4 border-b">$0 free plan; Professional $19.99/month</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Pre-built AI Employees</td>
                                            <td className="p-4 border-b text-amber-600">Templates and 40+ skills you configure</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes - six AI employees</td>
                                            <td className="p-4 border-b text-amber-600">Templates and agents you configure</td>
                                            <td className="p-4 border-b text-amber-600">Agents you train yourself</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Setup Time</td>
                                            <td className="p-4 border-b">Minutes (Lindy says 2)</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Same day, after a free 30-min scoping call</td>
                                            <td className="p-4 border-b">Minutes</td>
                                            <td className="p-4 border-b">Varies</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Predictable Costs</td>
                                            <td className="p-4 border-b text-green-600">Yes - fixed per seat; pauses when credits run out</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes - no credits</td>
                                            <td className="p-4 border-b text-amber-600">Included credits, then usage billing</td>
                                            <td className="p-4 border-b text-amber-600">Somewhat</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Onboarding Support</td>
                                            <td className="p-4 border-b">Self-serve, email support, group onboarding sessions</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Engineer-led pilot</td>
                                            <td className="p-4 border-b">Self-serve</td>
                                            <td className="p-4 border-b">Tiered support</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-slate-500 mt-3">Lindy, Gumloop, and Zapier prices and plans checked October 7, 2026, on each vendor's own pricing page.</p>
                        </section>

                        <section id="when-to-choose" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Choose Each Platform</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4">Stay with Lindy AI if you...</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Want to build and tweak your own agents</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Want published per-seat pricing (from $29.99/month)</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Need SOC 2 Type II, HIPAA, or GDPR compliance</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Rely on meeting notes and calendar scheduling</li>
                                    </ul>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-primary-800 mb-4">Choose Dooza if you...</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Want AI employees working the same day</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Don't want a credit pool to manage</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Want a Dooza engineer to build and tune it with you</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Value onboarding support and guidance</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4">Choose Gumloop if you...</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Want a no-code builder for agentic workflows</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Want a 14-day free trial before paying</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Are comfortable building it yourself</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4">Choose Zapier if you...</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Need app-to-app automation primarily</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Need 9,000+ app integrations</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Want a free plan to start (100 tasks/month)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="migration" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Switch from Lindy AI to Dooza</h2>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Start Your Dooza Pilot", desc: "Book a free 30-minute call so a Dooza engineer can scope your pilot. Every Dooza product starts with a refundable pilot: 100% refund within 14 days." },
                                    { step: "2", title: "Choose Your AI Employees", desc: "Select from pre-built roles: email assistant, social media manager, SEO specialist, sales rep, and more." },
                                    { step: "3", title: "Connect Your Tools", desc: "Link your email, calendar, CRM, and social accounts with one-click integrations." },
                                    { step: "4", title: "Get Onboarding Help", desc: "A Dooza engineer will help you replicate your Lindy workflows during your pilot." },
                                    { step: "5", title: "Run Both in Parallel", desc: "Test Dooza alongside Lindy until you're confident, then cancel Lindy when ready." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Bottom Line</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Lindy AI is genuinely innovative technology. Its ability to create AI agents from simple prompts is impressive, and for users who love building and tinkering, it's a powerful tool.
                                </p>
                                <p>
                                    But if you're a business owner who would rather not build agents or manage a credit pool yourself, a done-for-you option may fit better. And if you need SOC 2 Type II or HIPAA, or you want to start self-serve tonight, Lindy remains the better pick.
                                </p>
                                <p>
                                    <strong>Dooza</strong> builds it with you: a Dooza engineer scopes your pilot on a free 30-minute call, then sets up and tunes your AI employees or custom agents, with no credits to track and a refundable pilot to start.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Try a Lindy Alternative?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Start with a refundable pilot: 100% refund within 14 days. Pricing depends on the product; see <Link href="/pricing" className="text-primary-600 hover:underline">pricing</Link>.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start your pilot <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a free pilot call
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

                        <RelatedPosts currentSlug="lindy-ai-alternative" category="Comparison" tags={['Lindy AI', 'AI Employees', 'Comparison']} />
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
