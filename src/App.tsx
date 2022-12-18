import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./context/context";
import Header from "./components/Header/Header";
import RandomJoke from "./pages/RandomJoke";
import StrikeOfJokes from "./pages/StrikeOfJokes";
import Footer from "./components/Footer";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [localStoredTheme, setLocalStoredTheme] = useLocalStorage<string>(
    "Theme",
    JSON.stringify("dark")
  );

  useEffect(() => {
    if (localStoredTheme === "dark" || !localStoredTheme) {
      setTheme("dark");
      document.body.style.removeProperty("background-color");
    }
    if (localStoredTheme === "") {
      setTheme("");
      document.body.style.backgroundColor = "white";
    }
  }, []);

  return (
    <div className={theme}>
      <div className="content-center flex flex-col text-zinc-900 dark:text-zinc-200 dark:bg-zinc-800 h-screen">
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <HashRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<RandomJoke />} />
              <Route path="chat" element={<StrikeOfJokes />} />
            </Routes>
            <Footer></Footer>
          </HashRouter>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
