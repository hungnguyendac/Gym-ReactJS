import React from "react";

const Sale = ({gia, gioitinh}) => {

    return (
        <div className="sale-tittle">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6">
                        <h3>
                            ĐỒNG GIÁ <span>{gia}K</span> {gioitinh}
                        </h3>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                        <button>
                            <a href="https://zalo.me/0902771186">
                                CHAT ZALO ĐỂ TƯ VẤN NGAY
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;
