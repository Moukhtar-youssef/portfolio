import { socialLinks } from "@/data/socials";
import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <section className="border-b border-(--border)">
      <div className="mx-auto max-w-300 px-5 py-24 md:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent)">
          // Get in touch
        </p>
        <h1 className="mt-5 text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
          Let’s build something <span className="text-(--text3)">solid</span>
        </h1>
        <p className="mt-8 max-w-2xl font-mono text-[13px] leading-[1.9] text-(--text2)">
          Available now for freelance and part-time work. For Stage 1, this page
          shows direct contact methods. In Stage 3 we will add the full Resend
          contact form, availability bar, and reference-style contact layout.
        </p>

        <div className="mt-12 flex flex-col gap-0.5">
          {socialLinks
            .filter((item) => item.visible)
            .map((item) => (
              <a
                key={item.platform}
                href={item.href}
                className="flex items-center justify-between border border-(--border) bg-(--bg2) px-5 py-5 transition hover:bg-(--bg3)"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-(--muted)">
                  {item.label}
                </span>
                <span className="text-sm font-semibold tracking-[-0.01em] text-(--text)">
                  {item.value}
                </span>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
