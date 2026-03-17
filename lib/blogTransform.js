// Transform snake_case DB row to camelCase matching blogData.js shape
export function dbToPost(row) {
    return {
        id: row.id,
        title: row.title,
        excerpt: row.excerpt,
        content: row.content,
        author: row.author,
        date: row.published_at
            ? row.published_at.split('T')[0]
            : row.created_at?.split('T')[0],
        modifiedDate: row.updated_at?.split('T')[0],
        readTime: row.read_time || `${row.read_time_minutes || estimateReadTime(row.content)} min read`,
        readTimeMinutes: row.read_time_minutes || estimateReadTime(row.content),
        category: row.category,
        tags: row.tags || [],
        image: row.image || null,
        imageAlt: row.image_alt || row.title,
        slug: row.slug,
        faqData: row.faq_data || [],
        tocData: row.toc_data || [],
        status: row.status,
        isDynamic: true,
    };
}

// Transform camelCase API input to snake_case DB columns
export function postToDb(input) {
    const row = {};
    if (input.slug !== undefined) row.slug = input.slug;
    if (input.title !== undefined) row.title = input.title;
    if (input.excerpt !== undefined) row.excerpt = input.excerpt;
    if (input.content !== undefined) row.content = input.content;
    if (input.author !== undefined) row.author = input.author;
    if (input.category !== undefined) row.category = input.category;
    if (input.tags !== undefined) row.tags = input.tags;
    if (input.image !== undefined) row.image = input.image;
    if (input.imageAlt !== undefined) row.image_alt = input.imageAlt;
    if (input.readTime !== undefined) row.read_time = input.readTime;
    if (input.readTimeMinutes !== undefined) row.read_time_minutes = input.readTimeMinutes;
    if (input.faqData !== undefined) row.faq_data = input.faqData;
    if (input.tocData !== undefined) row.toc_data = input.tocData;
    if (input.status !== undefined) row.status = input.status;
    if (input.publishedAt !== undefined) row.published_at = input.publishedAt;
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
