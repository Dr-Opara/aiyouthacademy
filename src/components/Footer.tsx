import Link from "next/link";

const footerLinks = [
  { label: "Programs", href: "/#programs" },
  { label: "Showcase", href: "/#build" },
  { label: "Contact", href: "/#soon" },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 border-t border-white/10 px-4 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
      <Link href="/#top" className="flex items-center gap-2.5" aria-label="AI 4 Youth Academy home">
        <span className="rounded-[10px] bg-gradient-to-br from-purple to-[#A855F7] px-2.5 py-1.5 font-display text-sm font-bold text-white shadow-[0_0_18px_rgba(123,47,247,0.55)]">
          AI4
        </span>
        <span className="font-display text-sm font-bold tracking-[0.2em] text-white">
          YOUTH ACADEMY
        </span>
      </Link>

      <p className="text-[13px] text-ink-mute">
        Create. Build. Innovate. · Coming soon to Jordan Ranch / Fulshear, TX
      </p>

      <div className="flex gap-5">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[13px] font-bold text-ink-soft transition-colors hover:text-cyan"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
