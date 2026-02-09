'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Building2, Globe, Shield, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        About Us
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Dooza.ai is built and operated by <strong>Adam Laboratory Inc.</strong>, a Delaware C-Corporation on a mission to empower businesses with intelligent AI tools.
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
                            <strong>Dooza.ai</strong> is the flagship product of Adam Laboratory Inc. — an AI-powered copilot that helps users draft, manage, and publish social media content across platforms like Facebook, Instagram, and LinkedIn.
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
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Social Media Copilot</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Dooza helps you draft, refine, and publish social media content across Facebook, Instagram, and LinkedIn — all from one place, powered by AI.
                            </p>
                        </div>
                        <div className="border border-slate-200 rounded-xl p-6">
                            <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4">
                                <Users className="w-5 h-5 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Workforce</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Build, grow, and scale your business with a team of AI employees that handle marketing, content creation, and automation around the clock.
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
                                    <td className="px-6 py-4 text-sm text-slate-900">Dooza.ai — AI-Powered Social Media Copilot</td>
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
                            <a href="mailto:support@dooza.ai" className="text-blue-600 hover:text-blue-800 underline">support@dooza.ai</a>
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
