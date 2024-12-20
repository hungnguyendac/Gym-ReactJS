import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";


const CartMoblie = ({ showCart, cartOnClick }) => {
    const { cart, dispatch } = useContext(CartContext);

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + item.quantity * item.price,0);
    };
   

    return (
        <div className={`cart-modal-overlay ${showCart ? "show-cart" : ""}`}>
            <div className="cart-modal">
                <i id="close-btn" onClick={cartOnClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </i>
                <div className="total">
                    <h3>GIỎ HÀNG</h3>
                    <hr />
                    {cart.length === 0 ? (
                        <span>Chưa có sản phẩm nào trong giỏ hàng.</span>
                    ) : (
                        <div className="cart-modal-main">
                            {cart.map((item) => (
                                <div className="cart-items" key={item.id}>
                                    <div className="cart-item">
                                        <img
                                            src={item.normalImage}
                                            alt="Product Image"
                                            className="cart-item-image"
                                        />
                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <p>
                                                {item.quantity} ×{" "}
                                                {item.price.toLocaleString()}{" "}
                                                VNĐ
                                            </p>
                                        </div>
                                        <i
                                            className="cart-item-remove"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </i>
                                    </div>
                                </div>
                            ))}
                            <p className="cart-total">
                                Tổng số tiền: {getTotalPrice().toLocaleString()}{" "}
                                VNĐ
                            </p>
                            <div className="cart-buttons">
                                <Link to="/gio-hang" className="btn btn-cart">
                                    XEM GIỎ HÀNG
                                </Link>
                                <Link to="/payment" className="btn btn-checkout">
                                    THANH TOÁN
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartMoblie;
