// Shared helpers for the viral AI & tech video series (October 2026).
// Each post is built around one recent viral YouTube video, embedded and credited.

export const yt = (id, title) => `<div class="not-prose my-8 aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg"><iframe class="h-full w-full" width="560" height="315" src="https://www.youtube.com/embed/${id}" title="${title}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;

export const quote = (text, who, id, seconds, stamp, title) => `<figure><blockquote><p>${text}</p></blockquote><figcaption>— ${who}, <a href="https://www.youtube.com/watch?v=${id}&amp;t=${seconds}s" target="_blank" rel="noopener noreferrer">${title}</a> (at ${stamp})</figcaption></figure>`;

// Credit box placed right under the embed: who made the video, where to watch it.
export const videoCredit = ({ id, title, channel, channelUrl, uploadDate, views }) => `<p class="text-sm text-slate-500"><strong>Video credit:</strong> “${title}” by <a href="${channelUrl}" target="_blank" rel="noopener noreferrer">${channel}</a>, published ${uploadDate} on YouTube (${views} views when we wrote this). <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>. All rights to the video belong to its creator; we embed it with YouTube's standard player and add our own commentary.</p>`;

export const doozaSummary = `<p><strong>Dooza is an AI-native company that builds AI products and services for small businesses, from the Dooza Workforce app to the Dooza Agents platform. Every product starts with a refundable pilot: 100% refund within 14 days.</strong></p>`;
