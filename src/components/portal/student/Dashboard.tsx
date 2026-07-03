import { FolderKanban, Award, Flame, Clock } from "lucide-react";
import { PortalCard, SectionHeading, StatTile, ProgressBar, Pill } from "../ui";

const stats = [
  { icon: FolderKanban, label: "Projects Built", value: "7", accentClass: "bg-cyan/10 text-cyan" },
  { icon: Award, label: "Badges Earned", value: "5", accentClass: "bg-yellow/10 text-yellow" },
  { icon: Flame, label: "Day Streak", value: "12", accentClass: "bg-red/10 text-[#FF8FA3]" },
  { icon: Clock, label: "Hours Building", value: "34", accentClass: "bg-purple/15 text-[#D9C8FF]" },
];

export default function Dashboard() {
  return (
    <div>
      <SectionHeading
        kicker="WELCOME BACK"
        title="Hey Maya — ready to build?"
        description="Here's a snapshot of your progress across the AI Builders track."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <StatTile key={s.label} {...s} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <PortalCard className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-base font-bold">Current Track Progress</h3>
            <Pill className="bg-yellow/10 text-yellow">AI BUILDERS · LEVEL 2</Pill>
          </div>
          <p className="mb-2 text-xs font-bold text-ink-mute">Overall completion — 62%</p>
          <ProgressBar value={62} className="from-yellow to-orange" />

          <div className="mt-5 space-y-3">
            {[
              { label: "Prompt Engineering Basics", done: true },
              { label: "Personal Website Build", done: true },
              { label: "AI Art & Quiz Games", done: false, current: true },
              { label: "Capstone Showcase", done: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                    item.done ? "bg-cyan" : item.current ? "animate-pulse bg-yellow" : "bg-white/15"
                  }`}
                />
                <span className={item.done ? "text-ink-mute line-through" : "text-ink-soft"}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </PortalCard>

        <PortalCard
          borderClassName="border-purple/40"
          className="bg-gradient-to-br from-purple/20 to-navy-2/60"
        >
          <Pill className="bg-purple/20 text-[#D9C8FF]">AI CHALLENGE OF THE WEEK</Pill>
          <h3 className="mt-3 font-display text-lg font-bold">Build a Weather Chatbot</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            Design a chatbot that gives friendly weather advice for any city.
            Ends in 3 days.
          </p>
          <div className="mt-4 text-xs font-bold text-ink-mute">42 students competing</div>
        </PortalCard>
      </div>

      <PortalCard className="mt-5">
        <h3 className="mb-3 font-display text-base font-bold">Next Class</h3>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-sm font-bold text-white">AI Builders — Saturday Cohort</div>
            <div className="text-xs text-ink-mute">Sat, Jul 4 · 10:00 AM – 11:30 AM · Room B (Online)</div>
          </div>
          <Pill className="bg-cyan/10 text-cyan">STARTS IN 2 DAYS</Pill>
        </div>
      </PortalCard>
    </div>
  );
}
