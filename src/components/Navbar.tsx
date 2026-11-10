"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          Vignesh N.
        </Link>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href || "");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-blue-600 font-medium border-b-2 border-blue-600 pb-0.5 dark:text-blue-400 dark:border-blue-400"
                    : "text-slate-600 hover:text-blue-600 transition dark:text-slate-300 dark:hover:text-blue-400"
                }
              >
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} border-t border-slate-200 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-950`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href || "");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "border-b border-blue-600 py-3 font-medium text-blue-600 dark:border-blue-400 dark:text-blue-400"
                    : "border-b border-slate-100 py-3 text-slate-600 transition hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-slate-100"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
