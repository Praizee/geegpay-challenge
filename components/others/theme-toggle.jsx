"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";
import SunIcon from "@/assets/svg/SunIcon";
import MoonIcon from "@/assets/svg/MoonIcon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-inherit dark:border-white rounded-3xl px-1 py-2 space-y-6 border w-max">
      <button
        type="button"
        className="block bg-[#34CAA5]  p-2 rounded-full w-max"
        onClick={toggleTheme}
      >
        <SunIcon />
      </button>
      <button
        type="button"
        className="rounded-full block w-max focus:bg-[#34CAA5] p-1 mx-auto"
        onClick={toggleTheme}
      >
        <MoonIcon />
      </button>
    </div>
  );
}

// //  <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
// //     <Toggle aria-label="Toggle dark mode" variant="outline">
// //       <SunIcon className="mr-2 h-4 w-4 dark:hidden" />
// //       <MoonIcon className="mr-2 h-4 w-4 hidden dark:block" />
// //       <span className="dark:hidden">Light Mode</span>
// //       <span className="hidden dark:block">Dark Mode</span>
// //     </Toggle>
// //   </div>
