"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { programs, colorClasses } from "@/lib/programs";

export default function ProgramOptions() {
  return (
    <section className="relative z-[1] mx-auto max-w-[1280px] px-4 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3.5 text-xs font-extrabold tracking-[3px] text-purple">
          PROGRAM OPTIONS
        </p>
        <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.05]">
          Pick a track. <span className="text-yellow">See what&apos;s inside.</span>
        </h2>
        <p className="mt-3.5 max-w-[640px] text-[clamp(15px,1.5vw,18px)] leading-relaxed text-ink-soft">
          Weekly pricing, age range, and a preview of what each track covers
          — pick the level that matches your child today.
        </p>
      </motion.div>

      <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, i) => {
          const c = colorClasses[program.color];
          return (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`flex flex-col gap-3 rounded-[22px] border-[1.5px] ${c.border} bg-navy-2/70 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.01] ${c.glow}`}
            >
              <span className={`self-start rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[2px] ${c.bgSoft} ${c.text}`}>
                {program.level.toUpperCase()} · {program.ageRange.toUpperCase()}
              </span>
              <h3 className="font-display text-[23px] font-bold">{program.name}</h3>
              <ul className="flex flex-col gap-1.5">
                {program.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${c.text}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-baseline gap-1.5 pt-2">
                <span className={`font-display text-[34px] font-bold ${c.text}`}>${program.price}</span>
                <span className="text-[13px] font-bold text-ink-mute">/week</span>
              </div>
              <Link
                href={`/programs/${program.slug}`}
                className={`mt-1 rounded-full px-0 py-2.5 text-center text-sm font-extrabold transition-all hover:brightness-110 ${c.btn}`}
              >
                View Track & Coming Soon
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
