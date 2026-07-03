"use client";

import { useState } from "react";
import { Sparkles, Clock, Trophy, Users } from "lucide-react";
import { PortalCard, SectionHeading, Pill, Avatar } from "../ui";

const leaderboard = [
  { name: "Jordan P.", initials: "JP", score: 96 },
  { name: "Ava T.", initials: "AT", score: 94 },
  { name: "You — Maya R.", initials: "MR", score: 88, isYou: true },
  { name: "Noah K.", initials: "NK", score: 85 },
  { name: "Ella S.", initials: "ES", score: 81 },
];

export default function ChallengeOfWeek() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <SectionHeading
        kicker="AI CHALLENGE OF THE WEEK"
        title="Build a Weather Chatbot"
        description="A friendly weekly challenge to practice a new skill and compete for the leaderboard."
        accentClass="text-red"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <PortalCard borderClassName="border-purple/40" className="bg-gradient-to-br from-purple/20 to-navy-2/60 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple/20 text-[#D9C8FF]">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">This week&apos;s challenge</h3>
              <p className="text-xs font-bold text-ink-mute">Difficulty: Intermediate</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Design a chatbot that gives friendly, accurate weather advice for
            any city a user names — including a fun personality and at least
            one custom response for extreme weather.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold text-ink-mute">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-yellow" /> Ends in 3 days
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-cyan" /> 42 students competing
            </span>
            <span className="flex items-center gap-1.5">
              <Trophy className="h-3.5 w-3.5 text-[#FF8FA3]" /> Top 3 get a badge
            </span>
          </div>

          {submitted ? (
            <p className="mt-6 font-display text-sm font-bold text-cyan">
              Submission received — good luck!
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="mt-6 rounded-full bg-gradient-to-br from-yellow to-orange px-6 py-3 text-sm font-extrabold text-[#3A2400] shadow-glow-yellow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Submit My Project
            </button>
          )}
        </PortalCard>

        <PortalCard>
          <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold">
            <Trophy className="h-4 w-4 text-yellow" />
            Leaderboard
          </h3>
          <div className="flex flex-col gap-3">
            {leaderboard.map((entry, i) => (
              <div
                key={entry.name}
                className={`flex items-center gap-3 rounded-xl p-2 ${entry.isYou ? "bg-cyan/10" : ""}`}
              >
                <span className="w-4 text-xs font-bold text-ink-mute">{i + 1}</span>
                <Avatar
                  initials={entry.initials}
                  className={entry.isYou ? "bg-gradient-to-br from-cyan to-purple" : "bg-white/10"}
                />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-bold text-white">{entry.name}</div>
                </div>
                <Pill className="bg-white/5 text-ink-mute">{entry.score}</Pill>
              </div>
            ))}
          </div>
        </PortalCard>
      </div>
    </div>
  );
}
