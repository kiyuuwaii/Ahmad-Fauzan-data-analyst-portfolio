export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  location: string;
  logo: string;
}

export const educationData: Education[] = [
  {
    id: "1",
    degree: "B.Sc. in Data Science & Analytics",
    institution: "University Name",
    period: "2020 - 2024",
    gpa: "3.85/4.00",
    location: "Surabaya, Indonesia",
    logo: "UN"
  }
];

