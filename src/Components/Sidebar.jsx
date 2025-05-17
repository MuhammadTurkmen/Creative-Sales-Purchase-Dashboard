import React from "react";
import { links } from "../utiles.jsx";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { t } = useTranslation();

  return (
    <nav>
      <div className="bg-base-100 text-base-content hidden md:flex md:flex-col justify-between w-[254px]  h-[100vh] py-6 shadow-lg">
        <div>
          {/* <img src={logo} alt="" /> */}
          <h1 className="kaushan-script-regular text-[25px] px-[29px]">
            Easy <span className="text-primary">Sales</span>
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
                    `group py-[15px] px-[35px] flex  gap-3 items-center text-[18px] transition-colors duration-300 ${
                      isActive
                        ? "bg-primary text-primary-content"
                        : "hover:bg-primary hover:text-primary-content"
                    }`
                  }
                >
                  <span className="transition-transform duration-300 group-hover:rotate-6 ">
                    {icon}
                  </span>

                  {t(text)}
                </NavLink>
              );
            })}
          </div>
        </div>
        <button className="bg-error text-error-content py-4 text-[18px] flex justify-center items-center gap-2 hover:opacity-90 cursor-pointer ">
          {t("logout")}{" "}
          <span className="text-2xl">
            <IoIosLogOut />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
