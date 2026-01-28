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
        answer: "Dooza is the top Lindy AI alternative for businesses seeking predictable pricing. Unlike Lindy's credit-based system that can lead to surprise costs, Dooza offers flat-rate pricing at $29/month with all AI employees included. Other alternatives include Gumloop for cheaper automation and Zapier for backend workflows."
    },
    {
        question: "Why are users switching from Lindy AI?",
        answer: "The main reasons users switch from Lindy AI include: unpredictable credit consumption (users report credits running out quickly), the credit system being 'brutal' according to reviews, premium actions required for most useful workflows, and costs that can escalate with complex automations."
    },
    {
        question: "How much does Lindy AI cost compared to alternatives?",
        answer: "Lindy AI uses a credit-based system starting at $50/month for 5,000 credits, but costs vary based on task complexity ($0.01-$0.10+ per task). Dooza offers fixed pricing at $29/month with unlimited use. Gumloop offers similar capabilities at lower price points, and Zapier starts at $19/month for basic automation."
    },
    {
        question: "Is Lindy AI good for small businesses?",
        answer: "Lindy AI is powerful for no-code automation, but its credit system can be challenging for small businesses with tight budgets. The unpredictable costs make budgeting difficult. Alternatives like Dooza offer more predictable pricing better suited for small business budgets."
    },
    {
        question: "Can I migrate from Lindy AI to Dooza?",
        answer: "Yes, you can easily switch from Lindy AI to Dooza. While there's no direct migration tool, Dooza's pre-built AI employees are ready to use immediately. You can run both platforms in parallel during transition, and Dooza's onboarding team will help you replicate your workflows."
    },
    {
        question: "What does Dooza offer that Lindy AI doesn't?",
        answer: "Dooza offers: predictable flat-rate pricing ($29/month), pre-built AI employees for specific roles (email, social, SEO, sales), free concierge onboarding, no credit system or usage limits, and dedicated support. Lindy requires building agents from scratch and uses variable credit-based pricing."
    }
];

