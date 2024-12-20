import React from 'react'
import '../../assets/shop.css'
import TinTuc from '../../components/user/TinTuc';

const Shop = () => {
  return (
    <>
    
      <div className="shop">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                      <div className="shop-top">
                          <h4>HỆ THỐNG 20 SHOP</h4>
                          <hr />
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12">
                      <div className="shop-center">
                          <img src="/favicon-tgdt.png" alt="abc" />
                          <h3>HỆ THỐNG CHUỖI CỬA HÀNG ĐỒ TẬP CAO CẤP</h3>
                          <hr />
                          <h4>HỆ THỐNG SHOWROOM</h4>
                          <div className="shop-center-p">
                              <p>
                                  Thegioidotap.vn là hệ thống chuỗi cửa hàng đồ
                                  tập lớn nhất tại VN, chuyên cung cấp đồ tập
                                  Gym, đồ tập Yoga, đồ tập Aerobic, … dành cho
                                  cả nam và nữ. Đến với chúng tôi các bạn có thể
                                  hoàn toàn yên tâm về chất lượng sản phẩm, cũng
                                  như giá cả và các chính sách ưu đãi, khuyến
                                  mãi, hậu mãi tốt hơn hẳn so với những đại lý
                                  bán nhỏ lẻ khác.
                              </p>
                              <p>
                                  Để đáp ứng nhu cầu đồ tập của tín đồ Gym &amp;
                                  Yoga, chúng tôi đã phát triển hệ thống shop đồ
                                  tập chuyên nghiệp để phục vụ khách hàng tại
                                  các thành phố lớn và các tỉnh thành khác.
                              </p>
                          </div>
                          <div className="shop-center-img row">
                              <div className="col-6 col-md">
                                  <img
                                      src="/store-690x920-1.jpg"
                                      alt="Image 1"
                                  />
                              </div>
                              <div className="col-6 col-md">
                                  <img
                                      src="/store-690x920-2.jpg"
                                      alt="Image 1"
                                  />
                              </div>
                              <div className="col-6 col-md">
                                  <img
                                      src="/store-690x920-3.jpg"
                                      alt="Image 1"
                                  />
                              </div>
                              <div className="col-6 col-md">
                                  <img
                                      src="/store-690x920-4.jpg"
                                      alt="Image 1"
                                  />
                              </div>
                              <div className="col-6 col-md">
                                  <img
                                      src="/store-690x920-5.jpg"
                                      alt="Image 1"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12">
                      <div className="shop-bottom">
                          <h3>ĐỊA CHỈ CỬA HÀNG</h3>
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29800.23136372331!2d105.60323701083983!3d20.991477800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe679b795bb%3A0xec75ce3ed6a601a3!2zVGjhur8gZ2nhu5tpIMSR4buTIHThuq1wIC0gU2hvcCBRdeG6p24gw6FvIHThuq1wIEdZTSBZT0dBIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1721028942278!5m2!1svi!2s"
                              width="100%"
                              height={450}
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <TinTuc/>
    </>
  );
}

export default Shop