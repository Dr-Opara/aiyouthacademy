export type ProgramColor = "cyan" | "yellow" | "purple" | "red";

export interface Program {
  slug: string;
  level: string;
  name: string;
  ageRange: string;
  color: ProgramColor;
  tagline: string;
  description: string;
  price: number;
  highlights: string[];
  learningOutcomes: string[];
  projects: string[];
  weeklyStructure: { day: string; focus: string }[];
}

export const programs: Program[] = [
  {
    slug: "ai-explorers",
    level: "Level 1",
    name: "AI Explorers",
    ageRange: "Ages 6–8",
    color: "cyan",
    tagline: "First steps into AI-powered imagination.",
    description:
      "Young explorers turn stories, pets, and superheroes into their first AI creations — building confidence, logical thinking, and a love of creating with technology.",
    price: 149,
    highlights: [
      "AI storybooks & comics",
      "Digital pets & superheroes",
      "Imagination & logical thinking",
    ],
    learningOutcomes: [
      "Understand what AI is and how it can help tell stories",
      "Practice sequencing and logical thinking through guided projects",
      "Build confidence sharing creative work with a group",
      "Learn early digital citizenship and AI safety basics",
    ],
    projects: [
      "An illustrated AI storybook starring a character they design",
      "A digital pet with a name, personality, and backstory",
      "A comic strip mini-adventure built with AI art tools",
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Story spark — imagine & plan the week's character" },
      { day: "Day 2", focus: "Build — create with kid-safe AI tools" },
      { day: "Day 3", focus: "Design — add art, voice, and details" },
      { day: "Day 4", focus: "Polish & rehearse show-and-tell" },
      { day: "Day 5", focus: "Showcase — share creations with the group" },
    ],
  },
  {
    slug: "ai-builders",
    level: "Level 2",
    name: "AI Builders",
    ageRange: "Ages 9–12",
    color: "yellow",
    tagline: "From ideas to interactive projects.",
    description:
      "Builders move from imagination to construction — designing quiz games, AI art, and their first personal websites while learning the basics of prompting and code.",
    price: 179,
    highlights: [
      "Quiz games & AI art",
      "Personal websites",
      "Prompt engineering & first code",
    ],
    learningOutcomes: [
      "Write effective prompts to guide AI tools toward a goal",
      "Understand the building blocks of a website: layout, text, images",
      "Design and publish an interactive quiz game",
      "Debug simple logic and iterate on feedback",
    ],
    projects: [
      "A personal website introducing themselves and their interests",
      "An AI-illustrated art gallery with a consistent theme",
      "A playable trivia or quiz game built from scratch",
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Plan — sketch the project and success criteria" },
      { day: "Day 2", focus: "Prompt — draft content and assets with AI" },
      { day: "Day 3", focus: "Build — assemble the site or game logic" },
      { day: "Day 4", focus: "Test & iterate based on peer feedback" },
      { day: "Day 5", focus: "Launch — publish and present the project" },
    ],
  },
  {
    slug: "ai-innovators",
    level: "Level 3",
    name: "AI Innovators",
    ageRange: "Ages 13–15",
    color: "purple",
    tagline: "Design systems, not just projects.",
    description:
      "Innovators design AI chatbots, automations, and early business ideas — learning to think in systems and to solve real problems for real people.",
    price: 209,
    highlights: [
      "AI chatbots & apps",
      "Automation tools",
      "Business ideas & portfolios",
    ],
    learningOutcomes: [
      "Design and train a conversational AI chatbot with a clear purpose",
      "Build a simple automation that saves time on a real task",
      "Turn an idea into a one-page business concept",
      "Start a personal portfolio to showcase technical work",
    ],
    projects: [
      "A working chatbot that answers questions on a topic of their choice",
      "An automation that solves a everyday problem (school, hobby, family)",
      "A pitch-ready concept page for an original app or business idea",
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Discover — identify a real problem to solve" },
      { day: "Day 2", focus: "Design — map the chatbot or automation flow" },
      { day: "Day 3", focus: "Build — implement with AI development tools" },
      { day: "Day 4", focus: "Refine — test with real users and iterate" },
      { day: "Day 5", focus: "Pitch — present the solution to the group" },
    ],
  },
  {
    slug: "ai-future-leaders",
    level: "Level 4",
    name: "AI Future Leaders",
    ageRange: "Ages 16–18",
    color: "red",
    tagline: "Ship real products. Lead real teams.",
    description:
      "Future Leaders ship real products end-to-end — combining AI development, startup thinking, and leadership skills into a college- and career-ready portfolio.",
    price: 239,
    highlights: [
      "Ship real products",
      "Startup & leadership skills",
      "College & career-ready portfolio",
    ],
    learningOutcomes: [
      "Take a product from concept to a working, shareable release",
      "Practice leadership and teamwork in a small project team",
      "Build a professional portfolio for college and job applications",
      "Present work confidently to an outside audience",
    ],
    projects: [
      "A shipped web or AI product with real users in mind",
      "A startup-style pitch deck with market and product rationale",
      "A polished portfolio site featuring their strongest work",
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Scope — define the product and team roles" },
      { day: "Day 2", focus: "Build sprint — core features with AI tooling" },
      { day: "Day 3", focus: "Build sprint — polish, content, and testing" },
      { day: "Day 4", focus: "Review — user feedback and final iteration" },
      { day: "Day 5", focus: "Ship & pitch — launch and present to a panel" },
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export const colorClasses: Record<
  ProgramColor,
  {
    text: string;
    border: string;
    borderSoft: string;
    hoverBorder: string;
    bg: string;
    bgSoft: string;
    glow: string;
    btn: string;
  }
> = {
  cyan: {
    text: "text-cyan",
    border: "border-cyan",
    borderSoft: "border-cyan/40",
    hoverBorder: "hover:border-cyan",
    bg: "bg-cyan",
    bgSoft: "bg-cyan/10",
    glow: "shadow-[0_0_54px_rgba(0,229,255,0.35)]",
    btn: "bg-cyan text-[#052A33]",
  },
  yellow: {
    text: "text-yellow",
    border: "border-yellow",
    borderSoft: "border-yellow/40",
    hoverBorder: "hover:border-yellow",
    bg: "bg-yellow",
    bgSoft: "bg-yellow/10",
    glow: "shadow-[0_0_54px_rgba(255,214,10,0.32)]",
    btn: "bg-yellow text-[#4A3A00]",
  },
  purple: {
    text: "text-[#D9C8FF]",
    border: "border-purple",
    borderSoft: "border-purple/40",
    hoverBorder: "hover:border-purple",
    bg: "bg-purple",
    bgSoft: "bg-purple/15",
    glow: "shadow-[0_0_54px_rgba(123,47,247,0.45)]",
    btn: "bg-purple text-white",
  },
  red: {
    text: "text-[#FF8FA3]",
    border: "border-red",
    borderSoft: "border-red/40",
    hoverBorder: "hover:border-red",
    bg: "bg-red",
    bgSoft: "bg-red/10",
    glow: "shadow-[0_0_54px_rgba(255,59,92,0.35)]",
    btn: "bg-red text-white",
  },
};
