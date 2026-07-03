import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatStudentsBuild from "@/components/WhatStudentsBuild";
import ProgramTracks from "@/components/ProgramTracks";
import ProgramOptions from "@/components/ProgramOptions";
import WhatsIncluded from "@/components/WhatsIncluded";
import LocationComingSoon from "@/components/LocationComingSoon";
import PortalPreview from "@/components/PortalPreview";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

export default function Home() {
  return (
    <main className="relative bg-navy">
      <StarField />
      <Navigation />
      <HeroSection />
      <WhatStudentsBuild />
      <ProgramTracks />
      <ProgramOptions />
      <WhatsIncluded />
      <LocationComingSoon />
      <PortalPreview />
      <Footer />
    </main>
  );
}
