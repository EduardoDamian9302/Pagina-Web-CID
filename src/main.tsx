import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import App from "./App.tsx";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faS } from "@fortawesome/free-solid-svg-icons";
library.add(faS);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
