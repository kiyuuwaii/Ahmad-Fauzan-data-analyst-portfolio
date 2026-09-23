export interface ProjectMetric {
  label: string;
  value: string;
}

export type ProjectCategory = 'all' | 'bi-dashboards' | 'sql-analytics' | 'exploratory-data';
export type ProjectStatus = 'Completed' | 'Active Development';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  status: ProjectStatus;
  date: string;
  metrics: ProjectMetric[];
  techStack: string[];
  codeLink: string;
  demoLink: string;
  thumbnail: string;
  // Compatibility fields for current project components
  stack: string[];
  liveLink?: string;
  caseStudyLink?: string;
}

export const projects: Project[] = [
  {
    id: "deloitte-job-simulation-dashboard",
    title: "Deloitte - Data Analytics Job Simulation",
    description: "Completed a Deloitte job simulation involving data analysis and forensic technology.|Created a data dashboard using Tableau.| Used Excel to classify data and draw business conclusions",
    category: "sql-analytics",
    featured: true,
    status: "Completed",
    date: "2026",
    metrics: [
      { label: "Data Scope", value: "Forage Job Simulation Data" },
      { label: "Refresh Cadence", value: "One Time Projects" },
      { label: "Key Focus", value: "Answering Business Questions" }
    ],
    techStack: ["Tableau", "Excel"],
    codeLink: "https://github.com",
    demoLink: "https://app.powerbi.com",
    thumbnail: "/placeholder-project.png",
    stack: ["Tableau", "Excel"],
    liveLink: "https://app.powerbi.com",
    caseStudyLink: "https://github.com"
  },
  {
    id: "ecommerce-cohort-retention",
    title: "E-Commerce Customer Retention & Cohort Decay SQL Model",
    description: "End-to-end relational SQL model examining repeat purchasing cadence, monthly cohort decay, and customer lifecycle longevity using advanced window functions and CTE architectures.",
    category: "sql-analytics",
    featured: true,
    status: "Completed",
    date: "2023 - 2024",
    metrics: [
      { label: "Analysis Model", value: "Monthly Cohort Retention" },
      { label: "Query Architecture", value: "Modular CTEs & Windowing" },
      { label: "Business Outcome", value: "Repeat Buying Insights" }
    ],
    techStack: ["PostgreSQL", "SQL", "dbt", "Metabase"],
    codeLink: "https://github.com",
    demoLink: "https://github.com",
    thumbnail: "/placeholder-project.png",
    stack: ["PostgreSQL", "SQL", "dbt", "Metabase"],
    liveLink: "https://github.com",
    caseStudyLink: "https://github.com"
  },
  {
    id: "customer-churn-eda",
    title: "Subscription Churn Drivers & Behavioral Pattern EDA",
    description: "Exploratory data analysis investigating customer renewal behaviors, utilization frequency drops, and service ticket logs to identify early indicators of subscription attrition.",
    category: "exploratory-data",
    featured: false,
    status: "Completed",
    date: "2023",
    metrics: [
      { label: "Analytical Method", value: "Bivariate & Correlation EDA" },
      { label: "Dataset Dimension", value: "Multi-Attribute User Logs" },
      { label: "Key Deliverable", value: "Hypothesis Report & Action Plan" }
    ],
    techStack: ["Python", "Pandas", "NumPy", "Seaborn", "Jupyter"],
    codeLink: "https://github.com",
    demoLink: "https://github.com",
    thumbnail: "/placeholder-project.png",
    stack: ["Python", "Pandas", "NumPy", "Seaborn", "Jupyter"],
    liveLink: "https://github.com",
    caseStudyLink: "https://github.com"
  },
  {
    id: "supply-chain-dispatch-monitor",
    title: "Supply Chain Dispatch & Delivery Lead-Time Monitor",
    description: "Operational dashboard tracking provincial transit intervals, dispatch bottlenecks, and courier SLA achievement to support logistics distribution monitoring.",
    category: "bi-dashboards",
    featured: false,
    status: "Active Development",
    date: "2024",
    metrics: [
      { label: "Operational Scope", value: "Inter-City Delivery Routes" },
      { label: "Monitoring Focus", value: "Dispatch Bottlenecks & SLAs" },
      { label: "Pipeline Status", value: "Staging Pipeline Testing" }
    ],
    techStack: ["Tableau", "PostgreSQL", "Python", "SQL"],
    codeLink: "https://github.com",
    demoLink: "https://public.tableau.com",
    thumbnail: "/placeholder-project.png",
    stack: ["Tableau", "PostgreSQL", "Python", "SQL"],
    liveLink: "https://public.tableau.com",
    caseStudyLink: "https://github.com"
  }
];
