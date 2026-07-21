'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CheckCircle2, Loader2, MessageSquareText } from 'lucide-react';
import { countries } from '../../lib/countries';

export default function SmsOptInPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneCountry: 'US',
        phone: '',
        consentTransactional: false,
        consentMarketing: false,
    });

    const countryCodes = countries;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Display-only form for carrier review — no data is stored.
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 700);
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans">
                <Navbar />
                <main className="pt-32 pb-20 px-4">
                    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                            <CheckCircle2 size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">You&apos;re subscribed!</h1>
                        <p className="text-gray-600 mb-8">
                            Thanks for subscribing to Dooza text messages. Reply STOP at any time to cancel, or HELP for help.
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
                        >
                            Back to Home
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <MessageSquareText size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Subscribe to Dooza Text Messages
                        </h1>
                        <p className="text-gray-600">
                            Get appointment reminders, account updates, and occasional offers from Dooza by text.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="firstName"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="lastName"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-col gap-2 sm:flex-row">
                                    <div className="relative w-full sm:w-32">
                                        <select
                                            name="phoneCountry"
                                            value={formData.phoneCountry}
                                            onChange={handleChange}
                                            className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white appearance-none font-medium text-sm truncate pr-8"
                                        >
                                            {countryCodes.map((item, idx) => (
                                                <option key={`${item.country}-${idx}`} value={item.country}>
                                                    {item.country} ({item.code})
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        placeholder="555-0123"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="min-w-0 flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-4">
                                <p className="text-sm leading-relaxed text-gray-600">
                                    By providing your phone number and selecting the options below, you authorize Dooza AI to send
                                    text messages with offers and other information, possibly using automated technology, to the
                                    number you provided.
                                </p>
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="consentTransactional"
                                        checked={formData.consentTransactional}
                                        onChange={handleChange}
                                        className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span className="text-sm text-gray-700">
                                        I consent to receive customer care and notification text messages from Dooza.
                                    </span>
                                </label>
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="consentMarketing"
                                        checked={formData.consentMarketing}
                                        onChange={handleChange}
                                        className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span className="text-sm text-gray-700">
                                        I consent to receive marketing and promotional text messages from Dooza. Consent is not a
                                        condition of purchase.
                                    </span>
                                </label>
                                <p className="text-xs leading-relaxed text-gray-500">
                                    Message frequency will vary. Msg &amp; data rates may apply. Reply HELP for help or STOP to
                                    cancel. See our{' '}
                                    <Link href="/privacy" className="text-primary-600 font-semibold underline underline-offset-2 hover:text-primary-700">
                                        Privacy Policy
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="/terms" className="text-primary-600 font-semibold underline underline-offset-2 hover:text-primary-700">
                                        Terms and Conditions
                                    </Link>
                                    .
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Subscribe'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
