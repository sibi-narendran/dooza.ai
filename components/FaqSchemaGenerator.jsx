'use client';

import { useMemo, useRef, useState } from 'react';

// Free FAQ schema generator. Runs entirely in the browser: no API calls, no storage.

// Tags Google allows inside FAQ answer text.
const ALLOWED_TAGS = new Set([
    'a', 'br', 'ol', 'ul', 'li', 'p', 'b', 'strong', 'i', 'em', 'div',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
]);

const THIN_WORDS = 20;

const EXAMPLE_ROWS = [
    {
        id: 1,
        q: 'How long does shipping take?',
        a: 'Most orders ship within one business day and arrive in 3 to 5 business days inside the US. You get a tracking link by email as soon as your order leaves our warehouse.',
    },
    {
        id: 2,
        q: 'Can I return an item?',
        a: 'Yes. You can return any unused item within 30 days of delivery for a full refund. Start a return from your account page or read our <a href="https://example.com/returns">returns policy</a>.',
    },
];

function stripTags(html) {
    return html.replace(/<[^>]*>/g, ' ');
}

function wordCount(text) {
    const words = stripTags(text).trim().split(/\s+/).filter(Boolean);
    return words.length;
}

function disallowedTags(html) {
    const found = new Set();
    const re = /<\/?([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*>/g;
    let m;
    while ((m = re.exec(html)) !== null) {
        const tag = m[1].toLowerCase();
        if (!ALLOWED_TAGS.has(tag)) found.add(tag);
    }
    return [...found];
}

// Parses either "Q: ... / A: ..." text or a 2-column TSV pasted from a spreadsheet.
function parseBulk(text) {
    const lines = text.replace(/\r\n?/g, '\n').split('\n');
    const nonEmpty = lines.filter((l) => l.trim() !== '');
    if (nonEmpty.length === 0) return [];

    const tabLines = nonEmpty.filter((l) => l.includes('\t'));
    if (tabLines.length > 0 && tabLines.length >= nonEmpty.length / 2) {
        const pairs = [];
        nonEmpty.forEach((line, i) => {
            const cells = line.split('\t');
            const q = (cells[0] || '').trim();
            const a = cells.slice(1).join(' ').trim();
            // Skip a header row such as "Question<TAB>Answer".
            if (i === 0 && /^questions?$/i.test(q) && /^answers?$/i.test(a)) return;
            if (q || a) pairs.push({ q, a });
        });
        return pairs;
    }

    const qRe = /^\s*(?:Q|Question)\s*\d*\s*[:.)\-]\s*/i;
    const aRe = /^\s*(?:A|Answer)\s*\d*\s*[:.)\-]\s*/i;
    const pairs = [];
    let current = null;
    let field = null;
    for (const line of lines) {
        if (qRe.test(line)) {
            if (current) pairs.push(current);
            current = { q: line.replace(qRe, '').trim(), a: '' };
            field = 'q';
        } else if (aRe.test(line)) {
            if (!current) current = { q: '', a: '' };
            current.a = [current.a, line.replace(aRe, '').trim()].filter(Boolean).join('\n');
            field = 'a';
        } else if (current && field && line.trim() !== '') {
            current[field] = [current[field], line.trim()].filter(Boolean).join(field === 'q' ? ' ' : '\n');
        }
    }
    if (current) pairs.push(current);
    return pairs.filter((p) => p.q || p.a);
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            return ok;
        } catch {
            return false;
        }
    }
}

