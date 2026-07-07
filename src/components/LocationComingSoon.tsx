"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tags = ["AI SAFETY CURRICULUM", "SMALL GROUPS", "PROJECT-BASED", "FULSHEAR · KATY · BROOKSHIRE"];

export default function LocationComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="soon" className="relative z-[1] mx-auto max-w-[1280px] px-4 py-16 text-center sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[28px] border border-purple/50 bg-gradient-to-br from-purple/35 via-navy-2/85 to-cyan/[0.18] px-5 py-12 shadow-glow-purple-lg sm:px-10 sm:py-16 md:py-20"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan px-4 py-2 text-xs font-extrabold tracking-[2px] text-cyan">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
          NEW ZONE DISCOVERED
        </span>

        <h2 className="mt-5 font-display text-[clamp(34px,5.4vw,64px)] font-bold leading-[1.05]">
          The AI Youth Academy Universe lands in
          <br />
          <span className="bg-gradient-to-r from-cyan via-yellow to-red bg-clip-text text-transparent">
            Jordan Ranch / Fulshear
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-[640px] text-[clamp(15px,1.5vw,18px)] leading-relaxed text-ink-soft">
          Doors open soon. Founding families get priority class selection,
          locked founding rates, and a free camp day.
        </p>

        {submitted ? (
          <p className="mt-8 font-display text-lg font-bold text-cyan">
            You&apos;re on the list — we&apos;ll be in touch soon!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-wrap justify-center gap-2.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Parent email"
              aria-label="Parent email"
              className="w-[min(320px,80vw)] rounded-full border-[1.5px] border-white/25 bg-navy/70 px-5 py-3.5 text-[15px] text-white placeholder-ink-mute focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/20"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-br from-yellow to-orange px-6 py-3.5 text-sm font-extrabold text-[#3A2400] shadow-glow-yellow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Coming Soon — Notify Me
            </button>
          </form>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-extrabold text-ink-mute"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
