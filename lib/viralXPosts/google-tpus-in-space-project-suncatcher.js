import { src, xPost, postCredit, doozaSummary } from './helpers';

const X = { name: 'Google', handle: 'Google', id: '2103229008343126519', date: 'September 24, 2026' };

const post = {
    id: 406,
    title: 'Google Is Sending TPUs to Space: Project Suncatcher Explained',
    seoTitle: 'Google TPUs in Space: Project Suncatcher Explained',
    seoDescription: "Google launched AI chips into orbit to test Project Suncatcher, its moonshot for solar-powered AI data centers in space. What it is and what it means.",
    excerpt: "Google's viral \"We're sending TPUs to space\" post announced the first Project Suncatcher test satellite, built with Planet. It reached orbit on October 1, 2026. Here is what the mission tests, why anyone wants AI compute in space, the hard problems left, and what it means for the price of AI.",
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Google', 'Viral X Post', 'Project Suncatcher', 'TPU', 'AI Infrastructure', 'Data Centers', 'Space'],
    image: '/blog/google-tpus-in-space-project-suncatcher.png',
    imageAlt: 'Soft watercolor illustration of a small satellite with wide golden solar panels orbiting above a blue Earth, a glowing computer chip at its center and warm sunlight streaming across the panels',
    slug: 'google-tpus-in-space-project-suncatcher',
    tocData: [
        { id: 'what-happened', label: 'What Google announced' },
        { id: 'why-viral', label: 'Why it went viral' },
        { id: 'what-is-suncatcher', label: 'What Project Suncatcher is' },
        { id: 'why-space', label: 'Why put AI compute in space' },
        { id: 'challenges', label: 'The hard problems' },
        { id: 'small-business', label: 'What it means for SMBs' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What did Google announce about sending TPUs to space?</h2>
<p>On September 24, 2026, Google posted on X that it was "sending TPUs to space (yes, really)." A test satellite carrying Google's Tensor Processing Units (TPUs), the custom chips Google uses to train and run AI models, was about to launch. The mission is the first flight test of Project Suncatcher, a research moonshot that asks whether machine learning infrastructure could one day run on solar-powered satellites. The prototype, built with Planet, reached orbit on SpaceX's Transporter-18 rideshare, and on October 1 ${src('https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-prototype/', 'Google confirmed')} it had made contact and the satellite was "operating as expected."</p>
<ul>
<li><strong>What flew:</strong> a prototype satellite built with Planet, reported to carry four Trillium TPUs.</li>
<li><strong>What it tests:</strong> how the chips handle launch stress, radiation, and big temperature swings in orbit.</li>
<li><strong>What comes next:</strong> a two-satellite mission with Planet planned for 2027 to test laser links between satellites.</li>
<li><strong>The big idea:</strong> sunlight in orbit is far more abundant than on the ground, and AI data centers are hungry for power.</li>
<li><strong>For small businesses:</strong> nothing changes this year. This is a long-term bet on cheaper, cleaner AI compute.</li>
</ul>
${xPost({ text: 'We’re sending TPUs to space (yes, really).<br><br>After years of research, we’re launching a satellite to evaluate if and how Google Tensor Processing Units (TPUs) hold up in orbit.<br><br>The test mission, as part of our latest moonshot — Project Suncatcher — is designed to gather data exploring how we can one day host machine learning infrastructure in space.', ...X })}
${postCredit({ ...X, views: '990,000', likes: '4,500' })}

<h2 id="why-viral">Why did Google's TPUs-in-space post go viral?</h2>
<p>Google's own post passed 990,000 views, but the bigger wave came from reposts. One account, @ns123abc, framed it as breaking news that Google was launching TPUs to space "next week" on a SpaceX Falcon 9 to test AI data centers in orbit, and that repost reached about 6.6 million views. Three things made it travel:</p>
<ul>
<li><strong>It sounds like science fiction.</strong> "Data centers in space" is a striking image, and Google leaned into it with "yes, really."</li>
<li><strong>It ties into the AI energy debate.</strong> People already argue about how much electricity AI uses. A sun-powered option in orbit is an easy hook.</li>
<li><strong>It names big players.</strong> Google chips on a SpaceX rocket, in a field where startups like Starcloud are also racing, makes for a good headline.</li>
</ul>
<p>The reality is more modest, and Google says so. Its research lead Travis Beals called the launch "the first step in a long-term research moonshot." The satellite is a test, not a data center.</p>

<h2 id="what-is-suncatcher">What is Google's Project Suncatcher?</h2>
<p>Google Research first described Project Suncatcher on November 4, 2025, in a ${src('https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/', 'research blog post')} and a preprint paper. The long-term design is a compact constellation of solar-powered satellites, each carrying TPUs, flying in formation and linked by free-space optical (laser) connections so they work together like one data center. Google has since published peer-reviewed research on the mission in the journal <em>Joule</em>, according to its ${src('https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-prototype/', 'launch update')}.</p>
<table><thead><tr><th>Item</th><th>What has been published</th></tr></thead><tbody>
<tr><td>Announced</td><td>November 4, 2025, by Google Research</td></tr>
<tr><td>Planned orbit</td><td>Dawn-dusk sun-synchronous low Earth orbit, about 650 km up, for near-constant sunlight</td></tr>
<tr><td>Example cluster</td><td>81 satellites within a 1 km radius, 100 to 200 meters apart</td></tr>
<tr><td>Lab link test</td><td>1.6 Tbps total (800 Gbps each way) between two optical transceivers</td></tr>
<tr><td>Radiation test</td><td>Trillium TPUs took up to 15 krad(Si) in a proton beam with no hard failures; a shielded five-year mission is expected to see about 750 rad(Si)</td></tr>
<tr><td>First satellite</td><td>Built with Planet; launched on SpaceX Transporter-18; contact confirmed October 1, 2026</td></tr>
<tr><td>Next mission</td><td>Two prototype satellites with Planet, planned for 2027</td></tr>
</tbody></table>
<p>Industry analysts at ${src('https://futurumgroup.com/insights/project-suncatcher-prepares-to-launch-tpus-is-google-ahead-in-the-orbital-ai-race/', 'Futurum')} report the first satellite carries four Trillium TPUs, roughly a Google Cloud TPU v6e-4 slice, powered by about 1 kilowatt of solar energy. That is a tiny amount of compute by data center standards. The point is to learn how commercial AI chips behave in orbit, not to serve customers.</p>

<h2 id="why-space">Why would anyone put AI data centers in space?</h2>
<p>The short answer is energy. According to Google, a solar panel in the right orbit can be up to eight times more productive than one on Earth, because there is no night, no weather, and no atmosphere in the way. That also cuts the need for heavy batteries.</p>
<p>On the ground, AI is running into power limits. The ${src('https://www.iea.org/news/ai-is-set-to-drive-surging-electricity-demand-from-data-centres-while-offering-the-potential-to-transform-how-the-energy-sector-works', 'International Energy Agency')} projects that data center electricity demand will more than double by 2030 to around 945 terawatt-hours, slightly more than Japan uses today, with AI as the main driver. New data centers need grid connections, land, water for cooling, and permits, all of which take years.</p>
<p>Space doesn't remove those problems for free. It swaps them for new ones. Google's paper argues that if launch prices fall below about $200 per kilogram by the mid-2030s, the cost of launching and running a space data center could become roughly comparable to the energy cost of a similar data center on Earth. That is a big "if."</p>

<h2 id="challenges">What are the biggest challenges for AI compute in orbit?</h2>
<table><thead><tr><th>Challenge</th><th>Why it is hard</th><th>Where things stand</th></tr></thead><tbody>
<tr><td>Radiation</td><td>Charged particles can flip bits and slowly damage chips</td><td>Lab tests went well; the high-bandwidth memory was the most sensitive part. Orbit data now has to confirm it</td></tr>
<tr><td>Heat</td><td>There is no air in space, so heat can only leave through radiators</td><td>A core question for the current mission, which tests the chips through big temperature swings</td></tr>
<tr><td>Satellite-to-satellite links</td><td>AI training needs data center-class bandwidth between chips</td><td>Lab links hit 1.6 Tbps; in-orbit laser links are the focus of the 2027 mission</td></tr>
<tr><td>Formation flying</td><td>Satellites must stay hundreds of meters apart without drifting or colliding</td><td>Modeled in the paper; Google says only modest station-keeping should be needed</td></tr>
<tr><td>Cost to orbit</td><td>Every kilogram must be launched</td><td>The economics depend on launch prices falling below about $200/kg, which Google projects for the mid-2030s</td></tr>
<tr><td>Maintenance</td><td>You can't send a technician to replace a failed board</td><td>Systems must tolerate failures or be replaced with new satellites</td></tr>
</tbody></table>
<p>Google is not alone. Nvidia-backed startup Starcloud ${src('https://www.datacenterdynamics.com/en/news/starcloud-1-satellite-reaches-space-with-nvidia-h100-gpu-now-operating-in-orbit/', 'put an Nvidia H100 GPU in orbit')} in November 2025. Several companies are chasing the same idea, which tells you the energy problem on the ground is real, even if orbital compute at scale is still years away.</p>

<h2 id="small-business">What does Project Suncatcher mean for small businesses?</h2>
<p>Honestly, nothing you need to act on this year. One satellite with four chips will not change what AI costs you. Even on Google's own timeline, the economics only start to work in the mid-2030s, and only if launch costs fall as projected.</p>
<p>What is worth understanding is the direction. The price of AI to a business depends heavily on the cost of compute, and compute depends on energy. Big tech companies are spending heavily on new power sources, chips, and now even orbit to keep that cost under control. Over the long run, that pressure tends to make AI cheaper per task, the same way cloud storage got cheaper.</p>
<ul>
<li><strong>Don't wait for cheaper AI.</strong> The AI tools available now, such as phone answering, email triage, and lead follow-up, already cost far less than the staff time they save for many businesses.</li>
<li><strong>Pick efficient tools.</strong> Not every task needs the biggest model. Good agents use smaller models for simple steps, which keeps your costs down today.</li>
<li><strong>Expect prices to keep shifting.</strong> Choose vendors that pass efficiency gains on and don't lock you into one model.</li>
</ul>
<p>If you want a primer on the tools themselves, read <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a>.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza doesn't build chips, satellites, or frontier models. We use the best available models to build AI agents that do real work for small businesses today, and we switch models as better and cheaper ones arrive. <a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees: Maily for email, Somi for social media, Ranky for SEO and AI visibility, Stan for lead generation, Linda for legal documents, and Rachel for phone calls. <a href="/">Dooza Agents</a> are custom agents that Dooza engineers build and maintain around your workflows.</p>
<p>Common starting points are an <a href="/ai-receptionist">AI receptionist</a> for missed calls, <a href="/ai-customer-support">AI customer support</a> for your inbox, and <a href="/workflow-automation">workflow automation</a> for repetitive admin. Our guide to <a href="/blog/automate-business-processes">automating business processes</a> helps you choose the first one. Pricing depends on the product and is listed on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Want AI working for you before data centers reach orbit?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope a pilot around one workflow. Start with a refundable pilot — 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'What is Google Project Suncatcher?', answer: 'It is a Google Research moonshot, announced in November 2025, exploring whether solar-powered satellites carrying TPUs and linked by lasers could one day run machine learning workloads in space.' },
        { question: 'Has the Project Suncatcher satellite launched?', answer: 'Yes. The prototype, built with Planet, launched on SpaceX Transporter-18, and Google confirmed on October 1, 2026 that it had contact and the satellite was operating as expected.' },
        { question: 'How many TPUs are on the Suncatcher satellite?', answer: 'Analyst reports say it carries four Trillium TPUs, roughly a Google Cloud TPU v6e-4 slice, powered by about 1 kilowatt of solar energy. It is a test, not a working data center.' },
        { question: 'Why put AI data centers in space?', answer: 'Mainly energy. Google says solar panels in the right orbit can be up to eight times more productive than on Earth, while data center electricity demand on the ground is expected to more than double by 2030.' },
        { question: 'What are the main obstacles?', answer: 'Radiation, getting rid of heat without air, data center-class links between satellites, keeping satellites in tight formation, maintenance, and launch costs, which Google says need to fall below about $200 per kilogram.' },
        { question: 'Will this make AI cheaper for small businesses?', answer: 'Not soon. Any effect is likely a decade away. Small businesses can already save time with today\'s AI agents, such as AI receptionists and email assistants, without waiting for cheaper compute.' },
    ],
};

export default post;
