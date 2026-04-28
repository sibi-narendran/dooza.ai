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
    Bot,
    Sparkles,
    DollarSign,
    Users,
    Brain,
    Timer,
    TrendingUp,
    MessageSquare,
    Mail,
    Search,
    Calculator,
    BarChart3,
    Shield,
    Target,
    ChevronRight
} from 'lucide-react';

const faqData = [
    {
        question: "How much does Dooza.ai cost per month?",
        answer: "Dooza.ai starts at $49/month for the Starter plan, which includes core AI employees like Maily (email), Somi (social media), and Ranky (SEO). The Pro plan is $79/month with advanced features and higher limits, and the Business plan is $119/month for teams that need maximum capacity. All plans include unlimited conversations, no credit caps, and free onboarding. There's also a $1 for 7-day trial so you can test everything before committing."
    },
    {
        question: "How much can I save by using an AI employee instead of a virtual assistant?",
        answer: "A full-time virtual assistant costs $1,500-$4,000/month depending on skill level and location. A U.S.-based marketing hire costs $4,000-$8,000/month including benefits. Dooza.ai replaces the repetitive portions of these roles for $49-$119/month — that's a 95-98% cost reduction. Over 12 months, that's $18,000-$96,000 in savings depending on who you'd otherwise hire."
    },
    {
        question: "What tasks can AI employees actually handle?",
        answer: "Dooza's AI employees handle specific, well-defined roles. Maily manages your inbox — reading, drafting, categorizing, and responding to emails. Somi creates and publishes social media content across platforms daily. Ranky handles SEO — keyword research, content writing, and publishing blog posts. Each AI employee works 24/7 without breaks, sick days, or vacations."
    },
    {
        question: "Is there a free trial for Dooza.ai?",
        answer: "Dooza offers a $1 for 7-day trial that gives you full access to all AI employees and features. It's not a limited demo — you get the complete platform for a full week. This lets you see real results in your own business before deciding. No long-term contract required."
    },
    {
        question: "Can an AI employee fully replace a marketing hire?",
        answer: "For repetitive execution tasks — yes. AI employees excel at daily social media posting, email management, SEO content production, and routine outreach. Where they can't replace a human is in high-level strategy, creative direction, relationship building, and crisis management. The smartest move for most SMBs is to use AI employees for the 80% of work that's execution, and reserve human talent (or your own time) for the 20% that requires judgment."
    }
];

