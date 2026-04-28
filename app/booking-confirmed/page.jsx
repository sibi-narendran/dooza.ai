'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CheckCircle2, Calendar, Mail } from 'lucide-react';
import { trackFBSchedule, trackAdsConversion } from '@/lib/analytics';

export default function BookingConfirmedPage() {
    useEffect(() => {
        trackFBSchedule();
        trackAdsConversion();
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32 pb-24">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        You&apos;re booked in
                    </h1>
                    <p className="text-lg text-slate-600 mb-10">
                        Your free setup call with the founder is confirmed. Check your email for the calendar invite and meeting link.
                    </p>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 text-left space-y-4 mb-10">
                        <div className="flex gap-4">
                            <Calendar className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">What happens next</h3>
                                <p className="text-slate-600 text-sm">We&apos;ll walk through your use case, set up your workspace live, and hand you a working AI team by the end of the call.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Mail className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Come prepared</h3>
                                <p className="text-slate-600 text-sm">Reply to the confirmation email with one sentence about the problem you want solved. It makes the call 3x more useful.</p>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold transition-colors"
                    >
                        Back to home
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
