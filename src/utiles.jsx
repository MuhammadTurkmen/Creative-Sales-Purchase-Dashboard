import { GrOverview } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoHome } from "react-icons/io5";

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
