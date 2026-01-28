import HomePage from './HomeContent';

export const metadata = {
    title: 'AI Employees That Never Sleep',
    description: 'Build, grow, and scale your business with AI employees. Automate inbox, social media, SEO, sales calls 24/7. Free setup, transparent pricing from $29/mo.',
    keywords: ['AI employees', 'AI agents', 'business automation', 'Sintra AI alternative', 'Marblism alternative', 'AI for small business', 'AI automation platform', 'virtual employees'],
    alternates: {
        canonical: 'https://www.dooza.ai',
    },
    openGraph: {
        title: 'AI Employees That Never Sleep | Dooza',
        description: 'Build, grow, and scale your business with AI employees. Automate inbox, social media, SEO, sales calls 24/7.',
        url: 'https://www.dooza.ai',
        images: [{ url: 'https://www.dooza.ai/logo.png', width: 512, height: 512, alt: 'Dooza - AI Employees Platform' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Employees That Never Sleep | Dooza',
        description: 'Build, grow, and scale your business with AI employees. Automate inbox, social media, SEO, sales calls 24/7.',
        images: ['https://www.dooza.ai/logo.png'],
    },
};

// Organization Schema for brand recognition
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dooza",
    "legalName": "Dooza AI",
    "url": "https://www.dooza.ai",
    "logo": "https://www.dooza.ai/logo.png",
    "description": "AI employees that automate your business operations 24/7. Offering AI-powered solutions for email management, social media, SEO, sales calls, and customer support.",
    "foundingDate": "2024",
    "founder": {
        "@type": "Person",
        "name": "Sibin Arendran",
        "url": "https://twitter.com/sibinarendran"
    },
    "sameAs": [
        "https://twitter.com/sibinarendran",
        "https://linkedin.com/company/dooza",
        "https://www.crunchbase.com/organization/dooza",
        "https://www.g2.com/products/dooza"
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "support@dooza.ai",
            "availableLanguage": ["English"]
        },
        {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "hello@dooza.ai",
            "availableLanguage": ["English"]
        }
    ],
    "knowsAbout": [
        "Artificial Intelligence",
        "Business Automation",
        "AI Employees",
        "Email Automation",
        "Social Media Management",
        "SEO Optimization",
        "Customer Support Automation",
        "Sales Automation"
    ]
};

// WebSite Schema with SearchAction for site links
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dooza",
    "alternateName": "Dooza AI",
    "url": "https://www.dooza.ai",
    "description": "AI Employees That Never Sleep - Build, grow, and scale your business with AI automation",
    "publisher": {
        "@type": "Organization",
        "name": "Dooza"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.dooza.ai/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// SoftwareApplication Schema for product visibility
const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dooza AI Employees",
    "alternateName": "Dooza Workforce",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "AI Automation Platform",
    "operatingSystem": "Web, iOS, Android",
    "url": "https://www.dooza.ai",
    "downloadUrl": "https://workforce.dooza.ai",
    "screenshot": "https://www.dooza.ai/logo.png",
    "softwareVersion": "2.0",
    "releaseNotes": "AI Employees for business automation including email, social media, SEO, and calls",
    "featureList": [
        "AI Email Manager (Eva)",
        "AI Social Media Manager (Somi)",
        "AI Lead Generator (Stan)",
        "AI SEO Specialist (Penny/Seomi)",
        "AI Receptionist with Phone Calls (Rachel)",
        "AI Legal Assistant (Linda)",
        "Custom AI Employee Builder",
        "Google Business Profile Automation",
        "24/7 Autonomous Operation"
    ],
    "offers": {
        "@type": "Offer",
        "price": "29",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://workforce.dooza.ai",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "29",
            "priceCurrency": "USD",
            "billingIncrement": 1,
            "billingDuration": {
                "@type": "QuantitativeValue",
                "value": 1,
                "unitCode": "MON"
            }
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "150",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": [
        {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Organization",
                "name": "Interio Square"
            },
            "reviewBody": "My AI receptionist answers every call while I'm on site. Haven't missed a lead in months."
        },
        {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Organization",
                "name": "Suresh Timbers"
            },
            "reviewBody": "Our social pages used to be dead. Now Seomi posts daily updates and we're actually growing."
        }
    ]
};

