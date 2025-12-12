import { 
  Award, ChevronRight, Clock, CheckCircle, AlertTriangle, 
  FileText, Scale, BookOpen, Calendar, MapPin, Heart, GraduationCap, Flag
} from 'lucide-react'
import Link from 'next/link'
import { NATURALIZATION_REQUIREMENTS, NATURALIZATION_TESTING, OATH_OF_ALLEGIANCE, USCIS_FORMS, NATURALIZATION_TIMELINES } from '@/lib/legal/citizenship-law'

export default function NaturalizationPage() {
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
            <span className="text-cyan-400">Naturalization (5-Year)</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Naturalization</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                The standard 5-year pathway to U.S. citizenship for lawful permanent residents.
                The most common route to becoming an American citizen.
              </p>
            </div>
          </div>

          {/* Legal Citations */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="font-mono text-sm bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg">
              {NATURALIZATION_REQUIREMENTS.statute}
            </span>
            <span className="font-mono text-sm bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg">
              {NATURALIZATION_REQUIREMENTS.inaSection}
            </span>
            <span className="font-mono text-sm bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
              {NATURALIZATION_REQUIREMENTS.cfr}
            </span>
          </div>
        </div>
      </section>

      {/* Requirements Overview */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Requirements */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                General Requirements
              </h2>
              
              <div className="space-y-4">
                {/* Age Requirement */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Age Requirement</h3>
                      <p className="text-gray-400">
                        Must be at least <strong className="text-white">18 years of age</strong> at 
                        the time of filing Form N-400.
                      </p>
                      <p className="text-sm text-cyan-400 mt-2 font-mono">
                        8 U.S.C. § 1445(b)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Residence */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Continuous Residence</h3>
                      <p className="text-gray-400 mb-4">
                        Must have been lawfully admitted for permanent residence and maintained 
                        continuous residence for <strong className="text-white">5 years</strong> immediately 
                        preceding the filing of application.
                      </p>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Absence Rules:</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                          {NATURALIZATION_REQUIREMENTS.absenceRules.map((rule, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="w-4 h-4 mr-2 text-cyan-400 shrink-0 mt-0.5" />
                              {rule}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Physical Presence */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Physical Presence</h3>
                      <p className="text-gray-400">
                        Must have been physically present in the United States for at least 
                        <strong className="text-white"> {NATURALIZATION_REQUIREMENTS.physicalPresenceMonths} months</strong> during 
                        the 5-year period.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        This is actual time spent in the U.S., which may include brief trips abroad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* State Residence */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">State/District Residence</h3>
                      <p className="text-gray-400">
                        Must have resided in the state or USCIS district where the application is 
                        filed for at least <strong className="text-white">3 months</strong> immediately 
                        preceding filing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Good Moral Character */}
                <div className="gradient-border p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Good Moral Character</h3>
                      <p className="text-gray-400 mb-4">
                        Must be a person of good moral character for the statutory period 
                        (5 years) and continue to be of good moral character up to the time of 
                        taking the Oath of Allegiance.
                      </p>
                      <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                        <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Bars to Good Moral Character
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          {NATURALIZATION_REQUIREMENTS.goodMoralCharacter.bars.slice(0, 5).map((bar, idx) => (
                            <li key={idx}>• {bar}</li>
                          ))}
                        </ul>
                      </div>
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
                  <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                  Timeline
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Eligibility Period</div>
                    <div className="text-2xl font-bold text-white">
                      {NATURALIZATION_TIMELINES.standard.totalYears}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Early Filing</div>
                    <div className="text-lg font-semibold text-cyan-400">
                      {NATURALIZATION_TIMELINES.standard.earlyFiling}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Processing Time</div>
                    <div className="text-lg font-semibold text-white">
                      {NATURALIZATION_TIMELINES.standard.processingTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fees Card */}
              <div className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-cyan-400" />
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
                    <span className="text-cyan-400 font-bold text-xl">
                      ${USCIS_FORMS.N400.filingFee + USCIS_FORMS.N400.biometricsFee}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Fee waivers available for eligible applicants
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a 
                    href="https://www.uscis.gov/n-400" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    → Form N-400 (USCIS)
                  </a>
                  <a 
                    href="https://www.law.cornell.edu/uscode/text/8/1427" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    → 8 U.S.C. § 1427 (Full Text)
                  </a>
                  <a 
                    href="https://www.law.cornell.edu/cfr/text/8/part-316" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    → 8 CFR Part 316
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* English & Civics Testing */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-purple-400" />
            English & Civics Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* English Test */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">English Language Test</h3>
              <p className="text-gray-400 mb-4">
                Applicants must demonstrate an understanding of the English language, 
                including an ability to read, write, and speak words in ordinary usage.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Reading: Read 1 of 3 sentences correctly</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Writing: Write 1 of 3 sentences correctly</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Speaking: Tested during interview</span>
                </div>
              </div>
            </div>

            {/* Civics Test */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Civics Test</h3>
              <p className="text-gray-400 mb-4">
                Applicants must demonstrate knowledge of U.S. history and government.
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {NATURALIZATION_TESTING.civicsTest.totalQuestions}
                </div>
                <p className="text-gray-400 text-sm">
                  Total questions in study guide. Officer asks up to 10 questions; 
                  must answer <strong className="text-white">{NATURALIZATION_TESTING.civicsTest.questionsAsked}</strong> correctly to pass.
                </p>
              </div>
            </div>
          </div>

          {/* Exemptions */}
          <div className="mt-8 glass-panel p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
              Exemptions & Accommodations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Age/Residence Exemptions</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {NATURALIZATION_TESTING.exemptions.map((exemption, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 text-cyan-400 shrink-0 mt-0.5" />
                      {exemption}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Disability Accommodations</h4>
                <p className="text-sm text-gray-400">
                  Applicants with disabilities may request accommodations (Form N-648) 
                  for the English and/or civics tests. Determinations made on a case-by-case basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oath of Allegiance */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Flag className="w-6 h-6 mr-3 text-red-400" />
            Oath of Allegiance
          </h2>

          <div className="gradient-border p-8">
            <p className="text-sm text-gray-400 mb-4">
              <strong className="text-cyan-400">{OATH_OF_ALLEGIANCE.statute}</strong> • {OATH_OF_ALLEGIANCE.inaSection}
            </p>
            <blockquote className="text-lg text-gray-300 italic leading-relaxed">
              &quot;{OATH_OF_ALLEGIANCE.text}&quot;
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-3">
              {OATH_OF_ALLEGIANCE.components.map((component, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full"
                >
                  {component.title}
                </span>
              ))}
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
            <div className="text-cyan-400 mb-4">{NATURALIZATION_REQUIREMENTS.title}</div>
            <div className="text-gray-400 whitespace-pre-wrap leading-relaxed">
              {NATURALIZATION_REQUIREMENTS.statutoryText}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <a 
                href="https://www.law.cornell.edu/uscode/text/8/1427"
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
