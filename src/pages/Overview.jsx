import React from "react";
import { useTranslation } from "react-i18next";
import { sellingsAndProfits } from "../utiles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import { lineChartData, pieChartData } from "../utiles";
import AnalyticsPieChart from "../charts/AnalyticsPieChart";
import SalesLineChart from "../charts/SalesLineChart";

function Overview() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-xl md:text-3xl font-medium mt-4 md:mt-0">
        {t("overview")}
      </h1>

      {/* Card Grid */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sellingsAndProfits.map(({ icon, title, subtitle, color, bg, id }) => (
          <div key={id} className="card bg-base-200 shadow-md">
            <div className="card-body flex flex-row items-center gap-4 px-4 py-6 ">
              {/* Icon Bubble */}
              <span className={`p-3 rounded-full text-xl ${color} ${bg}`}>
                {icon}
              </span>

              {/* Card Content */}
              <div>
                <h3 className="text-sm md:text-base font-semibold">{title}</h3>
                <p className="text-xs md:text-sm text-base-content/70">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <SalesLineChart />
        </div>
        <div className="lg:col-span-2">
          <AnalyticsPieChart />
        </div>
      </div>
    </div>
  );
}

export default Overview;
