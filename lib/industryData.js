// Industry solution page data
export const industryPages = [
    {
        slug: 'real-estate',
        title: 'AI Sales Agent for Real Estate: Follow Up on Every Lead, 24/7',
        metaDescription: "Fast follow-up helps you reach a lead before another agent does. Dooza's AI sales agent replies at any hour, qualifies leads, and books showings — while you sleep.",
        keywords: ['AI sales agent for real estate', 'real estate AI lead follow up', 'real estate lead nurturing AI', 'automated real estate follow up', 'AI real estate assistant'],
        image: '/industries/real-estate.png',
        imageAlt: 'AI sales agent following up on real estate leads 24/7',
        date: '2026-02-23',
        modifiedDate: '2026-02-23',
        faqData: [
            { question: "Can it integrate with my MLS/CRM?", answer: "Yes, it works with popular real estate CRMs and can pull property data." },
            { question: "Does it qualify leads before handing them off?", answer: "Yes, it asks budget, timeline, location, and property type questions." },
            { question: "Can it handle multiple inquiries simultaneously?", answer: "Yes. It can hold many conversations at once, so a new lead does not wait for the last one to finish." },
            { question: "What about open house follow-ups?", answer: "It can text/email every open house visitor within minutes of them signing in." },
            { question: "Is it better than hiring an ISA?", answer: "It depends on your volume. The AI agent replies at any hour, never takes PTO, and can handle many conversations at once; a human ISA is still better at relationship calls. Dooza pricing depends on the product, and every Dooza product starts with a refundable pilot: 100% refund within 14 days." }
        ]
    },
    {
        slug: 'dispatchers',
        title: 'AI Employee for Dispatchers: Automate Your Entire Dispatch Operation',
        seoTitle: 'AI Employee for Dispatchers',
        metaDescription: "Dooza's AI employee runs your whole dispatch desk: calls, scheduling, tracking, emails, and paperwork. 24/7, from day one.",
        keywords: ['AI employee for dispatchers', 'dispatch automation', 'truck dispatcher AI', 'freight dispatch automation', 'AI for trucking dispatch', 'pharma dispatch automation', 'owner operator dispatch AI'],
        image: '/industries/truck-dispatch-ai-employee.png',
        imageAlt: 'AI employee automating calls, scheduling, tracking, and paperwork for a dispatch business',
        date: '2026-08-02',
        modifiedDate: '2026-08-03',
        faqData: [
            { question: "Is it just an answering service?", answer: "No. Calls are one task. It also schedules, tracks drivers, sends updates, handles email, and does the paperwork." },
            { question: "Can it handle pharma or medical dispatch?", answer: "It can handle the scheduling and status side of time-critical deliveries, following the rules you set. It is not offered as a HIPAA service, so patient information should stay in your HIPAA-covered systems." },
            { question: "What happens in an emergency?", answer: "It flags urgent calls in the message it takes for you, using the rules you set. Routine work waits." },
            { question: "Will drivers and customers know it's AI?", answer: "It sounds natural and professional, representing your brand on every interaction." },
            { question: "How fast can it start?", answer: "A Dooza engineer scopes it on a free 30-minute call. We set up phone answering on your line with you during the pilot; custom agents for the rest of the desk are live in days." }
        ]
    },
    {
        slug: 'insurance-agents',
        title: 'AI Answering Service for Independent Insurance Agencies',
        seoTitle: 'AI Answering Service for Independent Insurance Agencies',
        metaDescription: "AI answering service for insurance agencies, set up by Dooza: quote and claim calls captured, coverage questions left to your licensed staff. Refundable pilot.",
        keywords: ['AI answering service for insurance agents', 'independent insurance agent AI', 'insurance agency phone answering', 'AI receptionist insurance agency', 'insurance quote call capture', 'insurance after hours answering service'],
        date: '2026-08-06',
        modifiedDate: '2026-10-09',
        faqData: [
            { question: "Can an answering service give quotes or answer coverage questions for my agency?", answer: "No, and it shouldn't. In most states only licensed staff may quote, compare products, interpret coverage or bind. Utica National's E&O guidance says unlicensed CSRs \"should not recommend, interpret, or discuss coverages with clients,\" and Florida rule 69B-222.060 bars unlicensed staff from \"interpreting policies or coverages.\" Dooza scripts the agent to collect the details and leave coverage questions to your licensed agent. Rules vary by state; check yours." },
            { question: "How much does an answering service for an insurance agency cost?", answer: "Published AI receptionist plans run from $0 to $199 a month, and 100 calls a month costs about $49 to $213 with AI versus $395 to $1,380 with a human answering service (our check of 23 services' own pricing pages, Oct 6-9, 2026). Dooza's pricing depends on the product and call volume, and every Dooza product starts with a refundable pilot: 100% refund within 14 days. Our AI receptionist cost calculator compares vendors at your call volume." },
            { question: "Does it work with Applied Epic, HawkSoft or EZLynx?", answer: "Not natively today. Dooza's agent takes a message for each call, and you or your CSR log it in your agency management system. If automatic write-back into your AMS is a must-have, vendors such as Sonant and AgentZap say they offer it; check which records they write for your system." },
            { question: "What happens when a client calls after hours to report a claim?", answer: "It takes the first notice: name, policy number, date and place of loss, what happened and whether anyone is hurt, and flags it as urgent in the message it takes for you. It doesn't comment on whether the loss is covered; that stays with you and the carrier." },
            { question: "AI answering service or a live answering service: which is better for an insurance agency?", answer: "A live service is the better pick if you need Spanish, warm transfers or recorded calls today; Dooza's agent is English only and takes messages. AI answers at any hour without per-minute operator rates and asks the same intake questions on every call. Either way, coverage questions should go to your licensed staff." },
            { question: "Will callers know they're talking to AI?", answer: "They should. We recommend saying so in the greeting, for example \"You've reached Smith Insurance's virtual assistant.\"" },
            { question: "How do we get started?", answer: "Book a free 30-minute call. A Dooza engineer scopes the pilot with you: your lines of business, the questions for quotes and claims, and what counts as urgent. Dooza sets it up on your existing number during a refundable pilot, with a 100% refund within 14 days." }
        ]
    }
];

// Helper function to get FAQ schema for industry pages
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

// Helper function to get Service schema
export const generateServiceSchema = (page, siteUrl = 'https://www.dooza.ai') => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": page.title,
    "description": page.metaDescription,
    "provider": {
        "@type": "Organization",
        "name": "Dooza",
        "url": siteUrl,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/logo.png`
        }
    },
    "url": `${siteUrl}/industries/${page.slug}`,
    ...(page.image ? { "image": `${siteUrl}${page.image}` } : {}),
    // No prices outside /pricing: describe the refundable pilot instead.
    "offers": {
        "@type": "Offer",
        "name": "Refundable pilot",
        "description": "Refundable pilot, 100% refund within 14 days. Pricing depends on the product; see https://www.dooza.ai/pricing.",
        "availability": "https://schema.org/InStock"
    }
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
