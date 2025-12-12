/**
 * UNITED STATES CITIZENSHIP LEGAL FOUNDATION
 * =============================================
 * 
 * This document serves as the authoritative legal reference for all citizenship
 * pathways documented on this platform. All information is sourced directly from
 * the United States Code (USC), Code of Federal Regulations (CFR), and official
 * USCIS policy guidance.
 * 
 * PRIMARY LEGAL SOURCES:
 * - Immigration and Nationality Act (INA) of 1952, as amended
 * - Title 8 U.S. Code, Chapter 12: Immigration and Nationality
 * - Title 8 Code of Federal Regulations
 * - USCIS Policy Manual
 * 
 * LAST UPDATED: December 2024
 * LEGAL DISCLAIMER: This is informational content, not legal advice.
 */

// =============================================================================
// TITLE 8 U.S. CODE - CHAPTER 12: IMMIGRATION AND NATIONALITY
// =============================================================================

export const TITLE_8_STRUCTURE = {
  chapter: 12,
  title: "Immigration and Nationality",
  subchapters: {
    I: {
      title: "General Provisions",
      sections: "§§ 1101-1107",
      description: "Definitions and administrative provisions"
    },
    II: {
      title: "Immigration",
      sections: "§§ 1151-1382",
      description: "Admission of aliens, visa requirements, removal proceedings"
    },
    III: {
      title: "Nationality and Naturalization",
      sections: "§§ 1401-1504",
      description: "Citizenship acquisition, naturalization requirements, loss of nationality",
      parts: {
        I: "Nationality at Birth and Collective Naturalization (§§ 1401-1409)",
        II: "Nationality Through Naturalization (§§ 1421-1459)",
        III: "Loss of Nationality (§§ 1481-1489)",
        IV: "Miscellaneous (§§ 1501-1504)"
      }
    },
    IV: {
      title: "Refugee Assistance",
      sections: "§§ 1521-1525"
    },
    V: {
      title: "Alien Terrorist Removal Procedures",
      sections: "§§ 1531-1537"
    }
  }
};

// =============================================================================
// CITIZENSHIP AT BIRTH - 8 U.S.C. § 1401
// =============================================================================

export const CITIZENSHIP_AT_BIRTH = {
  statute: "8 U.S.C. § 1401",
  title: "Nationals and citizens of United States at birth",
  inaSection: "INA § 301",
  effectiveDate: "June 27, 1952",
  lastAmended: "2002",
  
  categories: [
    {
      subsection: "(a)",
      description: "Person born in the United States and subject to its jurisdiction",
      requirements: [
        "Birth within the United States",
        "Subject to U.S. jurisdiction (excludes children of foreign diplomats)"
      ],
      notes: "This codifies the 14th Amendment birthright citizenship"
    },
    {
      subsection: "(b)",
      description: "Person found in the United States of unknown parentage",
      requirements: [
        "Found in the United States",
        "Under age 5 years",
        "Unknown parentage"
      ],
      notes: "Presumed citizen until proven otherwise before age 21"
    },
    {
      subsection: "(c)",
      description: "Person born outside U.S. to two U.S. citizen parents",
      requirements: [
        "Both parents are U.S. citizens at time of birth",
        "At least one parent had residence in the United States prior to birth"
      ]
    },
    {
      subsection: "(d)",
      description: "Person born outside U.S. to one citizen parent (who is a national but not citizen) and one alien parent",
      requirements: [
        "One parent is a U.S. citizen",
        "Other parent is a U.S. national (but not citizen)",
        "Citizen parent was physically present in U.S. for continuous period of at least 1 year prior to birth"
      ]
    },
    {
      subsection: "(e)",
      description: "Person born in outlying possession of U.S. of one citizen parent and one national parent",
      requirements: [
        "Born in outlying possession",
        "One parent is U.S. citizen",
        "One parent is U.S. national",
        "Citizen parent physically present in U.S. for continuous period of at least 1 year prior to birth"
      ]
    },
    {
      subsection: "(f)",
      description: "Person of unknown parentage found in U.S. while under 5 years old",
      requirements: [
        "Found in United States",
        "Under age 5",
        "Unknown parentage"
      ],
      notes: "Citizenship presumed unless disproven before age 21"
    },
    {
      subsection: "(g)",
      description: "Person born outside U.S. to one alien parent and one citizen parent",
      requirements: [
        "One parent is U.S. citizen at time of birth",
        "Citizen parent physically present in U.S. for total of 5 years",
        "At least 2 of those years after age 14",
        "Military service and government employment abroad count toward physical presence"
      ],
      notes: "Most common provision for children born abroad to one U.S. citizen parent"
    },
    {
      subsection: "(h)",
      description: "Historical provision for persons born before May 24, 1934",
      requirements: [
        "Born before noon (EST) May 24, 1934",
        "Born outside U.S.",
        "Father was alien, mother was citizen",
        "Mother resided in U.S. before child's birth"
      ]
    }
  ],
  
  relatedRegulations: [
    "8 CFR § 301 (Citizenship at Birth)",
    "8 CFR § 341.2 (Certificates of Citizenship)"
  ]
};

