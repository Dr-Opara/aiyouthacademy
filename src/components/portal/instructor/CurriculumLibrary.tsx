import { BookOpen, Layers } from "lucide-react";
import { PortalCard, SectionHeading, Pill } from "../ui";

const library = [
  { track: "AI Explorers", ageRange: "Ages 6–8", modules: 5, color: "bg-cyan/10 text-cyan" },
  { track: "AI Builders", ageRange: "Ages 9–12", modules: 5, color: "bg-yellow/10 text-yellow" },
  { track: "AI Innovators", ageRange: "Ages 13–15", modules: 6, color: "bg-purple/15 text-[#D9C8FF]" },
  { track: "AI Future Leaders", ageRange: "Ages 16–18", modules: 6, color: "bg-red/10 text-[#FF8FA3]" },
];

export default function CurriculumLibrary() {
  return (
    <div>
      <SectionHeading
        kicker="CURRICULUM LIBRARY"
        title="Track curricula"
        description="Reference materials and module outlines for every track you teach."
        accentClass="text-cyan"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {library.map((item) => (
          <PortalCard key={item.track}>
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{item.track}</h3>
            <p className="mt-1 text-xs font-bold text-ink-mute">{item.ageRange}</p>
            <div className="mt-4 flex items-center justify-between">
              <Pill className="flex items-center gap-1.5 bg-white/5 text-ink-mute">
                <Layers className="h-3 w-3" />
                {item.modules} modules
              </Pill>
              <button
                type="button"
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold text-white transition-colors hover:bg-white/20"
              >
                View Curriculum
              </button>
            </div>
          </PortalCard>
        ))}
      </div>
    </div>
  );
}
