'use client';

import { useMemo, useState } from 'react';

// Free UTM builder. Runs entirely in the browser: no API calls, no storage.

const FIELDS = [
    { key: 'utm_source', label: 'Source', required: true, hint: 'Where the click comes from: google, newsletter, linkedin' },
    { key: 'utm_medium', label: 'Medium', required: true, hint: 'The type of channel: cpc, email, social, referral' },
    { key: 'utm_campaign', label: 'Campaign', required: true, hint: 'The promotion or launch: spring_sale, product_launch' },
    { key: 'utm_term', label: 'Term', required: false, hint: 'Optional. Paid search keyword' },
    { key: 'utm_content', label: 'Content', required: false, hint: 'Optional. Which ad or link: header_button, blue_banner' },
    { key: 'utm_id', label: 'Campaign ID', required: false, hint: 'Optional. Your ad platform campaign ID' },
];

const PRESETS = [
    { name: 'Google Ads', values: { utm_source: 'google', utm_medium: 'cpc' } },
    { name: 'Meta Ads', values: { utm_source: 'facebook', utm_medium: 'paid_social' } },
    { name: 'LinkedIn post', values: { utm_source: 'linkedin', utm_medium: 'social' } },
    { name: 'Newsletter', values: { utm_source: 'newsletter', utm_medium: 'email' } },
    { name: 'Cold email', values: { utm_source: 'outreach', utm_medium: 'email' } },
    { name: 'QR code', values: { utm_source: 'qr', utm_medium: 'offline' } },
];

// Medium values (or patterns) that GA4's default channel grouping recognizes.
const KNOWN_MEDIUM = /^(cpc|ppc|retargeting|paid.*|cp[amv]|display|banner|expandable|interstitial|social|social-network|social-media|sm|social-network|organic|referral|app|link|email|e-mail|e_mail|e mail|affiliate|audio|sms|.*push.*|.*video.*|mobile|notification|offline)$/;

const EMPTY = { utm_source: '', utm_medium: '', utm_campaign: '', utm_term: '', utm_content: '', utm_id: '' };

function clean(value, { lower, spaces }) {
    let v = value.trim();
    if (lower) v = v.toLowerCase();
    if (spaces) v = v.replace(/\s+/g, spaces);
    return v;
}

function build(rawUrl, params, opts) {
    const issues = [];
    let url = rawUrl.trim();
    if (!url) return { url: '', issues };
    if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
        issues.push({ level: 'info', text: 'Added https:// to the start of the URL.' });
    }
    let parsed;
    try {
        parsed = new URL(url);
    } catch {
        return { url: '', issues: [{ level: 'error', text: 'That does not look like a valid URL.' }] };
    }
    const existing = [...parsed.searchParams.keys()].filter((k) => k.startsWith('utm_'));
    if (existing.length) {
        issues.push({ level: 'warn', text: `The URL already has ${existing.join(', ')}. The values below replace them.` });
    }
    for (const f of FIELDS) {
        const v = clean(params[f.key] || '', opts);
        if (!v) {
            parsed.searchParams.delete(f.key);
            if (f.required) issues.push({ level: 'error', text: `${f.label} is empty. Fill in source, medium and campaign so your analytics can group the visit.` });
            continue;
        }
        parsed.searchParams.set(f.key, v);
        if (!opts.lower && v !== v.toLowerCase()) {
            issues.push({ level: 'warn', text: `${f.label} has capital letters. GA4 treats "Email" and "email" as two different values.` });
        }
        if (/\s/.test(v)) issues.push({ level: 'warn', text: `${f.label} has spaces; they show up as + or %20 in reports.` });
    }
    const medium = (params.utm_medium || '').trim().toLowerCase();
    if (medium && !KNOWN_MEDIUM.test(medium)) {
        issues.push({ level: 'warn', text: `GA4 may file medium "${medium}" under Unassigned. Common values: cpc, email, social, paid_social, referral, display, affiliate.` });
    }
    if (typeof window !== 'undefined' && parsed.hostname === window.location.hostname) {
        issues.push({ level: 'warn', text: 'Do not put UTM tags on links between pages of your own site: they start a new session and overwrite the real source.' });
    }
    return { url: parsed.toString(), issues };
}

