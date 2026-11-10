"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ExternalLink, Globe, ImageOff, X } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { projects, projectFilters, type Project } from "@/data/projects";

type Filter = (typeof projectFilters)[number];

function ProjectImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The server-rendered <img> can already have failed to load before React
  // hydrates and attaches onError, so also check completion state on mount.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  if (errored) {
    return (
      <div className={`flex flex-col items-center justify-center gap-2 border border-dashed border-slate-300 bg-slate-50 px-4 text-center ${className}`}>
        <ImageOff className="h-6 w-6 text-slate-400" />
        <p className="text-xs text-slate-400">
          Add your project image at <span className="font-mono text-slate-500">public{src}</span>
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={imgRef} src={src} alt={alt} onError={() => setErrored(true)} className={`object-cover ${className}`} />
  );
}

function FeaturedProjectCard({ project, onViewDetails }: { project: Project; onViewDetails: (project: Project) => void }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          {project.category}
        </span>
        <div className="flex items-center gap-3">
          {project.live ? (
            <Link
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} live site`}
              className="text-slate-400 transition hover:text-blue-600"
            >
              <Globe className="h-4 w-4" />
            </Link>
          ) : null}
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
      </div>

      <h2 className="text-lg font-bold text-slate-900">{project.name}</h2>
      <p className="text-sm font-medium text-blue-600">{project.stack}</p>
      <p className="flex-1 text-sm leading-relaxed text-slate-500">{project.desc}</p>

      {project.note ? <p className="text-xs italic text-slate-400">{project.note}</p> : null}

      <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
            {tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onViewDetails(project)}
        className="mt-1 flex items-center justify-center gap-1.5 rounded-lg bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
      >
        View Project Details
      </button>
    </article>
  );
}

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [detailProject, setDetailProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);
  const showFeatured = activeFilter === "All";
  const gridProjects = showFeatured
    ? filteredProjects.filter((project) => !project.featured)
    : filteredProjects;

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetailProject(null);
      }
    };

    if (detailProject) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [detailProject]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h1>
          <p className="mt-2 text-slate-500">Real-world AI/ML, full-stack, and backend projects.</p>
        </header>
      </FadeIn>

      <FadeIn delay={0.04}>
        <section className="mb-8 flex flex-wrap gap-3">
        {projectFilters.map((filter) => {
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

      {showFeatured ? (
        <FadeIn delay={0.06}>
          <section className="mb-12">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} onViewDetails={setDetailProject} />
              ))}
            </div>
          </section>
        </FadeIn>
      ) : null}

      <FadeIn delay={0.08}>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {gridProjects.map((project: Project) => (
          <article
            key={project.id}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                {project.category}
              </span>
              <div className="flex items-center gap-3">
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} live site`}
                    className="text-slate-400 transition hover:text-blue-600"
                  >
                    <Globe className="h-4 w-4" />
                  </Link>
                ) : null}
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

            {project.slug ? (
              <Link
                href={`/projects/${project.slug}`}
                className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
              >
                View case study →
              </Link>
            ) : null}
          </article>
        ))}
        </section>
      </FadeIn>

      {detailProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setDetailProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {detailProject.image ? (
              <ProjectImage src={detailProject.image} alt={detailProject.name} className="aspect-video w-full rounded-t-2xl" />
            ) : null}

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                    {detailProject.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">{detailProject.name}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-600">{detailProject.stack}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setDetailProject(null)}
                  className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">{detailProject.desc}</p>

              {detailProject.note ? (
                <p className="mt-2 text-xs italic text-slate-400">{detailProject.note}</p>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                {detailProject.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={detailProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  <ExternalLink className="h-4 w-4" />
                  View on GitHub
                </a>
                {detailProject.live ? (
                  <a
                    href={detailProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    <Globe className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : null}
                {detailProject.slug ? (
                  <Link
                    href={`/projects/${detailProject.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
                  >
                    Read full case study →
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
