import { yt, doozaSummary } from './helpers';

const VIDEO_ID = 'f8KpDqmtQeA';
const VIDEO_TITLE = 'Do 90% of Small Businesses Really Fail?';

const PARSA = 'https://econ.ucsb.edu/~tedb/Courses/Ec1F07/restaurantsfail.pdf';
const ENT_2007 = 'https://www.entrepreneur.com/article/173214';
const ENT_2003 = 'https://www.entrepreneur.com/article/63260';
const LUO = 'https://arxiv.org/abs/1410.8603';
const BLS_TED = 'https://www.bls.gov/opub/ted/2024/34-7-percent-of-business-establishments-born-in-2013-were-still-operating-in-2023.htm';
const BLS_T7 = 'https://www.bls.gov/bdm/us_age_naics_00_table7.txt';
const SBA_FAQ = 'https://advocacy.sba.gov/wp-content/uploads/2023/03/Frequently-Asked-Questions-About-Small-Business-March-2023-508c.pdf';
const HEADD = 'https://ideas.repec.org/a/kap/sbusec/v21y2003i1d10.1023_a1024433630958.html';
const HEADD_WP = 'https://www.census.gov/library/working-papers/2001/adrm/ces-wp-01-01.html';
const FED = 'https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf';
const CBI = 'https://www.cbinsights.com/research/startup-failure-reasons-top/';
const BFS = 'https://www.census.gov/econ/bfs/csv/bfs_monthly.csv';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 413,
    title: 'Do 90% of Small Businesses Fail? What the Data Actually Says',
    seoTitle: 'Do 90% of Small Businesses Fail? What Data Says',
    seoDescription: "No. BLS data shows about half of new business locations close within 5 years, and many closures are not failures. Here is where the 90% myth came from.",
    excerpt: 'The 90% failure claim has no source. Government data shows about 78% of new business locations survive year one and about half reach year five. Here is the data, what closing really means, and what owners report as their biggest problem.',
    author: 'Dooza Team',
    date: '2026-10-16',
    modifiedDate: '2026-10-16',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'AI News',
    tags: ['Small Business', 'Business Failure Rate', 'BLS', 'Myths', 'Human in the Loop', 'Dooza Video'],
    image: '/blog/do-90-percent-of-small-businesses-fail.png',
    imageAlt: 'Soft watercolor illustration of a small shop front with a chart of survival rates falling over ten years beside it',
    slug: 'do-90-percent-of-small-businesses-fail',
    video: {
        name: VIDEO_TITLE,
        description: 'Where the 90% small business failure claim came from, what BLS survival data shows for years 1, 5 and 10, why closing is not always failing, and what owners say their biggest problems are.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-16',
    },
    tocData: [
        { id: 'where-from', label: 'Where the 90% came from' },
        { id: 'math-test', label: 'The math test' },
        { id: 'real-numbers', label: 'The real survival numbers' },
        { id: 'closed-not-failed', label: 'Closed is not failed' },
        { id: 'why-fail', label: 'Why some do fail' },
        { id: 'starting-more', label: 'Are people still starting?' },
        { id: 'lessons', label: 'What owners can use' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>No, 90% of small businesses do not fail. The claim has no known source. US Bureau of Labor Statistics (BLS) data shows ${a(BLS_T7, '77.9% of new business locations were still open after one year')}, and about half of a typical class is still open after five years. That half that closes is real, but closing is not always failing.</p>
<ul>
<li><strong>The 90% claim has no data behind it.</strong> American Express could not supply any when researchers asked, according to ${a(PARSA, 'a 2005 Cornell paper')}.</li>
<li><strong>Year one is the cliff.</strong> For businesses opened in 2013, ${a(BLS_TED, '79.6% were still open after one year, 50.6% after five and 34.7% after ten')}.</li>
<li><strong>Closing is not failing.</strong> In a Census study, about a third of owners of closed firms said the business was successful when it closed.</li>
<li><strong>Owners name reaching customers as their top operating challenge.</strong> That was 57% in the ${a(FED, 'Federal Reserve small business survey')}.</li>
<li><strong>People are starting more businesses, not fewer.</strong> 2025 had a record 5.67 million new business applications, per ${a(BFS, 'Census data')}.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), published October 16, 2026. Narrated by an AI voice with AI illustrations; sources below. <a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="where-from">Where did the 90% claim come from?</h2>
<p>The version about restaurants appeared in an American Express ad in summer 2003. It aired during an NBC reality show about opening a restaurant, and said 90% of restaurants fail in the first year. That is according to ${a(PARSA, 'Parsa and colleagues')}, in a 2005 paper in the Cornell Hotel and Restaurant Administration Quarterly.</p>
<p>The researchers asked American Express for its data. The company stated in writing that it could not provide data supporting the claim.</p>
<p>The idea is older than the ad. Entrepreneur ran a 2003 piece called ${a(ENT_2003, '"Urban Legend"')} on the same myth for all startups. In 2007, SBA economist Brian Headd told the magazine he knew of ${a(ENT_2007, '"no substantiated finding"')} that 9 in 10 fail in year one. Nobody could say where it started.</p>

<h2 id="math-test">Does the 90% number pass a math test?</h2>
<p>No. Parsa's team built a model of a market with 1,500 restaurants. They added normal new openings and market growth, then let 90% of new restaurants close in year one. After 20 years the market would have 254 restaurants left, down 84%. In about 94 years there would be none. Run the same model at a 30% first-year rate and the market grows to more than 3,000. The source is ${a(PARSA, 'the same paper')}.</p>
<p>Restaurant counts were growing a few percent a year, not collapsing. A 90% first-year failure rate cannot be true and leave streets full of restaurants.</p>

<h2 id="real-numbers">What are the real survival numbers?</h2>
<p>The best source is the BLS Business Employment Dynamics series. It tracks every new business location that has employees. These are establishments (locations), not owners, and businesses with no employees are not included.</p>
<table><thead><tr><th>Years open</th><th>Still open: 2013 class (BLS)</th><th>Still open: 1994-2020 average (SBA Advocacy)</th></tr></thead><tbody>
<tr><td>1 year</td><td>79.6%</td><td>Not listed here</td></tr>
<tr><td>2 years</td><td>68.9%</td><td>67.7%</td></tr>
<tr><td>5 years</td><td>50.6%</td><td>48.9%</td></tr>
<tr><td>10 years</td><td>34.7%</td><td>33.7%</td></tr>
</tbody></table>
<p>Sources: ${a(BLS_TED, 'BLS, 2013 class')} and ${a(SBA_FAQ, 'SBA Office of Advocacy FAQ, March 2023')}.</p>
<p>The most recent data fits the pattern. Of locations opened in the year to March 2024, ${a(BLS_T7, '77.9% were still open in March 2025')}. The 2013 class lost 20.4 points in year one, more than in any other year, per ${a(BLS_TED, 'BLS')}. In that class, construction had the sharpest first-year drop of any industry.</p>
<p>So the honest summary is that about half of new employer locations are closed within five years. That part is true. The 90% part is not.</p>
<p>Restaurants are not special either. In a study of ${a(LUO, 'about 81,000 full-service restaurants in the western US')}, economists Luo and Stark found 17% of independent restaurant startups closed in year one, versus 19% for other service startups. The paper opens with the question "Do 9 out of 10 restaurants fail in their first year?" and answers "No." It is a preprint and has not been peer reviewed.</p>

<h2 id="closed-not-failed">Does closed mean failed?</h2>
<p>Not always. Brian Headd studied firms started between 1989 and 1992 using Census Bureau data. About half of new employer firms survived beyond four years. Owners of about a third of the firms that closed said the business was successful when it closed. Closing included planned exits, sales and retirement. See ${a(HEADD, 'the published study')}; the earlier ${a(HEADD_WP, 'Census working paper')} adds that startups with ample capital, employees and education were more likely to survive.</p>
<p>That is the owner's own opinion, not an objective test. But it shows why "half are gone in five years" is not the same as "half failed". The Parsa paper makes a similar point about its own numbers. It followed 2,439 restaurants in Columbus, Ohio, from 1996 to 1999. First-year ownership turnover was 26.16%, and the three-year total was 59.74%. Turnover counts any change of owner, including a retirement or a new partner. It is not the same as closing.</p>
<p>Same restaurants, three different answers: 17%, 26% and 90%. The definition of "failure" moves the number a lot.</p>

<h2 id="why-fail">Why do some small businesses fail?</h2>
<p>The Federal Reserve's 2026 Small Business Credit Survey asked employer firms about problems in the prior 12 months. It was fielded September 3 to November 14, 2025, with 6,525 responses. It is a convenience sample, not a random one, and it lists challenges, not causes of closure.</p>
<ul>
<li><strong>57%</strong> named reaching customers and growing sales as an operating challenge, the most common one.</li>
<li><strong>73%</strong> named increased costs of goods, services or wages as a financial challenge.</li>
<li><strong>50%</strong> named uneven cash flow.</li>
</ul>
<p>Figures are from ${a(FED, 'the Fed report')}.</p>
<p>For venture-backed startups, a small slice of all business, the research firm CB Insights read shutdown stories. In its 2026 update, ${a(CBI, '70% ran out of capital')}. CB Insights calls that "almost always the final cause of death, not the root problem". Poor product-market fit, at 43%, was the next most common reason.</p>

<h2 id="starting-more">Are people still starting businesses?</h2>
<p>Yes, in record numbers. The Census Bureau's Business Formation Statistics show ${a(BFS, '5,671,836 business applications in 2025')}, against 3,498,990 in 2019. That is 62% more. Those are applications, and many never hire anyone. Still, if 9 in 10 businesses failed, it would be hard to explain why so many people keep applying.</p>

<h2 id="lessons">What can owners take from the data?</h2>
<ol>
<li><strong>Treat year one as the cliff.</strong> Start with cash to spare. Headd found better-funded startups were more likely to survive.</li>
<li><strong>Watch cash flow, not only profit.</strong> Half of employer firms in the Fed survey report uneven cash flow.</li>
<li><strong>Put customers first.</strong> Reaching customers and answering them was the top operating challenge at 57%.</li>
<li><strong>Plan the exit.</strong> Many closures are planned. Selling or handing over a business is different from shutting down.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>The Fed survey puts reaching customers and keeping the business growing at the top of the list. Much of the work behind that is written admin that piles up on the owner. Dooza Managed takes that off your plate: email drafts and follow-ups, documents, spreadsheets and research. A real person checks the work. Start with the free week on <a href="/pricing">pricing</a>.</p>
<p>If you need something custom, book a free 30-minute call at <a href="/book">dooza.ai/book</a> and we will scope an AI agent around one workflow.</p>`,
    faqData: [
        { question: 'Do 90% of small businesses fail?', answer: 'No. The 90% claim has no known source. BLS data for the 2013 class of new business locations shows 79.6% were open after one year, 50.6% after five and 34.7% after ten. These count locations with employees, and closing is not always failing.' },
        { question: 'Where did the 90% restaurant failure statistic come from?', answer: 'It appeared in an American Express ad during an NBC show in summer 2003. When researchers asked for data, American Express stated in writing that it could not provide any, according to a 2005 Cornell paper by Parsa and colleagues.' },
        { question: 'What percent of small businesses survive 5 years?', answer: 'About half. For the 2013 class, BLS reports 50.6% of new business locations with employees were still open after five years. The SBA Office of Advocacy long-run average for 1994-2020 is 48.9%.' },
        { question: 'Does a business closing mean it failed?', answer: 'Not always. In a Census-based study by Brian Headd, owners of about a third of closed firms said the business was successful when it closed. Retirements, sales and better job offers all count as closures.' },
        { question: 'What is the biggest challenge for small businesses?', answer: 'In the Federal Reserve 2026 Small Business Credit Survey, 57% of employer firms named reaching customers and growing sales as an operating challenge, the most common one. The sample is a convenience sample, not a random one.' },
    ],
};

export default post;
