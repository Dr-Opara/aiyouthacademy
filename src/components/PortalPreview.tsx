"use client";

import { motion } from "framer-motion";
import { Trophy, FolderKanban, TrendingUp, Circle } from "lucide-react";

const badges = [
  { label: "First Build", color: "bg-cyan/15 text-cyan border-cyan/40" },
  { label: "AI Storyteller", color: "bg-yellow/15 text-yellow border-yellow/40" },
  { label: "Site Shipped", color: "bg-purple/15 text-[#D9C8FF] border-purple/40" },
  { label: "Chatbot Pro", color: "bg-red/15 text-[#FF8FA3] border-red/40" },
];

const projects = [
  { name: "Digital Pet Comic", progress: 100 },
  { name: "My First Website", progress: 70 },
  { name: "Quiz Game Builder", progress: 35 },
];

export default function PortalPreview() {
  return (
    <section className="relative z-[1] mx-auto max-w-[1280px] px-4 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left"
      >
        <p className="mb-3.5 text-xs font-extrabold tracking-[3px] text-cyan">
          STUDENT PORTAL
        </p>
        <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.05]">
          Every project, badge, and win —
          <br />
          <span className="text-yellow">in one dashboard.</span>
        </h2>
        <p className="mx-auto mt-3.5 max-w-[640px] text-[clamp(15px,1.5vw,18px)] leading-relaxed text-ink-soft md:mx-0">
          Families and students get a home base to track progress, revisit
          finished projects, and celebrate new skills. Portal access ships
          with every enrollment.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="relative mt-11 overflow-hidden rounded-[24px] border border-white/10 bg-navy-2/70 shadow-glow-purple-lg"
      >
        <div className="absolute -top-16 right-8 rounded-full bg-gradient-to-br from-yellow to-orange px-4 py-1.5 text-xs font-extrabold text-[#3A2400] shadow-glow-yellow sm:right-16">
          Coming Soon
        </div>

        <div className="flex items-center gap-2 border-b border-white/10 bg-navy/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red/70" />
          <span className="h-3 w-3 rounded-full bg-yellow/70" />
          <span className="h-3 w-3 rounded-full bg-cyan/70" />
          <span className="ml-3 text-xs font-bold tracking-wide text-ink-mute">
            portal.aiyouthacademy.com
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-navy/50 p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-extrabold text-cyan">
              <FolderKanban className="h-4 w-4" />
              My Projects
            </div>
            <ul className="space-y-4">
              {projects.map((p) => (
                <li key={p.name}>
                  <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-ink-soft">
                    <span>{p.name}</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan to-purple"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy/50 p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-extrabold text-yellow">
              <Trophy className="h-4 w-4" />
              Badges Earned
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-extrabold ${b.color}`}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy/50 p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-extrabold text-[#FF8FA3]">
              <TrendingUp className="h-4 w-4" />
              Skill Progress
            </div>
            <ul className="space-y-3 text-sm text-ink-soft">
              {["Prompting", "Building", "Presenting"].map((skill, i) => (
                <li key={skill} className="flex items-center gap-2">
                  <Circle
                    className={`h-2.5 w-2.5 ${
                      i === 0 ? "fill-cyan text-cyan" : i === 1 ? "fill-purple text-purple" : "fill-red text-red"
                    }`}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
