export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationLink?: string;
  description?: string;
}

export const certificates: Certificate[] = [
  {
    id: "google-data-analytics",
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "2024",
    image: "/images/certs/prompt.png",
    verificationLink: "https://coursera.org/verify/6OOWAQF20ATG",
    description: "Comprehensive program covering basic details of building Prompts."
  },
  {
    id: "tensorflow-dev",
    title: "Developing Interpersonal Skills",
    issuer: "IBM",
    date: "2023",
    image: "/images/certs/skills.png",
    verificationLink: "https://coursera.org/verify/PNHTV29LEY6Q",
    description: "Professional certification for developing Interpersonal Skills."
  },
  {
    id: "aws-cloud",
    title: "Machine Learning for Beginners",
    issuer: "Simplilearn",
    date: "2023",
    image: "/images/certs/ml.png",
    verificationLink: "https://simpli-web.app.link/e/yd9OZ8WnHUb",
    description: "Professional certification demonstrating proficiency in building and training machine learning models."
  },
  {
    id: "python-institute",
    title: "Introduction to Python",
    issuer: "Coursera",
    date: "2023",
    image: "/images/certs/python.png",
    verificationLink: "https://coursera.org/verify/UCJG7XAWA3SW",
    description: "Professional certification in Python programming fundamentals and object-oriented programming."
  }
];
