import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Contexts/AppContext";
import { salesData } from "../utiles";
import SalesFilters from "../Components/SalesFilters";
import SalesTable from "../Components/SalesTable";

function Sales() {
  const { t } = useTranslation();
  const { salesFilters, setFilteredSalesData } = useAppContext();

  const handleSearch = () => {
    const filtered = salesData.filter((item) => {
      return (
        (!salesFilters.date || item.date === salesFilters.date) &&
        (!salesFilters.category || item.category === salesFilters.category) &&
        (!salesFilters.region || item.region === salesFilters.region)
      );
    });
    setFilteredSalesData(filtered);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-medium">{t("sales")}</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 ">
        <SalesFilters onSearch={handleSearch} />

        <SalesTable />
      </div>
    </div>
  );
}

export default Sales;
