import Link from 'next/link';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import SiteHeader from '@/components/crew/SiteHeader';
import CrewPrompt from '@/components/crew/CrewPrompt';
import SmsCopyButton from '@/components/SmsCopyButton';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const INK = 'text-[#14213D]';
const MUTED = 'text-[#4B5567]';
const D = `${display.className} ${INK}`;
const H2 = `${D} text-3xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-[48px]`;
const LINK = 'font-semibold text-[#14213D] underline decoration-2 underline-offset-4 hover:text-[#0F766E]';

const EXAMPLES = [
    'Fight my $4,200 hospital bill and ask for an itemized audit',
    'Appeal my denied health insurance claim with a formal letter',
    'Negotiate down my Comcast/AT&T internet bill rate hike',
    'Claim flight delay compensation for my cancelled flight',
    'Prepare a property tax assessment appeal with local comps',
];

const CASES = [
    {
        tag: 'Insurance',
        title: 'Denied Health & Auto Claims',
        detail: 'Drafts formal medical-necessity and policy-language appeals, cites state insurance codes, and follows up with claims adjusters until resolved.',
    },
    {
        tag: 'Medical',
        title: 'Inflated Hospital & Clinic Bills',
        detail: 'Audits itemized bills for duplicate or upcoded CPT lines, checks financial-assistance eligibility, and negotiates cash/prompt-pay reductions.',
    },
    {
        tag: 'Bills & Utilities',
        title: 'ISP, Mobile & Utility Rate Hikes',
        detail: 'Sits on hold with retention desks, challenges unannounced fee hikes, and locks in lower promotional rates on your behalf.',
    },
    {
        tag: 'Travel',
        title: 'Flight Delay & Cancellation Claims',
        detail: 'Assembles DOT / EU261 documentation and files formal airline reimbursement and compensation demands end-to-end.',
    },
    {
        tag: 'Real Estate',
        title: 'Unfair Property Tax Assessments',
        detail: 'Pulls comparable property assessments, flags valuation errors, and prepares formal county appeal packets before filing deadlines.',
    },
];

const STEPS = [
    {
        num: '01',
        title: 'Text your bill or denial',
        detail: 'Text +1 (855) 594-6841 with what happened—no sign-up, no card, and zero upfront fee.',
    },
    {
        num: '02',
        title: 'Agents fight & ask your approval',
        detail: 'Voice + browser agents sit on hold, draft regulatory appeals, and ask you to Approve, Edit, or Reject before filing or accepting a settlement.',
    },
    {
        num: '03',
        title: 'Pay 20–30% only if we win',
        detail: 'Our fee is 20–30% of the cash actually recovered or shaved off your annual bill (quoted upfront). If we fail, you pay $0.',
    },
];

export const disputeFaq = [
    {
        question: 'What does it cost if you do not recover money or lower my bill?',
        answer: '$0. There is no upfront fee and no subscription required. You only pay 20–30% of the cash actually recovered or saved on your bill, with the exact percentage agreed upfront before we start.',
    },
    {
        question: 'Will Dooza send a legal letter, call my insurer, or accept a settlement without asking me?',
        answer: 'No. Every formal appeal, regulatory complaint, or settlement offer pauses for your Approve, Edit, or Reject in chat before anything is submitted or accepted.',
    },
    {
        question: 'What kinds of bills and disputes do you handle?',
        answer: 'Denied health and auto insurance claims, inflated hospital/medical bills, predatory ISP/mobile/utility rate hikes, flight delay compensation, and property tax assessment appeals.',
    },
    {
        question: 'How do I start right now?',
        answer: 'Text +1 (855) 594-6841 directly with the bill, denial reason, or rate hike you want fought—no sign-up needed.',
    },
];

