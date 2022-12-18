import { useContext } from "react";
import { ThemeContext } from "../context/context";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useLocalStorage } from "../hooks/useLocalStorage";

function ToggleDarMode() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [localStoredTheme, setLocalStoredTheme] = useLocalStorage<string>(
    "Theme",
    JSON.stringify("dark")
  );

  const ToggleDarkMode = (currentTheme: string) => {
    if (currentTheme !== "dark") {
      setTheme("dark");
      setLocalStoredTheme("dark");
      document.body.style.removeProperty("background-color");
    } else {
      setTheme("");
      setLocalStoredTheme("");
      document.body.style.backgroundColor = "white";
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
