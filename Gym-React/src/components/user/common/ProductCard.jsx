import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    let gia = product.price.toLocaleString("vi-VN");
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
                <p>{gia} VNĐ</p>
            </div>
        </div>
    );
};

export default ProductCard;
