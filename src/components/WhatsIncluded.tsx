"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Hammer, Award, Presentation, LayoutDashboard } from "lucide-react";

const included = [
  {
    icon: ShieldCheck,
    title: "AI safety curriculum",
    description: "Every lesson teaches responsible, age-appropriate use of AI tools alongside the skills.",
  },
  {
    icon: Users,
    title: "Small groups",
    description: "Low student-to-mentor ratios so every kid gets real feedback, every session.",
  },
  {
    icon: Hammer,
    title: "Project-based learning",
    description: "No worksheets — students build something real to show for every week of class.",
  },
  {
    icon: Award,
    title: "Certified mentors",
    description: "Instructors trained in both AI tooling and working with young builders.",
  },
  {
    icon: Presentation,
    title: "Showcase days",
    description: "Regular demo days where students present their projects to family and peers.",
  },
  {
    icon: LayoutDashboard,
    title: "Student portal access",
    description: "Track progress, revisit projects, and unlock badges as skills level up.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="relative z-[1] mx-auto max-w-[1280px] px-4 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3.5 text-xs font-extrabold tracking-[3px] text-red">
          WHAT&apos;S INCLUDED
        </p>
        <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.05]">
          Every track, <span className="text-cyan">same foundation.</span>
        </h2>
        <p className="mt-3.5 max-w-[640px] text-[clamp(15px,1.5vw,18px)] leading-relaxed text-ink-soft">
          Regardless of level, every AI4 Youth Academy program shares the same
          safety standards, teaching quality, and hands-on structure.
        </p>
      </motion.div>

      <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {included.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-2/40 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-mute">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
