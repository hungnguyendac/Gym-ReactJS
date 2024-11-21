import { faChevronDown, faMagnifyingGlass, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const PopupMoblie = ({ showPopup }) => {
    const [isOpen, setIsOpen] = useState([false, false, false]);

    const toggleMenu = (index) => {
        const updatedState = [...isOpen];
        updatedState[index] = !updatedState[index];
        setIsOpen(updatedState);
    };

    // Kiểm tra nếu có ít nhất một menu mở
    const isAnyMenuOpen = isOpen.some((open) => open);

    return (
        <div
            className={`popup-moblie ${showPopup ? "show" : ""} ${
                isAnyMenuOpen ? "scroll" : ""
            }`}
        >
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
                        <Link to="/">TRANG CHỦ</Link>
                    </li>
                    <li>
                        <Link to="/flashsale">
                            <span>FLASH SALE</span>
                        </Link>
                    </li>
                    <li className="li-moblie">
                        <Link to="/producttittle?fashion=Nam">
                            ĐỒ TẬP NAM
                        </Link>
                        <i onClick={() => toggleMenu(0)}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                        <ul
                            className={`list-menu-moblie ${
                                isOpen[0] ? "list-show" : ""
                            }`}
                        >
                            <span>
                                <Link to="/producttittle?fashion=Nam&type=Áo">
                                    Áo Tập Nam
                                </Link>
                            </span>
                            <li>
                                <Link to="/producttittle?fashion=Nam&type=Áo thun">
                                    Áo Thun
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nam&type=Áo Polo">
                                    Áo Polo
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nam&type=Áo ba lỗ">
                                    Áo Tanktop - Ba Lỗ
                                </Link>
                            </li>
                            <span>
                                <Link to="/producttittle?fashion=Nam&type=Quần">
                                    Quần Tập Nam
                                </Link>
                            </span>
                            <li>
                                <Link to="/producttittle?fashion=Nam&type=Quần dài">
                                    Quần Dài
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nam&type=Quần đùi">
                                    Quần Đùi
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nam&type=Quần Jogger">
                                    Quần Jogger
                                </Link>
                            </li>
                            <span>
                                <Link to="/producttittle?fashion=Nam&type=Áo khoác nam">
                                    Áo Khoác Thể Thao Nam
                                </Link>
                            </span>
                            <span>
                                <Link to="/producttittle?fashion=Nam&type=Set-tap">
                                    Bộ Đồ Tập Nam
                                </Link>
                            </span>
                        </ul>
                    </li>
                    <li className="li-moblie">
                        <Link to="/producttittle?fashion=Nữ">ĐỒ TẬP NỮ</Link>
                        <i onClick={() => toggleMenu(1)}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                        <ul
                            className={`list-menu-moblie ${
                                isOpen[1] ? "list-show" : ""
                            }`}
                        >
                            <span>
                                <Link to="/producttittle?fashion=Nữ&type=Áo">
                                    Áo Tập Nữ
                                </Link>
                            </span>
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
                                    Áo Tanktop - Ba Lỗ
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nữ&type=Áo croptop">
                                    Áo Croptop
                                </Link>
                            </li>
                            <span>
                                <Link to="/producttittle?fashion=Nữ&type=Quần">
                                    Quần Tập Nữ
                                </Link>
                            </span>
                            <li>
                                <Link to="/producttittle?fashion=Nữ&type=Quần dài">
                                    Quần Dài
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nữ&type=Quần lửng">
                                    Quần Lửng
                                </Link>
                            </li>
                            <li>
                                <Link to="/producttittle?fashion=Nữ&type=Quần Jogger">
                                    Quần Jogger
                                </Link>
                            </li>
                            <span>
                                <Link to="/producttittle?fashion=Nữ&type=Áo khoác nữ">
                                    Áo Khoác Thể Thao Nữ
                                </Link>
                            </span>
                            <span>
                                <Link to="/producttittle?fashion=Nữ&type=Set-tap">
                                    Bộ Đồ Tập Nữ
                                </Link>
                            </span>
                        </ul>
                    </li>
                    <li className="li-moblie">
                        <Link to="/producttittle?fashion=Phụ kiện">
                            PHỤ KIỆN
                        </Link>
                        <i onClick={() => toggleMenu(2)}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                        <ul
                            className={`list-menu-moblie ${
                                isOpen[2] ? "list-show" : ""
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
                    <li className="li-moblie">
                        <Link to="/shop">CỬA HÀNG</Link>
                    </li>
                    <li>
                        <Link to="/tintuc">SỰ KIỆN</Link>
                    </li>
                    <li className="li-moblie">
                        <Link to="/bai-tap-gym">BÀI TẬP GYM</Link>
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
                    <Link to="tel:+0902 77 1186">0902 77 1186</Link>
                    <p>Hotline đặt hàng</p>
                </div>
            </div>
        </div>
    );
};

export default PopupMoblie