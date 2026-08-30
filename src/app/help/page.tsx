import type { LucideIcon } from 'lucide-react'
import {
  Accessibility,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Building2,
  ExternalLink,
  FileText,
  Gavel,
  Globe2,
  Search,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import {
  OFFICIAL_RESOURCES,
  type OfficialResource,
  type ResourceKind,
  LAST_RESOURCE_REVIEW,
} from '@/lib/resources/official-resources'
import { formatReviewDate } from '@/lib/policy/current-policy'

const groups: Array<{
  title: string
  subtitle: string
  icon: LucideIcon
  kinds: ResourceKind[]
}> = [
  {
    title: 'Apply, file, and check a case',
    subtitle: 'Use USCIS for the live form, current filing method, fee, receipt-number status, and processing information.',
    icon: FileText,
    kinds: ['apply', 'case'],
  },
  {
    title: 'Study for naturalization',
    subtitle: 'Use USCIS study materials and the official federal orientation pages for the test version that applies to your filing date.',
    icon: BookOpen,
    kinds: ['study'],
  },
  {
    title: 'Language access',
    subtitle: 'Use official multilingual material where available. CitizenApproved is translation-friendly, but a browser translation is not a substitute for an official form or instruction.',
    icon: Globe2,
    kinds: ['language'],
  },
  {
    title: 'Disability access and testing exceptions',
    subtitle: 'USCIS treats appointment accommodations and the N-648 medical exception as different processes. Use the official pathway that matches the need.',
    icon: Accessibility,
    kinds: ['accessibility'],
  },
  {
    title: 'Authorized legal help and scam protection',
    subtitle: 'Immigration legal advice should come from a licensed attorney or an authorized accredited representative. Government rosters can help you verify who is authorized.',
    icon: ShieldCheck,
    kinds: ['legal-help', 'fraud'],
  },
  {
    title: 'Citizenship questions from abroad and proof of citizenship',
    subtitle: 'The Department of State is central for passports, CRBAs, many citizenship questions abroad, dual nationality, and loss or relinquishment of nationality.',
    icon: Building2,
    kinds: ['abroad', 'proof'],
  },
  {
    title: 'Read the controlling law',
    subtitle: 'Use the official U.S. Code, eCFR, Federal Register, and court opinions when the question is what the law actually says or whether a proposal became effective.',
    icon: Gavel,
    kinds: ['law'],
  },
]

function OfficialLink({ resource }: { resource: OfficialResource }) {
  return (
    <article className="glass-panel p-6">
      <div className="text-xs font-semibold uppercase tracking-wide text-cyan-300 mb-2">{resource.agency}</div>
      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
      <p className="text-gray-300 mb-3">{resource.description}</p>
      {resource.note && <p className="text-sm text-yellow-100/80 mb-4">Why it matters: {resource.note}</p>}
      <a
        href={resource.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-cyan-300 underline underline-offset-4"
      >
        Open official resource <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </a>
    </article>
  )
}

export default function HelpPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Official-resource guide · links reviewed {formatReviewDate(LAST_RESOURCE_REVIEW)}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Start with the right government source.</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">
            U.S. citizenship questions cross several agencies. CitizenApproved explains the map, then sends you to the agency or legal source that actually controls the next step.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5">
          <div className="glass-panel p-7">
            <Building2 className="w-7 h-7 text-cyan-400 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-3">USCIS</h2>
            <p className="text-gray-300">Naturalization applications, Certificates of Citizenship, current forms and fees, case status, interviews, accommodations, and most benefit adjudications inside the United States.</p>
          </div>
          <div className="glass-panel p-7">
            <Globe2 className="w-7 h-7 text-violet-400 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-3">Department of State</h2>
            <p className="text-gray-300">U.S. passports, Consular Reports of Birth Abroad, many citizenship determinations abroad, dual-nationality guidance, and formal loss or relinquishment of nationality.</p>
          </div>
          <div className="glass-panel p-7">
            <Gavel className="w-7 h-7 text-green-400 mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-3">Courts, Congress, and rulemaking sources</h2>
            <p className="text-gray-300">The U.S. Code provides statutes, eCFR provides current regulations, the Federal Register shows proposed and final rules, and courts provide binding interpretations within their jurisdiction.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <Search className="w-7 h-7 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-bold mb-2">Find the resource by what you are trying to do</h2>
              <p className="text-gray-400 max-w-4xl">These are curated official starting points, not paid referrals. Open the live government page before filing or relying on a deadline, fee, edition date, or eligibility rule.</p>
            </div>
          </div>

          <div className="space-y-12">
            {groups.map(({ title, subtitle, icon: Icon, kinds }) => {
              const resources = OFFICIAL_RESOURCES.filter((resource) => kinds.includes(resource.kind))
              return (
                <section key={title} aria-labelledby={`group-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="flex items-start gap-4 mb-5">
                    <Icon className="w-6 h-6 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <h2 id={`group-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-2xl font-bold mb-2">{title}</h2>
                      <p className="text-gray-400 max-w-4xl">{subtitle}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    {resources.map((resource) => <OfficialLink key={resource.url} resource={resource} />)}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="glass-panel p-8 border border-yellow-400/20">
            <AlertTriangle className="w-7 h-7 text-yellow-300 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">When self-help deserves a professional second look</h2>
            <p className="text-gray-300 mb-4">A government form can be simple while the underlying legal question is not. Individualized legal advice is especially worth considering when the answer depends on historical citizenship law, disputed parentage or custody, adoption, long absences, criminal history, prior removal proceedings, prior immigration fraud or misrepresentation, a false claim to U.S. citizenship, an N-400 denial, or a contested claim that you are already a U.S. citizen.</p>
            <a href="https://www.justice.gov/eoir/find-legal-representation" target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">Find authorized legal help through DOJ <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
          </div>
          <div className="glass-panel p-8">
            <ShieldCheck className="w-7 h-7 text-green-400 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">A simple source rule</h2>
            <ol className="space-y-3 text-gray-300 list-decimal pl-5">
              <li>Use CitizenApproved to understand the issue and vocabulary.</li>
              <li>Open the official agency page for the current process, form, fee, or study material.</li>
              <li>Open the statute, regulation, rulemaking document, or court opinion when the legal basis matters.</li>
              <li>Use authorized legal help when the facts are disputed, high-risk, historical, or case-specific.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          <Link href="/accessibility" className="px-5 py-3 rounded-lg border border-cyan-400/20 text-cyan-300">Language & accessibility <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
          <Link href="/glossary" className="px-5 py-3 rounded-lg border border-white/10 text-white">Plain-language glossary <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
          <Link href="/sources" className="px-5 py-3 rounded-lg border border-white/10 text-white">Source methodology <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  )
}
