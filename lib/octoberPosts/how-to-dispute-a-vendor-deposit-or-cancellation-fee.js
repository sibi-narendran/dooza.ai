// How to dispute a vendor deposit refusal or cancellation fee (2026): inbound SEO/AEO guide feeding /dispute.
// Targets: "how to dispute non refundable deposit", "vendor refused refund chargeback", "dispute event or service cancellation fee".
// Facts: content/2026-11-20-dispute-vendor-deposit-or-cancellation-fee.md (authored 2026-11-20; Pythia PASS 93/100 post 4chqcrsr93yexeeennsxodr9kc).

const DISPUTE_HREF = '/dispute';
const SMS_DEPOSIT = 'sms:+18555946841?&body=DEPOSIT';

export default {
    id: 626,
    title: 'Dispute a Vendor Deposit or Cancellation Fee (2026)',
    seoTitle: 'Dispute a Vendor Deposit or Cancellation Fee (2026)',
    seoDescription: 'Fight a refused deposit refund or unfair cancellation fee in 4 steps: contract breach audit, written demand, 12 CFR 1026.12(c)/1026.13 chargeback, or text DEPOSIT to +1 (855) 594-6841.',
    excerpt: 'Audit your signed contract for vendor breach or non-delivery, send a written refund demand with a deadline, file a Reg Z (12 CFR 1026.13 / 1026.12(c)) chargeback, and escalate if refused.',
    author: 'Dooza Team',
    date: '2026-11-20',
    modifiedDate: '2026-11-20',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Consumer Disputes',
    tags: ['Deposit Dispute', 'Cancellation Fee', 'Chargeback', 'Reg Z 1026.13', 'Dooza Dispute'],
    image: '/blog/how-to-dispute-a-vendor-deposit-or-cancellation-fee.jpg',
    imageAlt: 'Consumer reviewing a signed service contract, payment receipt, and green-checked refund approval letter beside a laptop',
    slug: 'how-to-dispute-a-vendor-deposit-or-cancellation-fee',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'four-steps', label: '4 steps to dispute a vendor deposit refusal' },
        { id: 'diy-vs-dooza', label: 'DIY vs. Dooza Dispute' },
        { id: 'evidence', label: 'What evidence wins a deposit refund dispute' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        {
            question: 'Can I win a chargeback on a deposit labeled non-refundable?',
            answer: 'Often yes, if the vendor failed to deliver the promised service, canceled or materially changed terms, or violated contract notice rules—non-refundable clauses generally do not allow a vendor to keep money for services they never provided.',
        },
        {
            question: 'What if I paid a large deposit months ago and the service date is later?',
            answer: 'Card networks and issuers generally measure dispute timeframes for undelivered services from the expected delivery or event date (not only the original payment date), so attach your contract showing the scheduled service date when filing under 12 CFR § 1026.13.',
        },
        {
            question: 'Will Dooza contact the vendor or my card issuer without my approval?',
            answer: 'No. We confirm the exact fee upfront, draft your written contract demand, chargeback packet, and state AG or CFPB complaint, and pause for your Approve, Edit, or Reject before anything is sent. Your files are private and deleted on request.',
        },
        {
            question: 'How much does Dooza Dispute charge for deposit disputes?',
            answer: '$0 upfront. You pay a one-time 20% fee (vendor refund demands or initial chargebacks) or 30% (escalated second-presentment, CFPB, or state AG disputes) only on actual dollars recovered ($0 if we fail).',
        },
    ],
    content: `
<div id="short-answer">
  <h2>Short Answer</h2>
  <p>To dispute a vendor&rsquo;s refusal to refund a deposit or an unfair cancellation fee (for events, venues, contractors, or B2B services), pull your <strong>signed contract</strong> and check the exact cancellation, non-delivery, and reschedule clauses&mdash;&ldquo;non-refundable&rdquo; labels generally do not shield a vendor who <strong>breached the contract, failed to deliver</strong>, changed material terms, or re-booked the same date with another client (avoiding double recovery). Send a <strong>written refund demand</strong> with a 5&ndash;7 business day deadline attaching your contract and payment receipt; if the vendor refuses, file a credit card dispute under <strong>Regulation Z</strong> (<code>12 CFR &sect; 1026.13</code> for services not rendered/billing errors within 60 days, or <code>12 CFR &sect; 1026.12(c)</code> claims and defenses over <strong>$50</strong> after a good-faith merchant attempt) and escalate unresolved deceptive withholdings to your <strong>state Attorney General</strong> and <code>ReportFraud.ftc.gov</code>.</p>
  <p>Rather not argue with a vendor or assemble the contract-breach and Regulation Z chargeback packet yourself? Text <strong>&ldquo;DEPOSIT&rdquo;</strong> (or your contract summary) to <a href="${SMS_DEPOSIT}">+1 (855) 594-6841</a> with <a href="${DISPUTE_HREF}">Dooza&rsquo;s dispute team</a> &mdash; we confirm the exact fee upfront and send nothing until you tap Approve. <strong>$0 upfront</strong>, and you pay a one-time <strong>20&ndash;30% fee</strong> on actual dollars waived or refunded ($0 if we don&rsquo;t save you money).</p>
</div>

<div id="four-steps">
  <h2>4 Steps to Dispute a Vendor Deposit Refusal</h2>
  <ol>
    <li><strong>Audit the signed contract and invoices:</strong> Check what the vendor promised (dates, deliverables, refund triggers, and whether a &ldquo;non-refundable&rdquo; clause actually covers vendor-side cancellation or material changes).</li>
    <li><strong>Send a formal written demand with a deadline:</strong> Email or send a letter detailing the breach, non-delivery, or re-booked date, requesting a full or prorated refund within 5&ndash;7 business days.</li>
    <li><strong>File a documented credit card chargeback:</strong> Attach your contract, payment receipts, proof of non-delivery or vendor breach, and the written refusal&mdash;citing <code>12 CFR &sect; 1026.13</code> (services not rendered) or <code>12 CFR &sect; 1026.12(c)</code> (claims and defenses over <strong>$50</strong>).</li>
    <li><strong>Escalate to state regulators or small claims:</strong> If the card dispute is outside the issuer window or paid by check/ACH, file a consumer complaint with your <strong>state Attorney General</strong> and <code>ReportFraud.ftc.gov</code>, or prepare a small-claims demand packet.</li>
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
        <td>Audit contract clauses, write formal demand, assemble card chargeback &amp; state AG packet</td>
      </tr>
      <tr>
        <td>Dooza Dispute (<a href="${DISPUTE_HREF}">/dispute</a>)</td>
        <td>$0</td>
        <td>20% (vendor refund demands &amp; initial chargeback packets) or 30% (escalated second-presentment, CFPB, or state AG disputes) only on dollars recovered ($0 if we fail)</td>
        <td>Text DEPOSIT + summary to +1 (855) 594-6841; tap Approve before anything is sent</td>
      </tr>
    </tbody>
  </table>
</div>

<div id="evidence">
  <h2>What Evidence Wins a Deposit Refund Dispute</h2>
  <ul>
    <li><strong>Signed contract &amp; scope:</strong> Showing the agreed date, deliverables, and cancellation/refund terms.</li>
    <li><strong>Payment receipts:</strong> Card statement, invoice, or wire/ACH confirmation showing deposit date and amount.</li>
    <li><strong>Proof of breach or non-delivery:</strong> Emails showing the vendor canceled, missed deadlines, changed pricing, or re-booked the date.</li>
    <li><strong>Written refund refusal:</strong> Proof you made a good-faith written attempt to resolve before filing a chargeback.</li>
  </ul>
</div>
`,
};
