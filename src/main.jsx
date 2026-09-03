import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/Tarjeta.css";
import Tarjeta from "./Tarjeta.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tarjeta />
  </StrictMode>
);