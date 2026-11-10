export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { label: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Kotlin", "SQL", "HTML/CSS"] },
  {
    label: "AI & Data Science",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Face Recognition (FaceNet)",
      "LLM Integration (Groq)",
      "LLM Integration (Llama3)",
      "TFLite",
      "DSA",
      "Prompt Engineering",
    ],
  },
  { label: "Databases & Backend", skills: ["PostgreSQL", "Supabase", "Redis", "ObjectBox", "pgvector", "SQLAlchemy", "JWT Auth"] },
  { label: "DevOps & Tools", skills: ["Docker", "Git", "GitHub", "VS Code", "Jupyter Notebook", "Vercel"] },
  { label: "Mobile", skills: ["Android (Kotlin)", "TFLite", "Jetpack Compose", "Koin", "MVVM", "Clean Architecture"] },
];

export const learning = ["Next.js Advanced Patterns", "MLOps", "System Design", "Cloud Deployment (AWS/GCP)"];
