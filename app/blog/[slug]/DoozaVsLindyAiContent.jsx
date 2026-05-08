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
    { question: "Is Dooza AI better than Lindy AI for small businesses?", answer: "For most small businesses, yes. Dooza offers flat-rate pricing at $49/month with all AI employees included, while Lindy uses a credit-based system that starts at $49.99/month but charges extra per task. Dooza's pre-built AI employees (Maily, Somi, Ranky, Stan, Rachel) are ready to work immediately without complex workflow building, making it ideal for founders who want results without a learning curve." },
    { question: "Why is Dooza cheaper than Lindy AI?", answer: "Lindy AI uses a credit-based pricing model where each action consumes credits, and premium actions cost even more. Monthly bills become unpredictable as usage scales. Dooza charges a flat $49/month for the Starter plan or $119/month for Pro \u2014 no credits, no per-task fees, no surprises. You get all AI employees with unlimited conversations included." },
    { question: "Can Dooza AI replace Lindy AI for email and calendar automation?", answer: "Yes. Dooza's Maily AI employee handles email triage, drafting, categorization, and follow-ups 24/7. While Lindy is strong at calendar management and meeting notes, Dooza covers email automation plus social media, SEO, sales outreach, and phone calls \u2014 all in one subscription. For calendar-heavy workflows, you can pair Dooza with a free calendar tool." },
    { question: "Does Lindy AI have features Dooza doesn't?", answer: "Lindy has some enterprise features Dooza doesn't yet offer: SOC 2/HIPAA compliance, SSO/SCIM, audit logs, and iMessage integration. Lindy also has 4,000+ app integrations compared to Dooza's 1,000+. However, for the core AI employee tasks most small businesses need \u2014 email, social media, SEO, sales, and phone calls \u2014 Dooza delivers more value at a lower, predictable price." },
    { question: "How do I switch from Lindy AI to Dooza?", answer: "Start a Dooza free trial at dooza.ai, set up the AI employees that match your Lindy workflows, and run both platforms in parallel for a week. Once you're confident Dooza handles your tasks, cancel Lindy. Dooza's onboarding team provides free concierge setup to help you migrate. Most users complete the switch within 7\u201310 days." }
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
            const sections = ['introduction', 'what-is-lindy', 'what-is-dooza', 'head-to-head', 'pricing', 'ease-of-use', 'integrations', 'where-dooza-wins', 'where-lindy-wins', 'real-user-complaints', 'verdict', 'faq'];
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
                            Choosing between Dooza AI and Lindy AI? We compared pricing, ease of use, integrations, and real user feedback so you don&apos;t have to. Here&apos;s which AI employee platform actually delivers.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 29, 2026</span></div>
                        </div>
                        <div className="mt-10">
                            <BlogHeroImage src="/blog/dooza-vs-lindy-ai.png" alt="Dooza AI vs Lindy AI comparison \u2014 side-by-side review of pricing, features, and ease of use for AI employee platforms in 2026" />
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
                                    { id: 'real-user-complaints', label: 'Real User Complaints' },
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
                                    You&apos;re a founder running a lean team. You&apos;ve heard AI can handle your email, social media, lead follow-ups, and even phone calls. You start researching and two names keep coming up: <strong>Lindy AI</strong> and <strong>Dooza AI</strong>. Both promise AI employees that automate your business. But they&apos;re built very differently &mdash; and the wrong choice could cost you thousands in wasted credits and hours debugging workflows.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This isn&apos;t a surface-level comparison. We dug into pricing models, real user complaints, integration ecosystems, and hands-on ease of use to give you the honest breakdown. Whether you&apos;re looking for the <strong>best Lindy AI alternative</strong>, comparing <strong>AI assistant platforms for small business</strong>, or just trying to figure out which tool won&apos;t blow up your monthly bill &mdash; this is the guide.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>TL;DR:</strong> Lindy AI is a powerful workflow builder for technical users who want maximum customization. Dooza AI is a pre-built AI employee platform for founders who want things working today &mdash; at a predictable price. For most small businesses, Dooza wins on value, simplicity, and total cost of ownership.
                                </p>
                            </div>
                        </section>

                        {/* What Is Lindy AI? */}
                        <section id="what-is-lindy" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Lindy AI?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Lindy AI positions itself as a general-purpose AI assistant that can &quot;ask, act, and anticipate.&quot; Founded in 2023 and backed by notable investors, Lindy lets you build custom AI agents (called &quot;Lindies&quot;) using a workflow builder. Each Lindy can be configured with triggers, actions, and integrations to automate specific tasks.</p>
                                <p>Lindy&apos;s strengths include <strong>meeting note-taking</strong>, <strong>calendar management</strong>, <strong>email triage</strong>, and <strong>workflow automation</strong>. The platform has grown to over 40,000 users and offers 4,000+ app integrations. It&apos;s also SOC 2, HIPAA, and GDPR compliant &mdash; which matters for regulated industries.</p>
                                <p>The catch? Lindy uses a <strong>credit-based pricing system</strong>. Every action your AI agent takes consumes credits. Premium actions (the ones you actually need) cost more. And when your credits run out mid-month, your AI stops working &mdash; or you pay overage fees.</p>
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
                                <p><Link href="/" className="text-primary-600 hover:underline font-medium">Dooza AI</Link> takes a fundamentally different approach. Instead of giving you a blank workflow builder and saying &quot;build your own agent,&quot; Dooza gives you <strong>pre-built specialist AI employees</strong> that are already trained for specific business functions:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Maily</strong> &mdash; Email triage, drafting, and follow-ups. Reads every email, categorizes by intent, drafts context-aware replies 24/7.</li>
                                    <li><strong>Somi</strong> &mdash; Social media content creation and scheduling. Generates brand-matched content across LinkedIn, Instagram, X, and Facebook daily.</li>
                                    <li><strong>Ranky</strong> &mdash; SEO blog writing and keyword research. Publishes 4&ndash;8 optimized articles per month to your blog.</li>
                                    <li><strong>Stan</strong> &mdash; Sales outreach and lead follow-up. Responds to leads instantly, sends personalized sequences, books meetings.</li>
                                    <li><strong>Rachel</strong> &mdash; AI receptionist. Answers phone calls 24/7, books appointments, handles FAQs without transfers.</li>
                                </ul>
                                <p className="mt-4">The pricing is flat: <strong>$49/month</strong> for Starter, <strong>$119/month</strong> for Pro. No credits. No per-task fees. No bill anxiety. All AI employees are included in every plan with unlimited conversations.</p>
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
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Flat rate &mdash; $49&ndash;$119/mo</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Credits &mdash; $49.99&ndash;$199.99/mo + per-task fees</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Setup Time</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Minutes &mdash; pre-built AI employees</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Hours/days &mdash; build workflows manually</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
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
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Requires custom workflow</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">SEO Content</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Ranky &mdash; keyword research + publishing</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">No built-in SEO feature</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Sales Outreach</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Stan &mdash; instant lead follow-up</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Custom workflow required</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Phone Calls / Receptionist</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Rachel &mdash; 24/7 AI receptionist</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">No voice/call feature</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Meeting Notes</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Not a core feature</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Strong &mdash; auto-transcribe &amp; summarize</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Lindy</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Calendar Management</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Basic via integrations</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Strong &mdash; intelligent scheduling</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Lindy</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">App Integrations</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">1,000+ apps</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">4,000+ apps</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Lindy</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">Enterprise Compliance</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Standard security</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">SOC 2, HIPAA, GDPR</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Lindy</span></td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="py-3 px-5 font-medium text-slate-900">Onboarding Support</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Free concierge onboarding</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Self-serve docs</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="py-3 px-5 font-medium text-slate-900">24/7 Autonomous Operation</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Yes &mdash; all employees work around the clock</td>
                                            <td className="py-3 px-5 text-center text-sm text-slate-600">Yes &mdash; but limited by credit balance</td>
                                            <td className="py-3 px-5 text-center"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Dooza</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-slate-500 mt-3 text-center italic">Dooza wins 9 out of 13 categories. Lindy wins on meeting notes, calendar, integrations breadth, and enterprise compliance.</p>
                        </section>

                        {/* Pricing Breakdown */}
                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing: Why Dooza&apos;s Flat Rate Beats Lindy&apos;s Credit System</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Pricing is the single biggest differentiator &mdash; and the #1 reason users switch from Lindy to Dooza. Let&apos;s break it down with real numbers.</p>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-6">
                                <h3 className="text-xl font-semibold mb-6 text-center">Monthly Cost Comparison</h3>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div className="bg-slate-800 rounded-xl p-6">
                                        <div className="text-primary-400 text-sm font-semibold mb-2 flex items-center justify-center gap-2"><Star className="w-4 h-4" /> DOOZA AI</div>
                                        <div className="text-3xl font-bold">$49<span className="text-base text-slate-400">/mo</span></div>
                                        <div className="text-slate-400 text-sm mt-3 space-y-1">
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> All 5 AI employees included</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Unlimited conversations</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> No per-task fees</div>
                                            <div className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Predictable monthly bill</div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800 rounded-xl p-6">
                                        <div className="text-slate-400 text-sm font-semibold mb-2">LINDY AI</div>
                                        <div className="text-3xl font-bold">$49.99+<span className="text-base text-slate-400">/mo</span></div>
                                        <div className="text-slate-400 text-sm mt-3 space-y-1">
                                            <div className="flex items-center gap-2 justify-center"><XCircle className="w-3 h-3 text-red-400" /> 5,000 credits (Plus plan)</div>
                                            <div className="flex items-center gap-2 justify-center"><XCircle className="w-3 h-3 text-red-400" /> $0.01&ndash;$0.10+ per action</div>
                                            <div className="flex items-center gap-2 justify-center"><XCircle className="w-3 h-3 text-red-400" /> Premium actions cost more</div>
                                            <div className="flex items-center gap-2 justify-center"><XCircle className="w-3 h-3 text-red-400" /> Bill varies month to month</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-slate-700 mt-8 pt-6">
                                    <div className="text-center">
                                        <div className="text-slate-400 text-sm mb-1">Estimated Annual Savings (Dooza vs Lindy Plus)</div>
                                        <div className="text-3xl font-bold text-emerald-400">$600&ndash;$2,400+<span className="text-base text-slate-400">/year</span></div>
                                        <div className="text-slate-500 text-sm mt-2">Based on typical small business usage with credit overages</div>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Credit Trap Explained</h3>
                                <p>Lindy&apos;s pricing looks competitive on paper. $49.99/month for the Plus plan &mdash; similar to Dooza. But here&apos;s what the pricing page doesn&apos;t emphasize: <strong>every action your AI agent takes burns credits</strong>. Send an email? Credits. Check a calendar? Credits. Run a &quot;premium action&quot; like summarizing a meeting or querying a database? That&apos;s 3&ndash;10x more credits.</p>
                                <p>Users consistently report that <strong>5,000 credits disappear within the first two weeks</strong> of moderate use. You&apos;re then faced with a choice: stop your automations mid-month, or upgrade to the $99.99 Business plan (20,000 credits) or the $199.99 Max plan (50,000 credits). For heavy users, even the Max plan runs dry.</p>
                                <p>&quot;Expensive&quot; is the <strong>#1 complaint</strong> in Lindy AI user reviews &mdash; appearing over 40 times in user feedback aggregated across review platforms. This isn&apos;t a minor gripe. It&apos;s the defining friction point of the product.</p>
                                <p>Dooza eliminates this entirely. $49/month. All employees. Unlimited use. Your bill next month is the same as this month &mdash; whether you process 100 emails or 10,000.</p>
                            </div>
                        </section>

                        {/* Ease of Use */}
                        <section id="ease-of-use" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ease of Use: Pre-Built Employees vs DIY Workflow Builder</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>This is where the design philosophy difference becomes tangible. Lindy gives you a <strong>workflow builder</strong> &mdash; a visual canvas where you connect triggers, conditions, and actions to create custom AI agents. It&apos;s flexible. It&apos;s powerful. And for most small business owners, it&apos;s overwhelmingly complex.</p>
                                <p>Users report:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>&quot;Loop debugging is difficult/non-existent&quot; &mdash; when a workflow breaks, finding the issue is painful</li>
                                    <li>20-second initialization times per agent action &mdash; noticeable lag on every task</li>
                                    <li>Workflows that &quot;stop halfway or misunderstand&quot; &mdash; requiring manual intervention</li>
                                    <li>The web builder Lindy ships has been described as &quot;glitchy&quot; with outputs that lack proper CSS</li>
                                </ul>
                                <p className="mt-4">Dooza takes the opposite approach: <strong>you don&apos;t build agents &mdash; you hire employees</strong>. Maily, Somi, Ranky, Stan, and Rachel are pre-configured, pre-trained, and ready to go. You connect your accounts, set preferences, and they start working. If you need help, Dooza&apos;s free concierge onboarding team walks you through setup &mdash; typically completed in under 30 minutes.</p>

                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-2xl mt-6">
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Setup Time Comparison</h4>
                                            <p className="text-slate-700 text-sm mb-0"><strong>Dooza:</strong> Sign up &rarr; connect accounts &rarr; AI employees start working. ~15&ndash;30 minutes.</p>
                                            <p className="text-slate-700 text-sm mb-0"><strong>Lindy:</strong> Sign up &rarr; learn the workflow builder &rarr; build each agent &rarr; test &rarr; debug &rarr; iterate. Hours to days, depending on complexity.</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-6">For technically-minded users who want to build highly custom automations &mdash; Lindy&apos;s builder has its place. But for founders who need results without a learning curve, Dooza&apos;s approach is a decisive advantage.</p>
                            </div>
                        </section>

                        {/* Integrations */}
                        <section id="integrations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Integrations: Breadth vs Ecosystem Freedom</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Lindy wins on raw numbers: <strong>4,000+ integrations</strong> vs Dooza&apos;s <strong>1,000+</strong>. But there&apos;s an important nuance.</p>
                                <p>Lindy is <strong>hyper-reliant on Google products</strong>. Users report that the platform requires extensive Google permissions before you can even try the product. If your business runs on Microsoft 365, Outlook, or a mixed ecosystem, Lindy&apos;s Google-first design creates friction from day one.</p>
                                <p>Dooza integrates across ecosystems without lock-in: <strong>Gmail, Outlook, LinkedIn, Shopify, WordPress, Wix, WooCommerce, and more</strong>. The integration count is smaller, but the ones that matter for small business operations are all there &mdash; and they work without requiring you to migrate your entire tech stack to Google.</p>
                                <p>For enterprise teams already deep in the Google ecosystem, Lindy&apos;s integration depth is a real advantage. For everyone else, Dooza&apos;s cross-ecosystem flexibility is more practical.</p>
                            </div>
                        </section>

                        {/* Where Dooza Wins */}
                        <section id="where-dooza-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Dooza AI Clearly Wins</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Here are the areas where Dooza isn&apos;t just slightly better &mdash; it&apos;s in a different category.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><DollarSign className="w-5 h-5 text-emerald-600" /> 1. Predictable Pricing (No Credit Anxiety)</h3>
                                <p>Dooza&apos;s flat-rate pricing eliminates the single biggest pain point of AI agent platforms. You know exactly what you&apos;re paying &mdash; this month, next month, and every month after. No mental math calculating whether that next workflow will push you over your credit limit. No mid-month surprises. No &quot;should I upgrade?&quot; anxiety loops.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><Zap className="w-5 h-5 text-amber-600" /> 2. Specialist AI Employees vs Generic Agents</h3>
                                <p>Lindy gives you a blank canvas. Dooza gives you trained employees. The difference is like hiring a general contractor vs hiring a plumber &mdash; when your pipes are leaking, you want the specialist. <strong>Maily knows email. Somi knows social. Ranky knows SEO. Stan knows sales. Rachel knows phones.</strong> Each employee is purpose-built for its domain, not a generic agent you have to train yourself.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><Users className="w-5 h-5 text-blue-600" /> 3. Concierge Onboarding (Free)</h3>
                                <p>Dooza includes free setup assistance with a real human who walks you through connecting your accounts, configuring preferences, and making sure your AI employees are working correctly. Lindy offers documentation and a community forum. When you&apos;re a founder trying to automate operations at 11pm on a Tuesday, the difference between &quot;here&apos;s a doc&quot; and &quot;let me set this up for you&quot; is significant.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-purple-600" /> 4. True 24/7 Autonomous Operation</h3>
                                <p>Both platforms claim 24/7 operation. But Lindy&apos;s AI agents stop working when credits run out. Dooza&apos;s AI employees work around the clock, every day, without interruption &mdash; because there&apos;s no credit meter ticking down. &quot;AI Employees That Get Work Done While You Sleep&quot; isn&apos;t just a tagline &mdash; it&apos;s literally how the platform works.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><Settings className="w-5 h-5 text-slate-600" /> 5. No Workflow Debugging Required</h3>
                                <p>One of Lindy&apos;s most common complaints is workflow reliability. Agents &quot;stop halfway,&quot; loops break silently, and debugging requires digging through execution logs. Dooza&apos;s pre-built employees don&apos;t have this problem &mdash; there&apos;s no user-built workflow to break. The complexity is abstracted away, leaving you with employees that just work.</p>
                            </div>
                        </section>

                        {/* Where Lindy Wins */}
                        <section id="where-lindy-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Lindy AI Wins (Being Honest)</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>A fair comparison acknowledges where the competitor genuinely excels. Here&apos;s where Lindy has Dooza beat &mdash; for now.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Meeting Notes &amp; Transcription</h3>
                                <p>Lindy&apos;s meeting note-taking is genuinely excellent. It auto-joins Zoom/Google Meet calls, transcribes conversations, generates summaries, and extracts action items. If your workflow is meeting-heavy and you need automated note-taking, Lindy delivers here. Dooza doesn&apos;t currently offer a dedicated meeting assistant.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Calendar Intelligence</h3>
                                <p>Lindy&apos;s calendar management goes beyond basic scheduling. It can understand meeting context, suggest optimal times based on your patterns, and handle complex rescheduling. For executives with packed calendars, this is a meaningful advantage.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Enterprise Compliance</h3>
                                <p>SOC 2, HIPAA, and GDPR certifications matter for healthcare, finance, and enterprise teams. Lindy has these. Dooza is built for small businesses and startups where these certifications aren&apos;t typically required &mdash; but if compliance is non-negotiable for your industry, Lindy has the edge.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Integration Volume</h3>
                                <p>4,000+ integrations vs 1,000+. If you use niche tools (obscure CRMs, specialized databases, uncommon project management tools), Lindy is more likely to support them natively. For mainstream small business tools, both platforms cover the essentials.</p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Customization Depth</h3>
                                <p>If you&apos;re a technical user who wants to build highly specific multi-step automations with conditional logic, loops, and custom triggers, Lindy&apos;s workflow builder offers more granular control. This flexibility is Lindy&apos;s core selling point &mdash; if you need it.</p>
                            </div>
                        </section>

                        {/* Real User Complaints */}
                        <section id="real-user-complaints" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Real User Complaints About Lindy AI (and How Dooza Addresses Them)</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>These aren&apos;t cherry-picked anecdotes. These are the recurring themes from Lindy AI user reviews across G2, Capterra, Reddit, and independent review sites.</p>
                            </div>

                            <div className="space-y-4 mt-6">
                                <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;Credits run out too fast&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">The #1 complaint. Users report 5,000 credits lasting &lt;2 weeks with moderate use. Premium actions drain credits 3&ndash;10x faster than basic ones.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza fix: Flat pricing. No credits. Unlimited use.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;Workflows break and are hard to debug&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">Complex automations stop mid-execution. Loop debugging is described as &quot;difficult/non-existent.&quot; Users spend hours fixing agents instead of running their business.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza fix: Pre-built employees. No workflows to build or debug.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;20-second initialization lag per task&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">Every time a Lindy agent starts a task, there&apos;s a noticeable 20-second delay. For high-frequency operations, this adds up significantly.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza fix: AI employees run continuously. No cold-start delays.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;Google dependency is frustrating&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">Lindy requires extensive Google permissions upfront. Teams on Microsoft or mixed ecosystems face friction from day one.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza fix: Works across Gmail, Outlook, LinkedIn, Shopify, WordPress, and more &mdash; no ecosystem lock-in.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">&quot;Free tier is essentially worthless&quot;</h4>
                                            <p className="text-slate-600 text-sm mb-2">Lindy&apos;s free plan gives 400 credits with no premium actions. Users can barely test the product before being asked to pay.</p>
                                            <p className="text-emerald-700 text-sm font-medium">Dooza fix: 7-day money-back guarantee. Full access from day one so you can actually evaluate the platform.</p>
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
                            <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: honest Lindy AI review covering the best and worst features, plus the real cost of the credit system.</p>
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
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Looking for <strong>predictable pricing</strong> without credit surprises</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Non-technical and want AI that works <strong>without building workflows</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Want <strong>dedicated AI employees</strong> for specific roles, not a general assistant</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Need a <strong>24/7 AI receptionist</strong> for phone calls and appointments</li>
                                    </ul>
                                    <div className="mt-6">
                                        <Link href="/" onClick={handleAction} className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors text-sm">
                                            Try Dooza Free <Zap className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg">Choose Lindy AI if you&apos;re:</h3>
                                    <ul className="space-y-3 text-slate-700 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> A technical user who enjoys <strong>building custom workflows</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Primarily need <strong>meeting notes and calendar management</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Require <strong>SOC 2, HIPAA, or GDPR compliance</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Need integrations with <strong>niche or enterprise tools</strong></li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Running an <strong>enterprise team deep in the Google ecosystem</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <p>For the vast majority of founders, solopreneurs, and small business owners looking for an <strong>affordable AI employee platform that actually works out of the box</strong> &mdash; Dooza is the clear winner. You get more functionality at a lower price, with zero technical overhead and support that&apos;s actually responsive.</p>
                                <p>Lindy is a good product with real strengths. But its credit-based pricing model, workflow complexity, and Google dependency make it a harder sell for the business owner who just wants their email managed, social media posted, leads followed up, and phones answered &mdash; without becoming an automation engineer in the process.</p>
                                <p className="mt-6"><strong>Ready to see the difference?</strong> <Link href="/" onClick={handleAction} className="text-primary-600 hover:underline font-medium">Start your free Dooza trial</Link> and have your AI employees working within 30 minutes. No credit card required. No credits to track. Just results.</p>
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