'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Effective Date: February 1, 2026
                    </p>
                </div>

                <div className="prose prose-slate max-w-none">
                    {/* Agreement to Terms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Agreement to Terms</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Adam Laboratory Inc., a Delaware C-Corporation (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of the Dooza.ai application, website, and related services (collectively, the &quot;Service&quot;).
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            By accessing or using the Service, you agree to be bound by these Terms and our{' '}
                            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>,
                            which is incorporated herein by reference. If you do not agree to these Terms, you must not access or use the Service.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            You must be at least 18 years old, or the age of majority in your jurisdiction, to use the Service. By using the Service, you represent and warrant that you meet this age requirement.
                        </p>
                    </section>

                    {/* Description of Service */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Service</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Dooza is an AI-powered copilot that helps users draft, manage, and publish social media content across Facebook, Instagram, and LinkedIn. The Service includes:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>AI-assisted content drafting and optimization for social media posts</li>
                            <li>Integration with Facebook, Instagram, and LinkedIn APIs for content publishing</li>
                            <li>Content scheduling and management tools</li>
                            <li>Analytics and engagement metrics for published content</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            Dooza acts as a copilot — all content publishing requires your explicit review and approval. We do not publish content on your behalf without your authorization.
                        </p>
                    </section>

                    {/* Account Registration */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Account Registration</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            To use certain features of the Service, you must create an account. When creating an account, you agree to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Provide accurate, current, and complete information</li>
                            <li>Maintain and promptly update your account information</li>
                            <li>Maintain the security and confidentiality of your login credentials</li>
                            <li>Accept responsibility for all activities that occur under your account</li>
                            <li>Notify us immediately of any unauthorized use of your account</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            We reserve the right to suspend or terminate your account if any information provided is inaccurate, misleading, or incomplete.
                        </p>
                    </section>

                    {/* Social Media Platform Connections */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Social Media Platform Connections</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            The Service allows you to connect your accounts on third-party social media platforms, including Facebook, Instagram, and LinkedIn. By connecting these accounts, you:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                            <li>Authorize Dooza to access your account data as described in our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link></li>
                            <li>Confirm that you have the authority to connect those accounts and grant us permission to act on your behalf</li>
                            <li>Acknowledge that your use of those platforms is also governed by their respective terms of service and policies</li>
                            <li>Understand that you may disconnect any platform at any time through your Dooza account settings or directly through the platform&apos;s settings</li>
                        </ul>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Platform-Specific Terms</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Your use of the Service in connection with Facebook and Instagram is subject to Meta&apos;s Platform Terms and Developer Policies. Your use of the Service in connection with LinkedIn is subject to LinkedIn&apos;s API Terms of Use. In the event of any conflict between these Terms and a platform&apos;s terms, the platform&apos;s terms shall govern with respect to data obtained from that platform.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">User Responsibility for Published Content</h3>
                        <p className="text-slate-600 leading-relaxed">
                            You are solely responsible for all content you publish through the Service to any connected social media platform. While Dooza&apos;s AI may assist in drafting content, you must review and approve all content before publishing. We do not guarantee that AI-generated content will comply with any platform&apos;s content policies, community guidelines, or applicable laws.
                        </p>
                    </section>

                    {/* Acceptable Use */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Acceptable Use</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Use the Service in any way that violates any applicable law, regulation, or the terms of any connected social media platform</li>
                            <li>Publish or distribute content that is defamatory, obscene, abusive, harassing, threatening, or that infringes on the rights of others</li>
                            <li>Use the Service for spam, bulk messaging, or unauthorized automated posting</li>
                            <li>Attempt to gain unauthorized access to the Service, other accounts, or any related systems or networks</li>
                            <li>Use the Service to collect, harvest, or scrape data from social media platforms beyond the scope of authorized functionality</li>
                            <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Service</li>
                            <li>Use the Service to discriminate against individuals based on race, ethnicity, national origin, religion, sex, sexual orientation, gender identity, age, disability, or any other protected category</li>
                            <li>Use the Service for surveillance, tracking, or monitoring of individuals without their consent</li>
                            <li>Sublicense, sell, resell, transfer, assign, or distribute access to the Service</li>
                            <li>Use the Service to build a competitive product or service</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Intellectual Property</h2>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Our Intellectual Property</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            The Service, including its design, features, functionality, software, text, graphics, logos, and all related intellectual property, is owned by Adam Laboratory Inc. and is protected by copyright, trademark, and other intellectual property laws. These Terms do not grant you any right, title, or interest in the Service beyond the limited right to use it as described herein.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Your Content</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            You retain ownership of the content you create using the Service. By using the Service, you grant us a limited, non-exclusive, worldwide, royalty-free license to use, store, and process your content solely for the purpose of providing and improving the Service. This license terminates when you delete your content or close your account.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">AI-Generated Content</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Content suggestions and drafts generated by our AI are provided as-is. You are responsible for reviewing, editing, and approving any AI-generated content before publishing. We make no warranties regarding the accuracy, originality, or appropriateness of AI-generated content.
                        </p>
                    </section>

                    {/* Payment & Subscription */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Payment &amp; Subscription</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Certain features of the Service may require a paid subscription. If you purchase a subscription:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>You agree to pay all fees associated with your selected plan</li>
                            <li>Subscription fees are billed in advance on a recurring basis (monthly or annually, depending on your plan)</li>
                            <li>All fees are non-refundable except as required by applicable law or as expressly stated in our refund policy</li>
                            <li>We reserve the right to change pricing with 30 days&apos; prior notice</li>
                            <li>You may cancel your subscription at any time; cancellation takes effect at the end of your current billing period</li>
                        </ul>
                    </section>

                    {/* Disclaimers */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Disclaimers</h2>
                        <div className="bg-slate-50 rounded-xl p-6">
                            <p className="text-slate-600 leading-relaxed mb-4">
                                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We do not warrant that: (a) the Service will be uninterrupted, secure, or error-free; (b) the results obtained from using the Service will be accurate or reliable; (c) AI-generated content will be free from errors, plagiarism, or intellectual property infringement; or (d) the Service will meet your specific requirements.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We are not responsible for any actions taken by third-party social media platforms, including changes to their APIs, terms of service, or policies that may affect your use of the Service.
                            </p>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Limitation of Liability</h2>
                        <div className="bg-slate-50 rounded-xl p-6">
                            <p className="text-slate-600 leading-relaxed mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ADAM LABORATORY INC. AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, REVENUE, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                            </p>
                        </div>
                    </section>

                    {/* Indemnification */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Indemnification</h2>
                        <p className="text-slate-600 leading-relaxed">
                            You agree to indemnify, defend, and hold harmless Adam Laboratory Inc. and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights, including any intellectual property or privacy rights; (d) any content you create, publish, or distribute through the Service; or (e) your violation of any applicable law or regulation.
                        </p>
                    </section>

                    {/* Termination */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Termination</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We may suspend or terminate your access to the Service at any time, with or without cause and with or without notice, if we reasonably believe that you have violated these Terms or any applicable law.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            You may terminate your account at any time by contacting us at{' '}
                            <a href="mailto:support@dooza.ai" className="text-blue-600 hover:text-blue-800 underline">support@dooza.ai</a>.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Upon termination: (a) your right to use the Service will immediately cease; (b) we will delete your account data in accordance with our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>; and (c) all provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
                        </p>
                    </section>

                    {/* Data Use & Privacy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Data Use &amp; Privacy</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Your use of the Service is also governed by our{' '}
                            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>,
                            which describes how we collect, use, store, and share your information. By using the Service, you consent to our data practices as described in the Privacy Policy.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            You acknowledge and agree that when you connect your social media accounts, we will access and process data from those platforms as described in our Privacy Policy. You may withdraw your consent and disconnect your social media accounts at any time.
                        </p>
                    </section>

                    {/* Third-Party Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Third-Party Services</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            The Service integrates with third-party platforms and services, including Facebook, Instagram, and LinkedIn. We are not responsible for the content, policies, or practices of any third-party services. Your use of third-party services is at your own risk and subject to those services&apos; own terms and policies.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            We do not guarantee that the Service will always be compatible with third-party platforms. Changes to third-party APIs or policies may affect the availability or functionality of certain features.
                        </p>
                    </section>

                    {/* Modifications to Terms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Modifications to Terms</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We reserve the right to modify these Terms at any time. When we make material changes, we will notify you by email (if you have an account) or by posting a prominent notice on our website at least 30 days before the changes take effect. The &quot;Effective Date&quot; at the top of this page indicates when the Terms were last updated. Your continued use of the Service after the updated Terms take effect constitutes your acceptance of the revised Terms.
                        </p>
                    </section>

                    {/* Governing Law & Dispute Resolution */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">15. Governing Law &amp; Dispute Resolution</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws provisions.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Any dispute arising out of or relating to these Terms or the Service shall be resolved exclusively in the federal or state courts located in the State of Delaware. You consent to the personal jurisdiction and venue of such courts.
                        </p>
                    </section>

                    {/* General Provisions */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">16. General Provisions</h2>
                        <ul className="list-disc pl-6 text-slate-600 space-y-3">
                            <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Adam Laboratory Inc. regarding the Service.</li>
                            <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</li>
                            <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</li>
                            <li><strong>Assignment:</strong> You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign our rights and obligations under these Terms without restriction.</li>
                            <li><strong>Force Majeure:</strong> We shall not be liable for any failure to perform our obligations where such failure results from circumstances beyond our reasonable control, including but not limited to natural disasters, acts of government, internet outages, or third-party platform outages.</li>
                        </ul>
                    </section>

                    {/* Contact Us */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">17. Contact Us</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <div className="bg-slate-50 rounded-xl p-6">
                            <p className="text-slate-700 font-medium mb-1">Adam Laboratory Inc.</p>
                            <p className="text-slate-600 text-sm mb-3">Dooza.ai is a product of Adam Laboratory Inc., a Delaware C-Corporation.</p>
                            <p className="text-slate-600">
                                Address: 131 Continental Dr, Suite 305, Newark, DE 19713, United States
                            </p>
                            <p className="text-slate-600">
                                Email:{' '}
                                <a href="mailto:support@dooza.ai" className="text-blue-600 hover:text-blue-800 underline">support@dooza.ai</a>
                            </p>
                            <p className="text-slate-600">
                                Website:{' '}
                                <a href="https://www.dooza.ai" className="text-blue-600 hover:text-blue-800 underline">https://www.dooza.ai</a>
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
