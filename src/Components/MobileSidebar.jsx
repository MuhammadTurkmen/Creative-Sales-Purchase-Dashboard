import React from "react";
import { links } from "../utiles";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../Contexts/AppContext";

function MobileSidebar() {
  const { t } = useTranslation();
  const { isMobileSidebarOpen, closeMobileSidebar } = useAppContext();

  // Detect RTL or LTR
  const isRTL = document.documentElement.dir === "rtl";

  return (
    <AnimatePresence>
      {isMobileSidebarOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0  bg-opacity-40 z-40"
            onClick={closeMobileSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}
          <motion.aside
            className={`fixed top-0 ${
              isRTL ? "right-0" : "left-0"
            } w-[254px] h-full bg-base-100 shadow-lg z-50 flex flex-col justify-between py-6 `}
            initial={{ x: isRTL ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? "100%" : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div>
              <h1 className="kaushan-script-regular text-[25px] px-[20px]">
                Easy <span className="text-primary">Sales</span>
              </h1>

              <div className="flex flex-col gap-1 mt-[40px]">
                {links.map(({ id, text, icon, path }) => (
                  <NavLink
                    key={id}
                    to={path}
                    className={({ isActive }) =>
                      `py-4 px-5 flex items-center gap-3 text-lg transition-colors duration-300 ${
                        isActive
                          ? "bg-primary text-primary-content"
                          : "hover:bg-primary hover:text-primary-content"
                      }`
                    }
                    onClick={closeMobileSidebar}
                  >
                    <span>{icon}</span>
                    {t(text)}
                  </NavLink>
                ))}
              </div>
            </div>

            <button className="bg-error text-error-content py-3 px-5 text-lg flex items-center justify-center gap-2 hover:opacity-90">
              {t("logout")}
              <IoIosLogOut size={20} />
            </button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileSidebar;
