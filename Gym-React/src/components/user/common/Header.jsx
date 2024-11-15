import React, { useState } from "react";
import HeaderTop from "./user-headers/HeaderTop";
import HeaderBottom from "./user-headers/HeaderBottom";
import HeaderCenter from "./user-headers/HeaderCenter";
import PopupMoblie from "./user-headers/PopupMoblie";
import CartMoblie from "./user-headers/CartMoblie";

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showCart, setShowCart] = useState(false);

    // Menu-bar onClick
    const handleIconClick = () => {
        setShowPopup(!showPopup);
    };

    // Giỏ hàng click
    const cartOnClick = () => {
        setShowCart(!showCart);
    }

    return (
        <>
            <div
                id="overlay"
                className={`overlay ${showPopup ? "overshow" : ""}`}
                onClick={handleIconClick}
            ></div>
            <div
                className={`close-moblie ${showPopup ? "close-show" : ""}`}
                onClick={handleIconClick}
            >
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                ></button>
            </div>
            <HeaderTop />
            <HeaderCenter
                handleIconClick={handleIconClick}
                cartOnClick={cartOnClick}
            />
            <HeaderBottom />
            {showPopup && <PopupMoblie showPopup={showPopup} />}
            {showCart && (
                <CartMoblie showCart={showCart} cartOnClick={cartOnClick} />
            )}
        </>
    );
};

export default Header;
