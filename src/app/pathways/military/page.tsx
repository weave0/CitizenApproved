import { 
  Shield, ChevronRight, Clock, CheckCircle, AlertTriangle, 
  FileText, Scale, BookOpen, Star, Award, Flag
} from 'lucide-react'
import Link from 'next/link'
import { MILITARY_NATURALIZATION, USCIS_FORMS, NATURALIZATION_TIMELINES } from '@/lib/legal/citizenship-law'

export default function MilitaryPage() {
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
            <span className="text-green-400">Military Service</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Military Naturalization</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                Expedited pathways to citizenship for members of the U.S. Armed Forces, 
                recognizing the service and sacrifice of immigrant service members.
              </p>
            </div>
          </div>

          {/* Legal Citations */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="font-mono text-sm bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
              8 U.S.C. § 1439
            </span>
            <span className="font-mono text-sm bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
              8 U.S.C. § 1440
            </span>
            <span className="font-mono text-sm bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg">
              INA §§ 328-329
            </span>
          </div>
        </div>
      </section>

      {/* Key Benefits Banner */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">$0</div>
                <div className="text-gray-400">Filing Fees</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">Expedited</div>
                <div className="text-gray-400">Processing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">Flexible</div>
                <div className="text-gray-400">Residence Req.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pathways */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Flag className="w-6 h-6 mr-3 text-green-400" />
            Two Distinct Pathways
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Peacetime */}
            <div className="gradient-border p-8">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Peacetime Service</h3>
                  <p className="text-sm font-mono text-blue-400">{MILITARY_NATURALIZATION.peacetime.statute}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                  <p className="text-sm text-blue-400 font-semibold mb-2">Service Requirement</p>
                  <p className="text-2xl font-bold text-white">1 Year</p>
                  <p className="text-gray-400 text-sm">Honorable Active-Duty Service</p>
                </div>

                <h4 className="text-sm font-semibold text-gray-300 flex items-center mt-6">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {MILITARY_NATURALIZATION.peacetime.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-400 shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  {MILITARY_NATURALIZATION.peacetime.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wartime */}
            <div className="gradient-border p-8 border-green-500/30">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Wartime/Hostilities</h3>
                  <p className="text-sm font-mono text-green-400">{MILITARY_NATURALIZATION.wartime.statute}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <p className="text-sm text-green-400 font-semibold mb-2">Service Requirement</p>
                  <p className="text-2xl font-bold text-white">Any Qualifying Period</p>
                  <p className="text-gray-400 text-sm">During Designated Hostilities</p>
                </div>

                <h4 className="text-sm font-semibold text-gray-300 flex items-center mt-6">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {MILITARY_NATURALIZATION.wartime.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Additional Benefits</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  {MILITARY_NATURALIZATION.wartime.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designated Periods of Hostility */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-purple-400" />
            Designated Periods of Hostility
          </h2>

          <div className="glass-panel p-6 mb-8">
            <p className="text-gray-400 mb-4">
              Executive Orders designate periods of armed conflict or military operations 
              that qualify for the expedited wartime naturalization provisions under § 1440.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MILITARY_NATURALIZATION.wartime.designatedPeriods.map((period, idx) => (
              <div key={idx} className="glass-panel p-4 border-l-4 border-green-500">
                <div className="text-white font-semibold">{period.name}</div>
                <div className="text-sm text-gray-400">{period.dates}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <AlertTriangle className="w-4 h-4 inline mr-2 text-yellow-400" />
            Additional periods may be designated by Executive Order. Check current USCIS guidance.
          </div>
        </div>
      </section>

      {/* Qualifying Service */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-blue-400" />
            Qualifying Armed Forces
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {MILITARY_NATURALIZATION.qualifyingService.map((service, idx) => (
              <div key={idx} className="glass-panel p-6 text-center">
                <div className="text-3xl mb-4">{service.icon}</div>
                <div className="text-white font-semibold">{service.branch}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Selected Reserve</h3>
              <p className="text-gray-400 text-sm">
                Members of the Selected Reserve of the Ready Reserve may also qualify under 
                certain conditions. This includes National Guard members in federal service.
              </p>
            </div>
            <div className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Service Type</h3>
              <p className="text-gray-400 text-sm">
                Service must be active duty. Training duty, inactive duty training, or active 
                duty for training generally does not count unless during designated hostilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Forms */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-cyan-400" />
            Process & Documentation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form N-400 */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Form N-400 (Military)</h3>
              <p className="text-gray-400 mb-4">
                Military applicants use the same Form N-400 but with military-specific sections 
                and fee exemption.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Filing Fee</span>
                  <span className="text-green-400 font-semibold">$0 (Waived)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Biometrics Fee</span>
                  <span className="text-green-400 font-semibold">$0 (Waived)</span>
                </div>
              </div>
            </div>

            {/* N-426 */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Form N-426</h3>
              <p className="text-gray-400 mb-4">
                Request for Certification of Military or Naval Service - required to verify 
                qualifying military service.
              </p>
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <p className="text-sm text-gray-400">
                  Must be certified by an authorized official of the military service branch.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-8 glass-panel p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-green-400" />
              Processing Timeline
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-gray-400">Standard Processing</div>
                <div className="text-xl font-bold text-white">{NATURALIZATION_TIMELINES.military.processingTime}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Overseas Ceremonies</div>
                <div className="text-xl font-bold text-white">Available</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Basic Training</div>
                <div className="text-xl font-bold text-white">On-site Processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posthumous Citizenship */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            Posthumous Citizenship
          </h2>

          <div className="gradient-border p-8 border-yellow-500/30">
            <p className="text-gray-400 mb-6">
              Under 8 U.S.C. § 1440-1, a service member who dies as a result of injury or 
              disease incurred during active-duty service in a designated period of military 
              hostility may be granted posthumous citizenship.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                <h4 className="text-yellow-400 font-semibold mb-2">Eligibility</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Death during active-duty service</li>
                  <li>• Service during designated hostilities</li>
                  <li>• Honorable service record</li>
                  <li>• Not previously denied naturalization</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-gray-300 font-semibold mb-2">Benefits to Family</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Surviving spouse expedited naturalization</li>
                  <li>• Children may derive citizenship</li>
                  <li>• Parents may receive certain benefits</li>
                </ul>
              </div>
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 font-mono text-sm">
              <div className="text-blue-400 mb-4">{MILITARY_NATURALIZATION.peacetime.title}</div>
              <div className="text-gray-400 whitespace-pre-wrap leading-relaxed text-xs">
                {MILITARY_NATURALIZATION.peacetime.statutoryText}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <a 
                  href="https://www.law.cornell.edu/uscode/text/8/1439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs"
                >
                  View full § 1439 on Cornell Law →
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">{MILITARY_NATURALIZATION.wartime.title}</div>
              <div className="text-gray-400 whitespace-pre-wrap leading-relaxed text-xs">
                {MILITARY_NATURALIZATION.wartime.statutoryText}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <a 
                  href="https://www.law.cornell.edu/uscode/text/8/1440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs"
                >
                  View full § 1440 on Cornell Law →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p className="mb-2">
            Information based on Title 8 U.S.C. This is educational material, not legal advice.
          </p>
          <p>
            © {new Date().getFullYear()} CitizenApproved. Consult a licensed immigration attorney for your specific situation.
          </p>
        </div>
      </footer>
    </main>
  )
}
