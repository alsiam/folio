import { LuGithub, LuLinkedin, LuInstagram, LuFacebook } from "react-icons/lu";
import type { Social } from "./types";

export const socials: readonly Social[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    // URL canonico: prima puntava a un wrapper linkedin.com/authwall?trk=...
    href: "https://www.linkedin.com/in/simone-guarnuccio-7779a4166",
    icon: LuLinkedin,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/grnsmn",
    icon: LuGithub,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/simoneguarnuccio",
    icon: LuInstagram,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/simone.guarnuccio",
    icon: LuFacebook,
  },
] as const;
