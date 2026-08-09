import type { Education } from "./types";

export const education: readonly Education[] = [
  {
    id: "fcc",
    qualification: "Responsive Web Design Course",
    // Refuso corretto: era "FreeCodeCamp.org".
    institution: "freeCodeCamp",
    institutionHref: "https://www.freecodecamp.org/",
    location: "Online",
    date: "April 2022",
  },
  {
    id: "unict",
    qualification: "Bachelor's Degree in Computer Science",
    institution: "University of Catania, Department of Computer Science, Italy",
    location: "Catania, Italy",
    date: "2014-2019",
    grade: "91/110",
  },
  {
    id: "note-academy",
    qualification: "Training Internship as Entertainment Industry Operator",
    // Refuso corretto: era "Note International Accademy".
    institution: "Note International Academy, Associazione meridies sc",
    location: "Catania, Italy",
    date: "March 2018 - July 2018",
    bullets: [
      "Assembly and disassembly of audio and lighting services",
      "Assistant to the audio director (studio and live sessions)",
    ],
  },
  {
    id: "ipia-marconi",
    qualification: "Technical Electronics Diploma",
    institution: 'I.P.I.A. "G. Marconi"',
    location: "Vittoria (RG), Italy",
    date: "2009-2014",
    grade: "87/100",
  },
] as const;
