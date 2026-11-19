// Commercial drywall takeoff checklist for subcontractors (2026): inbound SEO/AEO guide feeding /takeoff/drywall + /takeoff + /takeoff/example + /takeoff/cost.
// Targets: "commercial drywall takeoff checklist", "drywall takeoff from plans", "metal stud and drywall estimating checklist".
// Facts: content/2026-11-19-commercial-drywall-takeoff-checklist.md (authored 2026-11-19; Pythia PASS 91/100 post iqyeopkjojbdjpdqirxzntwrky).

const DRYWALL_HREF = '/takeoff/drywall';
const TAKEOFF_HREF = '/takeoff';
const EXAMPLE_HREF = '/takeoff/example';
const COST_HREF = '/takeoff/cost';

export default {
    id: 600,
    title: 'Commercial Drywall Takeoff Checklist for Subcontractors (2026)',
    seoTitle: 'Commercial Drywall Takeoff Checklist for Subs (2026)',
    seoDescription: 'Check all 4 commercial drywall takeoff layers: partition types & heights, board & studs, ceilings & soffits, and finish specs—or get 4-tab Excel + PDF in 48h ($0 first plan).',
    excerpt: 'A 4-step commercial drywall takeoff checklist covering partition types and wall heights, board layers and metal studs, ceilings/soffits/shaft walls, and finish/addenda checks.',
    author: 'Dooza Team',
    date: '2026-11-19',
    modifiedDate: '2026-11-19',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Construction Takeoff',
    tags: ['Drywall Takeoff', 'Commercial Drywall', 'Metal Framing', 'Construction Estimating', 'Dooza Takeoff'],
    image: '/blog/commercial-drywall-takeoff-checklist-for-subcontractors.jpg',
    imageAlt: 'Commercial drywall estimator marking up partition floor plans with highlighters beside a laptop spreadsheet',
    slug: 'commercial-drywall-takeoff-checklist-for-subcontractors',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'four-steps', label: '4-step commercial drywall takeoff checklist' },
        { id: 'manual-vs-dooza', label: 'Manual scaling vs. Dooza Drywall Takeoff' },
        { id: 'deliverables', label: 'Worked 125-wall-run sample & pricing' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        {
            question: 'What should be on a commercial drywall takeoff checklist?',
            answer: 'Check four layers before pricing: (1) floor plan scale, partition-type tags, fire/acoustic ratings, and wall heights (to deck vs. ceiling), (2) gypsum board layers, metal stud gauge/spacing, and track linear feet, (3) gypsum ceilings, soffits/bulkheads, shaft walls, and waste/opening assumptions (e.g., 10% waste), and (4) corner bead/control joints, finish levels, and addenda notes.',
        },
        {
            question: 'What deliverables do I get from Dooza Drywall Takeoff?',
            answer: 'Within 48 hours you receive our default 4-tab Excel workbook (Quantities, Areas, Assumptions, Open Questions) plus a color-coded marked-up plan PDF so you can trace every wall run back to the drawing. On request, we can also map those quantities into your existing .xlsx bid template if you send it.',
        },
        {
            question: 'Can I inspect a real commercial drywall takeoff sample before uploading?',
            answer: 'Yes. View our worked 125-wall-run sample from Highline College Building 23 (Level 3, sheet A3.01, 10% waste, openings not deducted) on /takeoff/example, including downloadable sample Excel and marked-up PDF files.',
        },
        {
            question: 'How much does Dooza Drywall Takeoff cost?',
            answer: 'Your first plan is free ($0, no card required). After that, pricing is flat: $100/plan or $399/month for up to 10 plans, month-to-month with no annual contract. See /takeoff/cost for full details.',
        },
    ],
    content: `
<div id="short-answer">
  <h2>Short Answer</h2>
  <p>A complete commercial drywall takeoff checks four layers before you price a bid: (1) floor plan scale, partition-type tags, fire/acoustic ratings, and wall heights (to deck vs. ceiling), (2) gypsum board layers, metal stud gauge/spacing, and track linear feet, (3) gypsum ceilings, soffits/bulkheads, shaft walls, and waste/opening assumptions (e.g., <strong>10%</strong> waste), and (4) finish levels, corner bead, and addenda notes.</p>
  <p>Rather not spend evenings scaling PDFs? Upload your plan on <a href="${DRYWALL_HREF}">Dooza Drywall Takeoff</a> and get our <strong>4-tab Excel workbook</strong> (<code>Quantities</code>, <code>Areas</code>, <code>Assumptions</code>, <code>Open Questions</code> &mdash; or mapped into your own <code>.xlsx</code> bid template on request) plus a color-coded marked-up plan PDF in <strong>48 hours</strong> while keeping your own material and labor pricing in-house. Your <strong>first plan is free ($0, no card)</strong>, then <strong>$100/plan</strong> or <strong>$399/month for up to 10 plans</strong> (month-to-month, no annual contract). Inspect our worked <strong>125</strong>-wall-run sample Excel + markup PDF on <a href="${EXAMPLE_HREF}">/takeoff/example</a> or check <a href="${COST_HREF}">/takeoff/cost</a>.</p>
</div>

<div id="four-steps">
  <h2>4-Step Commercial Drywall Takeoff Checklist</h2>
  <ol>
    <li><strong>Verify partition types &amp; wall heights:</strong> Confirm floor plan scale, partition schedule tags, fire/acoustic ratings, and slab-to-deck vs. ceiling-height runs.</li>
    <li><strong>Quantify board, stud, and track:</strong> Separate single-layer vs. multi-layer gypsum board, moisture/abuse-resistant board, metal stud gauge/spacing, and top/bottom track linear feet.</li>
    <li><strong>Measure ceilings, soffits, and openings:</strong> Quantify gypsum ceilings, bulkheads, and shaft walls, and document consistent waste (<strong>10%</strong>) and opening-deduction assumptions.</li>
    <li><strong>Check tape, corner bead, and addenda:</strong> Count corner bead and control-joint linear feet, Level 4/5 finish areas, and cross-check addenda before applying your unit pricing in Excel.</li>
  </ol>
</div>

<div id="manual-vs-dooza">
  <h2>Manual Scaling vs. Dooza Drywall Takeoff (<a href="${DRYWALL_HREF}">/takeoff/drywall</a>)</h2>
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Pricing &amp; Contract</th>
        <th>Turnaround &amp; Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Manual PDF scaling</strong></td>
        <td>Estimator hours</td>
        <td>Evenings spent clicking partition types and reconciling wall heights by hand.</td>
      </tr>
      <tr>
        <td><strong><a href="${DRYWALL_HREF}">Dooza Drywall Takeoff</a></strong></td>
        <td><strong>First plan free ($0, no card)</strong>; then <strong>$100/plan</strong> or <strong>$399/month</strong> for up to <strong>10</strong> plans (month-to-month)</td>
        <td>Delivered in <strong>48 hours</strong> as a 4-tab Excel workbook (or mapped into your <code>.xlsx</code> bid template on request) + color-coded marked-up plan PDF.</td>
      </tr>
    </tbody>
  </table>
</div>

<div id="deliverables">
  <h2>Worked 125-Wall-Run Sample &amp; Next Steps</h2>
  <p>Want to verify how partition-type heights and assumptions are documented? Download our worked Highline College Building 23 sample (<a href="/takeoff/sample-drywall-takeoff.xlsx">sample-drywall-takeoff.xlsx</a> and <a href="/takeoff/sample-drywall-takeoff-markup.pdf">sample-drywall-takeoff-markup.pdf</a>) on <a href="${EXAMPLE_HREF}">/takeoff/example</a>.</p>
  <p><a href="${DRYWALL_HREF}">Upload your first drywall plan free</a> &middot; <a href="${TAKEOFF_HREF}">All trade takeoffs</a> &middot; <a href="${COST_HREF}">See full pricing</a></p>
</div>
`,
};
