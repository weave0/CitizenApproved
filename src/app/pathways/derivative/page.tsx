import Link from 'next/link'
import { AlertTriangle, ArrowRight, BookOpen, CheckCircle2, FileText, Globe2, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CITIZENSHIP_FORM_FEES, LAST_POLICY_REVIEW, formatReviewDate } from '@/lib/policy/current-policy'

const ina320 = [
  'At least one parent is a U.S. citizen by birth or naturalization.',
  'The child is under 18 when the statutory conditions are satisfied.',
  'The child is residing in the United States in the legal and physical custody of the citizen parent pursuant to a lawful admission for permanent residence.',
]

const ina322 = [
  'The child regularly resides outside the United States and is under 18.',
  'A qualifying U.S. citizen parent (or, in specified circumstances, a U.S. citizen grandparent) meets the physical-presence requirement.',
  'The child is in the legal and physical custody required by the statute and USCIS instructions.',
  'The child generally must be temporarily present in the United States pursuant to a lawful admission for the interview and oath, subject to special rules for children residing abroad with qualifying U.S. armed-forces members.',
]

export default function DerivativePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Children of U.S. citizens · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Citizenship through a U.S. citizen parent</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">
            “Derivative citizenship” is useful shorthand, but several different laws are involved. The decisive questions are when the child was born, where the child resides, the parent&apos;s citizenship and physical presence, immigration status, custody, and the law in effect when the conditions were met.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-5"><ShieldCheck className="w-7 h-7 text-green-400" /><h2 className="text-2xl font-bold">INA 320 · automatic acquisition after birth</h2></div>
            <p className="text-gray-300 mb-6">For the modern rule, citizenship arises by operation of law when all statutory conditions are satisfied. Form N-600 normally documents that citizenship; it does not create it.</p>
            <ul className="space-y-3 mb-6">{ina320.map(item => <li key={item} className="flex gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />{item}</li>)}</ul>
            <p className="text-sm text-gray-400">Congress also created special INA 320(c) rules for certain children residing abroad with U.S. citizen armed-forces members or U.S. government employees. Those cases should not be forced into the ordinary “residing in the United States” rule.</p>
          </article>

          <article className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-5"><Globe2 className="w-7 h-7 text-violet-400" /><h2 className="text-2xl font-bold">INA 322 · child regularly residing abroad</h2></div>
            <p className="text-gray-300 mb-6">INA 322 is different: it is an application-based path for a qualifying child who regularly resides outside the United States. Form N-600K is the operative application.</p>
            <ul className="space-y-3">{ina322.map(item => <li key={item} className="flex gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Current certificate fees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-7">
              <div className="text-sm text-purple-300 mb-2">FORM N-600</div>
              <h3 className="text-xl font-semibold mb-3">Certificate of Citizenship</h3>
              <div className="text-3xl font-bold mb-3">${CITIZENSHIP_FORM_FEES.N600.online.toLocaleString()} online · ${CITIZENSHIP_FORM_FEES.N600.paper.toLocaleString()} paper</div>
              <p className="text-gray-400">USCIS lists specific $0 categories, including qualifying adoption cases and current or former service members requesting a certificate for themselves. A fee waiver may also be available in qualifying cases.</p>
            </div>
            <div className="glass-panel p-7">
              <div className="text-sm text-violet-300 mb-2">FORM N-600K</div>
              <h3 className="text-xl font-semibold mb-3">Citizenship under INA 322</h3>
              <div className="text-3xl font-bold mb-3">${CITIZENSHIP_FORM_FEES.N600K.online.toLocaleString()} online · ${CITIZENSHIP_FORM_FEES.N600K.paper.toLocaleString()} paper</div>
              <p className="text-gray-400">Qualifying adoption cases can have a $0 filing fee, and USCIS lists fee-waiver availability for certain applicants. Always confirm the current G-1055 category before filing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="glass-panel p-7 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4"><BookOpen className="w-6 h-6 text-cyan-400" /><h2 className="text-2xl font-bold">Historical cases need historical law</h2></div>
            <p className="text-gray-300 mb-4">The Child Citizenship Act took effect February 27, 2001. Former INA 321 and earlier nationality statutes can still control people who reached the relevant age or satisfied the relevant conditions before later law took effect. Birth date, legitimation, adoption, parental marital history, custody, and the parent&apos;s naturalization date can all matter.</p>
            <p className="text-gray-400">CitizenApproved therefore does not reduce an older derivative-citizenship claim to a modern yes/no checklist. USCIS maintains nationality charts specifically because the historical rules differ.</p>
          </div>
          <div className="glass-panel p-7 border border-yellow-400/20">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold mb-3">Evidence is case-specific</h3>
            <p className="text-gray-400">Adoption decrees, legitimation records, custody orders, marriage/divorce records and evidence of a citizen parent&apos;s physical presence can be dispositive. The current Form N-600 and N-600K instructions list the evidence USCIS expects for each claim type.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8">
          <h2 className="text-2xl font-bold mb-5 flex items-center gap-3"><FileText className="w-6 h-6 text-cyan-400" />Primary sources</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <a className="text-cyan-300 hover:text-cyan-200" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1431" target="_blank" rel="noreferrer">8 U.S.C. § 1431 / INA 320 <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1433" target="_blank" rel="noreferrer">8 U.S.C. § 1433 / INA 322 <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://www.uscis.gov/n-600" target="_blank" rel="noreferrer">USCIS Form N-600 <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://www.uscis.gov/n-600k" target="_blank" rel="noreferrer">USCIS Form N-600K <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20241119-CustodyInAcquisitionOfCitizenship.pdf" target="_blank" rel="noreferrer">USCIS custody policy update <ArrowRight className="inline w-4 h-4" /></a>
            <Link className="text-cyan-300 hover:text-cyan-200" href="/updates">CitizenApproved current-policy ledger <ArrowRight className="inline w-4 h-4" /></Link>
          </div>
          <p className="text-xs text-gray-500 mt-6">Policy registry review date: {LAST_POLICY_REVIEW}. Educational information, not legal advice.</p>
        </div>
      </section>
    </main>
  )
}
