import StudioContent from './StudioContent';
import { SITE_URL } from '../../lib/site';

export const metadata = {
    title: 'Studio | Build Production-Ready AI Agents',
    description: 'Design, build, and deploy intelligent AI agents with our visual workflow builder. Connect any LLM, add RAG pipelines, and ship to production in minutes.',
    keywords: ['AI studio', 'AI agent builder', 'LLM workflow', 'RAG pipeline', 'AI automation', 'no-code AI', 'visual AI builder', 'AI development platform'],
    alternates: {
        canonical: `${SITE_URL}/studio`,
    },
    openGraph: {
        title: 'Studio | Build Production-Ready AI Agents',
        description: 'Design, build, and deploy intelligent AI agents with our visual workflow builder.',
        url: `${SITE_URL}/studio`,
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Studio - AI Agent Builder' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Studio | Build Production-Ready AI Agents',
        description: 'Design, build, and deploy intelligent AI agents with our visual workflow builder.',
        images: [`${SITE_URL}/logo.png`],
    },
};

// SoftwareApplication schema for the Studio product
const studioSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dooza Studio",
    "alternateName": "Dooza AI Agent Builder",
    "applicationCategory": "DeveloperApplication",
    "applicationSubCategory": "AI Development Platform",
    "operatingSystem": "Web",
    "description": "Visual AI workflow builder for creating production-ready AI agents. Connect OpenAI, Claude, Gemini, and other LLMs. Add RAG pipelines and deploy with one click.",
    "url": `${SITE_URL}/studio`,
    "downloadUrl": "https://studio.dooza.ai",
    "softwareVersion": "1.0",
    "releaseNotes": "Visual workflow builder with multi-model support and built-in RAG",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free tier available",
        "availability": "https://schema.org/InStock"
    },
    "featureList": [
        "Visual Workflow Builder",
        "Multi-Model Support (OpenAI, Claude, Gemini)",
        "Built-in RAG Pipeline",
        "One-Click Deploy",
        "REST API endpoints",
        "SDK libraries",
        "No-code AI agent creation",
        "Custom LLM integration"
    ],
    "screenshot": `${SITE_URL}/logo.png`,
    "author": {
        "@type": "Organization",
        "name": "Dooza",
        "url": "https://www.dooza.ai"
    }
};

// Product schema for Studio
const studioProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dooza Studio - AI Agent Builder",
    "description": "No-code visual builder for creating AI agents. Connect any LLM, add RAG pipelines, and deploy production-ready AI workflows in minutes.",
    "brand": {
        "@type": "Brand",
        "name": "Dooza"
    },
    "image": `${SITE_URL}/logo.png`,
    "url": `${SITE_URL}/studio`,
    "category": "Software > Development Tools > AI Platforms",
    "offers": {
        "@type": "Offer",
        "url": "https://studio.dooza.ai",
        "priceCurrency": "USD",
        "price": "0",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31"
    }
};

// HowTo schema for building AI agents
const studioHowToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build an AI Agent with Dooza Studio",
    "description": "Create production-ready AI agents using visual workflow builder",
    "totalTime": "PT10M",
    "tool": [
        {
            "@type": "HowToTool",
            "name": "Dooza Studio Account"
        }
    ],
    "step": [
        {
            "@type": "HowToStep",
            "position": 1,
            "name": "Open Visual Builder",
            "text": "Access the drag-and-drop workflow builder in Dooza Studio"
        },
        {
            "@type": "HowToStep",
            "position": 2,
            "name": "Connect Your LLM",
            "text": "Choose from OpenAI, Claude, Gemini, or connect your own model"
        },
        {
            "@type": "HowToStep",
            "position": 3,
            "name": "Add RAG Pipeline",
            "text": "Upload documents and connect knowledge bases for context-aware responses"
        },
        {
            "@type": "HowToStep",
            "position": 4,
            "name": "Deploy with One Click",
            "text": "Ship your AI agent to production and get REST API endpoints instantly"
        }
    ]
};

export default function StudioPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([studioSchema, studioProductSchema, studioHowToSchema])
                }}
            />
            <StudioContent />
        </>
    );
}
