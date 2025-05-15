import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <Router>
    <ShopContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ShopContextProvider>
  </Router>
);
