import { useEffect, useState } from "react";
// import "../assets/css/style_category.css";
import { Link, useParams } from "react-router-dom";
import { getProduct, getProductByCate } from "../services/shop.services";
import { getMenus } from "../services/category.services";
import ReactPaginate from "react-paginate";
import { useRecoilState } from "recoil";
import { cartState } from "../constant/recoil";
// import { addToCart } from "../utils/cart";


type DataParams = {
    id: string;
  };
const Shop_Category = function () {
    const { id } = useParams<DataParams>();

  const [data, setDatas] = useState([]);
  const [cate, setCate] = useState([]);
  const [cart, setCart] = useRecoilState(cartState);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };
  const changeInputValue = (e: any) => {
    setPageSize(+e.target.value);
  };

  useEffect(() => {
    async function loadData(id: any) {
      let items = await getProductByCate({
        page: page,
        pageSize: pageSize,
        cate_id: id
      });
      setDatas(items.data);
      setPageCount(Math.ceil(items.totalItems / pageSize));
    }
    loadData(id);
  }, [page, pageSize, id]);

  useEffect(() => {
    async function loadCate() {
      let items = await getMenus();
      setCate(items);
    }
    loadCate();
  }, []);

  function formatCurrency(number: number): string {

    const formattedNumber: string = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber + " đ";
  }

  return (
    <>
      <section
        className="bg-grey"
        style={{ marginTop: 90, height: "max-content" }}
      >
        <div className="container" style={{ width: 1240, margin: "0px auto" }}>
          <div
            className="flexbox"
            style={{ width: "100%", height: 100, marginTop: 140 }}
          >
            <div className="dropdown">
              <button className="dropbtn">Danh mục ▾</button>
              <div className="dropdown-content">
                {cate.map((x: any) => (
                  <Link to={"/shop/" + x.cate_id}>{x.cate_name}</Link>
                ))}
              </div>
            </div>
            <div className="search" style={{ width: "80%" }}>
              <div className="box">
                <form className="sbox" action="/search" method="get">
                  <input
                    className="stext"
                    type="text"
                    name="find"
                    placeholder="Tìm kiếm ..."
                  />
                  <a className="sbutton" type="submit">
                    <i className="fa fa-search" />
                  </a>
                </form>
              </div>
            </div>
          </div>
          <div
            className="heading-section"
            style={{ textAlign: "center", marginTop: "-15px" }}
          >
            <h2>NHÀ THUỐC MEDILIFE</h2>
          </div>

          <div style={{ height: 200, marginTop: 100 }}>
            <div id="cate1" className="link-btn col-1 col-s-1 col-m-1">
              <img src="/img/cate1.png" />
              <p>Ưu đãi đặc biệt</p>
            </div>
            <div id="cate2" className="link-btn col-1 col-s-1 col-m-1">
              <img src="/img/cate2.png" />
              <p>Được tin dùng</p>
            </div>
            <div id="cate3" className="link-btn col-1 col-s-1 col-m-1">
              <img src="/img/cate4.png" />
              <p>Tủ thuốc gia đình</p>
            </div>
            <div id="cate4" className="link-btn col-1 col-s-1 col-m-1">
              <img src="/img/cate7.png" />
              <p>Chăm sóc sức khỏe</p>
            </div>
            <div id="cate5" className="link-btn col-1 col-s-1 col-m-1">
              <img src="/img/cate5.png" />
              <p>TP chức năng</p>
            </div>
            <div id="cate6" className="link-btn col-1 col-s-1 col-m-1">
              <img src="/img/cate6.png" />
              <p>Mẹ và bé</p>
            </div>
            <div id="cate7" className="link-btn col-1 col-s-1 col-m-1">
              <img src="/img/cate3.png" />
              <p>Vệ sinh cá nhân</p>
            </div>
            <div id="cate8" className="link-btn col-1 col-s-1 col-m-1">
              <img src="/img/cate8.png" />
              <p>Thiết bị y tế</p>
            </div>
          </div>
         

          <div
            className="menu-row"
            id="row3"
            style={{ width: "100%", minHeight: "600px", margin: "180px auto" }}
          >
            <div className="cates">
              <h2 className="title-cate">
                Cùng MediLife bảo vệ sức khỏe cả nhà
              </h2>
            </div>{" "}
            <div style={{height: 'maxContent'}}>
            {data.map((x: any) => (
              <div className="product-card col-2 col-s-4 col-m-6">
                
                <div className="card-banner" style={{ textAlign: "center" }}>
                  <img src={x.picture} className="med-pic" />
                </div>
                <h3 className="card-title">
                  <Link to={"/detail/" + x.product_Id} title="Product">
                    {x.product_Name}
                  </Link>
                  {/* <a href="#">{x.product_Name}</a> */}
                </h3>
                <div className="price-wrapper">
                  <data className="price">{formatCurrency(x.unit_Price)}</data>
                  <del className="del" data-value={69.0}>
                    85.000
                  </del>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
            ))}
            </div>
            {/* <div className="page">
              <select
                name="pageSize"
                onChange={(e) => changeInputValue(e)}
                value={pageSize}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
              />
            </div> */}
          </div>
        
          <div className="menu-row" id="row4" style={{ width: "100%" }}>
            <div className="cates">
              <h2 className="title-cate">Chăm sóc sức khỏe</h2>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <button className="sale">-30%</button>
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/selfcare1.jpg" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Men vi sinh tăng cường đề kháng Life Space Probiotic (Hộp 60
                  viên)
                </a>
              </h3>
              <div className="price-wrapper">
                <data className="price">44.000đ</data>
                <del className="del" data-value={69.0}>
                  45.000
                </del>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/selfcare2.jpg" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Men vi sinh hỗ trợ trao đổi chất Life Space Shape B420 (Hộp 60
                  viên)
                </a>
              </h3>
              <div className="price-wrapper">
                <data className="price">12.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/sc3.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Nước uống hỗ trợ dưỡng trắng và làm sáng da Nucos Super White
                  (Hộp 10 chai)
                </a>
              </h3>
              <div className="price-wrapper">
                <data className="price">36.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/sc4.jpg" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Nước uống làm sáng da Nucos Spa Collagen 10,000mg (Hộp 10
                  chai)
                </a>
              </h3>
              <div className="price-wrapper">
                <data className="price">40.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/sc5.jpg" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Nước uống làm sáng da, giảm lão hóa Nucos Spa Collagen
                  10,000mg (Hộp 10 chai)
                </a>
              </h3>
              <div className="price-wrapper">
                <data className="price">20.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
          </div>
          <div className="moreProd">
            <a>Xem thêm ...</a>
          </div>
          <div className="menu-row" id="row5" style={{ width: "100%" }}>
            <div className="cates">
              <h2 className="title-cate">Thực phẩm chức năng</h2>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/tp.jpg" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">Viên Vitamin E 400IU (Chai 60 viên)</a>
              </h3>
              <div className="price-wrapper">
                <data className="price">40.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/tp2.jpg" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Thực phẩm chức năng viên uống Heviho (Hộp 20 Viên)
                </a>
              </h3>
              <div className="price-wrapper">
                <data className="price">230.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/tp3.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">Viên vai gáy Thái Dương (2 vỉ x 6 viên)</a>
              </h3>
              <div className="price-wrapper">
                <data className="price">170.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/tp4.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Thực phẩm chức năng hỗ trợ cai rượu Boni Ancol (Chai 60 viên)
                </a>
              </h3>
              <div className="price-wrapper">
                <data className="price">440.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/tp5.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Thực phẩm chức năng làm đẹp da Acnacare (3 vỉ x 10 viên/hộp)
                </a>
              </h3>
              <div className="price-wrapper">
                <data className="price">49.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
          </div>
          <div className="moreProd">
            <a>Xem thêm ...</a>
          </div>
          <img
            src="img/medicine/banner2.jpg"
            style={{ width: "100%", marginTop: 30 }}
          />
          <div className="menu-row" id="row6" style={{ width: "100%" }}>
            <div className="cates">
              <h2 className="title-cate">Mẹ và bé</h2>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <button className="sale">-30%</button>
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/khaneb.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">Khăn ướt em bé</a>
              </h3>
              <div className="price-wrapper">
                <data className="price">31.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/phanthomeb.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">Phấn thơm cho bé (Chai 200g)</a>
              </h3>
              <div className="price-wrapper">
                <data className="price">128.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/gacrangeb.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">Gạc răng cho bé</a>
              </h3>
              <div className="price-wrapper">
                <data className="price">470.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/similac.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">Sữa bột Similac Gold DHA</a>
              </h3>
              <div className="price-wrapper">
                <data className="price">520.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
            <div className="product-card col-2 col-s-4 col-m-6">
              <div className="card-banner" style={{ textAlign: "center" }}>
                <img src="/img/medicine/suatameb.png" className="med-pic" />
              </div>
              <h3 className="card-title">
                <a href="#">Bundle Dung dịch rửa mắt Eyemiru Wash (500ml)</a>
              </h3>
              <div className="price-wrapper">
                <data className="price">42.000đ</data>
              </div>
              <button className="btn-addToCart">Xem chi tiết ...</button>
            </div>
          </div>
          <div className="moreProd">
            <a>Xem thêm ...</a>
          </div>
        </div>
      </section>
      <div id="contact">
        <img src="/img/medicine/phone.png" className="ic-cont" />
        <img src="/img/medicine/Icon_of_Zalo.svg.jpg" className="ic-cont" />
        <img src="/img/medicine/facebook.png" className="ic-cont" />
      </div>
    </>
  );
};
export default Shop_Category;
