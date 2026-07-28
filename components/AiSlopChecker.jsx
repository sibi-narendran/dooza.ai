'use client';

import { useMemo, useState } from 'react';
import { analyzeText, getVerdict, countWords } from '@/lib/aiSlop';
import { ScanText, Trash2, ClipboardPaste, AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';

const SAMPLE_TEXT = `Here's the thing: in today's world, businesses need to leverage cutting-edge AI to stay ahead. It's not just a tool, it's a game changer. This launch marks a pivotal moment for the industry, highlighting the team's commitment to innovation. Experts agree that this transformative platform serves as a centralized hub for all your workflows. What nobody tells you: the best part is it learns as you go. That's it. That's the whole thing. The future isn't coming. It's already here. In conclusion, delve into this robust tapestry and supercharge your productivity going forward.`;

const toneStyles = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    yellow: 'bg-amber-50 text-amber-700 border-amber-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200',
    red: 'bg-red-50 text-red-700 border-red-200',
};

const badgeStyles = {
    green: 'bg-emerald-500',
    yellow: 'bg-amber-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
};

const escapeHtml = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Renders the analyzed text with matched spans highlighted
const HighlightedText = ({ text, findings }) => {
    // Whole-text findings (like em dash count) can't be pinned to a clean span reliably — skip them here
    const spans = findings
        .filter((f) => f.length > 1 && text.substr(f.index, f.length).toLowerCase() === f.match.toLowerCase())
        .sort((a, b) => a.index - b.index);

    // Drop overlapping spans (keep the earlier one)
    const kept = [];
    let cursor = 0;
    spans.forEach((s) => {
        if (s.index >= cursor) {
            kept.push(s);
            cursor = s.index + s.length;
        }
    });

    let html = '';
    let pos = 0;
    kept.forEach((s) => {
        html += escapeHtml(text.slice(pos, s.index));
        html += `<mark class="bg-amber-200/70 text-inherit rounded-sm px-0.5" title="${escapeHtml(s.pattern)}">${escapeHtml(text.substr(s.index, s.length))}</mark>`;
        pos = s.index + s.length;
    });
    html += escapeHtml(text.slice(pos));

    return (
        <div
            className="whitespace-pre-wrap text-sm leading-7 text-slate-700 bg-white border border-slate-200 rounded-xl p-4 max-h-72 overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default function AiSlopChecker() {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);

    const words = useMemo(() => countWords(text), [text]);
    const verdict = result ? getVerdict(result.findings.length, result.words) : null;

    const analyze = () => {
        if (!text.trim()) return;
        setResult(analyzeText(text));
    };

    const clear = () => {
        setText('');
        setResult(null);
    };

    const pasteSample = () => {
        setText(SAMPLE_TEXT);
        setResult(null);
    };

    return (
        <div className="w-full">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Paste your blog post, email, or LinkedIn draft here…"
                    rows={9}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 p-4 text-[15px] leading-7 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="mt-3 flex flex-wrap items-center gap-3">
                    <button
                        onClick={analyze}
                        disabled={!text.trim()}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        <ScanText size={16} />
                        Check for AI slop
                    </button>
                    <button
                        onClick={pasteSample}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                        <ClipboardPaste size={16} />
                        Try a sample
                    </button>
                    {(text || result) && (
                        <button
                            onClick={clear}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                            <Trash2 size={16} />
                            Clear
                        </button>
                    )}
                    <span className="ml-auto text-xs text-slate-400">
                        {words} {words === 1 ? 'word' : 'words'} · 100% private · nothing leaves your browser
                    </span>
                </div>
            </div>

            {result && verdict && (
                <div className="mt-6 space-y-6">
                    {/* Verdict */}
                    <div className={`flex items-start gap-3 rounded-xl border p-4 sm:p-5 ${toneStyles[verdict.tone]}`}>
                        <span className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${badgeStyles[verdict.tone]}`}>
                            {result.findings.length === 0 ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                        </span>
                        <div>
                            <p className="font-semibold text-base">
                                {verdict.label}
                                <span className="font-normal opacity-80">
                                    {' '}· {result.findings.length} {result.findings.length === 1 ? 'pattern' : 'patterns'} in {result.words} words
                                </span>
                            </p>
                            <p className="text-sm mt-1 opacity-90">{verdict.message}</p>
                        </div>
                    </div>

                    {/* Findings */}
                    {result.findings.length > 0 && (
                        <>
                            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6">
                                <h2 className="text-lg font-semibold text-slate-900 mb-4">What we found</h2>
                                <ul className="space-y-3">
                                    {result.findings.map((f, i) => (
                                        <li key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                                            <span className="shrink-0 inline-flex w-fit items-center rounded-full bg-red-50 text-red-700 text-xs font-semibold px-2.5 py-1">
                                                {f.pattern}
                                            </span>
                                            <div className="min-w-0">
                                                <p className="text-sm text-slate-800 break-words">
                                                    <span className="bg-amber-200/70 rounded-sm px-1">{f.match}</span>
                                                </p>
                                                <p className="text-xs text-slate-500 mt-1">{f.suggestion}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-slate-900 mb-3">Your text, highlighted</h2>
                                <HighlightedText text={text} findings={result.findings} />
                                <p className="text-xs text-slate-400 mt-2">
                                    Hover a highlight to see which pattern it matched. Edit above and re-run the check.
                                </p>
                            </div>
                        </>
                    )}

                    {result.findings.length === 0 && (
                        <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-800 text-sm">
                            <Sparkles size={16} className="shrink-0" />
                            Nice. None of the 20+ known AI-slop patterns showed up in this text.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
