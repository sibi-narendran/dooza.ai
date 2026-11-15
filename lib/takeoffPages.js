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
    example: {
        path: '/takeoff/example',
        trade: 'drywall',
        title: 'Construction Takeoff Example: Drywall and Roofing',
        description: 'Two real construction takeoff examples from public plan sets: a drywall takeoff (666 LF of wall, 15,536 SF of board) and a roofing takeoff (65.4 squares). See every row and download the Excel.',
        h1: 'Construction Takeoff Example',
        lead: 'Here are two takeoffs we did from public plan sets, row by row: one drywall, one roofing. Each number below is in the Excel sheet and tied to a marked area on the plan PDF, both free to download.',
        bullets: [
            'Drywall example: 666 LF of wall, 15,536 SF of board, 357 sheets of 4x12.',
            'Roofing example: 7 roof planes, 65.4 squares (71.9 with 10% waste).',
            'Download the Excel sheet and the marked-up plan for both.',
            'Want this for your plan? The first one is free, within 48 hours.',
        ],
        sections: [
            ['How to read the drywall example', 'Start with wall length. Each wall run is measured off the plan and grouped by wall type: here 521.8 LF of type A1 and 144.2 LF of type F4. Board area is length times height times the number of board sides: 521.8 x 13.08 ft x 2 sides = 13,650 SF for A1. Add the waste factor (10% here) and divide by the sheet size (a 4x12 sheet is 48 SF) to get sheets: 313 for A1. Studs are counted per wall run at 16 inches on centre, and track is the wall length twice, top and bottom.'],
            ['How to read the roofing example', 'Each roof plane is measured flat on the plan first (plan SF). A sloped roof is larger than it looks from above, so the plan area is multiplied by a slope factor for the pitch: 1.0035 for 1:12 and 1.0308 for 3:12. That gives the actual area. Divide by 100 to get squares, the unit roofing is ordered in. Ridge, eave and rake lengths are listed apart, because they drive ridge cap, drip edge and trim orders.'],
            ['What a good takeoff states', 'Three things besides the numbers. The source: which sheet and scale each quantity came from. The assumptions: in the drywall example the wall height is assumed to the roof deck, and in the roofing example two slopes are not printed on the sheet, so both are marked "assumed". And what was left out: openings are not deducted in the drywall example. If a takeoff does not say these, ask before you price from it.'],
        ],
        tables: [
            {
                h: 'Drywall takeoff example: the summary sheet',
                intro: 'Highline College Building 23 tenant improvement, Level 3, sheet A3.01, design development set, scale 1/8" = 1\'-0". Height 13\'-1" to deck (assumed). Waste 10%. Openings not deducted.',
                head: ['Wall type', 'Wall LF', 'Board sides', 'Board SF', 'Board SF +10%', '4x12 sheets', 'Studs', 'Track LF'],
                rows: [
                    ['A1: 3-5/8" stud partition, 5/8" Type X each side', '521.8', '2', '13,650', '15,015', '313', '560', '1,043.6'],
                    ['F4: exterior furring, board one side', '144.2', '1', '1,886', '2,075', '44', '139', '288.4'],
                    ['Total', '666.0', '', '15,536', '17,090', '357', '699', '1,332.0'],
                ],
                sourcesLabel: 'Download',
                sources: [['Quantity sheet (Excel, with all 125 wall runs)', '/takeoff/sample-drywall-takeoff.xlsx'], ['Marked-up plan (PDF)', '/takeoff/sample-drywall-takeoff-markup.pdf']],
            },
            {
                h: 'Roofing takeoff example: the summary sheet',
                intro: 'Leon County (TX) 2025 Roof Improvements, construction drawings dated 2025-09-30, sheets R-2.0 (Annex 1) and R-2.2 (Probation), scale 1/4" = 1\'-0". Waste 10% shown apart.',
                head: ['Roof plane', 'Pitch', 'Plan SF', 'Slope factor', 'Actual SF', 'Squares', 'Squares +10%'],
                rows: [
                    ['Annex 1, main roof A (west)', '1/4:12 (assumed)', '1,137.5', '1.0002', '1,137.7', '11.4', '12.5'],
                    ['Annex 1, main roof B (centre)', '1/4:12 (assumed)', '802.4', '1.0002', '802.6', '8.0', '8.8'],
                    ['Annex 1, main roof C (east)', '1/4:12 (assumed)', '1,137.5', '1.0002', '1,137.7', '11.4', '12.5'],
                    ['Annex 1, lower standing-seam roof', '1:12 (assumed)', '383.5', '1.0035', '384.8', '3.8', '4.2'],
                    ['Probation, plane A', '1:12', '2,281.5', '1.0035', '2,289.5', '22.9', '25.2'],
                    ['Probation, ridge strip', 'flat', '39.0', '1.0000', '39.0', '0.4', '0.4'],
                    ['Probation, plane B', '3:12', '721.5', '1.0308', '743.7', '7.4', '8.2'],
                    ['Total', '', '6,502.9', '', '6,535.1', '65.4', '71.9'],
                ],
                sourcesLabel: 'Download',
                sources: [['Quantity sheet (Excel, with linear items and counts)', '/takeoff/sample-roofing-takeoff.xlsx'], ['Marked-up plan (PDF)', '/takeoff/sample-roofing-takeoff-markup.pdf']],
            },
        ],
        faq: [
            ['What is a construction takeoff?', 'A takeoff is the list of material quantities measured from a plan: wall lengths, board area, roof squares, ridge and eave lengths. An estimate is the takeoff with prices added.'],
            ['Are these real takeoffs?', 'Yes. Both were done by us from public plan sets, named above each table. They are samples, not an accuracy claim: check any takeoff against your bid set before you price it.'],
            ...COMMON_FAQ,
        ],
    },
};
