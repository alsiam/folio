import type { NavItem } from "./types";

// Route vere per ora (About/Portfolio sono ancora pagine separate). Quando
// la Tappa 6/7 le trasforma in sezioni di una single page, questi href
// diventano ancore: unico file da toccare.
export const navItems: readonly NavItem[] = [
  { id: "about", label: "About", href: "/about" },
  { id: "portfolio", label: "Portfolio", href: "/portfolio" },
] as const;
