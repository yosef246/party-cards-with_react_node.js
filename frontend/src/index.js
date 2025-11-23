import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // בודקת באגים בזמן פיתוח StrictMode
  <React.StrictMode>
    <BrowserRouter>
      {/* מאפשר לי לנווט בין דפים */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
