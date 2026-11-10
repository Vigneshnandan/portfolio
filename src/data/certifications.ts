export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  category: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    name: "MongoDB Basics for Students",
    issuer: "MongoDB University",
    date: "Aug 2025",
    credentialId: "MDBmpi8ezupx4",
    category: "Database",
    image: "/certificates/mongodb-basics.pdf",
  },
  {
    name: "Connecting to MongoDB in Python",
    issuer: "MongoDB University",
    date: "Aug 2025",
    credentialId: "MDBq7pnogxhbh",
    category: "Database",
    image: "/certificates/mongodb-connecting.pdf",
  },
  {
    name: "MongoDB CRUD Operations in Python",
    issuer: "MongoDB University",
    date: "Aug 2025",
    credentialId: "MDBtagmu4kyxa",
    category: "Database",
    image: "/certificates/mongodb-crud.pdf",
  },
  {
    name: "Using MongoDB with Python",
    issuer: "MongoDB University",
    date: "Aug 2025",
    credentialId: "MDBdrkpuctl63",
    category: "Database",
    image: "/certificates/mongodb-using.pdf",
  },
  {
    name: "MongoDB Aggregation in Python",
    issuer: "MongoDB University",
    date: "Aug 2025",
    credentialId: "MDBo9p3fiu31g",
    category: "Database",
    image: "/certificates/mongodb-aggregation.pdf",
  },
  {
    name: "Paper Presentation — MEDARZT'25",
    issuer: "SRM Valliammai Engineering College",
    date: "Oct 2025",
    category: "Event",
    image: "/certificates/medarzt-paper-presentation.png",
  },
  {
    name: "MEDMAZE — MEDARZT'25",
    issuer: "SRM Valliammai Engineering College",
    date: "Oct 2025",
    category: "Event",
    image: "/certificates/medarzt-medmaze.png",
  },
  {
    name: "DataStorm 1.0 — Hack the Future",
    issuer: "SRM TRP Engineering College × Visionet",
    date: "Mar 2026",
    category: "Hackathon",
    image: "/certificates/datastorm-hackathon.jpeg",
  },
];

export const certificationCategories = ["All", "Database", "Hackathon", "Event"] as const;

export const certificationCategoryBadgeClasses: Record<string, string> = {
  Database: "bg-green-50 text-green-700 border border-green-200",
  Hackathon: "bg-purple-50 text-purple-700 border border-purple-200",
  Event: "bg-orange-50 text-orange-700 border border-orange-200",
};
