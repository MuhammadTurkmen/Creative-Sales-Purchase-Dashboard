import { GrOverview } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoHome } from "react-icons/io5";

export const links = [
  {
    id: 1,
    path: "/",
    text: "Overview",
    icon: <IoHome />,
  },
  {
    id: 2,
    path: "/sales",
    text: "Sales",
    icon: <GrOverview />,
  },
  {
    id: 3,
    path: "/purchases",
    text: "Purchases",
    icon: <GrOverview />,
  },
  {
    id: 4,
    path: "/reports",
    text: "Reports",
    icon: <GrOverview />,
  },
  {
    id: 5,
    path: "/inventory",
    text: "Inventory",
    icon: <GrOverview />,
  },
  {
    id: 6,
    path: "/settings",
    text: "Settings",
    icon: <FiSettings />,
  },
];
