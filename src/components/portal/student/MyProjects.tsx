import { Gamepad2, LayoutTemplate, MessageSquareText, Sparkles } from "lucide-react";
import { PortalCard, SectionHeading, ProgressBar, Pill } from "../ui";

const projects = [
  {
    icon: Sparkles,
    title: "Digital Pet Comic",
    type: "AI Art",
    progress: 100,
    updated: "Jun 18, 2026",
    accent: "bg-cyan/10 text-cyan",
    bar: "from-cyan to-purple",
  },
  {
    icon: LayoutTemplate,
    title: "My First Website",
    type: "Website",
    progress: 100,
    updated: "Jun 25, 2026",
    accent: "bg-yellow/10 text-yellow",
    bar: "from-yellow to-orange",
  },
  {
    icon: Gamepad2,
    title: "Quiz Game Builder",
    type: "Game",
    progress: 65,
    updated: "Jul 1, 2026",
    accent: "bg-purple/15 text-[#D9C8FF]",
    bar: "from-purple to-red",
  },
  {
    icon: MessageSquareText,
    title: "Weather Chatbot",
    type: "Chatbot",
    progress: 20,
    updated: "Jul 2, 2026",
    accent: "bg-red/10 text-[#FF8FA3]",
    bar: "from-red to-orange",
  },
];

export default function MyProjects() {
  return (
    <div>
      <SectionHeading
        kicker="MY PROJECTS"
        title="Everything you've built"
        description="Revisit past projects or pick up where you left off."
        accentClass="text-purple"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <PortalCard key={project.title}>
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${project.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <Pill className="bg-white/5 text-ink-mute">{project.type}</Pill>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{project.title}</h3>
              <p className="mt-1 text-xs font-bold text-ink-mute">Last updated {project.updated}</p>
              <div className="mt-3">
                <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-ink-mute">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <ProgressBar value={project.progress} className={project.bar} />
              </div>
            </PortalCard>
          );
        })}
      </div>
    </div>
  );
}
