// Shared vs exclusive insurance lead math, used by /insurance-lead-cost-calculator (server default + client calculator).
// Pure arithmetic on the user's own inputs; market price ranges live in LEAD_PRICE_SOURCES with their sources.

export const SOURCES_CHECKED = '2026-10-10';
export const SOURCES_CHECKED_LABEL = 'October 10, 2026';

// costPerLead in $, closeRate in % (leads that become a sold policy), commission = $ first-year commission per policy.
export function leadEconomics({ costPerLead, closeRate, commission }) {
    const rate = Math.max(0, closeRate) / 100;
    const costPerPolicy = rate > 0 ? costPerLead / rate : null;
    const revenuePerLead = rate * commission;
    return {
        costPerPolicy,
        profitPerLead: revenuePerLead - costPerLead,
        profitPer100: (revenuePerLead - costPerLead) * 100,
        // Return on lead spend, first-year commission only: (revenue - cost) / cost.
        roi: costPerLead > 0 ? ((revenuePerLead - costPerLead) / costPerLead) * 100 : null,
        breakEvenCloseRate: commission > 0 ? (costPerLead / commission) * 100 : null,
    };
}

// How many times more often the exclusive lead must close to match shared on cost per policy.
export function requiredCloseMultiple(sharedCost, exclusiveCost) {
    return sharedCost > 0 ? exclusiveCost / sharedCost : null;
}

export const LEAD_PRICE_SOURCES = [
    {
        what: 'Medicare leads, aged',
        range: '$0.50 to $8 per lead',
        source: 'Elevarus, July 11, 2026',
        url: 'https://elevarus.com/medicare-advantage-leads-cost-per-connected-lead/',
    },
    {
        what: 'Medicare leads, shared (sold to several agents)',
        range: '$5 to $15 per lead',
        source: 'Elevarus, July 11, 2026',
        url: 'https://elevarus.com/medicare-advantage-leads-cost-per-connected-lead/',
    },
    {
        what: 'Medicare leads, real-time exclusive',
        range: '$15 to $40 per lead',
        source: 'Elevarus, July 11, 2026',
        url: 'https://elevarus.com/medicare-advantage-leads-cost-per-connected-lead/',
    },
    {
        what: 'Medicare live transfers',
        range: '$25 to $60 per connected call',
        source: 'Elevarus, July 11, 2026',
        url: 'https://elevarus.com/medicare-advantage-leads-cost-per-connected-lead/',
    },
    {
        what: 'Insurance leads overall (27 vendors reviewed)',
        range: 'Most $5 to $50 per lead; under $1 (aged shared) to $200+ (exclusive commercial)',
        source: 'Insifter 2026 review, as reported by ActiveProspect, Sept 28, 2026',
        url: 'https://activeprospect.com/blog/insurance-leads-cost/',
    },
    {
        what: 'Google Ads, Finance & Insurance advertisers',
        range: '$83.93 average cost per lead (all industries $70.11)',
        source: 'WordStream 2025 benchmarks, as reported by ActiveProspect, Sept 28, 2026',
        url: 'https://activeprospect.com/blog/insurance-leads-cost/',
    },
    {
        what: 'Facebook/Meta ads, financial services',
        range: '$58.70 average cost per lead',
        source: 'Focus Digital, August 2026 (138 campaigns)',
        url: 'https://focus-digital.co/average-cost-per-lead-on-facebook-july-2026-report/',
    },
];
