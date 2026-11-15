'use client';
// /accountant/gst WhatsApp button. Plain <a href> in the server HTML; click fires Google Ads "India whatsapp_click".
import { GST_WA_LINK, GST_UNDER, GST_BAR } from '@/lib/inGst';
const LABEL = 'AW-10872232955/vDiGCJf8-bcdEPu3pMAo';
const fire = () => { try { if (window.gtag) { window.gtag('event', 'whatsapp_click', { service: 'gst499' }); window.gtag('event', 'conversion', { send_to: LABEL }); } } catch (e) {} };
const Icon = () => <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.500 15.200L2 22l4.900-1.400A10 10 0 1 0 12 2zm-4 7.500h8v1.500H8zm0 3h5.500V14H8z" /></svg>;
const base = 'items-center justify-center gap-2 rounded-xl bg-[#25D366] font-bold text-[#06281A] hover:bg-[#1FC15B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]';

export default function GstWa({ sticky = false, bar = false }) {
    const a = (cls, label = 'Start on WhatsApp') => <a href={GST_WA_LINK} target="_blank" rel="noopener" onClick={fire} className={`${base} ${cls}`}><Icon />{label}</a>;
    if (bar) return a('hidden min-h-[44px] px-4 py-2 text-[15px] sm:inline-flex');
    if (sticky) return (
        <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-[#CBD5E1] bg-white px-4 sm:hidden" style={{ paddingTop: 10, paddingBottom: 10 }}>
            <p className="leading-tight"><span className="block text-[17px] font-bold text-[#14213D]">{GST_BAR[0]}</span><span className="block text-[13px] text-[#475569]">{GST_BAR[1]}</span></p>
            {a('inline-flex min-h-[48px] px-5 py-2 text-[16px]', 'WhatsApp us')}
        </div>
    );
    return (
        <div>
            {a('flex min-h-[56px] w-full px-5 py-4 text-lg')}
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[14px] text-[#475569]">{GST_UNDER.map((t, i) => <li key={t} className={i === 0 ? 'font-semibold text-[#14213D]' : ''}>{t}</li>)}</ul>
        </div>
    );
}
