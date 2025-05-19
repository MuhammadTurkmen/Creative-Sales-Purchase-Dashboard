import { GrOverview } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import camera from "./assets/camera.jpg";
import dress from "./assets/dress.jpg";
import oil from "./assets/oil.jpg";
import perfume from "./assets/perfume.jpeg";
import {
  FaBoxOpen,
  FaMoneyBillWave,
  FaTruck,
  FaCreditCard,
} from "react-icons/fa";

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

// sales mock data

export const salesData = [
  {
    id: "S-AF001",
    product: "iPhone 12",
    category: "Mobile",
    region: "Kabul",
    customer: "Ahmad Wali",
    qty: 1,
    unitPrice: "AF 80,000",
    total: "AF 80,000",
    date: "2025-05-01",
  },
  {
    id: "S-AF002",
    product: "Argan Oil",
    category: "Cosmetics",
    region: "Herat",
    customer: "Laila Mohammadi",
    qty: 2,
    unitPrice: "AF 450",
    total: "AF 900",
    date: "2025-05-02",
  },
  {
    id: "S-AF003",
    product: "Lipstick Set",
    category: "Cosmetics",
    region: "Kabul",
    customer: "Maryam Sarwari",
    qty: 10,
    unitPrice: "AF 450",
    total: "AF 4500",
    date: "2025-05-03",
  },
  {
    id: "S-AF004",
    product: "Galaxy A32",
    category: "Mobile",
    region: "Bamyan",
    customer: "Gulalai Rahimi",
    qty: 1,
    unitPrice: "AF 38,000",
    total: "AF 38,000",
    date: "2025-05-03",
  },
  {
    id: "S-AF005",
    product: "iPhone 12",
    category: "Mobile",
    region: "Kabul",
    customer: "Gul Khan",
    qty: 2,
    unitPrice: "AF 880,000",
    total: "AF 880,000",
    date: "2025-05-04",
  },
  {
    id: "S-AF006",
    product: "Dell XPS 13",
    category: "Laptop",
    region: "Herat",
    customer: "Samiullah Hotak",
    qty: 1,
    unitPrice: "AF 120,000",
    total: "AF 120,000",
    date: "2025-05-05",
  },
  {
    id: "S-AF007",
    product: "Face Cream",
    category: "Cosmetics",
    region: "Kandahar",
    customer: "Shahla Sadat",
    qty: 3,
    unitPrice: "AF 300",
    total: "AF 900",
    date: "2025-05-06",
  },
  {
    id: "S-AF008",
    product: "Samsung TV",
    category: "Electronics",
    region: "Kabul",
    customer: "Haji Rahmat",
    qty: 1,
    unitPrice: "AF 60,000",
    total: "AF 60,000",
    date: "2025-05-06",
  },
  {
    id: "S-AF009",
    product: "Nokia 3310",
    category: "Mobile",
    region: "Mazar",
    customer: "Zabihullah Ferozi",
    qty: 1,
    unitPrice: "AF 1,000",
    total: "AF 1,000",
    date: "2025-05-07",
  },
  // {
  //   id: "S-AF010",
  //   product: "Lenovo Yoga",
  //   category: "Laptop",
  //   region: "Kandahar",
  //   customer: "Fereshta Wahdat",
  //   qty: 1,
  //   unitPrice: "AF 95,000",
  //   total: "AF 95,000",
  //   date: "2025-05-08",
  // },
];

// Summary card data for the sales page

export const salesSummary = [
  {
    id: 1,
    icon: <FiSettings />,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "AF 135,750",
    subtitle: "totalSalesMonth",
  },
  {
    id: 2,
    icon: <FiSettings />,
    color: "text-warning",
    bg: "bg-warning/10",
    title: "7Orders",
    subtitle: "totalOrders",
  },
  {
    id: 3,
    icon: <FiSettings />,
    color: "text-error",
    bg: "bg-error/10",
    title: "Kabul",
    subtitle: "bestsellingregion",
  },
  {
    id: 4,
    icon: <FiSettings />,
    color: "text-success",
    bg: "bg-success/10",
    title: "cash",
    subtitle: "mostusedpayment",
  },
];

// purcheses page data

export const purchasesData = [
  {
    id: "P001",
    product: "Printer",
    category: "electronics",
    supplier: "HP Supplies",
    qty: 5,
    unitPrice: "AF 120",
    total: "AF 600",
    region: "North",
    date: "2025-05-01",
  },
  {
    id: "P002",
    product: "Office Chair",
    category: "furniture",
    supplier: "Comfort Co",
    qty: 10,
    unitPrice: "AF 75",
    total: "AF 750",
    region: "West",
    date: "2025-05-02",
  },
  {
    id: "P003",
    product: "Laptop",
    category: "electronics",
    supplier: "Tech Mart",
    qty: 3,
    unitPrice: "AF 850",
    total: "AF 2550",
    region: "East",
    date: "2025-05-03",
  },
  {
    id: "P004",
    product: "Paper Reams",
    category: "stationery",
    supplier: "Office Supplies Ltd",
    qty: 20,
    unitPrice: "AF 5",
    total: "AF 100",
    region: "South",
    date: "2025-05-04",
  },
  {
    id: "P005",
    product: "Desk",
    category: "furniture",
    supplier: "Comfort Co",
    qty: 4,
    unitPrice: "AF 300",
    total: "AF 1200",
    region: "North",
    date: "2025-05-05",
  },
  {
    id: "P006",
    product: "Router",
    category: "electronics",
    supplier: "NetWorld",
    qty: 6,
    unitPrice: "AF 60",
    total: "AF 360",
    region: "West",
    date: "2025-05-06",
  },
  {
    id: "P007",
    product: "Whiteboard",
    category: "stationery",
    supplier: "Office Supplies Ltd",
    qty: 2,
    unitPrice: "AF 90",
    total: "AF 180",
    region: "East",
    date: "2025-05-07",
  },
  {
    id: "P008",
    product: "Mouse",
    category: "electronics",
    supplier: "Tech Mart",
    qty: 12,
    unitPrice: "AF 25",
    total: "AF 300",
    region: "South",
    date: "2025-05-08",
  },
  {
    id: "P009",
    product: "Bookshelf",
    category: "furniture",
    supplier: "WoodWorks",
    qty: 3,
    unitPrice: "AF 200",
    total: "AF 600",
    region: "North",
    date: "2025-05-09",
  },
];

export const purchasesSummary = [
  {
    id: "1",
    icon: <FaBoxOpen />,
    title: "1,320",
    subtitle: "itemsPurchased",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: "2",
    icon: <FaMoneyBillWave />,
    title: "AF 2,340,000",
    subtitle: "totalSpent",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    id: "3",
    icon: <FaTruck />,
    title: "Office Supplies Ltd",
    subtitle: "frequentSupplier",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    id: "4",
    icon: <FaCreditCard />,
    title: "banktransfer",
    subtitle: "paymentMode",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];
