import { GrOverview } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoHome } from "react-icons/io5";

// links for Navbar, sidebar, and mobile sidebar
export const links = [
  {
    id: 1,
    path: "/",
    text: "overview",
    icon: <IoHome />,
  },
  {
    id: 2,
    path: "/sales",
    text: "sales",
    icon: <GrOverview />,
  },
  {
    id: 3,
    path: "/purchases",
    text: "purchases",
    icon: <GrOverview />,
  },
  {
    id: 4,
    path: "/reports",
    text: "reports",
    icon: <GrOverview />,
  },
  {
    id: 5,
    path: "/inventory",
    text: "inventory",
    icon: <GrOverview />,
  },
  {
    id: 6,
    path: "/settings",
    text: "settings",
    icon: <FiSettings />,
  },
];

export const sellingsAndProfits = [
  {
    id: 1,
    icon: <FiSettings />,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "45,200 AF",
    subtitle: "Total Sales (Month)",
  },
  {
    id: 2,
    icon: <FiSettings />,
    color: "text-warning",
    bg: "bg-warning/10",
    title: "32,800 AF",
    subtitle: "Total Purchases",
  },
  {
    id: 3,
    icon: <FiSettings />,
    color: "text-error",
    bg: "bg-error/10",
    title: "12,400,00 AF",
    subtitle: "Profit (Monthly)",
  },
  {
    id: 4,
    icon: <FiSettings />,
    color: "text-success",
    bg: "bg-success/10",
    title: "Men’s T-Shirt",
    subtitle: "Best-Selling",
  },
];

// utiles.jsx
export const lineChartData = [
  { time: "10am", sales: 45 },
  { time: "11am", sales: 60 },
  { time: "12pm", sales: 55 },
  { time: "01am", sales: 40 },
  { time: "02am", sales: 70 },
  { time: "03am", sales: 30 },
  { time: "04am", sales: 35 },
  { time: "05am", sales: 50 },
  { time: "06am", sales: 65 },
  { time: "07am", sales: 75 },
];

export const pieChartData = [
  { name: "Sale", value: 50, fill: "#4338ca" }, // Indigo - Big
  { name: "Distribute", value: 30, fill: "#facc15" }, // Yellow - Medium
  { name: "Return", value: 10, fill: "#f87171" }, // Red - Small
  { name: "Empty", value: 10, fill: "#f4f4f5" }, // Gray - Unfilled
];
