import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Clock3, ExternalLink, Search, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { LAST_POLICY_REVIEW, formatReviewDate } from '@/lib/policy/current-policy'

const stages = [
  ['Receipt', 'USCIS accepts the filing and issues a receipt notice. Keep the receipt number; it is the key to case-status and inquiry tools.'],
  ['Biometrics, if requested', 'USCIS may reuse biometrics or schedule an appointment. Do not assume every applicant receives a new appointment.'],
  ['Interview and examination', 'For N-400, USCIS schedules an interview and administers the applicable English/civics examination unless an exception applies.'],
  ['Decision', 'USCIS may grant, continue, or deny the application. A continued case can require additional evidence or a second examination.'],
  ['Oath', 'Naturalization is not complete until the applicant takes the Oath of Allegiance and receives a Certificate of Naturalization.'],
]

export default function ProcessingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Live-source processing guide · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How long will a citizenship case take?</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">There is no honest single number. USCIS processing times change by form, filing category, office, workload and the facts of the case. CitizenApproved therefore does not publish a hard-coded “national average” as though it were a forecast for you.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <a href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noreferrer" className="glass-panel p-7 group">
            <Clock3 className="w-7 h-7 text-cyan-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">1. Check the live USCIS processing tool</h2>
            <p className="text-gray-400 mb-4">Select the exact form, category and office USCIS asks for. Treat the result as a service-level indicator, not a guaranteed completion date.</p>
            <span className="text-cyan-300">Open USCIS <ExternalLink className="inline w-4 h-4" /></span>
          </a>
          <a href="https://egov.uscis.gov/casestatus/landing.do" target="_blank" rel="noreferrer" className="glass-panel p-7 group">
            <Search className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">2. Track your actual case</h2>
            <p className="text-gray-400 mb-4">A general processing-time page cannot tell you what has happened in your file. Use the receipt number to check case status and your USCIS online account.</p>
            <span className="text-cyan-300">Check case status <ExternalLink className="inline w-4 h-4" /></span>
          </a>
          <a href="https://egov.uscis.gov/e-request/Intro.do" target="_blank" rel="noreferrer" className="glass-panel p-7 group">
            <TriangleAlert className="w-7 h-7 text-yellow-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">3. Use the inquiry date, not guesswork</h2>
            <p className="text-gray-400 mb-4">If USCIS says a case is outside normal processing time, use the agency&apos;s case-inquiry channel. A long wait by itself does not establish that a case is lost.</p>
            <span className="text-cyan-300">USCIS e-Request <ExternalLink className="inline w-4 h-4" /></span>
          </a>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What actually happens in an N-400 case</h2>
          <div className="space-y-4">{stages.map(([title, text], index) => (
            <div key={title} className="glass-panel p-6 flex gap-5">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-bold shrink-0">{index + 1}</div>
              <div><h3 className="text-lg font-semibold mb-2">{title}</h3><p className="text-gray-400">{text}</p></div>
            </div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <BarChart3 className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Historical data is context, not a promise</h2>
            <p className="text-gray-300 mb-4">USCIS publishes historical national processing-time data for many forms. That is useful for studying trends and agency performance, but it does not substitute for the live form-and-office tool and does not predict an individual adjudication.</p>
            <a href="https://egov.uscis.gov/processing-times/historic-pt" target="_blank" rel="noreferrer" className="text-cyan-300">View USCIS historical processing times <ArrowRight className="inline w-4 h-4" /></a>
          </div>
          <div className="glass-panel p-8">
            <CheckCircle2 className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">What you can control</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Use the current form edition and correct filing fee.</li>
              <li>Answer every required question and submit evidence called for by the form instructions.</li>
              <li>Keep your address current with USCIS.</li>
              <li>Attend appointments and respond to requests by their deadlines.</li>
              <li>Preserve copies of the full filing, notices, uploads and delivery records.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8">
          <h2 className="text-2xl font-bold mb-4">Why CitizenApproved removed its old estimates</h2>
          <p className="text-gray-300 mb-4">The previous page labeled hard-coded ranges, office rankings and denial statistics as “real processing time data.” Those values could age silently and implied more precision than the source data supports. This page now explains the measurement problem and routes readers to the live government data.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/updates" className="text-cyan-300">Current-policy ledger <ArrowRight className="inline w-4 h-4" /></Link>
            <a href="https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization/how-to-apply-for-citizenship" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS naturalization process <ArrowRight className="inline w-4 h-4" /></a>
          </div>
          <p className="text-xs text-gray-500 mt-6">Policy registry review date: {LAST_POLICY_REVIEW}. Educational information, not legal advice.</p>
        </div>
      </section>
    </main>
  )
}
