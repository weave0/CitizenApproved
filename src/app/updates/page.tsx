import Link from 'next/link'
import { ExternalLink, Scale, Clock3, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { LAST_POLICY_REVIEW, POLICY_UPDATES, statusLabel } from '@/lib/policy/current-policy'

function badgeClasses(status: string) {
  if (status === 'proposed') return 'border-amber-400/30 bg-amber-400/10 text-amber-300'
  if (status === 'current-law') return 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
  return 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
}

export default function UpdatesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
              <Clock3 className="w-4 h-4" />
              Last policy review: August 29, 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">What changed — and what did not</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl">
              Citizenship law changes through different channels: Congress, regulations, court decisions,
              and agency policy. CitizenApproved labels those authorities separately so a proposal is not
              mistaken for law and a temporary processing practice is not mistaken for a statute.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="glass-panel p-5">
              <Scale className="w-6 h-6 text-emerald-300 mb-3" />
              <h2 className="font-semibold text-white mb-2">Current law first</h2>
              <p className="text-sm text-[var(--text-secondary)]">Binding constitutional, statutory, regulatory, and Supreme Court rules are identified before competing arguments.</p>
            </div>
            <div className="glass-panel p-5">
              <AlertTriangle className="w-6 h-6 text-amber-300 mb-3" />
              <h2 className="font-semibold text-white mb-2">Proposals stay proposals</h2>
              <p className="text-sm text-[var(--text-secondary)]">Pending rules and political proposals are explained without presenting them as already effective.</p>
            </div>
            <div className="glass-panel p-5">
              <CheckCircle2 className="w-6 h-6 text-cyan-300 mb-3" />
              <h2 className="font-semibold text-white mb-2">Primary sources</h2>
              <p className="text-sm text-[var(--text-secondary)]">Each material update links to the government or court source a reader can inspect directly.</p>
            </div>
          </div>

          <div className="space-y-6">
            {POLICY_UPDATES.map((update) => (
              <article key={update.id} className="glass-panel p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <span className={`inline-flex px-3 py-1 rounded-full border text-xs font-semibold tracking-wide ${badgeClasses(update.status)}`}>
                      {statusLabel(update.status)}
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-4">{update.title}</h2>
                  </div>
                  <div className="text-xs text-[var(--text-muted)] md:text-right whitespace-nowrap">
                    Verified {update.lastVerified}
                    {update.effectiveDate && <div>Effective {update.effectiveDate}</div>}
                    {update.publishedDate && <div>Published {update.publishedDate}</div>}
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{update.summary}</p>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 mb-5">
                  <div className="text-xs uppercase tracking-wider text-white/50 mb-2">What this means</div>
                  <p className="text-white/80 leading-relaxed">{update.whatItMeans}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {update.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
                    >
                      {source.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 glass-panel p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-3">How to read CitizenApproved</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              This site is educational and does not provide legal advice. Immigration and nationality questions can turn on dates,
              travel history, family relationships, criminal records, military service, and other facts. When the stakes are personal,
              verify the current rule with USCIS and consider advice from a licensed immigration attorney or DOJ-accredited representative.
            </p>
            <Link href="/sources" className="text-cyan-300 hover:text-cyan-200">See the source library →</Link>
          </div>

          <p className="mt-8 text-xs text-white/40">Policy review marker: {LAST_POLICY_REVIEW}</p>
        </div>
      </section>
    </main>
  )
}
