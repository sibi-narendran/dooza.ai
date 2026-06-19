import { blogPosts } from '../lib/blogData';
import { industryPages } from '../lib/industryData';
import { agentPages } from '../lib/agentData';
import { SITE_URL } from '../lib/site';
import { automationSeoPageSlugs } from '../lib/seoAutomationPages';
import { supabaseServer } from '../lib/supabaseServer';

const pageDate = (date) => new Date(`${date}T00:00:00.000Z`);

const dedupeByUrl = (entries) => {
    const seen = new Set();

    return entries.filter((entry) => {
        if (seen.has(entry.url)) {
            return false;
        }

        seen.add(entry.url);
        return true;
    });
};

export default async function sitemap() {
    // Static pages
    const staticPages = [
        {
            url: SITE_URL,
            lastModified: pageDate('2026-04-16'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/studio`,
            lastModified: pageDate('2026-03-29'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/workflow`,
            lastModified: pageDate('2026-06-15'),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${SITE_URL}/deployment`,
            lastModified: pageDate('2026-05-26'),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${SITE_URL}/pricing`,
            lastModified: pageDate('2026-06-13'),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/partners`,
            lastModified: pageDate('2026-01-17'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: pageDate('2026-03-29'),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/alternatives`,
            lastModified: pageDate('2026-04-20'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/dooza-vs-sintra`,
            lastModified: pageDate('2026-04-14'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/dooza-vs-marblism`,
            lastModified: pageDate('2026-04-13'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/sintra-alternatives`,
            lastModified: pageDate('2026-04-20'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ai-solutions-for-business`,
            lastModified: pageDate('2026-03-31'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/customer-support-automation-agency`,
            lastModified: pageDate('2026-06-16'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/marblism-alternatives`,
            lastModified: pageDate('2026-04-20'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/industries`,
            lastModified: pageDate('2026-06-13'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/industries/customer-support`,
            lastModified: pageDate('2026-06-13'),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/industries/law-firms`,
            lastModified: pageDate('2026-06-16'),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified: pageDate('2026-02-09'),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: pageDate('2026-03-29'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/terms`,
            lastModified: pageDate('2026-02-09'),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // Static blog pages
    const blogPages = blogPosts
        .filter((post) => !post.noindex)
        .map((post) => ({
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.modifiedDate || post.date),
            changeFrequency: 'monthly',
            priority: 0.8,
            images: post.image ? [`${SITE_URL}${post.image}`] : [],
        }));

    // Dynamic blog pages from Supabase
    let dynamicBlogPages = [];
    try {
        const { data } = await supabaseServer
            .from('blog_articles')
            .select('slug, image_url, created_at');

        if (data) {
            const staticSlugs = new Set(blogPosts.map(p => p.slug));
            dynamicBlogPages = data
                .filter(p => !staticSlugs.has(p.slug))
                .map((post) => ({
                    url: `${SITE_URL}/blog/${post.slug}`,
                    lastModified: new Date(post.created_at),
                    changeFrequency: 'monthly',
                    priority: 0.8,
                    images: post.image_url ? [post.image_url] : [],
                }));
        }
    } catch {
        // Supabase unavailable — skip dynamic posts
    }

    // Dynamic industry pages
    const industryPageEntries = industryPages.map((page) => ({
        url: `${SITE_URL}/industries/${page.slug}`,
        lastModified: new Date(page.modifiedDate || page.date),
        changeFrequency: 'monthly',
        priority: 0.8,
        images: page.image ? [`${SITE_URL}${page.image}`] : [],
    }));

    // Agent landing pages
    const agentPageEntries = agentPages.map((page) => ({
        url: `${SITE_URL}/agents/${page.slug}`,
        lastModified: new Date(page.modifiedDate || page.date),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const automationSeoPageEntries = automationSeoPageSlugs.map((slug) => ({
        url: `${SITE_URL}/${slug}`,
        lastModified: pageDate('2026-06-19'),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return dedupeByUrl([
        ...staticPages,
        ...automationSeoPageEntries,
        ...blogPages,
        ...dynamicBlogPages,
        ...industryPageEntries,
        ...agentPageEntries,
    ]);
}
