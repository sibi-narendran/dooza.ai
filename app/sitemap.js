import { blogPosts } from '../lib/blogData';
import { industryPages } from '../lib/industryData';
import { SITE_URL } from '../lib/site';

export default function sitemap() {
    // Static pages
    const staticPages = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/studio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/partners`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/alternatives`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/industries`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/author`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // Dynamic blog pages
    const blogPages = blogPosts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.modifiedDate || post.date),
        changeFrequency: 'monthly',
        priority: 0.8,
        images: post.image ? [`${SITE_URL}${post.image}`] : [],
    }));

    // Dynamic industry pages
    const industryPageEntries = industryPages.map((page) => ({
        url: `${SITE_URL}/industries/${page.slug}`,
        lastModified: new Date(page.modifiedDate || page.date),
        changeFrequency: 'monthly',
        priority: 0.8,
        images: page.image ? [`${SITE_URL}${page.image}`] : [],
    }));

    return [...staticPages, ...blogPages, ...industryPageEntries];
}
