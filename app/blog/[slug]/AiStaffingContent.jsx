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
import YouTubeEmbed from '../../../components/YouTubeEmbed';
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
    Phone,
    Users,
    TrendingUp,
    AlertTriangle,
    Target,
    BarChart3,
    Shield,
    Share2,
    Briefcase
} from 'lucide-react';

const faqData = [
    {
        question: "What is AI staffing?",
        answer: "AI staffing means using AI employees to fill operational roles in your business — email management, social media, receptionist, lead generation, SEO, and legal compliance. Unlike AI tools that wait for prompts, AI employees work autonomously on schedules."
    },
    {
        question: "How much does AI staffing cost compared to hiring?",
        answer: "Traditional hiring costs $4,700 per hire plus $3,500-6,000/month per employee in salary alone. Dooza provides 6 AI employees for $29/month — a 99.88% cost reduction compared to hiring the equivalent human team ($24,700/month)."
    },
    {
        question: "Can AI employees really replace human workers?",
        answer: "AI employees handle the repetitive 80% of work — email, posting, answering calls, generating leads. Humans should focus on the 20% requiring judgment, creativity, and relationship building. The best model is a hybrid workforce."
    },
    {
        question: "How fast can I onboard AI employees?",
        answer: "Unlike the 42-day average for traditional hiring, AI employees can be onboarded in a single 30-minute call. Dooza's concierge team configures your AI employees to match your business, brand voice, and workflows."
    },
    {
        question: "Is AI staffing only for large companies?",
        answer: "AI staffing is actually most impactful for small businesses and solopreneurs who can't afford to hire full teams. A solo consultant can get an entire support staff of 6 AI employees for less than the cost of a single lunch meeting."
    }
];

