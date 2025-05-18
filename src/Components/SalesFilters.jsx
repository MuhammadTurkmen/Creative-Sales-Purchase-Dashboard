import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Contexts/AppContext";
import { salesData } from "../utiles";

function SalesFilters({ onSearch }) {
  const { t } = useTranslation();
  const { salesFilters, setSalesFilters } = useAppContext();

  const uniqueDates = [...new Set(salesData.map((d) => d.date))];
  const uniqueCategories = [...new Set(salesData.map((d) => d.category))];
  const uniqueRegions = [...new Set(salesData.map((d) => d.region))];

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {/* Date Filter */}
      <select
        className="select select-bordered w-full text-lg"
        value={salesFilters.date}
        onChange={(e) =>
          setSalesFilters({ ...salesFilters, date: e.target.value })
        }
      >
        <option value="">{t("date")}</option>
        {uniqueDates.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      {/* Category Filter */}
      <select
        className="select select-bordered w-full text-lg"
        value={salesFilters.category}
        onChange={(e) =>
          setSalesFilters({ ...salesFilters, category: e.target.value })
        }
      >
        <option value="">{t("category")}</option>
        {uniqueCategories.map((d) => (
          <option key={d} value={d}>
            {t(d)}
          </option>
        ))}
      </select>

      {/* Region Filter */}
      <select
        className="select select-bordered w-full text-lg"
        value={salesFilters.region}
        onChange={(e) =>
          setSalesFilters({ ...salesFilters, region: e.target.value })
        }
      >
        <option value="">{t("region")}</option>
        {uniqueRegions.map((r) => (
          <option key={r} value={r}>
            {t(r)}
          </option>
        ))}
      </select>

      {/* Search Button */}
      <button className="btn btn-primary w-full text-lg" onClick={onSearch}>
        {t("search")}
      </button>
    </div>
  );
}

export default SalesFilters;
