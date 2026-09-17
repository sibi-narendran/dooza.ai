# /ai-receptionist: Google Ads pilot page

Single-action page for the AI receptionist offer. Lives at `app/ai-receptionist/page.jsx`
with a separate booking page at `app/ai-receptionist/book/page.jsx`.
It is the receptionist hub for the site (linked from the Navbar industries menu, the
solutions page, the trades and law firm industry pages, and the best-ai-receptionist post).

The one action is booking the pilot meeting. There is no lead form. A second, zero-friction
path exists for phones: text PILOT to +1 737-390-1099 (lands in the Close SMS inbox).

## Switches in `lib/aiReceptionistData.js`

| Constant | Default | What it does |
|---|---|---|
| `PILOT_PRICE_FROM` | `null` | Set to a number (for example `299`) to show "from $299 a month" in the cost FAQ. Null shows "less than one missed job" without a figure. |
| `SUPPORTS_SPANISH` | `false` | Set true once the agent answers in Spanish. Adds the "Does it speak Spanish?" FAQ. |
| `DEMO_PHONE_E164` | `null` | Set to the live demo line once an inbound agent answers it. The primary button then dials it on phones. |
| `TEXT_KEYWORD` | `PILOT` | Keyword in the "Prefer to text?" line. |
| `FOUNDER` | Sibi | Name, role, photo (`public/founder-sibi.jpeg`) and one line shown near every booking ask. |
| `PILOT_PROMISE` | | "Set up and live on your line within 48 hours. Only pay if you find it useful." Used on both pages. |

## URL parameters

| Param | Effect |
|---|---|
| `gclid`, `gbraid`, `wbraid`, `gad_source` (auto-tagging) or `ads=1` | Ads mode: no Navbar, no Footer, logo only, tiny Privacy/Terms line. Both pages honour it. |
| `v=answering-service` | Headline "AI Answering Service for Contractors and Trades" |
| `v=hvac` | "AI Receptionist for HVAC Companies" |
| `v=plumbing` | "AI Receptionist for Plumbers" |
| `v=electrical` | "AI Receptionist for Electricians" |
| `v=roofing` | "AI Receptionist for Roofers" |
| `v=contractors` | "AI Receptionist for Contractors" |

The page is trades only. The default headline is "AI Receptionist for Contractors and Trades" and the
body copy (problem, what it does, the three trade moments, FAQ) is written for HVAC, plumbing, electrical,
roofing and general contractors. Unknown `v` values fall back to the default. There is one demo call (HVAC).

The landing page forwards its whole query string to `/ai-receptionist/book`.
Sitelink anchors: `#demo` (demo call) and `#pilot` (booking section).

Suggested final URLs per ad group: `/ai-receptionist` (generic receptionist and contractor keywords),
`?v=answering-service`, `?v=hvac`, `?v=plumbing`, `?v=electrical`, `?v=roofing`.

Tracking template (account or campaign level):

```
{lpurl}?campaign={campaignid}&adgroup={adgroupid}&keyword={keyword}&matchtype={matchtype}&device={device}&network={network}
```

## Booking flow

1. `lib/adAttribution.js` stores ad params in a 90-day cookie (`dz_ad_attr`) on landing.
2. `components/ai-receptionist/ReceptionistBooking.jsx` mounts the Calendly inline widget with
   `getReceptionistBookingUrl()` from `lib/links.js`. Attribution goes into Calendly's UTM fields:
   `utm_source` (`google-ads` or `website`), `utm_medium` (`ai-receptionist`), `utm_campaign`,
   `utm_term` (keyword), `utm_content` (`gclid:...|adgroup:...|variant:...`).
3. On `calendly.event_scheduled` the page shows a confirmation card with a vCard for the Close number,
   fires `generate_lead` plus the receptionist conversion (see below), and the global `CalEmbedLoader`
   fires the existing generic booking conversion and Meta Schedule.
