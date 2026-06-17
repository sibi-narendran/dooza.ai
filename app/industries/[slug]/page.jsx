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

const INDUSTRY_SEO_TITLE_MAX_LENGTH = 56;
const INDUSTRY_SEO_DESCRIPTION_MAX_LENGTH = 155;
const TRAILING_STOP_WORDS = new Set([
    'a',
    'an',
    'and',
    'as',
    'at',
    'every',
    'for',
    'from',
    'in',
    'into',
    'no',
    'of',
    'on',
    'or',
    'the',
    'to',
    'with',
    'without',
]);

function cleanTruncatedText(value) {
    let cleaned = value
        .replace(/\s+\([^)]*$/g, '')
        .replace(/\s+\[[^\]]*$/g, '')
        .replace(/[\s.,:;!?|—-]+$/g, '');

    let words = cleaned.split(/\s+/);
    while (words.length > 1) {
        const lastWord = words[words.length - 1].toLowerCase().replace(/[^a-z0-9]/g, '');
        if (!TRAILING_STOP_WORDS.has(lastWord)) break;
        words = words.slice(0, -1);
    }

    cleaned = words.join(' ').replace(/[\s.,:;!?|—-]+$/g, '');

    const lastSeparator = Math.max(cleaned.lastIndexOf(':'), cleaned.lastIndexOf('—'));
    if (lastSeparator > 0 && cleaned.length - lastSeparator <= 14) {
        cleaned = cleaned.slice(0, lastSeparator).trim();
    }

    return cleaned;
}

function truncateAtWord(value, maxLength) {
    if (!value) return value;

    const normalized = value.replace(/\s+/g, ' ').trim();
    if (normalized.length <= maxLength) return normalized;

    const truncated = normalized.slice(0, maxLength + 1);
    const lastSpace = truncated.lastIndexOf(' ');
    const safeText = normalized.slice(0, lastSpace > 0 ? lastSpace : maxLength);

    return cleanTruncatedText(safeText);
}

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

    const seoTitle = truncateAtWord(
        page.seoTitle || page.title,
        INDUSTRY_SEO_TITLE_MAX_LENGTH,
    );
    const seoDescription = truncateAtWord(
        page.seoDescription || page.metaDescription,
        INDUSTRY_SEO_DESCRIPTION_MAX_LENGTH,
    );

    return {
        title: seoTitle,
        description: seoDescription,
        keywords: page.keywords?.join(', '),
        alternates: {
            canonical: `${SITE_URL}/industries/${slug}`,
        },
        openGraph: {
            title: seoTitle,
            description: seoDescription,
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
            title: seoTitle,
            description: seoDescription,
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
