import React from "react";
import { Link } from "react-router-dom";

const DetailTop = ({data}) => {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-12">
                <p>
                    <Link to="/">Trang chủ</Link> /
                    <Link to="producttittle.html?fashion=${product.fashion}">
                        Đồ tập
                    </Link>{" "}
                    /
                    <Link to="producttittle.html?fashion=${product.fashion}&type=${product.type}">
                        ???????
                    </Link>
                </p>
            </div>

            <div className="col-12 col-sm-6 col-md-6">
                <div className="banner">
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={data.normalImage}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={data.hoverImage}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailTop;
