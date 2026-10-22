'use client';

import { useState } from 'react';
import { crewSignupUrl } from '@/lib/crewUrl';

// Grok-style hero box (Sibi 2026-10-22 15:53). The typed task rides along to crew.dooza.ai as ?task= (Daedalus 15:56:
// kept through sign-up, handed to the master agent as its first job); utm_content stays per placement for attribution.
const DEFAULT_EXAMPLES = [
    'Call back new leads in 5 minutes',
    'Find new trucking companies and draft intros',
    'Write a blog post a day',
    'Track competitor prices weekly',
    'Turn call notes into follow-ups',
];

const TONES = {
    dark: {
        form: 'border-white/15 bg-white/[0.06] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] focus-within:border-white/40',
        input: 'text-white placeholder:text-white/45',
        hint: 'text-white/55',
        button: 'bg-white text-[#14213D] hover:bg-[#E6F4F1] focus-visible:outline-white',
        chip: 'border-white/15 text-white/75 hover:border-white/40 hover:text-white',
    },
    light: {
        form: 'border-[#C9D4E0] bg-white shadow-[0_20px_50px_-30px_rgba(20,33,61,0.5)] focus-within:border-[#14213D]',
        input: 'text-[#14213D] placeholder:text-[#7A889C]',
        hint: 'text-[#5B6B82]',
        button: 'bg-[#14213D] text-white hover:bg-[#0F766E] focus-visible:outline-[#14213D]',
        chip: 'border-[#C9D4E0] bg-white/60 text-[#46566E] hover:border-[#14213D] hover:text-[#14213D]',
    },
};

export default function CrewPrompt({ placement = 'crew-hero', tone = 'dark', centered = false, examples = DEFAULT_EXAMPLES }) {
    const [task, setTask] = useState('');
    const t = TONES[tone];

    const go = (e) => {
        e.preventDefault();
        window.location.href = crewSignupUrl(placement, task.trim());
    };

    return (
        <div>
            <form onSubmit={go} className={`rounded-3xl border p-3 text-left ${t.form}`}>
                <label htmlFor={`crew-task-${placement}`} className="sr-only">What should your crew do?</label>
                <textarea
                    id={`crew-task-${placement}`}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) go(e); }}
                    rows={3}
                    placeholder="What should your crew do?"
                    className={`block w-full resize-none bg-transparent px-3 py-2 text-lg focus:outline-none ${t.input}`}
                />
                <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-2">
                    <span className={`text-xs ${t.hint}`}>Free for 7 days, then $49 a month</span>
                    <button
                        type="submit"
                        data-offer="crew"
                        data-source={placement}
                        className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${t.button}`}
                    >
                        Start your crew
                    </button>
                </div>
            </form>
            <ul className={`mt-5 flex flex-wrap gap-2 ${centered ? 'justify-center' : ''}`}>
                {examples.map((ex) => (
                    <li key={ex}>
                        <button
                            type="button"
                            onClick={() => setTask(ex)}
                            className={`rounded-full border px-4 py-2 text-sm transition-colors ${t.chip}`}
                        >
                            {ex}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
