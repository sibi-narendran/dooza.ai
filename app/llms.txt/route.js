import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../../lib/site';
import { agentPages } from '../../lib/agentData';
import { blogPosts } from '../../lib/blogData';
import { industryPages } from '../../lib/industryData';
import { supabaseServer } from '../../lib/supabaseServer';
import mergedBlogPosts from '../../lib/mergedBlogPosts.json';

export const revalidate = 3600;

const staticPages = [
    {
        title: 'Home',
        url: SITE_URL,
        description: 'Dooza Agents: the AI agentic platform. Custom AI agents built and maintained by Dooza engineers. Starts with a refundable pilot: 100% refund within 14 days.',
    },
    {
        title: 'Pricing',
        url: `${SITE_URL}/pricing`,
        description: 'Dooza pricing is custom: scoped by a Dooza engineer on a free 30-minute call. Every engagement starts as a refundable pilot: 100% refund within 14 days. No contracts.',
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
        title: 'Generative Engine Optimization (GEO) Services',
        url: `${SITE_URL}/generative-engine-optimization`,
        description: 'Done-for-you GEO: Ranky, Dooza\'s AI SEO & Visibility Employee, gets businesses cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
    },
    {
        title: 'Dooza vs Profound',
        url: `${SITE_URL}/dooza-vs-profound`,
        description: 'Comparison of Dooza and Profound (tryprofound.com): enterprise AI visibility analytics vs AI visibility tracking plus done-for-you GEO execution.',
    },
    {
        title: 'Profound Alternatives',
        url: `${SITE_URL}/profound-alternatives`,
        description: 'Best Profound alternatives for AI visibility, AEO, and GEO in 2026.',
    },
    {
        title: 'Customer Service Outsourcing Guide',
        url: `${SITE_URL}/customer-service-outsourcing`,
        description: 'Customer service and customer support outsourcing in 2026: the four models, costs per hour and per ticket, pros and cons, and how to start.',
    },
    {
        title: 'Customer Service Outsourcing for Small Business',
        url: `${SITE_URL}/customer-service-outsourcing-for-small-business`,
        description: 'How small businesses outsource customer service without minimum seats or long contracts.',
    },
    {
        title: 'Ecommerce Customer Service Outsourcing',
        url: `${SITE_URL}/ecommerce-customer-service-outsourcing`,
        description: 'What online stores should outsource, 2026 costs, and BPO vs VA vs AI plus human.',
    },
    {
        title: 'Customer Service Virtual Assistant',
        url: `${SITE_URL}/customer-service-virtual-assistant`,
        description: 'What a customer service VA does and costs, where to hire, and when AI plus human review is the better hire.',
    },
    {
        title: 'Ecommerce Virtual Assistant',
        url: `${SITE_URL}/ecommerce-virtual-assistant`,
        description: 'Ecommerce VA tasks, 2026 costs, and which store tasks to delegate vs automate.',
    },
    {
        title: 'Shopify Virtual Assistant',
        url: `${SITE_URL}/shopify-virtual-assistant`,
        description: 'Shopify VA tasks, costs, safe staff permissions, and AI for Shopify support.',
    },
    {
        title: 'Gorgias Alternatives',
        url: `${SITE_URL}/gorgias-alternatives`,
        description: 'Eight Gorgias alternatives compared on September 2026 pricing and AI fees.',
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
        title: 'Smith.ai Alternatives',
        url: `${SITE_URL}/smith-ai-alternatives`,
        description: 'Smith.ai costs $300/mo for 30 live-answered calls (checked October 8, 2026). 6 alternatives (PATLive, Ruby, Smith.ai AI, Goodcall, My AI Front Desk, Dooza) with what 60 calls a month costs on each.',
    },
    {
        title: 'AI Solutions for Business',
        url: `${SITE_URL}/ai-solutions-for-business`,
        description: 'AI solutions for small business workflows.',
    },
    {
        title: 'Free AI Slop Checker',
        url: `${SITE_URL}/ai-slop-checker`,
        description: 'Free tool: paste text and flag 20+ patterns that make writing sound AI-generated. Private, runs in your browser.',
    },
    {
        title: 'Dooza Grow',
        url: `${SITE_URL}/grow`,
        description: 'Done-for-you growth engine for small businesses: AI agents for SEO and GEO, paid ads, website and lead conversion, set up by Dooza engineers.',
    },
    {
        title: 'AI Customer Support (done for you)',
        url: `${SITE_URL}/customer-support-ai`,
        description: 'AI customer support workflows for email, chat and tickets, built and run by Dooza Agents and AI employees.',
    },
    {
        title: 'Automated Customer Service',
        url: `${SITE_URL}/automated-customer-support`,
        description: 'Done-for-you automated customer service: Dooza sets up AI support workflows and connects your tools.',
    },
    {
        title: 'Customer Service Automation Calculator',
        url: `${SITE_URL}/best-customer-service-automation-software`,
        description: 'Estimate support workload and savings from customer service automation.',
    },
    {
        title: 'Customer Service Automation Planner',
        url: `${SITE_URL}/customer-service-automation-solutions`,
        description: 'Plan triage, AI-drafted replies, approvals, CRM updates and reporting for support.',
    },
    {
        title: 'AI Automation Examples',
        url: `${SITE_URL}/ai-automation-examples`,
        description: 'Practical AI automation examples for support, content, SEO, lead generation, email, reporting and operations.',
    },
    {
        title: 'AI Content Automation',
        url: `${SITE_URL}/ai-content-automation`,
        description: 'Plan AI content workflows for blogs, social posts, email campaigns, repurposing, approvals and publishing.',
    },
    {
        title: 'AI Blog Automation',
        url: `${SITE_URL}/ai-blog-automation`,
        description: 'AI blog workflow for keyword research, briefs, drafts, internal links, review, publishing and reporting.',
    },
    {
        title: 'How to Start an AI Automation Agency',
        url: `${SITE_URL}/start-ai-automation-agency`,
        description: 'Package repeatable workflows, choose offers and deliver with Dooza Agents.',
    },
    {
        title: 'Industries',
        url: `${SITE_URL}/industries`,
        description: 'Industry-specific AI employee use cases.',
    },
    {
        title: 'About',
        url: `${SITE_URL}/about`,
        description: 'About Dooza, an AI-native company, and Adam Laboratory Inc.',
    },
    {
        title: 'Brand Resources',
        url: `${SITE_URL}/brand`,
        description: 'Official logos, colors, boilerplate copy, and company details for proposals, decks, and press.',
    },
];

