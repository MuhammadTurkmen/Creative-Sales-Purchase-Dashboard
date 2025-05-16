import React from "react";
import { links } from "../utiles.jsx";
import { NavLink } from "react-router-dom";

import { IoIosLogOut } from "react-icons/io";

function Sidebar() {
  return (
    <nav>
      <div className=" text-black hidden md:flex md:flex-col justify-between w-[254px]  h-[100vh] py-6 shadow-lg">
        <div>
          {/* <img src={logo} alt="" /> */}
          <h1 className="kaushan-script-regular text-[25px] pl-[29px]">
            Easy <span className="text-indigo-600">Sales</span>
          </h1>
          {/* links to the next pages */}
          <div className="flex flex-col gap-1 mt-[40px] ">
            {links.map(({ id, text, icon, path }) => {
              return (
                // each link
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    `py-[20px] px-[35px] flex gap-2 items-center text-[18px] ${
                      isActive ? "bg-indigo-600 text-white" : ""
                    } hover:bg-indigo-600 hover:text-white`
                  }
                >
                  {icon}
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
        <button className="bg-red-100 py-4 text-[18px] flex justify-center items-center gap-2 text-rose-600 hover:opacity-90 cursor-pointer ">
          Logout{" "}
          <span className="text-2xl">
            <IoIosLogOut />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
