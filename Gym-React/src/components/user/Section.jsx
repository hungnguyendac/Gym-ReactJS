import React from 'react'

const Section = () => {
  return (
      <>
          {/* Section */}
          <div className="section">
              <div className="container">
                  <div className="row">
                      <div className="col-12 col-sm-6 col-md-3">
                          <div className="item-box">
                              <img src="/section1.png" alt="" />
                              <div className="item-text">
                                  <h5>MIỄN PHÍ GIAO HÀNG</h5>
                                  <p>Miễn phí giao hàng trong nội thành phố</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                          <div className="item-box">
                              <img src="/section2.png" alt="" />
                              <div className="item-text">
                                  <h5>ƯU ĐÃI COMBO</h5>
                                  <p>Mua 5 sản phẩm tặng ngay 1 sản phẩm</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                          <div className="item-box">
                              <img src="/section3.png" alt="" />
                              <div className="item-text">
                                  <h5>HỖ TRỢ ĐỔI HÀNG</h5>
                                  <p>Hỗ trợ đổi sản phẩm trong 7 ngày</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                          <div className="item-box">
                              <img src="/section4.png" alt="" />
                              <div className="item-text">
                                  <h5>HỆ THỐNG CỬA HÀNG</h5>
                                  <p>Hơn 20 cửa hàng trên toàn quốc</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Section