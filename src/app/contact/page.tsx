"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Contact</h1>
        <p className="mt-2 text-slate-500">Open to internships, collaborations, and full-time roles.</p>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Let's Connect</h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-600">I'm actively looking for internship opportunities and open to collaborating on interesting AI/ML or full-stack projects. Feel free to reach out!</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 transition">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Email</div>
                <a className="text-sm font-medium text-blue-600 hover:underline" href="mailto:vikinandan06@gmail.com">vikinandan06@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 transition">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Phone</div>
                <div className="text-sm font-medium text-slate-700">+91 7904948904</div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 transition">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Location</div>
                <div className="text-sm font-medium text-slate-700">Trichy, Tamil Nadu, India</div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 transition">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {/* Inline GitHub icon */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.77.5 12.28c0 5.22 3.29 9.65 7.85 11.22.57.11.78-.26.78-.57 0-.28-.01-1.02-.01-2-3.19.72-3.86-1.58-3.86-1.58-.52-1.34-1.27-1.7-1.27-1.7-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.2 1.75 1.2 1.02 1.8 2.68 1.28 3.33.98.1-.76.4-1.28.72-1.58-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.44-2.34 1.17-3.16-.12-.3-.51-1.52.11-3.17 0 0 .96-.32 3.14 1.21a10.7 10.7 0 0 1 5.72 0c2.18-1.53 3.14-1.21 3.14-1.21.62 1.65.23 2.87.11 3.17.73.82 1.17 1.87 1.17 3.16 0 4.52-2.69 5.51-5.25 5.81.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.69.79.57A11.78 11.78 0 0 0 23.5 12.28C23.5 5.77 18.35.5 12 .5Z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">GitHub</div>
                <a className="text-sm font-medium text-blue-600 hover:underline" href="https://github.com/Vigneshnandan" target="_blank" rel="noreferrer">github.com/Vigneshnandan</a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 transition">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {/* Inline LinkedIn icon */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4zM8.5 8.5h3.84v2h.05c.54-1.02 1.87-2.1 3.86-2.1 4.13 0 4.89 2.72 4.89 6.26V23h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V23h-3.83V8.5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">LinkedIn</div>
                <a className="text-sm font-medium text-blue-600 hover:underline" href="https://linkedin.com/in/vigneshnandan" target="_blank" rel="noreferrer">linkedin.com/in/vigneshnandan</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
                <div className="mt-3 text-xl font-bold text-slate-900">Message sent!</div>
                <div className="mt-1 text-sm text-slate-500">I'll get back to you soon.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="sr-only">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="sr-only">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="sr-only">Subject</label>
                  <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="sr-only">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Message" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}

            {/* Connect to Formspree (formspree.io) or EmailJS for actual email sending */}
          </div>
        </div>
      </div>
    </div>
  );
}
