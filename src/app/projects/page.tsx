"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    id: 1,
    category: "Full-Stack AI",
    name: "Nexus — AI Recruiter Platform",
    stack: "TypeScript · Next.js · Supabase · Groq",
    desc: "Anti-hallucination ATS that reads candidates' actual GitHub codebases via LLM evaluation. Features a dual-metric Trust Score engine and smart leaderboard ranking for automated candidate screening.",
    github: "https://github.com/Vigneshnandan/ai-recruiter-platform",
    tags: ["TypeScript", "Next.js", "Supabase", "Groq"],
  },
  {
    id: 2,
    category: "Full-Stack AI",
    name: "HireVerse — DSA Evaluation Module",
    stack: "Python · FastAPI · PostgreSQL · Groq",
    desc: "Full-stack DSA preparation platform with AI-powered code evaluation, complexity analysis, and automated follow-up interview questions. Docker sandbox for secure code execution and Monaco editor for in-browser coding. AI mentorship via Llama-3.3-70b.",
    note: "Team Error-404 | HACK-SPRINT 2026",
    github: "https://github.com/vishallr821/hireverse-final",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Groq"],
  },
  {
    id: 3,
    category: "Mobile AI",
    name: "EduVision — On-Device Face Recognition",
    stack: "Kotlin · TFLite · ObjectBox · Supabase",
    desc: "Offline-first Android app using FaceNet (TFLite) for on-device face recognition with HNSW vector search via ObjectBox. Real-time multi-face detection, liveness anti-spoofing, MVVM + Clean Architecture, optional Supabase cloud sync.",
    github: "https://github.com/vishallr821/eduvision-final",
    tags: ["Kotlin", "TFLite", "FaceNet", "MVVM", "ObjectBox"],
  },
  {
    id: 4,
    category: "Full-Stack",
    name: "Resume Parser",
    stack: "Python · HTML",
    desc: "Extracts and structures key candidate information from uploaded PDFs with a clean HTML frontend for organized display.",
    github: "https://github.com/Vigneshnandan/resume-parser",
    tags: ["Python", "HTML"],
  },
  {
    id: 5,
    category: "Full-Stack",
    name: "HireVerse DSA Practice",
    stack: "Python",
    desc: "DSA preparation platform implementing core algorithmic patterns and problem-solving concepts for technical interview readiness.",
    github: "https://github.com/Vigneshnandan/hireverse-dsa",
    tags: ["Python", "DSA", "Algorithms"],
  },
];

const hackathons = [
  {
    emoji: "🥈",
    place: "2nd Place",
    event: "HackWithMagnus 2026",
    venue: "CIT College",
    year: "2026",
    desc: "Secured 2nd place at the inter-college hackathon, representing SRM TRP Engineering College.",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    emoji: "🥉",
    place: "3rd Place",
    event: "SRM TRP Ideathon 2025",
    venue: "SRM TRP Engineering College",
    year: "2025",
    desc: "Won 3rd place at the college-level Ideathon for innovation and product ideation.",
    color: "bg-orange-50 border-orange-200",
  },
  {
    emoji: "🏁",
    place: "Participant",
    event: "HACK-SPRINT 2026",
    venue: "SRM TRP Engineering College",
    year: "2026",
    desc: "Built HireVerse DSA Evaluation Module as Team Error-404 during this hackathon.",
    color: "bg-blue-50 border-blue-200",
  },
];

const filters = ["All", "AI / LLM", "Full-Stack AI", "Mobile AI", "Full-Stack"] as const;

type Filter = (typeof filters)[number];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    if (activeFilter === "AI / LLM") {
      return projects.filter((project) => project.category === "Full-Stack AI");
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Projects &amp; Achievements</h1>
          <p className="mt-2 text-slate-500">Real-world AI/ML projects and competitive achievements.</p>
        </header>
      </FadeIn>

      <FadeIn delay={0.04}>
        <section className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={
                isActive
                  ? "rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white"
                  : "rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
              }
            >
              {filter}
            </button>
          );
        })}
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                {project.category}
              </span>
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} on GitHub`}
                className="text-slate-400 transition hover:text-blue-600"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            <h2 className="text-lg font-bold text-slate-900">{project.name}</h2>
            <p className="text-sm font-medium text-blue-600">{project.stack}</p>
            <p className="flex-1 text-sm leading-relaxed text-slate-500">{project.desc}</p>

            {project.note ? <p className="text-xs italic text-slate-400">{project.note}</p> : null}

            <div className="mt-auto flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
        </section>
      </FadeIn>

      <FadeIn delay={0.12}>
        <section className="mt-16">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Hackathons &amp; Competitions</h2>
          <p className="mb-6 text-sm text-slate-500">Awards, rankings, and competitive highlights.</p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {hackathons.map((item) => (
              <article key={item.event} className={`flex flex-col gap-2 rounded-2xl border p-6 ${item.color}`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-sm font-semibold text-slate-700">{item.place}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.event}</h3>
                <p className="text-sm text-slate-500">{item.venue} · {item.year}</p>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}