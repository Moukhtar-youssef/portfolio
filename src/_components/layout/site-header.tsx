import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { BrandMark } from "./brand-mark";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-6 md:px-10">
        <BrandMark />

        <nav className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text2)] transition hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 font-mono text-[11px] text-[var(--text3)] md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent2)]" />
            {siteConfig.availability.includes("available-now")
              ? "Available now"
              : "Limited availability"}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