4. Calendly calls `app/api/calendly-webhook/route.js` (`invitee.created`), which creates or updates the
   Close lead with Lead Source, Google Click ID, Ad Campaign, Ad Group, Ad Keyword, Industry and Landing
   Page, tags it `ai-receptionist-pilot`, writes a note with every answer, creates a Close task dated at
   the meeting, texts a confirmation from +1 737-390-1099, and sends Meta CAPI. `invitee.canceled` adds a
   note. Only bookings with `utm_medium=ai-receptionist` are handled unless `CALENDLY_SYNC_ALL_BOOKINGS=1`.

### Calendly setup (one time, in the Calendly UI)

- Create an event type "AI Receptionist Pilot", 15 minutes, phone or Google Meet.
- Availability: allow same-day bookings, 15-minute buffer, at least 6 slots a day including evenings.
- Invitee questions: "Business name" (required) and "Mobile number" (required, phone type) with the text
  "We text the confirmation and reminders to this number. Reply STOP to opt out."
- Turn on SMS reminders in the event workflow (24 hours and 1 hour before).
- Copy the event link and set `NEXT_PUBLIC_CALENDLY_RECEPTIONIST_URL` on Vercel, including `?hide_gdpr_banner=1`.
  Until then the page uses the generic 30-minute setup call.

### Webhook setup (one time)

1. Create a personal access token at calendly.com/integrations/api_webhooks and put it in `.env.local` as
   `CALENDLY_TOKEN` (never commit it, never add it to Vercel).
2. `CALENDLY_WEBHOOK_SIGNING_KEY` is already in `.env.local` and on Vercel (production and preview).
3. After the site is deployed: `node scripts/calendly-webhook-register.mjs register`
   (`list` shows subscriptions, `delete <uri>` removes one).

Env vars: `CLOSE_API_KEY` (on Vercel), `CALENDLY_WEBHOOK_SIGNING_KEY` (on Vercel),
`AI_RECEPTIONIST_CONFIRM_SMS=0` to switch the confirmation text off,
`NEXT_PUBLIC_CALENDLY_RECEPTIONIST_URL`, `NEXT_PUBLIC_GOOGLE_ADS_RECEPTIONIST_LABEL`.

## Google Ads setup (one time)

1. Conversions: create "AI receptionist pilot meeting", category Book appointment, count one per click,
   Enhanced conversions on with the Google tag. Put its label in `NEXT_PUBLIC_GOOGLE_ADS_RECEPTIONIST_LABEL`.
   Make either it or the existing generic booking action secondary so a booking is not counted twice.
2. Call asset with the Close number for after-hours searchers (switch to the AI demo line once it exists).
3. Later: export leads tagged `ai-receptionist-pilot` with Google Click ID from Close and upload
   "pilot started" and "pilot paid" as offline conversions.

Engagement events (not conversions): `demo_button_click`, `demo_play`, `demo_half`, `demo_complete`,
`video_play`, `video_unmuted`, `sticky_book_click`, `text_pilot_tap`, `booking_page_view`,
`booking_time_selected`, `pilot_meeting_booked`, `vcard_download`, `demo_call_tap`.

## Media

- `public/ai-receptionist/missed-call.mp4` (26 s, portrait, 2 MB) is the missed-call story clip,
  remuxed with faststart. `missed-call-poster.jpg` is its poster. Plays muted while on screen.
- `demo-hvac.mp3` and `demo-law-firm.mp3` are synthesised demo calls (ElevenLabs, Sarah voice for the
  receptionist, the same voice the product uses). Caption timings live in `lib/aiReceptionistDemos.js`.
  Replace with a real customer recording as soon as one exists (with permission): drop in the mp3, update
  the lines and `duration`, change the disclaimer in `components/ai-receptionist/DemoCallPlayer.jsx`,
  and put the real business name in `demoLabel`.

## Copy rules

No em dashes anywhere on the page. One action: the booking. Proof and friction removal only, no new sections.