const productPages = [
    {
        title: 'Dooza Agents (AI agentic platform)',
        url: SITE_URL,
        description: 'Custom AI agents built and maintained by Dooza engineers, live in days, with your approval on anything sensitive. Starts with a refundable pilot.',
    },
];

const servicePages = [
    {
        title: 'AI Receptionist',
        url: `${SITE_URL}/ai-receptionist`,
        description: 'Done-for-you AI receptionist for contractors and trades (HVAC, plumbing, electrical, roofing): answers every call in your company name day and night, books jobs on your calendar, confirms the booking with the caller on the call, and takes a message when a caller asks for a person. Set up on your existing line with you during the pilot. English only; not a HIPAA service. Starts with a refundable pilot (100% refund within 14 days); pricing at /pricing.',
    },
    {
        title: 'AI Customer Support',
        url: `${SITE_URL}/ai-customer-support`,
        description: 'Done-for-you AI customer support built and maintained by Dooza engineers.',
    },
    {
        title: 'AI Visibility / GEO',
        url: `${SITE_URL}/generative-engine-optimization`,
        description: 'Done-for-you generative engine optimization so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite your business.',
    },
    {
        title: 'Workflow Automation',
        url: `${SITE_URL}/workflow-automation`,
        description: 'Done-for-you workflow automation across your existing tools.',
    },
    {
        title: 'Industry solutions',
        url: `${SITE_URL}/industries`,
        description: 'AI products and services packaged for specific industries.',
    },
];

const researchPages = [
    {
        title: 'New trucking companies per month (FMCSA data)',
        url: `${SITE_URL}/new-trucking-companies`,
        description: 'Monthly count of new interstate for-hire carriers since 2021, by state and fleet size, and the share of each quarterly class that is inactive today. From the FMCSA Company Census, refreshed monthly, free to cite.',
    },    {
        title: 'AI receptionist pricing comparison (23 services, checked October 6–9, 2026)',
        url: `${SITE_URL}/blog/ai-receptionist-pricing`,
        description: 'Entry prices, billing units and overage for 23 AI receptionist and answering services, checked on each vendor’s pricing page, plus what 100 calls a month costs on each.',
    },
    {
        title: 'AI receptionist cost calculator',
        url: `${SITE_URL}/ai-receptionist-cost-calculator`,
        description: 'Free calculator: enter calls per month and minutes per call to compare 13 AI receptionists and 5 human answering services on published list prices.',
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
    'What Dooza is: an AI-native company that builds AI products and services for small businesses',
    'Product: Dooza Agents (AI agentic platform with custom AI agents built and maintained by Dooza engineers)',
    'Services (done for you): AI Receptionist, AI Customer Support, AI Visibility / GEO, Workflow Automation, industry solutions',
    'Offer: every product starts with a refundable pilot. The pilot is paid; ask within 14 days for a 100% refund. A Dooza engineer scopes it on a free 30-minute call.',
    `Pricing: custom, scoped on a free 30-minute call (${SITE_URL}/book); no public price list`,
    'Integrations: 1,000+ app integrations',
    `Boilerplate: ${SITE_DESCRIPTION}`,
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
            .filter((post) => post.slug && !staticSlugs.has(post.slug) && !mergedBlogPosts[post.slug])
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
    })).concat([
        {
            title: 'AI Workflow Automation for Law Firms',
            url: `${SITE_URL}/industries/law-firms`,
            description: 'Dooza helps law firms automate intake, conflict-check prep, onboarding, document collection, client updates, billing reminders, and approvals.',
        },
        {
            title: 'AI Customer Support Automation for Stores',
            url: `${SITE_URL}/industries/customer-support`,
            description: 'Dooza sets up and manages AI that answers phone calls, sends quotes, and handles customer support across email and chat for ecommerce stores and SMBs.',
        },
    ]);

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
        '## Refundable Pilot',
        '- Every Dooza product starts with a refundable pilot: 100% refund within 14 days.',
        '- The pilot is paid. The 30-minute call to scope it is free.',
        `- Prices are listed only at ${SITE_URL}/pricing.`,
        '',
        section('Products', productPages),
        '',
        section('Services (done for you)', servicePages),
        '',
        section('Research and data', researchPages),
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
