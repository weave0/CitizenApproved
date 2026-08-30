import Link from 'next/link'
import { AlertTriangle, ArrowRight, CheckCircle2, Clock3, FileText, Medal, Shield, Star } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CITIZENSHIP_FORM_FEES, LAST_POLICY_REVIEW, formatReviewDate } from '@/lib/policy/current-policy'

const hostilityPeriods = [
  'April 6, 1917 – November 11, 1918',
  'September 1, 1939 – December 31, 1946',
  'June 25, 1950 – July 1, 1955',
  'February 28, 1961 – October 15, 1978',
  'August 2, 1990 – April 11, 1991',
  'September 11, 2001 – present',
]

export default function MilitaryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-green-300 mb-5">INA 328 & INA 329 · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Naturalization through U.S. military service</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Military naturalization is not one shortcut. INA 328 and INA 329 are separate statutory routes with different service, admission, residence and timing rules. Current and former service members should identify which provision actually fits their record.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-5"><Star className="w-7 h-7 text-blue-400" /><h2 className="text-2xl font-bold">INA 328 · one year of honorable service</h2></div>
            <p className="text-gray-300 mb-5">USCIS describes INA 328 as available to a person who has served honorably in active-duty or reserve service for one year or more and is a lawful permanent resident.</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />One year or more of qualifying honorable service.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />If separated, the separation must have been under honorable conditions.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />Lawful permanent resident status is required.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />If filing more than six months after separation, ordinary residence and physical-presence requirements can return.</li>
            </ul>
          </article>

          <article className="glass-panel p-8 border border-green-400/20">
            <div className="flex items-center gap-3 mb-5"><Medal className="w-7 h-7 text-green-400" /><h2 className="text-2xl font-bold">INA 329 · service during hostilities</h2></div>
            <p className="text-gray-300 mb-5">INA 329 can cover honorable active-duty service or service in the Selected Reserve of the Ready Reserve during a designated period of hostilities. There is no one-year minimum.</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />Qualifying service occurred during a designated hostility period.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />Service was honorable; if separated, separation was under honorable conditions.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />The statute has special admission/presence rules tied to enlistment, reenlistment, extension or induction.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />A lawful-permanent-resident status requirement does not apply in every INA 329 case.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6"><Clock3 className="w-6 h-6 text-violet-400" /><h2 className="text-3xl font-bold">Designated hostility periods</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{hostilityPeriods.map(period => <div key={period} className="glass-panel p-5 text-gray-300">{period}</div>)}</div>
          <p className="mt-5 text-sm text-gray-400">USCIS currently identifies the September 11, 2001 period as continuing until a presidential executive order ends the designation.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glass-panel p-7">
            <Shield className="w-7 h-7 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Form N-400 fee</h3>
            <div className="text-4xl font-bold text-green-400 mb-3">${CITIZENSHIP_FORM_FEES.N400.military}</div>
            <p className="text-gray-400">USCIS lists a $0 N-400 fee for applicants who meet INA 328 or 329 with respect to their military service.</p>
          </div>
          <div className="glass-panel p-7">
            <FileText className="w-7 h-7 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Form N-426</h3>
            <div className="text-4xl font-bold mb-3">${CITIZENSHIP_FORM_FEES.N426.paper}</div>
            <p className="text-gray-400">N-426 certifies military or naval service. Current and former service members should follow the current USCIS instructions for who certifies it and when it is required.</p>
          </div>
          <div className="glass-panel p-7">
            <AlertTriangle className="w-7 h-7 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Not “automatic” citizenship</h3>
            <p className="text-gray-400">Military service can waive or modify important naturalization requirements, but applicants still must satisfy the applicable statute, including character, English/civics unless exempt, attachment, and the oath.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8">
          <h2 className="text-2xl font-bold mb-5">Primary-source path</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <a className="text-cyan-300 hover:text-cyan-200" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1439" target="_blank" rel="noreferrer">8 U.S.C. § 1439 / INA 328 <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1440" target="_blank" rel="noreferrer">8 U.S.C. § 1440 / INA 329 <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://www.uscis.gov/sites/default/files/document/forms/m-599.pdf" target="_blank" rel="noreferrer">USCIS military naturalization guide (M-599) <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://www.uscis.gov/military/naturalization-through-military-service" target="_blank" rel="noreferrer">USCIS military naturalization <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://www.uscis.gov/n-426" target="_blank" rel="noreferrer">USCIS Form N-426 <ArrowRight className="inline w-4 h-4" /></a>
            <Link className="text-cyan-300 hover:text-cyan-200" href="/updates">Current-policy ledger <ArrowRight className="inline w-4 h-4" /></Link>
          </div>
          <p className="text-xs text-gray-500 mt-6">Policy registry review date: {LAST_POLICY_REVIEW}. Educational information, not legal advice.</p>
        </div>
      </section>
    </main>
  )
}
