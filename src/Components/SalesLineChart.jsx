import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { useTranslation } from "react-i18next";
import { monthlySalesLineData } from "../utiles";

function SalesLineChart() {
  const { t } = useTranslation();

  return (
    <div className="bg-base-100 p-4 rounded-xl shadow-md space-y-4">
      <h3 className="text-base font-medium text-gray-500">{t("statistics")}</h3>

      <div className="flex flex-col md:flex-row items-center justify-between px-2">
        <h2 className="text-lg md:text-2xl font-semibold">
          {t("salesReport")}
        </h2>

        {/* Legend */}
        <div className="flex gap-4 text-sm mt-2 md:mt-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-600" />
            <span>{t("productSales")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span>{t("subscriptionSales")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400" />
            <span>{t("otherSales")}</span>
          </div>
        </div>
      </div>

      {/* Minimalist Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={monthlySalesLineData}
          margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        >
          {/* Only horizontal grid lines */}
          <CartesianGrid
            strokeDasharray="6 6"
            vertical={false}
            stroke="#e5e7eb"
          />

          {/* Y Axis hidden line */}
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }} // optional styling
          />

          {/* X Axis hidden line */}
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />

          {/* Tooltip */}
          <Tooltip formatter={(value) => `${value.toLocaleString()} AF`} />

          {/* Data lines */}
          <Line
            type="monotone"
            dataKey="product"
            stroke="#7c3aed"
            strokeWidth={2}
            strokeDasharray="6 6"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="subscription"
            stroke="#f43f5e"
            strokeWidth={2}
            strokeDasharray="6 6"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="other"
            stroke="#60a5fa"
            strokeWidth={2}
            strokeDasharray="6 6"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesLineChart;