// =============================================================================
// NATURALIZATION REQUIREMENTS - 8 U.S.C. § 1427
// =============================================================================

export const NATURALIZATION_REQUIREMENTS = {
  statute: "8 U.S.C. § 1427",
  title: "Requirements of naturalization",
  inaSection: "INA § 316",
  cfr: "8 CFR Part 316",
  effectiveDate: "June 27, 1952",
  physicalPresenceMonths: 30,
  
  // Statutory text excerpt for display
  statutoryText: `(a) No person, except as otherwise provided in this subchapter, shall be naturalized unless such applicant, (1) immediately preceding the date of filing his application for naturalization has resided continuously, after being lawfully admitted for permanent residence, within the United States for at least five years and during the five years immediately preceding the date of filing his application has been physically present therein for periods totaling at least half of that time, and who has resided within the State or within the district of the Service in the United States in which the applicant filed the application for at least three months, (2) has resided continuously within the United States from the date of the application up to the time of admission to citizenship, (3) during all the periods referred to in this subsection has been and still is a person of good moral character, attached to the principles of the Constitution of the United States, and well disposed to the good order and happiness of the United States.`,
  
  // Simple array for easy iteration in UI
  absenceRules: [
    "Absence less than 6 months: No break in continuous residence",
    "Absence 6-12 months: Presumption of break (rebuttable with evidence)",
    "Absence over 12 months: Breaks continuous residence (apply N-470 to preserve)"
  ],
  
  generalRequirements: {
    subsection: "(a)",
    title: "Residence Requirements",
    requirements: [
      {
        requirement: "Lawful Permanent Resident Status",
        description: "Must be lawfully admitted for permanent residence"
      },
      {
        requirement: "Continuous Residence",
        duration: "5 years",
        description: "Resided continuously in United States for at least 5 years immediately preceding application"
      },
      {
        requirement: "Physical Presence",
        duration: "30 months (half of 5 years)",
        description: "Physically present in the United States for at least half of the required residence period"
      },
      {
        requirement: "State Residence",
        duration: "3 months",
        description: "Resided in the state or USCIS district where application filed for at least 3 months"
      },
      {
        requirement: "Continuous Residence to Oath",
        description: "Must maintain continuous residence from application date until admission to citizenship"
      },
      {
        requirement: "Good Moral Character",
        description: "Person of good moral character during entire statutory period and until admission to citizenship"
      },
      {
        requirement: "Attachment to Constitution",
        description: "Attached to the principles of the Constitution and well disposed to the good order and happiness of the United States"
      }
    ]
  },
  
  absences: {
    subsection: "(b)",
    title: "Effect of Absences on Continuous Residence",
    rules: [
      {
        duration: "Less than 6 months",
        effect: "Does not break continuous residence"
      },
      {
        duration: "6 months to 1 year",
        effect: "Presumptively breaks continuous residence unless applicant proves residence was not abandoned"
      },
      {
        duration: "More than 1 year",
        effect: "Breaks continuous residence",
        exception: "May apply for N-470 (Application to Preserve Residence) before departure if employed by U.S. government, U.S. research institution, or certain other qualifying employers"
      }
    ]
  },
  
  goodMoralCharacter: {
    subsection: "(d)",
    title: "Good Moral Character",
    statutoryPeriod: "5 years (or applicable period based on pathway)",
    permanentBars: [
      "Murder conviction",
      "Aggravated felony conviction (on or after November 29, 1990)"
    ],
    temporaryBars: [
      "Crimes involving moral turpitude",
      "Two or more gambling offenses",
      "Habitual drunkard",
      "Prostitution",
      "Smuggling aliens",
      "Practicing polygamy",
      "Failure to pay court-ordered child support",
      "Incarceration for 180+ days"
    ],
    // Combined bars for UI iteration
    bars: [
      "Murder conviction (permanent bar)",
      "Aggravated felony conviction after Nov 29, 1990 (permanent bar)",
      "Crimes involving moral turpitude",
      "Two or more gambling offenses",
      "Habitual drunkard",
      "Prostitution or commercialized vice",
      "Smuggling aliens into the U.S.",
      "Practicing polygamy",
      "Failure to pay court-ordered child support",
      "Incarceration for 180+ days during statutory period"
    ]
  },
  
  relatedRegulations: [
    "8 CFR § 316.2 (Eligibility)",
    "8 CFR § 316.5 (Residence)",
    "8 CFR § 316.10 (Good moral character)",
    "8 CFR § 316.11 (Attachment to Constitution)"
  ]
};

