'use client';
import { useEffect, useRef, useState } from 'react';

// /tc form: 4 fields, no card (Pythia 17:55). Hidden gclid/utm from the URL. gtag events per Apollo's brief.
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const ev = (name) => { try { if (window.gtag) window.gtag('event', name); } catch (e) {} };

export default function TcForm() {
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const hidden = useRef({});
    const started = useRef(false);
    useEffect(() => {
        try {
            const q = new URLSearchParams(window.location.search);
            HIDDEN.forEach((k) => { const v = q.get(k); if (v) hidden.current[k] = v; });
        } catch (e) {}
    }, []);
    const onFocus = () => { if (!started.current) { started.current = true; ev('tc_form_start'); } };
    const submit = async (e) => {
        e.preventDefault();
        setState('sending'); setError('');
        const f = new FormData(e.currentTarget);
        const body = { ...hidden.current, ...Object.fromEntries(f.entries()) };
        try {
            const r = await fetch('/api/tc-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
            const d = await r.json().catch(() => ({}));
            if (!r.ok || !d.ok) throw new Error(d.error || 'Could not save right now. Please try again.');
            ev('tc_form_submit');
            setState('done');
        } catch (err) { setError(err.message); setState('idle'); }
    };
    if (state === 'done') {
        return (
            <div className="rounded-2xl border border-[#0F766E] bg-white p-6">
                <p className="text-lg font-semibold text-[#14213D]">Got it. Your free file is on its way.</p>
                <p className="mt-2 text-[15px] text-[#4B5567]">We'll email you within one business day with where to send the contract.</p>
            </div>
        );
    }
    const input = 'mt-1 block w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[16px] text-[#14213D] focus:border-[#14213D] focus:outline-none';
    return (
        <form id="start" onSubmit={submit} onFocus={onFocus} className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
            <p className="text-lg font-semibold text-[#14213D]">Start my free file</p>
            <p className="text-[14px] text-[#4B5567]">No card for the first file.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="text-[14px] font-medium text-[#14213D]">Name<input name="name" required autoComplete="name" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Email<input name="email" type="email" required autoComplete="email" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Mobile<input name="phone" type="tel" required autoComplete="tel" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">State<select name="state" required defaultValue="" className={input}><option value="" disabled>Choose</option><option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FL">FL</option><option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option></select></label>
                <label className="text-[14px] font-medium text-[#14213D]">Closing date<input name="closing_date" type="date" required className={input} /></label>
            </div>
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {error && <p role="alert" className="mt-3 text-[14px] text-[#B91C1C]">{error}</p>}
            <button type="submit" disabled={state === 'sending'} className="mt-4 w-full rounded-xl bg-[#0F766E] px-5 py-4 text-[17px] font-semibold text-white hover:bg-[#0B5D57] disabled:opacity-60">
                {state === 'sending' ? 'Sending…' : 'Start my free file'}
            </button>
        </form>
    );
}
