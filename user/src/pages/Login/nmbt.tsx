import { Component } from "react";
import React, { useEffect, useRef } from 'react';
import "../../assets/css/nmbt.css";    

const nmbt = function () {
    // componentDidMount() {
    //     handleScrollAndContentLoad();
    // }

    return (
        <>
            <div id="slideshow">
                <div>nmbt</div>
                <div className="slide-wrapper">
                    <div className="slide">
                        <img src="img/slide1.jpg" />
                    </div>
                    <div className="slide">
                        <img src="img/slide2.jpg" />
                    </div>
                    <div className="slide">
                        <img src="img/slide3.jpg" />
                    </div>
                    <div className="slide">
                        <img src="img/slide4-1.jpg" />
                    </div>
                </div>

            </div>
            <section id="welcome" className="bg-white">
                <div className="container" style={{ width: 1140, margin: "0px auto" }}>
                    <div className="section-content">
                        <div className="heading-section">
                            <h2>Welcome to MediLife HealthCare</h2>
                            <p>Nam mo bo tat</p>
                        </div>
                        <div className="welcome-block">
                            <div className="featured-block ">
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <img
                                        src="img/fea2.png"
                                        className="featured-block-image img-fluid"
                                        alt=""
                                    />
                                    <p className="featured-block-text">
                                        Tư vấn <br />
                                        chuyên gia
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="welcome-block">
                            <div className="featured-block">
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <img
                                        src="img/fea3.png"
                                        className="featured-block-image img-fluid"
                                        alt=""
                                    />
                                    <p className="featured-block-text">
                                        Thuốc tốt
                                        <br /> giá rẻ
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="welcome-block">
                            <div className="featured-block">
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <img
                                        src="img/fea1.png"
                                        className="featured-block-image img-fluid"
                                        alt=""
                                    />
                                    <p className="featured-block-text">
                                        Thông tin <br /> sức khỏe
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="welcome-block">
                            <div className="featured-block">
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <img
                                        src="img/fea4.png"
                                        className="featured-block-image img-fluid"
                                        alt=""
                                    />
                                    <p className="featured-block-text">
                                        Mã giảm <br /> giá hot
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-grey" id="intro">
                <div className="container" style={{ width: 1340, backgroundColor: '#41C9E2' }}>
                    <div className="left-pic AnhDiVao1 Left1">
                        <img src="img/story.jpg" />
                    </div>
                    <div className="right-des AnhDiVao2 Left2">
                        <div id="introduce">
                            <h2 className="heading-title">Our Story</h2>
                            <h3 intro-title style={{ color: "#5AC0AB" }}>
                                Công ty Dược phẩm và Dịch vụ chăm sóc sức khỏe MediLife
                            </h3>
                            <p className="content-text" style={{ fontSize: "16sp" }}>
                                MediLife là một công ty dược phẩm và chăm sóc sức khỏe hàng đầu quốc
                                tế, cam kết nâng cao sức khỏe và sự phát triển của mọi người trên
                                toàn thế giới. Với sự tập trung mạnh mẽ vào đổi mới và chất lượng,
                                chúng tôi luôn cố gắng cung cấp các giải pháp chăm sóc sức khỏe chất
                                lượng và dễ tiếp cận.{" "}
                            </p>
                        </div>
                        <div id="intro-row" style={{ width: "100%", height: "max-content" }}>
                            <div id="mission">
                                <div className="custom-text-box">
                                    <h3 className="intro-title" style={{ color: "#5AC0AB" }}>Our Mission</h3>
                                    <p className="content-text">
                                        Tại MediLife, sứ mạng của chúng tôi là trở thành đối tác tin cậy
                                        trong lĩnh vực chăm sóc sức khỏe, góp phần tích cực vào sức khỏe
                                        và sự phát triển toàn cầu.
                                    </p>
                                    <ul className="custom-list">
                                        <li className="custom-list-item">
                                            <i className="fas fa-check" />
                                            Tư vấn sức khỏe
                                        </li>
                                        <li className="custom-list-item">
                                            <i className="fas fa-check" />
                                            Hỗ trợ y tế toàn cầu
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="achieve">
                                <div className="custom-text-box ">
                                    <div>
                                        <h3 style={{ color: "#5AC0AB" }}>Những con số biết nói</h3>
                                        <div>
                                            <div id="city">
                                                <div id="customer-count" className="achieve-num">
                                                    4,000
                                                </div>
                                                <div className="text-xl text-blue-200">khách hàng</div>
                                            </div>
                                            <div>
                                                <div className="achieve-num" id="transaction-count">
                                                    8,000,000
                                                </div>
                                                <div className="text-xl text-blue-200">lượt mua hàng</div>
                                            </div>
                                            {/* <div class="flex flex-col items-center mx-12 w-64 mb-12 lg:mb-0">
                              <div class="achieve-num" id="dollar-count">
                                14
                              </div>
                              <div class="text-xl text-blue-200">triệu dollar ủng hộ cho y tế toàn cầu</div>
                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="intro2" className="bg-white" style={{ height: 650 }}>
                <div className="container" style={{ width: 1340, margin: "0px auto" }}>
                    <div className="section-content">
                        <div className="heading-section">
                            <h2></h2>
                        </div>
                        <div className="row" style={{ height: 550 }}>
                            <div className="left-des AnhDiVao3">
                                <h1 className="heading-title">
                                    {" "}
                                    Dược phẩm chất lượng và an toàn, tuân thủ nghiêm ngặt các tiêu
                                    chuẩn quốc tế
                                </h1>
                                <p className="content-text">
                                    Đội ngũ chuyên gia của chúng tôi luôn tận dụng sự sáng tạo và
                                    nghiên cứu để phát triển các giải pháp y tế tiên tiến và cải thiện
                                    chất lượng cuộc sống của hàng triệu người trên khắp thế giới thông
                                    qua việc cung cấp các sản phẩm chăm sóc sức khỏe hiệu quả.
                                </p>
                            </div>
                            <div className="right-pic AnhDiVao4">
                                <img
                                    src="img/intro-thuoc.jpg"
                                    style={{ width: "95%", height: "90%", marginLeft: 45 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="intro3" className="bg-white" style={{ height: 400 }}>
                <div className="container" style={{ width: 1140, margin: "0px auto" }}>
                    <img
                        id="banner-pic"
                        style={{ width: "100%" }}
                        src="img/2010.png"
                        alt="Consult"
                    />
                </div>
            </section>
            <section id="team" className="bg-white" style={{ height: 640 }}>
                <div
                    className="container"
                    style={{
                        width: 1140,
                        height: "665x",
                        margin: "0px auto",
                        paddingBottom: 80
                    }}
                >
                    <div className="section-content">
                        <div className="heading-section">
                            <h2>ĐỘI NGŨ CHUYÊN GIA</h2>
                        </div>
                        <div id="mem-lst">
                            <div className="team-card">
                                <img src="img/bsi1.jpg" />
                                <div className="team-desc">
                                    <h3>PGS.TS</h3>
                                    <h2>Đỗ Quang Toản</h2>
                                </div>
                            </div>
                            <div className="team-card">
                                <img src="img/bsi3.jpg" />
                                <div className="team-desc">
                                    <h3>PGS.TS</h3>
                                    <h2>Hà Minh Điền</h2>
                                </div>
                            </div>
                            <div className="team-card">
                                <img src="img/bsi2.jpg" />
                                <div className="team-desc">
                                    <h3>PGS.TS</h3>
                                    <h2>Trần Văn Khang</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section_3" style={{ height: 715 }}>
                <div className="container" style={{ width: 1240, margin: "0px auto" }}>
                    <div className="heading-section">
                        <h2>CÙNG CHÚNG TÔI HỖ TRỢ Y TẾ TOÀN CẦU</h2>
                    </div>
                    <div className="menu-row" id="row1" style={{ width: "100%" }}>
                        <div className="donate-card col-3 col-s-6">
                            <div className="card-banner" style={{ textAlign: "center" }}>
                                <img src="img/cause1.jpg" className="cause-pic" />
                                {/* <button class="food-menu-btn">Ủng hộ</button> */}
                            </div>
                            <div className="donation-text">
                                <h3 className="card-title">Sức khỏe cho trẻ em</h3>
                                <p className="content-text">
                                    Tạo ra một thế giới tốt đẹp hơn, nơi mà mọi đứa trẻ trên thế giới
                                    có cơ hội phát triển sức khỏe toàn diện và đóng góp vào tương lai
                                    của thế giới.
                                </p>
                            </div>
                            <button className="donate-btn">Tìm hiểu thêm</button>
                        </div>
                        <div className="donate-card col-3 col-s-6">
                            <div className="card-banner" style={{ textAlign: "center" }}>
                                <img src="img/cause2.jpg" className="cause-pic" />
                                {/* <button class="food-menu-btn">Ủng hộ</button> */}
                            </div>
                            <div className="donation-text">
                                <h3 className="card-title">Vấn đề tiêm chủng</h3>
                                <p className="content-text">
                                    Mỗi liều vaccine là một bước tiến quan trọng trong cuộc chiến
                                    chống lại các dịch bệnh và đói nghèo.
                                </p>
                            </div>
                            <button className="donate-btn">Tìm hiểu thêm</button>
                        </div>
                        <div className="donate-card col-3 col-s-6">
                            <div className="card-banner" style={{ textAlign: "center" }}>
                                <img src="img/cause3.jpg" className="cause-pic" />
                                {/* <button class="food-menu-btn">Ủng hộ</button> */}
                            </div>
                            <div className="donation-text">
                                <h3 className="card-title">Cung cấp nước sạch</h3>
                                <p className="content-text">
                                    Sự thiếu hụt nước sạch là một thách thức lớn đối với nhiều cộng
                                    đồng trên khắp thế giới. Chúng ta có thể làm nên sự khác biệt.{" "}
                                </p>
                            </div>
                            <button className="donate-btn">Tìm hiểu thêm</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="intro3" className="bg-white" style={{ height: 400 }}>
                <div className="container" style={{ width: 1240, margin: "0px auto" }}>
                    <img
                        id="banner-pic"
                        style={{ width: "100%" }}
                        src="img/ad.jpg"
                        alt="Consult"
                    />
                </div>
            </section>
            <section>
                <div>
                    <ul className="contact_means">
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f icon" />{" "}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-linkedin-in icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-google-plus-g icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="reservation">
                <div
                    className="container"
                    style={{ backgroundImage: "url(img/reser.jpg)" }}
                >
                    <div
                        id="reser-form"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", paddingTop: 10 }}
                    >
                        <div className="heading-section">
                            <h2 style={{ marginTop: 15, color: "#5A6F80", textAlign: "center" }}>
                                Đặt lịch tư vấn <br /> sức khỏe
                            </h2>
                        </div>
                        <form method="post" name="reser">
                            <div className="row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Họ tên"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Số điện thoại"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="datetime"
                                        name="datetime"
                                        placeholder="Thời gian"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        style={{ height: 100 }}
                                        placeholder="Hãy cho các bác sĩ của chúng tôi biết trước về các vấn đề của bạn..."
                                        defaultValue={""}
                                    />
                                </div>
                                <div className=" text-center">
                                    <button id="btn-reser">Đặt lịch</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>

    );

}
export default nmbt;