import React from "react";
import logo from "../assets/logo.svg";
import { links } from "../utiles.js";
import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

function Sidebar() {
  return (
    <nav>
      <div className="bg-black text-white hidden md:block w-64 lg:w-96 h-[100vh] p-10">
        <img src={logo} alt="" />
        {/* links to the next pages */}
        <div className="flex flex-col md:gap-3 lg:gap-4 mt-20">
          {links.map(({ id, text, icon, path }) => {
            return (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  `py-2 px-3 lg:px-4 text-xl rounded-xl ${
                    isActive ? "bg-red-700" : "bg-blue-600"
                  } hover:bg-red-800`
                }
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
