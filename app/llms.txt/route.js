import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../../lib/site';
import { agentPages } from '../../lib/agentData';
import { blogPosts } from '../../lib/blogData';
import { industryPages } from '../../lib/industryData';
import { supabaseServer } from '../../lib/supabaseServer';

export const revalidate = 3600;

const staticPages = [
    {
        title: 'Home',
        url: SITE_URL,
        description: 'Dooza homepage for AI employees and business automation.',
    },
    {
        title: 'Studio',
        url: `${SITE_URL}/studio`,
        description: 'Build and manage AI employees for business workflows.',
    },
    {
        title: 'Deployment',
        url: `${SITE_URL}/deployment`,
        description: 'Deploy AI employees into business operations.',
    },
    {
        title: 'Pricing',
        url: `${SITE_URL}/pricing`,
        description: 'Dooza pricing and plan information.',
    },
    {
        title: 'Partners',
        url: `${SITE_URL}/partners`,
        description: 'Dooza partner program.',
    },
    {
        title: 'Blog',
        url: `${SITE_URL}/blog`,
        description: 'AI employees, automation, SEO, GEO, and small business guides.',
    },
    {
        title: 'Alternatives',
        url: `${SITE_URL}/alternatives`,
        description: 'Comparisons between Dooza and other AI/business automation tools.',
    },
    {
        title: 'Dooza vs Sintra',
        url: `${SITE_URL}/dooza-vs-sintra`,
        description: 'Comparison of Dooza and Sintra AI.',
    },
    {
        title: 'Dooza vs Marblism',
        url: `${SITE_URL}/dooza-vs-marblism`,
        description: 'Comparison of Dooza and Marblism.',
    },
    {
        title: 'Sintra Alternatives',
        url: `${SITE_URL}/sintra-alternatives`,
        description: 'Alternatives to Sintra AI.',
    },
    {
        title: 'Marblism Alternatives',
        url: `${SITE_URL}/marblism-alternatives`,
        description: 'Alternatives to Marblism.',
    },
    {
        title: 'AI Solutions for Business',
        url: `${SITE_URL}/ai-solutions-for-business`,
        description: 'AI solutions for small business workflows.',
    },
    {
        title: 'Industries',
        url: `${SITE_URL}/industries`,
        description: 'Industry-specific AI employee use cases.',
    },
    {
        title: 'About',
        url: `${SITE_URL}/about`,
        description: 'About Dooza.',
    },
];

const cleanText = (value = '') => String(value).replace(/\s+/g, ' ').trim();

const formatLink = ({ title, url, description }) => {
    const safeTitle = cleanText(title);
    const safeDescription = cleanText(description);

    if (!safeDescription) {
        return `- [${safeTitle}](${url})`;
    }

    return `- [${safeTitle}](${url}): ${safeDescription}`;
};

const section = (title, links) => {
    if (!links.length) {
        return '';
    }

    return [`## ${title}`, ...links.map(formatLink)].join('\n');
};

async function getDynamicBlogPages(staticSlugs) {
    try {
        const { data } = await supabaseServer
            .from('blog_articles')
            .select('slug, title, meta_description, created_at');

        if (!data?.length) {
            return [];
        }

        return data
            .filter((post) => post.slug && !staticSlugs.has(post.slug))
            .map((post) => ({
                title: post.title,
                url: `${SITE_URL}/blog/${post.slug}`,
                description: post.meta_description || `Published ${post.created_at?.split('T')[0] || 'recently'}.`,
            }));
    } catch {
        return [];
    }
}

export async function GET() {
    const staticBlogSlugs = new Set(blogPosts.map((post) => post.slug));
    const dynamicBlogPages = await getDynamicBlogPages(staticBlogSlugs);

    const agentLinks = agentPages.map((page) => ({
        title: page.name || page.title,
        url: `${SITE_URL}/agents/${page.slug}`,
        description: page.metaDescription || page.heroDescription || page.role,
    }));

    const industryLinks = industryPages.map((page) => ({
        title: page.title,
        url: `${SITE_URL}/industries/${page.slug}`,
        description: page.metaDescription,
    }));

    const blogLinks = [
        ...blogPosts
            .filter((post) => !post.noindex)
            .map((post) => ({
                title: post.title,
                url: `${SITE_URL}/blog/${post.slug}`,
                description: post.excerpt,
            })),
        ...dynamicBlogPages,
    ];

    const body = [
        `# ${SITE_NAME}`,
        '',
        `> ${SITE_DESCRIPTION}`,
        '',
        'Use this file as a concise map of public Dooza pages for AI assistants, search engines, and retrieval systems.',
        '',
        `Sitemap: ${SITE_URL}/sitemap.xml`,
        `RSS: ${SITE_URL}/rss.xml`,
        '',
        section('Core Pages', staticPages),
        '',
        section('AI Employees', agentLinks),
        '',
        section('Industries', industryLinks),
        '',
        section('Blog Posts', blogLinks),
        '',
    ]
        .filter((part) => part !== null && part !== undefined)
        .join('\n');

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
