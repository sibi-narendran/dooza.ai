'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight, Clock, Users, BookOpen, Award, Linkedin, Twitter, Globe } from 'lucide-react';
import { blogPosts } from '../../lib/blogData';
import { SITE_URL } from '../../lib/site';

export default function AuthorPage() {
    // Get all posts by Dooza Team
    const authorPosts = blogPosts.filter(post => post.author === 'Dooza Team');

    // Group by category
    const postsByCategory = authorPosts.reduce((acc, post) => {
        if (!acc[post.category]) acc[post.category] = [];
        acc[post.category].push(post);
        return acc;
    }, {});

    const teamMembers = [
        {
            name: 'Dooza AI Team',
            role: 'Content & Research',
            bio: 'Our content team combines AI expertise with marketing knowledge to create actionable guides for small businesses. Every article is researched, fact-checked, and designed to help you grow your business with AI.',
            expertise: ['AI Automation', 'Small Business Marketing', 'SEO', 'Content Strategy'],
            image: '/team/dooza-team.png'
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                                <Users size={64} />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                    Dooza Team
                                </h1>
                                <p className="text-lg text-slate-600 mb-4">
                                    Content & Research Team at Dooza
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                                        {authorPosts.length} Articles Published
                                    </span>
                                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                                        AI & Automation Experts
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">About Our Team</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                The Dooza content team is dedicated to helping small businesses understand and leverage AI automation.
                                We research, test, and write about AI tools, marketing strategies, and business automation to help
                                entrepreneurs save time and grow their businesses.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Every article we publish is thoroughly researched with citations from industry leaders like HubSpot,
                                Content Marketing Institute, Semrush, and more. We believe in providing actionable, honest advice—not
                                just promoting our product.
                            </p>

                            <div className="border-t border-slate-200 pt-6">
                                <h3 className="font-bold text-slate-900 mb-3">Areas of Expertise</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['AI Employees', 'Marketing Automation', 'SEO', 'Content Marketing', 'Small Business', 'Lead Generation', 'Social Media', 'Email Marketing'].map((skill, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles by Category */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-primary-600" />
                    Articles by Category
                </h2>

                {Object.entries(postsByCategory).map(([category, posts]) => (
                    <div key={category} className="mb-12">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            {category}
                            <span className="text-sm font-normal text-slate-500">({posts.length} articles)</span>
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map(post => (
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
                                        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>
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
                ))}
            </div>

            {/* E-E-A-T Signals */}
            <div className="bg-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Content Standards</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                <Award size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Research-Backed</h3>
                            <p className="text-slate-600 text-sm">
                                Every statistic and claim is backed by credible sources including industry research,
                                academic studies, and reports from trusted organizations.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Regularly Updated</h3>
                            <p className="text-slate-600 text-sm">
                                We regularly review and update our content to ensure accuracy.
                                Each article shows its last modified date for transparency.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                                <Users size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Review</h3>
                            <p className="text-slate-600 text-sm">
                                Our content is reviewed by AI and marketing experts to ensure
                                technical accuracy and practical applicability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Dooza Team",
                            "description": "Content & Research Team at Dooza, creating actionable guides for small businesses on AI automation, marketing, and SEO.",
                            "url": `${SITE_URL}/author`,
                            "logo": `${SITE_URL}/logo.png`,
                            "sameAs": [
                                "https://twitter.com/dooza_ai",
                                "https://linkedin.com/company/dooza"
                            ],
                            "knowsAbout": [
                                "AI Automation",
                                "Marketing Automation",
                                "SEO",
                                "Content Marketing",
                                "Small Business Marketing"
                            ]
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Articles by Dooza Team",
                        "numberOfItems": authorPosts.length,
                        "itemListElement": authorPosts.map((post, idx) => ({
                            "@type": "ListItem",
                            "position": idx + 1,
                            "url": `${SITE_URL}/blog/${post.slug}`,
                            "name": post.title
                        }))
                    })
                }}
            />

            <Footer />
        </div>
    );
}
