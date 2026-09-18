export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  verifyLink: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Google Data Analytics Professional",
    issuer: "Coursera",
    year: "2024",
    image: "https://images.unsplash.com/photo-1523289217630-0dd16184af8e?q=80&w=2187&auto=format&fit=crop",
    verifyLink: "#"
  },
  {
    id: "2",
    title: "SQL for Data Science",
    issuer: "IBM SkillsBuild",
    year: "2024",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    verifyLink: "#"
  },
  {
    id: "3",
    title: "Data Visualization with Power BI",
    issuer: "Dicoding",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    verifyLink: "#"
  },
  {
    id: "4",
    title: "Python for Data Analysis",
    issuer: "DQLab",
    year: "2023",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?q=80&w=2069&auto=format&fit=crop",
    verifyLink: "#"
  }
];

