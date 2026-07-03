"use client";

import { LayoutDashboard, Map, FolderKanban, Award, Sparkles, CalendarDays } from "lucide-react";
import PortalShell, { type PortalSection } from "./PortalShell";
import Dashboard from "./student/Dashboard";
import LearningPath from "./student/LearningPath";
import MyProjects from "./student/MyProjects";
import Certificates from "./student/Certificates";
import ChallengeOfWeek from "./student/ChallengeOfWeek";
import ClassSchedule from "./student/ClassSchedule";

const sections: PortalSection[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, content: <Dashboard /> },
  { id: "learning-path", label: "My Learning Path", icon: Map, content: <LearningPath /> },
  { id: "projects", label: "My Projects", icon: FolderKanban, content: <MyProjects /> },
  { id: "certificates", label: "Certificates", icon: Award, content: <Certificates /> },
  { id: "challenge", label: "AI Challenge of the Week", icon: Sparkles, content: <ChallengeOfWeek /> },
  { id: "schedule", label: "Class Schedule", icon: CalendarDays, content: <ClassSchedule /> },
];

export default function StudentPortalView() {
  return (
    <PortalShell
      portalLabel="STUDENT PORTAL"
      userName="Maya R."
      userMeta="AI Builders · Level 2"
      userInitials="MR"
      accentClass="text-cyan"
      sections={sections}
    />
  );
}
