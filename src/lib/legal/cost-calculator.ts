/**
 * Cost Calculator & Fee Waiver System
 * 
 * Comprehensive fee structure for citizenship applications
 * including fee waiver eligibility determination.
 * 
 * Legal Basis:
 * - 8 CFR § 103.7 (Fee schedule)
 * - 8 CFR § 103.7(c) (Fee waivers)
 * - USCIS Fee Rule (effective April 1, 2024)
 * 
 * Last Updated: December 2025
 */

export type PathwayType = 
  | 'naturalization_standard'
  | 'naturalization_spouse'
  | 'naturalization_military_peacetime'
  | 'naturalization_military_wartime'
  | 'certificate_n600'
  | 'certificate_n600k'
  | 'replacement_n565'
  | 'green_card_renewal'

export type IncomeSource = 
  | 'employment'
  | 'self_employment'
  | 'social_security'
  | 'ssi'
  | 'tanf'
  | 'medicaid'
  | 'snap'
  | 'unemployment'
  | 'pension'
  | 'other'

export interface Fee {
  name: string
  amount: number
  description: string
  waiverEligible: boolean
  reducedFeeEligible: boolean
  notes?: string
}

export interface PathwayCost {
  pathwayType: PathwayType
  pathwayName: string
  form: string
  filingFee: number
  biometricsFee: number
  totalFee: number
  waiverEligible: boolean
  reducedFeeAvailable: boolean
  reducedFee?: number
  militaryFeeExempt?: boolean
  additionalCosts: Fee[]
  notes: string[]
  effectiveDate: string
}

export interface FeeWaiverEligibility {
  eligible: boolean
  reason: string
  category: 'means_tested' | 'income_based' | 'hardship' | 'military' | 'not_eligible'
  requiredEvidence: string[]
  form: string
}

export interface HouseholdData {
  size: number
  annualIncome: number
  receivesPublicBenefits: boolean
  benefitTypes: IncomeSource[]
  isHomeless: boolean
  hasExtraordinaryExpenses: boolean
  extraordinaryExpenses?: number
  militaryStatus: 'active' | 'veteran' | 'none'
  state: string
}

// ═══════════════════════════════════════════════════════════════════════════════
// 2024/2025 FEDERAL POVERTY GUIDELINES
// ═══════════════════════════════════════════════════════════════════════════════

// 48 Contiguous States + DC
const FPG_CONTINENTAL: Record<number, number> = {
  1: 15060,
  2: 20440,
  3: 25820,
  4: 31200,
  5: 36580,
  6: 41960,
  7: 47340,
  8: 52720
}

// Alaska
const FPG_ALASKA: Record<number, number> = {
  1: 18810,
  2: 25540,
  3: 32270,
  4: 39000,
  5: 45730,
  6: 52460,
  7: 59190,
  8: 65920
}

// Hawaii
const FPG_HAWAII: Record<number, number> = {
  1: 17310,
  2: 23500,
  3: 29690,
  4: 35880,
  5: 42070,
  6: 48260,
  7: 54450,
  8: 60640
}

// Additional person increment
const FPG_ADDITIONAL = 5380
const FPG_ADDITIONAL_ALASKA = 6730
const FPG_ADDITIONAL_HAWAII = 6190

