import { yt } from './helpers';

const VIDEO_ID = 'T-Av7-Lz8B0';
const VIDEO_TITLE = 'New Agency. The Carriers Said No. Then a Side Door. #Shorts';

const REDDIT = 'https://www.reddit.com/r/InsuranceAgent/comments/1xlb6k9/';
const BOOK = '/book?utm_source=dooza.ai&utm_medium=blog&utm_content=new-insurance-agency-carrier-appointments-wholesaler-mga';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 564,
    title: 'How New Trucking Insurance Agencies Get Carrier Appointments (The MGA Side Door)',
    seoTitle: 'How New Trucking Insurance Agencies Get Appointments',
    seoDescription: 'New insurance agencies under 6 months or $1M written premium often get declined by direct trucking carriers. Here is how wholesalers and MGAs serve as the side door to build a book.',
    excerpt: 'When direct trucking carriers turn down a new agency for being under six months old or short of $1 million in written premium, wholesalers and MGAs are the standard side door to place policies and build a book.',
    author: 'Dooza Team',
    date: '2026-11-17',
    modifiedDate: '2026-11-17',
    readTime: '4 min read',
    readTimeMinutes: 4,
    category: 'Insurance & Trucking',
    tags: ['Insurance Agencies', 'Trucking Insurance', 'MGA', 'Wholesalers', 'Carrier Appointments', 'Dooza Video'],
    image: '/blog/new-insurance-agency-carrier-appointments-wholesaler-mga.jpg',
    imageAlt: 'Watercolor illustration of a new independent insurance agency desk with carrier appointment folders, an MGA side-door pathway, and a semi-truck policy binder',
    slug: 'new-insurance-agency-carrier-appointments-wholesaler-mga',
    video: {
        name: VIDEO_TITLE,
        description: 'A new agency owner wanted to write trucking insurance, got declined by direct carriers for being under six months old or under $1M in written premium, and learned the wholesaler/MGA side door.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-16',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'the-wall', label: 'Why direct carriers decline' },
        { id: 'wholesaler-mga-side-door', label: 'The wholesaler & MGA side door' },
        { id: 'how-to-build-the-book', label: 'How to build your trucking book' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><strong>When direct trucking insurance carriers decline a new independent agency—often for being under six months old or below a written-premium threshold such as $1 million—the standard way to start writing policies is through wholesale brokers and Managing General Agents (MGAs). You place business through wholesalers/MGAs first, build a track record and loss ratio, and then reapply for direct carrier appointments.</strong></p>
<ul>
<li><strong>The catch-22:</strong> direct carriers ask for an established book of business before granting an appointment, which a brand-new agency does not have yet.</li>
<li><strong>The side door:</strong> wholesalers and MGAs give newer agencies access to commercial auto and trucking markets without direct appointment minimums.</li>
<li><strong>Source note:</strong> the example in this video comes from ${a(REDDIT, 'a 2026 r/InsuranceAgent discussion')} (forum anecdotes from a new agency owner and fellow agents, not an industry-wide survey).</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: &ldquo;${VIDEO_TITLE}&rdquo; by Dooza (@thedooza) on YouTube. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="the-wall">Why do direct trucking carriers decline new agencies?</h2>
<p>In commercial trucking, carriers watch loss ratios closely. As one new agency owner shared on ${a(REDDIT, 'r/InsuranceAgent')}, most direct carriers declined the agency because it was under six months old or did not yet meet a $1 million written-premium threshold.</p>
<p>From the carrier&rsquo;s side, onboarding and supporting a small agency that writes only a handful of policies costs time and underwriting bandwidth. Until an agency proves it can source clean risks and retain accounts, direct appointments are hard to get.</p>

<h2 id="wholesaler-mga-side-door">How does the wholesaler and MGA side door work?</h2>
<p>As experienced agents replied in that thread, you do not have to wait for direct appointments to start selling:</p>
<ol>
<li><strong>Partner with trucking-focused wholesalers and MGAs:</strong> they already hold binding or brokerage authority with commercial auto and cargo markets and work with newer retail agencies.</li>
<li><strong>Write policies and document your book:</strong> every bound trucking risk builds your premium volume, submission quality, and loss history.</li>
<li><strong>Reapply for direct appointments later:</strong> once you have six to twelve months of production and clean submissions, you have real numbers to show direct carrier territory managers.</li>
</ol>

<h2 id="how-to-build-the-book">How new agencies find trucking accounts to quote</h2>
<p>Getting market access through an MGA only pays off if you have active motor carriers to call before their policies renew. Waiting on referrals alone makes hitting premium milestones slow.</p>
<p>Instead, producers pull public FMCSA motor carrier and liability filing records (Form BMC-91X) to see which active fleets in their state have an upcoming filing anniversary window—then call to confirm the real renewal date and offer a quote.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza builds weekly state lists for trucking insurance agencies from public FMCSA filings—including company contact details, fleet size, current insurer, liability limit, and estimated filing anniversary window—plus AI employees that handle after-hours calls and follow-up with your approval.</p>
<p>See how the weekly list works on our <a href="/trucking-insurance-leads">trucking insurance leads</a> page, explore <a href="/insurance-agents">AI employees for insurance agencies</a>, or <a href="${BOOK}">book a call</a> to walk through active carriers in your state.</p>`,
    faqData: [
        { question: 'How can a new insurance agency write trucking policies without direct carrier appointments?', answer: 'New agencies typically start by working through commercial wholesale brokers and Managing General Agents (MGAs), who already have market access and do not require the same tenure or written-premium minimums as direct carriers.' },
        { question: 'Why do direct trucking carriers turn down new agencies?', answer: 'Direct carriers commonly require an agency to have several months or years in business and a minimum book of written premium (such as $1 million in the r/InsuranceAgent example) to justify appointment and underwriting support.' },
        { question: 'When should an agency reapply for direct carrier appointments?', answer: 'Once you have built a documented book of business, clean submission history, and favorable loss experience through wholesalers and MGAs, you can bring those numbers back to direct carrier reps.' },
    ],
};

export default post;
