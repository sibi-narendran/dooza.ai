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
    MessageSquare,
    FileText,
    Target,
    BarChart3,
    Shield
} from 'lucide-react';

const faqData = [
    {
        question: "What is an AI receptionist?",
        answer: "An AI receptionist is software that answers your business phone calls using natural language AI. It greets callers, answers common questions, qualifies leads, books appointments, and routes urgent calls — 24/7, without human intervention."
    },
    {
        question: "How much does an AI receptionist cost compared to a human?",
        answer: "A human receptionist costs a salary plus benefits. Virtual receptionist services start at $250/month for 50 minutes (Ruby) or $300/month for 30 calls (Smith.ai), checked Oct 7, 2026. Dooza's Rachel (AI Receptionist) answers calls 24/7. See dooza.ai/pricing; every Dooza product starts with a refundable pilot (100% refund within 14 days)."
    },
    {
        question: "Can an AI receptionist handle complex conversations?",
        answer: "Modern AI receptionists like Rachel use natural language processing to handle multi-turn conversations, answer FAQs, qualify leads with custom questions, and know when to route to a human for complex issues."
    },
    {
        question: "What's the best AI virtual receptionist for lead qualification?",
        answer: "The best one asks your own screening questions on every call, books qualified callers straight onto your calendar, sends urgent or high-value calls to a person under rules you set, and gives your team a written summary of each call. Test any vendor on those four points with a live trial call before you sign. Dooza's AI Receptionist (Rachel) does all four, and starts with a refundable pilot (100% refund within 14 days). If you only need messages taken, a cheaper answering service may be enough."
    },
    {
        question: "Will callers know they're talking to an AI?",
        answer: "Rachel uses natural, conversational language that sounds professional and human-like. We recommend telling callers they're speaking with an AI assistant, for example in the greeting. She introduces herself by name and maintains context throughout the conversation."
    },
    {
        question: "How many calls does the average small business miss?",
        answer: "Many calls to small businesses go unanswered, and most callers who reach voicemail hang up without leaving a message. That means many businesses lose inbound leads before ever speaking to them."
    }
];

