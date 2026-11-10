import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vignesh N | AI & Data Science Developer",
    template: "%s | Vignesh N",
  },
  description: "Portfolio of Vignesh N, AI & Data Science Developer.",
  authors: [{ name: "Vignesh N", url: siteUrl }],
  creator: "Vignesh N",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Vignesh N — Portfolio",
    title: "Vignesh N | AI & Data Science Developer",
    description:
      "AI & Data Science developer building intelligent, full-stack systems with Next.js, FastAPI, and LLMs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vignesh N | AI & Data Science Developer",
    description:
      "AI & Data Science developer building intelligent, full-stack systems with Next.js, FastAPI, and LLMs.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vignesh N",
  jobTitle: "AI & Data Science Developer",
  url: siteUrl,
  email: "mailto:vikinandan06@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Trichy",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SRM TRP Engineering College",
  },
  sameAs: ["https://github.com/Vigneshnandan", "https://linkedin.com/in/vigneshnandan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.setAttribute("data-theme","dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
