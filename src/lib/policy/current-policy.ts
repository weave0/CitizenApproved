export type PolicyStatus = 'current-law' | 'current-policy' | 'proposed' | 'guidance'

export interface PolicySource {
  label: string
  url: string
  authority: 'Supreme Court' | 'USCIS' | 'Federal Register' | 'U.S. Code' | 'eCFR'
}

export interface PolicyUpdate {
  id: string
  title: string
  status: PolicyStatus
  effectiveDate?: string
  publishedDate?: string
  lastVerified: string
  summary: string
  whatItMeans: string
  sources: PolicySource[]
}

export const LAST_POLICY_REVIEW = '2026-08-29'

export const N400_FEES = {
  online: 710,
  paper: 760,
  reducedPaper: 380,
  separateBiometricsFee: 0,
  reducedFeeIncomeRange: 'More than 150% and not more than 400% of the Federal Poverty Guidelines',
  feeWaiverIncomeThreshold: 'At or below 150% of the Federal Poverty Guidelines, or another qualifying basis',
  military: 0,
  effectiveDate: '2024-04-01',
  lastVerified: LAST_POLICY_REVIEW,
} as const

export const CIVICS_TEST_VERSIONS = {
  test2008: {
    label: '2008 Civics Test',
    appliesTo: 'Form N-400 filed before October 20, 2025',
    questionPool: 100,
    questionsAsked: 10,
    correctToPass: 6,
  },
  test2025: {
    label: '2025 Civics Test',
    appliesTo: 'Form N-400 filed on or after October 20, 2025',
    questionPool: 128,
    questionsAsked: 20,
    correctToPass: 12,
  },
} as const

export const POLICY_UPDATES: PolicyUpdate[] = [
  {
    id: 'birthright-barbara',
    title: 'Birthright citizenship after Trump v. Barbara',
    status: 'current-law',
    effectiveDate: '2026-06-30',
    lastVerified: LAST_POLICY_REVIEW,
    summary:
      'The Supreme Court held that children born in the United States to parents who are unlawfully or temporarily present are subject to U.S. jurisdiction and are citizens at birth under the Fourteenth Amendment.',
    whatItMeans:
      'The January 2025 executive order that sought to deny citizenship to those children cannot change the constitutional rule the Court recognized. The decision is binding law unless later altered by constitutional amendment or a future Supreme Court decision.',
    sources: [
      {
        label: 'Trump v. Barbara, No. 25-365 (U.S. June 30, 2026)',
        url: 'https://www.supremecourt.gov/opinions/25pdf/25-365_4hdj.pdf',
        authority: 'Supreme Court',
      },
      {
        label: '8 U.S.C. § 1401',
        url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1401',
        authority: 'U.S. Code',
      },
    ],
  },
  {
    id: 'n400-current-fees',
    title: 'Current Form N-400 filing fees',
    status: 'current-policy',
    effectiveDate: '2024-04-01',
    lastVerified: LAST_POLICY_REVIEW,
    summary:
      'The current general Form N-400 fee is $710 online or $760 on paper. There is no separate biometrics fee. A $380 reduced paper fee remains available for qualifying applicants, and fee waivers remain available under current rules.',
    whatItMeans:
      'Do not add an $85 biometrics charge. Applicants requesting the reduced fee or a fee waiver generally must file on paper and document eligibility.',
    sources: [
      {
        label: 'USCIS Form N-400 filing-fee fact sheet',
        url: 'https://www.uscis.gov/sites/default/files/document/fact-sheets/OoC_FactSheetOnNatzFees_V3_508.pdf',
        authority: 'USCIS',
      },
      {
        label: 'USCIS Fee Schedule (Form G-1055)',
        url: 'https://www.uscis.gov/g-1055',
        authority: 'USCIS',
      },
    ],
  },
  {
    id: 'n400-proposed-fees-2026',
    title: '2026 proposed naturalization fee increase',
    status: 'proposed',
    publishedDate: '2026-06-23',
    lastVerified: LAST_POLICY_REVIEW,
    summary:
      'DHS has proposed increasing Form N-400 fees to $1,280 online and $1,330 on paper, while ending the reduced-fee option and most N-400 fee waivers. The public-comment deadline was August 24, 2026.',
    whatItMeans:
      'These amounts are not the current filing fees. CitizenApproved will not present a proposed rule as effective law unless DHS publishes a final rule with an effective date.',
    sources: [
      {
        label: 'Naturalization Application Fee Adjustments, 91 Fed. Reg. 37500',
        url: 'https://www.federalregister.gov/documents/2026/06/23/2026-12542/naturalization-application-fee-adjustments',
        authority: 'Federal Register',
      },
    ],
  },
  {
    id: 'civics-2025-test',
    title: 'Two naturalization civics tests are now in use',
    status: 'current-policy',
    effectiveDate: '2025-10-20',
    lastVerified: LAST_POLICY_REVIEW,
    summary:
      'USCIS uses the 2008 civics test for applicants who filed Form N-400 before October 20, 2025, and the 2025 civics test for applicants who filed on or after that date.',
    whatItMeans:
      'The filing date determines which test applies. The 2008 test asks up to 10 questions and requires 6 correct answers. The 2025 test asks up to 20 questions and requires 12 correct answers.',
    sources: [
      {
        label: 'USCIS 2025 Civics Test',
        url: 'https://www.uscis.gov/citizenship/2025-civics-test',
        authority: 'USCIS',
      },
      {
        label: 'USCIS Study for the Test',
        url: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test',
        authority: 'USCIS',
      },
    ],
  },
  {
    id: 'processing-times-method',
    title: 'USCIS processing times are dynamic, not fixed estimates',
    status: 'guidance',
    lastVerified: LAST_POLICY_REVIEW,
    summary:
      'USCIS describes its displayed processing time as the amount of time it took to complete 80% of adjudicated cases during the prior six months.',
    whatItMeans:
      'A static estimate can become misleading quickly. CitizenApproved should point readers to the USCIS processing-times tool and state when any snapshot was checked.',
    sources: [
      {
        label: 'USCIS Case Processing Times',
        url: 'https://egov.uscis.gov/processing-times/',
        authority: 'USCIS',
      },
    ],
  },
]

export function statusLabel(status: PolicyStatus): string {
  switch (status) {
    case 'current-law':
      return 'CURRENT LAW'
    case 'current-policy':
      return 'CURRENT POLICY'
    case 'proposed':
      return 'PROPOSED — NOT IN EFFECT'
    case 'guidance':
      return 'CURRENT GUIDANCE'
  }
}
