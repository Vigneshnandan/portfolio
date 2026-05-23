"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-blue-600">
          Vignesh N.
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

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
                    ? "text-blue-600 font-medium border-b-2 border-blue-600 pb-0.5"
                    : "text-slate-600 hover:text-blue-600 transition"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} border-t border-slate-200 bg-white lg:hidden`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href || "");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "border-b border-blue-600 py-3 font-medium text-blue-600" : "border-b border-slate-100 py-3 text-slate-600 transition hover:text-slate-900"}
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