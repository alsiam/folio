"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";
import { navItems } from "@/content/nav";
import { cn } from "@/lib/cn";

export function NavMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Chiude il menu quando la navigazione cambia pagina.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-9 place-items-center rounded-lg text-ink-muted transition-colors hover:bg-surface-hover hover:text-ink"
      >
        {open ? <LuX size={18} aria-hidden /> : <LuMenu size={18} aria-hidden />}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 z-40 border-b border-line bg-canvas px-5 py-3"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                data-active={pathname === item.href || undefined}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm text-ink-muted transition-colors",
                  "hover:bg-surface-hover hover:text-ink data-active:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
