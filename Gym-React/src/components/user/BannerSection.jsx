import React from "react";
import Banner from "./Banner";

const anh = [
    "/Miss-Fitness-Viet-Nam-2022-1.jpg",
    "/Miss-Fitness-Viet-Nam-2022-2.jpg",
    "/Miss-Fitness-Viet-Nam-2022-3.jpg",
    "/Miss-Fitness-Viet-Nam-2022-4.jpg",
    "/Miss-Fitness-Viet-Nam-2022-5.jpg",
    "/Miss-Fitness-Viet-Nam-2022-6.jpg",
    "/Miss-Fitness-Viet-Nam-2022-7.jpg",
    "/Miss-Fitness-Viet-Nam-2022.jpg",
    "/thegioidotapvn-khai-truong-dai-showroom-1.jpg"
];
const BannerSection = () => {

    return (
        <>
            <div className="title-main">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <h2>FASHION GYM & YOGA</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Banner images={anh}/>
        </>
    );
};

export default BannerSection;
