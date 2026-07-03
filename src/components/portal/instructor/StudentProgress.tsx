import { Avatar, PortalCard, ProgressBar, SectionHeading, Pill } from "../ui";

const students = [
  { name: "Ava T.", initials: "AT", track: "AI Builders", progress: 88, lastProject: "AI Art Gallery", engagement: "High" },
  { name: "Jordan P.", initials: "JP", track: "AI Builders", progress: 74, lastProject: "Quiz Game Builder", engagement: "High" },
  { name: "Maya R.", initials: "MR", track: "AI Builders", progress: 62, lastProject: "Weather Chatbot", engagement: "Medium" },
  { name: "Noah K.", initials: "NK", track: "AI Explorers", progress: 45, lastProject: "Digital Pet Comic", engagement: "Medium" },
  { name: "Ella S.", initials: "ES", track: "AI Innovators", progress: 91, lastProject: "Automation Tool", engagement: "High" },
  { name: "Liam B.", initials: "LB", track: "AI Explorers", progress: 30, lastProject: "Story Comic", engagement: "Low" },
];

const engagementStyle: Record<string, string> = {
  High: "bg-cyan/10 text-cyan",
  Medium: "bg-yellow/10 text-yellow",
  Low: "bg-red/10 text-[#FF8FA3]",
};

export default function StudentProgress() {
  return (
    <div>
      <SectionHeading
        kicker="STUDENT PROGRESS"
        title="Track completion across your roster"
        description="A quick read on where each student stands this term."
        accentClass="text-cyan"
      />

      <PortalCard className="overflow-x-auto p-0">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs font-extrabold tracking-wide text-ink-mute">
              <th className="px-5 py-3.5">Student</th>
              <th className="px-5 py-3.5">Track</th>
              <th className="px-5 py-3.5">Progress</th>
              <th className="px-5 py-3.5">Last Project</th>
              <th className="px-5 py-3.5">Engagement</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.name} className="border-b border-white/5 last:border-0">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <Avatar initials={s.initials} className="bg-white/10" sizeClassName="h-8 w-8 text-xs" />
                    <span className="font-bold text-white">{s.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-ink-mute">{s.track}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-24">
                      <ProgressBar value={s.progress} />
                    </div>
                    <span className="text-xs font-bold text-ink-mute">{s.progress}%</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-ink-mute">{s.lastProject}</td>
                <td className="px-5 py-3.5">
                  <Pill className={engagementStyle[s.engagement]}>{s.engagement.toUpperCase()}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PortalCard>
    </div>
  );
}
