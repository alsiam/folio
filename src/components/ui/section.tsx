import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** La sezione subito dopo la hero: il filo animato fa già da confine,
   * un secondo hairline sotto sarebbe una riga doppia. */
  noTopBorder?: boolean;
};

export function Section({ id, children, className, noTopBorder }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-20 border-t py-20 sm:py-28",
        noTopBorder ? "border-transparent" : "border-line",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
