import { GrOverview } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import camera from "./assets/camera.jpg";
import dress from "./assets/dress.jpg";
import oil from "./assets/oil.jpg";
import perfume from "./assets/perfume.jpeg";
import {
  FaBox,
  FaTags,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChartLine,
  FaBoxes,
  FaShoppingCart,
  FaMoneyBillWaveAlt,
  FaRegCreditCard,
  FaChartPie,
  FaTshirt,
  FaClipboardList,
  FaCashRegister,
} from "react-icons/fa";

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
    icon: <FaShoppingCart />,
  },
  {
    id: 3,
    path: "/purchases",
    text: "purchases",
    icon: <FaCreditCard />,
  },
  {
    id: 4,
    path: "/reports",
    text: "reports",
    icon: <FaChartLine />,
  },
  {
    id: 5,
    path: "/inventory",
    text: "inventory",
    icon: <FaBoxes />,
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
    icon: <FaMoneyBillWaveAlt />,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "45,200 AF",
    subtitle: "totalSalesMonth",
  },
  {
    id: 2,
    icon: <FaRegCreditCard />,
    color: "text-warning",
    bg: "bg-warning/10",
    title: "32,800 AF",
    subtitle: "totalPurchases",
  },
  {
    id: 3,
    icon: <FaChartPie />,
    color: "text-error",
    bg: "bg-error/10",
    title: "12,400,00 AF",
    subtitle: "monthlyProfit",
  },
  {
    id: 4,
    icon: <FaTshirt />,
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
    icon: <FaMoneyBillWave />,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "AF 135,750",
    subtitle: "totalSalesMonth",
  },
  {
    id: 2,
    icon: <FaClipboardList />,
    color: "text-warning",
    bg: "bg-warning/10",
    title: "7Orders",
    subtitle: "totalOrders",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    color: "text-error",
    bg: "bg-error/10",
    title: "Kabul",
    subtitle: "bestsellingregion",
  },
  {
    id: 4,
    icon: <FaCashRegister />,
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

// Reports page data

export const monthlyReportData = [
  { month: "Jan", sales: 0.9, purchases: 0.7 },
  { month: "Feb", sales: 1.3, purchases: 1 },
  { month: "Mar", sales: 2.8, purchases: 2.4 },
  { month: "Apr", sales: 2.3, purchases: 1.4 },
  { month: "May", sales: 3.1, purchases: 2.3 },
  { month: "Jun", sales: 2.8, purchases: 2.4 },
  { month: "Jul", sales: 1.3, purchases: 2.2 },
  { month: "Aug", sales: 2.8, purchases: 2.9 },
  { month: "Sep", sales: 2.8, purchases: 2 },
  { month: "Oct", sales: 2.2, purchases: 1.9 },
  { month: "Nov", sales: 2.9, purchases: 1.1 },
  { month: "Dec", sales: 1.5, purchases: 2.2 },
];

// sales summary for reports page

export const salesSummaryReports = [
  {
    id: "1",
    icon: <FaBox />,
    title: "1530",
    subtitle: "totalItems",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "2",
    icon: <FaMoneyBillWave />,
    title: "AF 3,450,000",
    subtitle: "totalAmount",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    id: "3",
    icon: <FaTags />,
    title: "mobile",
    subtitle: "topCategory",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    id: "4",
    icon: <FaMapMarkerAlt />,
    title: "kabul",
    subtitle: "activeRegion",
    color: "text-info",
    bg: "bg-info/10",
  },
  {
    id: "5",
    icon: <FaCreditCard />,
    title: "cash",
    subtitle: "topPaymentMethod",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    id: "6",
    icon: <FaCalendarAlt />,
    title: "may",
    subtitle: "topSalesMonth",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

// purchases summary for the reports page
export const purchasesSummaryReports = [
  {
    id: "1",
    icon: <FaBox />,
    title: "244,422 AF",
    subtitle: "totalItems",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "2",
    icon: <FaMoneyBillWave />,
    title: "AF 340,000",
    subtitle: "totalAmount",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    id: "3",
    icon: <FaTags />,
    title: "cosmeticsx",
    subtitle: "topCategory",
    color: "text-info",
    bg: "bg-info/10",
  },
  {
    id: "4",
    icon: <FaMapMarkerAlt />,
    title: "china",
    subtitle: "activeRegion",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    id: "5",
    icon: <FaCreditCard />,
    title: "banktransfer",
    subtitle: "topPaymentMethod",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    id: "6",
    icon: <FaCalendarAlt />,
    title: "jun",
    subtitle: "topPurchaseMonth",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

// line chart for the reports page
export const monthlySalesLineData = [
  { month: "JAN", product: 0, subscription: 0, other: 0 },
  { month: "FEB", product: 1100000, subscription: 500000, other: 800000 },
  { month: "MAR", product: 1000000, subscription: 1300000, other: 600000 },
  { month: "APR", product: 600000, subscription: 2000000, other: 200000 },
  { month: "MAY", product: 400000, subscription: 1800000, other: 150000 },
  { month: "JUN", product: 300000, subscription: 600000, other: 150000 },
  { month: "JUL", product: 250000, subscription: 400000, other: 100000 },
  { month: "AUG", product: 300000, subscription: 500000, other: 200000 },
  { month: "SEP", product: 900000, subscription: 700000, other: 600000 },
  { month: "OCT", product: 1200000, subscription: 1000000, other: 700000 },
  { month: "NOV", product: 800000, subscription: 1300000, other: 300000 },
  { month: "DEC", product: 0, subscription: 0, other: 0 },
];

// inventory page data

export const inventoryCardData = [
  {
    id: 1,
    icon: <FaMoneyBillWaveAlt />,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "125",
    subtitle: "totalProducts",
  },
  {
    id: 2,
    icon: <FaRegCreditCard />,
    color: "text-warning",
    bg: "bg-warning/10",
    title: "4",
    subtitle: "outOfStock",
  },
  {
    id: 3,
    icon: <FaChartPie />,
    color: "text-error",
    bg: "bg-error/10",
    title: "8",
    subtitle: "lowStock",
  },
  {
    id: 4,
    icon: <FaTshirt />,
    color: "text-success",
    bg: "bg-success/10",
    title: "mobile",
    subtitle: "topCategory",
  },
  {
    id: 5,
    icon: <FaMoneyBillWave />,
    color: "text-success",
    bg: "bg-success/10",
    title: "cash",
    subtitle: "topPaymentMethod",
  },
];

// inventory table data
export const inventoryTableData = [
  {
    id: "INV-001",
    name: "iPhone12",
    category: "mobile",
    stock: 10,
    supplier: "easyMobileInc",
    price: "AF 880,000",
    status: "inStock",
    restocked: "2025-04-28",
  },
  {
    id: "INV-002",
    name: "lipstickSet",
    category: "cosmetics",
    stock: 3,
    supplier: "beautyStore",
    price: "AF 450",
    status: "lowStock",
    restocked: "2025-04-22",
  },
  {
    id: "INV-003",
    name: "arganOil",
    category: "cosmetics",
    stock: 0,
    supplier: "heratNaturals",
    price: "AF 450",
    status: "outOfStock",
    restocked: "2025-03-30",
  },
  {
    id: "INV-004",
    name: "galaxyA32",
    category: "mobile",
    stock: 15,
    supplier: "afghanMobiles",
    price: "AF 38,000",
    status: "inStock",
    restocked: "2025-04-12",
  },
  {
    id: "INV-005",
    name: "blackDress",
    category: "clothing",
    stock: 5,
    supplier: "kabulClothingCo",
    price: "AF 1,200",
    status: "lowStock",
    restocked: "2025-04-18",
  },
  {
    id: "INV-006",
    name: "runningShoes",
    category: "clothing",
    stock: 7,
    supplier: "kabulFootwear",
    price: "AF 3,200",
    status: "lowStock",
    restocked: "2025-04-15",
  },
  {
    id: "INV-007",
    name: "hairDryer",
    category: "electronics",
    stock: 20,
    supplier: "techBazaar",
    price: "AF 2,800",
    status: "inStock",
    restocked: "2025-04-20",
  },
  {
    id: "INV-008",
    name: "faceCream",
    category: "cosmetics",
    stock: 0,
    supplier: "naturalGlow",
    price: "AF 750",
    status: "outOfStock",
    restocked: "2025-03-25",
  },
  {
    id: "INV-009",
    name: "bluetoothSpeaker",
    category: "electronics",
    stock: 12,
    supplier: "kabulGadgets",
    price: "AF 1,850",
    status: "inStock",
    restocked: "2025-04-10",
  },
];
