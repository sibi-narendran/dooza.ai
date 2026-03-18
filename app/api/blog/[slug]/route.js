import { NextResponse } from 'next/server';
import { supabaseServer } from '../../../../lib/supabaseServer';
import { dbToPost, postToDb } from '../../../../lib/blogTransform';

function authenticate(request) {
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.DOOZA_BLOG_API_KEY;
    if (!apiKey) return false;
    return authHeader === `Bearer ${apiKey}`;
}

// GET /api/blog/[slug] — Single post (public)
export async function GET(request, { params }) {
    const { slug } = await params;

    const { data, error } = await supabaseServer
        .from('blog_articles')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error || !data) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(
        { post: dbToPost(data) },
        {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
            },
        }
    );
}

// PATCH /api/blog/[slug] — Update post (authenticated)
export async function PATCH(request, { params }) {
    if (!authenticate(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const row = postToDb(body);

    const { data, error } = await supabaseServer
        .from('blog_articles')
        .update(row)
        .eq('slug', slug)
        .select()
        .single();

    if (error || !data) {
        return NextResponse.json({ error: 'Post not found or update failed' }, { status: 404 });
    }

    return NextResponse.json({ post: dbToPost(data) });
}

// DELETE /api/blog/[slug] — Delete post (authenticated)
export async function DELETE(request, { params }) {
    if (!authenticate(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    const { error } = await supabaseServer
        .from('blog_articles')
        .delete()
        .eq('slug', slug);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return new Response(null, { status: 204 });
}
