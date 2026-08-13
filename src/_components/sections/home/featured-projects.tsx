import Link from "next/link";
import { SectionLabel } from "@/_components/common/section-label";
import { SectionShell } from "@/_components/common/section-shell";

const featured = [
  {
    number: "01",
    name: "Project placeholder one",
    description: "Replace with your top featured project summary.",
    stack: ["Go", "Next.js", "PostgreSQL"],
    href: "/projects/project-placeholder-one",
  },
  {
    number: "02",
    name: "Project placeholder two",
    description:
      "Replace with a project focused on frontend, APIs, or full stack delivery.",
    stack: ["React", "Node.js", "TypeScript"],
    href: "/projects/project-placeholder-two",
  },
  {
    number: "03",
    name: "Project placeholder three",
    description:
      "Replace with another strong client-facing project or open-source build.",
    stack: ["Svelte", "Go", "Docker"],
    href: "/projects/project-placeholder-three",
  },
];

export function FeaturedProjects() {
  return (
    <SectionShell>
      <div className="flex items-end justify-between gap-6">
        <div>
          <SectionLabel>03 — Selected work</SectionLabel>
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-[var(--text)]">
            Projects that show how I build
          </h2>
        </div>
        <Link
          href="/projects"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]"
        >
          View all
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-0.5">
        {featured.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="grid gap-6 border border-[var(--border)] bg-[var(--bg2)] px-6 py-6 transition hover:bg-[var(--bg3)] md:grid-cols-[40px_1fr_auto_auto] md:items-center"
          >
            <span className="font-mono text-[11px] text-[var(--text3)]">
              {project.number}
            </span>
            <div>
              <div className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--text)]">
                {project.name}
              </div>
              <p className="mt-1 font-mono text-[11px] leading-[1.6] text-[var(--text2)]">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--border2)] bg-[var(--bg3)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--text2)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="text-[var(--text3)] transition group-hover:text-[var(--accent)]">
              →
            </span>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
