import Link from 'next/link'
import { ExternalLink, AlertTriangle, CheckCircle2, DollarSign, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { LAST_POLICY_REVIEW, N400_FEES } from '@/lib/policy/current-policy'

export default function CostsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              Verified August 29, 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5"><span className="gradient-text">Current naturalization fees</span></h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Form N-400 fees depend on how you file and whether you qualify for a reduced fee, a fee waiver, or a military exemption.
              There is no separate biometrics fee under the current schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel p-7">
              <div className="flex items-center gap-3 mb-5">
                <DollarSign className="w-6 h-6 text-cyan-300" />
                <h2 className="text-xl font-semibold text-white">General filing fee</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/70">Online Form N-400</span>
                  <strong className="text-2xl text-white">${N400_FEES.online}</strong>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/70">Paper Form N-400</span>
                  <strong className="text-2xl text-white">${N400_FEES.paper}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Separate biometrics fee</span>
                  <strong className="text-2xl text-emerald-300">$0</strong>
                </div>
              </div>
            </div>

            <div className="glass-panel p-7">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                <h2 className="text-xl font-semibold text-white">Lower-cost routes</h2>
              </div>
              <div className="space-y-5 text-[var(--text-secondary)]">
                <div>
                  <div className="flex justify-between gap-4 mb-1"><strong className="text-white">Reduced paper fee</strong><strong className="text-emerald-300">${N400_FEES.reducedPaper}</strong></div>
                  <p className="text-sm">Generally for documented household income above 150% and not more than 400% of the Federal Poverty Guidelines. The request is made in Part 10 of the paper N-400.</p>
                </div>
                <div>
                  <strong className="text-white block mb-1">Fee waiver</strong>
                  <p className="text-sm">USCIS currently permits qualifying N-400 fee-waiver requests, including based on a means-tested benefit, income at or below 150% of the Federal Poverty Guidelines, or extreme financial hardship.</p>
                </div>
                <div>
                  <strong className="text-white block mb-1">Qualifying military naturalization</strong>
                  <p className="text-sm">Current and former service members applying under the statutory military-naturalization provisions remain exempt from the N-400 filing fee.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-300 shrink-0 mt-1" />
              <div>
                <div className="text-xs font-semibold tracking-wide text-amber-300 mb-2">PROPOSED — NOT IN EFFECT</div>
                <h2 className="text-xl font-semibold text-white mb-3">DHS has proposed much higher N-400 fees</h2>
                <p className="text-white/75 leading-relaxed mb-3">
                  A June 23, 2026 proposed rule would raise the general N-400 fee to $1,280 online and $1,330 on paper and would eliminate the reduced-fee option and N-400 fee waivers. The public-comment deadline was August 24, 2026.
                </p>
                <p className="text-white font-medium">Those proposed amounts are not the current filing fees.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">Why the old calculator was removed</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A fee calculator can look authoritative after its assumptions have expired. The previous CitizenApproved tool encoded an outdated reduced-fee threshold and mixed older fee rules with current ones. Until volatile fee and poverty-guideline data are automatically verified, this page shows the current rule directly and links to USCIS for the final filing check.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://www.uscis.gov/g-1055" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              USCIS Fee Schedule <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://www.uscis.gov/n-400" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              Form N-400 <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://www.federalregister.gov/documents/2026/06/23/2026-12542/naturalization-application-fee-adjustments" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              2026 proposed rule <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/40">
            <span>Last policy review: {LAST_POLICY_REVIEW}</span>
            <Link href="/updates" className="text-cyan-300 hover:text-cyan-200">See all current policy updates →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
