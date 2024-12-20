import React from 'react'
import { Link } from 'react-router-dom';

const BaiTapGym = () => {
  return (
      <>
          <div
              className="tin-tuc"
              style={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  width: "100%",
              }}
          >
              <div className="container">
                  <div className="row">
                      <div className="col-12 col-sm-12 col-md-12">
                          <h4 style={{ textAlign: "center" }}>
                              CHUYÊN MỤC: BÀI TẬP GYM
                          </h4>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12">
                          <h3 style={{ marginBottom: "30px" }}>Bài tập gym</h3>
                          <p style={{ fontSize: "20px", fontWeight: "700" }}>
                              Gym: Hướng dẫn các bài tập nam nữ cơ bản đến nâng
                              cao hiệu quả
                          </p>
                          <p>
                              Chúng ta điều biết <b>Gym</b> hiện nay dần trở
                              thành một bộ môn được yêu thích của mọi lứa tuổi
                              mang lại sức khỏe và vóc dáng cho người tập luyện.
                              Chính vì vậy Thegioidotap.vn xây dựng và tổng hợp
                              tất cả các <b>bài tập gym</b> cơ bản đến nâng cao
                              bao gồm: <i>bài tập gym nam, bài tập gym nữ</i>{" "}
                              chi tiết nhất.
                          </p>
                          <p>
                              Hiện nay theo thống kê khoảng 85% người dân HCM có
                              xu hướng tìm hiểu về Gym và đến phòng tập Gym
                              thường xuyên. Thế nhưng không phải ai cũng hiểu vể{" "}
                              <b>cách tập gym</b>
                              chuẩn xác hiệu quả nhất? Bạn đừng đó lắng chúng
                              tôi sẽ cung cấp các bạn đầy đủ nhất về
                              <i>lịch tập gym, các hướng dẫn tập gym,</i> cách
                              lựa chọn <b>phòng gym</b> uy tín nhất. Ngoài ra
                              chúng tôi còn hướng dấn những chế đồ dinh dưỡng
                              cho người tập gym từ cơ bản đến nâng cao, những
                              cách tập gym đúng cách nhất. Chỉ cần một cú click
                              chuột và 5p đọc mỗi ngày bạn đó có tất tần tật cẩm
                              nang <b>tập gym</b> đẳng cấp nhất.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="news">
              <div className="container">
                  <div className="row">
                      <div className="col-12 col-sm-6 col-md-4">
                          <Link to="#">
                              <div className="card">
                                  <img
                                      src="/LICH-TAP-GYM-CHO-NGUOI-MOI-1.png"
                                      className="card-img-top"
                                      alt="..."
                                  />
                                  <div className="card-body">
                                      <h5 className="card-title">
                                          Lịch tập gym cho người mới bắt đầu
                                          đúng &amp; hiệu quả từ chuyên gia
                                      </h5>
                                      <hr />
                                      <p className="card-text">
                                          Bạn đang tìm kiếm cho mình một lịch
                                          tập gym 1 tuần phù hợp? Bạn...
                                      </p>
                                  </div>
                              </div>
                          </Link>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                          <Link to="#">
                              <div className="card">
                                  <img
                                      src="/LICH-TAP-GYM-NAM-NU-1.jpg"
                                      className="card-img-top"
                                      alt="..."
                                  />
                                  <div className="card-body">
                                      <h5 className="card-title">
                                          Lịch tập gym 4 ngày 1 tuần cho nam và
                                          nữ chi tiết nhất
                                      </h5>
                                      <hr />
                                      <p className="card-text">
                                          Việc tập gym muốn có kết quả tốt nhất
                                          thì điều đầu tiên cần có...
                                      </p>
                                  </div>
                              </div>
                          </Link>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                          <Link to="#">
                              <div className="card">
                                  <img
                                      src="/lich-tap-gym-nam.jpg"
                                      className="card-img-top"
                                      alt="..."
                                  />
                                  <div className="card-body">
                                      <h5 className="card-title">
                                          Lịch tập gym 6 ngày 1 tuần cho nam
                                          giúp thân hình săn chắc
                                      </h5>
                                      <hr />
                                      <p className="card-text">
                                          Bạn lo lắng nhóm cơ của mình kém săn
                                          chắc? Bạn đang tìm kiếm cho...
                                      </p>
                                  </div>
                              </div>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default BaiTapGym