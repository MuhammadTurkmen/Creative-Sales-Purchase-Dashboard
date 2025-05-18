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
      analytics: "Analytics",
      transactions: "Transactions",
      sale: "Sale",
      distribute: "Distribute",
      return: "Return",
      totalSalesMonth: "Total Sales (Month)",
      totalPurchases: "Total Purchases",
      monthlyProfit: "Profit (Monthly)",
      bestSelling: "Best-Selling",
      productMensTShirt: "Men’s T-Shirt",
      recentOrders: "Recent Orders",
      trackingNo: "Tracking no",
      productName: "Product Name",
      price: "Price",
      totalOrder: "Total Order",
      totalAmount: "Total Amount",
      topSellingProducts: "Top Selling Products",
      Shoes: "Shoes Black Pattern",
      iphone: "iPhone 12",
      stars: "★★★★★",
      "Camera Lens": "Camera Lens",
      "Black Sleep Dress": "Black Sleep Dress",
      "Argan Oil": "Argan Oil",
      "EAU DE Parfum": "EAU DE Parfum",
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
      analytics: "تحلیل‌ها",
      transactions: "تراکنش‌ها",
      sale: "فروش",
      distribute: "توزیع",
      return: "بازگشت",
      totalSalesMonth: "مجموع فروش (ماهانه)",
      totalPurchases: "مجموع خرید",
      monthlyProfit: "سود (ماهانه)",
      bestSelling: "پرفروش‌ترین",
      productMensTShirt: "تی‌شرت مردانه",
      recentOrders: "سفارش‌های اخیر",
      trackingNo: "شماره پیگیری",
      productName: "نام محصول",
      price: "قیمت",
      totalOrder: "تعداد سفارش",
      totalAmount: "مبلغ کل",
      topSellingProducts: "محصولات پرفروش",
      Shoes: "کفش با الگوی مشکی",
      iphone: "آیفون ۱۲",
      stars: "★★★★★",
      "Camera Lens": "لنز دوربین",
      "Black Sleep Dress": "پیراهن شب مشکی",
      "Argan Oil": "روغن آرگان",
      "EAU DE Parfum": "عطر EAU DE",
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
