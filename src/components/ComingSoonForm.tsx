"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { programs } from "@/lib/programs";

interface FormState {
  parentName: string;
  email: string;
  phone: string;
  ageGroup: string;
  programType: string;
}

const emptyForm: FormState = {
  parentName: "",
  email: "",
  phone: "",
  ageGroup: "",
  programType: "",
};

const ageGroups = [...new Set(programs.map((p) => p.ageRange))];

export default function ComingSoonForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Frontend-only for now — no backend wired up yet.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[28px] border border-cyan/40 bg-navy-2/70 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-cyan" />
        <h3 className="font-display text-2xl font-bold">You&apos;re on the list, {form.parentName.split(" ")[0] || "friend"}!</h3>
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          We&apos;ll email {form.email || "you"} as soon as enrollment opens in
          Jordan Ranch / Fulshear, with founding-family pricing and priority
          class selection.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(emptyForm);
            setSubmitted(false);
          }}
          className="mt-2 text-xs font-bold text-ink-mute underline underline-offset-4 hover:text-white"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 rounded-[28px] border border-white/10 bg-navy-2/60 p-6 sm:grid-cols-2 sm:p-8"
    >
      <div className="sm:col-span-2">
        <label htmlFor="parentName" className="mb-1.5 block text-xs font-extrabold tracking-wide text-ink-mute">
          PARENT NAME
        </label>
        <input
          id="parentName"
          type="text"
          required
          value={form.parentName}
          onChange={(e) => update("parentName", e.target.value)}
          placeholder="Jamie Rivera"
          className="w-full rounded-xl border border-white/15 bg-navy/70 px-4 py-3 text-sm text-white placeholder-ink-mute focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/20"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-extrabold tracking-wide text-ink-mute">
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="jamie@email.com"
          className="w-full rounded-xl border border-white/15 bg-navy/70 px-4 py-3 text-sm text-white placeholder-ink-mute focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs font-extrabold tracking-wide text-ink-mute">
          PHONE <span className="normal-case text-ink-mute/70">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="(281) 555-0110"
          className="w-full rounded-xl border border-white/15 bg-navy/70 px-4 py-3 text-sm text-white placeholder-ink-mute focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/20"
        />
      </div>

      <div>
        <label htmlFor="ageGroup" className="mb-1.5 block text-xs font-extrabold tracking-wide text-ink-mute">
          CHILD AGE GROUP
        </label>
        <select
          id="ageGroup"
          required
          value={form.ageGroup}
          onChange={(e) => update("ageGroup", e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-navy/70 px-4 py-3 text-sm text-white focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/20"
        >
          <option value="" disabled>
            Select an age range
          </option>
          {ageGroups.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="programType" className="mb-1.5 block text-xs font-extrabold tracking-wide text-ink-mute">
          PREFERRED PROGRAM
        </label>
        <select
          id="programType"
          required
          value={form.programType}
          onChange={(e) => update("programType", e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-navy/70 px-4 py-3 text-sm text-white focus:border-cyan focus:outline-none focus:ring-4 focus:ring-cyan/20"
        >
          <option value="" disabled>
            Select a program
          </option>
          {programs.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name} ({p.ageRange})
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-gradient-to-br from-yellow to-orange px-7 py-3.5 text-sm font-extrabold text-[#3A2400] shadow-glow-yellow transition-transform hover:-translate-y-0.5 hover:scale-[1.02] sm:col-span-2"
      >
        Join the Waitlist
      </button>
    </form>
  );
}
