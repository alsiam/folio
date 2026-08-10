import type { IconType } from "react-icons";
import { cn } from "@/lib/cn";

type IconLinkProps = {
  href: string;
  label: string;
  icon: IconType;
  className?: string;
};

export function IconLink({ href, label, icon: Icon, className }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "grid size-9 place-items-center rounded-lg text-ink-muted transition-colors hover:bg-surface-hover hover:text-ink",
        className,
      )}
    >
      <Icon size={16} aria-hidden />
    </a>
  );
}
