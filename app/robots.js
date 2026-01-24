export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/partner-signup', '/api/', '/_next/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/partner-signup'],
            },
        ],
        sitemap: 'https://www.dooza.ai/sitemap.xml',
        host: 'https://www.dooza.ai',
    };
}
