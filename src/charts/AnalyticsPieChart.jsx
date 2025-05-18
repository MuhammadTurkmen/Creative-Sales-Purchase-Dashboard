import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { pieChartData } from "../utiles";
import { useTranslation } from "react-i18next";

function AnalyticsPieChart() {
  const { t } = useTranslation();

  return (
    <div className="bg-base-100 rounded-xl px-4 py-8 shadow-sm h-[430px] flex flex-col justify-between">
      <h2 className="text-[22px] font-semibold mb-2">{t("analytics")}</h2>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={105}
            startAngle={90}
            endAngle={-270}
            cornerRadius={22}
            paddingAngle={0}
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <text
            x="50%"
            y="48%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xl font-bold fill-base-content"
          >
            80%
          </text>
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm fill-base-content"
          >
            {t("transactions")}
          </text>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-4 mt-2 text-sm">
        <div className="flex items-center gap-1">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "#4338ca" }}
          ></span>
          <span className="font-semibold">{t("sale")}</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: "#facc15" }}
          ></span>
          {t("distribute")}
        </div>
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#f87171" }}
          ></span>
          {t("return")}
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPieChart;
