import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Vignesh N | AI & Data Science Developer",
  description:
    "Portfolio of Vignesh N — AI & Data Science developer building intelligent, full-stack systems with Next.js, FastAPI, and LLMs.",
};

export default function Home() {
  return <HomeClient />;
}
