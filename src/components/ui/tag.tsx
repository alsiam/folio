import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-xs text-ink-subtle">
      {children}
    </span>
  );
}
