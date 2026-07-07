import type { Metadata } from "next";
import StudentPortalView from "@/components/portal/StudentPortalView";

export const metadata: Metadata = {
  title: "Student Portal",
  description:
    "Track your learning path, projects, certificates, and weekly AI challenges at AI Youth Academy.",
  robots: { index: false, follow: false },
};

export default function StudentPortalPage() {
  return <StudentPortalView />;
}
