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
    XCircle,
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
        answer: "Yes, if you want control over your SEO content. Outrank is rigid and automated for beginners. Ranky gives you full control with AI-powered assistance, letting you guide the AI agent, embed YouTube videos, add custom tools, and publish unlimited blog posts per day."
    },
    {
        question: "How much does Dooza Ranky cost compared to Outrank?",
        answer: "Ranky is significantly cheaper. Outrank starts at $99/month. Ranky costs a fraction of that while giving you more control and features including unlimited daily posts, YouTube embeds, custom tools, and deep research capabilities."
    },
    {
        question: "Can Dooza Ranky publish multiple blogs per day?",
        answer: "Yes, unlimited. Outrank limits you to 1 blog per day with no control over timing. With Ranky, you decide how many posts go live and exactly when they publish."
    },
    {
        question: "Does Dooza Ranky support YouTube embeds?",
        answer: "Yes. Ranky can embed YouTube videos directly in your blog posts, read YouTube transcripts for deep research, and integrate multimedia content seamlessly. Outrank cannot do any of this."
    },
    {
        question: "Can I add custom tools to Dooza Ranky?",
        answer: "Yes, Ranky supports custom tools and specialized instructions similar to Claude Skills. You can add tone of voice documents, website sitemaps, experience documents, and more. Outrank offers no customization whatsoever."
    },
    {
        question: "Is Outrank.so bad for backlinks?",
        answer: "Their backlink exchange links you with zero-traffic, low-authority websites which can actually hurt your SEO rankings over time. Ahrefs data consistently shows these exchange sites have zero organic traffic and low domain ratings, making their links worthless or even harmful."
    },
    {
        question: "Who should use Outrank vs Dooza Ranky?",
        answer: "Outrank is for absolute beginners who want a hands-off approach and don't mind limited results. Ranky is for anyone who wants to guide their AI, customize output, and get real SEO results that rank in both traditional and AI search engines."
    }
];