// =============================================================================
// MARRIAGE-BASED NATURALIZATION - 8 U.S.C. § 1430
// =============================================================================

export const MARRIAGE_NATURALIZATION = {
  statute: "8 U.S.C. § 1430",
  title: "Married persons and employees of certain nonprofit organizations",
  inaSection: "INA § 319",
  
  spouseOfCitizen: {
    subsection: "(a)",
    title: "Spouse of U.S. Citizen",
    requirements: [
      {
        requirement: "Lawful Permanent Resident Status",
        description: "Must be lawfully admitted for permanent residence"
      },
      {
        requirement: "Continuous Residence",
        duration: "3 years (reduced from 5)",
        description: "Resided continuously in United States for at least 3 years immediately preceding application"
      },
      {
        requirement: "Physical Presence",
        duration: "18 months",
        description: "Physically present in United States for at least half of the 3-year period"
      },
      {
        requirement: "Marital Union",
        duration: "3 years",
        description: "Living in marital union with the U.S. citizen spouse for entire 3-year period"
      },
      {
        requirement: "Spouse Citizenship",
        description: "Spouse must have been a U.S. citizen for the entire 3-year period"
      },
      {
        requirement: "State Residence",
        duration: "3 months",
        description: "Resided in state or USCIS district for at least 3 months"
      },
      {
        requirement: "Good Moral Character",
        description: "Good moral character for the 3-year statutory period"
      }
    ],
    
    batteredSpouseException: {
      description: "A person who was battered or subjected to extreme cruelty by a U.S. citizen spouse or parent may be exempt from the marital union requirement",
      documentation: "Must provide evidence of abuse and good faith marriage"
    }
  },
  
  spouseAbroadEmployment: {
    subsection: "(b)",
    title: "Spouse of Citizen Employed Abroad",
    requirements: [
      "Lawful permanent resident status",
      "Married to U.S. citizen who is regularly stationed abroad",
      "Citizen spouse employed by U.S. government, U.S. research institution, or U.S. business engaged in foreign trade",
      "Will depart abroad to reside with citizen spouse",
      "No specific residence or physical presence required"
    ]
  },
  
  militarySpouse: {
    subsection: "(e)",
    title: "Spouse of Armed Forces Member Abroad",
    description: "A lawful permanent resident who is the spouse of a U.S. citizen serving abroad in the Armed Forces may have their time abroad counted as residence and physical presence in the U.S."
  },
  
  relatedRegulations: [
    "8 CFR § 319.1 (Spouse of citizen)",
    "8 CFR § 319.2 (Battered spouse)",
    "8 CFR § 319.11 (Spouse of military member)"
  ]
};

