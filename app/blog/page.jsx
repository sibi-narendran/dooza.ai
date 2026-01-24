import { Suspense } from 'react';
import BlogPage from './BlogContent';
import { blogPosts } from '../../lib/blogData';
import { SITE_URL } from '../../lib/site';

export const metadata = {
    title: 'Blog | AI Automation Insights & Resources',
    description: 'Expert insights on AI employees, business automation, and scaling your operations. Learn how to automate your business with AI.',
    keywords: ['AI employees blog', 'business automation insights', 'AI agents tips', 'productivity automation', 'AI automation guide', 'Sintra AI comparison', 'Marblism alternative'],
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
        title: 'Blog | AI Automation Insights & Resources',
        description: 'Expert insights on AI employees, business automation, and scaling your operations.',
        url: `${SITE_URL}/blog`,
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog | AI Automation Insights & Resources',
        description: 'Expert insights on AI employees, business automation, and scaling your operations.',
        images: [`${SITE_URL}/logo.png`],
    },
};

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
        "numberOfItems": blogPosts.length,
        "itemListElement": blogPosts.map((post, index) => ({
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
    "blogPost": blogPosts.map(post => ({
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

export default function Blog() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([blogListSchema, blogSchema, breadcrumbSchema])
                }}
            />
            <Suspense fallback={<BlogLoadingSkeleton />}>
                <BlogPage />
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
