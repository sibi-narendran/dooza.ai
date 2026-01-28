import { blogPosts } from '../../lib/blogData';
import { SITE_URL, SITE_NAME } from '../../lib/site';

export async function GET() {
    const baseUrl = SITE_URL;

    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    // Get the most recent post date for lastBuildDate
    const lastBuildDate = sortedPosts.length > 0
        ? new Date(sortedPosts[0].date).toUTCString()
        : new Date().toUTCString();

    const rssItems = sortedPosts
        .map((post) => {
            const pubDate = new Date(post.date).toUTCString();
            const imageUrl = post.image ? `${baseUrl}${post.image}` : '';

            return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
      <author>hello@dooza.ai (${post.author})</author>
      ${imageUrl ? `<enclosure url="${imageUrl}" type="image/png" length="200000"/>` : ''}
    </item>`;
        })
        .join('');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_NAME} Blog</title>
    <description>Expert insights on AI employees, business automation, and scaling your operations with intelligent agents.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <copyright>Copyright ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</copyright>
    <managingEditor>hello@dooza.ai (${SITE_NAME} Team)</managingEditor>
    <webMaster>hello@dooza.ai (${SITE_NAME} Team)</webMaster>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>${SITE_NAME} Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
