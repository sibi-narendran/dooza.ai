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
    Phone,
    Users,
    TrendingUp,
    AlertTriangle,
    MessageSquare,
    FileText,
    Target,
    BarChart3,
    Shield,
    Heart,
    ClipboardList,
    Scale,
    UserPlus,
    PhoneOff
} from 'lucide-react';

const faqData = [
    { question: "What is an AI legal assistant for law firms?", answer: "An AI legal assistant is software that handles client intake calls — answering the phone 24/7, screening potential cases by practice area, gathering key facts, scheduling consultations, and following up with leads. It performs the administrative work of intake, not legal advice." },
    { question: "Is an AI legal assistant practicing law or violating ethics rules?", answer: "No. An AI legal assistant handles administrative intake tasks — the same work a receptionist or intake coordinator does. It doesn't give legal advice, interpret statutes, or recommend legal strategies. It screens, schedules, and gathers facts. Bar associations distinguish clearly between administrative support and the practice of law." },
    { question: "How much does an AI legal assistant cost compared to a paralegal?", answer: "A paralegal or intake coordinator costs $3,500-5,500/month in salary alone, plus benefits. A legal answering service runs $500-1,500/month with limited hours. Dooza's Rachel costs $29/month — 24/7, unlimited calls, with law-firm-specific configuration." },
    { question: "Can the AI screen cases by practice area?", answer: "Yes. Rachel is configured with your firm's practice areas and screening criteria. She asks the right questions for PI, family law, criminal defense, estate planning, and more — then classifies urgency and routes to the appropriate attorney." },
    { question: "Does the AI disclose that it's not a human attorney?", answer: "Absolutely. Rachel introduces herself by name and is transparent about being an AI assistant when asked. She never represents herself as an attorney and clearly communicates that she's helping with scheduling and intake, not providing legal advice." },
    { question: "What happens when someone calls after hours?", answer: "Rachel answers 24/7 with the same quality as business hours. She screens the case, gathers facts, assesses urgency, and either books a next-day consultation or escalates urgent matters to the on-call attorney. 60%+ of legal intake calls happen outside business hours." }
];

