'use client';

import { useState } from 'react';
import { ArrowRight, ArrowUp, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

const SUGGESTIONS = [
    'Get qualified leads for me daily',
    'Recover abandoned carts automatically',
    'Answer support emails 24/7',
    'Turn YouTube videos into LinkedIn posts',
];

export default function AgentPromptBox({ signupUrl }) {
    const [prompt, setPrompt] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | saved | error
    const [errorMessage, setErrorMessage] = useState('');

    const submit = async () => {
        const trimmed = prompt.trim();
        if (trimmed.length < 3 || status === 'sending') return;
        setStatus('sending');
        setErrorMessage('');
        try {
            const res = await fetch('/api/agent-prompts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: trimmed }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setStatus('error');
                setErrorMessage(data.error || 'Could not save right now. Please try again.');
                return;
            }
            setStatus('saved');
        } catch {
            setStatus('error');
            setErrorMessage('Could not save right now. Please try again.');
        }
    };

    const onKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            submit();
        }
    };

    if (status === 'saved') {
        return (
            <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-lg shadow-primary-100/40">
                <div className="mb-3 flex items-center gap-2 text-primary-700">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-bold">Your agent brief is saved</span>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                    &ldquo;{prompt.trim().slice(0, 140)}{prompt.trim().length > 140 ? '…' : ''}&rdquo;
                </p>
                <p className="mb-5 text-base font-semibold text-slate-900">
                    Create a free account and we&apos;ll turn it into a working agent with you.
                </p>
                <a
                    href={signupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800 sm:w-auto"
                >
                    Sign up free to build it <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        );
    }

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/60">
            <div className="mb-3 flex items-center gap-2 text-slate-500">
                <Sparkles className="h-4 w-4 text-primary-600" />
                <span className="text-xs font-bold uppercase tracking-wide">Describe your agent</span>
            </div>
            <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-50">
                <textarea
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                    onKeyDown={onKeyDown}
                    rows={2}
                    maxLength={2000}
                    placeholder="e.g. Watch my Shopify store and win back abandoned carts with a personal email"
                    className="max-h-40 w-full resize-none bg-transparent text-sm leading-relaxed text-slate-900 outline-none placeholder:text-slate-400"
                    aria-label="Describe the AI agent you want"
                />
                <button
                    type="button"
                    onClick={submit}
                    disabled={prompt.trim().length < 3 || status === 'sending'}
                    aria-label="Save agent brief"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-700 text-white shadow-md transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                    {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUp className="h-4 w-4" />}
                </button>
            </div>
            {status === 'error' && (
                <p className="mt-2 text-xs font-semibold text-red-600">{errorMessage}</p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
                {SUGGESTIONS.map((suggestion) => (
                    <button
                        key={suggestion}
                        type="button"
                        onClick={() => setPrompt(suggestion)}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                    >
                        {suggestion} ↑
                    </button>
                ))}
            </div>
        </div>
    );
}