export default function DisputeLanding() {
    return (
        <div className={`${body.className} crew-home bg-white ${INK}`}>
            <SiteHeader source="dispute-header" bookSource="dispute-header-book" />

            <main id="main-content">
                <section className="relative overflow-hidden">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(#14213D0D_1px,transparent_1px),linear-gradient(90deg,#14213D0D_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                    <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-8 lg:pb-24 lg:pt-16">
                        <p className="inline-block rounded-full border border-[#0F766E]/25 bg-[#EEF3F1] px-3.5 py-1 text-sm font-semibold text-[#0F766E]">
                            Dooza Chief Dispute Officer · Zero Upfront Cost
                        </p>
                        <h1 className={`${D} mt-4 max-w-[19ch] text-[40px] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-[58px] lg:text-[78px]`}>
                            We fight your denied claims and inflated bills. Pay $0 unless we win.
                        </h1>
                        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[6fr_6fr] lg:gap-14">
                            <div>
                                <p className={`max-w-[36rem] text-lg leading-relaxed md:text-xl ${MUTED}`}>
                                    Stop losing hours on hold. Text <a href="sms:+18555946841" data-offer="crew-sms" data-source="dispute-hero-copy" className={LINK}>+1 (855) 594-6841</a>—no sign-up needed—and our voice and browser agents sit on hold, draft formal regulatory appeals, negotiate bills down, and file dispute paperwork end-to-end. You pay 20–30% only of cash recovered or saved.
                                </p>
                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    <a
                                        href="sms:+18555946841?&body=DENIED"
                                        data-offer="crew-sms"
                                        data-source="dispute-hero-btn"
                                        className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#0F766E] px-6 py-3 text-base font-semibold text-white hover:bg-[#14213D]"
                                    >
                                        Text "DENIED" or Your Bill (+1 855-594-6841)
                                    </a>
                                    <SmsCopyButton />
                                </div>
                                <div className="mt-4 hidden items-center gap-3 rounded-2xl border border-[#CBD5E1] bg-white/80 p-3 sm:inline-flex">
                                    <img src="/sms-qr.svg" alt="Scan QR code to text +1 (855) 594-6841" width={68} height={68} className="h-[68px] w-[68px] rounded-lg border border-[#E2E8F0] bg-white p-1" />
                                    <div className="text-sm leading-snug">
                                        <p className="font-semibold text-[#14213D]">On desktop? Scan to text from your phone</p>
                                        <p className="text-xs text-[#4B5567]">Opens Messages to +1 (855) 594-6841</p>
                                    </div>
                                </div>
                                <p className={`mt-3 text-sm ${MUTED}`}>
                                    Private &amp; never sold — your bills and EOBs are used only for your dispute and deleted on request. When a carrier requires your consent, we send a 1-tap authorization or conference you in.
                                </p>
                            </div>
                            <div className="rounded-3xl border border-[#CBD5E1] bg-[#EEF3F1]/70 p-5 sm:p-7">
                                <p className="mb-3 text-base font-bold text-[#14213D]">Tell us what bill or claim to fight</p>
                                <CrewPrompt placement="dispute-hero" tone="light" examples={EXAMPLES} />
                            </div>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="dispute-steps" className="border-y border-[#E2E8F0] bg-[#FAF9F7] px-4 py-14 md:px-8 md:py-20">
                    <div className="mx-auto max-w-7xl">
                        <h2 id="dispute-steps" className={H2}>Zero upfront risk. How it works.</h2>
                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {STEPS.map((s) => (
                                <div key={s.num} className="rounded-2xl border border-[#14213D]/10 bg-white p-6">
                                    <p className="text-sm font-bold text-[#0F766E]">{s.num}</p>
                                    <h3 className={`${D} mt-2 text-2xl font-bold`}>{s.title}</h3>
                                    <p className={`mt-2 text-[16px] leading-relaxed ${MUTED}`}>{s.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-labelledby="dispute-cases" className="bg-[#EEF3F1] px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <h2 id="dispute-cases" className={H2}>What our dispute agents fight for you</h2>
                        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {CASES.map((c) => (
                                <div key={c.title} className="rounded-2xl border border-[#14213D]/10 bg-white p-6">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">{c.tag}</p>
                                    <h3 className={`${D} mt-1.5 text-xl font-bold`}>{c.title}</h3>
                                    <p className={`mt-2 text-[15px] leading-relaxed ${MUTED}`}>{c.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-labelledby="dispute-guides" className="border-t border-[#E2E8F0] bg-[#FAF9F7] px-4 py-14 md:px-8">
                    <div className="mx-auto max-w-5xl">
                        <h2 id="dispute-guides" className={H2}>Step-by-step dispute guides</h2>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                ['/blog/how-to-fight-a-denied-insurance-claim-or-hospital-bill', 'Denied Insurance Claim or Hospital Bill'],
                                ['/blog/how-to-negotiate-lower-internet-and-utility-bills', 'Internet, Cable & Utility Bill Hikes'],
                                ['/blog/how-to-claim-flight-delay-compensation', 'Flight Delay & Cancellation Cash (DOT / EU261)'],
                                ['/blog/how-to-appeal-a-property-tax-assessment', 'Property Tax Assessment Appeals'],
                                ['/blog/how-to-dispute-a-credit-card-charge', 'Credit Card Chargebacks & Subscriptions'],
                                ['/blog/how-to-dispute-a-security-deposit-deduction', 'Security Deposit Deduction Disputes'],
                                ['/blog/how-to-dispute-a-medical-debt-collection-letter', 'Medical Debt Collection Letters (FDCPA)'],
                                ['/blog/how-to-appeal-an-auto-insurance-claim-denial', 'Denied Auto Insurance Claims & Total Loss'],
                                ['/blog/how-to-dispute-a-rental-car-damage-claim', 'Rental Car Damage Claims & Junk Fees'],
            ['/blog/how-to-dispute-an-hoa-fine-or-violation-notice', 'HOA Fines & Violation Notices'],
            ['/blog/how-to-appeal-a-homeowners-insurance-claim-denial', 'Denied Homeowners Insurance Claims'],
            ['/blog/how-to-dispute-a-surprise-medical-bill-no-surprises-act', 'Surprise Medical Bills (No Surprises Act)'],
            ['/blog/how-to-dispute-a-credit-report-error', 'Credit Report Errors (FCRA)'],
            ['/blog/how-to-dispute-a-bank-overdraft-or-late-fee', 'Bank Overdraft & Late Fees'],
            ['/blog/how-to-dispute-a-wrongful-towing-or-impound-fee', 'Wrongful Towing & Impound Fees'],
            ['/blog/how-to-dispute-an-unwanted-gym-membership-or-recurring-charge', 'Gym Membership & Recurring Charges'],
            ['/blog/how-to-dispute-an-unfair-parking-ticket', 'Unfair Parking Tickets & Private Lots'],
            ['/blog/how-to-dispute-a-contractor-overcharge-or-incomplete-work', 'Contractor Overcharges & Incomplete Work'],
            ['/blog/how-to-dispute-a-car-repair-overcharge', 'Car Repair & Mechanic Overcharges'],
            ['/blog/how-to-dispute-an-incorrect-toll-or-fastrak-fee', 'Incorrect Toll & E-ZPass / FasTrak Fees'],
            ['/blog/how-to-dispute-a-moving-company-overcharge', 'Moving Company Overcharges'],
            ['/blog/how-to-dispute-a-debt-collection-letter-fdcpa', 'Debt Collection Letters (FDCPA 30-Day)'],
            ['/blog/how-to-dispute-an-unauthorized-debit-card-or-ach-charge', 'Unauthorized Debit & ACH Charges (Reg E)'],
            ['/blog/how-to-dispute-a-hotel-or-airbnb-fee', 'Hotel, Resort & Airbnb Fees'],
            ['/blog/how-to-dispute-a-denied-warranty-claim', 'Denied Warranty & Extended Warranty Claims'],
            ['/blog/how-to-dispute-a-high-electric-or-water-bill', 'High Electric & Water Bill Spikes (PUC)'],
            ['/blog/how-to-dispute-lost-luggage-or-airline-baggage-claim', 'Lost Luggage & Airline Baggage Claims (DOT)'],
            ['/blog/how-to-dispute-a-subscription-charge-after-canceling', 'Post-Cancellation Subscription Charges'],
            ['/blog/how-to-dispute-an-early-termination-fee', 'Early Termination Fees (FCC 30-Day)'],
            ['/blog/how-to-dispute-a-credit-card-late-fee-or-annual-fee', 'Credit Card Late & Annual Fees (Reg Z)'],
            ['/blog/how-to-dispute-a-refused-return-or-defective-item-chargeback', 'Refused Returns & Defective Items (Reg Z)'],
            ['/blog/how-to-dispute-an-ambulance-or-air-ambulance-bill', 'Ambulance & Air Ambulance Bills (NSA)'],
            ['/blog/how-to-dispute-a-dental-bill-or-insurance-denial', 'Dental Bills & Claim Denials (CDT/EOB)'],
            ['/blog/how-to-dispute-a-commercial-insurance-audit-bill', 'Workers’ Comp & GL Audit Bills (NCCI)'],
            ['/blog/how-to-dispute-a-storage-unit-fee-or-rate-hike', 'Storage Unit Rate Hikes & Late Fees'],
            ['/blog/how-to-dispute-a-lease-break-or-early-move-out-fee', 'Lease-Break & Early Move-Out Fees'],
            ['/blog/how-to-dispute-a-vendor-deposit-or-cancellation-fee', 'Vendor Deposits & Cancellation Fees'],
            ['/blog/how-to-dispute-a-hospital-facility-fee-or-lab-bill', 'Hospital Facility Fees & Out-of-Network Labs'],
            ['/blog/how-to-dispute-a-cam-reconciliation-or-nnn-charge', 'Commercial Lease CAM & NNN Charges'],
            ['/blog/how-to-dispute-a-freight-reclassification-or-ltl-invoice', 'Freight Reclass & LTL Invoices'],
            ['/blog/how-to-dispute-a-mortgage-escrow-or-servicer-fee', 'Mortgage Escrow & Servicer Fees (RESPA)'],
            ['/blog/how-to-dispute-an-unexpected-saas-or-software-renewal', 'Unexpected SaaS & Software Renewals'],
            ['/blog/how-to-dispute-a-zelle-or-bank-transfer-error-reg-e', 'Unauthorized Zelle & P2P Transfers (Reg E)'],
                            ].map(([href, label]) => (
                                <Link key={href} href={href} className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-[#14213D] hover:border-[#0F766E] hover:text-[#0F766E]">
                                    {label} &rarr;
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-labelledby="dispute-faq" className="px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 id="dispute-faq" className={H2}>Questions before you send a bill</h2>
                        <div className="mt-8 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
                            {disputeFaq.map((f, i) => (
                                <details key={f.question} open={i === 0} className="group">
                                    <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-[#14213D]">
                                        <span>{f.question}</span>
                                        <span aria-hidden="true" className="text-xl text-[#0F766E] transition group-open:rotate-45">+</span>
                                    </summary>
                                    <p className={`pb-5 pr-8 text-[16px] leading-relaxed ${MUTED}`}>{f.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 pb-20 md:px-8">
                    <div className="mx-auto max-w-5xl rounded-3xl bg-[#14213D] p-8 text-white sm:p-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Text your denied claim or inflated bill — pay $0 unless we recover cash.
                        </h2>
                        <p className="mt-3 max-w-2xl text-lg text-slate-300">
                            Text +1 (855) 594-6841 right now (no sign-up needed). 20–30% only of what we recover or save.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-4">
                            <a
                                href="sms:+18555946841"
                                data-offer="crew-sms"
                                data-source="dispute-bottom"
                                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#F2B53A] px-6 py-3 text-base font-semibold text-[#14213D] hover:bg-[#eab034]"
                            >
                                Text +1 (855) 594-6841
                            </a>
                            <Link href="/book" data-source="dispute-bottom-book" className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">
                                Book a 15-min call
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
