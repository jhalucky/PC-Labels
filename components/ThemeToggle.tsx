"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-700/50 transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <FiMoon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-700/50 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5 text-yellow-400" />
      ) : (
        <FiMoon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}

