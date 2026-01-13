import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../constants/links';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BottomCTA from '../../components/BottomCTA';
import BookingModal from '../../components/BookingModal';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedPosts from '../../components/RelatedPosts';
import { SITE_URL } from '../../constants/site';
import { generateFAQSchema, generateBreadcrumbSchema, generateArticleSchema, blogPosts } from '../../data/blogData';
import {
    CheckCircle2,
    Zap,
    Clock,
    ArrowRight,
    Calendar,
    Target,
    BarChart3,
    Search,
    Globe,
    FileText,
    TrendingUp,
    Shield
} from 'lucide-react';

// FAQ data for schema markup
const faqData = [
    {
        question: "Is Surfer SEO better than Ahrefs?",
        answer: "It depends on your goal. If you want to write and optimize high-ranking content, Surfer SEO is better. if you need to analyze backlinks and do deep competitor research, Ahrefs is superior."
    },
    {
        question: "Do Surfer SEO and Ahrefs have free plans?",
        answer: "No, neither tool offers a permanently free plan. They both operate on a subscription model, though they sometimes offer limited trials or lower-tier starter plans."
    },
    {
        question: "Can I use both Surfer SEO and Ahrefs together?",
        answer: "Absolutely! Many SEO professionals use Ahrefs for keyword research and backlink strategy, and then use Surfer SEO to write the actual content for those keywords."
    },
    {
        question: "What is Seomi and how can she help?",
        answer: "Seomi is an AI employee from Dooza that can handle your SEO tasks. She can use tools like Ahrefs and Surfer SEO autonomously to research keywords, optimize content, and rank your business on Google."
    }
];

// Get current post data
const currentPost = blogPosts.find(p => p.slug === 'surfer-seo-vs-ahrefs');

