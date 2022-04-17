import React from "react";
import { SWRConfig } from "swr";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { fetcher } from "./common/services/utils";
import { pollingInterval } from "./common/services/schedules";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        refreshInterval: pollingInterval,
        fetcher,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