// =============================================================================
// MILITARY SERVICE NATURALIZATION - 8 U.S.C. § 1439-1440
// =============================================================================

export const MILITARY_NATURALIZATION = {
  // Top-level info
  statute: "8 U.S.C. §§ 1439-1440",
  inaSection: "INA §§ 328-329",
  
  // Qualifying service types
  qualifyingService: [
    "U.S. Army",
    "U.S. Navy",
    "U.S. Air Force",
    "U.S. Marine Corps",
    "U.S. Coast Guard",
    "U.S. Space Force",
    "National Guard (under Title 10)",
    "Selected Reserve (active status)"
  ],
  
  peacetime: {
    statute: "8 U.S.C. § 1439",
    title: "Naturalization through service in the armed forces",
    inaSection: "INA § 328",
    statutoryText: "A person who has served honorably at any time in the armed forces of the United States for a period or periods aggregating one year, and who, if separated from such service, was never separated except under honorable conditions, may be naturalized without having resided, continuously immediately preceding the date of filing such person's application, in the United States for at least five years...",
    
    requirements: [
      "1 year aggregate honorable military service",
      "Lawfully admitted to the United States (any status)",
      "Currently in service OR filed within 6 months of discharge",
      "Good moral character during required period"
    ],
    
    benefits: [
      "No 5-year residence requirement",
      "No physical presence requirement",
      "No state/district residence requirement",
      "No filing fees (Form N-400)",
      "Expedited processing available"
    ]
  },
  
  wartime: {
    statute: "8 U.S.C. § 1440",
    title: "Naturalization through active-duty service during periods of military hostilities",
    inaSection: "INA § 329",
    statutoryText: "Any person who, while an alien or a noncitizen national of the United States, has served honorably in an active-duty status in the military, air, or naval forces of the United States during any period... and who, if separated from such service, was separated under honorable conditions, may be naturalized...",
    
    requirements: [
      "Honorable active-duty service during designated hostility period",
      "Enlisted/inducted in U.S. or its territories",
      "OR was lawfully admitted for permanent residence at enlistment"
    ],
    
    benefits: [
      "No residence requirement of any kind",
      "No physical presence requirement",
      "Can apply overseas",
      "No filing fees",
      "Immediate eligibility"
    ],
    
    designatedPeriods: [
      "World War I: April 6, 1917 – November 11, 1918",
      "World War II: September 1, 1939 – December 31, 1946",
      "Korean Hostilities: June 25, 1950 – July 1, 1955",
      "Vietnam Hostilities: February 28, 1961 – October 15, 1978",
      "Persian Gulf: August 2, 1990 – April 11, 1991",
      "War on Terrorism: September 11, 2001 – Present"
    ]
  },
  
  posthumous: {
    statute: "8 U.S.C. § 1440-1",
    title: "Posthumous citizenship",
    description: "Posthumous naturalization may be granted to non-citizens who died while serving honorably during designated periods of hostility"
  },
  
  relatedRegulations: [
    "8 CFR § 328 (Peacetime service)",
    "8 CFR § 329 (Wartime service)"
  ]
};

// =============================================================================
// DERIVATIVE CITIZENSHIP - 8 U.S.C. §§ 1431-1433
// =============================================================================

