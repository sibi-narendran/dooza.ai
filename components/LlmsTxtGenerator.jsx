'use client';

import { useMemo, useRef, useState } from 'react';

// Free llms.txt generator. Everything runs in the browser: no network calls,
// nothing is uploaded. Output follows the llmstxt.org format:
// H1 name, blockquote summary, optional paragraphs, H2 link sections, optional "## Optional".

const MAX_IMPORT_URLS = 500;

const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100';
const labelClass = 'block text-sm font-semibold text-slate-900 mb-1';
const smallBtn =
    'inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-primary-500 hover:text-primary-700 transition-colors';
const primaryBtn =
    'inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors disabled:opacity-50';

function isAbsoluteUrl(url) {
    return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(url.trim());
}

function prettify(segment) {
    let s = segment;
    try {
        s = decodeURIComponent(s);
    } catch (e) {
        // keep the raw segment
    }
    s = s.replace(/\.(html?|php|aspx?|md)$/i, '').replace(/[-_+]+/g, ' ').trim();
    if (!s) return '';
    return s
        .split(/\s+/)
        .map((w) => (w.length <= 2 && w !== w.toUpperCase() ? w : w.charAt(0).toUpperCase() + w.slice(1)))
        .join(' ')
        .replace(/^./, (c) => c.toUpperCase());
}

function extractLocs(xml) {
    let locs = [];
    try {
        const doc = new DOMParser().parseFromString(xml, 'application/xml');
        if (!doc.getElementsByTagName('parsererror').length) {
            const nodes = doc.getElementsByTagNameNS('*', 'loc');
            locs = Array.from(nodes).map((n) => n.textContent.trim());
            const isIndex = doc.getElementsByTagNameNS('*', 'sitemapindex').length > 0;
            return { locs: locs.filter(Boolean), isIndex };
        }
    } catch (e) {
        // fall through to the regex fallback
    }
    // Fallback for slightly broken XML: pull anything between <loc> tags.
    const re = /<loc>\s*(?:<!\[CDATA\[)?\s*([^<\]]+?)\s*(?:\]\]>)?\s*<\/loc>/gi;
    let m;
    while ((m = re.exec(xml)) !== null) locs.push(m[1].trim());
    return { locs: locs.filter(Boolean), isIndex: /<sitemapindex/i.test(xml) };
}

