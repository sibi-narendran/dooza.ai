'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '@/lib/blogData';

// Define related post mappings for better internal linking
const relatedPostMappings = {
    'ai-employees-transforming-small-business': ['marketing-automation-tools', 'small-business-marketing-tools', 'ai-copywriting-tools'],
    'better-than-sintra-ai': ['better-than-marblism', 'better-than-motion', 'ai-employees-transforming-small-business'],
    'better-than-marblism': ['better-than-sintra-ai', 'better-than-motion', 'ai-employees-transforming-small-business'],
    'ai-agents-vs-agentic-ai': ['ai-copywriting-tools', 'marketing-automation-tools', 'ai-employees-transforming-small-business'],
    'surfer-seo-vs-ahrefs': ['seo-tools-small-business', 'seo-for-doctors-dentists', 'content-marketing-tools'],
    'better-than-motion': ['better-than-sintra-ai', 'better-than-marblism', 'marketing-automation-tools'],
    'seo-for-doctors-dentists': ['seo-tools-small-business', 'small-business-marketing-tools', 'content-marketing-tools'],
    'ai-for-real-estate-agents': ['small-business-marketing-tools', 'marketing-automation-tools', 'ai-copywriting-tools'],
    'ai-copywriting-tools': ['content-marketing-tools', 'small-business-marketing-tools', 'ai-employees-transforming-small-business'],
    'small-business-marketing-tools': ['seo-tools-small-business', 'marketing-automation-tools', 'content-marketing-tools'],
    'seo-tools-small-business': ['surfer-seo-vs-ahrefs', 'seo-for-doctors-dentists', 'small-business-marketing-tools'],
    'marketing-automation-tools': ['ai-employees-transforming-small-business', 'small-business-marketing-tools', 'content-marketing-tools'],
    'content-marketing-tools': ['ai-copywriting-tools', 'marketing-automation-tools', 'small-business-marketing-tools'],
    'what-is-openclaw': ['what-is-clawdbot', 'what-is-moltbot', 'moltbot-alternatives'],
    'what-is-clawdbot': ['what-is-openclaw', 'what-is-moltbot', 'moltbot-alternatives'],
    'what-is-moltbot': ['what-is-openclaw', 'what-is-clawdbot', 'moltbot-alternatives'],
    'moltbot-alternatives': ['what-is-openclaw', 'what-is-clawdbot', 'what-is-moltbot'],
    'ai-employees-openclaw-business': ['what-is-openclaw', 'ai-employees-transforming-small-business', 'ai-employees-vs-virtual-assistants']
};

const InternalLinks = ({ currentSlug, position = 'sidebar' }) => {
    const relatedSlugs = relatedPostMappings[currentSlug] || [];
    const relatedPosts = relatedSlugs
        .map(slug => blogPosts.find(p => p.slug === slug))
        .filter(Boolean)
        .slice(0, 3);

    if (relatedPosts.length === 0) return null;

    if (position === 'inline') {
        return (
            <div className="my-8 bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary-600" />
                    You Might Also Like
                </h4>
                <ul className="space-y-3">
                    {relatedPosts.map(post => (
                        <li key={post.id}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                <span className="line-clamp-1">{post.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // Sidebar style
    return (
        <div className="bg-primary-50 border border-primary-100 p-4 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3 text-sm">Related Reads</h4>
            <ul className="space-y-2">
                {relatedPosts.map(post => (
                    <li key={post.id}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm text-primary-600 hover:text-primary-700 font-medium line-clamp-2 block"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InternalLinks;

// Export mapping for use in other components
export { relatedPostMappings };
