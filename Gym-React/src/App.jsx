import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HomePage from "./pages/user/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutUser from "./pages/user/LayoutUser";
import FlashSale from "./pages/user/FlashSale";
import ProductTittle from "./pages/user/ProductTittle";
import ProductDetail from "./pages/user/ProductDetail";
import ChiTietGioHang from "./pages/user/ChiTietGioHang";
import Search from "./components/user/Search";
import ThanhToan from "./pages/user/ThanhToan";
import Shop from "./pages/user/Shop";
import TinTucSuKien from "./pages/user/TinTucSuKien";
import BaiTapGym from "./pages/user/BaiTapGym";
import NotFound from "./pages/user/NotFound";

// Import config tailwind.css
// import "./assets/config/tailwind.css";


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
                    <Route path="/flashsale" element={<FlashSale />} />
                    <Route path="/producttittle" element={<ProductTittle />} />
                    <Route
                        path="/productdetail/:id"
                        element={<ProductDetail />}
                    />
                    <Route path="/gio-hang" element={<ChiTietGioHang />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/payment" element={<ThanhToan />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/tintuc" element={<TinTucSuKien />} />
                    <Route path="/bai-tap-gym" element={<BaiTapGym />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

            
            </Routes>
        </BrowserRouter>
    );
};

export default App;
