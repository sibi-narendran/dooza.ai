'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedPosts from '../../../components/RelatedPosts';
import InternalLinks from '../../../components/InternalLinks';
import BlogHeroImage from '../../../components/BlogHeroImage';
import { Clock, Calendar, Zap } from 'lucide-react';

// ─── Instagram Reel Card (custom, never blocked) ────────────────────────────
function InstagramReelCard({ permalink, author = '@hamza_clipss', caption = "Don't do it. Dooza it. Sell it to other people." }) {
    return (
        <a
            href={permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block mx-auto w-full max-w-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
        >
            <div className="relative aspect-[9/16] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                        <Instagram className="w-5 h-5" />
                        <span className="text-sm font-semibold">Reel</span>
                    </div>
                    <span className="text-xs font-medium bg-white/20 backdrop-blur px-2 py-1 rounded-full">{author}</span>
                </div>
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-pink-600 fill-pink-600 ml-1" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-base font-semibold leading-snug drop-shadow-lg">&ldquo;{caption}&rdquo;</p>
                </div>
            </div>
            <div className="p-4 flex items-center justify-between bg-white">
                <span className="text-sm font-medium text-slate-700">Watch the full reel on Instagram</span>
                <span className="text-sm font-bold text-pink-600 group-hover:translate-x-1 transition-transform">→</span>
            </div>
        </a>
    );
}

// ─── Instagram Reel Embed (exact official markup) ───────────────────────────
function InstagramReelEmbed() {
    useEffect(() => {
        const process = () => {
            if (window.instgrm && window.instgrm.Embeds) {
                window.instgrm.Embeds.process();
            }
        };
        // try immediately, then poll for up to 10s in case script is still loading
        process();
        const interval = setInterval(process, 400);
        const timeout = setTimeout(() => clearInterval(interval), 10000);
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <Script
                id="instagram-embed-js"
                src="https://www.instagram.com/embed.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.instgrm && window.instgrm.Embeds) {
                        window.instgrm.Embeds.process();
                    }
                }}
            />
            <div
                className="flex justify-center"
                dangerouslySetInnerHTML={{
                    __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DWyx1dBiC9y/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DWyx1dBiC9y/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DWyx1dBiC9y/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Hamza (@hamza_clipss)</a></p></div></blockquote>`,
                }}
            />
        </>
    );
}

// ─── (Legacy) Instagram Embed — kept but unused ─────────────────────────────
function InstagramEmbed({ permalink }) {
    useEffect(() => {
        const tryProcess = () => {
            if (window.instgrm && window.instgrm.Embeds) {
                window.instgrm.Embeds.process();
                return true;
            }
            return false;
        };
        if (!tryProcess()) {
            const interval = setInterval(() => {
                if (tryProcess()) clearInterval(interval);
            }, 300);
            // give up after 10s
            setTimeout(() => clearInterval(interval), 10000);
        }
    }, [permalink]);

    return (
        <>
            <Script
                src="https://www.instagram.com/embed.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.instgrm && window.instgrm.Embeds) {
                        window.instgrm.Embeds.process();
                    }
                }}
            />
            <div className="flex justify-center">
                <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={`${permalink}?utm_source=ig_embed&utm_campaign=loading`}
                    data-instgrm-version="14"
                    style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: 3,
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: 1,
                        maxWidth: 540,
                        minWidth: 326,
                        padding: 0,
                        width: 'calc(100% - 2px)',
                    }}
                >
                    <div style={{ padding: 16 }}>
                        <a
                            href={`${permalink}?utm_source=ig_embed&utm_campaign=loading`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#3897f0', fontWeight: 600, textDecoration: 'none' }}
                        >
                            View this reel on Instagram →
                        </a>
                    </div>
                </blockquote>
            </div>
        </>
    );
}

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const faqData = [
    { question: "How can I make money with AI in 2026?", answer: "The fastest way is the reseller model: pick one service (social media, SEO, email, lead generation, or phone answering), use an AI tool to deliver it on autopilot, and charge small businesses a flat monthly retainer. You keep the margin between the tool's cost ($29/month) and the client's retainer ($500–$2,000/month)." },
    { question: "Can I really resell AI tools as a service?", answer: "Yes — and it's how most modern AI agencies operate. You're not selling the tool; you're selling the outcome (posts published, leads booked, calls answered). Tools like Dooza are explicitly designed for operators and agencies to white-label the work under their own brand." },
    { question: "Do I need technical skills to start an AI side hustle?", answer: "No. Modern AI platforms include concierge onboarding that configures everything for you. You focus on finding clients and managing relationships. The AI handles execution. No coding, no prompt engineering, no infrastructure." },
    { question: "What services sell best for an AI reseller business?", answer: "Six proven categories: social media management ($500–$2,000/mo), SEO content ($1,000–$5,000/mo), AI receptionist / call answering ($300–$800/mo), lead generation ($500–$1,500/mo), email management ($400–$1,000/mo), and appointment setting ($500–$1,200/mo)." },
    { question: "How much money can you make reselling AI tools?", answer: "Three small clients on retainer = $2,800/month gross on a $29/month tool cost. Scale to ten clients and you're at $10,000+/month. The constraint isn't execution (AI handles it) — it's sales." },
    { question: "Is reselling AI tools legal and allowed?", answer: "Yes. Most AI employee platforms (including Dooza) explicitly encourage agencies, freelancers, and operators to use the service for client work. You own the client relationship; the AI does the work in the background." },
];

export default function DoozaItAndResellContent() {
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
            const sections = ['introduction', 'the-reel', 'the-playbook', 'what-to-resell', 'pricing', 'who-this-is-for', 'faq'];
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
                        { label: "How to Make Money With AI" }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-6">
                            <Zap size={16} />
                            <span>AI Side Hustle Playbook</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How to Make Money With AI: <span className="text-primary-600">Resell AI Tools as a Service in 2026</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            The fastest way to make money with AI in 2026 isn&apos;t building an app or making content — it&apos;s reselling AI tools as a done-for-you service to small businesses. Here&apos;s the full playbook, the math, and the exact six services that sell.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>6 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>April 7, 2026</span></div>
                        </div>

                        <div className="mt-10">
                            <BlogHeroImage
                                src="/blog/dooza-it-and-resell.png"
                                alt="Operator using Dooza AI employees to deliver services to small business clients — don't do it, Dooza it, resell it"
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
                                    { id: 'introduction', label: 'The 20-Second Idea' },
                                    { id: 'the-reel', label: 'The Reel' },
                                    { id: 'the-playbook', label: 'The Playbook' },
                                    { id: 'what-to-resell', label: 'What to Resell' },
                                    { id: 'pricing', label: 'The Margin' },
                                    { id: 'who-this-is-for', label: 'Who This Is For' },
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
                                <InternalLinks currentSlug="dooza-it-and-resell" />
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Everyone wants to know how to make money with AI in 2026. Most of the advice is bad — build a wrapper app, sell a course, post AI-generated videos. The model that actually works is older and quieter: <strong>resell AI tools as a service</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The idea is simple. Small businesses (dentists, salons, real estate agents, coaches, e-commerce shops) already pay humans $500–$5,000/month for tasks like social media, SEO, lead generation, and answering the phone. Modern AI tools can do those exact jobs for $29/month. The gap between those two numbers is your business.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    An influencer named Hamza (@hamza_clipss) summed up the whole model in a 20-second reel: <em>don&apos;t do the work yourself — let AI do it, and sell the output to other people</em>. We&apos;re going to expand that into a real playbook, with the math, the services that sell, and the exact tool we recommend (<Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link>) for delivering the work.
                                </p>
                            </div>
                        </section>

                        <section id="the-reel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Reel</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>Watch it once. The whole pitch lands in under half a minute.</p>
                            </div>
                            <div className="mb-6">
                                <InstagramReelEmbed />
                            </div>
                        </section>

                        <section id="the-playbook" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Playbook in Plain English</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>The agency model used to require a team. Hamza&apos;s clip flips it:</p>
                                <ol className="list-decimal pl-6 space-y-2">
                                    <li><strong>Pick a service small businesses already pay for.</strong> Social media. SEO. Cold outbound. Receptionist. Email triage.</li>
                                    <li><strong>Configure a Dooza AI employee to do that one thing well.</strong> Onboarding is free and concierge — you don&apos;t touch code.</li>
                                    <li><strong>Sell the output, not the tool.</strong> Your client doesn&apos;t need to know what&apos;s under the hood. They get posts, leads, blog articles, answered calls.</li>
                                    <li><strong>Charge a service retainer.</strong> $500–$2,000/month is normal. Your input is $29/month.</li>
                                    <li><strong>Repeat.</strong> One Dooza account can power the workflow for many clients if you keep configurations clean.</li>
                                </ol>
                                <p>That&apos;s it. That&apos;s the entire reel, expanded.</p>
                            </div>
                        </section>

                        <section id="what-to-resell" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Can Actually Resell</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>Dooza ships six AI employees. Every one of them maps to a service small businesses already buy from humans:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Social media manager</strong> → posts, captions, scheduling. Agencies charge $500–$2,000/month.</li>
                                    <li><strong>SEO writer</strong> → ranking blog articles on autopilot. Retainers run $1,000–$5,000/month.</li>
                                    <li><strong>AI receptionist</strong> → answers calls, books appointments. Services bill $300–$800/month.</li>
                                    <li><strong>Cold outbound / lead gen</strong> → LinkedIn and email pipelines. $1,000–$3,000/month is the going rate.</li>
                                    <li><strong>Email assistant</strong> → triage, replies, follow-ups. $400–$1,200/month.</li>
                                    <li><strong>Legal admin</strong> → contracts, compliance docs. $500–$1,500/month.</li>
                                </ul>
                                <p>You don&apos;t need to offer all six. Pick one. Get a client. Add the next.</p>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Margin Nobody Talks About</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Most service businesses have ugly margins because labor eats the revenue. With Dooza, the labor cost is fixed at $29/month no matter how much output you ship.
                                </p>
                            </div>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-6">
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Your cost</div>
                                        <div className="text-3xl font-bold">$29<span className="text-base text-slate-400">/mo</span></div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Client retainer</div>
                                        <div className="text-3xl font-bold text-primary-400">$500–$2,000<span className="text-base text-slate-400">/mo</span></div>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-center mt-6 italic">One client pays back the year. Everything after is margin.</p>
                            </div>
                        </section>

                        <section id="who-this-is-for" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who This Is Actually For</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Freelancers tired of trading hours for dollars. Side-hustlers who want recurring revenue instead of one-off gigs. Existing agencies who are bleeding margin on junior staff. Operators who like sales but hate execution.
                                </p>
                                <p>
                                    If that&apos;s you, the reel wasn&apos;t a hype clip — it was a memo. The tools to run a one-person agency that looks like a ten-person one already exist. Dooza is one of them. Hamza just told you out loud.
                                </p>
                                <p>
                                    Don&apos;t do it. <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza it</Link>. Sell it to other people.
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

                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>
                                    <a href="https://www.instagram.com/reel/DWyx1dBiC9y/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                        Hamza (@hamza_clipss) — Original Instagram reel
                                    </a>
                                </li>
                                <li>
                                    <Link href="/blog/her-entire-team-was-ai" className="text-primary-600 hover:underline">
                                        Related: Her Entire Team Was AI. Nobody Could Tell.
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/build-a-20x-company" className="text-primary-600 hover:underline">
                                        Related: How to Build a 20X Company
                                    </Link>
                                </li>
                            </ul>
                        </section>

                        <RelatedPosts currentSlug="dooza-it-and-resell" category="AI Education" tags={['AI Employees', 'Agency', 'Reseller']} />
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
