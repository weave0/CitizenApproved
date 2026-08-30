import Link from 'next/link'
import { ArrowDown, ArrowRight, Baby, BadgeCheck, Globe2, HeartHandshake, Medal, Route } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const nodes = [
  { icon: Baby, title: 'Born in the United States?', text: 'Start with the Fourteenth Amendment and 8 U.S.C. § 1401.', href: '/pathways/birthright' },
  { icon: Globe2, title: 'Born abroad with a U.S.-citizen parent?', text: 'Use the acquisition-at-birth statute in effect on the date of birth.', href: '/pathways/birthright' },
  { icon: BadgeCheck, title: 'Citizen parent before age 18?', text: 'Check INA 320, INA 322, or the historical law that applied when the relevant conditions were met.', href: '/pathways/derivative' },
  { icon: Medal, title: 'Qualifying U.S. military service?', text: 'Check INA 328 and INA 329 separately; their requirements are different.', href: '/pathways/military' },
  { icon: HeartHandshake, title: 'LPR married to a U.S. citizen?', text: 'INA 319(a) may allow the 3-year route if its spouse and marital-union requirements are satisfied.', href: '/pathways/marriage' },
  { icon: Route, title: 'Lawful permanent resident?', text: 'INA 316 is the ordinary 5-year naturalization framework.', href: '/pathways/naturalization' },
]

export default function FlowchartPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Visual pathway map · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Start with the legal question, not a yes/no verdict</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Citizenship law does not fit safely into one binary flowchart. This map is deliberately a routing tool: each branch takes you to the legal framework that must be tested against the person&apos;s actual dates and facts.</p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-6 text-center mb-4"><div className="text-sm text-cyan-300 mb-2">START</div><h2 className="text-2xl font-bold">What could be the source of U.S. citizenship?</h2></div>
          <ArrowDown className="w-6 h-6 text-cyan-400 mx-auto my-4" />
          <div className="grid md:grid-cols-2 gap-5">
            {nodes.map(node => {
              const Icon = node.icon
              return <Link key={node.title} href={node.href} className="glass-panel p-6 group"><Icon className="w-7 h-7 text-cyan-400 mb-4" /><h2 className="text-xl font-semibold mb-2">{node.title}</h2><p className="text-gray-400 mb-4">{node.text}</p><span className="text-cyan-300">Open legal framework <ArrowRight className="inline w-4 h-4" /></span></Link>
            })}
          </div>
          <div className="mt-8 glass-panel p-7 border border-yellow-400/20"><h2 className="text-xl font-semibold mb-3">Why the old diagram was retired</h2><p className="text-gray-300">It encoded shortcuts that were not legally reliable—for example, treating any trip over six months as automatically disqualifying, flattening military routes into the ordinary LPR path, and treating “under 18 with a citizen parent” as sufficient for automatic citizenship without status, residence and custody elements. A visual aid should simplify presentation, not simplify away the law.</p></div>
        </div>
      </section>
    </main>
  )
}
