'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Download } from 'lucide-react';
import { captureAttribution, readAttribution } from '@/lib/adAttribution';
import { getReceptionistBookingUrl } from '@/lib/links';
import { trackReceptionistEvent, trackReceptionistPilotConversion } from '@/lib/analytics';

// Inline Calendly scheduler for the pilot meeting. The Calendly script is
// loaded globally in app/layout.jsx, so this waits for window.Calendly and
// then mounts the widget with the visitor's ad attribution in the UTM fields.
export default function ReceptionistBooking({ variantKey, callbackNumber }) {
    const containerRef = useRef(null);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const attribution = { ...captureAttribution(), variant: variantKey };
        trackReceptionistEvent('booking_page_view', { variant: variantKey });

        let tries = 0;
        const maxTries = 120;
        let mounted = false;

        const mountWidget = () => {
            if (mounted) return true;
            if (typeof window.Calendly?.initInlineWidget !== 'function' || !containerRef.current) return false;
            mounted = true;
            const container = containerRef.current;
            window.Calendly.initInlineWidget({
                url: getReceptionistBookingUrl({ ...readAttribution(), ...attribution }),
                parentElement: container,
            });
            // Calendly sizes its iframe to 100% of the parent, so the parent needs a
            // definite height and the iframe needs it pinned, or it collapses to 150px.
            const sizeIframe = () => {
                const iframe = container.querySelector('iframe');
                if (!iframe) return false;
                iframe.style.cssText = 'width: 100%; height: 100%; min-height: 700px; border: 0; display: block;';
                return true;
            };
            if (!sizeIframe()) {
                const observer = new MutationObserver(() => {
                    if (sizeIframe()) observer.disconnect();
                });
                observer.observe(container, { childList: true, subtree: true });
            }
            setStatus('ready');
            return true;
        };

        if (!mountWidget()) {
            const interval = window.setInterval(() => {
                tries += 1;
                if (mountWidget() || tries >= maxTries) {
                    window.clearInterval(interval);
                    if (!mounted) setStatus('failed');
                }
            }, 250);
            return () => window.clearInterval(interval);
        }
        return undefined;
    }, [variantKey]);

    useEffect(() => {
        const onMessage = (event) => {
            if (event.origin !== 'https://calendly.com' || !event.data?.event) return;
            if (event.data.event === 'calendly.date_and_time_selected') {
                trackReceptionistEvent('booking_time_selected', { variant: variantKey });
            }
            if (event.data.event === 'calendly.event_scheduled') {
                trackReceptionistPilotConversion({ variant: variantKey });
                trackReceptionistEvent('pilot_meeting_booked', { variant: variantKey });
                setStatus('scheduled');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
        window.addEventListener('message', onMessage);
        return () => window.removeEventListener('message', onMessage);
    }, [variantKey]);

    return (
        <div>
            {status === 'scheduled' && (
                <div className="card-shadow mb-6 rounded-2xl border border-primary-200 bg-white p-6 text-center sm:p-8" role="status" aria-live="polite">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-primary-700" />
                    <h2 className="mt-4 text-2xl font-extrabold text-slate-900">You are booked.</h2>
                    <p className="mt-3 text-slate-700">
                        The invite is in your inbox. If we need to reach you before the meeting, we call from{' '}
                        <span className="whitespace-nowrap font-bold text-slate-900">{callbackNumber}</span>.
                    </p>
                    <a
                        href="/ai-receptionist/dooza.vcf"
                        download="Dooza.vcf"
                        onClick={() => trackReceptionistEvent('vcard_download')}
                        className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-5 py-3 font-bold text-white transition hover:bg-primary-800"
                    >
                        <Download className="h-4 w-4" />
                        Save our number
                    </a>
                </div>
            )}

            {status === 'failed' && (
                <p className="mb-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
                    The calendar did not load. Text or call us at {callbackNumber} and we will book the meeting for you.
                </p>
            )}

            <div className="card-shadow relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {status === 'loading' && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-medium text-slate-500" aria-hidden="true">
                        Loading your calendar...
                    </div>
                )}
                {/* Calendly owns this element, so React never renders children into it. No
                    "calendly-inline-widget" class either: widget.js auto-inits that class and
                    crashes without a data-url. */}
                <div ref={containerRef} className="w-full" style={{ height: 'max(700px, calc(100vh - 140px))' }} />
            </div>
        </div>
    );
}
