'use client'

import { Navbar } from '@/components/Navbar'

export default function TermsPage() {
  const updated = 'June 10, 2026'

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 pt-28 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Terms of Use
        </h1>
        <p className="text-gray-300 mb-8">Last updated: {updated}</p>

        <section className="glass-panel p-6 md:p-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            By using CitizenApproved, you agree to these Terms of Use. If you do not agree, do not use the site.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Educational Use Only</h2>
            <p className="text-gray-300">
              CitizenApproved provides general educational information and is not legal advice. No attorney-client
              relationship is created by using this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Accuracy and Availability</h2>
            <p className="text-gray-300">
              We strive for accuracy, but laws and procedures can change. Content is provided “as is” without
              warranties of any kind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Acceptable Use</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Do not misuse or attempt to disrupt site operations.</li>
              <li>Do not scrape or republish content in violation of applicable law.</li>
              <li>Do not use the site for unlawful or abusive purposes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Intellectual Property</h2>
            <p className="text-gray-300">
              Site content, design, and branding are protected by applicable intellectual property laws unless
              otherwise noted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Limitation of Liability</h2>
            <p className="text-gray-300">
              To the fullest extent permitted by law, CitizenApproved and its operators are not liable for damages
              arising from your use of the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Changes to Terms</h2>
            <p className="text-gray-300">
              We may update these terms periodically. Continued use of the site after updates means you accept the
              revised terms.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
