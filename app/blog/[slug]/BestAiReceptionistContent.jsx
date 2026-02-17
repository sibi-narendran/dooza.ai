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
        answer: "A human receptionist costs $3,500-4,200/month. Virtual receptionist services like Ruby or Smith.ai cost $300-935/month. Dooza's Rachel (AI Receptionist) costs $29/month and handles unlimited calls 24/7."
    },
    {
        question: "Can an AI receptionist handle complex conversations?",
        answer: "Modern AI receptionists like Rachel use natural language processing to handle multi-turn conversations, answer FAQs, qualify leads with custom questions, and know when to route to a human for complex issues."
    },
    {
        question: "Will callers know they're talking to an AI?",
        answer: "Rachel uses natural, conversational language that sounds professional and human-like. Most callers won't notice the difference. She introduces herself by name and maintains context throughout the conversation."
    },
    {
        question: "How many calls does the average small business miss?",
        answer: "According to Forbes, 62% of calls to small businesses go unanswered. With 85% of callers refusing to leave voicemail, that means most businesses lose over half their inbound leads before ever speaking to them."
    }
];

export default function BestAiReceptionistContent() {
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
                            85% of callers won't leave a voicemail — they just call your competitor. Discover why an AI receptionist captures more leads, books more appointments, and costs 99% less than a human receptionist.
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

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Get Rachel AI - $29/mo
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
                                    Try Rachel Free
                                </a>
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
                                    85% of callers who reach voicemail will never leave a message. They hang up and call your competitor. Every unanswered ring is revenue walking out the door — and you don't even know it's happening.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Picture this: it's 6 PM on a Tuesday. A homeowner discovers a burst pipe flooding their basement. They grab their phone and call three plumbers. Two go straight to voicemail. The third picks up instantly, asks the right questions — "Where's the leak? How bad is the flooding? What's your address?" — and books the emergency appointment on the spot. That third business just won <strong>$2,500 in revenue</strong> while the other two were still recording "Sorry we missed your call."
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">As we covered in our business automation guide</Link>, inbound call handling is one of the three biggest time-wasters for small businesses. But unlike email or social media, missed calls have an immediate, measurable cost — because the caller doesn't wait. They move on.
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
                                                If you receive just 10 calls/week and miss 62% of them, that's 6 missed opportunities. At $200/lead, you're losing <strong>$1,200/week</strong> — or <strong>$4,800/month</strong> — to voicemail.
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
                                {[
                                    { stat: "85%", label: "of callers won't leave a voicemail", source: "AT&T Research" },
                                    { stat: "62%", label: "of SMB calls go unanswered", source: "Forbes" },
                                    { stat: "$1,200+", label: "per month in lost leads", source: "Industry Average" },
                                    { stat: "67%", label: "of callers hang up when they can't reach a person", source: "Consumer Reports" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <p className="text-xs text-red-500">{item.source}</p>
                                    </div>
                                ))}
                            </div>

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
                                    { icon: Phone, title: "Answers Every Call", desc: "Picks up instantly, 24/7/365. No hold music, no voicemail." },
                                    { icon: MessageSquare, title: "Natural Conversation", desc: "Uses NLP to have real, multi-turn conversations with callers." },
                                    { icon: Target, title: "Qualifies Leads", desc: "Asks your custom screening questions to identify hot prospects." },
                                    { icon: Calendar, title: "Books Appointments", desc: "Checks your calendar and books meetings on the spot." },
                                    { icon: FileText, title: "Call Summaries", desc: "Sends you a detailed summary after every call via email or SMS." },
                                    { icon: AlertTriangle, title: "Routes Urgent Calls", desc: "Identifies emergencies and transfers to your cell immediately." }
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
                                            { feature: "Monthly Cost", voicemail: "$0", virtual: "$300-935", inhouse: "$3,500-4,200", rachel: "$29" },
                                            { feature: "Availability", voicemail: "Always (but useless)", virtual: "Business hours + limited after-hours", inhouse: "Business hours", rachel: "24/7/365" },
                                            { feature: "Call Capacity", voicemail: "Unlimited", virtual: "50-200 calls/mo", inhouse: "~40 calls/day", rachel: "Unlimited" },
                                            { feature: "Lead Qualification", voicemail: "None", virtual: "Basic scripting", inhouse: "Trained judgment", rachel: "Custom AI qualification" },
                                            { feature: "Appointment Booking", voicemail: "None", virtual: "Manual (adds cost)", inhouse: "Yes", rachel: "Automatic" },
                                            { feature: "Setup Time", voicemail: "5 minutes", virtual: "1-2 weeks", inhouse: "2-4 weeks hiring", rachel: "30 minutes" },
                                            { feature: "Consistency", voicemail: "N/A", virtual: "Varies by operator", inhouse: "Varies by person", rachel: "100% consistent" }
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
                                            Rachel answers your business calls like your best employee — but she never takes a break, never calls in sick, and costs less than your daily coffee.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Pickup", desc: "Answers in under 1 second. No rings, no wait." },
                                    { icon: MessageSquare, title: "Natural Conversation", desc: "Callers can't tell she's AI. Multi-turn dialogue." },
                                    { icon: Target, title: "Lead Qualification", desc: "Custom questions to score and qualify every caller." },
                                    { icon: Calendar, title: "Appointment Booking", desc: "Books directly into your calendar. No back-and-forth." },
                                    { icon: ArrowRight, title: "Smart Routing", desc: "Urgent calls forwarded to your cell instantly." },
                                    { icon: BarChart3, title: "Call Intelligence", desc: "Detailed analytics on every call. Trends and insights." },
                                    { icon: Users, title: "Multi-Language", desc: "Supports English, Spanish, and more." },
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
                                        desc: "Never miss a patient call. Book appointments and handle prescription refill requests 24/7.",
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
                                        desc: "Emergency plumbing call at midnight? Rachel books it instantly. No more lost emergency jobs.",
                                        link: null
                                    },
                                    {
                                        title: "Legal Firms",
                                        icon: FileText,
                                        desc: "Screen potential clients, collect case details, and schedule consultations. Attorney-client privilege maintained.",
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
                                        link: null
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
                                <h3 className="font-bold text-slate-900 mb-4 text-lg">The Math Behind Missed Calls</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Average calls/week", value: "20" },
                                        { label: "Missed calls (62%)", value: "12.4 calls" },
                                        { label: "Callers who won't leave VM (85%)", value: "10.5 lost leads" },
                                        { label: "Average lead value", value: "$300" },
                                        { label: "Monthly lost revenue", value: "$12,600", highlight: true }
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
                                    <div className="text-3xl font-bold text-red-600 mb-2">$4,200/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">Human Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">Salary + benefits + training</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$935/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">Ruby Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">200 calls/month limit</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$29/mo</div>
                                    <p className="text-sm text-green-800 font-medium">Rachel (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">Unlimited calls, 24/7</p>
                                </div>
                            </div>

                            <p className="text-lg font-bold text-slate-900 text-center">
                                Rachel pays for herself with a single captured lead.
                            </p>
                        </section>

                        {/* Section 8: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Start Capturing Leads in 3 Steps</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up for Dooza",
                                        desc: "Create your account and meet your AI team. Free trial, no credit card required."
                                    },
                                    {
                                        step: "2",
                                        title: "Connect Your Phone",
                                        desc: "Forward your business line to Rachel. Takes 5 minutes. Works with any phone system."
                                    },
                                    {
                                        step: "3",
                                        title: "Start Capturing Leads",
                                        desc: "Rachel answers your next call. You get a summary. Leads get booked. Revenue goes up."
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
                                    <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Learn how to automate your entire business &rarr;</Link>
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Fire Your Voicemail?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop losing leads to voicemail. Rachel answers every call, qualifies every lead, and books appointments — all for less than your daily coffee.
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Call & Voicemail Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Forbes — SMB missed calls statistics</a></li>
                                        <li>• <a href="https://www.att.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">AT&T Research — Voicemail statistics</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Virtual Receptionist Pricing</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.ruby.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ruby Receptionist — Virtual receptionist pricing</a></li>
                                        <li>• <a href="https://smith.ai/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Smith.ai — Virtual receptionist comparison</a></li>
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
