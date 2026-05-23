import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const timeline = [
  {
    year: "2022",
    title: "SSLC — ICSE Board",
    school: "Brindavan Vidyalaya",
    detail: "Percentage: 84%",
  },
  {
    year: "2024",
    title: "HSC — CBSE Board",
    school: "Cauvery Global Sr. Sec. School",
    detail: "Percentage: 70%",
  },
  {
    year: "2025 – Present",
    title: "B.Tech — AI & Data Science",
    school: "SRM TRP Engineering College, Trichy",
    detail: "CGPA: 8.68 / 10 (2nd Sem)",
    featured: true,
  },
];

const strengths = [
  "AI-powered platform development from ideation to deployment",
  "LLM integration and prompt engineering (Groq, Llama3)",
  "Full-stack development with Next.js and FastAPI",
  "On-device / offline-first mobile AI systems (Android + TFLite)",
  "Clean Architecture & scalable system design",
  "Competitive hackathon performer (2+ wins)",
];

const infoRows = [
  { icon: MapPin, label: "Trichy, Tamil Nadu, India" },
  { icon: GraduationCap, label: "B.Tech — AI & Data Science" },
  { icon: Building2, label: "SRM TRP Engineering College" },
  { icon: Briefcase, label: "Open to Internships & Full-time Roles" },
  { icon: Mail, label: "vikinandan06@gmail.com", href: "mailto:vikinandan06@gmail.com" },
  { icon: Phone, label: "+91 7904948904" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h1>
          <p className="mt-2 text-slate-500">A passionate AI & DS student building real-world intelligent systems.</p>
        </header>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto relative h-28 w-28 rounded-full overflow-hidden ring-4 ring-blue-100">
            <Image
              src="/images/profile.jpeg"
              alt="Vignesh N"
              fill
              sizes="(max-width: 640px) 112px, 112px"
              className="object-cover"
            />
          </div>
          {/* DROP YOUR PHOTO: Add profile.jpeg to /public/images/profile.jpeg */}
          {/* Replace this div with: */}
          {/* <Image src="/images/profile.jpeg" alt="Vignesh N" width={200} height={200} className="rounded-full" /> */}
          {/* Don't forget: import Image from 'next/image' */}

          <h2 className="mt-4 text-xl font-bold text-slate-900">Vignesh N</h2>
          <p className="text-sm text-blue-600">B.Tech — AI & Data Science</p>
          <p className="text-sm text-slate-500">SRM TRP Engineering College</p>

          <div className="mt-3 flex items-center justify-center gap-3">
            <a
              href="https://github.com/Vigneshnandan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-blue-600"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.77.5 12.28c0 5.22 3.29 9.65 7.85 11.22.57.11.78-.26.78-.57 0-.28-.01-1.02-.01-2-3.19.72-3.86-1.58-3.86-1.58-.52-1.34-1.27-1.7-1.27-1.7-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.2 1.75 1.2 1.02 1.8 2.68 1.28 3.33.98.1-.76.4-1.28.72-1.58-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.44-2.34 1.17-3.16-.12-.3-.51-1.52.11-3.17 0 0 .96-.32 3.14 1.21a10.7 10.7 0 0 1 5.72 0c2.18-1.53 3.14-1.21 3.14-1.21.62 1.65.23 2.87.11 3.17.73.82 1.17 1.87 1.17 3.16 0 4.52-2.69 5.51-5.25 5.81.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.69.79.57A11.78 11.78 0 0 0 23.5 12.28C23.5 5.77 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/vigneshnandan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition hover:text-blue-600"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4zM8.5 8.5h3.84v2h.05c.54-1.02 1.87-2.1 3.86-2.1 4.13 0 4.89 2.72 4.89 6.26V23h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V23h-3.83V8.5z" />
              </svg>
            </a>
            <a
              href="mailto:vikinandan06@gmail.com"
              aria-label="Email"
              className="text-slate-500 transition hover:text-blue-600"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="my-5 border-t border-slate-100" />

          <p className="text-left text-sm leading-relaxed text-slate-600">
            Motivated B.Tech student in AI & Data Science with hands-on experience building AI-powered platforms and full-stack web applications. Passionate about solving real-world problems through machine learning, intelligent automation, and data-driven systems.
          </p>

          <div className="mt-5 space-y-0.5 text-left">
            {infoRows.map(({ icon: Icon, label, href }) => {
              const content = (
                <div className="flex items-center gap-3 border-b border-slate-50 py-2 text-sm">
                  <Icon className="h-4 w-4 flex-shrink-0 text-blue-500" />
                  {href ? (
                    <a href={href} className="text-blue-600 transition hover:underline">
                      {label}
                    </a>
                  ) : (
                    <span className="text-slate-600">{label}</span>
                  )}
                </div>
              );

              return <div key={label}>{content}</div>;
            })}
          </div>
        </aside>

        <div className="lg:col-span-2">
          <section>
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Education Timeline</h2>

            <div className="ml-3 space-y-8 border-l-2 border-blue-200 pl-6">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[25px] top-4 h-4 w-4 rounded-full border-2 border-white bg-blue-600 ring-2 ring-blue-200" />

                  <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${item.featured ? "border-l-4 border-l-blue-500" : ""}`}>
                    <span className="mb-1 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.school}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Core Strengths</h2>
            <p className="mb-6 text-sm text-slate-500">Key areas of expertise and value I bring.</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-sm text-slate-700">{strength}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      </FadeIn>
    </div>
  );
}