// Product Schema for e-commerce visibility
const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dooza AI Employees Platform",
    "description": "AI-powered virtual employees that automate your business operations 24/7. Includes email management, social media posting, SEO optimization, lead generation, phone calls, and more.",
    "brand": {
        "@type": "Brand",
        "name": "Dooza"
    },
    "logo": "https://www.dooza.ai/logo.png",
    "image": "https://www.dooza.ai/logo.png",
    "url": "https://www.dooza.ai",
    "sku": "DOOZA-WORKFORCE",
    "mpn": "DOOZA-AI-2024",
    "category": "Business Software > Automation > AI Assistants",
    "offers": {
        "@type": "Offer",
        "url": "https://workforce.dooza.ai",
        "priceCurrency": "USD",
        "price": "29",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Dooza"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
    }
};

// Service Schema for each AI Employee
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Business Automation",
    "name": "Dooza AI Employees",
    "description": "Automated AI employees that handle business tasks 24/7 including email, social media, SEO, sales, and customer support",
    "provider": {
        "@type": "Organization",
        "name": "Dooza",
        "url": "https://www.dooza.ai"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Employee Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Eva - AI Email Manager",
                    "description": "AI employee that manages your inbox, drafts replies, and sends emails automatically"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Somi - AI Social Media Manager",
                    "description": "AI employee that creates and posts content to your social media accounts daily"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Seomi - AI SEO Specialist",
                    "description": "AI employee that writes blog posts, optimizes Google Business Profile, and improves search rankings"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Rachel - AI Receptionist",
                    "description": "AI employee that makes and receives phone calls 24/7 for your business"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Stan - AI Lead Generator",
                    "description": "AI employee that finds, qualifies, and nurtures leads for your sales pipeline"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Linda - AI Legal Assistant",
                    "description": "AI employee that reviews contracts and legal documents"
                }
            }
        ]
    }
};

// HowTo Schema for getting started
const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Started with Dooza AI Employees",
    "description": "Set up your AI employees in 5 minutes with free concierge onboarding",
    "totalTime": "PT5M",
    "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "29"
    },
    "step": [
        {
            "@type": "HowToStep",
            "position": 1,
            "name": "Sign Up",
            "text": "Create your free Dooza account in under 2 minutes",
            "url": "https://workforce.dooza.ai"
        },
        {
            "@type": "HowToStep",
            "position": 2,
            "name": "Book Onboarding Call",
            "text": "Schedule a free 30-minute concierge call where our team builds your AI employees for you",
            "url": "https://cal.com/dooza"
        },
        {
            "@type": "HowToStep",
            "position": 3,
            "name": "Connect Your Tools",
            "text": "Link your email, social accounts, and other tools with one-click integrations"
        },
        {
            "@type": "HowToStep",
            "position": 4,
            "name": "Activate AI Employees",
            "text": "Choose which AI employees you need and they start working immediately 24/7"
        }
    ]
};

// ItemList Schema for AI Employees catalog
const aiEmployeesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Dooza AI Employees",
    "description": "Complete list of AI employees available on the Dooza platform",
    "numberOfItems": 6,
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Eva - AI Email Manager",
            "description": "Manages inbox, drafts and sends replies automatically",
            "url": "https://www.dooza.ai"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Somi - AI Social Media Manager",
            "description": "Creates and posts content to social media daily",
            "url": "https://www.dooza.ai"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Seomi - AI SEO Specialist",
            "description": "Writes blogs, optimizes Google Business Profile, improves rankings",
            "url": "https://www.dooza.ai"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Rachel - AI Receptionist",
            "description": "Makes and receives phone calls 24/7",
            "url": "https://www.dooza.ai"
        },
        {
            "@type": "ListItem",
            "position": 5,
            "name": "Stan - AI Lead Generator",
            "description": "Finds and qualifies leads for your sales pipeline",
            "url": "https://www.dooza.ai"
        },
        {
            "@type": "ListItem",
            "position": 6,
            "name": "Linda - AI Legal Assistant",
            "description": "Reviews contracts and legal documents",
            "url": "https://www.dooza.ai"
        }
    ]
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        organizationSchema,
                        websiteSchema,
                        softwareSchema,
                        productSchema,
                        serviceSchema,
                        howToSchema,
                        aiEmployeesListSchema
                    ])
                }}
            />
            <HomePage />
        </>
    );
}
