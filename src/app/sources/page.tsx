import Link from 'next/link'
import { ArrowRight, BookOpen, Building2, ExternalLink, Gavel, Landmark, Scale, ShieldCheck, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const sourceTypes = [
  {
    icon: Landmark,
    title: 'Constitution and federal statutes',
    role: 'Primary law',
    text: 'The Constitution and Acts of Congress are the starting legal authority. The Office of the Law Revision Counsel publishes the U.S. Code, including Title 8 nationality provisions.',
    links: [
      ['U.S. Constitution', 'https://constitution.congress.gov/'],
      ['Title 8, U.S. Code', 'https://uscode.house.gov/browse/prelim@title8&edition=prelim'],
    ],
  },
  {
    icon: Gavel,
    title: 'Court decisions',
    role: 'Binding interpretation depends on the court',
    text: 'Courts interpret the Constitution, statutes and regulations. Supreme Court holdings bind nationwide on federal questions. Courts of appeals create binding precedent within their circuits; district-court rulings have a different reach. A judicial holding is not “below” an agency policy manual.',
    links: [
      ['U.S. Supreme Court opinions', 'https://www.supremecourt.gov/opinions/opinions.aspx'],
      ['CourtListener', 'https://www.courtlistener.com/'],
    ],
  },
  {
    icon: Scale,
    title: 'Federal regulations',
    role: 'Legally binding agency rules when valid',
    text: 'Title 8 of the Code of Federal Regulations contains rules implementing the Immigration and Nationality Act. Regulations must be read consistently with controlling statutes and judicial decisions.',
    links: [['8 C.F.R.', 'https://www.ecfr.gov/current/title-8']],
  },
  {
    icon: Building2,
    title: 'USCIS policy, forms and instructions',
    role: 'Operational authority and agency interpretation',
    text: 'The USCIS Policy Manual, form instructions, fee schedule and official alerts explain how USCIS currently administers the law. They matter enormously in practice, but they are not interchangeable with statutes or regulations.',
    links: [
      ['USCIS Policy Manual', 'https://www.uscis.gov/policy-manual'],
      ['USCIS Forms', 'https://www.uscis.gov/forms/all-forms'],
      ['USCIS Fee Schedule', 'https://www.uscis.gov/g-1055'],
    ],
  },
  {
    icon: TriangleAlert,
    title: 'Proposed rules and announcements',
    role: 'Not current law merely because published',
    text: 'A notice of proposed rulemaking explains what an agency may change. It does not become an operative rule unless the agency completes the rulemaking process and a final rule takes effect.',
    links: [['Federal Register', 'https://www.federalregister.gov/agencies/homeland-security-department']],
  },
]

const researchRules = [
  'State the rule that governs today before describing proposals, political arguments or historical alternatives.',
  'Prefer the primary text: Constitution, statute, regulation, opinion, form instruction, fee schedule or official policy alert.',
  'Record a verification date for facts that can change, including fees, tests, processing practices and current officials.',
  'Separate legal eligibility rules from evidence requirements, filing mechanics and agency processing guidance.',
  'For historical citizenship claims, identify the law in effect when the relevant birth, naturalization, custody or age event occurred.',
  'When authorities disagree, describe the conflict and the jurisdictional posture instead of manufacturing “balance” between unequal authorities.',
]

export default function SourcesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Research methodology · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How CitizenApproved decides what is authoritative</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Citizenship information becomes dangerous when a proposal is labeled law, an old form instruction is treated as current, or an agency webpage is presented as if it outranks a court holding. This page shows the source discipline behind the site.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-5">
          {sourceTypes.map(source => {
            const Icon = source.icon
            return (
              <article key={source.title} className="glass-panel p-7 md:p-8">
                <div className="grid lg:grid-cols-[220px_1fr] gap-6">
                  <div><Icon className="w-7 h-7 text-cyan-400 mb-3" /><div className="text-xs uppercase tracking-wider text-cyan-300 mb-2">{source.role}</div><h2 className="text-xl font-semibold">{source.title}</h2></div>
                  <div><p className="text-gray-300 leading-relaxed mb-4">{source.text}</p><div className="flex flex-wrap gap-4">{source.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer" className="text-cyan-300 text-sm">{label} <ExternalLink className="inline w-3.5 h-3.5" /></a>)}</div></div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <ShieldCheck className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-5">CitizenApproved research rules</h2>
            <ol className="space-y-4">{researchRules.map((rule, index) => <li key={rule} className="flex gap-4 text-gray-300"><span className="text-cyan-300 font-mono">{String(index + 1).padStart(2, '0')}</span><span>{rule}</span></li>)}</ol>
          </div>
          <div className="glass-panel p-8">
            <BookOpen className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-2xl font-bold mb-5">Useful citation translations</h2>
            <div className="space-y-4 text-gray-300">
              <div><code className="text-cyan-300">8 U.S.C. § 1427</code><p className="text-sm text-gray-400 mt-1">Title 8 of the United States Code, section 1427; the standard naturalization statute.</p></div>
              <div><code className="text-cyan-300">INA § 316</code><p className="text-sm text-gray-400 mt-1">The Immigration and Nationality Act section corresponding to 8 U.S.C. § 1427.</p></div>
              <div><code className="text-cyan-300">8 C.F.R. § 316.2</code><p className="text-sm text-gray-400 mt-1">A federal regulation implementing naturalization eligibility rules.</p></div>
              <div><code className="text-cyan-300">USCIS Policy Manual, Vol. 12</code><p className="text-sm text-gray-400 mt-1">USCIS&apos;s current administrative guidance on citizenship and naturalization.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8">
          <h2 className="text-2xl font-bold mb-4">A note on secondary sources</h2>
          <p className="text-gray-300 mb-4">Congressional Research Service, GAO, CBO, academic scholarship, legal treatises, nonprofit organizations, advocacy groups and news reporting can add valuable history, empirical context and competing interpretations. CitizenApproved may use them for context, but a secondary source does not replace the primary authority when the primary text is available.</p>
          <p className="text-gray-400">For practical legal help, USCIS also maintains information about finding authorized legal services. Only attorneys and DOJ-accredited representatives may provide immigration legal advice in the roles permitted by law.</p>
          <a href="https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/find-legal-services" target="_blank" rel="noreferrer" className="inline-block mt-4 text-cyan-300">Find authorized legal services <ArrowRight className="inline w-4 h-4" /></a>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-5 text-sm">
          <Link href="/updates" className="text-cyan-300">Current policy ledger <ArrowRight className="inline w-4 h-4" /></Link>
          <Link href="/legal" className="text-cyan-300">Legal foundation <ArrowRight className="inline w-4 h-4" /></Link>
          <Link href="/pathways" className="text-cyan-300">Citizenship pathways <ArrowRight className="inline w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  )
}
