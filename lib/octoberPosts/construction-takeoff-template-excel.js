// Facts: content/drafts/construction-takeoff-template-excel-facts.md (site-cf/lib/takeoffPages.js, verified 2026-11-16).
import { src } from './helpers';

export default {
    id: 565,
    title: 'Free Construction Takeoff Template in Excel (With Drywall & Roofing Samples)',
    seoTitle: 'Construction Takeoff Template in Excel (Free Samples)',
    seoDescription: 'Download two real Excel construction takeoff templates (drywall 125-run workbook and roofing 7-plane workbook) with formulas, waste columns, and marked-up plan PDFs.',
    excerpt: 'Download two complete Excel construction takeoff templates built from real public plan sets—one drywall workbook (666 LF / 15,536 SF) and one roofing workbook (65.4 squares)—plus the exact columns every takeoff spreadsheet needs.',
    author: 'Dooza Team',
    date: '2026-11-17',
    modifiedDate: '2026-11-17',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Construction Takeoff',
    tags: ['Construction Takeoff Template', 'Excel Takeoff', 'Drywall Takeoff', 'Roofing Takeoff', 'Dooza Takeoff'],
    image: '/blog/construction-takeoff-template-excel.jpg',
    imageAlt: 'Watercolor illustration of an estimator desk with a laptop showing an Excel construction takeoff spreadsheet next to rolled blueprints',
    slug: 'construction-takeoff-template-excel',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'download-templates', label: 'Download both Excel templates' },
        { id: 'columns-needed', label: 'Columns every takeoff sheet needs' },
        { id: 'drywall-vs-roofing', label: 'Drywall vs roofing structure' },
        { id: 'done-for-you', label: 'Skip measuring on your next bid' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'Where can I download a free construction takeoff template in Excel?', answer: 'You can download two working Excel takeoff templates directly on this page: our 125-run drywall takeoff workbook (sample-drywall-takeoff.xlsx) and our 7-plane roofing takeoff workbook (sample-roofing-takeoff.xlsx), each paired with its marked-up plan PDF.' },
        { question: 'What columns should a construction takeoff spreadsheet have?', answer: 'Every takeoff sheet should separate the source (sheet number and scale), item/type (wall type or roof plane), raw measured quantity (LF or Plan SF), multipliers (height, board sides, or slope factor), net quantity, waste percentage, and total order quantity, plus a clear assumptions note.' },
        { question: 'Why keep waste percentage in a separate column?', answer: 'Keeping net quantities and waste separate lets you adjust waste (for example 10% vs 15%) for complex cuts or supplier pack sizes without re-measuring the drawings.' },
        { question: 'Can Dooza build the Excel takeoff from my plans for me?', answer: 'Yes. On Dooza Construction Takeoff Services, your first plan is free (no card required), then $100 a plan or $399 a month for up to 10 plans ($40 a plan) with no contract. You get the Excel quantity sheet and marked-up plan PDF within 48 hours.' },
    ],
    content: `<h2 id="short-answer">What makes a good construction takeoff template in Excel?</h2>
<p><strong>A good Excel construction takeoff template separates raw plan measurements from multipliers and waste, cites the exact drawing sheet and scale on every tab, and states assumptions (such as wall height or unprinted roof pitch) clearly so any estimator can spot-check a line against the PDF in seconds.</strong></p>
<p>Instead of an empty grid, you can download two complete working Excel workbooks below—both built from real public plan sets—or send your next plan to <a href="/takeoff">Dooza Construction Takeoff Services</a> (first plan free, then $100 a plan within 48 hours).</p>

<h2 id="download-templates">Download two real Excel takeoff templates</h2>
<table><thead><tr><th>Trade</th><th>Excel workbook</th><th>Marked-up plan PDF</th><th>What is inside</th></tr></thead><tbody>
<tr><td><strong>Drywall</strong></td><td><a href="/takeoff/sample-drywall-takeoff.xlsx">sample-drywall-takeoff.xlsx</a></td><td><a href="/takeoff/sample-drywall-takeoff-markup.pdf">sample-drywall-takeoff-markup.pdf</a></td><td>125 wall runs, 666.0 LF wall, 15,536 SF board (17,090 SF +10%), 357 sheets (4x12), 699 studs, 1,332.0 track LF (sheet A3.01, scale 1/8&Prime; = 1&prime;-0&Prime;)</td></tr>
<tr><td><strong>Roofing</strong></td><td><a href="/takeoff/sample-roofing-takeoff.xlsx">sample-roofing-takeoff.xlsx</a></td><td><a href="/takeoff/sample-roofing-takeoff-markup.pdf">sample-roofing-takeoff-markup.pdf</a></td><td>7 roof planes, 6,502.9 Plan SF, 6,535.1 Actual SF, 65.4 squares (71.9 +10% waste) + linear items (sheets R-2.0 &amp; R-2.2, scale 1/4&Prime; = 1&prime;-0&Prime;)</td></tr>
</tbody></table>
<p>Both files are samples from public plan sets (also shown row by row on our <a href="/takeoff/example">construction takeoff example</a> page) so you can reuse the tab layout and formulas on your own bids.</p>

<h2 id="columns-needed">The 7 columns every Excel takeoff template needs</h2>
<ol>
<li><strong>Drawing source &amp; scale:</strong> sheet number (e.g., <code>A3.01</code>) and scale so you know where every number came from.</li>
<li><strong>Assembly / type tag:</strong> partition type (A1, F4) or roof plane name so different specs never get mixed.</li>
<li><strong>Raw measurement:</strong> wall linear feet (LF) or flat roof area (Plan SF).</li>
<li><strong>Multiplier:</strong> wall height &times; board sides for drywall, or pitch slope factor (<code>1.0035</code> for 1:12, <code>1.0308</code> for 3:12) for roofing.</li>
<li><strong>Net quantity:</strong> net board SF or actual roof SF / squares before waste.</li>
<li><strong>Waste % (separate column):</strong> keeps 10% (or your own factor) easy to change without touching measured lines.</li>
<li><strong>Assumptions &amp; exclusions:</strong> state whether openings are deducted or whether a height/pitch was assumed.</li>
</ol>

<h2 id="drywall-vs-roofing">Drywall vs roofing template structure</h2>
<ul>
<li><strong>Drywall workbooks:</strong> group runs by wall type, then derive board SF, 4x12 or 4x8 sheets, studs (at 16&Prime; o.c.), and top/bottom track LF (<code>Wall LF &times; 2</code>). See our full <a href="/blog/how-to-do-a-drywall-takeoff-from-plans">drywall takeoff guide</a>.</li>
<li><strong>Roofing workbooks:</strong> list each plane&rsquo;s flat Plan SF, multiply by slope factor, divide by 100 for squares, and list ridge, hip, valley, eave, rake, and flashing lengths on a separate block. See our <a href="/blog/how-to-do-a-roofing-takeoff-from-plans">roofing takeoff guide</a>.</li>
</ul>

<h2 id="done-for-you">Skip measuring on your next bid</h2>
<p>Templates save time on formulas, but scaling 20&ndash;50 drawing pages still takes hours. If you want the Excel quantity sheet and marked-up PDF built for you within 48 hours, upload your plan on <a href="/takeoff">Dooza Takeoff</a>. Your first plan is free (no card), then flat pricing: $100 a plan or $399 a month for up to 10 plans ($40 a plan), no contract. See published competitor rates on our <a href="/takeoff/cost">construction takeoff services cost</a> page.</p>
<p><a href="/takeoff">Get your first plan takeoff free</a></p>`,
};
