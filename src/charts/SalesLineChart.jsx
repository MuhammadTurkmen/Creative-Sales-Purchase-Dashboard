import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { lineChartData } from "../utiles";

function SalesLineChart() {
  return (
    <div className="bg-base-100 rounded-xl px-4 py-6 shadow-sm">
      <h2 className="text-[22px] pl-6 mb-4 font-semibold mb-2">Reports</h2>
      <ResponsiveContainer width="100%" height={336}>
        <LineChart data={lineChartData}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
          <XAxis dataKey="time" tickMargin={10} axisLine={false} />
          <YAxis tickMargin={10} axisLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="url(#gradient)"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesLineChart;
