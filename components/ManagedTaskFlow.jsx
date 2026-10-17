// Dooza Managed task flow, in motion (Sibi 2026-10-17 07:02 "claude motion to better our website").
// One example task moves through the promise on the page: you email it, AI does it, a person checks it, back by
// the next business day. CSS only, plays once; prefers-reduced-motion shows the finished card.
const css = `
@keyframes mf-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@keyframes mf-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes mf-pop { 0% { transform: scale(.6); opacity: 0; } 70% { transform: scale(1.12); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
.mf-in { animation: mf-in .5s cubic-bezier(.2,.7,.2,1) both; }
.mf-line { transform-origin: top; animation: mf-grow .7s ease both; }
.mf-dot { animation: mf-pop .4s ease both; }
@media (prefers-reduced-motion: reduce) { .mf-in, .mf-line, .mf-dot { animation: none; } }`;

const steps = [
    { label: 'AI does the work', note: '8 follow-up emails drafted, one per quote.' },
    { label: 'A person checks it', note: 'Every draft is read before it goes back to you.' },
    { label: 'Back to you', note: 'In your inbox by the next business day, ready to send.' },
];

export default function ManagedTaskFlow({ className = '' }) {
    const d = (s) => ({ animationDelay: `${s}s` });
    return (
        <figure className={`relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-28px_rgba(20,33,61,0.35)] ${className}`}>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">One task, start to finish</p>
                <span className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary-700">Example</span>
            </div>
            <div className="mf-in mt-4 rounded-xl bg-slate-50 p-4 text-sm" style={d(0.3)}>
                <p className="text-slate-500">You email us</p>
                <p className="mt-1 font-semibold text-slate-900">“Draft follow-ups for the 8 quotes we sent last week. List attached.”</p>
            </div>
            <ol className="mt-4">
                {steps.map((s, i) => {
                    const t = 1.3 + i * 1.3;
                    const last = i === steps.length - 1;
                    return (
                        <li key={s.label} className="relative grid grid-cols-[1.75rem_1fr] gap-3 pb-4 last:pb-0">
                            {!last && <span className="mf-line absolute left-[0.8rem] top-7 h-[calc(100%-1.5rem)] w-0.5 bg-primary-200" style={d(t + 0.5)} aria-hidden="true" />}
                            <span className={`mf-dot flex h-7 w-7 items-center justify-center rounded-full ${last ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'}`} style={d(t)} aria-hidden="true">
                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <div className="mf-in" style={d(t + 0.1)}>
                                <p className="font-semibold text-slate-900">{s.label}</p>
                                <p className="text-sm text-slate-600">{s.note}</p>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </figure>
    );
}
