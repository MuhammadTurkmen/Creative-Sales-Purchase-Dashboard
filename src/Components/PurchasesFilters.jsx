import React from "react";
import { useTranslation } from "react-i18next";
import { purchasesData } from "../utiles";
import { useAppContext } from "../Contexts/AppContext";

function PurchasesFilters() {
  const { t } = useTranslation();
  const { purchaseFilters, setPurchaseFilters, handlePurchaseSearch } =
    useAppContext();

  const uniqueDates = [...new Set(purchasesData.map((d) => d.date))];
  const uniqueCategories = [...new Set(purchasesData.map((d) => d.category))];
  const uniqueRegions = [...new Set(purchasesData.map((d) => d.region))];

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
      <select
        className="select select-bordered w-full text-lg"
        value={purchaseFilters.date}
        onChange={(e) =>
          setPurchaseFilters({ ...purchaseFilters, date: e.target.value })
        }
      >
        <option value="">{t("date")}</option>
        {uniqueDates.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <select
        className="select select-bordered w-full text-lg"
        value={purchaseFilters.category}
        onChange={(e) =>
          setPurchaseFilters({ ...purchaseFilters, category: e.target.value })
        }
      >
        <option value="">{t("category")}</option>
        {uniqueCategories.map((d) => (
          <option key={d} value={d}>
            {t(d)}
          </option>
        ))}
      </select>

      <select
        className="select select-bordered w-full text-lg"
        value={purchaseFilters.region}
        onChange={(e) =>
          setPurchaseFilters({ ...purchaseFilters, region: e.target.value })
        }
      >
        <option value="">{t("region")}</option>
        {uniqueRegions.map((r) => (
          <option key={r} value={r}>
            {t(r)}
          </option>
        ))}
      </select>

      <button
        className="btn btn-primary w-full text-lg"
        onClick={handlePurchaseSearch}
      >
        {t("search")}
      </button>
    </div>
  );
}

export default PurchasesFilters;
