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
    Target,
    BarChart3,
    Shield,
    Mail
} from 'lucide-react';

const faqData = [
    {
        question: "What is an AI appointment setter?",
        answer: "An AI appointment setter is software that qualifies leads, follows up with prospects, and books meetings on your calendar — automatically, 24/7. Unlike a chatbot, it handles multi-turn conversations, asks qualifying questions, and schedules appointments without human intervention."
    },
    {
        question: "Can an AI appointment setter replace an SDR?",
        answer: "For initial outreach and qualification, yes. AI appointment setters handle the repetitive top-of-funnel work — responding to leads, asking screening questions, and booking meetings — so your human closers focus on qualified conversations. Most businesses see higher booking rates because AI responds instantly."
    },
    {
        question: "How many more meetings does an AI appointment setter book compared to an agency?",
        answer: "AI appointment setters typically book 3-5x more meetings per dollar. Agencies average $150-250 per booked meeting. AI appointment setters average $1.93 per booked meeting with Dooza — because there's no per-meeting fee, just a flat $29/month."
    },
    {
        question: "How much does an AI appointment setter cost per meeting?",
        answer: "With Dooza, the cost per meeting approaches $1.93 (based on 15 meetings/month at $29/month). Agencies charge $2,000-5,000/month, working out to $150-250 per booked meeting at typical volumes."
    },
    {
        question: "Do I still need an appointment setting agency if I use AI?",
        answer: "For most small and mid-sized businesses, no. AI handles speed-to-lead, consistent follow-up, and 24/7 availability better than agencies. Agencies may still add value for complex enterprise B2B sales cycles requiring deep industry expertise and relationship-based selling."
    }
];

