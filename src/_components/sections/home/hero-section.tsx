import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "@/_components/ui/button";
import { Container } from "@/_components/common/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-(--border) py-24 md:py-28">
      <div className="pointer-events-none absolute -right-5 top-10 hidden opacity-[0.05] md:block">
        <div className="grid grid-cols-10 gap-0">
          {Array.from({ length: 200 }).map((_, index) => (
            <div key={index} className="h-8 w-8 border border-white/20" />
          ))}
        </div>
      </div>

      <Container>
        <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.2em] text-(--accent)">
          // {siteConfig.role} — {siteConfig.location}
        </p>

        <h1 className="max-w-5xl font-sans text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] font-extrabold tracking-[-0.04em] text-(--text)">
          {siteConfig.firstName}
          <br />
          <span className="text-(--text3)">{siteConfig.lastName}</span>
        </h1>

        <div className="mt-8 max-w-2xl border-l-2 border-(--border2) pl-5 font-mono text-[13px] leading-[1.9] text-(--text2)">
          <p>
            I design and build{" "}
            <strong className="text-(--accent)">fast scalable web apps</strong>{" "}
            with clean architecture, reliable backend systems, and
            product-focused delivery. Whether you need a polished frontend, a
            powerful API, or a full stack rebuild, I build software that feels
            premium and stays maintainable.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="h-auto rounded-none bg-(--accent) px-7 py-3 font-mono text-[12px] uppercase tracking-widest text-black hover:bg-(--accent2)"
          >
            <Link href={siteConfig.heroPrimaryCta.href}>
              {siteConfig.heroPrimaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-auto rounded-none border-(--border2) bg-transparent px-7 py-3 font-mono text-[12px] uppercase tracking-widest text-(--text2) hover:border-(--text2) hover:bg-transparent hover:text-(--text)"
          >
            <Link href={siteConfig.heroSecondaryCta.href}>
              {siteConfig.heroSecondaryCta.label}
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
