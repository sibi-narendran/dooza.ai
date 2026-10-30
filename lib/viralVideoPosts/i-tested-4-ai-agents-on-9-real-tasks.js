// Video answer post (October 30, 2026): answers How I AI's "I tested 4 AI agents on 9 real tasks. Here's who won."
// Targets: "which ai agent is best", "grok bot vs claude duet", "how to choose an ai agent for a small business".
// Facts: content/drafts/video-posts/i-tested-4-ai-agents-on-9-real-tasks-facts.md, transcript /home/achilles/learned/knowledge/learnings/sources/yt/20261028_hnCoQ5wB-GU.txt (auto-transcribed; names like "Sentry" and "Claude" can be misspelled there).
// Dooza Crew claims only as in the task brief. No vendor prices or features beyond the video are stated, so no vendor quotes are needed.

import { yt, videoCredit } from './helpers';

const VIDEO_ID = 'hnCoQ5wB-GU';
const VIDEO_TITLE = 'I tested 4 AI agents on 9 real tasks. Here’s who won.';

const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=i-tested-4-ai-agents-on-9-real-tasks';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 537,
    title: 'Which AI Agent Won a Test of 4 Agents on 9 Real Tasks?',
    seoTitle: 'Which AI Agent Won a 4-Agent, 9-Task Test?',
    seoDescription: 'How I AI tested Grok Bot, Dot, Muse and Claude Duet on 9 real tasks. Grok Bot won at 93%. Here is the scoreboard and what to check before you pick one.',
    excerpt: 'How I AI ran Grok Bot, Dot, Muse and Claude Duet through nine real tasks. Grok Bot won, Claude Duet came last at 79%, and no agent won everything. Here is the scoreboard and what a small business should check before choosing an AI agent.',
    author: 'Dooza Team',
    date: '2026-10-30',
    modifiedDate: '2026-10-30',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['AI Agents', 'AI Agent Benchmark', 'Grok Bot', 'Claude Duet', 'How I AI', 'Small Business', 'Dooza Video'],
    image: '/blog/i-tested-4-ai-agents-on-9-real-tasks.jpg',
    imageAlt: 'Watercolor illustration of four robot assistants working at desks under a scoreboard showing their task progress',
    slug: 'i-tested-4-ai-agents-on-9-real-tasks',
    video: {
        name: VIDEO_TITLE,
        description: 'How I AI runs a personal-agent benchmark: Grok Bot, Dot, Muse and Claude Duet on nine real tasks, from a Slack reply and a bug fix to inbox triage, a family newspaper and a launch video.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-28',
    },
    tocData: [
        { id: 'how-it-was-run', label: 'How the test was run' },
        { id: 'results', label: 'The nine tasks and results' },
        { id: 'final-scores', label: 'Final scores and takeaways' },
        { id: 'what-to-check', label: 'What to check before you pick an agent' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Grok Bot won. In the How I AI personal-agent benchmark, the host scored Grok Bot at 93%, ahead of Muse and Dot, with Claude Duet last at 79%. Grok Bot won three of the nine tasks (the thumbnail, the to-do list from the inbox and the shoe shopping), and it completed all nine. The host's own advice is to pick the agent for the job: Grok Bot for work, Muse for life, and no single agent won everything.</p>
<ul>
<li><strong>The four agents.</strong> Grok Bot, Dot, Muse and Claude Duet, as named in the video.</li>
<li><strong>The winner.</strong> Grok Bot at 93%. Claude Duet scored 79% and was the slowest overall, but it fixed the bug most completely and made the best launch video.</li>
<li><strong>Task fit beat overall score.</strong> Muse won the short video, the family newspaper and the homework answer on speed. Dot and Duet were strongest on the coding task.</li>
<li><strong>Access mattered.</strong> Muse was not connected to Slack, GitHub or work tools, so it sat out some tasks. That was a setup choice, not only an agent flaw.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'How I AI', channelUrl: 'https://www.youtube.com/channel/UCRYY7IEbkHLH_ScJCu9eWDQ', uploadDate: 'October 28, 2026', views: '142,000' })}

