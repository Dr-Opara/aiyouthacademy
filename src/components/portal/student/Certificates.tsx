import { Award, Lock, Download } from "lucide-react";
import { PortalCard, SectionHeading, Pill } from "../ui";

const certificates = [
  {
    title: "AI Explorers — Level 1",
    earned: true,
    date: "Dec 12, 2025",
    gradient: "from-cyan/30 to-navy-2/70",
    border: "border-cyan/40",
    icon: "text-cyan",
  },
  {
    title: "Prompt Engineering Basics",
    earned: true,
    date: "Feb 8, 2026",
    gradient: "from-yellow/25 to-navy-2/70",
    border: "border-yellow/40",
    icon: "text-yellow",
  },
  {
    title: "AI Builders — Level 2",
    earned: false,
    requirement: "Finish all 5 modules in your current track",
    gradient: "from-white/5 to-navy-2/70",
    border: "border-white/10",
    icon: "text-ink-mute",
  },
  {
    title: "AI Innovators — Level 3",
    earned: false,
    requirement: "Unlocks after completing AI Builders",
    gradient: "from-white/5 to-navy-2/70",
    border: "border-white/10",
    icon: "text-ink-mute",
  },
];

export default function Certificates() {
  return (
    <div>
      <SectionHeading
        kicker="CERTIFICATES"
        title="Your achievements"
        description="Certificates unlock as you complete each track. Founding families receive printed copies too."
        accentClass="text-cyan"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certificates.map((cert) => (
          <PortalCard
            key={cert.title}
            borderClassName={cert.border}
            className={`bg-gradient-to-br ${cert.gradient}`}
          >
            <div className="flex items-start justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${cert.icon}`}>
                {cert.earned ? <Award className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
              </div>
              {cert.earned ? (
                <Pill className="bg-cyan/10 text-cyan">EARNED</Pill>
              ) : (
                <Pill className="bg-white/5 text-ink-mute">LOCKED</Pill>
              )}
            </div>
            <h3 className="mt-4 font-display text-base font-bold">{cert.title}</h3>
            {cert.earned ? (
              <>
                <p className="mt-1 text-xs font-bold text-ink-mute">Issued {cert.date}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold text-white transition-colors hover:bg-white/20"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </button>
              </>
            ) : (
              <p className="mt-1 text-xs leading-relaxed text-ink-mute">{cert.requirement}</p>
            )}
          </PortalCard>
        ))}
      </div>
    </div>
  );
}
