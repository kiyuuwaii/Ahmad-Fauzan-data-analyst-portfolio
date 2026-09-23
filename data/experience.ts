export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techStack: string[];
  logoInitial?: string;
  logo?: string;
  achievements?: string[];
}

export interface EducationData {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  description: string;
  coursework: string[];
  location?: string;
  logo?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  logo?: string;
}

// Interface for backward compatibility with legacy ExperienceItem / ExperienceSection
export interface Experience extends WorkExperience {
  logoInitial: string;
  achievements: string[];
}

export type Education = EducationData;

export const workExperiences: Experience[] = [
  {
    id: "work-1",
    role: "3D Artist",
    company: "PT Imdisal Kreatif Indonesia (Hige Studio)",
    location: "Bandung, Indonesia",
    period: "Feb 2025 - Dec 2025",
    description: "Analyzed transactional records and operational workflows to streamline reporting efficiency. Built automated dashboard views for tracking category performance and collaborated with cross-functional teams to resolve data discrepancies in periodic audits.",
    techStack: ["3D Modeling", "Power BI", "Python", "Excel"],
    logoInitial: "/logo/logo_Hige.jpg",
    achievements: [
      "Developed modular SQL routines to extract, clean, and summarize multi-branch operational datasets.",
      "Designed and deployed interactive Power BI dashboards replacing manual spreadsheet reporting workflows.",
      "Identified data entry inconsistencies across inventory logs, establishing standardized validation rules."
    ]
  },
  {
    id: "work-2",
    role: "3D Environment Artist",
    company: "PT Unimaksima Lentera Nusantara",
    location: "Bandung, Indonesia",
    period: "Jan 2025 - Jul 2025",
    description: "Conducted exploratory analysis on user interaction logs, system telemetry, and behavioral flows. Translated stakeholder problem statements into structured query logic and automated monitoring views.",
    techStack: ["PostgreSQL", "Python", "Pandas", "Looker Studio"],
    logoInitial: "/logo/logo_LN.png",
    achievements: [
      "Performed exploratory data analysis with Python and Pandas to analyze user progression and retention curves.",
      "Created automated Looker Studio tracking monitors for weekly team reviews and operational health checks.",
      "Documented relational data dictionary and schema conventions for internal analytics pipelines."
    ]
  },
  {
    id: "work-3",
    role: "Narrative Designer",
    company: "Game for Educational and Cultural Heritage",
    location: "Surabaya, Indonesia",
    period: "Aug 2023 - Jul 2024",
    description: "Conducted exploratory analysis on user interaction logs, system telemetry, and behavioral flows. Translated stakeholder problem statements into structured query logic and automated monitoring views.",
    techStack: ["PostgreSQL", "Python", "Pandas", "Looker Studio"],
    logoInitial: "/logo/logo_GECH.jpg",
    achievements: [
      "Performed exploratory data analysis with Python and Pandas to analyze user progression and retention curves.",
      "Created automated Looker Studio tracking monitors for weekly team reviews and operational health checks.",
      "Documented relational data dictionary and schema conventions for internal analytics pipelines."
    ]
  },
  {
    id: "work-4",
    role: "Associate Researcher",
    company: "Game for Educational and Cultural Heritage",
    location: "Surabaya, Indonesia",
    period: "Jan 2023 - Aug 2023",
    description: "Conducted exploratory analysis on user interaction logs, system telemetry, and behavioral flows. Translated stakeholder problem statements into structured query logic and automated monitoring views.",
    techStack: ["PostgreSQL", "Python", "Pandas", "Looker Studio"],
    logoInitial: "/logo/logo_GECH.jpg",
    achievements: [
      "Performed exploratory data analysis with Python and Pandas to analyze user progression and retention curves.",
      "Created automated Looker Studio tracking monitors for weekly team reviews and operational health checks.",
      "Documented relational data dictionary and schema conventions for internal analytics pipelines."
    ]
  }
];

export const educationData: EducationData[] = [
  {
    id: "edu-1",
    degree: "D4 Game Technology",
    institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
    period: "2022 - 2026",
    gpa: "3.74/4.00",
    description: "Graduated with honors, focusing on computational logic, system modeling, relational database design, and algorithmic problem solving. Applied statistical principles and simulated behavioral state machines to analyze complex system outputs.",
    coursework: [
      "Database Systems & SQL Modeling",
      "Data Structures & Algorithms",
      "Applied Statistics & Probability",
      "System Modeling & Simulation",
      "Object-Oriented Analysis & Design",
      "User Experience Research"
    ],
    location: "Surabaya, Indonesia",
    logo: "/logo/Logo_PENS.png"
  },
  {
    id: "edu-2",
    degree: "Professional Data Analyst",
    institution: "Rework Academy",
    period: "Sep 2026 - Dec 2026",
    gpa: "3.85/4.00",
    description: "Graduated with honors, focusing on computational logic, system modeling, relational database design, and algorithmic problem solving. Applied statistical principles and simulated behavioral state machines to analyze complex system outputs.",
    coursework: [
      "Database Systems & SQL Modeling",
      "Data Structures & Algorithms",
      "Applied Statistics & Probability",
      "System Modeling & Simulation",
      "Object-Oriented Analysis & Design",
      "User Experience Research"
    ],
    logo: "/logo/logo_Rework.png"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Sep-2026",
    credentialId: "PLAN-BC0FAEE8E439",
    logo: "/logo/logo_ibm.png"
  },
  {
    id: "cert-2",
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Deloitte",
    date: "Sep-2026",
    credentialId: "6ab3780a1d7be30e2f5aeaee",
    logo: "/logo/deloitte-com-logo.png"
  },
  {
    id: "cert-3",
    title: "Getting Started with Data ",
    issuer: "IBM SkillsBuild",
    date: "Aug-2026",
    credentialId: "PLAN-14F2691E3A32",
    logo: "/logo/logo_ibm.png"
  }
];

// Backward-compatible alias for existing ExperienceSection
export const experiences: Experience[] = workExperiences;
