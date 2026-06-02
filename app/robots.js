const allowedCrawlerUserAgents = [
    '*',
    // OpenAI
    'OAI-SearchBot',
    'GPTBot',
    'ChatGPT-User',
    // Anthropic / Claude
    'ClaudeBot',
    'Claude-User',
    'Claude-SearchBot',
    // Perplexity
    'PerplexityBot',
    'Perplexity-User',
    // Google / Gemini / Vertex
    'Googlebot',
    'GoogleOther',
    'GoogleOther-Image',
    'GoogleOther-Video',
    'Google-Extended',
    'Google-CloudVertexBot',
    // Apple Intelligence and Apple Search
    'Applebot',
    'Applebot-Extended',
    // Microsoft Bing / Copilot
    'Bingbot',
    'bingbot',
    'msnbot',
    // Exa uses AI-focused search/retrieval; official docs do not publish one canonical robots token.
    'ExaBot',
    'Exa-Search',
    // Other AI/search discovery surfaces
    'CCBot',
    'YouBot',
    'DuckAssistBot',
    'meta-externalagent',
    'meta-externalfetcher',
    'FacebookBot',
    'facebookexternalhit',
    'Facebot',
];

export default function robots() {
    return {
        // Tavily does not publish a separate robots.txt user agent; it uses Googlebot crawlability.
        rules: allowedCrawlerUserAgents.map((userAgent) => ({
            userAgent,
            allow: '/',
            disallow: ['/api/'],
        })),
        sitemap: 'https://www.dooza.ai/sitemap.xml',
        host: 'www.dooza.ai',
    };
}
