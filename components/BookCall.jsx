'use client';
// "Book a 15-min call" (Apollo 2026-11-12 22:59, Sibi approved ZA). Same Calendly as /hospital. Fires <event> + nothing else.
const CAL = 'https://calendly.com/sibi-dooza/book-a-meeting-and-walk-away-with-clarity';
export default function BookCall({ event = 'book_click', className = '' }) {
    return <a href={CAL} target="_blank" rel="noopener" onClick={() => { try { window.gtag && window.gtag('event', event); window.gtag && window.gtag('event', 'book_click'); } catch (e) {} }} className={`inline-block rounded-xl border-2 border-[#14213D] px-5 py-3 text-[16px] font-semibold text-[#14213D] hover:bg-white ${className}`}>Book a 15-min call</a>;
}
