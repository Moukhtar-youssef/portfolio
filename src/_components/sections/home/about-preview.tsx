import Link from "next/link";
import { SectionShell } from "@/_components/common/section-shell";
import { SectionLabel } from "@/_components/common/section-label";

export function AboutPreview() {
  return (
    <SectionShell>
      <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-16">
        <div>
          <SectionLabel>04 — About</SectionLabel>
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-[var(--text)]">
            Self-taught, systems-minded, and serious about delivery
          </h2>
        </div>
        <div className="space-y-4 font-mono text-[12px] leading-[1.9] text-[var(--text2)]">
          <p>
            I am a self-taught full stack developer and a medical student who
            codes. That mix shaped how I work: analytical under pressure,
            detail-driven, and focused on building systems that stay reliable
            over time.
          </p>
          <p>
            I care about trust, clarity, and engineering that feels calm in
            production. I like software that is fast, understandable, and built
            with enough structure to grow.
          </p>
          <Link
            href="/about"
            className="inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]"
          >
            Read more
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
