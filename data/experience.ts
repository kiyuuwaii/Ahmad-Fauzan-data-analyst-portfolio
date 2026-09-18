export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  logoInitial: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Data Analyst Intern",
    company: "Tech Solutions Indonesia",
    period: "Jan 2025 - Jul 2025",
    logoInitial: "TS",
    achievements: [
      "Optimized SQL queries reducing report generation time by 40%.",
      "Designed an automated daily sales tracking dashboard using Power BI.",
      "Identified underperforming product categories leading to a 15% inventory cost reduction."
    ]
  },
  {
    id: "2",
    role: "Junior Business Analyst",
    company: "DataDriven Corp",
    period: "Aug 2023 - Dec 2024",
    logoInitial: "DD",
    achievements: [
      "Gathered and translated business requirements into technical data schemas.",
      "Collaborated with marketing to A/B test campaigns, improving CTR by 8%.",
      "Cleaned and standardized a legacy database of 50k+ customer records."
    ]
  }
];

