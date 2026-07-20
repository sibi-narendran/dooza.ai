import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import crypto from 'crypto';
import { supabaseServer } from '../../../lib/supabaseServer';

function authenticate(request) {
    const authHeader = request.headers.get('authorization');
    const token = process.env.OUTRANK_API_KEY;
    if (!token) return false;
    return authHeader === `Bearer ${token}`;
}

function revalidateBlogPaths(slug) {
    revalidatePath('/blog');
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss.xml');
    revalidatePath('/llms.txt');
    if (slug) revalidatePath(`/blog/${slug}`);
}

async function upsertArticle(article) {
    const row = {
        slug: article.slug,
        title: article.title,
        content_html: article.content_html || null,
        content_markdown: article.content_markdown || null,
        meta_description: article.meta_description || null,
        image_url: article.image_url || null,
        tags: article.tags || [],
        source: 'outrank',
    };

    if (!row.slug || !row.title) return null;

    const { data: existing } = await supabaseServer
        .from('blog_articles')
        .select('id')
        .eq('slug', row.slug)
        .single();

    if (existing) {
        const { data, error } = await supabaseServer
            .from('blog_articles')
            .update(row)
            .eq('slug', row.slug)
            .select()
            .single();
        if (error) throw error;
        return { action: 'updated', slug: row.slug };
    }

    row.id = crypto.randomUUID();
    const { error } = await supabaseServer
        .from('blog_articles')
        .insert([row]);
    if (error) throw error;
    return { action: 'created', slug: row.slug };
}

export async function POST(request) {
    if (!authenticate(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const results = [];

    if (body.event_type === 'publish_articles' && Array.isArray(body.data?.articles)) {
        for (const article of body.data.articles) {
            const result = await upsertArticle(article);
            if (result) {
                revalidateBlogPaths(result.slug);
                results.push(result);
            }
        }
    } else if (body.event_type === 'update_article' && body.data?.article) {
        const result = await upsertArticle(body.data.article);
        if (result) {
            revalidateBlogPaths(result.slug);
            results.push(result);
        }
    } else {
        return NextResponse.json({ error: 'Unknown event_type' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Webhook processed successfully', results });
}
