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
import { Clock, Calendar, MessageCircle } from 'lucide-react';

const faqData = [
    { question: "What is an AI chatbot for Shopify?", answer: "A Shopify chatbot is an AI assistant that lives on your storefront and handles customer service, product recommendations, and order tracking automatically. It's trained on your product catalog, shipping policies, and FAQs so it can resolve most tickets without a human in the loop." },
    { question: "What is the best AI chatbot for Shopify in 2026?", answer: "The best AI chatbot Shopify merchants pick depends on the job. For 24/7 support and order tracking, look for one trained on your catalog. For sales, pick one that recommends products and recovers abandoned carts. Dooza's AI employees do both inside one workflow for $29/month." },
    { question: "Can an AI chatbot replace my Shopify customer service team?", answer: "It can replace 70–90% of repetitive tickets — order status, returns, sizing, shipping. Humans still own complex cases, refunds outside policy, and VIP escalations. The winning setup is AI on the front line, humans on exceptions." },
    { question: "How does an AI chatbot increase Shopify conversions?", answer: "By answering buying-intent questions in real time (sizing, stock, shipping ETA), recommending the right product, and recovering abandoned carts via chat. Stores running an AI assistant typically see a 10–30% lift in conversion on chat sessions vs no chat." },
    { question: "Is it hard to install an AI chatbot on Shopify?", answer: "No. Most modern Shopify chatbots install from the App Store in one click and authenticate against your store automatically. Training takes another 30 minutes — upload your FAQs, brand voice, and shipping policy, and you're live." },
    { question: "How much does an AI chatbot for Shopify cost?", answer: "Single-purpose Shopify chatbots run $20–$200/month depending on volume. A bundled AI employee platform like Dooza covers chat, email, SEO, and lead gen for $29/month flat — usually cheaper than buying chat alone." },
];

