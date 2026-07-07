import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import ProgramDetailView from "@/components/ProgramDetailView";
import { programs, getProgram } from "@/lib/programs";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return { title: "Program Not Found" };
  }

  return {
    title: `${program.name} (${program.ageRange})`,
    description: program.description,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="relative bg-navy">
      <StarField />
      <Navigation />
      <ProgramDetailView program={program} />
      <Footer />
    </main>
  );
}
