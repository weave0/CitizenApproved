'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  FORM_PROCESSING_TIMES,
  NATURALIZATION_TIMELINE,
  NATURALIZATION_STATISTICS,
  TOP_DENIAL_REASONS,
  formatProcessingTime,
  calculateEstimatedTimeline,
  getUSCISProcessingTimesUrl,
  getCaseStatusUrl,
  type FormProcessingData,
  type TimelinePhase
} from '@/lib/legal/processing-times'

type ViewMode = 'overview' | 'timeline' | 'offices' | 'statistics'

export default function ProcessingTimesPage() {
  const [selectedForm, setSelectedForm] = useState<string>('N-400')
  const [viewMode, setViewMode] = useState<ViewMode>('overview')
  const [selectedState, setSelectedState] = useState<string>('')

  const formData = FORM_PROCESSING_TIMES[selectedForm]
  const estimatedTimeline = calculateEstimatedTimeline(selectedForm)

  const filteredOffices = useMemo(() => {
    if (!formData?.fieldOffices) return []
    if (!selectedState) return formData.fieldOffices
    return formData.fieldOffices.filter(o => o.state === selectedState)
  }, [formData, selectedState])

  const uniqueStates = useMemo(() => {
    if (!formData?.fieldOffices) return []
    const states = [...new Set(formData.fieldOffices.map(o => o.state))]
    return states.sort()
  }, [formData])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-cyan-900/30 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Processing Times
            </span>
          </Link>
          <div className="flex gap-4">
            <Link href="/eligibility" className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Eligibility
            </Link>
            <Link href="/documents" className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Documents
            </Link>
            <Link href="/civics" className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Civics
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-purple-400">Processing</span>{' '}
            <span className="text-white">Times & Statistics</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real processing time data, timeline breakdowns, and denial statistics 
            to help you plan your citizenship journey.
          </p>
        </div>

        {/* Form Selection */}
        <div className="glass-panel p-6 mb-8">
          <label htmlFor="form-select" className="block text-cyan-400 font-semibold mb-3">
            Select Application Type
          </label>
          <select
            id="form-select"
            title="Select Application Type"
            value={selectedForm}
            onChange={(e) => setSelectedForm(e.target.value)}
            className="w-full md:w-auto bg-gray-900/80 border border-cyan-900/50 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
          >
            {Object.entries(FORM_PROCESSING_TIMES).map(([key, form]) => (
              <option key={key} value={key}>
                {form.formNumber} - {form.formName}
              </option>
            ))}
          </select>
        </div>

        {formData && (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="glass-panel p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400">
                  {formatProcessingTime(formData.nationalAverage)}
                </div>
                <div className="text-gray-400 text-sm">National Average</div>
              </div>
              <div className="glass-panel p-6 text-center">
                <div className="text-3xl font-bold text-green-400">
                  {formData.nationalAverage.min} mo
                </div>
                <div className="text-gray-400 text-sm">Fastest Offices</div>
              </div>
              <div className="glass-panel p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {formData.nationalAverage.max} mo
                </div>
                <div className="text-gray-400 text-sm">Slowest Offices</div>
              </div>
              <div className="glass-panel p-6 text-center">
                <div className="text-3xl font-bold text-purple-400">
                  {formData.historicalTrend === 'increasing' ? '📈' : 
                   formData.historicalTrend === 'decreasing' ? '📉' : '➡️'}
                </div>
                <div className="text-gray-400 text-sm capitalize">{formData.historicalTrend || 'Stable'} Trend</div>
              </div>
            </div>

            {/* View Mode Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(['overview', 'timeline', 'offices', 'statistics'] as ViewMode[]).map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    viewMode === mode
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {mode === 'overview' && '📊 Overview'}
                  {mode === 'timeline' && '📅 Timeline'}
                  {mode === 'offices' && '🏢 By Office'}
                  {mode === 'statistics' && '📈 Statistics'}
                </button>
              ))}
            </div>

            {/* Overview View */}
            {viewMode === 'overview' && (
              <div className="space-y-6">
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{formData.formName}</h3>
                  <p className="text-gray-300 mb-6">{formData.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3">⚡ Factors Affecting Processing Time</h4>
                      <ul className="space-y-2">
                        {formData.factors.map((factor, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-cyan-400">•</span>
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3">💡 Tips to Speed Up Processing</h4>
                      <ul className="space-y-2">
                        {formData.tips.map((tip, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-green-400">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* External Links */}
                <div className="glass-panel p-6">
                  <h4 className="text-yellow-400 font-semibold mb-4">🔗 Official USCIS Resources</h4>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={getUSCISProcessingTimesUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      📊 Check Current Processing Times
                    </a>
                    <a
                      href={getCaseStatusUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      🔍 Check Your Case Status
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline View */}
            {viewMode === 'timeline' && selectedForm === 'N-400' && (
              <div className="space-y-4">
                <div className="glass-panel p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">N-400 Naturalization Timeline</h3>
                  <p className="text-gray-400">
                    Estimated total: <span className="text-cyan-400 font-bold">{estimatedTimeline.min}-{estimatedTimeline.max} months</span>
                  </p>
                </div>

                {/* Visual Timeline */}
                <div className="relative">
                  {NATURALIZATION_TIMELINE.map((phase, index) => (
                    <TimelinePhaseCard key={phase.id} phase={phase} index={index} isLast={index === NATURALIZATION_TIMELINE.length - 1} />
                  ))}
                </div>
              </div>
            )}

            {viewMode === 'timeline' && selectedForm !== 'N-400' && (
              <div className="glass-panel p-12 text-center">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-white mb-2">Timeline Not Available</h3>
                <p className="text-gray-400">
                  Detailed timeline breakdown is currently only available for N-400 applications.
                </p>
              </div>
            )}

            {/* Offices View */}
            {viewMode === 'offices' && (
              <div className="space-y-6">
                {formData.fieldOffices && formData.fieldOffices.length > 0 ? (
                  <>
                    <div className="glass-panel p-6">
                      <label htmlFor="state-filter" className="block text-cyan-400 font-semibold mb-3">
                        Filter by State
                      </label>
                      <select
                        id="state-filter"
                        title="Filter by State"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="bg-gray-900/80 border border-cyan-900/50 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                      >
                        <option value="">All States</option>
                        {uniqueStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredOffices.map(office => (
                        <div key={office.office} className="glass-panel p-5">
                          <h4 className="font-bold text-white mb-1">{office.office}</h4>
                          <p className="text-gray-400 text-sm mb-3">{office.city}, {office.state}</p>
                          <div className="text-2xl font-bold text-cyan-400">
                            {formatProcessingTime(office.processingTime)}
                          </div>
                          <p className="text-gray-500 text-xs mt-2">
                            Updated: {office.lastUpdated}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="glass-panel p-12 text-center">
                    <div className="text-5xl mb-4">🏢</div>
                    <h3 className="text-xl font-semibold text-white mb-2">No Office Data Available</h3>
                    <p className="text-gray-400">
                      Office-specific data is not available for this form type.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Statistics View */}
            {viewMode === 'statistics' && (
              <div className="space-y-8">
                {/* Historical Stats */}
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-bold text-white mb-6">📈 Historical Approval Rates (N-400)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-cyan-900/30">
                          <th className="text-left py-3 px-4 text-cyan-400">Fiscal Year</th>
                          <th className="text-right py-3 px-4 text-cyan-400">Received</th>
                          <th className="text-right py-3 px-4 text-cyan-400">Approved</th>
                          <th className="text-right py-3 px-4 text-cyan-400">Denied</th>
                          <th className="text-right py-3 px-4 text-cyan-400">Approval Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {NATURALIZATION_STATISTICS.map(stat => (
                          <tr key={stat.fiscalYear} className="border-b border-gray-800 hover:bg-white/5">
                            <td className="py-3 px-4 font-semibold text-white">{stat.fiscalYear}</td>
                            <td className="py-3 px-4 text-right text-gray-300">{stat.received.toLocaleString()}</td>
                            <td className="py-3 px-4 text-right text-green-400">{stat.approved.toLocaleString()}</td>
                            <td className="py-3 px-4 text-right text-red-400">{stat.denied.toLocaleString()}</td>
                            <td className="py-3 px-4 text-right">
                              <span className={`font-bold ${stat.approvalRate >= 90 ? 'text-green-400' : 'text-yellow-400'}`}>
                                {stat.approvalRate}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Denial Reasons */}
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-bold text-white mb-6">❌ Top Reasons for Denial</h3>
                  <div className="space-y-4">
                    {TOP_DENIAL_REASONS.map((reason, index) => (
                      <div key={index} className="bg-gray-900/50 rounded-lg p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-white">{reason.reason}</h4>
                          <span className="text-red-400 font-bold">{reason.percentage}%</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{reason.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-yellow-400 font-semibold">Examples:</span>
                            <ul className="mt-1 text-gray-300">
                              {reason.examples.map((ex, i) => (
                                <li key={i}>• {ex}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="text-green-400 font-semibold">Remediation:</span>
                            <p className="mt-1 text-gray-300">{reason.remediation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Disclaimer */}
        <div className="mt-12 glass-panel p-6 bg-gray-900/50 border border-gray-800">
          <p className="text-gray-500 text-sm">
            <strong className="text-gray-400">Disclaimer:</strong> Processing times are estimates based on 
            historical data and may not reflect current USCIS processing times. Always check the official 
            USCIS website for the most current information. Individual cases may vary significantly based 
            on complexity, location, and other factors.
          </p>
        </div>
      </main>
    </div>
  )
}

// Timeline Phase Card Component
function TimelinePhaseCard({ phase, index, isLast }: { phase: TimelinePhase; index: number; isLast: boolean }) {
  const [expanded, setExpanded] = useState(false)

  const statusColors: Record<string, string> = {
    receipt: 'bg-blue-500',
    biometrics: 'bg-purple-500',
    review: 'bg-yellow-500',
    interview: 'bg-cyan-500',
    decision: 'bg-green-500',
    oath: 'bg-pink-500'
  }

  return (
    <div className="flex gap-6 mb-4">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${statusColors[phase.status]}`} />
        {!isLast && <div className="w-0.5 flex-1 bg-gray-700 my-2" />}
      </div>

      {/* Content */}
      <div className="flex-1 glass-panel p-5 mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-gray-500 text-sm">Step {index + 1}</span>
            <h4 className="text-lg font-bold text-white">{phase.name}</h4>
          </div>
          <span className="text-cyan-400 font-semibold">
            {formatProcessingTime(phase.typicalDuration)}
          </span>
        </div>
        <p className="text-gray-400 mb-4">{phase.description}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-cyan-400 text-sm hover:text-cyan-300"
        >
          {expanded ? '▼ Hide details' : '▶ Show details'}
        </button>

        {expanded && (
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-green-400 font-semibold text-sm mb-2">✓ Milestones</h5>
              <ul className="text-sm space-y-1">
                {phase.milestones.map((m, i) => (
                  <li key={i} className="text-gray-300">• {m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-yellow-400 font-semibold text-sm mb-2">⚠️ Possible Delays</h5>
              <ul className="text-sm space-y-1">
                {phase.possibleDelays.map((d, i) => (
                  <li key={i} className="text-gray-300">• {d}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
