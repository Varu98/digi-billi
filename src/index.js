import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import FiltersProvider from "./frontend/contexts/filterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
