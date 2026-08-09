import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";

// Il CSS del template chiedeva "Rubik" sugli heading e "Montserrat" sul body
// senza che nessuno dei due venisse mai caricato: ogni titolo cadeva sul sans
// di sistema. Ora i due nomi sono variabili CSS popolate solo da next/font,
// così una famiglia dichiarata-ma-non-caricata non è più possibile.
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Simone Guarnuccio",
  description: "Presentational portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable}`}>
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <Sidebar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
