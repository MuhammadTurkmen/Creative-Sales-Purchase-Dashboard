import React from "react";
import { useAppContext } from "../Contexts/AppContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const { darkMode, toggleDarkMode, openMobileSidebar } = useAppContext();
  const isRTL = document.documentElement.dir === "rtl";

  // Determine animation position and also for the RTL and LTR
  const knobPosition = darkMode
    ? isRTL
      ? "translate-x-0"
      : "translate-x-[28px]"
    : isRTL
    ? "translate-x-[28px]"
    : "translate-x-0";

  return (
    <div className="flex justify-between items-center md:justify-end mb-2">
      {/* logo for mobile */}
      <h1 className="kaushan-script-regular text-[25px] md:hidden">
        Easy <span className="text-primary">Sales</span>
      </h1>

      <div className="flex items-center gap-3 md:gap-4">
        <div>
          <span className="bg-primary text-white px-[8px] py-[10px] text-[16px] rounded-full">
            MT
          </span>
        </div>
        <span className="text-2xl hidden md:text-3xl md:block">
          <IoMdNotificationsOutline />
        </span>

        {/* mode toggle */}
        <div
          onClick={toggleDarkMode}
          className="w-[60px] h-[32px] bg-base-300 rounded-full px-1 cursor-pointer relative"
        >
          <div
            className={`absolute top-1 left-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out ${knobPosition}`}
          >
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </div>
        </div>

        {/* toggle mobile sidebar for mobile */}

        <div className="md:hidden">
          <button
            className="text-3xl cursor-pointer"
            onClick={openMobileSidebar}
          >
            <IoMdMenu />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
