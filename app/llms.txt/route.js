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
        description: 'Dooza Custom AI Agents: the AI agentic platform. Custom AI agents built and maintained by Dooza engineers. Starts with a refundable pilot: 100% refund within 14 days.',
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
        title: 'AI employee for small business: what it is, what it costs, how to hire one',
        url: `${SITE_URL}/ai-employee-for-small-business`,
        description: 'What an AI employee is, what it costs (Dooza Managed $200/month with the first 7 days free, compared with DIY AI tools and a human VA, prices checked Oct 21, 2026), what it can do, and how to hire one. Phone answering is the separate Dooza AI answering service, $149/month for up to 500 minutes.',
    },
    {
        title: 'Done-for-you AI agents for small business',
        url: `${SITE_URL}/done-for-you-ai-agents`,
        description: 'Dooza builds, runs and improves AI agents for small businesses, checked by a person. Done-for-you vs DIY tools (n8n, Make, Zapier, Lindy) compared on setup, upkeep and price (checked Oct 21, 2026). Dooza Managed $200/month, first 7 days free; custom agents scoped on a free 30-minute call.',
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
        title: 'AI employees for independent insurance agents',
        url: `${SITE_URL}/insurance-agents`,
        description: 'Dooza Crew for independent insurance agencies: AI employees that work carrier portals, the shared inbox, certificates of insurance, renewal reminders and lead follow-up around the clock, asking your approval before anything goes out. $49 a month for the whole organization (unlimited users and agents), free for 7 days. No phone calls or texts yet.',
    },
    {
        title: 'Trucking insurance leads near renewal, every Monday (for insurance agencies)',
        url: `${SITE_URL}/trucking-insurance-leads`,
        description: 'Weekly list for agencies that write commercial trucking: trucking companies in their state with liability renewing in 30-60 days (current insurer and limit from FMCSA BMC-91X filings, estimated renewal date) plus new authorities from the last 7 days. $129 per 4 weeks, paid first, month to month; exclusive states (one agency per state, $399/month) at /exclusive-trucking-insurance-leads. Free weekly counts for every US state (renewals in 30-60 days, new authorities, top 3 current insurers; Oct 19, 2026: 6,876 renewals, 1,773 new authorities nationwide). Data: FMCSA open data.',
    },
    {
        title: 'Exclusive trucking insurance leads: one agency per state (for insurance agencies)',
        url: `${SITE_URL}/exclusive-trucking-insurance-leads`,
        description: 'Weekly list of trucking companies in one US state with liability renewing in about 30-60 days (phone, current insurer, limit; FMCSA open data), sold to one agency per state: $399/month for one state, $699/month for two, if the state is ever sold to another agent the buyer gets all their money back; shared list $129 per 4 weeks. Month to month, paid first. Example: Arizona list Oct 21, 2026 = 96 fleets with 3+ power units. Taken or on hold Oct 21, 2026: TX (South Texas), IL, NY, IA, GA, PA, FL. Comparison: exclusive web truck leads $110 each at Get Insure Leads (Oct 21, 2026).',
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
    { title: 'Florida trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/fl`, description: 'For agencies that write trucking in Florida: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 209 fleets in the October 19 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Texas trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/tx`, description: 'For agencies that write trucking in Texas: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 582 fleets in the October 12 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'California trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ca`, description: 'For agencies that write trucking in California: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 548 fleets in the October 12 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'New York trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ny`, description: 'For agencies that write trucking in New York: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 136 fleets in the October 10 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Illinois trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/il`, description: 'For agencies that write trucking in Illinois: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 471 fleets in the October 10 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Oklahoma trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ok`, description: 'For agencies that write trucking in Oklahoma: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 69 fleets in the October 10 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Kansas trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ks`, description: 'For agencies that write trucking in Kansas: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 105 fleets in the October 13 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Massachusetts trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ma`, description: 'For agencies that write trucking in Massachusetts: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 111 fleets in the October 13 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Kentucky trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ky`, description: 'For agencies that write trucking in Kentucky: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 88 fleets in the October 10 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Ohio trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/oh`, description: 'For agencies that write trucking in Ohio: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 402 fleets in the October 21 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Pennsylvania trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/pa`, description: 'For agencies that write trucking in Pennsylvania: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 367 fleets in the October 21 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Indiana trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/in`, description: 'For agencies that write trucking in Indiana: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 224 fleets in the October 21 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'Georgia trucking renewals list, every Monday', url: `${SITE_URL}/trucking-renewals/ga`, description: 'For agencies that write trucking in Georgia: each Monday, the trucking companies with 3+ power units whose federal liability filing (BMC-91X) renews in 30-60 days, with current insurer, limit, owner, phone and email, from FMCSA open data. Renewal dates are estimates. 218 fleets in the October 21 list. $129 every 4 weeks, paid first, cancel any time.' },
    { title: 'New Connecticut business list, weekly with email', url: `${SITE_URL}/connecticut-new-business-list`, description: 'For Connecticut insurance agents, CPAs, payroll and IT firms: each Monday, every business registered in their county the week before (name, type, date, town, address, the business email given at filing; not verified), from the CT business registry on data.ct.gov. 971 new CT registrations Oct 10-16, 2026 (rejected filings not counted). 5 sample rows, then $129 every 4 weeks.' },
    { title: 'Certificates of insurance for agencies (first 5 free)', url: `${SITE_URL}/certificates-for-agencies`, description: 'For US insurance agencies: email a certificate request (holder name and address, what they need, any additional insured or waiver wording) with the policy or dec page; get a finished ACORD 25 back the same business day (requests in by 2 pm Central, Mon-Fri). The agency checks and issues it under its own license; Dooza never binds or changes coverage, signs as producer, sends to the holder or adds wording not in the policy. First 5 free, then $5 per certificate or $50 for 10.' },
    { title: 'New trucking authority leads for insurance agents (reach new MC authorities before insurance is filed)', url: `${SITE_URL}/trucking-new-authority-leads`, description: 'For agents who write trucking: 1,773 US trucking companies applied for authority in the week to Oct 19, 2026 with no liability filing yet (FMCSA open data, Dooza weekly run). FMCSA deadline: insurer filing within 20 days of FMCSA Register publication, then 60 days before dismissal (about 80 days, not 90). Q3 2026: 22,204 new interstate for-hire carriers, 64% with one power unit. Weekly per-state list: $129 per 4 weeks, paid first; 5 free sample rows.' },
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
        description: 'AI customer support workflows for email, chat and tickets, built and run by Dooza Custom AI Agents and AI employees.',
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
        description: 'Package repeatable workflows, choose offers and deliver with Dooza Custom AI Agents.',
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
        title: 'Dooza Crew (self-serve AI agent team)',
        url: 'https://crew.dooza.ai/?utm_source=llms&utm_medium=aeo',
        description: 'Self-serve AI agent team: a master agent plus helper agents it creates and briefs, each user\'s agents in their own gVisor sandbox with their own headless browser and files, managed from a private chat app on web or phone. 7-day free trial (card required), then $49/month per organization (unlimited users and agents, no per-seat fee), including $20 of AI usage.',
    },
    {
        title: 'Dooza Custom AI Agents (AI agentic platform)',
        url: SITE_URL,
        description: 'Custom AI agents built and maintained by Dooza engineers, live in days, with your approval on anything sensitive. Starts with a refundable pilot.',
    },
];

