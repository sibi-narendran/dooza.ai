// Serves homepage videos with HTTP Range (206) support: Worker static assets answer 200 with the whole file,
// and iOS Safari will not play a <video> without partial responses (2026-10-22).
import { getCloudflareContext } from '@opennextjs/cloudflare';

const FILES = new Set(['dooza-crew-new-teammate.mp4']);

export async function GET(request, { params }) {
    const { file } = await params;
    if (!FILES.has(file)) return new Response('Not found', { status: 404 });
    const { env } = getCloudflareContext();
    const res = await env.ASSETS.fetch(new URL(`/video/${file}`, request.url));
    if (!res.ok) return new Response('Not found', { status: 404 });
    const buf = await res.arrayBuffer();
    const size = buf.byteLength;
    const headers = { 'Content-Type': 'video/mp4', 'Accept-Ranges': 'bytes', 'Cache-Control': 'public, max-age=86400' };
    const m = /bytes=(\d*)-(\d*)/.exec(request.headers.get('range') || '');
    if (!m || (m[1] === '' && m[2] === '')) {
        return new Response(buf, { status: 200, headers: { ...headers, 'Content-Length': String(size) } });
    }
    let start = m[1] === '' ? size - Number(m[2]) : Number(m[1]);
    let end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1);
    if (start < 0) start = 0;
    if (start >= size || start > end) {
        return new Response(null, { status: 416, headers: { ...headers, 'Content-Range': `bytes */${size}` } });
    }
    return new Response(buf.slice(start, end + 1), {
        status: 206,
        headers: { ...headers, 'Content-Length': String(end - start + 1), 'Content-Range': `bytes ${start}-${end}/${size}` },
    });
}
