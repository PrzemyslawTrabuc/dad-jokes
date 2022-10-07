import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import ToggleDarkMode from "../toggleDarkMode";

function Header() {
  const [isBadgeVisible, setIsBadgeVisible] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 8000 + 1000);
    setTimeout(() => {
      setIsBadgeVisible(true);
    }, randomTime);
    return setIsBadgeVisible(false);
  }, [location]);

  return (
    <div className="flex flex-nowrap justify-between min-h-[80px] items-center sm:mx-20 mx-6 text-lg">
      <div className="flex flex-nowrap justify-between grow-[0.05]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "dark:text-amber-300 text-amber-500 underline underline-offset-4"
              : ""
          }
          end
        >
          Random
        </NavLink>
        <NavLink
          to="chat"
          className={({ isActive }) =>
            isActive
              ? "dark:text-amber-300 text-amber-500 underline underline-offset-4"
              : ""
          }
        >
          {" "}
          <span className="flex w-3 h-3">
            Chat
            {isBadgeVisible && location.pathname !== "/chat" ? (
              <>
                <span className="animate-ping inline-flex absolute py-1 px-1 leading-none text-sm whitespace-nowrap dark:bg-red-600 bg-red-400 text-white rounded-full ml-11"></span>
                <span className="inline-flex absolute py-1 px-1 leading-none text-sm whitespace-nowrap dark:bg-red-600 bg-red-400 text-white rounded-full ml-11"></span>
              </>
            ) : null}
          </span>
        </NavLink>
      </div>
      <div>
        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </div>
  );
}

export default Header;
