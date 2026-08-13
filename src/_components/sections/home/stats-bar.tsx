const stats = [
  { value: "3+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "24h", label: "Typical response" },
  { value: "Full", label: "Stack ownership" },
];

export function StatsBar() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={[
              "border-[var(--border)] px-5 py-8 md:px-10",
              index !== stats.length - 1 ? "md:border-r" : "",
              index < 2 ? "border-b md:border-b-0" : "",
            ].join(" ")}
          >
            <div className="mb-1 text-4xl font-extrabold leading-none tracking-[-0.03em] text-[var(--text)]">
              {stat.value}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
