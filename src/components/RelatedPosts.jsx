import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const RelatedPosts = ({ currentSlug, category, tags = [], maxPosts = 2 }) => {
    // Find related posts based on category and tags, excluding current post
    const relatedPosts = blogPosts
        .filter(post => post.slug !== currentSlug)
        .map(post => {
            let score = 0;
            // Same category gets higher score
            if (post.category === category) score += 3;
            // Matching tags add to score
            const matchingTags = (post.tags || []).filter(tag => tags.includes(tag));
            score += matchingTags.length;
            return { ...post, relevanceScore: score };
        })
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, maxPosts);

    if (relatedPosts.length === 0) return null;

    return (
        <section className="scroll-mt-28 mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map(post => (
                    <article
                        key={post.id}
                        className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
                    >
                        {post.image && (
                            <div className="aspect-video bg-slate-100 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    width="400"
                                    height="225"
                                    loading="lazy"
                                    width="400"
                                    height="225"
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
                                    to={`/blog/${post.slug}`}
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
        </section>
    );
};

export default RelatedPosts;
