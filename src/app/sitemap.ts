import type { MetadataRoute } from "next";
import { siteUrl, siteRoutes } from "@/lib/site";
import { caseStudyProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = siteRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const caseStudyEntries = caseStudyProjects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...caseStudyEntries];
}
