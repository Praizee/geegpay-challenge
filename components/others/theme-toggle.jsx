"use client";

// theme-toggler.js
import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";

import SunIcon from "@/assets/svg/SunIcon";
import MoonIcon from "@/assets/svg/MoonIcon";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  const [isRotated, setRotated] = useState(false);

  const handleRotation = () => {
    setRotated((isRotated) => !isRotated);
    toggleTheme();
  };

  return (
    <div className="flex justify-center w-max">
      <div
        className={`bg-white rounded-3xl px-1 py-2 space-y-5 border w-max ${
          isRotated ? "rotate-180" : ""
        }`}
      >
        <button
          onClick={handleRotation}
          className={`block p-2 rounded-full w-max ${
            isRotated ? "bg-[#34CAA5]" : "bg-green-200"
          }`}
        >
          <SunIcon />
        </button>
        <button
          onClick={handleRotation}
          className="rounded-full block w-max mx-auto transform rotate-180"
        >
          <MoonIcon />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;

{
  /* <div className="bg-white dark:bg-inherit dark:border-white rounded-3xl px-1 py-2 space-y-6 border w-max"></div> */
}
