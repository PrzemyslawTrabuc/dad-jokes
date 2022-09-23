import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./context/context";
import Header from "./components/Header";
import RandomJoke from "./pages/RandomJoke";
import StrikeOfJokes from "./pages/StrikeOfJokes";

function App() {
  const [theme, setTheme] = useState<string>("dark");
  console.log(theme);
  return (
    <div className={theme}>
      <div className="h-screen content-center flex flex-col text-black dark:text-white dark:bg-black">
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<RandomJoke />} />
              <Route path="strike" element={<StrikeOfJokes />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
