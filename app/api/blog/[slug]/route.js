import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { supabaseServer } from '../../../../lib/supabaseServer';
import { dbToPost, postToDb } from '../../../../lib/blogTransform';

function authenticate(request) {
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.DOOZA_BLOG_API_KEY;
    if (!apiKey) return false;
    return authHeader === `Bearer ${apiKey}`;
}

function revalidateBlogPaths(slug) {
    revalidatePath('/blog');
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss.xml');
    revalidatePath('/llms.txt');
    if (slug) {
        revalidatePath(`/blog/${slug}`);
    }
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

    revalidateBlogPaths(slug);
    if (data.slug && data.slug !== slug) {
        revalidateBlogPaths(data.slug);
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

    revalidateBlogPaths(slug);

    return new Response(null, { status: 204 });
}
