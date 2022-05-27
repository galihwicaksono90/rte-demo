import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Global } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global
      styles={{
        fontSize: "16px",
      }}
    />
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ fontFamily: "Montserrat" }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
