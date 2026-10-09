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
    Stethoscope,
    Bell,
    UserPlus
} from 'lucide-react';

const faqData = [
    { question: "Is an AI receptionist HIPAA-compliant for dental offices?", answer: "Dooza's AI Receptionist is not offered as a HIPAA service, and Dooza does not sign a Business Associate Agreement (BAA). If your practice needs a HIPAA-covered phone vendor, choose one that signs a BAA. Rachel doesn't access your practice management system or store patient health records, uses encrypted connections, and collects only what is needed to book appointments and route urgent calls." },
    { question: "Can the AI triage dental emergencies?", answer: "Rachel can sort urgent calls from routine ones using questions your practice approves (What happened? When? Pain level? Bleeding?). She then books an emergency slot, alerts the on-call dentist, or routes the caller to your emergency line. She takes a message and gives no medical or care advice: clinical questions go to your dental team." },
    { question: "How much does an AI receptionist cost compared to a dental front desk hire?", answer: "A front desk hire means a full salary plus benefits and training, and covers business hours only. Human answering services price by minutes or calls: for example, PATLive starts at $189/month for 100 minutes and Smith.ai's virtual receptionists run $300-$2,100/month for 30-300 calls (vendor pricing pages, checked October 2026). Dooza's AI Receptionist answers 24/7. Pricing depends on the product, and every Dooza product starts with a refundable pilot: 100% refund within 14 days." },
    { question: "Can the AI handle dental insurance questions?", answer: "Rachel can be configured with your accepted insurance plans and common coverage questions. She tells callers whether you accept their insurance and what to bring to their appointment. For complex benefits questions, she routes the caller to your billing team." },
    { question: "Does the AI know the difference between a hygienist appointment and a dentist appointment?", answer: "Yes. During setup, you configure Rachel with your appointment types, durations, and provider assignments. She books cleanings with hygienists and procedures with dentists -- automatically matching the right provider to the right appointment type." }
];

