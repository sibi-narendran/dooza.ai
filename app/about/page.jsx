'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SupportEmailLink from '../../components/SupportEmailLink';
import { Building2, Globe, Shield, Users } from 'lucide-react';

const aboutFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Dooza?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dooza is an AI-native company that builds AI products and services for small businesses, from the Dooza Workforce app to the Dooza Agents platform. Every product starts with a refundable pilot: 100% refund within 14 days."
            }
        },
        {
            "@type": "Question",
            "name": "Who is behind Dooza.ai?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dooza.ai is built and operated by Adam Laboratory Inc., a Delaware C-Corporation."
            }
        },
        {
            "@type": "Question",
            "name": "Where is Dooza based?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dooza is a remote-first company registered in Delaware, USA."
            }
        },
        {
            "@type": "Question",
            "name": "Is Dooza safe to use?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We follow strict data privacy practices. Read our privacy policy for details."
            }
        }
    ]
};

export default function AboutPage() {
    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
        />
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        About Us
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Dooza is an AI-native company that builds AI products and services for small businesses. Dooza.ai is built and operated by <strong>Adam Laboratory Inc.</strong>, a Delaware C-Corporation.
                    </p>
                </div>

                {/* Company Overview */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Company</h2>
                    <div className="bg-slate-50 rounded-2xl p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                <Building2 className="w-6 h-6 text-primary-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-1">Adam Laboratory Inc.</h3>
                                <p className="text-slate-500">Delaware C-Corporation</p>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Adam Laboratory Inc. is a technology company incorporated in the state of Delaware, United States. We build AI-powered products that help businesses grow, automate workflows, and scale operations efficiently.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            <strong>Dooza.ai</strong> is the flagship product of Adam Laboratory Inc. — Dooza is an AI-native company that builds AI products and services for small businesses, from the Dooza Workforce app to the Dooza Agents platform. Every product starts with a refundable pilot: 100% refund within 14 days. Dooza AI employees handle email, social media publishing on Facebook, Instagram, and LinkedIn, SEO, lead generation, legal documents, and phone calls, with your approval on anything sensitive.
                        </p>
                    </div>
                </section>

                {/* What Dooza Does */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">What We Do</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="border border-slate-200 rounded-xl p-6">
                            <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4">
                                <Globe className="w-5 h-5 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Social Media Publishing</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Somi, Dooza's social media AI employee, helps you draft, refine, and publish content across Facebook, Instagram, and LinkedIn. You approve every post before it goes live.
                            </p>
                        </div>
                        <div className="border border-slate-200 rounded-xl p-6">
                            <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4">
                                <Users className="w-5 h-5 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Employees</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Dooza Workforce is an AI workforce app with ready-made AI employees. Dooza Agents is an AI agentic platform with custom AI agents built and maintained by Dooza engineers. Every product starts with a refundable pilot; see <a href="/pricing" className="font-medium text-primary-700 underline">pricing</a>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Corporate Details */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Corporate Details</h2>
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50 w-1/3">Company Name</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">Adam Laboratory Inc.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">Type</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">Delaware C-Corporation</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">Incorporated</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">May 28, 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">State File Number</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">10208844</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">Registered Address</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">131 Continental Dr, Suite 305, Newark, DE 19713</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">Product</td>
                                    <td className="px-6 py-4 text-sm text-slate-900">Dooza.ai — AI employees for small businesses (Dooza Workforce and Dooza Agents)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Trust & Privacy */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Trust &amp; Privacy</h2>
                    <div className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                            <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                We take your data seriously. Dooza is built with privacy and security at its core. We never sell your data, and all social media publishing actions require your explicit approval.
                            </p>
                            <p className="text-slate-600 text-sm">
                                Read our full{' '}
                                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline font-medium">
                                    Privacy Policy
                                </Link>{' '}
                                to learn how we handle your information.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h2>
                    <div className="bg-slate-50 rounded-xl p-6">
                        <p className="text-slate-600 mb-4">
                            Have questions about Dooza or Adam Laboratory Inc.? We&apos;d love to hear from you.
                        </p>
                        <p className="text-slate-600">
                            Email:{' '}
                            <SupportEmailLink className="text-blue-600 hover:text-blue-800 underline" />
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
        </>
    );
}
