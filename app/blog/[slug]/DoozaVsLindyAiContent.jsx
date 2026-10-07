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
import { Clock, Calendar, ArrowRightLeft, CheckCircle2, XCircle, AlertTriangle, DollarSign, Zap, Users, Shield, Settings, Star } from 'lucide-react';

const faqData = [
    { question: "Is Dooza AI better than Lindy AI for small businesses?", answer: "It depends on whether you want to build it yourself or have it built for you. Lindy is a self-serve AI teammate billed per seat in credits: the Plus plan starts at $29.99/month for 3,000 credits (checked October 7, 2026). Dooza is an AI-native company that builds AI products and services for small businesses, and it is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents with you. Every Dooza product starts with a refundable pilot (100% refund within 14 days). If you are happy to configure agents yourself, or you need SOC 2 Type II or HIPAA, Lindy is the better pick." },
    { question: "How does Dooza pricing compare to Lindy AI?", answer: "Lindy sells one per-seat plan billed in credits: Plus from $29.99/month for 3,000 credits, Pro at $99.99 for 15,000 and Max at $199.99 for 35,000, plus custom Enterprise pricing (checked October 7, 2026). Lindy says a credit is about one cent, and its pricing page says: \u201cNo surprise bills. If the pool runs low, Lindy pauses and tells you.\u201d Admins can top up at $10 per 1,000 credits. Dooza does not meter work in credits. Pricing depends on the product (see dooza.ai/pricing), and every Dooza product starts with a refundable pilot: 100% refund within 14 days." },
    { question: "Can Dooza AI replace Lindy AI for email and calendar automation?", answer: "For email, yes. Dooza's Maily AI employee handles email triage, drafting, categorization, and follow-ups 24/7. Lindy is stronger at calendar scheduling and meeting notes, so if those are your main needs, Lindy is the better fit. Dooza covers email plus social media, SEO, sales outreach, and phone calls. For calendar-heavy workflows, you can pair Dooza with a free calendar tool." },
    { question: "Does Lindy AI have features Dooza doesn't?", answer: "Yes. Lindy is SOC 2 Type II, GDPR, HIPAA, and PIPEDA compliant; its Enterprise plan adds SSO, audit logs, and a signed BAA for HIPAA; and it offers iMessage with your assistant and meeting recording on Google Meet, Zoom, and Teams. Dooza is not SOC 2 certified; it uses encrypted connections and asks for your approval on anything sensitive. On integrations the two are similar: Lindy lists 1,000+ integrations (its pricing page says 1,500+), and Dooza has 1,000+ app integrations." },
    { question: "How do I switch from Lindy AI to Dooza?", answer: "Book a free 30-minute call at dooza.ai so a Dooza engineer can scope your pilot, then start a refundable pilot (100% refund within 14 days). Set up the AI employees that match your Lindy workflows and run both platforms in parallel. Once you're confident Dooza handles your tasks, cancel Lindy. Workforce employees can start working the same day." }
];

