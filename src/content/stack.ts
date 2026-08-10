import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiSupabase,
  SiFirebase,
  SiI18Next,
  SiDocusaurus,
  SiMdx,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import type { StackItem } from "./types";

// Verificato su github.com/grnsmn (profilo, README, singoli repo). React
// Native e TypeScript mancavano nel marquee originale nonostante fossero
// il centro della bio e dello stack reale dei progetti — aggiunti qui.
export const stack: readonly StackItem[] = [
  { name: "React", icon: SiReact },
  { name: "React Native", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Expo", icon: SiExpo },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "Supabase", icon: SiSupabase },
  { name: "Firebase", icon: SiFirebase },
  { name: "i18next", icon: SiI18Next },
  { name: "Docusaurus", icon: SiDocusaurus },
  { name: "MDX", icon: SiMdx },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "Netlify", icon: SiNetlify },
  { name: "Vercel", icon: SiVercel },
] as const;
