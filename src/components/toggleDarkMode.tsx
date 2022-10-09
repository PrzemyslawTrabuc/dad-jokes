import { useContext } from "react";
import { ThemeContext } from "../context/context";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function ToggleDarMode() {
  const { theme, setTheme } = useContext(ThemeContext);
  const ToggleDarkMode = (currentTheme: string) => {
    if (currentTheme === "dark") {
      setTheme("");
      localStorage.setItem("Theme", "");
    } else {
      setTheme("dark");
      localStorage.setItem("Theme", "dark");
    }
  };
  return (
    <button onClick={() => ToggleDarkMode(theme)}>
      {theme === "dark" ? (
        <SunIcon className={"h-7 w-7"} />
      ) : (
        <MoonIcon className={"h-6 w-6"} />
      )}
    </button>
  );
}

export default ToggleDarMode;
