// Takeoff service pages (Sibi 2026-11-13 13:07 via Apollo, #asks kuzu75g5). Offer = Odysseus OFFERS.md T1 only:
// first plan free, $100/plan or $399/mo up to 10 plans, month to month, within 48 hours. No accuracy %, no reviews/logos.
export const TAKEOFF_PRICE = [
    ['First plan', 'Free'],
    ['Pay per plan', '$100 a plan'],
    ['Monthly', '$399 a month, up to 10 plans ($40 a plan)'],
    ['Contract', 'None. Month to month, stop any time.'],
];

const COMMON_FAQ = [
    ['What files do you take?', 'PDF plan sets are best. We also take image files (PNG, JPG, TIFF). For large sets, paste a Dropbox, Google Drive or plan room link in the form.'],
    ['How fast do I get it?', 'Within 48 hours of the plan reaching us. Tell us your bid date in the form.'],
    ['What do I get back?', 'An Excel quantity sheet and a marked-up plan PDF, so you can see what was counted where.'],
    ['How do I check the takeoff?', 'Every quantity on the sheet points to a marked-up area on the plan. Spot-check any room or roof plane against the drawing before you price it.'],
    ['What does it cost after the free plan?', '$100 a plan, or $399 a month for up to 10 plans. No contract.'],
    ['Do you price the job for me?', 'Yes, if you want. By default we do the quantities and you price them; send your material prices, labor rates and markup and we add the pricing.'],
    ['Is my plan kept private?', 'Your plans are used only for your takeoff and are never shared. Ask and we delete them.'],
];

