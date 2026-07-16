#!/usr/bin/env node
/**
 * Google Search Console CLI — dependency-free (Node stdlib only).
 *
 * Auth: service account JSON key (path in GSC_SA_KEY_PATH, default ~/.config/dooza/gsc-sa.json).
 * The service account must be added as a user on the GSC property.
 * Docs: doc/gsc-access.md
 *
 * Usage:
 *   node scripts/gsc.mjs sites                                   # list accessible properties
 *   node scripts/gsc.mjs query [days] [dimension]                # search analytics (default: 28 days by page)
 *   node scripts/gsc.mjs query 7 query                           # last 7 days, by search query
 *   node scripts/gsc.mjs page-queries <url-path> [days]          # queries for one page, e.g. /workforce
 *   node scripts/gsc.mjs sitemaps                                # sitemap status
 *   node scripts/gsc.mjs inspect <full-url>                      # URL inspection (index status)
 */
import { readFileSync } from 'node:fs';
import { createSign } from 'node:crypto';
import { homedir } from 'node:os';

const KEY_PATH = process.env.GSC_SA_KEY_PATH || `${homedir()}/.config/dooza/gsc-sa.json`;
const SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:dooza.ai';
const SITE_ENC = encodeURIComponent(SITE_URL);

const b64url = (input) => Buffer.from(input).toString('base64url');

async function getAccessToken() {
    const key = JSON.parse(readFileSync(KEY_PATH, 'utf8'));
    const now = Math.floor(Date.now() / 1000);
    const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const claims = b64url(JSON.stringify({
        iss: key.client_email,
        scope: 'https://www.googleapis.com/auth/webmasters.readonly',
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600,
    }));
    const signer = createSign('RSA-SHA256');
    signer.update(`${header}.${claims}`);
    const signature = signer.sign(key.private_key, 'base64url');
    const jwt = `${header}.${claims}.${signature}`;

    const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `grant_type=${encodeURIComponent('urn:ietf:params:oauth:grant-type:jwt-bearer')}&assertion=${jwt}`,
    });
    const data = await res.json();
    if (!data.access_token) throw new Error(`Token exchange failed: ${JSON.stringify(data)}`);
    return data.access_token;
}

async function api(path, { method = 'GET', body } = {}) {
    const token = await getAccessToken();
    const res = await fetch(`https://searchconsole.googleapis.com${path}`, {
        method,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.status}: ${JSON.stringify(data)}`);
    return data;
}

const daysAgo = (n) => {
    const d = new Date(Date.now() - n * 86400000);
    return d.toISOString().slice(0, 10);
};

const pad = (s, n) => String(s ?? '').slice(0, n).padEnd(n);

async function searchAnalytics({ days = 28, dimension = 'page', filters = [], limit = 25 }) {
    const data = await api(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
        method: 'POST',
        body: {
            startDate: daysAgo(days + 2), // GSC data lags ~2 days
            endDate: daysAgo(2),
            dimensions: [dimension],
            rowLimit: limit,
            ...(filters.length ? { dimensionFilterGroups: [{ filters }] } : {}),
        },
    });
    const rows = data.rows || [];
    console.log(`\n${SITE_URL} — last ${days} days by ${dimension} (${rows.length} rows)\n`);
    console.log(`${pad(dimension.toUpperCase(), 64)} ${pad('CLICKS', 8)} ${pad('IMPR', 9)} ${pad('CTR', 7)} POS`);
    for (const r of rows) {
        console.log(`${pad(r.keys[0], 64)} ${pad(r.clicks, 8)} ${pad(r.impressions, 9)} ${pad((r.ctr * 100).toFixed(1) + '%', 7)} ${r.position.toFixed(1)}`);
    }
}

const [, , cmd = 'query', ...args] = process.argv;

try {
    if (cmd === 'sites') {
        const data = await api('/webmasters/v3/sites');
        for (const s of data.siteEntry || []) console.log(`${s.siteUrl}  (${s.permissionLevel})`);
    } else if (cmd === 'query') {
        await searchAnalytics({ days: Number(args[0]) || 28, dimension: args[1] || 'page' });
    } else if (cmd === 'page-queries') {
        const page = args[0];
        if (!page) throw new Error('Usage: gsc.mjs page-queries </path> [days]');
        await searchAnalytics({
            days: Number(args[1]) || 28,
            dimension: 'query',
            filters: [{ dimension: 'page', operator: 'contains', expression: page }],
        });
    } else if (cmd === 'sitemaps') {
        const data = await api(`/webmasters/v3/sites/${SITE_ENC}/sitemaps`);
        for (const s of data.sitemap || []) {
            const contents = (s.contents || []).map((c) => `${c.type}: ${c.submitted} submitted / ${c.indexed ?? '?'} indexed`).join(', ');
            console.log(`${s.path}\n  last read: ${s.lastDownloaded || 'never'} · errors: ${s.errors} · warnings: ${s.warnings}\n  ${contents}`);
        }
    } else if (cmd === 'inspect') {
        const url = args[0];
        if (!url) throw new Error('Usage: gsc.mjs inspect <full-url>');
        const data = await api('/v1/urlInspection/index:inspect', {
            method: 'POST',
            body: { inspectionUrl: url, siteUrl: SITE_URL },
        });
        const r = data.inspectionResult?.indexStatusResult || {};
        console.log(JSON.stringify({
            verdict: r.verdict,
            coverageState: r.coverageState,
            lastCrawlTime: r.lastCrawlTime,
            googleCanonical: r.googleCanonical,
            userCanonical: r.userCanonical,
        }, null, 2));
    } else {
        console.log('Commands: sites · query [days] [page|query|country|device] · page-queries </path> [days] · sitemaps · inspect <url>');
    }
} catch (err) {
    console.error(`GSC error: ${err.message}`);
    process.exit(1);
}
