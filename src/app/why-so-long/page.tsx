'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  DELAY_FACTORS,
  SPEED_UP_TIPS,
  OFFICIAL_RESOURCES,
  APPLICANT_RIGHTS,
  DelayFactor,
  SpeedUpTip
} from '@/lib/legal/processing-delays'

type ViewMode = 'why' | 'speedup' | 'rights' | 'resources'

export default function WhySoLongPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('why')
  const [expandedFactor, setExpandedFactor] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Cyber Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Why Does Citizenship Take So Long?
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Plain English explanations with official sources
          </p>
          <p className="text-gray-500 mt-1 text-sm">
            This page is written in simple English to help with translation into other languages.
          </p>
        </div>

        {/* Language Notice */}
        <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-start gap-3">
          <span className="text-2xl">🌐</span>
          <div>
            <p className="text-blue-400 font-medium">Need this in another language?</p>
            <p className="text-gray-400 text-sm">
              Use the language selector in the top-right corner of the page, or use your browser&apos;s 
              built-in translate feature. This page is written in simple English to make translation accurate.
            </p>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'why', label: 'Why So Long?', icon: '⏳' },
            { id: 'speedup', label: 'Speed Up Tips', icon: '⚡' },
            { id: 'rights', label: 'Your Rights', icon: '⚖️' },
            { id: 'resources', label: 'Get Help', icon: '🆘' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setViewMode(tab.id as ViewMode)}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === tab.id
                  ? 'bg-orange-500/20 border border-orange-500/50 text-orange-400'
                  : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {viewMode === 'why' && (
          <WhyDelaysView 
            factors={DELAY_FACTORS}
            expanded={expandedFactor}
            setExpanded={setExpandedFactor}
          />
        )}

        {viewMode === 'speedup' && (
          <SpeedUpView tips={SPEED_UP_TIPS} />
        )}

        {viewMode === 'rights' && (
          <RightsView rights={APPLICANT_RIGHTS} />
        )}

        {viewMode === 'resources' && (
          <ResourcesView resources={OFFICIAL_RESOURCES} />
        )}

        {/* Bottom Summary */}
        <div className="mt-8 p-6 glass-panel rounded-xl">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Summary: Why Citizenship Takes So Long</h3>
          <p className="text-gray-300 leading-relaxed">
            The citizenship process is slow because of <strong>too many applications</strong>, 
            <strong> not enough workers</strong>, <strong>old computer systems</strong>, 
            <strong> required background checks</strong>, and <strong>limited interview appointments</strong>. 
            USCIS is working to improve, but progress is slow. You can help your own case by 
            filing a complete application online and responding quickly to any requests.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
          <p className="text-gray-500 text-sm">
            <strong>Sources:</strong> Information on this page comes from official U.S. government reports 
            including GAO (Government Accountability Office), DHS Office of Inspector General, 
            USCIS Ombudsman Annual Reports, and USCIS official publications. Links to sources are 
            provided throughout this page.
          </p>
        </div>
      </div>
    </main>
  )
}

