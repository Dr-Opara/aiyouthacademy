"use client";

import { motion } from "framer-motion";
import { Gamepad2, LayoutTemplate, MessageSquareText, Rocket } from "lucide-react";

const builds = [
  {
    icon: Gamepad2,
    title: "Games & interactive stories",
    description:
      "From digital pets and comic heroes to full quiz games — imagination becomes something you can play.",
    accent: "cyan",
  },
  {
    icon: LayoutTemplate,
    title: "Websites & apps",
    description:
      "Personal sites, educational apps, and digital products — designed, built, and shipped by students.",
    accent: "yellow",
  },
  {
    icon: MessageSquareText,
    title: "Chatbots & automations",
    description:
      "Teens design AI assistants and time-saving automations that solve real problems for real people.",
    accent: "purple",
  },
  {
    icon: Rocket,
    title: "Businesses & big ideas",
    description:
      "Pitch decks, brands, and first micro-businesses — young founders launch ideas the world can see.",
    accent: "red",
  },
] as const;

const accentStyles: Record<string, { icon: string; hover: string; ring: string }> = {
  cyan: {
    icon: "text-cyan bg-cyan/10",
    hover: "hover:border-cyan/50",
    ring: "hover:shadow-[0_14px_40px_rgba(0,229,255,0.22)]",
  },
  yellow: {
    icon: "text-yellow bg-yellow/10",
    hover: "hover:border-yellow/50",
    ring: "hover:shadow-[0_14px_40px_rgba(255,214,10,0.2)]",
  },
  purple: {
    icon: "text-[#D9C8FF] bg-purple/15",
    hover: "hover:border-purple/60",
    ring: "hover:shadow-[0_14px_40px_rgba(123,47,247,0.3)]",
  },
  red: {
    icon: "text-[#FF8FA3] bg-red/10",
    hover: "hover:border-red/55",
    ring: "hover:shadow-[0_14px_40px_rgba(255,59,92,0.24)]",
  },
};

export default function WhatStudentsBuild() {
  return (
    <section id="build" className="relative z-[1] mx-auto max-w-[1280px] px-4 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3.5 text-xs font-extrabold tracking-[3px] text-cyan">
          THE CREATION LAB
        </p>
        <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.05]">
          Kids don&apos;t study AI here.
          <br />
          They <span className="text-yellow">build with it.</span>
        </h2>
        <p className="mt-3.5 max-w-[640px] text-[clamp(15px,1.5vw,18px)] leading-relaxed text-ink-soft">
          Every session ends with something real: a game you can play, a
          website you can visit, a story you can read, a bot you can talk to.
          Seventy percent of class time is hands-on building.
        </p>
      </motion.div>

      <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {builds.map((build, i) => {
          const accent = accentStyles[build.accent];
          const Icon = build.icon;
          return (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`rounded-[20px] border border-white/10 bg-gradient-to-br from-card/90 to-navy-2/90 p-6 transition-all duration-300 hover:-translate-y-1.5 ${accent.hover} ${accent.ring}`}
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon}`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-[19px] font-bold">{build.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-mute">
                {build.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
