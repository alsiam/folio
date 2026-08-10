"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Prima dell'idratazione il tema reale non è ancora noto: renderizzare
  // un'icona qui produrrebbe un mismatch server/client. Stessa dimensione
  // del bottone vero, per non far saltare il layout dell'header.
  if (!mounted) {
    return <div aria-hidden className="size-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-9 place-items-center rounded-lg text-ink-muted transition-colors hover:bg-surface-hover hover:text-ink"
    >
      {isDark ? <LuSun size={18} aria-hidden /> : <LuMoon size={18} aria-hidden />}
    </button>
  );
}
