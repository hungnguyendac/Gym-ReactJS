import React from 'react'

const Footer = () => {
  return (
      <div className="footer">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-4">
                      <div className="footer-left">
                          <div className="logo">
                              <img src="/TGDT_logo-09-2.png" alt="a" />
                          </div>
                          <div className="footer-left-tittle">
                              <p>Công ty TNHH Fitness &amp; Yoga Việt Nam</p>
                              <p>
                                  <i className="fas fa-home" />
                                  101A-103 Đường 3 tháng 2, P.11, Q.10, Tp.HCM
                              </p>
                              <p>
                                  <i className="fas fa-phone" />
                                  Hotline sỉ: 0907.00.11.86
                                  <br />
                                  Hotline lẻ: 0902 77 1186
                              </p>
                              <p>
                                  <i className="fas fa-envelope" />
                                  Email: thegioidotap@gmail.com
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                      <div className="footer-center">
                          <img src="/thongbao.png" alt="ads" />
                          <ul>
                              <h4>Về chúng tôi</h4>
                              <li>
                                  <a href="#">Giới thiệu</a>
                              </li>
                              <li>
                                  <a href="#">Chính sách bảo mật</a>
                              </li>
                              <li>
                                  <a href="./shop.html">Hệ thống showroom</a>
                              </li>
                          </ul>
                          <ul>
                              <h4>Hỗ trợ khách hàng</h4>
                              <li>
                                  <a href="#">Hướng dẫn mua hàng</a>
                              </li>
                              <li>
                                  <a href="#">Chính sách đổi hàng</a>
                              </li>
                              <li>
                                  <a href="#">Chính sách giao nhận</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                      <div className="footer-right">
                          <img src="/banner-footer.jpg" alt="afe" />
                          <div>
                              <a href="https://www.dmca.com/Protection/Status.aspx?ID=1857d876-33b5-4d66-af23-5fe5efea61d8&refurl=https://thegioidotap.vn/">
                                  <img
                                      src="/dmca_protected_sml_120m.png"
                                      alt="fd"
                                  />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                      <div className="footer-bottom">
                          <hr />
                          <p>Công ty TNHH FITNESS &amp; YOGA Việt Nam</p>
                          <p>
                              Số ĐKKD 0315236344 do Sở KHĐT Tp. HCM cấp ngày
                              22/08/2018
                          </p>
                          <p>Người đại diện: Trần Ngọc Hoàng</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Footer