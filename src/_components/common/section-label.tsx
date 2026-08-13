import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] before:block before:h-px before:w-5 before:bg-[var(--muted)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