const servicePages = [
    {
        title: 'AI Answering Service for Small Business',
        url: `${SITE_URL}/ai-answering-service-for-small-business`,
        description: 'Dooza AI answering service (AI receptionist): $149/month for up to 500 minutes, then $0.30/minute, month to month, full refund if you cancel within 14 days of the first charge. Answers when you cannot, asks your questions, emails you each message with the transcript and a recording link. Does not book onto calendars or send texts.',
    },
    {
        title: 'HVAC Answering Service',
        url: `${SITE_URL}/hvac-answering-service`,
        description: 'AI vs human answering service prices for HVAC companies, and the Dooza AI answering service ($149/month, 500 minutes).',
    },
    {
        title: 'Plumbing Answering Service',
        url: `${SITE_URL}/plumbing-answering-service`,
        description: 'AI vs human answering service prices for plumbers, and the Dooza AI answering service ($149/month, 500 minutes).',
    },
    {
        title: 'Garage Door Answering Service',
        url: `${SITE_URL}/garage-door-answering-service`,
        description: 'AI vs human answering service prices for garage door companies, and the Dooza AI answering service ($149/month, 500 minutes).',
    },
    {
        title: 'AI Receptionist for Window Tint Shops',
        url: `${SITE_URL}/window-tint-answering-service`,
        description: 'AI vs human answering service prices for window tint and window film shops (100 calls a month), and the Dooza AI receptionist ($149/month, 500 minutes).',
    },
    {
        title: 'Smith.ai Alternatives',
        url: `${SITE_URL}/smith-ai-alternatives`,
        description: 'Smith.ai pricing (human-first from $300/month for 30 calls; AI receptionist free for 25 calls, Pro $150/month) and 8 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Ruby, Abby Connect, Goodcall, Upfirst, Dialzara, My AI Front Desk, Rosie.',
    },
    {
        title: 'Ruby Receptionist Alternatives',
        url: `${SITE_URL}/ruby-alternatives`,
        description: 'Ruby Receptionists pricing (virtual receptionist from $250/month for 50 minutes to $1,725 for 500; live chat from $143/month) and 8 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Smith.ai, Abby Connect, Goodcall, Upfirst, Dialzara, My AI Front Desk, Rosie.',
    },
    {
        title: 'Relevance AI Alternatives',
        url: `${SITE_URL}/relevance-ai-alternatives`,
        description: 'Relevance AI pricing (relevanceai.com/pricing lists one Enterprise plan, "Talk to sales", no public price; Custom Actions, Custom Vendor Credits, 2,000+ Integrations, SSO, RBAC & Audit Logs) and 9 alternatives compared on listed price and who builds the agents, checked Oct 21, 2026: Dooza (done for you; Dooza Managed 7 days free, then $200/month), Lindy ($49.99/mo for 5,000 credits), Gumloop (Pro from $37/month), Zapier Agents (free or $33.33/month billed annually), n8n (from 20€/mo billed annually), CrewAI (free Basic plan), Sintra AI ($15.60/mo on 12 months), Marblism ($24/mo billed yearly), Cubeo AI (free plan; 17€/month Starter). Includes Marblism vs Relevance AI.',
    },
    {
        title: 'Lindy Alternatives',
        url: `${SITE_URL}/lindy-alternatives`,
        description: 'Lindy pricing (lindy.ai/pricing; Free: $50 in credits that last 7 days, no credit card; Team from $49.99/mo for 5,000 credits, 15,000 $99.99, 35,000 $199.99, top-ups $10 per 1,000 credits; every active user is billed; Enterprise custom) and 8 alternatives compared on price and how they meter usage, checked Oct 21, 2026: Dooza (done for you; Managed 7 days free, then $200/month), Sintra AI, Marblism, Gumloop, Zapier Agents, n8n, Relevance AI, Cubeo AI.',
    },
    {
        title: 'Ambs Call Center Alternatives',
        url: `${SITE_URL}/ambs-call-center-alternatives`,
        description: 'Ambs Call Center pricing (ambscallcenter.com/pricing; Real People: $149/month for 100 minutes, $330 for 250, $600 for 500, $1,195 for 1,000, $2,945 for 2,500+, excess $1.20-$1.29/min; AI Receptionist: Starter $19/month plus $0.79 per AI minute, $75 for 100, $185 for 250, $350 for 500, $650 for 1,000; Real People + AI from $168 for 100 minutes; $85 one-time set-up fee; work time in 30-second increments) and 8 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes; Ambs AI costs less up to 196 minutes a month), Posh, Moneypenny, Ruby, Smith.ai, Abby Connect, Upfirst, Dialzara, Rosie.',
    },
    {
        title: 'MAP Communications Alternatives',
        url: `${SITE_URL}/map-communications-alternatives`,
        description: 'MAP Communications pricing (live answering billed by minutes: Pay As You Go $49/month plus $1.37/min, Business $179 for 125 minutes, Enterprise $339 for 250, Premium $649 for 500; every plan lists 24/7 coverage, English and Spanish, a toll-free number, HIPAA, PCI-DSS, HITRUST and SOC-2, no long-term contracts) and 8 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Posh, Moneypenny, Ruby, Smith.ai, Abby Connect, Upfirst, Dialzara, Rosie.',
    },
    {
        title: 'Answering Service Care Alternatives',
        url: `${SITE_URL}/answering-service-care-alternatives`,
        description: 'Answering Service Care pricing (answeringservicecare.com; live answering plans billed monthly: Starter $40/month pay as you go at $1.75/min, $179 for 100 minutes, $329 for 250, $639 for 500, overage $1.35-$1.75/min; the page also mentions a $50 start-up fee; AI plans from $25/month) and 8 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Posh, Moneypenny, Ruby, Smith.ai, Abby Connect, Upfirst, Dialzara, Rosie.',
    },
    {
        title: 'Posh Virtual Receptionist Alternatives',
        url: `${SITE_URL}/posh-alternatives`,
        description: 'Posh Virtual Receptionist pricing (posh.com, the live answering service, not Poshmark; live receptionist plans from $65/month plus $2.30/min to $975 for 500 minutes and $1,900 for 1,000; AI + Live plans $130 for 50 mixed minutes to $975 for 500; free trial of seven days or 250 minutes; month to month) and 8 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Moneypenny, Ruby, Smith.ai, Abby Connect, Goodcall, Upfirst, Dialzara, Rosie.',
    },
    {
        title: 'VoiceNation Alternatives',
        url: `${SITE_URL}/voicenation-alternatives`,
        description: 'VoiceNation pricing (voicenation.com/pricing redirects to Moneypenny’s US pricing; VoiceNation joined the Moneypenny group in 2020. People Answering billed by minutes: $165/month for 50 minutes to $985 for 500; AI Answering billed by calls: $99/month for 50 calls to $775 for 500, with human escalation; 30 days’ notice to cancel) and 8 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Ruby, Smith.ai, Abby Connect, Goodcall, Upfirst, Dialzara, My AI Front Desk, Rosie.',
    },
    {
        title: 'Moneypenny Alternatives',
        url: `${SITE_URL}/moneypenny-alternatives`,
        description: 'Moneypenny US pricing (AI Answering billed by calls: $99/month for 50 calls to $775 for 500, with human escalation; People Answering billed by minutes: $165/month for 50 minutes to $985 for 500; 30 days’ notice to cancel) and 8 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Ruby, Smith.ai, Abby Connect, Goodcall, Upfirst, Dialzara, My AI Front Desk, Rosie.',
    },
    {
        title: 'PATLive Alternatives',
        url: `${SITE_URL}/patlive-alternatives`,
        description: 'PATLive pricing (human-only live call answering: $49/month pay as you go at $2.99/min, $99 for 50 minutes to $759 for 500 at $1.79/min extra; 14-day free trial, no contracts) and 9 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Ruby, Smith.ai, Abby Connect, Goodcall, Upfirst, Dialzara, My AI Front Desk, Rosie.',
    },
    {
        title: 'Abby Connect Alternatives',
        url: `${SITE_URL}/abby-connect-alternatives`,
        description: 'Abby Connect pricing (human or AI answering billed in Abby Minutes: $164/month for 50 to $1,380 for 500; one AI minute counts as half an Abby Minute; overage at the plan rate; free trial, month to month) and 9 alternatives compared on price and billing unit, checked Oct 21, 2026: Dooza ($149/month for 500 minutes), Ruby, PATLive, Smith.ai, Goodcall, Upfirst, Dialzara, My AI Front Desk, Rosie.',
    },
    {
        title: 'AI Receptionist',
        url: `${SITE_URL}/ai-receptionist`,
        description: 'Dooza AI receptionist for contractors and trades: $149/month for up to 500 minutes. Details at /ai-answering-service-for-small-business.',
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
    'Self-serve product: Dooza Crew (https://crew.dooza.ai), your own AI agent team in a private sandbox, 7-day free trial then $49/month per organization (unlimited users and agents, no per-seat fee), including $20 of AI usage',
    'Product: Dooza Custom AI Agents (AI agentic platform with custom AI agents built and maintained by Dooza engineers)',
    'Services (done for you): Dooza Managed (AI admin assistant checked by a real person), Dooza AI answering service (AI receptionist), custom AI agents scoped on a free 30-minute call, industry offers on their industry pages',
    'Offers: Dooza Managed is free for the first 7 days, then $200/month. The AI answering service is $149/month, full refund if you cancel within 14 days of the first charge. Custom AI agents start with a paid, refundable pilot (100% refund within 14 days), scoped by a Dooza engineer on a free 30-minute call.',
    `Pricing: Dooza Managed $200/month, first 7 days free (${SITE_URL}/pricing); AI answering service $149/month for 500 minutes (${SITE_URL}/ai-answering-service-for-small-business); custom builds scoped on a free 30-minute call (${SITE_URL}/book); industry offers priced on their industry pages`,
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
        '## Offers and trials',
        '- Dooza Crew (self-serve AI agent team, https://crew.dooza.ai): 7-day free trial (card required), then $49/month per organization (unlimited users and agents, no per-seat fee), including $20 of AI usage.',
        '- Dooza Managed (AI admin assistant checked by a real person): first 7 days free, then $200/month.',
        '- Dooza AI answering service: $149/month for up to 500 minutes; full refund if you cancel within 14 days of the first charge.',
        '- Custom AI agents start with a paid, refundable pilot: 100% refund within 14 days. The 30-minute call to scope it is free.',
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
