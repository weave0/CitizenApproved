import Link from 'next/link'
import { AlertTriangle, ArrowRight, CheckCircle2, FileCheck2, Files, Scale, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { LAST_POLICY_REVIEW, formatReviewDate } from '@/lib/policy/current-policy'

const interviewBasics = [
  'Interview appointment notice.',
  'Permanent Resident Card (Form I-551), if applicable to your case.',
  'A state-issued photo identification, such as a driver’s license.',
  'Valid and expired passports and travel documents that document absences from the United States since becoming a permanent resident.',
]

const conditionalEvidence = [
  ['Arrests, charges or convictions', 'Court-certified dispositions, charging/arrest records, sentencing records and proof of completion can be required even when a record was sealed, expunged or otherwise removed. Follow the current N-400 instructions for your exact history.'],
  ['Marriage-based 3-year route', 'Evidence of the spouse’s U.S. citizenship, the current marriage, termination of prior marriages, and evidence relevant to the marital-union requirement.'],
  ['Long absences', 'Evidence showing why an absence did not break continuous residence can matter when an absence creates a statutory presumption or break.'],
  ['Military route', 'Form N-426 and military-service evidence. USCIS publishes a separate military naturalization checklist.'],
  ['Name or marital-history changes', 'Marriage certificates, divorce decrees, death certificates or court orders as applicable.'],
  ['Tax issues or support obligations', 'Tax transcripts/payment agreements or child/spousal-support records can be relevant when the application asks about those facts or when they bear on eligibility.'],
]

export default function DocumentsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Evidence guide · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">What documents do you actually need?</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">A citizenship application is not improved by sending every document you own. The right evidence depends on the form, the legal basis for the claim, and the facts you disclose. This guide separates baseline items from conditional evidence instead of calling everything “required.”</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-5"><FileCheck2 className="w-7 h-7 text-green-400" /><h2 className="text-2xl font-bold">N-400 interview baseline</h2></div>
            <p className="text-gray-400 mb-5">USCIS&apos;s current “What to Expect” guidance identifies these items for the naturalization interview:</p>
            <ul className="space-y-3">{interviewBasics.map(item => <li key={item} className="flex gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />{item}</li>)}</ul>
            <p className="text-sm text-gray-500 mt-5">USCIS may request additional evidence based on the application and case history.</p>
          </article>

          <article className="glass-panel p-8 border border-yellow-400/20">
            <AlertTriangle className="w-7 h-7 text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Do not use a generic checklist as a legal conclusion</h2>
            <p className="text-gray-300 mb-4">The old CitizenApproved checklist labeled tax returns, leases, bank statements and other material as generally required. That was too broad. Some of those records are useful or required in particular cases, but the controlling source is the current form instruction plus any request USCIS sends in your case.</p>
            <p className="text-gray-400">For Form N-600 and N-600K, the evidence structure is different again because the claim is based on citizenship through a parent, not ordinary adult naturalization.</p>
          </article>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-7"><Files className="w-7 h-7 text-violet-400" /><h2 className="text-3xl font-bold">When additional evidence is commonly triggered</h2></div>
          <div className="grid md:grid-cols-2 gap-5">{conditionalEvidence.map(([title, text]) => (
            <div key={title} className="glass-panel p-6"><h3 className="text-lg font-semibold mb-2">{title}</h3><p className="text-gray-400">{text}</p></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="glass-panel p-7">
            <ShieldCheck className="w-7 h-7 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">N-600 claims</h3>
            <p className="text-gray-400">Current N-600 instructions require evidence of the citizenship claim, including core civil records and proof of the U.S. citizen parent&apos;s citizenship, plus additional documents where marriage, custody, adoption or other facts matter.</p>
          </div>
          <div className="glass-panel p-7">
            <Scale className="w-7 h-7 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Originals vs. copies</h3>
            <p className="text-gray-400">USCIS instructions often permit photocopies with a filing but require originals or court-certified copies at interview. Follow the instruction for the exact document rather than a site-wide rule.</p>
          </div>
          <div className="glass-panel p-7">
            <FileCheck2 className="w-7 h-7 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Translations</h3>
            <p className="text-gray-400">Foreign-language documents submitted to USCIS generally require a full English translation with the translator&apos;s certification that the translation is complete and accurate and that the translator is competent to translate.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8">
          <h2 className="text-2xl font-bold mb-5">Use the right primary checklist</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <a className="text-cyan-300" href="https://www.uscis.gov/sites/default/files/document/forms/n-400instr.pdf" target="_blank" rel="noreferrer">Current Form N-400 instructions <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300" href="https://www.uscis.gov/sites/default/files/document/guides/M-477.pdf" target="_blank" rel="noreferrer">USCIS M-477 document checklist <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300" href="https://www.uscis.gov/sites/default/files/document/forms/n-600instr.pdf" target="_blank" rel="noreferrer">Current Form N-600 instructions <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300" href="https://www.uscis.gov/sites/default/files/document/forms/n-600kinstr.pdf" target="_blank" rel="noreferrer">Current Form N-600K instructions <ArrowRight className="inline w-4 h-4" /></a>
            <a className="text-cyan-300" href="https://www.uscis.gov/sites/default/files/document/checklists/Military_Naturlization_Checklist.pdf" target="_blank" rel="noreferrer">USCIS military naturalization checklist <ArrowRight className="inline w-4 h-4" /></a>
            <Link className="text-cyan-300" href="/pathways">Compare citizenship pathways <ArrowRight className="inline w-4 h-4" /></Link>
          </div>
          <p className="text-xs text-gray-500 mt-6">Policy registry review date: {LAST_POLICY_REVIEW}. Educational information, not legal advice.</p>
        </div>
      </section>
    </main>
  )
}
