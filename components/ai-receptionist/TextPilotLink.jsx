'use client';

import { MessageSquareText } from 'lucide-react';
import { trackReceptionistEvent } from '@/lib/analytics';
import { CALLBACK_NUMBER_DISPLAY, CALLBACK_NUMBER_E164, TEXT_KEYWORD } from '@/lib/aiReceptionistData';

// Zero-friction path for phones: one tap opens Messages with the keyword filled
// in. The text lands in the Close SMS inbox on the same number we call from.
export default function TextPilotLink({ source = 'pilot', tone = 'light' }) {
    const href = `sms:${CALLBACK_NUMBER_E164}?&body=${encodeURIComponent(TEXT_KEYWORD)}`;
    const classes = tone === 'dark'
        ? 'text-slate-300 [&_a]:text-white'
        : 'text-slate-600 [&_a]:text-slate-900';

    return (
        <p className={`text-sm ${classes}`}>
            <MessageSquareText className="mr-1.5 inline h-4 w-4 align-[-3px]" aria-hidden="true" />
            Prefer to text? Text <span className="font-bold">{TEXT_KEYWORD}</span> to{' '}
            <a
                href={href}
                onClick={() => trackReceptionistEvent('text_pilot_tap', { source })}
                className="whitespace-nowrap font-bold underline underline-offset-4"
            >
                {CALLBACK_NUMBER_DISPLAY}
            </a>{' '}
            and we reply within one business hour.
        </p>
    );
}
