import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Contexts/AppContext";

function Settings() {
  const { user } = useUser();
  const { language, changeLanguage, setDirection } = useAppContext();
  const { t, i18n } = useTranslation();

  // Set language direction on change
  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    setDirection?.(language === "fa" ? "rtl" : "ltr");
  }, [language, i18n, setDirection]);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold">{t("settings")}</h2>

      {/* User Profile Info */}
      <div className="flex items-center space-x-4">
        <img
          src={user?.imageUrl}
          alt="User"
          className="w-16 h-16 rounded-full border object-cover"
        />
        <div>
          <p className="font-bold text-lg">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-gray-500">
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>

      {/* User Info Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-semibold">{t("first_name")}</label>
          <input
            type="text"
            value={user?.firstName || ""}
            disabled
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("last_name")}</label>
          <input
            type="text"
            value={user?.lastName || ""}
            disabled
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold mt-4">{t("email")}</label>
          <input
            type="text"
            value={user?.primaryEmailAddress?.emailAddress || ""}
            disabled
            className="input input-bordered w-full"
          />
        </div>

        {user?.username && (
          <div>
            <label className="block mb-1 font-semibold mt-4">
              {t("username")}
            </label>
            <input
              type="text"
              value={user.username}
              disabled
              className="input input-bordered w-full"
            />
          </div>
        )}

        {user?.phoneNumbers?.[0]?.phoneNumber && (
          <div>
            <label className="block mb-1 font-semibold mt-4">
              {t("phone")}
            </label>
            <input
              type="text"
              value={user.phoneNumbers[0].phoneNumber}
              disabled
              className="input input-bordered w-full"
            />
          </div>
        )}

        {user?.timezone && (
          <div>
            <label className="block mb-1 font-semibold mt-4">
              {t("time_zone")}
            </label>
            <input
              type="text"
              value={user.timezone}
              disabled
              className="input input-bordered w-full"
            />
          </div>
        )}

        {/* Language Selection */}
        <div className="mt-6">
          <label className="block mb-1 font-semibold">{t("language")}</label>
          <select
            className="select select-bordered w-full"
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Settings;
