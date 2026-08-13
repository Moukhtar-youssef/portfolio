import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-5 md:px-10", className)}>
      {children}
    </div>
  );
}
