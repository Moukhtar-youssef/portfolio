import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-2 px-5 py-6 md:flex-row md:px-10">
        <p className="font-mono text-[10px] tracking-[0.08em] text-[var(--text3)]">
          © {new Date().getFullYear()} {siteConfig.fullName}. All rights
          reserved.
        </p>
        <p className="font-mono text-[10px] tracking-[0.1em] text-[var(--text3)]">
          <span className="text-[var(--muted)]">Based in</span>{" "}
          {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
