// Copy and configuration for /ai-receptionist and /ai-receptionist/book.
// The page is built for the trades: HVAC, plumbing, electrical, roofing and
// general contractors. Variants selected by ?v=<key> match each ad group's
// keyword with the headline. Keep copy free of em dashes.

export const CALLBACK_NUMBER_DISPLAY = '+1 737-390-1099';
export const CALLBACK_NUMBER_E164 = '+17373901099';

// Keyword a visitor texts to the Close number instead of booking. Lands in the
// Close SMS inbox like any other inbound text.
export const TEXT_KEYWORD = 'PILOT';

// Set to a tel: number once an inbound receptionist agent answers a dedicated
// demo line. While null, the primary button plays the demo recording instead.
export const DEMO_PHONE_E164 = null;

// Monthly price floor shown after the pilot, for example 299. Leave null to
// show "less than one missed job" without a number.
export const PILOT_PRICE_FROM = null;

// Flip to true once the receptionist agent is configured to answer in Spanish.
export const SUPPORTS_SPANISH = false;

export const FOUNDER = {
    name: 'Sibi Narendran',
    role: 'Founder, Dooza',
    image: '/founder-sibi.jpeg',
    line: 'Runs your setup call and builds every pilot personally.',
};

export const PILOT_PROMISE = 'Set up and live on your line within 48 hours. Only pay if you find it useful.';

export const TRADES_LIST = 'HVAC, plumbing, electrical, roofing, garage doors, pest control, landscaping, and general contractors.';

// The three calls a trades business loses to voicemail.
export const TRADE_MOMENTS = [
    {
        key: 'emergency',
        name: 'The after-hours emergency',
        pain: 'AC quits at 9pm. A pipe bursts on a Sunday. The caller wants someone tonight.',
        outcome: 'It answers, gets the address and the problem, and books the emergency slot.',
    },
    {
        key: 'estimate',
        name: 'The estimate request',
        pain: 'A homeowner wants a quote for a new system, a repipe, a panel upgrade, or a roof.',
        outcome: 'It captures the scope, the address and the timing, and books the site visit.',
    },
    {
        key: 'maintenance',
        name: 'The maintenance call',
        pain: 'Tune-ups, inspections and seasonal service while the whole crew is out.',
        outcome: 'It books the visit and texts the confirmation. No callback needed.',
    },
];

const BASE = {
    key: 'default',
    headline: 'AI Receptionist for Contractors and Trades',
    subhead: 'Answers every call while you are on the tools, asks the questions you would ask, and books the job on your calendar. 24/7, in your company name.',
    metaTitle: 'AI Receptionist for Contractors and Trades | Free Two-Week Pilot | Dooza',
    metaDescription:
        'An AI receptionist for HVAC, plumbing, electrical, roofing and other trades. Answers every call in your company name while you are on the job, qualifies the caller, and books it on your calendar. Free setup, free two-week pilot, no contract.',
    demo: 'hvac',
    demoLabel: 'Demo call: after-hours no-cool call to an HVAC company',
};

export const RECEPTIONIST_VARIANTS = {
    default: BASE,
    'answering-service': {
        ...BASE,
        key: 'answering-service',
        headline: 'AI Answering Service for Contractors and Trades',
        subhead: 'Answers every call in your company name while you are on the job, takes the details, and books it on your calendar. 24/7, no hold music.',
    },
    hvac: {
        ...BASE,
        key: 'hvac',
        headline: 'AI Receptionist for HVAC Companies',
        subhead: 'Answers every service call, asks the questions you would ask, and books the job on your calendar. 24/7, in your company name.',
    },
    plumbing: {
        ...BASE,
        key: 'plumbing',
        headline: 'AI Receptionist for Plumbers',
        subhead: 'Answers every emergency call, gets the address and the problem, and books the job on your calendar. 24/7, in your company name.',
    },
    electrical: {
        ...BASE,
        key: 'electrical',
        headline: 'AI Receptionist for Electricians',
        subhead: 'Answers every call while you are in a panel, qualifies the job, and books it on your calendar. 24/7, in your company name.',
    },
    roofing: {
        ...BASE,
        key: 'roofing',
        headline: 'AI Receptionist for Roofers',
        subhead: 'Answers every storm call and estimate request, gets the address and the damage, and books the inspection. 24/7, in your company name.',
    },
    contractors: {
        ...BASE,
        key: 'contractors',
        headline: 'AI Receptionist for Contractors',
        subhead: 'Answers every call while you are on the job, qualifies the lead, and books the estimate on your calendar. 24/7, in your company name.',
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
    if (PILOT_PRICE_FROM) {
        return `A flat monthly fee from $${PILOT_PRICE_FROM} a month, less than one missed service call. Agreed on the setup call. Only pay if you find it useful.`;
    }
    return 'A flat monthly fee, less than one missed service call. Agreed on the setup call. Only pay if you find it useful.';
}

// The first item is rendered with a play button on the page; the rest are plain.
export function getReceptionistFaq() {
    const items = [
        {
            key: 'robot',
            question: 'Will it sound like a robot?',
            answer: 'No. Play the demo call on this page and judge for yourself. It speaks naturally, waits for the caller, and handles interruptions.',
        },
        {
            key: 'phone',
            question: 'Does it work with my phone?',
            answer: 'Yes. It works with any phone or phone system. You forward your business line or your cell when you are on a job, after hours, or all the time. Forwarding takes five minutes and you can switch it off anytime.',
        },
        {
            key: 'dispatch',
            question: 'Can it book into my dispatch software?',
            answer: 'Google Calendar and Outlook work out of the box. If you run Housecall Pro, Jobber or ServiceTitan, tell us on the setup call and we connect it during the pilot where the software allows it.',
        },
        {
            key: 'unknown',
            question: 'What if it cannot answer something?',
            answer: 'It takes a message and texts you, or transfers the call to you or your dispatcher. It only says what you approve on the setup call. It never quotes a price you have not given it.',
        },
        {
            key: 'cost',
            question: 'What does it cost after the pilot?',
            answer: getPriceLine(),
        },
    ];
    if (SUPPORTS_SPANISH) {
        items.splice(3, 0, {
            key: 'spanish',
            question: 'Does it speak Spanish?',
            answer: 'Yes. It answers in English and Spanish and switches when the caller does.',
        });
    }
    return items;
}

export const RECEPTIONIST_FAQ = getReceptionistFaq();
