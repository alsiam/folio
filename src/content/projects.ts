import type { Project } from "./types";

// Verificato su github.com/grnsmn (profilo, README, singoli repo). Le
// descrizioni vengono dai README dei progetti, non da inferenza. Code
// Quest esiste ma resta escluso dalla lista, per scelta.
export const projects: readonly Project[] = [
  {
    slug: "rankpong",
    title: "RankPong",
    summary:
      "An ELO ranking system for an amateur ping pong community. Set-by-set match entry with live validation, a referee mode for recording other people's matches, and score corrections that recalculate ratings atomically. The K-factor adapts to player type, so a student's rating converges faster than a competitor's.",
    role: "Design & build",
    stack: ["React 19", "TypeScript", "Supabase", "Zustand", "Tailwind"],
    href: "https://rankpong.netlify.app/",
    repo: "https://github.com/grnsmn/rank-pong-app",
    image: {
      src: "/imgs/work/rankpong.webp",
      alt: "RankPong logo",
    },
  },
  {
    slug: "vocal-trainer",
    title: "Vocal Trainer",
    summary:
      "A training app for singers: breathing exercises, guided vocalises and a piano reference, on web, iOS and Android from one codebase. Started in 2022 and still shipping.",
    role: "Design & build",
    stack: ["React Native", "Expo", "Gluestack UI", "TypeScript", "Netlify"],
    href: "https://vocaltrainer.netlify.app",
    repo: "https://github.com/grnsmn/VocalTrainer",
    image: {
      src: "/imgs/work/vocal-trainer.webp",
      alt: "Vocal Trainer logo",
    },
    legacyImage: {
      src: "/imgs/portfolio/VocalTrainer.jpeg",
      alt: "VocalTrainerApp",
    },
  },
  {
    slug: "sabaoth-docs",
    title: "Sabaoth Docs",
    summary:
      "Documentation for the media and production volunteers of two APS Sabaoth churches, Catania and Reggio Calabria: shift calendars, mixer and projection guides, post-production workflows — written so a new volunteer can run a service unaided.",
    role: "Design & build",
    stack: ["Docusaurus", "MDX", "React", "Netlify"],
    href: "https://sabaothctdocs.netlify.app",
    repo: "https://github.com/grnsmn/sabaoth-ct-docs",
    image: {
      src: "/imgs/work/sabaoth-docs.webp",
      alt: "Sabaoth Church wordmark",
      fit: "contain",
      invertInDark: true,
    },
    legacyImage: {
      src: "/imgs/portfolio/SabaothCTDocs.jpeg",
      alt: "SabaothCTDocs",
    },
  },
] as const;
