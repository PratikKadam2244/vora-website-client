import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { VESHomePage } from "./screens/VESHomePage/VESHomePage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <VESHomePage />
  </StrictMode>,
);
