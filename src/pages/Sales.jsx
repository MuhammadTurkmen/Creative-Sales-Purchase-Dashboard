import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Contexts/AppContext";
import { salesData, salesSummary, sellingsAndProfits } from "../utiles";
import SalesFilters from "../Components/SalesFilters";
import SalesTable from "../Components/SalesTable";

function Sales() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-medium">{t("sales")}</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 ">
        <SalesFilters />
        {/*  */}
        <SalesTable />
      </div>

      {/* summary part */}
      <h1 className="text-3xl font-medium mt-10">{t("summary")}</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {salesSummary.map(({ icon, title, subtitle, color, bg, id }) => (
          <div key={id} className="card bg-base-200 shadow-md">
            <div className="card-body flex flex-row items-center gap-4 px-4 py-6 ">
              {/* Icon Bubble */}
              <span className={`p-3 rounded-full text-2xl ${color} ${bg}`}>
                {icon}
              </span>

              {/* Card Content */}
              <div>
                <h3 className="text-base md:text-lg font-semibold">
                  {t(title)}
                </h3>
                <p className="text-xs md:text-sm text-base-content/70">
                  {t(subtitle)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;
