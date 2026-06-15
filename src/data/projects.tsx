export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "Educational",
    title: "Class Whisper",
    description: "Real-time silent communication tool for classroom with capability of sharing ideas anonymously.",
    tech: ["React.js", "Typescript", "Next.js", "Tailwind CSS"],
    liveUrl: "https://classfinal.vercel.app",
    sourceUrl: "https://github.com/soumya27062005/classwhisper1",
    featured: true
  },
  {
    id: "Banking",
    title: "NexusBank",
    description: "Modern digital banking app built with React. Secure and user-friendly banking web application.",
    tech: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://aurabanks.vercel.app",
    sourceUrl: "https://github.com/soumya27062005/aurabanks",
    featured: true
  },
  {
    id: "ML-Model",
    title: "Palm Detector Model",
    description: "Machine learning model for hand detection using CV2 with 99.86% accuracy on test dataset.",
    tech: ["Python", "OpenCV"],
    sourceUrl: "https://github.com/soumya27062005/soumyahand",
    featured: false
  },
  {
    id: "E-Commerce",
    title: "VistaraShop",
    description: "A New Gen E-Commerce Website for all Users.",
    tech: ["React.js", "TypeScript", "Vite.js", "Tailwind CSS"],
    liveUrl: "https://VistaraShop.vercel.app",
    sourceUrl: "https://github.com/soumya27062005/VistaraShop",
    featured: false
  }
];