export default function BestAiReceptionistContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && /calendly\.com|cal\.com|\/book(\/|\?|$)/.test(url)) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['introduction', 'voicemail-problem', 'what-is-ai-receptionist', 'ai-vs-alternatives', 'meet-rachel', 'who-needs', 'real-cost', 'getting-started', 'faq'];
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
                        { label: 'Best AI Receptionist' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Phone size={16} />
                            <span>AI Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            The Best <span className="text-primary-600">AI Receptionist</span>: Why You Should Fire Your Voicemail
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Many callers won't leave a voicemail — they just call your competitor. Here's how an AI receptionist answers those calls, books appointments, and compares with voicemail, answering services and an in-house hire.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 17, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col items-center gap-2">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Start your pilot
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <span className="text-sm text-slate-500">Refundable pilot — 100% refund within 14 days</span>
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
                                    { id: 'voicemail-problem', label: 'The Voicemail Problem' },
                                    { id: 'what-is-ai-receptionist', label: 'What Is an AI Receptionist?' },
                                    { id: 'ai-vs-alternatives', label: 'AI vs Alternatives' },
                                    { id: 'meet-rachel', label: 'Meet Rachel' },
                                    { id: 'who-needs', label: 'Who Needs This?' },
                                    { id: 'real-cost', label: 'The Real Cost' },
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
                                <p className="text-sm text-slate-600 mb-4">Never miss a call again</p>
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
                                <InternalLinks currentSlug="best-ai-receptionist" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Your voicemail is a lead-killing machine.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Many callers who reach voicemail won't leave a message. They hang up and call your competitor. Every unanswered ring is revenue walking out the door — and you don't even know it's happening.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Picture this (an illustrative example): it's 6 PM on a Tuesday. A homeowner discovers a burst pipe flooding their basement. They grab their phone and call three plumbers. Two go straight to voicemail. The third picks up instantly, asks the right questions — "Where's the leak? How bad is the flooding? What's your address?" — and books the emergency appointment on the spot. That third business just won the job while the other two were still recording "Sorry we missed your call."
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">As we covered in our business automation guide</Link>, inbound call handling eats a lot of a small team's day. But unlike email or social media, missed calls have an immediate, measurable cost — because the caller doesn't wait. They move on.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="Ry1OqRi9dkU"
                                        title="The Best AI Receptionist for Small Business"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Why businesses are replacing voicemail with AI receptionists</p>
                                </div>

                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Cost of Voicemail</h4>
                                            <p className="text-slate-700">
                                                Example (illustrative, not typical): if you miss 6 calls a week and a new customer is worth $200 to you, up to <strong>$1,200/week</strong> of work is at risk if none of those callers leave a message. Plug in your own numbers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The Voicemail Problem */}
                        <section id="voicemail-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Voicemail Problem: Why Callers Hang Up</h2>


                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-600" />
                                        What Your Voicemail Says
                                    </h3>
                                    <p className="text-slate-700 italic mb-4">"We're not available. Leave a message."</p>
                                    <h4 className="font-semibold text-slate-800 mb-2">Caller thinks:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "They're too busy for me",
                                            "Are they even still in business?",
                                            "I'll just call someone else"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        What AI Says
                                    </h3>
                                    <p className="text-slate-700 italic mb-4">"Hi, thanks for calling! How can I help you today?"</p>
                                    <h4 className="font-semibold text-slate-800 mb-2">Caller thinks:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "They're professional",
                                            "Let me tell them what I need",
                                            "Great, they just booked my appointment"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Is an AI Receptionist? */}
                        <section id="what-is-ai-receptionist" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is an AI Receptionist?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI receptionist is software that answers your business phone calls using advanced natural language processing. It sounds natural, follows your business rules, and handles calls the way you'd want a trained receptionist to — greeting callers warmly, answering questions, qualifying leads, booking appointments, and routing urgent calls to your cell.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    { icon: Phone, title: "Answers Every Call", desc: "Picks up every call, 24/7/365. No voicemail." },
                                    { icon: MessageSquare, title: "Natural Conversation", desc: "Uses NLP to have real, multi-turn conversations with callers." },
                                    { icon: Target, title: "Qualifies Leads", desc: "Asks your custom screening questions to identify hot prospects." },
                                    { icon: Calendar, title: "Books Appointments", desc: "Checks your calendar and books meetings on the spot." },
                                    { icon: FileText, title: "Call Summaries", desc: "Sends you a detailed summary after every call via email or SMS." },
                                    { icon: AlertTriangle, title: "Routes Urgent Calls", desc: "Spots urgent calls and transfers them to your cell under rules you set." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4: AI Receptionist vs Alternatives */}
                        <section id="ai-vs-alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Receptionist vs The Alternatives</h2>
                            <p className="text-slate-600 mb-6">Comparing AI receptionist prices? We checked 22 services’ pricing pages: see <a href="/blog/ai-receptionist-pricing" className="text-teal-700 underline">AI receptionist pricing (2026)</a> for what 100 calls a month costs on each, or <a href="/blog/free-ai-receptionist" className="text-teal-700 underline">the free AI receptionist plans and trials</a> if you take about a call a day.</p>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Voicemail</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Virtual Receptionist<br /><span className="font-normal text-xs text-slate-500">(Ruby, Smith.ai)</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">In-House Receptionist</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Rachel (AI)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Monthly Cost", voicemail: "$0", virtual: "$250–$2,100 (Ruby, Smith.ai plans)", inhouse: "Salary + benefits", rachel: "Refundable pilot (see /pricing)" },
                                            { feature: "Availability", voicemail: "Always (but useless)", virtual: "24/7, billed per minute or call", inhouse: "Business hours", rachel: "24/7/365" },
                                            { feature: "Call Volume", voicemail: "Unlimited", virtual: "Plan allowance (e.g. 30–300 calls/mo at Smith.ai)", inhouse: "One call at a time", rachel: "Scoped to your call volume in the pilot" },
                                            { feature: "Lead Qualification", voicemail: "None", virtual: "Basic scripting", inhouse: "Trained judgment", rachel: "Custom AI qualification" },
                                            { feature: "Appointment Booking", voicemail: "None", virtual: "Varies by plan", inhouse: "Yes", rachel: "Automatic" },
                                            { feature: "Setup Time", voicemail: "5 minutes", virtual: "Varies by provider", inhouse: "Hiring and training time", rachel: "Set up with you during the pilot" },
                                            { feature: "Consistency", voicemail: "N/A", virtual: "Varies by operator", inhouse: "Varies by person", rachel: "Same instructions on every call" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.voicemail}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.virtual}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.inhouse}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.rachel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 5: Meet Rachel */}
                        <section id="meet-rachel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Rachel: Your AI Receptionist</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Phone size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Rachel — AI Receptionist</h3>
                                        <p className="text-lg text-slate-700">
                                            Rachel answers your business calls like your best employee — but she never takes a break, never calls in sick, and starts with a refundable pilot.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Pickup", desc: "Picks up every call, day or night." },
                                    { icon: MessageSquare, title: "Natural Conversation", desc: "Natural multi-turn dialogue. We recommend telling callers it's an AI assistant." },
                                    { icon: Target, title: "Lead Qualification", desc: "Custom questions to score and qualify every caller." },
                                    { icon: Calendar, title: "Appointment Booking", desc: "Books directly into your calendar. No back-and-forth." },
                                    { icon: ArrowRight, title: "Smart Routing", desc: "Urgent calls forwarded to your cell under rules you set." },
                                    { icon: BarChart3, title: "Call Intelligence", desc: "Detailed analytics on every call. Trends and insights." },
                                    { icon: Users, title: "English Only (Today)", desc: "Answers in English only today. Not offered as a HIPAA service." },
                                    { icon: Clock, title: "After-Hours Coverage", desc: "Works nights, weekends, and holidays." }
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

                        {/* Section 6: Who Needs an AI Receptionist? */}
                        <section id="who-needs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Needs an AI Receptionist?</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        title: "Medical Practices",
                                        icon: Shield,
                                        desc: "Book and reschedule appointments and answer general questions (hours, location) 24/7. Not a HIPAA service: clinical and patient-record calls belong with a HIPAA-covered service.",
                                        link: { href: "/blog/seo-for-doctors-dentists", label: "See our guide for medical practices" }
                                    },
                                    {
                                        title: "Real Estate Agents",
                                        icon: TrendingUp,
                                        desc: "Capture buyer leads at 2 AM. Qualify prospects and schedule showings automatically.",
                                        link: { href: "/blog/ai-for-real-estate-agents", label: "See our guide for real estate agents" }
                                    },
                                    {
                                        title: "Home Services",
                                        icon: Phone,
                                        desc: "Emergency plumbing call at midnight? Rachel takes the details and alerts you under your rules, instead of sending it to voicemail.",
                                        link: null
                                    },
                                    {
                                        title: "Legal Firms",
                                        icon: FileText,
                                        desc: "Screen potential clients, take basic intake details, and schedule consultations. Rachel does not give legal advice; have your firm set the intake rules.",
                                        link: null
                                    },
                                    {
                                        title: "Marketing Agencies",
                                        icon: Target,
                                        desc: "Handle client calls professionally while your team focuses on creative work.",
                                        link: null
                                    },
                                    {
                                        title: "E-commerce",
                                        icon: DollarSign,
                                        desc: "Product questions, order status, returns — handled instantly without a call center.",
                                        link: { href: "https://www.ringly.io/blog/ai-receptionist-for-ecommerce", label: "Ringly's guide: AI receptionist for ecommerce" }
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                                        {item.link && (
                                            <Link href={item.link.href} className="text-sm text-primary-600 hover:underline font-medium">
                                                {item.link.label} &rarr;
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7: The Real Cost */}
                        <section id="real-cost" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Cost of Missed Calls</h2>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg">The Math Behind Missed Calls (illustrative example; use your own numbers)</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Missed calls/week (example)", value: "6" },
                                        { label: "If none leave a voicemail", value: "up to 6 lost leads" },
                                        { label: "Value of a new customer (example)", value: "$200" },
                                        { label: "Work at risk per month (4 weeks, example)", value: "up to $4,800", highlight: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-2 px-4 rounded-lg ${item.highlight ? 'bg-primary-100 font-bold text-primary-800' : 'bg-white'}`}>
                                            <span className="text-slate-700">{item.label}</span>
                                            <span className={item.highlight ? 'text-primary-800 text-xl' : 'text-slate-900 font-medium'}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-2">Full salary</div>
                                    <p className="text-sm text-slate-700 font-medium">Human Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">Salary + benefits + training</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$720/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">Ruby Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">200 minutes/month plan (<a href="https://www.ruby.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline">ruby.com/pricing</a>, checked Oct 6, 2026)</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">14-day</div>
                                    <p className="text-sm text-green-800 font-medium">Rachel (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">Refundable pilot. Answers 24/7 in English. <Link href="/pricing" className="underline">See pricing</Link></p>
                                </div>
                            </div>

                            <p className="text-lg font-bold text-slate-900 text-center">
                                Run your own numbers: missed calls a week × what a new customer is worth to you.
                            </p>
                        </section>

                        {/* Section 8: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Start Capturing Leads in 3 Steps</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Book Your Pilot Call",
                                        desc: "Book a free 30-minute call to scope your pilot. Every Dooza product starts with a refundable pilot — 100% refund within 14 days."
                                    },
                                    {
                                        step: "2",
                                        title: "We Set Up Rachel",
                                        desc: "A Dooza engineer sets Rachel up with your business info and call rules. She is set up on your existing line with you during the pilot."
                                    },
                                    {
                                        step: "3",
                                        title: "Start Capturing Leads",
                                        desc: "Rachel answers your forwarded calls. You get a summary of each call. Leads get booked."
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

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <Link href="/ai-receptionist" className="text-primary-600 hover:underline font-medium">Hear the Dooza AI receptionist answer a call and start a refundable pilot &rarr;</Link>
                                    <br />
                                    <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Learn how to automate your entire business &rarr;</Link>
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Fire Your Voicemail?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop losing leads to voicemail. Rachel answers every call, qualifies every lead, and books appointments. Start with a refundable pilot — 100% refund within 14 days.
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

                        {/* Section 9: FAQ */}
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
                                        <li>• <a href="https://www.ruby.com/plans-and-pricing/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ruby Receptionist — Virtual receptionist pricing</a></li>
                                        <li>• <a href="https://smith.ai/pricing/receptionists" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Smith.ai — Virtual receptionist comparison</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="best-ai-receptionist" category="AI Automation" tags={['AI Receptionist', 'Lead Capture', 'Small Business']} />
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
