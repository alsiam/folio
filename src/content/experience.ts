import type { Job } from "./types";

export const jobs: readonly Job[] = [
  {
    id: "creationdose",
    role: "Front-End Developer",
    company: "Creationdose",
    companyHref: "https://www.creationdose.com/",
    location: "Catania, Italy",
    start: "2022-07",
    end: null,
    bullets: [
      "Maintenance Design Systems",
      "Maintenance Vidoser app and platform, and all the libraries used in the project",
    ],
    // Verificato su github.com/grnsmn: Vidoser è due prodotti distinti,
    // non uno solo come diceva la vecchia voce "Vidoser App".
    links: [
      { label: "Vidoser app", href: "https://vidoser.com/it/per-creator/app" },
      { label: "Vidoser platform", href: "https://platform.vidoser.app" },
    ],
  },
  {
    id: "sosphone",
    role: "Technical Smartphone and Computer Technician",
    company: "SOSPHONE",
    location: "Catania, Italy",
    start: "2017-10",
    // Rapporto chiuso: prima risultava "Present", in parallelo col ruolo
    // in Creationdose iniziato lo stesso mese.
    end: "2022-06",
    bullets: [
      "Repair smartphones Huawei, Apple, Samsung, Xiaomi, Oppo, LG",
      "Hardware and Software Assistance for PC",
      "Sales Representative",
    ],
  },
] as const;
