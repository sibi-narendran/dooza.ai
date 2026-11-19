// How to automate Certificate of Insurance (COI) requests (2026): inbound SEO/AEO guide feeding /insurance-agents.
// Targets: "how to automate certificate of insurance requests", "COI automation for insurance agencies", "ACORD 25 certificate of insurance automation".
// Facts: content/2026-11-19-automate-coi-requests-insurance.md (authored 2026-11-19; Pythia PASS 93/100 post c7p49ch3m3fmfj8ctasmk35e6h).

const INS_HREF = '/insurance-agents';

export default {
    id: 607,
    title: 'How to Automate COI Requests for Agencies (2026)',
    seoTitle: 'How to Automate COI Requests for Agencies (2026)',
    seoDescription: 'Automate ACORD 25 Certificate of Insurance (COI) requests without E&O risk: intake inbox, carrier portal check, drafted reply paused for your Approve ($0 to start).',
    excerpt: 'Centralize COI intake, verify active coverage and endorsements in carrier portals or your AMS, prepare the ACORD 25 packet, and pause every outbound certificate reply for licensed Approve.',
    author: 'Dooza Team',
    date: '2026-11-19',
    modifiedDate: '2026-11-19',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Insurance Agencies',
    tags: ['Certificate of Insurance', 'COI Automation', 'ACORD 25', 'Insurance Agents', 'E&O Control', 'Dooza Crew'],
    image: '/blog/how-to-automate-certificate-of-insurance-requests.jpg',
    imageAlt: 'Independent insurance agent at a wooden desk reviewing an open certificate of insurance folder with a green-checked approval stamp beside a laptop',
    slug: 'how-to-automate-certificate-of-insurance-requests',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'four-steps', label: '4-step COI automation workflow' },
        { id: 'manual-vs-dooza', label: 'Manual CSR processing vs. Dooza Crew' },
        { id: 'guardrails', label: 'E&O guardrails for automated COI workflows' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        {
            question: 'How can an independent insurance agency automate Certificate of Insurance (COI) requests safely?',
            answer: 'Route incoming email and phone requests into one queue, use a browser-based Portal agent to pull active policy dates and dec pages from carrier portals after your one-time sign-in and 2FA, flag any requested endorsements that are not on the policy, and pause every outbound certificate email for licensed Approve before sending.',
        },
        {
            question: 'Can an AI agent verify additional insured or waiver of subrogation requests?',
            answer: 'It can check your dec pages and policy documents in Files and flag whether the requested endorsement is already on the policy or needs an underwriter request, while leaving the final coverage check and Approve click to your licensed staff.',
        },
        {
            question: 'Are COIs emailed to certificate holders without my review?',
            answer: 'No. Every external certificate reply and client email pauses for your Approve before sending—your license, your clients, your call.',
        },
        {
            question: 'What does Dooza Crew for Insurance Agents cost?',
            answer: 'It is $0 to install and start with unlimited users and agents, and phone answering is included in your Crew plan with no separate phone service to buy. See /insurance-agents for details.',
        },
    ],
    content: `
<div id="short-answer">
  <h2>Short Answer</h2>
  <p>Independent insurance agencies automate Certificate of Insurance (COI / ACORD 25) requests without E&amp;O risk by routing incoming certificate emails and portal requests into one intake queue, verifying active policy status, limits, and requested endorsements (such as additional insured or waiver of subrogation) against the carrier portal or AMS, drafting the certificate packet and client reply, and pausing every outbound email for licensed producer or CSR <strong>Approve</strong> before anything is sent.</p>
  <p>With <a href="${INS_HREF}">Dooza Crew for Insurance Agents</a> (<strong>$0</strong> to install and start, unlimited users and agents), your <strong>Portal agent</strong> logs into carrier portals in its own browser (you sign in once and type 2FA yourself) to pull active policy details and dec pages into Files, your inbox workflow drafts the certificate reply for your <strong>Approve</strong>, and Crew <strong>Phones</strong> answer urgent contractor or shipper calls after hours with no separate phone service to buy.</p>
</div>

<div id="four-steps">
  <h2>4-Step COI Automation Workflow</h2>
  <ol>
    <li><strong>Centralize COI intake:</strong> Capture every certificate request from email, web forms, or after-hours phone calls into one daily queue with insured name, certificate holder, and requested wording.</li>
    <li><strong>Verify active coverage and endorsements:</strong> Have your <strong>Portal agent</strong> check active policy dates, limits, and endorsements (additional insured, primary/non-contributory, waiver of subrogation) in your carrier portal or AMS after your one-time sign-in and 2FA.</li>
    <li><strong>Prepare the certificate and draft the reply:</strong> Generate the ACORD 25 PDF inside your AMS/portal and draft the cover email to the insured and certificate holder, flagging any endorsement request that requires an underwriter or carrier change.</li>
    <li><strong>Pause for licensed Approve before sending:</strong> Nothing goes to a client or certificate holder until a licensed team member taps <strong>Approve</strong>, protecting your agency&rsquo;s E&amp;O compliance.</li>
  </ol>
</div>

<div id="manual-vs-dooza">
  <h2>Manual CSR Processing vs. Dooza Crew (<a href="${INS_HREF}">/insurance-agents</a>)</h2>
  <table>
    <thead>
      <tr>
        <th>Step</th>
        <th>Manual CSR chasing</th>
        <th>Dooza Crew (<a href="${INS_HREF}">/insurance-agents</a>)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>After-hours COI calls</td>
        <td>Voicemail; contractor calls another broker</td>
        <td>Crew Phones answer calls and log holder details (included, no extra phone service)</td>
      </tr>
      <tr>
        <td>Carrier portal &amp; dec-page lookup</td>
        <td>Repetitive manual logins and downloads</td>
        <td>Portal agent pulls dec pages &amp; active policy info into Files (you sign in once + 2FA)</td>
      </tr>
      <tr>
        <td>Drafted client &amp; holder reply</td>
        <td>Written from scratch per request</td>
        <td>Drafted automatically and paused for your <strong>Approve</strong> before sending</td>
      </tr>
      <tr>
        <td>Starting cost</td>
        <td>Extra CSR hours</td>
        <td><strong>$0</strong> to install and start; unlimited users and agents</td>
      </tr>
    </tbody>
  </table>
</div>

<div id="guardrails">
  <h2>E&amp;O Guardrails for Automated COI Workflows</h2>
  <ul>
    <li><strong>Never auto-send unverified wording:</strong> Additional insured, waiver of subrogation, and 30-day notice of cancellation requests must match actual policy endorsements before an ACORD 25 goes out.</li>
    <li><strong>Keep 2FA and credentials with you:</strong> With <a href="${INS_HREF}">Dooza Crew</a>, the Portal agent works in its own browser where you sign in once and enter 2FA yourself.</li>
    <li><strong>Audit trail in one place:</strong> Save every issued certificate and approved email in Files so renewal and audit checks take seconds.</li>
  </ul>
</div>
`,
};
