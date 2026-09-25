#!/usr/bin/env node
/**
 * DataForSEO CLI — dependency-free (Node stdlib only).
 *
 * Auth: HTTP Basic with DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD from .env.local.
 * Use the API password from dataforseo.com → Dashboard → API Access,
 * NOT your account login password.
 * Docs: doc/dataforseo-access.md
 *
 * Usage:
 *   node scripts/dfs.mjs user                          # account + balance (access check)
 *   node scripts/dfs.mjs volume <kw> [kw...]           # search volume / CPC / competition
 *   node scripts/dfs.mjs serp "<query>" [depth]        # live Google SERP
 *   node scripts/dfs.mjs ranked <domain> [limit]       # keywords a domain ranks for
 *   node scripts/dfs.mjs ideas "<seed kw>" [limit]     # keyword ideas from a seed
 *   node scripts/dfs.mjs competitors <domain> [limit]  # organic competitors
 *   node scripts/dfs.mjs backlinks <domain>            # backlink summary
 */
import { readFileSync } from 'node:fs';

// Load .env.local without a dependency (KEY=VALUE, ignores comments/blank lines).
for (const file of ['.env.local', '.env']) {
    try {
        for (const line of readFileSync(file, 'utf8').split('\n')) {
            const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
            if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
        }
    } catch { /* file absent — fall back to real env */ }
}

const LOGIN = process.env.DATAFORSEO_LOGIN;
const PASSWORD = process.env.DATAFORSEO_PASSWORD;
const LOCATION = Number(process.env.DATAFORSEO_LOCATION_CODE) || 2840; // 2840 = United States
const LANGUAGE = process.env.DATAFORSEO_LANGUAGE_CODE || 'en';

if (!LOGIN || !PASSWORD) {
    console.error('Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD in .env.local — see doc/dataforseo-access.md');
    process.exit(1);
}

const AUTH = Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');

