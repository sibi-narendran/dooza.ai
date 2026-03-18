import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabaseServer } from '../../../lib/supabaseServer';
import { dbToPost, postToDb, generateTocFromHtml } from '../../../lib/blogTransform';

function authenticate(request) {
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.DOOZA_BLOG_API_KEY;
    if (!apiKey) return false;
    return authHeader === `Bearer ${apiKey}`;
}

// GET /api/blog — List published posts (public)
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '50', 10)));
    const offset = (page - 1) * limit;

    let query = supabaseServer
        .from('blog_articles')
        .select('id, slug, title, meta_description, tags, image_url, content_html, source, created_at', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

    if (tag) {
        query = query.contains('tags', [tag]);
    }

    const { data, error, count } = await query;

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const posts = (data || []).map(dbToPost);

    return NextResponse.json(
        {
            posts,
            pagination: {
                page,
                limit,
                total: count || 0,
                totalPages: Math.ceil((count || 0) / limit),
            },
        },
        {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
            },
        }
    );
}

// POST /api/blog — Create a new blog post (authenticated)
export async function POST(request) {
    if (!authenticate(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    // Validate required fields
    const required = ['slug', 'title', 'content'];
    const missing = required.filter(f => !body[f]);
    if (missing.length > 0) {
        return NextResponse.json(
            { error: `Missing required fields: ${missing.join(', ')}` },
            { status: 400 }
        );
    }

    const row = postToDb(body);
    row.id = crypto.randomUUID();

    const { data, error } = await supabaseServer
        .from('blog_articles')
        .insert([row])
        .select()
        .single();

    if (error) {
        if (error.code === '23505') {
            return NextResponse.json(
                { error: `A post with slug "${body.slug}" already exists` },
                { status: 409 }
            );
        }
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ post: dbToPost(data) }, { status: 201 });
}
