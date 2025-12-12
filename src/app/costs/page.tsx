'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  PATHWAY_COSTS,
  PathwayType,
  PathwayCost,
  HouseholdData,
  FeeWaiverEligibility,
  determineFeeWaiverEligibility,
  formatCurrency,
  calculateTotalCost,
  getFederalPovertyGuideline,
  US_STATES,
  IncomeSource
} from '@/lib/legal/cost-calculator'

type ViewMode = 'costs' | 'waiver' | 'compare'

const BENEFITS_LIST: { id: IncomeSource; name: string; meansTested: boolean }[] = [
  { id: 'ssi', name: 'Supplemental Security Income (SSI)', meansTested: true },
  { id: 'tanf', name: 'Temporary Assistance for Needy Families (TANF)', meansTested: true },
  { id: 'snap', name: 'SNAP (Food Stamps)', meansTested: true },
  { id: 'medicaid', name: 'Medicaid', meansTested: true },
  { id: 'unemployment', name: 'Unemployment Benefits', meansTested: false },
  { id: 'social_security', name: 'Social Security (Retirement/Disability)', meansTested: false }
]

export default function CostCalculatorPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('costs')
  const [selectedPathway, setSelectedPathway] = useState<PathwayType>('naturalization_standard')
  const [household, setHousehold] = useState<HouseholdData>({
    size: 1,
    annualIncome: 0,
    receivesPublicBenefits: false,
    benefitTypes: [],
    isHomeless: false,
    hasExtraordinaryExpenses: false,
    extraordinaryExpenses: 0,
    militaryStatus: 'none',
    state: 'CA'
  })
  const [waiverResult, setWaiverResult] = useState<FeeWaiverEligibility | null>(null)

  useEffect(() => {
    if (viewMode === 'waiver') {
      const result = determineFeeWaiverEligibility(household, selectedPathway)
      setWaiverResult(result)
    }
  }, [household, selectedPathway, viewMode])

  const currentPathway = PATHWAY_COSTS[selectedPathway]
  const fpg = getFederalPovertyGuideline(household.size, household.state)

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Cyber Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            Cost Calculator & Fee Waivers
          </h1>
          <p className="text-gray-400 mt-2">
            Calculate total costs and check fee waiver eligibility for your citizenship application
          </p>
        </div>

        {/* View Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: 'costs', label: 'View Costs', icon: '💰' },
            { id: 'waiver', label: 'Fee Waiver Check', icon: '✓' },
            { id: 'compare', label: 'Compare Options', icon: '⚖️' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setViewMode(tab.id as ViewMode)}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === tab.id
                  ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400'
                  : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pathway Selector */}
        <div className="glass-panel rounded-xl p-6 mb-6">
          <label htmlFor="pathway-select" className="block text-sm font-medium text-cyan-400 mb-2">
            Select Pathway
          </label>
          <select
            id="pathway-select"
            title="Select citizenship pathway"
            value={selectedPathway}
            onChange={e => setSelectedPathway(e.target.value as PathwayType)}
            className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          >
            {Object.values(PATHWAY_COSTS).map(pathway => (
              <option key={pathway.pathwayType} value={pathway.pathwayType}>
                {pathway.pathwayName} - {formatCurrency(pathway.totalFee)}
              </option>
            ))}
          </select>
        </div>

        {/* View Content */}
        {viewMode === 'costs' && (
          <CostBreakdownView pathway={currentPathway} />
        )}

        {viewMode === 'waiver' && (
          <FeeWaiverView
            pathway={currentPathway}
            household={household}
            setHousehold={setHousehold}
            waiverResult={waiverResult}
            fpg={fpg}
          />
        )}

        {viewMode === 'compare' && (
          <ComparisonView />
        )}

        {/* Legal Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-400 text-sm">
            <strong>⚠️ Disclaimer:</strong> Fee amounts are based on the USCIS fee schedule effective 
            April 1, 2024. Fees may change. Always verify current fees on{' '}
            <a 
              href="https://www.uscis.gov/fees" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              USCIS.gov
            </a>{' '}
            before filing.
          </p>
        </div>
      </div>
    </main>
  )
}

function CostBreakdownView({ pathway }: { pathway: PathwayCost }) {
  const totalWithRequired = calculateTotalCost(pathway.pathwayType, false)
  const totalWithOptional = calculateTotalCost(pathway.pathwayType, true)

  return (
    <div className="space-y-6">
      {/* Main Fee Card */}
      <div className="glass-panel rounded-xl p-6">
        <h2 className="text-xl font-semibold text-cyan-400 mb-4">
          {pathway.pathwayName}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-3">USCIS Filing Fees</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <span>Form {pathway.form} Filing Fee</span>
                <span className="text-xl font-bold text-green-400">
                  {pathway.militaryFeeExempt 
                    ? <span className="text-cyan-400">FREE (Military)</span>
                    : formatCurrency(pathway.filingFee)}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <span>Biometrics Fee</span>
                <span className="text-lg">
                  {pathway.biometricsFee === 0 
                    ? <span className="text-gray-500">Included</span>
                    : formatCurrency(pathway.biometricsFee)}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <span className="font-semibold">USCIS Total</span>
                <span className="text-2xl font-bold text-cyan-400">
                  {formatCurrency(pathway.totalFee)}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-3">Fee Options</h3>
            <div className="space-y-3">
              {pathway.reducedFeeAvailable && (
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-green-400">Reduced Fee Available</span>
                    <span className="font-bold text-green-400">
                      {formatCurrency(pathway.reducedFee || 0)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    For income 150-200% of Federal Poverty Guidelines
                  </p>
                </div>
              )}
              {pathway.waiverEligible && (
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <span className="text-purple-400">✓ Fee Waiver Eligible</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Complete waiver available for qualifying applicants
                  </p>
                </div>
              )}
              {pathway.militaryFeeExempt && (
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <span className="text-cyan-400">★ Military Fee Exempt</span>
                  <p className="text-sm text-gray-400 mt-1">
                    No fee for active duty or veterans
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Costs */}
      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">Additional Costs to Consider</h3>
        <div className="space-y-3">
          {pathway.additionalCosts.map((cost, index) => (
            <div 
              key={index}
              className={`flex justify-between items-center p-3 rounded-lg ${
                cost.notes?.includes('Optional')
                  ? 'bg-gray-800/30 border border-gray-700/50'
                  : 'bg-gray-800/50'
              }`}
            >
              <div>
                <span className="font-medium">{cost.name}</span>
                {cost.notes?.includes('Optional') && (
                  <span className="ml-2 text-xs bg-gray-700 px-2 py-0.5 rounded text-gray-400">
                    Optional
                  </span>
                )}
                <p className="text-sm text-gray-400">{cost.description}</p>
              </div>
              <span className="text-lg">{formatCurrency(cost.amount)}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center text-lg">
            <span>Estimated Total (Required Only)</span>
            <span className="font-bold text-green-400">{formatCurrency(totalWithRequired)}</span>
          </div>
          <div className="flex justify-between items-center text-lg mt-2">
            <span>Estimated Total (Including Optional)</span>
            <span className="font-bold text-cyan-400">{formatCurrency(totalWithOptional)}</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      {pathway.notes.length > 0 && (
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Important Notes</h3>
          <ul className="space-y-2">
            {pathway.notes.map((note, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function FeeWaiverView({
  pathway,
  household,
  setHousehold,
  waiverResult,
  fpg
}: {
  pathway: PathwayCost
  household: HouseholdData
  setHousehold: (h: HouseholdData) => void
  waiverResult: FeeWaiverEligibility | null
  fpg: number
}) {
  return (
    <div className="space-y-6">
      {/* Household Information Form */}
      <div className="glass-panel rounded-xl p-6">
        <h2 className="text-xl font-semibold text-cyan-400 mb-6">
          Household Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* State */}
          <div>
            <label htmlFor="state-select" className="block text-sm font-medium text-gray-400 mb-2">
              State of Residence
            </label>
            <select
              id="state-select"
              title="Select state of residence"
              value={household.state}
              onChange={e => setHousehold({ ...household, state: e.target.value })}
              className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500"
            >
              {US_STATES.map(state => (
                <option key={state.code} value={state.code}>{state.name}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Affects poverty guidelines (AK & HI have higher limits)
            </p>
          </div>

          {/* Household Size */}
          <div>
            <label htmlFor="household-size" className="block text-sm font-medium text-gray-400 mb-2">
              Household Size
            </label>
            <input
              id="household-size"
              type="number"
              min="1"
              max="20"
              value={household.size}
              onChange={e => setHousehold({ ...household, size: parseInt(e.target.value) || 1 })}
              className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Include yourself and all dependents
            </p>
          </div>

          {/* Annual Income */}
          <div>
            <label htmlFor="annual-income" className="block text-sm font-medium text-gray-400 mb-2">
              Total Annual Household Income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                id="annual-income"
                type="number"
                min="0"
                value={household.annualIncome || ''}
                onChange={e => setHousehold({ ...household, annualIncome: parseInt(e.target.value) || 0 })}
                className="w-full bg-gray-800/80 border border-gray-700 rounded-lg pl-8 pr-4 py-2 text-white focus:border-cyan-500"
                placeholder="0"
              />
            </div>
          </div>

          {/* Military Status */}
          <div>
            <label htmlFor="military-status" className="block text-sm font-medium text-gray-400 mb-2">
              Military Status
            </label>
            <select
              id="military-status"
              title="Select military status"
              value={household.militaryStatus}
              onChange={e => setHousehold({ ...household, militaryStatus: e.target.value as 'active' | 'veteran' | 'none' })}
              className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500"
            >
              <option value="none">Not military-affiliated</option>
              <option value="active">Active Duty Military</option>
              <option value="veteran">Veteran (Honorably Discharged)</option>
            </select>
          </div>
        </div>

        {/* Poverty Guidelines Reference */}
        <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
          <h4 className="text-sm font-medium text-cyan-400 mb-2">Federal Poverty Guidelines Reference</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-400">100% FPG:</span>
              <span className="ml-2">{formatCurrency(fpg)}</span>
            </div>
            <div>
              <span className="text-gray-400">150% FPG:</span>
              <span className="ml-2 text-green-400">{formatCurrency(fpg * 1.5)}</span>
            </div>
            <div>
              <span className="text-gray-400">200% FPG:</span>
              <span className="ml-2 text-yellow-400">{formatCurrency(fpg * 2)}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            For household size: {household.size} in {household.state}
          </p>
        </div>

        {/* Public Benefits */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-400 mb-3">
            Do you receive any of these means-tested benefits?
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {BENEFITS_LIST.map(benefit => (
              <label 
                key={benefit.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                  household.benefitTypes.includes(benefit.id)
                    ? 'bg-cyan-500/20 border border-cyan-500/50'
                    : 'bg-gray-800/30 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <input
                  type="checkbox"
                  checked={household.benefitTypes.includes(benefit.id)}
                  onChange={e => {
                    const newBenefits = e.target.checked
                      ? [...household.benefitTypes, benefit.id]
                      : household.benefitTypes.filter(b => b !== benefit.id)
                    setHousehold({ ...household, benefitTypes: newBenefits })
                  }}
                  className="w-4 h-4 rounded border-gray-600 text-cyan-500 focus:ring-cyan-500"
                />
                <span>
                  {benefit.name}
                  {benefit.meansTested && (
                    <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">
                      Means-tested
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Special Circumstances */}
        <div className="mt-6 space-y-3">
          <label className="flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-700 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={household.isHomeless}
              onChange={e => setHousehold({ ...household, isHomeless: e.target.checked })}
              className="w-4 h-4 rounded border-gray-600 text-cyan-500 focus:ring-cyan-500"
            />
            <span>Currently homeless or in transitional housing</span>
          </label>

          <label className="flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-700 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={household.hasExtraordinaryExpenses}
              onChange={e => setHousehold({ ...household, hasExtraordinaryExpenses: e.target.checked })}
              className="w-4 h-4 rounded border-gray-600 text-cyan-500 focus:ring-cyan-500"
            />
            <span>Have extraordinary medical or other hardship expenses</span>
          </label>

          {household.hasExtraordinaryExpenses && (
            <div className="ml-8">
              <label htmlFor="extraordinary-expenses" className="block text-sm text-gray-400 mb-2">
                Annual Extraordinary Expenses
              </label>
              <div className="relative w-48">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  id="extraordinary-expenses"
                  type="number"
                  min="0"
                  value={household.extraordinaryExpenses || ''}
                  onChange={e => setHousehold({ ...household, extraordinaryExpenses: parseInt(e.target.value) || 0 })}
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-lg pl-8 pr-4 py-2 text-white focus:border-cyan-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Eligibility Result */}
      {waiverResult && (
        <div className={`glass-panel rounded-xl p-6 border-2 ${
          waiverResult.eligible
            ? waiverResult.category === 'military'
              ? 'border-cyan-500/50 bg-cyan-500/5'
              : 'border-green-500/50 bg-green-500/5'
            : 'border-red-500/50 bg-red-500/5'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`text-4xl ${
              waiverResult.eligible ? 'text-green-400' : 'text-red-400'
            }`}>
              {waiverResult.eligible ? '✓' : '✗'}
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {waiverResult.eligible 
                  ? waiverResult.category === 'military'
                    ? 'Military Fee Exemption'
                    : waiverResult.reason.includes('REDUCED')
                      ? 'Reduced Fee Eligible'
                      : 'Fee Waiver Eligible'
                  : 'Not Eligible for Fee Waiver'}
              </h2>
              <p className="text-gray-400">{waiverResult.reason}</p>
            </div>
          </div>

          {waiverResult.eligible && (
            <>
              <div className="mb-4 p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-sm font-medium text-cyan-400 mb-2">Form to File</h4>
                <p className="text-lg font-medium">{waiverResult.form}</p>
              </div>

              {waiverResult.requiredEvidence.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">Required Evidence</h4>
                  <ul className="space-y-2">
                    {waiverResult.requiredEvidence.map((evidence, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-green-400">•</span>
                        {evidence}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {!waiverResult.eligible && (
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <h4 className="text-sm font-medium text-yellow-400 mb-2">What You Can Do</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Double-check all income and household information</li>
                <li>• Consider if you have any extraordinary expenses not reported</li>
                <li>• If your situation changes, you may qualify in the future</li>
                <li>• Some legal aid organizations offer assistance with fees</li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Cost Summary with Waiver */}
      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">Your Estimated Costs</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
            <span>USCIS Filing Fee (Standard)</span>
            <span className={waiverResult?.eligible ? 'line-through text-gray-500' : ''}>
              {formatCurrency(pathway.totalFee)}
            </span>
          </div>
          {waiverResult?.eligible && waiverResult.category !== 'military' && !waiverResult.reason.includes('REDUCED') && (
            <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
              <span className="text-green-400">Fee Waiver Applied</span>
              <span className="text-green-400 font-bold">$0</span>
            </div>
          )}
          {waiverResult?.reason.includes('REDUCED') && (
            <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg">
              <span className="text-yellow-400">Reduced Fee</span>
              <span className="text-yellow-400 font-bold">{formatCurrency(pathway.reducedFee || 0)}</span>
            </div>
          )}
          {waiverResult?.category === 'military' && (
            <div className="flex justify-between items-center p-3 bg-cyan-500/10 rounded-lg">
              <span className="text-cyan-400">Military Exemption</span>
              <span className="text-cyan-400 font-bold">$0</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ComparisonView() {
  const pathways = Object.values(PATHWAY_COSTS)
  
  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-xl p-6">
        <h2 className="text-xl font-semibold text-cyan-400 mb-6">
          Cost Comparison: All Pathways
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400">Pathway</th>
                <th className="text-left py-3 px-4 text-gray-400">Form</th>
                <th className="text-right py-3 px-4 text-gray-400">Filing Fee</th>
                <th className="text-right py-3 px-4 text-gray-400">Reduced Fee</th>
                <th className="text-center py-3 px-4 text-gray-400">Waiver</th>
              </tr>
            </thead>
            <tbody>
              {pathways.map(pathway => (
                <tr key={pathway.pathwayType} className="border-b border-gray-800">
                  <td className="py-3 px-4">
                    <div className="font-medium">{pathway.pathwayName}</div>
                    {pathway.militaryFeeExempt && (
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded">
                        Military Exempt
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-400">{pathway.form}</td>
                  <td className="py-3 px-4 text-right">
                    {pathway.militaryFeeExempt ? (
                      <span className="text-cyan-400">FREE</span>
                    ) : (
                      <span className="text-green-400">{formatCurrency(pathway.totalFee)}</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {pathway.reducedFeeAvailable ? (
                      <span className="text-yellow-400">{formatCurrency(pathway.reducedFee || 0)}</span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {pathway.waiverEligible ? (
                      <span className="text-green-400">✓</span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Green Card Renewal vs Naturalization */}
      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">
          💡 Should You Renew Your Green Card or Naturalize?
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h4 className="font-medium text-yellow-400 mb-3">Green Card Renewal (I-90)</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Cost: {formatCurrency(PATHWAY_COSTS.green_card_renewal.totalFee)}</li>
              <li>• Valid: 10 years</li>
              <li>• Must renew every 10 years</li>
              <li>• Subject to deportation proceedings</li>
              <li>• Cannot vote or hold most government positions</li>
              <li className="text-gray-500">Lifetime cost (50 years): ~{formatCurrency(PATHWAY_COSTS.green_card_renewal.totalFee * 5)}</li>
            </ul>
          </div>
          
          <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
            <h4 className="font-medium text-cyan-400 mb-3">Naturalization (N-400)</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Cost: {formatCurrency(PATHWAY_COSTS.naturalization_standard.totalFee)}</li>
              <li>• Valid: <strong className="text-green-400">Lifetime</strong></li>
              <li>• One-time process</li>
              <li>• Cannot be deported (with rare exceptions)</li>
              <li>• Full voting rights and eligibility</li>
              <li className="text-green-400">Total lifetime cost: {formatCurrency(PATHWAY_COSTS.naturalization_standard.totalFee)}</li>
            </ul>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          <strong>Bottom line:</strong> If you&apos;re eligible to naturalize, it&apos;s often the better financial 
          and practical choice compared to repeated green card renewals.
        </p>
      </div>

      {/* Resources */}
      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">Official Resources</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a 
            href="https://www.uscis.gov/fees"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
          >
            <div className="font-medium text-cyan-400">USCIS Fee Schedule</div>
            <p className="text-sm text-gray-400">Current filing fees for all forms</p>
          </a>
          <a 
            href="https://www.uscis.gov/forms/filing-fees/additional-information-on-filing-a-fee-waiver"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
          >
            <div className="font-medium text-cyan-400">Fee Waiver Information</div>
            <p className="text-sm text-gray-400">I-912 instructions and eligibility</p>
          </a>
          <a 
            href="https://www.uscis.gov/i-912"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
          >
            <div className="font-medium text-cyan-400">Form I-912</div>
            <p className="text-sm text-gray-400">Request for Fee Waiver</p>
          </a>
          <a 
            href="https://www.uscis.gov/i-942"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
          >
            <div className="font-medium text-cyan-400">Form I-942</div>
            <p className="text-sm text-gray-400">Request for Reduced Fee</p>
          </a>
        </div>
      </div>
    </div>
  )
}