export default function HowMuchDoesAiEmployeeCostContent() {
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
            const sections = ['introduction', 'real-costs', 'cost-comparison', 'what-you-get', 'hidden-costs', 'roi-math', 'video', 'when-to-hire', 'faq'];
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
                        { label: 'How Much Does an AI Employee Cost?' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Calculator size={16} />
                            <span>Cost Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How Much Does an AI Employee Cost? <span className="text-primary-600">The Complete 2026 Guide</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            AI employees cost <strong>$49-$119/month</strong> vs <strong>$3,000-$8,000/month</strong> for humans. Here's the full breakdown — what you're paying for, what you're getting, and which option makes sense for your business.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 28, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/8c9f88ae-40de-4607-868f-cdd14a7310f5.jpg"
                                alt="AI employee cost comparison — $49/month AI employees vs $3,000-$8,000/month human hires in 2026"
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
                                Try AI Employees for $1
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
                                    { id: 'real-costs', label: 'The Real Cost of Hiring' },
                                    { id: 'cost-comparison', label: 'Cost Comparison Table' },
                                    { id: 'what-you-get', label: 'What You Get for $49/mo' },
                                    { id: 'hidden-costs', label: 'Hidden Costs of Human Hires' },
                                    { id: 'roi-math', label: 'ROI Math' },
                                    { id: 'video', label: 'See It in Action' },
                                    { id: 'when-to-hire', label: 'When to Hire Human vs AI' },
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
                                <p className="text-sm text-slate-600 mb-4">Hire AI employees for $49/mo</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start $1 Trial
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="how-much-does-an-ai-employee-cost" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You're thinking about hiring help. Maybe a VA for email. Maybe a social media manager. Maybe someone to handle SEO. Then you look at the numbers: <strong>$1,500-$4,000/month</strong> for an offshore VA, <strong>$4,000-$8,000/month</strong> for a U.S.-based marketing hire. That's <strong>$18,000-$96,000 per year</strong> — before benefits, management overhead, and the inevitable sick days.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Now consider the alternative: an AI employee that handles the same tasks for <strong>$49/month</strong>. No PTO. No onboarding lag. No 2-week notice. Just work — 24 hours a day, 7 days a week, 365 days a year.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This isn't a software pitch. It's a hiring decision. And if you're running a small business or startup in 2026, the math on AI employees isn't just interesting — it's impossible to ignore.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this guide, we'll break down the exact costs of every option — human VA, agency, DIY tool stack, and AI employees like the ones on <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza.ai</Link> — so you can make this decision with real numbers, not guesswork.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: The Real Cost of Hiring */}
                        <section id="real-costs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-primary-600" />
                                The Real Cost of Hiring in 2026
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Before we compare AI employees to anything, let's be honest about what "hiring someone" actually costs. Most founders underestimate this by <strong>40-60%</strong> because they only think about the salary line item.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        title: "Offshore Virtual Assistant",
                                        cost: "$1,500-$4,000/mo",
                                        details: "Filipino or Latin American VAs through agencies like Belay, Time Etc, or direct hire. Cheaper than U.S. hires but still significant. Add $200-500/mo for management tools and oversight.",
                                        annual: "$18,000-$48,000/year",
                                        icon: Users
                                    },
                                    {
                                        title: "U.S.-Based Marketing Hire",
                                        cost: "$4,000-$8,000/mo",
                                        details: "Full-time or part-time. Add 20-30% for benefits, payroll taxes, and equipment. Factor in 2-4 weeks of onboarding before they're productive. Average turnover: 18 months.",
                                        annual: "$58,000-$125,000/year",
                                        icon: Users
                                    },
                                    {
                                        title: "Marketing Agency",
                                        cost: "$2,000-$10,000/mo",
                                        details: "Retainer-based. Usually covers 1-2 channels (SEO + social, or email + content). You're one of 15-30 clients. Response times: 24-48 hours. Contract lock-in: 3-12 months.",
                                        annual: "$24,000-$120,000/year",
                                        icon: BarChart3
                                    },
                                    {
                                        title: "DIY Tool Stack",
                                        cost: "$200-$800/mo",
                                        details: "Hootsuite ($99) + Mailchimp ($45) + Surfer SEO ($89) + Canva Pro ($13) + scheduling tools + analytics. Cheaper in dollars, expensive in time — you're doing all the work yourself.",
                                        annual: "$2,400-$9,600/year + your time",
                                        icon: Brain
                                    },
                                    {
                                        title: "Dooza.ai AI Employees",
                                        cost: "$49-$119/mo",
                                        details: "3 named AI employees — Maily (email), Somi (social media), Ranky (SEO) — working 24/7. No per-seat fees. No credit limits. No management overhead. Setup: 30 minutes.",
                                        annual: "$588-$1,428/year",
                                        icon: Bot,
                                        highlight: true
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`border p-5 rounded-xl ${item.highlight ? 'border-primary-300 bg-primary-50 ring-2 ring-primary-100' : 'border-slate-200 bg-white'}`}>
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.highlight ? 'bg-primary-200 text-primary-700' : 'bg-slate-100 text-slate-600'}`}>
                                                    <item.icon size={20} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                                                    <p className="text-xs text-slate-500">{item.annual}</p>
                                                </div>
                                            </div>
                                            <span className={`text-lg font-bold shrink-0 ${item.highlight ? 'text-primary-700' : 'text-slate-900'}`}>{item.cost}</span>
                                        </div>
                                        <p className="text-sm text-slate-600 mt-2">{item.details}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <DollarSign className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Number Nobody Talks About</h4>
                                        <p className="text-slate-700 text-sm">
                                            The average small business owner spends <strong>12-15 hours/week</strong> on tasks AI can handle — email, social media, content writing. At a conservative $50/hour founder opportunity cost, that's <strong>$2,600-$3,250/month</strong> in lost productivity. The real cost of not having help isn't the VA salary — it's what you're not doing while you're stuck in your inbox.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Cost Comparison Table */}
                        <section id="cost-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BarChart3 className="w-8 h-8 text-blue-600" />
                                Side-by-Side Cost Comparison
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's every option laid out honestly. Same categories, same criteria. No cherry-picking.
                                </p>
                            </div>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200"></th>
                                            <th className="text-center p-4 font-bold text-slate-900 border-b border-slate-200">Human VA</th>
                                            <th className="text-center p-4 font-bold text-slate-900 border-b border-slate-200">Agency</th>
                                            <th className="text-center p-4 font-bold text-slate-900 border-b border-slate-200">Tool Stack</th>
                                            <th className="text-center p-4 font-bold text-primary-700 border-b-2 border-primary-300 bg-primary-50">Dooza.ai</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { label: "Monthly Cost", va: "$1,500-$4,000", agency: "$2,000-$10,000", tools: "$200-$800", dooza: "$49-$119" },
                                            { label: "Hours Available", va: "160 hrs/mo", agency: "20-40 hrs/mo", tools: "Your hours", dooza: "720 hrs/mo (24/7)" },
                                            { label: "Sick Days/Year", va: "10-15 days", agency: "N/A (delays)", tools: "Your sick days", dooza: "0" },
                                            { label: "Onboarding Time", va: "2-4 weeks", agency: "1-2 weeks", tools: "Self-serve", dooza: "30 minutes" },
                                            { label: "Tasks Handled", va: "Generalist", agency: "1-2 channels", tools: "DIY everything", dooza: "Email + Social + SEO" },
                                            { label: "Works Weekends", va: "Extra cost", agency: "No", tools: "If you do", dooza: "Always" },
                                            { label: "Scales With You", va: "Hire more", agency: "Pay more", tools: "More subscriptions", dooza: "Same price" },
                                            { label: "Annual Cost", va: "$18K-$48K", agency: "$24K-$120K", tools: "$2.4K-$9.6K + time", dooza: "$588-$1,428" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                                                <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">{row.label}</td>
                                                <td className="p-4 text-center text-slate-600 border-b border-slate-100">{row.va}</td>
                                                <td className="p-4 text-center text-slate-600 border-b border-slate-100">{row.agency}</td>
                                                <td className="p-4 text-center text-slate-600 border-b border-slate-100">{row.tools}</td>
                                                <td className="p-4 text-center font-semibold text-primary-700 border-b border-primary-100 bg-primary-50/50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-primary-50 border border-primary-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Target className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Reading This Table</h4>
                                        <p className="text-slate-700 text-sm">
                                            The DIY tool stack looks cheap until you factor in your time. The VA looks reasonable until you add management overhead. The agency works until you realize you're sharing attention with 20 other clients. Dooza's AI employees aren't the cheapest software — they're the cheapest <strong>employee</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: What You Get */}
                        <section id="what-you-get" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Bot className="w-8 h-8 text-violet-600" />
                                What You Actually Get for $49/Month
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza doesn't give you a generic AI chatbot and call it a day. You get <strong>named AI employees</strong> — each with a specific role, specific capabilities, and specific outputs. Here's who's on your team:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        name: "Maily",
                                        role: "Email Manager",
                                        icon: Mail,
                                        color: "blue",
                                        tasks: [
                                            "Reads and categorizes every incoming email",
                                            "Drafts contextual replies matching your tone",
                                            "Flags urgent messages for your attention",
                                            "Handles routine responses autonomously",
                                            "Works across Gmail, Outlook, and custom domains"
                                        ],
                                        replaces: "Email VA ($500-$1,500/mo)"
                                    },
                                    {
                                        name: "Somi",
                                        role: "Social Media Manager",
                                        icon: MessageSquare,
                                        color: "pink",
                                        tasks: [
                                            "Creates original posts daily for all platforms",
                                            "Maintains consistent brand voice",
                                            "Schedules and publishes automatically",
                                            "Generates captions, hashtags, and engagement hooks",
                                            "Covers Instagram, LinkedIn, X/Twitter, and Facebook"
                                        ],
                                        replaces: "Social media manager ($1,500-$3,000/mo)"
                                    },
                                    {
                                        name: "Ranky",
                                        role: "SEO Specialist",
                                        icon: Search,
                                        color: "green",
                                        tasks: [
                                            "Researches keywords your audience is searching",
                                            "Writes full-length SEO blog posts",
                                            "Optimizes content for search rankings",
                                            "Publishes directly to your blog",
                                            "Tracks performance and adjusts strategy"
                                        ],
                                        replaces: "SEO freelancer ($1,000-$5,000/mo)"
                                    }
                                ].map((employee, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                                    employee.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                                    employee.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                                                    'bg-green-100 text-green-600'
                                                }`}>
                                                    <employee.icon size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900 text-lg">{employee.name}</h3>
                                                    <p className="text-sm text-slate-500">{employee.role}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full font-medium">Replaces: {employee.replaces}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {employee.tasks.map((task, tidx) => (
                                                <li key={tidx} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3">The Combined Replacement Value</h4>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <p className="text-2xl font-bold text-red-600 line-through">$3,000-$9,500</p>
                                        <p className="text-xs text-slate-500 mt-1">Human equivalents/mo</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <ArrowRight className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-primary-700">$49-$119</p>
                                        <p className="text-xs text-slate-500 mt-1">Dooza.ai/mo</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Hidden Costs */}
                        <section id="hidden-costs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Shield className="w-8 h-8 text-red-600" />
                                The Hidden Costs of Human Hires Nobody Budgets For
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The salary is just the starting point. Here's what actually shows up on the ledger after 12 months with a human marketing hire:
                                </p>
                            </div>

                            <div className="space-y-3 mb-8">
                                {[
                                    { item: "Recruiting & job posting fees", cost: "$500-$2,000", note: "LinkedIn, Indeed, or recruiter fees" },
                                    { item: "Onboarding & training time", cost: "$1,000-$3,000", note: "2-4 weeks before full productivity" },
                                    { item: "Benefits & payroll taxes", cost: "20-30% of salary", note: "Health, dental, 401k matching, FICA" },
                                    { item: "Software & equipment", cost: "$200-$500/mo", note: "Laptop, licenses, tools access" },
                                    { item: "Management overhead", cost: "5-10 hrs/week", note: "Your time reviewing, directing, correcting" },
                                    { item: "Paid time off", cost: "15-20 days/year", note: "Vacation + sick days + holidays = no output" },
                                    { item: "Turnover cost (when they leave)", cost: "50-200% of salary", note: "Average tenure for marketing roles: 18 months" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-lg">
                                        <div>
                                            <p className="font-medium text-slate-900 text-sm">{item.item}</p>
                                            <p className="text-xs text-slate-500">{item.note}</p>
                                        </div>
                                        <span className="font-bold text-red-600 text-sm shrink-0 ml-4">{item.cost}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-8">
                                <div className="flex items-start gap-3">
                                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">What AI Employees Don't Cost You</h4>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {[
                                                "Zero recruiting fees",
                                                "Zero benefits or payroll taxes",
                                                "Zero sick days or PTO",
                                                "Zero management overhead",
                                                "Zero turnover risk",
                                                "Zero onboarding lag",
                                                "Zero equipment costs",
                                                "Zero 2-week notice surprises"
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: ROI Math */}
                        <section id="roi-math" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Calculator className="w-8 h-8 text-green-600" />
                                The ROI Math: What You Save in Year One
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's run the numbers on three real scenarios. These are conservative — most businesses save more once they stop doing the work themselves.
                                </p>
                            </div>

                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        title: "Scenario 1: Solo Founder",
                                        before: "Spending 15 hrs/week on email, social, and SEO. Opportunity cost at $75/hr = $4,875/month.",
                                        after: "Dooza Pro at $79/month. Maily handles email, Somi posts daily, Ranky writes weekly SEO content.",
                                        savings: "$4,796/month",
                                        annual: "$57,552/year in reclaimed time",
                                        color: "blue"
                                    },
                                    {
                                        title: "Scenario 2: Replacing a VA",
                                        before: "Paying a Filipino VA $2,500/month for email + social media. Still doing SEO yourself.",
                                        after: "Dooza Starter at $49/month covers all three. VA contract ended.",
                                        savings: "$2,451/month",
                                        annual: "$29,412/year in hard savings",
                                        color: "green"
                                    },
                                    {
                                        title: "Scenario 3: Ditching the Agency",
                                        before: "Paying an agency $4,000/month for social media management and basic SEO. Results: mediocre.",
                                        after: "Dooza Business at $119/month. Same output. Faster turnaround. Full control.",
                                        savings: "$3,881/month",
                                        annual: "$46,572/year in hard savings",
                                        color: "violet"
                                    }
                                ].map((scenario, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                                        <div className={`px-6 py-4 ${
                                            scenario.color === 'blue' ? 'bg-blue-50 border-b border-blue-100' :
                                            scenario.color === 'green' ? 'bg-green-50 border-b border-green-100' :
                                            'bg-violet-50 border-b border-violet-100'
                                        }`}>
                                            <h3 className="font-bold text-slate-900">{scenario.title}</h3>
                                        </div>
                                        <div className="p-6 space-y-3">
                                            <div className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                <p className="text-sm text-slate-600"><strong>Before:</strong> {scenario.before}</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                <p className="text-sm text-slate-600"><strong>After:</strong> {scenario.after}</p>
                                            </div>
                                            <div className="bg-green-50 border border-green-200 px-4 py-3 rounded-lg flex items-center justify-between">
                                                <span className="text-sm font-medium text-green-800">Monthly savings: <strong>{scenario.savings}</strong></span>
                                                <span className="text-sm font-bold text-green-700">{scenario.annual}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7: Video */}
                        <section id="video" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Zap className="w-8 h-8 text-amber-600" />
                                See It in Action
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    Numbers tell the story. But seeing Dooza's AI employees actually work — handling email, publishing social posts, writing SEO content — makes it real. Watch the overview:
                                </p>
                            </div>

                            <div className="mb-4 rounded-xl overflow-hidden border border-slate-200">
                                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/NgBAXFK6nk4"
                                        title="AI Era with Dooza.ai — See AI employees in action"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 text-center italic mb-8">
                                Watch: See Dooza's AI employees handle email, social, and SEO in real time.
                            </p>
                        </section>

                        {/* Section 8: When to Hire Human vs AI */}
                        <section id="when-to-hire" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-indigo-600" />
                                When to Hire a Human vs. an AI Employee
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    AI employees aren't the right call 100% of the time. Here's an honest breakdown of when each option wins:
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8">
                                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                                    <div className="p-6">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <Bot className="w-5 h-5 text-primary-600" />
                                            Hire AI When...
                                        </h3>
                                        <ul className="space-y-3 text-sm text-slate-600">
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>You need daily email, social, or SEO execution</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Your budget is under $500/month for help</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>You need 24/7 availability without overtime</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Tasks are repeatable and process-driven</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>You want to scale without adding headcount</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>You're a solo founder or team under 10</li>
                                        </ul>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-blue-600" />
                                            Hire Human When...
                                        </h3>
                                        <ul className="space-y-3 text-sm text-slate-600">
                                            <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">&#x2022;</span>You need high-level strategy and creative direction</li>
                                            <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">&#x2022;</span>The role requires relationship-building (sales, BD)</li>
                                            <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">&#x2022;</span>Tasks require nuanced judgment and empathy</li>
                                            <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">&#x2022;</span>You're managing a complex, cross-functional team</li>
                                            <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">&#x2022;</span>The work involves crisis management or PR</li>
                                            <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">&#x2022;</span>Budget allows $4,000+/month for this role</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The smartest play for most SMBs in 2026? <strong>Start with AI employees for the execution layer</strong> — email, social, SEO — and hire humans only when you need strategic thinking that AI genuinely can't do. Most businesses find that AI handles <strong>80% of marketing execution</strong> at <strong>2% of the cost</strong>.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Timer className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Hybrid Approach</h4>
                                        <p className="text-slate-700 text-sm">
                                            Many Dooza users start with AI employees, then hire a human strategist once revenue justifies it. The AI keeps executing daily tasks while the human focuses on growth plays. You get consistent output at <strong>$49/month</strong> plus strategic firepower when you can afford it — instead of paying <strong>$6,000/month</strong> for someone who spends half their time on tasks AI can do better.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Before FAQ */}
                        <section className="scroll-mt-28">
                            <div className="bg-gradient-to-br from-primary-600 to-violet-700 text-white p-8 md:p-10 rounded-2xl text-center">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    The Cheapest Employee You'll Ever Hire
                                </h3>
                                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                    Maily, Somi, and Ranky are ready to start today. $1 gets you a full 7-day trial — all AI employees, all features, no restrictions.
                                </p>

                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-xl mx-auto text-left">
                                    {[
                                        { icon: Mail, text: "Maily handles your inbox" },
                                        { icon: MessageSquare, text: "Somi runs your social" },
                                        { icon: Search, text: "Ranky grows your SEO" },
                                        { icon: DollarSign, text: "$49/month after trial" },
                                        { icon: Timer, text: "30-minute setup" },
                                        { icon: Shield, text: "Cancel anytime" }
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
                                        href="https://www.dooza.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-lg"
                                    >
                                        Hire Your First AI Employee
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

                        {/* Bottom soft CTA */}
                        <section className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    The question isn't whether AI employees are cheaper — at <strong>$49/month vs $3,000-$8,000/month</strong>, that's not even a debate. The question is whether you'll keep paying 60x more for the same output, or <a href="https://www.dooza.ai" className="text-primary-600 hover:underline font-medium">hire your first AI employee</a> and put the difference back into growth.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Right spacer for layout balance */}
                    <div className="hidden lg:block w-64 shrink-0" />
                </div>
            </div>

            <RelatedPosts category="Cost Guide" tags={['AI Employees', 'AI Cost', 'Virtual Assistant', 'Small Business', 'ROI']} currentSlug="how-much-does-an-ai-employee-cost" />
            <BottomCTA />
            <Footer />

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
