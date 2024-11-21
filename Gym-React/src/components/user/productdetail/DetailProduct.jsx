import React from "react";
import DetailBottom from "./DetailBottom";
import { Link } from "react-router-dom";

const DetailProduct = ({data}) => {

    return (
        <>
            <div className="col-12 col-sm-6 col-md-6">
                <div className="product-detail-tittle">
                    <h3 className="name-product">{data.name}</h3>
                    <hr />
                    <h3 className="product-price">{data.price} VNĐ</h3>
                    <ul>
                        <li>
                            <b>Chất liệu</b>: {data.tittle}
                        </li>
                        <li>
                            <b>Kiểu dáng</b>: {data.style}
                        </li>
                    </ul>

                    <b>Hotline tư vấn miễn phí: 0902 77 1186</b>
                    <h5>
                        <Link to="/shop">SHOP GẦN NHẤT</Link>
                    </h5>
                </div>
                <form>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min={1}
                        defaultValue={1}
                    />
                    <button
                        className="button-card"
                        id="add-to-cart"
                        type="button"
                        disabled=""
                    >
                        THÊM VÀO GIỎ HÀNG
                    </button>
                </form>
                <DetailBottom />
            </div>
        </>
    );
};

export default DetailProduct;
