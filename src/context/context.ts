import { createContext } from "react";

interface ThemeContextInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "dark",
  setTheme: () => {},
});
