'use client';
// WhatsApp + Calendly CTAs for /in (Sibi 22:50 via Apollo: India ads start now). Ads labels from Apollo 22:57.
const WA = '918344242526';
const CAL = 'https://calendly.com/sibi-dooza/book-a-meeting-and-walk-away-with-clarity';
const LABEL = { whatsapp_click: 'AW-10872232955/vDiGCJf8-bcdEPu3pMAo', calendly_click: 'AW-10872232955/7d_-CJr8-bcdEPu3pMAo' };
const NAME = { epr: 'EPR', fcra: 'FCRA', bis: 'BIS', gst: 'GST', general: 'compliance' };
const fire = (name, service) => { try { if (window.gtag) { window.gtag('event', name, { service }); window.gtag('event', 'conversion', { send_to: LABEL[name] }); } } catch (e) {} };

export default function InCta({ service = 'general', sticky = false }) {
    const wa = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi, I need help with ${NAME[service] || 'compliance'}`)}`;
    const btns = (
        <>
            <a href={wa} target="_blank" rel="noopener" onClick={() => fire('whatsapp_click', service)} className="flex-1 rounded-xl bg-[#25D366] px-4 py-3 text-center font-semibold text-[#06281A]">WhatsApp us</a>
            <a href={CAL} target="_blank" rel="noopener" onClick={() => fire('calendly_click', service)} className="flex-1 rounded-xl border border-[#14213D] bg-white px-4 py-3 text-center font-semibold text-[#14213D]">Book a 15-min call</a>
        </>
    );
    if (sticky) return <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-[#CBD5E1] bg-[#F7F5F0] p-3 sm:hidden">{btns}</div>;
    return <div className="mt-4 flex flex-wrap gap-3">{btns}</div>;
}
