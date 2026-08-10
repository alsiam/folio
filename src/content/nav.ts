import type { NavItem } from "./types";

// About e Work ora vivono come sezioni della home (Tappa 6). Le vecchie
// route /about e /portfolio restano in piedi ma non sono più linkate da
// qui: la Tappa 7 le elimina. L'evidenziazione "sezione attiva" arriva
// con lo scroll-spy della Tappa 8 — per ora data-active resta sempre falso
// su questi href con hash, e va bene così.
export const navItems: readonly NavItem[] = [
  { id: "about", label: "About", href: "/#about" },
  { id: "work", label: "Work", href: "/#work" },
] as const;
