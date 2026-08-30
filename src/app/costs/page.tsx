import Link from 'next/link'
import { ExternalLink, AlertTriangle, CheckCircle2, DollarSign, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CITIZENSHIP_FORM_FEES, LAST_POLICY_REVIEW, N400_FEES, formatReviewDate } from '@/lib/policy/current-policy'

const certificateFees = [
  ['N-600', CITIZENSHIP_FORM_FEES.N600.name, CITIZENSHIP_FORM_FEES.N600.online, CITIZENSHIP_FORM_FEES.N600.paper],
  ['N-600K', CITIZENSHIP_FORM_FEES.N600K.name, CITIZENSHIP_FORM_FEES.N600K.online, CITIZENSHIP_FORM_FEES.N600K.paper],
  ['N-565', CITIZENSHIP_FORM_FEES.N565.name, CITIZENSHIP_FORM_FEES.N565.online, CITIZENSHIP_FORM_FEES.N565.paper],
] as const

export default function CostsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              Verified {formatReviewDate()}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5"><span className="gradient-text">Current citizenship-related filing fees</span></h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">Filing fees depend on the form, filing method, and whether a reduced fee, fee waiver or statutory exemption applies. CitizenApproved keeps proposals separate from the amount USCIS charges today.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel p-7">
              <div className="flex items-center gap-3 mb-5"><DollarSign className="w-6 h-6 text-cyan-300" /><h2 className="text-xl font-semibold text-white">Form N-400</h2></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="text-white/70">Online</span><strong className="text-2xl text-white">${N400_FEES.online}</strong></div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="text-white/70">Paper</span><strong className="text-2xl text-white">${N400_FEES.paper}</strong></div>
                <div className="flex items-center justify-between"><span className="text-white/70">Separate biometrics fee</span><strong className="text-2xl text-emerald-300">${N400_FEES.separateBiometricsFee}</strong></div>
              </div>
            </div>

            <div className="glass-panel p-7">
              <div className="flex items-center gap-3 mb-5"><CheckCircle2 className="w-6 h-6 text-emerald-300" /><h2 className="text-xl font-semibold text-white">N-400 lower-cost categories</h2></div>
              <div className="space-y-5 text-[var(--text-secondary)]">
                <div><div className="flex justify-between gap-4 mb-1"><strong className="text-white">Reduced paper fee</strong><strong className="text-emerald-300">${N400_FEES.reducedPaper}</strong></div><p className="text-sm">{N400_FEES.reducedFeeIncomeRange}. The reduced-fee request is made with a paper N-400.</p></div>
                <div><strong className="text-white block mb-1">Fee waiver</strong><p className="text-sm">Current criteria include: {N400_FEES.feeWaiverIncomeThreshold}.</p></div>
                <div><strong className="text-white block mb-1">INA 328 / INA 329 military filing</strong><p className="text-sm">Current N-400 fee: ${N400_FEES.military} for applicants who meet the military-service filing category.</p></div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-5">Certificates and related forms</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {certificateFees.map(([form, name, online, paper]) => (
              <div key={form} className="glass-panel p-6">
                <div className="text-sm text-cyan-300 mb-2">FORM {form}</div>
                <h3 className="font-semibold mb-4 min-h-12">{name}</h3>
                <div className="text-2xl font-bold">${online.toLocaleString()} <span className="text-sm font-normal text-gray-500">online</span></div>
                <div className="text-2xl font-bold mt-1">${paper.toLocaleString()} <span className="text-sm font-normal text-gray-500">paper</span></div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="glass-panel p-6"><div className="text-sm text-cyan-300 mb-2">FORM N-470</div><h3 className="font-semibold mb-2">{CITIZENSHIP_FORM_FEES.N470.name}</h3><div className="text-3xl font-bold">${CITIZENSHIP_FORM_FEES.N470.paper}</div><p className="text-sm text-gray-400 mt-2">USCIS lists fee-waiver availability for certain applicants.</p></div>
            <div className="glass-panel p-6"><div className="text-sm text-cyan-300 mb-2">$0 FORMS</div><h3 className="font-semibold mb-2">N-426, N-644 and N-648</h3><p className="text-gray-400">The current G-1055 lists a $0 general filing fee for these forms. Eligibility to use a form is a separate question from its fee.</p></div>
          </div>

          <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4"><AlertTriangle className="w-6 h-6 text-amber-300 shrink-0 mt-1" /><div><div className="text-xs font-semibold tracking-wide text-amber-300 mb-2">PROPOSED — NOT IN EFFECT</div><h2 className="text-xl font-semibold text-white mb-3">DHS has proposed much higher N-400 fees</h2><p className="text-white/75 leading-relaxed mb-3">A June 23, 2026 proposed rule would raise the general N-400 fee to $1,280 online and $1,330 on paper and would eliminate the reduced-fee option and most N-400 fee waivers. The public-comment deadline was August 24, 2026.</p><p className="text-white font-medium">Those proposed amounts are not the current filing fees.</p></div></div>
          </div>

          <div className="glass-panel p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">Exemptions matter</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">The general amount is not always the amount due. Current G-1055 categories include specific $0 N-600/N-600K adoption cases, a $0 N-600 category for current or former service members requesting a certificate for themselves, fee-waiver categories for certain forms, and $0 military N-400 filings under INA 328/329. Always match your filing category to the current fee schedule.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://www.uscis.gov/g-1055" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">USCIS Fee Schedule <ExternalLink className="w-4 h-4" /></a>
            <a href="https://www.uscis.gov/n-400" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">Form N-400 <ExternalLink className="w-4 h-4" /></a>
            <a href="https://www.federalregister.gov/documents/2026/06/23/2026-12542/naturalization-application-fee-adjustments" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">2026 proposed rule <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/40"><span>Last policy review: {LAST_POLICY_REVIEW}</span><Link href="/updates" className="text-cyan-300 hover:text-cyan-200">See all current policy updates →</Link></div>
        </div>
      </section>
    </main>
  )
}
