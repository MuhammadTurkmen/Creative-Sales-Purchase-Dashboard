import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Overview from "./pages/Overview";
import Inventory from "./pages/Inventory";
import Purchases from "./pages/Purchases";
import Sales from "./pages/Sales";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import MobileSidebar from "./Components/MobileSidebar";
import Welcome from "./pages/Welcome";

// Protect routes
function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/welcome" />;
}

function App() {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/welcome";

  return (
    <div className="flex">
      {!isWelcomePage && (
        <div className="hidden md:block">
          <Sidebar />
        </div>
      )}

      <div className="flex-1 py-3 md:py-6 px-[29px]">
        {!isWelcomePage && <Navbar />}
        {!isWelcomePage && <MobileSidebar />}

        <Routes>
          {/* Public Route */}
          <Route path="/welcome" element={<Welcome />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Overview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <ProtectedRoute>
                <Inventory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/purchases"
            element={
              <ProtectedRoute>
                <Purchases />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sales"
            element={
              <ProtectedRoute>
                <Sales />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {!isWelcomePage && <Footer />}
      </div>
    </div>
  );
}

export default App;
