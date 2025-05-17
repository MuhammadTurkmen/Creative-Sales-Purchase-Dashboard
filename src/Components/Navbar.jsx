import React from "react";
import { useAppContext } from "../Contexts/AppContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <div className="flex justify-between items-center">
      {/* title for mobile and hides in the desktop */}
      <h1 className="kaushan-script-regular text-[25px] md:hidden">
        Easy <span className="text-primary">Sales</span>
      </h1>

      {/* Toggle mode, from dark to light and light to dark */}

      <div
        onClick={toggleDarkMode}
        className="w-[60px] h-[32px] bg-base-300 rounded-full flex items-center px-1 cursor-pointer relative transition-colors"
      >
        <div
          className={`absolute w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center transform transition-transform duration-300 ${
            darkMode ? "translate-x-[28px]" : "translate-x-0"
          }`}
        >
          {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