const SurferSeoVsAhrefs = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    // Handle scroll spy for table of contents
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'introduction',
                'surfer-seo-features',
                'ahrefs-features',
                'pricing',
                'comparison',
                'seomi-ai-employee',
                'conclusion',
                'faq'
            ];

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
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <SEO
                title="Surfer SEO vs Ahrefs: Which Tool is Best for 2026?"
                description="Comparing Surfer SEO's content optimization prowess against Ahrefs' backlink authority. Which one should you choose for your business?"
                keywords="Surfer SEO, Ahrefs, SEO Tools, Content Optimization, Backlink Analysis, AI SEO"
                canonicalUrl={`${SITE_URL}/blog/surfer-seo-vs-ahrefs`}
                image="/blog/surfer-seo-vs-ahrefs.png"
                type="article"
                author="Dooza Team"
                publishedTime="2026-01-13T00:00:00Z"
                modifiedTime="2026-01-13T00:00:00Z"
                structuredData={generateArticleSchema(currentPost, SITE_URL)}
                additionalStructuredData={[
                    generateFAQSchema(faqData),
                    generateBreadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "Blog", url: `${SITE_URL}/blog` },
                        { name: "Surfer SEO vs Ahrefs" }
                    ])
                ]}
            />

            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
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
                            Surfer SEO excels at content optimization, while Ahrefs dominates backlink analysis. Let's explore which tool (or combination) is right for your growth.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 13, 2026</span>
                            </div>
                        </div>

                        {/* Hero Video */}
                        <div className="mt-10 max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-900">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/sz-YqQnaCsY?si=9IGZx0da2WrF2DeY"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">

                    {/* Sidebar (Desktop only) */}
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
                                    { id: 'seomi-ai-employee', label: 'Meet Seomi (AI)' },
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
                                <p className="text-sm text-slate-600 mb-4">Hire Seomi for your SEO?</p>
                                <a
                                    href={getProductSignupUrl('agent')}
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Get Started Free
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Article Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    Today we're exploring two powerhouses in the SEO world: <strong>Surfer SEO</strong> and <strong>Ahrefs</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Surfer SEO is renowned for its comprehensive suite of optimization features, making it a favorite for content creators. On the other hand, Ahrefs excels in backlink analysis and competitor research, standing as the industry standard for deep data.
                                </p>
                                <p>
                                    Let's delve into their features, pricing structure, user experience, and help you decide which one fits your needs best.
                                </p>
                            </div>
                        </section>

                        {/* Surfer SEO Features */}
                        <section id="surfer-seo-features" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <FileText className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Surfer SEO: The Content King</h2>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Surfer SEO focuses heavily on on-page optimization. Its goal is to preciseley tell you what to write to satisfy search engine algorithms.
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">Content Editor</h4>
                                        <p className="text-slate-600">
                                            This is the flagship feature. It gives you a score (0-100) and suggested keywords to include in your article as you write, ensuring you cover the topic comprehensively.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">SERP Analysis</h4>
                                        <p className="text-slate-600">
                                            Analyze the top-ranking pages for your target keyword. Surfer breaks down average word count, keyword density, and even page speed of your competitors.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">On-Page SEO Suggestions</h4>
                                        <p className="text-slate-600">
                                            Get real-time feedback on headings, images, and paragraph structure to improve your chances of ranking higher.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Ahrefs Features */}
                        <section id="ahrefs-features" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-orange-100 p-2 rounded-lg">
                                    <Globe className="w-6 h-6 text-orange-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Ahrefs: The Data Powerhouse</h2>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Ahrefs is a traditional "all-in-one" SEO suite but is world-famous for its backlink data.
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">Backlink Analysis</h4>
                                        <p className="text-slate-600">
                                            Explore your website's backlink profile, identify toxic links, and find easy link-building opportunities by spying on your competitors.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">Keyword Research (Keywords Explorer)</h4>
                                        <p className="text-slate-600">
                                            Uncover valuable keyword insights including search volume, difficulty, and click-through rates. Their database is massive.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">Site Audit</h4>
                                        <p className="text-slate-600">
                                            Crawl your website to find broken links, missing meta descriptions, duplicate content, and other technical SEO errors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Pricing */}
                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Structure</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-blue-600 mb-4">Surfer SEO</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span><strong>Essential:</strong> $89/mo</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span><strong>Scale:</strong> $129/mo</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span><strong>Scale AI:</strong> $219/mo</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-orange-600 mb-4">Ahrefs</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span><strong>Lite:</strong> €99/mo (~$108)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span><strong>Standard:</strong> €199/mo (~$218)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span><strong>Advanced:</strong> €399/mo (~$438)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-slate-500 italic">
                                *Pricing is subject to change. Neither tool currently offers a free trial.
                            </p>
                        </section>

                        {/* Comparison Image */}
                        <div className="my-10">
                            <img
                                src="/blog/surfer-seo-vs-ahrefs.png"
                                alt="Surfer SEO vs Ahrefs Visual Comparison"
                                className="w-full rounded-xl shadow-lg border border-slate-100"
                            />
                        </div>

                        {/* Pros & Cons Table */}
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
                                        <tr>
                                            <td className="p-4 border-b border-slate-100 font-medium text-slate-900">Best For</td>
                                            <td className="p-4 border-b border-slate-100">Content Writing & Optimization</td>
                                            <td className="p-4 border-b border-slate-100">Backlinks & Keyword Research</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-slate-100 font-medium text-slate-900">User Interface</td>
                                            <td className="p-4 border-b border-slate-100">Beginner Friendly & Intuitive</td>
                                            <td className="p-4 border-b border-slate-100">Dense Data, steeper learning curve</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-slate-100 font-medium text-slate-900">Main Strength</td>
                                            <td className="p-4 border-b border-slate-100">Actionable "Write This" advice</td>
                                            <td className="p-4 border-b border-slate-100">Massive link & keyword database</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-slate-100 font-medium text-slate-900">Weakness</td>
                                            <td className="p-4 border-b border-slate-100">Limited off-page/backlink data</td>
                                            <td className="p-4 border-b border-slate-100">Very expensive for small teams</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Seomi AI Employee Section */}
                        <section id="seomi-ai-employee" className="scroll-mt-28">
                            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-white p-2 rounded-lg shadow-sm">
                                            <Zap className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900">The Smarter Way: Meet Seomi</h2>
                                    </div>

                                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                        Stop struggling to learn complex tools. Seomi is an <strong>intelligent AI employee</strong> that does the work for you. She uses professional data strategies (just like Surfer and Ahrefs) to find winning keywords and write content that ranks—all autonomously.
                                    </p>

                                    {/* Testimonial */}
                                    <div className="bg-white border-l-4 border-primary-500 rounded-r-xl p-6 shadow-sm mb-8">
                                        <div className="italic text-slate-600 space-y-4">
                                            <p className="text-lg">
                                                "I was drowning in SEO work. Agencies quoted me $2,000/month, which was crazy. Then I activated Seomi."
                                            </p>
                                            <p>
                                                "Now, she connects to my site daily, finds trending topics from YouTube, and hands me a finished article. I mostly just hit 'Approve' and walk away. It's the most affordable employee I've ever hired."
                                            </p>
                                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 not-italic">
                                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 text-sm">ST</div>
                                                <div>
                                                    <div className="font-bold text-slate-900">Sibi</div>
                                                    <div className="text-sm text-slate-500">Managing Director, Suresh Timber</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 mb-6">
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 text-slate-700">
                                                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                                <span><strong>Uses the Best Tools:</strong> Seomi analyzes data from top SEO sources to ensure every post is optimized to win.</span>
                                            </li>
                                            <li className="flex gap-3 text-slate-700">
                                                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                                <span><strong>Zero Management:</strong> She works autonomously—researching, drafting, and optimizing while you sleep.</span>
                                            </li>
                                            <li className="flex gap-3 text-slate-700">
                                                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                                <span><strong>Agency Quality, Software Price:</strong> Get results that usually cost $2,000/mo for a fraction of the price.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={getProductSignupUrl('seomi')}
                                            className="px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-center shadow-lg shadow-primary-600/20"
                                        >
                                            Start with Seomi Free
                                        </a>
                                        <a
                                            href="/partners"
                                            className="px-6 py-3 bg-white text-primary-700 font-bold rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors text-center"
                                        >
                                            Partner with Dooza (Agencies)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Ultimately, the choice comes down to your primary need.
                                </p>
                                <p className="mb-6">
                                    If you are a writer or content marketer who needs to produce high-ranking articles quickly, <strong>Surfer SEO</strong> is your best friend.
                                </p>
                                <p className="mb-6">
                                    If you are an SEO specialist who needs to clean up a backlink profile or find technical site errors, <strong>Ahrefs</strong> is indispensable.
                                </p>
                                <p>
                                    But if you want the best of both worlds without the manual labor, consider automating the entire process with an AI employee like Seomi.
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

                        {/* Related Posts */}
                        <RelatedPosts
                            currentSlug="surfer-seo-vs-ahrefs"
                            category="Comparison"
                            tags={['SEO', 'AI Employees']}
                        />

                    </div>

                    {/* Ghost for centering */}
                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
};

export default SurferSeoVsAhrefs;
