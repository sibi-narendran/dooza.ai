import { Phone } from 'lucide-react';

// Demo-line widget (STRATEGY 2026-10-22, trial work/trials/hear-it-first). The standalone $149 phone agent was dropped 2026-10-25 (calls are part of Dooza Crew); copy no longer mentions a price:
// a demo line (Stentor, 2026-10-22) answered by the same AI for a sample plumbing business, so a buyer can hear it before paying.
// tel: clicks are tracked by ContactClickTracker; demo callers relay to @orion.
const DEMO_CALL_DISPLAY = '+1 (424) 728-4587';
const DEMO_CALL_E164 = '+14247284587';

export default function HearItFirst({ source = 'unknown' }) {
    return (
        <p data-hear-it-first={source} className="mx-auto mt-6 max-w-xl rounded-xl border border-primary-100 bg-primary-50/60 px-4 py-3 text-sm text-slate-700">
            <strong>Hear it first:</strong> call our demo line at{' '}
            <a href={`tel:${DEMO_CALL_E164}`} className="inline-flex items-center gap-1 font-semibold text-primary-700 underline"><Phone className="h-3.5 w-3.5" aria-hidden="true" />{DEMO_CALL_DISPLAY}</a>.
            {' '}The AI answers for a sample plumbing business: play a customer and leave a message.
        </p>
    );
}
