import { faAngleRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
  return (
      <div className="header-bottom">
          <div className="container">
              <div className="row menu-main-js">
                  <div className="col-12 col-sm-12 col-md-12">
                      <ul className="menu-main">
                          <li>
                              <Link to="/">TRANG CHỦ</Link>
                          </li>
                          <li>
                              <Link to="/flashsale">
                                  <span>FLASH SALE</span>
                              </Link>
                          </li>
                          <li>
                              <Link to="/producttittle?fashion=Nam">
                                  ĐỒ TẬP NAM
                                  <i>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                  </i>
                              </Link>
                              <ul className="sub-menu">
                                  <div className="menu-c1">
                                      <li>
                                          <h3>Danh mục ĐỒ TẬP NAM</h3>
                                      </li>
                                      <span>
                                          <hr />
                                      </span>
                                      <Link to="/producttittle?fashion=Nam&type=Áo">
                                          <li>Áo Tập Nam</li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nam&type=Áo thun">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Thun
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nam&type=Áo Polo">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Polo
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nam&type=Áo ba lỗ">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Tanktop - Ba Lỗ
                                          </li>
                                      </Link>
                                      <Link to="/producttittle?fashion=Nam&type=Quần">
                                          <li>Quần Tập Nam</li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nam&type=Quần dài">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Dài
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nam&type=Quần đùi">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Đùi
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nam&type=Quần Jogger">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Jogger
                                          </li>
                                      </Link>
                                      <Link to="/producttittle?type=Áo khoác nam">
                                          <li>Áo Khoác Thể Thao Nam</li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nam&type=Set-tap">
                                          <li>Bộ Đồ Tập Nam</li>
                                      </Link>
                                  </div>
                                  <img src="/TheThaoNam.jpg" alt="Anh" />
                              </ul>
                          </li>
                          <li>
                              <Link to="/producttittle?fashion=Nữ">
                                  ĐỒ TẬP NỮ
                                  <i>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                  </i>
                              </Link>
                              <ul className="sub-menu">
                                  <div className="menu-c1">
                                      <li>
                                          <h3>Danh mục ĐỒ TẬP NỮ</h3>
                                      </li>
                                      <span>
                                          <hr />
                                      </span>
                                      <Link to="/producttittle?fashion=Nữ&type=Áo">
                                          <li>Áo Tập Nữ</li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Áo bra">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Bra
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Áo thun">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Thun
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Áo ba lỗ">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Tanktop - Ba Lỗ
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Áo croptop">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Croptop
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Quần">
                                          <li>Quần Tập Nữ</li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Quần dài">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Dài
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Quần lửng">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Lửng
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Quần Jogger">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Jogger
                                          </li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Áo khoác nữ">
                                          <li>Áo Khoác Thể Thao Nữ</li>
                                      </Link>
                                      <hr />
                                      <Link to="/producttittle?fashion=Nữ&type=Set-tap">
                                          <li>Bộ Đồ Tập Nữ</li>
                                      </Link>
                                  </div>
                                  <img src="/DoTapNu.jpg" alt="Anh" />
                              </ul>
                          </li>
                          <li className="menu-2">
                              <Link to="/producttittle?fashion=Phụ kiện">
                                  PHỤ KIỆN
                                  <i>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                  </i>
                              </Link>
                              <ul className="sub-menu-2">
                                  <Link to="/producttittle?fashion=Phụ kiện&type=Thảm">
                                      <li>Thảm Tập Yoga</li>
                                  </Link>
                                  <Link to="/producttittle?fashion=Phụ kiện&type=Túi">
                                      <li>Túi Thể Thao</li>
                                  </Link>
                                  <Link to="/producttittle?fashion=Phụ kiện&type=Găng">
                                      <li>Găng Tay</li>
                                  </Link>
                                  <Link to="/producttittle?fashion=Phụ kiện&type=Băng">
                                      <li>Băng Bảo Vệ</li>
                                  </Link>
                                  <Link to="/producttittle?fashion=Phụ kiện&type=Dây nhảy">
                                      <li>Dây Nhảy</li>
                                  </Link>
                                  <Link to="/producttittle?fashion=Phụ kiện&type=Dây kháng lực">
                                      <li>Dây Kháng Lực</li>
                                  </Link>
                                  <Link to="/producttittle?fashion=Phụ kiện&type=Chăm sóc">
                                      <li>Chăm Sóc Cơ Bắp</li>
                                  </Link>
                              </ul>
                          </li>
                          <li className="menu-2">
                              <Link to="/shop"> CỬA HÀNG </Link>
                          </li>
                          <li>
                              <Link to="/tintuc">SỰ KIỆN</Link>
                          </li>
                          <li className="menu-2">
                              <Link to="/bai-tap-gym"> BÀI TẬP GYM </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default HeaderBottom