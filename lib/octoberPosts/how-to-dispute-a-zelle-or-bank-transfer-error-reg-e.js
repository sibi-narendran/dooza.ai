// How to dispute an unauthorized Zelle or P2P transfer (2026): inbound SEO/AEO guide feeding /dispute.
// Targets: "how to dispute unauthorized zelle transfer", "reg e unauthorized zelle dispute", "bank refused zelle fraud refund CFPB".
// Facts: content/2026-11-20-dispute-zelle-p2p-transfer-reg-e.md (authored 2026-11-20; Pythia PASS 93/100 post psitnc68h7yymrmzrzkgczr73a).

const DISPUTE_HREF = '/dispute';
const SMS_ZELLE = 'sms:+18555946841?&body=ZELLE';

export default {
    id: 637,
    title: 'Dispute an Unauthorized Zelle or P2P Transfer (2026)',
    seoTitle: 'Dispute an Unauthorized Zelle or P2P Transfer (2026)',
    seoDescription: 'Fight an unauthorized Zelle, Venmo, or P2P bank transfer in 4 steps: 2-day Reg E notice, 10-day provisional credit (12 CFR 1005.11), CFPB complaint, or text ZELLE to +1 (855) 594-6841.',
    excerpt: 'Notify your bank within 2 business days (12 CFR 1005.6), file a written Regulation E Notice of Error (12 CFR 1005.11) for 10-business-day provisional credit, and escalate denials to the CFPB.',
    author: 'Dooza Team',
    date: '2026-11-20',
    modifiedDate: '2026-11-20',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Consumer Disputes',
    tags: ['Zelle Fraud Dispute', 'Regulation E', 'Unauthorized P2P', 'CFPB Complaint', 'Dooza Dispute'],
    image: '/blog/how-to-dispute-a-zelle-or-bank-transfer-error-reg-e.jpg',
    imageAlt: 'Consumer reviewing a bank statement, smartphone transfer alert, and green-checked Regulation E provisional credit letter beside a laptop',
    slug: 'how-to-dispute-a-zelle-or-bank-transfer-error-reg-e',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'four-steps', label: '4 steps to dispute an unauthorized Zelle or P2P transfer' },
        { id: 'diy-vs-dooza', label: 'DIY vs. Dooza Dispute' },
        { id: 'evidence', label: 'What evidence wins a Reg E Zelle dispute' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        {
            question: 'Are unauthorized Zelle or P2P bank transfers covered by Regulation E?',
            answer: 'Yes. Per the CFPB Electronic Fund Transfers FAQs, P2P transfers debiting a consumer bank account are covered by Regulation E (12 CFR Part 1005), including unauthorized transfers initiated by a third party who fraudulently obtained your account access or credentials.',
        },
        {
            question: 'How long does my bank have to investigate an unauthorized Zelle transfer?',
            answer: 'Under 12 CFR § 1005.11, the bank must investigate promptly and generally resolve the error within 10 business days (20 business days for new accounts under 30 days) or issue provisional credit while completing its investigation within 45 days (90 days for certain POS/foreign transfers).',
        },
        {
            question: 'Will Dooza contact my bank or the CFPB without my approval?',
            answer: 'No. We confirm the exact fee upfront, draft your written 12 CFR § 1005.11 Notice of Error, bank denial rebuttal, and CFPB complaint packet, and pause for your Approve, Edit, or Reject before anything is sent. Your files are private and deleted on request.',
        },
        {
            question: 'How much does Dooza Dispute charge for Zelle or P2P disputes?',
            answer: '$0 upfront. You pay a one-time 20% fee (initial Reg E error notices & bank appeals) or 30% (escalated CFPB or denial-rebuttal disputes) only on actual dollars recovered ($0 if we fail).',
        },
    ],
    content: `
<div id="short-answer">
  <h2>Short Answer</h2>
  <p>To dispute an unauthorized <strong>Zelle, Venmo, Cash App, or P2P bank transfer</strong> (including account-takeover or impersonation fraud where a scammer obtained your login/OTP and initiated the transfer), notify your bank&rsquo;s fraud/error-resolution team <strong>immediately</strong>&mdash;ideally within <strong>2 business days</strong> (<strong>$50</strong> liability cap under <code>12 CFR &sect; 1005.6</code>, or within <strong>60 days</strong> of your statement)&mdash;and submit a written <strong>Regulation E Notice of Error (<code>12 CFR &sect; 1005.11</code>)</strong>. Per the CFPB&rsquo;s Electronic Fund Transfers FAQs, P2P transfers debiting your bank account are covered by Regulation E, banks <strong>cannot</strong> refuse to investigate by demanding a police report first or blaming consumer negligence when a third party initiated the transfer, and your bank must resolve the claim within <strong>10 business days</strong> (20 for accounts under 30 days old) or issue <strong>provisional credit</strong> while investigating up to <strong>45 days</strong>. Escalate wrongful denials to the <strong>CFPB</strong> (<code>consumerfinance.gov/complaint</code>).</p>
  <p>Rather not argue with bank fraud reps or draft the <code>12 CFR &sect; 1005.11</code> Regulation E error packet yourself? Text <strong>&ldquo;ZELLE&rdquo;</strong> (or your transfer summary) to <a href="${SMS_ZELLE}">+1 (855) 594-6841</a> with <a href="${DISPUTE_HREF}">Dooza&rsquo;s dispute team</a> &mdash; we confirm the exact fee upfront and send nothing until you tap Approve. <strong>$0 upfront</strong>, and you pay a one-time <strong>20&ndash;30% fee</strong> on actual dollars waived or refunded ($0 if we don&rsquo;t save you money).</p>
</div>

<div id="four-steps">
  <h2>4 Steps to Dispute an Unauthorized Zelle or P2P Transfer</h2>
  <ol>
    <li><strong>Report the unauthorized transfer immediately &amp; lock access:</strong> Call your bank&rsquo;s fraud line, change passwords/2FA, record the claim number, and follow up in writing so your notice date is locked under <code>12 CFR &sect; 1005.6</code>.</li>
    <li><strong>Send a written Regulation E Notice of Error (<code>12 CFR &sect; 1005.11</code>):</strong> State the transfer date, dollar amount, and why it was unauthorized (for example, unauthorized login or third-party credential compromise), triggering the <strong>10-business-day</strong> investigation or provisional-credit clock.</li>
    <li><strong>Challenge unlawful bank denial excuses:</strong> If your bank denies the claim citing &ldquo;P2P is like cash&rdquo; or demands a police report before investigating, cite the CFPB&rsquo;s Regulation E FAQs clarifying third-party unauthorized EFT coverage and prompt investigation rules.</li>
    <li><strong>Escalate denials to the CFPB and log fraud reports:</strong> File a formal complaint with your claim timeline and bank denial letter at <code>consumerfinance.gov/complaint</code>, and report the scam at <code>ReportFraud.ftc.gov</code> and <code>ic3.gov</code>.</li>
  </ol>
</div>

<div id="diy-vs-dooza">
  <h2>DIY vs. Dooza&rsquo;s Dispute Team (<a href="${DISPUTE_HREF}">/dispute</a>)</h2>
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Upfront cost</th>
        <th>Fee structure</th>
        <th>What you do</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>DIY appeal</td>
        <td>$0</td>
        <td>$0 (your time)</td>
        <td>Call fraud desk, write 12 CFR 1005.11 Notice of Error, rebut denial, file CFPB complaint</td>
      </tr>
      <tr>
        <td>Dooza Dispute (<a href="${DISPUTE_HREF}">/dispute</a>)</td>
        <td>$0</td>
        <td>20% (initial Reg E error notices &amp; bank appeals) or 30% (escalated CFPB/denial-rebuttal disputes) only on dollars recovered ($0 if we fail)</td>
        <td>Text ZELLE + transfer summary to +1 (855) 594-6841; tap Approve before anything is sent</td>
      </tr>
    </tbody>
  </table>
</div>

<div id="evidence">
  <h2>What Evidence Wins a Reg E Zelle / P2P Dispute</h2>
  <ul>
    <li><strong>Bank statement &amp; transfer receipt:</strong> Exact date, time, dollar amount, and recipient handle/name.</li>
    <li><strong>Spoof/impersonation or takeover proof:</strong> Call logs, phishing texts, or login-alert emails showing third-party access.</li>
    <li><strong>Written notice &amp; claim number:</strong> Timestamped proof of when you first notified the bank.</li>
    <li><strong>Bank denial letter:</strong> Showing the exact reason the bank refused provisional credit or reimbursement.</li>
  </ul>
</div>
`,
};
