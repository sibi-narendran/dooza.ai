import { notFound } from 'next/navigation';
import { SITE_URL } from '../../../lib/site';
import { agentPages, generateAgentSchema, generateHowToSchema } from '../../../lib/agentData';
import { generateFAQSchema, generateBreadcrumbSchema } from '../../../lib/industryData';

// Import agent content components
import RankyContent from './RankyContent';
import GenericAgentContent from './GenericAgentContent';

// Map slugs to components
const AGENT_COMPONENTS = {
    'ranky': RankyContent,
    'outbound-pro': GenericAgentContent,
    'lead-gen-pro': GenericAgentContent,
    'ugc-reel-creator': GenericAgentContent,
    'voice-pro': GenericAgentContent,
};

export async function generateStaticParams() {
    return agentPages.map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = agentPages.find(p => p.slug === slug);

    if (!page) {
        return { title: 'Page Not Found' };
    }

    return {
        title: page.title,
        description: page.metaDescription,
        keywords: page.keywords?.join(', '),
        alternates: {
            canonical: `${SITE_URL}/agents/${slug}`,
        },
        openGraph: {
            title: page.title,
            description: page.metaDescription,
            url: `${SITE_URL}/agents/${slug}`,
            type: 'website',
            images: page.image ? [{
                url: `${SITE_URL}${page.image}`,
                width: 1200,
                height: 630,
                alt: `${page.name} — ${page.role}`,
            }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: page.title,
            description: page.metaDescription,
            images: page.image ? [`${SITE_URL}${page.image}`] : [],
        },
    };
}

export default async function AgentPage({ params }) {
    const { slug } = await params;
    const page = agentPages.find(p => p.slug === slug);
    const AgentComponent = AGENT_COMPONENTS[slug];

    if (!page || !AgentComponent) {
        notFound();
    }

    // Generate structured data
    const agentSchema = generateAgentSchema(page, SITE_URL);
    const howToSchema = generateHowToSchema(page, SITE_URL);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "AI Employees", url: `${SITE_URL}/agents` },
        { name: `${page.name} — ${page.role}` },
    ]);

    const schemas = [agentSchema, howToSchema, breadcrumbSchema];

    if (page.faqData && page.faqData.length > 0) {
        schemas.push(generateFAQSchema(page.faqData));
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <AgentComponent page={page} />
        </>
    );
}
