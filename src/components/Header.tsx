import React from "react";
import { Link } from "react-router-dom";

import ToggleDarkMode from "./toggleDarkMode";

function Header() {
  return (
    <div className="flex flex-nowrap justify-around a">
      <div className="flex flex-nowrap justify-between grow-[0.05]">
        <Link to="/">Random Joke</Link>
        <Link to="/strike">Strike of Jokes</Link>
      </div>
      <div>
        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </div>
  );
}

export default Header;
