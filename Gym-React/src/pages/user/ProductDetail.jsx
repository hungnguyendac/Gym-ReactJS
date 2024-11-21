import React from "react";
import "../../assets/productdetail.css";
import DetailTop from "../../components/user/productdetail/DetailTop";
import { useParams } from "react-router-dom";
import { urlProducts } from "../../untils/variable";
import useCallApi from "../../hooks/useCallApi";
import DetailProduct from "../../components/user/productdetail/DetailProduct";
import DetailBottom from "../../components/user/productdetail/DetailBottom";
const ProductDetail = () => {

    const param = useParams("id");
    const urlDetail = urlProducts + `/${param.id}`;

    const { data, isLoading } = useCallApi(urlDetail);

    return (
        <div className="product-detail">
            <div className="container">
                <div className="row product-detail-js">
                    <DetailTop data={data} />
                    <DetailProduct data={data} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
