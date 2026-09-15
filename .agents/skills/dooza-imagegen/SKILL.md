---
name: dooza-imagegen
description: Create Dooza blog hero images and evergreen educational infographics designed to stand alone in image search, be downloadable, and remain useful outside the original article. Use for Dooza blog artwork, visual explainers, comparison diagrams, process maps, checklists, and general-purpose web images. Do not use for logos, UI screenshots, or brand-identity design.
metadata:
  short-description: Create reusable Dooza infographics and blog images
---

# Dooza Image Generation

Create an original, accurate visual asset that teaches one useful idea at a glance. Optimize for human usefulness first; search visibility is a distribution benefit, not a guarantee.

## Choose the format

- Prefer an infographic when the subject has a process, framework, comparison, hierarchy, checklist, or set of related concepts.
- Use a landscape visual explainer for a blog hero: **1200x630px** (approximately 1.91:1), PNG.
- Use a vertical infographic when the information needs more space: **1600x2000px**, PNG, unless the user or publishing surface requires another size.
- Use a simple editorial illustration when an infographic would add labels without improving understanding.
- Keep each image focused on one primary idea. A landscape image should normally contain no more than five major sections.

## Plan the information before generating

1. Read the source article or brief and identify the single takeaway the image should communicate.
2. Verify factual claims before placing them in the image. Never invent statistics, quotes, rankings, or product capabilities.
3. Write a short standalone title and concise labels. The image must make sense without the surrounding article.
4. Prefer diagrams, icons, arrows, and spatial relationships over paragraphs. Avoid tiny text.
5. Keep citations and detailed sourcing in the page copy or caption unless a short source label is essential to interpreting the graphic.

Treat rendered text as content, not decoration. Inspect every word at full resolution. If generated typography is misspelled or malformed, regenerate it, reduce the text, or use a deterministic text-overlay method.

## Use the Dooza visual system

Base every prompt on this art direction:

```text
A soft watercolor and ink illustration of [SUBJECT]. Professional, hand-drawn, and clean. Use a restrained palette of muted sage green, teal, slate grey, and white on a textured cream-paper background. Include loose sketch lines and soft watercolor washes. Friendly corporate-tech aesthetic, minimalist composition, ample negative space, high quality.
```

For infographics, add the chosen information structure, exact title and labels, reading order, and layout requirements to the prompt.

- Favor calm visual hierarchy, clear grouping, generous spacing, and strong legibility.
- Avoid glossy 3D art, neon cyberpunk styling, generic stock-photo aesthetics, and cluttered dashboards.
- Avoid third-party logos, copyrighted characters, watermarks, and imitations of living artists.
- Do not turn the image into an advertisement. Exclude calls to action and oversized Dooza branding.
- A small `dooza.ai` source credit may appear in a corner when attribution is desired, but it must not reduce general usefulness.
- Represent people inclusively and avoid stereotypes.

## Make the asset downloadable and reusable

- Save the high-resolution PNG as the primary downloadable file. Do not provide only a screenshot, temporary preview, or compressed social-media copy.
- For blog work, save it as `public/blog/<descriptive-slug>.png`. Otherwise use the destination requested by the user.
- Use a lowercase, hyphenated, descriptive filename based on what the image explains, not internal campaign language.
- Return a clickable file link and render the final image in the response when the environment supports it.
- When integrating into a webpage, use a crawlable `<img>` element with explicit dimensions, useful surrounding text, and a visible high-resolution download link. Do not rely only on a CSS background image.
- Supply natural alt text, a short caption, and a plain-language description. Do not keyword-stuff them.
- Do not promise Google Images placement or indexing.

Broad reuse requires an explicit license. When Dooza wants others to reuse an image, prepare a nearby reuse notice recommending **CC BY 4.0** with attribution to Dooza and a link to the license. Do not claim that a license is active unless the site owner has authorized and published it. Keep license text on the webpage or download page rather than filling the artwork with legal copy.

Suggested notice after authorization:

```text
You may reuse and adapt this image under CC BY 4.0 with attribution to Dooza (dooza.ai).
```

## Generate and verify

1. Create the image with the available image-generation tool using the planned structure and Dooza art direction.
2. Inspect the result at full resolution.
3. Check dimensions, cropping, reading order, factual accuracy, spelling, contrast, and label legibility.
4. Edit or regenerate until the image passes those checks. Never ship malformed text or an unreadable infographic.
5. Preserve the original high-resolution PNG and create smaller derivatives only when the publishing task needs them.

## Deliverables

Provide:

- the final PNG;
- its descriptive filename and dimensions;
- alt text and a short caption;
- a visible download link when publishing to a site;
- the proposed reuse notice when broad public reuse is requested.

If the image was added to a blog, confirm that the article references the correct file path and that the file is included in the final change set.
