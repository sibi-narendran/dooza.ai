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
    Phone,
    MessageSquare,
    Rocket,
    Star,
    Building2,
    Heart,
    Home,
    Scale,
    Dumbbell,
    Scissors,
    PhoneCall,
    PhoneOff,
    CheckSquare
} from 'lucide-react';

const faqData = [
    {
        question: "How much does an AI receptionist cost?",
        answer: "Most AI receptionist platforms cost between $30 and $500 per month depending on call volume and features. Dooza's Rachel starts at $49/month with unlimited calls, lead qualification, appointment booking, and 24/7 coverage included \u2014 no per-minute fees or hidden charges. Compare that to $2,500-$4,000/month for a full-time human receptionist or $200-$1,000/month for a traditional answering service."
    },
    {
        question: "Can an AI receptionist book appointments?",
        answer: "Yes. Modern AI receptionists like Rachel integrate directly with your calendar (Google Calendar, Calendly, Acuity, and others) to check real-time availability and book appointments during the call. The caller gets an instant confirmation, and you get a notification with the booking details. No back-and-forth scheduling emails needed."
    },
    {
        question: "Will callers know they're talking to AI?",
        answer: "Today's AI receptionists sound remarkably natural \u2014 they handle interruptions, pauses, and follow-up questions conversationally. Some callers may suspect it's AI, but most won't care as long as their issue is resolved quickly. In surveys, 67% of consumers say they don't mind interacting with AI if it solves their problem faster than waiting on hold for a human."
    },
    {
        question: "How long does it take to set up an AI receptionist?",
        answer: "With Dooza, setup takes under 30 minutes. You provide your business information, FAQs, services, and calendar link. Rachel learns your business context and starts answering calls the same day. Dooza also offers free concierge onboarding \u2014 their team sets everything up for you if you'd rather not do it yourself."
    },
    {
        question: "What happens when the AI receptionist can't handle a call?",
        answer: "Rachel is designed to escalate gracefully. If a caller has a complex issue, an emergency, or specifically requests a human, Rachel transfers the call to your designated team member, sends you an urgent notification, or takes a detailed message with context so you can call back immediately. You stay in control of escalation rules."
    }
];

