"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#build", label: "What kids build" },
  { href: "/#programs", label: "Programs" },
  { href: "/#soon", label: "Location" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 sm:px-8 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-navy/90 border-b border-purple/40" : "bg-navy/60 border-b border-purple/20"
      }`}
      aria-label="Main"
    >
      <Link href="/#top" className="flex items-center gap-2.5" aria-label="AI Youth Academy home">
        <span className="rounded-[10px] bg-gradient-to-br from-purple to-[#A855F7] px-2.5 py-1.5 font-display text-sm font-bold text-white shadow-[0_0_18px_rgba(123,47,247,0.55)]">
          AI
        </span>
        <span className="font-display text-sm font-bold tracking-[0.2em] text-white">
          YOUTH ACADEMY
        </span>
      </Link>

      <ul className="hidden items-center gap-7 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-bold text-ink-mute transition-colors hover:text-cyan"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#soon"
            className="inline-block rounded-full bg-gradient-to-br from-yellow to-orange px-5 py-2 text-sm font-extrabold text-[#3A2400] shadow-glow-yellow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            Coming Soon
          </Link>
        </li>
      </ul>

      <button
        onClick={() => setMenuOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-white glass md:hidden"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <AnimatePresence mode="wait">
          {menuOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={18} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Menu size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 top-full overflow-hidden border-b border-purple/30 bg-navy/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-ink-soft transition-colors hover:bg-white/5 hover:text-cyan"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#soon"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-xl bg-gradient-to-br from-yellow to-orange px-4 py-3 text-center text-sm font-extrabold text-[#3A2400]"
              >
                Coming Soon
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
