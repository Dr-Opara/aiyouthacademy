"use client";

import { useState } from "react";
import { ChevronDown, NotebookPen } from "lucide-react";
import { PortalCard, SectionHeading, Pill } from "../ui";

const plans = [
  {
    week: "Week 5",
    track: "AI Builders",
    title: "AI Art & Quiz Games",
    objectives: ["Generate consistent AI art for a theme", "Wire art assets into a playable quiz"],
    materials: ["Laptops", "AI image tool access", "Quiz template starter file"],
    activities: ["Warm-up: prompt battle (10 min)", "Guided build (40 min)", "Peer playtesting (10 min)"],
  },
  {
    week: "Week 3",
    track: "AI Explorers",
    title: "Digital Pets & Superheroes",
    objectives: ["Describe a character with adjectives", "Use AI to illustrate a character"],
    materials: ["Tablets", "Printed character sheets"],
    activities: ["Story circle (10 min)", "Character creation (30 min)", "Show & tell (15 min)"],
  },
  {
    week: "Week 6",
    track: "AI Innovators",
    title: "Designing a Chatbot Flow",
    objectives: ["Map a conversation flow on paper", "Configure a basic chatbot persona"],
    materials: ["Laptops", "Flowchart worksheets"],
    activities: ["Flow mapping (20 min)", "Chatbot build (35 min)", "Test with a partner (15 min)"],
  },
];

export default function LessonPlans() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <SectionHeading
        kicker="LESSON PLANS"
        title="Upcoming lesson plans"
        description="Expand a plan to see objectives, materials, and activity timing."
        accentClass="text-red"
      />

      <div className="flex flex-col gap-4">
        {plans.map((plan, i) => {
          const isOpen = openIndex === i;
          return (
            <PortalCard key={plan.title} className="p-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red/10 text-[#FF8FA3]">
                    <NotebookPen className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Pill className="bg-white/5 text-ink-mute">{plan.week}</Pill>
                      <Pill className="bg-white/5 text-ink-mute">{plan.track}</Pill>
                    </div>
                    <div className="mt-1 font-display text-base font-bold">{plan.title}</div>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink-mute transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="grid grid-cols-1 gap-6 border-t border-white/10 p-5 sm:grid-cols-3">
                  <div>
                    <h4 className="mb-2 text-xs font-extrabold tracking-wide text-cyan">OBJECTIVES</h4>
                    <ul className="space-y-1.5 text-sm text-ink-soft">
                      {plan.objectives.map((o) => (
                        <li key={o}>• {o}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xs font-extrabold tracking-wide text-yellow">MATERIALS</h4>
                    <ul className="space-y-1.5 text-sm text-ink-soft">
                      {plan.materials.map((m) => (
                        <li key={m}>• {m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xs font-extrabold tracking-wide text-[#D9C8FF]">ACTIVITIES</h4>
                    <ul className="space-y-1.5 text-sm text-ink-soft">
                      {plan.activities.map((a) => (
                        <li key={a}>• {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </PortalCard>
          );
        })}
      </div>
    </div>
  );
}
