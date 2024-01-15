import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Wrapper } from "./components/Wrapper/Wrapper.jsx";
import "./main.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Wrapper />
  </StrictMode>
);
