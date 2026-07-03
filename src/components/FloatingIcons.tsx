"use client";

import { motion } from "framer-motion";
import { Gamepad2, Globe, MessageSquareText, Code2, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FloatingIcon {
  icon: LucideIcon;
  label: string;
  color: string;
  glow: string;
  position: string;
  delay: number;
}

const icons: FloatingIcon[] = [
  {
    icon: Gamepad2,
    label: "Games",
    color: "border-cyan text-cyan",
    glow: "shadow-[0_0_22px_rgba(0,229,255,0.3)]",
    position: "left-0 top-[8%] sm:left-[2%]",
    delay: 0,
  },
  {
    icon: Globe,
    label: "Websites",
    color: "border-yellow text-yellow",
    glow: "shadow-[0_0_22px_rgba(255,214,10,0.3)]",
    position: "right-[-2%] top-[26%]",
    delay: 1.1,
  },
  {
    icon: Sparkles,
    label: "Apps",
    color: "border-orange text-orange",
    glow: "shadow-[0_0_22px_rgba(255,138,0,0.3)]",
    position: "left-[-4%] top-[48%] sm:left-0",
    delay: 1.6,
  },
  {
    icon: MessageSquareText,
    label: "AI Chatbots",
    color: "border-purple text-[#D9C8FF]",
    glow: "shadow-[0_0_22px_rgba(123,47,247,0.4)]",
    position: "right-[4%] bottom-[16%]",
    delay: 0.6,
  },
  {
    icon: Code2,
    label: "Coding",
    color: "border-red text-[#FF8FA3]",
    glow: "shadow-[0_0_22px_rgba(255,59,92,0.3)]",
    position: "left-[6%] bottom-[2%] sm:left-[10%]",
    delay: 2,
  },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3]" aria-hidden="true">
      {icons.map(({ icon: Icon, label, color, glow, position, delay }) => (
        <motion.div
          key={label}
          className={`absolute flex items-center gap-2 rounded-2xl border bg-navy-2/60 px-3.5 py-2 text-xs font-extrabold backdrop-blur-sm sm:px-4 sm:text-sm ${color} ${glow} ${position}`}
          animate={{ y: [0, -12, 0], rotate: [-1, 1.5, -1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon className="h-4 w-4 shrink-0" />
          {label}
        </motion.div>
      ))}
    </div>
  );
}
