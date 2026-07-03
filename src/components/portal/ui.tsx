import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function PortalCard({
  children,
  className = "",
  borderClassName = "border-white/10",
}: {
  children: ReactNode;
  className?: string;
  borderClassName?: string;
}) {
  return (
    <div className={`rounded-2xl border ${borderClassName} bg-navy-2/50 p-5 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  accentClass = "text-cyan",
}: {
  kicker: string;
  title: string;
  description?: string;
  accentClass?: string;
}) {
  return (
    <div className="mb-7">
      <p className={`mb-2 text-xs font-extrabold tracking-[3px] ${accentClass}`}>{kicker}</p>
      <h1 className="font-display text-2xl font-bold sm:text-3xl">{title}</h1>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-mute">{description}</p>
      )}
    </div>
  );
}

export function ProgressBar({
  value,
  className = "from-cyan to-purple",
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${className}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function Pill({
  children,
  className = "bg-white/10 text-ink-soft",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-extrabold tracking-wide ${className}`}>
      {children}
    </span>
  );
}

export function StatTile({
  icon: Icon,
  label,
  value,
  accentClass = "bg-cyan/10 text-cyan",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  accentClass?: string;
}) {
  return (
    <PortalCard className="flex items-center gap-4">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accentClass}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-display text-xl font-bold">{value}</div>
        <div className="text-xs font-bold text-ink-mute">{label}</div>
      </div>
    </PortalCard>
  );
}

export function Avatar({
  initials,
  className = "bg-gradient-to-br from-cyan to-purple",
  sizeClassName = "h-10 w-10 text-sm",
}: {
  initials: string;
  className?: string;
  sizeClassName?: string;
}) {
  return (
    <div className={`flex shrink-0 items-center justify-center rounded-full font-display font-bold text-white ${sizeClassName} ${className}`}>
      {initials}
    </div>
  );
}
