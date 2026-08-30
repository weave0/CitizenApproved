import Link from 'next/link'
import { ArrowRight, BadgeCheck, BookOpenCheck, Gavel, History, Languages, Scale } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const topics = [
  {
    icon: BadgeCheck,
    title: 'Proof of U.S. citizenship',
    description: 'Birth certificates, passports, Consular Reports of Birth Abroad, Certificates of Citizenship and Certificates of Naturalization are not interchangeable in every context.',
    href: '/topics/proof',
  },
  {
    icon: Scale,
    title: 'Dual nationality and loss of nationality',
    description: 'Holding another nationality does not by itself terminate U.S. nationality. Learn the voluntariness-and-intent rule and the formal renunciation process.',
    href: '/topics/dual-nationality',
  },
  {
    icon: Gavel,
    title: 'N-400 denials, hearings and court review',
    description: 'A naturalization denial has a defined administrative-review path, and federal district court review can be de novo after the statutory hearing process.',
    href: '/topics/review',
  },
  {
    icon: Languages,
    title: 'English, civics and disability exceptions',
    description: 'The 50/20, 55/15 and 65/20 rules, Form N-648, and disability accommodations solve different problems and should not be conflated.',
    href: '/topics/exceptions',
  },
  {
    icon: History,
    title: 'Historical citizenship law',
    description: 'For many citizenship-through-parent claims, the decisive law is the statute in effect when a birth or later qualifying event occurred—not the statute on the books today.',
    href: '/topics/historical-law',
  },
] as const

export default function TopicsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Advanced guides · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The questions that do not fit on a pathway card</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Citizenship research often becomes difficult after the basic pathway is identified. These guides focus on evidence, historical law, review rights, testing exceptions, and nationality questions that routinely require more precision.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link key={topic.href} href={topic.href} className="glass-panel p-7 group hover:border-cyan-400/30 transition-colors">
                <Icon className="w-7 h-7 text-cyan-400 mb-4" />
                <h2 className="text-xl font-semibold mb-3">{topic.title}</h2>
                <p className="text-gray-400 mb-5">{topic.description}</p>
                <span className="text-cyan-300">Open guide <ArrowRight className="inline w-4 h-4" /></span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <BookOpenCheck className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Use the governing date</h2>
            <p className="text-gray-300">Nationality law has changed repeatedly. For citizenship at birth and citizenship through parents, dates can control which statutory conditions apply. The current statute is not automatically the right statute for an older claim.</p>
          </div>
          <div className="glass-panel p-8">
            <Gavel className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Use the governing authority</h2>
            <p className="text-gray-300">USCIS instructions answer filing questions; statutes and regulations define legal elements; courts interpret those authorities. CitizenApproved identifies the type of authority so the reader can tell what a source can actually establish.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
