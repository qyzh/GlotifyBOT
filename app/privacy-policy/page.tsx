'use client';

import { animate } from 'motion';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useState, useEffect, useRef } from 'react';

export default function PrivacyPolicy() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const mainNavItems = [
    { href: '#introduction', label: '$ ./introduction' },
    { href: '#information-collection', label: '$ ./information-collection' },
    { href: '#data-usage', label: '$ ./data-usage' },
    { href: '#data-sharing', label: '$ ./data-sharing' },
    { href: '#security', label: '$ ./security' },
    { href: '#data-retention', label: '$ ./data-retention' },
    { href: '#children', label: '$ ./children-privacy' },
    { href: '#user-rights', label: '$ ./user-rights' },
    { href: '#changes', label: '$ ./policy-changes' },
    { href: '#contact', label: '$ ./contact' },
    { href: '#international', label: '$ ./international' },
    { href: '#legal-basis', label: '$ ./legal-basis' },
    { href: '#california', label: '$ ./california' },
    { href: '#consent', label: '$ ./consent' },
  ];

  const additionalNavItems = [
    { href: '/', label: '$ cd ..', isExternal: true },
    { href: '/terms-of-service', label: '$ cat terms.txt', isExternal: true },
    { href: '/privacy-policy', label: '$ cat privacy.txt', isExternal: true },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      animate(
        contentRef.current,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5 }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={toggleSidebar}
        mainNavItems={mainNavItems}
        additionalNavItems={additionalNavItems}
      />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div ref={contentRef} className="space-y-8">
          <div className="border border-white p-6 rounded-lg bg-black shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-white">Glorify Discord Bot - Privacy Policy</h1>
            <p className="text-white mb-6">Last Updated: April 1, 2025</p>
            
            <div className="space-y-6">
              <section id="introduction" className="bg-white p-4 rounded-md">
                <p className="leading-relaxed text-black">
                  This Privacy Policy explains how Glorify ("Bot", "we", "us", or "our") collects, uses, and discloses information about users ("you") 
                  when you interact with our Discord bot that provides Dota 2 match data using the OpenDota API.
                </p>
              </section>

              <section id="information-collection" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">1. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-black">1.1 User-Provided Information</h3>
                    <ul className="list-disc pl-6 text-black mt-2">
                      <li>Discord User ID: Used to identify you within our system</li>
                      <li>Steam ID/Dota 2 ID: Provided by you to link your gaming account</li>
                      <li>Server ID: To manage bot settings per Discord server</li>
                      <li>Command inputs: What you type when interacting with the bot</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">1.2 Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 text-black mt-2">
                      <li>Usage data: Commands used, frequency of use, and error encounters</li>
                      <li>Bot performance metrics: Response times and operational data</li>
                      <li>Discord server information: Name, member count, and other public server data</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">1.3 Information from Third Parties</h3>
                    <ul className="list-disc pl-6 text-black mt-2">
                      <li>Dota 2 match data retrieved from OpenDota API</li>
                      <li>Public player statistics available through OpenDota API</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="data-usage" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">2. How We Use Your Information</h2>
                <p className="leading-relaxed text-black">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-black mt-2">
                  <li>Provide and maintain the core functionality of Glorify</li>
                  <li>Link your Discord account to your Dota 2 profile</li>
                  <li>Retrieve and display your Dota 2 match statistics</li>
                  <li>Improve the bot's features and user experience</li>
                  <li>Monitor and enforce compliance with our Terms of Service</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Prevent fraudulent or unauthorized bot usage</li>
                </ul>
              </section>

              <section id="data-sharing" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">3. Information Sharing and Disclosure</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-black">3.1 Third-Party Services</h3>
                    <ul className="list-disc pl-6 text-black mt-2">
                      <li>We utilize the OpenDota API to retrieve Dota 2 match data</li>
                      <li>Your Steam ID/Dota 2 ID is shared with OpenDota to request specific match data</li>
                      <li>We do not sell your personal information to third parties</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">3.2 Legal Requirements</h3>
                    <p className="leading-relaxed text-black mt-2">
                      We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">3.3 Business Transfers</h3>
                    <p className="leading-relaxed text-black mt-2">
                      If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                    </p>
                  </div>
                </div>
              </section>

              <section id="security" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">4. Data Security</h2>
                <p className="leading-relaxed text-black">
                  We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section id="data-retention" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">5. Data Retention</h2>
                <p className="leading-relaxed text-black">
                  We retain your information for as long as necessary to provide you with the bot's functionality and fulfill the purposes outlined in this Privacy Policy. 
                  If you wish to request the deletion of your data, please contact us using the information provided in Section 9.
                </p>
              </section>

              <section id="children" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">6. Children's Privacy</h2>
                <p className="leading-relaxed text-black">
                  Glorify is not intended for individuals under the age of 13 (or the minimum age in your country). We do not knowingly collect personal information from children. 
                  If we discover that a child has provided us with personal information, we will delete that information.
                </p>
              </section>

              <section id="user-rights" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">7. Your Rights and Choices</h2>
                <p className="leading-relaxed text-black">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-black mt-2">
                  <li>The right to access information we have about you</li>
                  <li>The right to request correction of your data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to restrict or object to processing</li>
                  <li>The right to data portability</li>
                </ul>
                <p className="leading-relaxed text-black mt-2">
                  To exercise these rights, please contact us using the information in Section 9.
                </p>
              </section>

              <section id="changes" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">8. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed text-black">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last Updated" date at the top of this Privacy Policy. 
                  We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section id="contact" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">9. Contact Information</h2>
                <p className="leading-relaxed text-black">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at [your contact email].
                </p>
              </section>

              <section id="international" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">10. International Data Transfers</h2>
                <p className="leading-relaxed text-black">
                  Your information may be transferred to and processed in countries other than the one in which you reside. 
                  These countries may have data protection laws that differ from your country.
                </p>
              </section>

              <section id="legal-basis" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">11. Legal Basis for Processing (EU/EEA Users)</h2>
                <p className="leading-relaxed text-black">
                  If you are located in the EU or EEA, we collect and process your personal information on the following legal bases:
                </p>
                <ul className="list-disc pl-6 text-black mt-2">
                  <li>Performance of a contract when we provide you with the bot's services</li>
                  <li>Your consent when you choose to link your Dota 2 account</li>
                  <li>Our legitimate interests, which do not override your fundamental rights and freedoms</li>
                </ul>
              </section>

              <section id="california" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">12. California Privacy Rights</h2>
                <p className="leading-relaxed text-black">
                  California residents may have additional rights regarding their personal information under the California Consumer Privacy Act (CCPA). 
                  For more information, please contact us.
                </p>
              </section>

              <section id="consent" className="bg-white p-4 rounded-md">
                <p className="leading-relaxed text-black">
                  By using Glorify, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.
                </p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-white">
              <Link 
                href="/"
                className="inline-block px-6 py-2 border border-white rounded hover:bg-white hover:text-[#1a1a1a] transition-colors text-white"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
