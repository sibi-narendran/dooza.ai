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
        answer: "Yes. Motion focuses primarily on calendar scheduling with AI employees as an add-on. Dooza is purpose-built for AI employees that handle real business tasks—email, social media, calls, sales, and more—24/7 without you needing to manage a calendar."
    },
    {
        question: "Can I customize AI employees in Dooza like I can in Motion?",
        answer: "Absolutely—and it's much easier. Dooza lets you create custom AI employees tailored to your exact workflow. Plus, our concierge team will build them FOR you during your free onboarding call."
    },
    {
        question: "How does Dooza pricing compare to Motion?",
        answer: "Motion starts at $29/month but AI Employees require the $49/month plan with limited credits. Dooza starts at $29/month with ALL AI employees included and unlimited conversations. No credit limits, no surprises."
    },
    {
        question: "Does Dooza work if I already use Google Calendar?",
        answer: "Yes! Dooza integrates seamlessly with Google Calendar, Outlook, and other tools. Unlike Motion which tries to replace your calendar, Dooza works alongside your existing workflow."
    },
    {
        question: "What if I need help setting up my AI employees?",
        answer: "This is where Dooza shines. We offer FREE concierge onboarding where our team builds your custom AI employees for you. Motion leaves you to figure it out yourself with documentation."
    },
    {
        question: "Can Dooza AI employees make phone calls?",
        answer: "Yes! Dooza's Rachel (AI Receptionist) can handle inbound and outbound calls 24/7. Motion's AI employees cannot make or receive phone calls—a major limitation for sales-focused businesses."
    }
];

