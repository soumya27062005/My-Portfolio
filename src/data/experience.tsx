export interface Experience {
  id: string;
  title: string;
  company: string;
  type: "work" | "internship" | "project" | "education";
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  technologies?: string[];
  location?: string;
}

export const experiences: Experience[] = [
  {
    id: "ai-data-science",
    title: "AI & Data Science",
    company: "Currently Pursuing",
    type: "education",
    startDate: "2025",
    current: true,
    description: [
      "Pursuing advanced studies in Artificial Intelligence and Data Science",
      "Focusing on Machine Learning algorithms, neural networks, and data analytics",
      "Working on practical projects involving real-world datasets",
      "Learning cutting-edge technologies in AI/ML domain"
    ],
    technologies: ["Python", "HTML", "DSA", "CSS", "Machine Learning", "Deep Learning"],
    location: "India"
  },
  {
    id: "computer-engineering",
    title: "Diploma in Computer Engineering",
    company: "Completed",
    type: "education",
    startDate: "2022",
    endDate: "2025",
    description: [
      "Graduated with distinction in Computer Engineering",
      "Strong foundation in programming, algorithms, and system design",
      "Completed various projects in web development and embedded systems",
      "Active participation in coding competitions and technical events"
    ],
    technologies: ["C", "React.js", "Java", "Python", "HTML/CSS", "JavaScript", "SQL"],
    location: "India"
  },
  {
    id: "iot-project",
    title: "Frontend Developer",
    company: "Shubh Electrical Engineering",
    type: "internship",
    startDate: "05/2024",
    endDate: "07/2024",
    description: [
      "Developed an E-Commerce website for Motor Selling Company",
      "Implemented Payment Handling APIs for seamless transactions",
      "Integrated sensor data with mobile notifications",
      "Integrated Admin Portal for Supervising tasks"
    ],
    technologies: ["React.js", "Tailwind CSS", "HTML", "Javascript"],
    location: "Ahmedabad"
  },
  {
    id: "mobile-dev",
    title: "Team-Leader & Full Stack Developer",
    company: "LJ Innovation Village",
    type: "project",
    startDate: "2025",
    description: [
      "Developed an Online Auction Platform for seamless Bidding",
      "Created user-friendly interfaces and an Admin Portal",
      "Integrated Razorpay payment handling and Profile Management",
      "Maintained high web-app ratings and positive user feedback"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDb", "Tailwind CSS"],
    location: "Ahmedabad"
  }
];
