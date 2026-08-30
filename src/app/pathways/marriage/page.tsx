import Link from 'next/link'
import { CheckCircle2, ExternalLink, Heart, Users } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { N400_FEES, formatReviewDate } from '@/lib/policy/current-policy'

const requirements = [
  'Be at least 18 years old when filing Form N-400.',
  'Be a lawful permanent resident for at least 3 years immediately before filing, subject to the applicable rules.',
  'Have been married to the same U.S. citizen spouse for at least 3 years immediately before filing.',
  'Have lived in marital union with that U.S. citizen spouse for the 3 years immediately before filing.',
  'The spouse must have been a U.S. citizen for that 3-year period.',
  'Remain legally married to the U.S. citizen spouse through the Oath of Allegiance for eligibility under INA 319(a).',
  'Meet the applicable continuous-residence, physical-presence, good-moral-character, English, civics, and oath requirements.',
]

export default function MarriagePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-5 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-pink-400/15 border border-pink-400/20 flex items-center justify-center shrink-0"><Users className="w-8 h-8 text-pink-300" /></div>
            <div>
              <div className="text-sm text-pink-300 mb-2">8 U.S.C. § 1430 · INA § 319(a) · verified {formatReviewDate()}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className="gradient-text">Naturalization through marriage</span></h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">A qualifying spouse of a U.S. citizen may use a 3-year statutory period instead of the standard 5-year period. Marriage alone does not confer citizenship, and the marital requirements are specific.</p>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-5"><Heart className="w-6 h-6 text-pink-300" /><h2 className="text-xl font-semibold text-white">Core INA 319(a) requirements</h2></div>
            <div className="space-y-4">
              {requirements.map((item) => (
                <div key={item} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" /><p className="text-[var(--text-secondary)] leading-relaxed">{item}</p></div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-6 md:p-8 mb-8">
            <div className="text-xs font-semibold tracking-wide text-amber-300 mb-2">IMPORTANT DISTINCTION</div>
            <h2 className="text-xl font-semibold text-white mb-3">“Living in marital union” and “remaining married” are not the same requirement</h2>
            <p className="text-white/75 leading-relaxed mb-3">USCIS policy explains that the couple generally must have lived together in marital union for the 3 years immediately before filing. After filing, the applicant does not have to continue living in marital union through naturalization, but the valid marriage itself generally must continue until the applicant takes the Oath of Allegiance.</p>
            <p className="text-white/75 leading-relaxed">If the marriage terminates before the oath, eligibility under the ordinary INA 319(a) spouse provision ends. Separate statutory provisions can apply to some battered spouses and certain surviving family members of U.S. service members; those should not be confused with the ordinary 3-year marriage route.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel p-7">
              <h2 className="text-xl font-semibold text-white mb-4">Current Form N-400 fee</h2>
              <div className="space-y-3 text-white/75">
                <div className="flex justify-between"><span>Online</span><strong className="text-white">${N400_FEES.online}</strong></div>
                <div className="flex justify-between"><span>Paper</span><strong className="text-white">${N400_FEES.paper}</strong></div>
                <div className="flex justify-between"><span>Separate biometrics fee</span><strong className="text-emerald-300">${N400_FEES.separateBiometricsFee}</strong></div>
              </div>
              <Link href="/costs" className="inline-block mt-5 text-cyan-300 hover:text-cyan-200">Reduced fees, waivers, and proposed changes →</Link>
            </div>

            <div className="glass-panel p-7">
              <h2 className="text-xl font-semibold text-white mb-4">Verify with primary sources</h2>
              <div className="space-y-3">
                <a href="https://www.uscis.gov/sites/default/files/document/forms/n-400instr.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200">USCIS N-400 instructions <ExternalLink className="w-4 h-4" /></a>
                <a href="https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20181012-MaritalUnion.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200">USCIS marital-union policy <ExternalLink className="w-4 h-4" /></a>
                <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1430" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200">8 U.S.C. § 1430 <ExternalLink className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          <p className="text-xs text-white/40">Educational information, not legal advice. Last policy review: {formatReviewDate()}.</p>
        </div>
      </section>
    </main>
  )
}
