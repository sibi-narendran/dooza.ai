import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Dooza text messages (SMS)',
    description: 'How Dooza\'s AI answering service sends text messages from +1 (855) 594-6841, who gets them, and how to opt in or out.',
    alternates: { canonical: 'https://www.dooza.ai/sms' },
    robots: { index: false, follow: true },
};

// Public opt-in proof for Twilio toll-free verification (Stentor, Napoleon YES #41, 2026-10-22).
export default function SmsPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-8">Dooza text messages (SMS)</h1>
                <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                    <p>Dooza&apos;s AI answering service sends text messages from <strong>+1 (855) 594-6841</strong>.</p>
                    <h2 className="text-2xl font-semibold text-slate-900 pt-4">Who gets texts, and how they opt in</h2>
                    <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Business owners who use the service:</strong> on setup (setup call, email or form) you give the mobile number for message alerts and confirm you want a text for each message your AI receptionist takes.</li>
                        <li><strong>Callers:</strong> during a call, the receptionist offers a text with the details you gave. We send one text only if you say yes.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold text-slate-900 pt-4">Example message</h2>
                    <p className="rounded-xl bg-slate-50 p-5 font-mono text-base">Dooza: New message for Reed Family Law from Jane Doe, 303-555-0142, re: divorce consultation. Reply STOP to opt out.</p>
                    <h2 className="text-2xl font-semibold text-slate-900 pt-4">Frequency, opt-out and privacy</h2>
                    <p>Message frequency varies. Msg &amp; data rates may apply. Reply <strong>STOP</strong> to opt out, <strong>HELP</strong> for help. Consent is not a condition of purchase. We never sell or share your mobile number or opt-in with third parties.</p>
                    <p>Privacy: <a className="text-teal-700 underline" href="https://dooza.ai/privacy">https://dooza.ai/privacy</a> · Terms: <a className="text-teal-700 underline" href="https://dooza.ai/terms">https://dooza.ai/terms</a></p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
