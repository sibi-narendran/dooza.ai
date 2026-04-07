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
import { Clock, Calendar, ShoppingBag } from 'lucide-react';

const faqData = [
    { question: "What is AI for Shopify?", answer: "AI for Shopify refers to tools and integrations that automate store operations — product descriptions, customer support, marketing emails, SEO, inventory forecasting, and personalization. Modern Shopify AI apps plug directly into your admin and run tasks 24/7 without a human in the loop." },
    { question: "What is the best AI chatbot for Shopify?", answer: "The best AI chatbot Shopify merchants use depends on the job. For support and order tracking, look for a bot trained on your product catalog and policies. For sales recovery, pick one that can recommend products and recover abandoned carts. Dooza's AI employees can be configured for both inside a single workflow." },
    { question: "How does Shopify AI integration work?", answer: "Most Shopify AI tools install as an app from the Shopify App Store and connect to your store via Shopify's API. Once connected, the AI can read products, orders, and customers, and write back updates — descriptions, tags, replies, emails — automatically." },
    { question: "Can AI write Shopify product descriptions?", answer: "Yes. AI copywriting tools generate SEO-optimized product descriptions in bulk from a few inputs (title, features, target keyword). This is one of the highest-ROI use cases for AI in ecommerce — a store with 500 SKUs can finish a full rewrite in an afternoon." },
    { question: "Is AI for Shopify worth it for small stores?", answer: "Especially for small stores. A solo founder can't answer support tickets, write descriptions, run email campaigns, and publish SEO blogs at the same time. AI for Shopify store owners removes that bottleneck for ~$29/month — cheaper than a single hour of a virtual assistant." },
    { question: "What tasks can AI automate in a Shopify store?", answer: "Product descriptions, SEO blog content, customer support chat, abandoned cart recovery, email marketing, review responses, inventory alerts, ad copy, and order status updates. The point of ecommerce automation is to let the founder focus on product and brand, not admin." },
];

