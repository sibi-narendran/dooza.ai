import BookPageClient from './BookPageClient';
import { CAL_BOOKING_URL } from '@/lib/links';

const bookingLoaderScript = `
  (function () {
    var frame = document.getElementById('dooza-booking-frame');
    var loader = document.getElementById('dooza-booking-loader');
    if (!frame || !loader) return;

    function hideLoader() {
      loader.classList.add('dooza-booking-loader-hidden');
      window.setTimeout(function () {
        loader.setAttribute('hidden', '');
      }, 350);
    }

    frame.addEventListener('load', hideLoader, { once: true });
    window.setTimeout(hideLoader, 7000);
  })();
`;

const bookingLoaderStyles = `
  .dooza-booking-shell {
    position: relative;
  }

  .dooza-booking-loader {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: grid;
    place-items: center;
    padding: 24px;
    background:
      radial-gradient(circle at 20% 12%, rgba(13, 148, 136, 0.14), transparent 30%),
      radial-gradient(circle at 82% 18%, rgba(59, 130, 246, 0.12), transparent 28%),
      linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    transition: opacity 350ms ease, visibility 350ms ease;
  }

  .dooza-booking-loader-hidden {
    opacity: 0;
    visibility: hidden;
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
    title: { absolute: 'Book a Meeting | Dooza' },
    description: 'Book a free setup call with the Dooza founder.',
    alternates: {
        canonical: 'https://www.dooza.ai/book',
    },
    openGraph: {
        title: 'Book a Meeting | Dooza',
        description: 'Pick a time for a free setup call with the Dooza founder.',
        url: 'https://www.dooza.ai/book',
        images: [{ url: 'https://www.dooza.ai/logo.png', width: 512, height: 512, alt: 'Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book a Meeting | Dooza',
        description: 'Pick a time for a free setup call with the Dooza founder.',
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
                            Book a meeting
                        </h1>
                    </div>
                </div>

                <div
                    className="dooza-booking-shell min-h-[760px] flex-1 overflow-hidden rounded-md border border-slate-200 bg-white"
                >
                    <div id="dooza-booking-loader" className="dooza-booking-loader" aria-live="polite">
                        <div className="dooza-loader-card">
                            <div className="dooza-loader-mark" aria-hidden="true">
                                <span className="dooza-loader-pulse" />
                            </div>
                            <p className="dooza-loader-title">Getting Dooza ready</p>
                            <p className="dooza-loader-copy">
                                Your setup call is loading. We are lining up the workspace, automations, and next steps.
                            </p>
                            <div className="dooza-loader-steps" aria-hidden="true">
                                <div className="dooza-loader-step">
                                    <span className="dooza-loader-dot" />
                                    AI team briefing
                                </div>
                                <div className="dooza-loader-step">
                                    <span className="dooza-loader-dot" />
                                    Calendar opening
                                </div>
                                <div className="dooza-loader-step">
                                    <span className="dooza-loader-dot" />
                                    Founder call preparing
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe
                        id="dooza-booking-frame"
                        title="Book a meeting with Dooza"
                        src={CAL_BOOKING_URL}
                        className="h-full min-h-[760px] w-full border-0"
                        loading="eager"
                        fetchPriority="high"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: bookingLoaderStyles }} />
            <script dangerouslySetInnerHTML={{ __html: bookingLoaderScript }} />
            <BookPageClient />
        </main>
    );
}
