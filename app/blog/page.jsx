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
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Dooza Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog | AI Automation Insights & Resources',
        description: 'Expert insights on AI employees, business automation, and scaling your operations.',
        images: [`${SITE_URL}/og-image.png`],
    },
};

// CollectionPage schema for blog listing
const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Dooza Blog",
    "description": "Expert insights on AI employees, business automation, and scaling your operations",
    "url": `${SITE_URL}/blog`,
    "mainEntity": {
        "@type": "ItemList",
        "itemListElement": blogPosts.map((post, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${SITE_URL}/blog/${post.slug}`,
            "name": post.title
        }))
    }
};

export default function Blog() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
            />
            <BlogPage />
        </>
    );
}
