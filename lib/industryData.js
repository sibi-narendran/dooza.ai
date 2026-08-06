// Industry solution page data
export const industryPages = [
    {
        slug: 'salons',
        title: 'AI Receptionist for Salons: Never Miss a Booking Again',
        metaDescription: "Your stylists are busy and your phone is ringing. Dooza's AI receptionist answers calls, books appointments, and sends reminders 24/7.",
        keywords: ['AI receptionist for salons', 'salon booking AI', 'salon answering service', 'hair salon virtual receptionist', 'beauty salon AI phone', 'automated salon scheduling'],
        image: '/industries/salons.png',
        imageAlt: 'AI receptionist answering calls and booking appointments for a hair salon',
        date: '2026-02-23',
        modifiedDate: '2026-02-23',
        faqData: [
            { question: "Can the AI book specific stylists?", answer: "Yes, it knows each stylist's schedule and specialties." },
            { question: "Does it handle cancellations and reschedules?", answer: "Yes, and it automatically fills empty slots from a waitlist." },
            { question: "What if a client needs to speak to a human?", answer: "Seamless warm transfer during business hours." },
            { question: "Can it send appointment reminders?", answer: "Yes, via SMS and email, reducing no-shows by up to 40%." },
            { question: "How long does setup take?", answer: "Most salons are live within 30 minutes." }
        ]
    },
    {
        slug: 'contractors',
        title: 'AI Answering Service for Contractors: Capture Every Lead, Even on the Job Site',
        seoTitle: 'AI Answering Service for Contractors',
        metaDescription: "You're on a roof while a lead calls. Dooza's AI agent answers, captures the job details, and texts you the summary 24/7.",
        keywords: ['AI answering service for contractors', 'contractor phone answering', 'HVAC AI receptionist', 'plumber answering service AI', 'electrician missed calls', 'home services AI phone'],
        image: '/industries/contractors.png',
        imageAlt: 'AI answering service capturing leads for contractors on the job site',
        date: '2026-02-23',
        modifiedDate: '2026-02-23',
        faqData: [
            { question: "Can it give estimates over the phone?", answer: "Yes, based on your pricing guide and service area." },
            { question: "Does it handle emergency/after-hours dispatch?", answer: "Yes, it identifies urgency and can text/call you directly for emergencies." },
            { question: "Will callers know it's AI?", answer: "It sounds natural and professional, representing your brand. Most callers can't tell." },
            { question: "Can it schedule on-site visits?", answer: "Yes, it accesses your calendar and books available slots." },
            { question: "Does it work for multiple trades?", answer: "Yes — HVAC, plumbing, electrical, roofing, landscaping, and general contracting." }
        ]
    },
    {
        slug: 'real-estate',
        title: 'AI Sales Agent for Real Estate: Follow Up on Every Lead, 24/7',
        metaDescription: "78% of deals go to the agent who responds first. Dooza's AI sales agent responds in under 60 seconds, qualifies leads, and books showings — while you sleep.",
        keywords: ['AI sales agent for real estate', 'real estate AI lead follow up', 'real estate lead nurturing AI', 'automated real estate follow up', 'AI real estate assistant'],
        image: '/industries/real-estate.png',
        imageAlt: 'AI sales agent following up on real estate leads 24/7',
        date: '2026-02-23',
        modifiedDate: '2026-02-23',
        faqData: [
            { question: "Can it integrate with my MLS/CRM?", answer: "Yes, it works with popular real estate CRMs and can pull property data." },
            { question: "Does it qualify leads before handing them off?", answer: "Yes, it asks budget, timeline, location, and property type questions." },
            { question: "Can it handle multiple inquiries simultaneously?", answer: "Unlimited parallel conversations — no lead waits." },
            { question: "What about open house follow-ups?", answer: "It can text/email every open house visitor within minutes of them signing in." },
            { question: "Is it better than hiring an ISA?", answer: "At $49/mo vs $4,000+/mo, it responds faster, never takes PTO, and scales infinitely." }
        ]
    },
    {
        slug: 'dispatchers',
        hidePrice: true,
        title: 'AI Employee for Dispatchers: Automate Your Entire Dispatch Operation',
        seoTitle: 'AI Employee for Dispatchers',
        metaDescription: "Dooza is an AI employee that runs your whole dispatch desk: calls, scheduling, tracking, emails, and paperwork. 24/7, from day one.",
        keywords: ['AI employee for dispatchers', 'dispatch automation', 'truck dispatcher AI', 'freight dispatch automation', 'AI for trucking dispatch', 'pharma dispatch automation', 'owner operator dispatch AI'],
        image: '/industries/dispatchers.png',
        imageAlt: 'AI employee automating calls, scheduling, tracking, and paperwork for a dispatch business',
        date: '2026-08-02',
        modifiedDate: '2026-08-03',
        faqData: [
            { question: "Is it just an answering service?", answer: "No. Calls are one task. It also schedules, tracks drivers, sends updates, handles email, and does the paperwork." },
            { question: "Can it handle pharma or medical dispatch?", answer: "Yes. It follows your rules for sensitive, time-critical, and compliance-heavy deliveries." },
            { question: "What happens in an emergency?", answer: "It detects urgency and escalates to your phone instantly. Routine work never interrupts you." },
            { question: "Will drivers and customers know it's AI?", answer: "It sounds natural and professional, representing your brand on every interaction." },
            { question: "How fast can it start?", answer: "Most dispatch operations go live the same day." }
        ]
    },
    {
        slug: 'insurance-agents',
        title: 'AI Answering Service for Independent Insurance Agents: Every Quote, Claim & Renewal Call Answered 24/7',
        seoTitle: 'AI Answering Service for Insurance Agents',
        metaDescription: "Quote shoppers call 3-4 agencies and buy from whoever answers first. Dooza's AI agent captures every quote request, handles policy questions, and escalates urgent claims — even after hours.",
        keywords: ['AI answering service for insurance agents', 'independent insurance agent AI', 'insurance agency phone answering', 'AI receptionist insurance agency', 'insurance quote call capture', 'insurance after hours answering service'],
        date: '2026-08-06',
        modifiedDate: '2026-08-06',
        faqData: [
            { question: "Can it capture quote requests?", answer: "Yes, it collects name, contact details, line of business, current carrier, and renewal date so you can call back ready to quote." },
            { question: "What happens when a client reports a claim?", answer: "It captures the claim details calmly and completely, and urgent situations (accidents, property damage) are escalated to your phone immediately." },
            { question: "Does it bind or sell policies?", answer: "No. It answers questions, captures details, and books time on your calendar — you stay in control of all advice and binding." },
            { question: "Will callers know it's AI?", answer: "It sounds natural and professional, representing your agency's brand. Most callers can't tell." },
            { question: "Does it work for all lines of business?", answer: "Yes — auto, home, life, health, Medicare, and commercial lines. You set the questions it asks for each line." }
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
    ...(page.hidePrice ? {} : {
        "offers": {
            "@type": "Offer",
            "price": page.price || "49",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        }
    })
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
