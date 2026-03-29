import { Suspense } from 'react';
import BlogPage from './BlogContent';
import { blogPosts } from '../../lib/blogData';
import { supabaseServer } from '../../lib/supabaseServer';
import { dbToPost } from '../../lib/blogTransform';
import { SITE_URL } from '../../lib/site';

export const revalidate = 60;

export const metadata = {
    title: 'Dooza Blog — Proven AI Automation Strategies [2026]',
    description: 'Actionable guides on AI employees, business automation, and scaling with AI. Real results, not theory. Updated weekly with the latest strategies and case studies.',
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
            .select('id, slug, title, meta_description, tags, image_url, content_html, source, created_at')
            .order('created_at', { ascending: false });

        if (error || !data) return [];
        return data.map(dbToPost);
    } catch {
        return [];
    }
}

export default async function Blog() {
    const dynamicPosts = await getDynamicPosts();

    // Merge static + dynamic, deduplicate by slug (static wins)
    const staticSlugs = new Set(blogPosts.map(p => p.slug));
    const uniqueDynamic = dynamicPosts.filter(p => !staticSlugs.has(p.slug));
    const allPosts = [...blogPosts, ...uniqueDynamic];

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
            "numberOfItems": allPosts.length,
            "itemListElement": allPosts.map((post, index) => ({
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
        "blogPost": allPosts.map(post => ({
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([blogListSchema, blogSchema, breadcrumbSchema])
                }}
            />
            <Suspense fallback={<BlogLoadingSkeleton />}>
                <BlogPage posts={allPosts} />
            </Suspense>
        </>
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
