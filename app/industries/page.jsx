'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BottomCTA from '../../components/BottomCTA';
import { ArrowRight, Building2, Check, Clock, Sparkles } from 'lucide-react';
import { blogPosts } from '../../lib/blogData';
import { SITE_URL } from '../../lib/site';

export default function IndustriesPage() {
    // Filter industry guide posts
    const industryPosts = blogPosts.filter(post =>
        post.category === 'Industry Guide' || post.tags?.some(tag =>
            tag.includes('Real Estate') || tag.includes('Doctor') || tag.includes('Dentist') || tag.includes('Healthcare')
        )
    );

    const industries = [
        {
            name: 'Salons & Beauty',
            category: 'Appointments',
            description: 'AI receptionist that books appointments, sends reminders, and never misses a call',
            industrySlug: 'salons',
            image: '/blog/ai-receptionist-for-salons.png',
            imageAlt: 'Salon professional helping a client while AI handles incoming appointment calls',
            benefits: ['24/7 appointment booking', 'Stylist-specific scheduling', 'SMS reminders & no-show reduction']
        },
        {
            name: 'Trades',
            category: 'Local services',
            description: 'AI answering service that captures every call and lead — even when your team is on the job',
            industrySlug: 'trades',
            image: '/industries/home-services-ai-automation.png',
            imageAlt: 'Trade professional using AI to organize customer calls, appointments, and routes',
            benefits: ['Capture every lead', 'Emergency routing', 'Service and estimate booking']
        },
        {
            name: 'Real Estate',
            category: 'Sales',
            description: 'AI sales agent that follows up on every lead 24/7 and books showings',
            industrySlug: 'real-estate',
            image: '/blog/ai-for-real-estate-agents.png',
            imageAlt: 'Real-estate professional and AI assistant in front of a home for sale',
            benefits: ['Instant lead response', 'Lead qualification', 'Showing scheduling']
        },
        {
            name: 'Healthcare & Medical',
            category: 'Patient growth',
            description: 'Workflow automation for doctors, dentists, and medical practices',
            slug: 'seo-for-doctors-dentists',
            image: '/blog/seo-for-doctors-dentists.png',
            imageAlt: 'Healthcare professionals using digital automation to support patient acquisition',
            benefits: ['Patient-friendly content', 'Google Business Profile management', 'Patient acquisition']
        },
        {
            name: 'Small Business',
            category: 'Growth',
            description: 'Managed AI workflows for SMBs and entrepreneurs',
            slug: 'small-business-marketing-tools',
            image: '/blog/small-business-marketing-tools.png',
            imageAlt: 'Small-business owner using AI tools to manage marketing and daily operations',
            benefits: ['All-in-one marketing', 'Cost-effective automation', 'No technical skills needed']
        },
        {
            name: 'Customer Support',
            category: 'Customer experience',
            description: 'Managed AI for store calls, quote requests, and repetitive customer support',
            industrySlug: 'customer-support',
            image: '/industries/customer-support-ai-employee.png',
            imageAlt: 'Customer-support professional working with an AI assistant across phone, email, and chat',
            benefits: ['Phone call handling', 'Quote request workflows', 'Email and chat support']
        },
        {
            name: 'Legal Services',
            category: 'Client intake',
            description: 'AI workflows for law firm intake, onboarding, documents, and client follow-up',
            industrySlug: 'law-firms',
            image: '/blog/ai-legal-assistant.png',
            imageAlt: 'Legal professional using an AI assistant for client intake and document workflows',
            benefits: ['Client intake automation', 'Attorney approval steps', 'Matter admin workflows']
        },
        {
            name: 'Truck Dispatchers',
            category: 'Logistics',
            description: 'AI employee that runs the whole dispatch desk: calls, scheduling, tracking, email, and paperwork',
            industrySlug: 'dispatchers',
            image: '/industries/truck-dispatch-ai-employee.png',
            imageAlt: 'Truck dispatcher coordinating drivers, routes, calls, and delivery paperwork with AI',
            benefits: ['24/7 calls & texts', 'Scheduling & tracking', 'Paperwork handled']
        },
        {
            name: 'Insurance Agents',
            category: 'Policy service',
            description: 'AI answering service that captures every quote request, handles policy questions, and escalates urgent claims 24/7',
            industrySlug: 'insurance-agents',
            image: '/blog/liberate-alternative-insurance-agencies.png',
            imageAlt: 'Insurance agency using AI to handle policyholder calls and quote requests',
            benefits: ['Quote request capture', 'Urgent claim escalation', 'After-hours call answering']
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-slate-100 bg-[#f7fbf9] pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="absolute -left-32 top-8 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
                            <Building2 size={16} />
                            Industry solutions
                        </div>
                        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            AI employees built for the way <span className="text-primary-600">your industry works</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                            Start with a proven workflow for your field. We connect it to your tools, train it on your process, and keep it running.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
                            {['9 focused industries', 'Managed setup', 'Human approval controls'].map((item) => (
                                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                                    <Check className="h-4 w-4 text-primary-600" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-600">Choose your industry</p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Start with a workflow that already fits</h2>
                        <p className="mt-3 max-w-2xl text-slate-600">Each solution is adapted to the calls, handoffs, approvals, and follow-up your team handles every day.</p>
                    </div>
                    <Link
                        href="/ai-solutions-for-business"
                        className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                    >
                        Other solutions
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                    {industries.map((industry) => {
                        const linkHref = industry.industrySlug
                            ? `/industries/${industry.industrySlug}`
                            : `/blog/${industry.slug}`;
                        return (
                            <Link
                                key={industry.name}
                                href={linkHref}
                                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 last:lg:col-start-2 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-slate-200/70"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                    <Image
                                        src={industry.image}
                                        alt={industry.imageAlt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                                    <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm backdrop-blur">
                                        {industry.category}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <h3 className="text-xl font-bold text-slate-950">{industry.name}</h3>
                                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{industry.description}</p>

                                    <ul className="mt-5 space-y-2.5">
                                        {industry.benefits.slice(0, 2).map((benefit) => (
                                            <li key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
                                                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                                                    <Check className="h-3 w-3" />
                                                </span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-primary-700">
                                        Explore this solution
                                        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-50 transition group-hover:bg-primary-100">
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Industry Guide Articles */}
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Industry Guides</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {industryPosts.map(post => (
                        <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex">
                            {post.image && (
                                <div className="w-1/3 bg-slate-100 overflow-hidden shrink-0">
                                    <img
                                        src={post.image}
                                        alt={post.imageAlt || post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <div className="p-5 flex flex-col justify-center">
                                <span className="inline-block px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full mb-3 w-fit">
                                    {post.category}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1 text-primary-600 text-sm font-semibold hover:gap-2 transition-all"
                                    >
                                        Read Guide
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Other industries */}
                <div className="relative mt-16 overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 md:flex md:items-center md:justify-between md:gap-10">
                    <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary-500/25 blur-3xl" />
                    <div className="relative max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                            <Sparkles className="h-4 w-4" />
                            Built around your workflow
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Don’t see your industry?</h3>
                        <p className="mt-3 leading-7 text-slate-300">
                            Tell us what your team repeats every day. We’ll design an AI employee around your tools, rules, and approval process.
                        </p>
                    </div>
                    <Link
                        href="/ai-solutions-for-business"
                        className="relative mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-50 md:mt-0"
                    >
                        Explore other solutions
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Managed AI Automation by Industry",
                        "description": "Discover how Dooza helps stores, firms, local service businesses, and SMBs automate repetitive customer work with managed workflows.",
                        "url": `${SITE_URL}/industries`,
                        "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": industries.map((industry, idx) => ({
                                "@type": "ListItem",
                                "position": idx + 1,
                                "name": `Managed AI for ${industry.name}`,
                                "url": industry.industrySlug
                                    ? `${SITE_URL}/industries/${industry.industrySlug}`
                                    : `${SITE_URL}/blog/${industry.slug}`
                            }))
                        }
                    })
                }}
            />

            <BottomCTA />
            <Footer />
        </div>
    );
}
