// Blog data structure - replace with Supabase integration later
export const blogPosts = [
    {
        id: 1,
        title: 'How AI Employees Are Transforming Small Business Operations in 2026',
        excerpt: 'Discover how AI-powered employees are helping small businesses automate their daily operations, from email management to social media posting.',
        author: 'Dooza Team',
        date: '2026-01-08',
        modifiedDate: '2026-01-10',
        readTime: '7 min read',
        readTimeMinutes: 7,
        category: 'AI Automation',
        tags: ['AI', 'Automation', 'Small Business', 'AI Employees'],
        image: '/blog/ai-employees.png',
        imageAlt: 'AI employees automating small business operations including email, social media, and customer support',
        slug: 'ai-employees-transforming-small-business'
    },
    {
        id: 2,
        title: 'Sintra AI Alternative: Why Businesses Are Switching to Dooza in 2026',
        excerpt: 'Looking for a Sintra AI alternative? Discover why Dooza offers better AI employees with simpler setup, transparent pricing, and superior automation.',
        author: 'Dooza Team',
        date: '2026-01-10',
        modifiedDate: '2026-01-10',
        readTime: '9 min read',
        readTimeMinutes: 9,
        category: 'Comparison',
        tags: ['Sintra AI', 'Sintra AI Alternative', 'AI Employees', 'Comparison'],
        image: '/blog/comparison-general.png',
        imageAlt: 'Comparison between Sintra AI and Dooza AI employees platform showing feature differences',
        slug: 'better-than-sintra-ai'
    },
    {
        id: 3,
        title: 'Marblism Alternative: Why Dooza Beats Marblism for AI Employees',
        excerpt: 'Comparing Marblism vs Dooza for AI employees? See why businesses choose Dooza for more powerful AI agents, better integrations, and transparent pricing.',
        author: 'Dooza Team',
        date: '2026-01-10',
        modifiedDate: '2026-01-10',
        readTime: '8 min read',
        readTimeMinutes: 8,
        category: 'Comparison',
        tags: ['Marblism', 'Marblism Alternative', 'AI Employees', 'Comparison'],
        image: '/blog/comparison-structures.png',
        imageAlt: 'Comparison between Marblism and Dooza showing why Dooza is the better choice for AI employees',
        slug: 'better-than-marblism'
    }
];

// Helper function to get FAQ schema for a blog post
export const generateFAQSchema = (faqItems) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
        }
    }))
});

// Helper function to get breadcrumb schema
export const generateBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        ...(item.url && { "item": item.url })
    }))
});

// Helper function to generate complete Article schema
export const generateArticleSchema = (post, siteUrl = 'https://dooza.ai') => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${siteUrl}${post.image}`,
    "author": {
        "@type": "Organization",
        "name": post.author,
        "url": siteUrl
    },
    "publisher": {
        "@type": "Organization",
        "name": "Dooza",
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/logo.png`
        }
    },
    "datePublished": post.date,
    "dateModified": post.modifiedDate || post.date,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/${post.slug}`
    },
    "timeRequired": `PT${post.readTimeMinutes}M`,
    "articleSection": post.category,
    "keywords": post.tags.join(', ')
});
