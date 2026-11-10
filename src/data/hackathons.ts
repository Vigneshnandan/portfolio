export interface Hackathon {
  emoji: string;
  place: string;
  event: string;
  venue: string;
  year: string;
  desc: string;
  color: string;
  team?: string[];
  prize?: string;
  linkedinUrl?: string;
}

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/vigneshnandan/";

const rawHackathons: Hackathon[] = [
  {
    emoji: "🥈",
    place: "2nd Place",
    event: "HackWithMagnus 2026",
    venue: "CIT College",
    year: "2026",
    desc: "Secured 2nd place at the inter-college hackathon, representing SRM TRP Engineering College.",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    emoji: "🥉",
    place: "3rd Place",
    event: "SRM TRP Ideathon 2025",
    venue: "SRM TRP Engineering College",
    year: "2025",
    desc: "Won 3rd place at the college-level Ideathon for innovation and product ideation.",
    color: "bg-orange-50 border-orange-200",
  },
  {
    emoji: "🥉",
    place: "3rd Place",
    event: "SMARTATHON'26",
    venue: "Dhanalakshmi Srinivasan University",
    year: "2026",
    desc: "24-hour national-level hackathon. Secured 3rd place with Team PRO BOTS after a full day of brainstorming, coding, and problem-solving.",
    color: "bg-orange-50 border-orange-200",
    team: ["Srijan Santhosh K", "Samith V"],
    prize: "₹10,000",
  },
  {
    emoji: "🏁",
    place: "Participant",
    event: "HACK-SPRINT 2026",
    venue: "SRM TRP Engineering College",
    year: "2026",
    desc: "Built HireVerse DSA Evaluation Module as Team Error-404 during this hackathon.",
    color: "bg-blue-50 border-blue-200",
  },
  {
    emoji: "🎯",
    place: "Participant",
    event: "DataStorm 1.0 — Hack the Future",
    venue: "SRM TRP Engineering College × Visionet",
    year: "2026",
    desc: "Participated in the DataStorm hackathon focused on real-world data-driven problem solving.",
    color: "bg-purple-50 border-purple-200",
  },
  {
    emoji: "🏁",
    place: "Participant",
    event: "Hack Hustle 2.0",
    venue: "Saveetha Engineering College",
    year: "2026",
    desc: "Fast-paced hackathon representing Team PRO BOTS, focused on innovation, collaboration, and real-time problem-solving.",
    color: "bg-blue-50 border-blue-200",
    team: ["Vishal L R", "Shamiksha Balasubramanian", "Sanjitha R"],
  },
  {
    emoji: "🎤",
    place: "Organizer",
    event: "IMAGINE X 2026 — Imagine Your Future",
    venue: "SRM TRP Engineering College (Dept. of AI & DS)",
    year: "2026",
    desc: "Coordinated and helped execute this department-wide Ideathon from planning through delivery, bringing student innovation and ideas to a common platform.",
    color: "bg-green-50 border-green-200",
    team: ["Srijan Santhosh", "Vishal L R"],
  },
];

export const hackathons: Hackathon[] = rawHackathons.map((hackathon) => ({
  ...hackathon,
  linkedinUrl: hackathon.linkedinUrl ?? LINKEDIN_PROFILE_URL,
}));

export const hackathonStats = [
  { number: `${hackathons.filter((h) => h.place.includes("Place")).length}`, label: "Podium Finishes" },
  { number: `${hackathons.length}`, label: "Hackathons Attended" },
  { number: `${hackathons.filter((h) => h.place === "Organizer").length}`, label: "Event Organized" },
];
