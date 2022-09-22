import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import { ThemeContext } from "./context/context";
import ToggleDarkMode from "./components/toggleDarkMode";

function App() {
  const [theme, setTheme] = useState<string>("dark");
  console.log(theme);
  return (
    <div className={theme}>
      <div className="h-screen content-center flex flex-col text-black dark:text-white dark:bg-black">
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ToggleDarkMode></ToggleDarkMode>
          <Header />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
