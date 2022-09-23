import React from "react";
import { Link } from "react-router-dom";

import ToggleDarkMode from "./toggleDarkMode";

function Header() {
  return (
    <div className="flex flex-nowrap justify-between h-[60px] items-center mx-8">
      <div className="flex flex-nowrap justify-between grow-[0.05]">
        <Link to="/">Random</Link>
        <Link to="/strike">Strike</Link>
      </div>
      <div>
        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </div>
  );
}

export default Header;
