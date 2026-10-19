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
        description: 'Dooza Managed (an AI admin assistant checked by a real person): $200/month, first 7 days free, start by card. Custom builds are scoped by a Dooza engineer on a free 30-minute call and start as a refundable pilot: 100% refund within 14 days. Industry offers are priced on their own industry pages.',
    },
    {
        title: 'AI admin assistant for small business (Dooza Managed)',
        url: `${SITE_URL}/ai-admin-assistant`,
        description: 'Dooza Managed: email Dooza your written admin tasks (email drafts and follow-ups, documents and forms, spreadsheets and data entry, research); AI does the work, a person checks it, done by the next business day, weekly report. $200/month, first 7 days free, cancel anytime. Not covered: phone calls or texts, logins to your accounts, payments, legal/tax/insurance advice. Compared with US VA services (published plans from $390/month for 10 hours, checked Oct 14, 2026).',
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
        description: 'Marblism pricing ($24/mo billed yearly or $44/mo monthly for all 7 AI employees, checked 2026-10) and 7 alternatives compared on pricing, integrations and setup: Dooza, Sintra AI, Motion, NoimosAI, Lindy AI, Relevance AI and Cubeo AI.',
    },
    {
        title: 'AI Solutions for Business',
        url: `${SITE_URL}/ai-solutions-for-business`,
        description: 'AI solutions for small business workflows.',
    },
    {
        title: 'Trucking insurance leads near renewal, every Monday (for insurance agencies)',
        url: `${SITE_URL}/trucking-insurance-leads`,
        description: 'Weekly list for agencies that write commercial trucking: trucking companies in their state with liability renewing in 30-60 days (current insurer and limit from FMCSA BMC-91X filings, estimated renewal date) plus new authorities from the last 7 days. Exclusive states on request; first week free, then $129 per 4 weeks. Free weekly counts for every US state (renewals in 30-60 days, new authorities, top 3 current insurers; Oct 19, 2026: 6,876 renewals, 1,773 new authorities nationwide). Data: FMCSA open data.',
    },
    {
        title: 'Trucking insurance market weekly: which insurers gain and lose US trucking companies, by state',
        url: `${SITE_URL}/trucking-insurance-market`,
        description: 'Weekly count from public FMCSA BMC-91X liability filings, insurers grouped by parent: new filings (brand-new carriers vs won from another insurer group), filings ended, net, for the US and each state. Week of Oct 11-17, 2026: 1,864 new filings (1,240 brand-new carriers), 1,369 ended; Progressive gained 805, GEICO/Berkshire Hathaway 178, CarrierGuard RRG 83 (most won from other insurers: 51). Updated every Monday; quotable with a link.',
    },
    {
        title: 'Best trucking insurance leads 2026: 9 sources compared (prices from vendors\' own sites)',
        url: `${SITE_URL}/best-trucking-insurance-leads`,
        description: 'Comparison for insurance agencies of trucking insurance lead sources, prices read on each vendor\'s own page on October 13, 2026: Trucking Leads ($399-$999/mo + $12-$18 per quote request), Get Insure Leads (aged from $12, exclusive $110, live transfer $225, appointment $325), Carrier IQ ($149-$249/mo), TruckLeads.io ($85-$300/mo), PollyAI ($39/mo + from $40/state), Truckr ($49-$349/mo), TruckInsureLeads and Commercial Truck Quotes (prices not published), Dooza ($129 per 4 weeks; exclusive states on request). Lead types, who each suits, 14-day test checklist.',
    },
    { title: 'Texas notary renewal checklist (first renewal free)', url: `${SITE_URL}/texas-notary-renewal`, description: 'For Texas notaries whose commission is expiring: the renewal steps from the Texas Secretary of State in order with the notary\'s own dates (notary education requirement in the SOS Notary Portal, surety bond from a licensed bonding company, application and state fee in SOSPortal, oath before another notary; commissions last 4 years). The notary does the portal steps; Dooza never files, logs in or asks for SSN/DL. First renewal free, then $20 per renewal (each other notary in the office $20).' },
    { title: '1099-NEC prep for CPA firms (first client free)', url: `${SITE_URL}/1099-prep-for-cpa-firms`, description: 'For US CPA and EA firms: send two QuickBooks Online reports (Vendor Contact List + Transaction List by Vendor, Tax ID column removed); next business day get who likely needs a 1099-NEC under the $2,000 threshold for payments after 2025 (IRS i1099mec), who is missing a W-9, and ready-to-send W-9 request emails. Dooza prepares, the firm reviews and files; no logins, no client contact. First client free, then $99 per client (up to 50 payees, +$5 per payee above). 2026 forms due Feb 1, 2027.' },
    { title: 'California WARN notices with under 60 days notice, weekly', url: `${SITE_URL}/california-warn-notices-list`, description: 'For California employment law firms: each week, the WARN notices from the California EDD report that gave workers under 60 days notice (company, site, county, workers, notice and layoff dates, days short, per-company rollup). Sep 17 to Oct 14, 2026: 138 notices processed, 49 short (1,805 workers). A short notice is not by itself a violation. $299 a month, paid first. Weekly sheet.' },
    { title: 'Florida trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/fl`, description: 'For agencies that write trucking in Florida: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 203 fleets in the October 12 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'Texas trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/tx`, description: 'For agencies that write trucking in Texas: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 582 fleets in the October 12 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'California trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ca`, description: 'For agencies that write trucking in California: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 548 fleets in the October 12 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'New York trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ny`, description: 'For agencies that write trucking in New York: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 136 fleets in the October 10 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'Illinois trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/il`, description: 'For agencies that write trucking in Illinois: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 471 fleets in the October 10 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'Oklahoma trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ok`, description: 'For agencies that write trucking in Oklahoma: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 69 fleets in the October 10 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'Kansas trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ks`, description: 'For agencies that write trucking in Kansas: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 105 fleets in the October 13 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'Massachusetts trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ma`, description: 'For agencies that write trucking in Massachusetts: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 111 fleets in the October 13 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'Kentucky trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ky`, description: 'For agencies that write trucking in Kentucky: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 88 fleets in the October 10 list. $129 every 4 weeks, 7-day free trial, cancel any time.' },
    { title: 'New Connecticut business list, weekly with email', url: `${SITE_URL}/connecticut-new-business-list`, description: 'For Connecticut insurance agents, CPAs, payroll and IT firms: each Monday, every business registered in their county the week before (name, type, date, town, address, the business email given at filing; not verified), from the CT business registry on data.ct.gov. 971 new CT registrations Oct 10-16, 2026 (rejected filings not counted). 5 sample rows, then $129 every 4 weeks.' },
    { title: 'Certificates of insurance for agencies (first 5 free)', url: `${SITE_URL}/certificates-for-agencies`, description: 'For US insurance agencies: email a certificate request (holder name and address, what they need, any additional insured or waiver wording) with the policy or dec page; get a finished ACORD 25 back the same business day (requests in by 2 pm Central, Mon-Fri). The agency checks and issues it under its own license; Dooza never binds or changes coverage, signs as producer, sends to the holder or adds wording not in the policy. First 5 free, then $5 per certificate or $50 for 10.' },
    { title: 'New trucking authority leads for insurance agents (reach new MC authorities before insurance is filed)', url: `${SITE_URL}/trucking-new-authority-leads`, description: 'For agents who write trucking: 1,773 US trucking companies applied for authority in the week to Oct 19, 2026 with no liability filing yet (FMCSA open data, Dooza weekly run). FMCSA deadline: insurer filing within 20 days of FMCSA Register publication, then 60 days before dismissal (about 80 days, not 90). Q3 2026: 22,204 new interstate for-hire carriers, 64% with one power unit. Weekly per-state list: first week free, then $129 per 4 weeks; 5 free sample rows.' },
    {
        title: 'Insurance lead cost per policy calculator (exclusive vs shared, 2026 prices with sources)',
        url: `${SITE_URL}/insurance-lead-cost-calculator`,
        description: 'Free calculator for insurance agents: lead price, close rate and commission give cost per sold policy and break-even close rate for exclusive vs shared leads; 2026 lead prices (Medicare tiers, 27-vendor range, Meta and Google cost per lead) linked to sources, checked October 10, 2026.',
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
        description: 'AI receptionist guide page for contractors and trades. Dooza does not currently sell an AI receptionist or phone answering; current offer: Dooza Managed (AI admin assistant checked by a real person) at /pricing.',
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
        description: 'Entry prices, billing units and overage for 24 AI receptionist and answering services, checked on each vendor’s pricing page, plus what 100 calls a month costs on each.',
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
    'Services (done for you): Dooza Managed (AI admin assistant checked by a real person), custom AI agents scoped on a free 30-minute call, industry offers on their industry pages',
    'Offer: every product starts with a refundable pilot. The pilot is paid; ask within 14 days for a 100% refund. A Dooza engineer scopes it on a free 30-minute call.',
    `Pricing: Dooza Managed $200/month, first 7 days free (${SITE_URL}/pricing); custom builds scoped on a free 30-minute call (${SITE_URL}/book); industry offers priced on their industry pages`,
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
            .filter((post) => !researchPages.some((r) => r.url === `${SITE_URL}/blog/${post.slug}`)) // listed once, under Research and data
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
        `- General prices: ${SITE_URL}/pricing. Industry-specific offers are priced only on their own industry pages.`,
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
