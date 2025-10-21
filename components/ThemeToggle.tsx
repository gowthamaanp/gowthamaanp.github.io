"use client";

import { useTheme } from "next-themes";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center p-1.5 rounded-full transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <PiSunDuotone className="w-5 h-5" />
      ) : (
        <PiMoonDuotone className="w-5 h-5" />
      )}
    </button>
  );
};