export default function AiLegalAssistantContent() {
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
            const sections = ['introduction', 'intake-crisis', 'what-firms-need', 'ai-legal-assistant', 'intake-scenarios', 'ethics-compliance', 'cost-comparison', 'meet-rachel', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-indigo-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI Legal Assistant' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                            <Scale size={16} />
                            <span>Industry Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Why Law Firms Are Replacing Paralegals with <span className="text-primary-600">AI Legal Assistants</span> for Intake & Scheduling
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            79% of clients hire the first attorney who responds. An AI legal assistant handles intake calls, screens cases, gathers facts, and books consultations — 24/7, for $29/month. The paralegal that never sleeps.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 24, 2026</span>
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
                                    { id: 'intake-crisis', label: 'The Intake Crisis' },
                                    { id: 'what-firms-need', label: 'What Firms Need' },
                                    { id: 'ai-legal-assistant', label: 'AI Legal Assistant' },
                                    { id: 'intake-scenarios', label: 'Intake Scenarios' },
                                    { id: 'ethics-compliance', label: 'Ethics & Compliance' },
                                    { id: 'cost-comparison', label: 'Cost Comparison' },
                                    { id: 'meet-rachel', label: 'Meet Rachel' },
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
                                <p className="text-sm text-slate-600 mb-4">Never lose a case to voicemail again</p>
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
                                <InternalLinks currentSlug="ai-legal-assistant" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    It's 11 PM on a Friday night. A woman is sitting in the ER after a car accident. Her neck hurts. The other driver ran a red light. She pulls out her phone and calls four personal injury firms. Three go to voicemail. One answers on the first ring.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Guess which firm she hires?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to Clio's Legal Trends Report, <strong>79% of clients hire the first attorney who responds to their inquiry</strong>. Not the best attorney. Not the cheapest. The <em>first one who picks up the phone</em>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    For law firms, intake isn't just an administrative function — it's the single biggest determinant of revenue. Every missed call is a missed case. Every voicemail is a client calling your competitor.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed videoId="wwbr0fombFs" title="The world's first AI lawyer — Andrew Arruda — TEDx" />
                                </div>

                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Real Cost of a Missed PI Call</h4>
                                            <p className="text-slate-700">
                                                A single personal injury case can generate <strong>$10,000-$50,000+ in fees</strong> on contingency. A family law retainer averages $3,000-5,000. Even a simple estate plan runs $1,500-3,000. Every call that goes to voicemail after hours isn't just a missed lead — it's potentially tens of thousands of dollars walking to the firm that answered.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The Intake Crisis */}
                        <section id="intake-crisis" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Law Firms Are Hemorrhaging Cases at Intake</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Law firms spend thousands on advertising — Google Ads, TV spots, billboards, SEO — to get the phone to ring. Then they let the calls go to voicemail. The intake bottleneck is the most expensive problem most firms refuse to acknowledge.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "79%", label: "of clients hire the first attorney who responds", source: "Clio Legal Trends Report" },
                                    { stat: "24 hrs", label: "average response time for law firm inquiries", source: "Martindale-Avvo Study" },
                                    { stat: "42%", label: "of law firms don't respond to voicemails within 24 hours", source: "ABA Journal" },
                                    { stat: "67%", label: "of callers won't leave a voicemail — they call the next firm", source: "Consumer Research" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <p className="text-xs text-red-500">{item.source}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <PhoneOff className="w-5 h-5 text-red-500" />
                                        The Paralegal Bottleneck
                                    </h3>
                                    <p className="text-slate-600">
                                        Your paralegal or intake coordinator is talented — but they can only handle one call at a time. When three prospects call simultaneously at 2 PM on a Tuesday, two go to voicemail. When your intake person is in a consultation, sick, or on lunch, every call is missed. One person cannot cover a phone line 24/7.
                                    </p>
                                </div>
                                <div className="bg-white border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-red-500" />
                                        The After-Hours Gap
                                    </h3>
                                    <p className="text-slate-600">
                                        Over 60% of legal intake calls happen outside business hours — evenings, weekends, and holidays. Accidents happen at 11 PM. DUI arrests happen at 2 AM. Custody emergencies happen on Saturday mornings. If your firm only answers 9-to-5 Monday through Friday, you're missing the majority of high-value cases.
                                    </p>
                                </div>
                                <div className="bg-white border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <MessageSquare className="w-5 h-5 text-red-500" />
                                        The Follow-Up Gap
                                    </h3>
                                    <p className="text-slate-600">
                                        Even when firms do connect with a prospect, follow-up is inconsistent. A potential client who needs to "think about it" gets one follow-up call — maybe. Without systematic nurturing, warm leads go cold and sign with the firm that stayed in touch.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Law Firms Actually Need */}
                        <section id="what-firms-need" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Law Firms Actually Need From Client Intake</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Before evaluating solutions, let's define what ideal client intake looks like for a law firm. Because legal intake has unique requirements that generic answering services can't handle.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Response 24/7", desc: "Every call answered on the first ring — nights, weekends, holidays. The 79% first-responder advantage means speed is everything. A 5-minute delay can cost you a case." },
                                    { icon: Target, title: "Case Screening", desc: "Asking the right questions for each practice area: What happened? When? Where? Who was involved? Was there a police report? Are there injuries? Separating viable cases from non-starters before the attorney's time is spent." },
                                    { icon: ClipboardList, title: "Fact Gathering", desc: "Collecting the essential facts while they're fresh — incident details, witness information, insurance data, medical treatment status. The sooner this happens after an incident, the more accurate and complete the information." },
                                    { icon: Heart, title: "Empathetic Communication", desc: "People calling a law firm are often stressed, scared, or angry. The intake process needs to be professional and empathetic — not robotic. A DUI caller at 2 AM needs reassurance, not a cold script." },
                                    { icon: Calendar, title: "Consultation Scheduling", desc: "Booking the right type of consultation with the right attorney. A PI case goes to a personal injury lawyer. A custody dispute goes to family law. Matching practice area to attorney availability — automatically." },
                                    { icon: MessageSquare, title: "Follow-Up & Nurturing", desc: "Systematic follow-up with prospects who didn't book immediately. SMS reminders before consultations. Post-call summaries to the assigned attorney. Keeping warm leads from going cold." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-white border border-slate-200 p-5 rounded-xl hover:border-green-200 transition-colors">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1 text-lg">{item.title}</h3>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Ideal State</h4>
                                        <p className="text-slate-700">
                                            Imagine every intake call answered instantly. Every case screened with the right questions. Every fact gathered while it's fresh. Every consultation booked with the right attorney. Every prospect followed up with systematically. All without hiring additional staff, paying overtime, or losing cases to after-hours voicemail. That's what law firms need — and an AI legal assistant makes it possible for $29/month.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: How an AI Legal Assistant Transforms Intake */}
                        <section id="ai-legal-assistant" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How an AI Legal Assistant Transforms Law Firm Intake</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline font-medium">AI legal assistant</Link> isn't a generic call answering bot. When configured for a law firm, it becomes a specialized intake coordinator that understands practice areas, urgency levels, and the questions that matter for each type of case.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        icon: Target,
                                        title: "Case Screening",
                                        desc: "Asks practice-area-specific questions to determine if the case fits your firm. Screens for statute of limitations, jurisdiction, case type, and viability — routing qualified leads to the right attorney.",
                                        color: "indigo"
                                    },
                                    {
                                        icon: ClipboardList,
                                        title: "Fact Collection",
                                        desc: "Gathers incident details, party information, witness data, insurance info, and medical treatment status while the facts are fresh. Creates a structured intake summary for the attorney.",
                                        color: "blue"
                                    },
                                    {
                                        icon: Shield,
                                        title: "Conflict Checking",
                                        desc: "Collects names of all parties involved so your team can run conflicts before the consultation. Flags potential conflicts based on party names for immediate review.",
                                        color: "amber"
                                    },
                                    {
                                        icon: Calendar,
                                        title: "Smart Scheduling",
                                        desc: "Books consultations with the right attorney based on practice area. PI cases to PI attorneys. Family law to family attorneys. Matches urgency to availability automatically.",
                                        color: "green"
                                    },
                                    {
                                        icon: MessageSquare,
                                        title: "Follow-Up Sequences",
                                        desc: "Sends SMS consultation reminders, follow-up messages to prospects who didn't book, and post-call summaries to assigned attorneys. Keeps warm leads from going cold.",
                                        color: "purple"
                                    },
                                    {
                                        icon: Phone,
                                        title: "After-Hours Coverage",
                                        desc: "Handles the 60%+ of intake calls that come outside business hours. DUI at 2 AM? Answered. Weekend car accident? Screened. Holiday custody emergency? Handled.",
                                        color: "teal"
                                    }
                                ].map((item, idx) => {
                                    const colorMap = {
                                        indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
                                        blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
                                        green: { bg: 'bg-green-100', text: 'text-green-600' },
                                        amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
                                        purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
                                        teal: { bg: 'bg-teal-100', text: 'text-teal-600' }
                                    };
                                    const colors = colorMap[item.color];
                                    return (
                                        <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                            <div className="flex items-start gap-3">
                                                <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} shrink-0`}>
                                                    <item.icon size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Section 5: 4 Real Law Firm Intake Scenarios */}
                        <section id="intake-scenarios" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">4 Real Law Firm Intake Scenarios</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                The real test of any legal intake system is how it handles the calls that actually come in. Here's exactly how an AI legal assistant walks through the four most common law firm intake scenarios — step by step.
                            </p>

                            {/* Scenario 1: PI Car Accident - URGENT (Red) */}
                            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center text-red-700 shrink-0">
                                        <AlertTriangle size={24} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-red-700 bg-red-200 px-2 py-0.5 rounded-full">URGENT</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scenario 1: Personal Injury — Car Accident (11 PM Friday)</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-slate-500 font-medium mb-1">Caller at 11:15 PM Friday</p>
                                                <p className="text-slate-700 italic">"I was just in a car accident. The other driver ran a red light and hit me. I'm in the ER now. My neck and back are killing me. I need a lawyer."</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-red-600 font-medium mb-1">Rachel asks screening questions:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- "I'm sorry to hear about your accident. Let me help you. When did this happen?"</li>
                                                    <li>- "Where did the accident occur?"</li>
                                                    <li>- "Was a police report filed?"</li>
                                                    <li>- "Can you describe your injuries? Are you receiving medical treatment now?"</li>
                                                    <li>- "Do you have the other driver's insurance information?"</li>
                                                    <li>- "Were there any witnesses?"</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-red-600 font-medium mb-1">Rachel classifies as URGENT PI case and takes action:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- Escalates to the on-call PI attorney via text/call with full intake summary</li>
                                                    <li>- Books a priority morning consultation if attorney is unavailable</li>
                                                    <li>- Advises: "Don't give a recorded statement to the other driver's insurance company before speaking with our attorney"</li>
                                                    <li>- Sends SMS confirmation with attorney name and consultation time</li>
                                                    <li>- Creates a structured intake file: incident details, injuries, parties, witnesses</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 2: Family Law Custody - MODERATE (Amber) */}
                            <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-200 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-amber-700 bg-amber-200 px-2 py-0.5 rounded-full">MODERATE</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scenario 2: Family Law — Custody Dispute (Saturday Morning)</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 rounded-lg border border-amber-100">
                                                <p className="text-sm text-slate-500 font-medium mb-1">Caller at 9:30 AM Saturday</p>
                                                <p className="text-slate-700 italic">"My ex just told me he's moving to another state with our kids. We have a custody agreement but he says he doesn't care. I don't know what to do."</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-amber-100">
                                                <p className="text-sm text-amber-600 font-medium mb-1">Rachel asks family law screening questions:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- "I understand this is stressful. Let me connect you with help. Do you have a current custody order from a court?"</li>
                                                    <li>- "When did he say he's planning to move?"</li>
                                                    <li>- "How old are your children?"</li>
                                                    <li>- "Which state are you currently in, and where does he plan to move?"</li>
                                                    <li>- "Do you currently have an attorney?"</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-amber-100">
                                                <p className="text-sm text-amber-600 font-medium mb-1">Rachel classifies as MODERATE family law case and responds:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- Books a Monday morning consultation with the family law attorney</li>
                                                    <li>- Collects names of both parents and children for conflict check</li>
                                                    <li>- Advises: "Keep records of all communications with your ex about the move. Don't agree to anything in writing until you've spoken with the attorney."</li>
                                                    <li>- Sends consultation confirmation via SMS with what to bring (custody order, communication records)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 3: DUI at 2 AM - URGENT (Red) */}
                            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center text-red-700 shrink-0">
                                        <Scale size={24} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-red-700 bg-red-200 px-2 py-0.5 rounded-full">URGENT</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scenario 3: Criminal Defense — DUI Arrest (2 AM Saturday)</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-slate-500 font-medium mb-1">Caller at 2:15 AM Saturday</p>
                                                <p className="text-slate-700 italic">"My husband just got arrested for DUI. He's at the county jail. His arraignment is Monday morning. We need a lawyer right away."</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-red-600 font-medium mb-1">Rachel asks criminal defense screening questions:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- "I understand — let me help you right away. When was he arrested?"</li>
                                                    <li>- "Which county jail is he being held at?"</li>
                                                    <li>- "Is this his first DUI offense?"</li>
                                                    <li>- "Was there an accident involved, or was it a traffic stop?"</li>
                                                    <li>- "Do you know his blood alcohol level or if he took a breathalyzer?"</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-red-600 font-medium mb-1">Rachel classifies as URGENT criminal defense and takes action:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- Escalates to the on-call criminal defense attorney with full details</li>
                                                    <li>- If unavailable, books an emergency Saturday morning consultation</li>
                                                    <li>- Advises: "Tell your husband not to make any statements to police without an attorney present. Do not discuss the case on jail phone calls — those are recorded."</li>
                                                    <li>- Sends SMS with consultation details and attorney contact</li>
                                                    <li>- Notes the Monday arraignment deadline in the intake file</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 4: Estate Planning - ROUTINE (Green) */}
                            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center text-green-700 shrink-0">
                                        <FileText size={24} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-green-700 bg-green-200 px-2 py-0.5 rounded-full">ROUTINE</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scenario 4: Estate Planning — Will & Trust (Weekday Evening)</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 rounded-lg border border-green-100">
                                                <p className="text-sm text-slate-500 font-medium mb-1">Caller at 7:45 PM Wednesday</p>
                                                <p className="text-slate-700 italic">"Hi, my wife and I just had our first child and we want to set up a will and maybe a trust. We don't have anything in place. How much does that cost?"</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-green-100">
                                                <p className="text-sm text-green-600 font-medium mb-1">Rachel handles the estate planning intake:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- "Congratulations! Let me help you get started. Do you currently have any estate planning documents — a will, trust, or power of attorney?"</li>
                                                    <li>- "How many children do you have, and what are their ages?"</li>
                                                    <li>- "Do you own a home or have significant assets you'd like to address?"</li>
                                                    <li>- "Have you thought about who you'd like as a guardian for your child?"</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-green-100">
                                                <p className="text-sm text-green-600 font-medium mb-1">Rachel classifies as ROUTINE estate planning and responds:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- Books a 30-minute estate planning consultation for next week</li>
                                                    <li>- Provides general fee range: "Our estate planning consultations are complimentary. Basic will packages typically start at $1,500."</li>
                                                    <li>- Sends SMS confirmation with what to bring: "Please bring a list of your assets, insurance policies, and names of people you'd like as beneficiaries or guardians."</li>
                                                    <li>- Adds a follow-up reminder for the day before the consultation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <p className="text-slate-700 font-medium text-center">
                                    All four of these scenarios happened after business hours. Without an AI legal assistant, every one of these callers would have reached voicemail — and 67% of them would have called the next firm on their list instead of leaving a message.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Ethics & Compliance */}
                        <section id="ethics-compliance" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ethics & Compliance: Why an AI Legal Assistant Is NOT Practicing Law</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The most common concern law firms raise about AI intake is the ethics question: does an AI handling client calls constitute the unauthorized practice of law (UPL)? The answer is clearly no — and here's why.
                                </p>
                            </div>

                            <div className="bg-indigo-50 border-2 border-indigo-200 p-8 rounded-2xl mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Scale size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Administrative vs. Legal: The Clear Distinction</h3>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "Administrative Intake (What Rachel Does)",
                                                    items: [
                                                        "Answering the phone and greeting callers",
                                                        "Asking screening questions (What happened? When? Where?)",
                                                        "Collecting names, contact info, and case details",
                                                        "Scheduling consultations with attorneys",
                                                        "Sending appointment confirmations and reminders"
                                                    ],
                                                    color: "green"
                                                },
                                                {
                                                    title: "Practicing Law (What Rachel Never Does)",
                                                    items: [
                                                        "Giving legal advice or opinions on case merit",
                                                        "Interpreting statutes, case law, or regulations",
                                                        "Recommending legal strategies or courses of action",
                                                        "Drafting legal documents or court filings",
                                                        "Representing the firm's legal position to callers"
                                                    ],
                                                    color: "red"
                                                }
                                            ].map((section, idx) => (
                                                <div key={idx} className="bg-white p-5 rounded-lg border border-indigo-100">
                                                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                                        {section.color === 'green' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                                                        {section.title}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {section.items.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                                <span className={section.color === 'green' ? 'text-green-500' : 'text-red-500'}>
                                                                    {section.color === 'green' ? '✓' : '✗'}
                                                                </span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        icon: Shield,
                                        title: "No Unauthorized Practice of Law (UPL)",
                                        desc: "Rachel performs the same administrative tasks as a receptionist or intake coordinator. Answering phones, collecting information, and scheduling appointments is not the practice of law — it's office administration."
                                    },
                                    {
                                        icon: Users,
                                        title: "Transparent Disclosure",
                                        desc: "Rachel introduces herself by name and is transparent about being an AI assistant. She never claims to be an attorney. When callers ask legal questions, she redirects to the scheduled consultation with their attorney."
                                    },
                                    {
                                        icon: FileText,
                                        title: "Confidentiality by Design",
                                        desc: "All conversations are encrypted. Rachel collects only intake-relevant information. She doesn't store case files or legal documents. Data handling follows best practices for law firm confidentiality."
                                    },
                                    {
                                        icon: Scale,
                                        title: "Attorney Oversight",
                                        desc: "Every intake is summarized and sent to the assigned attorney for review. The attorney makes all legal decisions. Rachel handles the administrative pipeline; lawyers handle the law."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Scale className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Bottom Line</h4>
                                        <p className="text-slate-700">
                                            Think of an AI legal assistant as a <strong>highly trained intake coordinator who works 24/7</strong>. She doesn't practice law any more than your receptionist does when she answers the phone and asks "What's your case about?" The attorney-client relationship begins with the attorney — not with the phone answering system.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Cost Comparison */}
                        <section id="cost-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Cost Comparison: Paralegal vs. Answering Service vs. AI</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Every law firm needs reliable intake coverage. But the cost differences between your options are dramatic. As we detailed in our <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline font-medium">AI receptionist guide</Link>, AI has fundamentally changed the math.
                            </p>

                            {/* Comparison Table */}
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Paralegal /<br /><span className="font-normal text-xs text-slate-500">Intake Coordinator</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Legal Answering<br /><span className="font-normal text-xs text-slate-500">Service</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Rachel AI<br /><span className="font-normal text-xs text-primary-500">Dooza</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Monthly Cost", desk: "$3,500-5,500", service: "$500-1,500", rachel: "$29" },
                                            { feature: "Availability", desk: "Business hours only", service: "Extended hours (varies)", rachel: "24/7/365" },
                                            { feature: "Case Screening", desk: "Trained judgment", service: "Basic script only", rachel: "Practice-area protocols" },
                                            { feature: "Fact Gathering", desk: "Thorough", service: "Name & number only", rachel: "Structured intake forms" },
                                            { feature: "Consultation Booking", desk: "Yes", service: "Message-taking only", rachel: "Automatic booking" },
                                            { feature: "Follow-Up", desk: "Inconsistent", service: "Not included", rachel: "Automated sequences" },
                                            { feature: "Setup Time", desk: "2-6 weeks hiring + training", service: "1-2 weeks", rachel: "30 minutes" },
                                            { feature: "Consistency", desk: "Varies by person/day", service: "Varies by operator", rachel: "100% consistent" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.desk}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.service}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.rachel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pricing Cards */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$3,500-5,500</div>
                                    <p className="text-sm text-slate-700 font-medium">Paralegal / Intake Coordinator</p>
                                    <p className="text-xs text-slate-500 mt-1">Salary + benefits + training</p>
                                    <p className="text-xs text-slate-500">Business hours only</p>
                                    <p className="text-xs text-red-500 mt-2">$42,000-66,000/year</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$500-1,500</div>
                                    <p className="text-sm text-slate-700 font-medium">Legal Answering Service</p>
                                    <p className="text-xs text-slate-500 mt-1">Limited call volume</p>
                                    <p className="text-xs text-slate-500">No screening or booking</p>
                                    <p className="text-xs text-amber-500 mt-2">$6,000-18,000/year</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$29/mo</div>
                                    <p className="text-sm text-green-800 font-medium">Rachel AI (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">Unlimited calls, 24/7</p>
                                    <p className="text-xs text-green-600">Case screening + booking</p>
                                    <p className="text-xs text-green-700 font-bold mt-2">$348/year total</p>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                <p className="text-2xl font-bold text-green-700">Save $41,652-$65,652/year vs. a full-time hire</p>
                                <p className="text-green-600 mt-2">And get 24/7 coverage, case screening, fact gathering, and automated follow-up included</p>
                            </div>
                        </section>

                        {/* Section 8: Meet Rachel */}
                        <section id="meet-rachel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Rachel: Your Law Firm's AI Legal Assistant</h2>

                            <div className="bg-gradient-to-br from-indigo-50 to-primary-50 border-2 border-indigo-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Scale size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Rachel — AI Legal Assistant for Law Firms</h3>
                                        <p className="text-lg text-slate-700">
                                            Rachel answers your firm's phone like your best intake coordinator — but she never takes a day off, never puts a caller on hold, and costs less than a single billable hour. She's specifically configurable for law firms with practice-area screening, urgency classification, and smart attorney matching.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Pickup", desc: "Answers in under 1 second. No rings, no hold music, no voicemail." },
                                    { icon: Target, title: "Case Screening", desc: "Practice-area-specific questions to qualify cases before attorney time is spent." },
                                    { icon: ClipboardList, title: "Fact Collection", desc: "Structured intake gathering incident details, parties, and witnesses." },
                                    { icon: Calendar, title: "Smart Scheduling", desc: "Books consultations with the right attorney by practice area." },
                                    { icon: MessageSquare, title: "SMS Follow-Up", desc: "Consultation reminders, follow-ups, and post-call summaries." },
                                    { icon: Phone, title: "After-Hours Coverage", desc: "Handles 60%+ of calls that come outside business hours." },
                                    { icon: Shield, title: "Conflict Flagging", desc: "Collects all party names so your team can check conflicts." },
                                    { icon: FileText, title: "Call Summaries", desc: "Detailed intake summary of every call sent to the assigned attorney." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-indigo-200 transition-colors">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Want to make sure potential clients find your firm before they call? Pair Rachel with <Link href="/blog/ai-appointment-setter" className="text-primary-600 hover:underline font-medium">an AI appointment setter</Link> to capture and qualify leads across every channel — phone, web, and email.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Rachel Running for Your Law Firm in 3 Steps</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Setting up an AI legal assistant for your firm takes less time than drafting a standard engagement letter. Here's exactly how it works:
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up for Dooza",
                                        desc: "Create your account at dooza.ai. You'll get instant access to Rachel and your full AI employee team. No credit card required to start."
                                    },
                                    {
                                        step: "2",
                                        title: "Configure Your Practice Areas",
                                        desc: "Set up your specific practice areas (PI, family law, criminal defense, estate planning, etc.), attorney assignments and schedules, screening criteria for each case type, and urgency classification rules. Our free concierge onboarding team handles this for you if you prefer."
                                    },
                                    {
                                        step: "3",
                                        title: "Forward Your Firm's Phone Line to Rachel",
                                        desc: "Set up call forwarding from your office phone to Rachel's number. Works with any phone system — landline, VoIP, or cell. Takes about 5 minutes. Rachel answers your next call."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Stop Losing Cases to Voicemail?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    79% of clients hire the first attorney who responds. Every missed call is a missed case — and potentially $10,000-$50,000 in fees. Rachel answers every call, screens every case, and books every consultation — for $29/month.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Rachel AI - $29/mo <ArrowRight className="w-4 h-4" />
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Legal Industry Data</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>- <a href="https://www.clio.com/resources/legal-trends/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Clio Legal Trends Report — Client intake and responsiveness statistics</a></li>
                                        <li>- <a href="https://www.americanbar.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">American Bar Association — Ethics opinions on technology use</a></li>
                                        <li>- <a href="https://www.martindale.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Martindale-Avvo — Law firm response time study</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Legal Ethics & Compliance</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>- <a href="https://www.americanbar.org/groups/professional_responsibility/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ABA Model Rules of Professional Conduct</a></li>
                                        <li>- <a href="https://www.americanbar.org/groups/centers_commissions/center-for-innovation/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ABA Center for Innovation — Technology and legal practice</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Small Business Phone Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>- <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Forbes — 62% of SMB calls go unanswered</a></li>
                                        <li>- <a href="https://www.att.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">AT&T Research — Voicemail behavior statistics</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Law Firm Marketing</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>- <a href="https://www.clio.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Clio — 79% of clients hire the first responder</a></li>
                                        <li>- <a href="https://lawyerist.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lawyerist — Law firm intake best practices</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-legal-assistant" category="Industry Guide" tags={['AI Legal Assistant', 'Law Firm AI', 'Legal Intake']} />
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
