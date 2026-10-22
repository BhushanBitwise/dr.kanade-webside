import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/localities.css";
import "./styles/booking.css";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
