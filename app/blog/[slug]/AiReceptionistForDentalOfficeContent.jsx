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
    { question: "Is an AI receptionist HIPAA-compliant for dental offices?", answer: "Dooza's Rachel is designed with healthcare privacy in mind. She doesn't store patient health records, doesn't access your practice management system, and conversations are encrypted. She collects only the information needed to schedule appointments and triage urgency." },
    { question: "Can the AI triage dental emergencies?", answer: "Yes. Rachel is configured with dental emergency protocols -- she asks the right questions (What happened? When? Pain level? Bleeding?), classifies urgency, and either books an emergency slot or provides after-hours instructions based on your practice's guidelines." },
    { question: "How much does an AI receptionist cost compared to a dental front desk hire?", answer: "A dental front desk receptionist costs $3,500-4,500/month in salary alone, plus benefits and training. An answering service runs $500-1,200/month with limited hours. Dooza's Rachel costs $29/month -- 24/7, unlimited calls, with dental-specific configuration." },
    { question: "Can the AI handle dental insurance questions?", answer: "Rachel can be configured with your accepted insurance plans and common coverage questions. She tells callers whether you accept their insurance and what to bring to their appointment. For complex benefits questions, she routes the caller to your billing team." },
    { question: "Does the AI know the difference between a hygienist appointment and a dentist appointment?", answer: "Yes. During setup, you configure Rachel with your appointment types, durations, and provider assignments. She books cleanings with hygienists and procedures with dentists -- automatically matching the right provider to the right appointment type." }
];

