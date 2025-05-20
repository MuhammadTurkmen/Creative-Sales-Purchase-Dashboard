import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./Contexts/AppContext";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkFrontendApi =
  "pk_test_YWN0aXZlLWJ1cnJvLTU2LmNsZXJrLmFjY291bnRzLmRldiQ";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </ClerkProvider>
  </StrictMode>
);
