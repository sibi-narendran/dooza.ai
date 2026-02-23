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
    Zap,
    Phone,
    Users,
    AlertTriangle,
    MessageSquare,
    Scissors,
    Star,
    PhoneOff,
    PhoneCall,
    UserCheck,
    Send,
    RefreshCw,
    Moon,
    Palette,
    ListChecks
} from 'lucide-react';

const faqData = [
    {
        question: "Can an AI receptionist handle salon-specific services like balayage, extensions, or keratin treatments?",
        answer: "Yes. During setup, you configure Rachel with your full service menu — including descriptions, durations, and pricing. She knows the difference between a balayage and a basic highlight, and books the correct time slot automatically."
    },
    {
        question: "Will the AI match clients with the right stylist?",
        answer: "Absolutely. Rachel can be configured with each stylist's specialties, availability, and booking rules. If a client asks for color correction, she routes them to your color specialist — not your blowout-only stylist."
    },
    {
        question: "How much does an AI receptionist cost for a salon?",
        answer: "Dooza's Rachel costs $29/month — unlimited calls, 24/7. Compare that to a front desk receptionist at $2,500-3,500/month or a virtual receptionist service at $300-900/month."
    },
    {
        question: "Does the AI send appointment confirmations via text?",
        answer: "Yes. After booking, Rachel sends an automatic SMS confirmation with appointment details, salon address, and any prep instructions. She also handles reminder texts to reduce no-shows."
    },
    {
        question: "Will clients know they're talking to an AI?",
        answer: "Rachel uses natural, conversational language that sounds professional and warm. Most callers won't notice the difference. She introduces herself by name and maintains context throughout the conversation."
    }
];

