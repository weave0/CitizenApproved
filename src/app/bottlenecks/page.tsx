'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BOTTLENECKS,
  TECH_OPPORTUNITIES,
  CATEGORY_LABELS,
  SEVERITY_COLORS,
  getCriticalBottlenecks,
  getTechOpportunitiesForBottleneck,
  type Bottleneck,
  type BottleneckCategory,
  type SeverityLevel,
  type TechOpportunity
} from '@/lib/legal/bottleneck-analysis'

type ViewMode = 'bottlenecks' | 'solutions' | 'technology'

export default function BottleneckAnalysisPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('bottlenecks')
  const [selectedCategory, setSelectedCategory] = useState<BottleneckCategory | 'all'>('all')
  const [selectedSeverity, setSelectedSeverity] = useState<SeverityLevel | 'all'>('all')
  const [expandedBottleneck, setExpandedBottleneck] = useState<string | null>(null)

  const filteredBottlenecks = BOTTLENECKS.filter(b => {
    if (selectedCategory !== 'all' && b.category !== selectedCategory) return false
    if (selectedSeverity !== 'all' && b.severity !== selectedSeverity) return false
    return true
  })

  const criticalCount = getCriticalBottlenecks().length
  const techSolutionsCount = BOTTLENECKS.flatMap(b => 
    b.potentialSolutions.filter(s => s.type === 'technology')
  ).length

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="cyber-grid opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-cyan-900/30 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">🔍</span>
            <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-yellow-500 text-transparent bg-clip-text">
              Bottleneck Analysis
            </span>
          </Link>
          <div className="flex gap-4">
            <Link href="/processing" className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Processing Times
            </Link>
            <Link href="/flowchart" className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Flowchart
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-red-400">System</span>{' '}
            <span className="text-white">Bottleneck Analysis</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Identifying pain points, delays, and opportunities for improvement 
            in the U.S. citizenship process. An objective, data-driven analysis.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-panel p-6 text-center">
            <div className="text-3xl font-bold text-red-400">{BOTTLENECKS.length}</div>
            <div className="text-gray-400 text-sm">Identified Bottlenecks</div>
          </div>
          <div className="glass-panel p-6 text-center">
            <div className="text-3xl font-bold text-orange-400">{criticalCount}</div>
            <div className="text-gray-400 text-sm">Critical Issues</div>
          </div>
          <div className="glass-panel p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400">{techSolutionsCount}</div>
            <div className="text-gray-400 text-sm">Tech Solutions Proposed</div>
          </div>
          <div className="glass-panel p-6 text-center">
            <div className="text-3xl font-bold text-green-400">{TECH_OPPORTUNITIES.length}</div>
            <div className="text-gray-400 text-sm">Innovation Opportunities</div>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['bottlenecks', 'solutions', 'technology'] as ViewMode[]).map(mode => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                viewMode === mode
                  ? 'bg-gradient-to-r from-red-500 to-yellow-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {mode === 'bottlenecks' && '🔴 Bottlenecks'}
              {mode === 'solutions' && '💡 Solutions'}
              {mode === 'technology' && '🚀 Technology'}
            </button>
          ))}
        </div>

        {/* Bottlenecks View */}
        {viewMode === 'bottlenecks' && (
          <>
            {/* Filters */}
            <div className="glass-panel p-4 mb-6 flex flex-wrap gap-4">
              <div>
                <label htmlFor="category-filter" className="block text-sm text-gray-400 mb-1">Category</label>
                <select
                  id="category-filter"
                  title="Filter by category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as BottleneckCategory | 'all')}
                  className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                >
                  <option value="all">All Categories</option>
                  {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="severity-filter" className="block text-sm text-gray-400 mb-1">Severity</label>
                <select
                  id="severity-filter"
                  title="Filter by severity"
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value as SeverityLevel | 'all')}
                  className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">🔴 Critical</option>
                  <option value="high">🟠 High</option>
                  <option value="medium">🟡 Medium</option>
                  <option value="low">🟢 Low</option>
                </select>
              </div>
            </div>

            {/* Bottleneck Cards */}
            <div className="space-y-4">
              {filteredBottlenecks.map(bottleneck => (
                <BottleneckCard
                  key={bottleneck.id}
                  bottleneck={bottleneck}
                  isExpanded={expandedBottleneck === bottleneck.id}
                  onToggle={() => setExpandedBottleneck(
                    expandedBottleneck === bottleneck.id ? null : bottleneck.id
                  )}
                />
              ))}
            </div>
          </>
        )}

        {/* Solutions View */}
        {viewMode === 'solutions' && (
          <div className="space-y-6">
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold text-white mb-4">📊 Solutions by Type</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {['technology', 'policy', 'process', 'resources'].map(type => {
                  const solutions = BOTTLENECKS.flatMap(b => 
                    b.potentialSolutions.filter(s => s.type === type)
                  )
                  const colors: Record<string, string> = {
                    technology: 'text-cyan-400',
                    policy: 'text-purple-400',
                    process: 'text-green-400',
                    resources: 'text-yellow-400'
                  }
                  return (
                    <div key={type} className="bg-gray-900/50 rounded-lg p-4 text-center">
                      <div className={`text-3xl font-bold ${colors[type]}`}>{solutions.length}</div>
                      <div className="text-gray-400 text-sm capitalize">{type} Solutions</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Solutions List */}
            {BOTTLENECKS.map(bottleneck => (
              <div key={bottleneck.id} className="glass-panel p-6">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: SEVERITY_COLORS[bottleneck.severity] }} />
                  {bottleneck.name}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {bottleneck.potentialSolutions.map(solution => (
                    <div key={solution.id} className="bg-gray-900/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-white">{solution.name}</h5>
                        <span className={`text-xs px-2 py-1 rounded ${
                          solution.type === 'technology' ? 'bg-cyan-900/50 text-cyan-400' :
                          solution.type === 'policy' ? 'bg-purple-900/50 text-purple-400' :
                          solution.type === 'process' ? 'bg-green-900/50 text-green-400' :
                          'bg-yellow-900/50 text-yellow-400'
                        }`}>
                          {solution.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{solution.description}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-gray-500">
                          Feasibility: <span className={`font-semibold ${
                            solution.feasibility === 'high' ? 'text-green-400' :
                            solution.feasibility === 'medium' ? 'text-yellow-400' : 'text-red-400'
                          }`}>{solution.feasibility}</span>
                        </span>
                        <span className="text-gray-500">
                          Impact: <span className="text-cyan-400">{solution.estimatedImpact}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technology View */}
        {viewMode === 'technology' && (
          <div className="space-y-6">
            <div className="glass-panel p-6 border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-white mb-2">🚀 Technology Innovation Opportunities</h3>
              <p className="text-gray-400">
                Major technology initiatives that could transform the citizenship process
              </p>
            </div>

            {TECH_OPPORTUNITIES.map(tech => (
              <TechOpportunityCard key={tech.id} opportunity={tech} />
            ))}
          </div>
        )}

        {/* Analysis Summary */}
        <div className="mt-12 glass-panel p-6 bg-gray-900/50">
          <h3 className="text-xl font-bold text-white mb-4">📋 Key Findings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Most Impactful Bottlenecks</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• FBI Name Check delays (6-24+ months for affected cases)</li>
                <li>• Interview scheduling varies 5 weeks to 10 months by office</li>
                <li>• Systemic underfunding creates boom-bust cycles</li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">Highest-Impact Solutions</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Unified digital platform (eliminate paper delays)</li>
                <li>• AI-enhanced name matching (reduce false positives)</li>
                <li>• Video interviews (40% capacity increase)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 glass-panel p-6 bg-gray-900/50 border border-gray-800">
          <p className="text-gray-500 text-sm">
            <strong className="text-gray-400">Disclaimer:</strong> This analysis is based on publicly 
            available data, government reports, and research studies. It is intended for educational 
            and informational purposes to promote discussion of immigration system improvement. 
            Actual implementation of any solutions would require careful consideration of legal, 
            security, and practical constraints.
          </p>
        </div>
      </main>
    </div>
  )
}

// Bottleneck Card Component
function BottleneckCard({ 
  bottleneck, 
  isExpanded, 
  onToggle 
}: { 
  bottleneck: Bottleneck
  isExpanded: boolean
  onToggle: () => void 
}) {
  const techOpportunities = getTechOpportunitiesForBottleneck(bottleneck.id)

  return (
    <div className="glass-panel overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-start justify-between hover:bg-white/5 transition-colors text-left"
      >
        <div className="flex items-start gap-4">
          <div 
            className="w-4 h-4 rounded-full flex-shrink-0 mt-1"
            style={{ backgroundColor: SEVERITY_COLORS[bottleneck.severity] }}
          />
          <div>
            <h3 className="text-lg font-bold text-white">{bottleneck.name}</h3>
            <p className="text-gray-400 text-sm">{bottleneck.description}</p>
            <div className="flex gap-3 mt-2 text-xs">
              <span className="text-gray-500">
                Category: <span className="text-cyan-400">{CATEGORY_LABELS[bottleneck.category]}</span>
              </span>
              <span className="text-gray-500">
                Avg Delay: <span className="text-yellow-400">{bottleneck.averageDelay}</span>
              </span>
            </div>
          </div>
        </div>
        <span className={`text-cyan-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-cyan-900/30 pt-4 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-red-400 font-semibold text-sm mb-2">Impact</h4>
              <p className="text-gray-300 text-sm">{bottleneck.impact}</p>
            </div>
            <div>
              <h4 className="text-yellow-400 font-semibold text-sm mb-2">Affected Population</h4>
              <p className="text-gray-300 text-sm">{bottleneck.affectedPopulation}</p>
            </div>
          </div>

          {bottleneck.statistics && (
            <div>
              <h4 className="text-cyan-400 font-semibold text-sm mb-2">Statistics</h4>
              <div className="grid md:grid-cols-3 gap-2">
                {bottleneck.statistics.map((stat, i) => (
                  <div key={i} className="bg-gray-900/50 rounded p-3">
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.metric}</div>
                    <div className="text-xs text-gray-600">Source: {stat.source}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-orange-400 font-semibold text-sm mb-2">Root Causes</h4>
            <ul className="grid md:grid-cols-2 gap-1 text-sm">
              {bottleneck.causes.map((cause, i) => (
                <li key={i} className="text-gray-300">• {cause}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 font-semibold text-sm mb-2">Real-World Examples</h4>
            <ul className="space-y-1 text-sm">
              {bottleneck.realWorldExamples.map((example, i) => (
                <li key={i} className="text-gray-400 italic">&quot;{example}&quot;</li>
              ))}
            </ul>
          </div>

          {techOpportunities.length > 0 && (
            <div className="bg-cyan-900/20 rounded-lg p-4">
              <h4 className="text-cyan-400 font-semibold text-sm mb-2">🚀 Related Technology Opportunities</h4>
              <div className="flex flex-wrap gap-2">
                {techOpportunities.map(tech => (
                  <span key={tech.id} className="px-3 py-1 bg-cyan-900/50 rounded text-cyan-300 text-sm">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Tech Opportunity Card Component
function TechOpportunityCard({ opportunity }: { opportunity: TechOpportunity }) {
  const [expanded, setExpanded] = useState(false)

  const statusColors: Record<string, string> = {
    implemented: 'bg-green-500',
    in_progress: 'bg-yellow-500',
    proposed: 'bg-blue-500',
    conceptual: 'bg-gray-500'
  }

  const statusLabels: Record<string, string> = {
    implemented: 'Implemented',
    in_progress: 'In Progress',
    proposed: 'Proposed',
    conceptual: 'Conceptual'
  }

  return (
    <div className="glass-panel overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 flex items-start justify-between hover:bg-white/5 transition-colors text-left"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-white">{opportunity.name}</h3>
            <span className={`w-2 h-2 rounded-full ${statusColors[opportunity.currentStatus]}`} />
            <span className="text-xs text-gray-400">{statusLabels[opportunity.currentStatus]}</span>
          </div>
          <p className="text-gray-400 text-sm">{opportunity.description}</p>
        </div>
        <span className={`text-cyan-400 transition-transform ${expanded ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-cyan-900/30 pt-4 space-y-4">
          <div>
            <h4 className="text-cyan-400 font-semibold text-sm mb-2">Implementation</h4>
            <p className="text-gray-300 text-sm">{opportunity.implementation}</p>
          </div>

          <div>
            <h4 className="text-orange-400 font-semibold text-sm mb-2">Targets These Bottlenecks</h4>
            <div className="flex flex-wrap gap-2">
              {opportunity.targetedBottlenecks.map(id => {
                const bottleneck = BOTTLENECKS.find(b => b.id === id)
                return bottleneck ? (
                  <span key={id} className="px-3 py-1 bg-orange-900/30 rounded text-orange-300 text-sm">
                    {bottleneck.name}
                  </span>
                ) : null
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-green-400 font-semibold text-sm mb-2">Benefits</h4>
              <ul className="space-y-1 text-sm">
                {opportunity.benefits.map((b, i) => (
                  <li key={i} className="text-gray-300">✓ {b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-red-400 font-semibold text-sm mb-2">Risks</h4>
              <ul className="space-y-1 text-sm">
                {opportunity.risks.map((r, i) => (
                  <li key={i} className="text-gray-300">⚠ {r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
