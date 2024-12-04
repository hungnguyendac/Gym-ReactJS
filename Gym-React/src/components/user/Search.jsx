import React from "react";
import { useLocation } from "react-router-dom";
import useCallApi from "../../hooks/useCallApi";
import { urlProducts } from "../../untils/variable";
import ProductCard from "./common/ProductCard";

const Search = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q") || "";

    const {data} = useCallApi(urlProducts);
    const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div className="products">
            <div className="container">
                <div className="row">

                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
