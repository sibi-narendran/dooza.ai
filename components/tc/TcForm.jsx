'use client';
import { useEffect, useRef, useState } from 'react';

// /tc form v2 (Sibi 2026-11-12 19:32 via Apollo): step 1 = drop the contract OR type one line + Enter; step 2 = mobile + email only.
// Hercules texts (TCPA consent line under phone) + emails from hercules@calls.dooza.org. Conversion: Sibi's AW-10872232955.
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const ev = (name) => { try { if (window.gtag) window.gtag('event', name); } catch (e) {} };
const ACCEPT = '.pdf,.doc,.docx,.png,.jpg,.jpeg';
const MAX = 10 * 1024 * 1024;

export default function TcForm() {
    const [step, setStep] = useState(1);
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [drag, setDrag] = useState(false);
    const hidden = useRef({});
    const started = useRef(false);
    const fileRef = useRef(null);
    useEffect(() => {
        try {
            const q = new URLSearchParams(window.location.search);
            HIDDEN.forEach((k) => { const v = q.get(k); if (v) hidden.current[k] = v; });
        } catch (e) {}
    }, []);
    const start = () => { if (!started.current) { started.current = true; ev('tc_form_start'); } };
    const pick = (f) => {
        if (!f) return;
        if (f.size > MAX) { setError('That file is over 10 MB. Email it instead after the next step.'); return; }
        setError(''); setFile(f); start(); setStep(2);
    };
    const next = () => { if (!message.trim()) { setError('Type a question or the property address, or drop the contract.'); return; } setError(''); start(); setStep(2); };
    const send = async (fd) => {
        HIDDEN.forEach((k) => { if (hidden.current[k]) fd.set(k, hidden.current[k]); });
        const r = await fetch('/api/tc-lead', { method: 'POST', body: fd });
        const d = await r.json().catch(() => ({}));
        if (!r.ok || !d.ok) throw new Error(d.error || 'Could not save right now. Please try again.');
        return d;
    };
    const submit = async (e) => {
        e.preventDefault();
        setState('sending'); setError('');
        const fd = new FormData(e.currentTarget);
        fd.set('message', message);
        if (file) fd.set('file', file);
        try {
            await send(fd);
            ev('tc_form_submit');
            try { if (window.gtag) window.gtag('event', 'conversion', { send_to: 'AW-10872232955/fRlFCMryu7YdEPu3pMAo' }); } catch (e) {}
            setState('done');
        } catch (err) { setError(err.message); setState('idle'); }
    };
    const lateUpload = async (f) => {
        if (!f || f.size > MAX) return;
        const fd = new FormData(); fd.set('file', f); fd.set('followup', '1'); fd.set('email', lastEmail.current); fd.set('phone', lastPhone.current);
        try { await send(fd); setFile(f); } catch (e) {}
    };
    const lastEmail = useRef(''); const lastPhone = useRef('');
    const input = 'mt-1 block w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[16px] text-[#14213D] focus:border-[#14213D] focus:outline-none';
    const box = 'rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]';
    if (state === 'done') {
        return (
            <div className="rounded-2xl border border-[#0F766E] bg-white p-6">
                <p className="text-lg font-semibold text-[#14213D]">Got it — Hercules (your TC) is texting you right now from (737) 390-1099 with your timeline &amp; checklist.</p>
                <p className="mt-2 text-[15px] text-[#4B5567]">You can also email contracts or addenda anytime to <a href="mailto:hercules@calls.dooza.org" className="underline">hercules@calls.dooza.org</a>.</p>
                {!file && <label className="mt-4 block cursor-pointer rounded-xl border-2 border-dashed border-[#94A3B8] p-4 text-center text-[15px] text-[#334155]">Didn&apos;t upload the contract yet? Drop the PDF here.<input type="file" accept={ACCEPT} className="hidden" onChange={(e) => lateUpload(e.target.files?.[0])} /></label>}
                {file && <p className="mt-3 text-[14px] text-[#0F766E]">Received: {file.name}</p>}
            </div>
        );
    }
    if (step === 1) {
        return (
            <div id="start" className={box}>
                <p className="text-lg font-semibold text-[#14213D]">Start your free file</p>
                <div onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)} onDrop={(e) => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files?.[0]); }} onClick={() => fileRef.current?.click()}
                    className={`mt-3 cursor-pointer rounded-xl border-2 border-dashed p-6 text-center text-[15px] ${drag ? 'border-[#0F766E] bg-[#F0FDFA]' : 'border-[#94A3B8]'} text-[#334155]`}>
                    <p className="font-semibold">Drop your executed contract PDF here to start your FREE file</p>
                    <p className="mt-1 text-[13px] text-[#64748B]">or tap to choose · PDF, Word or photo · up to 10 MB</p>
                    <input ref={fileRef} type="file" accept={ACCEPT} className="hidden" onChange={(e) => pick(e.target.files?.[0])} />
                </div>
                <p className="my-3 text-center text-[13px] text-[#64748B]">or</p>
                <div className="flex gap-2">
                    <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); next(); } }} placeholder="Ask your TC anything or paste property details" className={input.replace('mt-1 ', '')} />
                    <button type="button" onClick={next} className="shrink-0 rounded-xl bg-[#0F766E] px-4 text-[16px] font-semibold text-white hover:bg-[#0B5D57]">Send</button>
                </div>
                {error && <p role="alert" className="mt-3 text-[14px] text-[#B91C1C]">{error}</p>}
                <p className="mt-3 text-[13px] text-[#64748B]">No card for the first file.</p>
            </div>
        );
    }
    return (
        <form id="start" onSubmit={submit} className={box}>
            <p className="text-lg font-semibold text-[#14213D]">{file ? `Got ${file.name}.` : 'Got your message.'} Where should your TC reach you?</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="text-[14px] font-medium text-[#14213D]">Mobile<input name="phone" type="tel" required autoComplete="tel" autoFocus onChange={(e) => { lastPhone.current = e.target.value; }} className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Email<input name="email" type="email" required autoComplete="email" onChange={(e) => { lastEmail.current = e.target.value; }} className={input} /></label>
            </div>
            <p className="mt-2 text-[12px] text-[#64748B]">By submitting you agree Dooza may text you about your file. Msg rates may apply. Reply STOP to opt out.</p>
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {error && <p role="alert" className="mt-3 text-[14px] text-[#B91C1C]">{error}</p>}
            <button type="submit" disabled={state === 'sending'} className="mt-4 w-full rounded-xl bg-[#0F766E] px-5 py-4 text-[17px] font-semibold text-white hover:bg-[#0B5D57] disabled:opacity-60">
                {state === 'sending' ? 'Sending…' : 'Start my free file'}
            </button>
        </form>
    );
}
