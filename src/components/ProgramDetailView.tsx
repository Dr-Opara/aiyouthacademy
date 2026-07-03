"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Wrench, CalendarDays } from "lucide-react";
import type { Program } from "@/lib/programs";
import { colorClasses } from "@/lib/programs";

export default function ProgramDetailView({ program }: { program: Program }) {
  const c = colorClasses[program.color];

  return (
    <div className="relative z-[1]">
      <section className="relative overflow-hidden bg-aurora-gradient px-4 pb-14 pt-14 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold tracking-[2px] ${c.border} ${c.text}`}>
              {program.level.toUpperCase()} · {program.ageRange.toUpperCase()}
            </span>
            <h1 className="mt-5 font-display text-[clamp(36px,6vw,64px)] font-bold leading-[1.05]">
              {program.name}
            </h1>
            <p className={`mx-auto mt-3 max-w-[560px] font-display text-lg font-medium ${c.text}`}>
              {program.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-[620px] text-[clamp(15px,1.5vw,18px)] leading-relaxed text-ink-soft">
              {program.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-baseline gap-1.5">
                <span className={`font-display text-4xl font-bold ${c.text}`}>${program.price}</span>
                <span className="text-sm font-bold text-ink-mute">/week</span>
              </div>
              <a
                href="#soon"
                className={`rounded-full px-7 py-3.5 text-sm font-extrabold transition-transform hover:-translate-y-0.5 hover:scale-[1.02] ${c.btn}`}
              >
                Coming Soon — Join the List
              </a>
              <Link
                href="/#programs"
                className="rounded-full border-2 border-white/20 px-7 py-3.5 text-sm font-extrabold text-white/80 transition-all hover:bg-white/5"
              >
                All Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-14 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-cyan">
            <CheckCircle2 className="h-4 w-4" />
            LEARNING OUTCOMES
          </div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            What students walk away knowing
          </h2>
        </motion.div>
        <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {program.learningOutcomes.map((outcome, i) => (
            <motion.div
              key={outcome}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-navy-2/40 p-4"
            >
              <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${c.text}`} />
              <p className="text-sm leading-relaxed text-ink-soft">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-14 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-yellow">
            <Wrench className="h-4 w-4" />
            PROJECTS
          </div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            What students actually build
          </h2>
        </motion.div>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {program.projects.map((project, i) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border-[1.5px] ${c.border} bg-navy-2/60 p-5`}
            >
              <span className={`font-display text-2xl font-bold ${c.text}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-14 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-[#FF8FA3]">
            <CalendarDays className="h-4 w-4" />
            WEEKLY STRUCTURE
          </div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            How a week of class flows
          </h2>
        </motion.div>
        <div className="mt-7 flex flex-col gap-3">
          {program.weeklyStructure.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-2/40 p-4"
            >
              <span className={`flex h-10 w-16 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${c.bgSoft} ${c.text}`}>
                {day.day}
              </span>
              <p className="text-sm text-ink-soft">{day.focus}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="soon" className="mx-auto max-w-[900px] px-4 pb-20 pt-4 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-purple/50 bg-gradient-to-br from-purple/30 via-navy-2/85 to-cyan/[0.15] px-6 py-12 shadow-glow-purple-lg sm:py-16"
        >
          <h2 className="font-display text-[clamp(26px,4vw,40px)] font-bold">
            {program.name} is <span className="text-yellow">coming soon</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-ink-soft">
            Join the waitlist to get priority enrollment and founding-family
            pricing when doors open in Jordan Ranch / Fulshear, TX.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/#soon"
              className="rounded-full bg-gradient-to-br from-yellow to-orange px-7 py-3.5 text-sm font-extrabold text-[#3A2400] shadow-glow-yellow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/#programs"
              className="rounded-full border-2 border-white/20 px-7 py-3.5 text-sm font-extrabold text-white/80 transition-all hover:bg-white/5"
            >
              Compare All Tracks
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
