import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Uses",
  pathname: "/uses",
});

export default function UsesPage() {
  return (
    <section className="border-b border-(--border) px-5 py-24 md:px-10">
      <div className="mx-auto max-w-300">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent)">
          // My setup
        </p>
        <h1 className="mt-5 text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Uses
        </h1>
        <p className="mt-8 max-w-3xl font-mono text-[13px] leading-[1.9] text-(--text2)">
          Placeholder page for Stage 1. In Stage 2 we will add the sidebar
          categories and editable setup rows based on the uploaded Uses page
          reference.
        </p>
      </div>
    </section>
  );
}
