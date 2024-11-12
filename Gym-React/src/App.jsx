import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HomePage from "./pages/user/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutUser from "./pages/user/LayoutUser";

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
