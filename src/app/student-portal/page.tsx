import type { Metadata } from "next";
import StudentPortalView from "@/components/portal/StudentPortalView";

export const metadata: Metadata = {
  title: "Student Portal | AI 4 Youth Academy",
  description:
    "Track your learning path, projects, certificates, and weekly AI challenges at AI 4 Youth Academy.",
  robots: { index: false, follow: false },
};

export default function StudentPortalPage() {
  return <StudentPortalView />;
}
