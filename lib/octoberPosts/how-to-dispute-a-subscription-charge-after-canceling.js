// How to dispute a subscription charge after canceling (2026): inbound SEO/AEO guide feeding /dispute.
// Targets: "how to dispute a subscription charge after canceling", "charged after canceling subscription chargeback", "stop recurring bank charge 12 CFR 1005.10".
// Facts: content/2026-11-19-dispute-subscription-charge-after-canceling.md (authored 2026-11-19; Pythia PASS 91/100 post ifbhhac39j8z8g41ctcx3zis3h).

const DISPUTE_HREF = '/dispute';
const SMS_CANCEL = 'sms:+18555946841?&body=CANCEL';

export default {
    id: 611,
    title: 'Dispute a Subscription Charge After Canceling (2026)',
    seoTitle: 'Dispute a Subscription Charge After Canceling (2026)',
    seoDescription: 'Fight a post-cancellation or duplicate subscription charge in 4 steps: cancellation proof, Reg Z/Reg E dispute, 3-day bank stop-payment, or text CANCEL to +1 (855) 594-6841.',
    excerpt: 'Save your cancellation confirmation, send a written refund demand to merchant billing, file a Reg Z (12 CFR 1026.13) or Reg E (12 CFR 1005.10/1005.11) dispute, and escalate to the CFPB if refused.',
    author: 'Dooza Team',
    date: '2026-11-19',
    modifiedDate: '2026-11-19',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Consumer Disputes',
    tags: ['Subscription Dispute', 'Chargeback', 'Reg E Stop Payment', 'Recurring Billing', 'Dooza Dispute'],
    image: '/blog/how-to-dispute-a-subscription-charge-after-canceling.jpg',
    imageAlt: 'Consumer reviewing a cancellation confirmation email, bank statement, and green-checked refund letter beside a laptop',
    slug: 'how-to-dispute-a-subscription-charge-after-canceling',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'four-steps', label: '4 steps to dispute a post-cancellation charge' },
        { id: 'diy-vs-dooza', label: 'DIY vs. Dooza Dispute' },
        { id: 'evidence', label: 'What evidence wins a subscription charge dispute' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        {
            question: 'Can I get a refund if a company keeps charging me after I canceled?',
            answer: 'Yes. If you canceled before the renewal cutoff and have confirmation proof, send a written refund demand to the merchant and file a credit card billing-error dispute (12 CFR § 1026.13) or bank Reg E dispute (12 CFR § 1005.11) if they refuse.',
        },
        {
            question: 'How do I stop future recurring debits from my checking account?',
            answer: 'Under Regulation E (12 CFR § 1005.10(c)), you can notify your bank orally or in writing at least 3 business days before the next scheduled transfer to stop payment (the bank may require written confirmation within 14 days of an oral request).',
        },
        {
            question: 'Will Dooza contact the merchant or my bank without my approval?',
            answer: 'No. We confirm the exact fee upfront, draft your written refund demand, Reg Z/Reg E dispute, and CFPB complaint packet, and pause for your Approve, Edit, or Reject before anything is sent. Your files are private and deleted on request.',
        },
        {
            question: 'How much does Dooza Dispute charge for subscription charge disputes?',
            answer: '$0 upfront. You pay a one-time 20% fee (merchant or card chargeback appeals) or 30% (escalated Reg E, CFPB, or FTC disputes) only on actual dollars waived or refunded ($0 if we fail).',
        },
    ],
    content: `
<div id="short-answer">
  <h2>Short Answer</h2>
  <p>To dispute a subscription or SaaS charge billed after you canceled, save your timestamped <strong>cancellation confirmation</strong> (email, account-status screenshot, or support ticket), send a short written refund demand to merchant billing attaching that proof, and&mdash;if they refuse or fail to reply&mdash;file a <strong>credit card billing-error dispute</strong> (<code>12 CFR &sect; 1026.13</code> within 60 days of your statement) or a <strong>bank stop-payment and Reg E error claim</strong> (<code>12 CFR &sect; 1005.10(c)</code> at least 3 business days before the next scheduled debit, plus <code>12 CFR &sect; 1005.11</code> for unauthorized transfers). Escalate unresolved recurring-billing refusals to the <strong>CFPB</strong> (<code>consumerfinance.gov/complaint</code>) and <strong>FTC</strong> (<code>ReportFraud.ftc.gov</code>).</p>
  <p>Rather not chase merchant support or assemble the Reg Z / Reg E stop-payment and chargeback packet yourself? Text <strong>&ldquo;CANCEL&rdquo;</strong> (or your charge summary) to <a href="${SMS_CANCEL}">+1 (855) 594-6841</a> with <a href="${DISPUTE_HREF}">Dooza&rsquo;s dispute team</a> &mdash; we confirm the exact fee upfront and send nothing until you tap Approve. <strong>$0 upfront</strong>, and you pay a one-time <strong>20&ndash;30% fee</strong> on actual dollars waived or refunded ($0 if we don&rsquo;t save you money).</p>
</div>

<div id="four-steps">
  <h2>4 Steps to Dispute a Post-Cancellation Subscription Charge</h2>
  <ol>
    <li><strong>Lock down cancellation proof:</strong> Save the cancellation confirmation email, timestamped screenshot of the canceled subscription screen, and any chat/ticket ID.</li>
    <li><strong>Send a written refund demand to merchant billing:</strong> Attach your cancellation proof, invoice number, and charge date, and give a clear deadline (e.g., 5 business days) before escalating to your card issuer or bank.</li>
    <li><strong>File a card chargeback or 3-day bank stop-payment:</strong> For credit cards, file a billing-error/canceled-recurring dispute (<code>12 CFR &sect; 1026.13</code>); for bank/debit debits, notify your bank at least <strong>3 business days before</strong> the next scheduled transfer (<code>12 CFR &sect; 1005.10(c)</code>, following up in writing within 14 days if requested) and dispute the unauthorized charge (<code>12 CFR &sect; 1005.11</code>).</li>
    <li><strong>Escalate to CFPB and FTC if refused:</strong> If the merchant or bank still refuses a refund, submit your cancellation proof and denial to <code>consumerfinance.gov/complaint</code> and <code>ReportFraud.ftc.gov</code>.</li>
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
        <td>Gather cancellation proof, email merchant, file Reg Z / Reg E dispute + 3-day stop-payment</td>
      </tr>
      <tr>
        <td>Dooza Dispute (<a href="${DISPUTE_HREF}">/dispute</a>)</td>
        <td>$0</td>
        <td>20% (merchant/card chargeback appeals) or 30% (escalated Reg E/CFPB/FTC disputes) only on dollars recovered ($0 if we fail)</td>
        <td>Text CANCEL + charge summary to +1 (855) 594-6841; tap Approve before anything is sent</td>
      </tr>
    </tbody>
  </table>
</div>

<div id="evidence">
  <h2>What Evidence Wins a Subscription Charge Dispute</h2>
  <ul>
    <li><strong>Cancellation confirmation:</strong> Email receipt, screenshot showing &ldquo;Canceled&rdquo; status and date, or support chat transcript.</li>
    <li><strong>Statement &amp; invoice lines:</strong> Exact merchant descriptor, dollar amount, and post-cancellation billing date.</li>
    <li><strong>Written merchant refusal (or silence):</strong> Proof you asked merchant billing for a refund first.</li>
    <li><strong>Stop-payment confirmation:</strong> Bank reference number if you issued a <code>12 CFR &sect; 1005.10(c)</code> stop-payment order.</li>
  </ul>
</div>
`,
};
