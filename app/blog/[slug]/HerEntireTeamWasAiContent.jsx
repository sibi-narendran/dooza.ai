'use client';

import { useState, useEffect, useRef } from 'react';
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
import {
    Clock,
    Calendar,
    ArrowRight,
    Zap,
} from 'lucide-react';

// ─── Twitter Embed ───────────────────────────────────────────────────────────
function TweetEmbed({ tweetId }) {
    const tweetRef = useRef(null);
    const rendered = useRef(false);

    useEffect(() => {
        if (rendered.current) return;
        rendered.current = true;

        const container = tweetRef.current;
        if (!container) return;

        const loadAndRender = () => {
            // Clear any previous content
            container.innerHTML = '';
            window.twttr.widgets.createTweet(tweetId, container, {
                theme: 'light',
                align: 'center',
                dnt: true,
            });
        };

        if (window.twttr && window.twttr.widgets) {
            loadAndRender();
        } else {
            // Only add script if not already present
            if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
                const script = document.createElement('script');
                script.src = 'https://platform.twitter.com/widgets.js';
                script.async = true;
                script.charset = 'utf-8';
                document.body.appendChild(script);
                script.onload = loadAndRender;
            } else {
                // Script exists but hasn't loaded yet — poll for it
                const interval = setInterval(() => {
                    if (window.twttr && window.twttr.widgets) {
                        clearInterval(interval);
                        loadAndRender();
                    }
                }, 100);
            }
        }
    }, [tweetId]);

    return <div ref={tweetRef} className="flex justify-center" />;
}

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const faqData = [
    {
        question: "Is this tweet real?",
        answer: "Yes. The tweet was posted by Ami Palan (@markmeyourze) on February 17, 2026, and has received over 68,000 views. The follow-up tweet confirms the business uses Dooza.ai."
    },
    {
        question: "What are AI employees?",
        answer: "AI employees are autonomous software agents that handle specific business functions — email, social media, phone calls, lead generation, SEO, and legal compliance — without human intervention. Unlike chatbots, they work on schedules and take action proactively."
    },
    {
        question: "Can AI employees really run a business?",
        answer: "AI employees handle the repetitive, operational work — the 80% that keeps business owners buried. Strategy, relationships, and creative decisions remain with the founder. The result is a business that operates 24/7 with a fraction of the overhead."
    },
    {
        question: "How much does an AI team cost compared to hiring?",
        answer: "Hiring six human employees for email, social media, SEO, phone, sales, and legal would cost ₹1.75–2.95 lakh/month in India. AI employee platforms like Dooza offer all six roles for $29/month (~₹2,400)."
    },
    {
        question: "Is this only for tech companies?",
        answer: "No. The business in the tweet had just expanded — it wasn't described as a tech company. AI employees are being used by real estate agents, doctors, retailers, consultants, coaches, and service businesses across India."
    }
];

