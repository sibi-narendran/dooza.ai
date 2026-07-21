import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'SMS Opt-In — Dooza Text Messaging',
    description: 'Opt in to receive text messages from Dooza, including appointment reminders, account and service notifications, and — with your consent — offers. Message frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help.',
    keywords: ['SMS opt-in', 'text message consent', 'Dooza SMS', 'subscribe to texts', 'message and data rates'],
    alternates: {
        canonical: `${SITE_URL}/sms-opt-in`,
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'SMS Opt-In — Dooza Text Messaging',
        description: 'Subscribe to receive text messages from Dooza. Message frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help.',
        url: `${SITE_URL}/sms-opt-in`,
        siteName: SITE_NAME,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza SMS Opt-In',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'SMS Opt-In — Dooza Text Messaging',
        description: 'Subscribe to receive text messages from Dooza. Reply STOP to cancel, HELP for help.',
        images: [`${SITE_URL}/logo.png`],
    },
};

export default function SmsOptInLayout({ children }) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "SMS Opt-In",
                "item": `${SITE_URL}/sms-opt-in`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
