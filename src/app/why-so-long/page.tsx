import Link from 'next/link'
import { ArrowRight, FileSearch, Fingerprint, Gavel, MessagesSquare, ShieldCheck, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const factors = [
  [FileSearch, 'Case-specific review', 'A complete application can still require review of travel, residence, marriage, criminal history, immigration history, parentage, military service or other facts. More complex records can take longer to resolve.'],
  [Fingerprint, 'Identity, biometrics and security checks', 'USCIS may reuse biometrics or require collection and uses identity and security screening as part of adjudication. The exact sequence can vary by case.'],
  [MessagesSquare, 'Requests for evidence and applicant response time', 'If USCIS needs evidence or clarification, a request pauses the practical path to decision while the applicant gathers and submits a response and USCIS reviews it.'],
  [Gavel, 'Interview and oath capacity', 'Naturalization generally requires an interview and, after approval, an oath ceremony. Scheduling capacity and local operations can affect the calendar.'],
] as const

export default function WhySoLongPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Processing explainer · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Why can one citizenship case take longer than another?</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">There is no single honest explanation for every delay. Processing time reflects both system capacity and the work required in an individual file. This page explains the major categories without claiming that any one factor caused a particular person&apos;s wait.</p>
        </div>
      </section>

      <section className="pb-16 px-6"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">{factors.map(([Icon, title, text]) => <div key={title} className="glass-panel p-7"><Icon className="w-7 h-7 text-cyan-400 mb-4" /><h2 className="text-xl font-semibold mb-3">{title}</h2><p className="text-gray-400">{text}</p></div>)}</div></section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8"><ShieldCheck className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-2xl font-bold mb-4">What you can do</h2><ul className="space-y-3 text-gray-300"><li>Use the current form edition and correct filing method.</li><li>Submit evidence required by the current instructions for your facts.</li><li>Keep your mailing and physical address current with USCIS.</li><li>Attend appointments and answer requests by the stated deadline.</li><li>Use the receipt number and USCIS online account to monitor the actual case.</li><li>If USCIS says the case is outside normal processing time, use the official inquiry channel.</li></ul></div>
          <div className="glass-panel p-8 border border-yellow-400/20"><TriangleAlert className="w-7 h-7 text-yellow-400 mb-4" /><h2 className="text-2xl font-bold mb-4">What not to infer</h2><p className="text-gray-300 mb-4">A long wait does not by itself prove a problem with eligibility, a security issue, discrimination, fraud review, or a lost file. A short historical median also does not promise your case will finish in that period.</p><p className="text-gray-400">Use case-specific notices and official status/inquiry tools before drawing conclusions about the reason for a delay.</p></div>
        </div>
      </section>

      <section className="py-16 px-6"><div className="max-w-6xl mx-auto glass-panel p-8"><h2 className="text-2xl font-bold mb-4">If you need help with a delayed case</h2><p className="text-gray-300 mb-5">Start with USCIS case status and the processing-time inquiry date. For unresolved problems after using normal USCIS channels, the DHS Citizenship and Immigration Services Ombudsman can provide case assistance in qualifying circumstances.</p><div className="flex flex-wrap gap-5 text-sm"><a href="https://egov.uscis.gov/casestatus/landing.do" target="_blank" rel="noreferrer" className="text-cyan-300">Case status <ArrowRight className="inline w-4 h-4" /></a><a href="https://egov.uscis.gov/e-request/Intro.do" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS e-Request <ArrowRight className="inline w-4 h-4" /></a><a href="https://www.dhs.gov/case-assistance" target="_blank" rel="noreferrer" className="text-cyan-300">CIS Ombudsman case assistance <ArrowRight className="inline w-4 h-4" /></a><Link href="/processing" className="text-cyan-300">Processing guide <ArrowRight className="inline w-4 h-4" /></Link></div></div></section>
    </main>
  )
}
