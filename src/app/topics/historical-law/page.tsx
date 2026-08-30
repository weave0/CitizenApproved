import Link from 'next/link'
import { ArrowRight, Baby, CalendarRange, History, SearchCheck, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const method = [
  ['Identify the claimed event', 'Is the claim citizenship at birth, automatic citizenship after birth, or an application-based process such as former/current child-citizenship law?'],
  ['Fix the controlling dates', 'Record the person’s birth date, each parent’s citizenship date, marriage/legitimation/adoption dates, LPR admission, custody/residence facts, and the person’s age when each condition occurred.'],
  ['Find the statute in force then', 'Use the USCIS nationality charts, historical U.S. Code editions, statutes at large, and controlling judicial decisions for the relevant period.'],
  ['Test every element under that law', 'Do not borrow a favorable requirement from a later statute or assume a later amendment applies retroactively.'],
  ['Then identify present-day evidence and procedure', 'The substantive citizenship date may be historical while today’s Form N-600, passport process, evidentiary rules, or appeal procedure governs how the claim is documented now.'],
] as const

export default function HistoricalLawPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Historical nationality research · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Citizenship law is time-sensitive</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">For many people born abroad or claiming citizenship through a parent, the correct question is not “what does the statute say today?” It is “what law governed when citizenship could have been acquired?”</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {method.map(([title, text], index) => (
            <article key={title} className="glass-panel p-6 md:p-7 flex gap-5">
              <div className="w-10 h-10 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 font-mono flex items-center justify-center shrink-0">{index + 1}</div>
              <div><h2 className="text-xl font-semibold mb-2">{title}</h2><p className="text-gray-400">{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <Baby className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Citizenship at birth abroad</h2>
            <p className="text-gray-300 mb-4">Transmission requirements have changed over time, including the U.S.-citizen parent&apos;s required residence or physical presence and rules involving children born outside marriage. The child&apos;s date of birth is therefore a central research date.</p>
            <p className="text-gray-400">USCIS Policy Manual Part H, Chapter 3 and its nationality-chart appendices are designed to organize these historical acquisition rules.</p>
          </div>
          <div className="glass-panel p-8">
            <CalendarRange className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Citizenship after birth through a parent</h2>
            <p className="text-gray-300 mb-4">The Child Citizenship Act&apos;s modern INA 320 rule took effect February 27, 2001. USCIS explains that a person who had already reached 18 before that effective date may need former derivative-citizenship law rather than current INA 320.</p>
            <p className="text-gray-400">For current INA 320, all statutory conditions generally must be satisfied while the person is under 18. Historical statutes used different combinations of parental naturalization, custody, residence and age rules.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="glass-panel p-7"><History className="w-7 h-7 text-cyan-400 mb-4" /><h2 className="text-xl font-semibold mb-3">2017 out-of-wedlock change</h2><p className="text-gray-400">USCIS guidance implementing <em>Sessions v. Morales-Santana</em> changed the physical-presence analysis for certain children born abroad outside marriage on or after June 12, 2017. Earlier births can remain governed by the earlier rule described in USCIS&apos;s charts.</p></div>
          <div className="glass-panel p-7"><SearchCheck className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-xl font-semibold mb-3">Nested citizenship claims</h2><p className="text-gray-400">A child&apos;s claim can depend on whether a parent—or even a grandparent used for a statutory physical-presence requirement—was actually a U.S. citizen. USCIS policy expressly addresses these “nested” claims.</p></div>
          <div className="glass-panel p-7 border border-yellow-400/20"><TriangleAlert className="w-7 h-7 text-yellow-400 mb-4" /><h2 className="text-xl font-semibold mb-3">Do not assume retroactivity</h2><p className="text-gray-400">Later law may be more generous without reopening an older claim. Always identify the amendment&apos;s effective-date and transition rules before applying it to an earlier birth or family event.</p></div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8">
          <h2 className="text-2xl font-bold mb-5">Primary research starting points</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <a href="https://www.uscis.gov/policy-manual/volume-12-part-h-chapter-3" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS: citizens at birth, INA 301/309 <ArrowRight className="inline w-4 h-4" /></a>
            <a href="https://www.uscis.gov/policy-manual/volume-12-part-h-chapter-4" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS: automatic acquisition after birth <ArrowRight className="inline w-4 h-4" /></a>
            <a href="https://uscode.house.gov/browse/prelim@title8&edition=prelim" target="_blank" rel="noreferrer" className="text-cyan-300">U.S. Code current and historical editions <ArrowRight className="inline w-4 h-4" /></a>
            <a href="https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20180418-AcquisitionOfCitizenship.pdf" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS: Morales-Santana implementation <ArrowRight className="inline w-4 h-4" /></a>
            <a href="https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20240718-CitizenshipProvisionsForChildren.pdf" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS: 2024 child-citizenship clarifications <ArrowRight className="inline w-4 h-4" /></a>
            <Link href="/topics/proof" className="text-cyan-300">How to document the result <ArrowRight className="inline w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
