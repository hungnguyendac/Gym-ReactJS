import React, { useState } from "react";
import { urlProducts } from "../../untils/variable";
import ProductCard from "./common/ProductCard";
import useCallApi from "../../hooks/useCallApi";

const NewProducts = () => {
    const tabs = [
        { id: "products-new-nam", label: "Đồ Tập Nam", fashion: "Nam" },
        { id: "products-new-nu", label: "Đồ Tập Nữ", fashion: "Nữ" },
        {
            id: "products-new-phukien",
            label: "Phụ Kiện Tập",
            fashion: "Phụ kiện",
        },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const { data, isLoading } = useCallApi(urlProducts);

    // Hàm thay đổi tab
    const onTabClick = (id) => {
        setActiveTab(id);
    };

    // Lọc dữ liệu sản phẩm dựa trên tab được chọn
    const filteredProducts = data.filter((product) => {
        const currentTab = tabs.find((tab) => tab.id === activeTab);
        return product.fashion === currentTab.fashion;
    });

    // Kiểm tra xem có dữ liệu sản phẩm không
    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <div className="title-main">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <h2>SẢN PHẨM MỚI</h2>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="tabs">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`tab-button ${
                                            activeTab === tab.id
                                                ? "button-active"
                                                : ""
                                        }`}
                                        data-target={tab.id}
                                        onClick={() => onTabClick(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products products-new products-new-active">
                <div className="container">
                    <div className="row">
                        {filteredProducts.slice(0,4).map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewProducts;
