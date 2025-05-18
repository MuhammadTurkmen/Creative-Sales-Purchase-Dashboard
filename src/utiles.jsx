import { GrOverview } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import camera from "./assets/camera.jpg";
import dress from "./assets/dress.jpg";
import oil from "./assets/oil.jpg";
import perfume from "./assets/perfume.jpeg";

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

// first cards data in the overveiw page
export const sellingsAndProfits = [
  {
    id: 1,
    icon: <FiSettings />,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "45,200 AF",
    subtitle: "totalSalesMonth",
  },
  {
    id: 2,
    icon: <FiSettings />,
    color: "text-warning",
    bg: "bg-warning/10",
    title: "32,800 AF",
    subtitle: "totalPurchases",
  },
  {
    id: 3,
    icon: <FiSettings />,
    color: "text-error",
    bg: "bg-error/10",
    title: "12,400,00 AF",
    subtitle: "monthlyProfit",
  },
  {
    id: 4,
    icon: <FiSettings />,
    color: "text-success",
    bg: "bg-success/10",
    title: "productMensTShirt",
    subtitle: "bestSelling",
  },
];

// line charts data for the overview page
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

// pie chart data for the overview page
export const pieChartData = [
  { name: "Sale", value: 50, fill: "#4338ca" }, // Indigo - Big
  { name: "Distribute", value: 30, fill: "#facc15" }, // Yellow - Medium
  { name: "Return", value: 10, fill: "#f87171" }, // Red - Small
  { name: "Empty", value: 10, fill: "#f4f4f5" }, // Gray - Unfilled
];

// recent orders data for overview page
export const recentOrders = [
  {
    id: "#876364",
    name: "Camera Lens",
    price: "$178",
    total: 325,
    amount: "$1,46,660",
    img: camera,
  },
  {
    id: "#876368",
    name: "Black Sleep Dress",
    price: "$14",
    total: 53,
    amount: "$46,660",
    img: dress,
  },
  {
    id: "#876412",
    name: "Argan Oil",
    price: "$21",
    total: 78,
    amount: "$3,46,676",
    img: oil,
  },
  {
    id: "#876621",
    name: "EAU DE Parfum",
    price: "$32",
    total: 98,
    amount: "$3,46,981",
    img: perfume,
  },
];
