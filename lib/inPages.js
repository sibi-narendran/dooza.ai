// Dooza Compliance India (Sibi 2026-11-13 22:00 "just create a website for this", via Apollo #asks ei4wshfu).
// Brief: /home/achilles/data/india-compliance-brief.md. Never write: licensed, CA firm, government approved, reviews, logos, approval guarantees.
export const IN_TRUST = ['Fixed price, no surprises', 'Filed within 72 hours of complete documents', 'Live status on WhatsApp', 'If the portal rejects a filing for a document error we made, we refile free or refund our fee'];
export const IN_WHATSAPP = '';
// Named professional (photo + ICAI/ICSI no.), Indian address, GSTIN: hidden until Sibi/Odysseus give REAL ones. Never invent.
export const IN_PRO = null; // { name, photo, reg, address, gstin } // number TBD by Odysseus; button hidden while empty

export const IN_PAGES = {
    hub: {
        path: '/in', service: 'general', card: '',
        title: 'Dooza Compliance India: EPR, FCRA, BIS, GST',
        description: 'Fixed-price filings in India: EPR registration, FCRA registration for NGOs, BIS CRS for electronics and a yearly GST plan. Filed within 72 hours of complete documents.',
        h1: 'Indian compliance filings, done for you. Fixed price.',
        lead: 'EPR, FCRA, BIS and GST. We prepare the documents, file on the government portal and keep you posted on WhatsApp until you have the number in hand.',
        price: 'From ₹24,999 + 18% GST · government fees at actuals',
    },
    epr: {
        path: '/in/epr', service: 'epr', card: 'EPR registration for plastic packaging, e-waste and batteries on the CPCB portal.',
        title: 'EPR Registration on the CPCB Portal, ₹24,999',
        description: 'EPR registration for brand owners, importers and producers: documents prepared, filed on the CPCB EPR portal, first annual return included. ₹24,999 per waste stream.',
        h1: 'EPR registration on the CPCB portal. ₹24,999, all in.',
        lead: 'For brand owners, importers and producers. We prepare your documents, file on the CPCB EPR portal and file your first annual return. We file in 72 hours and stay on it until CPCB issues your number.',
        price: '₹24,999 per waste stream + 18% GST',
        prices: [['Registration + first annual return', '₹24,999 per waste stream'], ['Annual returns after that', '₹14,999 a year'], ['CPCB fees', 'At actuals'], ['GST', '+18% on our fee']],
        included: ['Registration filing', 'First annual return', 'Follow-up until CPCB issues your number'],
        notIncluded: ['CPCB fees', 'EPR credits / recycler certificates'],
        steps: ['Share your GST, PAN, company documents and product and packaging quantities.', 'We file within 72 hours of complete documents.', 'You get the CPCB registration number and login.', 'We file your annual return on time.'],
        faq: [
            ['Who needs EPR registration?', 'Brand owners, importers and producers of plastic packaging, electronics or batteries sold in India.'],
            ['Do importers need it for customs?', 'Registration is checked at clearance for many goods. Tell us your product and we check it for you.'],
            ['What documents do you need?', 'GST certificate, PAN, company incorporation documents, authorised person details, and your product and packaging quantities. We send you the exact list for your waste stream.'],
            ['How long does it take?', 'We file within 72 hours of complete documents. CPCB portal review time varies and is set by CPCB.'],
            ['How soon will Amazon or customs accept it?', 'As soon as CPCB issues the number; portal review time varies.'],
        ],
    },
    fcra: {
        path: '/in/fcra', service: 'fcra', card: 'FCRA registration (FC-3A / FC-3B) and the yearly FC-4 return for NGOs.',
        title: 'FCRA Registration for NGOs, Filed Right, ₹29,999',
        description: 'FCRA registration for trusts, societies and Section 8 companies: eligibility check, documents, FC-3A/FC-3B filing on the MHA portal and the yearly FC-4. ₹29,999.',
        h1: 'Got a foreign donor? FCRA prior permission (FC-3B) or registration, filed right.',
        extras: ['Your CA keeps your books; we only do FCRA.'],
        lead: 'Trusts, societies and Section 8 companies receiving foreign donations. We check eligibility, prepare every document, file FC-3A or FC-3B on the MHA portal and handle the yearly FC-4.',
        price: '₹29,999 filing + 18% GST',
        prices: [['Filing (FC-3A or FC-3B)', '₹29,999'], ['FC-4 yearly return', '₹14,999 a year'], ['MHA fee', 'At actuals'], ['GST', '+18% on our fee']],
        steps: ['Free eligibility check (3+ years of activity, activity spend).', 'Help opening the FCRA account at SBI New Delhi Main Branch.', 'Filing within 72 hours of complete documents.', 'We answer MHA queries until a decision.'],
        note: 'The Ministry of Home Affairs decides approval; timelines are set by MHA.',
        faq: [
            ['Who can apply for FCRA registration?', 'Trusts, societies and Section 8 companies that want to receive foreign contributions. We check your eligibility free before you pay.'],
            ['Why an SBI New Delhi Main Branch account?', 'Foreign contributions must first be received in the designated FCRA account at SBI New Delhi Main Branch. We help you open it.'],
            ['How long does approval take?', 'We file within 72 hours of complete documents. The Ministry of Home Affairs decides approval and sets the timeline.'],
            ['Can we receive the money before approval?', 'No. Funds come only after MHA approval, into the SBI New Delhi FCRA account. Plan for MHA timelines.'],
            ['Do you handle the yearly return?', 'Yes. The FC-4 yearly return is ₹14,999 a year.'],
        ],
    },
    bis: {
        path: '/in/bis', service: 'bis', card: 'BIS CRS registration for chargers, LED, IT and audio products, lab to R-number.',
        title: 'BIS CRS Registration for Electronics, ₹49,999/Model',
        description: 'BIS CRS registration for manufacturers and importers of chargers, LED, IT and audio products: lab booked, file prepared, submitted on the BIS portal, tracked to your R-number.',
        h1: 'BIS CRS registration for electronics. ₹49,999 per model.',
        sub2: 'The BIS licence is issued in your overseas manufacturer\'s name. We register them with BIS using their factory papers, and can arrange the Indian representative.',
        extras: ['Typical total time 4-8 weeks; the lab queue decides most of it.'],
        lead: 'For manufacturers and importers selling chargers, LED, IT and audio products in India. We book the BIS-recognised lab, prepare the file, submit on the BIS portal and track it to your R-number.',
        price: '₹49,999 per model + 18% GST',
        prices: [['Registration, per model', '₹49,999'], ['Lab testing fee', 'At actuals (typically ₹10,000-50,000)'], ['Authorised Indian Representative for foreign makers', 'Ask us'], ['GST', '+18% on our fee']],
        steps: ['Tell us the product and IS standard (we find it if you do not know).', 'Ship samples to the lab we book.', 'We file with the test report.', 'You get the R-number and the label format.'],
        faq: [
            ['Which products need BIS CRS?', 'Products notified under the Compulsory Registration Scheme, such as many chargers, adapters, LED products, IT and audio equipment. Tell us your product and we check it.'],
            ['Can a foreign manufacturer apply?', 'Yes, through an Authorised Indian Representative. Ask us about this.'],
            ['What does the lab cost?', 'Lab fees are paid at actuals, typically ₹10,000-50,000 per model depending on the standard.'],
            ['How long does it take?', 'We file within 72 hours of complete documents and the test report. BIS review time is set by BIS.'],
        ],
    },
    gst: {
        path: '/in/gst', service: 'gst', card: 'A year of GSTR-1 and GSTR-3B filings and books, one price.',
        title: 'GST Returns and Books for a Year, ₹24,999',
        description: 'GST yearly plan for small businesses and freelancers: monthly GSTR-1 and GSTR-3B, books kept, reminders and a real person on WhatsApp. ₹24,999 a year.',
        h1: 'GST filed on time, answers on WhatsApp.',
        extras: ['Annual return (GSTR-9) and ITC matching included.', 'You give us portal access only when we file; your account stays yours.'],
        lead: 'For small businesses and freelancers. Monthly GSTR-1 and GSTR-3B, books kept, reminders, and a real person on WhatsApp. Every filing shows on gst.gov.in.',
        price: '₹24,999 a year + 18% GST',
        prices: [['12 months of returns + books (up to 100 invoices a month)', '₹24,999 a year'], ['Over 100 invoices a month', '₹2,500 per extra 100'], ['GSTR-9 annual return + ITC matching', 'Included'], ['GST registration add-on', '₹2,999'], ['Government fees', 'At actuals'], ['GST', '+18% on our fee']],
        steps: ['Share GSTIN login access and your invoices on WhatsApp.', 'We file by the due date.', 'You get the ARN for every return.'],
        faq: [
            ['What is included?', 'Monthly GSTR-1 and GSTR-3B for 12 months, books kept, and due-date reminders, for up to 100 invoices a month.'],
            ['Can I check the filings myself?', 'Yes. Every filing shows on gst.gov.in and you get the ARN for each return.'],
            ['I do not have a GSTIN yet.', 'Add GST registration for ₹2,999.'],
            ['How do I send invoices?', 'On WhatsApp or email, whichever is easier for you.'],
        ],
    },
};
