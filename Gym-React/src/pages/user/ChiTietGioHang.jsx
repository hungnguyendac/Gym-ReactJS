import React, { useContext } from "react";
import "../../assets/giohang.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const ChiTietGioHang = () => {
    const { cart } = useContext(CartContext);

    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + item.quantity * item.price,
            0
        );
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
                                                <tr>
                                                    <td className="cart-product">
                                                        <i>
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
                                                            <a href="">
                                                                {product.name}
                                                            </a>
                                                        </span>
                                                    </td>
                                                    <td className="cart-price">
                                                        {product.price.toLocaleString()}{" "}
                                                        VNĐ
                                                    </td>
                                                    <td className="quantity-input">
                                                        <button className="quantity-button">
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
                                                        <button className="quantity-button">
                                                            +
                                                        </button>
                                                    </td>
                                                    <td className="cart-price cart-price-last">
                                                        {getTotalPrice().toLocaleString()}{" "}
                                                        VNĐ
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <span className="button-back">
                                    <i className="fa-solid fa-arrow-left-long" />
                                    <a href="">Tiếp tục xem sản phẩm</a>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="cart-right">
                                <div className="cart-header">CỘNG GIỎ HÀNG</div>
                                <div className="cart-item">
                                    <span className="item-label">Tạm tính</span>
                                    <span className="item-value">
                                        295,000VNĐ
                                    </span>
                                </div>
                                <div className="cart-item">
                                    <span className="item-label">
                                        Phí Giao Hàng
                                    </span>
                                    <span className="item-value">
                                        20,000VNĐ
                                    </span>
                                </div>
                                <div className="cart-total">
                                    <span className="total-label">Tổng</span>
                                    <span className="total-value">
                                        315,000VNĐ
                                    </span>
                                </div>
                                <button className="checkout-button">
                                    TIẾN HÀNH THANH TOÁN
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