export const DERIVATIVE_CITIZENSHIP = {
  automaticCitizenship: {
    statute: "8 U.S.C. § 1431",
    title: "Children born outside the United States and lawfully admitted for permanent residence; conditions under which citizenship automatically acquired",
    inaSection: "INA § 320",
    
    requirements: {
      allMustBeMet: [
        {
          requirement: "At least one parent is a U.S. citizen",
          type: "by birth or naturalization"
        },
        {
          requirement: "Child is under 18 years of age",
          type: "at time conditions are met"
        },
        {
          requirement: "Child is residing in the United States in the legal and physical custody of the citizen parent",
          type: "pursuant to lawful admission for permanent residence"
        }
      ],
      notes: [
        "Citizenship is automatic when all conditions are met - no application required",
        "However, Certificate of Citizenship (Form N-600) may be obtained as evidence",
        "Also applies to adopted children who satisfy INA § 101(b)(1) requirements"
      ]
    }
  },
  
  childrenAbroad: {
    statute: "8 U.S.C. § 1433",
    title: "Children born and residing outside the United States; conditions for acquiring certificate of citizenship",
    inaSection: "INA § 322",
    
    requirements: [
      {
        requirement: "Citizen Parent",
        description: "At least one parent (or citizen grandparent if parent deceased within 5 years) is a U.S. citizen"
      },
      {
        requirement: "Parent Physical Presence",
        duration: "5 years (2 after age 14)",
        description: "Citizen parent/grandparent was physically present in U.S. for 5 years, at least 2 after age 14"
      },
      {
        requirement: "Child Age",
        description: "Child is under 18 years of age"
      },
      {
        requirement: "Child Custody",
        description: "Child is residing outside U.S. in legal and physical custody of citizen parent"
      },
      {
        requirement: "Child Presence",
        description: "Child is temporarily present in the United States pursuant to lawful admission"
      },
      {
        requirement: "Oath",
        description: "Child must take oath of allegiance (if required by age)"
      }
    ],
    
    notes: [
      "Application must be submitted on Form N-600K",
      "Child must be physically present in U.S. for oath ceremony",
      "Also applies to adopted children"
    ]
  },
  
  relatedRegulations: [
    "8 CFR § 320.1 (Automatic acquisition)",
    "8 CFR § 322.2 (Acquisition for children residing outside U.S.)"
  ]
};

// =============================================================================
// NATURALIZATION TESTING REQUIREMENTS - 8 U.S.C. § 1423
// =============================================================================

export const NATURALIZATION_TESTING = {
  statute: "8 U.S.C. § 1423",
  title: "Requirements as to understanding the English language, history, principles and form of government of the United States",
  inaSection: "INA § 312",
  
  // Exemptions for UI iteration
  exemptions: [
    "50/20: Age 50+ with 20+ years as LPR - exempt from English",
    "55/15: Age 55+ with 15+ years as LPR - exempt from English",
    "65/20: Age 65+ with 20+ years as LPR - shorter civics list",
    "N-648: Medical disability may waive English and/or civics"
  ],
  
  // Civics test info for UI
  civicsTest: {
    totalQuestions: 100,
    questionsAsked: 10,
    passingScore: 6,
    description: "Must answer 6 of 10 questions correctly"
  },
  
  englishRequirement: {
    description: "Ability to read, write, and speak words in ordinary usage in the English language",
    exceptions: [
      {
        condition: "Age 50+ and LPR for 20+ years",
        effect: "Exempt from English requirement; may take civics test in native language"
      },
      {
        condition: "Age 55+ and LPR for 15+ years", 
        effect: "Exempt from English requirement; may take civics test in native language"
      },
      {
        condition: "Physical or developmental disability or mental impairment (N-648)",
        effect: "May be exempt from English and/or civics requirements"
      }
    ]
  },
  
  civicsRequirement: {
    description: "Knowledge and understanding of the fundamentals of the history, and of the principles and form of government, of the United States",
    testFormat: "USCIS officer asks up to 10 questions from list of 100 civics questions",
    passingScore: "Must answer 6 of 10 questions correctly",
    seniorException: {
      condition: "Age 65+ and LPR for 20+ years",
      effect: "May use shorter list of 20 questions marked with asterisk"
    }
  },
  
  relatedRegulations: [
    "8 CFR § 312.1 (English language requirement)",
    "8 CFR § 312.2 (Civics requirement)",
    "8 CFR § 312.5 (Disability exception)"
  ]
};

// =============================================================================
// OATH OF ALLEGIANCE - 8 U.S.C. § 1448
// =============================================================================

