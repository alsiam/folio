import type { IconType } from "react-icons";

export type Social = {
  id: string;
  label: string;
  href: string;
  icon: IconType;
};

export type StackItem = {
  name: string;
  icon: IconType;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: readonly string[];
  href: string;
  repo?: string;
  /** Il logo, in tessera quadrata: quello che userà la Tappa 6. */
  image: {
    src: string;
    alt: string;
    /** "contain" per i wordmark (hanno bisogno di margine, non di riempire
     * il quadrato): default "cover" per le icone quadrate vere e proprie. */
    fit?: "cover" | "contain";
    /** true per i marchi monocromatici pensati per fondo chiaro, che in
     * tema scuro vanno capovolti via --mark-invert. */
    invertInDark?: boolean;
  };
  /** Solo per la vecchia /portfolio (sparisce con lei in Tappa 7): uno
   * screenshot 14rem che il markup attuale sa mostrare bene. RankPong
   * ha solo il logo, quindi non compare sulla pagina vecchia. */
  legacyImage?: {
    src: string;
    alt: string;
  };
};

export type Job = {
  id: string;
  role: string;
  company: string;
  companyHref?: string;
  location: string;
  /** ISO anno-mese. */
  start: `${number}-${number}`;
  /** null = tuttora in corso. */
  end: `${number}-${number}` | null;
  bullets: readonly string[];
  links?: readonly ProjectLink[];
};

export type Education = {
  id: string;
  qualification: string;
  institution: string;
  institutionHref?: string;
  location: string;
  date: string;
  grade?: string;
  bullets?: readonly string[];
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
};
