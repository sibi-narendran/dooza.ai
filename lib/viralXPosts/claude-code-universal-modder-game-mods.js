import { src, xPost, postCredit, doozaSummary } from './helpers';

const X = { name: 'Rehan Sheikh', handle: 'rehan_shei', id: '2105161487509852622', date: 'September 30, 2026' };

const REPO = 'https://github.com/rehan-remade/universal-modder';

const post = {
    id: 404,
    title: 'Universal-Modder: How Claude Code Skills Let AI Mod Almost Any Game',
    seoTitle: 'Universal-Modder: Claude Code Skills That Mod Any Game',
    seoDescription: 'Rehan Sheikh packaged Claude Code skills and tools into universal-modder, an open-source kit for modding PC games. What it does, legal limits, and the lesson.',
    excerpt: "Rehan Sheikh turned what Claude learned modding Terraria and Age of Empires II into universal-modder, an open-source set of agent skills and tools for modding almost any PC game you own. Here is what the repo does, how Claude Code skills work, where the legal lines are, and why packaging skills matters for businesses.",
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Claude Code', 'Agent Skills', 'Game Modding', 'AI Agents', 'Open Source', 'Viral X Post'],
    image: '/blog/claude-code-universal-modder-game-mods.png',
    imageAlt: 'Soft watercolor illustration of a friendly robot at a desk assembling colorful pixel-art game pieces from labeled toolboxes, with a small game world glowing on a monitor',
    slug: 'claude-code-universal-modder-game-mods',
    tocData: [
        { id: 'what-happened', label: 'What universal-modder is' },
        { id: 'how-it-works', label: 'How the modding loop works' },
        { id: 'claude-code-skills', label: 'How Claude Code skills work' },
        { id: 'why-viral', label: 'Why it went viral' },
        { id: 'legal', label: 'Legal and ToS limits' },
        { id: 'small-business', label: 'What it means for SMBs' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What is universal-modder, the Claude Code kit that mods games?</h2>
<p>On September 30, 2026, developer Rehan Sheikh (@rehan_shei) posted a video on X announcing <strong>universal-modder</strong>, an open-source package of "skills + tools" that lets Claude Code mod almost any PC game you own. He built it from what Claude learned while modding Terraria and Age of Empires II. The ${src(REPO, 'GitHub repo')} describes it as skills, tools and a shared knowledge base that let an AI coding agent find a game, work out its engine, read the real code, build the mod, generate art and sound, test it in the running game and cut a showcase video.</p>
<ul>
<li><strong>What it is:</strong> 10 agent skills, a command-line tool called <code>um</code>, and a knowledge base of "field notes" written by agents for agents.</li>
<li><strong>Who it works with:</strong> Claude Code first, plus Codex, Gemini CLI, GitHub Copilot, Cursor and OpenCode, per the README.</li>
<li><strong>Assets:</strong> sprites, 3D models, sound and music come from ${src('https://fal.ai', 'fal')}, a generative media platform (a fal API key is needed).</li>
<li><strong>Guardrails:</strong> it refuses to touch online games with anti-cheat and never ships game files or decompiled code.</li>
<li><strong>The business lesson:</strong> one impressive AI session became a repeatable workflow because someone wrote the steps down as skills.</li>
</ul>
${xPost({ text: 'Every game is moddable now!<br><br>I packaged everything Claude learned modding Terraria and Age of Empires into universal-modder: skills + tools that let Claude Code mod almost any game you own. Engine recon, decompiling, @fal sprites/3D/audio, testing in the real game, even the showcase video.', ...X })}
${postCredit({ ...X, views: '3.7 million', likes: '14,000' })}

<h2 id="how-it-works">How does universal-modder actually mod a game?</h2>
<p>According to the ${src(REPO, 'README')}, the agent starts with a skill called <code>mod-any-game</code> and runs the same 10-step loop every time: search the knowledge base, do recon and pick a route, set up a safe lab with saves backed up, read the actual code, build one working slice, generate assets, verify in the real game, record, package, and write a field note for the next agent.</p>
<p>The skills split that loop into focused jobs:</p>
<table><thead><tr><th>Skill</th><th>What it does (per the repo)</th></tr></thead><tbody>
<tr><td><code>mod-any-game</code></td><td>The full loop, safety rules, and 12 engine playbooks (Unity, Unreal, Godot, Source, Bethesda, Minecraft and more)</td></tr>
<tr><td><code>game-recon</code></td><td>Finds the engine and version, anti-cheat, mod loaders and save folders, then writes a modding plan</td></tr>
<tr><td><code>reverse-engineering</code></td><td>Uses decompilers and debuggers such as ILSpy and Ghidra to understand file formats and code</td></tr>
<tr><td><code>fal-assets</code> and <code>asset-pipeline</code></td><td>Generate sprites, textures, 3D models, sound and music, then fit them to the game's exact format</td></tr>
<tr><td><code>game-automation</code></td><td>Launches the game, takes screenshots and drives input to test the mod</td></tr>
<tr><td><code>showcase-video</code> and <code>publish-mod</code></td><td>Records gameplay, cuts the video, and packages the mod with credits</td></tr>
<tr><td><code>mashup-mods</code></td><td>"Game inside a game" projects, with Minecraft inside GTA V as the worked example</td></tr>
<tr><td><code>share-field-notes</code></td><td>Searches and adds to the shared knowledge base</td></tr>
</tbody></table>
<p>The repo includes three worked examples: a Terraria weapons mod with a homing missile launcher and a boss fight, a new "San Franciscans" civilization for Age of Empires II with a Robotaxi unit rendered from AI-generated 3D models, and real Minecraft running inside GTA V story mode. It is MIT licensed and had about 4,200 GitHub stars by October 6, 2026.</p>
<p>The knowledge base is the clever part. Each field note records the versions that worked, the route taken, how it was verified and the gotchas. Agents that finish a mod can open a pull request with their note, so the next agent starts with what the last one learned.</p>

<h2 id="claude-code-skills">How do Claude Code skills work?</h2>
<p>A skill is a folder with a <code>SKILL.md</code> file: a short description at the top, then instructions, plus optional scripts and reference files. Anthropic's ${src('https://code.claude.com/docs/en/skills', 'Claude Code skills documentation')} explains that only each skill's description sits in context all the time. The full instructions load when Claude decides the skill is relevant, or when you type <code>/skill-name</code>. That keeps a large library of skills cheap to carry around.</p>
<p>Skills follow the ${src('https://agentskills.io', 'Agent Skills open standard')}, which is why universal-modder can ship the same skills to several coding agents. ${src('https://code.claude.com/docs/en/plugins', 'Plugins')} bundle skills with tools, hooks and MCP servers into one install. Universal-modder uses that route: two commands in Claude Code install the skills, the fal MCP server and the <code>um</code> CLI together.</p>
<p>Anthropic's ${src('https://code.claude.com/docs/en/best-practices', 'Claude Code best practices')} draw the line clearly. CLAUDE.md holds rules that apply to every session. Skills hold domain knowledge and workflows that are only needed sometimes.</p>

<h2 id="why-viral">Why did the universal-modder post go viral?</h2>
<p>Three things lined up. First, the promise is huge and easy to grasp: "Every game is moddable now!" Second, the timing. Late September 2026 brought a wave of AI-built game mashups on X. The README itself credits "the September 2026 wave of AI-built mods" as a source for its engine playbooks.</p>
<p>The best-known example came a day later. ${src('https://x.com/Theyoungpixel/status/2105758613520421303', 'A clip shared by @Theyoungpixel')} claimed Claude had ported Minecraft into Red Dead Redemption 2, and it passed 2.1 million views. That post was itself a reshare of ${src('https://x.com/chasmmmmmmmmmmm/status/2105707774646562818', 'a compilation by @chasmmmmmmmmmmm')} of mashups made in his Discord server. We could not verify the technical details of the RDR2 clip, so treat it as a demo, not a product.</p>
<p>Third, Sheikh gave people something to install, not just something to watch. A demo gets likes. A repo with an install command gets stars, forks and new demos.</p>

<h2 id="legal">Is it legal to mod games with AI?</h2>
<p>Modding sits in a grey zone that depends on the game, the publisher's terms and where you live. Universal-modder's own rules are sensible: games you own, single-player or servers you host, no cheats against other players, no bypassing anti-cheat or DRM, and no redistributing game files or decompiled code. Its <code>um publish check</code> command tries to block shipping those files.</p>
<p>Publisher policies still apply. Rockstar's ${src('https://support.rockstargames.com/en-US/articles/5NVOAYjcTomO8v6SX2k76k/pc-single-player-mods', 'PC single-player mods policy')} says Take-Two generally will not take legal action against single-player, non-commercial projects that respect third-party IP. It excludes anything touching online services and, notably, the importation of other IP. That last point matters for "Minecraft inside GTA" mashups, and the page states it is not a license.</p>
<table><thead><tr><th>Scenario</th><th>Typical risk</th></tr></thead><tbody>
<tr><td>Single-player mod of a game with official mod support (e.g. Terraria's tModLoader)</td><td>Low, if you follow the community's rules</td></tr>
<tr><td>Single-player mod using reverse engineering</td><td>Depends on the EULA and local law. Read the terms first.</td></tr>
<tr><td>Mashups that import another company's characters or assets</td><td>Higher. IP owners may object, even for free mods.</td></tr>
<tr><td>Anything in online games with anti-cheat</td><td>High. Bans are likely, and universal-modder refuses it.</td></tr>
<tr><td>Selling mods built on someone else's game</td><td>High without the publisher's permission</td></tr>
</tbody></table>
<p>This is general information, not legal advice.</p>

<h2 id="small-business">What does universal-modder mean for small businesses?</h2>
<p>Game modding itself is not relevant to most small businesses. The pattern behind it is. Sheikh did not ship a new AI model. He took sessions that worked once and wrote down the recipe: the steps, the tools, the safety rules and the lessons learned. That turned a lucky win into a workflow anyone can rerun.</p>
<p>Most businesses that try AI are stuck at the "lucky win" stage. Someone gets a great result from a chatbot once, but nobody can repeat it next week. The fix is the same as in the repo:</p>
<ul>
<li><strong>Write the loop down.</strong> List the steps a good employee follows for one task, such as answering a quote request.</li>
<li><strong>Give the agent real tools.</strong> Access to the inbox, calendar or CRM, not just a chat box.</li>
<li><strong>Add a verification step.</strong> Universal-modder tests mods in the real game. Your agent should check its work against something real too.</li>
<li><strong>Set hard rules.</strong> The repo asks before driving your mouse or publishing. Your agent should ask before sending money, contracts or anything sensitive.</li>
<li><strong>Keep field notes.</strong> When a fix works, record it so the next run starts smarter.</li>
</ul>
<p>For more on the difference between a one-off assistant and a system that runs on its own, read <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a> and our guide to <a href="/blog/automate-business-processes">automating business processes</a>.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza doesn't build game mods or frontier models. What it does is the business version of universal-modder's idea: turning repeatable work into packaged agents with clear steps, real tool access and approval rules. <a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees, including Maily for email, Somi for social media, Ranky for SEO and AI visibility, Stan for lead generation, Linda for legal documents and Rachel for phone calls. <a href="/">Dooza Agents</a> are custom agents that Dooza engineers build and maintain around your own workflows, so you don't have to write and update the skills yourself.</p>
<p>Common first workflows are an <a href="/ai-receptionist">AI receptionist</a> for missed calls, <a href="/ai-customer-support">AI customer support</a> for the inbox, and <a href="/workflow-automation">workflow automation</a> for repetitive admin. Pricing depends on the product and is listed on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Ready to turn one AI win into a repeatable workflow?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope a pilot around one workflow you want to stop doing by hand. Start with a refundable pilot: 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'What is universal-modder?', answer: 'Universal-modder is an open-source, MIT-licensed kit by Rehan Sheikh that gives AI coding agents like Claude Code a set of skills, a command-line tool and a shared knowledge base for modding PC games you own, from engine recon to in-game testing and a showcase video.' },
        { question: 'Which AI tools does universal-modder work with?', answer: 'Its README lists Claude Code, Codex, Gemini CLI, GitHub Copilot in VS Code, Cursor and OpenCode. The skills use the Agent Skills format, so other agents can load them too.' },
        { question: 'What is a Claude Code skill?', answer: 'A skill is a folder with a SKILL.md file containing a description and instructions, plus optional scripts. Claude Code keeps only the description in context and loads the full instructions when the task matches or when you type the skill name as a slash command.' },
        { question: 'Is modding games with AI legal?', answer: 'It depends on the game, its terms and your country. Single-player mods of games with official mod support are usually low risk. Online games with anti-cheat, redistributing game files, and importing other companies\' IP carry much higher risk. This is not legal advice.' },
        { question: 'Did Claude really port Minecraft into Red Dead Redemption 2?', answer: 'A clip shared by @Theyoungpixel on October 1, 2026 claimed so and passed 2.1 million views. We could not verify how it was built, so treat it as a demo rather than a released mod.' },
        { question: 'What can a small business learn from universal-modder?', answer: 'Write repeatable work down as clear steps, give the AI real tools, add a verification step and approval rules, and record what worked. That is how one-off AI wins become reliable workflows, which is the approach behind Dooza Workforce and Dooza Agents.' },
    ],
};

export default post;
