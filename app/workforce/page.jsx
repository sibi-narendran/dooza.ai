import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import IntegrationsBar from '@/components/sections/IntegrationsBar';
import AutopilotSection from '@/components/sections/AutopilotSection';
import VideoSection from '@/components/sections/VideoSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import CompetitorAlternatives from '@/components/sections/CompetitorAlternatives';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { faqSchema } from '@/lib/homeData';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/workforce`;

export const metadata = {
    title: { absolute: 'Dooza Workforce: AI Workforce App for Small Business | Dooza' },
    description: 'Dooza Workforce is the AI workforce app from Dooza: ready-made AI employees for email, social media, SEO, calls, and leads, with approvals on sensitive work. Start with a refundable pilot.',
    keywords: ['AI employees', 'AI agents', 'business automation', 'Sintra AI alternative', 'Marblism alternative', 'AI for small business', 'AI automation platform', 'virtual employees'],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Dooza Workforce: AI Workforce App for Small Business | Dooza',
        description: 'Dooza Workforce is the AI workforce app from Dooza: ready-made AI employees for email, social media, SEO, calls, and leads, with approvals on sensitive work. Start with a refundable pilot.',
        url: pageUrl,
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Workforce - AI Employees Platform' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Workforce: AI Workforce App for Small Business | Dooza',
        description: 'Dooza Workforce is the AI workforce app from Dooza: ready-made AI employees for email, social media, SEO, calls, and leads, with approvals on sensitive work. Start with a refundable pilot.',
        images: [`${SITE_URL}/logo.png`],
    },
};

// SoftwareApplication Schema for product visibility
const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dooza AI Employees",
    "alternateName": "Dooza Workforce",
    "description": "Dooza Workforce is the AI workforce app from Dooza, an AI-native company: ready-made AI employees for email, social media, SEO, calls, and leads. Every plan starts with a refundable pilot: 100% refund within 14 days.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "AI Automation Platform",
    "operatingSystem": "Web, iOS, Android",
    "url": pageUrl,
    "downloadUrl": "/book",
    "screenshot": `${SITE_URL}/logo.png`,
    "softwareVersion": "2.0",
    "releaseNotes": "AI Employees for business automation including email, social media, SEO, and lead generation",
    "featureList": [
        "AI Email Manager (Maily)",
        "AI Social Media Manager (Somi)",
        "AI Lead Generator (Stan)",
        "AI SEO & Visibility Employee (Ranky)",
        "AI Legal Assistant (Linda)",
        "Custom AI Employee Builder",
        "Google Business Profile Automation",
        "Works 24/7 with approvals on anything sensitive"
    ],
    "review": [
        {
            "@type": "Review",
            "author": {
                "@type": "Organization",
                "name": "Interio Square"
            },
            "reviewBody": "Our AI email manager handles all customer support emails automatically. Response times dropped from hours to minutes."
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Organization",
                "name": "Suresh Timbers"
            },
            "reviewBody": "Our social pages used to be dead. Now Somi posts daily updates and we're actually growing."
        }
    ]
};

// Product Schema for e-commerce visibility
const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dooza AI Employees Platform",
    "description": "Dooza Workforce is an AI workforce app with ready-made AI employees for email, social media, SEO, lead generation, and legal review. They work 24/7 with your approval on anything sensitive. Every plan starts with a refundable pilot: 100% refund within 14 days.",
    "brand": {
        "@type": "Brand",
        "name": "Dooza"
    },
    "logo": `${SITE_URL}/logo.png`,
    "image": `${SITE_URL}/logo.png`,
    "url": pageUrl,
    "sku": "DOOZA-WORKFORCE",
    "mpn": "DOOZA-AI-2024",
    "category": "Business Software > Automation > AI Assistants"
};

// Service Schema for each AI Employee
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Business Automation",
    "name": "Dooza AI Employees",
    "description": "AI employees in the Dooza Workforce app that handle email, social media, SEO, sales, and customer support, working 24/7 with your approval on anything sensitive",
    "provider": {
        "@type": "Organization",
        "name": "Dooza",
        "url": SITE_URL
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
                    "name": "Maily - AI Email Manager",
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
                    "name": "Ranky - AI SEO & Visibility Employee",
                    "description": "AI employee that writes blog posts, optimizes Google Business Profile, and improves search rankings"
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
    "description": "Start Dooza Workforce with a refundable pilot (100% refund within 14 days), scoped on a free 30-minute call with a Dooza engineer",
    "totalTime": "PT30M",
    "step": [
        {
            "@type": "HowToStep",
            "position": 1,
            "name": "Start Your Pilot",
            "text": "Create your Dooza account and start with a refundable pilot: 100% refund within 14 days. See plans at dooza.ai/pricing.",
            "url": "/book"
        },
        {
            "@type": "HowToStep",
            "position": 2,
            "name": "Book Onboarding Call",
            "text": "Book a free 30-minute pilot call where a Dooza engineer scopes your pilot and sets up your AI employees with you",
            "url": "https://calendly.com/sibi-dooza/book-a-meeting-and-walk-away-with-clarity"
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
            "text": "Choose which AI employees you need and they start working the same day, with your approval on anything sensitive"
        }
    ]
};

// ItemList Schema for AI Employees catalog
const aiEmployeesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Dooza AI Employees",
    "description": "Complete list of AI employees available on the Dooza platform",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Maily - AI Email Manager",
            "description": "Manages inbox, drafts and sends replies automatically",
            "url": pageUrl
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Somi - AI Social Media Manager",
            "description": "Creates and posts content to social media daily",
            "url": pageUrl
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Ranky - AI SEO & Visibility Employee",
            "description": "Writes blogs, optimizes Google Business Profile, improves rankings",
            "url": pageUrl
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Stan - AI Lead Generator",
            "description": "Finds and qualifies leads for your sales pipeline",
            "url": pageUrl
        },
        {
            "@type": "ListItem",
            "position": 5,
            "name": "Linda - AI Legal Assistant",
            "description": "Reviews contracts and legal documents",
            "url": pageUrl
        }
    ]
};

export default function WorkforcePage() {
    return (
        <>
            {[softwareSchema, productSchema, serviceSchema, howToSchema, aiEmployeesListSchema, faqSchema].map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <BookingModalProvider>
                <div className="min-h-screen bg-warm text-slate-900 font-sans">
                    <Navbar ctaSource="workforce_nav" />
                    <main id="main-content">
                        <HeroSection />
                        <AutopilotSection />
                        <IntegrationsBar />
                        <VideoSection />
                        <TestimonialsSection />
                        <HowItWorksSection />
                        <PricingSection showPrices={false} />
                        <ComparisonSection />
                        <CompetitorAlternatives />
                        <FAQSection />
                        <FinalCTASection />
                    </main>
                    <Footer />
                </div>
            </BookingModalProvider>
        </>
    );
}
