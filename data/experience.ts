export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techStack: string[];
  logoInitial?: string;
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
    role: "Data Analyst Intern",
    company: "PT Global Solusi Digital",
    location: "Surabaya, Indonesia",
    period: "Jan 2024 - Jun 2024",
    description: "Analyzed transactional records and operational workflows to streamline reporting efficiency. Built automated dashboard views for tracking category performance and collaborated with cross-functional teams to resolve data discrepancies in periodic audits.",
    techStack: ["SQL", "Power BI", "Python", "Excel"],
    logoInitial: "GS",
    achievements: [
      "Developed modular SQL routines to extract, clean, and summarize multi-branch operational datasets.",
      "Designed and deployed interactive Power BI dashboards replacing manual spreadsheet reporting workflows.",
      "Identified data entry inconsistencies across inventory logs, establishing standardized validation rules."
    ]
  },
  {
    id: "work-2",
    role: "Junior Data & Systems Analyst",
    company: "Inovasi Studio Digital",
    location: "Surabaya, Indonesia",
    period: "Jul 2023 - Dec 2023",
    description: "Conducted exploratory analysis on user interaction logs, system telemetry, and behavioral flows. Translated stakeholder problem statements into structured query logic and automated monitoring views.",
    techStack: ["PostgreSQL", "Python", "Pandas", "Looker Studio"],
    logoInitial: "IS",
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
    logo: "PENS"
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
    logo: "PENS"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Data Analysis and Visualization Professional Certificate",
    issuer: "IBM SkillsBuild",
    date: "2024",
    credentialId: "IBM-SB-DA-849201"
  },
  {
    id: "cert-2",
    title: "SQL for Data Science Bootcamp",
    issuer: "Hacktiv8",
    date: "2023",
    credentialId: "HCK-SQL-554209"
  },
  {
    id: "cert-3",
    title: "Data Analyst Track: Data Modeling & Exploration",
    issuer: "DQLab",
    date: "2023",
    credentialId: "DQLAB-DA-2023081"
  },
  {
    id: "cert-4",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "2022",
    credentialId: "DCD-PY-771924"
  }
];

// Backward-compatible alias for existing ExperienceSection
export const experiences: Experience[] = workExperiences;
