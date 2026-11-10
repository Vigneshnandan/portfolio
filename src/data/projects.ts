export interface CaseStudy {
  problem: string;
  approach: string;
  architecture: string;
  role: string;
  impact: string;
}

export interface Project {
  id: number;
  slug?: string;
  featured?: boolean;
  image?: string;
  category: "Full-Stack AI" | "Mobile AI" | "Backend" | "ML" | "Full-Stack";
  name: string;
  stack: string;
  desc: string;
  github: string;
  live?: string;
  note?: string;
  tags: string[];
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "nexus-ai-recruiter-platform",
    featured: true,
    image: "/images/projects/nexus.png",
    category: "Full-Stack AI",
    name: "Nexus — AI Recruiter Platform",
    stack: "TypeScript · Next.js · Supabase · Groq",
    desc: "Anti-hallucination ATS that reads candidates' actual GitHub codebases via LLM evaluation. Features a dual-metric Trust Score engine and smart leaderboard ranking for automated candidate screening.",
    github: "https://github.com/Vigneshnandan/ai-recruiter-platform",
    tags: ["TypeScript", "Next.js", "Supabase", "Groq"],
    caseStudy: {
      problem:
        "Resume-based screening is easy to game and tells recruiters almost nothing about whether a candidate can actually ship code. Teams needed a faster, more trustworthy way to shortlist applicants at scale.",
      approach:
        "Built an ATS that goes straight to the source of truth — a candidate's own GitHub repositories — and uses LLM evaluation (via Groq) to assess real code quality, consistency, and complexity instead of self-reported skills.",
      architecture:
        "Next.js + TypeScript frontend, Supabase for auth/data, and a Groq-backed LLM pipeline that pulls repo contents, scores them against a dual-metric Trust Score (code quality + activity/consistency), and ranks candidates on a live leaderboard.",
      role:
        "Designed and built the full stack solo — data model, GitHub ingestion pipeline, LLM scoring prompts, and the recruiter-facing leaderboard UI.",
      impact:
        "Replaces manual resume screening with an automated, evidence-based ranking — surfacing strong candidates recruiters would otherwise miss and filtering out inflated resumes before a human ever reviews them.",
    },
  },
  {
    id: 2,
    category: "Full-Stack AI",
    name: "MedVault — Medical Document Management",
    stack: "TypeScript · FastAPI · SQLAlchemy",
    desc: "Full-stack platform for managing patient medical documents with structured extraction (EXTRACTION.md, NORMALIZATION.md), a document timeline view, and an LLM-assisted parsing pipeline behind a clean, accessible interface.",
    github: "https://github.com/Vigneshnandan/MED-VAULT",
    live: "https://med-vault-lemon.vercel.app",
    tags: ["TypeScript", "FastAPI", "SQLAlchemy", "LLM"],
  },
  {
    id: 3,
    featured: true,
    image: "/images/projects/citizen-grievance.png",
    category: "Full-Stack AI",
    name: "Citizen Grievance & Govt. Order Routing System",
    stack: "TypeScript · AI Issue Classification",
    desc: "Intelligent complaint routing system where citizens file grievances, officials issue deadline-aware government orders, and department heads assign and track SLA compliance — powered by AI-based issue classification.",
    github: "https://github.com/Vigneshnandan/Query-manager",
    live: "https://query-manager-three.vercel.app",
    tags: ["TypeScript", "AI Classification", "Full-Stack"],
  },
  {
    id: 4,
    category: "Full-Stack AI",
    name: "HireVerse — DSA Evaluation Module",
    stack: "Python · FastAPI · PostgreSQL · Groq",
    desc: "Full-stack DSA preparation platform with AI-powered code evaluation, complexity analysis, and automated follow-up interview questions. Docker sandbox for secure code execution and Monaco editor for in-browser coding. AI mentorship via Llama-3.3-70b.",
    note: "Team Error-404 | HACK-SPRINT 2026",
    github: "https://github.com/vishallr821/hireverse-final",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Groq"],
  },
  {
    id: 5,
    featured: true,
    image: "/images/projects/eduvision.png",
    category: "Mobile AI",
    name: "EduVision — On-Device Face Recognition",
    stack: "Kotlin · TFLite · ObjectBox · Supabase",
    desc: "Offline-first Android app using FaceNet (TFLite) for on-device face recognition with HNSW vector search via ObjectBox. Real-time multi-face detection, liveness anti-spoofing, MVVM + Clean Architecture, optional Supabase cloud sync.",
    github: "https://github.com/Vigneshnandan/EduVision",
    tags: ["Kotlin", "TFLite", "FaceNet", "MVVM", "ObjectBox"],
  },
  {
    id: 6,
    category: "Backend",
    name: "Complaint Portal — Auth & RBAC Backend",
    stack: "Python · FastAPI · PostgreSQL",
    desc: "Authentication and role-based access control backend for a complaint portal system, with JWT auth, bcrypt hashing, rate limiting, and environment-based secret management.",
    github: "https://github.com/Vigneshnandan/rbac",
    tags: ["Python", "FastAPI", "PostgreSQL", "JWT", "RBAC"],
  },
  {
    id: 7,
    category: "Backend",
    name: "Women's Wellness Super App — Backend",
    stack: "TypeScript · NestJS · PostgreSQL · Redis",
    desc: "Unified modular-monolith backend serving Android and web clients from one codebase — cycle tracking, hydration, mood/sleep, journaling, calendar, diet, fitness, beauty care, and cross-module insights.",
    github: "https://github.com/Vigneshnandan/chatbot-woman-app-",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "Redis"],
  },
  {
    id: 8,
    category: "ML",
    name: "Water Quality Monitor",
    stack: "Python · FastAPI · scikit-learn · React",
    desc: "Full-stack application for monitoring, analysing, and predicting water quality using machine-learning models, with CSV import, interactive charts, and PDF report export.",
    github: "https://github.com/Vigneshnandan/Water-quality-",
    tags: ["Python", "scikit-learn", "FastAPI", "React", "Recharts"],
  },
  {
    id: 9,
    category: "Full-Stack",
    name: "QR Entry Pass System",
    stack: "TypeScript · QR Codes",
    desc: "Event entry management system with QR-coded visitor passes: multi-step self-registration with live photo capture, signed verification URLs, and gate-side scanning for frictionless check-in.",
    github: "https://github.com/Vigneshnandan/Qr-code-Pass-generator",
    tags: ["TypeScript", "QR Codes", "Full-Stack"],
  },
  {
    id: 10,
    category: "Full-Stack",
    name: "SRM TRP College Website",
    stack: "React · Vite",
    desc: "College/department website built with React and Vite, covering department information, events, and media for SRM TRP Engineering College.",
    github: "https://github.com/Vigneshnandan/Trp-website",
    live: "https://trpwebsite-rouge.vercel.app",
    tags: ["React", "Vite", "JavaScript"],
  },
  {
    id: 11,
    category: "Full-Stack",
    name: "Expense Tracker",
    stack: "React · TypeScript · Vite",
    desc: "Single-page expense tracker with add/edit/delete, category-wise monthly summaries with charts, dark mode, and full localStorage persistence — no backend required.",
    github: "https://github.com/Vigneshnandan/Expense-tracker-",
    tags: ["React", "TypeScript", "Vite"],
  },
  {
    id: 12,
    category: "Full-Stack",
    name: "Resume Parser",
    stack: "Python · HTML",
    desc: "Extracts and structures key candidate information from uploaded PDFs with a clean HTML frontend for organized display.",
    github: "https://github.com/Vigneshnandan/resume-parser",
    tags: ["Python", "HTML"],
  },
  {
    id: 13,
    category: "Full-Stack",
    name: "HireVerse DSA Practice",
    stack: "Python",
    desc: "DSA preparation platform implementing core algorithmic patterns and problem-solving concepts for technical interview readiness.",
    github: "https://github.com/Vigneshnandan/hireverse-dsa",
    tags: ["Python", "DSA", "Algorithms"],
  },
];

export const projectFilters = ["All", "Full-Stack AI", "Mobile AI", "Backend", "ML", "Full-Stack"] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const caseStudyProjects = projects.filter((project) => project.caseStudy);