export default function AiAppointmentSetterContent() {
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
            const sections = ['introduction', 'agency-problem', 'what-you-want', 'what-is-ai-setter', 'head-to-head', 'when-agency-wins', 'real-numbers', 'meet-stan-rachel', 'getting-started', 'faq'];
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
                        { label: 'AI Appointment Setter' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <TrendingUp size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">AI Appointment Setters</span> vs. Agencies: Which One Actually Books More Meetings?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            You're paying $2k-5k/month for an agency that books 8-12 meetings. That's $250-375 per meeting. Meanwhile, leads that inquired at 8 PM didn't get a response until 10 AM the next day. There's a better way.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
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
                                Try AI Appointment Setting - $29/mo
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
                                    { id: 'agency-problem', label: 'The Agency Problem' },
                                    { id: 'what-you-want', label: 'What You Actually Want' },
                                    { id: 'what-is-ai-setter', label: 'What Is an AI Setter?' },
                                    { id: 'head-to-head', label: 'Head-to-Head' },
                                    { id: 'when-agency-wins', label: 'When Agency Wins' },
                                    { id: 'real-numbers', label: 'The Real Numbers' },
                                    { id: 'meet-stan-rachel', label: 'Meet Stan & Rachel' },
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
                                <p className="text-sm text-slate-600 mb-4">Book more meetings for less</p>
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
                                <InternalLinks currentSlug="ai-appointment-setter" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction (CHALLENGE) */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You're checking your agency dashboard and the numbers don't add up.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Eight meetings booked last month. Your agency bill? $3,000. That works out to <strong>$375 per meeting</strong>. You glance at the activity log and notice something worse: a prospect filled out your contact form at 8:14 PM on a Tuesday. The agency's first response? 10:03 AM the next morning — <strong>nearly 14 hours later</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    By then, that prospect had already booked a demo with your competitor. According to Harvard Business Review, <strong>78% of leads buy from the company that responds first</strong>. Your agency isn't just expensive — it's slow enough to cost you deals you never even knew you lost.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    And the calls keep coming. Minimum contract commitments, setup fees that appeared on month two, per-meeting surcharges you didn't see in the initial proposal. You wanted more meetings. What you got was an expensive middleman standing between you and your leads.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/ai-sales-agent-guide" className="text-primary-600 hover:underline font-medium">As we covered in our AI sales agent guide</Link>, the gap between what agencies promise and what they deliver is widening — because the technology they're competing against has gotten dramatically better. An AI appointment setter doesn't sleep, doesn't take lunch, and responds to every lead in under 60 seconds.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This post breaks down the real numbers. We'll compare AI appointment setters against agencies, in-house SDRs, and the DIY approach — so you can see which one actually books more meetings per dollar.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="6Ait5R-3-lI"
                                        title="Alex Hormozi & Amjad Massad on AI Appointment Setting & Sales"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Alex Hormozi and Replit CEO Amjad Massad discuss AI sales agents, appointment setting, and the future of lead conversion</p>
                                </div>

                                <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl my-8">
                                    <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                        "We were training an AI SDR and it would make a mistake. I'd correct it — and every single time after that, it would do it right. I've trained a lot of salespeople. This was scary in a cool way — how quickly it can learn. It just doesn't make a mistake after."
                                    </p>
                                    <p className="text-slate-600 text-sm">
                                        Hormozi trained dozens of human sales teams before building AI-powered ones. His observation is critical: human SDRs need weeks of coaching and still have off days. An AI appointment setter corrects once and the fix is permanent. That consistency is what makes the cost-per-meeting math so lopsided.
                                    </p>
                                    <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, conversation with Replit CEO Amjad Massad</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The Agency Problem (CHALLENGE) */}
                        <section id="agency-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Agency Problem: What $3,000/Month Actually Buys You</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "$2k-5k/mo", label: "Average agency retainer cost", source: "Industry Average" },
                                    { stat: "60-70%", label: "Show rate on agency-booked meetings", source: "SalesHacker Research" },
                                    { stat: "78%", label: "of leads buy from the first responder", source: "Harvard Business Review" },
                                    { stat: "35-50%", label: "of sales go to the vendor that responds first", source: "InsideSales.com" }
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
                                    Here's the math most agencies don't want you to do. If you're paying $3,000/month and your agency books 12 meetings, that's <strong>$250 per meeting</strong>. But it gets worse — only 60-70% of those prospects actually show up. So your real cost per <em>attended</em> meeting is closer to <strong>$357-417</strong>.
                                </p>
                                <p>
                                    Now factor in speed-to-lead. Agencies work business hours. Their reps are juggling multiple clients. When a lead comes in at 7 PM or on Saturday morning, that lead sits untouched until Monday. By then, your competitor's AI has already qualified the prospect and booked the meeting.
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-8">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Hidden Agency Costs Most Businesses Discover Too Late</h4>
                                        <ul className="space-y-2 text-slate-700">
                                            <li className="flex items-start gap-2">
                                                <DollarSign className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                                <span><strong>Setup fees:</strong> $500-2,000 onboarding charge in month one</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <DollarSign className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                                <span><strong>Minimum contracts:</strong> 3-6 month lock-in, even if results are poor</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <DollarSign className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                                <span><strong>Per-meeting surcharges:</strong> $50-150 extra per meeting above your plan limit</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <DollarSign className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                                <span><strong>Tool stack fees:</strong> Separate charges for CRM access, call recording, or reporting dashboards</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What You Actually Want (RESULT) */}
                        <section id="what-you-want" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Actually Want From Appointment Setting</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Before we talk solutions, let's get clear on what good appointment setting actually looks like. Forget the vendor names for a moment. Here's the outcome every business wants:
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-8 rounded-xl mb-8">
                                <div className="flex items-start gap-3 mb-6">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                    <h3 className="font-bold text-slate-900 text-lg">The Ideal Appointment Setting System</h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "Instant response to every lead",
                                            desc: "Under 60 seconds, every time. No lead waits until morning. No lead goes cold."
                                        },
                                        {
                                            title: "Consistent follow-up sequences",
                                            desc: "Every prospect gets the same multi-touch follow-up — call, text, email — without anyone forgetting or dropping the ball."
                                        },
                                        {
                                            title: "24/7 availability including weekends",
                                            desc: "Leads don't submit forms on your schedule. They submit them on theirs — evenings, weekends, holidays. Your system needs to match."
                                        },
                                        {
                                            title: "Predictable monthly cost with no surprise charges",
                                            desc: "One price. No per-meeting fees, no overage charges, no hidden add-ons that inflate your bill."
                                        },
                                        {
                                            title: "Full visibility into every conversation",
                                            desc: "You can see every interaction, every qualification answer, every booking — in real time. No waiting for a monthly report."
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-slate-900">{item.title}</h4>
                                                <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    This isn't a wish list — it's table stakes. The question is which approach delivers all five consistently, and at what price. Let's look at the options.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: What Is an AI Appointment Setter? (TRANSFORMATION) */}
                        <section id="what-is-ai-setter" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is an AI Appointment Setter?</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI appointment setter is software that qualifies leads, follows up with prospects across multiple channels, and books meetings directly on your calendar — without human intervention. It uses natural language processing to have real conversations, not canned chatbot responses.
                                </p>
                                <p>
                                    The key difference between an AI appointment setter and a chatbot: <strong>chatbots answer questions. AI appointment setters take action.</strong> A chatbot might tell a prospect your hours. An AI appointment setter asks qualifying questions, determines if the prospect is a fit, and books them into a 30-minute slot on Thursday at 2 PM.
                                </p>
                            </div>

                            <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8">
                                <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                    "We're going to go from information systems — which is what ChatGPT and Perplexity are today — to action systems. Agents. The SDR you're talking about, that's what you're training there. An action system."
                                </p>
                                <p className="text-slate-600 text-sm">
                                    Replit CEO Amjad Massad draws the critical line. A chatbot is an information system — it answers your question and waits. An AI appointment setter is an <em>action system</em> — it qualifies the lead, checks your calendar, and books the meeting. That distinction is why appointment-setting agencies are being disrupted: they're selling human-powered action at $250/meeting when AI delivers the same action for under $2.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">— Amjad Massad, CEO of Replit</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Lead Response", desc: "Responds to every inbound lead in under 60 seconds — calls, texts, form fills, and chat messages." },
                                    { icon: MessageSquare, title: "Multi-Channel Follow-Up", desc: "Reaches prospects via phone call, SMS, and email. Follows up automatically until they respond or opt out." },
                                    { icon: Target, title: "Qualification Questions", desc: "Asks your custom screening questions to identify qualified prospects and filter out tire-kickers." },
                                    { icon: Calendar, title: "Calendar Integration", desc: "Syncs with Google Calendar, Outlook, or Calendly. Books meetings directly without back-and-forth." },
                                    { icon: BarChart3, title: "CRM Updates", desc: "Logs every interaction, qualification answer, and booking in your CRM automatically. No manual data entry." },
                                    { icon: Clock, title: "24/7 Availability", desc: "Works nights, weekends, and holidays. Never takes PTO. Never calls in sick. Never has an off day." }
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

                        {/* Section 5: Head-to-Head Comparison (TRANSFORMATION) */}
                        <section id="head-to-head" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Head-to-Head: AI Appointment Setter vs Agency vs SDR vs DIY</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Talk is cheap. Let's put every option side by side with real numbers. As we explored in our comparison of <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium">AI employees vs virtual assistants</Link>, the cost gap between human-powered and AI-powered services has become a canyon.
                                </p>
                            </div>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Metric</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">AI Appointment Setter</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Agency</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">In-House SDR</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">DIY</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { metric: "Monthly Cost", ai: "$29/mo", agency: "$2,000-5,000", sdr: "$4,000-6,500", diy: "$0 (your time)" },
                                            { metric: "Cost Per Meeting", ai: "~$1.93", agency: "$150-250", sdr: "$100-150", diy: "Hours of your time" },
                                            { metric: "Response Time", ai: "Under 60 seconds", agency: "1-14 hours", sdr: "5-60 minutes", diy: "When you're free" },
                                            { metric: "Availability", ai: "24/7/365", agency: "Business hours (M-F)", sdr: "Business hours (M-F)", diy: "Whenever you check" },
                                            { metric: "Show Rate", ai: "80-90%", agency: "60-70%", sdr: "70-80%", diy: "50-60%" },
                                            { metric: "Scalability", ai: "Unlimited leads", agency: "Limited by headcount", sdr: "1 person's capacity", diy: "Your bandwidth" },
                                            { metric: "Setup Time", ai: "30 minutes", agency: "2-4 weeks", sdr: "4-8 weeks hiring + training", diy: "Ongoing" },
                                            { metric: "Consistency", ai: "100% consistent", agency: "Varies by rep", sdr: "Varies by day", diy: "Inconsistent" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.metric}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.ai}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.agency}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.sdr}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.diy}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The numbers speak for themselves. An AI appointment setter costs 99% less than an agency, responds 840x faster, and maintains near-perfect consistency. The only area where agencies and SDRs compete is in complex, relationship-heavy sales cycles — which we'll address next.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: When an Agency Still Makes Sense (TRANSFORMATION) */}
                        <section id="when-agency-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">When an Agency Still Makes Sense</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    We're not going to pretend agencies are useless. In specific scenarios, a human-powered agency adds value that AI can't replicate yet. Here's where agencies still earn their fee:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        icon: Users,
                                        title: "Enterprise B2B with 6+ month sales cycles",
                                        desc: "When deals take months, involve multiple stakeholders, and require personalized research before every touchpoint, agencies with deep account-based marketing expertise can navigate the complexity."
                                    },
                                    {
                                        icon: Shield,
                                        title: "Highly regulated industries needing human judgment",
                                        desc: "Healthcare, financial services, and legal sectors sometimes require a human to interpret compliance nuances during the qualification process — especially when the conversation goes off-script."
                                    },
                                    {
                                        icon: Target,
                                        title: "Companies needing deep industry expertise for complex qualifying",
                                        desc: "If your qualification process requires understanding technical specifications, industry jargon, or competitive positioning that changes weekly, a specialist agency rep may outperform AI — for now."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    For everyone else — service businesses, SaaS companies, local businesses, coaches, consultants, and agencies selling to SMBs — an AI appointment setter will outperform an agency on every metric that matters: speed, cost, and consistency.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: The Real Numbers (TRANSFORMATION) */}
                        <section id="real-numbers" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Numbers: Cost Per Meeting Breakdown</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's do the math that agencies hope you never do. We'll use conservative, real-world numbers — not best-case marketing claims.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg">The Cost-Per-Meeting Math</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Agency: $3,000/mo / 12 meetings", value: "$250/meeting", highlight: false },
                                        { label: "In-House SDR: $5,000/mo / 20 meetings", value: "$250/meeting", highlight: false },
                                        { label: "SDR (adjusted for benefits + tools)", value: "~$150/meeting", highlight: false },
                                        { label: "AI Appointment Setter: $29/mo / 15 meetings", value: "$1.93/meeting", highlight: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-2 px-4 rounded-lg ${item.highlight ? 'bg-primary-100 font-bold text-primary-800' : 'bg-white'}`}>
                                            <span className="text-slate-700">{item.label}</span>
                                            <span className={item.highlight ? 'text-primary-800 text-xl' : 'text-slate-900 font-medium'}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-primary-200 text-center">
                                    <p className="text-lg font-bold text-primary-800">
                                        AI is 129x more cost-efficient per booked meeting.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$250/meeting</div>
                                    <p className="text-sm text-slate-700 font-medium">Agency</p>
                                    <p className="text-xs text-slate-500 mt-1">$3,000/mo for ~12 meetings</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$150/meeting</div>
                                    <p className="text-sm text-slate-700 font-medium">In-House SDR</p>
                                    <p className="text-xs text-slate-500 mt-1">$5,000+/mo total cost</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$1.93/meeting</div>
                                    <p className="text-sm text-green-800 font-medium">AI Appointment Setter (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">$29/mo, unlimited capacity</p>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Even if we double the AI price and halve the meetings — $58/month for 7 meetings — you're at <strong>$8.29 per meeting</strong>. Still 30x cheaper than an agency. The math doesn't lie: for straightforward appointment setting, AI wins by an order of magnitude.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Meet Stan & Rachel (TRANSFORMATION) */}
                        <section id="meet-stan-rachel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Stan & Rachel: Your AI Appointment Setting Team</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza gives you two AI employees that cover both sides of appointment setting — outbound and inbound. Together, they replace your agency, your SDR, and your missed-call problem. Learn more about Rachel in our <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline font-medium">AI receptionist deep dive</Link>.
                                </p>
                            </div>

                            <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8">
                                <p className="text-slate-700 italic text-lg leading-relaxed mb-3">
                                    "Instead of having one agent that was a master at the whole conversation, it started to make more sense to have an AI that was only trained on first message, and another AI trained only on second message. The more specialized we can make them, the better."
                                </p>
                                <p className="text-slate-600 text-sm">
                                    Hormozi's insight from training his own AI sales team reflects exactly how Dooza built Stan and Rachel. Stan specializes in outbound — cold outreach, follow-up sequences, booking meetings. Rachel specializes in inbound — answering calls, qualifying callers, capturing leads. Two specialists outperform one generalist every time.
                                </p>
                                <p className="text-xs text-slate-500 mt-2">— Alex Hormozi, conversation with Replit CEO Amjad Massad</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Stan Card */}
                                <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                            <Bot size={36} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Stan</h3>
                                            <p className="text-sm text-primary-600 font-medium">AI Sales Agent — Outbound</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-700 mb-6">
                                        Stan handles cold outreach, follow-up sequences, and meeting booking. He's your tireless SDR who works every lead until they convert or say no.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            { icon: Mail, text: "Multi-channel outreach: call, SMS, and email sequences" },
                                            { icon: Target, text: "Custom qualification scripts tailored to your sales process" },
                                            { icon: Calendar, text: "Books meetings directly into your calendar" },
                                            { icon: BarChart3, text: "Tracks every touchpoint and reports conversion metrics" }
                                        ].map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <feature.icon className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Rachel Card */}
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-8 rounded-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                            <Phone size={36} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Rachel</h3>
                                            <p className="text-sm text-green-600 font-medium">AI Receptionist — Inbound</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-700 mb-6">
                                        Rachel handles incoming calls, qualifies every lead, and books appointments on the spot. She's your front desk that never takes a break.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            { icon: Zap, text: "Answers every call instantly — no rings, no voicemail" },
                                            { icon: MessageSquare, text: "Natural conversation with multi-turn dialogue" },
                                            { icon: Target, text: "Lead qualification with your custom screening questions" },
                                            { icon: Clock, text: "24/7 availability including nights, weekends, holidays" }
                                        ].map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <feature.icon className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Together, Stan and Rachel cover the full appointment-setting funnel. Stan chases down new leads and nurtures cold prospects. Rachel catches every inbound call and converts warm leads. No agency required.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Getting Started (TRANSFORMATION) */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started in 3 Steps</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up for Dooza",
                                        desc: "Create your account and meet Stan and Rachel — your AI sales agent and AI receptionist. Free trial available, no credit card required."
                                    },
                                    {
                                        step: "2",
                                        title: "Configure Your Qualifying Questions & Calendar",
                                        desc: "Tell your AI team what makes a qualified lead. Set up your screening questions, connect your calendar, and define your meeting types. Takes about 30 minutes."
                                    },
                                    {
                                        step: "3",
                                        title: "Connect Your Lead Sources",
                                        desc: "Point your website forms, ad campaigns, and phone lines to Dooza. Every lead gets an instant response. Every qualified prospect gets booked."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Book More Meetings for Less?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop overpaying agencies for slow follow-up and inconsistent results. Dooza's AI appointment setter responds in seconds, follows up automatically, and books meetings 24/7 — for $29/month.
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Lead Response & Sales Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Harvard Business Review — The Short Life of Online Sales Leads</a></li>
                                        <li>• <a href="https://www.insidesales.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">InsideSales.com — Speed-to-Lead research</a></li>
                                        <li>• <a href="https://www.saleshacker.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SalesHacker — Agency appointment setting benchmarks</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Appointment Setting Industry</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.gartner.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Gartner — Sales Development Representative cost analysis</a></li>
                                        <li>• <a href="https://www.glassdoor.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Glassdoor — SDR salary benchmarks</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-appointment-setter" category="Comparison" tags={['AI Appointment Setter', 'Sales Automation', 'Lead Generation']} />
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
