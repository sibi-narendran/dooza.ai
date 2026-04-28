'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedPosts from '../../../components/RelatedPosts';
import InternalLinks from '../../../components/InternalLinks';
import BlogHeroImage from '../../../components/BlogHeroImage';
import { Clock, Calendar, ArrowRightLeft } from 'lucide-react';

const faqData = [
    { question: "Can AI fully replace a virtual assistant?", answer: "For repetitive, rule-based tasks — yes. AI employees handle email triage, social media scheduling, SEO content, lead follow-ups, appointment booking, and data entry better and cheaper than a human VA. But for tasks requiring genuine judgment, relationship building, or creative strategy, a human still wins. Most businesses find AI covers 70–80% of what their VA did, and the remaining 20–30% either goes to a part-time specialist or gets handled by the founder." },
    { question: "Which tasks are best suited for AI over a virtual assistant?", answer: "AI outperforms human VAs at email management, social media posting, SEO blog writing, lead follow-up sequences, FAQ-style customer support, appointment scheduling, and data entry/reporting. These are high-volume, repetitive tasks where speed, consistency, and 24/7 availability matter more than judgment. Dooza's AI employees — Maily, Somi, Ranky, Stan, and Rachel — each handle one of these roles autonomously." },
    { question: "How much do businesses save when switching from a VA to AI?", answer: "The average virtual assistant costs $1,500–$4,000/month. Dooza's AI employees cost $49/month and cover the same repetitive tasks — 24/7, with no sick days or timezone gaps. That's $17,400–$47,400 in annual savings. Even if you keep a part-time human for strategy work ($500–$1,000/month), you still save $12,000–$35,000/year." },
    { question: "How long does it take to transition from a VA to AI employees?", answer: "Most businesses complete the switch in 2–4 weeks. Week 1: audit your VA's task list and identify what's automatable. Week 2: set up AI employees and run them in parallel with your VA. Week 3: shift primary workload to AI and let your VA handle exceptions. Week 4: full cutover with a human check-in once daily. Dooza's onboarding team walks you through the entire process." },
    { question: "Can Dooza replace multiple virtual assistants at once?", answer: "Yes. Each Dooza AI employee specializes in one role — Maily for email, Somi for social media, Ranky for SEO, Stan for sales outreach, and Rachel for phone calls and appointment booking. A single $49/month plan gives you all five, replacing work that would require 2–3 VAs at $1,500–$4,000 each. That's $3,000–$12,000/month in VA costs replaced by a single subscription." }
];

