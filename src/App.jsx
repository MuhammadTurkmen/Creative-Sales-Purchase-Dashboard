import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Overview from "./pages/Overview";
import Inventory from "./pages/Inventory";
import Purchases from "./pages/Purchases";
import Sales from "./pages/Sales";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

function App() {
  return (
    // Setting up pages with React router dom @ 6
    <Router>
      <div className={`flex`}>
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <div className="flex-1 py-3 md:py-6 px-[29px]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="Sales" element={<Sales />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
