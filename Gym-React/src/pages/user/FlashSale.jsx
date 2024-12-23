import React from "react";
import "../../assets/sale.css";
import Sale from "../../components/user/Sale";
import SaleProduct from "../../components/user/SaleProduct";
import useCallApi from "../../hooks/useCallApi";
import { urlProducts } from "../../untils/variable";
import TraiNghiemSp from "../../components/user/TraiNghiemSp";

const FlashSale = () => {
    const { data, isLoading } = useCallApi(urlProducts);

    const femaleSaleProducts = data.filter((product) => {
        return product.type === "Đồng giá 99k nữ";
    });

    const maleSaleProducts = data.filter((product) => {
        return product.type === "Đồng giá 119k nam";
    });

    return (
        <>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            src="/WEB_FLASHSALE.jpg"
                            alt="First slide"
                        />
                    </div>
                </div>
            </div>
            <Sale gia={99} gioitinh={"Nữ"} />
            <div className="products product-salee">
                <div className="container">
                    <div className="row products-female-js">
                        {femaleSaleProducts.map((product) => {
                            return (
                                <SaleProduct
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Sale gia={119} gioitinh={"Nam"} />
            <div className="products product-salee">
                <div className="container">
                    <div className="row products-female-js">
                        {maleSaleProducts.map((product) => {
                            return (
                                <SaleProduct
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <TraiNghiemSp />
        </>
    );
};

export default FlashSale;
