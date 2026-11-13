'use client';
import { useEffect, useRef, useState } from 'react';

// /takeoff form: plan PDF (or link) + email. GA4 takeoff_form_submit {trade} (Apollo 11-13 13:08). No Ads label (SEO bet).
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const ev = (name, p) => { try { if (window.gtag) window.gtag('event', name, p || {}); } catch (e) {} };
const MAX = 25 * 1024 * 1024;

export default function TakeoffForm({ trade = 'drywall' }) {
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const [file, setFile] = useState(null);
    const [t, setT] = useState(trade);
    const hidden = useRef({});
    const started = useRef(false);
    useEffect(() => {
        try { const q = new URLSearchParams(window.location.search); HIDDEN.forEach((k) => { const v = q.get(k); if (v) hidden.current[k] = v; }); } catch (e) {}
    }, []);
    const start = () => { if (!started.current) { started.current = true; ev('takeoff_form_start', { trade: t }); } };
    const pick = (f) => { if (!f) return; if (f.size > MAX) { setError('That file is over 25 MB. Paste a download link instead.'); return; } setError(''); setFile(f); start(); };
    const submit = async (e) => {
        e.preventDefault();
        setState('sending'); setError('');
        const fd = new FormData(e.currentTarget);
        if (file) fd.set('file', file);
        fd.set('page', window.location.pathname);
        HIDDEN.forEach((k) => { if (hidden.current[k]) fd.set(k, hidden.current[k]); });
        try {
            const r = await fetch('/api/takeoff-lead', { method: 'POST', body: fd });
            const d = await r.json().catch(() => ({}));
            if (!r.ok || !d.ok) throw new Error(d.error || 'Could not save right now. Please try again.');
            ev('takeoff_form_submit', { trade: t });
            setState('done');
        } catch (err) { setError(err.message); setState('idle'); }
    };
    const input = 'mt-1 block w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[16px] text-[#14213D] focus:border-[#14213D] focus:outline-none';
    if (state === 'done') {
        return (
            <div id="upload" className="rounded-2xl border border-[#0F766E] bg-white p-6">
                <p className="text-lg font-semibold text-[#14213D]">Got your plan. Your free takeoff comes back by email within 48 hours.</p>
                <p className="mt-2 text-[15px] text-[#4B5567]">Questions or more sheets: <a href="mailto:odysseus@dooza.org" className="underline">odysseus@dooza.org</a>.</p>
            </div>
        );
    }
    return (
        <form id="upload" onSubmit={submit} onFocus={start} className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
            <p className="text-lg font-semibold text-[#14213D]">Upload your plan, get your first takeoff free</p>
            <label className="mt-3 block cursor-pointer rounded-xl border-2 border-dashed border-[#94A3B8] p-6 text-center text-[15px] text-[#334155]">
                <span className="font-semibold">{file ? `Plan: ${file.name}` : 'Choose your plan PDF'}</span>
                <span className="mt-1 block text-[13px] text-[#64748B]">PDF, up to 25 MB · bigger sets: paste a link below</span>
                <input type="file" accept=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.zip" className="hidden" onChange={(e) => pick(e.target.files?.[0])} />
            </label>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="text-[14px] font-medium text-[#14213D]">Trade
                    <select name="trade" value={t} onChange={(e) => setT(e.target.value)} className={input}>
                        <option value="drywall">Drywall</option><option value="roofing">Roofing</option><option value="other">Other (ask us)</option>
                    </select>
                </label>
                <label className="text-[14px] font-medium text-[#14213D]">Email<input name="email" type="email" required autoComplete="email" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Name<input name="name" autoComplete="name" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Company<input name="company" autoComplete="organization" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Phone (optional)<input name="phone" type="tel" autoComplete="tel" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Plan link (optional)<input name="link" type="url" placeholder="Dropbox, Drive, plan room" className={input} /></label>
            </div>
            <label className="mt-3 block text-[14px] font-medium text-[#14213D]">What do you need counted? (optional)<textarea name="message" rows={3} placeholder="e.g. 5/8 Type X on all corridor walls, bid due Friday" className={input} /></label>
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {error && <p role="alert" className="mt-3 text-[14px] text-[#B91C1C]">{error}</p>}
            <button type="submit" disabled={state === 'sending'} className="mt-4 w-full rounded-xl bg-[#0F766E] px-5 py-4 text-[17px] font-semibold text-white hover:bg-[#0B5D57] disabled:opacity-60">
                {state === 'sending' ? 'Uploading…' : 'Get my free takeoff'}
            </button>
            <p className="mt-2 text-center text-[13px] text-[#64748B]">First plan free. No card. Back within 48 hours.</p>
        </form>
    );
}
