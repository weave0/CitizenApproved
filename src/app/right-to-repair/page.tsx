'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ALL_US_STATES,
  CATEGORY_LABELS,
  CATEGORY_DESCRIPTIONS,
  STATUS_CONFIG,
  getStateCoverage,
  type ProductCategory,
  type StateRepairCoverage,
} from '@/lib/right-to-repair'

type WizardStep = 'state' | 'category' | 'results'

const CATEGORIES: ProductCategory[] = [
  'electronics',
  'agriculture',
  'medical',
  'automotive',
]

const CATEGORY_ICONS: Record<ProductCategory, string> = {
  electronics: '📱',
  agriculture: '🚜',
  medical: '♿',
  automotive: '🔧',
}

export default function RightToRepairPage() {
  const [step, setStep] = useState<WizardStep>('state')
  const [selectedState, setSelectedState] = useState<string>('')
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory | null>(null)
  const [coverage, setCoverage] = useState<StateRepairCoverage | null>(null)
  const [showAllCategories, setShowAllCategories] = useState(false)

  const handleStateSubmit = () => {
    if (!selectedState) return
    const data = getStateCoverage(selectedState)
    setCoverage(data)
    setStep('category')
  }

  const handleCategorySelect = (cat: ProductCategory) => {
    setSelectedCategory(cat)
    setStep('results')
  }

  const handleReset = () => {
    setStep('state')
    setSelectedState('')
    setSelectedCategory(null)
    setCoverage(null)
    setShowAllCategories(false)
  }

  const handleBackToCategory = () => {
    setStep('category')
    setSelectedCategory(null)
    setShowAllCategories(false)
  }

  const stepNumber = step === 'state' ? 1 : step === 'category' ? 2 : 3

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      <div className="cyber-grid absolute inset-0 opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </span>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-400">
            Right-to-Repair
          </h1>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Find out if your state protects your right to repair the devices and
            equipment you own.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 mb-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  n < stepNumber
                    ? 'bg-cyan-500 text-black'
                    : n === stepNumber
                    ? 'bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400'
                    : 'bg-gray-800 border border-gray-700 text-gray-600'
                }`}
              >
                {n < stepNumber ? '✓' : n}
              </div>
              {n < 3 && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-all ${
                    n < stepNumber ? 'bg-cyan-500' : 'bg-gray-700'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mb-8 -mt-4">
          <span className={stepNumber >= 1 ? 'text-cyan-400' : ''}>
            Your State
          </span>
          <span className={stepNumber >= 2 ? 'text-cyan-400' : ''}>
            Product Type
          </span>
          <span className={stepNumber >= 3 ? 'text-cyan-400' : ''}>
            Your Rights
          </span>
        </div>

        {/* ── Step 1: State Picker ── */}
        {step === 'state' && (
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              What state are you in?
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Right-to-repair laws are enacted at the state level. Select your
              state to check local coverage.
            </p>

            <div className="mb-6">
              <label
                htmlFor="state-select"
                className="block text-sm text-gray-400 mb-2"
              >
                Select your state
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 appearance-none cursor-pointer"
              >
                <option value="">— Choose a state —</option>
                {ALL_US_STATES.map((s) => (
                  <option key={s.abbreviation} value={s.abbreviation}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleStateSubmit}
              disabled={!selectedState}
              className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-cyan-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Check My State →
            </button>

            <p className="text-xs text-gray-600 mt-4 text-center">
              Federal right-to-repair legislation has been introduced but not yet
              enacted. Coverage is state-by-state.
            </p>
          </div>
        )}

        {/* ── Step 2: Category Picker ── */}
        {step === 'category' && coverage && (
          <div className="space-y-6">
            <div className="glass-panel p-6">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-2xl font-bold text-white">
                  {coverage.name}
                </h2>
                <button
                  onClick={handleReset}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Change State
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                What type of product do you want to repair?
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {CATEGORIES.map((cat) => {
                const status = coverage[cat]
                const cfg = STATUS_CONFIG[status]
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`glass-panel p-6 text-left transition-all hover:scale-[1.02] border ${cfg.border} hover:shadow-neon-cyan group`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{CATEGORY_ICONS[cat]}</span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${cfg.bg} ${cfg.color} border ${cfg.border}`}
                      >
                        {cfg.icon} {cfg.label}
                      </span>
                    </div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {CATEGORY_LABELS[cat]}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {CATEGORY_DESCRIPTIONS[cat]}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* ── Step 3: Results ── */}
        {step === 'results' && coverage && selectedCategory && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBackToCategory}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                ← Back
              </button>
              <button
                onClick={handleReset}
                className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
              >
                Start Over
              </button>
            </div>

            {/* Status Card */}
            {(() => {
              const status = coverage[selectedCategory]
              const cfg = STATUS_CONFIG[status]
              const law = coverage.laws[selectedCategory]
              return (
                <div className={`glass-panel p-8 border ${cfg.border}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{CATEGORY_ICONS[selectedCategory]}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {CATEGORY_LABELS[selectedCategory]}
                      </h2>
                      <p className="text-gray-400">
                        {coverage.name}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cfg.bg} ${cfg.color} border ${cfg.border} font-semibold mb-6`}
                  >
                    <span className="text-lg">{cfg.icon}</span>
                    <span>{cfg.label}</span>
                  </div>

                  {law ? (
                    <div className="space-y-4">
                      {law.effectiveYear && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="text-cyan-400">📅</span>
                          <span>
                            Effective:{' '}
                            <span className="text-cyan-400 font-semibold">
                              {law.effectiveYear}
                            </span>
                          </span>
                        </div>
                      )}

                      <div
                        className={`p-4 rounded-lg ${cfg.bg} border ${cfg.border}`}
                      >
                        <h4 className={`font-semibold ${cfg.color} mb-2 text-sm`}>
                          What This Means for You
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {law.notes}
                        </p>
                      </div>

                      {law.billRef && (
                        <p className="text-xs text-gray-500">
                          Bill reference: {law.billRef}
                        </p>
                      )}

                      {law.learnMoreUrl && (
                        <a
                          href={law.learnMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          View Legislation ↗
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {status === 'none'
                          ? `${coverage.name} does not currently have enacted right-to-repair legislation for ${CATEGORY_LABELS[selectedCategory].toLowerCase()}. Your repair rights may depend on manufacturer warranty terms and FTC guidance.`
                          : `Legislation is in progress in ${coverage.name}. Check back for updates as this bill moves through the legislature.`}
                      </p>
                    </div>
                  )}
                </div>
              )
            })()}

            {/* Other Categories Summary */}
            <div className="glass-panel p-6">
              <button
                onClick={() => setShowAllCategories((v) => !v)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="font-bold text-white">
                  Other Categories in {coverage.name}
                </h3>
                <span className="text-cyan-400 text-sm">
                  {showAllCategories ? '▲ Hide' : '▼ Show'}
                </span>
              </button>

              {showAllCategories && (
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {CATEGORIES.filter((c) => c !== selectedCategory).map((cat) => {
                    const status = coverage[cat]
                    const cfg = STATUS_CONFIG[status]
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat)
                          setShowAllCategories(false)
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg border ${cfg.border} ${cfg.bg} hover:opacity-90 transition-all text-left`}
                      >
                        <span className="text-xl">{CATEGORY_ICONS[cat]}</span>
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {CATEGORY_LABELS[cat]}
                          </div>
                          <div className={`text-xs ${cfg.color}`}>
                            {cfg.label}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Action Prompts */}
            <div className="glass-panel p-6">
              <h3 className="font-bold text-white mb-3">Take Action</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="https://uspirg.org/feature/usp/right-repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-all"
                >
                  <span className="text-xl">📣</span>
                  <span>Support right-to-repair at US PIRG →</span>
                </a>
                <a
                  href="https://www.ifixit.com/Right-to-Repair/Intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50 transition-all"
                >
                  <span className="text-xl">🔧</span>
                  <span>Learn to repair at iFixit →</span>
                </a>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <p className="text-center text-xs text-gray-600">
              This tool provides general civic information only — not legal advice.
              Legislation changes frequently; verify current status with your state
              legislature or an attorney.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
