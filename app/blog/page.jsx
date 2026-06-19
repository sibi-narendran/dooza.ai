import { Suspense } from 'react';
import Link from 'next/link';
import BlogPage from './BlogContent';
import { blogPosts } from '../../lib/blogData';
import { supabaseServer } from '../../lib/supabaseServer';
import { dbToPost } from '../../lib/blogTransform';
import { SITE_URL } from '../../lib/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const revalidate = 60;

export const metadata = {
    title: 'Dooza Blog — Proven AI Automation Strategies [2026]',
    description: 'Actionable guides on AI employees, business automation, SEO, support, and scaling with AI. Real examples and updated strategies.',
    keywords: ['AI employees blog', 'business automation insights', 'AI agents tips', 'productivity automation', 'AI automation guide', 'Sintra AI comparison', 'Marblism alternative'],
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
        title: 'Dooza Blog — Proven AI Automation Strategies [2026]',
        description: 'Actionable guides on AI employees, business automation, and scaling with AI. Real results, not theory.',
        url: `${SITE_URL}/blog`,
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Blog — Proven AI Automation Strategies [2026]',
        description: 'Actionable guides on AI employees, business automation, and scaling with AI. Real results, not theory.',
        images: [`${SITE_URL}/logo.png`],
    },
};

async function getDynamicPosts() {
    try {
        const { data, error } = await supabaseServer
            .from('blog_articles')
            .select('id, slug, title, meta_description, tags, image_url, source, created_at')
            .order('created_at', { ascending: false });

        if (error || !data) return [];
        return data.map(dbToPost);
    } catch {
        return [];
    }
}

function toBlogPreview(post) {
    return {
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        author: post.author,
        date: post.date,
        modifiedDate: post.modifiedDate,
        readTime: post.readTime,
        readTimeMinutes: post.readTimeMinutes,
        category: post.category,
        tags: post.tags || [],
        image: post.image || null,
        imageAlt: post.imageAlt || post.title,
        slug: post.slug,
        noindex: post.noindex,
    };
}

export default async function Blog() {
    const dynamicPosts = await getDynamicPosts();

    // Merge static + dynamic, deduplicate by slug (static wins)
    const staticSlugs = new Set(blogPosts.map(p => p.slug));
    const uniqueDynamic = dynamicPosts.filter(p => !staticSlugs.has(p.slug));
    const allPosts = [...blogPosts, ...uniqueDynamic].map(toBlogPreview);
    const visiblePosts = allPosts.filter((post) => !post.noindex);

    // CollectionPage schema for blog listing
    const blogListSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Dooza Blog - AI Automation Insights",
        "description": "Expert insights on AI employees, business automation, and scaling your operations. Guides on Sintra AI alternatives, medical SEO, and more.",
        "url": `${SITE_URL}/blog`,
        "isPartOf": {
            "@type": "WebSite",
            "name": "Dooza",
            "url": SITE_URL
        },
        "about": [
            "AI Employees",
            "Business Automation",
            "AI Agents",
            "SEO for Medical Practices",
            "Productivity Software Comparisons"
        ],
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": visiblePosts.length,
            "itemListElement": visiblePosts.map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/blog/${post.slug}`,
                "name": post.title,
                "description": post.excerpt
            }))
        }
    };

    // Blog schema for structured content
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Dooza Blog",
        "description": "Expert insights on AI employees, business automation, and scaling operations with AI",
        "url": `${SITE_URL}/blog`,
        "publisher": {
            "@type": "Organization",
            "name": "Dooza",
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/logo.png`
            }
        },
        "blogPost": visiblePosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `${SITE_URL}/blog/${post.slug}`,
            "datePublished": post.date,
            "dateModified": post.modifiedDate || post.date,
            "author": {
                "@type": "Organization",
                "name": post.author
            },
            "publisher": {
                "@type": "Organization",
                "name": "Dooza",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${SITE_URL}/logo.png`
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${post.slug}`
            },
            "image": post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/logo.png`,
            "keywords": post.tags?.join(', ')
        }))
    };

    // Breadcrumb schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${SITE_URL}/blog`
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([blogListSchema, blogSchema, breadcrumbSchema])
                }}
            />
            <Navbar />
            <section className="pt-24 pb-8 md:pt-32 md:pb-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
                        <span className="text-2xl">📚</span>
                        <span className="text-sm font-medium text-primary-700">Insights & Resources</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Dooza Blog
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        Expert insights on AI employees, business automation, and scaling your operations with intelligent agents.
                    </p>
                </div>
            </section>
            <Suspense fallback={<BlogLoadingSkeleton />}>
                <BlogPage posts={visiblePosts} />
            </Suspense>
            <BlogArchiveLinks posts={visiblePosts} />
            <Footer />
        </div>
    );
}

function BlogArchiveLinks({ posts }) {
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

    if (sortedPosts.length === 0) return null;

    return (
        <section className="px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="all-articles-heading">
            <div className="mx-auto max-w-7xl border-t border-slate-200 pt-10">
                <div className="mb-6 max-w-2xl">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                        Article archive
                    </p>
                    <h2 id="all-articles-heading" className="text-2xl font-extrabold tracking-tight text-slate-950">
                        All AI automation articles
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        Browse every Dooza guide on AI employees, workflow automation, lead generation, customer support, and SEO.
                    </p>
                </div>
                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group rounded-lg border border-slate-100 bg-white px-4 py-3 text-sm font-semibold leading-5 text-slate-700 shadow-sm transition hover:border-primary-200 hover:text-primary-700 hover:shadow-md"
                        >
                            {post.title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Loading skeleton for blog page
function BlogLoadingSkeleton() {
    return (
        <div className="min-h-screen bg-white">
            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="h-12 w-48 bg-slate-200 rounded-full mx-auto mb-6 animate-pulse" />
                    <div className="h-16 w-96 bg-slate-200 rounded mx-auto mb-6 animate-pulse" />
                    <div className="h-6 w-80 bg-slate-100 rounded mx-auto animate-pulse" />
                </div>
            </div>
        </div>
    );
}
