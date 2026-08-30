import Link from 'next/link'
import { ArrowRight, ExternalLink, FileText, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CITIZENSHIP_FORM_FEES, formatReviewDate } from '@/lib/policy/current-policy'

const forms = [
  ['N-400', 'Application for Naturalization', 'Naturalization under INA 316, 319, 328, 329 and other provisions.', 'https://www.uscis.gov/n-400'],
  ['N-470', 'Application to Preserve Residence for Naturalization Purposes', 'For certain permanent residents employed abroad who seek to preserve continuous residence for naturalization.', 'https://www.uscis.gov/n-470'],
  ['N-565', 'Application for Replacement Naturalization/Citizenship Document', 'Replace or correct certain naturalization/citizenship documents or request a special certificate.', 'https://www.uscis.gov/n-565'],
  ['N-600', 'Application for Certificate of Citizenship', 'Evidence of citizenship acquired or derived through a parent; the certificate documents citizenship rather than creating it.', 'https://www.uscis.gov/n-600'],
  ['N-600K', 'Application for Citizenship and Issuance of Certificate Under Section 322', 'Application-based citizenship process for qualifying children who regularly reside outside the United States.', 'https://www.uscis.gov/n-600k'],
  ['N-426', 'Request for Certification of Military or Naval Service', 'Military-service certification used in qualifying military naturalization cases.', 'https://www.uscis.gov/n-426'],
  ['N-644', 'Application for Posthumous Citizenship', 'Request for posthumous citizenship under the military-service statute.', 'https://www.uscis.gov/n-644'],
  ['N-648', 'Medical Certification for Disability Exceptions', 'Medical certification supporting a statutory exception to English and/or civics testing.', 'https://www.uscis.gov/n-648'],
] as const

function feeFor(form: string) {
  const entry = CITIZENSHIP_FORM_FEES[form as keyof typeof CITIZENSHIP_FORM_FEES]
  if (!entry) return null
  if ('online' in entry && 'paper' in entry) return `$${entry.online.toLocaleString()} online · $${entry.paper.toLocaleString()} paper`
  if ('paper' in entry) return entry.paper === 0 ? '$0 general fee' : `$${entry.paper.toLocaleString()} paper`
  return null
}

export default function FormsGuidePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Current forms guide · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Citizenship and naturalization forms</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">The form number is only the beginning. Edition dates, filing method, fee category and evidence instructions can change. CitizenApproved links to the live USCIS form page rather than preserving downloadable copies that can quietly become obsolete.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {forms.map(([number, title, use, url]) => (
            <article key={number} className="glass-panel p-6 md:p-7 grid md:grid-cols-[110px_1fr_auto] gap-5 items-start">
              <div><div className="text-2xl font-mono font-bold text-cyan-300">{number}</div><div className="text-xs text-gray-500 mt-2">{feeFor(number)}</div></div>
              <div><h2 className="text-xl font-semibold mb-2">{title}</h2><p className="text-gray-400">{use}</p></div>
              <a href={url} target="_blank" rel="noreferrer" className="text-cyan-300 text-sm whitespace-nowrap">USCIS form page <ExternalLink className="inline w-4 h-4" /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <ShieldCheck className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Before you file</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Open the current USCIS form page and confirm the accepted edition date.</li>
              <li>Read the current form instructions, not a saved copy from an earlier filing.</li>
              <li>Use Form G-1055 for the current fee and exemption category.</li>
              <li>Confirm whether online filing is available for your filing category.</li>
              <li>Keep a complete copy of what you submit and every USCIS notice.</li>
            </ul>
          </div>
          <div className="glass-panel p-8">
            <FileText className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Fee waivers are form-specific</h2>
            <p className="text-gray-300 mb-4">Form I-912 is USCIS&apos;s request for a fee waiver, but not every form or filing category is eligible. The current G-1055 fee schedule identifies which forms accept a waiver and which statutory $0 categories apply.</p>
            <a href="https://www.uscis.gov/i-912" target="_blank" rel="noreferrer" className="text-cyan-300">Form I-912 <ArrowRight className="inline w-4 h-4" /></a>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-5 text-sm">
          <Link href="/costs" className="text-cyan-300">Current fees <ArrowRight className="inline w-4 h-4" /></Link>
          <Link href="/documents" className="text-cyan-300">Evidence guide <ArrowRight className="inline w-4 h-4" /></Link>
          <a href="https://www.uscis.gov/forms/all-forms" target="_blank" rel="noreferrer" className="text-cyan-300">All USCIS forms <ArrowRight className="inline w-4 h-4" /></a>
        </div>
      </section>
    </main>
  )
}
