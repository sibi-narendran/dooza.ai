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
    Workflow,
    Timer,
    Share2,
    BarChart3,
    Target
} from 'lucide-react';

const faqData = [
    { question: "What business processes can I automate without coding?", answer: "You can automate email management, social media posting, inbound call handling, lead generation, SEO content, and legal compliance — all without writing a single line of code. Dooza's AI employees handle these end-to-end for $29/month." },
    { question: "How much time can business automation actually save?", answer: "Most small business owners save 15-25 hours per week. Specifically: 10+ hours on email, 6+ hours on social media, and 5+ hours on missed call follow-ups. That's roughly $6,200+/month in recovered productivity." },
    { question: "How is Dooza different from Zapier or Make?", answer: "Zapier and Make connect apps with if-then rules — you still build and maintain every workflow. Dooza gives you AI employees that autonomously handle entire job functions like email, social media, and calls. No workflow building required." },
    { question: "How much does business process automation cost?", answer: "Traditional options range from $500-2,400/month (tool stacks or virtual assistants). Dooza provides 6 AI employees handling email, social, calls, leads, SEO, and legal for just $29/month." },
    { question: "Which business processes should I automate first?", answer: "Start with your biggest time drain. For most businesses, that's email management or social media. Audit where you spend the most hours, automate that first, then expand to calls, leads, and SEO." }
];

