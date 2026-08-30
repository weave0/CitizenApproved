import Link from 'next/link'
import { ArrowRight, CalendarClock, CheckCircle2, Clock3, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const eligibilityClocks = [
  ['Standard INA 316', 'Generally 5 years as a lawful permanent resident before filing, with the statutory continuous-residence and physical-presence requirements.'],
  ['Spouse INA 319(a)', 'Generally 3 years as a lawful permanent resident while satisfying the U.S.-citizen-spouse and marital-union rules.'],
  ['Early filing', 'USCIS permits many INA 316 and INA 319(a) applicants to file N-400 up to 90 calendar days before the continuous-residence requirement is met; other requirements still must be satisfied at the required time.'],
  ['Military INA 328 / 329', 'Military provisions use different service, status and timing rules. Do not apply the ordinary 3-year or 5-year clock to a qualifying military case without checking the statute.'],
]

const processStages = [
  'USCIS receives and accepts the filing.',
  'Biometrics are reused or scheduled if USCIS requires them.',
  'USCIS reviews the file and may request additional evidence.',
  'USCIS schedules the naturalization interview and applicable examination.',
  'USCIS grants, continues or denies the application.',
  'If approved, naturalization is completed at the Oath of Allegiance.',
]

export default function TimelinePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Timeline guide · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Two clocks people often confuse</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">The time you must satisfy a legal eligibility requirement is different from the time USCIS takes to process an application. CitizenApproved no longer adds those clocks together into a made-up “total estimated time.”</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="glass-panel p-8">
            <CalendarClock className="w-7 h-7 text-cyan-400 mb-4" />
            <h2 className="text-2xl font-bold mb-5">Clock 1 · statutory eligibility</h2>
            <div className="space-y-5">{eligibilityClocks.map(([title, text]) => <div key={title}><h3 className="font-semibold mb-1">{title}</h3><p className="text-gray-400">{text}</p></div>)}</div>
          </article>
          <article className="glass-panel p-8">
            <Clock3 className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-2xl font-bold mb-5">Clock 2 · agency processing</h2>
            <p className="text-gray-300 mb-5">Processing begins after filing and varies with the form, office, workload, background checks and case-specific issues. Use USCIS&apos;s live tool rather than a hard-coded number.</p>
            <a href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS processing-times tool <ArrowRight className="inline w-4 h-4" /></a>
          </article>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Typical N-400 process sequence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{processStages.map((stage, index) => <div key={stage} className="glass-panel p-6"><div className="text-cyan-300 font-mono mb-3">0{index + 1}</div><p className="text-gray-300">{stage}</p></div>)}</div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8"><CheckCircle2 className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-2xl font-bold mb-4">Use dates, not slogans</h2><p className="text-gray-300">For eligibility, calculate from the actual “resident since” date, travel dates, marriage/citizenship dates, service dates and other facts the statute uses. “Three-year route” and “five-year route” are labels, not substitutes for the elements.</p></div>
          <div className="glass-panel p-8 border border-yellow-400/20"><TriangleAlert className="w-7 h-7 text-yellow-400 mb-4" /><h2 className="text-2xl font-bold mb-4">Long absences can reset the analysis</h2><p className="text-gray-300">Absences can affect continuous residence and physical presence differently. A trip of six months or more deserves a rule-specific review; a year or more can have additional consequences and exceptions.</p></div>
        </div>
      </section>

      <section className="pb-20 px-6"><div className="max-w-6xl mx-auto flex flex-wrap gap-5 text-sm"><Link href="/pathways/naturalization" className="text-cyan-300">Standard naturalization <ArrowRight className="inline w-4 h-4" /></Link><Link href="/pathways/marriage" className="text-cyan-300">Marriage route <ArrowRight className="inline w-4 h-4" /></Link><Link href="/pathways/military" className="text-cyan-300">Military routes <ArrowRight className="inline w-4 h-4" /></Link><Link href="/processing" className="text-cyan-300">Processing guide <ArrowRight className="inline w-4 h-4" /></Link></div></section>
    </main>
  )
}
