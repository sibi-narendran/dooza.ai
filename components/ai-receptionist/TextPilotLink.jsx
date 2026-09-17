'use client';

import { MessageSquareText, PhoneCall } from 'lucide-react';
import { trackReceptionistEvent } from '@/lib/analytics';
import { CALLBACK_NUMBER_DISPLAY, CALLBACK_NUMBER_E164, TEXT_KEYWORD } from '@/lib/aiReceptionistData';

// Two zero-friction paths for phones next to the booking ask: tap to call the
// Close number, or tap to text the keyword. Both land in Close.
export default function TextPilotLink({ source = 'pilot', tone = 'light' }) {
    const dark = tone === 'dark';
    const smsHref = `sms:${CALLBACK_NUMBER_E164}?&body=${encodeURIComponent(TEXT_KEYWORD)}`;
    const telHref = `tel:${CALLBACK_NUMBER_E164}`;
    const button = dark
        ? 'border-white/25 bg-white/5 text-white hover:bg-white/10'
        : 'border-slate-300 bg-white text-slate-900 hover:border-primary-600 hover:text-primary-800';

    return (
        <div className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            <p>Prefer not to book online? Call or text us.</p>
            <div className="mt-3 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                    href={telHref}
                    onClick={() => trackReceptionistEvent('call_tap', { source })}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-bold transition ${button}`}
                >
                    <PhoneCall className="h-4 w-4" aria-hidden="true" />
                    Call {CALLBACK_NUMBER_DISPLAY}
                </a>
                <a
                    href={smsHref}
                    onClick={() => trackReceptionistEvent('text_pilot_tap', { source })}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-bold transition ${button}`}
                >
                    <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                    Text {TEXT_KEYWORD} to {CALLBACK_NUMBER_DISPLAY}
                </a>
            </div>
            <p className="mt-2 text-xs">We reply within one business hour.</p>
        </div>
    );
}
