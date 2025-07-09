import React from "react";
import ReactDOM from "react-dom/client"; // ✅ use 'react-dom/client' for Vite
import App from "./App";
import { ContextProvider } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
