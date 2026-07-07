import type { Metadata } from "next";
import ComingSoonView from "@/components/ComingSoonView";

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "AI Youth Academy is coming soon to Jordan Ranch / Fulshear, TX. Join the waitlist for AI programs for ages 6–18.",
};

export default function ComingSoonPage() {
  return <ComingSoonView />;
}
