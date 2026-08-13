import type { ReactNode } from "react";
import { SiteHeader } from "@/_components/layout/site-header";
import { SiteFooter } from "@/_components/layout/site-footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
