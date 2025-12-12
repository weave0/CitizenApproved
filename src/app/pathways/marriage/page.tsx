import { 
  Users, ChevronRight, Clock, CheckCircle, AlertTriangle, 
  FileText, Scale, BookOpen, Heart, Calendar, MapPin
} from 'lucide-react'
import Link from 'next/link'
import { MARRIAGE_NATURALIZATION, USCIS_FORMS, NATURALIZATION_TIMELINES } from '@/lib/legal/citizenship-law'

export default function MarriagePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">CitizenApproved</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/pathways" className="text-gray-400 hover:text-white transition-colors">
                Pathways
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-white transition-colors">
                Legal Basis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/pathways" className="hover:text-white transition-colors">Pathways</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-pink-400">Marriage (3-Year)</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shrink-0">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Marriage to U.S. Citizen</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                Expedited 3-year naturalization pathway for spouses of United States citizens 
                living in marital union. Two years shorter than the standard naturalization process.
              </p>
            </div>
          </div>

          {/* Legal Citations */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="font-mono text-sm bg-pink-500/20 text-pink-400 px-4 py-2 rounded-lg">
              {MARRIAGE_NATURALIZATION.statute}
            </span>
            <span className="font-mono text-sm bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg">
              {MARRIAGE_NATURALIZATION.inaSection}
            </span>
            <span className="font-mono text-sm bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
              {MARRIAGE_NATURALIZATION.cfr}
            </span>
          </div>
        </div>
      </section>

      {/* Key Benefit */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-pink-500/20">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-white mb-2">3 Years</div>
                <div className="text-gray-400">vs. 5 years standard</div>
              </div>
              <div className="md:border-l md:border-white/10 md:pl-8">
                <p className="text-gray-300">
                  Spouses of U.S. citizens may naturalize after only 3 years as a lawful permanent 
                  resident, provided they meet the marital union and other eligibility requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Requirements */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                Eligibility Requirements
              </h2>
              
              <div className="space-y-4">
                {/* Marriage Requirement */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-6 h-6 text-pink-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Marital Union</h3>
                      <p className="text-gray-400 mb-4">
                        Must be married to and living in marital union with the same U.S. citizen 
                        spouse for the entire 3-year period. The spouse must have been a U.S. citizen 
                        for all 3 years.
                      </p>
                      <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                        <p className="text-sm text-pink-400 font-semibold mb-2">
                          &quot;Living in Marital Union&quot; means:
                        </p>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• The marriage is valid and legally recognized</li>
                          <li>• The couple lives together as husband and wife</li>
                          <li>• Marital community has not been disrupted</li>
                          <li>• No legal separation or divorce proceedings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Residence */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pink-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Continuous Residence</h3>
                      <p className="text-gray-400">
                        Must have been lawfully admitted for permanent residence and resided 
                        continuously in the United States for at least <strong className="text-white">3 years</strong> immediately 
                        preceding the filing of the application.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Physical Presence */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-pink-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Physical Presence</h3>
                      <p className="text-gray-400">
                        Must have been physically present in the United States for at least 
                        <strong className="text-white"> 18 months</strong> (half of the 3-year period).
                      </p>
                    </div>
                  </div>
                </div>

                {/* State Residence */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pink-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">State/District Residence</h3>
                      <p className="text-gray-400">
                        Must have resided in the state or USCIS district where filing for at least 
                        <strong className="text-white"> 3 months</strong> immediately before filing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Good Moral Character */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-6 h-6 text-pink-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Good Moral Character</h3>
                      <p className="text-gray-400">
                        Must be a person of good moral character for the entire 3-year period and 
                        continue to be so through the administration of the Oath of Allegiance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Timeline Card */}
              <div className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-pink-400" />
                  Timeline
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Eligibility Period</div>
                    <div className="text-2xl font-bold text-white">
                      {NATURALIZATION_TIMELINES.marriage.totalYears}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Early Filing</div>
                    <div className="text-lg font-semibold text-pink-400">
                      {NATURALIZATION_TIMELINES.marriage.earlyFiling}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Physical Presence</div>
                    <div className="text-lg font-semibold text-white">
                      {NATURALIZATION_TIMELINES.marriage.physicalPresence}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fees Card */}
              <div className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-pink-400" />
                  Filing Fees
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Form N-400</span>
                    <span className="text-white font-semibold">${USCIS_FORMS.N400.filingFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Biometrics</span>
                    <span className="text-white font-semibold">${USCIS_FORMS.N400.biometricsFee}</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-pink-400 font-bold text-xl">
                      ${USCIS_FORMS.N400.filingFee + USCIS_FORMS.N400.biometricsFee}
                    </span>
                  </div>
                </div>
              </div>

              {/* Comparison Card */}
              <div className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white mb-4">vs. Standard (5-Year)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Residence</span>
                    <div className="flex items-center">
                      <span className="text-gray-500 line-through mr-2">5 yr</span>
                      <span className="text-pink-400 font-semibold">3 yr</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Physical Presence</span>
                    <div className="flex items-center">
                      <span className="text-gray-500 line-through mr-2">30 mo</span>
                      <span className="text-pink-400 font-semibold">18 mo</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">GMC Period</span>
                    <div className="flex items-center">
                      <span className="text-gray-500 line-through mr-2">5 yr</span>
                      <span className="text-pink-400 font-semibold">3 yr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Provisions */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-purple-400" />
            Special Provisions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Employment Abroad */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Spouse Employed Abroad
              </h3>
              <p className="text-gray-400 mb-4">
                Special provisions exist for spouses of U.S. citizens who are regularly stationed abroad 
                in qualifying employment (U.S. Government, certain organizations, American research institutions).
              </p>
              <div className="bg-purple-500/10 rounded-lg p-4">
                <p className="text-sm text-purple-400 font-semibold mb-2">Benefits:</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• No continuous residence requirement</li>
                  <li>• No physical presence requirement</li>
                  <li>• Immediate eligibility upon approval</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500 mt-4 font-mono">
                8 U.S.C. § 1430(b) - INA § 319(b)
              </p>
            </div>

            {/* Death of Citizen Spouse */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Death of Citizen Spouse
              </h3>
              <p className="text-gray-400 mb-4">
                If the U.S. citizen spouse dies during the 3-year period, the surviving spouse 
                may still be eligible under this provision if the marriage was in good faith.
              </p>
              <div className="bg-gray-500/10 rounded-lg p-4 border border-white/10">
                <p className="text-sm text-gray-300">
                  The surviving spouse must file the application while still a lawful permanent 
                  resident and must not have remarried.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Warnings */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-yellow-400" />
            Important Considerations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-white mb-3">Bona Fide Marriage Requirement</h3>
              <p className="text-gray-400">
                The marriage must be entered into in good faith, not solely for immigration purposes. 
                USCIS will examine evidence of a genuine marital relationship including joint 
                financial records, cohabitation, and shared responsibilities.
              </p>
            </div>

            <div className="glass-panel p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-white mb-3">Marriage Fraud Consequences</h3>
              <p className="text-gray-400">
                Immigration fraud is a serious federal crime. Entering a fraudulent marriage 
                for immigration benefits can result in denial, deportation, criminal prosecution, 
                and permanent bars to future immigration benefits.
              </p>
            </div>

            <div className="glass-panel p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-semibold text-white mb-3">Conditional Residence</h3>
              <p className="text-gray-400">
                If the green card was obtained through marriage of less than 2 years, the LPR 
                receives conditional status and must file Form I-751 to remove conditions before 
                the naturalization eligibility date.
              </p>
            </div>

            <div className="glass-panel p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold text-white mb-3">Divorce During Process</h3>
              <p className="text-gray-400">
                If the marriage ends before the oath ceremony, eligibility under § 1430 is lost. 
                The applicant may still qualify under the standard 5-year provision if other 
                requirements are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Text */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-cyan-400" />
            Primary Statutory Text
          </h2>

          <div className="glass-panel p-6 font-mono text-sm">
            <div className="text-pink-400 mb-4">{MARRIAGE_NATURALIZATION.title}</div>
            <div className="text-gray-400 whitespace-pre-wrap leading-relaxed">
              {MARRIAGE_NATURALIZATION.statutoryText}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <a 
                href="https://www.law.cornell.edu/uscode/text/8/1430"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View full statute on Cornell Law →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p className="mb-2">
            Information based on Title 8 U.S.C. and 8 CFR. This is educational material, not legal advice.
          </p>
          <p>
            © {new Date().getFullYear()} CitizenApproved. Consult a licensed immigration attorney for your specific situation.
          </p>
        </div>
      </footer>
    </main>
  )
}
