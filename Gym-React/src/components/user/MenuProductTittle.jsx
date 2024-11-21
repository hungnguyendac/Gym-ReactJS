import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const MenuProductTittle = () => {
    // Sự kiện click đóng / mở 4 icon mục lớn
    const [isOpenMenu, setIsOpenMenu] = useState([false, false, false, false]);
    const toggleMenu = (index) => {
        const updatedState = [...isOpenMenu];
        updatedState[index] = !updatedState[index];
        setIsOpenMenu(updatedState);
    };

    // Sự kiện click đóng / mở icon con Nam / Nữ
    const [isOpenNamNu, setIsOpenNamNu] = useState([
        false,
        false,
        false,
        false,
    ]);
    const toggleMenuNamNu = (index) => {
        const updatedState = [...isOpenNamNu];
        updatedState[index] = !updatedState[index];
        setIsOpenNamNu(updatedState);
    };
    return (
        <div className="col-12 col-sm-3 col-md-3">
            <div className="tittle-main-1">
                <h5>DANH MỤC SẢN PHẨM</h5>
                <span>
                    <hr />
                </span>
                <ul className="menu">
                    <li>
                        <Link to="/flashsale">Giảm Giá</Link>
                    </li>
                    <hr />
                    <li>
                        <div className="vi-tri">
                            <Link to="/producttittle?fashion=Nam">
                                Đồ Tập Gym Nam
                            </Link>
                            <i className="icon-1" onClick={() => toggleMenu(0)}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </i>
                        </div>
                        <ul
                            className={`menu-2 ${
                                isOpenMenu[0] ? "show-menu" : ""
                            }`}
                        >
                            <li>
                                <div className="vi-tri">
                                    <Link to="/producttittle?fashion=Nam&type=Áo">
                                        Áo Tập Nam
                                    </Link>
                                    <i onClick={() => toggleMenuNamNu(0)}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </i>
                                </div>
                                <ul
                                    className={`menu-3 ${
                                        isOpenNamNu[0] ? "show-menu" : ""
                                    }`}
                                >
                                    <li>
                                        <Link to="/producttittle?fashion=Nam&type=Áo thun">
                                            Áo thun
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nam&type=Áo Polo">
                                            Áo Polo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nam&type=Áo ba lỗ">
                                            Áo Ba Lỗ / TankTop
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="vi-tri">
                                    <Link to="/producttittle?fashion=Nam&type=Quần">
                                        Quần Tập Nam
                                    </Link>
                                    <i onClick={() => toggleMenuNamNu(1)}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </i>
                                </div>
                                <ul
                                    className={`menu-3 ${
                                        isOpenNamNu[1] ? "show-menu" : ""
                                    }`}
                                >
                                    <li>
                                        <Link to="/producttittle?fashion=Nam&type=Quần dài">
                                            Quần dài
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nam&type=Quần đùi">
                                            Quần đùi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nam&type=Quần Jogger">
                                            Quần Jogger
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nam&type=Set-tap">
                                    Bộ Đồ Tập Nam
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <hr />
                    <li>
                        <div className="vi-tri">
                            <Link to="/producttittle?fashion=Nữ">
                                Đồ Tập Gym Nữ
                            </Link>
                            <i className="icon-1" onClick={() => toggleMenu(1)}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </i>
                        </div>
                        <ul
                            className={`menu-2 ${
                                isOpenMenu[1] ? "show-menu" : ""
                            }`}
                        >
                            <li>
                                <div className="vi-tri">
                                    <Link to="/producttittle?fashion=Nữ&type=Áo">
                                        Áo Tập Nữ
                                    </Link>
                                    <i onClick={() => toggleMenuNamNu(3)}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </i>
                                </div>
                                <ul
                                    className={`menu-3 ${
                                        isOpenNamNu[3] ? "show-menu" : ""
                                    }`}
                                >
                                    <li>
                                        <Link to="/producttittle?fashion=Nữ&type=Áo bra">
                                            Áo Bra
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nữ&type=Áo thun">
                                            Áo Thun
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nữ&type=Áo ba lỗ">
                                            Áo Ba Lỗ / TankTop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nữ&type=Áo croptop">
                                            Áo Croptop
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="vi-tri">
                                    <Link to="/producttittle?fashion=Nữ&type=Quần">
                                        Quần Tập Nữ
                                    </Link>
                                    <i onClick={() => toggleMenuNamNu(4)}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </i>
                                </div>
                                <ul
                                    className={`menu-3 ${
                                        isOpenNamNu[4] ? "show-menu" : ""
                                    }`}
                                >
                                    <li>
                                        <Link to="/producttittle?fashion=Nữ&type=Quần dài">
                                            Quần dài
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nữ&type=Quần lửng">
                                            Quần lửng
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/producttittle?fashion=Nữ&type=Quần Jogger">
                                            Quần Jogger
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nữ&type=Set-tap">
                                    Bộ Đồ Tập Nữ
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <hr />
                    <li>
                        <div className="vi-tri">
                            <Link to="/producttittle?fashion=Phụ kiện">
                                Phụ Kiện Đồ Tập
                            </Link>
                            <i className="icon-1" onClick={() => toggleMenu(2)}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </i>
                        </div>
                        <ul
                            className={`menu-2 ${
                                isOpenMenu[2] ? "show-menu" : ""
                            }`}
                        >
                            <li>
                                <Link to="/producttittle?fashion=Phụ kiện&type=Thảm">
                                    Thảm Tập Yoga
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Phụ kiện&type=Túi">
                                    Túi Thể Thao
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Phụ kiện&type=Găng">
                                    Găng Tay
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Phụ kiện&type=Băng">
                                    Băng Bảo Vệ
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Phụ kiện&type=Dây nhảy">
                                    Dây Nhảy
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Phụ kiện&type=Dây kháng lực">
                                    Dây Kháng Lực
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Phụ kiện&type=Chăm sóc">
                                    Chăm sóc cơ bắp
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <hr />
                    <li>
                        <div className="vi-tri">
                            <Link to="/producttittle?type=Áo khoác">
                                Áo Khoác
                            </Link>
                            <i className="icon-1" onClick={() => toggleMenu(3)}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </i>
                        </div>
                        <ul
                            className={`menu-2 ${
                                isOpenMenu[3] ? "show-menu" : ""
                            }`}
                        >
                            <li>
                                <Link to="/producttittle?type=Áo khoác nam">
                                    Áo khoác nam
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?type=Áo khoác nữ">
                                    Áo khoác nữ
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuProductTittle