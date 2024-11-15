import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faMagnifyingGlass,
    faPhoneSquare,
    faSearch,
    faShoppingBasket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";


const HeaderCenter = ({ handleIconClick, cartOnClick }) => {
    return (
        <>
            <div className="header-main">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="wrap-main">
                                <div className="wrap-1">
                                    <div className="logo">
                                        <a href="./index.html">
                                            <img src="/Logo.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <div className="search">
                                        <input
                                            type="text"
                                            placeholder="Bạn muốn tìm gì ?"
                                        />
                                        <button>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faMagnifyingGlass}
                                                />
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div className="wrap-2">
                                    <div className="hotline">
                                        <div className="hotline-icon">
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faPhoneSquare}
                                                />
                                            </i>
                                        </div>
                                        <div className="hotline-tittle">
                                            <a href="tel:+0902 77 1186">
                                                0902 77 1186
                                            </a>
                                            <p>Hotline đặt hàng</p>
                                        </div>
                                    </div>
                                    <div className="icon-user">
                                        <i>
                                            <FontAwesomeIcon icon={faUser} />
                                        </i>
                                        <span className="search-ic">
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faSearch}
                                                />
                                            </i>
                                        </span>
                                        <span
                                            className="cart-btn"
                                            onClick={cartOnClick}
                                        >
                                            <i id="cart">
                                                <FontAwesomeIcon
                                                    icon={faShoppingBasket}
                                                ></FontAwesomeIcon>
                                                <span className="cart-quantity">
                                                    0
                                                </span>
                                            </i>
                                        </span>
                                        <span
                                            className="bar-ic"
                                            onClick={handleIconClick}
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faBars}
                                                />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderCenter;
