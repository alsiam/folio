"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prima dell'idratazione il tema reale non è ancora noto: renderizzare
  // un'icona qui produrrebbe un mismatch server/client e, con `enableSystem`,
  // l'icona sbagliata per ogni visitatore che non ha scelto esplicitamente.
  if (!mounted) {
    return (
      <div className="theme">
        <button aria-hidden="true" tabIndex={-1} style={{ visibility: "hidden" }}>
          <FaMoon />
        </button>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="theme">
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
