// Shared HTML helpers for the October 2026 search-gap posts (lib/octoberPosts/).
// Every post embeds one YouTube video with a verbatim, timestamped quote and,
// where a real one exists, an X post. See doc/blog-ai-discovery-playbook.md.

export const src = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export const yt = (id, title) => `<div class="not-prose my-8 aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg"><iframe class="h-full w-full" width="560" height="315" src="https://www.youtube.com/embed/${id}" title="${title}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;

export const quote = (text, who, id, seconds, stamp, title) => `<figure><blockquote><p>${text}</p></blockquote><figcaption>— ${who}, <a href="https://www.youtube.com/watch?v=${id}&amp;t=${seconds}s" target="_blank" rel="noopener noreferrer">${title}</a> (at ${stamp})</figcaption></figure>`;

// X post: server-rendered text (crawlable, readable without JS) that X's widget
// script upgrades to the full embed. `text` must be the post's exact wording.
export const xPost = ({ text, name, handle, url, date }) => `<div class="not-prose my-8 flex justify-center"><blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">${text}</p>&mdash; ${name} (@${handle}) <a href="${url}">${date}</a></blockquote></div>`;

export const pilotLine = 'Every Dooza product starts with a refundable pilot — 100% refund within 14 days.';