export default function FaqSchemaGenerator() {
    const [rows, setRows] = useState(EXAMPLE_ROWS);
    const [mode, setMode] = useState('rows');
    const [bulkText, setBulkText] = useState('');
    const [bulkMessage, setBulkMessage] = useState('');
    const [copied, setCopied] = useState('');
    const nextId = useRef(EXAMPLE_ROWS.length + 1);

    const newId = () => {
        const id = nextId.current;
        nextId.current += 1;
        return id;
    };

    const updateRow = (id, key, value) =>
        setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)));

    const addRow = () => setRows((prev) => [...prev, { id: newId(), q: '', a: '' }]);

    const removeRow = (id) => setRows((prev) => prev.filter((r) => r.id !== id));

    const moveRow = (index, dir) =>
        setRows((prev) => {
            const target = index + dir;
            if (target < 0 || target >= prev.length) return prev;
            const next = [...prev];
            [next[index], next[target]] = [next[target], next[index]];
            return next;
        });

    const clearAll = () => setRows([{ id: newId(), q: '', a: '' }]);

    const importBulk = (replace) => {
        const pairs = parseBulk(bulkText);
        if (pairs.length === 0) {
            setBulkMessage('No questions found. Use "Q:" and "A:" lines, or two columns copied from a spreadsheet.');
            return;
        }
        const imported = pairs.map((p) => ({ id: newId(), q: p.q, a: p.a }));
        setRows((prev) => {
            const kept = replace ? [] : prev.filter((r) => r.q.trim() || r.a.trim());
            return [...kept, ...imported];
        });
        setBulkMessage(`Imported ${pairs.length} question${pairs.length === 1 ? '' : 's'}.`);
        setMode('rows');
    };

    const issues = useMemo(() => {
        const counts = new Map();
        rows.forEach((r) => {
            const key = r.q.trim().toLowerCase().replace(/\s+/g, ' ');
            if (key) counts.set(key, (counts.get(key) || 0) + 1);
        });
        const byRow = {};
        rows.forEach((r) => {
            const list = [];
            const q = r.q.trim();
            const a = r.a.trim();
            if (!q) list.push({ level: 'error', text: 'Question is empty. This row is left out of the schema.' });
            if (!a) list.push({ level: 'error', text: 'Answer is empty. This row is left out of the schema.' });
            const key = q.toLowerCase().replace(/\s+/g, ' ');
            if (key && counts.get(key) > 1) list.push({ level: 'warn', text: 'Duplicate question. Each question should appear once.' });
            if (a) {
                const words = wordCount(a);
                if (words < THIN_WORDS) list.push({ level: 'warn', text: `Thin answer (${words} word${words === 1 ? '' : 's'}). Aim for a complete answer of ${THIN_WORDS}+ words.` });
                const bad = disallowedTags(a);
                if (bad.length) list.push({ level: 'warn', text: `Google may ignore these tags: ${bad.map((t) => `<${t}>`).join(', ')}. Allowed: a, br, ol, ul, li, p, b, strong, i, em, h1-h6, div.` });
            }
            byRow[r.id] = list;
        });
        return byRow;
    }, [rows]);

    const validRows = useMemo(() => rows.filter((r) => r.q.trim() && r.a.trim()), [rows]);

    const json = useMemo(() => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: validRows.map((r) => ({
                '@type': 'Question',
                name: r.q.trim(),
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: r.a.trim(),
                },
            })),
        };
        return JSON.stringify(schema, null, 2);
    }, [validRows]);

    // Escape "</" so an answer containing "</script>" cannot close the tag early. "<\/" is still valid JSON.
    const scriptTag = `<script type="application/ld+json">\n${json.replace(/<\//g, '<\\/')}\n</script>`;

    const totalWarnings = Object.values(issues).reduce((n, list) => n + list.length, 0);

    const handleCopy = async (which) => {
        const ok = await copyText(which === 'script' ? scriptTag : json);
        setCopied(ok ? which : 'failed');
        setTimeout(() => setCopied(''), 2000);
    };

    const tabClass = (active) =>
        `px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
            active ? 'bg-primary-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-500'
        }`;

    const smallBtn =
        'inline-flex items-center justify-center h-8 min-w-8 px-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm hover:border-primary-500 hover:text-primary-700 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600';

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6">
            <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Input mode">
                <button type="button" role="tab" aria-selected={mode === 'rows'} className={tabClass(mode === 'rows')} onClick={() => setMode('rows')}>
                    Question by question
                </button>
                <button type="button" role="tab" aria-selected={mode === 'bulk'} className={tabClass(mode === 'bulk')} onClick={() => setMode('bulk')}>
                    Bulk paste
                </button>
            </div>

            {mode === 'bulk' ? (
                <div>
                    <label htmlFor="faq-bulk" className="block text-sm font-semibold text-slate-900">
                        Paste your FAQs
                    </label>
                    <p className="mt-1 text-sm text-slate-500">
                        Use <code className="bg-slate-100 px-1 rounded">Q:</code> and <code className="bg-slate-100 px-1 rounded">A:</code> lines,
                        or copy two columns (question, answer) straight from Google Sheets or Excel.
                    </p>
                    <textarea
                        id="faq-bulk"
                        value={bulkText}
                        onChange={(e) => setBulkText(e.target.value)}
                        rows={10}
                        placeholder={'Q: How long does shipping take?\nA: Most orders arrive in 3 to 5 business days.\n\nQ: Can I return an item?\nA: Yes, within 30 days of delivery.'}
                        className="mt-3 w-full rounded-xl border border-slate-200 p-3 text-sm font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <div className="mt-3 flex flex-wrap gap-2">
                        <button type="button" onClick={() => importBulk(true)} className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700">
                            Replace rows
                        </button>
                        <button type="button" onClick={() => importBulk(false)} className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-primary-500">
                            Add to rows
                        </button>
                    </div>
                    {bulkMessage && <p className="mt-2 text-sm text-slate-600" role="status">{bulkMessage}</p>}
                </div>
            ) : (
                <div>
                    {bulkMessage && <p className="mb-3 text-sm text-slate-600" role="status">{bulkMessage}</p>}
                    <ol className="space-y-4">
                        {rows.map((row, i) => (
                            <li key={row.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                                <div className="flex items-center justify-between gap-2 mb-2">
                                    <span className="text-xs font-semibold text-slate-500">Question {i + 1}</span>
                                    <div className="flex gap-1">
                                        <button type="button" className={smallBtn} onClick={() => moveRow(i, -1)} disabled={i === 0} aria-label={`Move question ${i + 1} up`}>
                                            ↑
                                        </button>
                                        <button type="button" className={smallBtn} onClick={() => moveRow(i, 1)} disabled={i === rows.length - 1} aria-label={`Move question ${i + 1} down`}>
                                            ↓
                                        </button>
                                        <button type="button" className={smallBtn} onClick={() => removeRow(row.id)} disabled={rows.length === 1} aria-label={`Remove question ${i + 1}`}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <label htmlFor={`faq-q-${row.id}`} className="sr-only">Question {i + 1}</label>
                                <input
                                    id={`faq-q-${row.id}`}
                                    type="text"
                                    value={row.q}
                                    onChange={(e) => updateRow(row.id, 'q', e.target.value)}
                                    placeholder="Question"
                                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                                <label htmlFor={`faq-a-${row.id}`} className="sr-only">Answer {i + 1}</label>
                                <textarea
                                    id={`faq-a-${row.id}`}
                                    value={row.a}
                                    onChange={(e) => updateRow(row.id, 'a', e.target.value)}
                                    placeholder='Answer (simple HTML allowed, e.g. <a href="https://...">link</a>)'
                                    rows={3}
                                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                                {issues[row.id]?.length > 0 && (
                                    <ul className="mt-2 space-y-1">
                                        {issues[row.id].map((issue) => (
                                            <li
                                                key={issue.text}
                                                className={`text-xs rounded-md px-2 py-1 ${
                                                    issue.level === 'error' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-800'
                                                }`}
                                            >
                                                {issue.text}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ol>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <button type="button" onClick={addRow} className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700">
                            + Add question
                        </button>
                        <button type="button" onClick={clearAll} className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-primary-500">
                            Clear all
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-slate-900">Your FAQ schema (JSON-LD)</h3>
                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => handleCopy('script')}
                            disabled={validRows.length === 0}
                            className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 disabled:opacity-40"
                        >
                            {copied === 'script' ? 'Copied' : 'Copy code'}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleCopy('json')}
                            disabled={validRows.length === 0}
                            className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-primary-500 disabled:opacity-40"
                        >
                            {copied === 'json' ? 'Copied' : 'Copy JSON only'}
                        </button>
                    </div>
                </div>
                <p className="mt-1 text-xs text-slate-500" role="status">
                    {validRows.length} question{validRows.length === 1 ? '' : 's'} in the schema
                    {totalWarnings > 0 ? ` · ${totalWarnings} check${totalWarnings === 1 ? '' : 's'} to review above` : ' · no issues found'}
                    {copied === 'failed' ? ' · Copy failed: select the code and copy it by hand.' : ''}
                </p>
                <pre className="mt-3 max-h-96 overflow-auto rounded-xl bg-slate-900 text-slate-100 text-xs leading-relaxed p-4 whitespace-pre-wrap break-words">
                    <code>{validRows.length ? scriptTag : 'Add at least one question with an answer to generate the schema.'}</code>
                </pre>
            </div>
        </div>
    );
}
