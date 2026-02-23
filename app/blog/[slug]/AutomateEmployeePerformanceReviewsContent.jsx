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
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ArrowRight,
    Zap,
    AlertTriangle,
    Bot,
    Sparkles,
    Shield,
    Users,
    Brain,
    TrendingUp,
    BarChart3,
    FileText,
    ClipboardCheck,
    Eye,
    Scale,
    Timer,
    Target,
    Database,
    MessageSquare,
    ThumbsDown,
    Activity,
    GitMerge,
    Lightbulb,
    Lock,
    UserCheck,
    Workflow
} from 'lucide-react';

const faqData = [
    {
        question: "Can AI really write fair performance reviews?",
        answer: "AI doesn't write the final review — it drafts one based on objective data. The AI aggregates metrics from project management tools, peer feedback, goal tracking, and documented achievements to create a comprehensive first draft. A human manager then reviews, personalizes, and delivers the feedback. This hybrid approach is actually fairer than fully manual reviews because it reduces recency bias, halo/horn effects, and inconsistency across managers. The key is that AI provides the data backbone while humans provide the judgment and empathy."
    },
    {
        question: "Will employees trust AI-generated reviews?",
        answer: "Trust depends on transparency. Organizations that openly communicate how AI is used in the review process — explaining that it aggregates objective data rather than making subjective judgments — see higher employee acceptance. Studies show employees actually prefer data-backed feedback over reviews based solely on a manager's memory. The critical factor is that employees understand AI assists the process but doesn't control it, and that they can see the data sources behind their review."
    },
    {
        question: "How much time does AI save on performance reviews?",
        answer: "Most organizations report saving 10-15 hours per manager per review cycle. The breakdown: 3-5 hours saved on data collection (AI aggregates automatically), 4-6 hours saved on draft writing (AI generates first drafts), and 2-3 hours saved on calibration (AI identifies inconsistencies across teams). For a company with 20 managers doing quarterly reviews, that's 800-1,200 hours saved per year — the equivalent of hiring a full-time HR coordinator."
    },
    {
        question: "Does AI eliminate bias in performance reviews?",
        answer: "AI reduces certain types of bias but doesn't eliminate all of them. It's excellent at countering recency bias (by tracking the full review period), reducing inconsistency across managers, and flagging biased language patterns. However, AI can also introduce its own biases if trained on historically biased data. The best approach is using AI as a bias-detection layer alongside human oversight — catching patterns that humans miss while having humans catch patterns that AI might perpetuate."
    },
    {
        question: "What data does AI use to write performance reviews?",
        answer: "AI-assisted review tools typically pull from multiple sources: project management tools (tasks completed, deadlines met), communication platforms (collaboration patterns, responsiveness), peer feedback surveys, self-assessments, goal tracking systems, documented achievements, and training completion records. The specific data sources depend on what tools your organization uses and what you choose to integrate. Employees should always know which data sources are being used."
    },
    {
        question: "Is AI performance review software expensive?",
        answer: "Costs vary widely. Enterprise platforms like Lattice or Culture Amp range from $6-11 per employee per month. AI-specific add-ons can add $3-8 per employee per month. However, when you calculate the time savings (10+ hours per manager per cycle), the ROI is substantial. A manager earning $60/hour who saves 12 hours per cycle saves $720 in labor costs alone — easily covering the software cost for dozens of employees."
    },
    {
        question: "How do I get started with AI performance reviews?",
        answer: "Start small: pick one team, digitize your review criteria into clear measurable goals, and begin tracking performance data consistently for one quarter. Then introduce AI drafting for that team's next review cycle. Gather feedback from both managers and employees, iterate on the process, and expand company-wide. Most organizations see meaningful results within two review cycles. The key is starting with good data — AI can only be as fair as the data it works with."
    }
];

