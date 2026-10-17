import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const h2 = 'text-2xl font-semibold text-slate-900 mb-4';
const p = 'text-slate-600 leading-relaxed mb-4';

export default function AntiSpamPolicyPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Anti-Spam Policy
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Effective Date: October 17, 2026
                    </p>
                </div>

                <div className="prose prose-slate max-w-none">
                    <section className="mb-12">
                        <h2 className={h2}>Scope</h2>
                        <p className={p}>
                            This policy covers every email and text message sent by Dooza, a product of Adam Laboratory Inc., from any of our domains, including dooza.ai, dooza.org and trydooza.com, and by anyone sending on our behalf.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className={h2}>Business-to-business only</h2>
                        <p className={p}>
                            We only write to businesses, at business addresses, about services relevant to their work. We do not send bulk email to consumers and we do not buy or rent consumer mailing lists.
                        </p>
                        <p className={p}>
                            We check addresses with an email verification service before sending, to keep bounces low and avoid writing to addresses that no longer exist.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className={h2}>An opt-out in every message</h2>
                        <p className={p}>
                            Every message we send tells the recipient how to stop further messages, for example by replying &quot;no&quot; or using the unsubscribe link. For text messages, replying STOP ends all further texts.
                        </p>
                        <p className={p}>
                            We identify ourselves honestly in every message: a real sender name, a working reply address and a subject line that matches the content.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className={h2}>Removals honoured within 48 hours</h2>
                        <p className={p}>
                            When someone asks not to hear from us, we stop within 48 hours and add the address to a permanent do-not-contact list that is checked before every send, across all our domains and campaigns.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className={h2}>Report abuse or ask to be removed</h2>
                        <p className={p}>
                            If you received a message from us that you did not want, or believe we have broken this policy, email{' '}
                            <a href="mailto:napoleon@dooza.org" className="text-blue-600 hover:underline">napoleon@dooza.org</a>{' '}
                            with the address that received it. We will remove it and reply to confirm.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
