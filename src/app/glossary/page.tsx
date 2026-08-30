import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const terms = [
  ['Acquisition of citizenship', 'Citizenship obtained at birth under the law in effect at the time of birth. For a person born abroad, the answer can depend on a parent’s citizenship and physical presence before the birth.'],
  ['Derivative citizenship', 'Citizenship that arises after birth because a qualifying parent became or was a U.S. citizen and the child satisfied the statute then in force. Modern cases often involve INA 320, but older cases can be governed by older law.'],
  ['Naturalization', 'The legal process by which a person who was not already a U.S. citizen becomes one after satisfying a naturalization statute and taking the required oath.'],
  ['U.S. citizen', 'A person who holds U.S. citizenship by birth, acquisition, derivation, or naturalization. Citizenship carries rights and obligations and is one form of U.S. nationality.'],
  ['U.S. national', 'A person who owes permanent allegiance to the United States. All U.S. citizens are U.S. nationals, but a small category of U.S. nationals are not U.S. citizens.'],
  ['Lawful permanent resident (LPR)', 'A person who has been granted permanent resident status, commonly documented by a Green Card. LPR status is not the same as U.S. citizenship.'],
  ['Continuous residence', 'A naturalization requirement concerned with maintaining residence in the United States over a statutory period. Certain trips abroad can disrupt continuous residence even when permanent resident status itself is not lost.'],
  ['Physical presence', 'The actual number of days or months a person was physically inside the United States during a statutory period. It is different from continuous residence.'],
  ['Residence', 'A legal concept based on a person’s principal actual dwelling place. In nationality law, the exact statutory definition and the law in force at the relevant time matter.'],
  ['Good moral character (GMC)', 'A statutory naturalization requirement evaluated over the applicable period and, in some circumstances, with consideration of conduct outside that period. Statutory bars and current USCIS policy both matter.'],
  ['INA', 'The Immigration and Nationality Act. Most current provisions are codified in Title 8 of the U.S. Code, so an INA section number and a U.S.C. section number may refer to the same underlying rule.'],
  ['U.S. Code (U.S.C.)', 'The official subject-matter codification of federal statutes. For citizenship law, many controlling statutes appear in Title 8.'],
  ['Code of Federal Regulations (C.F.R.)', 'The codified federal regulations issued by agencies under statutory authority. Regulations can govern procedure and implementation but cannot override a statute or the Constitution.'],
  ['Federal Register', 'The official daily publication for proposed rules, final rules, notices, and other federal agency documents. A proposed rule is not the same thing as an effective final rule.'],
  ['USCIS Policy Manual', 'USCIS’s centralized policy guidance for its officers and the public. It is important agency policy, but it is not the same authority as the Constitution, a statute, a binding court decision, or a regulation.'],
  ['Precedent decision', 'A decision designated to control later cases within the relevant administrative or judicial system. Not every agency decision or court order has precedential effect.'],
  ['De novo review', 'A fresh judicial determination rather than ordinary deferential review. Congress expressly provides de novo federal district-court review for certain naturalization denials after the statutory administrative process.'],
  ['Consular Report of Birth Abroad (CRBA)', 'A Department of State document showing that a person born abroad acquired U.S. citizenship at birth. It documents citizenship; it does not create citizenship by itself.'],
  ['Certificate of Citizenship', 'A USCIS document evidencing citizenship acquired or derived through a parent. Form N-600 is generally used to request it.'],
  ['Certificate of Naturalization', 'A document issued after a person successfully completes naturalization. It is evidence of the citizenship created through the naturalization process.'],
  ['Biometrics', 'Identifying information such as fingerprints, photograph, or signature that USCIS may collect when required. The current N-400 fee does not include a separate biometrics services fee.'],
  ['Request for Evidence (RFE)', 'A USCIS notice asking for additional evidence before the agency completes adjudication. An RFE is not the same thing as a denial.'],
  ['Proposed rule', 'A rule an agency proposes for public comment. It does not become an effective legal requirement merely because it was proposed or because a comment period ended.'],
] as const

export default function GlossaryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Plain-language legal glossary · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Words that change the answer.</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Citizenship law uses ordinary-looking words—residence, presence, citizen, national, policy, rule—in technical ways. This glossary explains the distinction before a mistranslation or assumption turns into a legal error.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto glass-panel p-6 md:p-9">
          <dl className="divide-y divide-white/10">
            {terms.map(([term, definition]) => (
              <div key={term} className="py-6 first:pt-0 last:pb-0 grid md:grid-cols-[250px_1fr] gap-2 md:gap-8">
                <dt className="font-semibold text-white text-lg">{term}</dt>
                <dd className="text-gray-300">{definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="glass-panel p-7">
            <BookOpen className="w-7 h-7 text-cyan-400 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-3">Translation rule of thumb</h2>
            <p className="text-gray-300">When a translated word could mean more than one legal concept, return to the English statutory term and its definition. “Residence” and “physical presence,” for example, are not interchangeable even if a translation makes them sound similar.</p>
          </div>
          <div className="glass-panel p-7">
            <h2 className="text-2xl font-bold mb-3">Read the law behind the word</h2>
            <p className="text-gray-300 mb-4">The official U.S. Code and eCFR are the best starting points for the operative statutory and regulatory text.</p>
            <div className="space-y-3">
              <a href="https://uscode.house.gov/browse/prelim@title8&edition=prelim" target="_blank" rel="noreferrer" className="block text-cyan-300 underline underline-offset-4">Title 8 U.S. Code <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
              <a href="https://www.ecfr.gov/current/title-8" target="_blank" rel="noreferrer" className="block text-cyan-300 underline underline-offset-4">Title 8 C.F.R. <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4">
          <Link href="/help" className="px-5 py-3 rounded-lg border border-cyan-400/20 text-cyan-300">Official resources <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
          <Link href="/sources" className="px-5 py-3 rounded-lg border border-white/10 text-white">Source methodology <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
          <Link href="/topics/historical-law" className="px-5 py-3 rounded-lg border border-white/10 text-white">Historical-law guide <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  )
}
