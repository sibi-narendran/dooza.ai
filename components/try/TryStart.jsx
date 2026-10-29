'use client';

import { useState } from 'react';

// FB ad landing (/try) start box. Keeps the ad's utm_source/medium/campaign + fbclid and sets utm_content=try-<placement>,
// so Edison's signups_by_utm.csv shows this page's sign-ups as facebook,paid,try-*. The typed job rides along as ?task=
// (crew.dooza.ai hands it to the master agent as its first job, Daedalus 2026-10-22 15:56).
const EXAMPLES = [
    'Find 20 new leads for my business',
    'Reply to my customer emails',
    'Write a blog post a week',
    'Research my 5 biggest competitors',
];

function signupUrl(placement, task) {
    const incoming = new URLSearchParams(window.location.search);
    const out = new URLSearchParams();
    for (const [k, v] of incoming) {
        if (k.startsWith('utm_') || k === 'fbclid') out.set(k, v);
    }
    if (!out.get('utm_source')) {
        out.set('utm_source', 'dooza');
        out.set('utm_medium', 'page');
    }
    out.set('utm_content', `try-${placement}`);
    if (task) out.set('task', task.slice(0, 500));
    return `https://crew.dooza.ai/?${out.toString()}`;
}

export default function TryStart({ placement, examples = true }) {
    const [task, setTask] = useState('');
    const go = (e) => {
        e.preventDefault();
        window.location.href = signupUrl(placement, task.trim());
    };

    return (
        <div>
            <form onSubmit={go} className="rounded-2xl border border-[#CBD5E1] bg-white p-3 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)] focus-within:border-[#14213D]">
                <label htmlFor={`try-task-${placement}`} className="block px-2 pt-1 text-[15px] font-semibold">
                    What would you hand off first? <span className="font-normal text-[#4B5567]">(optional)</span>
                </label>
                <textarea
                    id={`try-task-${placement}`}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) go(e); }}
                    rows={2}
                    placeholder="e.g. Find 20 new leads and draft an email to each"
                    className="block w-full resize-none bg-transparent px-2 py-2 text-[17px] text-[#14213D] placeholder:text-[#94A3B8] focus:outline-none"
                />
                <button
                    type="submit"
                    data-offer="crew"
                    data-source={`try-${placement}`}
                    className="mt-1 w-full rounded-xl bg-[#0F766E] px-5 py-4 text-[17px] font-semibold text-white transition-colors hover:bg-[#0B5D57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]"
                >
                    Start free, no card needed
                </button>
            </form>
            <p className="mt-3 text-[14px] leading-snug text-[#4B5567]">
                Free to try. No card needed.
            </p>
            <p className="mt-2 text-[14px] text-[#4B5567]">
                On an iPhone? Sign up here in your browser — the iOS app is in Apple review, and your install link is emailed the day it clears. The app is already on Android.
            </p>
            <p className="mt-2 text-[14px] text-[#4B5567]">
                Already have an account? <a href="https://crew.dooza.ai/login" data-source={`try-${placement}-login`} className="font-semibold text-[#0F766E] underline underline-offset-2 hover:text-[#14213D]">Log in</a>
            </p>
            {examples && (
                <ul className="mt-4 flex flex-wrap gap-2">
                    {EXAMPLES.map((ex) => (
                        <li key={ex}>
                            <button
                                type="button"
                                onClick={() => setTask(ex)}
                                className="rounded-full border border-[#CBD5E1] bg-white/70 px-3.5 py-2 text-[14px] text-[#475569] transition-colors hover:border-[#14213D] hover:text-[#14213D]"
                            >
                                {ex}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
