import React from "react";
import Banner from "../../components/user/Banner";
import Section from "../../components/user/Section";
import NewProducts from "../../components/user/NewProducts";
import BannerSection from "../../components/user/BannerSection";
import ProductHot from "../../components/user/ProductHot";
import TraiNghiemSp from "../../components/user/TraiNghiemSp";
import TinTuc from "../../components/user/TinTuc";

const images = ["/Banner1.jpg", "/Banner2.jpg"];

const HomePage = () => {
    return (
        <>
            <Banner images={images} />
            <Section />
            <NewProducts />
            <BannerSection />
            <ProductHot/>
            <TraiNghiemSp/>
            <TinTuc/>
        </>
    );
};

export default HomePage;
