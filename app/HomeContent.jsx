'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { CAL_BOOKING_URL, getProductSignupUrl, SITE_URL } from '@/lib/links';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import {
    ArrowRight,
    Mail,
    Calendar,
    MessageSquare,
    Star,
    Zap,
    Users,
    TrendingUp,
    Phone,
    FileText,
    Search,
    CheckCircle2,
    Bot,
    BarChart3,
    X,
    Clock,
    Rocket,
    Brain
} from 'lucide-react';
import { trackSignupClick, trackDemoClick, trackFBLead, trackFBSchedule } from '@/lib/analytics';

// Homepage FAQ data for schema
const homeFaqData = [
    {
        question: "What are AI employees?",
        answer: "AI employees are intelligent virtual assistants that handle specific business tasks 24/7. Unlike chatbots, they're purpose-built for business operations like managing email, posting to social media, generating leads, and answering phone calls—all autonomously."
    },
    {
        question: "Do I need technical skills to use Dooza?",
        answer: "Not at all! Our AI employees are pre-trained and ready to work. Just talk to them like you would a real employee. Plus, our free concierge onboarding means our team sets everything up for you."
    },
    {
        question: "Is there a money-back guarantee?",
        answer: "Yes! If you're not happy within 7 days, we'll give you a full refund, no questions asked. We're confident you'll love having AI employees."
    },
    {
        question: "How is Dooza different from ChatGPT or other AI tools?",
        answer: "ChatGPT is a general assistant you have to prompt. Dooza's AI employees are specialists that work autonomously—Eva manages your inbox without you asking, Somi posts to social media daily, Rachel answers your business calls 24/7. They're employees, not tools.",
        links: [{ text: "Learn more about AI agents", url: "https://openai.com/index/introducing-gpts" }]
    },
    {
        question: "Can I integrate Dooza with my existing tools?",
        answer: "Absolutely! Dooza integrates with Gmail, Outlook, social media platforms, CRMs, and 1000+ apps through Zapier. Our onboarding team handles all integrations for you."
    }
];

// FAQ structured data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
        }
    }))
};

// AI Employee data
const aiEmployees = [
    {
        name: "Eva",
        role: "Email Manager",
        icon: Mail,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        description: "Manages your inbox, drafts replies, and sends emails. Never miss an important message again.",
        tasks: ["Sorts & prioritizes emails", "Drafts professional replies", "Schedules follow-ups"]
    },
    {
        name: "Somi",
        role: "Social Media Manager",
        icon: MessageSquare,
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50",
        description: "Creates and posts engaging content daily. Grows your audience while you focus on business.",
        tasks: ["Creates daily content", "Posts across platforms", "Engages with followers"]
    },
    {
        name: "Seomi",
        role: "SEO Specialist",
        icon: Search,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        description: "Writes blog posts, optimizes your site, and improves your Google rankings automatically.",
        tasks: ["Writes SEO content", "Optimizes pages", "Manages Google Business"]
    },
    {
        name: "Rachel",
        role: "AI Receptionist",
        icon: Phone,
        color: "from-purple-500 to-violet-500",
        bgColor: "bg-purple-50",
        description: "Answers calls 24/7, books appointments, and never puts a customer on hold.",
        tasks: ["Answers all calls", "Books appointments", "Qualifies leads"]
    },
    {
        name: "Stan",
        role: "Lead Generator",
        icon: TrendingUp,
        color: "from-orange-500 to-amber-500",
        bgColor: "bg-orange-50",
        description: "Finds, qualifies, and nurtures leads. Fills your pipeline while you sleep.",
        tasks: ["Finds prospects", "Qualifies leads", "Nurtures contacts"]
    },
    {
        name: "Linda",
        role: "Legal Assistant",
        icon: FileText,
        color: "from-slate-500 to-gray-600",
        bgColor: "bg-slate-100",
        description: "Reviews contracts and legal documents. Catches issues before they become problems.",
        tasks: ["Reviews contracts", "Flags risks", "Summarizes terms"]
    }
];

