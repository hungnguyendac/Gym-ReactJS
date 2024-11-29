import React from "react";
import "../../assets/producttittle.css";
import MenuProductTittle from "../../components/user/MenuProductTittle";
import useCallApi from "../../hooks/useCallApi";
import { urlProducts } from "../../untils/variable";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../../components/user/common/ProductCard";

const ProductTittle = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Lấy giá trị các query parameters
    const fashion = searchParams.get("fashion");
    const type = searchParams.get("type");

    const { data, isLoading } = useCallApi(urlProducts);

    const filterProducts = data?.filter(product => {
        const matchFashion = fashion ? product.fashion === fashion : true;
        const matchType = type ? product.type.toLowerCase().includes(type.toLowerCase()): true;
        return matchFashion && matchType
    })

    return (
        <>
            <div className="tittle-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6">
                            <div className="tittle-top-1">
                                <p>
                                    <Link to="/">Trang chủ</Link> /
                                    {fashion !== "Phụ kiện" ? (
                                        <Link
                                            to={`/producttittle?fashion=${fashion}`}
                                        >
                                            Đồ tập {fashion}
                                        </Link>
                                    ) : (
                                        <Link to="/producttittle?fashion=Phụ kiện">
                                            Phụ kiện tập
                                        </Link>
                                    )}
                                    {type && (
                                        <>
                                            /
                                            <Link to="/">
                                                {type}{" "}
                                                {fashion !== "Phụ kiện" && fashion}
                                            </Link>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <div className="tittle-top-2">
                                <p>Hiển thị 1–28 của 220 kết quả</p>
                                <select className="sort-options">
                                    <option value="popularity">
                                        Thứ tự theo mức độ phổ biến
                                    </option>
                                    <option value="newest">Mới nhất</option>
                                    <option value="price-asc">
                                        Thứ tự theo giá: thấp đến cao
                                    </option>
                                    <option value="price-desc">
                                        Thứ tự theo giá: cao xuống thấp
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tittle-main">
                <div className="container">
                    <div className="row">
                        <MenuProductTittle />
                        <div className="col-12 col-sm-9 col-md-9">
                            <div className="row row-producttittle-js">
                                {filterProducts.length > 0 ? (
                                    filterProducts.map((product) => {
                                        return (
                                            <ProductCard product={product} key={product.id}/>
                                        );
                                    })
                                ) : (
                                    <p>Sản phẩm tạm thời chưa cập nhật</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductTittle;
