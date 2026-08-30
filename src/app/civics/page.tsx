import Link from 'next/link'
import { AlertTriangle, BookOpen, CalendarDays, CheckCircle2, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CIVICS_TEST_VERSIONS, LAST_POLICY_REVIEW } from '@/lib/policy/current-policy'

export default function CivicsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
              <CalendarDays className="w-4 h-4" />
              Which test applies depends on when Form N-400 was filed
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5"><span className="gradient-text">Naturalization civics test guide</span></h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              USCIS now administers two civics-test versions. Use your N-400 filing date to determine which one applies, then study from the official USCIS question bank for that version.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <article className="glass-panel p-7">
              <div className="text-xs font-semibold tracking-wide text-cyan-300 mb-3">FILED BEFORE OCTOBER 20, 2025</div>
              <h2 className="text-2xl font-bold text-white mb-4">{CIVICS_TEST_VERSIONS.test2008.label}</h2>
              <dl className="space-y-4">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-white/60">Question pool</dt><dd className="font-semibold text-white">{CIVICS_TEST_VERSIONS.test2008.questionPool}</dd></div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-white/60">Questions asked</dt><dd className="font-semibold text-white">Up to {CIVICS_TEST_VERSIONS.test2008.questionsAsked}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-white/60">Correct to pass</dt><dd className="font-semibold text-emerald-300">{CIVICS_TEST_VERSIONS.test2008.correctToPass}</dd></div>
              </dl>
            </article>

            <article className="glass-panel p-7 border-cyan-400/20">
              <div className="text-xs font-semibold tracking-wide text-emerald-300 mb-3">FILED ON OR AFTER OCTOBER 20, 2025</div>
              <h2 className="text-2xl font-bold text-white mb-4">{CIVICS_TEST_VERSIONS.test2025.label}</h2>
              <dl className="space-y-4">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-white/60">Question pool</dt><dd className="font-semibold text-white">{CIVICS_TEST_VERSIONS.test2025.questionPool}</dd></div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-white/60">Questions asked</dt><dd className="font-semibold text-white">Up to {CIVICS_TEST_VERSIONS.test2025.questionsAsked}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-white/60">Correct to pass</dt><dd className="font-semibold text-emerald-300">{CIVICS_TEST_VERSIONS.test2025.correctToPass}</dd></div>
              </dl>
            </article>
          </div>

          <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-300 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Why CitizenApproved removed its old “official simulation”</h2>
                <p className="text-white/75 leading-relaxed">
                  The previous simulator mixed an expanded, home-written question set with language describing it as official USCIS material, and it used the older 10-question / 6-correct pass rule. That is not acceptable for a high-stakes educational tool. We have disabled that simulation rather than let learners practice against a falsely authoritative test.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-cyan-300" />
              <h2 className="text-xl font-semibold text-white">Use the official study materials</h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
              Questions about current elected officials can change, and USCIS controls the accepted answers and test administration. For preparation, use USCIS materials for the test version that applies to your filing date.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.uscis.gov/citizenship/2025-civics-test" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                2025 Civics Test <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                USCIS study resources <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Exceptions and accommodations still matter</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Some applicants qualify for age-and-residence exceptions to the English requirement, special civics consideration, or disability exceptions. Those rules are separate from the filing-date split above.
                </p>
                <a href="https://www.uscis.gov/citizenship/exceptions-and-accommodations" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  USCIS exceptions and accommodations <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/40">
            <span>Last policy review: {LAST_POLICY_REVIEW}</span>
            <Link href="/updates" className="text-cyan-300 hover:text-cyan-200">See all current policy updates →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