// ─── Main Component ──────────────────────────────────────────────────────────
export default function HerEntireTeamWasAiContent() {
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
            const sections = ['introduction', 'the-tweet', 'what-happened', 'why-it-matters', 'india-context', 'what-comes-next', 'faq'];
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

            {/* Hero */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Her Entire Team Was AI' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-6">
                            <Zap size={16} />
                            <span>Viral Story</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Her Entire Team Was AI. <span className="text-primary-600">Nobody Could Tell.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            A Bangalore tech professional went to dinner with a friend who&apos;d just expanded her business. Her team was responding on Slack at 10 PM — every single one of them turned out to be an AI agent. The tweet went viral.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>5 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 18, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <BlogHeroImage
                                src="/blog/her-entire-team-was-ai.png"
                                alt="A dinner scene where a business owner reveals her entire team is AI — viral tweet story"
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
                                    { id: 'introduction', label: 'The Story' },
                                    { id: 'the-tweet', label: 'The Tweet' },
                                    { id: 'what-happened', label: 'The Dinner' },
                                    { id: 'why-it-matters', label: 'Why It Went Viral' },
                                    { id: 'india-context', label: 'The India Angle' },
                                    { id: 'what-comes-next', label: 'What Comes Next' },
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
                                <InternalLinks currentSlug="her-entire-team-was-ai" />
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* The Story */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    It was a regular weeknight dinner in Bangalore. Two friends catching up. One had recently expanded her business — more clients, more moving parts, more to manage.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Mid-dinner, she pulls out her phone. Slack notifications. Her team is active — messages going back and forth, tasks being picked up, replies firing instantly. It&apos;s nearly 10 PM on a weeknight.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Her friend, Ami Palan, a tech professional based in Bangalore, watches this and thinks: <em>Wow, her team is dedicated.</em> She even compliments her management skills.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Then, casually — almost as an afterthought — the friend reveals the truth.
                                </p>
                                <p className="text-xl leading-relaxed font-semibold text-slate-900">
                                    Every single team member on that Slack channel was an AI agent. Not one human.
                                </p>
                            </div>
                        </section>

                        {/* The Tweet */}
                        <section id="the-tweet" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Tweet</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    Ami posted the story on X that same night. Within hours, the tweet had been viewed over <strong>68,700 times</strong>. The replies flooded in — people asking what platform, how it works, whether it was real. The follow-up answered the biggest question:
                                </p>
                            </div>

                            <div className="mb-6 min-h-[300px]">
                                <TweetEmbed tweetId="2023766957791826401" />
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The platform was <a href="https://www.dooza.ai" className="text-primary-600 hover:underline font-medium">Dooza</a> — an AI employee platform that provides businesses with autonomous agents for email, social media, phone calls, lead generation, SEO, and legal work. The friend had deployed a full team of AI agents for her expanding business.
                                </p>
                            </div>
                        </section>

                        {/* What Happened */}
                        <section id="what-happened" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Actually Happened at That Dinner</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The detail that struck people wasn&apos;t the technology itself — it was how <em>normal</em> it looked.
                                </p>
                                <p>
                                    The Slack messages looked like any team conversation. The AI agents were responding contextually, handling tasks, coordinating work. There was nothing robotic about the exchange. Ami, a tech-savvy observer from Bangalore&apos;s own tech ecosystem, couldn&apos;t tell the difference.
                                </p>
                                <p>
                                    And the business owner didn&apos;t frame it as a tech achievement. She mentioned it the way someone mentions switching to a new accounting software — it&apos;s just how things run now. The casualness of the reveal is what makes the story so striking.
                                </p>
                                <p>
                                    This wasn&apos;t a startup founder showing off a proof-of-concept. This was a business owner who had expanded her operations, needed a team, and chose AI agents over hiring. It was a practical decision, not an ideological one.
                                </p>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-8">
                                <blockquote className="text-lg md:text-xl italic leading-relaxed mb-4">
                                    &ldquo;Been thinking about it ever since.&rdquo;
                                </blockquote>
                                <p className="text-slate-400 font-medium">— Ami Palan</p>
                            </div>
                        </section>

                        {/* Why It Went Viral */}
                        <section id="why-it-matters" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why 68,700 People Stopped Scrolling</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Everyone has heard about AI by now. Most people have tried ChatGPT, used Copilot, or at least seen a demo. But there&apos;s a psychological gap between &ldquo;AI can write a paragraph for you&rdquo; and &ldquo;AI is running an entire business operation at 10 PM while the founder eats dinner.&rdquo;
                                </p>
                                <p>
                                    This tweet closed that gap. It moved AI from theoretical to tangible — not through a product demo or a keynote speech, but through a dinner conversation between two friends.
                                </p>
                                <p>
                                    The reason it resonated is simple: <strong>people saw themselves in the story</strong>. Every small business owner who has replied to emails at midnight, forgotten to post on social media for weeks, or missed a customer call because they were in a meeting — they saw what the alternative looks like.
                                </p>
                                <p>
                                    Not a future alternative. A current one. Already deployed. Already working. In India.
                                </p>
                                <p>
                                    The conversation around AI in business has largely been driven by Silicon Valley — billion-dollar models, enterprise deployments, abstract roadmaps. This tweet grounded it. A real business. A real dinner. A real team of AI agents. In Bangalore.
                                </p>
                            </div>
                        </section>

                        {/* The India Context */}
                        <section id="india-context" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The India Angle</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    India has over 65 million MSMEs — micro, small, and medium enterprises that form the backbone of the economy. Most operate with skeleton teams. The founder is often the CEO, the marketer, the customer support rep, and the accountant rolled into one.
                                </p>
                                <p>
                                    Hiring is expensive relative to revenue. A social media manager, an email administrator, a receptionist, an SEO specialist, a sales representative, and a legal assistant would collectively cost &#8377;1.75 to 2.95 lakh per month. For most MSMEs, that&apos;s not a budget line — it&apos;s a fantasy.
                                </p>
                                <p>
                                    AI employee platforms like Dooza are changing that equation. For $29/month — roughly &#8377;2,400 — a business owner gets six AI agents that handle each of those functions autonomously. They work around the clock. They don&apos;t take leave. They respond instantly.
                                </p>
                                <p>
                                    Indian entrepreneurs in cities like Bangalore, Mumbai, Delhi, Hyderabad, and Pune are early movers. They&apos;re not waiting for AI to become mainstream — they&apos;re deploying it now, while competitors are still debating whether to try ChatGPT.
                                </p>
                                <p>
                                    The tweet from Ami Palan is a snapshot of this shift. It&apos;s not about the technology being impressive — it&apos;s about the technology being <em>invisible</em>. The AI agents blended in so naturally that a tech professional from Bangalore&apos;s own IT ecosystem couldn&apos;t distinguish them from human employees.
                                </p>
                                <p>
                                    That&apos;s the inflection point. Not when AI becomes powerful — but when it becomes unremarkable.
                                </p>
                            </div>
                        </section>

                        {/* What Comes Next */}
                        <section id="what-comes-next" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Comes Next</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Y Combinator president Gary Tan recently coined the term &ldquo;20X companies&rdquo; — startups where teams of 4-5 people produce the output of companies 20 times their size, using AI agents across every function. Companies like GigaML, Legion Health, and Phase Shift are proving the model works.
                                </p>
                                <p>
                                    But those are elite YC-backed startups with engineering teams. What the Bangalore dinner story suggests is something more significant: <strong>the 20X model is already trickling down to regular businesses</strong>. No venture capital. No engineering team. Just a founder, a platform, and a team of AI agents that reply on Slack at 10 PM.
                                </p>
                                <p>
                                    The question is no longer whether AI employees work. It&apos;s how long until the businesses that don&apos;t use them can&apos;t compete with the ones that do.
                                </p>
                                <p>
                                    As Ami wrote: she&apos;s been thinking about it ever since. Based on the 68,700 people who viewed that tweet, she&apos;s not the only one.
                                </p>
                            </div>
                        </section>

                        {/* FAQ */}
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

                        {/* Sources */}
                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>
                                    <a href="https://twitter.com/markmeyourze/status/2023757484994032092" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                        Ami Palan (@markmeyourze) — Original tweet, February 17, 2026
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/markmeyourze/status/2023766957791826401" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                        Ami Palan (@markmeyourze) — Follow-up confirming Dooza, February 17, 2026
                                    </a>
                                </li>
                                <li>
                                    <Link href="/blog/build-a-20x-company" className="text-primary-600 hover:underline">
                                        Related: How to Build a 20X Company — The Playbook Any Business Can Follow
                                    </Link>
                                </li>
                            </ul>
                        </section>

                        <RelatedPosts currentSlug="her-entire-team-was-ai" category="AI Education" tags={['AI Employees', 'AI Staffing', 'Viral']} />
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
