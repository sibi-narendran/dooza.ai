// Commercial electrical takeoff checklist for subcontractors (2026): inbound SEO/AEO guide feeding /takeoff + /takeoff/example + /takeoff/cost.
// Targets: "commercial electrical takeoff checklist", "electrical takeoff from plans", "lighting and power estimating checklist".
// Facts: content/2026-11-20-commercial-electrical-takeoff-checklist.md (authored 2026-11-20; Pythia PASS 91/100 post 3fixeowxm38z8njp3d66nw87rw).

const TAKEOFF_HREF = '/takeoff';
const EXAMPLE_HREF = '/takeoff/example';
const COST_HREF = '/takeoff/cost';

export default {
    id: 629,
    title: 'Commercial Electrical Takeoff Checklist for Subs (2026)',
    seoTitle: 'Commercial Electrical Takeoff Checklist for Subs (2026)',
    seoDescription: 'Check all 4 commercial electrical takeoff layers: E-sheet schedules & scale, lighting/power device counts, conduit & feeder runs, and low-voltage/gear—or get 4-tab Excel + PDF in 48h ($0 first plan).',
    excerpt: 'A 4-step commercial electrical takeoff checklist covering E-sheet schedules and RCP heights, fixture/device counts, branch/feeder conduit runs with vertical drops, and switchgear/low-voltage.',
    author: 'Dooza Team',
    date: '2026-11-20',
    modifiedDate: '2026-11-20',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Construction Takeoff',
    tags: ['Electrical Takeoff', 'Division 26', 'Commercial Electrical', 'Construction Estimating', 'Dooza Takeoff'],
    image: '/blog/commercial-electrical-takeoff-checklist-for-subcontractors.jpg',
    imageAlt: 'Commercial electrical estimator highlighting lighting and power floor plans beside a triangular scale ruler and laptop spreadsheet',
    slug: 'commercial-electrical-takeoff-checklist-for-subcontractors',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'four-steps', label: '4-step commercial electrical takeoff checklist' },
        { id: 'manual-vs-dooza', label: 'Manual scaling vs. Dooza Takeoff' },
        { id: 'deliverables', label: 'Deliverables & pricing' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        {
            question: 'What should be on a commercial electrical takeoff checklist?',
            answer: 'Check four layers before pricing: (1) E-sheet schedules, one-line diagrams, Div 26 specs, and scale, (2) unit counts for lighting fixtures, switches, sensors, and receptacles, (3) linear feet of branch/feeder conduit and wire plus vertical drops, and (4) switchgear, panels, low-voltage stubs, and addenda.',
        },
        {
            question: 'What deliverables do I get from Dooza Takeoff?',
            answer: 'Within 48 hours you receive our default 4-tab Excel workbook (Quantities, Areas, Assumptions, Open Questions) plus a color-coded marked-up plan PDF so you can trace every count back to the drawing. On request, we can also map quantities into your existing .xlsx bid template.',
        },
        {
            question: 'Can I inspect a real takeoff sample before uploading plans?',
            answer: 'Yes. View our worked sample Excel and marked-up plan PDF on /takeoff/example before uploading your own set.',
        },
        {
            question: 'How much does Dooza Takeoff cost for electrical subcontractors?',
            answer: 'Your first plan is free ($0, no card required). After that, pricing is flat: $100/plan or $399/month for up to 10 plans, month-to-month with no annual contract. See /takeoff/cost for full details.',
        },
    ],
    content: `
<div id="short-answer">
  <h2>Short Answer</h2>
  <p>A complete commercial electrical takeoff checks four layers before you price a bid: (1) <code>E</code>-series electrical drawings, fixture/panel schedules, Division 26 specs, ceiling heights, and drawing scale, (2) unit counts by symbol for lighting fixtures (<code>Type A/B/C</code>), emergency/exit lights, receptacles (<code>GFCI</code>, dedicated, floor boxes), and switches/dimmers, (3) linear feet of branch-circuit and feeder runs (EMT/rigid conduit, MC cable, wire gauge/conductor count, trenching) plus vertical drops/rises, and (4) switchgear, panels, transformers, fire-alarm/low-voltage rough-ins, and addenda notes.</p>
  <p>Rather not spend evenings counting fixtures and scaling conduit runs on <code>E</code>-sheets? Upload your plan on <a href="${TAKEOFF_HREF}">Dooza Takeoff</a> and get our <strong>4-tab Excel workbook</strong> (<code>Quantities</code>, <code>Areas</code>, <code>Assumptions</code>, <code>Open Questions</code> &mdash; or mapped into your own <code>.xlsx</code> bid template on request) plus a color-coded marked-up plan PDF in <strong>48 hours</strong> while keeping your own gear quotes, wire pricing, and labor units in-house. Your <strong>first plan is free ($0, no card)</strong>, then <strong>$100/plan</strong> or <strong>$399/month for up to 10 plans</strong> (month-to-month, no annual contract). Inspect our worked sample Excel + markup PDF on <a href="${EXAMPLE_HREF}">/takeoff/example</a> or check <a href="${COST_HREF}">/takeoff/cost</a>.</p>
</div>

<div id="four-steps">
  <h2>4-Step Commercial Electrical Takeoff Checklist</h2>
  <ol>
    <li><strong>Verify scale, <code>E</code>-sheet schedules, and ceiling heights:</strong> Cross-check lighting, power, and one-line diagrams against <code>RCP</code> ceiling heights and Division 26 specs before counting symbols.</li>
    <li><strong>Count fixtures, devices, and specialty outlets:</strong> Tally every luminaire type, occupancy sensor, switch, standard/GFCI receptacle, floor box, and mechanical equipment disconnect separately.</li>
    <li><strong>Measure branch circuits, feeders, and vertical drops:</strong> Scale horizontal conduit/MC runs by size and conductor count, add vertical wall drops (<code>8&prime;&ndash;12&prime;+</code>) and panel-to-gear feeder lengths, and flag trenching or core-drilling zones.</li>
    <li><strong>Log switchgear, low-voltage rough-ins, and addenda:</strong> Separate distribution gear, transformers, fire-alarm/data conduit stubs, and addenda revisions before finalizing supplier quotes and labor hours.</li>
  </ol>
</div>

<div id="manual-vs-dooza">
  <h2>Manual Scaling vs. Dooza Takeoff (<a href="${TAKEOFF_HREF}">/takeoff</a>)</h2>
  <table>
    <thead>
      <tr>
        <th>Step</th>
        <th>Manual scaling in-house</th>
        <th>Dooza Takeoff (<a href="${TAKEOFF_HREF}">/takeoff</a>)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Quantity &amp; schedule measurement</td>
        <td>Evenings spent counting fixtures, devices, and conduit runs</td>
        <td><strong>48-hour</strong> turnaround with color-coded marked-up plan PDF</td>
      </tr>
      <tr>
        <td>Output format</td>
        <td>Custom spreadsheet built per bid</td>
        <td><strong>4-tab Excel</strong> (Quantities, Areas, Assumptions, Open Questions) or mapped into your own .xlsx template</td>
      </tr>
      <tr>
        <td>Pricing control</td>
        <td>In-house</td>
        <td>You keep all gear quotes, wire/conduit pricing, labor units, and markup in-house</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Estimator hours</td>
        <td><strong>First plan free ($0, no card)</strong>; then <strong>$100/plan</strong> or <strong>$399/month for up to 10 plans</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<div id="deliverables">
  <h2>Deliverables &amp; Pricing (<a href="${EXAMPLE_HREF}">/takeoff/example</a>, <a href="${COST_HREF}">/takeoff/cost</a>)</h2>
  <ul>
    <li><strong>4-tab Excel + Marked-up Plan PDF:</strong> Every fixture type, feeder run, and assumption is documented in <code>Assumptions</code> and <code>Open Questions</code> and color-coded on the plan PDF.</li>
    <li><strong>Inspect a real worked sample first:</strong> See our downloadable sample Excel + marked-up PDF on <a href="${EXAMPLE_HREF}">/takeoff/example</a>.</li>
    <li><strong>Flat, no-contract pricing:</strong> First plan <strong>$0 (no card)</strong>, then <strong>$100/plan</strong> or <strong>$399/month</strong> for up to 10 plans (<a href="${COST_HREF}">/takeoff/cost</a>).</li>
  </ul>
</div>
`,
};
