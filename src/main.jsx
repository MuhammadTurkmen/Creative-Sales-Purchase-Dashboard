import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./Contexts/AppContext";
import "./index.css";
import App from "./App.jsx";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
