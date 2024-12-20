import React, { useContext, useState } from "react";
import "../../assets/giohang.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ChiTietGioHang = () => {
    const { cart, dispatch } = useContext(CartContext);

    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + item.quantity * item.price,
            0
        );
    };

    let gia = getTotalPrice();
    let tong = gia + 20000;

    let giaFormatted = gia.toLocaleString();
    let tongFormatted = tong.toLocaleString();

    // Hàm giảm số lượng
    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch({
                type: "UPDATE_QUANTITY",
                payload: { id: item.id, quantity: item.quantity - 1 },
            });
        }
    };

    // Hàm tăng số lượng
    const increaseQuantity = (item) => {
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: { id: item.id, quantity: item.quantity + 1 },
        });
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

    return (
        <div className="cart-main">
            <div className="container">
                {cart.length === 0 ? (
                    <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
                ) : (
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="cart-left">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th className="cart-left-price">
                                                Giá
                                            </th>
                                            <th>Số lượng</th>
                                            <th className="provisional">
                                                Tạm tính
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="cart-product-tittle-js">
                                        {cart.map((product) => {
                                            return (
                                                <tr key={product.id}>
                                                    <td className="cart-product">
                                                        <i
                                                            onClick={() =>
                                                                removeFromCart(
                                                                    product.id
                                                                )
                                                            }
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faTimesCircle
                                                                }
                                                            />
                                                        </i>
                                                        <img
                                                            src={
                                                                product.normalImage
                                                            }
                                                            alt="abc"
                                                        />
                                                        <span>
                                                            <Link
                                                                to={`/productdetail/${product.id}`}
                                                            >
                                                                {product.name}
                                                            </Link>
                                                        </span>
                                                    </td>
                                                    <td className="cart-price">
                                                        {product.price.toLocaleString()}{" "}
                                                        VNĐ
                                                    </td>
                                                    <td className="quantity-input">
                                                        <button
                                                            className="quantity-button"
                                                            onClick={() =>
                                                                decreaseQuantity(
                                                                    product
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            id="quantity"
                                                            value={
                                                                product.quantity
                                                            }
                                                            readOnly=""
                                                        />
                                                        <button
                                                            className="quantity-button"
                                                            onClick={() =>
                                                                increaseQuantity(
                                                                    product
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td className="cart-price cart-price-last">
                                                        {giaFormatted} VNĐ
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <span className="button-back">
                                    <i className="fa-solid fa-arrow-left-long" />
                                    <Link to="/producttittle">
                                        Tiếp tục xem sản phẩm
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="cart-right">
                                <div className="cart-header">CỘNG GIỎ HÀNG</div>
                                <div className="cart-item">
                                    <span className="item-label">Tạm tính</span>
                                    <span className="item-value">
                                        {giaFormatted} VNĐ
                                    </span>
                                </div>
                                <div className="cart-item">
                                    <span className="item-label">
                                        Phí Giao Hàng
                                    </span>
                                    <span className="item-value">
                                        20.000 VNĐ
                                    </span>
                                </div>
                                <div className="cart-total">
                                    <span className="total-value">
                                        Tổng {tongFormatted} VNĐ
                                    </span>
                                </div>
                                <button className="checkout-button">
                                    <Link to="/payment">
                                        TIẾN HÀNH THANH TOÁN
                                    </Link>
                                </button>
                                <div className="discount-section">
                                    <div className="discount-label">
                                        Phiếu ưu đãi
                                    </div>
                                    <input
                                        type="text"
                                        className="discount-input"
                                        placeholder="Mã ưu đãi"
                                    />
                                    <button className="apply-button">
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChiTietGioHang;