function WhyDelaysView({ 
  factors, 
  expanded, 
  setExpanded 
}: { 
  factors: DelayFactor[]
  expanded: string | null
  setExpanded: (id: string | null) => void
}) {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-800/50 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">Understanding the Delays</h2>
        <p className="text-gray-400">
          Click on each reason to learn more. We explain everything in simple words so you can 
          understand, and so this page can be translated accurately into other languages.
        </p>
      </div>

      {factors.map((factor, index) => (
        <div 
          key={factor.id}
          className="glass-panel rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setExpanded(expanded === factor.id ? null : factor.id)}
            className="w-full p-6 text-left flex items-start gap-4 hover:bg-gray-800/30 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-bold">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-orange-400">{factor.title}</h3>
              <p className="text-gray-300 mt-2">{factor.plainEnglish}</p>
            </div>
            <div className={`text-gray-400 transition-transform ${expanded === factor.id ? 'rotate-180' : ''}`}>
              ▼
            </div>
          </button>

          {expanded === factor.id && (
            <div className="px-6 pb-6 border-t border-gray-700/50 pt-4">
              {/* Statistics */}
              {factor.statistics && (
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {factor.statistics.map((stat, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Details */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">More Details</h4>
                <ul className="space-y-2">
                  {factor.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-orange-400">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">What Is Being Done?</h4>
                <div className="space-y-2">
                  {factor.solutions.map((solution, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-gray-800/30 rounded">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        solution.status === 'implemented' ? 'bg-green-500/20 text-green-400' :
                        solution.status === 'in_progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        solution.status === 'proposed' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {solution.status === 'implemented' ? '✓ Done' :
                         solution.status === 'in_progress' ? '⏳ Working' :
                         solution.status === 'proposed' ? '💡 Proposed' :
                         '⏸ Stalled'}
                      </span>
                      <span className="text-sm text-gray-300">{solution.what}</span>
                      <span className="text-xs text-gray-500">({solution.who})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sources */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Official Sources</h4>
                <div className="space-y-2">
                  {factor.officialSources.map((source, i) => (
                    <a 
                      key={i}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-gray-800/30 rounded border border-gray-700 hover:border-cyan-500/50 transition-colors"
                    >
                      <div className="text-cyan-400 text-sm font-medium">{source.name} ↗</div>
                      {source.quote && (
                        <p className="text-gray-400 text-xs mt-1 italic">&ldquo;{source.quote}&rdquo;</p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function SpeedUpView({ tips }: { tips: SpeedUpTip[] }) {
  const categories = ['high', 'medium', 'low'] as const

  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
        <h2 className="text-xl font-semibold text-green-400 mb-2">How to Speed Up Your Application</h2>
        <p className="text-gray-300">
          While you cannot control USCIS processing times, you CAN control how you prepare and file. 
          These tips can help avoid delays that are within your control.
        </p>
      </div>

      {categories.map(impact => {
        const categoryTips = tips.filter(t => t.impact === impact)
        if (categoryTips.length === 0) return null

        return (
          <div key={impact}>
            <h3 className={`text-lg font-semibold mb-3 ${
              impact === 'high' ? 'text-green-400' :
              impact === 'medium' ? 'text-yellow-400' :
              'text-gray-400'
            }`}>
              {impact === 'high' ? '🟢 High Impact' :
               impact === 'medium' ? '🟡 Medium Impact' :
               '🔵 Can Help'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {categoryTips.map(tip => (
                <div key={tip.id} className="glass-panel rounded-xl p-5">
                  <h4 className="font-semibold text-white mb-2">{tip.title}</h4>
                  <p className="text-gray-400 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <p className="text-yellow-400">
          <strong>⚠️ Warning:</strong> Be careful of anyone who promises to &ldquo;speed up&rdquo; your case 
          for money. Only USCIS can process your application. Scammers often target immigrants with 
          false promises.
        </p>
      </div>
    </div>
  )
}

function RightsView({ rights }: { rights: typeof APPLICANT_RIGHTS }) {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
        <h2 className="text-xl font-semibold text-purple-400 mb-2">Know Your Rights</h2>
        <p className="text-gray-300">
          As an applicant for U.S. citizenship, you have important legal rights. 
          Understanding these rights helps you advocate for yourself.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {rights.map((item, index) => (
          <div key={index} className="glass-panel rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">{item.right}</h4>
                <p className="text-gray-400 text-sm">{item.explanation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
        <h4 className="text-cyan-400 font-medium mb-2">Need Legal Help?</h4>
        <p className="text-gray-300 text-sm mb-3">
          If you believe your rights are not being respected, you may need legal help. 
          Many organizations provide free or low-cost immigration legal services.
        </p>
        <a 
          href="https://www.immigrationadvocates.org/nonprofit/legaldirectory/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 text-sm"
        >
          Find Free Legal Help Near You ↗
        </a>
      </div>
    </div>
  )
}

function ResourcesView({ resources }: { resources: typeof OFFICIAL_RESOURCES }) {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
        <h2 className="text-xl font-semibold text-cyan-400 mb-2">Official Resources to Get Help</h2>
        <p className="text-gray-300">
          These are free government resources. You do not need to pay anyone to use them.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <a 
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-xl p-5 hover:border-cyan-500/50 transition-colors block"
          >
            <h4 className="font-semibold text-cyan-400 mb-2">{resource.name} ↗</h4>
            <p className="text-gray-400 text-sm">{resource.description}</p>
          </a>
        ))}
      </div>

      {/* Contact Info in Plain English */}
      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">How to Contact USCIS</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📞</span>
            <div>
              <h4 className="font-medium text-white">Phone</h4>
              <p className="text-gray-400 text-sm">
                Call <strong className="text-cyan-400">1-800-375-5283</strong>. 
                Say &ldquo;InfoPass&rdquo; or &ldquo;case status&rdquo; to talk to a person. 
                Lines open Monday-Friday, 8am-8pm your local time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <h4 className="font-medium text-white">Online</h4>
              <p className="text-gray-400 text-sm">
                Create an account at <strong className="text-cyan-400">my.uscis.gov</strong> to 
                check your case, send messages, and schedule appointments online.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <h4 className="font-medium text-white">Congressman</h4>
              <p className="text-gray-400 text-sm">
                Your U.S. Representative can help with stuck cases for free. 
                Find yours at <strong className="text-cyan-400">house.gov/representatives</strong>. 
                Call their office and ask for &ldquo;casework&rdquo; or &ldquo;constituent services.&rdquo;
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">⚖️</span>
            <div>
              <h4 className="font-medium text-white">Ombudsman</h4>
              <p className="text-gray-400 text-sm">
                The USCIS Ombudsman is a government office that helps when USCIS makes mistakes 
                or cases are stuck for too long. Submit a request at <strong className="text-cyan-400">dhs.gov/case-assistance</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
        <h4 className="text-red-400 font-medium mb-2">⚠️ Beware of Scams</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• USCIS will NEVER call you asking for payment over the phone</li>
          <li>• USCIS will NEVER ask for payment by gift card or wire transfer</li>
          <li>• If someone promises to speed up your case for money, it is likely a scam</li>
          <li>• Always verify information on the official USCIS.gov website</li>
        </ul>
      </div>
    </div>
  )
}
