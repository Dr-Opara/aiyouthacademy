import type { Metadata } from "next";
import InstructorPortalView from "@/components/portal/InstructorPortalView";

export const metadata: Metadata = {
  title: "Instructor Portal",
  description:
    "Manage classes, attendance, curriculum, lesson plans, and student progress at AI Youth Academy.",
  robots: { index: false, follow: false },
};

export default function InstructorPortalPage() {
  return <InstructorPortalView />;
}
