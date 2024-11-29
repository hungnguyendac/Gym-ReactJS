import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./assets/globalStyles.css";
import { CartProvider } from "./context/CartContext.jsx";


createRoot(document.getElementById("root")).render(
    <CartProvider>
        <App />
    </CartProvider>
);
