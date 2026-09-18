export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Database & Querying",
    skills: [
      { name: "SQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" }
    ]
  },
  {
    category: "Business Intelligence",
    skills: [
      { name: "Power BI", level: "Advanced" },
      { name: "Tableau", level: "Proficient" },
      { name: "Looker Studio", level: "Proficient" },
      { name: "Excel", level: "Advanced" }
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "Pandas", level: "Proficient" },
      { name: "NumPy", level: "Intermediate" },
      { name: "R", level: "Working Knowledge" }
    ]
  },
  {
    category: "Problem Solving",
    skills: [
      { name: "Critical Thinking", level: "Experienced" },
      { name: "Data Storytelling", level: "Proficient" },
      { name: "Statistical Analysis", level: "Proficient" }
    ]
  }
];