const alternatives = [
    {
        name: "Dooza",
        tagline: "Pre-built AI Employees with Fixed Pricing",
        description: "Dooza offers ready-to-use AI employees for email, social media, SEO, sales, and customer support. No credit system, no usage limits, just predictable monthly pricing.",
        price: "$29/month",
        priceNote: "All AI employees included",
        rating: 4.9,
        pros: [
            "Fixed pricing - no surprise credit costs",
            "Pre-built AI employees ready to work day one",
            "5-minute setup, zero coding required",
            "Free concierge onboarding support",
            "Enterprise-grade security included",
            "Unlimited usage within your plan"
        ],
        cons: [
            "Less DIY customization than Lindy",
            "Focused on business automation (not personal use)"
        ],
        bestFor: "Businesses wanting AI automation without credit anxiety or technical setup",
        featured: true,
        url: "workforce"
    },
    {
        name: "Gumloop",
        tagline: "Affordable Agentic Workflow Builder",
        description: "A solid Lindy alternative for creating agentic workflows. Offers a generous free plan and cheaper paid tiers than Lindy.",
        price: "$0-39/month",
        priceNote: "Generous free tier",
        rating: 4.5,
        pros: [
            "More affordable than Lindy",
            "Generous free plan to start",
            "Good for agentic workflows",
            "Similar no-code approach"
        ],
        cons: [
            "Smaller community than Lindy",
            "Fewer integrations available",
            "Less polished user experience"
        ],
        bestFor: "Budget-conscious users who want Lindy-like functionality",
        featured: false
    },
    {
        name: "Zapier + AI",
        tagline: "Backend Automation Leader",
        description: "The long-standing leader in no-code automation with 8,000+ app integrations. Excels at moving data between apps and orchestrating workflows.",
        price: "$19-99/month",
        priceNote: "Based on task volume",
        rating: 4.6,
        pros: [
            "8,000+ app integrations",
            "Battle-tested reliability",
            "AI-powered automation steps",
            "Excellent documentation"
        ],
        cons: [
            "No conversational AI interface",
            "More complex to set up",
            "Pricing scales with usage",
            "Not designed for AI employees"
        ],
        bestFor: "Users needing app-to-app automation without AI employee features",
        featured: false
    },
    {
        name: "n8n",
        tagline: "Open-Source Automation Framework",
        description: "A DIY automation framework for technical users. You build automations from scratch and can self-host for free.",
        price: "$0-50/month",
        priceNote: "Free self-hosted option",
        rating: 4.4,
        pros: [
            "Free self-hosted option",
            "Highly customizable",
            "Open-source transparency",
            "Active developer community"
        ],
        cons: [
            "Requires technical expertise",
            "Bring your own API keys",
            "No pre-built AI agents",
            "Steeper learning curve"
        ],
        bestFor: "Technical users who want full control and are comfortable self-hosting",
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
                            Love the concept of AI employees but frustrated with credit limits? Discover alternatives with predictable pricing and pre-built solutions.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 28, 2026</span>
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
                                    { id: 'why-switch', label: 'Why Users Switch' },
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
                                    Try Dooza Free
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
                                    You've tried <strong>Lindy AI</strong> and loved the concept. Building AI employees from a simple prompt? Genius. Watching your "Lindy" handle emails, schedule meetings, and update your CRM automatically? Amazing.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>But then the credits ran out faster than expected.</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you've found yourself anxiously checking your credit balance, wondering why a simple workflow consumed 50 credits, or calculating whether you can afford to run that automation one more time—you're not alone.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this guide, we'll look at why users are seeking Lindy AI alternatives and compare the best options for businesses that want AI automation without the credit anxiety.
                                </p>
                            </div>
                        </section>

                        <section id="what-is-lindy" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Lindy AI?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <a href="https://www.lindy.ai" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lindy AI</a> is a no-code platform for creating "AI employees" (called Lindies) that automate business processes. Unlike simple chatbots, Lindy agents can navigate browsers, use thousands of apps, and complete multi-step workflows autonomously.
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
                                    <li><strong>Type:</strong> No-code AI agent builder</li>
                                    <li><strong>Best For:</strong> Sales, customer support, content workflows</li>
                                    <li><strong>Pricing:</strong> Credit-based ($0.01-$0.10+ per task)</li>
                                    <li><strong>Rating:</strong> 4.8/5 on <a href="https://www.g2.com/products/lindy-lindy/reviews" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">G2</a></li>
                                    <li><strong>Certifications:</strong> SOC 2 Type II, GDPR, HIPAA compliant</li>
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Users Are Seeking Lindy AI Alternatives</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Lindy AI is genuinely impressive technology. But based on user reviews from <a href="https://www.g2.com/products/lindy-lindy/reviews" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">G2</a>, <a href="https://annikahelendi.substack.com/p/my-honest-lindy-ai-review-what-works" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Substack</a>, and Reddit, several pain points keep appearing:
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: CreditCard,
                                        title: "The Credit System is 'Brutal'",
                                        desc: "Users report that credits disappear quickly, especially for complex workflows. One reviewer noted: 'Almost every useful workflow needs premium actions, making the free plan essentially useless.'",
                                        source: "Substack Review"
                                    },
                                    {
                                        icon: DollarSign,
                                        title: "Unpredictable Costs",
                                        desc: "Tasks cost anywhere from $0.01 to $0.10+ depending on complexity. Reddit users note this can lead to 'surprise costs for complex loops' that are hard to budget for.",
                                        source: "Reddit Discussion"
                                    },
                                    {
                                        icon: Settings,
                                        title: "Lack of Vertical Expertise",
                                        desc: "Lindy aims to do everything from medical scribing to recruiting. But generalist tools often lack the deep vertical expertise needed for specialized tasks.",
                                        source: "Gumloop Analysis"
                                    },
                                    {
                                        icon: Workflow,
                                        title: "Build-It-Yourself Approach",
                                        desc: "While Lindy makes building agents easy, you still need to build everything from scratch. For busy business owners, pre-built solutions may be more practical.",
                                        source: "User Feedback"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600 mb-2">{item.desc}</p>
                                                <span className="text-xs text-red-600">Source: {item.source}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mt-8">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">What Users Actually Say</h4>
                                        <blockquote className="text-amber-700 italic border-l-4 border-amber-300 pl-4">
                                            "The credit system is brutal. The free plan gives you 400 credits monthly, but you can't use any premium actions. Based on my testing, almost every useful workflow needs premium actions."
                                        </blockquote>
                                        <p className="text-sm text-amber-600 mt-2">- <a href="https://annikahelendi.substack.com/p/my-honest-lindy-ai-review-what-works" target="_blank" rel="noopener noreferrer" className="underline">Honest Lindy Review, Substack</a></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Top Lindy AI Alternatives in 2026</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Based on research from <a href="https://www.gumloop.com/blog/lindy-ai-alternatives" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Gumloop</a>, <a href="https://www.g2.com/products/lindy-lindy/competitors/alternatives" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">G2</a>, and <a href="https://www.nocode.mba/articles/lindy-ai-review" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">NoCode MBA</a>, here are the best alternatives:
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
                                            <td className="p-4 border-b text-amber-600">Credit-based</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Fixed monthly</td>
                                            <td className="p-4 border-b">Fixed monthly</td>
                                            <td className="p-4 border-b">Task-based</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Starting Price</td>
                                            <td className="p-4 border-b">$50/month</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">$29/month</td>
                                            <td className="p-4 border-b">$0 (free tier)</td>
                                            <td className="p-4 border-b">$19/month</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Pre-built AI Employees</td>
                                            <td className="p-4 border-b text-red-500">No - build yourself</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes - 10+ roles</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Setup Time</td>
                                            <td className="p-4 border-b">Minutes (build agent)</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">5 min (pre-built)</td>
                                            <td className="p-4 border-b">Minutes</td>
                                            <td className="p-4 border-b">30+ min</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Predictable Costs</td>
                                            <td className="p-4 border-b text-red-500">No - variable</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes - fixed</td>
                                            <td className="p-4 border-b text-green-600">Yes</td>
                                            <td className="p-4 border-b text-amber-600">Somewhat</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Onboarding Support</td>
                                            <td className="p-4 border-b">Self-serve</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Free Concierge</td>
                                            <td className="p-4 border-b">Self-serve</td>
                                            <td className="p-4 border-b">Tiered support</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="when-to-choose" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Choose Each Platform</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4">Stay with Lindy AI if you...</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Love building custom agents from scratch</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Have flexible budgets for variable costs</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Need maximum customization</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Run simple, low-credit workflows</li>
                                    </ul>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-primary-800 mb-4">Choose Dooza if you...</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Want AI employees ready to work immediately</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Need predictable, fixed monthly pricing</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Don't want to build agents from scratch</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Value onboarding support and guidance</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4">Choose Gumloop if you...</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Need a cheaper Lindy-like experience</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Want to test with a generous free tier</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Are comfortable with a smaller ecosystem</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4">Choose Zapier if you...</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Need app-to-app automation primarily</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Require 8,000+ integrations</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> Don't need conversational AI features</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="migration" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Switch from Lindy AI to Dooza</h2>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Sign Up for Dooza Free Trial", desc: "Create your account in under 2 minutes. No credit card required for the 14-day trial." },
                                    { step: "2", title: "Choose Your AI Employees", desc: "Select from pre-built roles: email assistant, social media manager, SEO specialist, sales rep, and more." },
                                    { step: "3", title: "Connect Your Tools", desc: "Link your email, calendar, CRM, and social accounts with one-click integrations." },
                                    { step: "4", title: "Get Onboarding Help", desc: "Our concierge team will help you replicate your Lindy workflows in Dooza—for free." },
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
                                    But if you're a business owner who wants AI automation without the credit anxiety, unpredictable costs, or need to build everything yourself—there are better options.
                                </p>
                                <p>
                                    <strong>Dooza</strong> gives you pre-built AI employees ready to work on day one, with fixed pricing you can actually budget for.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Try a Lindy Alternative?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    14-day free trial. No credit card required. Predictable pricing you can actually budget for.
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