export default function AiForShopifyStoreContent() {
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
            const sections = ['introduction', 'why-ai', 'use-cases', 'best-tools', 'how-to-integrate', 'roi', 'faq'];
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
                        { label: "AI for Shopify Store: Complete Guide 2026" }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <ShoppingBag size={16} />
                            <span>Ecommerce Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI for Shopify Store: <span className="text-primary-600">Complete Guide 2026</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Learn how to use AI for Shopify store owners to automate product descriptions, customer support, SEO, and email marketing — boost sales, save time, and run your store on autopilot in 2026.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 7, 2026</span></div>
                        </div>

                        <div className="mt-10">
                            <BlogHeroImage
                                src="/blog/89145eaa-a5cc-4dd1-81fe-539798a8cd74.jpg"
                                alt="AI for Shopify store — automate product descriptions, customer support, SEO, and email marketing with Shopify AI integration"
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
                                    { id: 'why-ai', label: 'Why AI for Shopify' },
                                    { id: 'use-cases', label: 'Top Use Cases' },
                                    { id: 'best-tools', label: 'Best AI Shopify Apps' },
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
                                <InternalLinks currentSlug="ai-for-shopify-store" />
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Running a Shopify store in 2026 means competing with brands that publish faster, reply quicker, and personalize better than any solo founder can manually. The unlock is <strong>AI for Shopify</strong> — a stack of tools and AI employees that handle the work in the background while you focus on product and brand.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide walks through the highest-ROI ways to use Shopify AI in 2026: where it actually moves the needle, which tasks to automate first, how to integrate it cleanly, and what the math looks like once it&apos;s running. If you sell on Shopify, this is the playbook.
                                </p>
                            </div>
                        </section>

                        <section id="why-ai" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why AI for Shopify Store Owners in 2026</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Ecommerce has always rewarded speed: faster product launches, faster replies, faster ad iteration. AI collapses every one of those loops. A founder who used to spend a week writing 50 product descriptions can now generate, edit, and publish them in an afternoon. A support inbox that took two hours a day can be handled by an AI chatbot Shopify integration in real-time.
                                </p>
                                <p>
                                    The shift is not theoretical. Stores using <strong>Shopify AI integration</strong> for content, support, and email are seeing higher conversion rates and lower customer acquisition cost than stores still doing the work by hand. The cost of <em>not</em> automating is now bigger than the cost of automating.
                                </p>
                            </div>
                        </section>

                        <section id="use-cases" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Top Use Cases: Where AI Actually Moves the Needle</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Not every AI feature is worth installing. These six are.</p>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li><strong>AI product descriptions.</strong> Generate SEO-friendly copy for your entire catalog in bulk. The fastest win for any new store.</li>
                                    <li><strong>AI chatbot for Shopify support.</strong> A bot trained on your products, shipping policy, and FAQs answers 70–90% of tickets without escalation. Order tracking, returns, sizing — all handled.</li>
                                    <li><strong>SEO blog content.</strong> A Shopify AI writer can publish ranking articles weekly, driving organic traffic that compounds. This is the cheapest acquisition channel ecommerce has, and AI makes it scalable.</li>
                                    <li><strong>Email & abandoned cart.</strong> AI writes subject lines, segments lists, and recovers carts on autopilot. One of the highest-leverage forms of ecommerce automation.</li>
                                    <li><strong>Personalized product recommendations.</strong> Recommend the right product to the right visitor based on browse and purchase data — without hiring a data team.</li>
                                    <li><strong>Review and inventory ops.</strong> Auto-respond to reviews, flag low-stock SKUs, and forecast restocks. Boring, repetitive, perfect for AI.</li>
                                </ul>
                                <p>If you&apos;re starting from zero, pick descriptions and support first. They pay back the fastest.</p>
                            </div>

                            <div className="mt-8">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/lRNvjWnKN_M"
                                        title="How to Automate Shopify Customer Service with AI (No Code)"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: setting up an AI chatbot for Shopify customer support — no code required.</p>
                            </div>
                        </section>

                        <section id="best-tools" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Best AI Shopify Apps in 2026</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The Shopify App Store is now flooded with single-purpose AI apps — one for descriptions, one for support, one for SEO, one for email. The problem with stitching together five of them is that nothing talks to each other and your monthly bill creeps past $300.
                                </p>
                                <p>
                                    The cleaner pattern in 2026 is a single AI employee platform that covers multiple jobs at once. <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> ships AI employees for SEO writing, customer support, lead generation, and email — all configurable for a Shopify workflow, all under one $29/month plan. For most stores, that&apos;s a better starting point than five separate apps.
                                </p>
                                <p>If you want a deeper comparison of platforms, see our breakdowns of <Link href="/blog/ai-tools-for-solopreneurs" className="text-primary-600 hover:underline">AI tools for solopreneurs</Link> and the <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline">best AI receptionist tools</Link>.</p>
                            </div>
                        </section>

                        <section id="how-to-integrate" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Integrate AI With Your Shopify Store</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <ol className="list-decimal pl-6 space-y-2">
                                    <li><strong>Pick one job to automate first.</strong> Don&apos;t boil the ocean. Start with descriptions or support — the two with the clearest ROI.</li>
                                    <li><strong>Connect via the Shopify App Store or API.</strong> Most modern Shopify AI tools install with one click and authenticate against your store automatically.</li>
                                    <li><strong>Train it on your store.</strong> Upload your brand voice, top FAQs, shipping policies, and product catalog. The quality of the output is downstream of the quality of the context.</li>
                                    <li><strong>Run a 7-day pilot.</strong> Shadow the AI before letting it ship publicly. Review descriptions, audit chat replies, then turn on autopilot.</li>
                                    <li><strong>Add the next job.</strong> Once one workflow is stable, layer in SEO content, then email, then personalization.</li>
                                </ol>
                                <p>This sequence is what separates stores that ship AI successfully from stores that install five apps and disable them all in a week.</p>
                            </div>
                        </section>

                        <section id="roi" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The ROI: What AI for Shopify Actually Costs (and Saves)</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    A virtual assistant who writes product descriptions, replies to support, and runs email costs $1,500–$3,000/month. A Shopify AI stack covering the same jobs costs $29–$99/month. The math is not subtle.
                                </p>
                            </div>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-6">
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Human VA</div>
                                        <div className="text-3xl font-bold">$1,500+<span className="text-base text-slate-400">/mo</span></div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">AI for Shopify</div>
                                        <div className="text-3xl font-bold text-primary-400">$29<span className="text-base text-slate-400">/mo</span></div>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-center mt-6 italic">Same output. 50× cheaper. Always on.</p>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mt-6">
                                <p>
                                    The savings are only half the story. The other half is throughput: AI ships 10× more descriptions, replies, and emails than a human in the same window — which means more SKUs live, more tickets closed, more carts recovered, more revenue in the door.
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

                        <RelatedPosts currentSlug="ai-for-shopify-store" category="AI Education" tags={['Shopify', 'Ecommerce', 'AI Chatbot']} />
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
