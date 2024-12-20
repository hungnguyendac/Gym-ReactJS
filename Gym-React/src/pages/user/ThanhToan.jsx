import React, { useContext, useEffect, useState } from "react";
import "../../assets/thanhtoan.css";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const ThanhToan = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    // Lấy danh sách Tỉnh/Thành
    useEffect(() => {
        const fetchProvinces = async () => {
            const response = await axios.get(
                "https://esgoo.net/api-tinhthanh/1/0.htm"
            );
            setProvinces(response.data.data);
        };
        fetchProvinces();
    }, []);

    // Lấy danh sách Quận/Huyện theo Tỉnh
    const handleProvinceChange = async (e) => {
        const provinceId = e.target.value;
        setSelectedProvince(provinceId);
        setSelectedDistrict("");
        setWards([]);
        if (provinceId) {
            const response = await axios.get(
                `https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`
            );
            setDistricts(response.data.data);
        } else {
            setDistricts([]);
        }
    };

    // Lấy danh sách Xã/Phường theo Quận
    const handleDistrictChange = async (e) => {
        const districtId = e.target.value;
        setSelectedDistrict(districtId);
        if (districtId) {
            const response = await axios.get(
                `https://esgoo.net/api-tinhthanh/3/${districtId}.htm`
            );
            setWards(response.data.data);
        } else {
            setWards([]);
        }
    };

    const { cart } = useContext(CartContext);
    const shippingFee = 20000; // Phí giao hàng cố định
    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    ); // Tạm tính
    const total = subtotal + shippingFee; // Tổng cộng

    return (
        <div className="container my-5">
            <div className="row">
                {/* Thông tin thanh toán */}
                <div className="col-md-8">
                    <h4>THÔNG TIN THANH TOÁN</h4>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label
                                    htmlFor="firstName"
                                    className="form-label"
                                >
                                    Tên *
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Tên của bạn"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="lastName"
                                    className="form-label"
                                >
                                    Họ *
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Họ của bạn"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">
                                    Số điện thoại *
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Số điện thoại của bạn"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">
                                    Địa chỉ email *
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email của bạn"
                                    required
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="country" className="form-label">
                                    Quốc gia/Khu vực
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    defaultValue="Việt Nam"
                                    readOnly=""
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="province"
                                    className="form-label"
                                >
                                    Tỉnh/Thành phố *
                                </label>
                                <select
                                    className="form-select"
                                    id="province"
                                    required
                                    value={selectedProvince}
                                    onChange={handleProvinceChange}
                                >
                                    <option value="">Chọn Tỉnh/Thành</option>
                                    {provinces.map((province) => (
                                        <option
                                            key={province.id}
                                            value={province.id}
                                        >
                                            {province.full_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="district"
                                    className="form-label"
                                >
                                    Quận/Huyện *
                                </label>
                                <select
                                    className="form-select"
                                    id="district"
                                    required
                                    value={selectedDistrict}
                                    onChange={handleDistrictChange}
                                    disabled={!selectedProvince}
                                >
                                    <option value="">Chọn quận/huyện</option>
                                    {districts.map((district) => (
                                        <option
                                            key={district.id}
                                            value={district.id}
                                        >
                                            {district.full_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="ward" className="form-label">
                                    Xã/Phường (tùy chọn)
                                </label>
                                <select
                                    className="form-select"
                                    id="ward"
                                    disabled={!selectedDistrict}
                                >
                                    <option value="">Chọn Xã/Phường</option>
                                    {wards.map((ward) => (
                                        <option key={ward.id} value={ward.id}>
                                            {ward.full_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="address" className="form-label">
                                    Địa chỉ *
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="Địa chỉ của bạn"
                                    required
                                />
                            </div>

                            <div className="col-md-12">
                                <label
                                    htmlFor="orderNotes"
                                    className="form-label"
                                >
                                    Ghi chú đơn hàng (tùy chọn)
                                </label>
                                <textarea
                                    className="form-control"
                                    id="orderNotes"
                                    rows={3}
                                    placeholder="Ghi chú về đơn hàng..."
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {/* Đơn hàng của bạn */}
                <div className="col-md-4">
                    <h4>ĐƠN HÀNG CỦA BẠN</h4>
                    <div className="card">
                        <div className="card-body">
                            {cart.map((product) => {
                                return (
                                    <p key={product.id} className="card-body-product">
                                        <strong>{product.name}</strong> × {product.quantity}
                                    </p>
                                );
                            })}
                            <hr />
                            <p className="d-flex justify-content-between">
                                <span>Tạm tính</span>
                                <strong>{subtotal.toLocaleString()} VNĐ</strong>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Giao hàng</span>
                                <strong>
                                    {shippingFee.toLocaleString()} VNĐ
                                </strong>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Tổng</span>
                                <strong>{total.toLocaleString()} VNĐ</strong>
                            </p>
                            <hr />
                            <div className="form-check mt-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="terms"
                                    required
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="terms"
                                >
                                    Tôi đã đọc và đồng ý với điều khoản và điều
                                    kiện của website *
                                </label>
                            </div>
                            <button className="btn btn-success w-100 mt-3">
                                ĐẶT HÀNG
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThanhToan;
