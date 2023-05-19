import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

// css
import "./index.css";

// state
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