export const OATH_OF_ALLEGIANCE = {
  statute: "8 U.S.C. § 1448",
  title: "Oath of renunciation and allegiance",
  inaSection: "INA § 337",
  
  // Components for UI display
  components: [
    {
      title: "Renunciation",
      text: "Absolutely and entirely renounce and abjure all allegiance and fidelity to any foreign prince, potentate, state, or sovereignty"
    },
    {
      title: "Support & Defense",
      text: "Support and defend the Constitution and laws of the United States against all enemies, foreign and domestic"
    },
    {
      title: "True Faith",
      text: "Bear true faith and allegiance to the Constitution and laws"
    },
    {
      title: "Bear Arms",
      text: "Bear arms on behalf of the United States when required by law (may be modified for religious objectors)"
    },
    {
      title: "Noncombatant Service",
      text: "Perform noncombatant service in the Armed Forces when required by law"
    },
    {
      title: "Civilian Service",
      text: "Perform work of national importance under civilian direction when required by law"
    },
    {
      title: "Free Will",
      text: "Take this obligation freely, without mental reservation or purpose of evasion"
    }
  ],
  
  // Short version for UI display
  text: "I hereby declare, on oath, that I absolutely and entirely renounce and abjure all allegiance and fidelity to any foreign prince, potentate, state, or sovereignty; that I will support and defend the Constitution and laws of the United States against all enemies, foreign and domestic; that I will bear true faith and allegiance to the same; that I will bear arms on behalf of the United States when required by the law; that I will perform noncombatant service in the Armed Forces when required by the law; that I will perform work of national importance under civilian direction when required by the law; and that I take this obligation freely, without any mental reservation or purpose of evasion; so help me God.",
  
  oathText: `
    I hereby declare, on oath, that I absolutely and entirely renounce and abjure 
    all allegiance and fidelity to any foreign prince, potentate, state, or 
    sovereignty, of whom or which I have heretofore been a subject or citizen; 
    that I will support and defend the Constitution and laws of the United States 
    of America against all enemies, foreign and domestic; that I will bear true 
    faith and allegiance to the same; that I will bear arms on behalf of the 
    United States when required by the law; that I will perform noncombatant 
    service in the Armed Forces of the United States when required by the law; 
    that I will perform work of national importance under civilian direction when 
    required by the law; and that I take this obligation freely, without any 
    mental reservation or purpose of evasion; so help me God.
  `,
  
  modifications: {
    religiousObjection: "Clause about bearing arms may be modified for religious objectors",
    godReference: "Final phrase 'so help me God' may be omitted if applicant objects"
  },
  
  timing: {
    deadline: "Must take oath within 2 years of approval",
    extension: "Failure to take oath within deadline may result in denial"
  },
  
  relatedRegulations: [
    "8 CFR § 337.1 (Oath of allegiance)",
    "8 CFR § 337.2 (Oath modification)"
  ]
};

// =============================================================================
// LOSS OF NATIONALITY - 8 U.S.C. § 1481
// =============================================================================

export const LOSS_OF_NATIONALITY = {
  statute: "8 U.S.C. § 1481",
  title: "Loss of nationality by native-born or naturalized citizen; voluntary action; burden of proof; presumptions",
  inaSection: "INA § 349",
  
  voluntaryActs: [
    {
      subsection: "(a)(1)",
      act: "Obtaining naturalization in a foreign state",
      condition: "After age 18, upon own application"
    },
    {
      subsection: "(a)(2)",
      act: "Taking oath of allegiance to a foreign state",
      condition: "After age 18"
    },
    {
      subsection: "(a)(3)",
      act: "Entering or serving in armed forces of a foreign state",
      condition: "If engaged in hostilities against U.S. or serves as commissioned/non-commissioned officer"
    },
    {
      subsection: "(a)(4)",
      act: "Accepting employment with a foreign government",
      condition: "If requires oath of allegiance, or if in a policy-level position"
    },
    {
      subsection: "(a)(5)",
      act: "Making formal renunciation of nationality before U.S. diplomatic/consular officer abroad",
      condition: "In form prescribed by Secretary of State"
    },
    {
      subsection: "(a)(6)",
      act: "Making formal written renunciation of nationality in the United States",
      condition: "During time of war, if Attorney General approves"
    },
    {
      subsection: "(a)(7)",
      act: "Committing treason, sedition, or bearing arms against the United States",
      condition: "If convicted by court martial or court of competent jurisdiction"
    }
  ],
  
  requirements: {
    voluntariness: "Act must be performed voluntarily",
    intent: "Person must intend to relinquish U.S. nationality",
    burdenOfProof: "Government must prove expatriating act by preponderance of evidence",
    presumption: "As of 1990, there is no presumption that performing expatriating act results in loss of nationality if done without intent"
  },
  
  relatedRegulations: [
    "8 CFR § 349.1 (Loss of nationality)",
    "22 CFR § 50.40 (Certificates of Loss of Nationality)"
  ]
};

