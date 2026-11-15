'use client';
// /accountant/gst WhatsApp button. Plain <a href> in the server HTML; click fires Google Ads "India whatsapp_click".
import { GST_WA_LINK, GST_UNDER } from '@/lib/inGst';
const LABEL = 'AW-10872232955/vDiGCJf8-bcdEPu3pMAo';
const fire = () => { try { if (window.gtag) { window.gtag('event', 'whatsapp_click', { service: 'gst499' }); window.gtag('event', 'conversion', { send_to: LABEL }); } } catch (e) {} };

export default function GstWa({ sticky = false }) {
    const btn = <a href={GST_WA_LINK} target="_blank" rel="noopener" onClick={fire} className="block rounded-xl bg-[#25D366] px-5 py-4 text-center text-lg font-bold text-[#06281A]">Start on WhatsApp</a>;
    if (sticky) return <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#CBD5E1] bg-[#F7F5F0] p-3 sm:hidden">{btn}</div>;
    return <div className="mt-5 sm:max-w-sm">{btn}<p className="mt-2 text-[14px] text-[#4B5567]">{GST_UNDER}</p></div>;
}
