export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  stack: string[];
  liveLink?: string;
  caseStudyLink?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Customer Churn Prediction Model",
    description: "Machine learning model to predict customer churn with 85% accuracy. Reduced churn rate by 12% in Q3.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    stack: ["Python", "Scikit-Learn", "Pandas", "Tableau"],
    liveLink: "#",
    caseStudyLink: "#",
  },
  {
    id: "2",
    title: "Sales Performance Dashboard",
    description: "Interactive dashboard tracking KPIs across 5 regional branches. Identified $2M in up-sell opportunities.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    stack: ["Power BI", "SQL", "Excel", "DAX"],
    liveLink: "#",
    caseStudyLink: "#",
  },
  {
    id: "3",
    title: "E-Commerce Funnel Analysis",
    description: "Analyzed user drop-offs in checkout funnel. Recommended UI changes that increased conversion by 4.5%.",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
    stack: ["SQL", "Google Analytics", "Looker Studio"],
    liveLink: "#",
    caseStudyLink: "#",
  }
];

