'use client';

import { animate } from 'motion';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useState, useEffect, useRef } from 'react';

export default function TermsOfService() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const mainNavItems = [
    { href: '#acceptance', label: '$ ./introduction' },
    { href: '#service', label: '$ ./service-description' },
    { href: '#responsibilities', label: '$ ./user-requirements' },
    { href: '#intellectual-property', label: '$ ./data-usage' },
    { href: '#liability', label: '$ ./user-conduct' },
    { href: '#changes', label: '$ ./limitations' },
    { href: '#rate-limits', label: '$ ./rate-limits' },
    { href: '#ip', label: '$ ./intellectual-property' },
    { href: '#terms-changes', label: '$ ./terms-changes' },
    { href: '#termination', label: '$ ./termination' },
    { href: '#warranty', label: '$ ./warranty' },
    { href: '#liability-limits', label: '$ ./liability-limits' },
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
            <h1 className="text-3xl font-bold mb-6 text-white">Glorify Discord Bot - Terms of Service</h1>
            <p className="text-white mb-6">Last Updated: April 1, 2025</p>
            
            <div className="space-y-6">
              <section id="acceptance" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">1. Introduction</h2>
                <p className="leading-relaxed text-black">
                  Welcome to Glorify ("Bot"), a Discord bot that provides Dota 2 match data and statistics using the OpenDota API. 
                  By adding Glorify to your Discord server or using any of its features, you agree to be bound by these Terms of Service ("Terms"). 
                  If you do not agree to these Terms, please do not use the Bot.
                </p>
              </section>

              <section id="service" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">2. Description of Service</h2>
                <p className="leading-relaxed text-black">
                  Glorify is a Discord bot that allows users to:
                </p>
                <ul className="list-disc pl-6 text-black mt-2">
                  <li>View their recent Dota 2 match history</li>
                  <li>Access detailed statistics about their Dota 2 matches</li>
                  <li>Track performance metrics and trends</li>
                  <li>Retrieve data using the OpenDota API</li>
                </ul>
              </section>

              <section id="responsibilities" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">3. User Requirements</h2>
                <p className="leading-relaxed text-black">
                  To use Glorify, you must:
                </p>
                <ul className="list-disc pl-6 text-black mt-2">
                  <li>Be at least 13 years of age or the minimum age required in your country</li>
                  <li>Have a valid Discord account</li>
                  <li>Have the necessary permissions to add bots to a Discord server (if adding to a server)</li>
                  <li>Comply with Discord's Terms of Service and Community Guidelines</li>
                </ul>
              </section>

              <section id="intellectual-property" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">4. Data Usage and Privacy</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-black">4.1 Information Collection</h3>
                    <p className="leading-relaxed text-black mt-2">
                      Glorify collects and processes:
                    </p>
                    <ul className="list-disc pl-6 text-black mt-2">
                      <li>Discord user IDs to link accounts to Dota 2 profiles</li>
                      <li>Steam/Dota 2 IDs provided by users</li>
                      <li>Command usage data for improving bot functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">4.2 Third-Party Services</h3>
                    <p className="leading-relaxed text-black mt-2">
                      Glorify uses the OpenDota API to retrieve Dota 2 match data. By using Glorify, you acknowledge that:
                    </p>
                    <ul className="list-disc pl-6 text-black mt-2">
                      <li>Data retrieved from OpenDota is subject to their own Terms of Service and Privacy Policy</li>
                      <li>We are not responsible for the accuracy or availability of data provided by OpenDota</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">4.3 Data Retention</h3>
                    <p className="leading-relaxed text-black mt-2">
                      User data is stored only as long as necessary to provide the service. You may request deletion of your data by contacting us.
                    </p>
                  </div>
                </div>
              </section>

              <section id="liability" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">5. User Conduct</h2>
                <p className="leading-relaxed text-black">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-black mt-2">
                  <li>Use Glorify for any illegal purpose</li>
                  <li>Attempt to abuse, exploit, or circumvent limitations of the Bot</li>
                  <li>Interfere with the proper functioning of the Bot</li>
                  <li>Automate or script interactions with the Bot</li>
                  <li>Use the Bot to spam or harass other Discord users</li>
                  <li>Attempt to reverse engineer the Bot</li>
                </ul>
              </section>

              <section id="changes" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">6. Limitations and Availability</h2>
                <ul className="list-disc pl-6 text-black">
                  <li>Glorify is provided "as is" without warranties of any kind</li>
                  <li>Service may be interrupted due to maintenance, updates, or technical issues</li>
                  <li>We reserve the right to modify, suspend, or discontinue the Bot at any time</li>
                  <li>Service availability depends on Discord's platform and the OpenDota API</li>
                </ul>
              </section>

              <section id="rate-limits" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">7. Rate Limits and Fair Usage</h2>
                <ul className="list-disc pl-6 text-black">
                  <li>To ensure fair usage for all users, Glorify implements rate limits</li>
                  <li>Excessive requests may result in temporary or permanent restrictions</li>
                  <li>We reserve the right to limit access to users who abuse the service</li>
                </ul>
              </section>

              <section id="ip" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">8. Intellectual Property</h2>
                <ul className="list-disc pl-6 text-black">
                  <li>All rights, title, and interest in Glorify remain with the Bot owner</li>
                  <li>You may not copy, modify, distribute, or create derivative works based on the Bot</li>
                  <li>Dota 2 is a trademark of Valve Corporation, and we are not affiliated with Valve</li>
                </ul>
              </section>

              <section id="terms-changes" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">9. Changes to Terms</h2>
                <p className="leading-relaxed text-black">
                  We may update these Terms at any time. Continued use of Glorify following any changes constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section id="termination" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">10. Termination</h2>
                <p className="leading-relaxed text-black">
                  We reserve the right to terminate or restrict your access to Glorify at our discretion, particularly if you violate these Terms.
                </p>
              </section>

              <section id="warranty" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">11. Disclaimer of Warranty</h2>
                <p className="leading-relaxed text-black">
                  GLORIFY IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                  INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                  OR NON-INFRINGEMENT.
                </p>
              </section>

              <section id="liability-limits" className="bg-white p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-black">12. Limitation of Liability</h2>
                <p className="leading-relaxed text-black">
                  IN NO EVENT SHALL THE BOT OWNER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                  OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF GLORIFY.
                </p>
              </section>

              <section id="contact" className="bg-white p-4 rounded-md">
                <p className="leading-relaxed text-black">
                  By using Glorify, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>

              <section id="governing-law" className="bg-white p-4 rounded-md">
                <p className="leading-relaxed text-black">
                These Terms of Service are governed by the laws of Indonesia. Any disputes arising out of or related to these Terms of Service shall be subject to the exclusive jurisdiction of the courts of Indonesia.
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