export const TAKEOFF_PAGES = {
    hub: {
        path: '/takeoff',
        trade: 'drywall',
        title: 'Construction Takeoff Services: First Plan Free',
        description: 'Construction takeoff and estimating services for drywall and roofing contractors. Upload a plan, get Excel quantities and a marked-up PDF within 48 hours. First plan free, then $100.',
        h1: 'Construction Takeoff Services. First Plan Free.',
        lead: 'Upload your plan PDF and get back an Excel quantity sheet plus a marked-up plan within 48 hours. Built for drywall and roofing contractors who would rather bid than measure.',
        bullets: [
            'Quantity takeoffs for drywall and roofing, residential and light commercial.',
            'Excel quantities + marked-up plan PDF, so every number can be checked.',
            'Within 48 hours. Tell us your bid date.',
            '$100 a plan, or $399 a month for up to 10 plans. First plan free.',
        ],
        sections: [
            ['What a construction takeoff service does', 'A takeoff is the count of every material on a plan: wall lengths, board area, roof squares, ridge and valley lengths. Estimating turns those quantities into a price. We do the takeoff part so your estimator spends the evening pricing and sending bids, not scaling drawings.'],
            ['Trades we take', 'Drywall (walls by type, board square feet, ceilings, corner bead, waste) and roofing (squares by pitch, ridge, hip, valley, eave, rake, flashing lengths). Other trades too: tell us the trade in the form and we take it on.'],
        ],
        faq: COMMON_FAQ,
    },
    drywall: {
        path: '/takeoff/drywall',
        trade: 'drywall',
        title: 'Drywall Takeoff & Estimating Services, First Plan Free',
        description: 'Drywall takeoff services: wall linear feet by type, board square feet, ceilings and waste, in Excel with a marked-up plan, within 48 hours. First plan free, then $100.',
        h1: 'Drywall Takeoff Services. First Plan Free.',
        lead: 'Send the plan; get wall linear feet by type, board square feet and ceiling areas in Excel, with a marked-up PDF showing what was counted. Within 48 hours.',
        bullets: [
            'Wall linear feet by wall type and height, from the wall schedule.',
            'Board square feet by board type (1/2", 5/8" Type X, moisture resistant) with your waste factor.',
            'Ceilings, soffits, corner bead and trim lengths.',
            '$100 a plan, or $399 a month for up to 10 plans. First plan free.',
        ],
        sections: [
            ['What is in a drywall takeoff', 'Every wall run measured and grouped by wall type, board area per type and layer, ceiling area, and the linear items (corner bead, J-trim, control joints). You get it as an Excel sheet you can drop into your own pricing, plus the plan with each counted area marked.'],
            ['Drywall estimating vs takeoff', 'We count; you price. Your material costs, labor rates and markup stay yours. That keeps the bid in your hands and the quantities quick to check.'],
        ],
        faq: [['Do you follow the wall type schedule?', 'Yes. Walls are grouped by the types on your plan. If the schedule is missing or unclear, we flag it on the sheet instead of guessing.'], ...COMMON_FAQ],
    },
    roofing: {
        path: '/takeoff/roofing',
        trade: 'roofing',
        title: 'Roofing Takeoff & Estimating Services, First Plan Free',
        description: 'Roofing takeoff services from your plans: squares by pitch, ridge, hip, valley, eave and rake lengths, in Excel with a marked-up plan, within 48 hours. First plan free.',
        h1: 'Roofing Takeoff Services. First Plan Free.',
        lead: 'Send the roof plan; get squares by pitch and every linear length (ridge, hip, valley, eave, rake) in Excel, with a marked-up PDF of each plane. Within 48 hours.',
        bullets: [
            'Roof area in squares, by plane and pitch.',
            'Ridge, hip, valley, eave, rake and wall-flashing lengths.',
            'Penetrations and roof features counted from the plan.',
            '$100 a plan, or $399 a month for up to 10 plans. First plan free.',
        ],
        sections: [
            ['What is in a roofing takeoff', 'Each roof plane measured with its pitch, totals in squares, and the linear lengths that drive starter, ridge cap, drip edge and flashing orders. You get the Excel sheet plus the roof plan with each plane marked, so the count is easy to check.'],
            ['From plans, not satellite', 'We measure from your construction drawings, which suits new builds and additions where there is no roof to photograph yet. Waste factor is yours to set on the sheet.'],
        ],
        faq: [['Do you need a pitch on the plan?', 'Yes, from the roof plan or elevations. If a pitch is missing we flag it on the sheet instead of guessing.'], ...COMMON_FAQ],
    },
    cost: {
        path: '/takeoff/cost',
        trade: 'drywall',
        title: 'Construction Takeoff Services Cost: $100 a Plan',
        description: 'What construction takeoff services cost: $100 a plan or $399 a month for up to 10 plans at Dooza, first plan free. Plus the prices other takeoff companies publish.',
        h1: 'Construction Takeoff Services Cost',
        lead: 'Our price is flat: $100 a plan, or $399 a month for up to 10 plans. The first plan is free. You get an Excel quantity sheet and a marked-up plan PDF within 48 hours.',
        bullets: [
            'First plan free, so you can check the work before you pay.',
            '$100 a plan after that. No quote to wait for.',
            '$399 a month for up to 10 plans ($40 a plan). No contract.',
            'Drywall and roofing takeoffs, within 48 hours.',
        ],
        sections: [
            ['How takeoff services charge', 'There are three common ways. Per project: you send plans, wait for a quote, and the price moves with the size of the job. Per hour: you pay for the time spent, so the bill is unknown until the work is done. Flat per plan: one price you know before you upload. We charge flat per plan, because a subcontractor bidding several jobs a week needs to know the cost of each bid up front.'],
            ['What changes the price elsewhere', 'With quote-based services the price goes up with the number of sheets, the number of trades counted, how fast you need it, and whether you want pricing added to the quantities. Ask for the price in writing before you send a rush job. With us the plan price stays $100 for a drywall or roofing takeoff.'],
            ['What it costs to do it yourself', 'Count your own hours. A takeoff you measure by hand at night is time not spent pricing, calling suppliers or sending more bids. Multiply the hours one plan takes you by what your hour is worth and compare it with $100.'],
        ],
        table: {
            h: 'Prices other takeoff companies publish',
            intro: 'Most takeoff companies ask you to send plans for a quote and show no price on their site. These two publish numbers. Checked on their own pages on November 15, 2026; check again before you buy.',
            head: ['Company', 'Published price', 'How it is charged'],
            rows: [
                ['Dooza', '$100 a plan, or $399 a month for up to 10 plans. First plan free.', 'Flat per plan'],
                ['Construct Estimates', '$50 for small projects, $199 to $500 for mid-sized, $800 or more for larger projects', 'Quote per project'],
                ['BackOfficePro', 'Rates start at $7 an hour', 'Per hour, after an estimate'],
            ],
            sources: [['Construct Estimates FAQ', 'https://constructestimates.com/faqs/'], ['BackOfficePro quantity takeoff page', 'https://www.backofficepro.com/engineering/construction-quantity-takeoff.php']],
        },
        faq: [
            ['How much does a construction takeoff cost?', 'At Dooza, $100 a plan, or $399 a month for up to 10 plans, with the first plan free. Other companies that publish prices range from $50 for a small project to $800 or more for a large one, and many only quote after seeing the plans.'],
            ['Is the free first plan really free?', 'Yes. Upload one plan, get the Excel sheet and marked-up PDF, and pay nothing. No card is asked for.'],
            ...COMMON_FAQ.filter(([q]) => !q.startsWith('What does it cost')),
        ],
    },
};
