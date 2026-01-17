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
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Dooza Studio - AI Agent Builder' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Studio | Build Production-Ready AI Agents',
        description: 'Design, build, and deploy intelligent AI agents with our visual workflow builder.',
        images: [`${SITE_URL}/og-image.png`],
    },
};

// SoftwareApplication schema for the Studio product
const studioSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dooza Studio",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description": "Visual AI workflow builder for creating production-ready AI agents",
    "url": `${SITE_URL}/studio`,
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free tier available"
    },
    "featureList": [
        "Visual Workflow Builder",
        "Multi-Model Support (OpenAI, Claude, Gemini)",
        "Built-in RAG Pipeline",
        "One-Click Deploy",
        "REST API endpoints",
        "SDK libraries"
    ]
};

export default function StudioPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(studioSchema) }}
            />
            <StudioContent />
        </>
    );
}
