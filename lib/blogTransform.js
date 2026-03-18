// Transform snake_case DB row (blog_articles) to camelCase matching blogData.js shape
export function dbToPost(row) {
    const content = row.content_html || '';
    const readMins = estimateReadTime(content);
    return {
        id: row.id,
        title: row.title,
        excerpt: row.meta_description || '',
        content: content,
        author: 'Dooza Team',
        date: row.created_at?.split('T')[0],
        modifiedDate: row.created_at?.split('T')[0],
        readTime: `${readMins} min read`,
        readTimeMinutes: readMins,
        category: row.tags?.[0] || 'AI Automation',
        tags: row.tags || [],
        image: row.image_url || null,
        imageAlt: row.title,
        slug: row.slug,
        faqData: [],
        tocData: generateTocFromHtml(content),
        isDynamic: true,
    };
}

// Transform camelCase API input to snake_case DB columns (blog_articles)
export function postToDb(input) {
    const row = {};
    if (input.slug !== undefined) row.slug = input.slug;
    if (input.title !== undefined) row.title = input.title;
    if (input.excerpt !== undefined) row.meta_description = input.excerpt;
    if (input.content !== undefined) row.content_html = input.content;
    if (input.contentMarkdown !== undefined) row.content_markdown = input.contentMarkdown;
    if (input.tags !== undefined) row.tags = input.tags;
    if (input.image !== undefined) row.image_url = input.image;
    if (input.source !== undefined) row.source = input.source;
    return row;
}

// Estimate read time in minutes from HTML content
function estimateReadTime(html) {
    if (!html) return 5;
    const text = html.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
}

// Auto-generate TOC from <h2> tags in HTML content
export function generateTocFromHtml(html) {
    if (!html) return [];
    const toc = [];
    const regex = /<h2[^>]*id=["']([^"']+)["'][^>]*>(.*?)<\/h2>/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
        toc.push({
            id: match[1],
            label: match[2].replace(/<[^>]*>/g, '').trim(),
        });
    }
    return toc;
}
