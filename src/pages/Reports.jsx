// src/Pages/Reports.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import MonthlyReportChart from "../Components/MonthlyReportChart.jsx";
import {
  purchasesSummary,
  purchasesSummaryReports,
  salesSummaryReports,
} from "../utiles";
import SalesLineChart from "../Components/SalesLineChart.jsx";

function Reports() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-medium">{t("reports")}</h1>
      <div>
        <MonthlyReportChart />
      </div>

      {/* summary of the sales and purchases  */}
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-medium mt-10">{t("salesSummary")}</h1>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4">
            {salesSummaryReports.map(
              ({ icon, title, subtitle, color, bg, id }) => (
                <div key={id} className="card bg-base-200 shadow-md">
                  <div className="card-body flex flex-row items-center gap-4 px-4 py-6">
                    <span className={`p-3 rounded-full text-xl ${color} ${bg}`}>
                      {icon}
                    </span>
                    <div>
                      <h3 className="text-base md:text-base font-semibold">
                        {t(title)}
                      </h3>
                      <p className="text-xs md:text-sm text-base-content/70">
                        {t(subtitle)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* purchases summaray  */}
        <div className="flex-1">
          <h1 className="text-3xl font-medium mt-10">
            {t("purchasesSummary")}
          </h1>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4">
            {purchasesSummaryReports.map(
              ({ icon, title, subtitle, color, bg, id }) => (
                <div key={id} className="card bg-base-200 shadow-md">
                  <div className="card-body flex flex-row items-center gap-4 px-4 py-6">
                    <span className={`p-3 rounded-full text-xl ${color} ${bg}`}>
                      {icon}
                    </span>
                    <div>
                      <h3 className="text-base md:text-base font-semibold">
                        {t(title)}
                      </h3>
                      <p className="text-xs md:text-sm text-base-content/70">
                        {t(subtitle)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* line chart component  */}
      <SalesLineChart />
    </div>
  );
}

export default Reports;