export default function AiReceptionistForDentalOfficeContent() {
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
                            35% of dental calls come after hours. 62% of small business calls go unanswered. An AI receptionist for your dental office picks up every call, triages emergencies, verifies insurance, and books the right appointment -- 24/7, for $29/month.
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
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Rachel Free
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
                                    You just lost a patient -- and potentially <strong>$3,000+ in lifetime value</strong> -- because nobody answered the phone.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This isn't a hypothetical scenario. It happens to dental practices every single weekend. According to industry data, 35% of dental calls come after hours, and 62% of calls to small businesses go unanswered entirely. That means more than one in three of your patients are calling when nobody is at the front desk -- and most of those calls are disappearing into voicemail purgatory.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/seo-for-doctors-dentists" className="text-primary-600 hover:underline font-medium">As we covered in our dental SEO guide</Link>, getting patients to find your practice online is only half the battle. The other half? Actually answering the phone when they call.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="6Ait5R-3-lI"
                                        title="Alex Hormozi & Amjad Massad on AI for Service Businesses"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Alex Hormozi and Replit CEO Amjad Massad on how AI is transforming service businesses — from missed calls to booked appointments</p>
                                </div>

                                <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl my-8">
                                    <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                        "If you were a dentist, you do Invisalines, person comes in, you make three times your money, and then after that you get them onto the subscription — cleanings and whitening on an ongoing basis. Almost every business can structure it this way."
                                    </p>
                                    <p className="text-slate-600 text-sm">
                                        Hormozi uses dental practices as his go-to example of lifetime value because the math is so clear. One new patient isn't one cleaning — it's a decade of cleanings, X-rays, fillings, crowns, whitening, and family referrals. That's $3,000-5,000 in lifetime revenue. But that entire revenue stream starts with a single phone call. If that call goes to voicemail on a Saturday night, you don't just lose the emergency appointment — you lose the entire relationship.
                                    </p>
                                    <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, conversation with Replit CEO Amjad Massad</p>
                                </div>

                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Real Cost of a Missed Call</h4>
                                            <p className="text-slate-700">
                                                The average dental patient is worth <strong>$3,000-5,000 in lifetime value</strong> -- regular cleanings, X-rays, fillings, crowns, and referrals. Every missed call isn't just a missed appointment. It's a missed relationship that could have generated thousands in revenue over the next decade.
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

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "25-30%", label: "Annual turnover rate for dental front desk staff", source: "Dental Economics" },
                                    { stat: "$3,000-5,000", label: "Cost to hire and train a single replacement", source: "ADA Practice Management" },
                                    { stat: "35%", label: "of dental calls come after hours", source: "Dental Intelligence" },
                                    { stat: "62%", label: "of calls to small businesses go unanswered", source: "Forbes" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <p className="text-xs text-red-500">{item.source}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <DollarSign className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The True Cost: Do the Math</h4>
                                        <p className="text-slate-700 mb-3">
                                            If your practice misses just <strong>5 new patient calls per month</strong> -- which is conservative given the statistics above -- here's what that costs:
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-white">
                                                <span className="text-slate-700">Missed new patient calls/month</span>
                                                <span className="text-slate-900 font-medium">5</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-white">
                                                <span className="text-slate-700">Average patient lifetime value</span>
                                                <span className="text-slate-900 font-medium">$4,000</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-red-100 font-bold text-red-800">
                                                <span>Annual lost lifetime revenue</span>
                                                <span className="text-xl">$240,000</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-red-600 mt-3">
                                            That's a quarter million dollars walking out the door every year -- to competitors who simply answered the phone.
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
                                    { icon: Clock, title: "24/7 Call Coverage", desc: "Including nights, weekends, and holidays. Dental emergencies don't follow business hours -- a knocked-out tooth at 9 PM needs immediate guidance, not a voicemail box." },
                                    { icon: AlertTriangle, title: "Emergency Triage Capability", desc: "The ability to ask the right questions and determine: is this urgent (needs to be seen today), moderate (book an emergency slot for tomorrow), or routine (schedule a regular appointment)?" },
                                    { icon: Shield, title: "Insurance Verification", desc: "\"Do you take Delta Dental?\" \"Is Cigna accepted?\" \"What about MetLife?\" These are the most common first questions from new patients. If the phone can't answer them, the patient hangs up." },
                                    { icon: Calendar, title: "Smart Scheduling", desc: "Matching the right appointment type to the right provider -- cleanings with hygienists, procedures with dentists, emergencies with the first available slot. Not just blocking time, but intelligent routing." },
                                    { icon: Bell, title: "Appointment Reminders", desc: "No-shows cost dental practices thousands per month. Automated SMS reminders before appointments dramatically reduce missed visits and keep the schedule full." },
                                    { icon: FileText, title: "HIPAA-Aware Call Handling", desc: "Patient privacy matters. Any phone system handling dental calls needs to be designed with healthcare privacy in mind -- no storing health records, encrypted conversations, and transparent data handling." }
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

                            <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8">
                                <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                    "It would make a mistake and I would correct it — and every single time after that, it would do it right. I've trained a lot of salespeople. This was scary in a cool way. It just doesn't make a mistake after."
                                </p>
                                <p className="text-slate-600 text-sm">
                                    For dental offices, this consistency is critical. When a panicking patient calls about a knocked-out tooth at 10 PM, you need the AI to follow the emergency protocol perfectly — every single time. Unlike a rotating pool of answering service operators who might forget to ask about bleeding or give wrong reimplantation instructions, an AI receptionist configured with your dental protocols executes them flawlessly on every call.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, conversation with Replit CEO Amjad Massad</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        icon: AlertTriangle,
                                        title: "Emergency Triage",
                                        desc: "Asks pain level, symptoms, and timing to classify urgency. Routes true emergencies to the on-call dentist. Provides immediate care instructions for everything else.",
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
                                        desc: "Sends SMS reminders 48 hours and 2 hours before appointments. Reduces no-shows by 30% or more. Allows patients to confirm or reschedule via text.",
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
                                        desc: "Handles the 35% of calls that come outside business hours. No more lost Saturday night emergency patients. No more Monday morning voicemail backlog.",
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How AI Handles Dental Emergencies: 4 Real Scenarios</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                The real test of any dental phone system is how it handles emergencies. Here's exactly how an AI receptionist walks through the four most common dental emergency calls -- step by step.
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
                                                    <li>- Provides care instructions: "Avoid chewing on that side. If you have dental wax or sugar-free gum, you can cover the sharp edge to protect your tongue."</li>
                                                    <li>- Sends appointment confirmation via SMS</li>
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
                                                    <li>- Provides critical 30-minute reimplantation guidance: "Pick the tooth up by the crown -- the white part -- never the root. Rinse it gently with milk or saline. Try to place it back in the socket. If you can't, keep it in a glass of milk. Time is critical -- you have about 30 minutes for the best chance of saving the tooth."</li>
                                                    <li>- If on-call dentist unreachable, provides nearest emergency dental clinic information</li>
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
                                                    <li>- Advises temporary care: "Keep the crown safe and bring it with you. You can use temporary dental cement from any pharmacy -- Dentemp is a common brand -- to hold it in place until your appointment. Avoid chewing on that side."</li>
                                                    <li>- Sends confirmation with appointment details and care instructions via SMS</li>
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
                                    All four of these scenarios happened after business hours. Without an AI receptionist, every one of these patients would have reached voicemail -- and most would have called another practice instead.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: HIPAA & Compliance - TRANSFORMATION */}
                        <section id="hipaa-compliance" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">HIPAA & Compliance: What You Need to Know</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    For any dental practice, patient privacy is non-negotiable. When considering an AI receptionist, HIPAA compliance is the first question -- and rightfully so. Here's how Rachel is designed with healthcare privacy at the core.
                                </p>
                            </div>

                            <div className="bg-primary-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Shield size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Rachel's Privacy-First Design</h3>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "No Patient Health Records Stored",
                                                    desc: "Rachel doesn't store diagnoses, treatment history, or medical records. She handles scheduling and triage, not clinical data."
                                                },
                                                {
                                                    title: "Encrypted Conversations",
                                                    desc: "All call data and conversations are encrypted in transit and at rest, meeting industry standards for data security."
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
                                            Rachel is a <strong>scheduling and triage tool</strong>, not a clinical tool. She doesn't give medical advice, doesn't access patient charts, and doesn't replace clinical judgment. She handles the administrative side of phone calls -- the same work your front desk receptionist does -- while routing clinical questions to your dental team.
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
                                    "One customer comes in with enough gross profit embedded to pay for that customer plus the cost of acquiring the next customer. If you can accomplish that within a 30-day cycle, cash is no longer a constraint to growth."
                                </p>
                                <p className="text-slate-600 text-sm">
                                    Hormozi's "money model" math works perfectly for dental practices. Rachel costs $29/month. One captured emergency patient who would have otherwise called your competitor is worth $3,000+ in lifetime revenue. That single answered call doesn't just pay for Rachel — it funds your entire marketing budget for the year. The ROI isn't 10x. It's 100x.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, conversation with Replit CEO Amjad Massad</p>
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
                                            { feature: "Monthly Cost", desk: "$3,500-4,500", service: "$500-1,200", rachel: "$29" },
                                            { feature: "Availability", desk: "Business hours only", service: "Extended hours (varies)", rachel: "24/7/365" },
                                            { feature: "Emergency Triage", desk: "Trained judgment", service: "Basic script only", rachel: "AI dental protocols" },
                                            { feature: "Insurance Questions", desk: "Knowledgeable", service: "Usually can't answer", rachel: "Configured per practice" },
                                            { feature: "Appointment Booking", desk: "Yes", service: "Message-taking only", rachel: "Automatic booking" },
                                            { feature: "Setup Time", desk: "2-4 weeks hiring + training", service: "1-2 weeks", rachel: "30 minutes" },
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
                                    <div className="text-3xl font-bold text-red-600 mb-2">$3,500-4,500</div>
                                    <p className="text-sm text-slate-700 font-medium">Front Desk Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">Salary + benefits + training</p>
                                    <p className="text-xs text-slate-500">Business hours only</p>
                                    <p className="text-xs text-red-500 mt-2">$42,000-54,000/year</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$500-1,200</div>
                                    <p className="text-sm text-slate-700 font-medium">Dental Answering Service</p>
                                    <p className="text-xs text-slate-500 mt-1">Limited call volume</p>
                                    <p className="text-xs text-slate-500">No booking or triage</p>
                                    <p className="text-xs text-amber-500 mt-2">$6,000-14,400/year</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$29/mo</div>
                                    <p className="text-sm text-green-800 font-medium">Rachel AI (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">Unlimited calls, 24/7</p>
                                    <p className="text-xs text-green-600">Emergency triage + booking</p>
                                    <p className="text-xs text-green-700 font-bold mt-2">$348/year total</p>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                <p className="text-2xl font-bold text-green-700">Save $41,652-$53,652/year vs. a full-time hire</p>
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
                                            Rachel answers your practice phone like your best front desk employee -- but she never takes a day off, never puts a patient on hold, and costs less than a single dental crown. She's specifically configurable for dental practices with emergency protocols, insurance knowledge, and smart provider matching.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Pickup", desc: "Answers in under 1 second. No rings, no hold music, no voicemail." },
                                    { icon: AlertTriangle, title: "Emergency Triage", desc: "Dental emergency protocols classify urgency and route appropriately." },
                                    { icon: Shield, title: "Insurance Knowledge", desc: "Knows your accepted plans. Answers coverage questions instantly." },
                                    { icon: Calendar, title: "Smart Scheduling", desc: "Books hygienist vs. dentist appointments automatically." },
                                    { icon: MessageSquare, title: "SMS Reminders", desc: "Reduces no-shows by 30%+ with automated appointment reminders." },
                                    { icon: UserPlus, title: "New Patient Intake", desc: "Collects info and sends forms before the first visit." },
                                    { icon: Phone, title: "After-Hours Coverage", desc: "Handles the 35% of calls that come outside business hours." },
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
                                    Want to make sure patients find your practice before they call? <Link href="/blog/seo-for-doctors-dentists" className="text-primary-600 hover:underline font-medium">Read our dental SEO guide</Link> to learn how Seomi, your AI SEO specialist, keeps your practice visible on Google and AI recommendation engines.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Getting Started - TRANSFORMATION */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Rachel Running for Your Dental Practice in 3 Steps</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Setting up an AI receptionist for your dental office takes less time than a single patient appointment. Here's exactly how it works:
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
                                        title: "Configure Your Dental Practice",
                                        desc: "Set up your specific services (cleanings, fillings, crowns, extractions, emergencies), provider names and schedules (hygienists vs. dentists), accepted insurance plans (Delta Dental, Cigna, MetLife, etc.), and emergency triage protocols. Our free concierge onboarding team handles this for you if you prefer."
                                    },
                                    {
                                        step: "3",
                                        title: "Forward Your Office Phone Line to Rachel",
                                        desc: "Set up call forwarding from your office phone to Rachel's number. Works with any phone system -- landline, VoIP, or cell. Takes about 5 minutes. Rachel answers your next call."
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
                                    Every missed call is a missed patient. Every missed patient is $3,000-5,000 in lifetime revenue. Rachel answers every call, triages every emergency, and books every appointment -- for $29/month.
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Dental Industry Data</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>- <a href="https://www.dentaleconomics.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Dental Economics -- Staff turnover rates in dental practices</a></li>
                                        <li>- <a href="https://www.ada.org/resources/practice/practice-management" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">American Dental Association -- Practice management resources</a></li>
                                        <li>- <a href="https://www.dentalintel.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Dental Intelligence -- After-hours call statistics</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Small Business Phone Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>- <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Forbes -- 62% of SMB calls go unanswered</a></li>
                                        <li>- <a href="https://www.att.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">AT&T Research -- Voicemail behavior statistics</a></li>
                                    </ul>
                                </div>
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
