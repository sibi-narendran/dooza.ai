'use client';

import { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { crewUrl, CREW_TRIAL } from '@/lib/crew';

// Homepage chatbot (Sibi 2026-10-22: "homepage chatbot: anyone types → bot tells them to sign up").
// Scripted on purpose, no model call: it can't over-claim and costs nothing. Whatever the visitor types, it answers
// with the sign-up step and repeats their task so they can paste it to their master agent.
const SUGGESTIONS = ['Follow up with my new leads', 'Research 50 local competitors', 'Answer my website chat'];

export default function HomeChat() {
    const [text, setText] = useState('');
    const [task, setTask] = useState('');

    const ask = (value) => {
        const t = value.trim().slice(0, 200);
        if (!t) return;
        setTask(t);
        setText('');
    };

    return (
        <div className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:ml-auto">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#14213D]/[0.06]" aria-hidden="true" />
            <div className="relative rounded-2xl border border-[#14213D]/10 bg-white shadow-[0_24px_60px_-28px_rgba(20,33,61,0.35)]">
                <div className="border-b border-[#14213D]/10 px-6 pb-4 pt-5">
                    <p className="text-lg font-bold text-[#14213D]">Ask your crew</p>
                    <p className="flex items-center gap-2 text-sm text-slate-500"><span className="h-2 w-2 rounded-full bg-[#0F766E]" aria-hidden="true" />Type a job you do on a computer</p>
                </div>
                <div className="space-y-3 px-6 py-5" aria-live="polite">
                    <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#EEF3F7] px-4 py-3 text-[15px] leading-snug text-[#14213D]">
                        Hi. What should your AI crew do for you?
                    </p>
                    {task ? (
                        <>
                            <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#0F766E] px-4 py-3 text-[15px] leading-snug text-white">{task}</p>
                            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-[#EEF3F7] px-4 py-3 text-[15px] leading-snug text-[#14213D]">
                                <p>If it can be done on a computer, your crew can work on it. Sign up, then tell your master agent: &ldquo;{task}&rdquo;. It sets up the agents for the job on your crew&rsquo;s own computer.</p>
                                <a href={crewUrl('home-chat')} data-offer="crew" data-source="home-chat" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#0F766E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0B5F58]">
                                    Start your crew <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </a>
                                <p className="mt-2 text-xs text-slate-500">{CREW_TRIAL}.</p>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-wrap gap-2 pt-1">
                            {SUGGESTIONS.map((s) => (
                                <button key={s} type="button" onClick={() => ask(s)} className="rounded-full border border-[#14213D]/15 px-3 py-1.5 text-sm text-[#14213D] hover:border-[#0F766E] hover:text-[#0F766E]">{s}</button>
                            ))}
                        </div>
                    )}
                </div>
                <form onSubmit={(e) => { e.preventDefault(); ask(text); }} className="flex items-center gap-2 rounded-b-2xl border-t border-[#14213D]/10 bg-[#EEF3F7] px-4 py-3">
                    <label htmlFor="home-chat-input" className="sr-only">Describe a job for your crew</label>
                    <input id="home-chat-input" value={text} onChange={(e) => setText(e.target.value)} maxLength={200} placeholder="e.g. Reply to every new quote request" className="min-w-0 flex-1 rounded-lg border border-[#14213D]/15 bg-white px-3 py-2.5 text-[15px] text-[#14213D] placeholder:text-slate-400 focus:border-[#0F766E] focus:outline-none" />
                    <button type="submit" aria-label="Send" className="rounded-lg bg-[#0F766E] p-2.5 text-white hover:bg-[#0B5F58]"><Send className="h-5 w-5" aria-hidden="true" /></button>
                </form>
            </div>
        </div>
    );
}
