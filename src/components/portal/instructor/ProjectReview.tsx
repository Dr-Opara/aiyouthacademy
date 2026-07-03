"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw, FileCheck2 } from "lucide-react";
import { Avatar, PortalCard, SectionHeading, Pill } from "../ui";

type ReviewStatus = "pending" | "approved" | "needs-work";

interface Submission {
  id: string;
  student: string;
  initials: string;
  project: string;
  track: string;
  submitted: string;
  status: ReviewStatus;
}

const initialSubmissions: Submission[] = [
  { id: "1", student: "Ava T.", initials: "AT", project: "Weather Chatbot", track: "AI Builders", submitted: "12 min ago", status: "pending" },
  { id: "2", student: "Jordan P.", initials: "JP", project: "Personal Portfolio Site", track: "AI Innovators", submitted: "1 hr ago", status: "pending" },
  { id: "3", student: "Noah K.", initials: "NK", project: "Digital Pet Comic", track: "AI Explorers", submitted: "3 hrs ago", status: "approved" },
  { id: "4", student: "Ella S.", initials: "ES", project: "Automation Tool", track: "AI Innovators", submitted: "Yesterday", status: "needs-work" },
  { id: "5", student: "Liam B.", initials: "LB", project: "Quiz Game Builder", track: "AI Builders", submitted: "Yesterday", status: "pending" },
];

const statusPill: Record<ReviewStatus, string> = {
  pending: "bg-yellow/10 text-yellow",
  approved: "bg-cyan/10 text-cyan",
  "needs-work": "bg-red/10 text-[#FF8FA3]",
};

const statusLabel: Record<ReviewStatus, string> = {
  pending: "PENDING REVIEW",
  approved: "APPROVED",
  "needs-work": "NEEDS WORK",
};

export default function ProjectReview() {
  const [submissions, setSubmissions] = useState(initialSubmissions);

  function setStatus(id: string, status: ReviewStatus) {
    setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  }

  const pendingCount = submissions.filter((s) => s.status === "pending").length;

  return (
    <div>
      <SectionHeading
        kicker="PROJECT REVIEW"
        title="Submissions awaiting feedback"
        description={`${pendingCount} project${pendingCount === 1 ? "" : "s"} need your review.`}
        accentClass="text-yellow"
      />

      <div className="flex flex-col gap-4">
        {submissions.map((s) => (
          <PortalCard key={s.id} className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar initials={s.initials} />
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FileCheck2 className="h-3.5 w-3.5 text-ink-mute" />
                  {s.project}
                </div>
                <div className="text-xs text-ink-mute">
                  {s.student} · {s.track} · Submitted {s.submitted}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Pill className={statusPill[s.status]}>{statusLabel[s.status]}</Pill>
              <button
                type="button"
                onClick={() => setStatus(s.id, "approved")}
                className="flex items-center gap-1.5 rounded-full bg-cyan/10 px-3.5 py-1.5 text-xs font-extrabold text-cyan transition-colors hover:bg-cyan/20"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Approve
              </button>
              <button
                type="button"
                onClick={() => setStatus(s.id, "needs-work")}
                className="flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3.5 py-1.5 text-xs font-extrabold text-ink-mute transition-colors hover:bg-white/[0.1]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Needs Work
              </button>
            </div>
          </PortalCard>
        ))}
      </div>
    </div>
  );
}
