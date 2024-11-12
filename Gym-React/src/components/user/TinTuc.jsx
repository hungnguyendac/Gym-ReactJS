import React from "react";

const TinTuc = () => {
    return (
        <>
            {/* -------------------- Tin tức nổi bật -------------------------*/}
            <div className="title-main">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <h2>TIN TỨC NỔI BẬT</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <a href="#">
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
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <a href="#">
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
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <a href="#">
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
                            </a>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="xem-them">
                                <a href="./tintuc.html">Xem tất cả</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TinTuc;