export function getFederalPovertyGuideline(householdSize: number, state: string): number {
  const size = Math.min(householdSize, 8)
  const additionalPersons = Math.max(0, householdSize - 8)
  
  if (state === 'AK') {
    return FPG_ALASKA[size] + (additionalPersons * FPG_ADDITIONAL_ALASKA)
  } else if (state === 'HI') {
    return FPG_HAWAII[size] + (additionalPersons * FPG_ADDITIONAL_HAWAII)
  } else {
    return FPG_CONTINENTAL[size] + (additionalPersons * FPG_ADDITIONAL)
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATHWAY COSTS (As of April 2024 Fee Rule)
// ═══════════════════════════════════════════════════════════════════════════════

export const PATHWAY_COSTS: Record<PathwayType, PathwayCost> = {
  naturalization_standard: {
    pathwayType: 'naturalization_standard',
    pathwayName: 'Standard Naturalization (N-400)',
    form: 'N-400',
    filingFee: 710,
    biometricsFee: 0, // Included in filing fee as of 2024
    totalFee: 710,
    waiverEligible: true,
    reducedFeeAvailable: true,
    reducedFee: 405,
    additionalCosts: [
      {
        name: 'Passport Photos',
        amount: 15,
        description: '2 passport-style photos',
        waiverEligible: false,
        reducedFeeEligible: false
      },
      {
        name: 'Document Copies',
        amount: 25,
        description: 'Certified copies of documents',
        waiverEligible: false,
        reducedFeeEligible: false
      },
      {
        name: 'Translation Services',
        amount: 100,
        description: 'Certified translation of foreign documents (if needed)',
        waiverEligible: false,
        reducedFeeEligible: false,
        notes: 'Cost varies; may not be needed'
      },
      {
        name: 'U.S. Passport (after naturalization)',
        amount: 165,
        description: 'Passport book (adult)',
        waiverEligible: false,
        reducedFeeEligible: false,
        notes: 'Optional but recommended'
      }
    ],
    notes: [
      'Biometrics fee is now included in filing fee (previously $85 separate)',
      'Reduced fee available if income is 150-200% of FPG',
      'Full fee waiver available if income ≤150% FPG or receive means-tested benefits'
    ],
    effectiveDate: '2024-04-01'
  },

  naturalization_spouse: {
    pathwayType: 'naturalization_spouse',
    pathwayName: 'Spouse of U.S. Citizen (N-400)',
    form: 'N-400',
    filingFee: 710,
    biometricsFee: 0,
    totalFee: 710,
    waiverEligible: true,
    reducedFeeAvailable: true,
    reducedFee: 405,
    additionalCosts: [
      {
        name: 'Passport Photos',
        amount: 15,
        description: '2 passport-style photos',
        waiverEligible: false,
        reducedFeeEligible: false
      },
      {
        name: 'Marriage Certificate Copy',
        amount: 25,
        description: 'Certified copy of marriage certificate',
        waiverEligible: false,
        reducedFeeEligible: false
      }
    ],
    notes: [
      'Same form and fee as standard naturalization',
      '3-year residency track for spouses of citizens'
    ],
    effectiveDate: '2024-04-01'
  },

  naturalization_military_peacetime: {
    pathwayType: 'naturalization_military_peacetime',
    pathwayName: 'Military Naturalization - Peacetime (N-400)',
    form: 'N-400',
    filingFee: 0,
    biometricsFee: 0,
    totalFee: 0,
    waiverEligible: false, // N/A - already free
    reducedFeeAvailable: false,
    militaryFeeExempt: true,
    additionalCosts: [
      {
        name: 'Passport Photos',
        amount: 15,
        description: '2 passport-style photos',
        waiverEligible: false,
        reducedFeeEligible: false
      }
    ],
    notes: [
      'NO FILING FEE for active-duty military and recently discharged veterans',
      'Form N-426 (Request for Certification of Military Service) required',
      'Must have served honorably for at least 1 year'
    ],
    effectiveDate: '2024-04-01'
  },

  naturalization_military_wartime: {
    pathwayType: 'naturalization_military_wartime',
    pathwayName: 'Military Naturalization - Wartime (N-400)',
    form: 'N-400',
    filingFee: 0,
    biometricsFee: 0,
    totalFee: 0,
    waiverEligible: false,
    reducedFeeAvailable: false,
    militaryFeeExempt: true,
    additionalCosts: [
      {
        name: 'Passport Photos',
        amount: 15,
        description: '2 passport-style photos',
        waiverEligible: false,
        reducedFeeEligible: false
      }
    ],
    notes: [
      'NO FILING FEE for military service during designated hostilities period',
      'Current period: 9/11/2001 - present',
      'No LPR requirement for wartime military naturalization'
    ],
    effectiveDate: '2024-04-01'
  },

  certificate_n600: {
    pathwayType: 'certificate_n600',
    pathwayName: 'Certificate of Citizenship (N-600)',
    form: 'N-600',
    filingFee: 1170,
    biometricsFee: 0,
    totalFee: 1170,
    waiverEligible: true,
    reducedFeeAvailable: false,
    additionalCosts: [
      {
        name: 'Passport Photos',
        amount: 15,
        description: '2 passport-style photos',
        waiverEligible: false,
        reducedFeeEligible: false
      },
      {
        name: 'Foreign Birth Certificate',
        amount: 50,
        description: 'Certified copy with translation',
        waiverEligible: false,
        reducedFeeEligible: false
      }
    ],
    notes: [
      'Alternative: Apply for U.S. passport ($165) which also proves citizenship',
      'N-600 provides permanent certificate for records',
      'Fee waiver available for those who qualify'
    ],
    effectiveDate: '2024-04-01'
  },

  certificate_n600k: {
    pathwayType: 'certificate_n600k',
    pathwayName: 'Citizenship Certificate for Child Abroad (N-600K)',
    form: 'N-600K',
    filingFee: 1170,
    biometricsFee: 0,
    totalFee: 1170,
    waiverEligible: true,
    reducedFeeAvailable: false,
    additionalCosts: [
      {
        name: 'Passport Photos',
        amount: 15,
        description: '2 passport-style photos',
        waiverEligible: false,
        reducedFeeEligible: false
      }
    ],
    notes: [
      'For children of U.S. citizens residing abroad',
      'Child must be under 18 at time of filing',
      'Requires embassy/consulate interview'
    ],
    effectiveDate: '2024-04-01'
  },

  replacement_n565: {
    pathwayType: 'replacement_n565',
    pathwayName: 'Replacement Certificate (N-565)',
    form: 'N-565',
    filingFee: 555,
    biometricsFee: 0,
    totalFee: 555,
    waiverEligible: true,
    reducedFeeAvailable: false,
    additionalCosts: [
      {
        name: 'Passport Photos',
        amount: 15,
        description: '2 passport-style photos',
        waiverEligible: false,
        reducedFeeEligible: false
      }
    ],
    notes: [
      'For replacing lost, stolen, or damaged certificates',
      'Also used for name corrections'
    ],
    effectiveDate: '2024-04-01'
  },

  green_card_renewal: {
    pathwayType: 'green_card_renewal',
    pathwayName: 'Green Card Renewal (I-90)',
    form: 'I-90',
    filingFee: 465,
    biometricsFee: 0,
    totalFee: 465,
    waiverEligible: true,
    reducedFeeAvailable: false,
    additionalCosts: [
      {
        name: 'Passport Photos',
        amount: 15,
        description: '2 passport-style photos',
        waiverEligible: false,
        reducedFeeEligible: false
      }
    ],
    notes: [
      'Consider: if eligible, naturalization ($710) may be better investment',
      'Green card renewal gives 10 more years; citizenship is permanent'
    ],
    effectiveDate: '2024-04-01'
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FEE WAIVER DETERMINATION
// ═══════════════════════════════════════════════════════════════════════════════

export function determineFeeWaiverEligibility(
  household: HouseholdData,
  pathwayType: PathwayType
): FeeWaiverEligibility {
  const pathway = PATHWAY_COSTS[pathwayType]
  
  // Military exemption (not a waiver - fees don't apply)
  if (pathway.militaryFeeExempt && 
      (household.militaryStatus === 'active' || household.militaryStatus === 'veteran')) {
    return {
      eligible: true,
      reason: 'Military service fee exemption - no fee required',
      category: 'military',
      requiredEvidence: [
        'Form N-426 (Request for Certification of Military Service)',
        'DD-214 (if discharged)',
        'Military ID (if active duty)'
      ],
      form: 'N/A - Military exemption'
    }
  }
  
  // Check if pathway allows fee waiver
  if (!pathway.waiverEligible) {
    return {
      eligible: false,
      reason: 'This form does not qualify for fee waiver',
      category: 'not_eligible',
      requiredEvidence: [],
      form: 'N/A'
    }
  }
  
  // Means-tested benefits (automatic eligibility)
  const meanstestedBenefits: IncomeSource[] = ['ssi', 'tanf', 'snap', 'medicaid']
  const receivesMeansTested = household.benefitTypes.some(b => meanstestedBenefits.includes(b))
  
  if (receivesMeansTested) {
    return {
      eligible: true,
      reason: 'Receiving means-tested public benefit',
      category: 'means_tested',
      requiredEvidence: [
        'Benefit verification letter (dated within 12 months)',
        'Or government letter showing current receipt of benefit',
        'Or other official documentation of benefit receipt'
      ],
      form: 'I-912 (Request for Fee Waiver)'
    }
  }
  
  // Homeless
  if (household.isHomeless) {
    return {
      eligible: true,
      reason: 'Currently homeless',
      category: 'hardship',
      requiredEvidence: [
        'Letter from homeless shelter or transitional housing',
        'Or letter from religious or community organization',
        'Or self-declaration with explanation'
      ],
      form: 'I-912 (Request for Fee Waiver)'
    }
  }
  
  // Income-based (at or below 150% FPG)
  const fpg = getFederalPovertyGuideline(household.size, household.state)
  const fpg150 = fpg * 1.5
  const fpg200 = fpg * 2.0
  
  if (household.annualIncome <= fpg150) {
    return {
      eligible: true,
      reason: `Household income (${formatCurrency(household.annualIncome)}) is at or below 150% of Federal Poverty Guidelines (${formatCurrency(fpg150)})`,
      category: 'income_based',
      requiredEvidence: [
        'Tax return or IRS transcript from most recent year',
        'Recent pay stubs (6 months)',
        'Letter from employer confirming wages',
        'Proof of other income sources'
      ],
      form: 'I-912 (Request for Fee Waiver)'
    }
  }
  
  // Hardship (financial hardship even if above 150% FPG)
  if (household.hasExtraordinaryExpenses) {
    const effectiveIncome = household.annualIncome - (household.extraordinaryExpenses || 0)
    if (effectiveIncome <= fpg150) {
      return {
        eligible: true,
        reason: 'Financial hardship due to extraordinary expenses',
        category: 'hardship',
        requiredEvidence: [
          'Income documentation (tax returns, pay stubs)',
          'Documentation of extraordinary expenses:',
          '  - Medical bills',
          '  - Disability-related expenses',
          '  - Elder care costs',
          '  - Other documented unusual expenses',
          'Written explanation of hardship'
        ],
        form: 'I-912 (Request for Fee Waiver)'
      }
    }
  }
  
  // Check for reduced fee eligibility (150-200% FPG) for naturalization
  if (pathway.reducedFeeAvailable && 
      household.annualIncome > fpg150 && 
      household.annualIncome <= fpg200) {
    return {
      eligible: true,
      reason: `Qualifies for REDUCED FEE (${formatCurrency(pathway.reducedFee || 0)}). Household income (${formatCurrency(household.annualIncome)}) is between 150-200% of Federal Poverty Guidelines`,
      category: 'income_based',
      requiredEvidence: [
        'Tax return or IRS transcript',
        'Pay stubs from last 6 months',
        'Letter confirming income'
      ],
      form: 'I-942 (Request for Reduced Fee)'
    }
  }
  
  // Not eligible
  return {
    eligible: false,
    reason: `Household income (${formatCurrency(household.annualIncome)}) exceeds 200% of Federal Poverty Guidelines (${formatCurrency(fpg200)}) for household of ${household.size}`,
    category: 'not_eligible',
    requiredEvidence: [],
    form: 'N/A'
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export function calculateTotalCost(pathwayType: PathwayType, includeOptional: boolean = false): number {
  const pathway = PATHWAY_COSTS[pathwayType]
  let total = pathway.totalFee
  
  pathway.additionalCosts.forEach(cost => {
    if (!cost.notes?.includes('Optional') || includeOptional) {
      total += cost.amount
    }
  })
  
  return total
}

export function getPathwayByForm(formNumber: string): PathwayCost | undefined {
  return Object.values(PATHWAY_COSTS).find(p => p.form === formNumber)
}

export const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' }
]
