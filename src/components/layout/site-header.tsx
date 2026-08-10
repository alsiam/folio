"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/cn";
import { NavMobile } from "./nav-mobile";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const { scrolled, sentinelRef } = useScrolled();

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="absolute left-0 top-0 h-px w-px" />
      <header
        className={cn(
          "sticky top-0 z-50 h-16 border-b bg-canvas/70 backdrop-blur-md backdrop-saturate-150 transition-colors",
          scrolled ? "border-line" : "border-transparent",
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-tight text-ink"
          >
            {site.handle}
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                data-active={pathname === item.href || undefined}
                className="rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink data-active:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <NavMobile />
          </div>
        </Container>
      </header>
    </>
  );
}
