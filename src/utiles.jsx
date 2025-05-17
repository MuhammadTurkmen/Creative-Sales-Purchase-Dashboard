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
