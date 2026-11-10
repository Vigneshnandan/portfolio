import type { Metadata } from "next";
import HackathonsClient from "./HackathonsClient";

export const metadata: Metadata = {
  title: "Hackathons & Competitions",
  description: "Hackathon wins, rankings, and competitive highlights for Vignesh N.",
};

export default function HackathonsPage() {
  return <HackathonsClient />;
}
