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

export function formatReviewDate(date = LAST_POLICY_REVIEW): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

export const N400_FEES = {
  online: 710,
  paper: 760,
  reducedPaper: 380,
  separateBiometricsFee: 0,
  reducedFeeIncomeRange: 'More than 150% and not more than 400% of the Federal Poverty Guidelines',
  feeWaiverIncomeThreshold: 'Means-tested benefit, household income at or below 150% of the Federal Poverty Guidelines, or extreme financial hardship',
  military: 0,
  effectiveDate: '2024-04-01',
  lastVerified: LAST_POLICY_REVIEW,
} as const

export const CITIZENSHIP_FORM_FEES = {
  N400: {
    name: 'Application for Naturalization',
    online: 710,
    paper: 760,
    reducedPaper: 380,
    military: 0,
    source: 'https://www.uscis.gov/g-1055',
  },
  N426: {
    name: 'Request for Certification of Military or Naval Service',
    paper: 0,
    source: 'https://www.uscis.gov/g-1055',
  },
  N470: {
    name: 'Application to Preserve Residence for Naturalization Purposes',
    paper: 420,
    feeWaiverMayApply: true,
    source: 'https://www.uscis.gov/g-1055',
  },
  N565: {
    name: 'Application for Replacement Naturalization/Citizenship Document',
    online: 505,
    paper: 555,
    feeWaiverMayApply: true,
    source: 'https://www.uscis.gov/g-1055',
  },
  N600: {
    name: 'Application for Certificate of Citizenship',
    online: 1335,
    paper: 1385,
    feeWaiverMayApply: true,
    militarySelfExemption: true,
    adoptionExemption: true,
    source: 'https://www.uscis.gov/g-1055',
  },
  N600K: {
    name: 'Application for Citizenship and Issuance of Certificate Under Section 322',
    online: 1335,
    paper: 1385,
    feeWaiverMayApply: true,
    adoptionExemption: true,
    source: 'https://www.uscis.gov/g-1055',
  },
  N644: {
    name: 'Application for Posthumous Citizenship',
    paper: 0,
    source: 'https://www.uscis.gov/g-1055',
  },
  N648: {
    name: 'Medical Certification for Disability Exceptions',
    paper: 0,
    source: 'https://www.uscis.gov/g-1055',
  },
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
      'Applicants requesting the reduced fee or a fee waiver generally must file on paper and document eligibility. The reduced fee and the full fee waiver are different requests with different eligibility standards.',
    sources: [
      {
        label: 'USCIS Form N-400 fee fact sheet',
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
    id: 'n600-current-fees',
    title: 'Certificate-of-citizenship fees are higher than the old site listed',
    status: 'current-policy',
    lastVerified: LAST_POLICY_REVIEW,
    summary:
      'The current general fee for Form N-600 and Form N-600K is $1,335 online or $1,385 on paper. USCIS lists specific $0 filing categories, including qualifying adoption cases; Form N-600 also has a $0 category for current or former service members requesting a certificate for themselves.',
    whatItMeans:
      'Do not rely on the former $1,170 figure. Check Form G-1055 before filing because the filing method and exemption category matter.',
    sources: [
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
    id: 'children-custody-2024',
    title: 'USCIS clarified legal and physical custody for children acquiring citizenship',
    status: 'current-policy',
    publishedDate: '2024-11-19',
    lastVerified: LAST_POLICY_REVIEW,
    summary:
      'USCIS revised its Policy Manual guidance on legal and physical custody under INA 320 and related child-citizenship provisions.',
    whatItMeans:
      'For derivative-citizenship questions, custody facts can be outcome-determinative. Historical cases also require the law that was in effect when the relevant conditions were satisfied.',
    sources: [
      {
        label: 'USCIS Policy Alert PA-2024-29',
        url: 'https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20241119-CustodyInAcquisitionOfCitizenship.pdf',
        authority: 'USCIS',
      },
    ],
  },
  {
    id: 'military-naturalization',
    title: 'Military naturalization under INA 328 and INA 329',
    status: 'current-policy',
    lastVerified: LAST_POLICY_REVIEW,
    summary:
      'INA 328 generally covers one year or more of honorable active-duty or reserve service. INA 329 covers honorable qualifying service during designated hostilities; the period beginning September 11, 2001 remains designated.',
    whatItMeans:
      'Military eligibility is not accurately summarized as active duty only. INA 329 can also cover Selected Reserve service, and military applicants who qualify under INA 328 or 329 pay $0 for Form N-400.',
    sources: [
      {
        label: 'USCIS Naturalization Information for Military Personnel (M-599)',
        url: 'https://www.uscis.gov/sites/default/files/document/forms/m-599.pdf',
        authority: 'USCIS',
      },
      {
        label: 'USCIS military naturalization policy update',
        url: 'https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20250926-MilitaryNaturalization.pdf',
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
      'USCIS processing-time displays are dynamic and case- and office-dependent. Historical medians are useful for context but are not predictions for an individual case.',
    whatItMeans:
      'CitizenApproved does not publish invented “national average,” “fastest office,” or “slowest office” figures. Readers should use the live USCIS processing-time and case-status tools for their form and office.',
    sources: [
      {
        label: 'USCIS Case Processing Times',
        url: 'https://egov.uscis.gov/processing-times/',
        authority: 'USCIS',
      },
      {
        label: 'USCIS Historic Processing Times',
        url: 'https://egov.uscis.gov/processing-times/historic-pt',
        authority: 'USCIS',
      },
    ],
  },
]

function assertNever(value: never): never {
  throw new Error(`Unhandled policy status: ${String(value)}`)
}

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
    default:
      return assertNever(status)
  }
}
