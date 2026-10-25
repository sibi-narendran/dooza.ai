import { blogPosts } from '../lib/blogData';
import { agentPages } from '../lib/agentData';
import { SITE_URL } from '../lib/site';
import { automationSeoPageSlugs } from '../lib/seoAutomationPages';
import { customerServiceToolSlugs } from '../lib/customerServiceAutomation';
import { supabaseServer } from '../lib/supabaseServer';
import mergedBlogPosts from '../lib/mergedBlogPosts.json';

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
            lastModified: pageDate('2026-07-23'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/brand`,
            lastModified: pageDate('2026-07-16'),
            changeFrequency: 'monthly',
            priority: 0.4,
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
            lastModified: pageDate('2026-10-07'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/dooza-vs-sintra`,
            lastModified: pageDate('2026-10-07'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/dooza-vs-marblism`,
            lastModified: pageDate('2026-10-07'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/dooza-vs-profound`,
            lastModified: pageDate('2026-10-07'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/profound-alternatives`,
            lastModified: pageDate('2026-10-07'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/customer-service-outsourcing`,
            lastModified: pageDate('2026-09-30'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/customer-service-outsourcing-for-small-business`,
            lastModified: pageDate('2026-09-30'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/ecommerce-customer-service-outsourcing`,
            lastModified: pageDate('2026-09-30'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/customer-service-virtual-assistant`,
            lastModified: pageDate('2026-09-30'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/ecommerce-virtual-assistant`,
            lastModified: pageDate('2026-09-30'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/shopify-virtual-assistant`,
            lastModified: pageDate('2026-09-30'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/gorgias-alternatives`,
            lastModified: pageDate('2026-10-07'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ai-employee-for-small-business`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/done-for-you-ai-agents`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/new-trucking-companies`,
            lastModified: pageDate('2026-10-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/sintra-alternatives`,
            lastModified: pageDate('2026-10-07'),
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
            url: `${SITE_URL}/automated-customer-support`,
            lastModified: pageDate('2026-06-24'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/marblism-alternatives`,
            lastModified: pageDate('2026-10-07'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/insurance-agents`,
            lastModified: pageDate('2026-10-25'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/truck-dispatchers`,
            lastModified: pageDate('2026-10-25'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/workflow-automation`,
            lastModified: pageDate('2026-07-05'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ai-customer-support`,
            lastModified: pageDate('2026-07-05'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ai-receptionist`,
            lastModified: pageDate('2026-09-17'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/customer-support-ai`,
            lastModified: pageDate('2026-07-05'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/hvac-answering-service`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/plumbing-answering-service`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/garage-door-answering-service`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/window-tint-answering-service`,
            lastModified: pageDate('2026-10-22'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/smith-ai-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ruby-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/relevance-ai-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/lindy-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ambs-call-center-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/map-communications-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/answering-service-care-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/posh-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/voicenation-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/moneypenny-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/patlive-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/abby-connect-alternatives`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ai-receptionist-cost-calculator`,
            lastModified: pageDate('2026-10-06'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/exclusive-trucking-insurance-leads`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/trucking-insurance-leads`,
            lastModified: pageDate('2026-10-12'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/texas-notary-renewal`,
            lastModified: pageDate('2026-10-16'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/1099-prep-for-cpa-firms`,
            lastModified: pageDate('2026-10-16'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/california-warn-notices-list`,
            lastModified: pageDate('2026-10-17'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/texas-new-business-list`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/new-trucking-companies/tx`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/new-trucking-companies/fl`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/new-trucking-companies/ca`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/new-trucking-companies/in`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/new-trucking-companies/oh`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/fl`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/tx`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/ca`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/ny`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/il`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/ok`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/ks`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/ma`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/ky`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/oh`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/pa`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/in`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-renewals/ga`,
            lastModified: pageDate('2026-10-21'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/connecticut-new-business-list`,
            lastModified: pageDate('2026-10-17'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/certificates-for-agencies`,
            lastModified: pageDate('2026-10-16'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-insurance-market`,
            lastModified: pageDate('2026-10-13'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/best-trucking-insurance-leads`,
            lastModified: pageDate('2026-10-13'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/carrier411-alternative`,
            lastModified: pageDate('2026-10-13'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/truckerdb-alternative`,
            lastModified: pageDate('2026-10-13'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/carrieriq-alternative`,
            lastModified: pageDate('2026-10-13'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/trucking-new-authority-leads`,
            lastModified: pageDate('2026-10-13'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/insurance-lead-cost-calculator`,
            lastModified: pageDate('2026-10-10'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ai-2027-tracker`,
            lastModified: pageDate('2026-10-18'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/ai-slop-checker`,
            lastModified: pageDate('2026-07-28'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: pageDate('2026-10-09'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified: pageDate('2026-07-21'),
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
            url: `${SITE_URL}/anti-spam-policy`,
            lastModified: pageDate('2026-10-17'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/terms`,
            lastModified: pageDate('2026-07-21'),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/sms-opt-in`,
            lastModified: pageDate('2026-07-21'),
            changeFrequency: 'monthly',
            priority: 0.4,
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
                .filter(p => !staticSlugs.has(p.slug) && !mergedBlogPosts[p.slug])
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

    const customerServiceToolPageEntries = customerServiceToolSlugs.map((slug) => ({
        url: `${SITE_URL}/${slug}`,
        lastModified: pageDate('2026-06-20'),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return dedupeByUrl([
        ...staticPages,
        ...automationSeoPageEntries,
        ...customerServiceToolPageEntries,
        ...blogPages,
        ...dynamicBlogPages,
        ...agentPageEntries,
    ]);
}
