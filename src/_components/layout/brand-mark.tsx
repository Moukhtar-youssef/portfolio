import Link from "next/link";
import { siteConfig } from "@/data/site";

export function BrandMark() {
  return (
    <Link
      href="/"
      className="font-mono text-[13px] tracking-[0.05em] text-[var(--text)]"
    >
      {siteConfig.firstName}
      <span className="text-[var(--accent)]">.</span>
      {siteConfig.lastName}
    </Link>
  );
}
