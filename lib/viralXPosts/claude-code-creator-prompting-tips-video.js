import { src, xPost, postCredit, doozaSummary } from './helpers';

const X = { name: '|| Deep Genius AI || AUTOMATION || AI ||', handle: 'Deep_GeniusAi', id: '2107132153582547307', date: 'October 5, 2026' };

const TALK = 'https://www.youtube.com/watch?v=6eBSHbLKuN0';
const DOCS = 'https://code.claude.com/docs/en/best-practices';

const post = {
    id: 405,
    title: "Claude Code Creator's Prompting Video: The Techniques, Explained",
    seoTitle: "Claude Code Creator's Prompting Tips, Explained",
    seoDescription: "A viral X post resurfaced Boris Cherny's 'Mastering Claude Code' talk. The techniques (CLAUDE.md, memory, plan, verify, parallel agents) and how SMBs use them.",
    excerpt: "A French AI account's repost of Boris Cherny's Claude Code talk reached 3.6 million views and 53,000 bookmarks. The original is Anthropic's 2025 \"Mastering Claude Code in 30 minutes.\" Here are the actual techniques, what changed since, and how non-developers can apply them to AI employees.",
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Claude Code', 'Prompt Engineering', 'Boris Cherny', 'Anthropic', 'AI Agents', 'Viral X Post'],
    image: '/blog/claude-code-creator-prompting-tips-video.png',
    imageAlt: 'Soft watercolor illustration of a presenter on a warm-toned stage beside a large screen showing a simple checklist and folder icons, with an attentive audience in the foreground',
    slug: 'claude-code-creator-prompting-tips-video',
    tocData: [
        { id: 'what-happened', label: 'What the viral post shared' },
        { id: 'original-video', label: 'The original video' },
        { id: 'techniques', label: 'The techniques' },
        { id: 'what-changed', label: 'What changed since 2025' },
        { id: 'why-viral', label: 'Why it went viral' },
        { id: 'small-business', label: 'Prompting tips for SMBs' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What did the viral Claude Code prompting post share?</h2>
<p>On October 5, 2026, the French automation account Deep Genius AI (@Deep_GeniusAi) posted an 18-minute clip of Boris Cherny, the engineer who created Claude Code, explaining how to work with it. The post (in French) says the engineer "just released" a 28-minute video on writing prompts that work. In fact the clip comes from ${src(TALK, '"Mastering Claude Code in 30 minutes"')}, a talk Cherny gave at Anthropic's Code with Claude event and Anthropic published on YouTube on May 22, 2025. The ideas have held up, and they apply well beyond coding.</p>
<ul>
<li><strong>Original creator:</strong> Boris Cherny, on Anthropic's YouTube channel. The X post is a repost, not the source.</li>
<li><strong>Core techniques:</strong> CLAUDE.md context files, a memory shortcut, explore-plan-code workflows, verification with tests and screenshots, and parallel agents.</li>
<li><strong>Reach:</strong> 3.6 million views and about 53,000 bookmarks, far more bookmarks than likes.</li>
<li><strong>Some details are dated:</strong> commands from mid-2025 have changed. Anthropic's current docs are the reference.</li>
<li><strong>For non-developers:</strong> the same principles (clear instructions, context files, verification) make AI employees reliable.</li>
</ul>
${xPost({ text: "L’ingénieur qui a construit Claude Code vient de publier une vidéo de 28 minutes sur la façon d’écrire des prompts qui fonctionnent vraiment.<br><br>J’ai vu des formations à 300 $ qui n’abordent même pas ce qu’il montre dans les 10 premières minutes.<br><br>( La suite de la vidéo est dans les commentaires. )<br><br>Fichiers CLAUDE.md, raccourcis mémoire, sessions parallèles, techniques de prompting…<br><br>Tout dans une seule vidéo, et entièrement gratuitement.<br><br>Que tu sois développeur, débutant ou que tu utilises Claude depuis des mois, ça peut vraiment t’être utile.<br><br>Le genre de thread que tu vas regretter de ne pas avoir mis en signet. 🔖", ...X })}
${postCredit({ ...X, views: '3.6 million', likes: '16,600' })}
<p>In English, the post says it has seen $300 courses that don't cover what Cherny shows in the first 10 minutes, and lists "CLAUDE.md files, memory shortcuts, parallel sessions, prompting techniques," all free in one video.</p>

<h2 id="original-video">Who made the original video, and when?</h2>
<p>The speaker is Boris Cherny, who created Claude Code at Anthropic. The full talk, ${src(TALK, '"Mastering Claude Code in 30 minutes"')}, runs about 28 minutes and has more than 1.6 million views on Anthropic's YouTube channel. The slides in the X clip match the talk: "Optimize your setup," "Use Claude Code to answer questions about your codebase," "Give Claude more context" and "Share with your team." If you want to learn from it, watch the original. It has the full context, and the creator gets the credit.</p>

<h2 id="techniques">What prompting techniques does Boris Cherny teach?</h2>
<p>Most of the talk is less about clever wording and more about giving Claude the right context, tools and checks. Here is what the slides cover, matched to Anthropic's current ${src(DOCS, 'Claude Code best practices')}:</p>
<table><thead><tr><th>Technique</th><th>What the talk shows</th><th>What Anthropic's docs say now</th></tr></thead><tbody>
<tr><td>Start with questions</td><td>Ask Claude about the codebase before changing it, e.g. "What did I ship last week?"</td><td>Ask Claude the questions you would ask a senior engineer. It is an effective onboarding workflow.</td></tr>
<tr><td>CLAUDE.md context files</td><td>Files at company, personal, project and local level that load into every session</td><td>CLAUDE.md is read at the start of every conversation. Keep it short and prune it.</td></tr>
<tr><td>Memory shortcut</td><td>Type # to save an instruction to memory</td><td>See the ${src('https://code.claude.com/docs/en/memory', 'memory docs')} for current ways to edit CLAUDE.md</td></tr>
<tr><td>Explore, plan, then code</td><td>"Figure out the root cause... propose a few fixes. Let me choose an approach before you code."</td><td>Use plan mode to separate exploration from execution</td></tr>
<tr><td>Verification</td><td>Write tests first, or have Claude screenshot its result and iterate until it matches a mock</td><td>"Give Claude a check it can run: tests, a build, a screenshot to compare."</td></tr>
<tr><td>Parallel agents</td><td>"Use 3 parallel agents to brainstorm ideas"</td><td>Run multiple sessions in parallel, for example a Writer/Reviewer pair</td></tr>
<tr><td>Plug in team tools</td><td>Tell Claude about your CLI tools ("use -h to learn it") and MCP servers</td><td>CLI tools are the most context-efficient way to reach external services</td></tr>
<tr><td>Share setup with the team</td><td>Check memory, commands, permissions and MCP config into the project</td><td>Check CLAUDE.md into git so your team can contribute</td></tr>
</tbody></table>
<p>The thread running through all of it: Claude can't read your mind, and it can't tell when it's done unless you give it a way to check. Cherny has kept to this since. In a January 2026 write-up, ${src('https://www.infoq.com/news/2026/01/claude-code-creator-workflow/', 'InfoQ reported')} that he runs 10 to 15 Claude sessions at once, starts pull requests in plan mode, and has Claude test every change it lands.</p>

<h2 id="what-changed">What has changed since the 2025 talk?</h2>
<p>The principles hold up, but some details in the clip are out of date. The talk's custom slash commands in <code>.claude/commands</code> now sit alongside ${src('https://code.claude.com/docs/en/skills', 'skills')}, folders with a <code>SKILL.md</code> that Claude loads only when relevant. Anthropic's docs now also cover plan mode, subagents for research, <code>/clear</code> between unrelated tasks, and a separate reviewer before you call work done. If a command in the video doesn't work for you, check the ${src(DOCS, 'best practices page')} rather than assuming the idea is wrong.</p>
<p>One more correction: the X post calls it a video on writing prompts. It is really a talk on setting up the work, with prompts as one part.</p>

<h2 id="why-viral">Why did this post go viral?</h2>
<p>The framing did most of the work. "The engineer who built Claude Code" gives authority. "$300 courses that don't cover what he shows" gives a bargain. "You'll regret not bookmarking" pushes saving over reading, which is why bookmarks (about 53,000) beat likes more than three to one. Posting the video natively, with "the rest in the comments," kept people on X.</p>
<p>It also landed at a good moment. Claude Code has moved far beyond its original audience, and many new users are looking for a short, credible guide. A free talk from its creator is exactly that, even 16 months later.</p>

<h2 id="small-business">How can non-developers use these prompting principles with AI employees?</h2>
<p>You don't need to write code to use the same ideas. Whether you run ChatGPT, Claude or an AI employee that answers your phone, the same four habits apply:</p>
<ol>
<li><strong>Write a context file.</strong> The business version of CLAUDE.md is a one-page brief: services, prices you quote, hours, tone, who to escalate to, and what never to say. Keep it short. Anthropic's advice to cut any line that doesn't prevent a mistake works here too.</li>
<li><strong>Give specific instructions.</strong> "Reply to leads" is vague. "Reply to new web leads within 5 minutes, ask for their address and preferred time, and book them into the Tuesday or Thursday slots" is a job.</li>
<li><strong>Plan before doing.</strong> For anything new, ask the AI to describe its plan first and approve it before it acts. That is plan mode without the keyboard shortcut.</li>
<li><strong>Build in a check.</strong> Decide how you'll know the work is right: a weekly sample of call transcripts, a rule that quotes over a set amount need your approval, or a booking that must show up in the calendar.</li>
</ol>
<p>When the AI makes a mistake, add one line to the context file so it doesn't happen again. Over months, that file becomes your playbook. Our guides on <a href="/blog/automate-business-processes">automating business processes</a> and <a href="/blog/ai-employees-vs-virtual-assistants">AI employees vs virtual assistants</a> go further.</p>
<p>What isn't relevant yet: running 10 parallel AI sessions. That suits engineers working on large codebases. Most small businesses get more from one well-briefed agent on one workflow than from many half-briefed ones.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza applies these principles for you. Each AI employee in <a href="/workforce">Dooza Workforce</a> (Maily for email, Somi for social media, Ranky for SEO and AI visibility, Stan for lead generation, Linda for legal documents, and Rachel for phone calls) works from your business context and asks for approval on anything sensitive. <a href="/">Dooza Agents</a> are custom agents that Dooza engineers build and maintain, including the instructions, context files and checks that keep them reliable.</p>
<p>Good first workflows are an <a href="/ai-receptionist">AI receptionist</a>, <a href="/ai-customer-support">AI customer support</a>, and <a href="/workflow-automation">workflow automation</a> for repetitive admin. If you are comparing options, read <a href="/blog/claude-cowork-vs-dooza">Claude Cowork vs Dooza</a>. Pricing depends on the product and is on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Want an AI employee that's briefed properly from day one?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope a pilot around one workflow, including the context and checks it needs. Start with a refundable pilot: 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'Who made the Claude Code prompting video that went viral on X?', answer: 'Boris Cherny, the creator of Claude Code. The clip comes from his talk "Mastering Claude Code in 30 minutes," published on Anthropic\'s YouTube channel on May 22, 2025. The viral X post by @Deep_GeniusAi is a repost.' },
        { question: 'Is the video new?', answer: 'No. The X post says it was "just released," but the talk was published in May 2025. Most principles still apply, though some commands have changed, so check Anthropic\'s current Claude Code docs.' },
        { question: 'What is a CLAUDE.md file?', answer: 'A plain text file Claude Code reads at the start of every session. It holds commands, style rules and project conventions Claude cannot work out on its own. Anthropic recommends keeping it short and pruning it regularly.' },
        { question: 'What is the most important Claude Code tip?', answer: 'Give Claude a way to verify its work, such as tests, a build or a screenshot to compare. Anthropic\'s best practices say this is the difference between a session you watch and one you can walk away from.' },
        { question: 'Can non-developers use these prompting techniques?', answer: 'Yes. Write a short context file about your business, give specific instructions, ask for a plan before the AI acts, and set a check such as approvals or weekly reviews. The same habits make AI employees reliable.' },
        { question: 'How does Dooza use these principles?', answer: 'Dooza Workforce employees and custom Dooza Agents work from your business context, follow clear instructions and ask for approval on sensitive actions. Every product starts with a refundable pilot: 100% refund within 14 days.' },
    ],
};

export default post;
