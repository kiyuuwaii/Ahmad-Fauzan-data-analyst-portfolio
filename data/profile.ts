export interface InfoCard {
  icon: string;
  label: string;
  value: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ProfileData {
  name: string;
  fullName: string;
  role: string;
  tagline: string;
  aboutGreeting: string;
  aboutText: string[];
  infoCards: InfoCard[];
  interests: string[];
  contact: ContactInfo;
  socials: SocialLinks;
  stats?: StatItem[];
}

export const profileData: ProfileData = {
  name: "Ahmad Fauzan",
  fullName: "Ahmad Fauzan Ash Shidiq",
  role: "Data Analyst",
  tagline: "I transform complex datasets into clear, actionable business decisions. With a solid foundation in data modeling and business intelligence, I help organizations uncover trends through intuitive dashboards and structured analytics.",
  aboutGreeting: "Hello There!",
  aboutText: [
    "I am a Data Analyst with a background in Game Technology from Politeknik Elektronika Negeri Surabaya (PENS), where I developed a rigorous foundation in computational logic, system modeling, and structured data architecture. I specialize in transforming messy, high-volume datasets into transparent analytical frameworks and clear business roadmaps.",
    "My focus centers on identifying operational bottlenecks, tracking user behavior patterns, and delivering intuitive business intelligence dashboards. By pairing advanced SQL querying and Python exploratory analysis with visual storytelling in Power BI, I bridge technical findings and strategic decisions to deliver measurable business impact."
  ],
  infoCards: [
    { icon: "User", label: "Name", value: "Ahmad Fauzan Ash Shidiq" },
    { icon: "MapPin", label: "Location", value: "Surabaya, Indonesia" },
    { icon: "GraduationCap", label: "Education", value: "D4 Game Technology - PENS" },
    { icon: "Mail", label: "Email", value: "ahmadfauzan.ash.shidiq@gmail.com" },
    { icon: "Phone", label: "Phone", value: "+62 813 3197 9541" },
    { icon: "Briefcase", label: "Status", value: "Available for Work" }
  ],
  interests: [
    "Data Analysis",
    "SQL Querying",
    "Power BI & Tableau",
    "Advanced Excel",
    "Python EDA",
    "Business Intelligence"
  ],
  contact: {
    email: "ahmadfauzan.ash.shidiq@gmail.com",
    phone: "+62 813 3197 9541",
    location: "Surabaya, Indonesia"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/ahmad-fauzan-ash-shidiq/",
    github: "https://github.com/ahmadfauzanashshidiq",
    instagram: "https://www.instagram.com/f.oojan/"
  },
  stats: [
    { label: "Education GPA", value: "3.85" },
    { label: "Core Focus", value: "BI & SQL" },
    { label: "Specialization", value: "Analytics" },
    { label: "Availability", value: "Open" }
  ]
};