export default function UtmBuilder() {
    const [url, setUrl] = useState('');
    const [params, setParams] = useState(EMPTY);
    const [lower, setLower] = useState(true);
    const [spaces, setSpaces] = useState('_');
    const [copied, setCopied] = useState(false);

    const result = useMemo(() => build(url, params, { lower, spaces }), [url, params, lower, spaces]);
    const ready = result.url && !result.issues.some((i) => i.level === 'error');

    function setField(key, value) {
        setParams((p) => ({ ...p, [key]: value }));
        setCopied(false);
    }

    function applyPreset(values) {
        setParams((p) => ({ ...p, ...values }));
        setCopied(false);
    }

    async function copy() {
        try {
            await navigator.clipboard.writeText(result.url);
            setCopied(true);
        } catch {
            setCopied(false);
        }
    }

    const input = 'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500';

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <label htmlFor="utm-url" className="block text-sm font-semibold text-slate-900">Website URL</label>
            <input
                id="utm-url"
                type="text"
                inputMode="url"
                placeholder="https://example.com/pricing"
                value={url}
                onChange={(e) => { setUrl(e.target.value); setCopied(false); }}
                className={`mt-1 ${input}`}
            />

            <p className="mt-5 text-sm font-semibold text-slate-900">Quick presets</p>
            <div className="mt-2 flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                    <button
                        key={p.name}
                        type="button"
                        onClick={() => applyPreset(p.values)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:border-primary-500"
                    >
                        {p.name}
                    </button>
                ))}
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FIELDS.map((f) => (
                    <div key={f.key}>
                        <label htmlFor={f.key} className="block text-sm font-semibold text-slate-900">
                            {f.label} {f.required ? <span className="text-red-600">*</span> : null}
                            <span className="ml-1 font-mono text-xs font-normal text-slate-400">{f.key}</span>
                        </label>
                        <input
                            id={f.key}
                            type="text"
                            value={params[f.key]}
                            onChange={(e) => setField(f.key, e.target.value)}
                            className={`mt-1 ${input}`}
                        />
                        <p className="mt-1 text-xs text-slate-500">{f.hint}</p>
                    </div>
                ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-700">
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)} />
                    Make everything lowercase
                </label>
                <label className="inline-flex items-center gap-2">
                    Replace spaces with
                    <select value={spaces} onChange={(e) => setSpaces(e.target.value)} className="rounded-md border border-slate-200 px-2 py-1 text-sm">
                        <option value="_">underscore _</option>
                        <option value="-">dash -</option>
                        <option value="">keep spaces</option>
                    </select>
                </label>
            </div>

            <div className="mt-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-slate-900">Your tagged URL</h3>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={copy}
                            disabled={!ready}
                            className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 disabled:opacity-40"
                        >
                            {copied ? 'Copied' : 'Copy URL'}
                        </button>
                        <button
                            type="button"
                            onClick={() => { setUrl(''); setParams(EMPTY); setCopied(false); }}
                            className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-primary-500"
                        >
                            Clear
                        </button>
                    </div>
                </div>
                <pre className="mt-3 rounded-xl bg-slate-900 text-slate-100 text-xs leading-relaxed p-4 whitespace-pre-wrap break-all min-h-[3rem]">
                    {result.url || 'Enter a URL and the three required fields to build your link.'}
                </pre>
                {result.issues.length > 0 && (
                    <ul className="mt-3 space-y-1">
                        {result.issues.map((i) => (
                            <li
                                key={i.text}
                                className={`text-xs rounded-md px-2 py-1 ${
                                    i.level === 'error' ? 'bg-red-50 text-red-700' : i.level === 'warn' ? 'bg-amber-50 text-amber-800' : 'bg-slate-50 text-slate-600'
                                }`}
                            >
                                {i.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
