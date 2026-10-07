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
    Clock,
    Calendar,
    Search,
    FileText,
    Globe,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "Is Surfer SEO better than Ahrefs?",
        answer: "It depends on your goal. If you want to write and optimize content against the pages that already rank, Surfer SEO is the better fit. If you need backlink data, keyword research, site audits, and competitor research, Ahrefs is the better fit. Both now also sell AI search visibility features."
    },
    {
        question: "Do Surfer SEO and Ahrefs have free plans?",
        answer: "Ahrefs does: Ahrefs Free is listed on its pricing page, alongside a $29/month Starter plan. Surfer SEO has no free plan, but offers a 7-day free trial of its Pro plan (checked October 7, 2026)."
    },
    {
        question: "Can I use both Surfer SEO and Ahrefs together?",
        answer: "Yes. A common split is Ahrefs for keyword and backlink research and Surfer SEO for writing and optimizing the content itself."
    },
    {
        question: "What is Ranky and how can she help?",
        answer: "Ranky is Dooza's AI SEO & visibility employee. Ranky and Dooza engineers research keywords, write and optimize content, and publish it with your approval, to help your business rank on Google and get cited by AI search engines. Every Dooza product starts with a refundable pilot: 100% refund within 14 days."
    }
];

export default function SurferSeoVsAhrefsContent() {
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
            const sections = ['introduction', 'surfer-seo-features', 'ahrefs-features', 'pricing', 'comparison', 'ranky-ai-employee', 'conclusion', 'faq'];
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
                        { label: 'Surfer SEO vs Ahrefs' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Search size={16} />
                            <span>Tool Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Surfer SEO vs <span className="text-primary-600">Ahrefs</span>: Which is Best for 2026?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Surfer SEO is built for content optimization, while Ahrefs is best known for backlink and keyword data. Here is which tool is right for you.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 7, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <YouTubeEmbed 
                                videoId="sz-YqQnaCsY"
                                title="Surfer SEO vs Ahrefs Comparison"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">

                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'surfer-seo-features', label: 'Surfer SEO Features' },
                                    { id: 'ahrefs-features', label: 'Ahrefs Features' },
                                    { id: 'pricing', label: 'Pricing Comparison' },
                                    { id: 'comparison', label: 'Pros & Cons' },
                                    { id: 'ranky-ai-employee', label: 'Meet Ranky (AI)' },
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
                                <p className="text-sm text-slate-600 mb-4">Hire Ranky for your SEO?</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">100% refund within 14 days</p>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="surfer-seo-vs-ahrefs" />
                            </div>
                        </div>
                    </aside>

                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    Today we're exploring two powerhouses in the SEO world: <a href="https://surferseo.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Surfer SEO</a> and <a href="https://ahrefs.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Ahrefs</a>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Surfer SEO is best known for content optimization. Ahrefs is best known for backlink and keyword data. Both have since added AI search features: Surfer now pitches its plans to &quot;teams that want to win AI search,&quot; and Ahrefs calls itself an AI marketing platform built on its own web index. For more on SEO, check out <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Google's SEO Starter Guide</a>.
                                </p>
                            </div>
                        </section>

                        <section id="surfer-seo-features" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg"><FileText className="w-6 h-6 text-blue-600" /></div>
                                <h2 className="text-3xl font-bold text-slate-900">Surfer SEO: Content Optimization</h2>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">Surfer SEO focuses on on-page optimization: it tells you what to write, based on the pages that already rank. Its current plans also include AI visibility tracking for AI search.</p>
                                <div className="space-y-4">
                                    {[
                                        { title: "Content Editor", desc: "Gives you a score (0-100) and suggested keywords as you write." },
                                        { title: "SERP Analysis", desc: "Analyze the top-ranking pages for your target keyword." },
                                        { title: "On-Page SEO Suggestions", desc: "Real-time feedback on headings, images, and paragraph structure." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                            <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="ahrefs-features" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-orange-100 p-2 rounded-lg"><Globe className="w-6 h-6 text-orange-600" /></div>
                                <h2 className="text-3xl font-bold text-slate-900">Ahrefs: The Data Powerhouse</h2>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">Ahrefs is best known for its backlink data, and now describes itself as &quot;the only AI marketing platform built on Ahrefs&apos; proprietary web index,&quot; with AI agents on top of its SEO tools.</p>
                                <div className="space-y-4">
                                    {[
                                        { title: "Backlink Analysis", desc: "Explore your website's backlink profile and find link-building opportunities." },
                                        { title: "Keywords Explorer", desc: "Uncover valuable keyword insights including search volume and difficulty." },
                                        { title: "Site Audit", desc: "Crawl your website to find broken links, missing meta descriptions, and technical SEO errors." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                            <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Structure</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-blue-600 mb-4">Surfer SEO</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Discovery:</strong> $49/mo</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Standard:</strong> $99/mo</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Pro:</strong> $182/mo</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Peace of Mind:</strong> $299/mo</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>AI Search Analytics:</strong> $82/mo</span></li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-4">Billed yearly. No free plan; 7-day free trial of Pro. Surfer replaced its earlier plans on May 18, 2026. Checked October 7, 2026, on surferseo.com/pricing.</p>
                                </div>
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-orange-600 mb-4">Ahrefs</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Ahrefs Free:</strong> $0</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Starter:</strong> $29/mo</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Lite:</strong> $129/mo</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Standard:</strong> $249/mo</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Advanced:</strong> $449/mo</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span><strong>Enterprise:</strong> $1,499/mo</span></li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-4">USD prices checked October 7, 2026, on ahrefs.com/pricing.</p>
                                </div>
                            </div>
                        </section>

                        <div className="my-10">
                            <img
                                src="/blog/surfer-seo-vs-ahrefs.png"
                                alt="Surfer SEO vs Ahrefs Visual Comparison"
                                className="w-full rounded-xl shadow-lg border border-slate-100"
                                loading="lazy"
                            />
                        </div>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Verdict: Pros & Cons</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="p-4 border-b-2 border-slate-200 bg-slate-50 font-bold text-slate-900 w-1/4">Feature</th>
                                            <th className="p-4 border-b-2 border-slate-200 bg-slate-50 font-bold text-blue-700 w-1/3">Surfer SEO</th>
                                            <th className="p-4 border-b-2 border-slate-200 bg-slate-50 font-bold text-orange-700 w-1/3">Ahrefs</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr><td className="p-4 border-b border-slate-100 font-medium text-slate-900">Best For</td><td className="p-4 border-b border-slate-100">Content Writing & Optimization</td><td className="p-4 border-b border-slate-100">Backlinks & Keyword Research</td></tr>
                                        <tr><td className="p-4 border-b border-slate-100 font-medium text-slate-900">Scope</td><td className="p-4 border-b border-slate-100">Focused content editor and optimization tools</td><td className="p-4 border-b border-slate-100">Broad suite: Site Explorer, Keywords Explorer, Site Audit, and more</td></tr>
                                        <tr><td className="p-4 border-b border-slate-100 font-medium text-slate-900">Main Strength</td><td className="p-4 border-b border-slate-100">Actionable "Write This" advice</td><td className="p-4 border-b border-slate-100">Massive link & keyword database</td></tr>
                                        <tr><td className="p-4 border-b border-slate-100 font-medium text-slate-900">Gap</td><td className="p-4 border-b border-slate-100">No backlink tool listed on its pricing page</td><td className="p-4 border-b border-slate-100">Full suite costs more; Ahrefs Free and $29/mo Starter cover the basics</td></tr>
                                        <tr><td className="p-4 border-b border-slate-100 font-medium text-slate-900">Free option</td><td className="p-4 border-b border-slate-100">7-day free trial of Pro</td><td className="p-4 border-b border-slate-100">Ahrefs Free plan</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="ranky-ai-employee" className="scroll-mt-28">
                            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-white p-2 rounded-lg shadow-sm"><Zap className="w-6 h-6 text-primary-600" /></div>
                                        <h2 className="text-2xl font-bold text-slate-900">If You Want It Done for You: Meet Ranky</h2>
                                    </div>
                                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                        Surfer and Ahrefs are tools you run yourself. Ranky is Dooza&apos;s <strong>AI SEO &amp; visibility employee</strong>: Ranky and Dooza engineers research, write, optimize, and publish for you, and you approve what goes live.
                                    </p>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 mb-6">
                                        <ul className="space-y-3">
                                            {["Real search data: Ranky researches topics with real search data before writing.", "Done for you, with your approval: a Dooza engineer scopes your pilot on a free 30-minute call and sets Ranky up with you.", "Refundable Pilot: Start with a pilot — 100% refund within 14 days."].map((item, idx) => (
                                                <li key={idx} className="flex gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><span>{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href={getProductSignupUrl('ranky')} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-center shadow-lg shadow-primary-600/20">
                                            Start your pilot
                                        </a>
                                        <Link href="/partners" className="px-6 py-3 bg-white text-primary-700 font-bold rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors text-center">
                                            Partner with Dooza (Agencies)
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    If you are a writer or content marketer who wants to optimize articles as you write, <strong>Surfer SEO</strong> is the better fit.
                                </p>
                                <p className="mb-6">
                                    If you are an SEO specialist who needs backlink data, keyword research, or technical site audits, <strong>Ahrefs</strong> is the better fit, and Ahrefs Free lets you start at no cost.
                                </p>
                                <p>
                                    If you would rather not run either tool yourself, Ranky and Dooza engineers can do the SEO work for you, with your approval, starting with a refundable pilot: 100% refund within 14 days.
                                </p>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ</h2>
                            <div className="space-y-6">
                                {faqData.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <RelatedPosts currentSlug="surfer-seo-vs-ahrefs" category="Comparison" tags={['SEO', 'AI Employees']} />
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
