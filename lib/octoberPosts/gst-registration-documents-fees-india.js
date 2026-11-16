// Facts: content/drafts/gst-registration-documents-fees-india-facts.md (site-cf/lib/inGst.js + gst.gov.in + CBIC Rule 9 + GST Council flyer, verified 2026-11-16).
import { src } from './helpers';

const GST_PORTAL = 'https://www.gst.gov.in';
const GST_RULE9 = 'https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter3/rule9_v1.00.html';
const GST_COUNCIL = 'https://gstcouncil.gov.in/sites/default/files/e-version-gst-flyers/Registration_under_GST_Law_new.pdf';
const GST_PAGE = '/accountant/gst';

export default {
    id: 559,
    title: 'GST Registration in India: Documents, Fees, Turnover Limits & Timeline',
    seoTitle: 'GST Registration Documents, Fees & Timeline India (2026)',
    seoDescription: 'Complete GST registration guide for Indian small businesses: turnover limits (Rs 40L/20L), proprietor documents checklist, Rs 0 government fee, 7-day CGST Rule 9 timeline.',
    excerpt: 'Everything a small business proprietor in India needs for GST registration: who must register under GST Council limits, the 6 documents required, the Rs 0 government fee, and the 7-to-30-day CGST Rule 9 approval timeline.',
    author: 'Dooza Team',
    date: '2026-11-16',
    modifiedDate: '2026-11-16',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'Accounting & Compliance',
    tags: ['GST Registration', 'GSTIN', 'CGST Rule 9', 'Small Business India', 'Dooza Accountant'],
    image: '/blog/gst-registration-documents-fees-india.jpg',
    imageAlt: 'Watercolor illustration of an Indian small business proprietor desk with PAN card, electricity bill, bank cheque, and GST registration certificate on a laptop',
    slug: 'gst-registration-documents-fees-india',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'who-needs-gst', label: 'Who needs GST registration' },
        { id: 'documents-list', label: 'Documents for a proprietor' },
        { id: 'fees', label: 'Government vs CA fees' },
        { id: 'timeline', label: 'Approval timeline (Rule 9)' },
        { id: 'how-dooza-helps', label: 'Pay only after GSTIN' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'What is the government fee for GST registration in India?', answer: 'Rs 0. Applying for a GSTIN directly on gst.gov.in has no government fee. You only pay a fee if you hire a CA or service to prepare the filing and answer officer queries.' },
        { question: 'How long does GST registration take in India?', answer: 'Under CGST Rule 9, the GST officer has 7 working days to approve a new registration or raise a query when Aadhaar is authenticated, or up to 30 days if Aadhaar authentication is not done or a physical site inspection is ordered.' },
        { question: 'What documents are needed for proprietor GST registration?', answer: 'A proprietor needs: PAN card, Aadhaar card (mobile-linked for OTP), passport-size photo, business address proof (electricity bill or property tax receipt, plus rent agreement if rented or consent letter if family-owned), and bank proof (cancelled cheque or first page of passbook/statement).' },
        { question: 'What is the turnover limit for GST registration?', answer: 'Per the GST Council, goods sellers generally need GST registration above Rs 40 lakh annual turnover (Rs 20 lakh in some states), service providers above Rs 20 lakh (Rs 10 lakh in some states), and inter-state goods sellers or marketplace sellers (Amazon, Flipkart, Meesho) usually from day one.' },
        { question: 'When do I pay Dooza Accountant for GST registration?', answer: 'Rs 0 today. You pay Rs 499 (tax included, first GST return included) by UPI or card link only after your 15-character GSTIN is issued. If the application is rejected, you pay Rs 0.' },
    ],
    content: `<p><em>Note: Dooza Accountant is a private service run by Sibi Narendran. We are not a government website. Official rules are published on ${src(GST_PORTAL, 'gst.gov.in')}.</em></p>

<h2 id="short-answer">What do you need for GST registration in India?</h2>
<p><strong>GST registration on ${src(GST_PORTAL, 'gst.gov.in')} has a Rs 0 government fee and requires six proprietor documents: PAN card, mobile-linked Aadhaar card, passport photo, business address proof, rent agreement or consent letter (if applicable), and bank proof. Under ${src(GST_RULE9, 'CGST Rule 9')}, approval takes up to 7 working days with Aadhaar OTP authentication (or up to 30 days without it or if a site check is ordered).</strong></p>
<p>If you want a Chartered Accountant team to file it and handle any GST officer queries for you, <a href="${GST_PAGE}">Dooza Accountant GST registration</a> is Rs 499 total (tax included, first GST return included), and you pay Rs 0 until your GSTIN is issued.</p>

<h2 id="who-needs-gst">Who needs GST registration?</h2>
<p>According to the ${src(GST_COUNCIL, 'GST Council flyer on Registration under GST Law')}, registration depends on what you sell and how you sell it:</p>
<table><thead><tr><th>Business type</th><th>When GST registration is needed</th></tr></thead><tbody>
<tr><td><strong>You sell goods</strong></td><td>Yearly turnover above Rs 40 lakh (Rs 20 lakh in some states)</td></tr>
<tr><td><strong>You give services</strong></td><td>Yearly turnover above Rs 20 lakh (Rs 10 lakh in some states)</td></tr>
<tr><td><strong>You sell goods to other states, or on Amazon, Flipkart, or Meesho</strong></td><td>Usually needed from day one</td></tr>
</tbody></table>
<p>Even if you are below the threshold, businesses sometimes register voluntarily when B2B clients ask for a GST tax invoice.</p>

<h2 id="documents-list">Documents needed for proprietor GST registration</h2>
<p>For a sole proprietorship, keep clear photos or scans of these six items ready:</p>
<ol>
<li><strong>PAN card</strong> of the proprietor.</li>
<li><strong>Aadhaar card</strong> with your mobile number linked (for the Aadhaar authentication OTP).</li>
<li><strong>Passport-size photo</strong> of the proprietor.</li>
<li><strong>Business address proof:</strong> electricity bill or property tax receipt.</li>
<li><strong>Premises occupancy proof:</strong> a rent agreement if rented, or a one-line consent letter if the property is family-owned.</li>
<li><strong>Bank proof:</strong> cancelled cheque or the first page of your bank passbook or statement.</li>
</ol>
<p>Partnerships and private limited companies require additional entity documents (such as partnership deed or incorporation certificate and board resolution).</p>

<h2 id="fees">What does GST registration cost?</h2>
<ul>
<li><strong>Government fee:</strong> Rs 0 on ${src(GST_PORTAL, 'gst.gov.in')}. You can apply yourself for free.</li>
<li><strong>CA / filing service fee:</strong> varies by provider (some large online platforms charge Rs 1,999 + 18% GST without the first return). At <a href="${GST_PAGE}">Dooza Accountant</a>, the full price is Rs 499 (tax included) and includes your first GST return.</li>
</ul>

<h2 id="timeline">How long does GSTIN approval take?</h2>
<p>Under ${src(GST_RULE9, 'CGST Rule 9')}, once the application and ARN (Application Reference Number) are generated:</p>
<ul>
<li><strong>Day 0:</strong> application is submitted and ARN is issued so you can track status on gst.gov.in.</li>
<li><strong>Within 7 working days:</strong> the GST officer approves the application or raises a query (notice) if Aadhaar authentication is completed.</li>
<li><strong>Up to 30 days:</strong> if Aadhaar authentication is skipped/failed or the officer orders a physical verification (or a photo/biometric check at a GST Suvidha Kendra).</li>
</ul>

<h2 id="how-dooza-helps">How pay-after-GSTIN works on Dooza Accountant</h2>
<p>You send clear phone photos of your papers on WhatsApp, our Chartered Accountant team files the application and sends your ARN the same day, and you approve the Aadhaar OTP on your own phone. If the GST officer raises a query, we reply at no extra charge. You pay Rs 499 by UPI or card link only after your 15-character GSTIN arrives—if the application is rejected, you pay Rs 0. Month 2 filing starts only if you say yes.</p>
<p><a href="${GST_PAGE}">Start GST registration on Dooza Accountant (Rs 0 today)</a></p>`,
};