export default function DoozaVsLindyAiContent() {
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
            const sections = ['introduction', 'what-is-lindy', 'what-is-dooza', 'head-to-head', 'pricing', 'ease-of-use', 'integrations', 'where-dooza-wins', 'where-lindy-wins', 'what-to-check', 'verdict', 'faq'];
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
                    <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Dooza AI vs Lindy AI' }]} />
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
                            <ArrowRightLeft size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Dooza AI vs Lindy AI: <span className="text-primary-600">Honest Comparison for Founders &amp; Small Businesses (2026)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Choosing between Dooza AI and Lindy AI? We compared pricing, setup, integrations, and support, using each vendor&apos;s own pages. Here&apos;s which one fits how you work.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Updated October 7, 2026</span></div>
                        </div>
                        <div className="mt-10">
                            <BlogHeroImage src="/blog/lindy-ai-alternative.png" alt="Dooza AI vs Lindy AI comparison \u2014 side-by-side review of pricing, features, and ease of use for AI employee platforms in 2026" />
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
                                    { id: 'what-is-lindy', label: 'What Is Lindy AI?' },
                                    { id: 'what-is-dooza', label: 'What Is Dooza AI?' },
                                    { id: 'head-to-head', label: 'Feature Comparison' },
                                    { id: 'pricing', label: 'Pricing Breakdown' },
                                    { id: 'ease-of-use', label: 'Ease of Use' },
                                    { id: 'integrations', label: 'Integrations' },
                                    { id: 'where-dooza-wins', label: 'Where Dooza Wins' },
                                    { id: 'where-lindy-wins', label: 'Where Lindy Wins' },
                                    { id: 'what-to-check', label: 'What to Check' },
                                    { id: 'verdict', label: 'Final Verdict' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button key={item.id} onClick={() => scrollToSection(item.id)} className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === item.id ? 'bg-primary-50 text-primary-700 font-medium' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                            <div className="mt-6"><InternalLinks currentSlug="dooza-vs-lindy-ai" /></div>
                        </div>
                    </aside>

                    {/* Article */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You&apos;re a founder running a lean team. You&apos;ve heard AI can handle your email, social media, lead follow-ups, and even phone calls. You start researching and two names keep coming up: <strong>Lindy AI</strong> and <strong>Dooza AI</strong>. Both promise AI that does real work for your business. But they&apos;re built very differently: one is a tool you set up yourself, the other is built for you.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    We checked pricing models, setup, integrations, and support against each vendor&apos;s own pages (checked October 7, 2026). Whether you&apos;re looking for the <strong>best Lindy AI alternative</strong>, comparing <strong>AI assistant platforms for small business</strong>, or just trying to figure out which model fits how you work &mdash; this is the guide.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>TL;DR:</strong> Lindy AI is a self-serve AI teammate: you sign up, pick templates or describe what you want, and run it yourself, billed per seat in credits. Dooza is an AI-native company that builds AI products and services for small businesses, and it is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents with you, starting with a refundable pilot. If you like configuring tools yourself, or you need SOC 2 Type II or HIPAA, Lindy is the better pick. If you want it built and run for you, Dooza is.
                                </p>
                            </div>
                        </section>

                        {/* What Is Lindy AI? */}
                        <section id="what-is-lindy" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Lindy AI?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Lindy describes itself as &quot;an AI teammate that gets work done for you and your team.&quot; It is self-serve: Lindy says setup takes 2 minutes, it comes with 40+ skills plus the option to create your own, and its Discover section has ready-made templates you can add in one click.</p>
                                <p>Lindy&apos;s strengths include <strong>meeting recording and notes</strong>, <strong>calendar scheduling</strong>, <strong>email triage</strong>, and <strong>phone calls</strong> (inbound and outbound). Lindy lists 1,000+ integrations (its pricing page says 1,500+). It&apos;s also SOC 2 Type II, GDPR, HIPAA, and PIPEDA compliant &mdash; which matters for regulated industries.</p>
                                <p>Lindy is billed <strong>per seat in credits</strong>. Plus starts at $29.99/month for 3,000 credits (checked October 7, 2026, on <a href="https://www.lindy.ai/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lindy&apos;s pricing page</a>). Heavier work uses more credits, and if your pool runs out, Lindy pauses credit-using actions until your credits reset or an admin tops up.</p>
                            </div>

                            {/* YouTube Video - Lindy AI Review */}
                            <div className="mt-8">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
                                    <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/wAeZCmXVgB0" title="Lindy AI Review: Best AI Assistant for Business Automation?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                </div>
                                <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: an in-depth Lindy AI review covering features, pricing, and real automation demos.</p>
                            </div>
                        </section>

                        {/* What Is Dooza AI? */}
                        <section id="what-is-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Dooza AI?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p><Link href="/" className="text-primary-600 hover:underline font-medium">Dooza AI</Link> takes a different approach. Instead of handing you a tool to configure yourself, Dooza gives you <strong>specialist AI employees</strong> built for specific business functions, set up and tuned with you by a Dooza engineer:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Maily</strong> &mdash; Email triage, drafting, and follow-ups. Reads every email, categorizes by intent, drafts context-aware replies 24/7.</li>
                                    <li><strong>Somi</strong> &mdash; Social media content creation and scheduling. Generates brand-matched content across LinkedIn, Instagram, X, and Facebook daily.</li>
                                    <li><strong>Ranky</strong> &mdash; SEO blog writing and keyword research. Publishes 4&ndash;8 optimized articles per month to your blog.</li>
                                    <li><strong>Stan</strong> &mdash; Sales outreach and lead follow-up. Responds to leads instantly, sends personalized sequences, books meetings.</li>
                                    <li><strong>Rachel</strong> &mdash; AI receptionist. Answers phone calls 24/7, books appointments, handles FAQs without transfers.</li>
                                </ul>
                                <p className="mt-4">Dooza is an AI-native company that builds AI products and services for small businesses: <Link href="/workforce" className="text-primary-600 hover:underline font-medium">Dooza Workforce</Link> (the AI workforce app with these employees) and <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza Agents</Link> (the AI agentic platform for custom agents). No credits to track. Pricing depends on the product (see <Link href="/pricing" className="text-primary-600 hover:underline font-medium">pricing</Link>), and every product starts with a <strong>refundable pilot &mdash; 100% refund within 14 days</strong>.</p>
                            </div>

                            {/* YouTube Video - Dooza AI */}
                            <div className="mt-8">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
                                    <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/NgBAXFK6nk4" title="AI Era with DOOZA.AI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                </div>
                                <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: how Dooza&apos;s AI employees handle real business tasks &mdash; email, social, SEO, sales, and calls.</p>
                            </div>
                        </section>

                        {/* Head-to-Head Feature Comparison */}
                        <section id="head-to-head" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dooza AI vs Lindy AI: Feature-by-Feature Comparison</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Here&apos;s a side-by-side breakdown of the features that matter most when choosing an AI employee platform for your business. We scored each category on what founders and solopreneurs actually care about: <strong>will this save me time and money without breaking?</strong></p>
                            </div>

                            <div className="mt-8 overflow-x-auto">
                                <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left py-4 px-5 font-semibold">Feature</th>
                                            <th className="text-center py-4 px-5 font-semibold">Dooza AI</th>
                                            <th className="text-center py-4 px-5 font-semibold">Lindy AI</th>
                                            <th className="text-center py-4 px-5 font-semibold">Winner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Pricing Model</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Refundable pilot (see /pricing), no credits</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Per-seat credits &mdash; Plus from $29.99/mo for 3,000 credits (checked October 7, 2026)</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Depends</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Setup Time</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Done for you &mdash; free 30-min scoping call; Workforce employees start the same day</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Self-serve &mdash; &quot;Setup in 2 minutes&quot;, templates you configure yourself</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Depends</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Email Automation</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Maily &mdash; dedicated AI email employee</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Email triage agent (credit-based)</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Social Media</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Somi &mdash; creates &amp; posts daily</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">General AI teammate you set up yourself</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">SEO Content</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Ranky &mdash; keyword research + publishing</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">General AI teammate you set up yourself</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Sales Outreach</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Stan &mdash; instant lead follow-up</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Templates and skills you set up yourself</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Phone Calls / Receptionist</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Rachel &mdash; 24/7 AI receptionist</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Lindy Phone Calls &mdash; inbound and outbound</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Both</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Meeting Notes</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Not a core feature</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Strong &mdash; records and transcribes Google Meet, Zoom, and Teams</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Lindy</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Calendar Management</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Basic via integrations</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Strong &mdash; drafts replies with open slots from your calendar and preferences</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Lindy</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">App Integrations</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">1,000+ apps</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">1,000+ (pricing page says 1,500+)</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Similar</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Enterprise Compliance</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Encrypted connections + your approval on anything sensitive</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">SOC 2 Type II, HIPAA, GDPR, PIPEDA</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Lindy</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Onboarding Support</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Dooza engineer scopes your pilot (free 30-min call) and builds it with you</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Email support and group onboarding sessions; dedicated support on Enterprise</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">24/7 Autonomous Operation</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Yes &mdash; all employees work around the clock</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Yes &mdash; pauses if credits run out until they reset or are topped up</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-slate-500 mt-3 text-center italic">Dooza wins 6 of 13 rows, Lindy wins 3 (meeting notes, calendar, compliance), and 4 depend on what you need. Lindy facts checked October 7, 2026, on lindy.ai and docs.lindy.ai.</p>
                        </section>

                        {/* Pricing Breakdown */}
                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing: Dooza&apos;s Refundable Pilot vs Lindy&apos;s Credit System</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Pricing is the single biggest differentiator. Let&apos;s break down how the two models work.</p>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-6">
                                <h3 className="text-xl font-semibold mb-6 text-center">Pricing Model Comparison</h3>
                                <div className="grid gap-6 text-center sm:grid-cols-2">
                                    <div className="bg-slate-800 rounded-xl p-6">
                                        <div className="text-primary-400 text-sm font-semibold mb-2 flex items-center justify-center gap-2"><Star className="w-4 h-4" /> DOOZA AI</div>
                                        <div className="text-3xl font-bold">14-day<span className="text-base text-slate-400"> refundable pilot</span></div>
                                        <div className="text-slate-400 text-sm mt-3 space-y-1">
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> All AI employees included</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> 100% refund within 14 days</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> No per-task fees</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Pricing by product &mdash; see /pricing</div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800 rounded-xl p-6">
                                        <div className="text-slate-400 text-sm font-semibold mb-2">LINDY AI</div>
                                        <div className="text-3xl font-bold">$29.99+<span className="text-base text-slate-400">/mo per seat</span></div>
                                        <div className="text-slate-400 text-sm mt-3 space-y-1">
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-slate-400" /> 3,000 credits on Plus</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-slate-400" /> Pro $99.99 (15,000) &middot; Max $199.99 (35,000)</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-slate-400" /> A credit is about one cent</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-slate-400" /> Pauses and tells you when credits run low</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-slate-700 mt-8 pt-6">
                                    <div className="text-center">
                                        <div className="text-slate-400 text-sm mb-1">The practical difference</div>
                                        <div className="text-xl font-bold text-emerald-400">Self-serve credits vs done for you</div>
                                        <div className="text-slate-500 text-sm mt-2">Lindy prices checked October 7, 2026, on lindy.ai/pricing</div>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">How Lindy&apos;s Credits Work</h3>
                                <p>Lindy sells one per-seat plan, and you pick how many credits each seat gets. Plus starts at <strong>$29.99/month for 3,000 credits</strong>; Pro is $99.99 for 15,000; Max is $199.99 for 35,000; higher credit levels go up to $299.99 for 45,000; Enterprise is custom (checked October 7, 2026, on <a href="https://www.lindy.ai/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lindy&apos;s pricing page</a>). To try it, Lindy gives you $50 in credits that last 7 days.</p>
                                <p>According to <a href="https://docs.lindy.ai/pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lindy&apos;s docs</a>, a credit is worth about one cent. Everyday asks use 2&ndash;250 credits, deep work 250&ndash;1,000, and big builds 1,000&ndash;2,500. Lindy is clear that you won&apos;t get an overage bill: &quot;No surprise bills. If the pool runs low, Lindy pauses and tells you.&quot; Admins can top up at $10 per 1,000 credits.</p>
                                <p>So the cost of Lindy is predictable. What you manage is capacity: you size the credit pool, and if heavy work uses it up, your agents pause until the credits reset or you top up. You also build, test, and maintain the agents yourself.</p>
                                <p>Dooza works differently. It does not meter work in credits, and it is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents with you. Pricing depends on the product (see <Link href="/pricing" className="text-primary-600 hover:underline font-medium">pricing</Link>), and you start with a refundable pilot &mdash; 100% refund within 14 days &mdash; so you can test it on real work before committing.</p>
                            </div>
                        </section>

                        {/* Ease of Use */}
                        <section id="ease-of-use" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ease of Use: Built for You vs Build It Yourself</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>This is where the design difference becomes tangible. Lindy is <strong>self-serve</strong>: you sign in with Google or Microsoft, pick a ready-made template or describe what you want, and Lindy says setup takes 2 minutes. That is fast, and you are in control. It also means the setup, testing, and upkeep are yours.</p>
                                <p>With Lindy, you:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Choose from 40+ skills and templates, or create your own</li>
                                    <li>Decide how many credits each seat needs, and watch the pool</li>
                                    <li>Adjust your agents yourself when your process changes</li>
                                    <li>Get help by email and in group onboarding sessions (Enterprise adds dedicated support and enablement)</li>
                                </ul>
                                <p className="mt-4">Dooza takes the opposite approach: <strong>you don&apos;t build agents &mdash; Dooza builds them with you</strong>. A Dooza engineer scopes your pilot on a free 30-minute call, then sets up and tunes your AI employees (Maily, Somi, Ranky, Stan, Rachel) or custom agents with you. Workforce employees can start working the same day; custom agents are live in days.</p>

                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-2xl mt-6">
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Setup Time Comparison</h4>
                                            <p className="text-slate-700 text-sm mb-0"><strong>Dooza:</strong> Free 30-minute call to scope your pilot &rarr; connect accounts &rarr; AI employees start working the same day.</p>
                                            <p className="text-slate-700 text-sm mb-0"><strong>Lindy:</strong> Sign up &rarr; pick a template or describe the task &rarr; configure and test it yourself. Lindy says setup takes 2 minutes; how long tuning takes depends on what you build.</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-6">If you like setting up tools yourself and want to start tonight, Lindy is the faster start. If you would rather have someone build and tune it for you, that is what Dooza does.</p>
                            </div>
                        </section>

                        {/* Integrations */}
                        <section id="integrations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Integrations: Similar Breadth</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>On integrations the two are close. <a href="https://www.lindy.ai/integrations" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lindy lists 1,000+ integrations</a> (its pricing page says 1,500+), and Dooza has <strong>1,000+ app integrations</strong>. Both work with Google and Microsoft: Lindy lets you sign in with either and connect a Google or Outlook inbox.</p>
                                <p>Dooza connects to the tools small businesses run on, including <strong>Gmail, Outlook, LinkedIn, Shopify, WordPress, Wix, WooCommerce, and more</strong>.</p>
                                <p>Integration count is not a reason to pick either one. Check that the specific tools you use are supported, then decide on the bigger question: do you want to set it up yourself, or have it built for you?</p>
                            </div>
                        </section>

                        {/* Where Dooza Wins */}
                        <section id="where-dooza-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Dooza AI Clearly Wins</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Here are the areas where Dooza is the better fit.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><DollarSign className="w-5 h-5 text-emerald-600" /> 1. No Credit Pool to Manage</h3>
                                <p>Lindy&apos;s bill is predictable, but you still size a credit pool per seat, and when it runs out your agents pause until it resets or you top up. Dooza doesn&apos;t meter work in credits, so there is no pool to watch. Every Dooza product starts with a refundable pilot &mdash; 100% refund within 14 days.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><Zap className="w-5 h-5 text-amber-600" /> 2. Specialist AI Employees vs Generic Agents</h3>
                                <p>Lindy gives you a general AI teammate with skills and templates that you shape yourself. Dooza gives you specialist employees for specific jobs. <strong>Maily handles email. Somi handles social. Ranky handles SEO. Stan handles sales. Rachel handles phones.</strong> Each employee is built for its domain, and a Dooza engineer tunes it to your business with you.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><Users className="w-5 h-5 text-blue-600" /> 3. Hands-On Setup by a Dooza Engineer</h3>
                                <p>A Dooza engineer scopes your pilot on a free 30-minute call and walks you through connecting your accounts, configuring preferences, and making sure your AI employees are working correctly. Lindy offers email support and group onboarding sessions, with dedicated support and enablement on Enterprise. When you&apos;re a founder with no time to spare, the difference between &quot;here&apos;s how to set it up&quot; and &quot;let me set this up for you&quot; is significant.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-purple-600" /> 4. True 24/7 Autonomous Operation</h3>
                                <p>Both platforms run 24/7. Lindy pauses credit-using actions when a seat&apos;s credits run out, until they reset or an admin tops up. Dooza&apos;s AI employees work around the clock without a credit meter ticking down.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><Settings className="w-5 h-5 text-slate-600" /> 5. Someone Else Maintains It</h3>
                                <p>With any self-serve tool, including Lindy, the agents you build are yours to test and adjust when your process changes. With Dooza, a Dooza engineer builds and tunes your AI employees or custom agents with you, so you are not the one maintaining them.</p>
                            </div>
                        </section>

                        {/* Where Lindy Wins */}
                        <section id="where-lindy-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Lindy AI Wins (Being Honest)</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>A fair comparison acknowledges where the competitor genuinely excels. Here&apos;s where Lindy has Dooza beat &mdash; for now.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Meeting Notes &amp; Transcription</h3>
                                <p>Lindy&apos;s meeting assistant records and transcribes your meetings on Google Meet, Zoom, and Teams, and meeting recording and notes are included on all plans. If your workflow is meeting-heavy and you need automated note-taking, Lindy delivers here. Dooza doesn&apos;t currently offer a dedicated meeting assistant.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Calendar Intelligence</h3>
                                <p>Lindy&apos;s scheduling goes beyond a booking link. Based on your preferred hours, buffer time, meeting length, and calendar availability, Lindy drafts a reply with three open slots. For executives with packed calendars, this is a meaningful advantage.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Enterprise Compliance</h3>
                                <p>Compliance matters for healthcare, finance, and enterprise teams. Lindy is SOC 2 Type II, GDPR, HIPAA, and PIPEDA compliant, and its Enterprise plan adds SSO, audit logs, and a signed BAA for HIPAA. Dooza is not SOC 2 certified; it uses encrypted connections and your approval on anything sensitive, which suits many small businesses &mdash; but if compliance is non-negotiable for your industry, Lindy has the edge.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Self-Serve Speed and Published Pricing</h3>
                                <p>Lindy publishes its prices, says setup takes 2 minutes, and gives you $50 in credits for 7 days to try it. If you want to sign up and start building on your own tonight, Lindy is the quicker path. Dooza starts with a free 30-minute call with a Dooza engineer.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Customization Depth</h3>
                                <p>If you want to build and tweak your own agents and skills, Lindy puts that control in your hands. This flexibility is Lindy&apos;s core selling point &mdash; if you want to do it yourself.</p>
                            </div>
                        </section>

                        {/* What to Check */}
                        <section id="what-to-check" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Check Before You Choose</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Four questions decide this for most small businesses. Lindy facts below are from Lindy&apos;s own pricing page and docs, checked October 7, 2026.</p>
                            </div>

                            <div className="space-y-4 mt-6">
                                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;How much work will my agents do?&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">Lindy: a credit is about one cent. Everyday asks use 2&ndash;250 credits, deep work 250&ndash;1,000, big builds 1,000&ndash;2,500. Estimate your volume, pick a credit level per seat, and top up at $10 per 1,000 if needed.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza: no credit meter. Pricing depends on the product; see /pricing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;Who builds and maintains the agents?&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">Lindy: you do, with 40+ skills, ready-made templates, email support, and group onboarding sessions.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes it with you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;Do I need compliance certifications?&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">Lindy: SOC 2 Type II, GDPR, HIPAA, and PIPEDA compliant; Enterprise adds SSO, audit logs, and a signed BAA.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza: not SOC 2 certified. Encrypted connections and your approval on anything sensitive. If certifications are required, pick Lindy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;Can I try it first?&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">Lindy: $50 in credits that last 7 days.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza: refundable pilot &mdash; 100% refund within 14 days, on real work from day one.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* YouTube Video - Honest Lindy Review */}
                        <div className="mt-8">
                            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
                                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/RYAv0C9BrjA" title="Honest Lindy AI Review: The Best and Worst Features + Pricing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>
                            <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: honest Lindy AI review covering the best and worst features, plus how its credit system works.</p>
                        </div>

                        {/* Final Verdict */}
                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Verdict: Dooza AI vs Lindy AI &mdash; Which Should You Choose?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Let&apos;s make this simple. Here&apos;s who should use which platform:</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-2xl">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2"><Star className="w-5 h-5 text-primary-600" /> Choose Dooza AI if you&apos;re:</h3>
                                    <ul className="space-y-3 text-slate-700 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> A founder or solopreneur who needs AI working <strong>today</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Running a small business that needs <strong>email, social, SEO, sales, and phone automation</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Done with <strong>credit pools</strong> to size, watch, and top up</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Want a Dooza engineer to <strong>build and tune it for you</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Want <strong>dedicated AI employees</strong> for specific roles, not a general assistant</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Need a <strong>24/7 AI receptionist</strong> for phone calls and appointments</li>
                                    </ul>
                                    <div className="mt-6">
                                        <Link href="/" onClick={handleAction} className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors text-sm">
                                            Start your pilot <Zap className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg">Choose Lindy AI if you&apos;re:</h3>
                                    <ul className="space-y-3 text-slate-700 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Happy to <strong>set up and run your own agents</strong>, starting today</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Primarily need <strong>meeting notes and calendar management</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Require <strong>SOC 2 Type II, HIPAA, or GDPR compliance</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Want <strong>published self-serve pricing</strong> (from $29.99/mo per seat, checked October 7, 2026)</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Need <strong>SSO and audit logs</strong> on an Enterprise plan</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <p>For founders and small business owners who want AI <strong>built and run for them</strong> &mdash; email managed, social media posted, leads followed up, and phones answered &mdash; Dooza is the better fit. A Dooza engineer does the setup with you, and a refundable pilot lets you prove it on real work.</p>
                                <p>Lindy is a good product with real strengths: published self-serve pricing, a fast start, strong meeting and calendar features, and compliance certifications Dooza doesn&apos;t have. If you are comfortable setting up and maintaining your own agents, or you need those certifications, choose Lindy.</p>
                                <p className="mt-6"><strong>Ready to see the difference?</strong> <Link href="/" onClick={handleAction} className="text-primary-600 hover:underline font-medium">Start your pilot</Link> and have your AI employees working the same day. Start with a refundable pilot &mdash; 100% refund within 14 days. No credits to track. Just results.</p>
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

                        <RelatedPosts currentSlug="dooza-vs-lindy-ai" category="Comparison" tags={['Lindy AI', 'Dooza AI', 'AI Employees', 'Comparison', 'AI Assistant', 'Lindy AI Alternative']} />
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
