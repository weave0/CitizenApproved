import Link from 'next/link'
import { Accessibility, ArrowRight, BookOpen, Clock3, DollarSign, ExternalLink, FileSearch, FileText, Gavel, Globe2, Landmark, Map, Route, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const guides = [
  ['Pathway Triage', 'Find the citizenship statute or naturalization route to investigate first—without a fake eligibility verdict.', Route, '/eligibility'],
  ['Official Help', 'Find the correct USCIS, State, DOJ/EOIR, court, statute, regulation, or rulemaking source for the task in front of you.', Landmark, '/help'],
  ['Evidence Guide', 'Separate baseline interview items from fact-specific and pathway-specific evidence.', FileSearch, '/documents'],
  ['Current Fees', 'Current filing methods, reduced fees, waivers, exemptions, and clearly separated proposals.', DollarSign, '/costs'],
  ['Civics Test Guide', 'Know whether the 2008 or 2025 test applies based on the N-400 filing date.', BookOpen, '/civics'],
  ['Processing Guide', 'Use live USCIS processing data and understand what it can—and cannot—predict.', Clock3, '/processing'],
  ['Timeline Guide', 'Separate statutory eligibility clocks from agency processing time.', Map, '/resources/timeline'],
  ['Forms Guide', 'Current citizenship-related forms with live USCIS form-page links.', FileText, '/resources/forms'],
  ['Advanced Topics', 'Proof of citizenship, dual nationality, denial review, testing exceptions, and historical nationality law.', Gavel, '/topics'],
  ['Plain-Language Glossary', 'Understand technical terms that are easy to mistranslate or confuse, such as residence, physical presence, acquisition, derivation, and policy.', BookOpen, '/glossary'],
  ['Language Guides', 'USCIS-grounded language priorities, official multilingual routes, and maintained CitizenApproved orientation where we can support it responsibly.', Globe2, '/languages'],
  ['Language & Accessibility', 'Official multilingual resources plus CitizenApproved keyboard, reduced-motion, zoom, print, and translation guidance.', Accessibility, '/accessibility'],
  ['Source Methodology', 'Understand what statutes, regulations, court decisions, agency policy, guidance, and proposed rules can—and cannot—do.', ShieldCheck, '/sources'],
] as const

const pathways = [
  ['Citizenship at Birth', '8 U.S.C. §§ 1401–1409', '/pathways/birthright'],
  ['Standard Naturalization', '8 U.S.C. § 1427 / INA 316', '/pathways/naturalization'],
  ['Marriage Route', '8 U.S.C. § 1430 / INA 319', '/pathways/marriage'],
  ['Military Naturalization', '8 U.S.C. §§ 1439–1440 / INA 328–329', '/pathways/military'],
  ['Citizenship Through a Parent', '8 U.S.C. §§ 1431–1433 / INA 320–322', '/pathways/derivative'],
] as const

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Public resource library · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Research the rule. Understand the process. Verify the source.</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">CitizenApproved is designed for learners, applicants, families, educators and researchers anywhere in the world. The tools favor transparent sources, explain agency boundaries, and expose uncertainty instead of manufacturing precision.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map(([title, description, Icon, href]) => (
            <Link key={title} href={href} className="glass-panel p-6 group"><Icon className="w-7 h-7 text-cyan-400 mb-4" aria-hidden="true" /><h2 className="text-lg font-semibold mb-2">{title}</h2><p className="text-sm text-gray-300 mb-4">{description}</p><span className="text-cyan-200 text-sm">Open guide <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></span></Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-7">Citizenship pathways</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{pathways.map(([title, law, href]) => <Link key={title} href={href} className="glass-panel p-6"><h3 className="text-lg font-semibold mb-2">{title}</h3><p className="text-sm font-mono text-cyan-200 mb-4">{law}</p><span className="text-gray-300 text-sm">Read the current framework <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></span></Link>)}</div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="glass-panel p-8 lg:col-span-2">
            <Landmark className="w-7 h-7 text-cyan-400 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">Official government starting points</h2>
            <p className="text-gray-300 mb-5">The dedicated help hub groups official resources by the task you are trying to complete: file, study, track a case, work in another language, request an accommodation, prove citizenship, get help abroad, find authorized representation, or read the controlling law.</p>
            <Link href="/help" className="text-cyan-200 underline underline-offset-4">Open official help directory <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
          </div>
          <div className="glass-panel p-8">
            <Globe2 className="w-7 h-7 text-violet-400 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">Multilingual routes</h2>
            <div className="space-y-3 text-sm">
              <Link href="/languages" className="block text-cyan-200 underline underline-offset-4">CitizenApproved language guides <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
              <a href="https://www.uscis.gov/tools/multilingual-resource-center" target="_blank" rel="noreferrer" className="block text-cyan-200 underline underline-offset-4">USCIS Multilingual Resource Center <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
              <a href="https://www.usa.gov/es/naturalizacion-ciudadania-estados-unidos" target="_blank" rel="noreferrer" className="block text-cyan-200 underline underline-offset-4">USAGov en Español <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div><Gavel className="w-7 h-7 text-green-400 mb-4" aria-hidden="true" /><h2 className="text-2xl font-bold mb-3">Current change tracking</h2><p className="text-gray-300">Fees, testing rules, court decisions, regulations and agency policies can change faster than the underlying statutes. The policy ledger records status, effective dates, review dates and primary sources.</p></div>
          <Link href="/updates" className="px-6 py-3 rounded-lg border border-cyan-400/20 text-cyan-200">Open current-policy ledger <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  )
}
