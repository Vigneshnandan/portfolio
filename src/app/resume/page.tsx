import type { Metadata } from "next";
import { Download, FileText, ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";
import { hackathons } from "@/data/hackathons";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download Vignesh N's resume — education, projects, skills, and hackathon highlights.",
};

const resumeProjectIds = [1, 4, 5, 12, 13];
const resumeProjects = projects.filter((project) => resumeProjectIds.includes(project.id));
const resumeHackathons = hackathons.filter((hackathon) => hackathon.place.includes("Place") || hackathon.event.includes("HACK-SPRINT"));

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Resume</h1>
          <p className="mt-2 text-slate-500">My full resume — view inline or download.</p>
        </header>
      </FadeIn>

      <FadeIn delay={0.04}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <aside className="sticky top-24 h-fit rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
            <FileText className="mx-auto h-14 w-14 text-blue-600" />
            <h2 className="mt-4 text-xl font-bold text-slate-900">Download Resume</h2>
            <p className="mt-2 text-sm text-slate-500">Get the latest version of my resume as a PDF.</p>

            <a
              href="/resume/vignesh_resume.pdf"
              download
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <p className="mt-3 text-xs text-slate-400">Last updated: 2026</p>
          </aside>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border-b border-slate-100 pb-6">
              <h2 className="text-2xl font-bold text-slate-900">Vignesh N</h2>
              <p className="mt-1 text-blue-600 font-medium">AI &amp; Data Science Developer</p>

              <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                <span>+91 7904948904</span>
                <span>vikinandan06@gmail.com</span>
                <span>linkedin.com/in/vigneshnandan</span>
                <span>github.com/Vigneshnandan</span>
                <span>Trichy, Tamil Nadu</span>
              </div>
            </div>

            <div className="rounded-2xl border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-900">Profile</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Motivated B.Tech student in AI & Data Science with hands-on experience building AI-powered platforms and full-stack web applications. Passionate about solving real-world problems through machine learning, intelligent automation, and data-driven systems. Proven ability to ship end-to-end projects with a focus on clean architecture and scalable code.
              </p>
            </div>

            <div className="rounded-2xl border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-900">Education</h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">B.Tech — AI &amp; Data Science</div>
                    <div className="text-sm text-slate-500">SRM TRP Engineering College</div>
                  </div>
                  <div className="text-sm text-slate-400">2025–Present · CGPA: 8.68</div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">HSC — CBSE</div>
                    <div className="text-sm text-slate-500">Cauvery Global Sr. Sec. School</div>
                  </div>
                  <div className="text-sm text-slate-400">2024 · 70%</div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">SSLC — ICSE</div>
                    <div className="text-sm text-slate-500">Brindavan Vidyalaya</div>
                  </div>
                  <div className="text-sm text-slate-400">2022 · 84%</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-900">Projects</h3>
              <div className="mt-4 space-y-4">
                {resumeProjects.map((p) => (
                  <div key={p.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{p.name}</div>
                        <div className="text-sm text-blue-600">{p.stack}</div>
                      </div>
                      <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="text-sm text-slate-500">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-900">Technical Skills</h3>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div><strong>Languages:</strong> Python, TypeScript, JavaScript, Kotlin, SQL, HTML/CSS</div>
                <div><strong>AI/DS:</strong> ML, Data Analysis, FaceNet, LLM Integration, TFLite, DSA</div>
                <div><strong>Web:</strong> Next.js, FastAPI, React, Tailwind CSS, Node.js</div>
                <div><strong>Databases:</strong> PostgreSQL, Supabase, Redis, ObjectBox</div>
                <div><strong>DevOps:</strong> Docker, Git, GitHub, Vercel</div>
                <div><strong>Mobile:</strong> Android (Kotlin), TFLite, Jetpack Compose, MVVM</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">Hackathons</h3>
              <div className="mt-4 grid gap-3">
                {resumeHackathons.map((h) => (
                  <div key={h.event} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{h.emoji}</span>
                        <div>
                          <div className="font-semibold text-slate-900">{h.event}</div>
                          <div className="text-sm text-slate-500">{h.venue} · {h.year}</div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-700">{h.place}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