<h2 id="how-it-was-run">How was the test run?</h2>
<p>The host asked each agent for its top tasks, then picked the nine most common across them. The prompts were one line each, written in her own voice rather than long engineered prompts. To keep the agents on equal footing, she used an AI tool to check that they were connected to roughly the same accounts and skills.</p>
<p>The agents did not drive themselves. One operator agent used computer use to run the others: Claude ran Dot, and Codex ran Grok Bot, Muse and Claude Duet. The host nudged them along and says she had to babysit, and computer use broke at times. She also says her judging was not blind: she scored the results live in the episode, then had Claude turn her spoken verdicts into the final ranking. The creator calls the data unscientific, and so do we: treat it as one person's careful hands-on comparison, not a lab benchmark.</p>
<p>Two more details shape the numbers. Muse and Claude Duet completed only seven of the nine tasks, while Grok Bot and Dot completed all nine. And Claude Duet asked for permission four times, where the others asked once each. The host called it "way too conservative."</p>

<h2 id="results">What were the nine tasks and how did each agent do?</h2>
<p>Results below are the host's verdicts as stated in the video, summarized by us. The transcript is auto-generated, so check the video for exact wording.</p>
<table><thead><tr><th>Task</th><th>Best, per the host</th><th>Notable misses</th></tr></thead><tbody>
<tr><td>Draft a Slack reply to a friend who asked for a talk</td><td>All fine. Dot was the most accurate (it asked about pay and remote); Grok Bot was most in her voice</td><td>Muse could not do it: no Slack access</td></tr>
<tr><td>Cut a short-form video from a raw file in Dropbox</td><td>Muse (clean design, punchy cuts); Dot second</td><td>Claude Duet could not download the video. Grok Bot's overlay design was the worst, though it did the zoom effects better</td></tr>
<tr><td>Fix a bug from Sentry</td><td>Dot got closest to the actual fix; Claude Duet found a second bug and noticed Dot had already fixed the first</td><td>Grok Bot "loosened validation" instead of fixing the cause. Muse did not do it: no GitHub access</td></tr>
<tr><td>Build an episode thumbnail</td><td>Grok Bot (new ideas; the host says it is the best at Figma)</td><td>Muse made an unusable thumbnail</td></tr>
<tr><td>Triage the inbox into to-dos</td><td>Grok Bot (best format, with check marks)</td><td>Dot "did the worst job": five items in a message. Duet put tasks in its own app</td></tr>
<tr><td>Build a family newspaper</td><td>Muse (image, headline, schedule over two pages); Grok Bot also good</td><td>Dot's design was poor. Duet only returned a markdown outline</td></tr>
<tr><td>Explain a physics homework question (answer C)</td><td>All correct. Muse won on speed</td><td>None on accuracy</td></tr>
<tr><td>Shop for autumn shoes at a good price</td><td>Grok Bot, with Muse close behind</td><td>Duet was blocked by most shopping sites. Dot "barely tried"</td></tr>
<tr><td>Make a ChatPRD product launch video</td><td>Claude Duet (used her branding and a voiceover, no layout issues)</td><td>Dot's looked like a PowerPoint. Muse had no repo access and made things up. Grok Bot's layout overflowed</td></tr>
</tbody></table>
<p>Per the host, Muse was the fastest agent on four of the nine tasks (thumbnail, inbox, family newspaper, launch video) even though it needed the most steering. Grok Bot was fastest at the Slack reply and the bug fix. Dot and Claude Duet were generally the slowest.</p>

