import type { ReactNode } from "react";
import { LuCalendar } from "react-icons/lu";

type TimelineItemProps = {
  date: string;
  title: string;
  children?: ReactNode;
};

export function TimelineItem({ date, title, children }: TimelineItemProps) {
  return (
    <li className="relative">
      <span aria-hidden className="absolute -left-6 top-1.5 size-2 rounded-full bg-accent" />
      <p className="flex items-center gap-1.5 font-mono text-xs text-ink-subtle">
        <LuCalendar size={12} aria-hidden />
        {date}
      </p>
      <h4 className="mt-1 font-semibold text-ink">{title}</h4>
      {children}
    </li>
  );
}
