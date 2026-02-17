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
    DollarSign,
    Bot,
    Zap,
    Mail,
    Phone,
    Users,
    TrendingUp,
    AlertTriangle,
    MessageSquare,
    FileText,
    Target,
    BarChart3,
    Shield,
    Building2,
    Scissors,
    ShoppingCart
} from 'lucide-react';

const faqData = [
    { question: "What is a virtual receptionist for small business?", answer: "A virtual receptionist answers your business calls remotely — greeting callers, taking messages, booking appointments, and routing urgent calls. Traditional services use human agents; AI virtual receptionists like Rachel do it with AI for a fraction of the cost." },
    { question: "How much does a virtual receptionist cost?", answer: "Traditional virtual receptionist services cost $230–$1,640/month (Ruby) or $255–$1,500/month (Smith.ai) depending on call volume. Dooza's AI receptionist Rachel costs $29/month with unlimited calls, 24/7." },
    { question: "Can an AI virtual receptionist handle real conversations?", answer: "Yes. Rachel uses natural language processing for multi-turn conversations — she asks qualifying questions, answers FAQs about your business, books appointments, and knows when to route calls to you directly." },
    { question: "Is an AI receptionist reliable for a small business?", answer: "More reliable than human services. Rachel answers every call in under 1 second, never calls in sick, and works nights, weekends, and holidays. She handles the calls that human virtual receptionists miss after-hours." },
    { question: "How do I switch from my current answering service to AI?", answer: "Sign up for Dooza ($29/month), book a free 30-minute onboarding call, and our team configures Rachel with your business info, FAQs, and calendar. Most businesses switch in a single day." }
];

export default function VirtualReceptionistSmallBusinessContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    const sections = ['introduction', 'what-is-virtual-receptionist', 'traditional-problems', 'ai-virtual-receptionist', 'comparison', 'meet-rachel', 'who-needs', 'cost-breakdown', 'getting-started', 'faq'];

    useEffect(() => {
        const handleScroll = () => {
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
            <div className="bg-gradient-to-br from-red-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Virtual Receptionist for Small Business' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Phone size={16} />
                            <span>Virtual Receptionist</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Virtual Receptionist for <span className="text-primary-600">Small Business</span>: Why AI Beats Traditional Services
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Traditional virtual receptionists cost $300–$900/month and still miss after-hours calls. An AI receptionist answers 24/7 for $29/month — here's why small businesses are switching.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                <span>Small Business</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Get Rachel AI — $29/mo
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all"
                            >
                                <Calendar className="w-5 h-5" />
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
                                    { id: 'introduction', label: 'The Problem' },
                                    { id: 'what-is-virtual-receptionist', label: 'What Is a Virtual Receptionist?' },
                                    { id: 'traditional-problems', label: 'Problems with Traditional' },
                                    { id: 'ai-virtual-receptionist', label: 'AI Virtual Receptionist' },
                                    { id: 'comparison', label: 'Head-to-Head Comparison' },
                                    { id: 'meet-rachel', label: 'Meet Rachel' },
                                    { id: 'who-needs', label: 'Who Needs This?' },
                                    { id: 'cost-breakdown', label: 'The Real Math' },
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
                                <p className="text-sm text-slate-600 mb-4">Replace your answering service</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Rachel Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="virtual-receptionist-for-small-business" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction (The Problem) */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You started your business to do what you love — not to answer phones. But every missed call is a missed customer.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you're a small business owner, you already know the problem: the phone rings while you're with a client, on a job site, or just trying to eat lunch. You can't answer every call. So you hire a virtual receptionist service — Ruby, Smith.ai, PATLive — and suddenly you're paying $300–$900/month for someone to answer your phone during business hours.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But here's the part they don't tell you: those services still send callers to voicemail after 8 PM. They still charge per-minute overages. And on your busiest months, that "affordable" plan quietly doubles.
                                </p>

                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Numbers Don't Lie</h4>
                                            <p className="text-slate-700">
                                                <strong>62%</strong> of calls to small businesses go unanswered (Forbes), and <strong>85%</strong> of those callers won't leave a voicemail. They call your competitor instead.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-lg leading-relaxed">
                                    There's a better way. AI virtual receptionists answer every call, 24/7/365, for a flat $29/month. No per-minute billing. No after-hours gaps. No hold queues. Here's why small businesses are making the switch.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is a Virtual Receptionist? */}
                        <section id="what-is-virtual-receptionist" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is a Virtual Receptionist?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    A virtual receptionist is a remote professional who answers your business phone calls. Instead of hiring a full-time, in-house receptionist, you outsource call handling to a service that greets callers, takes messages, books appointments, and routes urgent calls — all without sitting in your office.
                                </p>
                                <p>
                                    Traditional virtual receptionist services work by maintaining a pool of human agents who follow scripts you provide. When a call comes in, the next available agent picks up, identifies your business, and handles the caller based on your instructions. You pay monthly, usually with per-minute billing for any time over your plan limit.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        title: "Answering Service",
                                        cost: "$100–$300/mo",
                                        desc: "Basic message taking and call forwarding. No appointment booking or lead qualification.",
                                        icon: Phone
                                    },
                                    {
                                        title: "Virtual Receptionist",
                                        cost: "$300–$900/mo",
                                        desc: "Appointment booking, call screening, and custom scripts. Limited hours, per-minute overages.",
                                        icon: Users
                                    },
                                    {
                                        title: "In-House Receptionist",
                                        cost: "$3,500+/mo",
                                        desc: "Full-time, dedicated. But a single point of failure — sick days, vacations, lunch breaks.",
                                        icon: Building2
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-sm font-semibold text-primary-600 mb-2">{item.cost}</p>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3: Problems with Traditional Virtual Receptionists */}
                        <section id="traditional-problems" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Problems with Traditional Virtual Receptionists</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    {
                                        title: "Cost Creep",
                                        desc: "Per-minute billing means your $230/month plan becomes $500+ on busy months. One unexpected spike and your phone bill rivals a part-time salary.",
                                        icon: DollarSign
                                    },
                                    {
                                        title: "Limited Hours",
                                        desc: "Most services operate 8am–8pm. After-hours calls — the ones from urgent leads and emergencies — go straight to voicemail.",
                                        icon: Clock
                                    },
                                    {
                                        title: "Inconsistency",
                                        desc: "A different agent answers every time. Callers never build rapport with your business. Your \"receptionist\" doesn't know your repeat customers.",
                                        icon: Users
                                    },
                                    {
                                        title: "Slow Response",
                                        desc: "Peak hours mean hold queues. 15–30 second wait times before a human picks up. In that time, impatient callers have already hung up.",
                                        icon: AlertTriangle
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-700">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                <p className="text-slate-800 font-medium text-center">
                                    You're paying $300–$900/month for a receptionist that still sends callers to voicemail after 8 PM.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: What Is an AI Virtual Receptionist? */}
                        <section id="ai-virtual-receptionist" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is an AI Virtual Receptionist?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI virtual receptionist is software that handles phone conversations naturally — greeting callers, answering questions, qualifying leads, booking appointments, and routing urgent calls. It doesn't use a script pool of human agents. It uses natural language processing to have real, dynamic conversations.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { label: "Availability", traditional: "Business hours (8am–8pm)", ai: "24/7/365 — nights, weekends, holidays" },
                                    { label: "Cost", traditional: "$300–$900/mo + per-minute overages", ai: "Flat $29/mo — unlimited calls" },
                                    { label: "Consistency", traditional: "Different agent each call", ai: "Same voice, same quality, every call" },
                                    { label: "Speed", traditional: "15–30 second hold time", ai: "Answers in under 1 second" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                        <h4 className="font-bold text-slate-900 mb-3">{item.label}</h4>
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                <span className="text-sm text-slate-600">{item.traditional}</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                <span className="text-sm text-slate-700 font-medium">{item.ai}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                    <p className="text-slate-800 font-medium">
                                        An AI receptionist isn't a chatbot. It's a phone agent that speaks, listens, and responds naturally — handling real conversations the way a trained receptionist would.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Head-to-Head Comparison Table */}
                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Head-to-Head: Traditional vs AI Virtual Receptionist</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Ruby</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Smith.ai</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">PATLive</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Rachel (AI)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Monthly Cost", ruby: "$230–$1,640", smith: "$255–$1,500", patlive: "$235–$1,110", rachel: "$29" },
                                            { feature: "Per-Minute Overage", ruby: "$1.75–$2.20/min", smith: "$7–$9/call", patlive: "$1.63–$2.19/min", rachel: "None — unlimited" },
                                            { feature: "Hours of Operation", ruby: "Mon–Fri 5am–9pm PT", smith: "Mon–Fri 6am–6pm PT", patlive: "24/7 (premium plan)", rachel: "24/7/365" },
                                            { feature: "Appointment Booking", ruby: "Yes (extra cost)", smith: "Yes (extra cost)", patlive: "Basic", rachel: "Included" },
                                            { feature: "Lead Qualification", ruby: "Basic scripting", smith: "Intake forms", patlive: "Basic scripting", rachel: "Custom AI questions" },
                                            { feature: "Call Summaries", ruby: "Basic notes", smith: "Email summaries", patlive: "Basic notes", rachel: "Detailed AI summaries" },
                                            { feature: "Setup Time", ruby: "1–2 weeks", smith: "3–5 days", patlive: "1–2 weeks", rachel: "30 minutes" },
                                            { feature: "Languages", ruby: "English, Spanish", smith: "English, Spanish", patlive: "English, Spanish", rachel: "English, Spanish, and more" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.ruby}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.smith}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.patlive}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.rachel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 6: Meet Rachel */}
                        <section id="meet-rachel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Rachel — Your AI Virtual Receptionist</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Phone size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Rachel — AI Receptionist by Dooza</h3>
                                        <p className="text-lg text-slate-700">
                                            Rachel answers your business calls the way your best employee would — but she never takes a break, never calls in sick, and costs less than your daily coffee. She's the virtual receptionist built for small businesses that can't afford to miss a single lead.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Pickup", desc: "Answers in under 1 second. No hold music. No rings. No wait." },
                                    { icon: MessageSquare, title: "Natural Conversation", desc: "Multi-turn dialogue that callers can't distinguish from a human receptionist." },
                                    { icon: Target, title: "Lead Qualification", desc: "Custom screening questions to identify and score hot prospects automatically." },
                                    { icon: Calendar, title: "Appointment Booking", desc: "Checks your calendar and books meetings on the spot. No back-and-forth." },
                                    { icon: ArrowRight, title: "Smart Routing", desc: "Urgent calls forwarded to your cell instantly. Everything else handled autonomously." },
                                    { icon: Clock, title: "After-Hours Coverage", desc: "Nights, weekends, holidays — Rachel never goes home. Your business is always open." }
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
                                <p className="text-slate-700 italic text-center">
                                    "Since switching to Rachel, we haven't missed a single lead. She books consultations while we're on-site with clients — even at 10 PM on a Saturday."
                                </p>
                                <p className="text-sm text-primary-600 font-medium text-center mt-2">— Interio Square, Interior Design Firm</p>
                            </div>
                        </section>

                        {/* Section 7: Who Needs a Virtual Receptionist? */}
                        <section id="who-needs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Needs a Virtual Receptionist?</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        title: "Medical Practices",
                                        icon: Shield,
                                        pain: "Patients calling after hours for appointments and prescription refills.",
                                        solution: "Rachel books appointments and handles routine inquiries 24/7.",
                                        link: { href: "/blog/seo-for-doctors-dentists", label: "Guide for medical practices" }
                                    },
                                    {
                                        title: "Real Estate Agents",
                                        icon: TrendingUp,
                                        pain: "Buyer leads call at 2 AM after browsing listings. You can't answer.",
                                        solution: "Rachel qualifies prospects and schedules showings automatically.",
                                        link: { href: "/blog/ai-for-real-estate-agents", label: "Guide for real estate agents" }
                                    },
                                    {
                                        title: "Home Services",
                                        icon: Phone,
                                        pain: "Emergency plumbing, HVAC, or electrical calls at midnight go to voicemail.",
                                        solution: "Rachel books emergency jobs instantly. No more lost revenue.",
                                        link: null
                                    },
                                    {
                                        title: "Legal Firms",
                                        icon: FileText,
                                        pain: "Potential clients call during court appearances and depositions.",
                                        solution: "Rachel screens callers, collects case details, and schedules consultations.",
                                        link: null
                                    },
                                    {
                                        title: "Salons & Spas",
                                        icon: Scissors,
                                        pain: "Staff too busy with clients to answer the phone for bookings.",
                                        solution: "Rachel books appointments while your team focuses on the customer in the chair.",
                                        link: null
                                    },
                                    {
                                        title: "E-commerce",
                                        icon: ShoppingCart,
                                        pain: "Product questions and order status calls overwhelming a small team.",
                                        solution: "Rachel handles inquiries instantly without a call center.",
                                        link: null
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-sm text-red-600 mb-1"><strong>Pain:</strong> {item.pain}</p>
                                        <p className="text-sm text-green-700 mb-3"><strong>Solution:</strong> {item.solution}</p>
                                        {item.link && (
                                            <Link href={item.link.href} className="text-sm text-primary-600 hover:underline font-medium">
                                                {item.link.label} &rarr;
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8: The Real Math */}
                        <section id="cost-breakdown" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Math: Traditional vs AI</h2>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$3,708/yr</div>
                                    <p className="text-sm text-slate-700 font-medium">Ruby Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">$309/mo for 50 calls</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$3,060/yr</div>
                                    <p className="text-sm text-slate-700 font-medium">Smith.ai</p>
                                    <p className="text-xs text-slate-500 mt-1">$255/mo for 30 calls</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$348/yr</div>
                                    <p className="text-sm text-green-800 font-medium">Rachel (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">$29/mo — unlimited calls, 24/7</p>
                                </div>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg text-center">Annual Savings by Switching to Rachel</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "vs Ruby Receptionist", value: "$3,360/year saved", highlight: false },
                                        { label: "vs Smith.ai", value: "$2,712/year saved", highlight: false },
                                        { label: "vs In-House Receptionist", value: "$41,652/year saved", highlight: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-2 px-4 rounded-lg ${item.highlight ? 'bg-primary-100 font-bold text-primary-800' : 'bg-white'}`}>
                                            <span className="text-slate-700">{item.label}</span>
                                            <span className={item.highlight ? 'text-primary-800 text-xl' : 'text-slate-900 font-medium'}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <p className="text-green-800 font-bold text-center text-lg">
                                    That's $2,712–$3,360 per year back in your pocket — enough to fund your entire marketing budget.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Started in 3 Steps</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up for Dooza",
                                        desc: "$29/month. 7-day money-back guarantee. No long-term contract."
                                    },
                                    {
                                        step: "2",
                                        title: "Book Your Free Onboarding Call",
                                        desc: "Our team configures Rachel with your business info, FAQs, calendar, and call routing preferences in 30 minutes."
                                    },
                                    {
                                        step: "3",
                                        title: "Forward Your Calls",
                                        desc: "Rachel starts answering immediately. You get detailed summaries after every call. Leads get booked. Revenue goes up."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Replace Your Answering Service?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop overpaying for limited-hour receptionists. Rachel answers every call, qualifies every lead, and books appointments — 24/7, for less than the cost of your cheapest plan.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start Free Trial <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Onboarding
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Section 10: FAQ */}
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Call & Voicemail Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Forbes — SMB missed calls statistics</a></li>
                                        <li>• <a href="https://www.att.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">AT&T Research — Voicemail statistics</a></li>
                                        <li>• <a href="https://www.consumerreports.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Consumer Reports — Caller behavior research</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Virtual Receptionist Pricing</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.ruby.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ruby Receptionist — Pricing page</a></li>
                                        <li>• <a href="https://smith.ai/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Smith.ai — Virtual receptionist plans</a></li>
                                        <li>• <a href="https://www.patlive.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">PATLive — Answering service pricing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="virtual-receptionist-for-small-business" category="Small Business" tags={['Virtual Receptionist', 'AI Receptionist', 'Small Business']} />
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
