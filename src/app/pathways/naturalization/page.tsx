import Link from 'next/link'
import { Award, CheckCircle2, Clock3, ExternalLink, FileText, Scale } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { N400_FEES, formatReviewDate } from '@/lib/policy/current-policy'

const requirements = [
  ['Age', 'Generally at least 18 when filing Form N-400.'],
  ['Lawful permanent residence', 'Generally 5 years as a lawful permanent resident for the standard pathway.'],
  ['Continuous residence', 'Generally 5 years immediately before filing, with special rules for absences.'],
  ['Physical presence', 'At least 30 months in the United States during the 5-year statutory period.'],
  ['State or USCIS district residence', 'Generally at least 3 months before filing.'],
  ['Good moral character', 'Required during the statutory period and through naturalization; USCIS may consider conduct outside the period in some circumstances.'],
  ['English and civics', 'Testing rules depend on filing date and may be modified or waived for qualifying applicants.'],
  ['Oath of Allegiance', 'Naturalization is completed after approval and administration of the oath, unless an exception applies.'],
]

export default function NaturalizationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-5 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-cyan-400/15 border border-cyan-400/20 flex items-center justify-center shrink-0"><Award className="w-8 h-8 text-cyan-300" /></div>
            <div>
              <div className="text-sm text-cyan-300 mb-2">8 U.S.C. § 1427 · INA § 316 · verified {formatReviewDate()}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className="gradient-text">Standard naturalization</span></h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">The usual 5-year route to citizenship for lawful permanent residents. This page separates durable statutory requirements from filing fees, testing rules, and processing information that change over time.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {requirements.map(([title, body]) => (
              <div key={title} className="glass-panel p-5">
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" /><div><h2 className="font-semibold text-white mb-1">{title}</h2><p className="text-sm text-[var(--text-secondary)] leading-relaxed">{body}</p></div></div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel p-7">
              <div className="flex items-center gap-3 mb-4"><FileText className="w-5 h-5 text-cyan-300" /><h2 className="text-xl font-semibold text-white">Current N-400 fees</h2></div>
              <div className="space-y-3 text-white/75">
                <div className="flex justify-between"><span>Online</span><strong className="text-white">${N400_FEES.online}</strong></div>
                <div className="flex justify-between"><span>Paper</span><strong className="text-white">${N400_FEES.paper}</strong></div>
                <div className="flex justify-between"><span>Reduced paper fee</span><strong className="text-emerald-300">${N400_FEES.reducedPaper}</strong></div>
                <div className="flex justify-between border-t border-white/10 pt-3"><span>Separate biometrics fee</span><strong className="text-emerald-300">${N400_FEES.separateBiometricsFee}</strong></div>
              </div>
              <Link href="/costs" className="inline-block mt-5 text-cyan-300 hover:text-cyan-200">See current fee rules and the 2026 proposal →</Link>
            </div>

            <div className="glass-panel p-7">
              <div className="flex items-center gap-3 mb-4"><Clock3 className="w-5 h-5 text-cyan-300" /><h2 className="text-xl font-semibold text-white">Processing time</h2></div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">CitizenApproved does not publish a fixed month range as if it were a forecast. USCIS processing times change by form, category and office; use the live government tool for the current service indicator.</p>
              <Link href="/processing" className="inline-block mr-5 text-cyan-300 hover:text-cyan-200">How to read processing times →</Link>
              <a href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">USCIS live tool <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="glass-panel p-7 mb-8">
            <div className="flex items-center gap-3 mb-4"><Scale className="w-5 h-5 text-cyan-300" /><h2 className="text-xl font-semibold text-white">Primary legal sources</h2></div>
            <div className="flex flex-wrap gap-4">
              <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1427" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">8 U.S.C. § 1427 <ExternalLink className="w-4 h-4" /></a>
              <a href="https://www.uscis.gov/n-400" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">Form N-400 <ExternalLink className="w-4 h-4" /></a>
              <Link href="/civics" className="text-cyan-300 hover:text-cyan-200">Civics test guide →</Link>
            </div>
          </div>

          <p className="text-xs text-white/40">Educational information, not legal advice. Last policy review: {formatReviewDate()}.</p>
        </div>
      </section>
    </main>
  )
}
