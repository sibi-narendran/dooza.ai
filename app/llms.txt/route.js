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
        description: 'Dooza homepage — forward deployed AI engineers who deploy and run AI for small businesses.',
    },
    {
        title: 'Workforce',
        url: `${SITE_URL}/workforce`,
        description: 'AI employees for email, social, SEO, calls, and leads — from $49/mo.',
    },
    {
        title: 'Workflow',
        url: `${SITE_URL}/workflow`,
        description: 'Workflow automation with approvals, traces, and tests.',
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
    {
        title: 'Brand Resources',
        url: `${SITE_URL}/brand`,
        description: 'Official logos, colors, boilerplate copy, and company details for proposals, decks, and press.',
    },
];

const brandAssets = [
    {
        title: 'Dooza icon logo (PNG)',
        url: `${SITE_URL}/brand/dooza-icon.png`,
        description: 'The Dooza mark on its own — favicons, avatars, tight spaces.',
    },
    {
        title: 'Dooza wordmark, light backgrounds (PNG)',
        url: `${SITE_URL}/brand/dooza-wordmark-light.png`,
        description: 'Full logo lockup for white/light documents, proposals, and slides.',
    },
    {
        title: 'Dooza wordmark, dark backgrounds (PNG)',
        url: `${SITE_URL}/brand/dooza-wordmark-dark.png`,
        description: 'Full logo lockup for dark slides and dark UI.',
    },
    {
        title: 'Founder photo — Sibi Narendran (JPEG)',
        url: `${SITE_URL}/founder-sibi.jpeg`,
        description: 'Headshot of Sibi Narendran, founder of Dooza. Approved for press and proposals.',
    },
];

const companyFacts = [
    'Legal entity: Adam Laboratory Inc., a Delaware C-Corporation (Dooza.ai is its product)',
    'Registered address: 131 Continental Dr, Suite 305, Newark, DE 19713, United States',
    'Contact: support@dooza.ai',
    'Founder: Sibi Narendran (https://sibinarendran.com)',
    'Brand colors: Dooza Teal #0F766E (primary), Teal Bright #0D9488, Ink #0F172A, Warm White #FAF9F7, Signal Amber #F59E0B',
    'Products: Dooza Workforce (AI employees, from $49/mo) and Dooza Agent (approvals, traces, tests)',
    'Boilerplate: Dooza provides forward deployed AI engineers who set up AI employees for small businesses — free to start, pay only to keep it.',
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
        section('Brand Assets (downloadable)', brandAssets),
        '',
        '## Company Facts',
        ...companyFacts.map((fact) => `- ${fact}`),
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
