"use client";

import { useEffect, useMemo, useState } from "react";
import { Award, Calendar, Download, Eye, Hash, X } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import {
  certificationCategories,
  certificationCategoryBadgeClasses,
  certifications,
  type Certification,
} from "@/data/certifications";

type Category = (typeof certificationCategories)[number];

export default function CertificationsClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filteredCertifications = useMemo(() => {
    if (activeCategory === "All") {
      return certifications;
    }

    return certifications.filter((certification) => certification.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedCert]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Certifications</h1>
          <p className="mt-2 text-slate-500">Selected certificates, course completions, and event participations.</p>
        </header>
      </FadeIn>

      <FadeIn delay={0.03}>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {certificationCategories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={
                  isActive
                    ? "rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white"
                    : "rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                }
              >
                {category}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span>5 MongoDB Courses</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            <span>1 Hackathon</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span>2 Event Participations</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.09}>
        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCertifications.map((certification) => (
            <article
              key={`${certification.name}-${certification.issuer}`}
              onClick={() => setSelectedCert(certification)}
              className="group flex cursor-pointer flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <Award className="h-7 w-7 text-blue-600" />
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${certificationCategoryBadgeClasses[certification.category]}`}
                >
                  {certification.category}
                </span>
              </div>

              <h2 className="mt-3 text-base font-bold text-slate-900">{certification.name}</h2>
              <p className="text-sm font-medium text-blue-600">{certification.issuer}</p>

              <div className="flex items-center text-xs text-slate-400">
                <Calendar className="mr-1 inline h-3.5 w-3.5 text-slate-400" />
                <span>{certification.date}</span>
              </div>

              {certification.credentialId ? (
                <div className="flex items-center text-xs font-mono text-slate-300">
                  <Hash className="mr-1 inline h-3 w-3 text-slate-300" />
                  <span>{certification.credentialId}</span>
                </div>
              ) : null}

              <div className="mt-auto flex items-center gap-1.5 border-t border-slate-100 pt-3 text-xs font-medium text-blue-600 opacity-0 transition group-hover:opacity-100">
                <Eye className="h-3.5 w-3.5" />
                View Certificate
              </div>
            </article>
          ))}
        </main>
      </FadeIn>

      {selectedCert ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedCert.name}</h3>
                <p className="text-sm text-blue-600">{selectedCert.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                {selectedCert.image ? (
                  <a
                    href={selectedCert.image}
                    download
                    className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex max-h-[75vh] items-center justify-center overflow-auto bg-slate-50 p-6">
              {selectedCert.image?.endsWith(".pdf") ? (
                <iframe
                  src={selectedCert.image}
                  className="h-[70vh] w-full rounded-lg border border-slate-200"
                  title={selectedCert.name}
                />
              ) : selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-md"
                />
              ) : (
                <div className="py-20 text-sm text-slate-400">No certificate file available.</div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