export default function BestAiChatbotShopifyContent() {
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
            const sections = ['introduction', 'why-chatbot', 'features', 'best-tools', 'how-to-setup', 'roi', 'faq'];
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
                        { label: "Best AI Chatbot for Shopify (2026)" }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <MessageCircle size={16} />
                            <span>Shopify Chatbot</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best AI Chatbot for Shopify: <span className="text-primary-600">Automate Support & Boost Conversions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Discover the best AI chatbot for Shopify stores. Automate customer service, deliver smart product recommendations, and recover abandoned carts on autopilot — 24/7.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 7, 2026</span></div>
                        </div>

                        <div className="mt-10">
                            <BlogHeroImage
                                src="/blog/89145eaa-a5cc-4dd1-81fe-539798a8cd74.jpg"
                                alt="Best AI chatbot for Shopify — automate customer support, product recommendations, and abandoned cart recovery"
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
                                    { id: 'why-chatbot', label: 'Why a Shopify Chatbot' },
                                    { id: 'features', label: 'Key Features' },
                                    { id: 'best-tools', label: 'Best AI Chatbot Shopify' },
                                    { id: 'how-to-setup', label: 'How to Set It Up' },
                                    { id: 'roi', label: 'ROI & Pricing' },
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
                                <InternalLinks currentSlug="best-ai-chatbot-shopify" />
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    If you run a Shopify store in 2026, customer service is no longer something you should be doing yourself. The best <strong>AI chatbot for Shopify</strong> will answer 70–90% of your tickets, recommend the right product to every visitor, and recover abandoned carts — all while you sleep.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide breaks down what a great Shopify chatbot actually does, the features that matter for ecommerce, the best AI assistant options on the market, and how to get one live on your store in under an hour. If you want <strong>AI support Shopify</strong> stores actually use, start here.
                                </p>
                            </div>
                        </section>

                        <section id="why-chatbot" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Every Shopify Store Needs an AI Chatbot</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Shoppers don&apos;t wait. If a visitor has a question about sizing, shipping, or stock at 11pm and there&apos;s nobody to answer it, they bounce — and most don&apos;t come back. A traditional support team can&apos;t cover 24/7 without burning a payroll bigger than most stores&apos; profit. An AI chatbot can.
                                </p>
                                <p>
                                    Beyond <strong>Shopify customer service</strong>, modern chatbots double as silent salespeople. They guide hesitant buyers to the right product, upsell complementary items, and trigger personalized offers when someone is about to abandon a cart. That&apos;s the difference between a chat widget and an AI assistant that actually moves revenue.
                                </p>
                                <p>
                                    The math is simple: a single AI chatbot replaces a $1,500/month VA, runs 24/7, never takes a sick day, and converts more carts in the process. For a small store, this isn&apos;t a nice-to-have — it&apos;s the cheapest growth lever on the table.
                                </p>
                            </div>
                        </section>

                        <section id="features" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Look For in the Best AI Chatbot Shopify Apps</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Not every chatbot is built for ecommerce. The right one for Shopify should hit all six of these:</p>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li><strong>Trained on your catalog.</strong> The bot must read your products, variants, and stock in real time — not generic answers.</li>
                                    <li><strong>Order tracking out of the box.</strong> Customers ask &quot;where&apos;s my order?&quot; more than anything else. The chatbot should pull live status from Shopify automatically.</li>
                                    <li><strong>Smart product recommendations.</strong> An AI assistant that suggests the right SKU based on browse history is the difference between a support tool and a sales tool.</li>
                                    <li><strong>Abandoned cart recovery.</strong> Reach out via chat or email when a cart sits idle. This single feature pays for the entire stack.</li>
                                    <li><strong>Multi-channel.</strong> One chatbot on your store, Instagram DMs, WhatsApp, and email. Customers shouldn&apos;t bounce between five inboxes.</li>
                                    <li><strong>Human handoff.</strong> When the AI hits its limits, the conversation should escalate cleanly to a human with full context attached.</li>
                                </ul>
                                <p>If a chatbot is missing two or more of these, it&apos;s a chat widget pretending to be AI.</p>
                            </div>

                            <div className="mt-8">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/lRNvjWnKN_M"
                                        title="How to Add an AI Chatbot to Your Shopify Store (No Code)"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: setting up the best AI chatbot for Shopify in under 30 minutes — no code.</p>
                            </div>
                        </section>

                        <section id="best-tools" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Best AI Chatbot for Shopify in 2026</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The Shopify App Store has dozens of chatbots. Most do one job well. The problem is that the moment you also need email, SEO, and lead gen, you&apos;re stitching together five tools — each with its own bill, dashboard, and quirks.
                                </p>
                                <p>
                                    The cleaner pattern in 2026 is one AI employee platform that covers chat, support, recommendations, and email under one roof. <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> ships AI employees for Shopify customer service, product recommendations, abandoned cart recovery, and SEO content — all configurable for a single store, all on a flat $29/month plan. For most merchants, that&apos;s cheaper and simpler than buying a dedicated chatbot alone.
                                </p>
                                <p>
                                    For deeper context, see our guides on <Link href="/blog/ai-for-shopify-store" className="text-primary-600 hover:underline">AI for Shopify store</Link>, <Link href="/blog/ai-tools-for-solopreneurs" className="text-primary-600 hover:underline">AI tools for solopreneurs</Link>, and the <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline">best AI receptionist tools</Link>.
                                </p>
                            </div>
                        </section>

                        <section id="how-to-setup" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Set Up an AI Chatbot on Your Shopify Store</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <ol className="list-decimal pl-6 space-y-2">
                                    <li><strong>Install from the Shopify App Store.</strong> One click, OAuth, done. The chatbot now has access to products, orders, and customers.</li>
                                    <li><strong>Train it on your store.</strong> Upload your shipping policy, returns policy, FAQs, and brand voice. Output quality is downstream of context quality.</li>
                                    <li><strong>Connect order tracking.</strong> Make sure the bot can pull live order status — this single integration kills the most common ticket type.</li>
                                    <li><strong>Turn on product recommendations.</strong> Let the AI assistant suggest SKUs based on browse and purchase history.</li>
                                    <li><strong>Enable abandoned cart recovery.</strong> Set the trigger to 30–60 minutes idle. Personalized chat-based recovery converts better than generic email.</li>
                                    <li><strong>Run a 7-day shadow.</strong> Review every reply before going fully autonomous. Tune answers, then turn on autopilot.</li>
                                </ol>
                                <p>Stores that follow this sequence get a chatbot live and producing ROI inside a week. Stores that skip the training step end up with a generic-sounding bot and disable it.</p>
                            </div>
                        </section>

                        <section id="roi" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">ROI: What an AI Chatbot Actually Saves You</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    A part-time Shopify customer service rep costs $1,500–$3,000/month and covers maybe 40 hours a week. An AI chatbot covers 168 hours a week — every hour, every weekend, every holiday — for a fraction of that. And it doesn&apos;t just save cost; it adds revenue by recovering carts the human team would have missed entirely.
                                </p>
                            </div>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-6">
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Human Support Rep</div>
                                        <div className="text-3xl font-bold">$1,500+<span className="text-base text-slate-400">/mo</span></div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">AI Chatbot Shopify</div>
                                        <div className="text-3xl font-bold text-primary-400">$29<span className="text-base text-slate-400">/mo</span></div>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-center mt-6 italic">24/7 coverage. 50× cheaper. Recovers carts your team can&apos;t.</p>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mt-6">
                                <p>
                                    The biggest ROI isn&apos;t the saved salary — it&apos;s the recovered revenue. A Shopify chatbot answering buying-intent questions in real time will lift conversion 10–30% on chat sessions. On a store doing $50k/month, that&apos;s thousands in extra revenue every month from a $29 tool.
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

                        <RelatedPosts currentSlug="best-ai-chatbot-shopify" category="AI Education" tags={['Shopify', 'Ecommerce', 'AI Chatbot']} />
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
