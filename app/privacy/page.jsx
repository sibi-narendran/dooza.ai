'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Effective Date: February 1, 2026
                    </p>
                </div>

                <div className="prose prose-slate max-w-none">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Introduction</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Dooza (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a product of Adam Laboratory Inc., a Delaware C-Corporation. Dooza is an AI-powered copilot application and service that helps users draft and post social media content across Facebook, Instagram, and LinkedIn. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application, website, and related services (collectively, the &quot;Service&quot;).
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            By accessing or using the Service, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this policy, please do not access or use the Service.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Account Information</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            When you create an account, we collect your name, email address, and any profile information you choose to provide. If you sign up using a third-party service (such as Google), we receive basic profile information from that provider.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Usage Data</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We automatically collect information about how you interact with our Service, including pages visited, features used, session duration, device type, browser type, operating system, IP address, device identifiers, and referring URLs. This data is collected each time you access the Service.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Content You Create</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We store the social media content you draft, edit, and publish through Dooza, including text, images, and scheduling preferences. This data is necessary to provide the AI copilot functionality.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Connected Social Media Account Data</h3>
                        <p className="text-slate-600 leading-relaxed">
                            When you connect your social media accounts, we access certain data from those platforms as described in the &quot;Social Media Platform Data&quot; section below. We only access the data necessary to provide our Service.
                        </p>
                    </section>

                    {/* Social Media Platform Data */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Social Media Platform Data</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Dooza integrates with third-party social media platforms to help you manage and publish content. Below is a detailed description of the data we access from each platform, when it is collected, and how it is used.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            For each platform, data is collected at the time you connect your account (initial authorization) and on an ongoing basis each time you use the Service to draft, manage, or publish content. We access your data only when you actively use the Service or when necessary to fulfill a scheduled action you have approved.
                        </p>

                        <div className="bg-slate-50 rounded-xl p-6 mb-6">
                            <h3 className="text-xl font-medium text-slate-800 mb-3">Facebook</h3>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                When you connect your Facebook account via Facebook Login and the Facebook Graph API, we access:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-3">
                                <li>Your basic profile information (name, profile picture, user ID)</li>
                                <li>Facebook Pages you manage, including page names, page IDs, and page access tokens</li>
                                <li>The ability to draft and publish posts to your Facebook Pages on your behalf</li>
                                <li>Page insights and engagement metrics for content published through Dooza</li>
                            </ul>
                            <p className="text-slate-600 text-sm">
                                <strong>Purpose:</strong> This data is used solely to enable you to manage and publish content to your Facebook Pages through the Dooza copilot. We do not use Facebook platform data for any purpose other than providing the Service to you.
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6 mb-6">
                            <h3 className="text-xl font-medium text-slate-800 mb-3">Instagram</h3>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                When you connect your Instagram account via the Instagram Graph API, we access:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-3">
                                <li>Your business or creator profile information (username, profile picture, bio, account ID)</li>
                                <li>Media publishing capabilities to create and publish content on your behalf</li>
                                <li>Content drafting and scheduling functionality</li>
                                <li>Basic engagement metrics for content published through Dooza</li>
                            </ul>
                            <p className="text-slate-600 text-sm">
                                <strong>Purpose:</strong> This data is used solely to enable you to manage and publish content to your Instagram account through the Dooza copilot. We do not use Instagram platform data for any purpose other than providing the Service to you.
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6 mb-6">
                            <h3 className="text-xl font-medium text-slate-800 mb-3">LinkedIn</h3>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                When you connect your LinkedIn account via the LinkedIn API, we access:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-3">
                                <li>Your profile information (name, headline, profile picture, member ID)</li>
                                <li>Company/organization pages you manage</li>
                                <li>The ability to draft and publish posts to your profile or company pages</li>
                                <li>Basic engagement data for content published through Dooza</li>
                            </ul>
                            <p className="text-slate-600 text-sm">
                                <strong>Purpose:</strong> This data is used solely to enable you to manage and publish content to your LinkedIn profile and pages through the Dooza copilot. We do not use LinkedIn platform data for any purpose other than providing the Service to you.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <p className="text-slate-700 leading-relaxed font-medium">
                                Important: Dooza acts as a copilot — users always initiate and approve content before it is published. We do not perform automated bulk posting. All publishing actions require explicit user approval.
                            </p>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                            <li>Power the AI copilot to help you draft, refine, and optimize social media content</li>
                            <li>Publish content to your connected social media platforms with your explicit approval</li>
                            <li>Provide, maintain, and improve our Service</li>
                            <li>Personalize your experience and provide content recommendations</li>
                            <li>Communicate with you about your account, updates, and promotional offers</li>
                            <li>Monitor and analyze usage patterns to improve service quality</li>
                            <li>Detect, prevent, and address technical issues and security threats</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed">
                            We process platform data from Facebook, Instagram, and LinkedIn strictly as described above and only for the purpose of providing the Service. We do not use platform data for independent advertising, data brokering, or any purpose unrelated to the Service.
                        </p>
                    </section>

                    {/* Prohibited Uses of Platform Data */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Prohibited Uses of Platform Data</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We are committed to the responsible use of data obtained from social media platforms. We will never:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Sell, license, rent, or lease platform data to any third party</li>
                            <li>Use platform data for surveillance, tracking, or monitoring of individuals</li>
                            <li>Use platform data to discriminate against any person based on race, ethnicity, color, national origin, religion, age, sex, sexual orientation, gender identity, family status, disability, medical or genetic condition, or any other protected category</li>
                            <li>Use platform data to build or augment user profiles for purposes unrelated to the Service</li>
                            <li>Attempt to re-identify or de-anonymize any anonymized or aggregated data</li>
                            <li>Use bots, scrapers, or automated tools to collect platform data beyond the scope of authorized API access</li>
                        </ul>
                    </section>

                    {/* Data Sharing & Disclosure */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Sharing &amp; Disclosure</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We do not sell, rent, or license your personal information or any data obtained from social media platforms. We may share your information only in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>
                                <strong>Service Providers:</strong> We share data with trusted third-party vendors who help us operate our Service (e.g., cloud hosting, analytics, customer support). These providers are bound by contractual obligations to protect your data and may only process it on our behalf and in accordance with our instructions.
                            </li>
                            <li>
                                <strong>Social Media Platforms:</strong> When you choose to publish content, we transmit that content to the connected social media platform (Facebook, Instagram, or LinkedIn) on your behalf.
                            </li>
                            <li>
                                <strong>Legal Obligations:</strong> We may disclose your information if required by law, regulation, legal process, or governmental request.
                            </li>
                            <li>
                                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice on our Service before your data is transferred and becomes subject to a different privacy policy.
                            </li>
                            <li>
                                <strong>With Your Consent:</strong> We may share your information for other purposes with your explicit consent.
                            </li>
                        </ul>
                    </section>

                    {/* Data Retention & Deletion */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Retention &amp; Deletion</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We retain your personal information for as long as your account is active or as needed to provide you with our Service. We also retain data as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Platform Data Retention</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Data obtained from social media platform APIs (Facebook, Instagram, LinkedIn) is retained only for as long as necessary to provide the Service. Engagement metrics and analytics data may be retained for up to 30 days. We comply with all platform-specific data retention requirements, including LinkedIn&apos;s requirement to delete profile data within the timeframes specified in their API terms.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Account Deletion</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            You may request deletion of your account and all associated data at any time by emailing{' '}
                            <a href="mailto:support@dooza.ai" className="text-blue-600 hover:text-blue-800 underline">support@dooza.ai</a>.
                            Upon receiving a valid deletion request, we will delete your data within 30 days, except where retention is required by law.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Disconnecting Social Media Accounts</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            When you disconnect a social media account from Dooza, we immediately revoke our access tokens and stop accessing data from that platform. All platform-specific data (profile info, page tokens, engagement metrics) associated with that connection will be deleted within 30 days.
                        </p>

                        <h3 className="text-xl font-medium text-slate-800 mb-3">Platform Account Closure</h3>
                        <p className="text-slate-600 leading-relaxed">
                            If you close or deactivate your account on a connected social media platform (Facebook, Instagram, or LinkedIn), we will delete all data collected from that platform upon becoming aware of the account closure, in compliance with each platform&apos;s developer terms.
                        </p>
                    </section>

                    {/* Consent & Consent Withdrawal */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Consent &amp; Consent Withdrawal</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            By connecting your social media accounts to Dooza, you provide your consent for us to access and process your data as described in this Privacy Policy. You may withdraw your consent at any time by:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                            <li><strong>Disconnecting your account:</strong> Remove the connection to any social media platform from within your Dooza account settings. This immediately stops all data access from that platform.</li>
                            <li><strong>Revoking permissions:</strong> You can revoke Dooza&apos;s access directly from your Facebook, Instagram, or LinkedIn account settings at any time.</li>
                            <li><strong>Contacting us:</strong> Email <a href="mailto:support@dooza.ai" className="text-blue-600 hover:text-blue-800 underline">support@dooza.ai</a> to request that we stop processing your data and delete all platform data associated with your account.</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed">
                            Withdrawing consent does not affect the lawfulness of any processing carried out before the withdrawal. After consent is withdrawn, we will stop accessing your data from the relevant platform and delete the associated platform data within 30 days.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We implement appropriate technical and organizational measures to protect your personal information, including:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                            <li>Strict access controls and authentication for internal systems</li>
                            <li>Secure storage and handling of OAuth tokens used for social media platform connections</li>
                            <li>Regular security assessments and monitoring</li>
                            <li>Employee access limited to those who require it for their job function</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            While we strive to protect your information, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Depending on your location, you may have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                            <li><strong>Right to Correction:</strong> Request that we correct inaccurate or incomplete personal data.</li>
                            <li><strong>Right to Deletion:</strong> Request that we delete your personal data, subject to certain exceptions.</li>
                            <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent to data processing at any time (see &quot;Consent &amp; Consent Withdrawal&quot; above).</li>
                            <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications at any time.</li>
                            <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                            <li><strong>Right to Restrict Processing:</strong> Request that we limit how we process your data in certain circumstances.</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            To exercise any of these rights, please contact us at{' '}
                            <a href="mailto:support@dooza.ai" className="text-blue-600 hover:text-blue-800 underline">support@dooza.ai</a>.
                            We will respond to your request within 30 days, or as required by applicable law.
                        </p>
                    </section>

                    {/* International Data Transfers */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">International Data Transfers</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Adam Laboratory Inc. is based in the United States. If you access the Service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            By using the Service, you consent to the transfer of your data to the United States and other jurisdictions. We take appropriate safeguards to ensure your data is protected in accordance with this Privacy Policy and applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
                        </p>
                    </section>

                    {/* Cookies & Tracking */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies &amp; Tracking</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We use cookies and similar tracking technologies to enhance your experience. These include:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li><strong>Essential Cookies:</strong> Required for the Service to function properly (e.g., session management, authentication).</li>
                            <li><strong>Analytics Cookies:</strong> We use Google Analytics to understand how users interact with our Service and to improve our offerings.</li>
                            <li><strong>Marketing Cookies:</strong> We use Facebook Pixel to measure the effectiveness of our advertising and to deliver relevant ads.</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our Service.
                        </p>
                    </section>

                    {/* Third-Party Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Services</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Our Service integrates with and relies on the following categories of third-party services:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li><strong>Social Media Platforms:</strong> Facebook, Instagram, and LinkedIn for content publishing and account management.</li>
                            <li><strong>Analytics Providers:</strong> Google Analytics for usage analysis and Facebook Pixel for advertising measurement.</li>
                            <li><strong>Infrastructure:</strong> Cloud hosting and content delivery providers for platform reliability and performance.</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            Each third-party service has its own privacy policy. We encourage you to review the privacy policies of Facebook, Instagram, and LinkedIn for information about how they handle your data.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Children&apos;s Privacy</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Dooza is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information promptly. If you believe a child under 13 has provided us with personal information, please contact us at{' '}
                            <a href="mailto:support@dooza.ai" className="text-blue-600 hover:text-blue-800 underline">support@dooza.ai</a>.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email (if you have an account) or by posting a prominent notice on our website. The &quot;Effective Date&quot; at the top of this policy indicates when it was last updated. Your continued use of the Service after changes are posted constitutes your acceptance of the revised policy. We retain all prior versions of this Privacy Policy and will provide them upon request.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
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
