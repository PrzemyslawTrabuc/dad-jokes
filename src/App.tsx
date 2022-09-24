import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./context/context";
import Header from "./components/Header";
import RandomJoke from "./pages/RandomJoke";
import StrikeOfJokes from "./pages/StrikeOfJokes";

function App() {
  const [theme, setTheme] = useState<string>("dark");
  if (theme === "dark") {
    document.body.style.backgroundColor = "rgb(39 39 42)";
  }
  if (theme === "") {
    document.body.style.backgroundColor = "white";
  }
  return (
    <div className={theme}>
      <div className="content-center flex flex-col text-zinc-700 dark:text-zinc-200 dark:bg-zinc-800 h-screen">
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <HashRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<RandomJoke />} />
              <Route path="strike" element={<StrikeOfJokes />} />
            </Routes>
          </HashRouter>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
