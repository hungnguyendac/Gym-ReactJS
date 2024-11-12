import { faAngleRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const HeaderBottom = () => {
  return (
      <div className="header-bottom">
          <div className="container">
              <div className="row menu-main-js">
                  <div className="col-12 col-sm-12 col-md-12">
                      <ul className="menu-main">
                          <li>
                              <a href="./index.html">TRANG CHỦ</a>
                          </li>
                          <li>
                              <a href="./flashsale.html">
                                  <span>FLASH SALE</span>
                              </a>
                          </li>
                          <li>
                              <a href="./producttittle.html?fashion=Nam">
                                  ĐỒ TẬP NAM
                                  <i>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                  </i>
                              </a>
                              <ul className="sub-menu">
                                  <div className="menu-c1">
                                      <li>
                                          <h3>Danh mục ĐỒ TẬP NAM</h3>
                                      </li>
                                      <span>
                                          <hr />
                                      </span>
                                      <a href="./producttittle.html?fashion=Nam&type=Áo">
                                          <li>Áo Tập Nam</li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nam&type=Áo thun">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Thun
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nam&type=Áo Polo">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Polo
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nam&type=Áo ba lỗ">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Tanktop - Ba Lỗ
                                          </li>
                                      </a>
                                      <a href="./producttittle.html?fashion=Nam&type=Quần">
                                          <li>Quần Tập Nam</li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nam&type=Quần dài">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Dài
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nam&type=Quần đùi">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Đùi
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nam&type=Quần Jogger">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Jogger
                                          </li>
                                      </a>
                                      <a href="./producttittle.html?type=Áo khoác nam">
                                          <li>Áo Khoác Thể Thao Nam</li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nam&type=Set-tap">
                                          <li>Bộ Đồ Tập Nam</li>
                                      </a>
                                  </div>
                                  <img src="/TheThaoNam.jpg" alt="Anh" />
                              </ul>
                          </li>
                          <li>
                              <a href="./producttittle.html?fashion=Nữ">
                                  ĐỒ TẬP NỮ
                                  <i>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                  </i>
                              </a>
                              <ul className="sub-menu">
                                  <div className="menu-c1">
                                      <li>
                                          <h3>Danh mục ĐỒ TẬP NỮ</h3>
                                      </li>
                                      <span>
                                          <hr />
                                      </span>
                                      <a href="./producttittle.html?fashion=Nữ&type=Áo">
                                          <li>Áo Tập Nữ</li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Áo bra">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Bra
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Áo thun">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Thun
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Áo ba lỗ">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Tanktop - Ba Lỗ
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Áo croptop">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Áo Croptop
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Quần">
                                          <li>Quần Tập Nữ</li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Quần dài">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Dài
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Quần lửng">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Lửng
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Quần Jogger">
                                          <li>
                                              <i>
                                                  <FontAwesomeIcon
                                                      icon={faAngleRight}
                                                  />
                                              </i>
                                              Quần Jogger
                                          </li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Áo khoác nữ">
                                          <li>Áo Khoác Thể Thao Nữ</li>
                                      </a>
                                      <hr />
                                      <a href="./producttittle.html?fashion=Nữ&type=Set-tap">
                                          <li>Bộ Đồ Tập Nữ</li>
                                      </a>
                                  </div>
                                  <img src="/DoTapNu.jpg" alt="Anh" />
                              </ul>
                          </li>
                          <li className="menu-2">
                              <a href="./producttittle.html?fashion=Phụ kiện">
                                  PHỤ KIỆN
                                  <i>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                  </i>
                              </a>
                              <ul className="sub-menu-2">
                                  <a href="./producttittle.html?fashion=Phụ kiện&type=Thảm">
                                      <li>Thảm Tập Yoga</li>
                                  </a>
                                  <a href="./producttittle.html?fashion=Phụ kiện&type=Túi">
                                      <li>Túi Thể Thao</li>
                                  </a>
                                  <a href="./producttittle.html?fashion=Phụ kiện&type=Găng">
                                      <li>Găng Tay</li>
                                  </a>
                                  <a href="./producttittle.html?fashion=Phụ kiện&type=Băng">
                                      <li>Băng Bảo Vệ</li>
                                  </a>
                                  <a href="./producttittle.html?fashion=Phụ kiện&type=Dây nhảy">
                                      <li>Dây Nhảy</li>
                                  </a>
                                  <a href="./producttittle.html?fashion=Phụ kiện&type=Dây kháng lực">
                                      <li>Dây Kháng Lực</li>
                                  </a>
                                  <a href="./producttittle.html?fashion=Phụ kiện&type=Chăm sóc">
                                      <li>Chăm Sóc Cơ Bắp</li>
                                  </a>
                              </ul>
                          </li>
                          <li className="menu-2">
                              <a href="./shop.html"> CỬA HÀNG </a>
                          </li>
                          <li>
                              <a href="./tintuc.html">SỰ KIỆN</a>
                          </li>
                          <li className="menu-2">
                              <a href="./bai-tap-gym.html"> BÀI TẬP GYM </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default HeaderBottom