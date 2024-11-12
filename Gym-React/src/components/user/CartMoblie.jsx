import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CartMoblie = () => {
    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <i id="close-btn">
                    <FontAwesomeIcon icon={faTimes} />
                </i>
                <div className="total">
                    <h3>GIỎ HÀNG</h3>
                    <hr />
                    <div className="cart-modal-main">{/* Tý nữa ấy sau */}</div>
                    <span>Chưa có sản phẩm nào trong giỏ hàng.</span>
                    <a href="./gio-hang.html">
                        <button>Giỏ Hàng</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CartMoblie;