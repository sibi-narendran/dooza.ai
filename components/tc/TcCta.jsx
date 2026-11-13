'use client';
// Call / Text / Book buttons for /tc (Sibi 23:57 via Apollo). Close number. GA events now; Ads labels when Apollo sends them.
const TEL = '+17373901099';
const CAL = 'https://calendly.com/sibi-dooza/book-a-meeting-and-walk-away-with-clarity';
const LABEL = {};
const fire = (name) => { try { if (window.gtag) { window.gtag('event', name); if (LABEL[name]) window.gtag('event', 'conversion', { send_to: LABEL[name] }); } } catch (e) {} };

export default function TcCta({ sticky = false }) {
    const b = 'flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-xl px-2 py-3 text-center text-[15px] font-semibold sm:px-4 sm:text-[16px]';
    const btns = (
        <>
            <a href={`tel:${TEL}`} onClick={() => fire('tc_call_click')} className={`${b} bg-[#0F766E] text-white`}><span className="sm:hidden">Call</span><span className="hidden sm:inline">Call (737) 390-1099</span></a>
            <a href={`sms:${TEL}`} onClick={() => fire('tc_text_click')} className={`${b} border border-[#14213D] bg-white text-[#14213D]`}>Text</a>
            <a href={CAL} target="_blank" rel="noopener" onClick={() => fire('tc_calendly_click')} className={`${b} border border-[#14213D] bg-white text-[#14213D]`}>Book a call</a>
        </>
    );
    if (sticky) return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-[#CBD5E1] bg-[#F7F5F0] p-3 pb-[max(12px,env(safe-area-inset-bottom))] sm:hidden">{btns}</div>;
    return <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">{btns}</div>;
}
