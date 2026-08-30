import Link from 'next/link'
import { ArrowRight, CheckCircle2, ClipboardCheck, FileSearch, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const preparation = [
  ['Identify the legal pathway', 'Start with the statute that could make you a citizen or eligible to naturalize. Do not begin with a document list.'],
  ['Confirm the current form and edition', 'Open the live USCIS form page and read the instructions for the edition USCIS currently accepts.'],
  ['Build a fact timeline', 'Record residence, travel, marriages, parent citizenship, custody, military service and other dates relevant to your pathway.'],
  ['Match evidence to facts', 'Collect the documents the current instructions require for the facts you actually have. Conditional evidence is not universal evidence.'],
  ['Check fees on filing day', 'Use Form G-1055 and the form page to verify the fee, reduced-fee, waiver or $0 category that applies.'],
  ['Preserve the filing record', 'Keep a complete copy of the form, evidence, payment, delivery record, receipt notices and later USCIS correspondence.'],
]

export default function ChecklistPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Preparation checklist · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">A checklist that does not invent requirements</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">The previous checklist treated many useful records as universally required. This replacement focuses on a reliable preparation process and sends you to the current USCIS instructions for the actual evidence list.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {preparation.map(([title, text], index) => (
            <div key={title} className="glass-panel p-6 md:p-7 flex gap-5">
              <div className="w-10 h-10 rounded-full border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 font-mono shrink-0">{index + 1}</div>
              <div><h2 className="text-xl font-semibold mb-2">{title}</h2><p className="text-gray-400">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <Link href="/eligibility" className="glass-panel p-7"><ClipboardCheck className="w-7 h-7 text-cyan-400 mb-4" /><h2 className="text-xl font-semibold mb-2">Find the pathway</h2><p className="text-gray-400 mb-4">Use pathway triage to identify the statute you should investigate first.</p><span className="text-cyan-300">Pathway triage <ArrowRight className="inline w-4 h-4" /></span></Link>
          <Link href="/documents" className="glass-panel p-7"><FileSearch className="w-7 h-7 text-violet-400 mb-4" /><h2 className="text-xl font-semibold mb-2">Build the evidence file</h2><p className="text-gray-400 mb-4">See baseline interview items and examples of facts that trigger additional evidence.</p><span className="text-cyan-300">Evidence guide <ArrowRight className="inline w-4 h-4" /></span></Link>
          <Link href="/costs" className="glass-panel p-7"><CheckCircle2 className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-xl font-semibold mb-2">Verify the fee</h2><p className="text-gray-400 mb-4">Use the current fee registry and then confirm the amount on USCIS G-1055.</p><span className="text-cyan-300">Current fees <ArrowRight className="inline w-4 h-4" /></span></Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8 border border-yellow-400/20"><TriangleAlert className="w-7 h-7 text-yellow-400 mb-4" /><h2 className="text-2xl font-bold mb-4">When a checklist is not enough</h2><p className="text-gray-300">Criminal history, immigration violations, possible false claims to citizenship, long absences, old acquisition/derivation law, contested parentage, adoption, custody, prior removal proceedings and denaturalization questions can turn on facts a generic checklist cannot safely resolve. Use the primary law and qualified legal help when the outcome matters personally.</p></div>
      </section>
    </main>
  )
}