export default function ReplaceVaWithAiContent() {
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
            const sections = ['introduction', 'honest-breakdown', 'ai-wins', 'human-wins', 'it-depends', 'cost-math', 'transition-plan', 'faq'];
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
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            {/* Hero */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: "Replace Your VA with AI" }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
                            <ArrowRightLeft size={16} />
                            <span>AI vs Virtual Assistant</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Replace Your VA with AI: <span className="text-primary-600">What Tasks Can AI Actually Do Better? (2026)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Thinking of replacing your virtual assistant with AI? Here&apos;s an honest task-by-task breakdown of what AI does better, what still needs a human, and how much you&apos;ll save.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 28, 2026</span></div>
                        </div>

                        <div className="mt-10">
                            <BlogHeroImage
                                src="/blog/replace-va-with-ai.png"
                                alt="Replace your virtual assistant with AI — task-by-task comparison of AI employees vs human VAs for business automation in 2026"
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
                                    { id: 'honest-breakdown', label: 'The Honest Breakdown' },
                                    { id: 'ai-wins', label: 'Where AI Wins' },
                                    { id: 'human-wins', label: 'Where Humans Win' },
                                    { id: 'it-depends', label: 'It Depends' },
                                    { id: 'cost-math', label: 'The Money Math' },
                                    { id: 'transition-plan', label: '30-Day Transition Plan' },
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

                            <div className="mt-6">
                                <InternalLinks currentSlug="replace-va-with-ai" />
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You&apos;re paying your virtual assistant $2,000 a month. She&apos;s great — reliable, friendly, gets the work done. But lately you&apos;ve noticed something: half the tasks on her plate are copy-paste workflows. Scheduling posts. Triaging emails. Following up with cold leads using the same three templates. And you&apos;re wondering — should an AI be doing this instead?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    You&apos;re not the only one asking. In 2026, 52% of businesses plan to outsource at least one task, and a growing chunk of those are choosing AI over human contractors. Not because AI is smarter — but because for certain jobs, it&apos;s faster, cheaper, and never misses a day.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This isn&apos;t a &quot;fire your VA&quot; post. It&apos;s an honest task-by-task breakdown: where AI genuinely outperforms a human assistant, where a human is still irreplaceable, and where it depends on your business. By the end, you&apos;ll know exactly which tasks to hand off — and how to do it without chaos.
                                </p>
                            </div>
                        </section>

                        <section id="honest-breakdown" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Honest Breakdown: AI vs Human VA, Task by Task</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Most &quot;AI vs VA&quot; articles pick a side and hammer it. Either AI is magic and VAs are obsolete, or AI is dumb and VAs are irreplaceable. Neither is true. The reality is more useful: <strong>some tasks belong to AI, some belong to humans, and some depend on context.</strong>
                                </p>
                                <p>
                                    Here&apos;s a side-by-side comparison of 10 common VA tasks, with an honest verdict on each.
                                </p>
                            </div>

                            {/* Task Comparison Table */}
                            <div className="mt-8 overflow-x-auto">
                                <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left py-4 px-5 font-semibold">Task</th>
                                            <th className="text-center py-4 px-5 font-semibold">AI Employee</th>
                                            <th className="text-center py-4 px-5 font-semibold">Human VA</th>
                                            <th className="text-center py-4 px-5 font-semibold">Verdict</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Email triage &amp; drafting</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Reads, categorizes, drafts replies 24/7</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">8 hrs/day, slower on volume</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">AI wins</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Social media scheduling</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Creates &amp; posts daily across platforms</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Manual scheduling, limited hours</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">AI wins</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">SEO blog writing</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Researches keywords, writes &amp; publishes</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Outsources to writer, manages drafts</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">AI wins</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Lead follow-up sequences</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Instant follow-up, never forgets</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Manual emails, delays, human error</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">AI wins</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Appointment booking</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Books 24/7, syncs calendars instantly</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Available during work hours only</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">AI wins</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">FAQ customer support</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Instant, consistent, multilingual</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Empathetic but slower</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">AI wins</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Data entry &amp; reporting</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Zero errors, processes in seconds</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Prone to fatigue errors</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">AI wins</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Strategy &amp; planning</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Can assist, not lead</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Understands your business deeply</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Human wins</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Handling upset clients</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Can de-escalate basic complaints</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Reads emotions, builds trust</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Human wins</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Creative direction</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Generates options, needs guidance</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Owns the vision end-to-end</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Human wins</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-slate-500 mt-3 text-center italic">AI wins 7 out of 10 common VA tasks on speed, cost, and consistency.</p>
                        </section>

                        <section id="ai-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where AI Clearly Wins Over a Human VA</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Let&apos;s be specific. These aren&apos;t vague claims — these are the tasks where AI employees outperform human VAs on speed, cost, and consistency every single time.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. Email Triage and Drafting</h3>
                                <p>
                                    Your VA reads 50 emails a day, categorizes them, drafts replies, flags the urgent ones. She&apos;s good at it — but she does it from 9am to 5pm, and she misses things when the volume spikes. An AI email employee like <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza&apos;s Maily</Link> reads every email the moment it lands, categorizes it by intent, drafts context-aware responses, and flags only what truly needs you. At 2am on a Sunday. Every single time.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. Social Media Scheduling and Posting</h3>
                                <p>
                                    A VA schedules posts using Buffer or Hootsuite, maybe creates some captions from templates. An AI social employee like Somi generates original content matched to your brand voice, optimizes posting times per platform, and publishes daily across LinkedIn, Instagram, X, and Facebook — without you touching it. That&apos;s not a tool with a scheduler. That&apos;s an employee who owns the channel.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. SEO Blog Writing</h3>
                                <p>
                                    Your VA either writes the blog herself (usually mediocre SEO) or manages a freelancer ($200–$500 per post, 1–2 week turnaround). Ranky — Dooza&apos;s SEO employee — does keyword research, writes optimized articles, and publishes them to your blog. Output: 4–8 posts per month, fully optimized, for $49/month total. That&apos;s the cost of one freelance blog post.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">4. Lead Follow-Up Sequences</h3>
                                <p>
                                    A lead comes in at 8pm. Your VA sees it at 9am the next day. By then, the lead has already booked a call with your competitor. Stan — Dooza&apos;s sales AI employee — follows up instantly, sends a personalized sequence, and books the meeting before your VA finishes her morning coffee. Speed-to-lead is the #1 predictor of conversion. AI wins here by default.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">5. Appointment Booking and Phone Calls</h3>
                                <p>
                                    Rachel — Dooza&apos;s AI receptionist — answers calls 24/7, books appointments directly into your calendar, and handles common questions without transferring to anyone. Your VA can do this too, but only during business hours. Every missed call after 5pm is a missed opportunity.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">6. FAQ Customer Support</h3>
                                <p>
                                    &quot;What are your business hours?&quot; &quot;Do you offer refunds?&quot; &quot;How do I reset my password?&quot; Your VA answers these 30 times a week. AI answers them 30 times a minute — in any language, with zero wait time, with perfect consistency.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">7. Data Entry and Reporting</h3>
                                <p>
                                    Your VA spends 3 hours every Friday pulling numbers into a spreadsheet. AI does it in seconds, with no copy-paste errors, and can run the same report every hour if you want. This is the most boring and error-prone VA task — and the easiest AI win.
                                </p>
                            </div>

                            <div className="mt-8">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/NgBAXFK6nk4"
                                        title="AI Era with DOOZA.AI — How AI Employees Work"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: how Dooza&apos;s AI employees handle real business tasks — email, social, SEO, and calls.</p>
                            </div>
                        </section>

                        <section id="human-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where a Human VA Still Wins (and Probably Always Will)</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Here&apos;s where honesty matters. If someone tells you AI can fully replace every VA task in 2026, they&apos;re selling you something. These are the jobs where a human is still the better choice — and acknowledging this doesn&apos;t weaken the case for AI. It makes it more credible.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Strategy and High-Level Planning</h3>
                                <p>
                                    AI can research competitors, pull data, and even draft strategy documents. But it can&apos;t sit in your context — your cash flow, your team dynamics, your risk tolerance — and make the judgment call that says &quot;we should pull out of that market.&quot; Strategy is pattern recognition plus lived experience. AI has the first part. Not the second.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Relationship Building</h3>
                                <p>
                                    A great VA remembers that your biggest client&apos;s daughter just graduated, sends a congratulations note, and follows up on the partnership discussion from last month. That&apos;s not a workflow — that&apos;s emotional intelligence. AI can remind you to send the note. It can&apos;t build the relationship.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Handling Upset Clients</h3>
                                <p>
                                    When a customer is angry — truly angry — they need to feel heard by a person. AI can de-escalate politely, but it can&apos;t read the room, adapt tone mid-conversation, or make the empathy-driven exception that saves a $50,000 account. Keep humans on this. The cost of getting it wrong is too high.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Creative Direction</h3>
                                <p>
                                    AI generates creative options — dozens of them, fast. But &quot;which direction feels right for our brand?&quot; is a judgment call that requires taste, context, and an understanding of where the brand has been and where it&apos;s going. AI is the paintbrush. A human is the artist.
                                </p>
                            </div>
                        </section>

                        <section id="it-depends" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The &quot;It Depends&quot; Zone</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Some tasks don&apos;t have a clean winner. The right choice depends on your business size, your volume, and how much context the task requires.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Customer Onboarding</h3>
                                <p>
                                    If onboarding is standardized (same welcome email, same setup guide, same check-in at day 7), AI handles it flawlessly. If every client needs a custom kick-off call and a tailored implementation plan, you need a human. <strong>Rule of thumb:</strong> if you can write the onboarding as a checklist, AI can run it.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Content Creation Beyond Blog Posts</h3>
                                <p>
                                    AI writes solid SEO content, email newsletters, and social posts. But for long-form thought leadership, case studies with nuanced storytelling, or brand manifestos — a skilled human writer will still outperform. The split? Use AI for volume content (80%), humans for flagship content (20%).
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Project Management</h3>
                                <p>
                                    AI can send reminders, update task statuses, and compile progress reports. But managing a cross-functional project — navigating personalities, reprioritizing mid-sprint, making trade-offs under pressure — still needs a human brain and a human voice.
                                </p>
                            </div>

                            <div className="mt-8">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/B5p_V-fq-_0"
                                        title="How AI Is Changing Virtual Assistant Jobs"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: how AI is reshaping the virtual assistant industry — and what it means for businesses hiring VAs.</p>
                            </div>
                        </section>

                        <section id="cost-math" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Money Math: VA vs AI Employees</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    This is where most people stop debating and start switching. Let&apos;s do the math with real numbers.
                                </p>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-6">
                                <h3 className="text-xl font-semibold mb-6 text-center">Monthly Cost Comparison</h3>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Human Virtual Assistant</div>
                                        <div className="text-3xl font-bold">$1,500–$4,000<span className="text-base text-slate-400">/mo</span></div>
                                        <div className="text-slate-400 text-sm mt-2">8 hrs/day &middot; Sick days &middot; Timezone gaps</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Dooza AI Employees</div>
                                        <div className="text-3xl font-bold text-primary-400">$49<span className="text-base text-slate-400">/mo</span></div>
                                        <div className="text-slate-400 text-sm mt-2">24/7 &middot; No sick days &middot; All timezones</div>
                                    </div>
                                </div>
                                <div className="border-t border-slate-700 mt-8 pt-6">
                                    <div className="text-center">
                                        <div className="text-slate-400 text-sm mb-1">Annual Savings</div>
                                        <div className="text-3xl font-bold text-emerald-400">$17,400–$47,400<span className="text-base text-slate-400">/year</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <p>
                                    Let&apos;s break that down further. A mid-range VA at $2,500/month costs you $30,000/year. Dooza at $49/month costs $588/year. That&apos;s a <strong>$29,412 difference</strong> — and the AI employees work nights, weekends, and holidays.
                                </p>
                                <p>
                                    Even if you keep a part-time human for the strategy and relationship tasks ($1,000/month), your total cost drops from $2,500/month to $1,049/month. That&apos;s $17,412 in annual savings redirected toward growth.
                                </p>
                                <p>
                                    Here&apos;s the reframe that matters: <strong>you&apos;re not firing a person — you&apos;re reallocating $1,500–$3,000/month from repetitive tasks to growth.</strong> That money can fund paid ads, a product hire, or a sales initiative that actually moves the needle.
                                </p>
                                <p>
                                    For a deeper dive into AI employee pricing, see our <Link href="/blog/how-much-does-an-ai-employee-cost" className="text-primary-600 hover:underline font-medium">complete cost guide</Link>.
                                </p>
                            </div>
                        </section>

                        <section id="transition-plan" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The 30-Day Transition Plan: VA to AI Without Chaos</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    You don&apos;t flip a switch. You don&apos;t fire your VA on a Friday and hope the AI figures it out by Monday. Here&apos;s how to do it properly, based on how businesses actually make the switch.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Week 1: Audit and Categorize</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>List every task your VA does in a typical week</li>
                                    <li>Tag each task: <strong>Automate</strong> (AI can own it), <strong>Assist</strong> (AI helps, human reviews), or <strong>Human Only</strong></li>
                                    <li>You&apos;ll likely find 60–80% of tasks fall into &quot;Automate&quot; or &quot;Assist&quot;</li>
                                    <li>Start your <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza free trial</Link> and set up Maily (email) or Somi (social) first — pick the task with the highest volume</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Week 2: Run in Parallel</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Let AI employees run alongside your VA on the same tasks</li>
                                    <li>Compare output quality, speed, and consistency</li>
                                    <li>Your VA can QA the AI&apos;s work — this builds your confidence and catches edge cases</li>
                                    <li>Add Ranky (SEO) and Stan (sales) if Week 1 went smoothly</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Week 3: Shift Primary Workload</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Move &quot;Automate&quot; tasks fully to AI — your VA stops doing them</li>
                                    <li>VA focuses on &quot;Assist&quot; tasks (reviewing AI output) and &quot;Human Only&quot; work</li>
                                    <li>Set up Rachel (AI receptionist) if phone calls are part of the workflow</li>
                                    <li>Check-in: are there tasks you expected AI to handle that need more tuning? Adjust now</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Week 4: Full Cutover</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>AI employees handle all automated tasks independently</li>
                                    <li>You (or a part-time human) handle strategy, relationships, and creative direction</li>
                                    <li>Schedule a 15-minute daily check-in with your AI dashboard for the first month</li>
                                    <li>Your former VA budget is now your growth budget</li>
                                </ul>

                                <p className="mt-6">
                                    For a broader automation playbook, see our guide on <Link href="/blog/how-to-automate-your-business-with-ai" className="text-primary-600 hover:underline font-medium">how to automate your business with AI</Link>.
                                </p>
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

                        <RelatedPosts currentSlug="replace-va-with-ai" category="Cost Guide" tags={['AI vs Virtual Assistant', 'AI Employees', 'Cost Comparison', 'Small Business']} />
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