export default function AiReceptionistForSmallBusinessContent() {
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
            const sections = ['introduction', 'the-problem', 'what-is-ai-receptionist', 'does-it-work', 'comparison', 'best-fit', 'meet-rachel', 'setup', 'right-for-you', 'faq'];
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
                        { label: 'AI Receptionist for Small Business' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Phone size={16} />
                            <span>Honest Review</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Receptionist for Small Business &mdash; <span className="text-primary-600">Does It Actually Work?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            An AI receptionist answers calls 24/7, qualifies leads, and books appointments for $49/month. Here&apos;s what it actually does, what it can&apos;t do, and how to set one up today.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 28, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/8b212ff4-e6bf-4f4f-be40-b4ec50c79687.jpg"
                                alt="AI receptionist for small business \u2014 24/7 phone answering, lead qualification, and appointment booking"
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
                                Try Rachel AI &mdash; $1 Trial
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-200 hover:border-primary-400 transition-all"
                            >
                                Book Free Setup Call
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
                                    { id: 'the-problem', label: 'The Missed Call Problem' },
                                    { id: 'what-is-ai-receptionist', label: 'What Is an AI Receptionist?' },
                                    { id: 'does-it-work', label: 'Does It Actually Work?' },
                                    { id: 'comparison', label: 'The Comparison Table' },
                                    { id: 'best-fit', label: 'Best-Fit Businesses' },
                                    { id: 'meet-rachel', label: 'Meet Rachel' },
                                    { id: 'setup', label: 'Setup in 30 Minutes' },
                                    { id: 'right-for-you', label: 'Is This Right for You?' },
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
                                <p className="text-sm text-slate-600 mb-4">Never miss another call</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Rachel &mdash; $1 Trial
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="ai-receptionist-for-small-business" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Here&apos;s a stat that should make every small business owner uncomfortable: <strong>62% of callers who reach voicemail won&apos;t leave a message &mdash; and they won&apos;t call back</strong>. They&apos;ll call the next business on Google instead.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you run a small business, you already know this feeling. The phone rings while you&apos;re with a client, in a meeting, or eating lunch. You check later &mdash; missed call, no voicemail. That could have been a $3,000 project. A new patient. A listing appointment. Gone.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The traditional fix is hiring a receptionist for $2,500&ndash;$4,000/month, or paying an answering service that reads from a script and can&apos;t actually book appointments. Neither option is great for a business doing $300K&ndash;$2M in revenue.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That&apos;s why <strong>&ldquo;AI receptionist&rdquo;</strong> searches have exploded &mdash; up 247% year-over-year. Business owners are looking for something that actually picks up the phone, answers questions, and books appointments. Not a chatbot. Not a glorified voicemail. A receptionist that works 24/7 for under $50/month.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This post is an honest look at whether that&apos;s real or just marketing hype. I&apos;ll show you exactly what an AI receptionist can do, what it can&apos;t, and how to set one up in 30 minutes if it&apos;s the right fit.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: The Missed Call Problem */}
                        <section id="the-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <PhoneOff className="w-8 h-8 text-red-600" />
                                The Missed Call Problem Nobody Talks About
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let&apos;s do some quick math. Say you miss 5 calls a week. That&apos;s conservative &mdash; most small businesses miss 10&ndash;15. Of those 5, at least 2&ndash;3 are potential customers (the rest are spam or existing clients who&apos;ll call back).
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-red-600" />
                                    The Cost of Missed Calls &mdash; Quick Math
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border border-red-100">
                                        <p className="text-sm text-slate-500 mb-1">Missed calls per week</p>
                                        <p className="text-2xl font-bold text-red-600">5&ndash;15</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-red-100">
                                        <p className="text-sm text-slate-500 mb-1">Potential leads lost (monthly)</p>
                                        <p className="text-2xl font-bold text-red-600">8&ndash;12</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-red-100">
                                        <p className="text-sm text-slate-500 mb-1">Average job value</p>
                                        <p className="text-2xl font-bold text-slate-900">$500&ndash;$5,000</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-red-100">
                                        <p className="text-sm text-slate-500 mb-1">Revenue lost per month</p>
                                        <p className="text-2xl font-bold text-red-600">$4,000&ndash;$60,000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    And here&apos;s the part that stings: <strong>78% of customers buy from the first business that responds</strong> (Harvard Business Review). Not the cheapest. Not the best-reviewed. The <em>first one that picks up the phone</em>.
                                </p>
                                <p>
                                    Your competitor doesn&apos;t need to be better than you. They just need to answer faster.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The After-Hours Gap</h4>
                                        <p className="text-slate-700 text-sm">
                                            <strong>35% of all business calls come outside standard hours</strong> &mdash; evenings, weekends, and holidays. If you&apos;re a dental office that closes at 5 PM, you&apos;re missing every patient who calls after dinner with a toothache. If you&apos;re a plumber, you&apos;re missing every burst-pipe emergency at 11 PM. Those callers aren&apos;t waiting until morning. They&apos;re calling someone else.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Is an AI Receptionist? */}
                        <section id="what-is-ai-receptionist" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Bot className="w-8 h-8 text-primary-600" />
                                What Is an AI Receptionist, Exactly?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI receptionist is a voice-powered AI agent that answers your business phone line, has a real conversation with the caller, and takes action &mdash; booking appointments, answering FAQs, qualifying leads, and routing urgent calls to the right person.
                                </p>
                                <p>
                                    It&apos;s not an IVR (&ldquo;press 1 for sales, press 2 for support&rdquo;). It&apos;s not a chatbot pasted onto your website. It&apos;s an AI that speaks naturally, understands context, and handles calls the way a trained receptionist would &mdash; except it works 24 hours a day, 7 days a week, and never calls in sick.
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8">
                                <div className="p-5 bg-slate-50 border-b border-slate-200">
                                    <h3 className="font-bold text-slate-900">What a Good AI Receptionist Actually Does</h3>
                                </div>
                                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                                    <div className="p-5">
                                        <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" />
                                            It Can
                                        </h4>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Answer calls in under 2 rings, 24/7</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Greet callers by business name</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Answer FAQs (hours, pricing, services)</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Book appointments on your calendar</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Qualify leads (budget, timeline, needs)</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Route urgent calls to your cell</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Send call summaries to your email/Slack</li>
                                            <li className="flex items-start gap-2"><span className="text-green-400 mt-1">&#x2022;</span>Handle multiple calls simultaneously</li>
                                        </ul>
                                    </div>
                                    <div className="p-5">
                                        <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                                            <XCircle className="w-5 h-5" />
                                            It Can&apos;t (Yet)
                                        </h4>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Handle deeply emotional conversations</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Negotiate complex deals on the spot</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Process payments over the phone</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Replace a human for VIP client relationships</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Handle completely unpredictable scenarios</li>
                                            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">&#x2022;</span>Provide medical/legal advice</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The honest take: an AI receptionist handles <strong>80&ndash;90% of inbound calls</strong> without any human involvement. The remaining 10&ndash;20% get escalated to you with full context. That&apos;s not a limitation &mdash; that&apos;s exactly how a well-run front desk works. Even human receptionists escalate complex issues to the business owner.
                                </p>
                            </div>
                        </section>

                        {/* YouTube Embed Section */}
                        <section className="scroll-mt-28">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/GCDkKddYSuI"
                                        title="Watch: AI receptionist handling real inbound business calls"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="px-4 py-3 text-sm text-slate-500 text-center">
                                    Watch: AI receptionists handling real inbound business calls &mdash; ranked and tested.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: Does It Actually Work? */}
                        <section id="does-it-work" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Shield className="w-8 h-8 text-green-600" />
                                Does It Actually Work?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Short answer: <strong>yes, for most small business use cases</strong>. Here&apos;s the longer, more honest answer.
                                </p>
                                <p>
                                    AI voice technology in 2026 is genuinely good. The robotic, stilted phone bots from a few years ago are gone. Modern AI receptionists use large language models that understand context, handle interruptions, and respond naturally. Callers occasionally notice it&apos;s AI, but most don&apos;t care &mdash; they care about getting their question answered or their appointment booked.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        scenario: "Caller asks about pricing and availability",
                                        result: "Handles flawlessly. This is bread-and-butter territory.",
                                        rating: "Excellent"
                                    },
                                    {
                                        scenario: "Caller wants to book an appointment for next Tuesday",
                                        result: "Checks your calendar, confirms the slot, books it. Sends confirmation to both parties.",
                                        rating: "Excellent"
                                    },
                                    {
                                        scenario: "Caller has a complex, multi-part question",
                                        result: "Handles most of it. If it gets too specific or outside its knowledge, it takes a message and escalates.",
                                        rating: "Good"
                                    },
                                    {
                                        scenario: "Caller is upset and wants to speak to the owner",
                                        result: "Acknowledges their frustration, attempts to help, and transfers to your cell if needed.",
                                        rating: "Good"
                                    },
                                    {
                                        scenario: "Caller speaks with a heavy accent or in a noisy environment",
                                        result: "Occasionally struggles. May ask caller to repeat. Accuracy varies by platform.",
                                        rating: "Fair"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-bold text-slate-900 text-sm">{item.scenario}</h3>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ml-3 ${
                                                item.rating === 'Excellent' ? 'bg-green-100 text-green-700' :
                                                item.rating === 'Good' ? 'bg-blue-100 text-blue-700' :
                                                'bg-amber-100 text-amber-700'
                                            }`}>{item.rating}</span>
                                        </div>
                                        <p className="text-sm text-slate-600">{item.result}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Star className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Bottom Line</h4>
                                        <p className="text-slate-700 text-sm">
                                            An AI receptionist isn&apos;t perfect. But neither is a human receptionist who calls in sick, takes lunch breaks, and goes home at 5 PM. The question isn&apos;t &ldquo;is it as good as the best human receptionist on their best day?&rdquo; It&apos;s &ldquo;is it better than a missed call?&rdquo; The answer is always yes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Comparison Table */}
                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-primary-600" />
                                The Blunt Comparison: Your Real Options
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let&apos;s cut through the noise. Here&apos;s what you&apos;re actually choosing between:
                                </p>
                            </div>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="text-left p-4 border border-slate-200 font-semibold text-slate-700"></th>
                                            <th className="text-center p-4 border border-slate-200 font-semibold text-slate-700">Human Receptionist</th>
                                            <th className="text-center p-4 border border-slate-200 font-semibold text-slate-700">Answering Service</th>
                                            <th className="text-center p-4 border border-slate-200 font-semibold text-primary-700 bg-primary-50">Rachel (Dooza)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { label: 'Monthly Cost', human: '$2,500\u2013$4,000', service: '$200\u2013$1,000', rachel: '$49/mo flat' },
                                            { label: 'Hours', human: '40 hrs/week', service: '24/7 (often)', rachel: '24/7/365' },
                                            { label: 'Books Appointments', human: 'Yes', service: 'Rarely', rachel: 'Yes \u2014 real-time' },
                                            { label: 'Qualifies Leads', human: 'If trained', service: 'No', rachel: 'Yes \u2014 custom criteria' },
                                            { label: 'Sick Days', human: '~8/year', service: 'N/A', rachel: 'Never' },
                                            { label: 'Simultaneous Calls', human: '1 at a time', service: 'Depends on plan', rachel: 'Unlimited' },
                                            { label: 'Setup Time', human: '2\u20134 weeks', service: '3\u20135 days', rachel: '30 minutes' },
                                            { label: 'Knows Your Business', human: 'Over time', service: 'Script only', rachel: 'Day 1 \u2014 trained on your data' },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                                                <td className="p-4 border border-slate-200 font-medium text-slate-900">{row.label}</td>
                                                <td className="p-4 border border-slate-200 text-center text-slate-600">{row.human}</td>
                                                <td className="p-4 border border-slate-200 text-center text-slate-600">{row.service}</td>
                                                <td className="p-4 border border-slate-200 text-center font-medium text-primary-700 bg-primary-50/50">{row.rachel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The math isn&apos;t subtle. A human receptionist costs <strong>50&ndash;80x more</strong> than Rachel. An answering service costs 4&ndash;20x more and can&apos;t book appointments or qualify leads. Rachel isn&apos;t the cheap option &mdash; she&apos;s the <em>better</em> option for most small businesses.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Best-Fit Businesses */}
                        <section id="best-fit" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Building2 className="w-8 h-8 text-violet-600" />
                                Best-Fit Businesses for an AI Receptionist
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI receptionist isn&apos;t for every business. It&apos;s best for businesses where <strong>inbound calls = revenue</strong> and missed calls = lost money. Here are the industries seeing the biggest impact:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        icon: Heart,
                                        name: "Dental Clinics & Medical Offices",
                                        desc: "Patients call to book cleanings, ask about insurance, and report emergencies \u2014 Rachel handles all three and books directly into your practice management calendar.",
                                        color: "text-red-600",
                                        bg: "bg-red-50"
                                    },
                                    {
                                        icon: Scale,
                                        name: "Law Firms",
                                        desc: "79% of potential clients hire whichever firm responds first. Rachel qualifies intake calls (case type, timeline, jurisdiction) and books consultations before the caller tries your competitor.",
                                        color: "text-indigo-600",
                                        bg: "bg-indigo-50"
                                    },
                                    {
                                        icon: Home,
                                        name: "Home Services (HVAC, Plumbing, Electrical)",
                                        desc: "Emergency calls at 2 AM are your highest-value leads. Rachel answers instantly, captures the issue, and dispatches or books the next available slot.",
                                        color: "text-orange-600",
                                        bg: "bg-orange-50"
                                    },
                                    {
                                        icon: Building2,
                                        name: "Real Estate Agents & Brokerages",
                                        desc: "Sign calls and listing inquiries die fast. Rachel captures buyer/seller details, answers property questions from your listing data, and books showings on the spot.",
                                        color: "text-blue-600",
                                        bg: "bg-blue-50"
                                    },
                                    {
                                        icon: Dumbbell,
                                        name: "Fitness Studios & Gyms",
                                        desc: "New member inquiries spike after New Year\u2019s, summer, and during ad campaigns \u2014 exactly when your front desk is busiest. Rachel handles overflow and after-hours calls without missing a lead.",
                                        color: "text-green-600",
                                        bg: "bg-green-50"
                                    },
                                    {
                                        icon: Scissors,
                                        name: "Salons & Spas",
                                        desc: "Stylists can\u2019t answer the phone while they\u2019re with a client. Rachel books appointments, answers pricing questions, and manages cancellations \u2014 so your team stays focused on the chair.",
                                        color: "text-pink-600",
                                        bg: "bg-pink-50"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.bg} border border-slate-100 p-5 rounded-xl`}>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white shadow-sm">
                                                <item.icon className={`w-5 h-5 ${item.color}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">{item.name}</h3>
                                                <p className="text-sm text-slate-700">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7: Meet Rachel */}
                        <section id="meet-rachel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <PhoneCall className="w-8 h-8 text-primary-600" />
                                Meet Rachel &mdash; Dooza&apos;s AI Receptionist
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Rachel is one of Dooza&apos;s 6 <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">AI employees</Link>. She&apos;s purpose-built for phone reception &mdash; not a general-purpose chatbot repurposed for voice. Here&apos;s what makes her different:
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-200 rounded-xl overflow-hidden mb-8">
                                <div className="p-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: Phone, title: "Answers Every Call", desc: "24/7/365 \u2014 no hold music, no voicemail, no missed opportunities" },
                                            { icon: Calendar, title: "Books Appointments", desc: "Integrates with your calendar to book in real-time during the call" },
                                            { icon: Users, title: "Qualifies Leads", desc: "Asks your custom questions (budget, timeline, needs) before booking" },
                                            { icon: MessageSquare, title: "Handles FAQs", desc: "Trained on your business \u2014 hours, pricing, services, policies" },
                                            { icon: Zap, title: "Escalates Smartly", desc: "Transfers urgent calls, sends detailed summaries for non-urgent ones" },
                                            { icon: Shield, title: "No Per-Minute Fees", desc: "$49/month flat \u2014 unlimited calls, unlimited minutes" },
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-white p-4 rounded-lg border border-primary-100">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                                        <item.icon className="w-4 h-4 text-primary-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                                                        <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Rachel comes bundled with every Dooza plan &mdash; alongside Maily (email), Somi (social media), Ranky (SEO), Stan (sales), and Linda (legal). You&apos;re not just getting a phone bot. You&apos;re getting a full AI team for <strong>$49/month</strong>.
                                </p>
                                <p>
                                    And no, you don&apos;t need to be technical. Dooza offers <strong>free concierge onboarding</strong> &mdash; their team will set Rachel up for your business, configure your FAQs, connect your calendar, and test everything before going live.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Setup */}
                        <section id="setup" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Rocket className="w-8 h-8 text-violet-600" />
                                Set Up Your AI Receptionist in 30 Minutes
                            </h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up for Dooza",
                                        desc: "Start with the $1 for 7-day trial. No commitment, full access to all AI employees including Rachel.",
                                        time: "2 min"
                                    },
                                    {
                                        step: "2",
                                        title: "Add Your Business Info",
                                        desc: "Business name, services, hours, pricing, FAQs \u2014 everything Rachel needs to answer calls intelligently.",
                                        time: "10 min"
                                    },
                                    {
                                        step: "3",
                                        title: "Connect Your Calendar",
                                        desc: "Link Google Calendar, Calendly, or Acuity so Rachel can check availability and book appointments in real-time.",
                                        time: "3 min"
                                    },
                                    {
                                        step: "4",
                                        title: "Set Escalation Rules",
                                        desc: "Define what counts as urgent (emergencies, VIP clients) and where those calls should be routed.",
                                        time: "5 min"
                                    },
                                    {
                                        step: "5",
                                        title: "Forward Your Business Line",
                                        desc: "Set up call forwarding from your existing business number to Rachel. Your number doesn\u2019t change \u2014 callers won\u2019t notice anything different.",
                                        time: "5 min"
                                    },
                                    {
                                        step: "6",
                                        title: "Test and Go Live",
                                        desc: "Call your own number, run through common scenarios, tweak responses if needed. You\u2019re live.",
                                        time: "5 min"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                                                {item.step}
                                            </div>
                                            {idx < 5 && <div className="w-0.5 h-full bg-violet-200 mt-2" />}
                                        </div>
                                        <div className="pb-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                                                <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-medium">{item.time}</span>
                                            </div>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Don&apos;t Want to Set It Up Yourself?</h4>
                                        <p className="text-slate-700 text-sm">
                                            Dooza&apos;s onboarding team will do the entire setup for you &mdash; free of charge. <a href={CAL_BOOKING_URL} onClick={handleAction} className="text-primary-600 hover:underline font-medium">Book a free concierge setup call</a> and have Rachel answering your calls by end of day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 9: Is This Right for You? */}
                        <section id="right-for-you" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <CheckSquare className="w-8 h-8 text-green-600" />
                                Is an AI Receptionist Right for You?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Be honest with yourself. Check the ones that apply:
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
                                <div className="space-y-4">
                                    {[
                                        "You miss calls regularly because you\u2019re busy with clients or on the job",
                                        "You can\u2019t justify $2,500+/month for a full-time receptionist",
                                        "You get calls after hours that go straight to voicemail (and nowhere else)",
                                        "You know you\u2019re losing leads but don\u2019t have a system to capture them",
                                        "You want to book more appointments without hiring more staff"
                                    ].map((item, idx) => (
                                        <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                                            <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                                            <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                                        </label>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-200">
                                    <p className="text-sm text-slate-600">
                                        <strong>If you checked 2 or more</strong>, an AI receptionist will likely pay for itself in the first week. One captured lead that would have been a missed call covers months of the subscription.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Before FAQ */}
                        <section className="scroll-mt-28">
                            <div className="bg-gradient-to-br from-primary-600 to-violet-700 text-white p-8 md:p-10 rounded-2xl text-center">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Stop Losing Leads to Voicemail
                                </h3>
                                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                    Rachel answers every call, books appointments, and qualifies leads &mdash; 24/7, for $49/month. Start with a $1 trial and see for yourself.
                                </p>

                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-xl mx-auto text-left">
                                    {[
                                        { icon: Phone, text: "24/7 call answering" },
                                        { icon: DollarSign, text: "$49/month flat rate" },
                                        { icon: Calendar, text: "Real-time booking" },
                                        { icon: Users, text: "Lead qualification" },
                                        { icon: Zap, text: "30-minute setup" },
                                        { icon: Shield, text: "Free concierge onboarding" }
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
                                        Start $1 Trial &mdash; Try Rachel Free
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={CAL_BOOKING_URL}
                                        onClick={handleAction}
                                        className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/60 transition-all"
                                    >
                                        Book Free Setup Call
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

            <RelatedPosts category="AI Receptionist" tags={['AI Receptionist', 'AI Employees', 'Small Business', 'Phone Answering']} currentSlug="ai-receptionist-for-small-business" />
            <BottomCTA />
            <Footer />

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
