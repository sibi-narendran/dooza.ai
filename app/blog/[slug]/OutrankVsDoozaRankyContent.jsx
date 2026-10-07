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
    ArrowRight,
    Zap,
    DollarSign,
    Bot,
    Sparkles,
    Settings
} from 'lucide-react';

const faqData = [
    {
        question: "Is Dooza Ranky better than Outrank.so?",
        answer: "It depends on who you want doing the work. Outrank.so is a self-serve autopilot: it plans keywords, writes in your voice, adds internal links and YouTube videos, publishes 8 to 90 articles a month on days you choose, and runs a backlink exchange. Dooza Ranky is done for you: Ranky, Dooza's AI SEO & visibility employee, and Dooza engineers research, write, and publish with your approval. Pick Outrank to run it yourself; pick Ranky to have it run for you."
    },
    {
        question: "How much does Dooza Ranky cost compared to Outrank?",
        answer: "Outrank lists $99/month or $999/year for 30 articles a month, with add-ons for 60 (+$85/month) or 90 (+$160/month) articles (checked October 7, 2026, on outrank.so/pricing). Dooza pricing depends on the product (see dooza.ai/pricing), and every Dooza product, including Ranky, starts with a refundable pilot: 100% refund within 14 days."
    },
    {
        question: "How many blog posts can each tool publish?",
        answer: "Outrank lets you choose 8, 30, 60, or 90 articles a month and pick which days they go live. With Ranky, the publishing cadence is agreed with you (for example daily or three times a week), and every post goes live only with your approval."
    },
    {
        question: "Do Outrank and Ranky support YouTube videos?",
        answer: "Yes, both do. Outrank integrates relevant YouTube videos into its articles. Ranky can also embed YouTube videos in your posts and use video transcripts as research sources."
    },
    {
        question: "Can I customize the voice and workflow?",
        answer: "Yes, in both. Outrank writes in a custom voice, lets you edit drafts with AI or manually, integrates with WordPress, Webflow, Shopify, Wix, Framer, Notion, Ghost, and webhooks, and offers a REST API and an MCP server. With Ranky, Dooza engineers set it up with you: tone of voice documents, your sitemap for internal linking, and experience documents, plus Dooza's 1,000+ app integrations."
    },
    {
        question: "How does Outrank's backlink exchange work?",
        answer: "According to Outrank, you earn credits by hosting relevant links in your own articles, and it places links to your site inside real articles on real blogs and verifies each one. Whether link exchanges suit your site is a judgment call; Dooza does not run an exchange and handles outreach and internal linking with you instead."
    },
    {
        question: "Who should use Outrank vs Dooza Ranky?",
        answer: "Use Outrank if you want a self-serve SEO tool with a published monthly price that you run yourself. Use Dooza Ranky if you want the SEO and AI-visibility work done for you by Ranky and Dooza engineers, with your approval, starting with a refundable pilot (100% refund within 14 days)."
    }
];