export default function AiReceptionistForDentalOfficeContent() {
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
            const sections = ['introduction', 'front-desk-crisis', 'what-dentists-need', 'ai-for-dental', 'emergency-handling', 'hipaa-compliance', 'cost-comparison', 'meet-rachel', 'getting-started', 'faq'];
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
                        { label: 'AI Receptionist for Dental Office' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Shield size={16} />
                            <span>Industry Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Automating the <span className="text-primary-600">Front Desk</span>: How AI Handles Dental Emergencies & Scheduling
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Many dental calls come after hours, and many calls to small businesses go unanswered. An AI receptionist for your dental office picks up every call, routes emergencies, answers insurance questions, and books the right appointment -- 24/7. Start with a refundable pilot: 100% refund within 14 days.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 23, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/ai-receptionist/book"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Start your pilot
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
                                    { id: 'front-desk-crisis', label: 'The Front Desk Crisis' },
                                    { id: 'what-dentists-need', label: 'What Dentists Need' },
                                    { id: 'ai-for-dental', label: 'AI for Dental' },
                                    { id: 'emergency-handling', label: 'Emergency Handling' },
                                    { id: 'hipaa-compliance', label: 'HIPAA & Compliance' },
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
                                <p className="text-sm text-slate-600 mb-4">Never miss a patient call again</p>
                                <a
                                    href="/ai-receptionist/book"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="ai-receptionist-for-dental-office" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction - CHALLENGE */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    It's 10 PM on a Saturday night. A patient chips a tooth on a popcorn kernel. They grab their phone, call your office. Voicemail. They Google "emergency dentist near me" and book with your competitor.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    You just lost a patient -- and every visit they would have made over the years -- because nobody answered the phone.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That example is made up, but the pattern is common. Many dental calls come after hours, and many calls to small businesses go unanswered entirely. That means a real share of your patients are calling when nobody is at the front desk -- and many of those calls are disappearing into voicemail purgatory.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/seo-for-doctors-dentists" className="text-primary-600 hover:underline font-medium">As we covered in our dental SEO guide</Link>, getting patients to find your practice online is only half the battle. The other half? Actually answering the phone when they call.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="6Ait5R-3-lI"
                                        title="Alex Hormozi’s New Playbook: Entrepreneurship in the Age of AI (Replit)"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Alex Hormozi with Replit CEO Amjad Masad on offers, acquisition and AI agents (Replit, October 2025)</p>
                                </div>


                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Real Cost of a Missed Call</h4>
                                            <p className="text-slate-700">
                                                A new patient is rarely one appointment -- cleanings, X-rays, fillings, crowns, and referrals can follow for years. Every missed call isn't just a missed appointment. It's a missed relationship. Check your own records for what an average patient is worth to your practice.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The Front Desk Crisis - CHALLENGE */}
                        <section id="front-desk-crisis" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Front Desk Crisis in Dental Offices</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Your front desk receptionist is the first point of contact for every patient. But dental offices face a unique staffing challenge that makes consistent phone coverage nearly impossible.
                            </p>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <DollarSign className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Do the Math With Your Own Numbers</h4>
                                        <p className="text-slate-700 mb-3">
                                            Illustrative formula, not a typical result. Use your own numbers:
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-white">
                                                <span className="text-slate-700">Missed new-patient calls per month</span>
                                                <span className="text-slate-900 font-medium">from your phone log</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-white">
                                                <span className="text-slate-700">x Share of those callers who book elsewhere</span>
                                                <span className="text-slate-900 font-medium">your estimate</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-white">
                                                <span className="text-slate-700">x What a new patient is worth to your practice</span>
                                                <span className="text-slate-900 font-medium">from your records</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-red-100 font-bold text-red-800">
                                                <span>= Revenue at risk each month</span>
                                                <span className="text-xl">your number</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-red-600 mt-3">
                                            Not every missed caller is a lost patient, so be honest with the middle number.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Dental Offices Actually Need - RESULT */}
                        <section id="what-dentists-need" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Dental Offices Actually Need From a Phone System</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Before we talk about solutions, let's define what the ideal front desk phone experience looks like for a dental practice. Because dental offices have unique requirements that generic answering services simply can't handle.
                                </p>
                            </div>

                            <div className="grid gap-4 mb-8">
                                {[
                                    { icon: Clock, title: "24/7 Call Coverage", desc: "Including nights, weekends, and holidays. Dental emergencies don't follow business hours -- a knocked-out tooth at 9 PM needs to reach the on-call dentist, not a voicemail box." },
                                    { icon: AlertTriangle, title: "Emergency Triage Capability", desc: "The ability to ask the right questions and determine: is this urgent (needs to be seen today), moderate (book an emergency slot for tomorrow), or routine (schedule a regular appointment)?" },
                                    { icon: Shield, title: "Insurance Questions", desc: "\"Do you take Delta Dental?\" \"Is Cigna accepted?\" \"What about MetLife?\" These are the most common first questions from new patients. If the phone can't answer them, the patient hangs up." },
                                    { icon: Calendar, title: "Smart Scheduling", desc: "Matching the right appointment type to the right provider -- cleanings with hygienists, procedures with dentists, emergencies with the first available slot. Not just blocking time, but intelligent routing." },
                                    { icon: Bell, title: "Appointment Reminders", desc: "No-shows cost dental practices thousands per month. Automated SMS reminders before appointments dramatically reduce missed visits and keep the schedule full." },
                                    { icon: FileText, title: "HIPAA-Aware Call Handling", desc: "Patient privacy matters. Ask any phone vendor whether it is a HIPAA service and signs a Business Associate Agreement (BAA) before patient calls go through it." }
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
                                            Imagine every call answered instantly. Every emergency triaged correctly. Every insurance question handled. Every appointment booked with the right provider. Every patient reminded before their visit. All without adding headcount, paying overtime, or worrying about sick days and turnover. That's what dental offices actually need -- and until recently, it wasn't possible without a massive staffing budget.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: AI Receptionist for Dental Offices - TRANSFORMATION */}
                        <section id="ai-for-dental" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How an AI Receptionist Solves Every Dental Front Desk Problem</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline font-medium">AI receptionist</Link> isn't a generic call answering bot. When configured for a dental practice, it becomes a specialized dental front desk assistant that understands the unique needs of your patients and your practice.
                                </p>
                            </div>


                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        icon: AlertTriangle,
                                        title: "Emergency Triage",
                                        desc: "Asks pain level, symptoms, and timing to classify urgency. Routes true emergencies to the on-call dentist or your emergency line. Takes a detailed message for everything else. Gives no medical or care advice.",
                                        color: "red"
                                    },
                                    {
                                        icon: Calendar,
                                        title: "Smart Scheduling",
                                        desc: "Books cleanings and check-ups with hygienists. Routes fillings, crowns, and procedures to the right dentist. Matches appointment duration to procedure type automatically.",
                                        color: "blue"
                                    },
                                    {
                                        icon: Shield,
                                        title: "Insurance Handling",
                                        desc: "Knows your accepted plans -- Delta Dental, Cigna, MetLife, Aetna, and more. Answers coverage questions and tells new patients what to bring to their first visit.",
                                        color: "green"
                                    },
                                    {
                                        icon: Bell,
                                        title: "Appointment Reminders",
                                        desc: "Can send SMS appointment reminders and let patients confirm or reschedule by text.",
                                        color: "amber"
                                    },
                                    {
                                        icon: UserPlus,
                                        title: "New Patient Intake",
                                        desc: "Collects name, contact info, insurance details, and reason for visit before the first appointment. Sends new patient forms via text. Patients arrive ready.",
                                        color: "purple"
                                    },
                                    {
                                        icon: Phone,
                                        title: "After-Hours Coverage",
                                        desc: "Handles the calls that come outside business hours. No more lost Saturday night emergency patients. No more Monday morning voicemail backlog.",
                                        color: "teal"
                                    }
                                ].map((item, idx) => {
                                    const colorMap = {
                                        red: { bg: 'bg-red-100', text: 'text-red-600' },
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

                        {/* Section 5: How AI Handles Dental Emergencies - TRANSFORMATION */}
                        <section id="emergency-handling" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How AI Handles Dental Emergencies: 4 Example Scenarios</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                The real test of any dental phone system is how it handles emergencies. Example scenarios (illustrative, not customer calls): here's how an AI receptionist can walk through four common dental emergency calls -- step by step. In every case the AI takes a message or routes the call; care instructions come from your dentist.
                            </p>

                            {/* Scenario 1: Chipped Tooth - Moderate (Amber) */}
                            <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-200 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                                        <Stethoscope size={24} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-amber-700 bg-amber-200 px-2 py-0.5 rounded-full">MODERATE URGENCY</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scenario 1: Chipped Tooth (Saturday Night)</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 rounded-lg border border-amber-100">
                                                <p className="text-sm text-slate-500 font-medium mb-1">Patient calls at 10:15 PM Saturday</p>
                                                <p className="text-slate-700 italic">"I just chipped my tooth on a popcorn kernel. It hurts and I can feel a sharp edge."</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-amber-100">
                                                <p className="text-sm text-amber-600 font-medium mb-1">Rachel asks triage questions:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- "Can you describe the pain on a scale of 1 to 10?"</li>
                                                    <li>- "Is there any bleeding?"</li>
                                                    <li>- "Can you see any exposed nerve or dark spot inside the chip?"</li>
                                                    <li>- "When did this happen?"</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-amber-100">
                                                <p className="text-sm text-amber-600 font-medium mb-1">Rachel classifies as MODERATE and responds:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- Books a Monday morning emergency slot with the dentist</li>
                                                    <li>- Takes a message for the dentist with what happened and the pain level (no care advice from the AI)</li>
                                                    <li>- Confirms the appointment with the caller on the call</li>
                                                    <li>- Sends the dentist a summary of the call</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 2: Knocked Out Tooth - Urgent (Red) */}
                            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center text-red-700 shrink-0">
                                        <AlertTriangle size={24} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-red-700 bg-red-200 px-2 py-0.5 rounded-full">URGENT</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scenario 2: Knocked Out Tooth (Sunday Afternoon)</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-slate-500 font-medium mb-1">Patient calls at 3:00 PM Sunday</p>
                                                <p className="text-slate-700 italic">"My son just got hit in the mouth playing basketball. His front tooth got knocked completely out."</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-red-600 font-medium mb-1">Rachel identifies URGENT situation immediately:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- "Is this a permanent tooth or a baby tooth?"</li>
                                                    <li>- "Do you have the tooth? Is it intact?"</li>
                                                    <li>- "How long ago did this happen?"</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-red-600 font-medium mb-1">Rachel classifies as URGENT and takes immediate action:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- Attempts to reach the on-call dentist via phone/text</li>
                                                    <li>- Takes the caller's name, number and what happened, and passes it straight to the dentist. Rachel gives no first-aid or care instructions: that is the dentist's call</li>
                                                    <li>- If the on-call dentist is unreachable, routes the caller to the emergency line or clinic number your practice has set</li>
                                                    <li>- Sends urgent alert to the practice owner</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 3: Lost Crown - Non-Urgent (Green) */}
                            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center text-green-700 shrink-0">
                                        <Stethoscope size={24} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-green-700 bg-green-200 px-2 py-0.5 rounded-full">NON-URGENT</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scenario 3: Lost Crown (Weekday Evening)</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 rounded-lg border border-green-100">
                                                <p className="text-sm text-slate-500 font-medium mb-1">Patient calls at 7:30 PM Tuesday</p>
                                                <p className="text-slate-700 italic">"My crown just fell off while I was eating dinner. There's no pain but the tooth underneath feels weird."</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-green-100">
                                                <p className="text-sm text-green-600 font-medium mb-1">Rachel asks clarifying questions:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- "Are you experiencing any pain or sensitivity?"</li>
                                                    <li>- "Do you still have the crown? Is it intact or broken?"</li>
                                                    <li>- "Is there any bleeding?"</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-green-100">
                                                <p className="text-sm text-green-600 font-medium mb-1">Rachel classifies as NON-URGENT and responds:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- Books a next-day appointment with the dentist</li>
                                                    <li>- Takes a message for the dentist about the crown (no care advice from the AI)</li>
                                                    <li>- Confirms the appointment details with the caller on the call</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenario 4: Routine Cleaning Request (Green) */}
                            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center text-green-700 shrink-0">
                                        <Calendar size={24} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-green-700 bg-green-200 px-2 py-0.5 rounded-full">ROUTINE</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scenario 4: New Patient Cleaning Request (After Hours)</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-4 rounded-lg border border-green-100">
                                                <p className="text-sm text-slate-500 font-medium mb-1">New patient calls at 8:45 PM Wednesday</p>
                                                <p className="text-slate-700 italic">"Hi, I just moved to the area and I need to schedule a cleaning. Do you take Blue Cross Blue Shield?"</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-green-100">
                                                <p className="text-sm text-green-600 font-medium mb-1">Rachel handles the full intake:</p>
                                                <ul className="text-slate-700 text-sm space-y-1">
                                                    <li>- Confirms insurance acceptance: "Yes, we accept Blue Cross Blue Shield."</li>
                                                    <li>- Collects new patient information: name, phone, email, insurance ID</li>
                                                    <li>- Books a 60-minute new patient cleaning with the hygienist</li>
                                                    <li>- Sends new patient paperwork via text link</li>
                                                    <li>- Advises what to bring: "Please bring your insurance card and photo ID to your appointment."</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <p className="text-slate-700 font-medium text-center">
                                    These are scripted examples, not recordings of customer calls. The point: all four calls come after business hours, and without someone or something answering, each caller reaches voicemail.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: HIPAA & Compliance - TRANSFORMATION */}
                        <section id="hipaa-compliance" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">HIPAA & Compliance: What You Need to Know</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    For any dental practice, patient privacy is non-negotiable. When considering an AI receptionist, HIPAA is the first question -- and rightfully so. The plain answer: <strong>Dooza's AI Receptionist is not offered as a HIPAA service, and Dooza does not sign a Business Associate Agreement (BAA).</strong> If your practice needs a HIPAA-covered phone vendor, choose one that signs a BAA. Here's what Rachel does and doesn't handle.
                                </p>
                            </div>

                            <div className="bg-primary-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Shield size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">How Rachel Limits What She Handles</h3>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "No Patient Health Records Stored",
                                                    desc: "Rachel doesn't store diagnoses, treatment history, or medical records. She handles scheduling and triage, not clinical data."
                                                },
                                                {
                                                    title: "Encrypted Connections",
                                                    desc: "Encrypted connections and your approval on anything sensitive."
                                                },
                                                {
                                                    title: "No Access to Practice Management Systems",
                                                    desc: "Rachel doesn't connect to your PMS (Dentrix, Eaglesoft, Open Dental, etc.). She operates independently as a scheduling and triage layer."
                                                },
                                                {
                                                    title: "Scheduling-Relevant Information Only",
                                                    desc: "Rachel collects only what's needed to book appointments and triage emergencies: name, contact info, reason for visit, insurance plan, and urgency level."
                                                },
                                                {
                                                    title: "Transparent About Being AI",
                                                    desc: "When asked, Rachel is honest about being an AI assistant. She introduces herself by name and handles conversations professionally and transparently."
                                                }
                                            ].map((item, idx) => (
                                                <div key={idx} className="bg-white p-4 rounded-lg border border-primary-100">
                                                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-slate-600 text-sm ml-7">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Key Distinction</h4>
                                        <p className="text-slate-700">
                                            Rachel is a <strong>scheduling and triage tool</strong>, not a clinical tool. She doesn't give medical or care advice, isn't a HIPAA service, doesn't access patient charts, and doesn't replace clinical judgment. She handles the administrative side of phone calls -- the same work your front desk receptionist does -- while routing clinical questions to your dental team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Cost Comparison - TRANSFORMATION */}
                        <section id="cost-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Cost Comparison: Front Desk vs. Answering Service vs. AI</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Every dental practice needs reliable phone coverage. But the cost differences between your options are staggering. As we detailed in our <Link href="/blog/virtual-receptionist-for-small-business" className="text-primary-600 hover:underline font-medium">virtual receptionist guide</Link>, AI has fundamentally changed the math.
                            </p>

                            <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8">
                                <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                    "One customer comes embedded within it enough gross profit to pay for that customer at the cost of delivering to that customer… If you can accomplish that… within a 30 day cycle, then almost all businesses have interest-free cash available to them."
                                </p>
                                <p className="text-slate-600 text-sm">
                                    For a dental practice, that means the first visit should pay back what it cost to win the patient. A call that goes to voicemail loses the patient before that math even starts.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, talking with Replit CEO Amjad Masad (Replit, October 2025)</p>
                            </div>

                            {/* Comparison Table */}
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Front Desk<br /><span className="font-normal text-xs text-slate-500">Receptionist</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Answering<br /><span className="font-normal text-xs text-slate-500">Service</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Rachel AI<br /><span className="font-normal text-xs text-primary-500">Dooza</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Monthly Cost", desk: "Full salary + benefits", service: "$189-$2,100 (PATLive, Smith.ai; checked Oct 2026)", rachel: "Refundable pilot (see /pricing)" },
                                            { feature: "Availability", desk: "Business hours only", service: "Extended hours (varies)", rachel: "24/7/365" },
                                            { feature: "Emergency Triage", desk: "Trained judgment", service: "Scripted (varies)", rachel: "Your approved questions + a message for the dentist" },
                                            { feature: "Insurance Questions", desk: "Knowledgeable", service: "Varies by vendor", rachel: "Configured per practice" },
                                            { feature: "Appointment Booking", desk: "Yes", service: "Varies by vendor", rachel: "Automatic booking" },
                                            { feature: "Setup Time", desk: "2-4 weeks hiring + training", service: "1-2 weeks", rachel: "Set up with you during the pilot" },
                                            { feature: "Consistency", desk: "Varies by person/day", service: "Varies by operator", rachel: "Follows your approved script" }
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
                                    <div className="text-3xl font-bold text-red-600 mb-2">Full salary</div>
                                    <p className="text-sm text-slate-700 font-medium">Front Desk Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">Salary + benefits + training</p>
                                    <p className="text-xs text-slate-500">Business hours only</p>
                                    <p className="text-xs text-red-500 mt-2">Plus hiring and training costs</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$189-2,100</div>
                                    <p className="text-sm text-slate-700 font-medium">Human Answering Service</p>
                                    <p className="text-xs text-slate-500 mt-1">Limited call volume</p>
                                    <p className="text-xs text-slate-500">Booking varies by vendor</p>
                                    <p className="text-xs text-amber-500 mt-2">PATLive, Smith.ai plans, checked Oct 2026</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">14-day</div>
                                    <p className="text-xs text-green-700 font-bold mb-2">refundable pilot</p>
                                    <p className="text-sm text-green-800 font-medium">Rachel AI (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">24/7 call answering</p>
                                    <p className="text-xs text-green-600">Emergency triage + booking</p>
                                    <p className="text-xs text-green-700 font-bold mt-2"><a href="/pricing" className="underline">Pricing depends on the product</a></p>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                <p className="text-2xl font-bold text-green-700">Cover the phones 24/7, with a refundable pilot</p>
                                <p className="text-green-600 mt-2">And get 24/7 coverage, emergency triage, and smart scheduling included</p>
                            </div>
                        </section>

                        {/* Section 8: Meet Rachel - TRANSFORMATION */}
                        <section id="meet-rachel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Rachel: Your Dental Office AI Receptionist</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Phone size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Rachel -- AI Receptionist for Dental Offices</h3>
                                        <p className="text-lg text-slate-700">
                                            Rachel answers your practice phone like your best front desk employee -- but she never takes a day off and never puts a patient on hold. She's specifically configurable for dental practices with emergency protocols, insurance knowledge, and smart provider matching.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Pickup", desc: "Answers every call. No hold music, no voicemail." },
                                    { icon: AlertTriangle, title: "Emergency Triage", desc: "Dental emergency protocols classify urgency and take an urgent message for the dentist." },
                                    { icon: Shield, title: "Insurance Knowledge", desc: "Tells callers which plans you accept. Takes a message for your team on benefits questions." },
                                    { icon: Calendar, title: "Smart Scheduling", desc: "Books hygienist vs. dentist appointments automatically." },
                                    { icon: MessageSquare, title: "Booking Confirmation", desc: "Reads back the date and time before the patient hangs up." },
                                    { icon: UserPlus, title: "New Patient Intake", desc: "Collects new patient details on the call." },
                                    { icon: Phone, title: "After-Hours Coverage", desc: "Handles the calls that come outside business hours." },
                                    { icon: FileText, title: "Call Summaries", desc: "Detailed summary of every call sent to your team via email." }
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

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Want to make sure patients find your practice before they call? <Link href="/blog/seo-for-doctors-dentists" className="text-primary-600 hover:underline font-medium">Read our dental SEO guide</Link> to learn how Ranky, your AI SEO specialist, keeps your practice visible on Google and AI recommendation engines.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Getting Started - TRANSFORMATION */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Rachel Running for Your Dental Practice in 3 Steps</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Setting up starts with one free 30-minute call, and we set it up on your line with you during the pilot. Here's how it works:
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Start Your Dooza Pilot",
                                        desc: "Book a free pilot call. A Dooza engineer scopes your AI Receptionist pilot with you. Every Dooza product starts with a refundable pilot: 100% refund within 14 days."
                                    },
                                    {
                                        step: "2",
                                        title: "Configure Your Dental Practice",
                                        desc: "Set up your specific services (cleanings, fillings, crowns, extractions, emergencies), provider names and schedules (hygienists vs. dentists), accepted insurance plans (Delta Dental, Cigna, MetLife, etc.), and emergency triage protocols. A Dooza engineer can scope and set this up with you on a free 30-minute pilot call."
                                    },
                                    {
                                        step: "3",
                                        title: "Forward Your Office Phone Line to Rachel",
                                        desc: "Set up call forwarding from your office phone to Rachel's number. Works with any phone system -- landline, VoIP, or cell. We set it up with you during the pilot."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Stop Losing Patients to Voicemail?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Every missed call can be a missed patient. Rachel answers every call, routes emergencies, and books appointments. Start with a refundable pilot: 100% refund within 14 days.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="/ai-receptionist/book" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Healthcare Compliance</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>- <a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HHS.gov -- HIPAA Privacy Rule overview</a></li>
                                        <li>- <a href="https://www.ada.org/resources/practice/legal-and-regulatory" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ADA -- Legal and regulatory guidance for dental practices</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Emergency Dental Protocols</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>- <a href="https://www.aae.org/patients/dental-emergencies/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">American Association of Endodontists -- Dental emergency guide</a></li>
                                        <li>- <a href="https://www.mouthhealthy.org/en/dental-care-concerns/dental-emergencies" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ADA MouthHealthy -- What to do in a dental emergency</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-receptionist-for-dental-office" category="Industry Guide" tags={['AI Receptionist', 'Dental Office', 'Healthcare AI']} />
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
