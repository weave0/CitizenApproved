import Link from 'next/link'
import { Accessibility, ArrowRight, Brain, Languages, Stethoscope, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const ageRules = [
  ['50/20', 'Age 50 or older with at least 20 years as an LPR', 'Exempt from the English requirement; civics is still required and may be taken in the applicant’s preferred language.'],
  ['55/15', 'Age 55 or older with at least 15 years as an LPR', 'Exempt from the English requirement; civics is still required and may be taken in the applicant’s preferred language.'],
  ['65/20', 'Age 65 or older with at least 20 years as an LPR', 'Exempt from English and receives special consideration for civics: study the specially designated 20 questions and take civics in the language of choice.'],
] as const

export default function ExceptionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Testing rules · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Exceptions, disability waivers and accommodations are different</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Naturalization testing rules contain age-and-residence exceptions, a medical disability exception, and reasonable accommodations. They solve different legal and accessibility problems and use different evidence.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6"><Languages className="w-7 h-7 text-cyan-400" /><h2 className="text-3xl font-bold">Age and time as a permanent resident</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {ageRules.map(([label, condition, effect]) => (
              <article key={label} className="glass-panel p-7">
                <div className="text-3xl font-bold text-cyan-300 mb-3">{label}</div>
                <h3 className="font-semibold mb-3">{condition}</h3>
                <p className="text-gray-400">{effect}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-5">Applicants using a language other than English for the civics examination generally bring an interpreter who is fluent in English and the chosen language.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="glass-panel p-8">
            <Stethoscope className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Form N-648 · medical disability exception</h2>
            <p className="text-gray-300 mb-4">Form N-648 is for an applicant who cannot meet the English requirement, civics requirement, or both because of a medically determinable physical or developmental disability or mental impairment that has lasted, or is expected to last, at least 12 months.</p>
            <p className="text-gray-400 mb-4">The current form states that only a licensed medical doctor, doctor of osteopathy, or clinical psychologist may certify it. The medical professional must explain the connection between the diagnosed condition and the applicant&apos;s inability to learn or demonstrate the required knowledge.</p>
            <a href="https://www.uscis.gov/n-648" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS Form N-648 <ArrowRight className="inline w-4 h-4" /></a>
          </article>

          <article className="glass-panel p-8">
            <Accessibility className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Disability accommodation · change how the process is accessed</h2>
            <p className="text-gray-300 mb-4">An accommodation does not necessarily excuse an applicant from a legal requirement. It changes the way USCIS provides access—for example, sign-language interpretation, extended examination time, oral testing when writing is inaccessible, or an off-site interview where appropriate.</p>
            <p className="text-gray-400 mb-4">USCIS provides a separate accommodation-request process for appointments. If the applicant cannot satisfy English or civics even with reasonable accommodation because of a qualifying disability or impairment, Form N-648 is the exception process.</p>
            <a href="https://egov.uscis.gov/e-request/accom" target="_blank" rel="noreferrer" className="text-cyan-300">Request an accommodation <ArrowRight className="inline w-4 h-4" /></a>
          </article>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <Brain className="w-7 h-7 text-pink-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">65/20 under the 2025 civics test</h2>
            <p className="text-gray-300">USCIS&apos;s official 2025 question bank says a qualifying 65/20 applicant studies only the 20 questions marked with an asterisk. The officer asks 10 of those 20, and the applicant must answer at least 6 correctly. The test may be taken in the applicant&apos;s chosen language.</p>
          </div>
          <div className="glass-panel p-8 border border-yellow-400/20">
            <TriangleAlert className="w-7 h-7 text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Age or difficulty learning is not automatically an N-648 basis</h2>
            <p className="text-gray-300">The medical exception is tied to a qualifying disability or impairment and its functional effect on the English/civics requirements. Advanced age, limited education or illiteracy by themselves are not the medical exception described by Form N-648.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-5 text-sm">
          <a href="https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf" target="_blank" rel="noreferrer" className="text-cyan-300">Official 2025 civics bank <ArrowRight className="inline w-4 h-4" /></a>
          <a href="https://www.uscis.gov/sites/default/files/document/forms/n-648.pdf" target="_blank" rel="noreferrer" className="text-cyan-300">Current Form N-648 <ArrowRight className="inline w-4 h-4" /></a>
          <a href="https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20250613-N-648MedicalCertification.pdf" target="_blank" rel="noreferrer" className="text-cyan-300">June 2025 N-648 policy update <ArrowRight className="inline w-4 h-4" /></a>
          <Link href="/civics" className="text-cyan-300">Civics test guide <ArrowRight className="inline w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  )
}
