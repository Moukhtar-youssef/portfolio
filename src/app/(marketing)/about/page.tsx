import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "About",
  pathname: "/about",
  description:
    "Learn more about Moukhtar Laban, a self-taught full stack developer based in Szeged, Hungary.",
});

export default function AboutPage() {
  return (
    <section className="border-b border-(--border) px-5 py-24 md:px-10">
      <div className="mx-auto max-w-300">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent)">
          // About me
        </p>
        <h1 className="mt-5 text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Moukhtar
          <br />
          <span className="text-(--text3)">Laban</span>
        </h1>
        <p className="mt-8 max-w-3xl font-mono text-[13px] leading-[1.9] text-(--text2)">
          Placeholder page for Stage 1. In Stage 2 we will build the full
          editorial About page with the split hero, values strip, bio section,
          and current focus cards based on the uploaded reference.
        </p>
      </div>
    </section>
  );
}
