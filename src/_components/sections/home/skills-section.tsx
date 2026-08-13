import { skillGroups } from "@/data/skills";
import { SectionLabel } from "@/_components/common/section-label";
import { SectionShell } from "@/_components/common/section-shell";

export function SkillsSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 md:grid-cols-[260px_1fr] md:gap-16">
        <div>
          <SectionLabel>02 — Stack</SectionLabel>
          <h2 className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
            What I actually build with
          </h2>
          <p className="mt-4 max-w-xs font-mono text-[12px] leading-[1.8] text-[var(--text2)]">
            A practical stack built around speed, maintainability, and real
            client delivery.
          </p>
        </div>

        <div className="grid gap-0.5 md:grid-cols-2">
          {skillGroups.flatMap((group) =>
            group.items.map((skill) => (
              <div
                key={`${group.id}-${skill.name}`}
                className="border border-[var(--border)] bg-[var(--bg2)] px-6 py-5 transition hover:bg-[var(--bg3)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[13px] font-bold text-[var(--text)]">
                      {skill.name}
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.08em] text-[var(--muted)]">
                      {skill.description}
                    </div>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--text3)]">
                    {skill.level}
                  </div>
                </div>
                <div className="mt-3 h-0.5 bg-[var(--border2)]">
                  <div
                    className="h-full bg-[var(--accent)]"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </SectionShell>
  );
}
