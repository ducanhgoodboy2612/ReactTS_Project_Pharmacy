import { Component } from "react";

class Footer extends Component<any, any>{

    render() {
        return (
            <footer style={{ marginTop: 100 }}>
                <div className="container">
                    <div className="row">
                        <div className="foot-nav" style={{ marginLeft: 100 }}>
                            <h4>Về MediLife</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Giới thiệu</a>
                                </li>
                                <li>
                                    <a href="#">Hệ thống cửa hàng</a>
                                </li>
                                <li>
                                    <a href="#">Giấy phép kinh doanh</a>
                                </li>
                                <li>
                                    <a href="#">Quy chế hoạt động</a>
                                </li>
                                <li>
                                    <a href="#">Chính sách giao hàng</a>
                                </li>
                                <li>
                                    <a href="#">Chính sách đổi trả</a>
                                </li>
                                <li>
                                    <a href="#">Chính sách bảo mật</a>
                                </li>
                                <li>
                                    <a href="#">Chính sách thanh toán</a>
                                </li>
                            </ul>
                        </div>
                        <div className="foot-nav">
                            <h4>Danh mục</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Dược phẩm</a>
                                </li>
                                <li>
                                    <a href="#">Tủ thuốc gia đình</a>
                                </li>
                                <li>
                                    <a href="#">Vệ sinh cá nhân</a>
                                </li>
                                <li>
                                    <a href="#">Thực phẩm chức năng</a>
                                </li>
                                <li>
                                    <a href="#">Mẹ và bé</a>
                                </li>
                                <li>
                                    <a href="#">Chăm sóc sắc đẹp</a>
                                </li>
                                <li>
                                    <a href="#">Thiết bị y tế</a>
                                </li>
                            </ul>
                        </div>
                        <div className="foot-nav">
                            <h4>Liên hệ</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fas fa-map-marker-alt" /> Địa chỉ: 334 Đường Nguyễn
                                    Trãi, Q.Thanh Xuân, Hà Nội
                                </li>
                                <li>
                                    <i className="fas fa-phone" /> Điện thoại: 0123456789
                                </li>
                                <li>
                                    <i className="fas fa-envelope" /> Email: medilifevietnam@gmail.com
                                </li>
                            </ul>
                            <h4>Kết nối với chúng tôi</h4>
                            <img src="img/social-contact.png" />
                        </div>
                        <div className="foot-nav">
                            <div
                                id="foot-logo"
                                style={{ backgroundColor: "#eaebf0", borderRadius: "50%" }}
                            >
                                <img src="img/logo.png" style={{ margin: "20px 35px" }} />
                            </div>
                            {/* <img id="foot-logo" src="img/logock-removebg-preview.png"> */}
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p className="text-center" />
                        </div>
                    </div>
                    <div id="bot-div" style={{ marginTop: 50 }}>
                        <img id="log-footer" src="img/logo_footer.png" />
                        <p>
                            © MediLife HealthCare Corporation. All rights reserved. Author: Pham Le
                            Duc Anh
                        </p>
                    </div>
                </div>
            </footer>

        );
    }
}
export default Footer;