import { notFound } from 'next/navigation';
import { SITE_URL } from '../../../lib/site';
import { industryPages, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../../../lib/industryData';

// Import industry content components
import SalonsContent from './SalonsContent';
import ContractorsContent from './ContractorsContent';
import RealEstateContent from './RealEstateContent';

// Map slugs to components
const INDUSTRY_COMPONENTS = {
    'salons': SalonsContent,
    'contractors': ContractorsContent,
    'real-estate': RealEstateContent,
};

// Generate static params for all industry pages
export async function generateStaticParams() {
    return industryPages.map((page) => ({
        slug: page.slug,
    }));
}

// Generate metadata for each industry page
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = industryPages.find(p => p.slug === slug);

    if (!page) {
        return {
            title: 'Page Not Found',
        };
    }

    return {
        title: page.title,
        description: page.metaDescription,
        keywords: page.keywords?.join(', '),
        alternates: {
            canonical: `${SITE_URL}/industries/${slug}`,
        },
        openGraph: {
            title: page.title,
            description: page.metaDescription,
            url: `${SITE_URL}/industries/${slug}`,
            type: 'website',
            images: page.image ? [
                {
                    url: `${SITE_URL}${page.image}`,
                    width: 1200,
                    height: 630,
                    alt: page.title,
                }
            ] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: page.title,
            description: page.metaDescription,
            images: page.image ? [`${SITE_URL}${page.image}`] : [],
        },
    };
}

export default async function IndustryPage({ params }) {
    const { slug } = await params;
    const page = industryPages.find(p => p.slug === slug);
    const IndustryComponent = INDUSTRY_COMPONENTS[slug];

    if (!page || !IndustryComponent) {
        notFound();
    }

    // Generate structured data
    const serviceSchema = generateServiceSchema(page, SITE_URL);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Industries", url: `${SITE_URL}/industries` },
        { name: page.title }
    ]);

    const schemas = [serviceSchema, breadcrumbSchema];

    // Add FAQ schema if page has FAQ data
    if (page.faqData && page.faqData.length > 0) {
        schemas.push(generateFAQSchema(page.faqData));
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <IndustryComponent page={page} />
        </>
    );
}
