import Link from 'next/link'
import { ArrowRight, Clock3, FileWarning, Gavel, Scale, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CITIZENSHIP_FORM_FEES, formatReviewDate } from '@/lib/policy/current-policy'

const steps = [
  ['N-400 decision', 'USCIS must give written reasons when it denies a naturalization application. The denial notice identifies the factual and legal basis and explains the hearing right.'],
  ['Form N-336', 'A denied N-400 applicant generally requests a hearing by filing Form N-336 within 30 calendar days of receiving the denial decision. USCIS may reject an untimely request, subject to the motion rules described in the instructions.'],
  ['Hearing before an immigration officer', 'The Section 336 hearing is an administrative review of the naturalization denial. Additional evidence and briefs may be submitted as permitted by the form instructions and hearing process.'],
  ['Federal district court review', 'After the statutory administrative hearing, 8 U.S.C. § 1421(c) permits the applicant to seek review in the U.S. district court where the person resides. The statute says that review is de novo.'],
] as const

export default function ReviewPage() {
  const n336 = CITIZENSHIP_FORM_FEES.N336

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Naturalization review · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">An N-400 denial is not the end of the legal process</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Naturalization has an unusually important review structure. A denied applicant can seek an administrative hearing, and after that hearing Congress expressly provides for de novo review in federal district court.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {steps.map(([title, text], index) => (
            <article key={title} className="glass-panel p-6 md:p-7 flex gap-5">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center font-mono shrink-0">{index + 1}</div>
              <div><h2 className="text-xl font-semibold mb-2">{title}</h2><p className="text-gray-400">{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="glass-panel p-7">
            <Clock3 className="w-7 h-7 text-yellow-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Deadline</h2>
            <p className="text-gray-400">Current N-336 instructions say to file the hearing request within 30 calendar days of receiving the N-400 denial. Deadline calculation can be outcome-determinative, so use the notice and current instructions rather than a remembered date.</p>
          </div>
          <div className="glass-panel p-7">
            <FileWarning className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Current general fee</h2>
            <p className="text-gray-400">The current G-1055 lists Form N-336 at ${n336.online.toLocaleString()} online or ${n336.paper.toLocaleString()} on paper. The current military-service category is ${n336.military}, and fee-waiver categories may also apply.</p>
          </div>
          <div className="glass-panel p-7">
            <Gavel className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">De novo means a new judicial determination</h2>
            <p className="text-gray-400">Section 1421(c) directs the district court to make its own findings of fact and conclusions of law and, at the petitioner&apos;s request, conduct a hearing de novo on the application.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <Scale className="w-7 h-7 text-cyan-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">A separate federal-court route exists for some delayed cases</h2>
            <p className="text-gray-300 mb-4">8 U.S.C. § 1447(b) addresses failure to make a determination within 120 days after the naturalization examination. The applicant may apply to the federal district court where the applicant resides; the court may determine the matter or remand it to USCIS with instructions.</p>
            <p className="text-gray-400">The meaning of “examination,” jurisdiction after filing, and litigation strategy can involve case law. This is a point where individualized legal advice is especially valuable.</p>
          </div>
          <div className="glass-panel p-8">
            <ShieldCheck className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Other citizenship applications use different appeal paths</h2>
            <p className="text-gray-300">Do not apply the N-336 process to every citizenship document. For example, a denied Form N-600 has its own appeal and motion framework. The denial notice and current form/regulation control the available review path.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-5 text-sm">
          <a href="https://www.uscis.gov/sites/default/files/document/forms/n-336instr.pdf" target="_blank" rel="noreferrer" className="text-cyan-300">Current N-336 instructions <ArrowRight className="inline w-4 h-4" /></a>
          <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1421" target="_blank" rel="noreferrer" className="text-cyan-300">8 U.S.C. § 1421(c) <ArrowRight className="inline w-4 h-4" /></a>
          <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1447" target="_blank" rel="noreferrer" className="text-cyan-300">8 U.S.C. § 1447 <ArrowRight className="inline w-4 h-4" /></a>
          <Link href="/processing" className="text-cyan-300">Processing guide <ArrowRight className="inline w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  )
}
