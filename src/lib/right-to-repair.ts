/**
 * Right-to-Repair State Coverage Data
 *
 * Tracks U.S. state-level right-to-repair legislation by product category.
 * Status key:
 *  'enacted'  — signed into law, in effect or taking effect
 *  'signed'   — signed into law, not yet in effect
 *  'pending'  — passed at least one chamber or active bill
 *  'none'     — no current legislation
 *
 * Sources:
 *  - US PIRG Right to Repair tracker (iFixit / US PIRG)
 *  - National Conference of State Legislatures (NCSL)
 *  - Individual state legislature websites
 *
 * Last updated: 2025-05
 */

export type RepairStatus = 'enacted' | 'signed' | 'pending' | 'none'

export type ProductCategory =
  | 'electronics'
  | 'agriculture'
  | 'medical'
  | 'automotive'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  electronics: 'Consumer Electronics',
  agriculture: 'Agricultural Equipment',
  medical: 'Medical Devices & Mobility Aids',
  automotive: 'Automotive',
}

export const CATEGORY_DESCRIPTIONS: Record<ProductCategory, string> = {
  electronics:
    'Smartphones, laptops, tablets, home appliances, and other personal electronics',
  agriculture:
    'Tractors, combines, and other farm machinery',
  medical:
    'Wheelchairs, home medical devices, and durable medical equipment',
  automotive:
    'Your right to access vehicle diagnostic data and use independent repair shops',
}

export interface StateLaw {
  effectiveYear?: number
  notes: string
  billRef?: string
  learnMoreUrl?: string
}

export interface StateRepairCoverage {
  name: string
  abbreviation: string
  electronics: RepairStatus
  agriculture: RepairStatus
  medical: RepairStatus
  automotive: RepairStatus
  laws: Partial<Record<ProductCategory, StateLaw>>
}

export const STATE_COVERAGE: StateRepairCoverage[] = [
  {
    name: 'Minnesota',
    abbreviation: 'MN',
    electronics: 'enacted',
    agriculture: 'pending',
    medical: 'pending',
    automotive: 'none',
    laws: {
      electronics: {
        effectiveYear: 2024,
        notes:
          'Minnesota\'s Digital Fair Repair Act (HF 1199) was signed in 2023. Manufacturers must provide parts, tools, and documentation for consumer electronics and home appliances to owners and independent repair shops.',
        learnMoreUrl: 'https://www.revisor.mn.gov/bills/bill.php?b=House&f=HF1199',
      },
    },
  },
  {
    name: 'California',
    abbreviation: 'CA',
    electronics: 'enacted',
    agriculture: 'enacted',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        effectiveYear: 2023,
        notes:
          'SB 244 (2023) requires manufacturers to make parts, tools, and repair manuals available for products sold in California with an original sale price of $50–$99.99 for 3 years, or $100+ for 7 years.',
      },
      agriculture: {
        effectiveYear: 2024,
        notes:
          'AB 1201 (2023) requires agricultural equipment manufacturers to provide parts, embedded software, tools, and documentation to equipment owners and independent dealers.',
      },
    },
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
    electronics: 'none',
    agriculture: 'enacted',
    medical: 'enacted',
    automotive: 'none',
    laws: {
      agriculture: {
        effectiveYear: 2023,
        notes:
          'HB22-1011 (2022) requires agricultural equipment manufacturers to provide repair parts, embedded software tools, and documentation to farmers and independent repair technicians.',
      },
      medical: {
        effectiveYear: 2022,
        notes:
          'SB22-219 (2022) covers powered wheelchairs and related mobility devices. Manufacturers must provide parts and documentation to Medicaid-enrolled repair providers.',
      },
    },
  },
  {
    name: 'New York',
    abbreviation: 'NY',
    electronics: 'enacted',
    agriculture: 'none',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        effectiveYear: 2023,
        notes:
          'The Fair Repair Act (A07006D / S9175B) was signed December 2022, effective July 2023. Covers digital electronic equipment sold after July 1, 2023. Manufacturers must make parts, tools, and documentation available on "fair and reasonable terms."',
      },
    },
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
    electronics: 'enacted',
    agriculture: 'none',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        effectiveYear: 2025,
        notes:
          'HB 2722 (2023) was signed into law covering consumer electronics. Takes effect January 2025. Requires manufacturers to provide parts, tools, and manuals to consumers and repair shops.',
      },
    },
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    electronics: 'none',
    agriculture: 'none',
    medical: 'none',
    automotive: 'enacted',
    laws: {
      automotive: {
        effectiveYear: 2020,
        notes:
          'Massachusetts voters passed an expanded right-to-repair ballot initiative (Question 1) in 2020, requiring automakers to share telematics data with vehicle owners and independent repair shops via a standardized open-access platform.',
      },
    },
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
    electronics: 'pending',
    agriculture: 'pending',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        notes: 'SB 2518 introduced; passed Senate committee. Would require electronics manufacturers to provide repair resources to consumers and independent repair businesses.',
      },
      agriculture: {
        notes: 'HB 3926 introduced. Would cover agricultural equipment under similar right-to-repair provisions.',
      },
    },
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
    electronics: 'pending',
    agriculture: 'none',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        notes: 'HB 1226 / SB 5183 introduced in recent sessions. Would extend repair access to consumer electronics. Has not yet cleared both chambers.',
      },
    },
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
    electronics: 'pending',
    agriculture: 'pending',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        notes: 'LD 244 has been introduced. Modeled after Minnesota\'s Digital Fair Repair Act.',
      },
      agriculture: {
        notes: 'LD 1958 introduced; would require agricultural equipment manufacturers to provide repair resources.',
      },
    },
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
    electronics: 'pending',
    agriculture: 'none',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        notes: 'H.17 introduced. Vermont has been an early adopter of consumer protection legislation and this bill has strong committee support.',
      },
    },
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    electronics: 'pending',
    agriculture: 'none',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        notes: 'HB 2422 introduced. Would require electronics manufacturers to share repair documentation and parts.',
      },
    },
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
    electronics: 'pending',
    agriculture: 'pending',
    medical: 'none',
    automotive: 'none',
    laws: {
      electronics: {
        notes: 'SB 111 introduced, focused on consumer electronics repair access.',
      },
      agriculture: {
        notes: 'HB 194 introduced, covering agricultural machinery.',
      },
    },
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
    electronics: 'none',
    agriculture: 'pending',
    medical: 'none',
    automotive: 'none',
    laws: {
      agriculture: {
        notes: 'HB 614 introduced in recent session. Would require agricultural equipment manufacturers to provide repair resources to Texas farmers.',
      },
    },
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    electronics: 'none',
    agriculture: 'pending',
    medical: 'none',
    automotive: 'none',
    laws: {
      agriculture: {
        notes: 'AB 449 / SB 426 introduced. Wisconsin has a large farming economy; bill has bipartisan support in committee.',
      },
    },
  },
]

