"use client";

import { useState } from "react";
import { PortalCard, SectionHeading, Avatar, Pill } from "../ui";

type Status = "present" | "absent" | "late";

interface Student {
  id: string;
  name: string;
  initials: string;
  status: Status;
}

const initialRoster: Student[] = [
  { id: "1", name: "Ava T.", initials: "AT", status: "present" },
  { id: "2", name: "Jordan P.", initials: "JP", status: "present" },
  { id: "3", name: "Maya R.", initials: "MR", status: "present" },
  { id: "4", name: "Noah K.", initials: "NK", status: "late" },
  { id: "5", name: "Ella S.", initials: "ES", status: "present" },
  { id: "6", name: "Liam B.", initials: "LB", status: "absent" },
  { id: "7", name: "Zoe H.", initials: "ZH", status: "present" },
];

const statusStyles: Record<Status, string> = {
  present: "bg-cyan/10 text-cyan",
  late: "bg-yellow/10 text-yellow",
  absent: "bg-red/10 text-[#FF8FA3]",
};

const statusOptions: { value: Status; label: string }[] = [
  { value: "present", label: "Present" },
  { value: "late", label: "Late" },
  { value: "absent", label: "Absent" },
];

export default function Attendance() {
  const [roster, setRoster] = useState(initialRoster);

  const presentCount = roster.filter((s) => s.status === "present").length;

  function setStatus(id: string, status: Status) {
    setRoster((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  }

  return (
    <div>
      <SectionHeading
        kicker="ATTENDANCE TRACKER"
        title="AI Builders — Cohort B"
        description="Tap a status to update attendance. Changes are local to this session only (no backend yet)."
        accentClass="text-yellow"
      />

      <PortalCard className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-bold text-white">
          {presentCount} / {roster.length} present
        </span>
        <Pill className="bg-white/5 text-ink-mute">Wed, Jul 2 · 10:30 AM</Pill>
      </PortalCard>

      <div className="flex flex-col gap-3">
        {roster.map((student) => (
          <PortalCard key={student.id} className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar initials={student.initials} />
              <span className="text-sm font-bold text-white">{student.name}</span>
            </div>

            <div className="flex items-center gap-2">
              {statusOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setStatus(student.id, opt.value)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-colors ${
                    student.status === opt.value
                      ? statusStyles[opt.value]
                      : "bg-white/[0.03] text-ink-mute hover:bg-white/[0.08]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </PortalCard>
        ))}
      </div>
    </div>
  );
}