function buildLlmsTxt({ siteName, summary, details, sections, optionalEnabled, optionalRows }) {
    const lines = [];
    lines.push(`# ${siteName.trim() || 'Your Site Name'}`);
    lines.push('');
    if (summary.trim()) {
        lines.push(`> ${summary.trim().replace(/\s*\n\s*/g, ' ')}`);
        lines.push('');
    }
    if (details.trim()) {
        lines.push(details.trim());
        lines.push('');
    }
    const renderRows = (rows) =>
        rows
            .filter((r) => r.url.trim() || r.title.trim())
            .map((r) => {
                const title = r.title.trim() || r.url.trim();
                const note = r.note.trim();
                return `- [${title}](${r.url.trim()})${note ? `: ${note}` : ''}`;
            });
    sections.forEach((s) => {
        const rows = renderRows(s.rows);
        if (!s.name.trim() && !rows.length) return;
        lines.push(`## ${s.name.trim() || 'Untitled section'}`);
        lines.push('');
        rows.forEach((r) => lines.push(r));
        lines.push('');
    });
    if (optionalEnabled) {
        const rows = renderRows(optionalRows);
        if (rows.length) {
            lines.push('## Optional');
            lines.push('');
            rows.forEach((r) => lines.push(r));
            lines.push('');
        }
    }
    return lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

function validate({ siteName, summary, sections, optionalEnabled, optionalRows }) {
    const hints = [];
    if (!siteName.trim()) hints.push('Add a site or project name. The H1 is the only required part of an llms.txt file.');
    if (!summary.trim()) hints.push('Add a one-line summary. The spec expects a short blockquote right under the H1.');
    const allRows = [
        ...sections.flatMap((s) => s.rows.map((r) => ({ ...r, section: s.name || 'Untitled section' }))),
        ...(optionalEnabled ? optionalRows.map((r) => ({ ...r, section: 'Optional' })) : []),
    ];
    const filled = allRows.filter((r) => r.url.trim() || r.title.trim());
    if (!filled.length) hints.push('Add at least one link so AI tools know which pages matter most.');
    const relative = filled.filter((r) => r.url.trim() && !isAbsoluteUrl(r.url));
    if (relative.length) {
        hints.push(
            `${relative.length} link${relative.length === 1 ? ' is' : 's are'} not a full URL (for example ${relative[0].url.trim()}). Use absolute URLs that start with https://.`
        );
    }
    const missingUrl = filled.filter((r) => !r.url.trim());
    if (missingUrl.length) hints.push(`${missingUrl.length} row${missingUrl.length === 1 ? ' has' : 's have'} a title but no URL.`);
    const unnamed = sections.filter((s) => !s.name.trim() && s.rows.some((r) => r.url.trim()));
    if (unnamed.length) hints.push('Give every section a name. Each one becomes an H2 heading.');
    return hints;
}

export default function LlmsTxtGenerator() {
    const idRef = useRef(100);
    const nextId = () => {
        idRef.current += 1;
        return `id-${idRef.current}`;
    };
    const emptyRow = () => ({ id: nextId(), title: '', url: '', note: '' });

    const [siteName, setSiteName] = useState('');
    const [summary, setSummary] = useState('');
    const [details, setDetails] = useState('');
    const [sections, setSections] = useState([
        { id: 's-1', name: 'Docs', rows: [{ id: 'r-1', title: '', url: '', note: '' }] },
    ]);
    const [optionalEnabled, setOptionalEnabled] = useState(false);
    const [optionalRows, setOptionalRows] = useState([{ id: 'o-1', title: '', url: '', note: '' }]);
    const [sitemapXml, setSitemapXml] = useState('');
    const [importMsg, setImportMsg] = useState('');
    const [copied, setCopied] = useState(false);

    const data = { siteName, summary, details, sections, optionalEnabled, optionalRows };
    const output = useMemo(() => buildLlmsTxt(data), [siteName, summary, details, sections, optionalEnabled, optionalRows]); // eslint-disable-line react-hooks/exhaustive-deps
    const hints = useMemo(() => validate(data), [siteName, summary, sections, optionalEnabled, optionalRows]); // eslint-disable-line react-hooks/exhaustive-deps

    // Section helpers
    const updateSection = (sid, patch) =>
        setSections((prev) => prev.map((s) => (s.id === sid ? { ...s, ...patch } : s)));
    const addSection = () => setSections((prev) => [...prev, { id: nextId(), name: '', rows: [emptyRow()] }]);
    const removeSection = (sid) => setSections((prev) => prev.filter((s) => s.id !== sid));
    const moveSection = (sid, dir) =>
        setSections((prev) => {
            const i = prev.findIndex((s) => s.id === sid);
            const j = i + dir;
            if (i < 0 || j < 0 || j >= prev.length) return prev;
            const copy = [...prev];
            [copy[i], copy[j]] = [copy[j], copy[i]];
            return copy;
        });
    const updateRow = (sid, rid, patch) =>
        setSections((prev) =>
            prev.map((s) =>
                s.id === sid ? { ...s, rows: s.rows.map((r) => (r.id === rid ? { ...r, ...patch } : r)) } : s
            )
        );
    const addRow = (sid) =>
        setSections((prev) => prev.map((s) => (s.id === sid ? { ...s, rows: [...s.rows, emptyRow()] } : s)));
    const removeRow = (sid, rid) =>
        setSections((prev) =>
            prev.map((s) => (s.id === sid ? { ...s, rows: s.rows.filter((r) => r.id !== rid) } : s))
        );

    // Optional section helpers
    const updateOptRow = (rid, patch) =>
        setOptionalRows((prev) => prev.map((r) => (r.id === rid ? { ...r, ...patch } : r)));
    const addOptRow = () => setOptionalRows((prev) => [...prev, emptyRow()]);
    const removeOptRow = (rid) => setOptionalRows((prev) => prev.filter((r) => r.id !== rid));

    const importSitemap = () => {
        if (!sitemapXml.trim()) {
            setImportMsg('Paste the contents of your sitemap.xml first.');
            return;
        }
        const { locs, isIndex } = extractLocs(sitemapXml);
        if (!locs.length) {
            setImportMsg('No <loc> URLs found. Check that you pasted the XML of a sitemap.');
            return;
        }
        if (isIndex) {
            setImportMsg(
                'This looks like a sitemap index (a list of other sitemaps). Open one of the listed sitemaps and paste its contents instead.'
            );
            return;
        }
        const unique = Array.from(new Set(locs)).slice(0, MAX_IMPORT_URLS);
        const groups = new Map();
        let firstHost = '';
        unique.forEach((loc) => {
            let u;
            try {
                u = new URL(loc);
            } catch (e) {
                return;
            }
            if (!firstHost) firstHost = u.hostname.replace(/^www\./, '');
            const parts = u.pathname.split('/').filter(Boolean);
            const groupKey = parts.length > 1 ? parts[0] : 'main';
            const groupName = groupKey === 'main' ? 'Main pages' : prettify(groupKey) || 'Pages';
            const title = parts.length ? prettify(parts[parts.length - 1]) || u.hostname : 'Home';
            if (!groups.has(groupName)) groups.set(groupName, []);
            groups.get(groupName).push({ id: nextId(), title, url: loc, note: '' });
        });
        if (!groups.size) {
            setImportMsg('None of the URLs could be read. Sitemap URLs must be absolute (https://...).');
            return;
        }
        setSections((prev) => {
            // Drop sections that are still completely empty, then merge by name.
            const kept = prev
                .map((s) => ({ ...s, rows: s.rows.filter((r) => r.url.trim() || r.title.trim() || r.note.trim()) }))
                .filter((s) => s.rows.length);
            const merged = [...kept];
            groups.forEach((rows, name) => {
                const existing = merged.find((s) => s.name.trim().toLowerCase() === name.toLowerCase());
                if (existing) {
                    const urls = new Set(existing.rows.map((r) => r.url.trim()));
                    existing.rows = [...existing.rows, ...rows.filter((r) => !urls.has(r.url))];
                } else {
                    merged.push({ id: nextId(), name, rows });
                }
            });
            return merged;
        });
        if (!siteName.trim() && firstHost) setSiteName(firstHost);
        const capped = locs.length > MAX_IMPORT_URLS ? ` (first ${MAX_IMPORT_URLS} kept)` : '';
        setImportMsg(
            `Imported ${unique.length} URL${unique.length === 1 ? '' : 's'}${capped} into ${groups.size} section${groups.size === 1 ? '' : 's'}. Trim it to the pages that matter and add a short note to each.`
        );
    };

    const copyOutput = async () => {
        try {
            await navigator.clipboard.writeText(output);
        } catch (e) {
            const ta = document.createElement('textarea');
            ta.value = output;
            document.body.appendChild(ta);
            ta.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                // ignore
            }
            document.body.removeChild(ta);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    };

    const downloadOutput = () => {
        const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'llms.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    const renderRowFields = (row, onChange, onRemove, canRemove) => (
        <div key={row.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-start">
            <input
                className={`${inputClass} sm:col-span-3`}
                placeholder="Title"
                aria-label="Link title"
                value={row.title}
                onChange={(e) => onChange({ title: e.target.value })}
            />
            <input
                className={`${inputClass} sm:col-span-4`}
                placeholder="https://example.com/page"
                aria-label="Link URL"
                inputMode="url"
                value={row.url}
                onChange={(e) => onChange({ url: e.target.value })}
            />
            <input
                className={`${inputClass} sm:col-span-4`}
                placeholder="Short note (optional)"
                aria-label="Link note"
                value={row.note}
                onChange={(e) => onChange({ note: e.target.value })}
            />
            <button
                type="button"
                onClick={onRemove}
                disabled={!canRemove}
                className="sm:col-span-1 rounded-lg px-2 py-2 text-sm text-slate-400 hover:text-red-600 disabled:opacity-30"
                aria-label="Remove link"
                title="Remove link"
            >
                ✕
            </button>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Basics */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
                <div>
                    <label htmlFor="llms-site-name" className={labelClass}>
                        Site or project name <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="llms-site-name"
                        className={inputClass}
                        placeholder="Acme Plumbing"
                        value={siteName}
                        onChange={(e) => setSiteName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="llms-summary" className={labelClass}>
                        One-line summary
                    </label>
                    <input
                        id="llms-summary"
                        className={inputClass}
                        placeholder="Family-run plumbing company serving Austin, TX since 1998."
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="llms-details" className={labelClass}>
                        Details <span className="font-normal text-slate-500">(optional)</span>
                    </label>
                    <textarea
                        id="llms-details"
                        className={`${inputClass} min-h-[88px]`}
                        placeholder="Anything an AI model should know before reading your pages: who you serve, what you do not offer, how to read your docs."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>
            </div>

            {/* Sitemap import */}
            <details className="bg-white border border-slate-200 rounded-xl p-5 group">
                <summary className="cursor-pointer font-semibold text-slate-900">
                    Import from sitemap <span className="font-normal text-slate-500 text-sm">(paste your sitemap.xml)</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">
                    Open yoursite.com/sitemap.xml in a new tab, copy everything, and paste it below. The tool
                    reads the URLs in your browser and groups them by the first part of the path.
                </p>
                <textarea
                    className={`${inputClass} mt-3 min-h-[120px] font-mono text-xs`}
                    placeholder={'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://example.com/</loc></url>\n</urlset>'}
                    aria-label="Sitemap XML"
                    value={sitemapXml}
                    onChange={(e) => setSitemapXml(e.target.value)}
                />
                <div className="mt-3 flex flex-wrap items-center gap-3">
                    <button type="button" onClick={importSitemap} className={primaryBtn}>
                        Import URLs
                    </button>
                    {importMsg && <p className="text-sm text-slate-600" role="status">{importMsg}</p>}
                </div>
            </details>

            {/* Sections */}
            <div className="space-y-4">
                {sections.map((section, si) => (
                    <div key={section.id} className="bg-white border border-slate-200 rounded-xl p-5">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <input
                                className={`${inputClass} flex-1 min-w-[160px] font-semibold`}
                                placeholder="Section name (for example Docs, Services, Blog)"
                                aria-label="Section name"
                                value={section.name}
                                onChange={(e) => updateSection(section.id, { name: e.target.value })}
                            />
                            <button type="button" className={smallBtn} onClick={() => moveSection(section.id, -1)} disabled={si === 0} aria-label="Move section up">
                                ↑
                            </button>
                            <button type="button" className={smallBtn} onClick={() => moveSection(section.id, 1)} disabled={si === sections.length - 1} aria-label="Move section down">
                                ↓
                            </button>
                            <button type="button" className={`${smallBtn} hover:text-red-600 hover:border-red-300`} onClick={() => removeSection(section.id)}>
                                Remove section
                            </button>
                        </div>
                        <div className="space-y-2">
                            {section.rows.map((row) =>
                                renderRowFields(
                                    row,
                                    (patch) => updateRow(section.id, row.id, patch),
                                    () => removeRow(section.id, row.id),
                                    section.rows.length > 1
                                )
                            )}
                        </div>
                        <button type="button" className={`${smallBtn} mt-3`} onClick={() => addRow(section.id)}>
                            + Add link
                        </button>
                    </div>
                ))}
                <button type="button" className={smallBtn} onClick={addSection}>
                    + Add section
                </button>
            </div>

            {/* Optional section */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-primary-600"
                        checked={optionalEnabled}
                        onChange={(e) => setOptionalEnabled(e.target.checked)}
                    />
                    <span>
                        <span className="font-semibold text-slate-900">Add an &quot;Optional&quot; section</span>
                        <span className="block text-sm text-slate-600">
                            The spec says tools may skip links under ## Optional when they need a shorter context.
                            Put nice-to-have pages here.
                        </span>
                    </span>
                </label>
                {optionalEnabled && (
                    <div className="mt-4">
                        <div className="space-y-2">
                            {optionalRows.map((row) =>
                                renderRowFields(
                                    row,
                                    (patch) => updateOptRow(row.id, patch),
                                    () => removeOptRow(row.id),
                                    optionalRows.length > 1
                                )
                            )}
                        </div>
                        <button type="button" className={`${smallBtn} mt-3`} onClick={addOptRow}>
                            + Add link
                        </button>
                    </div>
                )}
            </div>

            {/* Output */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <p className="font-semibold text-slate-900">Your llms.txt</p>
                    <div className="flex gap-2">
                        <button type="button" onClick={copyOutput} className={smallBtn}>
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                        <button type="button" onClick={downloadOutput} className={primaryBtn}>
                            Download llms.txt
                        </button>
                    </div>
                </div>
                {hints.length > 0 && (
                    <ul className="mb-3 space-y-1 rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800">
                        {hints.map((h) => (
                            <li key={h}>• {h}</li>
                        ))}
                    </ul>
                )}
                <pre className="max-h-[480px] overflow-auto rounded-lg bg-slate-900 p-4 text-xs leading-relaxed text-slate-100 whitespace-pre-wrap break-words">
                    {output}
                </pre>
                <p className="mt-3 text-xs text-slate-500">
                    Save the file as llms.txt at the root of your site, so it loads at https://yoursite.com/llms.txt.
                    Nothing you type here leaves your browser.
                </p>
            </div>
        </div>
    );
}