// =============================================================================
// DENATURALIZATION - 8 U.S.C. § 1451
// =============================================================================

export const DENATURALIZATION = {
  statute: "8 U.S.C. § 1451",
  title: "Revocation of naturalization",
  inaSection: "INA § 340",
  
  grounds: [
    {
      ground: "Illegal procurement",
      description: "Naturalization was obtained illegally (did not comply with statutory requirements)"
    },
    {
      ground: "Concealment or willful misrepresentation",
      description: "Naturalization was procured by concealment of a material fact or willful misrepresentation"
    },
    {
      ground: "Refusal to testify",
      description: "Person refuses, within 10 years of naturalization, to testify before congressional committee concerning subversive activities"
    },
    {
      ground: "Membership in prohibited organizations",
      description: "Within 5 years of naturalization, person becomes member of or affiliated with Communist Party, totalitarian organization, or terrorist organization"
    },
    {
      ground: "Military service non-honorable discharge",
      description: "For military naturalizations: separation from Armed Forces under other than honorable conditions before completing 5 years of honorable service"
    }
  ],
  
  process: {
    venue: "U.S. District Court in district where person resides",
    party: "U.S. Attorney initiates proceeding",
    burden: "Government must prove grounds by clear and convincing evidence",
    effect: "If revoked, person returns to status held immediately before naturalization (usually LPR)"
  },
  
  relatedRegulations: [
    "8 CFR § 340.1 (Revocation proceedings)"
  ]
};

// =============================================================================
// FORMS REFERENCE
// =============================================================================

export const USCIS_FORMS = {
  // Direct access for common forms (for UI convenience)
  N400: {
    title: "Application for Naturalization",
    formNumber: "N-400",
    use: "Standard naturalization application",
    filingFee: 710,
    biometricsFee: 85,
    feeNote: "Some fee exemptions apply (military, certain low-income applicants)",
    processingTime: "8-14 months (varies by field office)"
  },
  N600: {
    title: "Application for Certificate of Citizenship",
    formNumber: "N-600",
    use: "For persons who acquired or derived citizenship (as evidence)",
    filingFee: 1170,
    processingTime: "5-8 months"
  },
  N470: {
    title: "Application to Preserve Residence for Naturalization Purposes",
    formNumber: "N-470",
    use: "For LPRs who need to be absent from U.S. for 1+ year for qualifying employment",
    filingFee: 355,
    processingTime: "6-12 months"
  },
  
  // Organized by category
  naturalization: {
    "N-400": {
      title: "Application for Naturalization",
      use: "Standard naturalization application",
      fee: "$710 (plus $85 biometrics, some exemptions apply)",
      processingTime: "Varies by field office (typically 8-14 months)"
    },
    "N-470": {
      title: "Application to Preserve Residence for Naturalization Purposes",
      use: "For LPRs who need to be absent from U.S. for 1+ year for qualifying employment",
      fee: "$355"
    }
  },
  citizenship: {
    "N-600": {
      title: "Application for Certificate of Citizenship",
      use: "For persons who acquired or derived citizenship (as evidence)",
      fee: "$1,170"
    },
    "N-600K": {
      title: "Application for Citizenship and Issuance of Certificate Under Section 322",
      use: "For children residing abroad to obtain citizenship through citizen parent",
      fee: "$1,170"
    }
  },
  disability: {
    "N-648": {
      title: "Medical Certification for Disability Exceptions",
      use: "To request waiver of English and/or civics requirement due to disability",
      fee: "No fee (submitted with N-400)"
    }
  }
};

