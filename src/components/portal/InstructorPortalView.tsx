"use client";

import {
  LayoutDashboard,
  CalendarClock,
  ClipboardCheck,
  BookOpen,
  NotebookPen,
  TrendingUp,
  FileCheck2,
} from "lucide-react";
import PortalShell, { type PortalSection } from "./PortalShell";
import Overview from "./instructor/Overview";
import TodaysClasses from "./instructor/TodaysClasses";
import Attendance from "./instructor/Attendance";
import CurriculumLibrary from "./instructor/CurriculumLibrary";
import LessonPlans from "./instructor/LessonPlans";
import StudentProgress from "./instructor/StudentProgress";
import ProjectReview from "./instructor/ProjectReview";

const sections: PortalSection[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard, content: <Overview /> },
  { id: "todays-classes", label: "Today's Classes", icon: CalendarClock, content: <TodaysClasses /> },
  { id: "attendance", label: "Attendance Tracker", icon: ClipboardCheck, content: <Attendance /> },
  { id: "curriculum", label: "Curriculum Library", icon: BookOpen, content: <CurriculumLibrary /> },
  { id: "lesson-plans", label: "Lesson Plans", icon: NotebookPen, content: <LessonPlans /> },
  { id: "student-progress", label: "Student Progress", icon: TrendingUp, content: <StudentProgress /> },
  { id: "project-review", label: "Project Review", icon: FileCheck2, content: <ProjectReview /> },
];

export default function InstructorPortalView() {
  return (
    <PortalShell
      portalLabel="INSTRUCTOR PORTAL"
      userName="Coach Daniels"
      userMeta="Lead Mentor · 3 Tracks"
      userInitials="CD"
      accentClass="text-[#D9C8FF]"
      sections={sections}
    />
  );
}
