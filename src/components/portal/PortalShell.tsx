"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import StarField from "@/components/StarField";
import { Avatar } from "./ui";

export interface PortalSection {
  id: string;
  label: string;
  icon: LucideIcon;
  content: ReactNode;
}

export default function PortalShell({
  portalLabel,
  userName,
  userMeta,
  userInitials,
  accentClass,
  sections,
}: {
  portalLabel: string;
  userName: string;
  userMeta: string;
  userInitials: string;
  accentClass: string;
  sections: PortalSection[];
}) {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  const navList = (
    <nav className="flex flex-1 flex-col gap-1">
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = section.id === activeId;
        return (
          <button
            key={section.id}
            onClick={() => {
              setActiveId(section.id);
              setDrawerOpen(false);
            }}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm font-bold transition-colors ${
              isActive
                ? `${accentClass} bg-white/[0.06]`
                : "text-ink-mute hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            <Icon className="h-[18px] w-[18px] shrink-0" />
            {section.label}
          </button>
        );
      })}
    </nav>
  );

  const sidebarInner = (
    <>
      <Link href="/" className="mb-8 flex items-center gap-2.5">
        <span className="rounded-[10px] bg-gradient-to-br from-purple to-[#A855F7] px-2.5 py-1.5 font-display text-sm font-bold text-white shadow-[0_0_18px_rgba(123,47,247,0.55)]">
          AI4
        </span>
        <span className="font-display text-sm font-bold tracking-[0.2em] text-white">
          YOUTH ACADEMY
        </span>
      </Link>

      <span className={`mb-6 inline-flex w-fit items-center rounded-full border border-white/15 px-3 py-1 text-[11px] font-extrabold tracking-[2px] ${accentClass}`}>
        {portalLabel}
      </span>

      {navList}

      <div className="mt-auto flex flex-col gap-4 pt-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-bold text-ink-mute transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to homepage
        </Link>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy/50 p-3">
          <Avatar initials={userInitials} />
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-white">{userName}</div>
            <div className="truncate text-[11px] text-ink-mute">{userMeta}</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative flex min-h-screen bg-navy">
      <StarField />

      <aside className="relative z-[1] hidden w-64 shrink-0 flex-col border-r border-white/10 bg-navy-2/40 p-5 md:flex">
        {sidebarInner}
      </aside>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/10 bg-navy p-5 md:hidden"
            >
              {sidebarInner}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-[1] flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-white/10 bg-navy-2/30 px-4 py-3.5 sm:px-8">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-xl glass text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
          <h2 className="font-display text-base font-bold sm:text-lg">{active.label}</h2>
        </header>

        <main className="flex-1 p-4 sm:p-8">{active.content}</main>
      </div>
    </div>
  );
}
