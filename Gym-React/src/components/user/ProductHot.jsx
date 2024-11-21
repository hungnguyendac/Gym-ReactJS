import React from "react";
import useCallApi from "../../hooks/useCallApi";
import ProductCard from "./common/ProductCard";
import { urlProducts } from "../../untils/variable";
import { Link } from "react-router-dom";

const ProductHot = () => {
    const { data, isLoading } = useCallApi(urlProducts);

    // Kiểm tra xem có dữ liệu sản phẩm không
    if (isLoading) return <p>Loading...</p>;
    return (
        <>
            <div className="title-main">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <h2>SẢN PHẨM BÁN CHẠY</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products">
                {/* Products nam */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="tittle-product">
                                <Link to="/producttittle?fashion=Nam">
                                    ĐỒ TẬP GYM NAM
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row product-nam-js">
                        {data
                            .filter((product) => product.fashion === "Nam")
                            .slice(0, 8)
                            .map((product) => {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            })}
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="xem-them">
                                <Link to="/producttittle?fashion=Nam">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products nữ */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="tittle-product">
                                <Link to="/producttittle?fashion=Nữ">
                                    ĐỒ TẬP GYM NỮ
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row product-nu-js">
                        {data
                            .filter((product) => product.fashion === "Nữ")
                            .slice(0, 8)
                            .map((product) => {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            })}
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="xem-them">
                                <Link to="/producttittle?fashion=Nữ">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products phụ kiện tập */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="tittle-product">
                                <Link to="/producttittle?fashion=Phụ kiện">
                                    PHỤ KIỆN TẬP
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row product-phukien-js">
                        {data
                            .filter((product) => product.fashion === "Phụ kiện")
                            .slice(0, 8)
                            .map((product) => {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            })}
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="xem-them">
                                <Link to="/producttittle?fashion=Phụ kiện">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductHot;
