'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BottomCTA from '../../components/BottomCTA';
import { ArrowRight, CheckCircle2, Clock, Star, Zap, DollarSign } from 'lucide-react';
import { blogPosts } from '../../lib/blogData';
import { SITE_URL } from '../../lib/site';

export default function AlternativesPage() {
    // Filter comparison posts
    const comparisonPosts = blogPosts.filter(post =>
        post.category === 'Comparison' || post.tags?.includes('Comparison')
    );

    const competitors = [
        {
            name: 'Sintra AI',
            slug: 'better-than-sintra-ai',
            tagline: 'Complex setup, limited automation',
            doozaAdvantage: 'Simpler setup, 6 AI employees, transparent pricing'
        },
        {
            name: 'Marblism',
            slug: 'better-than-marblism',
            tagline: 'Developer-focused, technical setup',
            doozaAdvantage: 'No-code setup, instant AI team deployment'
        },
        {
            name: 'Motion App',
            slug: 'better-than-motion',
            tagline: '$348/year for limited AI features',
            doozaAdvantage: '$348/year for 6 full AI employees'
        },
        {
            name: 'Surfer SEO vs Ahrefs',
            slug: 'surfer-seo-vs-ahrefs',
            tagline: 'Expensive SEO tools that require manual work',
            doozaAdvantage: 'AI SEO employee that does the work for you'
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            Dooza <span className="text-primary-600">Alternatives</span> & Comparisons
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            See how Dooza compares to other AI tools and marketing platforms.
                            Get 6 AI employees for $29/month—less than most competitors charge for a single feature.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-medium">6 AI Employees</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                                <DollarSign className="w-5 h-5" />
                                <span className="font-medium">$29/month</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                                <Zap className="w-5 h-5" />
                                <span className="font-medium">24/7 Automation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Compare Dooza to Popular Alternatives</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {competitors.map((competitor, idx) => {
                        const post = blogPosts.find(p => p.slug === competitor.slug);
                        return (
                            <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                                            Dooza vs {competitor.name}
                                        </h3>
                                        <p className="text-sm text-slate-500">{competitor.tagline}</p>
                                    </div>
                                    <Star className="w-6 h-6 text-yellow-500" />
                                </div>

                                <div className="bg-green-50 border border-green-200 p-4 rounded-xl mb-4">
                                    <p className="text-sm font-medium text-green-800">
                                        <strong>Dooza Advantage:</strong> {competitor.doozaAdvantage}
                                    </p>
                                </div>

                                {post && (
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                                    >
                                        Read Full Comparison
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* All Comparison Articles */}
                <h2 className="text-3xl font-bold text-slate-900 mb-8">All Comparison Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {comparisonPosts.map(post => (
                        <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                            {post.image && (
                                <div className="aspect-video bg-slate-100 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.imageAlt || post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <div className="p-5">
                                <span className="inline-block px-2 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full mb-3">
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
                                        Read
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Dooza Alternatives & Comparisons",
                        "description": "Compare Dooza AI employees to other marketing automation tools. See detailed comparisons with Sintra AI, Marblism, Motion, and more.",
                        "url": `${SITE_URL}/alternatives`,
                        "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": comparisonPosts.map((post, idx) => ({
                                "@type": "ListItem",
                                "position": idx + 1,
                                "name": post.title,
                                "url": `${SITE_URL}/blog/${post.slug}`
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