async function api(path, body) {
    const res = await fetch(`https://api.dataforseo.com/v3${path}`, {
        method: body ? 'POST' : 'GET',
        headers: {
            Authorization: `Basic ${AUTH}`,
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.status}: ${data.status_message || JSON.stringify(data)}`);
    // DataForSEO returns 200 with a per-task status code; 20000 is success.
    const task = data.tasks?.[0];
    if (data.status_code !== 20000) throw new Error(`${data.status_code}: ${data.status_message}`);
    if (task && task.status_code !== 20000) throw new Error(`${task.status_code}: ${task.status_message}`);
    return task?.result || [];
}

const pad = (s, n) => String(s ?? '').slice(0, n).padEnd(n);
const num = (n) => (n === null || n === undefined ? '—' : String(n));

const [, , cmd = 'user', ...args] = process.argv;

try {
    if (cmd === 'user') {
        const [u] = await api('/appendix/user_data');
        console.log(`\nlogin:     ${u.login}`);
        console.log(`balance:   $${u.money?.balance?.toFixed(2) ?? '?'}`);
        console.log(`rate/min:  ${u.rates?.limits?.minute ?? '?'} requests`);
        console.log(`\nAccess OK.\n`);

    } else if (cmd === 'volume') {
        if (!args.length) throw new Error('Usage: dfs.mjs volume <keyword> [keyword...]');
        const [r] = await api('/keywords_data/google_ads/search_volume/live', [
            { keywords: args, location_code: LOCATION, language_code: LANGUAGE },
        ]);
        const rows = (r || []).sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));
        console.log(`\n${pad('KEYWORD', 46)} ${pad('VOLUME', 9)} ${pad('CPC', 8)} COMP`);
        for (const k of rows) {
            console.log(`${pad(k.keyword, 46)} ${pad(num(k.search_volume), 9)} ${pad(k.cpc ? '$' + k.cpc.toFixed(2) : '—', 8)} ${k.competition || '—'}`);
        }

    } else if (cmd === 'serp') {
        const keyword = args[0];
        if (!keyword) throw new Error('Usage: dfs.mjs serp "<query>" [depth]');
        const [r] = await api('/serp/google/organic/live/advanced', [
            { keyword, location_code: LOCATION, language_code: LANGUAGE, depth: Number(args[1]) || 20 },
        ]);
        console.log(`\n"${keyword}" — ${r.se_results_count?.toLocaleString() ?? '?'} results\n`);
        console.log(`${pad('#', 4)} ${pad('DOMAIN', 32)} TITLE`);
        for (const item of (r.items || []).filter((i) => i.type === 'organic')) {
            console.log(`${pad(item.rank_absolute, 4)} ${pad(item.domain, 32)} ${String(item.title ?? '').slice(0, 60)}`);
        }

    } else if (cmd === 'ranked') {
        const target = args[0];
        if (!target) throw new Error('Usage: dfs.mjs ranked <domain> [limit]');
        const [r] = await api('/dataforseo_labs/google/ranked_keywords/live', [
            { target, location_code: LOCATION, language_code: LANGUAGE, limit: Number(args[1]) || 30 },
        ]);
        console.log(`\n${target} — ${r.total_count?.toLocaleString() ?? '?'} ranked keywords (showing ${r.items?.length ?? 0})\n`);
        console.log(`${pad('POS', 5)} ${pad('KEYWORD', 44)} ${pad('VOLUME', 9)} URL`);
        for (const item of r.items || []) {
            const kw = item.keyword_data || {};
            const serp = item.ranked_serp_element?.serp_item || {};
            console.log(`${pad(serp.rank_absolute, 5)} ${pad(kw.keyword, 44)} ${pad(num(kw.keyword_info?.search_volume), 9)} ${String(serp.relative_url ?? serp.url ?? '').slice(0, 44)}`);
        }

    } else if (cmd === 'ideas') {
        const seed = args[0];
        if (!seed) throw new Error('Usage: dfs.mjs ideas "<seed keyword>" [limit]');
        const [r] = await api('/dataforseo_labs/google/keyword_ideas/live', [
            { keywords: [seed], location_code: LOCATION, language_code: LANGUAGE, limit: Number(args[1]) || 30 },
        ]);
        console.log(`\nIdeas from "${seed}" (${r.items?.length ?? 0})\n`);
        console.log(`${pad('KEYWORD', 50)} ${pad('VOLUME', 9)} ${pad('CPC', 8)} COMP`);
        for (const item of r.items || []) {
            const info = item.keyword_info || {};
            console.log(`${pad(item.keyword, 50)} ${pad(num(info.search_volume), 9)} ${pad(info.cpc ? '$' + info.cpc.toFixed(2) : '—', 8)} ${info.competition ?? '—'}`);
        }

    } else if (cmd === 'competitors') {
        const target = args[0];
        if (!target) throw new Error('Usage: dfs.mjs competitors <domain> [limit]');
        const [r] = await api('/dataforseo_labs/google/competitors_domain/live', [
            { target, location_code: LOCATION, language_code: LANGUAGE, limit: Number(args[1]) || 20 },
        ]);
        console.log(`\nOrganic competitors of ${target}\n`);
        console.log(`${pad('DOMAIN', 40)} ${pad('SHARED KW', 10)} ${pad('AVG POS', 8)} ORGANIC KW`);
        for (const item of r.items || []) {
            const org = item.full_domain_metrics?.organic || {};
            console.log(`${pad(item.domain, 40)} ${pad(num(item.intersections), 10)} ${pad(item.avg_position?.toFixed(1), 8)} ${num(org.count)}`);
        }

    } else if (cmd === 'backlinks') {
        const target = args[0];
        if (!target) throw new Error('Usage: dfs.mjs backlinks <domain>');
        const [r] = await api('/backlinks/summary/live', [{ target, internal_list_limit: 10 }]);
        console.log(JSON.stringify({
            target: r.target,
            rank: r.rank,
            backlinks: r.backlinks,
            referring_domains: r.referring_domains,
            referring_main_domains: r.referring_main_domains,
            broken_backlinks: r.broken_backlinks,
        }, null, 2));

    } else {
        console.log('Commands: user · volume <kw...> · serp "<query>" [depth] · ranked <domain> [limit] · ideas "<seed>" [limit] · competitors <domain> [limit] · backlinks <domain>');
    }
} catch (err) {
    console.error(`DataForSEO error: ${err.message}`);
    process.exit(1);
}
