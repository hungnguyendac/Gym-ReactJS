import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HomePage from "./pages/user/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutUser from "./pages/user/LayoutUser";
import FlashSale from "./pages/user/FlashSale";
import ProductTittle from "./pages/user/ProductTittle";
import ProductDetail from "./pages/user/ProductDetail";

const App = () => {
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
            }}
        >
            <Routes>
                <Route path="/" element={<LayoutUser />}>
                    <Route index element={<HomePage />} />
                    <Route path="/flashsale" element={<FlashSale/>}/>
                    <Route path="/producttittle" element={<ProductTittle/>}/>
                    <Route path="/productdetail/:id" element={<ProductDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
