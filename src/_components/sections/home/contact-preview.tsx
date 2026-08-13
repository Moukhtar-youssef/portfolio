import Link from "next/link";
import { SectionShell } from "@/_components/common/section-shell";

export function ContactPreview() {
  return (
    <SectionShell>
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-[42px] font-extrabold leading-none tracking-[-0.03em] text-[var(--text)]">
            Ready to build something{" "}
            <em className="not-italic text-[var(--accent)]">solid</em>?
          </h2>
          <p className="mt-5 max-w-xl font-mono text-[12px] leading-[1.8] text-[var(--text2)]">
            I am currently available for freelance and part-time work. If you
            need a strong developer for a new product, a rebuild, or a
            backend-heavy feature, let’s talk.
          </p>
        </div>
        <div className="flex flex-col gap-0.5">
          {[
            {
              label: "Email",
              value: "mokhtar.laban07@gmail.com",
              href: "mailto:mokhtar.laban07@gmail.com",
            },
            {
              label: "GitHub",
              value: "github.com/your-username",
              href: "https://github.com/your-username",
            },
            {
              label: "Fiverr",
              value: "fiverr.com/your-profile",
              href: "https://www.fiverr.com/your-profile",
            },
            {
              label: "Upwork",
              value: "upwork.com/freelancers/~your-id",
              href: "https://www.upwork.com/freelancers/~your-id",
            },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between border border-[var(--border)] bg-[var(--bg2)] px-5 py-4 transition hover:bg-[var(--bg3)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text)]">
                {item.label}
              </span>
              <span className="font-mono text-[11px] text-[var(--text2)]">
                {item.value}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
