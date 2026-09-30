// Shared copy + helpers for the customer-support SEO guide pages
// (outsourcing, virtual assistant, and Gorgias comparison pages).
// Offer wording lives here so every guide changes together if the
// support offer on /customer-support-automation-agency changes.
import { SITE_URL } from '@/lib/site';

export const SUPPORT_PAGE = '/customer-support-automation-agency';

export const OFFER = {
    cta: 'Get my free 20-message sample',
    ctaShort: 'Get my free sample',
    secondary: 'See how Dooza support works',
    line: 'Send us 20 real customer messages. We answer them in your voice before you decide anything.',
    points: [
        'AI drafts every reply from your policies, products and past answers',
        'A Dooza specialist checks anything the AI is unsure about',
        'Refunds, complaints and anything sensitive come to you',
        'Works inside Gmail, Shopify Inbox or Gorgias, live in 48 hours',
    ],
};

export const AUTHOR = {
    name: 'Sibi Narendran',
    role: 'Founder, Dooza',
    url: `${SITE_URL}/about`,
};

export function guideUrl(page) {
    return `${SITE_URL}/${page.slug}`;
}

export function buildGuideMetadata(page) {
    const url = guideUrl(page);
    const image = `${SITE_URL}${page.hero.src}`;
    return {
        title: { absolute: page.seoTitle },
        description: page.seoDescription,
        keywords: page.keywords,
        alternates: { canonical: url },
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
        },
        openGraph: {
            title: page.ogTitle || page.seoTitle,
            description: page.seoDescription,
            url,
            siteName: 'Dooza',
            type: 'article',
            modifiedTime: `${page.updated}T00:00:00.000Z`,
            images: [{ url: image, width: 1536, height: 1024, alt: page.hero.alt }],
        },
        twitter: {
            card: 'summary_large_image',
            title: page.ogTitle || page.seoTitle,
            description: page.seoDescription,
            images: [image],
        },
    };
}

function isoDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `PT${m}M${s}S`;
}

export function buildGuideSchemas(page) {
    const url = guideUrl(page);
    const schemas = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: page.h1,
            description: page.seoDescription,
            url,
            mainEntityOfPage: url,
            image: `${SITE_URL}${page.hero.src}`,
            datePublished: page.published || page.updated,
            dateModified: page.updated,
            author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
            publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                ...(page.breadcrumbParent
                    ? [{ '@type': 'ListItem', position: 2, name: page.breadcrumbParent.label, item: `${SITE_URL}${page.breadcrumbParent.href}` }]
                    : []),
                { '@type': 'ListItem', position: page.breadcrumbParent ? 3 : 2, name: page.breadcrumb, item: url },
            ],
        },
    ];

    for (const section of page.sections) {
        if (!section.video) continue;
        const v = section.video;
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: v.title,
            description: v.description,
            thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
            uploadDate: v.uploadDate,
            duration: isoDuration(v.seconds),
            embedUrl: `https://www.youtube.com/embed/${v.id}`,
            contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
            author: { '@type': 'Organization', name: v.channel },
        });
    }

    if (page.itemList) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: page.itemList.name,
            itemListOrder: 'https://schema.org/ItemListOrderAscending',
            numberOfItems: page.itemList.items.length,
            itemListElement: page.itemList.items.map((item, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: item.name,
                ...(item.url ? { url: item.url } : {}),
            })),
        });
    }

    if (page.service) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: page.service.name,
            serviceType: page.service.type,
            url: `${SITE_URL}${SUPPORT_PAGE}`,
            provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
            areaServed: { '@type': 'Place', name: 'Worldwide' },
            audience: { '@type': 'BusinessAudience', name: page.service.audience },
        });
    }

    return schemas;
}