export default function AiReceptionistForSalonsContent() {
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
            const sections = ['introduction', 'missed-call-problem', 'what-salons-need', 'how-ai-works', 'before-after', 'real-numbers', 'meet-rachel', 'getting-started', 'faq'];
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
                        { label: 'AI Receptionist for Salons' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Scissors size={16} />
                            <span>Industry Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Why Your <span className="text-primary-600">Salon</span> Needs an AI Receptionist
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            You're mid-highlight, gloves on, foils everywhere — and the phone rings. Again. Every unanswered call is a booking that walks straight to the salon down the street. Here's how to stop the bleeding.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
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
                                    { id: 'missed-call-problem', label: 'The Missed Call Problem' },
                                    { id: 'what-salons-need', label: 'What Salons Need' },
                                    { id: 'how-ai-works', label: 'How AI Works' },
                                    { id: 'before-after', label: 'Before vs After' },
                                    { id: 'real-numbers', label: 'The Real Numbers' },
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
                                <p className="text-sm text-slate-600 mb-4">Stop missing bookings</p>
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
                                <InternalLinks currentSlug="ai-receptionist-for-salons" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction (CHALLENGE) */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You're three-quarters through a balayage, both hands deep in foils, and the salon phone starts ringing. You can't answer it. Your other stylist is blow-drying. The receptionist called in sick. The phone rings five times and goes silent.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That was a new client — a bride-to-be looking for a trial run before her June wedding. She needed a colorist who could do a lived-in blonde. Your books had a perfect opening on Thursday. But she didn't leave a voicemail. She never does. She just Googled the next salon, called them, and booked on the spot.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    You lost a $250 color appointment. And the bridal party referrals that would have followed. And the touch-up appointments every 8 weeks for the next two years. All because you couldn't answer the phone while doing your job.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This is the daily reality for salon owners and solo stylists across the country. You're a skilled professional — but you can't cut hair and answer phones at the same time. And unlike an accountant or a lawyer, you can't just "call back later." Clients who want their hair done <em>want to book now</em>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    As we explored in our <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline font-medium">guide to the best AI receptionist</Link>, the missed call problem hits service businesses hardest — and salons are ground zero.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="6Ait5R-3-lI"
                                        title="Alex Hormozi & Amjad Massad on AI for Small Business"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Alex Hormozi and Replit CEO Amjad Massad discuss how AI is transforming small business operations</p>
                                </div>

                                <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl my-8">
                                    <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                        "I'm going to give you five different things to do today, but the one that could triple your business is going to take five seconds."
                                    </p>
                                    <p className="text-slate-600 text-sm">
                                        Alex Hormozi said this about a business owner whose call-to-action was hidden below the fold — clients literally couldn't find how to book. The fix took seconds. For salons, the parallel is obvious: if your phone goes to voicemail while you're working, the booking button is effectively invisible. An AI receptionist makes it visible 24/7.
                                    </p>
                                    <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, conversation with Replit CEO Amjad Massad</p>
                                </div>

                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Salon Booking Crisis</h4>
                                            <p className="text-slate-700">
                                                Salon owners report missing <strong>5-15 calls per day</strong> during peak hours. At an average booking value of $75-150, that's <strong>$375-$2,250 in potential revenue</strong> walking out the door every single day — to the salon that picked up.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The Missed Call Problem (CHALLENGE) */}
                        <section id="missed-call-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Missed Call Problem: Salons Are Bleeding Revenue</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "62%", label: "of calls to small businesses go unanswered", source: "Forbes" },
                                    { stat: "85%", label: "of callers won't leave a voicemail", source: "AT&T Research" },
                                    { stat: "$375-750", label: "lost per day from just 5 missed salon calls", source: "Avg. booking $75-150" },
                                    { stat: "80%", label: "of salon bookings still come via phone call", source: "Salon Industry Report" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <p className="text-xs text-red-500">{item.source}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's do the math. Say your salon gets 15 calls per day. At a 62% miss rate, that's roughly 9 missed calls. With 85% of those callers refusing to leave a voicemail, you lose about 8 potential bookings — <em>every single day</em>.
                                </p>
                                <p>
                                    If just half of those calls were new clients looking to book a service averaging $100, that's <strong>$400/day in lost revenue</strong>. Over a month? <strong>$12,000</strong>. Over a year? <strong>$144,000</strong>. That's the salary of two full-time stylists — gone to voicemail.
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-8">
                                <div className="flex items-start gap-3">
                                    <PhoneOff className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Why Salons Miss More Calls Than Most Businesses</h4>
                                        <ul className="space-y-2 text-slate-700">
                                            <li className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                                <span><strong>Hands are literally occupied</strong> — you can't answer a phone mid-cut, mid-color, mid-blowout</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                                <span><strong>Peak call hours = peak service hours</strong> — the busiest booking window is when every chair is full</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                                <span><strong>Small teams, no dedicated receptionist</strong> — most salons under 5 chairs don't have front desk staff</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                                <span><strong>Clients expect instant booking</strong> — hair appointments are emotional, impulsive decisions</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <DollarSign className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Hidden Cost: Lifetime Client Value</h4>
                                        <p className="text-slate-700">
                                            A single missed call isn't just one lost appointment. The average salon client visits <strong>6-8 times per year</strong> and spends <strong>$100-200 per visit</strong>. That's <strong>$600-$1,600/year per client</strong>. Miss one new-client call, and you're not losing $100 — you're losing thousands in lifetime value. And she'll tell her friends about the salon that <em>did</em> pick up.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Salon Owners Actually Need (RESULT) */}
                        <section id="what-salons-need" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Salon Owners Actually Need</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Forget the generic "answering service" pitch. Salon owners have specific needs that generic solutions completely miss. Here's what the ideal phone solution for a salon looks like:
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-green-800 mb-6 text-lg flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    The Ideal Salon Phone Experience
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "24/7 Booking Availability",
                                            desc: "Clients decide they want a haircut at 10 PM on a Sunday. They should be able to call and book right then — not wait until Monday morning and forget."
                                        },
                                        {
                                            title: "Service Menu Knowledge",
                                            desc: "The person (or system) answering should know the difference between a partial highlight and a full highlight, how long a keratin treatment takes, and what a Brazilian blowout costs."
                                        },
                                        {
                                            title: "Stylist Matching",
                                            desc: "If a client wants color correction, they should be routed to the color specialist. If they need extensions, they go to the extension-certified stylist. No booking mismatches."
                                        },
                                        {
                                            title: "SMS Confirmations",
                                            desc: "The moment a booking is made, the client gets a text with the date, time, stylist name, salon address, and any prep instructions (like 'come with clean, dry hair')."
                                        },
                                        {
                                            title: "Automatic Reschedule Handling",
                                            desc: "When a client calls to reschedule, it should be handled instantly — no phone tag, no back-and-forth texts, no 'I'll have to check and call you back.'"
                                        },
                                        {
                                            title: "Price Transparency",
                                            desc: "Walk-in callers asking 'How much is a men's cut?' or 'What do highlights cost?' should get an immediate, accurate answer — not 'It depends, come in for a consultation.'"
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-slate-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8">
                                <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                    "People have very large amounts of motivation for very short periods of time. When they have these large moments of motivation, we would like to capitalize on that with the largest transaction possible rather than the smallest transaction possible."
                                </p>
                                <p className="text-slate-600 text-sm">
                                    Hormozi's insight about customer motivation explains exactly why salons lose bookings. A client decides they want a haircut at 9 PM on a Tuesday — that's a spike of motivation. If they call and hit voicemail, the motivation fades. By morning, they've either booked elsewhere or forgotten entirely. The window is minutes, not hours.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, conversation with Replit CEO Amjad Massad</p>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    No human receptionist can deliver all of this at $29/month. No voicemail box can do any of it. And no generic answering service knows the difference between balayage and an ombre. This is where AI changes the game for salons specifically.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: How AI Receptionists Work for Salons (TRANSFORMATION) */}
                        <section id="how-ai-works" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How AI Receptionists Work for Salons</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI receptionist for salons isn't a chatbot reading a script. It's a trained phone agent that understands your service menu, your team, your availability, and your clients' needs. Here's what it does:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        icon: PhoneCall,
                                        title: "Answers Calls 24/7",
                                        desc: "Every call is picked up instantly — during appointments, after hours, on holidays. No rings go to voicemail. No clients hear 'Please leave a message.'"
                                    },
                                    {
                                        icon: ListChecks,
                                        title: "Knows Your Services & Pricing",
                                        desc: "Configured with your full menu: cuts, color, treatments, extensions, blowouts. She quotes accurate prices and durations for every service you offer."
                                    },
                                    {
                                        icon: UserCheck,
                                        title: "Checks Stylist Availability",
                                        desc: "Rachel knows each stylist's schedule, specialties, and booking rules. She checks real-time availability before confirming any appointment."
                                    },
                                    {
                                        icon: Calendar,
                                        title: "Books Correct Time Slots",
                                        desc: "A balayage needs 3 hours, a men's cut needs 30 minutes. Rachel books the right duration for the right service — no double-bookings, no gaps."
                                    },
                                    {
                                        icon: Send,
                                        title: "Sends SMS Confirmations",
                                        desc: "Clients get an instant text with appointment details, stylist name, salon address, and prep instructions. Reminder texts go out 24 hours before."
                                    },
                                    {
                                        icon: RefreshCw,
                                        title: "Handles Rescheduling",
                                        desc: "Client needs to move their Thursday appointment? Rachel finds the next available slot, confirms the change, and updates the calendar — all in one call."
                                    }
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

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The key difference between an AI receptionist and a traditional answering service? The AI actually <em>understands</em> your salon. It doesn't just take a message — it completes the booking. The caller gets what they wanted. You get the revenue. Nobody waits.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Before vs After (TRANSFORMATION) */}
                        <section id="before-after" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Before vs After: 4 Real Salon Scenarios</h2>

                            <div className="space-y-6 mb-8">
                                {/* Scenario 1 */}
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-3">Scenario 1: New Client Calls During an Appointment</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                                <XCircle className="w-5 h-5 text-red-600" />
                                                Before (No AI)
                                            </h4>
                                            <p className="text-slate-700 text-sm mb-3">A new client calls at 2 PM. You're mid-cut. The phone rings 6 times and goes to voicemail.</p>
                                            <ul className="space-y-2">
                                                {[
                                                    "Client hears: 'Leave a message after the beep'",
                                                    "Client hangs up — she doesn't leave voicemails",
                                                    "She Googles another salon and books there",
                                                    "You never even know she called"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-red-600 font-bold text-sm mt-3">Lost: $150 color appointment + lifetime value</p>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                After (With Rachel)
                                            </h4>
                                            <p className="text-slate-700 text-sm mb-3">The same new client calls at 2 PM. Rachel picks up instantly.</p>
                                            <ul className="space-y-2">
                                                {[
                                                    "Rachel: 'Thanks for calling! How can I help you today?'",
                                                    "Client: 'I need highlights — how much and when?'",
                                                    "Rachel quotes $145 for partial highlights, offers Thursday at 10 AM with your colorist Sarah",
                                                    "Client books. Gets SMS confirmation in 10 seconds."
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-green-700 font-bold text-sm mt-3">Won: $145 appointment + future bookings</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Scenario 2 */}
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-3">Scenario 2: Reschedule Request at 9 PM</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                                <XCircle className="w-5 h-5 text-red-600" />
                                                Before (No AI)
                                            </h4>
                                            <p className="text-slate-700 text-sm mb-3">Existing client realizes she has a conflict with her Friday 11 AM cut. Calls at 9 PM.</p>
                                            <ul className="space-y-2">
                                                {[
                                                    "Salon is closed — voicemail picks up",
                                                    "Client leaves a message (rare), but you don't hear it until morning",
                                                    "You call back at 10 AM. She's in a meeting. Phone tag begins.",
                                                    "She gives up and just no-shows — or forgets entirely"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-red-600 font-bold text-sm mt-3">Lost: Empty chair + no-show revenue</p>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                After (With Rachel)
                                            </h4>
                                            <p className="text-slate-700 text-sm mb-3">Same client calls at 9 PM. Rachel picks up immediately.</p>
                                            <ul className="space-y-2">
                                                {[
                                                    "Rachel: 'I can help you reschedule! Let me check availability.'",
                                                    "Finds Saturday at 1 PM with the same stylist",
                                                    "Client confirms. Calendar updates instantly.",
                                                    "SMS confirmation sent. No phone tag. No no-show."
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-green-700 font-bold text-sm mt-3">Won: Rescheduled booking + filled chair</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Scenario 3 */}
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-3">Scenario 3: Walk-in Price Inquiry</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                                <XCircle className="w-5 h-5 text-red-600" />
                                                Before (No AI)
                                            </h4>
                                            <p className="text-slate-700 text-sm mb-3">A potential client calls to ask about pricing for a keratin treatment before committing.</p>
                                            <ul className="space-y-2">
                                                {[
                                                    "Call goes to voicemail — you're with a client",
                                                    "She doesn't know if you even offer keratin treatments",
                                                    "She checks your website — no pricing listed",
                                                    "She calls the salon with the clearer website and books there"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-red-600 font-bold text-sm mt-3">Lost: $250+ keratin treatment client</p>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                After (With Rachel)
                                            </h4>
                                            <p className="text-slate-700 text-sm mb-3">Same caller reaches Rachel instantly.</p>
                                            <ul className="space-y-2">
                                                {[
                                                    "Rachel: 'Our Brazilian keratin treatment is $275, and it takes about 2.5 hours.'",
                                                    "'We also offer an express keratin for $175 if you're looking for something quicker.'",
                                                    "Client: 'Great! Can I book the full treatment?'",
                                                    "Rachel books it for next Wednesday with your keratin specialist."
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-green-700 font-bold text-sm mt-3">Won: $275 treatment + repeat keratin client</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Scenario 4 */}
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-3">Scenario 4: Weekend Booking Request</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                                <XCircle className="w-5 h-5 text-red-600" />
                                                Before (No AI)
                                            </h4>
                                            <p className="text-slate-700 text-sm mb-3">Saturday morning, your salon is slammed. A potential client calls to book a blowout for an event tonight.</p>
                                            <ul className="space-y-2">
                                                {[
                                                    "Phone rings — nobody can get to it",
                                                    "Client tries again 20 minutes later — still busy",
                                                    "She's stressed about her event and needs a definite booking",
                                                    "She books at a competitor who answers on the first ring"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-red-600 font-bold text-sm mt-3">Lost: $85 blowout + event referrals</p>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                After (With Rachel)
                                            </h4>
                                            <p className="text-slate-700 text-sm mb-3">Same Saturday morning rush. Rachel handles the call while your team stays focused.</p>
                                            <ul className="space-y-2">
                                                {[
                                                    "Rachel picks up instantly during peak hours",
                                                    "Checks availability: 'We have a 3 PM opening with Jessica.'",
                                                    "Client: 'Perfect — that gives me time before my event!'",
                                                    "Booked, confirmed via SMS, stylist notified."
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-green-700 font-bold text-sm mt-3">Won: $85 blowout + happy client who tells friends</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: The Real Numbers (TRANSFORMATION) */}
                        <section id="real-numbers" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Numbers: What Does a Salon Receptionist Actually Cost?</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Most salon owners think they have two options: hire a front desk person or just deal with missed calls. But there's a third option that didn't exist a few years ago. Here's how the numbers compare, as we also broke down in our <Link href="/blog/virtual-receptionist-for-small-business" className="text-primary-600 hover:underline font-medium">virtual receptionist comparison guide</Link>.
                                </p>
                            </div>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Cost Factor</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Front Desk Receptionist</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Virtual Receptionist<br /><span className="font-normal text-xs text-slate-500">(Ruby, Smith.ai)</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Rachel AI<br /><span className="font-normal text-xs text-primary-500">(Dooza)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { factor: "Monthly Cost", desk: "$2,500-3,500", virtual: "$300-900", rachel: "$29" },
                                            { factor: "Availability", desk: "Business hours only", virtual: "Business hours + limited after-hours", rachel: "24/7/365" },
                                            { factor: "Salon Knowledge", desk: "Requires training", virtual: "Generic scripts", rachel: "Configured with your full menu" },
                                            { factor: "Stylist Matching", desk: "If trained properly", virtual: "Not available", rachel: "Automatic, rules-based" },
                                            { factor: "Booking Speed", desk: "1-3 minutes per call", virtual: "Takes messages only", rachel: "Under 60 seconds" },
                                            { factor: "SMS Confirmations", desk: "Manual", virtual: "Not included", rachel: "Automatic" },
                                            { factor: "Sick Days / Vacations", desk: "15-20 days/year", virtual: "N/A (shared pool)", rachel: "Never" },
                                            { factor: "Handles Rescheduling", desk: "Yes", virtual: "No — takes a message", rachel: "Yes — instant" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.factor}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.desk}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.virtual}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.rachel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$2,500-3,500/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">Front Desk Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">Salary + training + sick days</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$300-900/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">Virtual Receptionist Service</p>
                                    <p className="text-xs text-slate-500 mt-1">Limited calls, takes messages only</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$29/mo</div>
                                    <p className="text-sm text-green-800 font-medium">Rachel AI (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">Unlimited calls, 24/7, books appointments</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8">
                                <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                    "If you were a dentist, you do Invisalines, person comes in, you make three times your money, and then after that you get them onto the subscription — cleanings and whitening on an ongoing basis. Almost every business can structure it this way."
                                </p>
                                <p className="text-slate-600 text-sm">
                                    Hormozi's point about customer lifetime value applies directly to salons. That first color appointment isn't a one-time transaction — it's the entry point to touch-ups every 8 weeks, product purchases, and referrals. The first booking funds the next booking. But only if you answer the phone.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, conversation with Replit CEO Amjad Massad</p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg">ROI Math: Rachel Pays for Herself Instantly</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Rachel's monthly cost", value: "$29" },
                                        { label: "Average salon booking value", value: "$100" },
                                        { label: "Bookings needed to break even", value: "1 booking", highlight: false },
                                        { label: "Extra bookings Rachel captures/month (conservative)", value: "15-30" },
                                        { label: "Additional monthly revenue", value: "$1,500-3,000", highlight: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-2 px-4 rounded-lg ${item.highlight ? 'bg-primary-100 font-bold text-primary-800' : 'bg-white'}`}>
                                            <span className="text-slate-700">{item.label}</span>
                                            <span className={item.highlight ? 'text-primary-800 text-xl' : 'text-slate-900 font-medium'}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-lg font-bold text-slate-900 text-center">
                                Rachel pays for herself with a single captured booking. Everything after that is pure profit.
                            </p>
                        </section>

                        {/* Section 7: Meet Rachel (TRANSFORMATION) */}
                        <section id="meet-rachel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Rachel: Your Salon's AI Receptionist</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Scissors size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Rachel — AI Receptionist for Salons</h3>
                                        <p className="text-lg text-slate-700">
                                            Rachel answers your salon calls like your best front desk person — but she never calls in sick, never puts a client on hold, and costs less than a single blowout per month. She knows your services, your stylists, and your schedule.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Pickup", desc: "Answers in under 1 second. No rings, no hold music, no missed calls." },
                                    { icon: MessageSquare, title: "Natural Conversation", desc: "Warm, professional tone. Clients can't tell she's AI." },
                                    { icon: ListChecks, title: "Service Menu Knowledge", desc: "Knows every service, price, and duration you offer." },
                                    { icon: UserCheck, title: "Stylist Matching", desc: "Routes clients to the right stylist based on specialty and availability." },
                                    { icon: Calendar, title: "Appointment Booking", desc: "Books the correct time slot for each service. No double-bookings." },
                                    { icon: Send, title: "SMS Confirmations", desc: "Instant text with date, time, stylist, and prep instructions." },
                                    { icon: RefreshCw, title: "Reschedule Handling", desc: "Manages changes and cancellations without phone tag." },
                                    { icon: Moon, title: "After-Hours Coverage", desc: "Nights, weekends, holidays — Rachel never clocks out." }
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
                                    Rachel isn't a generic phone bot. She's configured specifically for your salon — your service menu, your stylists, your schedule, your brand voice. When a client calls, it feels like they're talking to someone who actually works at your salon.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Getting Started (TRANSFORMATION) */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Started in 3 Simple Steps</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Setting up Rachel for your salon takes less time than a men's haircut. As we covered in our <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">guide to automating business processes</Link>, the best automation tools are the ones that take minutes to set up and pay for themselves immediately.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up for Dooza",
                                        desc: "Create your account in under 2 minutes. Free trial, no credit card required. You'll meet Rachel and the rest of your AI team."
                                    },
                                    {
                                        step: "2",
                                        title: "Configure Your Salon Services & Stylists",
                                        desc: "Add your service menu (cuts, color, treatments, extensions — everything), set pricing and durations, and configure each stylist's specialties and availability. Rachel learns it all."
                                    },
                                    {
                                        step: "3",
                                        title: "Forward Your Phone Line",
                                        desc: "Set up call forwarding from your salon phone to Rachel. Takes 5 minutes with any phone provider. From that moment, every call is answered — even when every chair is full."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Stop Missing Bookings?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Every missed call is a client who booked somewhere else. Rachel answers every call, knows your services, and books appointments — all for $29/month.
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Call & Booking Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Forbes — 62% of SMB calls go unanswered</a></li>
                                        <li>• <a href="https://www.att.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">AT&T Research — 85% of callers won't leave voicemail</a></li>
                                        <li>• <a href="https://www.salontoday.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Salon Today — Phone booking trends in the salon industry</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Receptionist & Service Pricing</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.ruby.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ruby Receptionist — Virtual receptionist pricing</a></li>
                                        <li>• <a href="https://smith.ai/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Smith.ai — Virtual receptionist service comparison</a></li>
                                        <li>• <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bureau of Labor Statistics — Receptionist salary data</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-receptionist-for-salons" category="Industry Guide" tags={['AI Receptionist', 'Salon', 'Small Business']} />
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