export default function OutrankVsDoozaRankyContent() {
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
            const sections = ['introduction', 'what-is-outrank', 'outrank-limitations', 'backlink-problem', 'what-is-ranky', 'ranky-advantages', 'comparison', 'pricing', 'who-should-use', 'conclusion', 'faq'];
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
                        { label: 'Outrank.so vs Dooza Ranky' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Outrank.so</span> vs Dooza Ranky: Self-Serve Autopilot or Done for You?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            An honest comparison of Outrank.so&apos;s self-serve SEO autopilot and Dooza Ranky, where Ranky and Dooza engineers do the work with your approval.
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
                            <BlogHeroImage
                                src="/blog/outrank-vs-dooza-ranky.png"
                                alt="Comparison between Outrank.so and Dooza Ranky for SEO content creation"
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
                                    { id: 'what-is-outrank', label: 'What is Outrank.so?' },
                                    { id: 'outrank-limitations', label: 'Where Outrank Wins' },
                                    { id: 'backlink-problem', label: 'Backlink Exchange' },
                                    { id: 'what-is-ranky', label: 'What is Dooza Ranky?' },
                                    { id: 'ranky-advantages', label: 'Where Ranky Wins' },
                                    { id: 'comparison', label: 'Feature Comparison' },
                                    { id: 'pricing', label: 'Pricing Comparison' },
                                    { id: 'who-should-use', label: 'Who Should Use What?' },
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
                                <p className="text-sm text-slate-600 mb-4">Want it done for you?</p>
                                <a
                                    href={getProductSignupUrl('ranky')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">100% refund within 14 days</p>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="outrank-vs-dooza-ranky" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    If you&apos;ve been looking into AI-powered SEO blog writing tools, you&apos;ve probably come across <strong>Outrank.so</strong>. It promises SEO on autopilot: a keyword plan, articles written in your voice, publishing to your CMS, a backlink exchange, and visibility in ChatGPT and Google. It is a capable tool, and for many teams it is the right one.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>Dooza Ranky</strong> takes a different approach. Ranky is Dooza&apos;s AI SEO &amp; visibility employee, and the work is done for you: Ranky and Dooza engineers research, write, optimize, and publish, and nothing goes live without your approval. Dooza is an AI-native company, and every Dooza product starts with a refundable pilot: 100% refund within 14 days.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    So the real question is not which tool has more features. It is whether you want to run an SEO tool yourself, or have the work done for you. This comparison uses Outrank&apos;s own website (checked October 7, 2026) for every claim about Outrank, and says where each one is the better pick.
                                </p>
                            </div>
                        </section>

                        {/* What is Outrank.so? */}
                        <section id="what-is-outrank" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Outrank.so?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Outrank.so is an AI SEO content platform built around one promise: &quot;Grow Organic Traffic on Auto-Pilot.&quot; It researches your niche, competitors, and audience, pulls live search volume and difficulty data, and builds a content plan. You can also generate keywords yourself at any time.
                                </p>
                                <p className="mb-6">
                                    You choose <strong>8, 30, 60, or 90 articles a month</strong> and pick which days they go live. Articles are written to match your voice, include internal or external links, images, and relevant YouTube videos, and are first saved as drafts in your platform, where you can edit them with AI or manually. Outrank integrates with WordPress, Webflow, Shopify, Wix, Framer, Notion, Ghost, and a custom webhook, and offers a REST API and an MCP server.
                                </p>
                                <p className="mb-6">
                                    Outrank&apos;s plan is <strong>$99/month</strong> or $999/year for 30 articles a month, with add-ons for 60 (+$85/month) or 90 (+$160/month) articles (checked October 7, 2026). It says there are no hidden fees and no per-seat charges. Outrank also runs a backlink exchange, and positions itself for AI search: &quot;Get recommended by ChatGPT &amp; Rank on Google.&quot;
                                </p>
                            </div>
                        </section>

                        {/* Where Outrank is strong */}
                        <section id="outrank-limitations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Outrank.so Is the Better Pick</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Outrank is built for people who want to run SEO content themselves with as little effort as possible. If that describes you, these are real strengths:
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Self-serve and fast to start", desc: "You sign up, connect your CMS, and the plan starts publishing. There is no scoping call and no one else in the loop." },
                                    { title: "A published, predictable price", desc: "$99/month or $999/year for 30 articles, with clear add-ons for 60 or 90 articles a month (checked October 7, 2026)." },
                                    { title: "Volume you control", desc: "Choose 8 to 90 articles a month, pick the days they go live, and scale up or down anytime." },
                                    { title: "Developer-friendly", desc: "Native CMS integrations plus a custom webhook, a REST API, and an MCP server if you want to wire Outrank into your own stack." },
                                    { title: "Built-in backlink exchange", desc: "If you are comfortable with link exchanges, Outrank includes one in the plan." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Backlink exchange */}
                        <section id="backlink-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Outrank&apos;s Backlink Exchange Works</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    According to Outrank, you earn the credits that pay for backlinks by hosting a relevant link in your own articles, and Outrank places links to your site &quot;inside real articles on real blogs&quot; and verifies every one of them.
                                </p>
                                <p className="mb-6">
                                    Whether an exchange suits your site is a judgment call. Some teams like the convenience. Others prefer not to host links for other members, or want every link they earn to come from editorial outreach. If you are in the second group, check which sites you would be linked from before you opt in.
                                </p>
                                <p className="mb-6">
                                    Dooza does not run a link exchange. With Ranky, Dooza engineers handle internal linking from your sitemap and work with you on outreach, citations, and presence on sites like Reddit and Quora, case by case.
                                </p>
                            </div>
                        </section>

                        {/* What is Dooza Ranky? */}
                        <section id="what-is-ranky" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Dooza Ranky?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Dooza Ranky is Dooza&apos;s AI SEO &amp; visibility employee. The difference from a self-serve tool is that <strong>the work is done for you</strong>: a Dooza engineer scopes your pilot on a free 30-minute call and sets Ranky up with you, then Ranky and Dooza engineers research topics, write, optimize, and publish to your CMS. You approve what goes live, and you get a nightly email recap.
                                </p>
                                <p className="mb-6">
                                    Ranky is trained on your brand voice in plain English. You can give it tone of voice documents, your website&apos;s sitemap for internal linking, and experience documents with your industry knowledge, similar to how Claude Skills give an AI specialized instructions. It handles titles, meta descriptions, schema markup, and internal links.
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed
                                        videoId="cL24VI1WERw"
                                        title="How Dooza Ranky Creates SEO Content"
                                    />
                                </div>
                                <p className="mb-6">
                                    For AI search engines like ChatGPT, Perplexity, and Google AI Overviews, Ranky writes specific, citable claims with third-party sources and adds schema. Dooza engineers also work on presence in the places answer engines cite, such as Reddit and Quora threads. Outrank targets AI search too; with Dooza, this generative engine optimization (GEO) work is done for you.
                                </p>
                            </div>
                        </section>

                        {/* Ranky Advantages */}
                        <section id="ranky-advantages" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Dooza Ranky Is the Better Pick</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Both tools write, link, and publish. The difference is the operating model. Here is where Ranky fits better:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Bot, title: "Done for You", desc: "Ranky and Dooza engineers do the SEO and AI-visibility work. You don't need to learn or run another tool.", color: "primary" },
                                    { icon: Settings, title: "Your Approval on What Goes Live", desc: "Nothing publishes without your sign-off, and a nightly email recap shows what was done.", color: "green" },
                                    { icon: Zap, title: "More Than Blog Posts", desc: "Titles, meta, schema, internal links, citable claims, and presence on Reddit and Quora, plus other AI employees for email, social, sales, and calls.", color: "blue" },
                                    { icon: DollarSign, title: "Refundable Pilot", desc: "Start with a refundable pilot: 100% refund within 14 days. Pricing depends on the product; see /pricing.", color: "purple" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                        <div className={`w-12 h-12 bg-${item.color}-50 rounded-lg flex items-center justify-center text-${item.color}-600 mb-4`}>
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    One of the most useful inputs you can give Ranky is your <strong>real experience</strong>: documents that describe your industry knowledge, your perspective, and your methods. Dooza engineers help you set these up, and Ranky works them into the content so each post reads like it came from someone who knows the subject.
                                </p>
                                <p className="mb-6">
                                    Ranky also does <strong>research-driven content</strong>: it researches topics across the web, can use YouTube transcripts as sources, and cites what it uses. That kind of specific, sourced content is what answer engines like Perplexity and ChatGPT tend to quote.
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed
                                        videoId="ICnZ8DhfetE"
                                        title="Claude Skills for SEO Content Writing"
                                    />
                                </div>
                                <p className="mb-6">
                                    The video above shows how skills-style instructions work for SEO content writing. Ranky takes the same kind of input: tone of voice documents, sitemaps, and experience documents. Outrank offers its own customization (a custom voice, editable drafts, an API, and an MCP server); the difference is that with Dooza, engineers set this up and run it with you.
                                </p>
                            </div>
                        </section>

                        {/* Feature Comparison Table */}
                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Feature-by-Feature Comparison</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Outrank details come from outrank.so, outrank.so/pricing, and outrank.so/integrations, checked October 7, 2026.
                                </p>
                            </div>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza Ranky</th>
                                            <th className="p-4 border-b font-bold">Outrank.so</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        {[
                                            ['Who does the work', 'Ranky and Dooza engineers; you approve', 'You run the tool; it automates writing and publishing'],
                                            ['Publishing volume', 'Cadence agreed with you (e.g. daily or 3x/week)', '8, 30, 60, or 90 articles/month; you pick the days'],
                                            ['Starting price', 'Refundable pilot (100% refund within 14 days); see /pricing', '$99/month or $999/year (checked October 7, 2026)'],
                                            ['YouTube videos in articles', 'Yes', 'Yes'],
                                            ['Brand voice', 'Trained on your brand voice in plain English', 'Writes in a custom voice'],
                                            ['Integrations', '1,000+ app integrations', 'WordPress, Webflow, Shopify, Wix, Framer, Notion, Ghost, webhook, REST API, MCP'],
                                            ['Internal linking', 'Yes, from your sitemap', 'Yes, automatic internal or external links'],
                                            ['Backlinks', 'No exchange; outreach and citations worked case by case', 'Backlink exchange (host relevant links to earn credits)'],
                                            ['AI search (GEO)', 'Done for you: citable claims, schema, Reddit and Quora presence', 'Positions for ChatGPT, Perplexity, and Google AI citations'],
                                            ['Setup', 'Scoped with a Dooza engineer on a free 30-minute call', 'Self-serve sign-up']
                                        ].map(([feature, ranky, outrank]) => (
                                            <tr key={feature}>
                                                <td className="p-4 border-b font-medium">{feature}</td>
                                                <td className="p-4 border-b bg-primary-50/30">{ranky}</td>
                                                <td className="p-4 border-b">{outrank}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <p>
                                    On features, the two are closer than most comparisons suggest. The difference is the model: Outrank is a tool you run, and Dooza is a team that runs the work with you.
                                </p>
                            </div>
                        </section>

                        {/* Pricing Comparison */}
                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Comparison</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Outrank publishes a single plan with article add-ons. Dooza pricing depends on the product, and every Dooza product starts with a refundable pilot: 100% refund within 14 days.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA RANKY</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">14-day<span className="text-lg font-normal text-slate-500"> refundable pilot</span></div>
                                    <p className="text-slate-500 text-sm mb-4">100% refund within 14 days. <a href="/pricing" className="text-primary-600 hover:underline">See pricing</a></p>
                                    <ul className="space-y-3">
                                        {[
                                            "Done for you by Ranky and Dooza engineers",
                                            "Your approval on everything that goes live",
                                            "Trained on your brand voice",
                                            "Titles, meta, schema, and internal links",
                                            "GEO work for AI search engines",
                                            "1,000+ app integrations",
                                            "Nightly email recap"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">OUTRANK.SO</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">$99<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <p className="text-slate-500 text-sm mb-4">Or $999/year; checked October 7, 2026</p>
                                    <ul className="space-y-3">
                                        {[
                                            "30 articles/month (60 for +$85, 90 for +$160)",
                                            "You pick which days articles go live",
                                            "Custom voice, AI images, YouTube videos",
                                            "CMS integrations, webhook, REST API, MCP",
                                            "Backlink exchange",
                                            "150+ languages",
                                            "Unlimited users, no per-seat charges"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" /><span className="text-slate-600">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <p>
                                    If you have someone on your team to run an SEO tool, Outrank&apos;s published price is easy to compare and easy to justify. If you don&apos;t, the fairer comparison is with having the work done for you, which is what Dooza&apos;s refundable pilot lets you test.
                                </p>
                            </div>
                        </section>

                        {/* Who Should Use What? */}
                        <section id="who-should-use" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Use What?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Both tools exist for good reasons. The question is which one fits <em>your</em> situation:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Outrank.so is for you if:</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You want a self-serve tool you run yourself",
                                            "You want a published monthly price",
                                            "You want to set article volume and publishing days in the app",
                                            "You want an API or MCP server to wire it into your stack",
                                            "You are comfortable with a backlink exchange"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3 text-slate-600">
                                                <span className="text-slate-400 shrink-0">&bull;</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Dooza Ranky is for you if:</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You want the SEO work done for you, not another tool to run",
                                            "You want to approve what goes live",
                                            "You want SEO and AI visibility (GEO) handled together",
                                            "You want your expertise worked into every post",
                                            "You want other AI employees for email, social, sales, and calls",
                                            "You want to start with a refundable pilot (100% refund within 14 days)"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3 text-slate-700">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Verdict</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p className="mb-6">
                                    Outrank.so is a capable self-serve SEO autopilot with a published price, flexible volume, solid integrations, and a focus on AI search. If you want to run SEO content yourself, it is a strong pick.
                                </p>
                                <p className="mb-6">
                                    Dooza Ranky is for businesses that want the work done for them. Ranky and Dooza engineers research, write, optimize, and publish, you approve what goes live, and the content connects to the rest of Dooza&apos;s AI workforce. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Want Your SEO Content Done for You?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">Book a free 30-minute call to scope your Ranky pilot with a Dooza engineer. 100% refund within 14 days.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('ranky')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start your pilot <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a free pilot call
                                    </a>
                                </div>
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

                        <RelatedPosts currentSlug="outrank-vs-dooza-ranky" category="Comparison" tags={['Outrank.so', 'Dooza Ranky', 'SEO Tools', 'Comparison']} />
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
