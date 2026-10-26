// Copy and configuration for /ai-receptionist and /ai-receptionist/book.
// The page is built for the trades: HVAC, plumbing, electrical, roofing and
// general contractors. Variants selected by ?v=<key> match each ad group's
// keyword with the headline. Keep copy free of em dashes.

import { crewSignupUrl } from '@/lib/crewUrl';

export const CALLBACK_NUMBER_DISPLAY = '+1 737-390-1099';
export const CALLBACK_NUMBER_E164 = '+17373901099';

// Keyword a visitor texts to the Close number instead of booking. Lands in the
// Close SMS inbox like any other inbound text.
export const TEXT_KEYWORD = 'PILOT';

// Set to a tel: number once an inbound receptionist agent answers a dedicated
// demo line. While null, the primary button plays the demo recording instead.
export const DEMO_PHONE_E164 = null;

// Flip to true once the receptionist agent is configured to answer in Spanish.
export const SUPPORTS_SPANISH = false;

export const FOUNDER = {
    name: 'Sibi Narendran',
    role: 'Founder, Dooza',
    image: '/founder-sibi.jpeg',
    line: 'Founder of Dooza.',
};

// Offer since 2026-10-25 (Sibi): the standalone phone product is dropped; phone calls are part of Dooza Crew.
// Names kept so existing imports keep working; they now point at Crew signup.
export const RECEP_PAY_URL = 'https://crew.dooza.ai';
export const recepPayUrl = (slug) => crewSignupUrl(`recep-${slug}`);
export const PILOT_PROMISE = 'free to try (no card needed). Phone calls are included in your Crew plan.';

export const TRADES_LIST = 'HVAC, plumbing, electrical, roofing, garage doors, pest control, landscaping, and general contractors.';

// The three calls a trades business loses to voicemail.
export const TRADE_MOMENTS = [
    {
        key: 'emergency',
        name: 'The after-hours emergency',
        pain: 'AC quits at 9pm. A pipe bursts on a Sunday. The caller wants someone tonight.',
    },
    {
        key: 'estimate',
        name: 'The estimate request',
        pain: 'A homeowner wants a quote for a new system, a repipe, a panel upgrade, or a roof.',
    },
    {
        key: 'maintenance',
        name: 'The maintenance call',
        pain: 'Tune-ups, inspections and seasonal service while the whole crew is out.',
    },
];

const BASE = {
    key: 'default',
    headline: 'AI Receptionist for Contractors and Trades',
    subhead: 'Dooza Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy.',
    metaTitle: 'AI Receptionist for Contractors and Trades | Dooza Crew',
    metaDescription:
        'AI receptionist for HVAC, plumbing, electrical and roofing: Dooza Crew agents take phone calls too, included in your Crew plan. free to try.',
    demo: 'hvac',
    demoLabel: 'Demo call: after-hours no-cool call to an HVAC company',
};

export const RECEPTIONIST_VARIANTS = {
    default: BASE,
    'answering-service': {
        ...BASE,
        key: 'answering-service',
        headline: 'AI Answering Service for Contractors and Trades',
    },
    hvac: {
        ...BASE,
        key: 'hvac',
        headline: 'AI Receptionist for HVAC Companies',
    },
    plumbing: {
        ...BASE,
        key: 'plumbing',
        headline: 'AI Receptionist for Plumbers',
    },
    electrical: {
        ...BASE,
        key: 'electrical',
        headline: 'AI Receptionist for Electricians',
    },
    roofing: {
        ...BASE,
        key: 'roofing',
        headline: 'AI Receptionist for Roofers',
    },
    contractors: {
        ...BASE,
        key: 'contractors',
        headline: 'AI Receptionist for Contractors',
    },
};

export function getReceptionistVariant(v) {
    if (typeof v === 'string' && Object.prototype.hasOwnProperty.call(RECEPTIONIST_VARIANTS, v)) {
        return RECEPTIONIST_VARIANTS[v];
    }
    return RECEPTIONIST_VARIANTS.default;
}

// Maps a page variant to the Close "Industry" custom field value.
export const VARIANT_INDUSTRY = {
    default: 'Trades',
    hvac: 'HVAC',
    plumbing: 'Plumbing',
    electrical: 'Electrical',
    roofing: 'Roofing',
    contractors: 'General contractor',
    'answering-service': 'Trades',
};

export const RECEPTIONIST_KEYWORDS = [
    'ai receptionist',
    'ai receptionist for small business',
    'ai phone receptionist',
    'ai virtual receptionist',
    'automated receptionist',
    'ai answering service',
    'ai phone answering service',
    'ai call answering service',
    'ai receptionist for contractors',
    'ai receptionist for hvac',
    'ai receptionist for plumbers',
    'ai receptionist for electricians',
    'ai receptionist for roofers',
    'hvac virtual receptionist',
    'plumbing virtual receptionist',
    'answering service for contractors',
    'hvac answering service',
    'plumbing answering service',
    'after hours answering service for contractors',
];

export function getPriceLine() {
    return 'Free to try (no card needed). AI usage is included with a hard spending cap.';
}

export function getReceptionistFaq() {
    return [
        {
            key: 'what',
            question: 'What is Dooza Crew?',
            answer: 'AI agents (a lead agent plus helper agents) you chat with on web or phone. They browse the web and write files in their own workspace.',
        },
        {
            key: 'phone',
            question: 'Do Crew agents take phone calls?',
            answer: 'Yes. Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy.',
        },
        {
            key: 'approve',
            question: 'Will an agent send or pay without asking me?',
            answer: 'No. Before an agent sends or pays it asks you in chat (Approve / Edit / Reject).',
        },
        {
            key: 'team',
            question: 'Can my whole team use it?',
            answer: 'Yes. Users and agents are unlimited.',
        },
        {
            key: 'cost',
            question: 'What does it cost?',
            answer: getPriceLine(),
        },
    ];
}

export const RECEPTIONIST_FAQ = getReceptionistFaq();
