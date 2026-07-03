import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import ProgramTracks from "@/components/ProgramTracks";
import ProgramOptions from "@/components/ProgramOptions";
import ComingSoonForm from "@/components/ComingSoonForm";

export default function ComingSoonView() {
  return (
    <main className="relative bg-navy">
      <StarField />
      <Navigation />

      <section className="relative z-[1] bg-aurora-gradient px-4 py-16 text-center sm:px-8 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan px-4 py-2 text-xs font-extrabold tracking-[2px] text-cyan shadow-[inset_0_0_20px_rgba(0,229,255,0.2)]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
          COMING SOON · JORDAN RANCH / FULSHEAR, TX
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(34px,6vw,64px)] font-bold leading-[1.05]">
          The AI4 Universe is landing in{" "}
          <span className="bg-gradient-to-r from-cyan via-yellow to-red bg-clip-text text-transparent">
            Jordan Ranch / Fulshear
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[clamp(15px,1.5vw,18px)] leading-relaxed text-ink-soft">
          Project-based AI programs for ages 6–18. Join the waitlist to get
          priority enrollment and founding-family pricing before doors open.
        </p>
      </section>

      <ProgramTracks />
      <ProgramOptions />

      <section id="waitlist" className="relative z-[1] mx-auto max-w-[720px] px-4 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 text-center">
          <p className="mb-3.5 text-xs font-extrabold tracking-[3px] text-yellow">PARENT INTEREST FORM</p>
          <h2 className="font-display text-[clamp(26px,4vw,40px)] font-bold">
            Save your family&apos;s spot
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
            Tell us a bit about your child and we&apos;ll reach out the moment
            enrollment opens.
          </p>
        </div>
        <ComingSoonForm />
      </section>

      <Footer />
    </main>
  );
}
