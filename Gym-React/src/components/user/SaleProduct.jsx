import React from "react";
import { Link } from "react-router-dom";

const SaleProduct = ({product}) => {

    let giaGoc = product.initialPrice;
    let giaGiam = product.price;
    let percent = Math.ceil(((giaGoc - giaGiam) / giaGoc) * 100);

    // Chuyển đổi giá trị thành chuỗi với định dạng tiền tệ
    let giaGocFormatted = giaGoc.toLocaleString("vi-VN");
    let giaGiamFormatted = giaGiam.toLocaleString("vi-VN");

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="product">
                <Link to={`/productdetail/${product.id}`}>
                    <div className="image-container">
                        <img
                            src={product.normalImage}
                            alt="Normal Image"
                            className="normal-img"
                        />
                        <img
                            src={product.hoverImage}
                            alt="Hover Image"
                            className="hover-img"
                        />
                    </div>
                </Link>
                <Link to={`/productdetail/${product.id}`}>
                    <h3>{product.name}</h3>
                </Link>
                <p>
                    <span>{giaGocFormatted}VNĐ</span>
                    {giaGiamFormatted}VNĐ
                </p>
                <div className="circle">
                    <p>{percent}%</p>
                </div>
            </div>
        </div>
    );
};

export default SaleProduct;
