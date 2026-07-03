"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-56 w-56 animate-pulse rounded-full border border-cyan/20 sm:h-72 sm:w-72" />
    </div>
  ),
});

const FloatingIcons = dynamic(() => import("./FloatingIcons"), { ssr: false });

const marqueeWords = [
  { text: "CREATE", classes: "bg-cyan text-[#052A33]" },
  { text: "BUILD", classes: "bg-yellow text-[#4A3A00]" },
  { text: "INNOVATE", classes: "bg-red text-white" },
  { text: "GAMES", classes: "bg-purple text-white" },
  { text: "APPS", classes: "bg-orange text-[#3A2000]" },
  { text: "STARTUPS", classes: "bg-white text-[#0A0E2E]" },
];

export default function HeroSection() {
  return (
    <header id="top" className="relative z-[1] bg-aurora-gradient">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-6 px-4 pb-10 pt-10 sm:px-8 md:min-h-[88vh] md:grid-cols-[1.1fr_0.9fr] md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan px-4 py-2 text-xs font-extrabold tracking-[2px] text-cyan shadow-[inset_0_0_20px_rgba(0,229,255,0.2)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
            COMING SOON · JORDAN RANCH / FULSHEAR, TX
          </span>

          <h1 className="mt-5 font-display text-[clamp(46px,8.4vw,104px)] font-bold leading-[0.95]">
            <span className="block text-cyan [text-shadow:0_0_34px_rgba(0,229,255,0.55)]">
              Create.
            </span>
            <span className="block text-yellow [text-shadow:0_0_34px_rgba(255,214,10,0.5)]">
              Build.
            </span>
            <span className="block text-red [text-shadow:0_0_34px_rgba(255,59,92,0.55)]">
              Innovate.
            </span>
          </h1>

          <p className="mt-2 font-display text-[clamp(19px,2.4vw,27px)] font-medium text-white">
            Learn AI.{" "}
            <span className="bg-gradient-to-r from-cyan via-purple to-red bg-clip-text font-bold text-transparent">
              Create the future.
            </span>
          </p>

          <p className="mx-auto mt-2 max-w-[520px] text-[clamp(15px,1.6vw,18px)] leading-relaxed text-ink-soft md:mx-0">
            Empowering the next generation to become creators, innovators, and
            leaders in the AI world. Kids ages 6–18 build real games, websites,
            apps, stories, and businesses — with AI as their superpower.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3.5 md:justify-start">
            <a
              href="#soon"
              className="rounded-full bg-gradient-to-br from-yellow to-orange px-7 py-3.5 text-sm font-extrabold text-[#3A2400] shadow-glow-yellow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Coming Soon — Join the List
            </a>
            <a
              href="#programs"
              className="rounded-full border-2 border-purple bg-purple/10 px-7 py-3.5 text-sm font-extrabold text-[#D9C8FF] transition-all hover:-translate-y-0.5 hover:bg-purple/20"
            >
              Explore Programs
            </a>
          </div>

          <p className="mt-4 text-[13px] font-bold text-ink-mute">
            Project-based · Small groups ·{" "}
            <span className="text-yellow">AI safety built into every lesson</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[360px] items-center justify-center md:min-h-[420px]"
        >
          <div className="pointer-events-none absolute bottom-8 h-14 w-72 animate-pad-pulse rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.5),rgba(123,47,247,0.25)_55%,transparent_72%)] blur-sm" />
          <div className="relative z-[2] h-full w-full">
            <Hero3D />
          </div>
          <FloatingIcons />
        </motion.div>
      </div>

      <div
        className="relative z-[1] overflow-hidden whitespace-nowrap border-y border-white/10 bg-navy-2/40"
        aria-hidden="true"
      >
        <div className="inline-flex animate-marquee">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={`${word.text}-${i}`}
              className={`inline-flex items-center justify-center px-8 py-4 font-display text-xl font-bold tracking-[3px] ${word.classes}`}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
