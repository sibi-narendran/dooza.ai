import { Phone } from 'lucide-react';
import { CONTACT_CALL_DISPLAY, CONTACT_CALL_E164 } from '@/lib/contact';

// Try-before-buy for the $149 answering service (STRATEGY 2026-10-22, trial work/trials/hear-it-first):
// our own line is answered by AI 24/7, so a buyer can hear it before paying. tel: clicks are tracked by ContactClickTracker.
export default function HearItFirst({ source = 'unknown' }) {
    return (
        <p data-hear-it-first={source} className="mx-auto mt-6 max-w-xl rounded-xl border border-primary-100 bg-primary-50/60 px-4 py-3 text-sm text-slate-700">
            <strong>Hear it first:</strong> our own phone line is answered by AI, 24/7. Call{' '}
            <a href={`tel:${CONTACT_CALL_E164}`} className="inline-flex items-center gap-1 font-semibold text-primary-700 underline"><Phone className="h-3.5 w-3.5" aria-hidden="true" />{CONTACT_CALL_DISPLAY}</a>{' '}
            and leave a message to see how it sounds.
        </p>
    );
}
