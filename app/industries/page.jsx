'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BottomCTA from '../../components/BottomCTA';
import { ArrowRight, Clock, Building2, Stethoscope, Home, Briefcase, ShoppingBag, Wrench, Scale, GraduationCap } from 'lucide-react';
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
            icon: Stethoscope,
            name: 'Healthcare & Medical',
            description: 'AI employees for doctors, dentists, and medical practices',
            slug: 'seo-for-doctors-dentists',
            benefits: ['HIPAA-aware content', 'Google Business Profile management', 'Patient acquisition']
        },
        {
            icon: Home,
            name: 'Real Estate',
            description: 'AI employees for real estate agents and brokerages',
            slug: 'ai-for-real-estate-agents',
            benefits: ['24/7 lead response', 'Listing content creation', 'Social media automation']
        },
        {
            icon: Briefcase,
            name: 'Small Business',
            description: 'AI employees for SMBs and entrepreneurs',
            slug: 'small-business-marketing-tools',
            benefits: ['All-in-one marketing', 'Cost-effective automation', 'No technical skills needed']
        },
        {
            icon: ShoppingBag,
            name: 'E-commerce',
            description: 'AI employees for online stores and retailers',
            slug: 'content-marketing-tools',
            benefits: ['Product descriptions', 'SEO optimization', 'Email marketing']
        },
        {
            icon: Scale,
            name: 'Legal Services',
            description: 'AI employees for law firms and attorneys',
            slug: 'ai-employees-transforming-small-business',
            benefits: ['Client intake automation', 'Content marketing', 'Lead qualification']
        },
        {
            icon: Wrench,
            name: 'Home Services',
            description: 'AI employees for contractors, plumbers, electricians',
            slug: 'seo-tools-small-business',
            benefits: ['Local SEO', 'Review management', 'Appointment booking']
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <Building2 size={16} />
                            <span>Industry Solutions</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            AI Employees for <span className="text-primary-600">Every Industry</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Whether you're a doctor, real estate agent, or small business owner, Dooza's AI employees
                            adapt to your industry's unique needs. Get specialized automation without specialized prices.
                        </p>
                    </div>
                </div>
            </div>

            {/* Industry Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Choose Your Industry</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {industries.map((industry, idx) => {
                        const post = blogPosts.find(p => p.slug === industry.slug);
                        return (
                            <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                                    <industry.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.name}</h3>
                                <p className="text-slate-600 mb-4">{industry.description}</p>

                                <ul className="space-y-2 mb-6">
                                    {industry.benefits.map((benefit, bidx) => (
                                        <li key={bidx} className="flex items-center gap-2 text-sm text-slate-700">
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                {post && (
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
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

                {/* Coming Soon */}
                <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">More Industry Guides Coming Soon</h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                        We're creating detailed guides for more industries including legal services,
                        accounting, restaurants, fitness studios, and more. Sign up to be notified.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <span className="px-4 py-2 bg-slate-200 text-slate-600 rounded-full text-sm">Law Firms</span>
                        <span className="px-4 py-2 bg-slate-200 text-slate-600 rounded-full text-sm">Accounting</span>
                        <span className="px-4 py-2 bg-slate-200 text-slate-600 rounded-full text-sm">Restaurants</span>
                        <span className="px-4 py-2 bg-slate-200 text-slate-600 rounded-full text-sm">Fitness & Gyms</span>
                        <span className="px-4 py-2 bg-slate-200 text-slate-600 rounded-full text-sm">Insurance</span>
                    </div>
                </div>
            </div>

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "AI Employees for Every Industry",
                        "description": "Discover how Dooza AI employees help businesses in healthcare, real estate, small business, and more. Industry-specific automation guides.",
                        "url": `${SITE_URL}/industries`,
                        "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": industries.map((industry, idx) => ({
                                "@type": "ListItem",
                                "position": idx + 1,
                                "name": `AI Employees for ${industry.name}`,
                                "url": `${SITE_URL}/blog/${industry.slug}`
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
