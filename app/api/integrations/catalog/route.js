import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const DEFAULT_WORKFORCE_API_URL = 'https://api.workforce.dooza.ai';
const MAX_LIMIT = 24;

function getSafeLimit(value) {
    const parsed = Number.parseInt(value || '12', 10);
    if (!Number.isFinite(parsed)) return 12;
    return Math.min(MAX_LIMIT, Math.max(1, parsed));
}

function appendParam(params, key, value) {
    const normalizedValue = String(value || '').trim();
    if (normalizedValue) params.set(key, normalizedValue);
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const upstreamBaseUrl = process.env.WORKFORCE_API_URL || DEFAULT_WORKFORCE_API_URL;
    const upstreamUrl = new URL('/api/catalog', upstreamBaseUrl);

    appendParam(upstreamUrl.searchParams, 'search', searchParams.get('search'));
    appendParam(upstreamUrl.searchParams, 'category', searchParams.get('category'));
    appendParam(upstreamUrl.searchParams, 'cursor', searchParams.get('cursor'));
    upstreamUrl.searchParams.set('limit', String(getSafeLimit(searchParams.get('limit'))));

    try {
        const response = await fetch(upstreamUrl, {
            headers: { Accept: 'application/json' },
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch integration catalog' },
                { status: response.status }
            );
        }

        const data = await response.json();
        const items = Array.isArray(data.items) ? data.items : [];

        return NextResponse.json(
            {
                items: items.map((item) => ({
                    slug: item.slug,
                    name: item.name,
                    description: item.description || '',
                    logo: item.logo || '',
                    toolsCount: item.toolsCount || 0,
                    categories: Array.isArray(item.categories) ? item.categories : [],
                    authSchemes: Array.isArray(item.authSchemes) ? item.authSchemes : [],
                    noAuth: Boolean(item.noAuth),
                })),
                totalItems: data.totalItems || items.length,
                totalPages: data.totalPages || 1,
                currentPage: data.currentPage || 1,
                nextCursor: data.nextCursor || null,
            },
            {
                headers: {
                    'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
                },
            }
        );
    } catch {
        return NextResponse.json(
            { error: 'Integration catalog is unavailable' },
            { status: 502 }
        );
    }
}
