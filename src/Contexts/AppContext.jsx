import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n";

// creating context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || false
  );

  //   state for the mobile sidebar
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  //   state for language
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  // function or handlers for the mobile sidebar
  const openMobileSidebar = () => setIsMobileSidebarOpen(true);
  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

  //   function for toggling the mode
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  };

  //   useEffect for changing the mode
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  //   useEffect for changing the language and LTR to RTL or vise versa
  useEffect(() => {
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        language,
        changeLanguage,
        isMobileSidebarOpen,
        openMobileSidebar,
        closeMobileSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom hook
export const useAppContext = () => useContext(AppContext);
