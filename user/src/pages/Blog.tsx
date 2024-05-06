import { Component } from "react";
import React, { useEffect, useRef } from 'react';


const Blog = function () {
    // componentDidMount() {
    //     handleScrollAndContentLoad();
    // }

    return (
        <section className="bg-grey" style={{ marginTop: 50 }}>
            <div className="container" style={{ width: 1140, margin: "0px auto" }}>
                <div
                    className="heading-section"
                    style={{ textAlign: "center", marginTop: 60 }}
                >
                    <h2>SỐNG KHỎE MỖI NGÀY</h2>
                </div>
                <div className="row" style={{ height: 500 }}>
                    <div id="blog-left">
                        <img
                            src="img/blog/treatment-4099432_640.jpg"
                            style={{ width: "100%", height: 500, marginTop: 50 }}
                        />
                        <h1>10 cách mẹ bầu có thể làm để phát triển trí tuệ cho thai nhi</h1>
                    </div>
                    <div id="blog-right" style={{ marginTop: 50 }}>
                        <div className="blog-cate">
                            <img src="img/blog/hotnew1.jpg" />
                            <h3>Kinh phí phẫu thuật tuyến giáp tại Singapore</h3>
                        </div>
                        <div className="blog-cate">
                            <img src="img/blog/hotnew2.jpg" />
                            <h3 style={{ lineHeight: 50 }}>
                                Cảnh giác với thuốc nhập lậu tràn lan
                            </h3>
                        </div>
                        <div className="blog-cate">
                            <img src="img/blog/hotnew3.jpg" />
                            <h3 style={{ lineHeight: 50 }}>
                                Xử lý đúng cách khẩu trang đã qua sử dụng
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="nav" style={{ marginTop: 100 }}>
                    <ul>
                        <li>
                            <a className="mnbar-item nav-active" href="#">
                                Sống khỏe
                            </a>
                        </li>
                        <li>
                            <a className="mnbar-item" href="#">
                                Mẹ và bé
                            </a>
                        </li>
                        <li>
                            <a className="mnbar-item" href="#">
                                Dinh dưỡng
                            </a>
                        </li>
                        <li>
                            <a className="mnbar-item" href="#">
                                Bệnh thường gặp
                            </a>
                        </li>
                        <li>
                            <a className="mnbar-item" href="#">
                                COVID-19
                            </a>
                        </li>
                        <li>
                            <a className="mnbar-item" href="#">
                                Gia đình &amp; giới tính
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="row" style={{ height: 350, marginTop: 90 }}>
                    <h1>Sống khỏe</h1>
                    <div className="blog-card">
                        <img src="img/blog/stress.jpg" className="blog-pic" />
                        <p>1 tháng 3 năm 2023</p>
                        <a>Nhận biết dấu hiệu bị stress và cách vượt qua</a>
                        {/* <button class="btn-primary" style="margin: 20px 5px;">Xem thêm ></button> */}
                    </div>
                    <div className="blog-card">
                        <img src="img/blog/kudos.jpg" className="blog-pic" />
                        <p>1 tháng 4 năm 2023</p>
                        <a>Khỏe đẹp mỗi ngày cùng 12 loại vitamin, nhân sâm và biotin</a>
                    </div>
                    <div className="blog-card">
                        <img src="img/blog/alodoc.jpg" className="blog-pic" />
                        <p>1 tháng 4 năm 2023</p>
                        <a>MediLife HealthCare hân hạnh đồng hành cùng AloDoctor trên VTV9</a>
                    </div>
                    <div className="blog-card">
                        <img
                            src="img/blog/ngu-nhieu-nhung-van-buon-ngu-8.jpg"
                            className="blog-pic"
                        />
                        <p>12 tháng 4 năm 2023</p>
                        <a>Ngủ nhiều nhưng vẫn buồn ngủ. Nguyên nhân và cách khắc phục</a>
                    </div>
                </div>
                <div className="row" style={{ height: 350, marginTop: 60 }}>
                    <h1
                        style={{
                            fontFamily:
                                '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                        }}
                    >
                        Mẹ và bé
                    </h1>
                    <div className="blog-card">
                        <img src="img/blog/mb1.jpg" className="blog-pic" />
                        <p>11 tháng 3 năm 2023</p>
                        <a>Để bé khỏe mạnh ngay từ trong bụng mẹ</a>
                        {/* <button class="btn-primary" style="margin: 20px 5px;">Xem thêm ></button> */}
                    </div>
                    <div className="blog-card">
                        <img src="img/blog/mb2.jpg" className="blog-pic" />
                        <p>1 tháng 3 năm 2023</p>
                        <a>10 cách giao tiếp với con</a>
                    </div>
                    <div className="blog-card">
                        <img src="img/blog/mb3.jpg" className="blog-pic" />
                        <p>1 tháng 3 năm 2023</p>
                        <a>Trẻ lười ăn dặm, mẹ phải làm gì?</a>
                    </div>
                    <div className="blog-card">
                        <img src="img/blog/mb4.jpg" className="blog-pic" />
                        <p>1 tháng 3 năm 2023</p>
                        <a>Cảnh báo những món ăn không dành cho trẻ dưới 5 tuổi</a>
                    </div>
                </div>
                <img src="img/medicine/banner2.jpg" style={{ width: "100%" }} />
                <div className="row" style={{ height: 350, marginTop: 60 }}>
                    <h1
                        style={{
                            fontFamily:
                                '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                        }}
                    >
                        Dinh dưỡng
                    </h1>
                    <div className="blog-card">
                        <img src="img/blog/d1.jpg" className="blog-pic" />
                        <p>1 tháng 3 năm 2023</p>
                        <a>Khẩu phần ăn ngon và lành cho chị em những ngày "đèn đỏ"</a>
                    </div>
                    <div className="blog-card">
                        <img src="img/blog/d2.jpg" className="blog-pic" />
                        <p>1 tháng 3 năm 2023</p>
                        <a>Các chuyên gia khuyên uống 1 cốc sữa hạt mỗi ngày. Vì sao ?</a>
                    </div>
                    <div className="blog-card">
                        <img src="img/blog/d3.jpg" className="blog-pic" />
                        <p>1 tháng 3 năm 2023</p>
                        <a>Liệu có cần bổ sung canxi khi qua tuổi trưởng thành ?</a>
                    </div>
                </div>
            </div>
        </section>


    );

}
export default Blog;