// How to dispute an early termination fee (2026): inbound SEO/AEO guide feeding /dispute.
// Targets: "how to dispute an early termination fee", "dispute internet cancellation fee", "FCC early termination fee complaint".
// Facts: content/2026-11-19-dispute-early-termination-fee.md (authored 2026-11-19; Pythia PASS 91/100 post 86jjzzizeff1td5o9cc3cpnpgr).

const DISPUTE_HREF = '/dispute';
const SMS_ETF = 'sms:+18555946841?&body=ETF';

export default {
    id: 613,
    title: 'How to Dispute an Early Termination Fee (2026 Guide)',
    seoTitle: 'How to Dispute an Early Termination Fee (2026 Guide)',
    seoDescription: 'Fight an unfair internet, phone, or service early termination fee (ETF) in 4 steps: contract check, written waiver, 30-day FCC complaint, or text ETF to +1 (855) 594-6841.',
    excerpt: 'Pull your original contract terms and equipment return receipt, send a written waiver demand citing rate hikes or service failures, file a 30-day FCC complaint, and escalate if refused.',
    author: 'Dooza Team',
    date: '2026-11-19',
    modifiedDate: '2026-11-19',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Consumer Disputes',
    tags: ['Early Termination Fee', 'ETF Dispute', 'FCC Complaint', 'Internet Cancellation', 'Dooza Dispute'],
    image: '/blog/how-to-dispute-an-early-termination-fee.jpg',
    imageAlt: 'Customer reviewing an internet billing statement, returned modem receipt, and green-checked fee-waiver letter beside a laptop',
    slug: 'how-to-dispute-an-early-termination-fee',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'four-steps', label: '4 steps to dispute an early termination fee' },
        { id: 'diy-vs-dooza', label: 'DIY vs. Dooza Dispute' },
        { id: 'evidence', label: 'What evidence wins an ETF dispute' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        {
            question: 'How do I get an internet or phone Early Termination Fee waived?',
            answer: 'Gather your original agreement, cancellation proof, equipment return receipt, and any outage or rate-hike logs, send a written waiver demand to provider billing, and file a free informal complaint at consumercomplaints.fcc.gov if refused—the provider must respond in writing within 30 days.',
        },
        {
            question: 'Does an FCC complaint actually help with an Early Termination Fee?',
            answer: 'Yes. When you submit an informal complaint at consumercomplaints.fcc.gov under Internet or Phone, the FCC serves it directly on your provider, which triggers an escalated executive-relations review and a mandatory written response within 30 days.',
        },
        {
            question: 'Will Dooza contact my provider or the FCC without my approval?',
            answer: 'No. We confirm the exact fee upfront, draft your written ETF waiver demand, FCC complaint, and card-dispute packet, and pause for your Approve, Edit, or Reject before anything is sent. Your files are private and deleted on request.',
        },
        {
            question: 'How much does Dooza Dispute charge for ETF disputes?',
            answer: '$0 upfront. You pay a one-time 20% fee (provider billing/retention appeals) or 30% (escalated FCC, chargeback, or state AG/FTC disputes) only on actual dollars waived or refunded ($0 if we fail).',
        },
    ],
    content: `
<div id="short-answer">
  <h2>Short Answer</h2>
  <p>To dispute an unfair Early Termination Fee (ETF) from an internet, wireless, or service provider, pull your original contract terms and cancellation proof (including equipment return tracking receipts and outage or rate-hike logs), send a written fee-waiver demand to billing citing why the ETF does not apply (undisclosed terms, material rate/plan change, chronic service failure, or promised waiver), and&mdash;if they refuse&mdash;file a free <strong>FCC Informal Complaint</strong> at <code>consumercomplaints.fcc.gov</code> for internet or phone bills. The FCC forwards the complaint directly to your carrier, which has <strong>30 days</strong> to respond in writing; for non-telecom contracts or unauthorized card/ACH debits, escalate to your card issuer (<code>12 CFR &sect; 1026.13</code>), state Attorney General, and <code>ReportFraud.ftc.gov</code>.</p>
  <p>Rather not spend hours on hold with retention or draft the contract rebuttal and FCC complaint yourself? Text <strong>&ldquo;ETF&rdquo;</strong> (or your bill summary) to <a href="${SMS_ETF}">+1 (855) 594-6841</a> with <a href="${DISPUTE_HREF}">Dooza&rsquo;s dispute team</a> &mdash; we confirm the exact fee upfront and send nothing until you tap Approve. <strong>$0 upfront</strong>, and you pay a one-time <strong>20&ndash;30% fee</strong> on actual dollars waived or refunded ($0 if we don&rsquo;t save you money).</p>
</div>

<div id="four-steps">
  <h2>4 Steps to Dispute an Early Termination Fee</h2>
  <ol>
    <li><strong>Check your contract and gather proof:</strong> Save your original sign-up agreement, monthly bills showing the ETF, cancellation confirmation, equipment return tracking receipt, and any outage tickets or mid-contract price-hike notices.</li>
    <li><strong>Send a written waiver demand to billing/retention:</strong> Request an ETF waiver in writing, citing the specific defect (expired term, undisclosed ETF, rate hike, unfixed outages, or agent waiver) and logging the ticket number.</li>
    <li><strong>File a 30-day FCC complaint (for internet/phone):</strong> Submit your account details and evidence at <code>consumercomplaints.fcc.gov</code>; the FCC serves the complaint on the provider, which must respond in writing within <strong>30 days</strong>.</li>
    <li><strong>Dispute unauthorized charges &amp; escalate:</strong> If the ETF was billed after a documented cancellation or breach, file a credit card billing-error dispute (<code>12 CFR &sect; 1026.13</code>) or escalate deceptive contracts to your state Attorney General and <code>ReportFraud.ftc.gov</code>.</li>
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
        <td>Audit contract, send written waiver demand, file FCC complaint (consumercomplaints.fcc.gov) or card dispute</td>
      </tr>
      <tr>
        <td>Dooza Dispute (<a href="${DISPUTE_HREF}">/dispute</a>)</td>
        <td>$0</td>
        <td>20% (billing/retention fee-waiver appeals) or 30% (escalated FCC/chargeback/AG disputes) only on dollars waived or refunded ($0 if we fail)</td>
        <td>Text ETF + bill summary to +1 (855) 594-6841; tap Approve before anything is sent</td>
      </tr>
    </tbody>
  </table>
</div>

<div id="evidence">
  <h2>What Evidence Wins an ETF Dispute</h2>
  <ul>
    <li><strong>Original service agreement:</strong> Proof of contract length, end date, and whether an ETF was clearly disclosed.</li>
    <li><strong>Cancellation &amp; equipment receipts:</strong> Timestamped cancellation email/chat plus carrier tracking showing modem/router return.</li>
    <li><strong>Outage or price-hike records:</strong> Support ticket IDs for unresolved service failures or notices of unagreed price increases.</li>
    <li><strong>Written billing refusal:</strong> Any email or chat transcript denying your waiver request.</li>
  </ul>
</div>
`,
};
