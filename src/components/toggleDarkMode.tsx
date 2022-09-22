import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/context";

function ToggleDarMode() {
  const { theme, setTheme } = useContext(ThemeContext);
  const ToggleDarkMode = (currentTheme: string) => {
    if (currentTheme === "dark") {
      setTheme("");
    } else {
      setTheme("dark");
    }
  };
  return <button onClick={() => ToggleDarkMode(theme)}>DarkModeSwitch</button>;
}

export default ToggleDarMode;
