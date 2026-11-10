import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Real-world AI/ML, full-stack, and backend projects built by Vignesh N.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