export default function AutomateEmployeePerformanceReviewsContent() {
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
            const sections = ['introduction', 'pain-of-manual-reviews', 'bias-problem', 'how-ai-collects-data', 'ai-drafts-reviews', 'fairness-ethics', 'time-savings', 'implementation-guide', 'dooza-positioning', 'faq'];
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
            <div className="bg-gradient-to-br from-purple-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Automate Employee Performance Reviews' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                            <ClipboardCheck size={16} />
                            <span>AI Education</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How to Automate Employee Performance Reviews with AI <span className="text-primary-600">(Fairly & Quickly)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Most managers spend 17+ hours per review cycle on a process that employees dread and nobody trusts. AI can cut that to 3 hours while making reviews more objective, more comprehensive, and less biased. Here's how to do it right.
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
                                Try AI-Powered Workforce Tools
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
                                    { id: 'introduction', label: 'The 17-Hour Problem' },
                                    { id: 'pain-of-manual-reviews', label: 'Why Manual Reviews Fail' },
                                    { id: 'bias-problem', label: 'The Bias Problem' },
                                    { id: 'how-ai-collects-data', label: 'AI Data Collection' },
                                    { id: 'ai-drafts-reviews', label: 'Data to Draft' },
                                    { id: 'fairness-ethics', label: 'Fairness & Ethics' },
                                    { id: 'time-savings', label: 'ROI & Time Savings' },
                                    { id: 'implementation-guide', label: 'Implementation Guide' },
                                    { id: 'dooza-positioning', label: 'How Dooza Helps' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button
                                        type="button"
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
                                <p className="text-sm text-slate-600 mb-4">Automate your workforce management</p>
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
                                <InternalLinks currentSlug="automate-employee-performance-reviews" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction — The 17-Hour Problem */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Performance reviews are one of the most universally dreaded rituals in the modern workplace. Managers hate writing them. Employees hate receiving them. HR hates chasing everyone to complete them on time. And yet, we keep doing them the same way we did twenty years ago.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Here is the scale of the problem: the average manager spends <strong>17 hours per review cycle</strong> — gathering notes, trying to remember what happened six months ago, writing feedback that feels both honest and constructive, calibrating across teams, and then delivering it in a conversation that nobody enjoys. Multiply that across a company with 50 managers, and you are looking at <strong>850 hours of managerial time</strong> consumed every cycle. That is more than five months of a full-time employee's year.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But time is not even the biggest problem. The real issue is quality. Manual reviews are riddled with cognitive biases, inconsistencies, and gaps. They rely on a manager's selective memory rather than comprehensive data. And by the time the feedback is delivered — often months after the behavior occurred — it is too late to be actionable.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    AI can change this. Not by replacing human judgment, but by doing the heavy lifting that humans are bad at: collecting data consistently, identifying patterns across time, drafting comprehensive feedback, and flagging potential biases before they reach the employee.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you are already exploring how AI can transform your workforce, our guides on <Link href="/blog/ai-staffing" className="text-primary-600 hover:underline font-medium">AI staffing</Link> and <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">automating business processes</Link> cover the broader landscape. This article focuses specifically on one of HR's most painful workflows: the performance review.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mt-8">
                                {[
                                    { stat: "17+", label: "hours per manager per review cycle", icon: Clock },
                                    { stat: "95%", label: "of managers say they are dissatisfied with the review process", icon: ThumbsDown },
                                    { stat: "Only 14%", label: "of employees say reviews motivate them to improve", icon: TrendingUp }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-purple-50 border border-purple-100 p-5 rounded-xl text-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mx-auto mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <div className="text-3xl font-bold text-purple-700 mb-1">{item.stat}</div>
                                        <p className="text-sm text-slate-600">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 2: Why Manual Performance Reviews Fail */}
                        <section id="pain-of-manual-reviews" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Manual Performance Reviews Fail</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The traditional performance review process was designed for a different era — one where managers supervised small teams doing repetitive work and could directly observe every task. Today, teams are distributed, projects are cross-functional, and a manager might oversee 8-15 people working on completely different initiatives. The old model does not work anymore, and the cracks show in five specific ways.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        icon: Clock,
                                        title: "Recency Bias",
                                        desc: "Managers disproportionately remember the last 2-3 weeks before the review. An employee who delivered exceptional work in Q1 and Q2 but had a rough final month gets rated as if the entire period was mediocre. Conversely, someone who coasted for five months but rallied at the end looks like a top performer. This is not a character flaw in managers — it is how human memory works. We are wired to weight recent experiences more heavily.",
                                        color: "bg-red-50 border-red-200",
                                        iconColor: "bg-red-100 text-red-600"
                                    },
                                    {
                                        icon: Eye,
                                        title: "Halo / Horn Effect",
                                        desc: "One strong impression — positive or negative — colors everything else. If a manager sees an employee nail a critical presentation, that 'halo' inflates ratings across all categories, even unrelated ones like teamwork or technical skill. The reverse is equally damaging: a single mistake creates a 'horn' that drags down the entire review. These cognitive shortcuts save mental energy, but they produce reviews that do not reflect reality.",
                                        color: "bg-amber-50 border-amber-200",
                                        iconColor: "bg-amber-100 text-amber-600"
                                    },
                                    {
                                        icon: Scale,
                                        title: "Inconsistency Across Managers",
                                        desc: "One manager's 'exceeds expectations' is another manager's 'meets expectations.' Without standardized calibration, identical performance gets rated differently depending on who is doing the rating. This creates real compensation and promotion inequities. Employees in tough-grading teams are penalized for something entirely outside their control, while employees under lenient managers get inflated ratings they did not earn.",
                                        color: "bg-orange-50 border-orange-200",
                                        iconColor: "bg-orange-100 text-orange-600"
                                    },
                                    {
                                        icon: Timer,
                                        title: "Massive Time Drain",
                                        desc: "Writing a single thorough review takes 1-2 hours. A manager with 10 direct reports needs 10-20 hours just for writing — not counting data gathering, peer feedback collection, calibration meetings, and delivery conversations. Many managers end up rushing through reviews or copying generic language just to meet the deadline. The result is feedback that feels hollow and unhelpful.",
                                        color: "bg-blue-50 border-blue-200",
                                        iconColor: "bg-blue-100 text-blue-600"
                                    },
                                    {
                                        icon: MessageSquare,
                                        title: "Delayed, Stale Feedback",
                                        desc: "Annual reviews deliver feedback 6-12 months after the behavior occurred. Even quarterly reviews have a 3-month lag. By the time an employee hears 'you should have handled that client situation differently,' the context has faded, the emotions have cooled, and the learning opportunity has passed. Effective feedback needs to be timely. The traditional review cycle makes that structurally impossible.",
                                        color: "bg-purple-50 border-purple-200",
                                        iconColor: "bg-purple-100 text-purple-600"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.color} border p-6 rounded-xl`}>
                                        <div className="flex items-start gap-4">
                                            <div className={`w-10 h-10 ${item.iconColor} rounded-lg flex items-center justify-center shrink-0`}>
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
                                                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl">
                                <p className="text-lg font-bold mb-2">The bottom line:</p>
                                <p className="text-slate-300 leading-relaxed">
                                    Manual performance reviews are not just time-consuming — they are <strong className="text-white">structurally flawed</strong>. They ask humans to do things humans are bad at (remembering six months of detailed observations without bias) while preventing humans from doing things they are good at (having timely, empathetic conversations about growth). AI does not fix the human parts. It fixes the data parts — so managers can focus on what actually matters.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: The Bias Problem Nobody Talks About */}
                        <section id="bias-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Bias Problem Nobody Talks About</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    We need to talk about something uncomfortable. Performance reviews are not just inaccurate — they are systematically unfair in ways that track along gender, race, and relationship lines. This is not about bad intentions. Most managers genuinely want to be fair. But unconscious bias operates below the level of awareness, and the subjective nature of traditional reviews gives it room to flourish.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5 text-red-600" />
                                        Gender Bias in Language
                                    </h3>
                                    <div className="space-y-3 text-sm text-slate-700">
                                        <p>
                                            Research from Stanford University found that women are <strong>1.4x more likely</strong> to receive critical subjective feedback in reviews. The same assertive behavior gets described differently:
                                        </p>
                                        <div className="grid grid-cols-2 gap-3 mt-3">
                                            <div className="bg-white p-3 rounded-lg">
                                                <p className="text-xs font-medium text-red-600 mb-1">Describing Women</p>
                                                <p className="text-slate-800 font-medium">"Abrasive"</p>
                                                <p className="text-slate-800 font-medium">"Aggressive"</p>
                                                <p className="text-slate-800 font-medium">"Bossy"</p>
                                                <p className="text-slate-800 font-medium">"Emotional"</p>
                                            </div>
                                            <div className="bg-white p-3 rounded-lg">
                                                <p className="text-xs font-medium text-blue-600 mb-1">Describing Men</p>
                                                <p className="text-slate-800 font-medium">"Assertive"</p>
                                                <p className="text-slate-800 font-medium">"Confident"</p>
                                                <p className="text-slate-800 font-medium">"A natural leader"</p>
                                                <p className="text-slate-800 font-medium">"Passionate"</p>
                                            </div>
                                        </div>
                                        <p className="mt-2">
                                            Women also receive more vague feedback ("You need to be more strategic") compared to specific actionable feedback given to men ("You should lead the Q3 product launch").
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                                        Racial Disparities in Ratings
                                    </h3>
                                    <div className="space-y-3 text-sm text-slate-700">
                                        <p>
                                            A study published in the Journal of Applied Psychology found that Black employees receive <strong>lower performance ratings</strong> than white employees performing at the same level — even after controlling for objective performance metrics.
                                        </p>
                                        <p>
                                            The gap widens when reviews rely more heavily on subjective assessments and narrows when organizations use <strong>structured, criteria-based evaluations</strong> with clear behavioral anchors.
                                        </p>
                                        <p>
                                            This is not about individual racism. It is about a system that gives unconscious bias too much room to operate. When reviews depend on a manager's subjective impression rather than documented data, the patterns are predictable and persistent.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
                                <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    Proximity Bias & Favoritism
                                </h3>
                                <div className="text-sm text-slate-700 space-y-3">
                                    <p>
                                        Managers consistently rate employees they see more often (and like more personally) higher than those they interact with less. In the age of remote and hybrid work, this has become a serious equity issue. A 2023 study from the Society for Human Resource Management found that <strong>remote workers are 38% less likely to receive a positive performance review</strong> compared to in-office peers — even when output metrics are identical.
                                    </p>
                                    <p>
                                        Similarly, the "similar-to-me" effect means managers unconsciously favor employees who share their background, communication style, or personality traits. This is not favoritism in the malicious sense — it is pattern-matching that feels like good judgment but produces unfair outcomes.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Lightbulb className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-purple-900 mb-2">Where AI Fits (and Where It Does Not)</h4>
                                        <p className="text-slate-700 leading-relaxed">
                                            AI is not a silver bullet for bias. If trained on historically biased data, AI can perpetuate the same patterns. But used correctly, AI excels at three things humans struggle with: <strong>tracking behavior consistently over time</strong> (eliminating recency bias), <strong>applying the same criteria across all employees</strong> (reducing inconsistency), and <strong>flagging biased language patterns</strong> in draft reviews before they reach the employee. The goal is not bias-free reviews — that may not be achievable. The goal is <strong>less biased</strong> reviews, with more transparency about where bias might still exist.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: How AI Collects Objective Performance Data */}
                        <section id="how-ai-collects-data" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How AI Collects Objective Performance Data</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The foundation of a fair AI-assisted review is data — and not the kind a manager tries to recall from memory. AI aggregates information from the systems your team already uses, building a comprehensive, time-spanning picture of each employee's contributions that no human could replicate manually.
                                </p>
                                <p>
                                    Think of it as the difference between a snapshot and a time-lapse. A manager's memory is a snapshot — a blurry one, taken at the end of the period. AI creates the time-lapse: every project, every milestone, every piece of feedback, captured as it happens.
                                </p>
                            </div>

                            {/* Visual Flow Diagram */}
                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-6 text-center">Data Sources AI Aggregates</h3>
                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    {[
                                        {
                                            icon: ClipboardCheck,
                                            title: "Project Management Tools",
                                            desc: "Tasks completed, deadlines met or missed, project velocity, sprint contributions, story points delivered",
                                            examples: "Jira, Asana, Monday, Trello, Linear",
                                            color: "bg-blue-50 border-blue-200"
                                        },
                                        {
                                            icon: MessageSquare,
                                            title: "Communication Metrics",
                                            desc: "Collaboration frequency, cross-team engagement, response patterns, knowledge-sharing contributions",
                                            examples: "Slack, Teams, Email analytics",
                                            color: "bg-green-50 border-green-200"
                                        },
                                        {
                                            icon: Users,
                                            title: "Peer Feedback",
                                            desc: "360-degree reviews, project-specific kudos, collaboration ratings, mentorship recognition",
                                            examples: "15Five, Lattice, Culture Amp, custom surveys",
                                            color: "bg-purple-50 border-purple-200"
                                        },
                                        {
                                            icon: FileText,
                                            title: "Self-Assessments",
                                            desc: "Employee's own reflection on achievements, challenges, growth areas, and career goals",
                                            examples: "Review forms, career development docs",
                                            color: "bg-amber-50 border-amber-200"
                                        },
                                        {
                                            icon: Target,
                                            title: "Goal Tracking",
                                            desc: "OKR progress, KPI achievement rates, milestone completion, quarterly objective status",
                                            examples: "Lattice, Betterworks, Workboard",
                                            color: "bg-red-50 border-red-200"
                                        },
                                        {
                                            icon: Activity,
                                            title: "Documented Achievements",
                                            desc: "Awards, certifications, training completed, process improvements, client testimonials, revenue impact",
                                            examples: "HR systems, learning platforms, CRM",
                                            color: "bg-teal-50 border-teal-200"
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`${item.color} border p-4 rounded-xl`}>
                                            <div className="flex items-center gap-2 mb-2">
                                                <item.icon className="w-5 h-5 text-slate-700" />
                                                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                            </div>
                                            <p className="text-xs text-slate-600 mb-2">{item.desc}</p>
                                            <p className="text-xs text-slate-500 italic">Tools: {item.examples}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Flow arrow */}
                                <div className="flex items-center justify-center gap-3 my-6">
                                    <div className="h-px bg-slate-300 flex-1" />
                                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                        <GitMerge size={16} />
                                        AI Aggregation Engine
                                    </div>
                                    <div className="h-px bg-slate-300 flex-1" />
                                </div>

                                <div className="bg-white border-2 border-primary-200 p-5 rounded-xl text-center">
                                    <h4 className="font-bold text-primary-700 mb-2">Comprehensive Performance Profile</h4>
                                    <p className="text-sm text-slate-600">
                                        A complete, data-backed picture of the employee's contributions across the entire review period — not just what the manager happened to remember.
                                    </p>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The critical difference is <strong>coverage and consistency</strong>. A manager might remember 5-10 key moments from the past quarter. AI tracks hundreds of data points continuously. It does not forget the project that shipped in month one. It does not overlook the mentoring an employee did for a junior colleague in month two. It does not inflate the importance of last week's mistake.
                                </p>
                                <p>
                                    This does not mean every data point matters equally. The AI weights and contextualizes the data — a missed deadline during a company-wide emergency is treated differently than a missed deadline during a normal sprint. But the foundation is always comprehensive data rather than selective memory.
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">Important Privacy Consideration</h4>
                                        <p className="text-amber-700 leading-relaxed">
                                            AI should aggregate work output metrics — not surveil employees. There is a critical difference between tracking "tasks completed and goals met" and tracking "keystrokes per minute and time spent on each website." The former helps build fair reviews. The latter destroys trust. Any AI performance tool must be transparent about what data it collects, and employees must know and consent to the data sources.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: From Data to Draft in 30 Minutes */}
                        <section id="ai-drafts-reviews" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">From Data to Draft in 30 Minutes</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Once AI has the data, the next step is turning it into a review draft that a manager can actually use. This is where the time savings become dramatic — and where the quality improvement becomes visible.
                                </p>
                            </div>

                            {/* Workflow Steps */}
                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "AI Collects & Synthesizes Data",
                                        desc: "The AI pulls from all integrated data sources, weighing recent and historical data equally. It identifies patterns, highlights achievements, and notes areas where metrics suggest room for growth.",
                                        time: "Automatic — runs continuously",
                                        color: "bg-blue-50 border-blue-200"
                                    },
                                    {
                                        step: "2",
                                        title: "AI Generates First Draft",
                                        desc: "Based on the synthesized data, the AI writes a comprehensive review draft covering each evaluation category. It cites specific examples and data points for every statement, so nothing feels generic or unsubstantiated.",
                                        time: "5-10 minutes",
                                        color: "bg-purple-50 border-purple-200"
                                    },
                                    {
                                        step: "3",
                                        title: "Manager Reviews & Personalizes",
                                        desc: "The manager reads the AI draft, adds context the AI could not capture (interpersonal dynamics, leadership qualities, strategic thinking), adjusts tone, and ensures the feedback sounds like them — not a robot.",
                                        time: "15-20 minutes",
                                        color: "bg-green-50 border-green-200"
                                    },
                                    {
                                        step: "4",
                                        title: "Employee Receives Comprehensive Feedback",
                                        desc: "The employee gets a review backed by data spanning the full period, with specific examples, clear development suggestions, and feedback that feels substantive rather than thrown together at the last minute.",
                                        time: "Delivery conversation",
                                        color: "bg-primary-50 border-primary-200"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.color} border p-5 rounded-xl`}>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0 border border-slate-200">{item.step}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                                    <span className="text-xs bg-white px-2 py-1 rounded-full text-slate-500 border border-slate-200">{item.time}</span>
                                                </div>
                                                <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Before/After Comparison */}
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Before & After: What AI-Assisted Reviews Look Like</h3>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <div className="flex items-center gap-2 mb-4">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        <span className="font-bold text-red-800">BEFORE: Manual Review</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-sm text-slate-700 italic leading-relaxed border border-red-100">
                                        "Sarah has been a solid performer this quarter. She completed her projects on time and is a good team player. She could work on her communication skills and take on more leadership opportunities. Overall, she meets expectations and I look forward to seeing her continue to grow."
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        <p className="text-xs text-red-600 flex items-center gap-1"><XCircle size={12} /> No specific examples cited</p>
                                        <p className="text-xs text-red-600 flex items-center gap-1"><XCircle size={12} /> Vague feedback ("communication skills")</p>
                                        <p className="text-xs text-red-600 flex items-center gap-1"><XCircle size={12} /> No data or metrics referenced</p>
                                        <p className="text-xs text-red-600 flex items-center gap-1"><XCircle size={12} /> Generic language that could apply to anyone</p>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl">
                                    <div className="flex items-center gap-2 mb-4">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="font-bold text-green-800">AFTER: AI-Assisted Review</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-sm text-slate-700 italic leading-relaxed border border-green-100">
                                        "Sarah delivered 47 of 52 assigned tasks on or ahead of deadline this quarter (90.4% on-time rate, up from 82% last quarter). She led the client onboarding redesign that reduced setup time by 34%, receiving praise from 4 peers in 360 feedback. Her cross-team collaboration score increased 15%. For growth: three stakeholders noted that written project updates could include more context for non-technical audiences — a specific skill to develop next quarter."
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={12} /> Specific metrics and examples</p>
                                        <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={12} /> Data-backed improvement areas</p>
                                        <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={12} /> Comparison to previous period</p>
                                        <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={12} /> Actionable development suggestion</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed videoId="-F2NZhT4Tuc" title="How to Automate Employee Performance Reviews with AI" />
                                <p className="text-sm text-slate-500 text-center mt-3">Watch: AI-powered performance reviews — faster, fairer, data-driven</p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Manager's Role Changes — For the Better</h4>
                                        <p className="text-slate-700 leading-relaxed">
                                            With AI handling data collection and first-draft writing, managers shift from "review writer" to "review editor and coach." They spend less time on the tedious parts (gathering data, writing boilerplate) and more time on the parts that actually matter: adding human context, calibrating tone, and preparing for a meaningful feedback conversation. Most managers report that AI-assisted reviews make the process not just faster, but <strong>more satisfying</strong> — because they can focus on coaching rather than paperwork.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Fairness, Ethics, and Transparency */}
                        <section id="fairness-ethics" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Fairness, Ethics, and Transparency</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is the section that matters most. AI performance reviews can be a powerful tool for fairness — or a sophisticated way to automate unfairness at scale. The difference comes down to how you implement them. Here are the non-negotiable principles.
                                </p>
                            </div>

                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        icon: Brain,
                                        title: "AI Should Augment, Not Replace Human Judgment",
                                        content: "The AI drafts. The human decides. This is not a philosophical nicety — it is a practical requirement. AI cannot evaluate leadership presence, cultural contribution, mentorship quality, or the way someone handles a crisis with empathy. These are irreducibly human judgments. Any system that lets AI generate final reviews without meaningful human oversight is not an AI-assisted review system — it is an automated rating machine, and it will fail. The manager must read every draft, modify it with their own knowledge, and take ownership of the final feedback.",
                                        color: "bg-blue-50 border-blue-200",
                                        iconColor: "text-blue-600"
                                    },
                                    {
                                        icon: Eye,
                                        title: "Transparency With Employees Is Mandatory",
                                        content: "Employees must know that AI is involved in the review process. They should understand what data sources are used, how the AI generates drafts, and that a human manager reviews and personalizes every piece of feedback. Hiding AI involvement is not just ethically questionable — it is practically counterproductive. If employees discover AI was involved without their knowledge, trust collapses. If they know from the start, most actually prefer the data-backed approach because it feels less arbitrary than a manager's gut feeling.",
                                        color: "bg-green-50 border-green-200",
                                        iconColor: "text-green-600"
                                    },
                                    {
                                        icon: Lock,
                                        title: "Data Privacy Must Be Ironclad",
                                        content: "Performance data is some of the most sensitive information in an organization. It directly affects compensation, promotion, and career trajectory. Any AI review system must have strict access controls (only the relevant manager and HR see the data), clear data retention policies (how long is performance data stored?), employee access rights (can employees see their own data?), and compliance with relevant regulations (GDPR, CCPA, state-specific employment laws). If you cannot answer all of these questions clearly, you are not ready to implement AI reviews.",
                                        color: "bg-amber-50 border-amber-200",
                                        iconColor: "text-amber-600"
                                    },
                                    {
                                        icon: Shield,
                                        title: "AI-Generated Language Must Be Checked for Bias",
                                        content: "Large language models can reproduce societal biases present in their training data. An AI review system should include a bias-detection layer that flags potentially gendered language (using 'aggressive' for women but 'assertive' for men), inconsistent standards across demographic groups, language that is vague or subjective rather than specific and actionable, and rating patterns that correlate with protected characteristics. This is not a one-time check — it requires ongoing monitoring and regular auditing of the AI's outputs across the organization.",
                                        color: "bg-red-50 border-red-200",
                                        iconColor: "text-red-600"
                                    },
                                    {
                                        icon: UserCheck,
                                        title: "Human Oversight Must Be Structural, Not Optional",
                                        content: "It is not enough to say 'managers should review the AI drafts.' The system must require it. Build in mandatory review steps where a manager must read and modify the draft before it can be finalized. Include calibration sessions where managers compare AI-generated drafts across their team to catch inconsistencies. Create an escalation path where employees can challenge a review and have it audited. If human oversight is optional, it will be skipped when managers are busy — which is exactly when bias is most likely to creep in.",
                                        color: "bg-purple-50 border-purple-200",
                                        iconColor: "text-purple-600"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.color} border p-6 rounded-xl`}>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 border border-slate-200">
                                                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-700 text-sm leading-relaxed">{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl">
                                <h4 className="font-bold text-lg mb-3">The Ethical Standard:</h4>
                                <p className="text-slate-300 leading-relaxed">
                                    Every employee should be able to ask: <strong className="text-white">"What data was used in my review? How was the draft generated? Who made the final decisions?"</strong> — and get clear, honest answers. If your AI review process cannot survive that level of transparency, it is not ready for deployment.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: The ROI — 10+ Hours Saved Per Quarter */}
                        <section id="time-savings" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The ROI: 10+ Hours Saved Per Manager Per Quarter</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let us talk numbers. The fairness argument for AI-assisted reviews is compelling, but for many organizations, the business case starts with time and money. Here is what the data shows.
                                </p>
                            </div>

                            {/* Time Savings Breakdown */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        title: "Data Collection",
                                        manual: "3-5 hours",
                                        ai: "Automated",
                                        saved: "3-5 hours",
                                        desc: "Manually pulling metrics from tools, chasing peer feedback, reviewing old notes. AI does this continuously.",
                                        color: "bg-blue-50 border-blue-200",
                                        savedColor: "text-blue-700"
                                    },
                                    {
                                        title: "Writing Drafts",
                                        manual: "4-6 hours",
                                        ai: "15-20 min editing",
                                        saved: "4-6 hours",
                                        desc: "Staring at a blank page, writing feedback for each direct report. AI generates data-backed first drafts.",
                                        color: "bg-green-50 border-green-200",
                                        savedColor: "text-green-700"
                                    },
                                    {
                                        title: "Review Calibration",
                                        manual: "2-3 hours",
                                        ai: "30 min review",
                                        saved: "2-3 hours",
                                        desc: "Comparing ratings across teams, adjusting for manager strictness. AI flags inconsistencies automatically.",
                                        color: "bg-purple-50 border-purple-200",
                                        savedColor: "text-purple-700"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.color} border p-5 rounded-xl`}>
                                        <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                                        <div className="space-y-2 text-sm mb-3">
                                            <div className="flex justify-between">
                                                <span className="text-slate-600">Manual:</span>
                                                <span className="font-medium text-red-600">{item.manual}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-600">With AI:</span>
                                                <span className="font-medium text-green-600">{item.ai}</span>
                                            </div>
                                            <div className="flex justify-between border-t border-slate-200 pt-2">
                                                <span className="text-slate-600 font-medium">Saved:</span>
                                                <span className={`font-bold ${item.savedColor}`}>{item.saved}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Total Cost Comparison */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        Traditional Process (Per Manager, Per Cycle)
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { label: "Data collection", value: "3-5 hours" },
                                            { label: "Writing drafts (10 reports)", value: "4-6 hours" },
                                            { label: "Calibration meetings", value: "2-3 hours" },
                                            { label: "Revision & editing", value: "1-2 hours" },
                                            { label: "Total time", value: "10-16 hours", highlight: true },
                                            { label: "Cost at $60/hr manager rate", value: "$600-960", highlight: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className={`flex justify-between items-center py-1.5 text-sm ${item.highlight ? 'border-t border-red-200 pt-2 mt-1' : ''}`}>
                                                <span className="text-slate-700">{item.label}</span>
                                                <span className={`font-medium ${item.highlight ? 'text-red-700 font-bold' : 'text-red-600'}`}>{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5" />
                                        AI-Assisted Process (Per Manager, Per Cycle)
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { label: "Data collection", value: "Automated" },
                                            { label: "Review & edit AI drafts", value: "2-3 hours" },
                                            { label: "Calibration (AI-flagged)", value: "30 min" },
                                            { label: "Final personalization", value: "30 min" },
                                            { label: "Total time", value: "3-4 hours", highlight: true },
                                            { label: "Cost at $60/hr manager rate", value: "$180-240", highlight: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className={`flex justify-between items-center py-1.5 text-sm ${item.highlight ? 'border-t border-green-200 pt-2 mt-1' : ''}`}>
                                                <span className="text-slate-700">{item.label}</span>
                                                <span className={`font-medium ${item.highlight ? 'text-green-700 font-bold' : 'text-green-600'}`}>{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Company-wide Impact */}
                            <div className="bg-slate-900 text-white p-8 rounded-xl mb-8">
                                <h4 className="font-bold text-lg mb-4">Company-Wide Impact (50 Managers, Quarterly Reviews)</h4>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        { label: "Hours Saved Per Year", value: "1,400-2,400", sub: "hours" },
                                        { label: "Cost Savings Per Year", value: "$84,000-144,000", sub: "in manager time" },
                                        { label: "Better Outcome", value: "Higher quality", sub: "reviews with less effort" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-3xl font-bold text-primary-400 mb-1">{item.value}</div>
                                            <p className="text-sm text-slate-400">{item.sub}</p>
                                            <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-blue-600" />
                                    Beyond Time: The Hidden ROI
                                </h4>
                                <div className="text-sm text-slate-700 space-y-2">
                                    <p>
                                        The time savings are just the beginning. Organizations using AI-assisted reviews also report:
                                    </p>
                                    <ul className="space-y-1 ml-4">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /><span><strong>23% increase in employee satisfaction</strong> with the review process (feedback feels fairer and more specific)</span></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /><span><strong>31% reduction in review-related grievances</strong> (data-backed feedback is harder to dispute)</span></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /><span><strong>Higher manager confidence</strong> in their own reviews (the data gives them something to stand behind)</span></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /><span><strong>Better retention</strong> — employees who feel fairly evaluated are less likely to leave</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 8: Implementation Guide */}
                        <section id="implementation-guide" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Implementation Guide: 6 Steps to AI-Assisted Reviews</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You do not need to overhaul your entire HR process overnight. The best implementations start small, iterate fast, and scale gradually. Here is the step-by-step approach that works.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Digitize Your Review Criteria",
                                        desc: "Before AI can help, you need clear, measurable evaluation criteria. Convert vague categories like 'teamwork' into specific, observable behaviors: 'Responds to peer requests within 24 hours,' 'Contributes to at least 2 cross-team projects per quarter,' 'Shares knowledge through documentation or mentoring.' If you cannot measure it, AI cannot track it. This step alone — even without AI — dramatically improves review quality.",
                                        tip: "Start with your top 5 evaluation categories and define 3-4 measurable behaviors for each."
                                    },
                                    {
                                        step: "2",
                                        title: "Start Collecting Data Consistently",
                                        desc: "Begin tracking performance data in the tools your team already uses. Ensure project management tools are up to date, implement regular peer feedback (monthly pulse surveys work well), and encourage employees to document their own achievements in a shared system. The AI needs at least one full review cycle of consistent data to generate meaningful drafts. Garbage in, garbage out — start building the data habit now.",
                                        tip: "A simple monthly 'wins and learnings' document per employee is a great starting point."
                                    },
                                    {
                                        step: "3",
                                        title: "Choose Your AI Tool",
                                        desc: "Evaluate AI review tools based on: data integrations (does it connect to your existing tools?), bias detection capabilities, transparency features (can employees see what data was used?), customization (can you define your own evaluation criteria?), and security/compliance certifications. Do not choose based on demo impressiveness — choose based on how well it fits your actual workflow and data infrastructure.",
                                        tip: "Request a pilot with real (anonymized) data before committing to any vendor."
                                    },
                                    {
                                        step: "4",
                                        title: "Pilot With One Team",
                                        desc: "Pick a team with a willing manager and run AI-assisted reviews alongside your traditional process for one cycle. Compare the two outputs: Which was more specific? Which took less time? Which did the employee find more useful? Which surfaced insights the other missed? This parallel run builds confidence and reveals integration issues before you scale.",
                                        tip: "Choose a team of 6-10 people — large enough to be meaningful, small enough to monitor closely."
                                    },
                                    {
                                        step: "5",
                                        title: "Gather Feedback & Iterate",
                                        desc: "After the pilot, collect feedback from everyone involved: the manager (Was the AI draft useful? Where did it miss?), the employees (Did the review feel fair and comprehensive? Did they know about AI involvement?), and HR (Were there any compliance concerns? Did the process integrate smoothly?). Use this feedback to refine the AI configuration, adjust evaluation criteria, and improve the workflow before expanding.",
                                        tip: "Create a simple feedback survey with both quantitative ratings and open-ended questions."
                                    },
                                    {
                                        step: "6",
                                        title: "Roll Out Company-Wide",
                                        desc: "Expand to additional teams in waves, not all at once. Train each manager on how to use AI drafts effectively (reviewing, personalizing, not rubber-stamping). Communicate the rollout to all employees with clear messaging about what AI does and does not do, what data is used, and how they can provide feedback on the process. Establish ongoing auditing to monitor for bias patterns and quality consistency across the organization.",
                                        tip: "Plan for 2-3 quarters from pilot to full rollout. Rushing this undermines trust."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="flex items-center gap-3 bg-slate-100 px-5 py-3">
                                            <div className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">{item.step}</div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        </div>
                                        <div className="p-5">
                                            <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                                            <div className="bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg">
                                                <p className="text-xs text-primary-700 flex items-start gap-2">
                                                    <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
                                                    <span><strong>Tip:</strong> {item.tip}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">Common Implementation Mistakes</h4>
                                        <ul className="text-sm text-amber-700 space-y-2">
                                            <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span><strong>Skipping the pilot</strong> — going company-wide immediately leads to resistance and quality issues</span></li>
                                            <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span><strong>Not communicating with employees</strong> — people who discover AI was involved without being told feel betrayed</span></li>
                                            <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span><strong>Letting managers rubber-stamp AI drafts</strong> — the whole point is AI + human judgment, not AI replacing human judgment</span></li>
                                            <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span><strong>Poor data hygiene</strong> — AI cannot fix inconsistent or incomplete data; clean your inputs first</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 9: How Dooza Helps */}
                        <section id="dooza-positioning" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Dooza Helps</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza's <Link href="/blog/ai-staffing" className="text-primary-600 hover:underline font-medium">AI employees</Link> are designed to handle the operational tasks that drain your team's time — including the data collection and analysis that powers better performance management.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    {
                                        icon: Database,
                                        title: "Automated Data Collection",
                                        desc: "Dooza's AI employees continuously track work output, project completions, and collaboration patterns across your team's tools — giving you a comprehensive performance picture without manual data gathering."
                                    },
                                    {
                                        icon: BarChart3,
                                        title: "Performance Analytics",
                                        desc: "Get real-time visibility into team productivity, project velocity, and individual contributions. No more scrambling to reconstruct what happened last quarter."
                                    },
                                    {
                                        icon: Bot,
                                        title: "AI-Powered Insights",
                                        desc: "Dooza's AI identifies patterns in work output and collaboration that humans often miss — highlighting top contributors, flagging burnout risks, and surfacing development opportunities."
                                    },
                                    {
                                        icon: Workflow,
                                        title: "Seamless Integration",
                                        desc: "Works alongside your existing HR tools and processes. Dooza does not replace your review system — it feeds better data into it."
                                    }
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

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Make Performance Reviews Fair, Fast, and Data-Driven?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Dooza's AI workforce handles the operational heavy lifting so your managers can focus on what matters: coaching their teams. Start with a free trial and see the difference AI-powered data collection makes.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start Free Trial <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Demo
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Performance Review Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li><a href="https://www.gallup.com/workplace/249332/harm-good-truth-performance-reviews.aspx" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Gallup — Only 14% of employees say reviews motivate them</a></li>
                                        <li><a href="https://hbr.org/2019/03/the-feedback-fallacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Harvard Business Review — The Feedback Fallacy</a></li>
                                        <li><a href="https://www.shrm.org/topics-tools/news/employee-relations/is-it-time-to-put-performance-reviews-on-pip" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SHRM — Remote worker review disparities</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Bias in Performance Evaluations</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li><a href="https://womensleadership.stanford.edu/resources/voices/language-matters-how-words-used-performance-reviews-can-undermine-gender-equity" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Stanford University — Gender bias in performance feedback language</a></li>
                                        <li><a href="https://psycnet.apa.org/record/2008-04617-008" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Journal of Applied Psychology — Racial disparities in performance ratings</a></li>
                                        <li><a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/three-common-biases-that-make-performance-reviews-unfair" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">McKinsey — Three common biases in performance reviews</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="automate-employee-performance-reviews" category="AI Education" tags={['AI Performance Reviews', 'HR Automation', 'AI for HR', 'Performance Management']} />
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
