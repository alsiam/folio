import type { ReactNode } from "react";

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative space-y-8 pl-6 before:absolute before:bottom-2 before:left-[3.5px] before:top-2 before:w-px before:bg-line">
      {children}
    </ol>
  );
}
