import React from "react";
import { Link } from "react-router-dom";

const TinTucSuKien = () => {
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
                                CHUYÊN MỤC: TIN TỨC - SỰ KIỆN
                            </h4>
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
                                        src="/truoc-tap-gym-nen-an-gi-de-tang-can.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Chế độ ăn uống cho người tập Gym
                                            muốn tăng cân
                                        </h5>
                                        <hr />
                                        <p className="card-text">
                                            Đối với những người gầy thì tập Gym
                                            được xem là biện pháp tăng cân...
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <Link to="#">
                                <div className="card">
                                    <img
                                        src="/dau-hat-lanh.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            10 công dụng của dầu hạt lanh và các
                                            lưu ý khi sử dụng
                                        </h5>
                                        <hr />
                                        <p className="card-text">
                                            Dầu hạt lanh là nguồn chứa nhiều
                                            axit béo omega 3 . Nó đem lại...
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <Link to="#">
                                <div className="card">
                                    <img
                                        src="/tap-gym-cuong-do-cao.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Thegioidotap.vn – Thương hiệu nhượng
                                            quyền shop đồ tập gym yoga đầu tiên
                                            tại Việt nam
                                        </h5>
                                        <hr />
                                        <p className="card-text">
                                            Thegioidotap.vn là thương hiệu
                                            chuyên cung cấp...
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
};

export default TinTucSuKien;
