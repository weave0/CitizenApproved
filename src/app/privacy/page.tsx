'use client'

import { Navbar } from '@/components/Navbar'

export default function PrivacyPage() {
  const updated = 'June 10, 2026'

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent mb-4">
          Privacy Policy
        </h1>
        <p className="text-white/60 mb-8">Last updated: {updated}</p>

        <section className="glass-panel p-6 md:p-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            CitizenApproved is an educational website that explains U.S. citizenship pathways and legal references.
            We keep data collection minimal and do not sell personal information.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Basic analytics information (for example, page views and device type).</li>
              <li>Technical logs required for security, reliability, and abuse prevention.</li>
              <li>Any details you choose to provide through contact forms or email.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>To operate, secure, and improve the site.</li>
              <li>To respond to support or contact requests.</li>
              <li>To understand usage patterns and improve educational content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Cookies and Analytics</h2>
            <p className="text-gray-400">
              We may use cookies or similar technologies for basic functionality and analytics. You can control
              cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Third-Party Services</h2>
            <p className="text-gray-400">
              We may rely on hosting, analytics, and infrastructure vendors to run this website. These providers
              process data only as needed to provide their services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Your Choices</h2>
            <p className="text-gray-400">
              You may request correction or deletion of personal data you submitted directly to us, subject to
              legal or security obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
            <p className="text-gray-400">
              Questions about this policy can be sent through the site contact channel.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
