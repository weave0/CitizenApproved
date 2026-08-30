import Link from 'next/link'
import { Baby, CheckCircle2, ExternalLink, Flag, Globe2, Scale } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { LAST_POLICY_REVIEW } from '@/lib/policy/current-policy'

const section1401 = [
  ['(a)', 'Birth in the United States', 'A person born in the United States and subject to its jurisdiction.'],
  ['(b)', 'Birth in the United States to a member of an aboriginal tribe', 'The statute expressly protects citizenship without impairing tribal or other property rights.'],
  ['(c)', 'Birth abroad to two U.S. citizen parents', 'At least one parent must have resided in the United States or an outlying possession before the birth.'],
  ['(d)', 'Birth abroad to one U.S. citizen and one U.S. national parent', 'The citizen parent must satisfy the statute’s one-year continuous physical-presence requirement before the birth.'],
  ['(e)', 'Birth in an outlying possession', 'Applies where a parent is a U.S. citizen who satisfied the statute’s one-year physical-presence rule before the birth.'],
  ['(f)', 'Foundling rule', 'A child of unknown parentage found in the United States while under age five is treated as born in the United States unless shown otherwise before age 21.'],
  ['(g)', 'Birth abroad to one U.S. citizen and one alien parent', 'For the current general rule, the citizen parent must usually have five years of prior U.S. physical presence, at least two after age 14, subject to statutory credits and date-specific rules.'],
  ['(h)', 'Historical pre-1934 rule', 'A historical provision for certain people born abroad before noon Eastern Standard Time on May 24, 1934, to a U.S. citizen mother and alien father.'],
]

export default function BirthrightPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-5 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/15 border border-amber-400/20 flex items-center justify-center shrink-0"><Baby className="w-8 h-8 text-amber-300" /></div>
            <div>
              <div className="text-sm text-amber-300 mb-2">Fourteenth Amendment · 8 U.S.C. § 1401</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className="gradient-text">Citizenship at birth</span></h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">U.S. citizenship can be acquired at birth through birth in the United States under the Citizenship Clause or through statutory transmission rules for qualifying births abroad.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 md:p-8 mb-8">
            <div className="text-xs font-semibold tracking-wide text-emerald-300 mb-2">CURRENT LAW · SUPREME COURT · JUNE 30, 2026</div>
            <h2 className="text-2xl font-semibold text-white mb-3">Trump v. Barbara resolved the 2025 birthright-citizenship dispute</h2>
            <p className="text-white/80 leading-relaxed mb-4">The Supreme Court held that children born in the United States to parents who are unlawfully or temporarily present are “subject to the jurisdiction” of the United States and are citizens at birth under the Fourteenth Amendment’s Citizenship Clause.</p>
            <p className="text-white/70 leading-relaxed mb-5">The Court rejected the interpretation advanced in Executive Order 14160. That executive-order position is important history and policy context, but it is not the governing constitutional rule after the Court’s decision.</p>
            <a href="https://www.supremecourt.gov/opinions/25pdf/25-365_4hdj.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white">Read the Supreme Court opinion <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-panel p-7">
              <div className="flex items-center gap-3 mb-4"><Flag className="w-6 h-6 text-amber-300" /><h2 className="text-xl font-semibold text-white">Born in the United States</h2></div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">The Fourteenth Amendment and 8 U.S.C. § 1401(a) use the rule “born in the United States, and subject to the jurisdiction thereof.” The Supreme Court’s 2026 decision confirms that a parent’s unlawful or temporary immigration status does not, by itself, remove a U.S.-born child from that jurisdiction.</p>
              <p className="text-sm text-white/50">Narrow jurisdictional exceptions remain, including the traditional exception involving children of foreign diplomatic representatives with immunity.</p>
            </div>
            <div className="glass-panel p-7">
              <div className="flex items-center gap-3 mb-4"><Globe2 className="w-6 h-6 text-cyan-300" /><h2 className="text-xl font-semibold text-white">Born outside the United States</h2></div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">Citizenship at birth abroad is statutory and can depend on the parents’ citizenship or nationality, the citizen parent’s residence or physical presence, the child’s birth date, and in some cases rules concerning parentage.</p>
              <p className="text-sm text-white/50">Historical law matters. A rule that applies to a child born today may not be the rule that applied on an earlier birth date.</p>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5"><Scale className="w-6 h-6 text-cyan-300" /><h2 className="text-2xl font-semibold text-white">What 8 U.S.C. § 1401 actually says</h2></div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">The prior CitizenApproved page incorrectly labeled subsection (b) as the foundling provision. The foundling rule is subsection (f). This corrected map follows the current U.S. Code.</p>
            <div className="space-y-4">
              {section1401.map(([subsection, title, description]) => (
                <div key={subsection} className="glass-panel p-5">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-lg px-2.5 py-1 shrink-0">§1401{subsection}</span>
                    <div><h3 className="font-semibold text-white mb-1">{title}</h3><p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8 mb-8">
            <div className="flex items-start gap-3 mb-4"><CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" /><div><h2 className="text-xl font-semibold text-white mb-2">Use the birth-date-specific rule for births abroad</h2><p className="text-[var(--text-secondary)] leading-relaxed">Transmission requirements have changed over time, and 8 U.S.C. § 1409 contains additional rules concerning children born out of wedlock. CitizenApproved therefore avoids turning the five-year/two-after-age-14 rule into a universal answer for every historical birth.</p></div></div>
            <div className="flex flex-wrap gap-4 mt-5">
              <a href="https://uscode.house.gov/view.xhtml?edition=prelim&hl=false&req=granuleid%3AUSC-prelim-title8-section1401" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">Official U.S. Code § 1401 <ExternalLink className="w-4 h-4" /></a>
              <a href="https://www.uscis.gov/policy-manual/volume-12-part-h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">USCIS citizenship policy manual <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/40"><span>Educational information, not legal advice. Last policy review: {LAST_POLICY_REVIEW}.</span><Link href="/updates" className="text-cyan-300 hover:text-cyan-200 whitespace-nowrap">Current policy →</Link></div>
        </div>
      </section>
    </main>
  )
}
