import { faChevronDown, faMagnifyingGlass, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const PopupMoblie = ({ showPopup }) => {
    return (
        <div className={`popup-mobile ${showPopup ? "show" : ""}`}>
            <div className="search">
                <input type="text" placeholder="Bạn muốn tìm gì ?" />
                <button>
                    <i>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                </button>
            </div>
            <div className="menu-moblie">
                <ul>
                    <li>
                        <a href="./index.html">TRANG CHỦ</a>
                    </li>
                    <li>
                        <a href="./flashsale.html">
                            <span>FLASH SALE</span>
                        </a>
                    </li>
                    <li className="li-moblie">
                        <a href="./producttittle.html?fashion=Nam">
                            ĐỒ TẬP NAM
                        </a>
                        <i>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                        <ul className="list-menu-moblie">
                            <span>
                                <a href="./producttittle.html?fashion=Nam&type=Áo">
                                    Áo Tập Nam
                                </a>
                            </span>
                            <li>
                                <a href="./producttittle.html?fashion=Nam&type=Áo thun">
                                    Áo Thun
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nam&type=Áo Polo">
                                    Áo Polo
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nam&type=Áo ba lỗ">
                                    Áo Tanktop - Ba Lỗ
                                </a>
                            </li>
                            <span>
                                <a href="./producttittle.html?fashion=Nam&type=Quần">
                                    Quần Tập Nam
                                </a>
                            </span>
                            <li>
                                <a href="./producttittle.html?fashion=Nam&type=Quần dài">
                                    Quần Dài
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nam&type=Quần đùi">
                                    Quần Đùi
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nam&type=Quần Jogger">
                                    Quần Jogger
                                </a>
                            </li>
                            <span>
                                <a href="./producttittle.html?fashion=Nam&type=Áo khoác nam">
                                    Áo Khoác Thể Thao Nam
                                </a>
                            </span>
                            <span>
                                <a href="./producttittle.html?fashion=Nam&type=Set-tap">
                                    Bộ Đồ Tập Nam
                                </a>
                            </span>
                        </ul>
                    </li>
                    <li className="li-moblie">
                        <a href="./producttittle.html?fashion=Nữ">ĐỒ TẬP NỮ</a>
                        <i>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                        <ul className="list-menu-moblie">
                            <span>
                                <a href="./producttittle.html?fashion=Nữ&type=Áo">
                                    Áo Tập Nữ
                                </a>
                            </span>
                            <li>
                                <a href="./producttittle.html?fashion=Nữ&type=Áo bra">
                                    Áo Bra
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nữ&type=Áo thun">
                                    Áo Thun
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nữ&type=Áo ba lỗ">
                                    Áo Tanktop - Ba Lỗ
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nữ&type=Áo croptop">
                                    Áo Croptop
                                </a>
                            </li>
                            <span>
                                <a href="./producttittle.html?fashion=Nữ&type=Quần">
                                    Quần Tập Nữ
                                </a>
                            </span>
                            <li>
                                <a href="./producttittle.html?fashion=Nữ&type=Quần dài">
                                    Quần Dài
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nữ&type=Quần lửng">
                                    Quần Lửng
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Nữ&type=Quần Jogger">
                                    Quần Jogger
                                </a>
                            </li>
                            <span>
                                <a href="./producttittle.html?fashion=Nữ&type=Áo khoác nữ">
                                    Áo Khoác Thể Thao Nữ
                                </a>
                            </span>
                            <span>
                                <a href="./producttittle.html?fashion=Nữ&type=Set-tap">
                                    Bộ Đồ Tập Nữ
                                </a>
                            </span>
                        </ul>
                    </li>
                    <li className="li-moblie">
                        <a href="./producttittle.html?fashion=Phụ kiện">
                            PHỤ KIỆN
                        </a>
                        <i>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                        <ul className="list-menu-moblie">
                            <li>
                                <a href="./producttittle.html?fashion=Phụ kiện&type=Thảm">
                                    Thảm Tập Yoga
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Phụ kiện&type=Túi">
                                    Túi Thể Thao
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Phụ kiện&type=Găng">
                                    Găng Tay
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Phụ kiện&type=Băng">
                                    Băng Bảo Vệ
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Phụ kiện&type=Dây nhảy">
                                    Dây Nhảy
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Phụ kiện&type=Dây kháng lực">
                                    Dây Kháng Lực
                                </a>
                            </li>
                            <li>
                                <a href="./producttittle.html?fashion=Phụ kiện&type=Chăm sóc">
                                    Chăm sóc cơ bắp
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="li-moblie">
                        <a href="./shop.html">CỬA HÀNG</a>
                    </li>
                    <li>
                        <a href="./tintuc.html">SỰ KIỆN</a>
                    </li>
                    <li className="li-moblie">
                        <a href="./bai-tap-gym.html">BÀI TẬP GYM</a>
                    </li>
                </ul>
            </div>
            <div className="hotline">
                <div className="hotline-icon">
                    <i className="fas fa-phone-square" />
                    <i>
                        <FontAwesomeIcon icon={faPhoneSquare} />
                    </i>
                </div>
                <div className="hotline-tittle">
                    <a href="tel:+0902 77 1186">0902 77 1186</a>
                    <p>Hotline đặt hàng</p>
                </div>
            </div>
        </div>
    );
};

export default PopupMoblie