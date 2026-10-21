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

// Flip to true once the receptionist agent is configured to answer in Spanish.
export const SUPPORTS_SPANISH = false;

export const FOUNDER = {
    name: 'Sibi Narendran',
    role: 'Founder, Dooza',
    image: '/founder-sibi.jpeg',
    line: 'Runs your intake call and checks every setup personally.',
};

// Offer owned by Odysseus (2026-10-21): RECEP1, $149/mo, paid first; refund line is Sibi's pilot promise.
export const RECEP_PAY_URL = 'https://buy.stripe.com/eVqcN51C31ZX0yEfvv3AY19';
export const recepPayUrl = (slug) => `${RECEP_PAY_URL}?client_reference_id=recep-${slug}`;
export const PILOT_PROMISE = '$149/month for up to 500 minutes, then $0.30/min. Cancel within 14 days of your first charge for a full refund.';

export const TRADES_LIST = 'HVAC, plumbing, electrical, roofing, garage doors, pest control, landscaping, and general contractors.';

// The three calls a trades business loses to voicemail.
export const TRADE_MOMENTS = [
    {
        key: 'emergency',
        name: 'The after-hours emergency',
        pain: 'AC quits at 9pm. A pipe bursts on a Sunday. The caller wants someone tonight.',
        outcome: 'It answers, gets the address and the problem, and emails them to you with the transcript.',
    },
    {
        key: 'estimate',
        name: 'The estimate request',
        pain: 'A homeowner wants a quote for a new system, a repipe, a panel upgrade, or a roof.',
        outcome: 'It captures the scope, the address and the timing, and emails them to you.',
    },
    {
        key: 'maintenance',
        name: 'The maintenance call',
        pain: 'Tune-ups, inspections and seasonal service while the whole crew is out.',
        outcome: 'It takes the details and emails you the message, so you call back with everything you need.',
    },
];

const BASE = {
    key: 'default',
    headline: 'AI Receptionist for Contractors and Trades',
    subhead: 'Answers every call while you are on the tools, asks the questions you would ask, and emails you the message with the transcript.',
    metaTitle: 'AI Receptionist for Contractors and Trades | $149/mo | Dooza',
    metaDescription:
        'AI receptionist for HVAC, plumbing, electrical and roofing. Answers the calls you miss in your company name, takes the message and emails it to you with the transcript. $149/month.',
    demo: 'hvac',
    demoLabel: 'Demo call: after-hours no-cool call to an HVAC company',
};

export const RECEPTIONIST_VARIANTS = {
    default: BASE,
    'answering-service': {
        ...BASE,
        key: 'answering-service',
        headline: 'AI Answering Service for Contractors and Trades',
        subhead: 'Answers every call in your company name while you are on the job, takes the details, and emails you the message with the transcript.',
    },
    hvac: {
        ...BASE,
        key: 'hvac',
        headline: 'AI Receptionist for HVAC Companies',
        subhead: 'Answers every service call, asks the questions you would ask, and emails you the message with the transcript.',
    },
    plumbing: {
        ...BASE,
        key: 'plumbing',
        headline: 'AI Receptionist for Plumbers',
        subhead: 'Answers every emergency call, gets the address and the problem, and emails you the message with the transcript.',
    },
    electrical: {
        ...BASE,
        key: 'electrical',
        headline: 'AI Receptionist for Electricians',
        subhead: 'Answers every call while you are in a panel, takes the job details, and emails you the message with the transcript.',
    },
    roofing: {
        ...BASE,
        key: 'roofing',
        headline: 'AI Receptionist for Roofers',
        subhead: 'Answers every storm call and estimate request, gets the address and the damage, and emails you the message with the transcript.',
    },
    contractors: {
        ...BASE,
        key: 'contractors',
        headline: 'AI Receptionist for Contractors',
        subhead: 'Answers every call while you are on the job, takes the details, and emails you the message with the transcript.',
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
    return '$149 a month for up to 500 minutes, then $0.30 a minute. Month to month, paid up front. Cancel within 14 days of your first charge for a full refund.';
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
            question: 'Can it book into my calendar or dispatch software?',
            answer: 'Not today. It takes the message and emails it to you with the call transcript, so you or your office book the job. It does not connect to calendars, Housecall Pro, Jobber or ServiceTitan.',
        },
        {
            key: 'unknown',
            question: 'What if it cannot answer something?',
            answer: 'It takes a message for you. It only says what you approve at intake. It never quotes a price you have not given it.',
        },
        {
            key: 'replace',
            question: 'Will it replace my receptionist or office manager?',
            answer: 'It is not meant to. Most owners use it for the calls nobody picks up today: after hours, weekends, lunch, and when the office line is busy or you are on a job. When a caller is upset, has a complicated problem, or asks for a person, it takes a message so you can call back.',
        },
        {
            key: 'test',
            question: 'Can I try it on my own business before I commit?',
            answer: 'Yes. It is month to month: pay $149 and at intake we collect your services, hours, common questions and the questions callers should be asked, and confirm your go-live date. If it does not work for your business, cancel within 14 days of your first charge for a full refund.',
        },
        {
            key: 'not-for',
            question: 'Who is it not a good fit for?',
            answer: 'It answers in English only today. It is not a HIPAA service, so it is not for medical practices that need a BAA. If most of your calls need long, judgment-heavy conversations, a human answering service is the better pick; use it for overflow and after hours instead.',
        },
        {
            key: 'cost',
            question: 'What does it cost?',
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
