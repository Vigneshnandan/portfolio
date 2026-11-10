"use client";

import { Award, Calendar, Gift, Flag, MapPin, Medal, Megaphone, Target, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { hackathons, hackathonStats, type Hackathon } from "@/data/hackathons";

const iconByEmoji: Record<string, typeof Medal> = {
  "🥈": Medal,
  "🥉": Award,
  "🏁": Flag,
  "🎯": Target,
  "🎤": Megaphone,
};

const badgeColorByPlace: Record<string, string> = {
  "2nd Place": "bg-yellow-100 text-yellow-700",
  "3rd Place": "bg-orange-100 text-orange-700",
  Participant: "bg-blue-100 text-blue-700",
  Organizer: "bg-green-100 text-green-700",
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4zM8.5 8.5h3.84v2h.05c.54-1.02 1.87-2.1 3.86-2.1 4.13 0 4.89 2.72 4.89 6.26V23h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V23h-3.83V8.5z" />
    </svg>
  );
}

function HackathonCard({ item }: { item: Hackathon }) {
  const Icon = iconByEmoji[item.emoji] ?? Medal;
  const badgeColor = badgeColorByPlace[item.place] ?? "bg-slate-100 text-slate-700";

  return (
    <article
      className={`flex flex-col gap-3 rounded-2xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${item.color}`}
    >
      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${badgeColor}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>{item.place}</span>
      </div>

      <h3 className="text-lg font-bold leading-snug text-slate-900">{item.event}</h3>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {item.venue}
        </span>
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {item.year}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>

      {item.team && item.team.length > 0 ? (
        <p className="inline-flex items-start gap-1.5 text-xs text-slate-500">
          <Users className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
          <span>with {item.team.join(", ")}</span>
        </p>
      ) : null}

      {item.prize ? (
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
          <Gift className="h-3.5 w-3.5" />
          {item.prize}
        </span>
      ) : null}

      <div className="mt-auto border-t border-black/5 pt-3">
        {item.linkedinUrl ? (
          <a
            href={item.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 transition hover:text-blue-800"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
            View on LinkedIn
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <LinkedInIcon className="h-3.5 w-3.5" />
            Add LinkedIn post link
          </span>
        )}
      </div>
    </article>
  );
}

export default function HackathonsClient() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Hackathons &amp; Competitions</h1>
          <p className="mt-2 text-slate-500">Awards, rankings, and competitive highlights.</p>
        </header>
      </FadeIn>

      <FadeIn delay={0.04}>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {hackathonStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600"
            >
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span>
                {stat.number} {stat.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {hackathons.map((item, index) => (
          <FadeIn key={item.event} delay={0.06 + index * 0.04}>
            <HackathonCard item={item} />
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
