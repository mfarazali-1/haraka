export interface RoleSection {
  heading: string;
  para: string | null;
  items: string[];
}

export interface Role {
  title: string;
  subtitle: string | null;
  category: string;
  location: string;
  salary: string;
  intro: string;
  sections: RoleSection[];
  applyHref: string | null;
  sendTo: string[];
  referral: string | null;
}

export const roles: Role[] = [
  {
    "title": "Senior Business Immigration Attorney",
    "subtitle": "Open to Non-Equity Partnership",
    "category": "Immigration",
    "location": "Brooklyn, NY · Open to Remote",
    "salary": "$125k–$185k + Bonus & Benefits",
    "intro": "Haraka Headhunters is working with a boutique immigration law firm in Brooklyn, New York that serves marquee clients in FinTech, tech, finance, hedge funds, commodities trading, and high-profile startups — including household names. The firm is experiencing exponential growth and is seeking to add a senior business immigration attorney.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally 4+ years of business immigration experience handling employment-based and high-skill nonimmigrant and immigrant visa matters, including several of the following:",
        "items": [
          "TN visas",
          "J-1 visas",
          "H-1B specialty occupations",
          "L-1 intracompany transfers",
          "Nonimmigrant visa (NIV) processes",
          "PERM labor certification lifecycle (EB-2/EB-3)",
          "Experience with EB-1 (Extraordinary Ability), O-1, or other writing-intensive high-skill petitions is a plus (not required — the firm has dedicated legal writing support)",
          "Recent experience managing complex caseloads, client interaction, or mentoring juniors is advantageous. The role involves direct engagement with prestigious New York-based and national clients expecting high-level, responsive service."
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD or LLM from a US ABA-accredited law school",
          "Admitted and in good standing with any U.S. State Bar (New York Bar preferred but not required — immigration law is federal; NJ or other bars acceptable)"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Marquee clientele: prestigious FinTech firms, major tech companies, hedge funds, household-name brands, and exciting AI/tech startups",
          "Hybrid work model: strong preference for tri-state area base, with only 1–2 in-office days per week (some flexibility for exceptional remote candidates; one current attorney is West Coast-based)",
          "Direct client engagement in a collaborative, boutique environment",
          "Supportive team: 2 partners, COO, 4 associate attorneys, 1 full-time legal writer (licensed attorney), 4 full-time paralegals, part-time admins, and a law clerk — near 1:1 attorney-to-support ratio",
          "Positive culture: kind, collaborative team with a “no a-holes” policy; most attorneys work ~45 hours/week (rarely exceeding 50); dog-friendly office; Google Drive-based workflow",
          "Work you can be proud of: high standards, excellent client service, and partnership potential at a young firm",
          "Comprehensive benefits: health insurance via PEO, 401(k) with match (~3–4%), self-managed PTO with recommended minimums (12–25 days + 11–12 holidays)",
          "Year-end bonus potential based on firm profitability, exceeding billing goals, and origination (recent example: a departing attorney received $11,000; 20% origination credit when you bring in and service business, 10% if originating only)",
          "No strict billable hour quotas or penalties (soft goals used for workload distribution and salary support)"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Senior%20Business%20Immigration%20Attorney&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Senior%20Business%20Immigration%20Attorney%20role%20(Brooklyn%2C%20NY%20%C2%B7%20Open%20to%20Remote).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$500 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Trial Lawyer (Business Litigation)",
    "subtitle": null,
    "category": "Litigation",
    "location": "Irvine, CA · Open to 100% Remote",
    "salary": "$185k–$235k + Bonus & Benefits",
    "intro": "Our client is a boutique law practice located in Irvine, California — referral-driven, with a consistent stream of high-quality matters from longstanding client relationships and brand recognition. Their client roster includes globally recognized companies such as Armani Exchange, Oakley, Gucci, and Louis Vuitton, where they primarily handle copyright and trademark infringement matters as well as a wide variety of business disputes on both the plaintiff and defense side.\n\nIn this role you'll work with a firm that has a very prestigious IP practice (copyright and patent infringement) alongside complex business disputes. Associates gain exposure to high-level litigation typically seen at much larger firms within a boutique environment that offers hands-on responsibility and mentorship.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally a trial lawyer who has been practicing in California for at least 5 years. We prefer candidates with both defense-side and plaintiff-side experience in at least two of the following:",
        "items": [
          "LLC disputes",
          "Fiduciary duty",
          "Product liability",
          "Real estate disputes",
          "Shareholder disputes",
          "Employment litigation",
          "Construction defect matters",
          "Intellectual property litigation",
          "Must be comfortable billing 140 hours monthly ($1,000 for hours billed in excess of 150 per month)"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "Admitted and in good standing with the California State Bar Association"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "2 weeks PTO",
          "End-of-year bonus",
          "Open to 100% remote",
          "Monthly performance-based bonus",
          "CLEs and California Bar dues fully covered",
          "Medical insurance 100% covered by employer",
          "The opportunity to work with luxury brands including Armani Exchange, Oakley, Gucci, and Louis Vuitton"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com,Emmanuel.Ojo@HarakaHeadhunters.com?subject=Application%3A%20Trial%20Lawyer%20(Business%20Litigation)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Trial%20Lawyer%20(Business%20Litigation)%20role%20(Irvine%2C%20CA%20%C2%B7%20Open%20to%20100%25%20Remote).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com",
      "Emmanuel.Ojo@HarakaHeadhunters.com"
    ],
    "referral": "$500 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Insurance Defense Attorney",
    "subtitle": "General Liability",
    "category": "Insurance Defense",
    "location": "Northern California · Hybrid available",
    "salary": "$165k–$215k + Lucrative Bonus & Comprehensive Benefits",
    "intro": "We're partnered with a well-established and well-respected law practice in Northern California (offices in Sacramento, Orange County, and Walnut Creek, plus locations in Florida and Las Vegas) that's experiencing exponential growth and is looking to add 3–5 insurance defense lawyers to their team.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Minimum 2 years of experience handling at least two of the following types of cases:",
        "items": [
          "Premise liability",
          "General casualty",
          "Professional liability",
          "Trucking & transportation",
          "Product liability",
          "Construction defect"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD or LLM from a US ABA-accredited law school",
          "Admitted and in good standing with the California State Bar Association"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Matching 401(k)",
          "Marquee clientele",
          "Paid time off and holidays",
          "Free parking for all employees",
          "Health, dental, and vision insurance",
          "A vibrant, collaborative work environment with young, energetic attorneys",
          "The firm owns the building that houses the Orange County office — a beautiful new building a short distance from John Wayne airport. The office looks like a small tech campus with indoor and outdoor space",
          "Fully stocked kitchen with cold brew coffee and a beer tap that opens at 3pm",
          "Professional development — you'll have the opportunity to try cases if you have an appetite for trial work",
          "You'll potentially be joining a firm that doesn't back down from trying cases like many others in this area of practice",
          "If you prefer back-office tasks over trial work, our client welcomes you with open arms — there's a place for you within the practice",
          "If you're licensed in Florida or Nevada, there may be an opportunity at those locations"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Insurance%20Defense%20Attorney&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Insurance%20Defense%20Attorney%20role%20(Northern%20California%20%C2%B7%20Hybrid%20available).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$200 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Foreclosure Defense Attorney",
    "subtitle": null,
    "category": "Foreclosure Defense",
    "location": "Melville, NY",
    "salary": "$100k–$170k + EOY Bonus & Benefits",
    "intro": "We're partnering with a fast-growing New York-based firm seeking a foreclosure defense attorney to join its team. The firm is the number 1 bankruptcy firm in the Eastern District.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Minimum 1 year of litigation experience concentrating in foreclosure defense, or experience handling at least one of:",
        "items": [
          "Landlord-tenant law",
          "Debtor-creditor law"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "Juris Doctor (JD) from an ABA-accredited U.S. law school",
          "Active and good-standing admission with the New York State Bar"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Free on-site parking",
          "Company potluck every other month",
          "Work alongside a collaborative and supportive team",
          "Talk of the Town holiday and employee birthday celebrations",
          "50% medical, vision, and health benefits (3-month wait time)",
          "Opportunity to work at the number 1 bankruptcy firm in the Eastern District"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Foreclosure%20Defense%20Attorney&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Foreclosure%20Defense%20Attorney%20role%20(Melville%2C%20NY).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$500 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Administrative Assistant (Legal Recruiter)",
    "subtitle": null,
    "category": "Operations",
    "location": "Midtown East, NYC · Remote after 90 days",
    "salary": "$35/hour + Commission",
    "intro": "Haraka Headhunters is hiring an Administrative Assistant to support the CEO in running an attorney search firm, podcast, and online eCommerce business.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": null,
        "items": [
          "Exceptional writing skills",
          "An interest in business development",
          "Must have an interest in recruiting attorneys",
          "Paralegal experience is a plus",
          "Mock trial experience is a plus",
          "Experience utilizing Westlaw is a plus",
          "Capable of assisting the CEO with running an attorney search firm, podcast, and online eCommerce business"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "A bachelor's degree or paralegal certification is a plus"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Position is on-site at our Midtown East office for the first 90 days, then 100% remote thereafter",
          "Direct and frequent client engagement — this is a boutique staffing agency",
          "The opportunity to work with an entrepreneurial-minded CEO who is a seasoned recruiter and an inventor"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Administrative%20Assistant%20(Legal%20Recruiter)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Administrative%20Assistant%20(Legal%20Recruiter)%20role%20(Midtown%20East%2C%20NYC%20%C2%B7%20Remote%20after%2090%20days).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$300 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Intern / Attorney Recruiter",
    "subtitle": null,
    "category": "Operations",
    "location": "Midtown East, NYC · Near Grand Central",
    "salary": "$40/hour (post-training/probationary period)",
    "intro": "Haraka Headhunters is a NYC-based legal search firm specializing in IP, immigration, and corporate attorney placements. Due to exponential growth and demand from our existing clients, we're looking to add 2–3 members to our team.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": null,
        "items": [
          "Exceptional writing skills",
          "Interest in recruiting attorneys",
          "Interest in podcast and content creation",
          "An interest in business development",
          "Strategic and critical thinking abilities",
          "Ideally at least 2 years recruiting attorneys or 5+ years as a paralegal — we're willing to train the right candidates",
          "Law school or law-school-bound students are strongly encouraged to apply",
          "Students pursuing a political science degree are strongly encouraged to apply",
          "Individuals with substantial mock trial experience are strongly encouraged to apply"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "Must have a high school diploma (college degree preferred)"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Unlimited overtime",
          "Direct and frequent client engagement — this is a boutique legal search firm",
          "The opportunity to work with an entrepreneurial-minded CEO who is a seasoned recruiter, podcaster, and inventor"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Intern%20%2F%20Attorney%20Recruiter&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Intern%20%2F%20Attorney%20Recruiter%20role%20(Midtown%20East%2C%20NYC%20%C2%B7%20Near%20Grand%20Central).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": null
  },
  {
    "title": "Estate Planning Attorney",
    "subtitle": "Open to Partnership",
    "category": "Estate Planning",
    "location": "Montclair, NJ",
    "salary": "$150k–$325k + Bonus (up to 30% of base) & Benefits",
    "intro": "We're working with a well-known and well-respected law practice that mainly handles estate planning and real estate transactions, and is looking to add an experienced estate planning attorney.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally 5+ years of experience with the following:",
        "items": [
          "Tax planning",
          "Disability trusts",
          "Special needs trusts",
          "Asset protection planning",
          "Business succession planning",
          "Trust and estate administration",
          "Drafting and designing wills, etc.",
          "A portable book of business is a plus"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "Admitted and in good standing with the New Jersey State Bar Association (NY and/or PA license is a plus)"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Free on-site parking",
          "Opportunity to work remotely or hybrid post-probationary period",
          "Adequate support staff: a 3:1 paralegal-to-attorney ratio",
          "Our client has 9,000+ clients and a growing trust-administration pipeline",
          "The firm will hire additional paralegals as needed — and will bring your current trusted paralegal with you",
          "PTO: 3 weeks' vacation, 6 sick days, 2 personal days, and 12 holidays per year",
          "Medical, dental, and vision benefits (no waiting period); the firm covers ~70% of premiums with low deductibles",
          "10% for referred cases even if you don't perform the work; a higher share of profits if the work is performed",
          "One of the most lucrative bonus structures in the market (examples: a paralegal earning $60k received a $15k bonus; an attorney earning $120k base received a $150k year-end bonus)"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Estate%20Planning%20Attorney&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Estate%20Planning%20Attorney%20role%20(Montclair%2C%20NJ).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "Generous referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "First-Party Property Damage Litigation Associate",
    "subtitle": null,
    "category": "Litigation",
    "location": "Texas · Open to Remote",
    "salary": "$125k–$165k + Quarterly Bonuses ($15k–$50k/quarter) & Benefits",
    "intro": "We're partnering with a fast-growing Texas-based firm seeking a litigation associate to join its first-party property damage team.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally a minimum of one year of first-party property damage experience, or experience handling at least one of the following:",
        "items": [
          "Asbestos",
          "Toxic mold",
          "Habitability",
          "Construction defect",
          "Bad faith insurance claims"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "Juris Doctor from an ABA-accredited U.S. law school",
          "Admitted and in good standing with the Texas State Bar"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Opportunity to first-chair or second-chair trials",
          "Work alongside a collaborative and supportive team",
          "5% of settlement fees paid quarterly (typically $15k–$50k per quarter)",
          "Direct and frequent client interaction within a boutique practice setting",
          "Join a fast-growing, sustainable firm with expansion underway across the U.S."
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20First-Party%20Property%20Damage%20Litigation%20Associate&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20First-Party%20Property%20Damage%20Litigation%20Associate%20role%20(Texas%20%C2%B7%20Open%20to%20Remote).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": null
  },
  {
    "title": "Director of Housing",
    "subtitle": null,
    "category": "Public Interest",
    "location": "Harlem, NY · Hybrid",
    "salary": "$140k–$160k + Comprehensive Benefits",
    "intro": "Haraka Headhunters is recruiting on behalf of a dynamic, rapidly growing grassroots 501(c)(3) nonprofit dedicated to reducing poverty and advancing housing equity across New York City. Through strategic organizing, community education, and empowerment initiatives, the organization works at the forefront of advocacy to ensure residents have access to safe, stable, and dignified housing.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "We're seeking a passionate, driven attorney with at least 3 years of relevant experience, ideally including:",
        "items": [
          "Handling civil rights and public interest matters",
          "Coordinating litigation strategies with outside counsel",
          "Experience filing affirmative action lawsuits (preferred)",
          "Representing tenants in housing matters, including holdover proceedings and Article 78 proceedings",
          "Strong commitment to social justice and community advocacy",
          "Ability to communicate in Spanish, written and verbal, is a plus"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "Admitted to and in good standing with the New York State Bar Association"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Four-day work week (Fridays off)",
          "Opportunities to attend conferences and networking events across NYC",
          "Direct exposure to and collaboration with elected officials at the state and federal levels",
          "Meaningful trial experience in public interest litigation",
          "The chance to connect with top lawmakers and advocate for impactful policy change",
          "Occasional team dinners and community-building events"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Director%20of%20Housing&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Director%20of%20Housing%20role%20(Harlem%2C%20NY%20%C2%B7%20Hybrid).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": null
  },
  {
    "title": "Insurance Defense Attorney",
    "subtitle": "Open to Partnership",
    "category": "Insurance Defense",
    "location": "Chicago, IL · Open to Hybrid",
    "salary": "$150k–$200k + Bonus & Benefits",
    "intro": "We're working with a top-tier boutique law firm specializing in insurance defense and insurance coverage that's experiencing exponential growth and is looking to add a few more attorneys, plus support staff, to its team.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Must have at least 3 years of insurance defense experience, handling at least 2 of the following:",
        "items": [
          "Car accidents",
          "Construction",
          "Premise liability",
          "Security negligence",
          "Insurance coverage disputes (a plus)",
          "A book of business is a plus"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD or LLM from a US ABA-accredited law school",
          "Admitted and in good standing with the Illinois State Bar Association"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Work from home 1 day a week",
          "Flexible PTO policy",
          "Direct client engagement — this is a boutique law firm",
          "Retirement plan: 401(k) with a 3% match",
          "Comprehensive health benefits plan",
          "Work-life balance: the billing requirement is 1,850 hours",
          "Equity partnership opportunity: a solo practitioner on the cusp of retirement — the incoming attorney can inherit a ready-made practice with marquee clientele"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Insurance%20Defense%20Attorney&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Insurance%20Defense%20Attorney%20role%20(Chicago%2C%20IL%20%C2%B7%20Open%20to%20Hybrid).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": null
  }
];
