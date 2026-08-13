import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  pathname: "/blog",
});

export default function BlogPage() {
  return (
    <section className="border-b border-(--border) px-5 py-24 md:px-10">
      <div className="mx-auto max-w-300">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent)">
          // Writing
        </p>
        <h1 className="mt-5 text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Blog
        </h1>
      </div>
    </section>
  );
}
