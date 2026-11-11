'use client';
import { useEffect, useState } from 'react';
import { HEARD_OPTIONS, getHeard, setHeard } from '@/lib/heard';

// One-tap "How did you hear about us?" (optional). See lib/heard.js.
export default function HeardChips({ id = 'heard' }) {
    const [picked, setPicked] = useState(null);
    useEffect(() => { setPicked(getHeard()); }, []);
    const pick = (k) => { setHeard(k); setPicked(k); };
    return (
        <fieldset className="mt-3 px-2">
            <legend id={id} className="text-[14px] text-[#4B5567]">How did you hear about us? <span className="text-[#94A3B8]">(optional, one tap)</span></legend>
            <div className="mt-2 flex flex-wrap gap-2">
                {HEARD_OPTIONS.map((o) => (
                    <button
                        key={o.key}
                        type="button"
                        aria-pressed={picked === o.key}
                        data-heard={o.key}
                        onClick={() => pick(o.key)}
                        className={`rounded-full border px-3 py-1.5 text-[14px] transition-colors ${picked === o.key ? 'border-[#0F766E] bg-[#0F766E] text-white' : 'border-[#CBD5E1] bg-white text-[#475569] hover:border-[#14213D] hover:text-[#14213D]'}`}
                    >
                        {o.label}
                    </button>
                ))}
            </div>
        </fieldset>
    );
}
