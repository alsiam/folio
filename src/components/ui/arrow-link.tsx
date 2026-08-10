import type { ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function ArrowLink({ href, children, external, className }: ArrowLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent",
        className,
      )}
    >
      {children}
      <LuArrowUpRight
        size={14}
        aria-hidden
        className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
