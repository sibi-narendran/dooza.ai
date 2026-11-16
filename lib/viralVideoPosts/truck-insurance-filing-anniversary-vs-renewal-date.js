import { yt } from './helpers';

const VIDEO_ID = 'AAlgtolQa_0';
const VIDEO_TITLE = '354 CT Truck Carriers (Sample) Hit a Filing Anniversary. Renewal? #Shorts';

const FMCSA_SAFER = 'https://safer.fmcsa.dot.gov/';
const DOT_DATA = 'https://data.transportation.gov/';
const BOOK = '/book?utm_source=dooza.ai&utm_medium=blog&utm_content=truck-insurance-filing-anniversary-vs-renewal-date';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 555,
    title: 'Is a Truck Insurance Filing Anniversary the Renewal Date?',
    seoTitle: 'Truck Insurance Filing Anniversary vs Renewal Date',
    seoDescription: 'In a Connecticut FMCSA sample, 354 carriers hit a filing anniversary in 30-90 days, but only 36% of 53 past policies ran ~1 year. Here is how agencies use it.',
    excerpt: 'An FMCSA liability filing anniversary is a reason to call, not a confirmed policy renewal date. In a spot-check of 53 past policies, only 36% ran about a year (330 to 400 days).',
    author: 'Dooza Team',
    date: '2026-11-16',
    modifiedDate: '2026-11-16',
    readTime: '4 min read',
    readTimeMinutes: 4,
    category: 'Insurance & Trucking',
    tags: ['Trucking Insurance', 'FMCSA', 'BMC-91X', 'Insurance Agencies', 'X-Dates', 'Dooza Video'],
    image: '/blog/truck-insurance-filing-anniversary-vs-renewal-date.jpg',
    imageAlt: 'Watercolor illustration of a commercial semi-truck on a highway next to a calendar page and insurance filing folder',
    slug: 'truck-insurance-filing-anniversary-vs-renewal-date',
    video: {
        name: VIDEO_TITLE,
        description: '354 Connecticut truck carriers in an FMCSA sample hit a liability filing anniversary 30 to 90 days out, but a spot-check of 53 past policies found only 36% ran about a year (330-400 days).',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-15',
    },
    tocData: [
        { id: 'what-fmcsa-shows', label: 'What FMCSA filings show' },
        { id: 'ct-sample', label: 'The Connecticut sample' },
        { id: 'why-only-36-percent', label: 'Why only 36% ran a year' },
        { id: 'how-agencies-use-it', label: 'How agencies use filing dates' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>No. A truck insurance filing anniversary is not a confirmed policy renewal date. Federal Motor Carrier Safety Administration (FMCSA) records show when a carrier&rsquo;s liability filing (Form BMC-91X) took effect, not when the policy expires. In Dooza&rsquo;s October 2026 sample of Connecticut carriers from public FMCSA data, 354 carriers had a filing anniversary 30 to 90 days out, but a spot-check of 53 past policies across 8 carriers found that only 36% ran about a year (330 to 400 days). Treat the anniversary as a reason to call and ask when the policy actually renews.</p>
<ul>
<li><strong>FMCSA does not publish expiry dates:</strong> public records show the effective date of the liability filing, not the expiration date.</li>
<li><strong>Connecticut sample (Oct 6, 2026):</strong> 2,348 carriers with an active liability policy on file out of a 5,000-carrier census sample; 354 had a filing anniversary 30 to 90 days out.</li>
<li><strong>Spot-check of 53 past policies (8 CT carriers):</strong> median term was 365 days, but only 36% ran 330 to 400 days; many ended early.</li>
<li><strong>Practical rule:</strong> maybe 1 in 2 or 3 carriers on an anniversary list is truly renewing then; call first and confirm the date.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: &ldquo;${VIDEO_TITLE}&rdquo; by Dooza (@thedooza) on YouTube. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="what-fmcsa-shows">What do FMCSA insurance filings actually show?</h2>
<p>Every interstate for-hire motor carrier must have proof of public liability on file with the FMCSA before operating authority is active. Insurers file Form BMC-91X, and those records are published in public ${a(DOT_DATA, 'U.S. DOT / FMCSA open datasets')} and carrier lookups on ${a(FMCSA_SAFER, 'FMCSA SAFER')}.</p>
<p>The public filing shows the carrier&rsquo;s DOT and MC numbers, the insurer, the policy limit, and the filing&rsquo;s effective date. It does not include a policy expiration date. When people estimate an X-date from FMCSA data, they take the effective date of the active filing and add one year.</p>

<h2 id="ct-sample">What did the Connecticut sample find?</h2>
<p>On October 6, 2026, Dooza pulled a Connecticut census sample (capped at 5,000 active carriers) from public FMCSA data and joined it to active BMC-91X liability filings:</p>
<table><thead><tr><th>Metric</th><th>Count / Share</th><th>Notes</th></tr></thead><tbody>
<tr><td>Carriers with active liability policy on file</td><td>2,348</td><td>Joined from CT census sample (max 5,000 active carriers)</td></tr>
<tr><td>Filing anniversary 30 to 90 days out</td><td>354</td><td>Assumes an annual term from filing effective date</td></tr>
<tr><td>Past policies spot-checked</td><td>53</td><td>Drawn from FMCSA insurance history across 8 CT carriers</td></tr>
<tr><td>Past policies running 330 to 400 days</td><td>36%</td><td>Median term 365 days; many policies ended early</td></tr>
</tbody></table>

<h2 id="why-only-36-percent">Why did only 36% of past policies run about a year?</h2>
<p>Trucking policies do not always run a clean 12-month term. In FMCSA insurance history, policies frequently end early because a carrier switches insurers mid-term, changes coverage or limits, cancels a policy, or pauses authority. Other policies are written on six-month terms.</p>
<p>Because of those mid-term changes, a filing&rsquo;s one-year anniversary is an estimate, not a guarantee. Across that spot-check, roughly one in two or three carriers with an upcoming anniversary is actually shopping for a renewal in that window.</p>

<h2 id="how-agencies-use-it">How should insurance agencies use filing anniversaries?</h2>
<p>Filing anniversaries are still one of the best public signals for commercial trucking producers, as long as the caller does not open assuming the renewal date is locked in:</p>
<ol>
<li><strong>Use the anniversary to prioritize outreach:</strong> 30 to 90 days out gives you a shortlist of active carriers instead of cold-calling an entire state directory.</li>
<li><strong>Confirm the real X-date on the first call:</strong> ask when their liability policy actually renews rather than pitching as if you know the expiry date.</li>
<li><strong>Log the confirmed date for follow-up:</strong> if they renewed two months ago or run on a six-month term, record the real date for the next cycle.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza builds weekly state lists for trucking insurance agencies from public FMCSA filings, including the carrier&rsquo;s DOT/MC number, contact details, current insurer, liability limit, and estimated filing anniversary window. See how the weekly list works on our <a href="/trucking-insurance-leads">trucking insurance leads</a> page or our overview for <a href="/insurance-agents">insurance agencies</a>.</p>
<p>Want the list for your state? <a href="${BOOK}">Book a call</a> and we will walk through the active carriers in your state.</p>`,
    faqData: [
        { question: 'Is an FMCSA insurance filing anniversary the same as a policy renewal date?', answer: 'No. FMCSA records show the effective date of a carrier\'s BMC-91X liability filing, not the policy expiration date. Adding one year gives an estimated anniversary, not a confirmed renewal date.' },
        { question: 'How many truck insurance policies actually run a full year in FMCSA history?', answer: 'In Dooza\'s October 2026 spot-check of 53 past policies across 8 Connecticut carriers in FMCSA insurance history, the median term was 365 days, but only 36% ran between 330 and 400 days because many ended early.' },
        { question: 'Where do FMCSA liability filing records come from?', answer: 'Insurers file Form BMC-91X for interstate motor carriers. Public records are available through U.S. DOT open data (data.transportation.gov) and carrier lookups on FMCSA SAFER.' },
        { question: 'How should insurance agents handle estimated X-dates on calls?', answer: 'Use the 30-to-90-day filing anniversary window to decide who to call, then ask the carrier on the first call to confirm their actual policy renewal date.' },
    ],
};

export default post;
