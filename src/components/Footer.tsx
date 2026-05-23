import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold">Vignesh N.</p>
          <p className="mt-3 text-sm text-slate-400">Building intelligent, scalable systems.</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Connect</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <a
              href="https://github.com/Vigneshnandan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.77.5 12.28c0 5.22 3.29 9.65 7.85 11.22.57.11.78-.26.78-.57 0-.28-.01-1.02-.01-2-3.19.72-3.86-1.58-3.86-1.58-.52-1.34-1.27-1.7-1.27-1.7-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.2 1.75 1.2 1.02 1.8 2.68 1.28 3.33.98.1-.76.4-1.28.72-1.58-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.44-2.34 1.17-3.16-.12-.3-.51-1.52.11-3.17 0 0 .96-.32 3.14 1.21a10.7 10.7 0 0 1 5.72 0c2.18-1.53 3.14-1.21 3.14-1.21.62 1.65.23 2.87.11 3.17.73.82 1.17 1.87 1.17 3.16 0 4.52-2.69 5.51-5.25 5.81.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.69.79.57A11.78 11.78 0 0 0 23.5 12.28C23.5 5.77 18.35.5 12 .5Z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vigneshnandan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 .5 1 4.98 2.12 4.98 3.5ZM.5 8.5h4V23h-4zM8.5 8.5h3.84v2h.05c.54-1.02 1.87-2.1 3.86-2.1 4.13 0 4.89 2.72 4.89 6.26V23h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V23h-3.83V8.5z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Vignesh N. All rights reserved. Built with Next.js & Tailwind CSS 🚀
        </div>
      </div>
    </footer>
  );
}