export default function HomePage() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [activeEmployee, setActiveEmployee] = useState(0);

    useEffect(() => {
        // Auto-rotate employees
        const interval = setInterval(() => {
            setActiveEmployee(prev => (prev + 1) % aiEmployees.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            e?.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Navbar openModal={handleAction} />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-8 pt-16 pb-20 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-white to-white"></div>
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
                        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary-50/50 to-transparent rounded-full blur-[80px]"></div>

                        {/* Grid pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>

                    <div className="max-w-5xl mx-auto relative z-10 w-full text-center">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-slate-200 mb-8 animate-fade-in">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-white"></div>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 border-2 border-white"></div>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-2 border-white"></div>
                            </div>
                            <span className="text-sm text-slate-600">
                                <span className="font-semibold text-slate-900">500+</span> businesses automated
                            </span>
                            <div className="flex items-center gap-0.5 text-yellow-500">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <span className="text-xs font-semibold text-slate-900">4.9</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            AI Employees That
                            <span className="block bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                Never Sleep
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            6 AI employees handle your email, social media, SEO, calls, leads, and legal work—24/7, for less than one coffee a day.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { trackSignupClick('hero'); trackFBLead('hero_signup'); }}
                                className="group inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => { handleAction(e); trackDemoClick('hero'); trackFBSchedule(); }}
                                className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg transition-all"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Free Demo
                            </a>
                        </div>
                    </div>
                </section>

                {/* Integrations Section */}
                <section className="py-12 bg-white border-y border-slate-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm text-slate-500 mb-8 font-medium uppercase tracking-wide">Seamlessly integrates with your favorite tools</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {/* Gmail */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                                </svg>
                                <span className="font-medium text-sm">Gmail</span>
                            </div>
                            {/* Outlook */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V5.8l-.5-.3.5.8zM7.88 11.16l2.06 1.38 2.06-1.38h-4.12z" />
                                </svg>
                                <span className="font-medium text-sm">Outlook</span>
                            </div>
                            {/* LinkedIn */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span className="font-medium text-sm">LinkedIn</span>
                            </div>
                            {/* Instagram */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                                <span className="font-medium text-sm">Instagram</span>
                            </div>
                            {/* Facebook */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="font-medium text-sm">Facebook</span>
                            </div>
                            {/* X/Twitter */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <X className="w-5 h-5" />
                                <span className="font-medium text-sm">X</span>
                            </div>
                            {/* Zapier */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.633 1.996h-3.267v6.264L6.81 2.705 4.41 5.105l5.555 5.555H3.7v3.268h6.264l-5.555 5.555 2.4 2.4 5.556-5.555v6.266h3.267v-6.266l5.555 5.555 2.4-2.4-5.555-5.555h6.266V10.66h-6.266l5.555-5.555-2.4-2.4-5.555 5.555V1.996z" />
                                </svg>
                                <span className="font-medium text-sm">Zapier</span>
                            </div>
                            {/* Slack */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                                </svg>
                                <span className="font-medium text-sm">Slack</span>
                            </div>
                            {/* HubSpot */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.198 2.198 0 0 0 17.238.84h-.065a2.198 2.198 0 0 0-2.193 2.193v.065c0 .859.493 1.604 1.212 1.962v2.855a5.653 5.653 0 0 0-2.627 1.162l-6.929-5.365a2.06 2.06 0 0 0 .061-.462 2.123 2.123 0 1 0-2.123 2.123 2.104 2.104 0 0 0 1.118-.322l6.827 5.288a5.654 5.654 0 0 0-.479 2.287c0 .857.194 1.67.537 2.4l-2.166 2.166a1.932 1.932 0 0 0-.561-.09 1.986 1.986 0 1 0 1.987 1.987 1.932 1.932 0 0 0-.088-.557l2.143-2.143a5.665 5.665 0 1 0 4.209-9.374zM17.17 16.492a2.882 2.882 0 1 1 0-5.765 2.882 2.882 0 0 1 0 5.765z" />
                                </svg>
                                <span className="font-medium text-sm">HubSpot</span>
                            </div>
                            {/* Google Calendar */}
                            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium text-sm">Calendar</span>
                            </div>
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-6">+ 1000s more via Zapier</p>
                    </div>
                </section>

                {/* Problem Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 font-semibold text-sm mb-4">THE PROBLEM</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">You want to scale, but you're drowning in busywork</h2>
                            <p className="text-xl text-slate-600">Sound familiar?</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="group relative bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1">
                                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Inbox Overload</h3>
                                <p className="text-slate-600 leading-relaxed">You start every day with 100+ emails demanding attention. By noon, you're behind.</p>
                            </div>
                            <div className="group relative bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1">
                                <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Social Silence</h3>
                                <p className="text-slate-600 leading-relaxed">Your last post was 3 weeks ago. Your competitors post daily. You know you should too.</p>
                            </div>
                            <div className="group relative bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1">
                                <div className="w-14 h-14 bg-slate-100 text-slate-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Calendar className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Never Enough Time</h3>
                                <p className="text-slate-600 leading-relaxed">Marketing, sales, admin—everything keeps getting pushed to 'next week.'</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution - Meet Your AI Employees */}
                <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-1 rounded-full bg-primary-50 text-primary-600 font-semibold text-sm mb-4">THE SOLUTION</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Meet your new AI employees</h2>
                            <p className="text-xl text-slate-600">6 specialists. 24/7 availability. One subscription.</p>
                        </div>

                        {/* Employee Selector */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {aiEmployees.map((emp, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveEmployee(idx)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${activeEmployee === idx
                                            ? 'bg-primary-600 text-white shadow-lg'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                                        }`}
                                >
                                    <emp.icon className="w-4 h-4" />
                                    {emp.name}
                                </button>
                            ))}
                        </div>

                        {/* Active Employee Card */}
                        <div className="max-w-4xl mx-auto">
                            <div className={`${aiEmployees[activeEmployee].bgColor} rounded-3xl p-8 md:p-12 border border-slate-200 transition-all duration-500`}>
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${aiEmployees[activeEmployee].color} text-white mb-6 shadow-lg`}>
                                            {(() => {
                                                const Icon = aiEmployees[activeEmployee].icon;
                                                return <Icon className="w-8 h-8" />;
                                            })()}
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2">
                                            {aiEmployees[activeEmployee].name}
                                            <span className="text-slate-500 font-normal ml-2">— {aiEmployees[activeEmployee].role}</span>
                                        </h3>
                                        <p className="text-lg text-slate-600 mb-6">{aiEmployees[activeEmployee].description}</p>
                                        <ul className="space-y-3">
                                            {aiEmployees[activeEmployee].tasks.map((task, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${aiEmployees[activeEmployee].color} rounded-2xl blur-2xl opacity-20`}></div>
                                            <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${aiEmployees[activeEmployee].color} flex items-center justify-center text-white`}>
                                                        <Bot className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-slate-900">{aiEmployees[activeEmployee].name}</div>
                                                        <div className="text-sm text-green-600 flex items-center gap-1">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                            Working now
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2 text-sm text-slate-600">
                                                    <div className="bg-slate-50 p-3 rounded-lg">✓ Completed 12 tasks today</div>
                                                    <div className="bg-slate-50 p-3 rounded-lg">✓ Saved you 2.5 hours</div>
                                                    <div className="bg-primary-50 p-3 rounded-lg text-primary-700">→ Currently processing new items...</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-600 font-semibold text-sm mb-4">HOW IT WORKS</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Up and running in 5 minutes</h2>
                            <p className="text-xl text-slate-600">No technical skills required. We handle everything.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
                            {/* Connecting line */}
                            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200"></div>

                            {/* Step 1 */}
                            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all text-center">
                                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10">1</div>
                                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Sign up free</h3>
                                <p className="text-slate-600 leading-relaxed">Create your account in 2 minutes. No credit card required to start.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all text-center">
                                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10">2</div>
                                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">We set it up for you</h3>
                                <p className="text-slate-600 leading-relaxed">Book a free call. Our team configures your AI employees for your workflow.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all text-center">
                                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10">3</div>
                                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">They work 24/7</h3>
                                <p className="text-slate-600 leading-relaxed">Your AI employees start working immediately. Track progress in your dashboard.</p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={(e) => { handleAction(e); trackDemoClick('how_it_works'); }}
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Your Free Setup Call
                            </a>
                            <p className="text-sm text-slate-500 mt-4">30-minute call • No commitment • We do the work</p>
                        </div>
                    </div>
                </section>

                {/* Comparison Table: DIY vs AI Employees */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-1 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm mb-4">COMPARE</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Doing It Yourself vs AI Employees</h2>
                            <p className="text-xl text-slate-600">Any business not using AI to improve productivity is leaving money on the table.</p>
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                            {/* Table Header */}
                            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
                                <div className="p-6 text-left">
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Comparison</span>
                                </div>
                                <div className="p-6 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <Users className="w-5 h-5 text-slate-500" />
                                        <span className="font-bold text-slate-700">Doing It Yourself</span>
                                    </div>
                                </div>
                                <div className="p-6 text-center bg-primary-50 border-l border-primary-100">
                                    <div className="flex items-center justify-center gap-2">
                                        <Bot className="w-5 h-5 text-primary-600" />
                                        <span className="font-bold text-primary-700">AI Employees</span>
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Rows */}
                            {[
                                {
                                    label: "Time Spent Daily",
                                    icon: Clock,
                                    diy: "3-5 hours on repetitive tasks",
                                    ai: "0 hours — runs autonomously"
                                },
                                {
                                    label: "Availability",
                                    icon: Zap,
                                    diy: "Limited to your working hours",
                                    ai: "24/7/365 — never stops"
                                },
                                {
                                    label: "Email Management",
                                    icon: Mail,
                                    diy: "Inbox overload, missed emails",
                                    ai: "Sorted, prioritized, responded"
                                },
                                {
                                    label: "Social Media",
                                    icon: MessageSquare,
                                    diy: "Inconsistent, forgotten posts",
                                    ai: "Daily content, auto-posted"
                                },
                                {
                                    label: "Lead Follow-up",
                                    icon: TrendingUp,
                                    diy: "Leads slip through the cracks",
                                    ai: "Every lead nurtured instantly"
                                },
                                {
                                    label: "Mental Load",
                                    icon: Brain,
                                    diy: "Constant stress & overwhelm",
                                    ai: "Peace of mind, it's handled"
                                },
                                {
                                    label: "Focus on Growth",
                                    icon: Rocket,
                                    diy: "Stuck in busywork",
                                    ai: "Free to scale your business"
                                }
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-3 border-b border-slate-100 last:border-b-0">
                                    <div className="p-5 flex items-center gap-3">
                                        <row.icon className="w-5 h-5 text-slate-400 shrink-0" />
                                        <span className="font-medium text-slate-700">{row.label}</span>
                                    </div>
                                    <div className="p-5 text-center flex items-center justify-center">
                                        <span className="text-slate-500">{row.diy}</span>
                                    </div>
                                    <div className="p-5 text-center bg-primary-50/50 border-l border-primary-50 flex items-center justify-center">
                                        <span className="text-primary-700 font-semibold flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            {row.ai}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { trackSignupClick('comparison'); trackFBLead('comparison_signup'); }}
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Let AI Handle the Busywork
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Social Proof / Testimonials */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-1 rounded-full bg-yellow-50 text-yellow-700 font-semibold text-sm mb-4">TESTIMONIALS</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Loved by business owners</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { quote: "My AI receptionist answers every call while I'm on site. Haven't missed a lead in months.", author: "Interio Square", role: "Interior Design" },
                                { quote: "Our social pages used to be dead. Now Seomi posts daily updates and we're actually growing our following.", author: "Suresh Timbers", role: "Retail" },
                                { quote: "I hired the Legal Assistant to review contracts. Saved me thousands in lawyer fees this year alone.", author: "Adam Labs", role: "Tech Startup" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
                                    <div className="flex gap-1 text-yellow-400 mb-6">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                                    </div>
                                    <p className="text-lg text-slate-700 font-medium mb-8 leading-relaxed">"{item.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center font-bold text-white">
                                            {item.author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{item.author}</div>
                                            <div className="text-sm text-slate-500">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Preview */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-50 text-primary-600 font-semibold text-sm mb-4">SIMPLE PRICING</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">One price. 6 AI employees.</h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Less than a coffee a day for a full team working around the clock.</p>

                        <div className="bg-white rounded-3xl p-10 md:p-12 border-2 border-primary-100 shadow-xl">
                            <div className="flex justify-center items-baseline gap-2 mb-4">
                                <span className="text-6xl md:text-7xl font-bold text-slate-900">$29</span>
                                <span className="text-xl text-slate-500">/month</span>
                            </div>
                            <p className="text-slate-500 mb-8">Billed monthly. Cancel anytime.</p>

                            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
                                {[
                                    "All 6 AI employees included",
                                    "Unlimited tasks & automations",
                                    "Free concierge onboarding",
                                    "24/7 autonomous operation",
                                    "1000+ app integrations",
                                    "7-day money-back guarantee"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { trackSignupClick('pricing'); trackFBLead('pricing_signup'); }}
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Competitor Alternatives */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4">COMPARISONS</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Switching from another platform?</h2>
                            <p className="text-lg text-slate-600">See why businesses choose Dooza</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { name: "Sintra AI", slug: "better-than-sintra-ai", benefits: ["5-min setup", "70% cheaper"] },
                                { name: "Marblism", slug: "better-than-marblism", benefits: ["Free onboarding", "We build for you"] },
                                { name: "Motion", slug: "better-than-motion", benefits: ["6 AI employees", "Better value"] }
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={`/blog/${item.slug}`}
                                    className="group bg-white hover:bg-primary-50 border border-slate-200 hover:border-primary-200 rounded-2xl p-6 transition-all"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-semibold text-slate-500 uppercase">vs {item.name}</span>
                                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <div className="flex items-center gap-4 text-sm">
                                        {item.benefits.map((b, i) => (
                                            <span key={i} className="flex items-center gap-1 text-green-600">
                                                <CheckCircle2 className="w-4 h-4" />{b}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                            <Link
                                href="/alternatives"
                                className="group flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-2xl p-6 transition-all"
                            >
                                <span className="text-slate-600 group-hover:text-slate-900 font-medium">View all comparisons →</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm mb-4">FAQ</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {homeFaqData.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all">
                                    <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.answer}
                                        {item.links && item.links.map((link, i) => (
                                            <span key={i}> <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">{link.text}</a>.</span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-gradient-to-br from-primary-50 via-teal-50 to-primary-50 relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[120px]"></div>

                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
                            Ready to hire your
                            <span className="block bg-gradient-to-r from-primary-600 to-teal-500 bg-clip-text text-transparent">AI workforce?</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Join 500+ businesses already saving 10+ hours every week with AI employees.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { trackSignupClick('bottom_cta'); trackFBLead('bottom_cta_signup'); }}
                                className="group inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-xl hover:-translate-y-1"
                            >
                                Start Free Trial
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={(e) => { handleAction(e); trackDemoClick('bottom_cta'); trackFBSchedule(); }}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 px-10 py-5 rounded-full font-bold text-xl transition-all"
                            >
                                <Calendar className="w-6 h-6" />
                                Book Free Setup
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
