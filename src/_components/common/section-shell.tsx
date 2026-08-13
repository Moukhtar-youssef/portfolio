import type { PropsWithChildren } from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={cn("border-b border-[var(--border)] py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}
