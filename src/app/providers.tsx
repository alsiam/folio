"use client";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      storageKey="gs-theme"
    >
      <NextTopLoader />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
