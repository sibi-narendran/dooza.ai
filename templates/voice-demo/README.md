# Voice Demo Template

Reusable template for customer voice-receptionist pitch demos, hosted at
`dooza.ai/voice/<slug>`. Light Dooza theme, customer logo in the header, and a
central "Tap to speak" orb wired straight to an ElevenLabs agent via the JS SDK
(no ElevenLabs branding anywhere on the page).

## New customer demo — checklist

1. **Research the customer.** Verify the business from their real website:
   services, cities, offers, awards, tagline, tone. Never invent facts.
2. **Create the agent** in ElevenLabs (Dooza's Workspace):
   - Duplicate an existing receptionist agent → rename to the company.
   - Rewrite the system prompt + first message with the verified facts.
     Rules that always apply: never quote prices, qualify the job
     (service, symptom, urgency, location), collect name/phone/time window,
     offer a callback.
   - **Publish** the agent (dev-branch edits don't reach the SDK).
   - Copy the `agent_...` id.
3. **Get the logo.** Download from their site and save as
   `public/voice/<slug>/logo.png` (or `.jpg`). If the site blocks bots, try
   `https://graph.facebook.com/<their-fb-page>/picture?type=large&width=500&height=500`.
4. **Write the config.** Copy `example.config.json`, fill every field.
   HTML-escape `&` as `&amp;` in titles.
5. **Generate:**
   ```bash
   node scripts/new-voice-demo.mjs my-customer.config.json
   ```
6. **Test locally:**
   ```bash
   npx next dev -p 3055
   # open http://localhost:3055/voice/<slug> — tap the orb, talk, hang up
   ```
7. **Push to main.** Vercel deploys automatically. Live at
   `https://dooza.ai/voice/<slug>`.

## Gotchas

- `/voice/*` already has its own CSP + `microphone=(self)` in
  `next.config.js` — do not touch the site-wide headers.
- Clean URLs have no trailing slash, so all asset paths in the page must be
  absolute (`/voice/<slug>/logo.png`); the template handles this.
- The SDK loads from unpkg (`@elevenlabs/client`, pinned version) and connects
  over websocket — both already allowed by the `/voice` CSP.
