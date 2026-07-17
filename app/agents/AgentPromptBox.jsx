'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { useBookingModal } from '@/components/BookingModalProvider';
import { trackDemoClick } from '@/lib/analytics';

const SUGGESTIONS = [
    'Get qualified leads for me daily',
    'Recover abandoned carts automatically',
    'Answer support emails 24/7',
    'Turn YouTube videos into LinkedIn posts',
];

const TYPED_EXAMPLES = [
    'Watch my Shopify store and win back abandoned carts with a personal email…',
    'Get me 20 qualified leads every morning and follow up in my voice…',
    'Answer my support inbox 24/7 and escalate anything sensitive to me…',
    'Turn every YouTube video I publish into LinkedIn posts…',
];

const TYPE_SPEED_MS = 42;
const DELETE_SPEED_MS = 18;
const HOLD_FULL_MS = 1700;

export default function AgentPromptBox({ signupUrl }) {
    const { openModal } = useBookingModal();
    const [prompt, setPrompt] = useState('');
    const [status, setStatus] = useState('idle'); // idle | saved

    // Typed-placeholder animation: cycles example briefs until the user focuses the box.
    const [interacted, setInteracted] = useState(false);
    const [typed, setTyped] = useState('');
    const [exampleIndex, setExampleIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (interacted) return undefined;
        const phrase = TYPED_EXAMPLES[exampleIndex];
        let timer;
        if (!deleting) {
            if (typed.length < phrase.length) {
                timer = setTimeout(() => setTyped(phrase.slice(0, typed.length + 1)), TYPE_SPEED_MS);
            } else {
                timer = setTimeout(() => setDeleting(true), HOLD_FULL_MS);
            }
        } else if (typed.length > 0) {
            timer = setTimeout(() => setTyped(phrase.slice(0, typed.length - 1)), DELETE_SPEED_MS);
        } else {
            setDeleting(false);
            setExampleIndex((exampleIndex + 1) % TYPED_EXAMPLES.length);
        }
        return () => clearTimeout(timer);
    }, [typed, deleting, exampleIndex, interacted]);

    const placeholder = interacted
        ? 'e.g. Watch my Shopify store and win back abandoned carts with a personal email'
        : `${typed}▍`;

    const submit = () => {
        const trimmed = prompt.trim();
        if (trimmed.length < 3) return;
        setStatus('saved');
        trackDemoClick('agents_prompt_submit');
        openModal();
        // Best-effort save in the background — never blocks the booking flow.
        fetch('/api/agent-prompts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: trimmed }),
        }).catch(() => {});
    };

    const onKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            submit();
        }
    };

    if (status === 'saved') {
        return (
            <div className="rounded-3xl border-2 border-primary-200 bg-white p-7 text-left shadow-2xl shadow-primary-100/60">
                <div className="mb-3 flex items-center gap-2 text-primary-700">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-bold">Your agent brief is saved</span>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                    &ldquo;{prompt.trim().slice(0, 140)}{prompt.trim().length > 140 ? '…' : ''}&rdquo;
                </p>
                <p className="mb-5 text-base font-semibold text-slate-900">
                    Book a free setup meeting and a Dooza engineer will turn it into a working agent with you.
                </p>
                <button
                    type="button"
                    onClick={() => { trackDemoClick('agents_prompt_saved_card'); openModal(); }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800 sm:w-auto"
                >
                    <Calendar className="h-4 w-4" /> Book my free setup
                </button>
            </div>
        );
    }

    return (
        <div className="rounded-3xl border-2 border-primary-200 bg-white p-5 text-left shadow-2xl shadow-primary-100/60 md:p-6">
            <div className="mb-3 flex items-center gap-2 text-slate-500">
                <Sparkles className="h-4 w-4 text-primary-600" />
                <span className="text-xs font-bold uppercase tracking-wide">Describe your agent</span>
            </div>
            <div className="flex items-end gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-50">
                <textarea
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                    onFocus={() => setInteracted(true)}
                    onKeyDown={onKeyDown}
                    rows={3}
                    maxLength={2000}
                    placeholder={placeholder}
                    className="max-h-44 w-full resize-none bg-transparent text-base leading-relaxed text-slate-900 outline-none placeholder:text-slate-400"
                    aria-label="Describe the AI agent you want"
                />
                <button
                    type="button"
                    onClick={submit}
                    disabled={prompt.trim().length < 3}
                    aria-label="Save agent brief"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-700 text-white shadow-md transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                    <ArrowUp className="h-5 w-5" />
                </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((suggestion) => (
                    <button
                        key={suggestion}
                        type="button"
                        onClick={() => { setInteracted(true); setPrompt(suggestion); }}
                        className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                    >
                        {suggestion} ↑
                    </button>
                ))}
            </div>
        </div>
    );
}
