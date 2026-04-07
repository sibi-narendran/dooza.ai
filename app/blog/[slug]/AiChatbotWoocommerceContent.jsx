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
    { question: "What is an AI chatbot for WooCommerce?", answer: "An AI chatbot for WooCommerce is an AI assistant that lives on your WordPress storefront and handles customer service, product recommendations, and order tracking automatically. It's trained on your product catalog, shipping policies, and FAQs so it can resolve most tickets without a human in the loop." },
    { question: "What is the best AI chatbot for WooCommerce in 2026?", answer: "The best WooCommerce chatbot depends on the job. For 24/7 support and order tracking, look for one trained on your catalog. For sales, pick one that recommends products and recovers abandoned carts. Dooza's AI employees do both inside one workflow for $29/month." },
    { question: "Can an AI chatbot replace my WooCommerce customer support team?", answer: "It can handle 70–90% of repetitive tickets — order status, returns, sizing, shipping. Humans still own complex cases, refunds outside policy, and VIP escalations. The winning setup is AI on the front line, humans on exceptions." },
    { question: "How does a WooCommerce chatbot increase sales?", answer: "By answering buying-intent questions in real time (sizing, stock, shipping ETA), recommending the right product, and recovering abandoned carts via chat. Stores running an AI assistant typically see a 10–30% lift in conversion on chat sessions." },
    { question: "Is it hard to install an AI chatbot on WooCommerce?", answer: "No. Most modern WooCommerce chatbots install as a WordPress plugin or connect via the WooCommerce REST API in a few clicks. Training takes another 30 minutes — upload your FAQs, brand voice, and shipping policy, and you're live." },
    { question: "How much does an AI chatbot for WooCommerce cost?", answer: "Single-purpose WooCommerce chatbots run $20–$200/month depending on volume. A bundled AI employee platform like Dooza covers chat, email, SEO, and lead gen for $29/month flat — usually cheaper than buying chat alone." },
];

