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
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import BlogHeroImage from '../../../components/BlogHeroImage';
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ArrowRight,
    Zap,
    DollarSign,
    Bot,
    Sparkles,
    Settings,
    Users,
    Sliders,
    HeadphonesIcon,
    TrendingUp,
    AlertTriangle,
    MessageSquare,
    Mail,
    Phone
} from 'lucide-react';

const faqData = [
    {
        question: "Is Dooza really better than Motion for AI employees?",
        answer: "It depends on the job. Motion is an AI calendar and project manager (auto-planned days, AI project management, docs and workflows). Dooza is an AI-native company that builds AI products and services for small businesses, and its Dooza Workforce app is purpose-built for AI employees that handle real business tasks—email, social media, calls, sales, and more—24/7 without you needing to manage a calendar."
    },
    {
        question: "Can I customize AI employees in Dooza?",
        answer: "Yes. Dooza lets you create custom AI employees tailored to your exact workflow. Plus, a Dooza engineer scopes your pilot on a free 30-minute call and builds them FOR you."
    },
    {
        question: "How does Dooza pricing compare to Motion?",
        answer: "Motion's pricing page (checked Oct 7, 2026) lists Pro AI at $19 per seat per month billed annually or $29 month-to-month, with 7,500 AI credits per seat per month, and Business AI at $29 per seat per month billed annually, with 15,000 credits. Dooza does not meter work in credits. Pricing depends on the product (see dooza.ai/pricing), and every Dooza product starts with a refundable pilot: 100% refund within 14 days."
    },
    {
        question: "Does Dooza work if I already use Google Calendar?",
        answer: "Yes. Dooza works alongside the tools you already use. Motion also syncs with Google and Outlook calendars, so both fit a Google Calendar setup."
    },
    {
        question: "What if I need help setting up my AI employees?",
        answer: "This is where Dooza shines. A Dooza engineer scopes your pilot on a free 30-minute call and builds your custom AI employees for you."
    },
    {
        question: "Can Dooza AI employees make phone calls?",
        answer: "Yes! Dooza's Rachel (AI Receptionist) can handle inbound and outbound calls 24/7. Motion's pricing page does not list phone answering; it is built around calendars, tasks and projects."
    }
];

