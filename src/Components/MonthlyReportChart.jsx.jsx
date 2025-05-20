// src/Components/MonthlyReportChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTranslation } from "react-i18next";
import { monthlyReportData } from "../utiles";

function MonthlyReportChart() {
  const { t } = useTranslation();

  return (
    <div className="bg-base-100 p-4 rounded-xl shadow-md space-y-4">
      {/* Section Label: Statistics */}
      <h3 className="text-base font-medium text-gray-500 px-2">
        {t("statistics")}
      </h3>

      {/* Chart Title and Legend Row */}
      <div className="flex flex-col space-y-1 px-2">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <h2 className="text-lg md:text-2xl font-semibold">
            {t("monthlyPurchaseVsSales")}
          </h2>

          {/* Custom Legend */}
          <div className="flex gap-2 flex-col md:flex-row items-center space-x-4 rtl:space-x-reverse text-sm">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="w-3 h-3 rounded-full bg-[#4f46e5]"></span>
              <span>{t("salesAmount")}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="w-3 h-3 rounded-full bg-[#a78bfa]"></span>
              <span>{t("purchaseAmount")}</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-300 w-full my-2" />
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={monthlyReportData}
          barCategoryGap={30}
          barGap={5}
          margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#d1d5db"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tickMargin={12}
            stroke="#8884d8"
          />
          <YAxis
            tickFormatter={(value) => `${value}M`}
            axisLine={false}
            tickLine={false}
            tickMargin={12}
          />
          <Tooltip
            formatter={(value) => `${value}M`}
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              border: "1px solid #e5e7eb",
            }}
            cursor={{ fill: "transparent" }}
          />
          <Bar
            dataKey="sales"
            fill="#4f46e5"
            barSize={12}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="purchases"
            fill="#a78bfa"
            barSize={12}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyReportChart;
