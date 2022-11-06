import React from "react";
import ReactDOM from "react-dom/client";
import { JournalRouter } from "./JournalRouter";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalRouter />
    </BrowserRouter>
  </React.StrictMode>
);
