// AI receptionist / answering service price model, used by /ai-receptionist-cost-calculator and
// /blog/ai-receptionist-pricing. Every number was checked on the vendor's own pricing page on
// PRICES_CHECKED (raw data kept by Alive-Web: content/research/ai-receptionist-pricing-2026-10.json).
// Re-verify monthly. `over: null` means the vendor publishes no overage rate, so usage must fit the plan.

export const PRICES_CHECKED = '2026-10-06';
export const PRICES_CHECKED_LABEL = 'October 6, 2026';

// unit: 'call' | 'min' | 'min30' (minutes rounded up to 30 seconds per call) | 'caller' (unique callers) | 'interaction' | 'flat'
export const RECEPTIONIST_VENDORS = [
    { name: 'Quo (OpenPhone) Sona', url: 'https://www.quo.com/pricing', kind: 'ai', unit: 'call', extra: 15, extraNote: 'includes a Quo seat from $15 (billed yearly)',
        tiers: [{ plan: 'Tier 1', price: 0, inc: 10, over: 1.0 }, { plan: 'Tier 2', price: 25, inc: 40, over: 0.75 }, { plan: 'Tier 3', price: 49, inc: 100, over: 0.65 }, { plan: 'Tier 4', price: 99, inc: 250, over: 0.55 }, { plan: 'Tier 5', price: 199, inc: 600, over: 0.45 }] },
    { name: 'Upfirst', url: 'https://upfirst.ai/pricing', kind: 'ai', unit: 'call',
        tiers: [{ plan: 'Starter', price: 24.95, inc: 30, over: 1.5 }, { plan: 'Premium', price: 59.95, inc: 90, over: 1.0 }, { plan: 'Pro', price: 159.95, inc: 300, over: 0.75 }, { plan: 'Scale', price: 299, inc: 600, over: 0.7 }] },
    { name: 'Trillet', url: 'https://www.trillet.ai/pricing', kind: 'ai', unit: 'min',
        tiers: [{ plan: 'AI Receptionist', price: 49, inc: 150, over: 0.2 }] },
    { name: 'Goodcall', url: 'https://www.goodcall.com/pricing', kind: 'ai', unit: 'caller',
        tiers: [{ plan: 'Starter', price: 79, inc: 100, over: 0.5 }, { plan: 'Growth', price: 129, inc: 250, over: 0.5 }, { plan: 'Scale', price: 249, inc: 500, over: 0.5 }] },
    { name: 'Nextiva XBert', url: 'https://www.nextiva.com/products/ai-receptionist', kind: 'ai', unit: 'interaction',
        tiers: [{ plan: 'XBert', price: 99, inc: 100, over: 0.99 }] },
    { name: 'My AI Front Desk', url: 'https://www.myaifrontdesk.com/pricing', kind: 'ai', unit: 'min',
        tiers: [{ plan: 'Business-in-a-Box', price: 99, inc: 200, over: 0.25 }] },
    { name: 'Dialzara', url: 'https://www.dialzara.com/pricing', kind: 'ai', unit: 'min',
        tiers: [{ plan: 'Plan 1', price: 29, inc: 60, over: 0.48 }, { plan: 'Plan 2', price: 99, inc: 220, over: 0.45 }, { plan: 'Plan 3', price: 199, inc: 500, over: 0.4 }, { plan: 'Plan 4', price: 349, inc: 1000, over: 0.35 }] },
    { name: 'RingCentral AIR (standalone)', url: 'https://www.ringcentral.com/pricing/ai-receptionist.html', kind: 'ai', unit: 'min30',
        tiers: [{ plan: 'Standalone', price: 49, inc: 100, over: 0.5 }] },
    { name: 'Rosie', url: 'https://heyrosie.com/pricing', kind: 'ai', unit: 'min', note: 'no overage: Rosie moves you to the next plan',
        tiers: [{ plan: 'Professional', price: 49, inc: 250, over: null }, { plan: 'Pro', price: 149, inc: 1000, over: null }, { plan: 'Scale', price: 299, inc: 2000, over: null }] },
    { name: 'Phonely', url: 'https://www.phonely.ai/pricing', kind: 'ai', unit: 'min', note: 'overage not published',
        tiers: [{ plan: 'Free', price: 0, inc: 100, over: null }, { plan: 'Starter', price: 50, inc: 200, over: null }, { plan: 'Professional', price: 150, inc: 650, over: null }] },
    { name: 'Ringly.io', url: 'https://www.ringly.io/pricing', kind: 'ai', unit: 'call',
        tiers: [{ plan: 'Pay per conversation', price: 99, inc: 50, over: 1.99 }] },
    { name: 'NextPhone', url: 'https://www.getnextphone.com/pricing', kind: 'ai', unit: 'flat',
        tiers: [{ plan: 'Pro (unlimited calls)', price: 199, inc: Infinity, over: 0 }] },
    { name: 'Smith.ai AI Receptionist', url: 'https://smith.ai/pricing/ai-receptionist', kind: 'ai', unit: 'call', note: 'Pro/Enterprise overage not published',
        tiers: [{ plan: 'Free', price: 0, inc: 25, over: 3.0 }, { plan: 'Pro', price: 150, inc: 75, over: null }, { plan: 'Enterprise', price: 500, inc: 300, over: null }] },
    { name: 'Smith.ai Virtual Receptionists', url: 'https://smith.ai/pricing/receptionists', kind: 'human', unit: 'call',
        tiers: [{ plan: 'Starter', price: 300, inc: 30, over: 11.5 }, { plan: 'Basic', price: 810, inc: 90, over: 10.5 }, { plan: 'Pro', price: 2100, inc: 300, over: 8.5 }] },
    { name: 'Abby Connect (human answering)', url: 'https://www.abby.com/pricing/', kind: 'human', unit: 'min', note: 'overage rate not published as a number',
        tiers: [{ plan: 'Starter', price: 165, inc: 50, over: null }, { plan: 'Essential', price: 329, inc: 100, over: null }, { plan: 'Professional', price: 599, inc: 200, over: null }, { plan: 'Growth', price: 1380, inc: 500, over: null }] },
];

const round2 = (n) => Math.round(n * 100) / 100;

// calls: per month; avgMinutes: per call; uniqueShare: 0..1 share of calls from distinct callers.
export function usageFor(unit, { calls, avgMinutes, uniqueShare }) {
    if (unit === 'call' || unit === 'interaction') return calls;
    if (unit === 'min') return calls * avgMinutes;
    if (unit === 'min30') return calls * (Math.ceil(avgMinutes * 2) / 2);
    if (unit === 'caller') return Math.ceil(calls * uniqueShare);
    return 0;
}

export function costFor(vendor, input) {
    const u = usageFor(vendor.unit, input);
    let best = null;
    for (const t of vendor.tiers) {
        if (t.over === null && u > t.inc) continue;
        const cost = round2(t.price + Math.max(0, u - t.inc) * (t.over || 0) + (vendor.extra || 0));
        if (!best || cost < best.cost) best = { cost, plan: t.plan };
    }
    return best;
}

export function compareReceptionistCosts(input) {
    return RECEPTIONIST_VENDORS.map((v) => ({ ...v, result: costFor(v, input) }))
        .sort((a, b) => (a.result?.cost ?? Infinity) - (b.result?.cost ?? Infinity));
}

export const unitLabel = { call: 'per call', interaction: 'per interaction', min: 'per minute', min30: 'per minute (30-second rounding)', caller: 'per unique caller', flat: 'flat' };