export default function BetterThanMotionContent() {
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
            const sections = ['introduction', 'what-is-motion', 'motion-limitations', 'why-dooza', 'ai-employees', 'comparison', 'pricing', 'testimonials', 'migration', 'conclusion', 'faq'];
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
                            Tired of paying $348/year for a calendar app with limited AI? Discover why businesses are switching to Dooza for real AI employees that work 24/7.
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
                                src="/blog/comparison-general.png"
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
                                    { id: 'motion-limitations', label: 'Motion Limitations' },
                                    { id: 'why-dooza', label: 'Why Dooza Wins' },
                                    { id: 'ai-employees', label: 'AI Employees Comparison' },
                                    { id: 'comparison', label: 'Feature Comparison' },
                                    { id: 'pricing', label: 'Pricing Breakdown' },
                                    { id: 'testimonials', label: 'What Users Say' },
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
                                    Try Dooza Free
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
                                    <strong>But here's what the marketing doesn't tell you:</strong> Motion is fundamentally a calendar app with AI scheduling. Their "AI employees" are a recent add-on feature that requires <strong>additional fees</strong> and comes with <strong>strict credit limits</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to <a href="https://www.trustpilot.com/review/www.usemotion.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Trustpilot reviews</a>, many users complain: <em>"It's just so expensive. They don't really ship the features I want. The AI agents are useless."</em>
                                </p>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Real Cost of Motion</h4>
                                            <p className="text-slate-700">Motion's base plan is $29/month, but to access AI Employees, you need the $49/month plan. And you only get 10,000 credits—once they're gone, you're stuck waiting until next month or paying more.</p>
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
                                    Recently, Motion added "AI Employees"—pre-built AI personas like Alfred (Executive Assistant), Chip (Sales Rep), and Millie (Project Manager). However, as <a href="https://thebusinessdive.com/motion-app-review" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">multiple reviewers note</a>, these AI employees are limited in what they can actually do.
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed
                                        videoId="M6nB5k2eIvs"
                                        title="Motion App Review - Is It Worth $348/Year?"
                                    />
                                </div>
                                <p className="mb-6">
                                    <strong>The core problem:</strong> Motion wants to be your entire workflow—calendar, tasks, projects, AND AI employees. But when you try to do everything, you often do nothing exceptionally well.
                                </p>
                            </div>
                        </section>

                        <section id="motion-limitations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Limitations of Motion (That Reviews Don't Mention)</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "AI Employees Cost Extra",
                                        desc: "The base plan ($29/mo) doesn't include AI employees. You need to upgrade to the $49/mo plan—and even then, you only get 10,000 credits per month. Heavy users run out within weeks.",
                                        source: "Trustpilot & G2 Reviews"
                                    },
                                    {
                                        title: "No Phone Call Capabilities",
                                        desc: "Motion's AI employees cannot make or receive phone calls. For businesses that rely on sales calls or customer support, this is a dealbreaker.",
                                        source: "Motion Feature List"
                                    },
                                    {
                                        title: "Steep Learning Curve",
                                        desc: "Reddit users and reviewers consistently mention that Motion is 'too complicated' and 'takes too long to set up properly.' One user on Trustpilot said: 'I wish the instructions were made for dummies.'",
                                        source: "Reddit & Trustpilot"
                                    },
                                    {
                                        title: "Mobile App is Disappointing",
                                        desc: "The mobile experience is severely limited compared to desktop. As one reviewer noted: 'There is no iPad app and the mobile app lacks most features.'",
                                        source: "bymilliepham.com review"
                                    },
                                    {
                                        title: "You're Locked Into Their Ecosystem",
                                        desc: "Motion wants to replace your calendar, not work alongside it. If you already use tools you love, Motion forces you to abandon them or use clunky workarounds.",
                                        source: "User Feedback"
                                    },
                                    {
                                        title: "No 'Done For You' Service",
                                        desc: "Motion gives you software and documentation. You're on your own to figure out how to set up AI employees for your specific business needs.",
                                        source: "Motion Website"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600 mb-2">{item.desc}</p>
                                                <p className="text-xs text-slate-400">Source: {item.source}</p>
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
                                    { icon: Bot, title: "Purpose-Built AI Employees", desc: "Unlike Motion's add-on AI agents, Dooza's AI employees are our core product—trained specifically for business automation.", color: "primary" },
                                    { icon: Sliders, title: "Fully Customizable", desc: "Create AI employees tailored to YOUR workflow. Name them, train them on your data, and deploy them in minutes.", color: "blue" },
                                    { icon: Phone, title: "Phone Call Capabilities", desc: "Our AI receptionist Rachel can make and receive calls 24/7. Motion can't do this at all.", color: "green" },
                                    { icon: HeadphonesIcon, title: "Free Concierge Onboarding", desc: "We don't just give you software—our team builds your custom AI employees FOR you during a free onboarding call.", color: "purple" },
                                    { icon: DollarSign, title: "Transparent Pricing", desc: "$29/month for ALL AI employees. No credit limits. No surprise fees. No complex tier structures.", color: "emerald" },
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Employees: Motion vs Dooza</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Let's compare what each platform's AI employees can actually do for your business:
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Motion Column */}
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center text-sm font-bold">M</span>
                                        Motion AI Employees
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        {[
                                            "Alfred - Executive Assistant (basic task creation)",
                                            "Chip - Sales Rep (drafts outreach messages)",
                                            "Suki - Marketing Associate (content suggestions)",
                                            "Millie - Project Manager (task organization)",
                                            "Clide - Customer Support (response drafts)",
                                            "Spec - Recruiter (resume screening)",
                                            "Dot - Research Analyst (web research)"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <span className="text-slate-400 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                        <p className="text-red-700 text-sm font-medium">Limitations:</p>
                                        <ul className="text-red-600 text-sm mt-2 space-y-1">
                                            <li>• Requires $49/mo plan</li>
                                            <li>• Limited to 10,000 credits/month</li>
                                            <li>• No phone call capabilities</li>
                                            <li>• Can't execute actions autonomously</li>
                                        </ul>
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
                                            "Eva - Email Manager (drafts AND sends replies)",
                                            "Somi - Social Media Manager (posts autonomously)",
                                            "Stan - Lead Generator (finds and qualifies leads)",
                                            "Penny - SEO Specialist (optimizes your content)",
                                            "Rachel - AI Receptionist (makes/receives calls)",
                                            "Linda - Legal Assistant (reviews contracts)",
                                            "Custom Employees - Build your own!"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                        <p className="text-green-700 text-sm font-medium">Included in $29/mo:</p>
                                        <ul className="text-green-600 text-sm mt-2 space-y-1">
                                            <li>• ALL AI employees included</li>
                                            <li>• Unlimited conversations</li>
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
                                        <tr><td className="p-4 border-b font-medium">Starting Price</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">$29/month</td><td className="p-4 border-b">$29/month (no AI)</td></tr>
                                        <tr><td className="p-4 border-b font-medium">AI Employees Price</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Included in $29</td><td className="p-4 border-b text-red-500">Requires $49/mo plan</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Usage Limits</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Unlimited</td><td className="p-4 border-b text-red-500">10,000 credits/month</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Phone Calls</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes (Rachel AI)</td><td className="p-4 border-b text-red-500">No</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Autonomous Actions</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes - sends, posts, calls</td><td className="p-4 border-b text-red-500">No - drafts only</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Custom AI Employees</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes - fully customizable</td><td className="p-4 border-b">Limited customization</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Onboarding</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Free concierge call</td><td className="p-4 border-b text-red-500">Self-serve only</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Setup Time</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">5 minutes</td><td className="p-4 border-b">Days to weeks</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Mobile App</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Full-featured</td><td className="p-4 border-b text-red-500">Limited features</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Support Response</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">&lt;2 hours</td><td className="p-4 border-b">24-48 hours</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Cost: Motion vs Dooza</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Let's break down what you'll actually pay over a year:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">$29<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <div className="text-lg text-slate-600 mb-4">$348/year total</div>
                                    <ul className="space-y-3">
                                        {[
                                            "ALL AI employees included",
                                            "Unlimited conversations & actions",
                                            "Phone call capabilities",
                                            "Custom AI employee builder",
                                            "Free concierge onboarding",
                                            "Priority support (<2hr response)"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">MOTION (with AI Employees)</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">$49<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <div className="text-lg text-slate-600 mb-4">$588/year total</div>
                                    <ul className="space-y-3">
                                        {[
                                            "AI calendar & scheduling",
                                            "10,000 credits/month (runs out)",
                                            "No phone capabilities",
                                            "Pre-built agents only",
                                            "Self-serve setup",
                                            "Standard support"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0" /><span className="text-slate-600">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                <p className="text-2xl font-bold text-green-700">Save $240/year with Dooza</p>
                                <p className="text-green-600 mt-2">Plus get MORE features, unlimited usage, and human support</p>
                            </div>
                        </section>

                        <section id="testimonials" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Motion Users Say (And Why They Switch)</h2>
                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <p className="text-slate-700 italic mb-4">"It's just so expensive. They don't really ship the features I want. The AI agents are useless."</p>
                                    <p className="text-sm text-slate-500">— Motion user on Trustpilot</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <p className="text-slate-700 italic mb-4">"I wish the instructions for learning were made for dummies. I am having a hard time learning how to use it."</p>
                                    <p className="text-sm text-slate-500">— Motion user on Trustpilot</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <p className="text-slate-700 italic mb-4">"It was advertised that we could add on the virtual employees but when I inquired, I was told that this was not an option."</p>
                                    <p className="text-sm text-slate-500">— Motion user on Trustpilot</p>
                                </div>
                                <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                                    <div className="flex items-center gap-2 mb-3">
                                        <TrendingUp className="w-5 h-5 text-primary-600" />
                                        <span className="font-bold text-primary-700">After Switching to Dooza:</span>
                                    </div>
                                    <p className="text-slate-700 italic mb-4">"My AI receptionist answers every call while I'm on site. Haven't missed a lead in months."</p>
                                    <p className="text-sm text-slate-500">— Interio Square, Dooza Customer</p>
                                </div>
                            </div>
                        </section>

                        <section id="migration" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Switching from Motion is Easy</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                You don't need to migrate anything. Dooza works alongside your existing tools—we're not trying to replace your calendar.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Book Your Free Onboarding Call", desc: "Schedule a 30-minute call with our concierge team. We'll learn about your business and build your AI employees for you." },
                                    { step: "2", title: "Connect Your Tools", desc: "One-click integrations with Gmail, Outlook, social platforms, CRMs, and more. Keep using what you love." },
                                    { step: "3", title: "Activate Your AI Employees", desc: "Your custom AI employees start working immediately—handling email, social media, calls, and more." },
                                    { step: "4", title: "Cancel Motion (and Save $240/year)", desc: "Once you see Dooza in action, you'll wonder why you ever paid for Motion's limited AI." }
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Verdict: Why Dooza Wins</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Motion is a decent calendar app that added AI employees as an afterthought. Dooza is a <strong>purpose-built AI employees platform</strong> that integrates with your existing calendar.
                                </p>
                                <p>
                                    If you want AI that can actually execute tasks autonomously—sending emails, posting to social media, making phone calls, generating leads—Dooza is the clear choice.
                                </p>
                                <p>
                                    And with transparent pricing ($29/month for everything), free concierge onboarding, and unlimited usage, you'll save money while getting more done.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Experience Real AI Employees?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">Book a free onboarding call and we'll build your custom AI employees for you.</p>
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
                                <li>• <a href="https://www.trustpilot.com/review/www.usemotion.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Motion Reviews on Trustpilot</a></li>
                                <li>• <a href="https://www.usemotion.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Motion Official Pricing</a></li>
                                <li>• <a href="https://thebusinessdive.com/motion-app-review" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">The Business Dive - Motion App Review</a></li>
                                <li>• <a href="https://bymilliepham.com/motion-review" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Motion App Review 2025 - By Millie Pham</a></li>
                                <li>• <a href="https://www.g2.com/products/motionapp/reviews" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Motion Reviews on G2</a></li>
                                <li>• <a href="https://max-productive.ai/ai-tools/motion-ai/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Motion AI Review 2025 - Max Productive</a></li>
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
