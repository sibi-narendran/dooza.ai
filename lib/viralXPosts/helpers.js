// Shared helpers for the viral X (Twitter) AI & tech series (October 2026).
// Each post is built around one recent viral X post with a video, embedded and credited.

export const src = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

// X post: server-rendered text (crawlable, readable without JS) that X's widget
// script (loaded by DynamicBlogInteractive.jsx) upgrades to the full video embed.
// `text` must be the post's exact wording (HTML-escaped, line breaks as <br>).
export const xPost = ({ text, name, handle, id, date }) => `<div class="not-prose my-8 flex justify-center"><blockquote class="twitter-tweet" data-dnt="true" data-media-max-width="560"><p lang="en" dir="ltr">${text}</p>&mdash; ${name} (@${handle}) <a href="https://twitter.com/${handle}/status/${id}">${date}</a></blockquote></div>`;

// Credit line placed right under the embed: who posted it, reach when we wrote this.
export const postCredit = ({ name, handle, id, date, views, likes }) => `<p class="text-sm text-slate-500"><strong>Post credit:</strong> video and post by <a href="https://x.com/${handle}" target="_blank" rel="noopener noreferrer">${name} (@${handle})</a> on X, published ${date} (${views} views and ${likes} likes when we wrote this). <a href="https://x.com/${handle}/status/${id}" target="_blank" rel="noopener noreferrer">View the post on X</a>. All rights to the video belong to its creator; we embed it with X's standard embed and add our own commentary.</p>`;

export const doozaSummary = `<p><strong>Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days.</strong></p>`;