export default function AiStaffingContent() {
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
            const sections = ['introduction', 'hiring-crisis', 'what-is-ai-staffing', 'hiring-vs-dooza', 'true-cost', 'ai-dream-team', 'hybrid-model', 'build-workforce', 'scenarios', 'faq'];
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
            <div className="bg-gradient-to-br from-blue-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI Staffing' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                            <Users size={16} />
                            <span>AI Education</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">AI Staffing</span>: Building a Workforce That Runs 24/7
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            The average hire costs $4,700 and takes 42 days. What if you could hire 6 roles in 30 minutes for $29/month? AI staffing is replacing traditional hiring for small businesses.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 17, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Hire Your AI Team - $29/mo
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
                                    { id: 'hiring-crisis', label: 'The Hiring Crisis' },
                                    { id: 'what-is-ai-staffing', label: 'What Is AI Staffing?' },
                                    { id: 'hiring-vs-dooza', label: 'Hiring vs Dooza' },
                                    { id: 'true-cost', label: 'True Cost of Staffing' },
                                    { id: 'ai-dream-team', label: 'Your AI Dream Team' },
                                    { id: 'hybrid-model', label: 'Hybrid Workforce' },
                                    { id: 'build-workforce', label: 'Build Your Workforce' },
                                    { id: 'scenarios', label: 'Real Scenarios' },
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
                                <p className="text-sm text-slate-600 mb-4">Build your AI team</p>
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
                                <InternalLinks currentSlug="ai-staffing" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    According to SHRM, the average cost-per-hire is <strong>$4,700</strong> and it takes <strong>42 days</strong> to fill a position. What if you could hire 6 roles in 30 minutes for $29/month?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    AI staffing isn't about replacing humans. It's about filling the operational gaps that small businesses can't afford to fill with traditional hiring.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">As we explored in our business automation guide</Link>, most small businesses are drowning in tasks they can't afford to hire for. Email piles up. Social media goes silent. Calls go to voicemail. Leads slip through the cracks. Not because owners don't care — but because there aren't enough hours in the day and there isn't enough budget for a full team.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="4zXQyswXj7U"
                                        title="AI Staffing: Building a Workforce That Runs 24/7"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: How AI staffing is transforming small business hiring</p>
                                </div>

                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Briefcase className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Staffing Reality</h4>
                                            <p className="text-slate-700">
                                                Small businesses need help with email, social media, phones, lead gen, SEO, and legal — but hiring 6 employees would cost <strong>$24,700+/month</strong>. AI staffing fills these roles for <strong>$29/month</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The Small Business Hiring Crisis */}
                        <section id="hiring-crisis" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Small Business Hiring Crisis</h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                {[
                                    { stat: "$4,700", label: "average cost per hire", source: "SHRM" },
                                    { stat: "42 days", label: "average time to fill a position", source: "SHRM" },
                                    { stat: "3-6 months", label: "time for new hire to reach full productivity", source: "Industry Average" },
                                    { stat: "33%", label: "annual turnover rate for small businesses", source: "BLS" },
                                    { stat: "$35-65K", label: "average salary for an administrative role", source: "Glassdoor" },
                                    { stat: "76%", label: "of SMBs say hiring is their biggest challenge", source: "NFIB" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-amber-50 border border-amber-100 p-5 rounded-xl text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">{item.stat}</div>
                                        <p className="text-sm text-slate-700 font-medium mb-1">{item.label}</p>
                                        <p className="text-xs text-amber-600">{item.source}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Hidden Cost</h4>
                                        <p className="text-slate-700">
                                            Beyond salary, each employee costs <strong>25-40% more</strong> in benefits, payroll taxes, equipment, training, and management overhead. A $45K/yr hire actually costs <strong>$56-63K/yr</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Is AI Staffing? */}
                        <section id="what-is-ai-staffing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is AI Staffing?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    AI staffing means using <strong>AI employees</strong> — autonomous software agents that handle entire job functions — to fill operational roles in your business.
                                </p>
                                <p>
                                    There's a key distinction most people miss:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-slate-600" />
                                        AI Tools
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You ask, it answers",
                                            "One task at a time",
                                            "Requires prompting",
                                            "Works when you tell it to"
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
                                        AI Employees
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Shows up and works",
                                            "Handles entire job functions",
                                            "Autonomous scheduling",
                                            "Works whether you're watching or not"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-primary-700">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium inline-flex items-center gap-1">
                                    Read our full comparison: AI Employees vs Virtual Assistants <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </section>

                        {/* Section 4: Hiring Humans vs Hiring Dooza AI Employees */}
                        <section id="hiring-vs-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Hiring Humans vs Hiring Dooza AI Employees</h2>

                            <div className="overflow-x-auto mb-6">
                                <table className="w-full border-collapse rounded-xl overflow-hidden">
                                    <thead>
                                        <tr className="bg-slate-100">
                                            <th className="text-left p-4 font-bold text-slate-900">Role</th>
                                            <th className="text-left p-4 font-bold text-slate-900">Human Cost/mo</th>
                                            <th className="text-left p-4 font-bold text-primary-700 bg-primary-50">Dooza Agent</th>
                                            <th className="text-left p-4 font-bold text-primary-700 bg-primary-50">Dooza Cost/mo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { role: "Email Manager", humanCost: "$3,500", agent: "Eva", doozaCost: "Included" },
                                            { role: "Social Media Manager", humanCost: "$4,200", agent: "Somi", doozaCost: "Included" },
                                            { role: "Receptionist", humanCost: "$3,500", agent: "Rachel", doozaCost: "Included" },
                                            { role: "Lead Generation Specialist", humanCost: "$4,500", agent: "Stan", doozaCost: "Included" },
                                            { role: "SEO Specialist", humanCost: "$5,000", agent: "Seomi", doozaCost: "Included" },
                                            { role: "Legal/Compliance Assistant", humanCost: "$4,000", agent: "Linda", doozaCost: "Included" }
                                        ].map((item, idx) => (
                                            <tr key={idx} className="border-t border-slate-200">
                                                <td className="p-4 text-slate-700">{item.role}</td>
                                                <td className="p-4 text-slate-700">{item.humanCost}</td>
                                                <td className="p-4 text-primary-700 font-medium bg-primary-50">{item.agent}</td>
                                                <td className="p-4 text-primary-700 bg-primary-50">{item.doozaCost}</td>
                                            </tr>
                                        ))}
                                        <tr className="border-t-2 border-slate-300 bg-slate-50 font-bold">
                                            <td className="p-4 text-slate-900">Total</td>
                                            <td className="p-4 text-slate-900">$24,700/mo</td>
                                            <td className="p-4 text-primary-700 bg-primary-100">6 AI Employees</td>
                                            <td className="p-4 text-primary-700 bg-primary-100">$29/mo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                <p className="text-xl font-bold text-green-800">
                                    That's a <span className="text-3xl">99.88%</span> cost reduction. Same roles. Same functions. Available 24/7.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: The True Cost of Traditional Staffing */}
                        <section id="true-cost" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The True Cost of Traditional Staffing</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    { title: "Recruiting", desc: "$4,700 per hire + agency fees (15-25% of salary)", icon: Target },
                                    { title: "Training", desc: "3-6 months to full productivity. $1,200+ in training costs.", icon: Clock },
                                    { title: "Benefits", desc: "Health insurance, PTO, 401k = 25-40% on top of salary.", icon: DollarSign },
                                    { title: "PTO & Sick Days", desc: "15-20 days PTO + sick days. AI employees: 0 days off.", icon: Calendar },
                                    { title: "Management Overhead", desc: "Managers spend 35% of their time on people management.", icon: Users },
                                    { title: "Turnover", desc: "33% annual turnover. Each departure costs 50-200% of salary to replace.", icon: AlertTriangle }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5" />
                                    The Bottom Line
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6 text-center">
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <div className="text-2xl font-bold text-red-700">$65,000-90,000/yr</div>
                                        <p className="text-sm text-red-600 mt-1">Traditional: 1 employee total cost</p>
                                    </div>
                                    <div className="bg-green-100 p-4 rounded-lg">
                                        <div className="text-2xl font-bold text-green-700">$348/yr</div>
                                        <p className="text-sm text-green-600 mt-1">Dooza: 6 AI employees total cost</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Meet Your AI Dream Team */}
                        <section id="ai-dream-team" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Your AI Dream Team</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Eva */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Eva</h3>
                                            <p className="text-sm text-slate-500">AI Email Manager</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-slate-600 mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Reads, prioritizes, and responds to emails</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Follows up with leads automatically</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Manages your calendar and scheduling</li>
                                    </ul>
                                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                                        <p className="text-sm font-bold text-blue-700">Saves 10+ hours/week on email</p>
                                    </div>
                                </div>

                                {/* Somi */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                                            <Share2 size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Somi</h3>
                                            <p className="text-sm text-slate-500">AI Social Media Manager</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-slate-600 mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Creates original content in your brand voice</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Posts across all platforms on schedule</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Monitors engagement and trends</li>
                                    </ul>
                                    <div className="bg-purple-50 p-3 rounded-lg text-center">
                                        <p className="text-sm font-bold text-purple-700">67% more leads with consistent posting</p>
                                    </div>
                                </div>

                                {/* Rachel */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Rachel</h3>
                                            <p className="text-sm text-slate-500">AI Receptionist</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-slate-600 mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Answers every call in under 1 second</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Qualifies leads with custom questions</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Books appointments directly in your calendar</li>
                                    </ul>
                                    <div className="bg-green-50 p-3 rounded-lg text-center">
                                        <p className="text-sm font-bold text-green-700">Captures 85% of leads that voicemail misses</p>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline text-sm font-medium inline-flex items-center gap-1">
                                            Learn more about Rachel <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Stan */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                                            <Target size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Stan</h3>
                                            <p className="text-sm text-slate-500">AI Lead Generator</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-slate-600 mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Finds and qualifies prospects automatically</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Sends personalized outreach at scale</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Nurtures leads through your pipeline</li>
                                    </ul>
                                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                                        <p className="text-sm font-bold text-orange-700">Generates 3x more qualified leads</p>
                                    </div>
                                </div>

                                {/* Seomi */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Seomi</h3>
                                            <p className="text-sm text-slate-500">AI SEO Specialist</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-slate-600 mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Writes and publishes SEO-optimized blog posts</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Optimizes your Google Business Profile</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Monitors rankings and competitor activity</li>
                                    </ul>
                                    <div className="bg-teal-50 p-3 rounded-lg text-center">
                                        <p className="text-sm font-bold text-teal-700">120% increase in organic traffic in 6 months</p>
                                    </div>
                                </div>

                                {/* Linda */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Linda</h3>
                                            <p className="text-sm text-slate-500">AI Legal Assistant</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-slate-600 mb-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Handles compliance documentation</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Reviews and drafts contracts</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />Monitors regulatory changes</li>
                                    </ul>
                                    <div className="bg-indigo-50 p-3 rounded-lg text-center">
                                        <p className="text-sm font-bold text-indigo-700">Saves $4,000+/month vs outside counsel</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: The Hybrid Workforce Model */}
                        <section id="hybrid-model" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Hybrid Workforce Model</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-primary-700 mb-4 flex items-center gap-2">
                                        <Bot className="w-5 h-5 text-primary-600" />
                                        Let AI Handle
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Repetitive email responses",
                                            "Social media posting",
                                            "Phone answering & lead qualification",
                                            "Data entry & CRM updates",
                                            "Blog writing & SEO",
                                            "Scheduling & calendar management"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-primary-700">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-slate-600" />
                                        Let Humans Handle
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Strategic decision-making",
                                            "Complex negotiations",
                                            "Creative direction",
                                            "Relationship building",
                                            "Crisis management",
                                            "High-stakes client interactions"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <span className="text-slate-400 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3">The 80/20 Rule</h4>
                                <p className="text-blue-700">
                                    AI handles the repetitive <strong>80% of work</strong>. Humans focus on the <strong>20%</strong> that requires judgment, creativity, and emotional intelligence. This isn't about replacing people — it's about freeing them to do their best work.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: How to Build Your AI Workforce */}
                        <section id="build-workforce" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Build Your AI Workforce</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Audit Your Operations",
                                        desc: "List every task in your business. Mark which ones are repetitive, time-consuming, and don't require human judgment."
                                    },
                                    {
                                        step: "2",
                                        title: "Start With Your Bottleneck",
                                        desc: "Which role would save you the most time or money? For most businesses, it's email (Eva) or calls (Rachel)."
                                    },
                                    {
                                        step: "3",
                                        title: "Onboard Your First AI Employee",
                                        desc: "Sign up for Dooza. Our concierge team configures your AI employee in a 30-minute call. They start working immediately."
                                    },
                                    {
                                        step: "4",
                                        title: "Redeploy Your Humans",
                                        desc: "As AI handles operational tasks, redirect your human team (or yourself) to high-value activities: sales, strategy, relationships."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build Your AI Workforce?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop spending months hiring. Get 6 AI employees working for your business in 30 minutes.
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

                        {/* Section 9: What AI Staffing Looks Like in Practice */}
                        <section id="scenarios" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What AI Staffing Looks Like in Practice</h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5" />
                                        Solo Consultant
                                    </h3>
                                    <p className="text-blue-700">
                                        You're a one-person shop. Eva handles your email. Somi posts to LinkedIn. Rachel answers calls. You just gained <strong>20 hours/week</strong> to serve clients.
                                    </p>
                                </div>

                                <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                                        <Users className="w-5 h-5" />
                                        Small Agency (5-10 people)
                                    </h3>
                                    <p className="text-purple-700">
                                        Your team is stretched thin. Seomi handles SEO for all client accounts. Stan generates leads. Linda reviews contracts. Your team focuses on <strong>creative and strategy</strong>.
                                    </p>
                                </div>

                                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        Local Service Business
                                    </h3>
                                    <p className="text-green-700">
                                        You run a plumbing company. Rachel captures emergency calls at 3 AM. Somi posts before/after photos. Eva follows up on quotes. You went from missing <strong>60% of calls</strong> to capturing <strong>100%</strong>.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link href="/blog/ai-tools-for-solopreneurs" className="text-primary-600 hover:underline font-medium inline-flex items-center gap-1">
                                    See our guide: 7 AI Tools Every Solopreneur Needs <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section className="scroll-mt-28">
                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl text-center">
                                <p className="text-2xl font-bold text-slate-900 mb-4">
                                    $29/month. 6 AI employees. 24/7. No interviews. No PTO. No turnover.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Hire Your AI Team <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Onboarding
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Hiring & Staffing Data</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.shrm.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SHRM — Cost per hire and time to fill</a></li>
                                        <li>• <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">BLS — Turnover statistics</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Market Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.nfib.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">NFIB — Small business hiring challenges</a></li>
                                        <li>• <a href="https://www.glassdoor.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Glassdoor — Salary benchmarks</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-staffing" category="AI Education" tags={['AI Staffing', 'AI Employees', 'Cost Comparison']} />
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