export default function BetterThanMotionContent() {
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
            const sections = ['introduction', 'what-is-motion', 'motion-limitations', 'why-dooza', 'ai-employees', 'comparison', 'pricing', 'migration', 'conclusion', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Motion Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Motion App</span> Alternative: Why Smart Businesses Choose Dooza
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Motion is a strong AI calendar and project manager. If the work you need done is answering calls, email, social posts or leads, here is how Dooza compares, and when Motion is the better pick.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 24, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/better-than-motion.png"
                                alt="Comparison between Motion App and Dooza AI Employees"
                                priority={true}
                            />
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
                                    { id: 'what-is-motion', label: 'What is Motion?' },
                                    { id: 'motion-limitations', label: 'Which One Fits' },
                                    { id: 'why-dooza', label: 'Why Dooza' },
                                    { id: 'ai-employees', label: 'What each one does' },
                                    { id: 'comparison', label: 'Feature Comparison' },
                                    { id: 'pricing', label: 'Pricing Breakdown' },
                                    { id: 'migration', label: 'Easy Switching' },
                                    { id: 'conclusion', label: 'Conclusion' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to switch?</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="better-than-motion" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    If you've been searching for AI productivity tools, you've probably stumbled upon <a href="https://www.usemotion.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Motion</a> (usemotion.com). It promises to be an "AI-powered SuperApp for Work" that manages your calendar, tasks, and now—AI employees.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>The honest difference:</strong> Motion plans your time. Dooza does work for you: AI employees that answer calls, reply to email, post on social and find leads. Many teams could use both.
                                </p>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">What Motion costs</h4>
                                            <p className="text-slate-700">Per <a href="https://www.usemotion.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Motion's pricing page</a> (checked Oct 7, 2026): Pro AI is $19 per seat per month billed annually ($29 month-to-month) with 7,500 AI credits per seat per month; Business AI is $29 per seat per month billed annually with 15,000 credits. There is a free trial.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-motion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Motion?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Motion (usemotion.com) is an AI-powered calendar and task management tool. It uses artificial intelligence to automatically schedule your tasks based on deadlines, priorities, and available time slots. The app gained popularity for its "set it and forget it" scheduling approach.
                                </p>
                                <p className="mb-6">
                                    Its pricing page lists an AI Calendar that auto-plans your day, an AI Project Manager with Gantt charts, AI Docs, Wiki and Notes, AI Chat and AI Workflows for repeatable projects. Motion marketed named "AI Employees" in 2025; those no longer appear on its site (checked Oct 7, 2026).
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed
                                        videoId="M6nB5k2eIvs"
                                        title="Motion App Review"
                                    />
                                </div>
                                <p className="mb-6">
                                    <strong>Where Motion is the better pick:</strong> if your bottleneck is planning (too many tasks, projects and meetings for the hours you have), Motion is built for exactly that and Dooza is not a calendar.
                                </p>
                            </div>
                        </section>

                        <section id="motion-limitations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Which one fits your problem?</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Pick Motion if your problem is time", desc: "You need your tasks, projects and meetings planned into your calendar automatically, with project management and docs in the same tool." },
                                    { title: "Pick Dooza if your problem is work nobody has time to do", desc: "Missed calls, an inbox that needs replies, social posts, lead lists. Dooza's AI employees do that work, and a Dooza engineer sets up your pilot." },
                                    { title: "Pricing models differ", desc: "Motion is per seat with a monthly AI credit allowance. Dooza pricing depends on the product (see /pricing) and every product starts with a refundable pilot: 100% refund within 14 days." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="why-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Dooza is the Smarter Choice for AI Employees</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Dooza isn't trying to replace your calendar. We're laser-focused on one thing: <strong>giving you AI employees that actually work</strong>—handling email, social media, sales calls, customer support, and more. 24 hours a day, 7 days a week.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Bot, title: "Purpose-Built AI Employees", desc: "AI employees are Dooza's core product, built for business tasks rather than scheduling.", color: "primary" },
                                    { icon: Sliders, title: "Fully Customizable", desc: "Create AI employees tailored to YOUR workflow. Name them, train them on your data, and deploy them in minutes.", color: "blue" },
                                    { icon: Phone, title: "Phone Call Capabilities", desc: "Our AI receptionist Rachel can make and receive calls 24/7.", color: "green" },
                                    { icon: HeadphonesIcon, title: "Built With a Dooza Engineer", desc: "We don't just give you software—a Dooza engineer scopes your pilot on a free 30-minute call and builds your custom AI employees FOR you.", color: "purple" },
                                    { icon: DollarSign, title: "Refundable Pilot", desc: "Every Dooza product starts with a refundable pilot—100% refund within 14 days. No credit meter to watch. Pricing depends on the product.", color: "emerald" },
                                    { icon: Zap, title: "Works With Your Stack", desc: "Dooza integrates with your existing tools—Gmail, Outlook, social platforms, CRMs—without forcing you to change how you work.", color: "orange" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className={`w-12 h-12 bg-${item.color}-50 rounded-lg flex items-center justify-center text-${item.color}-600 mb-4`}>
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="ai-employees" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What each one does</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Motion's features as listed on its pricing page, next to Dooza's AI employees:
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Motion Column */}
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center text-sm font-bold">M</span>
                                        Motion (per its pricing page)
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        {[
                                            "AI Calendar: auto-plans your day",
                                            "AI Project Manager with Gantt charts",
                                            "AI Docs, Wiki and Notes",
                                            "AI Chat",
                                            "AI Workflows for repeatable projects and SOPs",
                                            "Google and Outlook calendar sync"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <span className="text-slate-400 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                                        <p className="text-slate-700 text-sm">Pro AI $19/seat/mo annual ($29 monthly), 7,500 AI credits/seat/mo. Business AI $29/seat/mo annual, 15,000 credits. Checked Oct 7, 2026 on {' '}<a href="https://www.usemotion.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">usemotion.com/pricing</a>.</p>
                                    </div>
                                </div>

                                {/* Dooza Column */}
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">D</span>
                                        Dooza AI Employees
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        {[
                                            "Maily - Email Manager (drafts AND sends replies)",
                                            "Somi - Social Media Manager (posts autonomously)",
                                            "Stan - Lead Generator (finds and qualifies leads)",
                                            "Ranky - SEO & Visibility (optimizes your content)",
                                            "Rachel - AI Receptionist (makes/receives calls)",
                                            "Linda - Legal Assistant (reviews contracts)",
                                            "Custom Employees - built with a Dooza engineer"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                        <p className="text-green-700 text-sm font-medium">What you get:</p>
                                        <ul className="text-green-600 text-sm mt-2 space-y-1">
                                            <li>• Six ready-made AI employees</li>
                                            <li>• No credit meter</li>
                                            <li>• Phone call capabilities</li>
                                            <li>• Autonomous execution</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Feature-by-Feature Comparison</h2>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                            <th className="p-4 border-b font-bold">Motion</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr><td className="p-4 border-b font-medium">Built for</td><td className="p-4 border-b bg-primary-50/30">Doing tasks: calls, email, social, leads</td><td className="p-4 border-b">Planning time: calendar, tasks, projects</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Price</td><td className="p-4 border-b bg-primary-50/30">Depends on the product (see /pricing); 100% refund within 14 days</td><td className="p-4 border-b">$19/seat/mo annual or $29 monthly (Pro AI); $29/seat/mo annual (Business AI)</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Usage model</td><td className="p-4 border-b bg-primary-50/30">No credit meter</td><td className="p-4 border-b">7,500 (Pro AI) or 15,000 (Business AI) AI credits/seat/month</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Phone calls</td><td className="p-4 border-b bg-primary-50/30">Yes (Rachel, AI receptionist)</td><td className="p-4 border-b">Not listed on pricing page</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Calendar &amp; project management</td><td className="p-4 border-b bg-primary-50/30">Not a calendar app</td><td className="p-4 border-b">Yes: AI Calendar, AI Project Manager, Gantt</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Setup</td><td className="p-4 border-b bg-primary-50/30">Dooza engineer scopes the pilot on a free 30-minute call</td><td className="p-4 border-b">Free trial, self-serve</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing: Motion vs Dooza</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Here's how the two pricing models compare:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">14-day<span className="text-lg font-normal text-slate-500"> refundable pilot</span></div>
                                    <div className="text-lg text-slate-600 mb-4">Pricing depends on the product &mdash; <a href="/pricing" className="text-primary-600 hover:underline">see pricing</a></div>
                                    <ul className="space-y-3">
                                        {[
                                            "Six ready-made AI employees",
                                            "No credit meter",
                                            "Phone call capabilities",
                                            "Custom AI employees built with a Dooza engineer",
                                            "Pilot scoped on a free 30-minute call",
                                            "100% refund within 14 days"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">MOTION (Pro AI)</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">$19<span className="text-lg font-normal text-slate-500">/seat/month, billed annually</span></div>
                                    <div className="text-lg text-slate-600 mb-4">$29/seat month-to-month · checked Oct 7, 2026 (<a href="https://www.usemotion.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">source</a>)</div>
                                    <ul className="space-y-3">
                                        {[
                                            "AI calendar & scheduling",
                                            "AI project manager",
                                            "7,500 AI credits/seat/month (Business AI: 15,000)",
                                            "Free trial, self-serve setup"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" /><span className="text-slate-600">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                <p className="text-2xl font-bold text-green-700">Start with a refundable pilot &mdash; 100% refund within 14 days</p>
                                <p className="text-green-600 mt-2">Test real AI employees on real work, with no credit meter and human support</p>
                            </div>
                        </section>


                        <section id="migration" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Adding Dooza (with or without Motion)</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                You don't need to migrate anything. Dooza works alongside your existing tools—we're not trying to replace your calendar.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Book a Free Pilot Call", desc: "Schedule a free 30-minute call with a Dooza engineer. We'll learn about your business, scope your refundable pilot, and build your AI employees for you." },
                                    { step: "2", title: "Connect Your Tools", desc: "Integrations with Gmail, Outlook, social platforms, CRMs, and more. Keep using what you love." },
                                    { step: "3", title: "Activate Your AI Employees", desc: "Your custom AI employees start working immediately—handling email, social media, calls, and more." },
                                    { step: "4", title: "Decide on Motion", desc: "If you use Motion for planning, keep it: the two do different jobs. If you only bought it for AI help with tasks, compare what each one actually did for you during the pilot." }
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
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Verdict</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Motion is an AI calendar and project manager. Dooza is an AI-native company that builds AI products and services for small businesses, and its <Link href="/workforce" className="text-primary-600 hover:underline font-medium">Dooza Workforce</Link> app is a <strong>purpose-built AI workforce</strong> that integrates with your existing calendar.
                                </p>
                                <p>
                                    If you want AI that can actually execute tasks autonomously—sending emails, posting to social media, making phone calls, generating leads—Dooza is built for that. If you want your time planned, Motion is.
                                </p>
                                <p>
                                    And with no credit meter, a Dooza engineer scoping your setup, and a refundable pilot (100% refund within 14 days), you can prove it works before you commit. Pricing depends on the product&mdash;see <Link href="/pricing" className="text-primary-600 hover:underline font-medium">pricing</Link>.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Experience Real AI Employees?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">Book a free pilot call and we'll build your custom AI employees for you. 100% refund within 14 days.</p>
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
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>• <a href="https://www.usemotion.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Motion pricing and plan features</a> (checked Oct 7, 2026)</li>
                                <li>• <a href="https://www.usemotion.com/features/integrations" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Motion integrations</a> (checked Oct 7, 2026)</li>
                                <li>• <a href="/pricing" className="text-primary-600 hover:underline">Dooza pricing</a></li>
                            </ul>
                        </section>

                        <RelatedPosts currentSlug="better-than-motion" category="Comparison" tags={['Motion App', 'AI Employees', 'Comparison']} />
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
