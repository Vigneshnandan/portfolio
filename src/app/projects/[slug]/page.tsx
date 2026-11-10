import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { caseStudyProjects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.desc,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  const sections = [
    { heading: "The Problem", body: caseStudy.problem },
    { heading: "Approach", body: caseStudy.approach },
    { heading: "Architecture", body: caseStudy.architecture },
    { heading: "My Role", body: caseStudy.role },
    { heading: "Impact", body: caseStudy.impact },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>

        <header className="mb-10">
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
            {project.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">{project.name}</h1>
          <p className="mt-2 text-base font-medium text-blue-600">{project.stack}</p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              <ExternalLink className="h-4 w-4" />
              View on GitHub
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <Globe className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}
          </div>
        </header>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.body}</p>
            </section>
          ))}

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