export default function OutrankVsDoozaRankyContent() {
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
                            <span className="text-primary-600">Outrank.so</span> vs Dooza Ranky: Why Smart Marketers Are Switching
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            The honest comparison between Outrank.so's rigid automation and Dooza Ranky's AI-powered content control.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>March 19, 2026</span>
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
                                    { id: 'outrank-limitations', label: 'Outrank Limitations' },
                                    { id: 'backlink-problem', label: 'Backlink Problem' },
                                    { id: 'what-is-ranky', label: 'What is Dooza Ranky?' },
                                    { id: 'ranky-advantages', label: 'Why Ranky Wins' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to take control?</p>
                                <a
                                    href={getProductSignupUrl('ranky')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Ranky Free
                                </a>
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
                                    A McKinsey study found that <strong>80% of businesses that use AI get worse results</strong> than they did before. The reason is simple: they don't set up the features correctly. They pick a tool, press a button, and hope for the best. That approach is exactly what tools like Outrank.so encourage, and it's exactly why most AI-generated content fails to rank.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you've been looking into AI-powered SEO blog writing tools, you've probably stumbled across <strong>Outrank.so</strong>. It promises automated blog posts, backlink exchanges, and hands-off SEO. Sounds great on paper. But once you dig into the details, the cracks start to show: rigid workflows, a single blog post per day, no YouTube embeds, no custom tools, and a backlink exchange that could actually <em>damage</em> your domain authority.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Then there's <strong>Dooza Ranky</strong> &mdash; a fundamentally different approach to AI SEO content. Ranky doesn't just automate your content; it gives you the wheel. You guide the AI agent, control every aspect of your content, embed multimedia, add custom research, and publish on your schedule. This is the honest, side-by-side comparison of both tools so you can decide which one is right for your business.
                                </p>
                            </div>
                        </section>

                        {/* What is Outrank.so? */}
                        <section id="what-is-outrank" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Outrank.so?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Outrank.so is an AI-powered SEO content tool that positions itself as a "set it and forget it" solution for blog writing. The idea is that you sign up, pick some topics, and the platform automatically generates and publishes one blog post per day to your website. It also offers a backlink exchange program where member sites link to each other to try to boost domain authority.
                                </p>
                                <p className="mb-6">
                                    On the surface, this sounds appealing &mdash; especially for beginners who don't know much about SEO. You don't have to think about keyword research, content structure, or publishing cadence. Outrank handles it all. The problem is that "handling it all" means you have almost zero control over the output, and the content it produces is designed around predefined templates rather than your unique expertise and brand voice.
                                </p>
                                <p className="mb-6">
                                    Outrank starts at around <strong>$99 to $100 per month</strong>, which puts it in the premium tier for AI writing tools. For that price, you get a rigid system that publishes one post per day on topics it decides are relevant, using templates you can't customize. There's no option to embed YouTube videos, no ability to pull from YouTube transcripts for research, and no way to add custom tools or integrations that match your specific workflow.
                                </p>
                            </div>
                        </section>

                        {/* Outrank Limitations */}
                        <section id="outrank-limitations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problems with Outrank.so</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Outrank.so was built for a specific type of user: someone who wants to hand off their entire content strategy to an AI and never look at it again. That's a fine concept in theory, but in practice it creates serious limitations that hold back anyone trying to produce content that actually ranks &mdash; especially in the era of AI search engines like GPT Search, Perplexity, and Google AI Overviews.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Rigid Content Creation", desc: "Outrank can only write blog posts on certain predefined topics using rigid templates. You can't guide the AI, adjust the tone, or inject your own expertise and experience into the content. What you get is what you get." },
                                    { title: "Only 1 Blog Post Per Day", desc: "You're limited to a single blog post per day, and you have zero control over when it publishes. If you need to ramp up content production for a product launch, seasonal campaign, or competitive push, Outrank simply can't keep up." },
                                    { title: "No YouTube Video Embeds", desc: "Outrank cannot embed YouTube videos in your blog posts. In a world where multimedia content drives engagement and dwell time, this is a significant miss. Video embeds keep readers on your page longer and signal quality to search engines." },
                                    { title: "No YouTube Transcript Reading", desc: "Ranky can read and analyze YouTube transcripts to enrich your blog content with real insights from video sources. Outrank has no such capability, leaving your content shallow and disconnected from the broader content ecosystem." },
                                    { title: "No Custom Tools or Integrations", desc: "With Outrank, what you see is what you get. There's no ability to add custom tools, connect external data sources, or extend the platform's capabilities. Your workflow is locked into their predefined system." },
                                    { title: "No User-Specific Customization", desc: "Every piece of content Outrank produces follows the same rigid pattern. There's no way to add your tone of voice, your brand guidelines, your website sitemap for internal linking, or your unique experience documents. The content reads like it could belong to anyone." },
                                    { title: "Expensive for What You Get", desc: "Starting at $99-100/month, Outrank charges premium prices for a tool that gives you minimal control, one post per day, and no advanced features. For the same budget, you could get far more value from a tool that actually lets you drive the content strategy." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Backlink Problem */}
                        <section id="backlink-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Backlink Exchange Problem</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    One of Outrank.so's headline features is their backlink exchange program. The idea sounds reasonable: member websites link to each other, everyone's domain authority goes up, and everyone ranks better. In practice, this is one of the most dangerous aspects of the platform.
                                </p>
                                <p className="mb-6">
                                    When you look at the sites participating in Outrank's backlink exchange through tools like <strong>Ahrefs</strong>, a clear pattern emerges. The vast majority of these sites have <strong>zero organic traffic</strong> and <strong>extremely low domain ratings</strong>. These are not authoritative websites linking to you because your content is valuable. These are essentially empty sites in a link farm, all pointing at each other in a circle.
                                </p>
                                <p className="mb-6">
                                    Google's algorithms have become incredibly sophisticated at detecting these kinds of link schemes. When your backlink profile is filled with links from zero-traffic, low-DR websites, it sends a clear signal to Google that something is artificial. Instead of boosting your rankings, these backlinks can actively <strong>hurt your SEO</strong>. Google may devalue those links entirely, or worse, penalize your site for participating in a link scheme.
                                </p>
                                <p className="mb-6">
                                    With Dooza Ranky, you control your own linking strategy. You choose which sites you link to, you build genuine backlinks through quality content, and you backlink to the right sections of your own website for strong internal linking. There's no questionable exchange program that could put your domain authority at risk.
                                </p>
                            </div>
                        </section>

                        {/* What is Dooza Ranky? */}
                        <section id="what-is-ranky" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Dooza Ranky?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Dooza Ranky is an AI-powered SEO content agent that puts you in the driver's seat. Unlike tools that automate everything and strip away your control, Ranky is designed around a simple principle: <strong>you guide the AI agent, and it executes at scale</strong>. Think of it as having a brilliant content writer who does exactly what you tell them, does deep research before writing, and never misses a deadline.
                                </p>
                                <p className="mb-6">
                                    Ranky is built for marketers, founders, and SEO professionals who understand that great content requires human direction. The AI handles the heavy lifting &mdash; research, writing, optimization, publishing &mdash; but you set the strategy, tone, and direction. You can add custom instructions similar to <strong>Claude Skills</strong>, upload tone of voice documents, provide your website's sitemap for intelligent internal linking, and inject your real-world experience into every piece of content.
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed
                                        videoId="cL24VI1WERw"
                                        title="How Dooza Ranky Creates SEO Content"
                                    />
                                </div>
                                <p className="mb-6">
                                    The result is content that doesn't just rank on Google &mdash; it ranks in <strong>AI search engines</strong> like GPT Search, Perplexity, and Google AI Overviews. These new search platforms reward content that demonstrates genuine expertise, includes research-backed claims, references multimedia sources, and links to authoritative resources. Ranky is purpose-built to create exactly this kind of content, because these are non-negotiables for showing up in the new era of search.
                                </p>
                            </div>
                        </section>

                        {/* Ranky Advantages */}
                        <section id="ranky-advantages" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Dooza Ranky Wins</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The difference between Outrank and Ranky isn't just about features &mdash; it's about philosophy. Outrank believes AI should replace your content strategy entirely. Ranky believes AI should amplify it. Here's what that looks like in practice:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Zap, title: "Unlimited Daily Publishing", desc: "Publish as many blog posts as you want per day. No artificial limits, no queue. You control the timing and cadence.", color: "primary" },
                                    { icon: Settings, title: "Full Content Customization", desc: "Add tone of voice documents, experience docs, sitemaps, and custom instructions. Like Claude Skills, but for SEO content.", color: "green" },
                                    { icon: Bot, title: "Deep Research + YouTube", desc: "Ranky does deep research, reads YouTube transcripts, and embeds videos directly in your posts for richer content.", color: "blue" },
                                    { icon: DollarSign, title: "Fraction of the Cost", desc: "Get more features, more control, and better results at a fraction of Outrank's $99/month price tag.", color: "purple" }
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
                                    One of Ranky's most powerful capabilities is the ability to <strong>inject your real experience</strong> into every piece of content. You can provide experience documents that detail your industry knowledge, your unique perspective, and your proven methodologies. Ranky weaves this expertise throughout the content naturally, so every blog post reads like it was written by someone who genuinely knows the subject &mdash; because it was guided by someone who does.
                                </p>
                                <p className="mb-6">
                                    Ranky also excels at <strong>research-driven content</strong>. It doesn't just generate text from a template. It researches topics across the web, reads YouTube transcripts to pull insights from video content, and embeds that research throughout your blog posts with proper citations and context. This depth of research is exactly what AI search engines like Perplexity and GPT Search reward when deciding which content to surface.
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed
                                        videoId="ICnZ8DhfetE"
                                        title="Claude Skills for SEO Content Writing"
                                    />
                                </div>
                                <p className="mb-6">
                                    The video above shows how Claude Skills work for SEO content writing &mdash; and everything demonstrated there can be done inside Dooza Ranky. You can create specialized instructions, define custom workflows, and build an AI content system tailored to your exact needs. <strong>None of this is possible in Outrank.so.</strong> With Outrank, you get a rigid, one-size-fits-all approach. With Ranky, you get a flexible, powerful system that adapts to you.
                                </p>
                            </div>
                        </section>

                        {/* Feature Comparison Table */}
                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Feature-by-Feature Comparison</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's cut through the marketing and look at what each tool actually offers. This table compares the features that matter most for producing SEO content that ranks in both traditional search engines and AI-powered search.
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
                                        <tr>
                                            <td className="p-4 border-b font-medium">Blog posts per day</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Unlimited</td>
                                            <td className="p-4 border-b text-red-500">1</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Starting price</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Fraction of $99</td>
                                            <td className="p-4 border-b text-red-500">$99/month</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">YouTube embeds</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">YouTube transcript reading</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Custom tools</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Content customization</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Full control</td>
                                            <td className="p-4 border-b text-red-500">Rigid templates</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Research depth</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Deep + YouTube + web</td>
                                            <td className="p-4 border-b text-red-500">Basic</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Backlink quality</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Your choice</td>
                                            <td className="p-4 border-b text-red-500">Low-quality exchange</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">AI search engine optimization</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Built-in</td>
                                            <td className="p-4 border-b text-red-500">Not optimized</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">User guidance level</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">You guide the AI</td>
                                            <td className="p-4 border-b text-red-500">Set and forget</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <p>
                                    The comparison speaks for itself. In every category that matters for producing content that actually ranks, Dooza Ranky offers more control, more features, and more flexibility. Outrank's only advantage is simplicity &mdash; but that simplicity comes at the cost of results.
                                </p>
                            </div>
                        </section>

                        {/* Pricing Comparison */}
                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Comparison</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Pricing matters, but value matters more. When you compare what you actually get for your money, the difference between Outrank and Ranky becomes stark. Outrank charges a premium for a basic, rigid tool. Ranky gives you enterprise-level capabilities at a fraction of the cost.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA RANKY</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">Fraction<span className="text-lg font-normal text-slate-500"> of $99/mo</span></div>
                                    <p className="text-slate-500 text-sm mb-4">More features, more control, better results</p>
                                    <ul className="space-y-3">
                                        {[
                                            "Unlimited blog posts per day",
                                            "YouTube embeds & transcript reading",
                                            "Custom tools & integrations",
                                            "Full content customization",
                                            "Deep research capabilities",
                                            "AI search engine optimization",
                                            "Your own backlink strategy"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">OUTRANK.SO</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">$99+<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <p className="text-slate-500 text-sm mb-4">Rigid automation, limited control</p>
                                    <ul className="space-y-3">
                                        {[
                                            "Only 1 blog post per day",
                                            "No YouTube embeds or transcripts",
                                            "No custom tools or integrations",
                                            "Rigid templates only",
                                            "Basic research only",
                                            "Not optimized for AI search",
                                            "Risky backlink exchange"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0" /><span className="text-slate-600">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <p>
                                    When you're paying $99 or more per month for Outrank, you're paying for convenience, not capability. You get a tool that publishes one blog post per day using templates you can't customize, with backlinks from sites that might hurt your SEO. With Ranky, every dollar goes toward features that give you real control and produce content that actually ranks.
                                </p>
                            </div>
                        </section>

                        {/* Who Should Use What? */}
                        <section id="who-should-use" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Use What?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's be fair: both tools exist for a reason. The question is which one is right for <em>your</em> situation. Here's the honest breakdown:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Outrank.so is for you if:</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You're a complete beginner with zero SEO knowledge",
                                            "You want a fully hands-off approach",
                                            "You don't care about content quality or customization",
                                            "You're OK with 1 blog post per day",
                                            "You don't mind paying $99/month for basic automation",
                                            "You don't need YouTube embeds or multimedia",
                                            "You're not concerned about AI search engine rankings"
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
                                            "You want to guide your AI and control the output",
                                            "You need unlimited blog posts on your schedule",
                                            "You value deep research and multimedia content",
                                            "You want content that ranks in AI search engines",
                                            "You want to inject your expertise into every post",
                                            "You need custom tools and integrations",
                                            "You want better results at a fraction of the cost"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3 text-slate-700">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Here's the reality: <strong>Outrank is "set and forget" for beginners. Ranky is for people who want real control and real results.</strong> If you've ever used Claude Skills or similar AI customization features, you already understand the power of guiding an AI agent. Everything you can do with Claude Skills &mdash; specialized instructions, tone customization, context injection &mdash; can be done inside Dooza Ranky. But none of it is possible in Outrank.so.
                                </p>
                                <p className="mb-6">
                                    The 80% of businesses that fail with AI content fail because they use tools that don't let them set things up properly. They press a button and hope for the best. If you want to be in the 20% that succeeds, you need a tool that lets you drive the strategy while the AI handles the execution. That's Dooza Ranky.
                                </p>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Verdict</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p className="mb-6">
                                    Outrank.so serves a purpose for complete beginners who want zero involvement in their content strategy. But for anyone who understands that SEO success requires strategy, expertise, and control, Dooza Ranky is the clear winner. It's cheaper, more powerful, more flexible, and built for the future of search where AI engines reward depth, authenticity, and expertise.
                                </p>
                                <p className="mb-6">
                                    The backlink exchange alone is reason enough to be cautious about Outrank. When your domain authority is on the line, linking yourself to zero-traffic, low-DR sites through an automated exchange is a gamble you don't need to take. With Ranky, you maintain full control over your linking strategy and build authority the right way.
                                </p>
                                <p className="mb-6">
                                    Smart marketers are switching to Dooza Ranky because they understand a fundamental truth: <strong>AI works best when humans guide it</strong>. Don't hand over your content strategy to a rigid algorithm. Take control, guide the AI, and produce content that actually ranks &mdash; in Google, in AI search engines, and everywhere your audience is looking.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Take Control of Your SEO Content?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">Stop settling for rigid automation. Try Dooza Ranky and experience the difference real AI-powered content control makes.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('ranky')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Try Ranky Free <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a Demo
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
