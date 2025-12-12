/**
 * Processing Delays: Why Citizenship Takes So Long
 * 
 * This file documents the causes of delays in the U.S. citizenship
 * process, with citations to official government sources.
 * 
 * Written in plain English for easy translation.
 * 
 * Sources:
 * - GAO Reports on USCIS Backlogs
 * - USCIS Ombudsman Annual Reports
 * - DHS Office of Inspector General Reports
 * - USCIS Policy Manual and Press Releases
 */

export interface DelayFactor {
  id: string
  title: string
  plainEnglish: string
  details: string[]
  officialSources: {
    name: string
    url: string
    quote?: string
  }[]
  statistics?: {
    label: string
    value: string
  }[]
  solutions: {
    what: string
    who: string
    status: 'proposed' | 'in_progress' | 'implemented' | 'stalled'
  }[]
}

export interface SpeedUpTip {
  id: string
  title: string
  description: string
  impact: 'high' | 'medium' | 'low'
  category: 'preparation' | 'filing' | 'interview' | 'general'
}

// ═══════════════════════════════════════════════════════════════════════════════
// WHY DOES CITIZENSHIP TAKE SO LONG?
// Written in plain English for easy translation
// ═══════════════════════════════════════════════════════════════════════════════

export const DELAY_FACTORS: DelayFactor[] = [
  {
    id: 'backlog',
    title: 'Large Backlog of Applications',
    plainEnglish: 
      'USCIS has more applications than it can process. Think of it like a very long line at a busy store. ' +
      'Even though workers are processing applications every day, new ones keep coming in faster than they can be finished.',
    details: [
      'As of 2024, USCIS has over 8 million pending immigration cases',
      'About 1 million naturalization applications are pending at any time',
      'Each year, about 900,000 new naturalization applications are filed',
      'The backlog grew significantly during COVID-19 when offices closed'
    ],
    officialSources: [
      {
        name: 'USCIS Quarterly Backlog Report',
        url: 'https://www.uscis.gov/tools/reports-and-studies/immigration-and-citizenship-data',
        quote: 'USCIS continues to work through a significant backlog of pending cases across multiple form types.'
      },
      {
        name: 'GAO Report GAO-24-106701',
        url: 'https://www.gao.gov/products/gao-24-106701',
        quote: 'USCIS faces persistent challenges in managing its workload and reducing processing backlogs.'
      }
    ],
    statistics: [
      { label: 'Pending N-400 Applications', value: '~1 million' },
      { label: 'New Applications Per Year', value: '~900,000' },
      { label: 'Average Processing Time', value: '10-18 months' }
    ],
    solutions: [
      {
        what: 'Hire more officers to process applications',
        who: 'USCIS / Congress (funding)',
        status: 'in_progress'
      },
      {
        what: 'Use technology to automate simple checks',
        who: 'USCIS',
        status: 'in_progress'
      },
      {
        what: 'Allow online filing for all forms',
        who: 'USCIS',
        status: 'implemented'
      }
    ]
  },
  {
    id: 'background_checks',
    title: 'Background Checks Take Time',
    plainEnglish: 
      'Before you can become a citizen, the government must check your background. This includes checking with ' +
      'the FBI, CIA, and other agencies. They look at criminal records, immigration history, and security databases. ' +
      'Some checks are quick. Others can take months, especially if your name is common or matches someone in a database.',
    details: [
      'FBI fingerprint check: Usually 24-48 hours',
      'FBI name check: Can take weeks to months',
      'If your name matches someone in a database, manual review is needed',
      'Security checks with other agencies can add more time',
      'Any criminal history requires extra review'
    ],
    officialSources: [
      {
        name: 'USCIS Policy Manual, Volume 12, Part B',
        url: 'https://www.uscis.gov/policy-manual/volume-12-part-b',
        quote: 'USCIS conducts background and security checks on all applicants for naturalization.'
      },
      {
        name: 'DHS OIG Report OIG-20-24',
        url: 'https://www.oig.dhs.gov/',
        quote: 'Background check delays remain a significant factor in overall processing times.'
      }
    ],
    statistics: [
      { label: 'Fingerprint Check', value: '24-48 hours' },
      { label: 'Name Check (simple)', value: '2-4 weeks' },
      { label: 'Name Check (complex)', value: '3-12+ months' }
    ],
    solutions: [
      {
        what: 'Modernize FBI name check database',
        who: 'FBI / Congress',
        status: 'in_progress'
      },
      {
        what: 'Use AI to speed up name matching',
        who: 'FBI / USCIS',
        status: 'proposed'
      },
      {
        what: 'Share results between agencies faster',
        who: 'DHS / FBI',
        status: 'in_progress'
      }
    ]
  },
  {
    id: 'interview_scheduling',
    title: 'Limited Interview Appointments',
    plainEnglish: 
      'Every naturalization applicant must have an in-person interview with a USCIS officer. But USCIS only has ' +
      'a certain number of field offices, and each office can only do so many interviews per day. In busy cities, ' +
      'you might wait many months just to get an interview appointment.',
    details: [
      'There are only 88 USCIS field offices nationwide',
      'Each officer can interview about 8-10 applicants per day',
      'Some offices serve millions of people',
      'Interview appointments are scheduled months in advance',
      'Rescheduling an interview adds more delay'
    ],
    officialSources: [
      {
        name: 'USCIS Ombudsman Annual Report 2023',
        url: 'https://www.dhs.gov/cisombudsman',
        quote: 'Interview scheduling remains one of the primary bottlenecks in the naturalization process.'
      }
    ],
    statistics: [
      { label: 'Field Offices Nationwide', value: '88' },
      { label: 'Interviews Per Officer/Day', value: '8-10' },
      { label: 'Wait for Interview (varies)', value: '2-12 months' }
    ],
    solutions: [
      {
        what: 'Open more field offices in busy areas',
        who: 'USCIS / Congress (funding)',
        status: 'stalled'
      },
      {
        what: 'Allow video interviews for simple cases',
        who: 'USCIS / Congress (law change)',
        status: 'proposed'
      },
      {
        what: 'Extend office hours and weekend appointments',
        who: 'USCIS',
        status: 'in_progress'
      }
    ]
  },
  {
    id: 'funding_model',
    title: 'USCIS Funding Problems',
    plainEnglish: 
      'Unlike most government agencies, USCIS does not get money from taxes. Instead, it runs almost entirely ' +
      'on fees paid by applicants. When fewer people apply (like during COVID), USCIS has less money to hire ' +
      'workers. This is like a business that can only hire workers when customers pay, but the workload stays the same.',
    details: [
      'USCIS is 97% fee-funded (almost no tax money)',
      'When applications drop, so does funding',
      'During COVID-19, USCIS almost ran out of money',
      'Fee increases require months of review and public comment',
      'Hiring and training new officers takes 6-12 months'
    ],
    officialSources: [
      {
        name: 'USCIS Fee Rule 2024',
        url: 'https://www.uscis.gov/fees',
        quote: 'USCIS is funded almost entirely by fees. Without fee adjustments, USCIS cannot hire staff to reduce backlogs.'
      },
      {
        name: 'GAO Report on USCIS Funding',
        url: 'https://www.gao.gov/',
        quote: 'The fee-funded model creates challenges for workforce planning and backlog reduction.'
      }
    ],
    statistics: [
      { label: 'Fee-Funded Percentage', value: '97%' },
      { label: 'Tax Funding', value: '~3%' },
      { label: 'Time to Hire/Train Officer', value: '6-12 months' }
    ],
    solutions: [
      {
        what: 'Give USCIS some tax funding (appropriations)',
        who: 'Congress',
        status: 'proposed'
      },
      {
        what: 'Allow USCIS to adjust fees faster',
        who: 'Congress / DHS',
        status: 'proposed'
      },
      {
        what: 'Create a reserve fund for emergencies',
        who: 'USCIS',
        status: 'in_progress'
      }
    ]
  },
  {
    id: 'paper_systems',
    title: 'Old Technology and Paper Files',
    plainEnglish: 
      'USCIS still uses a lot of paper files and old computer systems. When you send documents, someone must ' +
      'scan them, enter data by hand, and put papers in folders. Old systems are slow and do not share information ' +
      'well. This is like running a modern business with fax machines and filing cabinets.',
    details: [
      'Many forms still require paper filing or printing',
      'Multiple old computer systems do not talk to each other',
      'Paper files must be physically moved between offices',
      'Manual data entry leads to errors and delays',
      'System upgrades are expensive and take years'
    ],
    officialSources: [
      {
        name: 'DHS OIG Report on USCIS IT Systems',
        url: 'https://www.oig.dhs.gov/',
        quote: 'USCIS relies on outdated technology that contributes to processing inefficiencies.'
      },
      {
        name: 'USCIS Ombudsman Annual Report',
        url: 'https://www.dhs.gov/cisombudsman',
        quote: 'Legacy IT systems remain a barrier to efficiency improvements.'
      }
    ],
    statistics: [
      { label: 'Computer Systems in Use', value: '100+' },
      { label: 'Forms Available Online', value: '~60%' },
      { label: 'Estimated Modernization Cost', value: '$3+ billion' }
    ],
    solutions: [
      {
        what: 'Build new unified digital system (ELIS/myUSCIS)',
        who: 'USCIS',
        status: 'in_progress'
      },
      {
        what: 'Allow all forms to be filed online',
        who: 'USCIS',
        status: 'in_progress'
      },
      {
        what: 'Use cloud technology for faster processing',
        who: 'USCIS / DHS',
        status: 'in_progress'
      }
    ]
  },
  {
    id: 'rfe_cycle',
    title: 'Requests for More Evidence (RFE)',
    plainEnglish: 
      'If something is missing or unclear in your application, USCIS sends a letter asking for more documents. ' +
      'This is called a "Request for Evidence" or RFE. Each RFE adds 2-3 months to your case because you need ' +
      'time to respond, then USCIS needs time to review your response.',
    details: [
      'About 20-30% of applications get at least one RFE',
      'You usually have 60-90 days to respond to an RFE',
      'After you respond, USCIS takes weeks to review',
      'Multiple RFEs can extend a case by 6+ months',
      'Many RFEs are for simple missing signatures or documents'
    ],
    officialSources: [
      {
        name: 'USCIS Policy Manual',
        url: 'https://www.uscis.gov/policy-manual',
        quote: 'Officers may request additional evidence when the initial evidence is insufficient.'
      }
    ],
    statistics: [
      { label: 'Applications Getting RFE', value: '~20-30%' },
      { label: 'Time to Respond', value: '60-90 days' },
      { label: 'Additional Delay Per RFE', value: '2-3 months' }
    ],
    solutions: [
      {
        what: 'Better application instructions to prevent RFEs',
        who: 'USCIS',
        status: 'implemented'
      },
      {
        what: 'Online forms that check for errors before filing',
        who: 'USCIS',
        status: 'in_progress'
      },
      {
        what: 'Allow applicants to upload missing documents online',
        who: 'USCIS',
        status: 'in_progress'
      }
    ]
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// HOW TO SPEED UP YOUR APPLICATION
// Tips applicants can follow
// ═══════════════════════════════════════════════════════════════════════════════

export const SPEED_UP_TIPS: SpeedUpTip[] = [
  {
    id: 'file_online',
    title: 'File Your Application Online',
    description: 
      'Online applications are processed faster than paper. USCIS can read the information immediately ' +
      'without waiting for mail or scanning papers. Online filing also prevents many common errors.',
    impact: 'high',
    category: 'filing'
  },
  {
    id: 'complete_application',
    title: 'Submit a Complete Application',
    description: 
      'Double-check that you signed every page, answered every question, and included all required ' +
      'documents. Missing items cause delays. Use the official USCIS checklist.',
    impact: 'high',
    category: 'preparation'
  },
  {
    id: 'correct_fees',
    title: 'Pay the Correct Fee',
    description: 
      'Wrong payment amounts cause USCIS to reject your application and send it back. Check the ' +
      'current fee on USCIS.gov before filing. Fees change, so do not use old information.',
    impact: 'high',
    category: 'filing'
  },
  {
    id: 'biometrics_asap',
    title: 'Attend Biometrics Appointment Quickly',
    description: 
      'When you get your biometrics appointment letter, go as soon as possible. You can sometimes ' +
      'walk in early at a different location. Call USCIS to ask about early appointments.',
    impact: 'medium',
    category: 'filing'
  },
  {
    id: 'update_address',
    title: 'Keep Your Address Updated',
    description: 
      'If you move, tell USCIS immediately using Form AR-11. USCIS sends important letters by mail. ' +
      'If they cannot reach you, your case can be delayed or denied.',
    impact: 'high',
    category: 'general'
  },
  {
    id: 'respond_quickly',
    title: 'Respond to USCIS Requests Quickly',
    description: 
      'If USCIS asks for more documents (RFE), respond as fast as possible. Do not wait until the ' +
      'deadline. Faster responses mean faster decisions.',
    impact: 'high',
    category: 'general'
  },
  {
    id: 'prepare_interview',
    title: 'Prepare Well for Your Interview',
    description: 
      'Study the civics questions and practice English. Bring all your documents organized in a folder. ' +
      'Being prepared helps the interview go smoothly and avoids follow-up appointments.',
    impact: 'medium',
    category: 'interview'
  },
  {
    id: 'case_inquiry',
    title: 'Submit a Case Inquiry if Delayed',
    description: 
      'If your case is outside normal processing times, you can ask USCIS to check on it. Use the ' +
      'online case inquiry tool or call the USCIS Contact Center. Be polite but persistent.',
    impact: 'medium',
    category: 'general'
  },
  {
    id: 'congressman_help',
    title: 'Contact Your Congressman for Help',
    description: 
      'If your case is very delayed, your U.S. Representative or Senator can make an inquiry on your ' +
      'behalf. Their staff can contact USCIS directly. This is free and sometimes helps.',
    impact: 'medium',
    category: 'general'
  },
  {
    id: 'ombudsman',
    title: 'File with the USCIS Ombudsman',
    description: 
      'The Ombudsman helps people with USCIS problems. If you have tried everything else and your ' +
      'case is stuck, the Ombudsman can investigate. This is a free government service.',
    impact: 'low',
    category: 'general'
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// OFFICIAL RESOURCES
// ═══════════════════════════════════════════════════════════════════════════════

export const OFFICIAL_RESOURCES = [
  {
    name: 'USCIS Processing Times',
    url: 'https://egov.uscis.gov/processing-times/',
    description: 'Check current wait times for your form and location'
  },
  {
    name: 'USCIS Case Status Online',
    url: 'https://egov.uscis.gov/casestatus/landing.do',
    description: 'Track your application status with your receipt number'
  },
  {
    name: 'USCIS Contact Center',
    url: 'https://www.uscis.gov/contactcenter',
    description: 'Call 1-800-375-5283 to speak with USCIS'
  },
  {
    name: 'USCIS Ombudsman',
    url: 'https://www.dhs.gov/case-assistance',
    description: 'Get help if your case is stuck or has problems'
  },
  {
    name: 'Congressional Assistance',
    url: 'https://www.house.gov/representatives/find-your-representative',
    description: 'Find your Representative for case help'
  },
  {
    name: 'USCIS Service Request',
    url: 'https://egov.uscis.gov/e-request/',
    description: 'Submit inquiries about your case online'
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// KNOW YOUR RIGHTS
// Plain English version
// ═══════════════════════════════════════════════════════════════════════════════

export const APPLICANT_RIGHTS = [
  {
    right: 'Right to Apply',
    explanation: 'If you meet the requirements, you have the right to apply for citizenship. USCIS cannot refuse to accept your application.'
  },
  {
    right: 'Right to an Interview',
    explanation: 'You have the right to be interviewed by a USCIS officer. The interview must be scheduled within a reasonable time.'
  },
  {
    right: 'Right to a Decision',
    explanation: 'USCIS must make a decision on your application within 120 days after your interview. If they do not, you can file a lawsuit.'
  },
  {
    right: 'Right to Appeal',
    explanation: 'If your application is denied, you have the right to ask for a hearing with a different officer. You can also appeal to federal court.'
  },
  {
    right: 'Right to an Interpreter',
    explanation: 'If you are over 50 and have been a green card holder for 20+ years, or over 55 with 15+ years, you may take the civics test in your language.'
  },
  {
    right: 'Right to Accommodations',
    explanation: 'If you have a disability, you can request help. This includes sign language interpreters, wheelchair access, and more time for tests.'
  },
  {
    right: 'Right to Information',
    explanation: 'You can check your case status online for free. USCIS must tell you why if they deny your application.'
  },
  {
    right: 'Right to Representation',
    explanation: 'You can bring a lawyer or representative to your interview. If you cannot afford a lawyer, free legal help may be available.'
  }
]
