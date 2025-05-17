import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      overview: "Overview",
      sales: "Sales",
      purchases: "Purchases",
      reports: "Reports",
      inventory: "Inventory",
      settings: "Settings",
      logout: "Logout",
      welcome: "Welcome",
      language: "Language",
    },
  },
  fa: {
    translation: {
      overview: "نمای کلی",
      sales: "فروش",
      purchases: "خرید",
      reports: "گزارش‌ها",
      inventory: "موجودی",
      settings: "تنظیمات",
      logout: "خروج",
      welcome: "خوش آمدید",
      language: "زبان",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
