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
    "title": "Insurance Defense Attorney (Auto Accidents, Premise, and Dram Shop Liability)",
    "subtitle": null,
    "category": "Insurance Defense",
    "location": "Pittsburgh, PA · Remote",
    "salary": "$140k–$210k",
    "intro": "Haraka Headhunters LLC is a legal search firm specializing in attorney placements. We are currently working with a top-tier boutique law firm specializing in insurance defense that is experiencing exponential growth and is looking to add a few more attorneys to its team! Our client has offices in Tampa, Florida; Pittsburgh, Pennsylvania; New York City; and New Jersey.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Must have at least 1 year of insurance defense experience, handling at least one of the following types of cases:",
        "items": [
          "Car accidents",
          "Premise liability",
          "Dram shop liability",
          "Security negligence",
          "Recent and significant trial experience is a plus"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD or LLM degree from a US ABA-accredited law school",
          "Admitted and in good standing with the Pennsylvania Bar Association"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Marquee clientele",
          "WFH 2–3 days a week",
          "Direct client engagement, as this is a boutique law firm",
          "401(k) plan to help you plan for the future",
          "Comprehensive medical coverage fully paid for employees by the company",
          "Generous paid time off (PTO) policy, allowing flexibility to recharge and attend to personal matters"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany@HarakaHeadhunters.com,Nadezda.Kuzhuget@HarakaHeadhunters.com?subject=Application%3A%20Insurance%20Defense%20Attorney%20(Auto%20Accidents%2C%20Premise%2C%20and%20Dram%20Shop%20Liability)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Insurance%20Defense%20Attorney%20(Auto%20Accidents%2C%20Premise%2C%20and%20Dram%20Shop%20Liability)%20role%20(Pittsburgh%2C%20PA%20%C2%B7%20Remote).%0A%0AMy%20resume%20and%20writing%20sample(s)%20are%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany@HarakaHeadhunters.com",
      "Nadezda.Kuzhuget@HarakaHeadhunters.com"
    ],
    "referral": "$500 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Mid-Level Litigation Associate",
    "subtitle": null,
    "category": "Litigation",
    "location": "Philadelphia, PA",
    "salary": "Up to $175k + Bonuses",
    "intro": "Haraka Headhunters LLC is an attorney search firm specializing in attorney placements. We are currently working with a well-established Philadelphia-based law firm with a strong commercial litigation practice, actively seeking a talented mid-level associate to join their team.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally, a candidate with a minimum of 4–5 years of experience in the following areas:",
        "items": [
          "Complex commercial and business litigation",
          "Real estate development litigation",
          "Non-compete and trade secret disputes",
          "Whistleblower actions under the Federal False Claims Act (qui tam / decline litigation)",
          "Civil RICO cases",
          "Private equity portfolio company litigation",
          "Breach of contract, business torts, and fraud",
          "Ability to manage a caseload independently and take ownership of matters from intake through resolution, including managing junior associates",
          "Experience with jury trials is a strong plus",
          "Comfort handling a caseload of approximately 10–20 active matters at a time, depending on complexity"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD from a US ABA-accredited law school",
          "Licensed to practice in Pennsylvania and New Jersey"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Annual bonus structure: 10% of any amounts collected over double the associate’s salary, plus a 10% origination bonus on business the associate brings in, plus an additional discretionary bonus",
          "Medical, dental, and vision benefits (30-day waiting period)",
          "401(k) — 3% firm contribution regardless of employee participation, plus up to an additional 3% match (up to 6% total)",
          "Two weeks of paid vacation",
          "Unlimited business development budget for associates looking to grow their own book of business",
          "1,600 annual billable hour requirement",
          "Firm is not trial adverse — cases that do not settle proceed to trial",
          "Beautifully renovated office space with a pool table, lounge, and bar",
          "Monthly office happy hours (first Friday of every month)",
          "Weekly Friday lunches, firm outings including a fishing trip at the shore and a lobster night",
          "Annual holiday party and Spring Fling at the Union League"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Mid-Level%20Litigation%20Associate&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Mid-Level%20Litigation%20Associate%20role%20(Philadelphia%2C%20PA).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$350 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Employment Litigation Attorney",
    "subtitle": null,
    "category": "Employment Litigation",
    "location": "El Segundo, CA · Open to Remote",
    "salary": "$225k–$350k + Bonus & Benefits",
    "intro": "Haraka Headhunters is a NYC-based attorney search firm. We are currently partnered with an AV-rated, boutique employment defense firm based in El Segundo, California that has been defending California employers for nearly a decade and has assisted 500+ employers across the state. The firm carries a combined attorney experience of over 70 years and has built a strong reputation serving major employers across the restaurant, tech, hotel, and trucking industries. Due to exponential growth, they are looking to add a mid-level as well as a senior-level Employment Litigation Associate to their thriving practice.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally, a minimum of 7 years of experience defending a wide range of clients on class action and PAGA claims within the California employment litigation space. Experience with the following is also a plus:",
        "items": [
          "Sexual harassment defense",
          "Whistleblower retaliation",
          "Severance and separation disputes",
          "Wage and hour claims",
          "Title VII and discrimination claims"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD from an ABA-accredited law school",
          "Admission to the California State Bar and in good standing"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "100% Remote option for the right candidate — court appearances are primarily virtual",
          "Work-life balance — low billing requirement of just 1,800 hours annually",
          "Generous bonus structure — hit your billing target and earn a guaranteed end-of-year bonus between $30,000 and $40,000, plus a discretionary bonus based on firm performance",
          "Origination bonus — earn 15% of all billed revenue on any business you bring in",
          "Bar dues and CLEs fully covered by the firm — plus support for marketing associations to help grow your book of business",
          "Medical health benefits covered at 75% by the firm, with plan options available from day one",
          "Podcast studio access — actively used weekly, ideal for attorneys looking to build their personal brand and become rainmakers",
          "Direct and frequent client engagement from day one — this is a boutique practice where every attorney, including first-years, works directly with clients",
          "Prime LA location — a stone’s throw from LAX Airport and right next door to the Lakers training facility (catch G League games and practices)",
          "Collaborative team environment — every case is staffed with at least two attorneys; you are never working in isolation",
          "Growth-oriented firm — these roles are open due to expansion, not backfill"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Employment%20Litigation%20Attorney&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Employment%20Litigation%20Attorney%20role%20(El%20Segundo%2C%20CA%20%C2%B7%20Open%20to%20Remote).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$750 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Family Law Attorney (Open to Partnership Track)",
    "subtitle": null,
    "category": "Family Law",
    "location": "Seattle, WA · Remote",
    "salary": "$150k–$220k Base + Quarterly Bonuses & Benefits",
    "intro": "Haraka Headhunters LLC is a legal search firm specializing in attorney placements. We are currently partnered with a well-established and growing family law firm in Seattle, Washington, founded in 2015.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally, a minimum of 5 years of family law experience, primarily handling divorces, with the following:",
        "items": [
          "Active Washington Bar state license",
          "Ability to attend Court in-person, if needed",
          "Cannot be from the following states: NY, CA, and MT",
          "Familiarity with King/Snohomish/Pierce local rules is a plus",
          "Experience with surrogacy, equitable distribution, adoption, guardianship, and other family law matters is a plus"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD or LLM from a US ABA-accredited law school",
          "Admitted to and in good standing with the Washington State Bar Association"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "9 paid holidays",
          "4 weeks of PTO",
          "Paid/unpaid bonding leave",
          "Paid sick leave and personal days",
          "Monthly wellness stipends and culture gifts",
          "100% coverage for basic medical & dental insurance",
          "Matching 401(k) after 7 months, life insurance, and long-term disability",
          "Rentable firm-owned RV and personal concierge service for employee usage",
          "In-person firm events, including annual potluck at a cabin, for bonding and culture building",
          "Full-time employees who meet KPIs within 30 weeks can apply the 30–40 benefit — getting paid for 40 hours while working 30"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany@HarakaHeadhunters.com?subject=Application%3A%20Family%20Law%20Attorney%20(Open%20to%20Partnership%20Track)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Family%20Law%20Attorney%20(Open%20to%20Partnership%20Track)%20role%20(Seattle%2C%20WA%20%C2%B7%20Remote).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany@HarakaHeadhunters.com"
    ],
    "referral": "$500 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Litigation Associate (Class Actions)",
    "subtitle": null,
    "category": "Litigation",
    "location": "Los Angeles, CA · Hybrid",
    "salary": "Up to $250k + Bonuses & Benefits",
    "intro": "Haraka Headhunters LLC is an attorney search firm specializing in legal placements. We are currently working with a well-established Los Angeles law firm concentrating in real estate litigation, business litigation, class action defense, construction litigation, and insurance coverage matters, that is actively seeking litigation associates to support its continued exponential growth.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally, a minimum of two years of post-JD experience with the following:",
        "items": [
          "Handling complex litigation matters from inception through resolution",
          "Experience in one or more of the firm’s core practice areas: real estate litigation, business litigation, class action defense, construction litigation, or insurance coverage",
          "Managing an active caseload, including robust motion practice, legal research and writing, and voluminous discovery",
          "Reviewing electronically stored information (ESI) and documents using document review software",
          "Taking and defending depositions, attending court appearances, hearings, and mediations",
          "Assisting with trial preparation; trial experience is a plus but not required",
          "Developing case strategy and preparing pleadings",
          "Independently handling complex litigation matters",
          "Mentoring and providing guidance to junior associates and paralegals"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "Active and good standing with the California State Bar Association",
          "Graduation from a top 100 U.S. ranked law school is preferred"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Low billable requirement of only 150 hours per month / 1,800 hours per year",
          "Monthly origination bonus: 10% of collected fees on annual originations up to $100,000; 15% between $100,000–$500,000; 20% exceeding $500,000",
          "Monthly billable hour bonus for every hour exceeding 150 per month",
          "Generous & flexible PTO policy, with an additional week added every five years",
          "Generous 401(k) with up to a 4% employer match",
          "$1,000 annual marketing budget plus 100 billable-hour credits for business development",
          "50 billable-hour credits annually for legal article writing",
          "Comprehensive medical, dental, and vision benefits, including 75% employer-paid coverage for employees and 25% for dependents",
          "Partnership track available for high-performing associates",
          "Open to W-2 or contractor (Corp-to-Corp) arrangements",
          "Flexible hybrid work environment",
          "Opportunity to gain and expand trial experience",
          "Collaborative culture with open-door partner mentorship, quarterly team events (Dodger games, food tours, trivia nights, murder mystery events, stained glass painting), and monthly employee appreciation lunches"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Litigation%20Associate%20(Class%20Actions)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Litigation%20Associate%20(Class%20Actions)%20role%20(Los%20Angeles%2C%20CA%20%C2%B7%20Hybrid).%0A%0AMy%20resume%20and%20writing%20samples%20are%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$750 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Marketing Director (Law Practice)",
    "subtitle": null,
    "category": "Marketing",
    "location": "Miramar, FL · Open to Remote",
    "salary": "Up to $250k + Bonus & Benefits",
    "intro": "Haraka Headhunters LLC is an attorney search firm specializing in legal placements. We are currently working with a well-established South Florida-based law practice concentrating in class actions, employment litigation, and personal injury that is actively seeking an experienced marketing director to lead the firm’s marketing strategy, business development initiatives, and overall brand growth.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally, a candidate with 10+ years of experience scaling client acquisition for large companies, specifically managing $60M+ in Customer Acquisition Cost (CAC), who is ready to step into a leadership role and establish marketing processes from scratch. The ideal candidate will have experience with the following:",
        "items": [
          "Developing and executing firm-wide marketing and business development strategies",
          "Managing digital marketing initiatives, including SEO, website optimization, content marketing, email campaigns, and social media",
          "Overseeing the firm’s brand, public relations, media outreach, and reputation management",
          "Collaborating with attorneys to develop thought leadership content, proposals, presentations, and client pitches",
          "Managing marketing budgets and analyzing campaign performance using KPIs and customer acquisition metrics",
          "Leading internal marketing teams and coordinating with outside vendors and agencies",
          "Driving client acquisition and revenue growth through strategic marketing initiatives",
          "Ensuring all marketing efforts comply with applicable legal advertising rules and ethical standards"
        ]
      },
      {
        "heading": "Education",
        "para": null,
        "items": [
          "MBA or other advanced business-related degree preferred, but not required"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Competitive performance-based bonus structure",
          "Medical, dental, and vision benefits",
          "401(k) retirement plan with employer contribution",
          "Paid holidays",
          "Paid maternity leave",
          "100% Basic Life & AD&D insurance",
          "100% Short-Term Disability coverage",
          "100% Long-Term Disability coverage",
          "Free coffee, beverages, and snacks at the office",
          "Open to 100% remote candidates",
          "Opportunity to join a rapidly growing law practice that has recently expanded nationally and now operates in 17 states",
          "Consistent influx of new business, providing strong opportunities for continued growth and career development"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Marketing%20Director%20(Law%20Practice)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Marketing%20Director%20(Law%20Practice)%20role%20(Miramar%2C%20FL%20%C2%B7%20Open%20to%20Remote).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$750 referral bonus if you refer a candidate who is hired by our client."
  },
  {
    "title": "IP Associate (Chemistry / Chemical Engineering)",
    "subtitle": null,
    "category": "Intellectual Property",
    "location": "Remote · US",
    "salary": "Up to $175k + Benefits & Bonus",
    "intro": "Haraka Headhunters LLC is an attorney search firm specializing in attorney placements. We are currently partnered with a well-established, boutique Intellectual Property law firm with 20 years in the industry, experiencing steady growth and looking to add a talented IP Associate with a chemistry or chemical engineering background to their team.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally, a minimum of 2 years of experience in the following areas:",
        "items": [
          "Patent prosecution and/or patent cross (non-litigation)",
          "Chemistry, chemical engineering, material science, or adjacent technical background",
          "Experience working with global chemical or science-based clients"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD or LLM from a US ABA-accredited law school",
          "Technical degree required: Bachelor’s or advanced degree in Chemistry, Chemical Engineering, Material Science, or a closely related field",
          "Admitted and in good standing with the USPTO",
          "Admitted to a US State Bar"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "100% Remote",
          "Work-life balance — low billing requirement of approximately 1,400 hours per year",
          "Excellent support staff: nearly a 1-to-1 attorney-to-support-staff ratio with highly skilled paralegals averaging close to a decade of industry experience",
          "401(k) with match",
          "Medical, dental, and vision benefits (dental and vision are 100% covered)",
          "Origination bonus — earn 10% of collections on any business you bring in",
          "Partnership track opportunity — clear path to non-equity and equity partnership",
          "Business development support — firm covers conference attendance, association memberships (IPO, AIPLA, and others), and actively mentors attorneys in growing their book of business",
          "Global client base — work with chemical companies and science-based clients across the US and internationally",
          "Tech-forward firm — actively integrating AI into practice workflows",
          "Thought leadership encouraged — firm supports blogging, LinkedIn, and social media activity to build your personal brand",
          "Low attrition — values-driven firm with a strong emphasis on collegiality & work-life balance"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20IP%20Associate%20(Chemistry%20%2F%20Chemical%20Engineering)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20IP%20Associate%20(Chemistry%20%2F%20Chemical%20Engineering)%20role%20(Remote%20%C2%B7%20US).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$300 referral bonus if you refer an attorney who is hired by our client."
  },
  {
    "title": "Insurance Defense Attorney (NYLL, Auto Accidents, Premise & Dram Shop Liability)",
    "subtitle": null,
    "category": "Insurance Defense",
    "location": "New York, NY · Hybrid",
    "salary": "$175k–$225k",
    "intro": "Haraka Headhunters LLC is a legal search firm specializing in attorney placements. We are currently working with a top-tier boutique law firm specializing in insurance defense that is experiencing exponential growth and is looking to add a few more attorneys to its team! Our client has offices in Tampa, Florida; Pittsburgh, Pennsylvania; New York City; and New Jersey.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Must have at least 1 year of insurance defense experience, handling at least one of the following types of cases:",
        "items": [
          "Car accidents",
          "Premise liability",
          "Dram shop liability",
          "Security negligence",
          "Recent and significant trial experience is a plus"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "JD or LLM from a US ABA-accredited law school",
          "Admitted and in good standing with the New York and New Jersey State Bar Associations"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Marquee clientele",
          "WFH 2–3 days a week",
          "Direct client engagement, as this is a boutique law firm",
          "401(k) plan to help you plan for the future",
          "Comprehensive medical coverage fully paid for employees by the company",
          "Generous paid time off (PTO) policy, allowing flexibility to recharge and attend to personal matters"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany@HarakaHeadhunters.com?subject=Application%3A%20Insurance%20Defense%20Attorney%20(NYLL%2C%20Auto%20Accidents%2C%20Premise%20%26%20Dram%20Shop%20Liability)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Insurance%20Defense%20Attorney%20(NYLL%2C%20Auto%20Accidents%2C%20Premise%20%26%20Dram%20Shop%20Liability)%20role%20(New%20York%2C%20NY%20%C2%B7%20Hybrid).%0A%0AMy%20resume%20and%20writing%20sample(s)%20are%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany@HarakaHeadhunters.com"
    ],
    "referral": null
  },
  {
    "title": "Foreclosure Defense Attorney",
    "subtitle": null,
    "category": "Foreclosure Defense",
    "location": "New York, NY",
    "salary": "$100k–$200k + EOY Bonus & Benefits",
    "intro": "Haraka Headhunters LLC is a New York City-based attorney search firm that connects qualified attorneys with leading law firms across the United States. We are partnering with a fast-growing New York-based firm seeking a foreclosure defense attorney to join its team.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "A minimum of one year of litigation experience concentrating in foreclosure defense, or experience handling at least one of the following types of cases:",
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
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Foreclosure%20Defense%20Attorney&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Foreclosure%20Defense%20Attorney%20role%20(New%20York%2C%20NY).%0A%0AMy%20resume%20and%20writing%20samples%20are%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": null
  },
  {
    "title": "Personal Injury Lawyer (Open Plaintiff or Defense)",
    "subtitle": null,
    "category": "Personal Injury",
    "location": "Dallas, TX · On-Site",
    "salary": "$120k–$170k + Bonuses & Benefits",
    "intro": "Haraka Headhunters LLC is a legal search firm specializing in attorney placements. We are currently partnered with a well-established and growing personal injury law firm in Dallas, TX. Our client is experiencing exponential growth and is looking to add a few junior to senior-level attorneys to their team. This role is ideal for a motivated attorney who wants to grow with the firm, handle personal injury litigation, and participate in collaborative casework.",
    "sections": [
      {
        "heading": "What we’re looking for",
        "para": "Ideally, at least 6 months of personal injury experience (plaintiff or defense) in addition to experience with the following:",
        "items": [
          "Handling a wide range of pre-litigation tasks, in addition to tasks that are in the litigation stage",
          "Negotiating settlements for litigation",
          "Experience with filing and responding to MSJ hearings",
          "Experience handling deposition preparation with plaintiffs as well as depositions of defendants",
          "Researching and synthesizing relevant case law and statutes",
          "Trial experience is a plus"
        ]
      },
      {
        "heading": "Education & licensing",
        "para": null,
        "items": [
          "Juris Doctorate from an ABA-accredited U.S. law school",
          "Admitted and in good standing with the Texas State Bar"
        ]
      },
      {
        "heading": "What we offer",
        "para": null,
        "items": [
          "Talk of the Town holiday party",
          "Discretionary annual and periodic bonuses",
          "Comprehensive medical, dental, and vision benefits offered",
          "Opportunity to work in a beautiful, brand-new office building that is owned by the firm"
        ]
      }
    ],
    "applyHref": "mailto:Tiffany.Meikle@HarakaHeadhunters.com?subject=Application%3A%20Personal%20Injury%20Lawyer%20(Open%20Plaintiff%20or%20Defense)&body=Hi%20Tiffany%2C%0A%0AI'm%20interested%20in%20the%20Personal%20Injury%20Lawyer%20(Open%20Plaintiff%20or%20Defense)%20role%20(Dallas%2C%20TX%20%C2%B7%20On-Site).%0A%0AMy%20resume%20is%20attached.%0A%0ABest%2C",
    "sendTo": [
      "Tiffany.Meikle@HarakaHeadhunters.com"
    ],
    "referral": "$350 referral bonus if you refer an attorney who is hired by our client."
  }
];
