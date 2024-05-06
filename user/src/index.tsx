import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import routers from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={routers} />
    </RecoilRoot>
  </React.StrictMode>
);
reportWebVitals();


<div
  className="menu-row"
  id="row1"
  style={{ width: "100%", height: "600px" }}
>
  <div className="cates">
    <h2
      className="title-cate"
      style={{ fontSize: 28, color: "rgb(233, 29, 29)" }}
    >
      Bùng nổ ưu đãi đặc biệt
    </h2>
  </div>
  <div id="hotsale" className="col-12 col-s-7">
    <p style={{ fontSize: 22, marginTop: 10 }}>15/12 - 31/12</p>
    <p style={{ marginTop: "-10px" }}>Đang diễn ra</p>
  </div>
  <div className="product-card col-2 col-s-4 col-m-6">
    <button className="sale">-30%</button>
    <div className="card-banner" style={{ textAlign: "center" }}>
      <img src="img/medicine/detailpic2.jpg" className="med-pic" />
    </div>
    <h3 className="card-title">
      <a href="product-detail3.html">
        Viên dầu cá Omega 3 Fish Oil 1000mg Good Health
      </a>
    </h3>
    <div className="price-wrapper">
      <data className="price">125.000đ</data>
      <del className="del" data-value="">
        179.000đ
      </del>
    </div>
    <button
      className="btn-addToCart"
      style={{ backgroundColor: "rgb(212, 68, 68)" }}
    >
      Xem chi tiết ...
    </button>
  </div>
  <div className="product-card col-2 col-s-4 col-m-6">
    <button className="sale">-40%</button>
    <div className="card-banner" style={{ textAlign: "center" }}>
      <img src="img/medicine/detailpic.jpg" className="med-pic" />
    </div>
    <h3 className="card-title">
      <a href="product-detail.html">
        Dung Dịch nhỏ mắt Vrohto Mineral Tear (Chai 13ml)
      </a>
    </h3>
    <div className="price-wrapper">
      <data className="price">40.000đ</data>
      <del className="del" data-value="">
        66.000
      </del>
    </div>
    <button
      className="btn-addToCart"
      style={{ backgroundColor: "rgb(212, 68, 68)" }}
    >
      Xem chi tiết ...
    </button>
  </div>
  <div className="product-card col-2 col-s-4 col-m-6">
    <button className="sale">-20%</button>
    <div className="card-banner" style={{ textAlign: "center" }}>
      <img src="img/medicine/hot1.jpg" className="med-pic" />
    </div>
    <h3 className="card-title">
      <a href="#">Bundle Dung dịch rửa mắt Eyemiru Wash (500ml)</a>
    </h3>
    <div className="price-wrapper">
      <data className="price">30.000đ</data>
      <del className="del" data-value={69.0}>
        38.000
      </del>
    </div>
    <button
      className="btn-addToCart"
      style={{ backgroundColor: "rgb(212, 68, 68)" }}
    >
      Xem chi tiết ...
    </button>
  </div>
  <div className="product-card col-2 col-s-4 col-m-6">
    <button className="sale">-20%</button>
    <div className="card-banner" style={{ textAlign: "center" }}>
      <img src="img/medicine/hot2.jpg" className="med-pic" />
    </div>
    <h3 className="card-title">
      <a href="#">Sữa tắm mụn Acnevir Santafa (Chai 210ml)</a>
    </h3>
    <div className="price-wrapper">
      <data className="price">138.000đ</data>
      <del className="del" data-value={69.0}>
        173.000
      </del>
    </div>
    <button
      className="btn-addToCart"
      style={{ backgroundColor: "rgb(212, 68, 68)" }}
    >
      Xem chi tiết ...
    </button>
  </div>
  <div className="product-card col-2 col-s-4 col-m-6">
    <button className="sale">-25%</button>
    <div className="card-banner" style={{ textAlign: "center" }}>
      <img
        src="img/medicine/P18393_11-thumbnail-510x510-70.jpg"
        className="med-pic"
      />
    </div>
    <h3 className="card-title">
      <a href="#">Nước muối diệt khuẩn NatriClorua 0,9 (500ml)</a>
    </h3>
    <div className="price-wrapper">
      <data className="price">10.000đ</data>
      <del className="del" data-value={69.0}>
        14.000
      </del>
    </div>
    <button
      className="btn-addToCart"
      style={{ backgroundColor: "rgb(212, 68, 68)" }}
    >
      Xem chi tiết ...
    </button>
  </div>
</div>
