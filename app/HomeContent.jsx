'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { CAL_BOOKING_URL, getProductSignupUrl, SITE_URL } from '@/lib/links';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { ArrowRight, Mail, Calendar, MessageSquare, Star } from 'lucide-react';
import { trackSignupClick, trackDemoClick, trackFBLead, trackFBSchedule } from '@/lib/analytics';

// Homepage FAQ data for schema
const homeFaqData = [
    {
        question: "Do I need to know how to prompt?",
        answer: "No! Our agents are pre-trained. You just talk to them like a normal person."
    },
    {
        question: "Is there a money-back guarantee?",
        answer: "Yes! If you're not happy within 7 days, just let us know and we'll give you a full refund, no questions asked."
    },
    {
        question: "Can I manage multiple businesses?",
        answer: "Absolutely. You can create different workspaces for different businesses."
    },
    {
        question: "How is Dooza different from Sintra AI or Marblism?",
        answer: "Unlike Sintra AI and Marblism, Dooza offers free concierge onboarding where our team builds custom AI employees for your specific workflow. We also have transparent pricing starting at $29/month with no hidden fees, and our AI employees are purpose-built for business automation, not just chatbots.",
        links: [
            { text: "Learn more about AI agents", url: "https://openai.com/index/introducing-gpts" }
        ]
    }
];

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "name": "Dooza",
            "url": SITE_URL,
            "description": "AI Employees That Never Sleep - Build, grow, and scale your business with a team of AI employees."
        },
        {
            "@type": "Organization",
            "name": "Dooza",
            "url": SITE_URL,
            "logo": `${SITE_URL}/logo.png`,
            "sameAs": [
                "https://twitter.com/sibinarendran",
                "https://linkedin.com/company/dooza"
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": homeFaqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        }
    ]
};

export default function HomePage() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            e?.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    const timeline = [
        { time: "7:00 AM", event: "Eva organizes your inbox and prepare replies" },
        { time: "11:00 AM", event: "You haven't posted today, but Sonny has" },
        { time: "2:00 PM", event: "While you're out, Stan's finding new clients" },
        { time: "5:00 PM", event: "Your site's climbing the ranks, Penny's behind it." },
        { time: "7:00 PM", event: "Day's over. Rachel's still answering calls." },
        { time: "11:00 PM", event: "The world's asleep. Linda reviews your contract." }
    ];

    if (!isMounted) return null;

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <Navbar openModal={handleAction} />

            <main>
                <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20 md:pt-24 pb-8 md:pb-16 relative overflow-hidden bg-white">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-[120px] animate-blob"></div>
                        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-primary-50/50 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
                        <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                            AI Employees That <br /> <span className="text-primary-600">Never Sleep</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Build, grow, and scale your business with a team of AI employees.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href={getProductSignupUrl('workforce')} 
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { trackSignupClick('hero'); trackFBLead('hero_signup'); }}
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a 
                                href={CAL_BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { trackDemoClick('hero'); trackFBSchedule(); }}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-full font-bold text-lg transition-all"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Free Setup
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">You want to scale your business, but...</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Mail className="w-7 h-7" /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Inbox Overload</h3>
                                <p className="text-slate-600">You start your day with 100+ unread emails requiring your attention.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MessageSquare className="w-7 h-7" /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Social Silence</h3>
                                <p className="text-slate-600">Your social media hasn't been updated in weeks because you're too busy.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Calendar className="w-7 h-7" /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Procrastination loop</h3>
                                <p className="text-slate-600">Everything keeps getting pushed to "next week". You're wearing too many hats.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 text-slate-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-100/30 to-transparent skew-x-12 transform origin-top-right"></div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Welcome to your new life</h2>
                            <p className="text-xl text-slate-600">Here's what your day looks like with Workforce</p>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-300 before:to-transparent">
                            {timeline.map((item, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-300 bg-white group-hover:bg-primary-600 group-hover:border-primary-500 transition-colors shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full group-hover:bg-white animate-pulse"></div>
                                    </div>

                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/80 p-6 rounded-2xl border-2 border-teal-200 shadow-md backdrop-blur-sm hover:border-primary-400 hover:shadow-lg transition-all">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-primary-600">{item.time}</div>
                                        </div>
                                        <div className="text-slate-700">{item.event}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-6">
                            EMPLOYEE OF THE MONTH — EVERY MONTH
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 font-medium mb-6">"My AI receptionist answers every call while I'm on site. Haven't missed a lead in months."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">IS</div>
                                    <div><div className="font-bold text-slate-900">Interio Square</div></div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 font-medium mb-6">"Our social pages used to be dead. Now Seomi posts daily updates and we're actually growing."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">ST</div>
                                    <div><div className="font-bold text-slate-900">Suresh Timbers</div></div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 font-medium mb-6">"I hired the Legal Assistant agent to review my contracts. Saved me thousands in lawyer fees."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">AL</div>
                                    <div><div className="font-bold text-slate-900">Adam Labs</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitor Alternatives */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Switching to Dooza?</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Join thousands who switched from other AI employee platforms. See why businesses choose Dooza over the competition.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <Link 
                                href="/blog/better-than-sintra-ai" 
                                className="group bg-slate-50 hover:bg-primary-50 border border-slate-200 hover:border-primary-200 rounded-2xl p-6 transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Alternative to</span>
                                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Sintra AI</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Tired of complex setup and confusing pricing? Dooza offers simpler onboarding, transparent costs, and AI employees that actually understand your business.
                                </p>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="flex items-center gap-1 text-green-600">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>5-min setup
                                    </span>
                                    <span className="flex items-center gap-1 text-green-600">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>70% cheaper
                                    </span>
                                </div>
                            </Link>

                            <Link 
                                href="/blog/better-than-marblism" 
                                className="group bg-slate-50 hover:bg-primary-50 border border-slate-200 hover:border-primary-200 rounded-2xl p-6 transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Alternative to</span>
                                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Marblism</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Looking for dedicated AI employees, not just code generation? Dooza is purpose-built for business automation with human support included.
                                </p>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="flex items-center gap-1 text-green-600">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>Free onboarding call
                                    </span>
                                    <span className="flex items-center gap-1 text-green-600">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>We build for you
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className="text-center">
                            <p className="text-slate-500 text-sm">
                                Using another platform? <Link href="/blog" className="text-primary-600 hover:underline font-medium">Read our comparison guides</Link> or <a href={CAL_BOOKING_URL} onClick={handleAction} className="text-primary-600 hover:underline font-medium">book a free migration call</a>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {homeFaqData.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                                    <p className="text-slate-600">
                                        {item.answer}
                                        {item.links && item.links.map((link, i) => (
                                            <span key={i}> <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">{link.text}</a>.</span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-24 bg-primary-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8">We are ready to work.<br /><span className="opacity-90">Are you?</span></h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href={getProductSignupUrl('workforce')} 
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { trackSignupClick('bottom_cta'); trackFBLead('bottom_cta_signup'); }}
                                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
                            >
                                Get Started
                                <ArrowRight className="w-6 h-6" />
                            </a>
                            <a 
                                href={CAL_BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { trackDemoClick('bottom_cta'); trackFBSchedule(); }}
                                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-xl transition-all"
                            >
                                <Calendar className="w-6 h-6" />
                                Book Free Setup
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
