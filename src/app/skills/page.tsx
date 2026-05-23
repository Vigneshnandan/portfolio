import FadeIn from "@/components/FadeIn";

const skillCategories = [
  { icon: "💻", label: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Kotlin", "SQL", "HTML/CSS"] },
  {
    icon: "🤖",
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
  { icon: "🗄️", label: "Databases & Backend", skills: ["PostgreSQL", "Supabase", "Redis", "ObjectBox", "pgvector", "SQLAlchemy", "JWT Auth"] },
  { icon: "🛠️", label: "DevOps & Tools", skills: ["Docker", "Git", "GitHub", "VS Code", "Jupyter Notebook", "Vercel"] },
  { icon: "📱", label: "Mobile", skills: ["Android (Kotlin)", "TFLite", "Jetpack Compose", "Koin", "MVVM", "Clean Architecture"] },
];

const learning = ["Next.js Advanced Patterns", "MLOps", "System Design", "Cloud Deployment (AWS/GCP)"];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Skills &amp; Tools</h1>
          <p className="mt-2 text-slate-500">Technologies I work with and what I'm learning.</p>
        </header>
      </FadeIn>

      <FadeIn delay={0.04}>
        <section className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-center">
                <span className="mr-3 text-2xl">{category.icon}</span>
                <h2 className="text-lg font-bold text-slate-900">{category.label}</h2>
              </div>

              <div className="mt-3 mb-4 border-t border-slate-100" />

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-lg border border-transparent bg-slate-100 px-3 py-1.5 text-sm text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </FadeIn>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-1">Currently Learning</h2>
        <p className="text-sm text-slate-500 mb-5">Continuously expanding my skill set.</p>

        <div className="flex flex-wrap gap-3">
          {learning.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}