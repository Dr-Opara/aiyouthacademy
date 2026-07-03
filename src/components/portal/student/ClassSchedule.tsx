import { CalendarDays, MapPin, Video } from "lucide-react";
import { PortalCard, SectionHeading, Pill } from "../ui";

const schedule = [
  {
    day: "Saturday",
    date: "Jul 4",
    time: "10:00 – 11:30 AM",
    className: "AI Builders — Cohort B",
    mode: "Online",
    instructor: "Coach Daniels",
    next: true,
  },
  {
    day: "Saturday",
    date: "Jul 11",
    time: "10:00 – 11:30 AM",
    className: "AI Builders — Cohort B",
    mode: "Online",
    instructor: "Coach Daniels",
  },
  {
    day: "Saturday",
    date: "Jul 18",
    time: "10:00 – 11:30 AM",
    className: "AI Builders — Showcase Day",
    mode: "In-Person · Jordan Ranch",
    instructor: "Coach Daniels",
  },
  {
    day: "Saturday",
    date: "Jul 25",
    time: "10:00 – 11:30 AM",
    className: "AI Builders — Cohort B",
    mode: "Online",
    instructor: "Coach Daniels",
  },
];

export default function ClassSchedule() {
  return (
    <div>
      <SectionHeading
        kicker="CLASS SCHEDULE"
        title="Upcoming sessions"
        description="Your weekly class time and format at a glance."
        accentClass="text-yellow"
      />

      <div className="flex flex-col gap-4">
        {schedule.map((session) => (
          <PortalCard
            key={session.date}
            borderClassName={session.next ? "border-cyan/40" : "border-white/10"}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-14 flex-col items-center justify-center rounded-xl bg-white/5">
                <CalendarDays className="h-4 w-4 text-cyan" />
                <span className="mt-1 text-[11px] font-extrabold text-ink-mute">{session.date}</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">{session.className}</div>
                <div className="text-xs text-ink-mute">
                  {session.day} · {session.time} · {session.instructor}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Pill className="flex items-center gap-1.5 bg-white/5 text-ink-mute">
                {session.mode.startsWith("Online") ? (
                  <Video className="h-3 w-3" />
                ) : (
                  <MapPin className="h-3 w-3" />
                )}
                {session.mode}
              </Pill>
              {session.next && <Pill className="bg-cyan/10 text-cyan">NEXT UP</Pill>}
            </div>
          </PortalCard>
        ))}
      </div>
    </div>
  );
}