// =============================================================================
// TIMELINE REFERENCE
// =============================================================================

export const NATURALIZATION_TIMELINES = {
  standard: {
    pathway: "Standard 5-Year Residence",
    eligibilityToFile: "90 days before completing 5-year residence requirement",
    totalTime: "5 years LPR + processing time",
    totalYears: "5 years",
    earlyFiling: "90 days early",
    processingTime: "8-14 months"
  },
  marriageToUSCitizen: {
    pathway: "Marriage to U.S. Citizen (3 Years)",
    eligibilityToFile: "90 days before completing 3-year residence requirement",
    totalTime: "3 years LPR + processing time",
    processingTime: "8-14 months (varies by location)"
  },
  // Alias for marriage pathway for easier access
  marriage: {
    pathway: "Marriage to U.S. Citizen (3 Years)",
    eligibilityToFile: "90 days before completing 3-year residence requirement",
    totalTime: "3 years LPR + processing time",
    totalYears: "3 years",
    earlyFiling: "90 days early",
    physicalPresence: "18 months",
    processingTime: "8-14 months"
  },
  militaryPeacetime: {
    pathway: "Military Service (Peacetime)",
    eligibilityToFile: "After 1 year honorable service",
    totalTime: "1 year service + processing time",
    processingTime: "Expedited processing available"
  },
  militaryWartime: {
    pathway: "Military Service (Wartime/Hostilities)",
    eligibilityToFile: "Immediately upon qualifying service",
    totalTime: "No minimum service period required",
    processingTime: "Expedited processing available"
  },
  // Alias for military pathway
  military: {
    processingTime: "Expedited",
    peacetime: {
      pathway: "Military Service (Peacetime)",
      totalYears: "1 year",
      earlyFiling: "During service",
      processingTime: "Expedited",
      serviceRequirement: "1 year honorable service"
    },
    wartime: {
      pathway: "Military Service (Wartime)",
      totalYears: "Any period",
      earlyFiling: "Immediately",
      processingTime: "Expedited",
      serviceRequirement: "No minimum"
    }
  }
};

// =============================================================================
// EXPORT ALL LEGAL DATA
// =============================================================================

export const LEGAL_FOUNDATION = {
  title8Structure: TITLE_8_STRUCTURE,
  citizenshipAtBirth: CITIZENSHIP_AT_BIRTH,
  naturalizationRequirements: NATURALIZATION_REQUIREMENTS,
  marriageNaturalization: MARRIAGE_NATURALIZATION,
  militaryNaturalization: MILITARY_NATURALIZATION,
  derivativeCitizenship: DERIVATIVE_CITIZENSHIP,
  naturalizationTesting: NATURALIZATION_TESTING,
  oathOfAllegiance: OATH_OF_ALLEGIANCE,
  lossOfNationality: LOSS_OF_NATIONALITY,
  denaturalization: DENATURALIZATION,
  forms: USCIS_FORMS,
  timelines: NATURALIZATION_TIMELINES,
  
  // Source citations
  sources: {
    primary: [
      {
        name: "Title 8 U.S. Code",
        url: "https://www.law.cornell.edu/uscode/text/8",
        description: "Aliens and Nationality"
      },
      {
        name: "8 CFR",
        url: "https://www.law.cornell.edu/cfr/text/8",
        description: "Code of Federal Regulations - Aliens and Nationality"
      },
      {
        name: "USCIS Policy Manual",
        url: "https://www.uscis.gov/policy-manual",
        description: "Official USCIS guidance on immigration and citizenship"
      }
    ],
    disclaimer: `
      LEGAL DISCLAIMER: This information is provided for educational purposes only 
      and does not constitute legal advice. Immigration law is complex and subject 
      to change. Always consult with a licensed immigration attorney for advice 
      specific to your situation. This content is based on federal law as of 
      December 2024 and may not reflect recent amendments or policy changes.
    `
  }
};

export default LEGAL_FOUNDATION;
