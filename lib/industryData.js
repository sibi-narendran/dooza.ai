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
        title: 'Trucking Leads and Booked Quote Calls for Independent Insurance Agencies',
        seoTitle: 'Trucking Insurance Leads for Independent Agencies',
        metaDescription: "Weekly trucking renewal leads for independent insurance agencies. First week free, then $129 per 4 weeks. Booked quote calls too.",
        keywords: ['trucking insurance leads', 'commercial trucking insurance leads', 'insurance agency trucking leads', 'trucking renewal leads', 'insurance appointment setting for agencies'],
        date: '2026-08-06',
        modifiedDate: '2026-10-12',
        offer: { "@type": "Offer", "name": "Weekly trucking renewal list", "price": "129", "priceCurrency": "USD", "description": "Per 4 weeks, after a free first week.", "availability": "https://schema.org/InStock" },
        faqData: [
            { question: "Where does the trucking lead data come from?", answer: "Public FMCSA data on data.transportation.gov: the Company Census (contact details, fleet size), the insurance and authority history files, and the BMC-91X liability filings insurers make for each carrier. We join them every week and keep the companies in your state." },
            { question: "How accurate is the renewal date?", answer: "It is an estimate. FMCSA does not publish policy expiry dates, so we use the next anniversary of the current liability filing's effective date. Some policies run 6 months or are cancelled mid-term, so confirm the date on the call." },
            { question: "Can I have my state to myself?", answer: "Yes, exclusive states are available: book a free 30-minute call. The standard weekly list is first week free, then $129 every 4 weeks." },
            { question: "What is a held appointment and what does it cost?", answer: "We phone the truckers on your list and book the owner onto your calendar as a quote call. It costs $499 every 4 weeks for up to 4 booked quote calls, or $150 for a single booked call, and the first one is free. We take one agency per state for booked calls; ask about your state on the call." },
            { question: "Do you sell the same lead to other agencies?", answer: "The Monday list for a state can go to more than one agency. Want your state to yourself? Exclusive states are available: book a call." },
            { question: "What if my agency doesn't write trucking?", answer: "Then this isn't for you today. Both the Monday list and held appointments are built for agencies that write commercial trucking." }
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
    // No prices outside /pricing (except a page with its own offer): describe the refundable pilot instead.
    "offers": page.offer || {
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
