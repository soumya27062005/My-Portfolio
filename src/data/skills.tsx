export interface Skill {
  name: string;
  category: "frontend" | "backend" | "mobile" | "ai-ml" | "database" | "tools" | "other";
  level: "beginner" | "intermediate" | "advanced";
  icon?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "backend", level: "advanced" },
  { name: "JavaScript", category: "frontend", level: "intermediate" },
  { name: "TypeScript", category: "frontend", level: "intermediate" },
  { name: "Kotlin", category: "mobile", level: "intermediate" },
  { name: "C", category: "other", level: "intermediate" },
  { name: "Java", category: "backend", level: "intermediate" },

  // Frontend Technologies
  { name: "React.js", category: "frontend", level: "intermediate" },
  { name: "Next.js", category: "frontend", level: "intermediate" },
  { name: "HTML", category: "frontend", level: "advanced" },
  { name: "CSS", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "intermediate" },

  // AI/ML Technologies
  { name: "TensorFlow", category: "ai-ml", level: "intermediate" },
  { name: "PyTorch", category: "ai-ml", level: "intermediate" },
  { name: "Pandas", category: "ai-ml", level: "advanced" },
  { name: "NumPy", category: "ai-ml", level: "advanced" },
  { name: "Scikit-learn", category: "ai-ml", level: "intermediate" },
  { name: "OpenCV", category: "ai-ml", level: "beginner" },

  // Database Technologies
  { name: "SQL", category: "database", level: "intermediate" },
  { name: "PostgreSQL", category: "database", level: "intermediate" },
  { name: "SQLite", category: "database", level: "intermediate" },
  { name: "MongoDB", category: "database", level: "beginner" },

  // Mobile Development
  { name: "Android", category: "mobile", level: "intermediate" },
  // { name: "Flutter", category: "mobile", level: "beginner" },

  // Tools & Other
  { name: "Git", category: "tools", level: "intermediate" },
  // { name: "Docker", category: "tools", level: "beginner" },
  { name: "VS Code", category: "tools", level: "advanced" },
  { name: "Jupyter", category: "tools", level: "intermediate" },
  { name: "Arduino IDE", category: "tools", level: "intermediate" },
];

export const skillCategories = {
  "frontend": "Frontend Development",
  "backend": "Backend Development", 
  "mobile": "Mobile Development",
  "ai-ml": "AI & Machine Learning",
  "database": "Database Technologies",
  "tools": "Tools & Utilities",
  "other": "Other Technologies"
};
