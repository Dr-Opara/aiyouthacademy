"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs, colorClasses } from "@/lib/programs";

export default function ProgramTracks() {
  return (
    <section id="programs" className="relative z-[1] mx-auto max-w-[1280px] px-4 pt-16 sm:px-8 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3.5 text-xs font-extrabold tracking-[3px] text-yellow">
          CHOOSE YOUR PATH
        </p>
        <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.05]">
          Four levels. <span className="text-cyan">One universe.</span>
        </h2>
        <p className="mt-3.5 max-w-[640px] text-[clamp(15px,1.5vw,18px)] leading-relaxed text-ink-soft">
          Every track is age-tuned and project-based. Students level up as
          they grow — from first stories at six to shipped products at
          eighteen.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, i) => {
          const c = colorClasses[program.color];
          return (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/programs/${program.slug}`}
                className={`group flex h-full flex-col gap-2 rounded-2xl border ${c.borderSoft} bg-navy-2/50 p-5 transition-all hover:-translate-y-1 ${c.hoverBorder}`}
              >
                <span className={`self-start rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[2px] ${c.bgSoft} ${c.text}`}>
                  {program.level.toUpperCase()} · {program.ageRange.toUpperCase()}
                </span>
                <h3 className="font-display text-lg font-bold">{program.name}</h3>
                <p className="text-sm leading-relaxed text-ink-mute">{program.tagline}</p>
                <span className={`mt-2 inline-flex items-center gap-1 text-sm font-bold ${c.text}`}>
                  View track
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
