import React from "react";
import { useAppContext } from "../Contexts/AppContext";
import { useTranslation } from "react-i18next";

function Settings() {
  const { language, changeLanguage } = useAppContext();
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{t("settings")}</h2>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{t("language")}</span>
        </label>
        <select
          className="select select-bordered"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fa">فارسی</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
