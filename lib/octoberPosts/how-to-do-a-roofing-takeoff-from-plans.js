// Facts: content/drafts/how-to-do-a-roofing-takeoff-from-plans-facts.md (site-cf/lib/takeoffPages.js, verified 2026-11-16).
import { src } from './helpers';

export default {
    id: 558,
    title: 'How to Do a Roofing Takeoff from Plans (Pitch Factors + Worked Example)',
    seoTitle: 'How to Do a Roofing Takeoff from Plans (With Example)',
    seoDescription: 'Step-by-step roofing takeoff from architectural drawings: measure flat plan area, apply roof pitch slope factors, convert to squares, and count ridge, hip, valley, eave, and rake.',
    excerpt: 'A practical roofing takeoff guide for new builds and commercial re-roofs from construction drawings: check scale and pitch, measure each plane flat, multiply by the slope factor, divide by 100 for squares, and measure linear trim—shown with a real 65.4-square worked plan.',
    author: 'Dooza Team',
    date: '2026-11-16',
    modifiedDate: '2026-11-16',
    readTime: '6 min read',
    readTimeMinutes: 6,
    category: 'Construction Takeoff',
    tags: ['Roofing Takeoff', 'Roofing Estimating', 'Slope Factor', 'Squares', 'Dooza Takeoff'],
    image: '/blog/how-to-do-a-roofing-takeoff-from-plans.jpg',
    imageAlt: 'Watercolor illustration of an architectural roof plan blueprint on an estimator desk with roof slopes, ridge and valley lines, and a squares calculation sheet',
    slug: 'how-to-do-a-roofing-takeoff-from-plans',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'step-1-scale-pitch', label: '1. Scale & roof pitch' },
        { id: 'step-2-plan-area-slope', label: '2. Plan SF & slope factor' },
        { id: 'step-3-squares-waste', label: '3. Squares & waste' },
        { id: 'step-4-linear-penetrations', label: '4. Ridge, eave, flashing' },
        { id: 'worked-example', label: 'Worked 65.4-sq example' },
        { id: 'outsource-or-diy', label: 'DIY vs takeoff service' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'How do you convert flat roof plan area into actual roof squares?', answer: 'Measure the horizontal (plan) square footage of each roof plane from the roof plan, multiply by the slope factor for that plane\'s pitch (for example, 1.0035 for 1:12 or 1.0308 for 3:12), divide by 100 to get roofing squares, and add your waste factor.' },
        { question: 'Why use construction plans instead of satellite measurements for a roofing takeoff?', answer: 'Satellite tools work well for existing residential roofs, but new builds, additions, and many commercial re-roofing specs require measuring directly from architectural roof plans and elevations before the roof exists.' },
        { question: 'What linear items should be in every roofing takeoff?', answer: 'Every roofing takeoff should separate ridge, hip, valley, eave, rake, and wall-flashing lengths, plus roof penetrations, drains, or curbs, because those drive starter strip, ridge cap, drip edge, and metal flashing orders.' },
        { question: 'How much does a roofing takeoff service cost?', answer: 'At Dooza, the first plan is free (no card required), then $100 a plan or $399 a month for up to 10 plans ($40 a plan) with no contract. You get an Excel quantity sheet and a marked-up plan PDF within 48 hours.' },
    ],
    content: `<h2 id="short-answer">How do you do a roofing takeoff from construction plans?</h2>
<p><strong>To do a roofing takeoff from plans, calibrate the drawing scale, measure each roof plane&rsquo;s flat horizontal area (Plan SF), multiply by the slope factor for that plane&rsquo;s pitch to get Actual SF, divide by 100 to convert to roofing squares, add your waste factor, and measure ridge, hip, valley, eave, rake, and flashing lengths separately.</strong></p>
<p>If you bid new builds or commercial roof plans and want to skip manual scaling, <a href="/takeoff/roofing">Dooza Roofing Takeoff</a> returns an Excel quantity sheet and a marked-up PDF within 48 hours. Your first plan is free (no card), then $100 a plan or $399 a month for up to 10 plans.</p>

<h2 id="step-1-scale-pitch">Step 1: Verify the drawing scale and read every roof pitch</h2>
<p>Check the roof plan and building elevations before measuring:</p>
<ul>
<li><strong>Scale check:</strong> confirm the printed scale (for example, <code>1/4" = 1'-0"</code>) against a known dimension line on the sheet.</li>
<li><strong>Pitch per plane:</strong> read the slope callouts on the roof plan (<code>1/4:12</code>, <code>1:12</code>, <code>3:12</code>, <code>6:12</code>) and cross-check elevations. If any plane is missing a pitch, mark it as assumed on the takeoff sheet instead of guessing silently.</li>
</ul>

<h2 id="step-2-plan-area-slope">Step 2: Measure each plane flat (Plan SF) and apply the slope factor</h2>
<p>A roof plan shows the roof looking straight down, which understates sloped area. Measure each plane&rsquo;s flat area separately, then multiply by the pitch&rsquo;s slope factor (<code>sqrt(1 + (rise/12)^2)</code>):</p>
<ul>
<li>Flat (<code>0:12</code>): <code>1.0000</code></li>
<li><code>1/4:12</code>: <code>1.0002</code></li>
<li><code>1:12</code>: <code>1.0035</code></li>
<li><code>3:12</code>: <code>1.0308</code></li>
</ul>
<p>Keeping planes separate lets you spot-check a single section against the drawing and apply different membrane or shingle specs where lower roofs differ from main roofs.</p>

<h2 id="step-3-squares-waste">Step 3: Divide by 100 for squares and separate waste</h2>
<p>One roofing square equals 100 square feet of actual roof surface: <code>Squares = Actual SF / 100</code>. Show net squares and waste squares in separate columns so you can adjust waste (often 10% on low-slope or straightforward planes, higher on cut-up hip/valley roofs) without re-measuring.</p>

<h2 id="step-4-linear-penetrations">Step 4: Measure linear items and count penetrations</h2>
<p>Area alone is never enough to order materials. Measure and list each linear item apart:</p>
<ul>
<li><strong>Eaves and rakes:</strong> drive drip edge, starter strip, and perimeter metal.</li>
<li><strong>Ridges and hips:</strong> drive ridge cap and hip shingles or metal.</li>
<li><strong>Valleys:</strong> drive valley flashing, ice-and-water shield, or membrane reinforcement.</li>
<li><strong>Wall flashings &amp; penetrations:</strong> headwall/sidewall step flashing, parapet coping, curbs, pipes, and roof drains.</li>
</ul>

<h2 id="worked-example">Worked roofing takeoff example (65.4 squares from plans)</h2>
<p>Here is a real worked summary from our <a href="/takeoff/example">construction takeoff example</a> page, taken from the Leon County (TX) 2025 Roof Improvements drawings (dated 2025-09-30, sheets R-2.0 Annex 1 and R-2.2 Probation, scale 1/4" = 1'-0", 10% waste shown apart):</p>
<table><thead><tr><th>Roof plane</th><th>Pitch</th><th>Plan SF</th><th>Slope factor</th><th>Actual SF</th><th>Squares</th><th>Squares +10%</th></tr></thead><tbody>
<tr><td>Annex 1, main roof A (west)</td><td>1/4:12 (assumed)</td><td>1,137.5</td><td>1.0002</td><td>1,137.7</td><td>11.4</td><td>12.5</td></tr>
<tr><td>Annex 1, main roof B (centre)</td><td>1/4:12 (assumed)</td><td>802.4</td><td>1.0002</td><td>802.6</td><td>8.0</td><td>8.8</td></tr>
<tr><td>Annex 1, main roof C (east)</td><td>1/4:12 (assumed)</td><td>1,137.5</td><td>1.0002</td><td>1,137.7</td><td>11.4</td><td>12.5</td></tr>
<tr><td>Annex 1, lower standing-seam roof</td><td>1:12 (assumed)</td><td>383.5</td><td>1.0035</td><td>384.8</td><td>3.8</td><td>4.2</td></tr>
<tr><td>Probation, plane A</td><td>1:12</td><td>2,281.5</td><td>1.0035</td><td>2,289.5</td><td>22.9</td><td>25.2</td></tr>
<tr><td>Probation, ridge strip</td><td>flat</td><td>39.0</td><td>1.0000</td><td>39.0</td><td>0.4</td><td>0.4</td></tr>
<tr><td>Probation, plane B</td><td>3:12</td><td>721.5</td><td>1.0308</td><td>743.7</td><td>7.4</td><td>8.2</td></tr>
<tr><td><strong>Total</strong></td><td></td><td><strong>6,502.9</strong></td><td></td><td><strong>6,535.1</strong></td><td><strong>65.4</strong></td><td><strong>71.9</strong></td></tr>
</tbody></table>
<p>Notice how missing pitches on Annex 1 are explicitly marked <code>(assumed)</code> so the estimator knows what to verify before locking the bid. You can download the full Excel workbook (<a href="/takeoff/sample-roofing-takeoff.xlsx">sample-roofing-takeoff.xlsx</a>) and marked-up plan (<a href="/takeoff/sample-roofing-takeoff-markup.pdf">sample-roofing-takeoff-markup.pdf</a>).</p>

<h2 id="outsource-or-diy">When should you do it yourself vs use a takeoff service?</h2>
<p>For one-off residential re-roofs, a quick measurement tool is fast. For commercial plan sets, multi-building additions, or busy bid weeks, scaling every plane and linear run pulls estimators away from vendor quotes and pricing.</p>
<p>With <a href="/takeoff">Dooza Construction Takeoff Services</a>, you upload the PDF plans, keep your own material and labor pricing, and get back Excel quantities and a color-marked PDF within 48 hours. See our flat pricing ($100 a plan or $399/month for up to 10 plans, first plan free, no contract) on the <a href="/takeoff/cost">construction takeoff services cost</a> page.</p>
<p><a href="/takeoff/roofing">Try your first roofing takeoff free on Dooza</a></p>`,
};
