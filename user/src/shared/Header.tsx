import { Component } from "react";
import { Link } from "react-router-dom";

const Header = function () {

        return (
            <section className="header">
                <div className="container">
                    <div id="top-page">
                        <img src="img/logo.png" style={{ marginLeft: 50 }} />
                        <h1 id="com-name">MediLife HealthCare</h1>
                        <div id="menu-bar">
                            <ul>

                                <li><Link className="mnbar-item" to={"/"}>Trang chủ</Link></li>
                                <li><Link className="mnbar-item" to={"/shop"}>Thuốc tốt</Link></li>
                                <li><Link className="mnbar-item" to={"/blog"}>Sống khỏe</Link></li>
                                
                                {/* <li>
                                    {
                                        this.props.menus.map((x: any) => (<Link className="mnbar-item" to={x.url}>{x.name}</Link>))
                                    }
                                </li> */}
                                {/* <li>
                                    <a
                                        className="mnbar-item"
                                        href="product-page.html"

                                    >
                                        Thuốc tốt
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="mnbar-item"
                                        href="blog.html"

                                    >
                                        Sống khỏe
                                    </a>
                                </li> */}
                                <li>
                                    <button id="menu-btn" >
                                        Đặt thuốc
                                    </button>
                                </li>
                                {/* <div class="my_btn">
                      <a href="#"><span>Đổi mật khẩu</span></a>
                  </div> */}
                                <div style={{ height: 80, width: 180, float: "right" }}>
                                    <button className="small-btn">
                                        <Link to={"/login"}>
                                        <img
                                            src="img/user-interface.png"
                                            style={{ height: 20 }}

                                        />
                                        </Link>
                                    </button>
                                    <button className="small-btn">
                                        <img src="img/notification.png" style={{ height: 20 }} />
                                    </button>
                                    <button className="small-btn">
                                    <Link to={"/cart"} >
                                        <img
                                            src="img/shopping-cart.png"
                                            style={{ height: 20 }}

                                        />
                                    </Link>
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>

                  
                </div>
            </section>

        );
    
}
export default Header;