<h2 id="final-scores">What were the final scores and takeaways?</h2>
<p>Grok Bot finished first at 93%, with "high quality fixes" and three task wins. The host puts Muse next on the tasks it had access to, and says Dot was "sandbagged" and sits closer to Claude Duet than to Muse. Claude Duet finished last at 79%. The host says she does not know how the scores are computed, only that Claude produced them. Percentages for Muse and Dot were not stated in the video.</p>
<p>Her takeaways, in short:</p>
<ol>
<li>Pick the agent for the job: Grok Bot for work tasks, Muse for personal ones.</li>
<li>Give every agent the same tool access if you want a fair comparison.</li>
<li>Speed matters more than she used to think, and so does how an agent presents its results.</li>
<li>Safety styles differ. Finding the right balance between asking permission and acting on its own is important, and she likes Muse's sidebar that collects permission requests.</li>
<li>For coding she would use the underlying Codex and Claude tools directly, not the personal agents built on them.</li>
</ol>

<h2 id="what-to-check">What should a small business check before choosing an AI agent?</h2>
<p>This section is our take, not the video's. The test is about personal use, but its method carries over to a business.</p>
<ul>
<li><strong>Test on your real tasks.</strong> Rankings changed task by task. The agent that wrote the best thumbnail failed the video edit. Run your own three or four jobs before paying for anything.</li>
<li><strong>Check access first.</strong> Several failures came from missing connections (Slack, GitHub, a repo), and one agent filled the gap by making things up. Ask what the agent can reach, and what it does when it cannot.</li>
<li><strong>Require approval before actions.</strong> An agent that asks before it sends or spends is slower, as Claude Duet showed, but a wrong send or payment costs more than a pause. Look for a clear Approve, Edit or Reject step, not a silent action.</li>
<li><strong>Set a cost cap.</strong> The video does not cover cost. Before you let an agent run long jobs, find out whether usage is capped or open-ended.</li>
<li><strong>Watch for confident wrong answers.</strong> Grok Bot's bug fix removed a check rather than fixing the bug. Have a person review anything that touches customers, code or money.</li>
</ul>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza Crew is our product. It was not part of this test, and we make no claim about how it would score. You tell it the job in plain words, and it plans the work and builds the helper agents it needs. Each agent has its own computer and browser in a private, isolated workspace.</p>
<p>Before an agent clicks Send or Pay, it asks you to Approve, Edit or Reject in chat. Your team joins the same chat and watches every step live. Agents take phone calls too, included in the Crew plan, with no separate phone service to buy.</p>
<p>Free to try. No card needed. Your crew can have unlimited users and agents. You can ${a(CREW, 'try Dooza Crew here')}.</p>`,
    faqData: [
        { question: 'Which AI agent won the How I AI test?', answer: 'Grok Bot. The host scored it at 93%, and it completed all nine tasks and won three of them: the thumbnail, the inbox to-do list and the shoe shopping. Claude Duet finished last at 79%.' },
        { question: 'Which four AI agents were tested?', answer: 'Grok Bot, Dot, Muse and Claude Duet, across nine real tasks: a Slack reply, a short-form video, a bug fix, a thumbnail, inbox triage, a family newspaper, a physics homework explanation, shoe shopping and a product launch video.' },
        { question: 'Was the How I AI test scientific?', answer: 'No, and the host says so. The agents were run by an operator agent, she nudged them along, computer use broke at times, and she judged live rather than blind. Muse also lacked Slack and GitHub access. Treat it as one hands-on comparison.' },
        { question: 'Which agent is best for which job in the video?', answer: 'Per the host: Grok Bot for work tasks, Muse for personal and creative ones such as the short video and family newspaper, Claude Duet for the launch video and the most complete bug fix, and Dot and Claude Duet for coding.' },
        { question: 'How should a small business choose an AI agent?', answer: 'Test it on your own real tasks, check what accounts and tools it can reach, make sure it asks for approval before it sends or pays, and find out whether usage has a spending cap.' },
        { question: 'Was Dooza Crew in this test?', answer: 'No. Dooza Crew is our product and was not tested in the video. We make no claim about how it would score.' },
    ],
};

export default post;