// States not explicitly listed have 'none' coverage in all categories.
// All other US states and territories default to no enacted legislation.

export const ALL_US_STATES: { name: string; abbreviation: string }[] = [
  { name: 'Alabama', abbreviation: 'AL' },
  { name: 'Alaska', abbreviation: 'AK' },
  { name: 'Arizona', abbreviation: 'AZ' },
  { name: 'Arkansas', abbreviation: 'AR' },
  { name: 'California', abbreviation: 'CA' },
  { name: 'Colorado', abbreviation: 'CO' },
  { name: 'Connecticut', abbreviation: 'CT' },
  { name: 'Delaware', abbreviation: 'DE' },
  { name: 'Florida', abbreviation: 'FL' },
  { name: 'Georgia', abbreviation: 'GA' },
  { name: 'Hawaii', abbreviation: 'HI' },
  { name: 'Idaho', abbreviation: 'ID' },
  { name: 'Illinois', abbreviation: 'IL' },
  { name: 'Indiana', abbreviation: 'IN' },
  { name: 'Iowa', abbreviation: 'IA' },
  { name: 'Kansas', abbreviation: 'KS' },
  { name: 'Kentucky', abbreviation: 'KY' },
  { name: 'Louisiana', abbreviation: 'LA' },
  { name: 'Maine', abbreviation: 'ME' },
  { name: 'Maryland', abbreviation: 'MD' },
  { name: 'Massachusetts', abbreviation: 'MA' },
  { name: 'Michigan', abbreviation: 'MI' },
  { name: 'Minnesota', abbreviation: 'MN' },
  { name: 'Mississippi', abbreviation: 'MS' },
  { name: 'Missouri', abbreviation: 'MO' },
  { name: 'Montana', abbreviation: 'MT' },
  { name: 'Nebraska', abbreviation: 'NE' },
  { name: 'Nevada', abbreviation: 'NV' },
  { name: 'New Hampshire', abbreviation: 'NH' },
  { name: 'New Jersey', abbreviation: 'NJ' },
  { name: 'New Mexico', abbreviation: 'NM' },
  { name: 'New York', abbreviation: 'NY' },
  { name: 'North Carolina', abbreviation: 'NC' },
  { name: 'North Dakota', abbreviation: 'ND' },
  { name: 'Ohio', abbreviation: 'OH' },
  { name: 'Oklahoma', abbreviation: 'OK' },
  { name: 'Oregon', abbreviation: 'OR' },
  { name: 'Pennsylvania', abbreviation: 'PA' },
  { name: 'Rhode Island', abbreviation: 'RI' },
  { name: 'South Carolina', abbreviation: 'SC' },
  { name: 'South Dakota', abbreviation: 'SD' },
  { name: 'Tennessee', abbreviation: 'TN' },
  { name: 'Texas', abbreviation: 'TX' },
  { name: 'Utah', abbreviation: 'UT' },
  { name: 'Vermont', abbreviation: 'VT' },
  { name: 'Virginia', abbreviation: 'VA' },
  { name: 'Washington', abbreviation: 'WA' },
  { name: 'West Virginia', abbreviation: 'WV' },
  { name: 'Wisconsin', abbreviation: 'WI' },
  { name: 'Wyoming', abbreviation: 'WY' },
]

/**
 * Returns coverage for a given state abbreviation.
 * States not in STATE_COVERAGE default to 'none' across all categories.
 */
export function getStateCoverage(abbreviation: string): StateRepairCoverage {
  const found = STATE_COVERAGE.find(
    (s) => s.abbreviation === abbreviation.toUpperCase()
  )
  if (found) return found

  const stateInfo = ALL_US_STATES.find(
    (s) => s.abbreviation === abbreviation.toUpperCase()
  )
  return {
    name: stateInfo?.name ?? abbreviation,
    abbreviation: abbreviation.toUpperCase(),
    electronics: 'none',
    agriculture: 'none',
    medical: 'none',
    automotive: 'none',
    laws: {},
  }
}

export const STATUS_CONFIG: Record<
  RepairStatus,
  { label: string; color: string; bg: string; border: string; icon: string }
> = {
  enacted: {
    label: 'Law in Effect',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    icon: '✓',
  },
  signed: {
    label: 'Signed — Taking Effect',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    icon: '📋',
  },
  pending: {
    label: 'Legislation Pending',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    icon: '⏳',
  },
  none: {
    label: 'No Current Legislation',
    color: 'text-gray-400',
    bg: 'bg-gray-800/50',
    border: 'border-gray-700',
    icon: '—',
  },
}
