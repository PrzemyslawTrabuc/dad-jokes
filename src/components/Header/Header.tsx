import React from "react";
import { NavLink } from "react-router-dom";

import ToggleDarkMode from "../toggleDarkMode";

function Header() {
  return (
    <div className="flex flex-nowrap justify-between min-h-[80px] items-center mx-8">
      <div className="flex flex-nowrap justify-between grow-[0.05]">
        <NavLink
          to="random"
          className={({ isActive }) =>
            isActive
              ? "dark:text-amber-300 text-amber-400 underline underline-offset-4"
              : ""
          }
        >
          Random
        </NavLink>
        <NavLink
          to="strike"
          className={({ isActive }) =>
            isActive
              ? "dark:text-amber-300 text-amber-400 underline underline-offset-4"
              : ""
          }
        >
          Strike
        </NavLink>
      </div>
      <div>
        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </div>
  );
}

export default Header;
