import { Users, CalendarClock, CheckCircle2, FileCheck2 } from "lucide-react";
import { PortalCard, SectionHeading, StatTile, Pill } from "../ui";

const stats = [
  { icon: Users, label: "Active Students", value: "58", accentClass: "bg-cyan/10 text-cyan" },
  { icon: CalendarClock, label: "Classes Today", value: "3", accentClass: "bg-yellow/10 text-yellow" },
  { icon: CheckCircle2, label: "Avg. Attendance", value: "94%", accentClass: "bg-purple/15 text-[#D9C8FF]" },
  { icon: FileCheck2, label: "Pending Reviews", value: "6", accentClass: "bg-red/10 text-[#FF8FA3]" },
];

const activity = [
  { text: "Ava T. submitted \"Weather Chatbot\" for review", time: "12 min ago" },
  { text: "Attendance logged for AI Explorers — Morning Cohort", time: "1 hr ago" },
  { text: "Noah K. earned the \"Site Shipped\" badge", time: "3 hrs ago" },
  { text: "New lesson plan published: Automations 101", time: "Yesterday" },
];

export default function Overview() {
  return (
    <div>
      <SectionHeading
        kicker="OVERVIEW"
        title="Good morning, Coach Daniels"
        description="Here's what's happening across your classes today."
        accentClass="text-purple"
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <StatTile key={s.label} {...s} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <PortalCard className="lg:col-span-2">
          <h3 className="mb-4 font-display text-base font-bold">Recent Activity</h3>
          <div className="flex flex-col gap-4">
            {activity.map((item) => (
              <div key={item.text} className="flex items-start justify-between gap-4 text-sm">
                <span className="text-ink-soft">{item.text}</span>
                <span className="shrink-0 text-xs font-bold text-ink-mute">{item.time}</span>
              </div>
            ))}
          </div>
        </PortalCard>

        <PortalCard borderClassName="border-yellow/40" className="bg-gradient-to-br from-yellow/15 to-navy-2/60">
          <Pill className="bg-yellow/10 text-yellow">NEXT CLASS</Pill>
          <h3 className="mt-3 font-display text-lg font-bold">AI Explorers — Morning Cohort</h3>
          <p className="mt-1.5 text-sm text-ink-soft">Today · 9:00 – 10:00 AM · Room A</p>
          <p className="mt-3 text-xs font-bold text-ink-mute">14 students enrolled</p>
        </PortalCard>
      </div>
    </div>
  );
}
