'use client';

import { useState } from 'react';

// Grok-style hero box (Sibi 2026-10-22 15:53). The typed task rides along to crew.dooza.ai as ?task=, so the
// master agent can start on it after sign-up; utm_content stays per placement for attribution.
const EXAMPLES = [
    'Reply to every new lead in my inbox within 5 minutes',
    'Find 50 trucking companies that started this month and draft intros',
    'Write and post one blog article a day for my website',
    'Check my competitors’ prices every Monday and send me a summary',
    'Turn my client calls into follow-up emails and CRM notes',
];

export function crewSignupUrl(placement, task) {
    const params = new URLSearchParams({ utm_source: 'dooza', utm_medium: 'page', utm_content: placement });
    if (task) params.set('task', task.slice(0, 500));
    return `https://crew.dooza.ai/?${params.toString()}`;
}

export default function CrewPrompt({ placement = 'crew-hero' }) {
    const [task, setTask] = useState('');

    const go = (e) => {
        e.preventDefault();
        window.location.href = crewSignupUrl(placement, task.trim());
    };

    return (
        <div>
            <form onSubmit={go} className="rounded-3xl border border-white/15 bg-white/[0.06] p-3 text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] focus-within:border-white/40">
                <label htmlFor={`crew-task-${placement}`} className="sr-only">What should your crew do?</label>
                <textarea
                    id={`crew-task-${placement}`}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) go(e); }}
                    rows={3}
                    placeholder="What should your crew do?"
                    className="block w-full resize-none bg-transparent px-3 py-2 text-lg text-white placeholder:text-white/45 focus:outline-none"
                />
                <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-2">
                    <span className="text-xs text-white/50">$50 trial, refundable for 7 days</span>
                    <button
                        type="submit"
                        data-offer="crew"
                        data-source={placement}
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1220] transition-colors hover:bg-[#E6F4F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Start your crew
                    </button>
                </div>
            </form>
            <ul className="mt-5 flex flex-wrap justify-center gap-2">
                {EXAMPLES.map((ex) => (
                    <li key={ex}>
                        <button
                            type="button"
                            onClick={() => setTask(ex)}
                            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition-colors hover:border-white/40 hover:text-white"
                        >
                            {ex}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
