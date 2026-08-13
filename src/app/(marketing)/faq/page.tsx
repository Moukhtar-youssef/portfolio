import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  pathname: "/faq",
});

export default function FaqPage() {
  return (
    <section className="border-b border-(--border) px-5 py-24 md:px-10">
      <div className="mx-auto max-w-300">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--accent)">
          // FAQ
        </p>
        <h1 className="mt-5 text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Common questions
        </h1>
        <div className="mt-12 space-y-2">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="border border-(--border) bg-(--bg2) p-6"
            >
              <h2 className="text-lg font-semibold text-(--text)">
                {item.question}
              </h2>
              <p className="mt-3 font-mono text-[12px] leading-[1.8] text-(--text2)">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
