import { CheckCircle2, Lock, PlayCircle } from "lucide-react";
import { PortalCard, SectionHeading, ProgressBar, Pill } from "../ui";

const modules = [
  {
    title: "Prompt Engineering Basics",
    description: "Learn to write clear, effective prompts for AI tools.",
    status: "done",
    lessons: 4,
  },
  {
    title: "Personal Website Build",
    description: "Design and publish a personal site from scratch.",
    status: "done",
    lessons: 5,
  },
  {
    title: "AI Art & Quiz Games",
    description: "Generate art with AI and wire it into a playable quiz.",
    status: "current",
    lessons: 6,
  },
  {
    title: "Automations 101",
    description: "Build a simple automation that saves real time.",
    status: "locked",
    lessons: 4,
  },
  {
    title: "Capstone Showcase",
    description: "Combine everything into one final shipped project.",
    status: "locked",
    lessons: 3,
  },
];

const statusStyles = {
  done: { icon: CheckCircle2, iconClass: "text-cyan", pill: "bg-cyan/10 text-cyan", label: "COMPLETE" },
  current: { icon: PlayCircle, iconClass: "text-yellow", pill: "bg-yellow/10 text-yellow", label: "IN PROGRESS" },
  locked: { icon: Lock, iconClass: "text-ink-mute", pill: "bg-white/5 text-ink-mute", label: "LOCKED" },
} as const;

export default function LearningPath() {
  const completed = modules.filter((m) => m.status === "done").length;
  const overallProgress = Math.round((completed / modules.length) * 100);

  return (
    <div>
      <SectionHeading
        kicker="MY LEARNING PATH"
        title="AI Builders Track"
        description="Your personalized roadmap — unlock the next module by finishing the one before it."
        accentClass="text-yellow"
      />

      <PortalCard className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-bold text-white">Overall progress</span>
          <span className="font-bold text-ink-mute">{overallProgress}%</span>
        </div>
        <ProgressBar value={overallProgress} className="from-yellow to-orange" />
      </PortalCard>

      <div className="flex flex-col gap-4">
        {modules.map((module, i) => {
          const s = statusStyles[module.status as keyof typeof statusStyles];
          const Icon = s.icon;
          return (
            <PortalCard key={module.title} className="flex items-start gap-4">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 ${s.iconClass}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-ink-mute">Module {i + 1}</span>
                  <Pill className={s.pill}>{s.label}</Pill>
                </div>
                <h3 className="mt-1 font-display text-base font-bold">{module.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-mute">{module.description}</p>
                <p className="mt-2 text-xs font-bold text-ink-mute">{module.lessons} lessons</p>
              </div>
            </PortalCard>
          );
        })}
      </div>
    </div>
  );
}
