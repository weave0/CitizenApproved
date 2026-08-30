import Link from 'next/link'
import { ArrowRight, BookOpen, Clock3, DollarSign, ExternalLink, FileSearch, FileText, Gavel, Map, Route, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const guides = [
  ['Pathway Triage', 'Find the citizenship statute or naturalization route to investigate first—without a fake eligibility verdict.', Route, '/eligibility'],
  ['Evidence Guide', 'Separate baseline interview items from fact-specific and pathway-specific evidence.', FileSearch, '/documents'],
  ['Current Fees', 'Current filing methods, reduced fees, waivers, exemptions, and clearly separated proposals.', DollarSign, '/costs'],
  ['Civics Test Guide', 'Know whether the 2008 or 2025 test applies based on the N-400 filing date.', BookOpen, '/civics'],
  ['Processing Guide', 'Use live USCIS processing data and understand what it can—and cannot—predict.', Clock3, '/processing'],
  ['Timeline Guide', 'Separate statutory eligibility clocks from agency processing time.', Map, '/resources/timeline'],
  ['Forms Guide', 'Current citizenship-related forms with live USCIS form-page links.', FileText, '/resources/forms'],
  ['Source Methodology', 'Understand statutes, courts, regulations, agency policy and proposed rules.', Gavel, '/sources'],
] as const

const pathways = [
  ['Citizenship at Birth', '8 U.S.C. § 1401', '/pathways/birthright'],
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
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">CitizenApproved is designed for learners, applicants, families, educators and researchers anywhere in the world. The tools favor transparent sources and explain uncertainty instead of manufacturing precision.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map(([title, description, Icon, href]) => (
            <Link key={title} href={href} className="glass-panel p-6 group"><Icon className="w-7 h-7 text-cyan-400 mb-4" /><h2 className="text-lg font-semibold mb-2">{title}</h2><p className="text-sm text-gray-400 mb-4">{description}</p><span className="text-cyan-300 text-sm">Open guide <ArrowRight className="inline w-4 h-4" /></span></Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-7">Citizenship pathways</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{pathways.map(([title, law, href]) => <Link key={title} href={href} className="glass-panel p-6"><h3 className="text-lg font-semibold mb-2">{title}</h3><p className="text-sm font-mono text-cyan-300 mb-4">{law}</p><span className="text-gray-400 text-sm">Read the current framework <ArrowRight className="inline w-4 h-4" /></span></Link>)}</div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8"><ShieldCheck className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-2xl font-bold mb-4">Official starting points</h2><div className="space-y-3 text-sm"><a href="https://www.uscis.gov/citizenship" target="_blank" rel="noreferrer" className="block text-cyan-300">USCIS Citizenship and Naturalization <ExternalLink className="inline w-4 h-4" /></a><a href="https://www.uscis.gov/policy-manual/volume-12" target="_blank" rel="noreferrer" className="block text-cyan-300">USCIS Policy Manual, Volume 12 <ExternalLink className="inline w-4 h-4" /></a><a href="https://uscode.house.gov/browse/prelim@title8&edition=prelim" target="_blank" rel="noreferrer" className="block text-cyan-300">Title 8 U.S. Code <ExternalLink className="inline w-4 h-4" /></a><a href="https://www.ecfr.gov/current/title-8" target="_blank" rel="noreferrer" className="block text-cyan-300">Title 8 C.F.R. <ExternalLink className="inline w-4 h-4" /></a></div></div>
          <div className="glass-panel p-8"><Gavel className="w-7 h-7 text-violet-400 mb-4" /><h2 className="text-2xl font-bold mb-4">Current change tracking</h2><p className="text-gray-300 mb-4">Fees, testing rules, court decisions and agency policies can change faster than the underlying statutes. The policy ledger records the current status and the date each volatile item was checked.</p><Link href="/updates" className="text-cyan-300">Open current-policy ledger <ArrowRight className="inline w-4 h-4" /></Link></div>
        </div>
      </section>
    </main>
  )
}
