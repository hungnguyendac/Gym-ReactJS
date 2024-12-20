import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
// import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById("root")).render(
    <CartProvider>
        <App />
    </CartProvider>
);