export default function AiChatbotWoocommerceContent() {
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
            const sections = ['introduction', 'why-chatbot', 'use-cases', 'best-tools', 'how-to-integrate', 'roi', 'faq'];
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
                        { label: "AI Chatbot for WooCommerce" }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <MessageCircle size={16} />
                            <span>E-commerce Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Chatbot for WooCommerce: <span className="text-primary-600">Automate Support & Boost Sales (2026)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Find the best AI chatbot for WooCommerce. Automate customer support, recommend products, recover abandoned carts, and increase sales — 24/7, on autopilot.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 7, 2026</span></div>
                        </div>

                        <div className="mt-10">
                            <BlogHeroImage
                                src="/blog/502df599-60aa-458d-9c05-80db444e5b9c.jpg"
                                alt="AI chatbot for WooCommerce — automate customer support, product recommendations, and abandoned cart recovery on WordPress stores"
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
                                    { id: 'why-chatbot', label: 'Why a WooCommerce Chatbot' },
                                    { id: 'use-cases', label: 'Top Use Cases' },
                                    { id: 'best-tools', label: 'Best AI Chatbots' },
                                    { id: 'how-to-integrate', label: 'How to Integrate' },
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
                                <InternalLinks currentSlug="ai-chatbot-woocommerce" />
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Every WooCommerce store hits the same wall: tickets pile up, carts get abandoned, and the founder ends up answering &quot;where&apos;s my order&quot; at midnight. An <strong>AI chatbot for WooCommerce</strong> closes that gap — handling support, recommending products, and recovering carts on autopilot, without hiring a single agent.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide breaks down the best AI chatbots for WooCommerce in 2026, what they actually automate, how to install one in under an hour, and the math on why a $29/month bot beats a $1,500/month VA every time.
                                </p>
                            </div>
                        </section>

                        <section id="why-chatbot" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Every WooCommerce Store Needs an AI Chatbot in 2026</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Shoppers don&apos;t wait. If a visitor asks &quot;does this ship to Canada?&quot; at 11pm and nobody answers, they bounce. A <strong>WooCommerce chatbot</strong> trained on your store responds in seconds — every time, in any timezone, in any language.
                                </p>
                                <p>
                                    The result is fewer abandoned carts, higher conversion on chat sessions, and a support inbox that no longer eats your weekend. It&apos;s the cheapest form of <strong>WooCommerce automation</strong> with the most direct line to revenue.
                                </p>
                            </div>
                        </section>

                        <section id="use-cases" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Top Use Cases: What an AI Chatbot Actually Does</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <ul className="list-disc pl-6 space-y-3">
                                    <li><strong>24/7 customer support.</strong> Answers shipping, returns, sizing, and policy questions instantly — resolves 70–90% of tickets without a human.</li>
                                    <li><strong>Order tracking.</strong> Connects to WooCommerce orders and gives real-time status updates without a support rep touching it.</li>
                                    <li><strong>Product recommendations.</strong> An AI assistant that asks two questions and points the visitor to the right SKU — like a salesperson on every page.</li>
                                    <li><strong>Abandoned cart recovery.</strong> Re-engages shoppers via chat or email before they forget you exist.</li>
                                    <li><strong>Lead capture.</strong> Collects emails and qualifies B2B inquiries straight from the chat widget.</li>
                                    <li><strong>Multilingual support.</strong> Speaks every language your customers do — without hiring a global team.</li>
                                </ul>
                                <p>If you only automate two things, automate support and abandoned cart recovery. Those are the dollars on the floor.</p>
                            </div>

                            <div className="mt-8">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/ppQe8xnJbJ0"
                                        title="How to Add an AI Chatbot to WooCommerce"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: setting up an AI chatbot for WooCommerce — no code required.</p>
                            </div>
                        </section>

                        <section id="best-tools" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Best AI Chatbots for WooCommerce in 2026</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The WordPress plugin directory is full of single-purpose chatbots — one for support, one for recommendations, one for email capture. Stitching five of them together is a maintenance nightmare and your bill creeps past $300/month fast.
                                </p>
                                <p>
                                    The cleaner pattern in 2026 is a single AI employee platform that covers all the chatbot jobs at once. <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> ships AI employees for customer support, product recommendations, lead generation, and email — all configurable for a WooCommerce workflow, all under one $29/month plan.
                                </p>
                                <p>For broader context, see our guide on <Link href="/blog/ai-for-woocommerce-store" className="text-primary-600 hover:underline">AI for WooCommerce stores</Link>.</p>
                            </div>
                        </section>

                        <section id="how-to-integrate" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Add an AI Chatbot to WooCommerce</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <ol className="list-decimal pl-6 space-y-2">
                                    <li><strong>Pick one job to start.</strong> Customer support is the highest-ROI first install.</li>
                                    <li><strong>Install the plugin or connect via REST API.</strong> Most modern AI chatbots install in one click from WordPress and authenticate against WooCommerce automatically.</li>
                                    <li><strong>Train it on your store.</strong> Upload FAQs, shipping policy, brand voice, and product catalog. Output quality is downstream of context quality.</li>
                                    <li><strong>Pilot for 7 days.</strong> Shadow the bot before letting it ship public replies. Audit, tune, then go live.</li>
                                    <li><strong>Layer in the next job.</strong> Once support is stable, add recommendations, then cart recovery.</li>
                                </ol>
                            </div>
                        </section>

                        <section id="roi" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The ROI: Chatbot vs Human Support Agent</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    A part-time support VA costs $1,500–$3,000/month and works 8 hours a day. An AI chatbot for WooCommerce costs $29–$99/month and works 24/7. The math is not subtle.
                                </p>
                            </div>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-6">
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Human Support VA</div>
                                        <div className="text-3xl font-bold">$1,500+<span className="text-base text-slate-400">/mo</span></div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">AI Chatbot</div>
                                        <div className="text-3xl font-bold text-primary-400">$29<span className="text-base text-slate-400">/mo</span></div>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-center mt-6 italic">Same coverage. 50× cheaper. Always on.</p>
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

                        <RelatedPosts currentSlug="ai-chatbot-woocommerce" category="AI Education" tags={['WooCommerce', 'Chatbot', 'AI', 'E-commerce']} />
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
