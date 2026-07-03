import { Clock, MapPin, Users } from "lucide-react";
import { PortalCard, SectionHeading, Pill } from "../ui";

const classes = [
  {
    time: "9:00 – 10:00 AM",
    name: "AI Explorers — Morning Cohort",
    ageRange: "Ages 6–8",
    room: "Room A",
    roster: 14,
    status: "upcoming",
  },
  {
    time: "10:30 – 12:00 PM",
    name: "AI Builders — Cohort B",
    ageRange: "Ages 9–12",
    room: "Online",
    roster: 16,
    status: "upcoming",
  },
  {
    time: "1:00 – 2:30 PM",
    name: "AI Innovators — Afternoon",
    ageRange: "Ages 13–15",
    room: "Room C",
    roster: 12,
    status: "later",
  },
];

const statusPill = {
  upcoming: "bg-cyan/10 text-cyan",
  later: "bg-white/5 text-ink-mute",
} as const;

export default function TodaysClasses() {
  return (
    <div>
      <SectionHeading
        kicker="TODAY'S CLASSES"
        title="Wednesday, July 2"
        description="Your session lineup for today."
        accentClass="text-cyan"
      />

      <div className="flex flex-col gap-4">
        {classes.map((session) => (
          <PortalCard key={session.name} className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-24 shrink-0 items-center justify-center rounded-xl bg-white/5 text-center text-xs font-extrabold text-ink-soft">
                {session.time}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{session.name}</div>
                <div className="text-xs text-ink-mute">{session.ageRange}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Pill className="flex items-center gap-1.5 bg-white/5 text-ink-mute">
                <MapPin className="h-3 w-3" />
                {session.room}
              </Pill>
              <Pill className="flex items-center gap-1.5 bg-white/5 text-ink-mute">
                <Users className="h-3 w-3" />
                {session.roster} students
              </Pill>
              <Pill className={statusPill[session.status as keyof typeof statusPill]}>
                <Clock className="mr-1 inline h-3 w-3" />
                {session.status === "upcoming" ? "UP NEXT" : "LATER TODAY"}
              </Pill>
              <button
                type="button"
                className="rounded-full bg-gradient-to-br from-yellow to-orange px-4 py-2 text-xs font-extrabold text-[#3A2400] transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Start Class
              </button>
            </div>
          </PortalCard>
        ))}
      </div>
    </div>
  );
}
