import BookPageClient from './BookPageClient';
import Link from 'next/link';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL } from '../../lib/contact';

const bookingLoaderStyles = `
  .dooza-booking-shell {
    position: relative;
  }

  .dooza-booking-loader {
    min-height: calc(100vh - 72px);
    display: grid;
    place-items: center;
    padding: 24px;
    background:
      radial-gradient(circle at 20% 12%, rgba(13, 148, 136, 0.14), transparent 30%),
      radial-gradient(circle at 82% 18%, rgba(59, 130, 246, 0.12), transparent 28%),
      linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    transition: opacity 350ms ease, visibility 350ms ease;
  }

  .dooza-loader-card {
    width: min(100%, 440px);
    text-align: center;
  }

  .dooza-loader-mark {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 22px;
    border-radius: 24px;
    background: #0f172a;
    box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22);
    overflow: hidden;
  }

  .dooza-loader-mark::before,
  .dooza-loader-mark::after {
    content: "";
    position: absolute;
    inset: 14px;
    border-radius: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    animation: dooza-spin 1.8s linear infinite;
  }

  .dooza-loader-mark::after {
    inset: 26px;
    border-color: rgba(45, 212, 191, 0.75);
    animation-duration: 1.1s;
    animation-direction: reverse;
  }

  .dooza-loader-pulse {
    position: absolute;
    inset: 31px;
    border-radius: 999px;
    background: #2dd4bf;
    box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.45);
    animation: dooza-pulse 1.35s ease-out infinite;
  }

  .dooza-loader-title {
    margin: 0;
    color: #0f172a;
    font-size: clamp(24px, 5vw, 36px);
    line-height: 1.05;
    font-weight: 900;
    letter-spacing: 0;
  }

  .dooza-loader-copy {
    margin: 12px auto 0;
    max-width: 360px;
    color: #475569;
    font-size: 16px;
    line-height: 1.6;
  }

  .dooza-loader-steps {
    display: grid;
    gap: 10px;
    margin-top: 26px;
  }

  .dooza-loader-step {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 44px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.76);
    color: #334155;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
    animation: dooza-step 1.6s ease-in-out infinite;
  }

  .dooza-loader-step:nth-child(2) {
    animation-delay: 160ms;
  }

  .dooza-loader-step:nth-child(3) {
    animation-delay: 320ms;
  }

  .dooza-loader-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #0d9488;
    box-shadow: 0 0 0 5px rgba(13, 148, 136, 0.12);
    flex: 0 0 auto;
  }

  @keyframes dooza-spin {
    to { transform: rotate(360deg); }
  }

  @keyframes dooza-pulse {
    70% { box-shadow: 0 0 0 18px rgba(45, 212, 191, 0); }
    100% { box-shadow: 0 0 0 0 rgba(45, 212, 191, 0); }
  }

  @keyframes dooza-step {
    0%, 100% { transform: translateY(0); opacity: 0.72; }
    50% { transform: translateY(-2px); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    .dooza-loader-mark::before,
    .dooza-loader-mark::after,
    .dooza-loader-pulse,
    .dooza-loader-step {
      animation: none;
    }
  }
`;

export const metadata = {
    title: { absolute: 'Book a Free Dooza Pilot Call | Dooza' },
    description: 'Book a free 30-minute pilot call with a Dooza engineer to scope your refundable pilot: AI employees, automations, integrations, and launch plan. 100% refund within 14 days.',
    alternates: {
        canonical: 'https://www.dooza.ai/book',
    },
    robots: {
        index: false,
        follow: true,
        googleBot: {
            index: false,
            follow: true,
        },
    },
    openGraph: {
        title: 'Book a Free Dooza Pilot Call | Dooza',
        description: 'Pick a time for a free 30-minute call: a Dooza engineer scopes your pilot. Every pilot is refundable: 100% refund within 14 days.',
        url: 'https://www.dooza.ai/book',
        images: [{ url: 'https://www.dooza.ai/logo.png', width: 512, height: 512, alt: 'Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book a Free Dooza Pilot Call | Dooza',
        description: 'Pick a time for a free 30-minute call: a Dooza engineer scopes your pilot. Every pilot is refundable: 100% refund within 14 days.',
        images: ['https://www.dooza.ai/logo.png'],
    },
};

export default function BookPage() {
    return (
        <main className="min-h-screen bg-white text-slate-950">
            <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-2 py-2 sm:px-4 sm:py-4">
                <div className="mb-2 flex min-h-10 items-center px-1">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">
                            Dooza
                        </p>
                        <h1 className="text-lg font-black tracking-tight text-slate-950 sm:text-xl">
                            <Link href="/" className="transition hover:text-primary-700">
                                Book your free 30-minute pilot call
                            </Link>
                        </h1>
                        <p className="mt-1 text-sm leading-snug text-slate-600">
                            A Dooza engineer scopes your pilot with you: the job to hand to AI (calls, support, follow-up), what it should say, and what success looks like. Every pilot is refundable: 100% refund within 14 days.
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                            Prefer to talk? Call or text <a href={`tel:${CONTACT_PHONE_E164}`} className="font-semibold text-primary-700 underline">{CONTACT_PHONE_DISPLAY}</a> or email <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary-700 underline">{CONTACT_EMAIL}</a>.
                        </p>
                    </div>
                </div>

                <div
                    className="dooza-booking-shell flex-1 overflow-hidden rounded-md border border-slate-200 bg-white"
                >
                    <div id="dooza-booking-loader" className="dooza-booking-loader" aria-live="polite">
                        <div className="dooza-loader-card">
                            <div className="dooza-loader-mark" aria-hidden="true">
                                <span className="dooza-loader-pulse" />
                            </div>
                            <p className="dooza-loader-title">Opening the calendar</p>
                            <p className="dooza-loader-copy">
                                Pick any open time. You will get a confirmation email with the call link.
                            </p>
                            <div className="dooza-loader-steps" aria-hidden="true">
                                <div className="dooza-loader-step">
                                    <span className="dooza-loader-dot" />
                                    Free 30-minute call
                                </div>
                                <div className="dooza-loader-step">
                                    <span className="dooza-loader-dot" />
                                    With a Dooza engineer
                                </div>
                                <div className="dooza-loader-step">
                                    <span className="dooza-loader-dot" />
                                    Refundable pilot
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: bookingLoaderStyles }} />
            <BookPageClient />
        </main>
    );
}
