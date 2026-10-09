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
    { question: "What is a virtual receptionist for small business?", answer: "A virtual receptionist answers your business calls remotely — greeting callers, taking messages, booking appointments, and routing urgent calls. Traditional services use human agents; AI virtual receptionists like Rachel do it with AI, 24/7." },
    { question: "How much does a virtual receptionist cost?", answer: "Traditional virtual receptionist services cost $250–$1,725/month for 50–500 minutes (Ruby) or $300–$2,100/month for 30–300 calls (Smith.ai), per their pricing pages (checked Oct 7, 2026). Dooza's AI receptionist Rachel answers calls 24/7; Dooza pricing depends on the product (see dooza.ai/pricing), and every product starts with a refundable pilot: 100% refund within 14 days." },
    { question: "Can an AI virtual receptionist handle real conversations?", answer: "Yes. Rachel uses natural language processing for multi-turn conversations — she asks qualifying questions, answers FAQs about your business, books appointments, and knows when to route calls to you directly." },
    { question: "Is an AI receptionist reliable for a small business?", answer: "For routine calls, yes. Rachel answers 24/7, including nights, weekends, and holidays, books appointments, takes messages, and hands urgent calls to you based on rules you set. Live answering services also run 24/7; they can be the better pick for complex or sensitive calls. Rachel answers in English only and is not a HIPAA service. The refundable pilot lets you test her on your real calls first." },
    { question: "How do I switch from my current answering service to AI?", answer: "Book a free 30-minute call to scope your pilot, and a Dooza engineer configures Rachel with your business info, FAQs, and calendar. Rachel is set up on your existing line with you during the pilot." }
];

export default function VirtualReceptionistSmallBusinessContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && /calendly\.com|cal\.com|\/book(\/|\?|$)/.test(url)) {
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
                            Live virtual receptionist plans start at $189–$300/month for a small allowance of minutes or calls, with overage billed on top. An AI receptionist answers 24/7 and starts with a refundable pilot — here's why small businesses are switching.
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
                                Start your pilot
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all"
                            >
                                <Calendar className="w-5 h-5" />
                                Book a free pilot call
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
                                    Start your pilot
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">100% refund within 14 days</p>
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
                                    If you're a small business owner, you already know the problem: the phone rings while you're with a client, on a job site, or just trying to eat lunch. You can't answer every call. So you hire a virtual receptionist service — Ruby, Smith.ai, PATLive — and suddenly you're paying $189–$810/month for a small plan, with every extra minute or call billed on top.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Here's the part that's easy to miss: those plans come with a fixed allowance. Every minute or call past it is billed extra, so on your busiest months the bill climbs with your call volume.
                                </p>

                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Voicemail Problem</h4>
                                            <p className="text-slate-700">
                                                <strong>Many calls to small businesses go unanswered</strong>, and <strong>most of those callers won't leave a voicemail</strong>. They call your competitor instead.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-lg leading-relaxed">
                                    There's another way. AI virtual receptionists answer every call, 24/7/365, and handle the routine ones (bookings, FAQs, messages) end to end. Here's how the two compare.
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
                                        cost: "$189–$2,100/mo",
                                        desc: "Appointment booking, call screening, and custom scripts. Fixed minute or call allowance, overage billed on top.",
                                        icon: Users
                                    },
                                    {
                                        title: "In-House Receptionist",
                                        cost: "Full-time salary",
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
                                        desc: "Per-minute billing grows with your call volume. Example: PATLive's 100-minute plan is $189/month and each extra minute is $2.09, so a 200-minute month costs about $398 (PATLive pricing page, checked Oct 7, 2026).",
                                        icon: DollarSign
                                    },
                                    {
                                        title: "Every Call Has a Price",
                                        desc: "Live services answer 24/7, but every minute or call counts against your plan. Busy evenings and weekends use up the allowance, so after-hours coverage costs as much as daytime coverage.",
                                        icon: Clock
                                    },
                                    {
                                        title: "Inconsistency",
                                        desc: "With a shared team of receptionists, the person who picks up can change from call to call, so callers may not get the same voice or someone who knows your repeat customers.",
                                        icon: Users
                                    },
                                    {
                                        title: "Slow Response",
                                        desc: "At peak times a live team is also answering other clients' calls, so callers can wait before a person picks up, and some hang up.",
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
                                    Live services answer 24/7, but you pay for every minute or call, and the bill grows with your call volume.
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
                                    { label: "Availability", traditional: "24/7 at most services, billed per minute or call", ai: "24/7/365 — nights, weekends, holidays" },
                                    { label: "Cost", traditional: "$189–$2,100/mo for a fixed allowance, plus overage", ai: "Pricing depends on the product (see /pricing); starts with a refundable pilot" },
                                    { label: "Consistency", traditional: "Shared team; the person answering can change", ai: "Same voice and same instructions on every call" },
                                    { label: "Peak times", traditional: "Callers can queue when the team is busy", ai: "Picks up every call, day or night" }
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
                                            { feature: "Monthly Cost", ruby: "$250–$1,725 (50–500 min)", smith: "$300–$2,100 (30–300 calls)", patlive: "$189–$479 (100–300 min)", rachel: "Refundable pilot (see /pricing)" },
                                            { feature: "Overage", ruby: "Not listed", smith: "$8.50–$11.50/call", patlive: "$1.89–$2.09/min", rachel: "See /pricing" },
                                            { feature: "Hours of Operation", ruby: "24/7", smith: "24/7", patlive: "24/7", rachel: "24/7/365" },
                                            { feature: "Who answers", ruby: "Live receptionists", smith: "Live receptionists", patlive: "Live receptionists (US)", rachel: "AI receptionist" }
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
                                <p className="text-xs text-slate-500 mt-2">Competitor prices from their own pricing pages (<a href="https://www.ruby.com/plans-and-pricing/" target="_blank" rel="noopener noreferrer" className="underline">Ruby</a>, <a href="https://smith.ai/pricing/receptionists" target="_blank" rel="noopener noreferrer" className="underline">Smith.ai</a>, <a href="https://www.patlive.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline">PATLive</a>), checked Oct 7, 2026.</p>
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
                                            Rachel answers your business calls the way your best employee would — but she never takes a break, never calls in sick, and starts with a refundable pilot. She's the virtual receptionist built for small businesses that can't afford to miss a single lead.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Pickup", desc: "Picks up every call, day or night, nights and weekends included. No hold music." },
                                    { icon: MessageSquare, title: "Natural Conversation", desc: "Multi-turn dialogue in natural English: answers questions, asks follow-ups, and takes details." },
                                    { icon: Target, title: "Lead Qualification", desc: "Custom screening questions to identify and score hot prospects automatically." },
                                    { icon: Calendar, title: "Appointment Booking", desc: "Checks your calendar and books meetings on the spot. No back-and-forth." },
                                    { icon: ArrowRight, title: "Smart Routing", desc: "Urgent calls forwarded to your cell based on rules you set. Routine calls handled end to end." },
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

                        </section>

                        {/* Section 7: Who Needs a Virtual Receptionist? */}
                        <section id="who-needs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Needs a Virtual Receptionist?</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        title: "Medical Practices",
                                        icon: Shield,
                                        pain: "Patients calling after hours to book or reschedule appointments.",
                                        solution: "Rachel takes appointment requests and answers general questions (hours, location) 24/7. She is not a HIPAA service, so clinical or patient-record calls belong with a HIPAA-covered service.",
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
                                        solution: "Rachel takes the job details and alerts you, so urgent jobs reach you instead of voicemail.",
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
                                    <div className="text-3xl font-bold text-red-600 mb-2">$3,000/yr</div>
                                    <p className="text-sm text-slate-700 font-medium">Ruby Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">$250/mo for 50 minutes (checked Oct 7, 2026)</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$3,600/yr</div>
                                    <p className="text-sm text-slate-700 font-medium">Smith.ai</p>
                                    <p className="text-xs text-slate-500 mt-1">$300/mo for 30 calls (checked Oct 7, 2026)</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">14-day</div>
                                    <p className="text-sm text-green-800 font-medium">Rachel (Dooza) refundable pilot</p>
                                    <p className="text-xs text-green-600 mt-1">100% refund within 14 days &middot; <a href="/pricing" className="underline">see pricing</a></p>
                                </div>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg text-center">What You Pay Today for Call Coverage</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Ruby Receptionist (50 minutes/mo)", value: "$3,000/year", highlight: false },
                                        { label: "Smith.ai (30 calls/mo)", value: "$3,600/year", highlight: false },
                                        { label: "In-House Receptionist", value: "Full-time salary + benefits", highlight: true }
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
                                    Test Rachel on your real calls first: every Dooza product starts with a refundable pilot — 100% refund within 14 days.
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
                                        title: "Start Your Pilot",
                                        desc: "Start with a refundable pilot — 100% refund within 14 days. Pricing depends on the product; see /pricing."
                                    },
                                    {
                                        step: "2",
                                        title: "Book a Free Pilot Call",
                                        desc: "On a free 30-minute call, a Dooza engineer scopes your pilot, then configures Rachel with your business info, FAQs, calendar, and which calls need a message for you. She is set up on your existing line with you during the pilot."
                                    },
                                    {
                                        step: "3",
                                        title: "Forward Your Calls",
                                        desc: "Rachel starts answering your forwarded calls. You get a summary after every call. Leads get booked."
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
                                    Stop missing calls you could have booked. Rachel answers every call, qualifies every lead, and books appointments — 24/7, starting with a refundable pilot.
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Virtual Receptionist Pricing</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.ruby.com/plans-and-pricing/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ruby Receptionist — Pricing page</a></li>
                                        <li>• <a href="https://smith.ai/pricing/receptionists" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Smith.ai — Virtual receptionist plans</a></li>
                                        <li>• <a href="https://www.patlive.com/pricing/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">PATLive — Answering service pricing</a></li>
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
