"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = ["AI & Data Science Developer", "Full-Stack Developer", "ML Engineer"];

const stats = [
  { number: "5+", label: "Projects Completed" },
  { number: "2+", label: "Hackathon Awards" },
  { number: "8.68", label: "CGPA (2nd Sem)" },
];

export default function Home() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            🏆 2+ Hackathon Wins | Open to Opportunities
          </div>

          <h1 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl">
            Hi, I&apos;m Vignesh N
          </h1>

          <div className="mt-3 h-9 text-2xl font-semibold text-blue-600">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[activeRoleIndex]}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="inline-block"
              >
                {roles[activeRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            B.Tech — AI & Data Science | SRM TRP Engineering College
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
            Building intelligent, scalable systems at the intersection of AI, Full-Stack Web & Machine Learning.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View My Projects
            </Link>
            <Link
              href="/resume"
              className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Download Resume
            </Link>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://github.com/Vigneshnandan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-slate-600 transition hover:text-slate-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.77.5 12.28c0 5.22 3.29 9.65 7.85 11.22.57.11.78-.26.78-.57 0-.28-.01-1.02-.01-2-3.19.72-3.86-1.58-3.86-1.58-.52-1.34-1.27-1.7-1.27-1.7-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.2 1.75 1.2 1.02 1.8 2.68 1.28 3.33.98.1-.76.4-1.28.72-1.58-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.44-2.34 1.17-3.16-.12-.3-.51-1.52.11-3.17 0 0 .96-.32 3.14 1.21a10.7 10.7 0 0 1 5.72 0c2.18-1.53 3.14-1.21 3.14-1.21.62 1.65.23 2.87.11 3.17.73.82 1.17 1.87 1.17 3.16 0 4.52-2.69 5.51-5.25 5.81.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.69.79.57A11.78 11.78 0 0 0 23.5 12.28C23.5 5.77 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/vigneshnandan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-600 transition hover:text-slate-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4zM8.5 8.5h3.84v2h.05c.54-1.02 1.87-2.1 3.86-2.1 4.13 0 4.89 2.72 4.89 6.26V23h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V23h-3.83V8.5z" />
              </svg>
            </a>
            <span className="text-sm text-slate-400">Let&apos;s connect</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative flex h-64 w-64 items-center justify-center rounded-full bg-blue-100 ring-4 ring-blue-200 ring-offset-4 ring-offset-slate-50 md:h-72 md:w-72 overflow-hidden"
          >
            <Image
              src="/images/profile.jpeg"
              alt="Vignesh N"
              fill
              sizes="(max-width: 768px) 256px, 288px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