export default function AutomateBusinessProcessesContent() {
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
            const sections = ['introduction', 'time-wasters', 'automate-email', 'automate-social', 'automate-calls', 'old-vs-new', 'dooza-approach', 'getting-started', 'roi-calculator', 'faq'];
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
            <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Automate Business Processes' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                            <Workflow size={16} />
                            <span>Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How to <span className="text-primary-600">Automate Business Processes</span> in 2026 (Without Coding)
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            McKinsey says 60% of all work activities are automatable. In 2026, you don't need developers or expensive consultants — AI employees handle entire job functions autonomously.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
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
                                Get AI Employees - $29/mo
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
                                    { id: 'time-wasters', label: 'Biggest Time-Wasters' },
                                    { id: 'automate-email', label: 'Automate Email' },
                                    { id: 'automate-social', label: 'Automate Social Media' },
                                    { id: 'automate-calls', label: 'Automate Calls' },
                                    { id: 'old-vs-new', label: 'Old Way vs New Way' },
                                    { id: 'dooza-approach', label: 'The Dooza Approach' },
                                    { id: 'getting-started', label: 'Getting Started' },
                                    { id: 'roi-calculator', label: 'ROI Calculator' },
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
                                <p className="text-sm text-slate-600 mb-4">Automate your business</p>
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
                                <InternalLinks currentSlug="automate-business-processes" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You didn't start a business to spend 3 hours a day on email. Or 6 hours a week posting on social media. Or missing calls from customers who'll never call back.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to McKinsey, <strong>60% of all work activities are automatable</strong> — and that number is rising fast with AI. Yet most small business owners are still doing everything manually, burning through the hours they should be spending growing their business.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Here's the good news: in 2026, you don't need developers or expensive consultants to automate your business. You don't need to learn Zapier workflows or hire a virtual assistant at $2,400/month. AI employees now handle entire job functions — email, social media, phone calls, lead generation — <strong>autonomously</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide shows you exactly how to automate the three biggest time-wasters in your business, without writing a single line of code.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="YRhGtHfs1Lw"
                                        title="How to Automate Business Processes in 2026"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: How to automate your business processes without coding</p>
                                </div>

                                <div className="bg-primary-50 border border-primary-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Bottom Line</h4>
                                            <p className="text-slate-700">
                                                Small businesses that automate save <strong>15-25 hours/week</strong> and see <strong>213x ROI</strong> on their automation investment.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The 3 Biggest Time-Wasters */}
                        <section id="time-wasters" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The 3 Biggest Time-Wasters Killing Your Business</h2>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    { stat: "28%", label: "of the workday spent on email", source: "McKinsey" },
                                    { stat: "6+ hrs/wk", label: "spent managing social media", source: "Sprout Social" },
                                    { stat: "62%", label: "of SMB calls go unanswered", source: "Forbes" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-primary-50 border border-primary-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-primary-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <p className="text-xs text-primary-600">{item.source}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Hidden Cost</h4>
                                        <p className="text-slate-700">
                                            These three tasks alone consume <strong>20+ hours per week</strong>. At $50/hour, that's <strong>$4,000/month in lost productivity</strong> — before you factor in the missed leads and lost customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Automating Email & Scheduling */}
                        <section id="automate-email" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Automating Email & Scheduling</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        Before
                                    </h3>
                                    <p className="text-slate-600">
                                        Manual email: 3 hrs/day sorting inbox, writing responses, following up. Important messages buried. Leads go cold.
                                    </p>
                                </div>
                                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        After — Eva (AI Email Manager)
                                    </h3>
                                    <p className="text-green-700">
                                        Reads, prioritizes, and responds to emails. Follows up automatically. Never lets a lead go cold. Works 24/7.
                                    </p>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p className="text-lg leading-relaxed">
                                    Eva handles the entire email lifecycle for your business. She triages your inbox — separating urgent client emails from newsletters and spam. She drafts contextual responses that match your tone and brand voice. She follows up with leads who haven't responded, sending perfectly timed nudges that keep deals moving forward.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Need to schedule a meeting? Eva handles that too — coordinating across calendars, suggesting times, and sending confirmations without you lifting a finger.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Mail className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <p className="text-slate-700">
                                        <strong>Businesses using AI email management report saving 10+ hours per week on email alone.</strong>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Automating Social Media */}
                        <section id="automate-social" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Automating Social Media</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        Before
                                    </h3>
                                    <p className="text-slate-600">
                                        Manual posting: 6+ hrs/week creating content, scheduling posts, engaging across platforms. Inconsistent posting kills reach.
                                    </p>
                                </div>
                                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        After — Somi (AI Social Media Manager)
                                    </h3>
                                    <p className="text-green-700">
                                        Creates, schedules, and posts content across all platforms. Maintains your brand voice. Consistent posting, zero effort.
                                    </p>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p className="text-lg leading-relaxed">
                                    Somi doesn't just schedule posts — she creates them. She understands your brand voice, your audience, and what performs well on each platform. She creates platform-native content for Instagram, LinkedIn, Facebook, X, and more — tailored to each audience and optimized for engagement.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    No more staring at a blank screen wondering what to post. No more inconsistent posting schedules that tank your reach. Somi keeps your brand visible and engaged across every channel, every day.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Share2 className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <p className="text-slate-700">
                                        <strong>Businesses that post consistently see 67% more leads than those that don't (HubSpot).</strong>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Automating Inbound Calls */}
                        <section id="automate-calls" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Automating Inbound Calls</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        Before
                                    </h3>
                                    <p className="text-slate-600">
                                        Voicemail: 85% of callers won't leave a message. 62% of calls go unanswered. Every missed call is a missed sale.
                                    </p>
                                </div>
                                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        After — Rachel (AI Receptionist)
                                    </h3>
                                    <p className="text-green-700">
                                        Answers every call instantly. Qualifies leads. Books appointments. Sends you a summary. 24/7.
                                    </p>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p className="text-lg leading-relaxed">
                                    Rachel is your always-on AI receptionist. When a potential customer calls your business, Rachel picks up instantly — no hold music, no voicemail, no missed opportunity. She greets callers professionally, answers their questions, qualifies them as leads, and books appointments directly into your calendar.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    After every call, Rachel sends you a detailed summary: who called, what they needed, how qualified they are, and what action was taken. You stay informed without being interrupted.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline font-medium">Read our deep dive: The Best AI Receptionist →</Link>
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Phone className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <p className="text-slate-700">
                                        <strong>85% of callers who reach voicemail will never call back — they'll call your competitor instead.</strong>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Old Way vs New Way */}
                        <section id="old-vs-new" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Old Way vs The New Way</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-slate-100">
                                            <th className="text-left p-4 font-bold text-slate-900 border border-slate-200"></th>
                                            <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">DIY (Manual)</th>
                                            <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">Zapier + Make</th>
                                            <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">Virtual Assistant</th>
                                            <th className="text-left p-4 font-bold text-primary-700 border border-slate-200 bg-primary-50">Dooza AI Employees</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { label: "Monthly Cost", diy: "$0 (your time)", zapier: "$100-500", va: "$1,500-2,400", dooza: "$29" },
                                            { label: "Setup Time", diy: "N/A", zapier: "Days-weeks", va: "1-2 weeks", dooza: "30 minutes" },
                                            { label: "Maintenance", diy: "Constant", zapier: "Weekly tweaks", va: "Ongoing management", dooza: "None" },
                                            { label: "Autonomy", diy: "None — it's all you", zapier: "Rules-based only", va: "Human judgment", dooza: "AI-powered autonomous" },
                                            { label: "Availability", diy: "Your hours", zapier: "24/7 (but dumb)", va: "Business hours", dooza: "24/7 (and smart)" },
                                            { label: "Scalability", diy: "Doesn't", zapier: "Breaks at scale", va: "Expensive to scale", dooza: "Unlimited" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50">
                                                <td className="p-4 font-bold text-slate-900 border border-slate-200">{row.label}</td>
                                                <td className="p-4 text-slate-600 border border-slate-200">{row.diy}</td>
                                                <td className="p-4 text-slate-600 border border-slate-200">{row.zapier}</td>
                                                <td className="p-4 text-slate-600 border border-slate-200">{row.va}</td>
                                                <td className="p-4 text-primary-700 font-medium border border-slate-200 bg-primary-50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 7: The Dooza Approach */}
                        <section id="dooza-approach" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Dooza Approach: AI Employees, Not Tools</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-purple-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Bot size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Stop Using Tools. Hire AI Employees.</h3>
                                        <p className="text-lg text-slate-700 mb-4">
                                            Most automation tools give you building blocks and expect you to assemble them. Dooza gives you AI employees who own entire job functions — just like hiring a real team member, except they work 24/7 and cost $29/month.
                                        </p>
                                        <p className="text-slate-700">
                                            Learn more about <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">how AI employees are transforming small business</Link> and explore our <Link href="/blog/marketing-automation-tools" className="text-primary-600 hover:underline font-medium">marketing automation tools guide</Link>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { name: "Eva", role: "AI Email Manager", desc: "Reads, responds, follows up. Your inbox, handled.", icon: Mail },
                                    { name: "Somi", role: "AI Social Media Manager", desc: "Creates and posts content across all platforms.", icon: Share2 },
                                    { name: "Rachel", role: "AI Receptionist", desc: "Answers calls, qualifies leads, books appointments.", icon: Phone },
                                    { name: "Stan", role: "AI Lead Generator", desc: "Finds and qualifies prospects while you sleep.", icon: Target },
                                    { name: "Seomi", role: "AI SEO Specialist", desc: "Writes blogs, optimizes Google, builds rankings.", icon: TrendingUp },
                                    { name: "Linda", role: "AI Legal Assistant", desc: "Handles compliance, contracts, and legal docs.", icon: Users }
                                ].map((agent, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                                <agent.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{agent.name} — {agent.role}</h4>
                                                <p className="text-sm text-slate-600 mt-1">{agent.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-green-800 mb-4">The Cost Comparison</h4>
                                <div className="grid md:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">$2,400/mo</div>
                                        <p className="text-sm text-slate-600">Virtual Assistant</p>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">$500/mo</div>
                                        <p className="text-sm text-slate-600">DIY Tool Stack</p>
                                    </div>
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <div className="text-2xl font-bold text-green-700">$29/mo</div>
                                        <p className="text-sm text-green-600">Dooza (6 AI Employees)</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-slate-600">
                                <Link href="/blog/ai-staffing" className="text-primary-600 hover:underline font-medium">See the full cost breakdown: AI Staffing Guide →</Link>
                            </p>
                        </section>

                        {/* Section 8: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started: 4 Steps to Automate Your Business</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Audit Your Time",
                                        desc: "Track where you spend hours this week. Email? Social? Calls? Identify your biggest time drain."
                                    },
                                    {
                                        step: "2",
                                        title: "Pick Your Biggest Pain Point",
                                        desc: "Don't try to automate everything at once. Start with the task that eats the most time or loses the most leads."
                                    },
                                    {
                                        step: "3",
                                        title: "Start Your Free Trial",
                                        desc: "Sign up for Dooza. Our concierge team configures your AI employees in a single 30-minute onboarding call."
                                    },
                                    {
                                        step: "4",
                                        title: "Expand Your AI Team",
                                        desc: "Once you see results from your first AI employee, activate more. Most businesses have all 6 running within the first month."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Automate Your Business?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop wasting 20+ hours a week on tasks AI employees can handle. Get started in 30 minutes — no coding required.
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

                        {/* Section 9: ROI Calculator */}
                        <section id="roi-calculator" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The ROI of Automating Your Business</h2>

                            <div className="bg-primary-50 border border-primary-200 p-8 rounded-2xl mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BarChart3 className="w-6 h-6 text-primary-600" />
                                    Monthly Automation ROI Calculator
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-slate-800 mb-3">Monthly Time Savings</h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded-xl border border-primary-100">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Mail className="w-4 h-4 text-primary-600" />
                                                    <span className="font-medium text-slate-900">Email Automation</span>
                                                </div>
                                                <div className="text-2xl font-bold text-primary-600">40 hrs</div>
                                                <p className="text-xs text-slate-500">saved per month</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl border border-primary-100">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Share2 className="w-4 h-4 text-primary-600" />
                                                    <span className="font-medium text-slate-900">Social Media</span>
                                                </div>
                                                <div className="text-2xl font-bold text-primary-600">24 hrs</div>
                                                <p className="text-xs text-slate-500">saved per month</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl border border-primary-100">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Phone className="w-4 h-4 text-primary-600" />
                                                    <span className="font-medium text-slate-900">Call Handling</span>
                                                </div>
                                                <div className="text-2xl font-bold text-primary-600">15 leads</div>
                                                <p className="text-xs text-slate-500">captured per month</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-primary-200 pt-6">
                                        <h4 className="font-semibold text-slate-800 mb-3">At $50/hr + $200/lead value</h4>
                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <div className="bg-white p-4 rounded-xl border border-primary-100">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-slate-600">Email (40 hrs x $50)</span>
                                                    <span className="font-bold text-slate-900">$2,000/mo</span>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl border border-primary-100">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-slate-600">Social (24 hrs x $50)</span>
                                                    <span className="font-bold text-slate-900">$1,200/mo</span>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl border border-primary-100">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-slate-600">Leads (15 x $200)</span>
                                                    <span className="font-bold text-slate-900">$3,000/mo</span>
                                                </div>
                                            </div>
                                            <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-green-700 font-medium">Total Value</span>
                                                    <span className="font-bold text-green-700 text-xl">$6,200+/mo</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-primary-200 pt-6">
                                        <div className="grid md:grid-cols-3 gap-4 text-center">
                                            <div className="bg-white p-4 rounded-xl border border-primary-100">
                                                <p className="text-sm text-slate-500 mb-1">Dooza Cost</p>
                                                <div className="text-2xl font-bold text-slate-900">$29/mo</div>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl border border-primary-100">
                                                <p className="text-sm text-slate-500 mb-1">Value Generated</p>
                                                <div className="text-2xl font-bold text-green-600">$6,200+/mo</div>
                                            </div>
                                            <div className="bg-primary-600 p-4 rounded-xl text-white">
                                                <p className="text-sm text-primary-100 mb-1">Your ROI</p>
                                                <div className="text-3xl font-bold">213x</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <p className="text-green-800 text-lg font-bold text-center">
                                    For every $1 you spend on Dooza, you get $213 back in saved time and captured revenue.
                                </p>
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Automation & Productivity</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/where-machines-could-replace-humans-and-where-they-cant-yet" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">McKinsey — Automation potential of work activities</a></li>
                                        <li>• <a href="https://sproutsocial.com/insights/social-media-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Sprout Social — Social media time statistics</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Lead Generation & Marketing</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.forbes.com/councils/forbesbusinesscouncil/2023/12/11/why-small-businesses-miss-calls-and-how-to-fix-it/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Forbes — SMB missed calls and lost revenue</a></li>
                                        <li>• <a href="https://blog.hubspot.com/marketing/content-marketing-strategy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HubSpot — Content marketing and lead generation</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="automate-business-processes" category="Automation" tags={['Business Automation', 'AI Employees', 'No-Code Automation']} />
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
