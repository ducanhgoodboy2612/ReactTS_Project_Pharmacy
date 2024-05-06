import { useEffect, useState } from "react";
import "../assets/css/product-detail.css";
import { addToCart } from "../utils/cart";
import { dec, inc } from "../utils/p-detail";
// import { currentSlide, showSlides } from "../utils/image_product";
import { useParams } from "react-router-dom";
import { getItem } from "../services/detail.services";
import { useRecoilState } from "recoil";
import { cartState } from "../constant/recoil";
type DataParams = {
  id: string;
};
const Detail = function () {
  const { id } = useParams<DataParams>();
  const [data, setData] = useState({ product_Id: null, product_Name: null, picture: null, unit_Price: 0 });
  const [cart, setCart] = useRecoilState(cartState);
  useEffect(() => {
    //showSlides(1);
    async function loadData(id: any) {
      let items = await getItem(id);
      setData(items);
    }
    loadData(id);
  }, [id]);

  function formatCurrency(number: number): string {

    const formattedNumber: string = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber + " đ";
  }
  return (
    <>
  
      <div>
        <section className="bg-white main" style={{marginTop: '70px', backgroundColor: '#F0F2F5', height: '610px', fontFamily: '"Gabarito", sans-serif'}}>
          <div className="container" style={{width: '1340px', height: '100%'}}>
            <div className="detail-left">
                {data.picture && <img src={data.picture} id="detailpic" />}
              <div style={{height: '130px'}}>
                <img className="other-pic" src="/img/medicine/morepic1.jpg" />
                <img className="other-pic" src="/img/medicine/morepic2.jpg" />
                <img className="other-pic" src="/img/medicine/morepic3.jpg" />
              </div>
            </div>
            <div className="detail-right">
              <h2 className="title-h2" id="med-name">{data.product_Name}</h2>
              <div id="detail-info" style={{width: '475px', height: '435px', float: 'left'}}>
                <div id="product-price">
                  <p>Mã thuốc: <span className="Product_id">{data.product_Id}</span></p>
                  <p className="ProductPrice_price">{formatCurrency(data.unit_Price)}</p>
                  <div>
                    <div>Giá đã bao gồm Thuế.</div>
                    <div>Phí vận chuyển và các chi phí khác (nếu có) sẽ được thể hiện khi đặt hàng.</div>
                    <p className="important_info">Mua hàng và tích lũy từ 50 xu vàng.</p>
                  </div>
                </div>
                <div id="product-name">Dung Dịch nhỏ mắt ohto Mineral Tear bổ sung
                  khoáng chất và nước mắt nhân tạo giúp giữ ẩm, làm dịu mắt khô. Phục hồi và tạo sự thoải mái cho mắt mỏi, mắt
                  kích ứng nhẹ, mắt khó chịu do đeo kính áp tròng, mắt mờ (do tiết dịch).</div>
                <div id="quantity" style={{marginTop: '20px'}}>
                  <input className="round-btn" type="button" defaultValue="-" onClick={()=>dec('numtxt')}  />
                  {/* <input className="round-btn" type="button" defaultValue="-" onClick={dec('numtxt')} /> */}
                  <input id="numtxt" type="text" defaultValue={1} />
                  <input className="round-btn" type="button" defaultValue="+" onClick={()=>inc('numtxt')}  />
                  {/* <input className="round-btn" type="button" defaultValue="+" oncClick="inc('numtxt')" /> */}
                </div>
                <div style={{height: '45px', marginTop: '40px'}}>
                  <button id="buy-now">Mua ngay</button>
                  
                  <button id="btn-addToCart" onClick={() => {
                    let quantity = parseInt((document.getElementById('numtxt') as HTMLInputElement).value);
                    addToCart(data, quantity);
                    let list = JSON.parse(localStorage.getItem('cart') || '[]');
                    setCart(list);
                  }}>Thêm vào giỏ hàng </button>
                </div>
              </div>
              <div id="deliver-info" style={{width: '330px', height: '435px', float: 'right'}}>
                <div id="deli-text">
                  <h2 className="title-h2-sec">Các hình thức giao hàng</h2>
                  <p>Freeship cho đơn hàng từ 300.000đ</p>
                </div>
                <div>
                  <div className="service-block">
                    <div className="featured-block">
                      <a href="donate.html" style={{textDecoration: 'none'}}>
                        <img src="/img/service1.png" className="featured-block-image img-fluid" alt="" />
                        <p>Tư vấn chuyên gia</p>
                      </a>
                    </div>
                  </div>
                  <div className="service-block">
                    <div className="featured-block ">
                      <a href="donate.html" style={{textDecoration: 'none'}}>
                        <img src="/img/service2.png" className="featured-block-image img-fluid" alt="" />
                        <p>Thuốc tốt giá rẻ</p>
                      </a>
                    </div>
                  </div>
                  <div className="service-block">
                    <div className="featured-block">
                      <a href="donate.html" style={{textDecoration: 'none'}}>
                        <img src="/img/service3.png" className="featured-block-image img-fluid" alt="" />
                        <p>Thông tin <br /> sức khỏe</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white main">
          <div className="container" style={{width: '1340px', paddingLeft: '10px'}}>
            <div style={{paddingLeft: '22px'}}>
              <div id="nav-info">
                <ul>
                  <li className="d-active"> Thông tin sản phẩm </li>
                  <li> Thương hiệu </li>
                </ul>
              </div>
              <div id="detail-info">
                <h2 className="title-h2-sec">Tình trạng</h2>
                <p>Còn hàng</p>
                <h2 className="title-h2-sec">Thành phần</h2>
                <p>
                  Sodium Chloride 63,7 mg, Sodium Bicarbonate 6,5 mg, Potassium Chloride 3,9 mg,
                  Calcium Chloride Hydrate 0,65 mg, Sodium Chondroitin Sulfate 65,0 mg,
                  Hypromellose 1,3 mg, Boric Acid, Sodium Borate, Sodium Hyaluronate, Polysorbate 80,
                  Polyoxyethylene Polyoxypropylene Glycol, Disodium Edetate Hydrate, Polyhexamethylene
                  Biguanide, Nước tinh khiết.
                </p>
                <h2 className="title-h2-sec">Công dụng</h2>
                <p>
                  Giảm khô mắt, dưỡng ẩm mắt
                  <br />Bổ sung nước mắt nhân tạo và khoáng chất, giúp giữ ẩm, làm dịu mắt khô.
                  <br />Phục hồi và tạo sự thoải mái cho mắt mỏi, mắt kích ứng nhẹ, mắt khó chịu do đeo kính áp tròng, mắt mờ
                  (do tiết dịch).
                </p>
                <h2 className="title-h2-sec">Cách sử dụng</h2>
                <p>
                  Nhỏ vào mắt mỗi lần 1-2 giọt
                  <br />Có thể nhỏ nhiều lần trong ngày tùy vào tình trạng khô mắt, mỏi mắt và khó chịu của mắt.
                  <br />Có thể sử dụng cho người không đeo kính áp tròng, đang đeo hoặc sau khi tháo kính áp tròng
                </p>
                <h2 className="title-h2-sec">Lưu ý</h2>
                <p>
                  Chú ý trước khi dùng:
                  <br />- Chỉ dùng để nhỏ mắt.
                  <br />- Không để mi mắt chạm vào miệng lọ để tránh nhiễm trùng hoặc làm vẩn đục dung dịch do các chất tiết
                  hoặc mầm vi sinh vật. Không sử dụng khi dung dịch bị vẩn đục.
                  <br />- Vặn chặt nắp lọ sau khi dùng.
                  <br />- Để xa tầm tay trẻ em.
                  <br />- Không đựng dung dịch nhỏ mắt vào chai lọ khác để tránh nhầm lẫn hoặc làm giảm chất lượng.
                  <br />- Không dùng chung dung dịch nhỏ mắt với người khác để tránh lây nhiễm.
                  <br />- Một vài hoạt chất có thể kết tinh ở miệng lọ do điều kiện bảo quản. Hãy lau miệng lọ bằng gạc sạch
                  trước khi dùng.
                  <br />- Trẻ em sử dụng dưới sự hướng dẫn của người lớn.
                </p>
                <h2 className="title-h2-sec">Thận trọng</h2>
                <p>
                  Hỏi ý kiến bác sĩ hoặc dược sĩ trong các trường hợp sau:
                  <br />- Có tiền căn dị ứng với dung dịch nhỏ mắt.
                  <br />- Tăng nhãn áp.
                  <br />- Nếu xuất hiện các triệu chứng như sung huyết, sưng, ngứa mắt, hãy ngưng sử dụng và hỏi ý kiến bác sĩ
                  hoặc dược sĩ.
                  Bảo quản: Bảo quản nơi khô mát (dưới 30 độ C), tránh ánh nắng trực tiếp
                </p>
                <h2 className="title-h2-sec">Bảo quản</h2>
                <p>Bảo quản nơi khô mát (dưới 30 độ C), tránh ánh nắng trực tiếp</p>
                <h2 className="title-h2-sec">Công ty chịu trách nhiệm về SP</h2>
                <p>Công ty TNHH Rohto - Mentholatum (Việt Nam)</p>
                <h2 className="title-h2-sec">Thương hiệu</h2>
                <p>V.Rohto</p>
                <h2 className="title-h2-sec">Nơi sản xuất</h2>
                <p>Việt Nam</p>
                <h2 className="title-h2-sec">Số Giấy công bố</h2>
                <p>220000038/PCBB-BD</p>
                <p style={{fontStyle: 'italic'}}>Sản phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.
                </p>
                <p style={{fontStyle: 'italic'}}>Để xa tầm tay trẻ em. Đọc kỹ hướng dẫn sử dụng trước khi dùng.</p>
              </div>
            </div>
            <div className="menu-row" id="row3" style={{width: '100%', marginTop: '100px'}}>
              <div className="cates">
                <h2 className="title-cate">Sản phẩm liên quan</h2>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <button className="sale">
                  -20%
                </button>
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/fam1.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Efferalgan 500mg (Hộp 4 vỉ x 4 viên)</a></h3>
                <div className="price-wrapper">
                  <data className="price">36.000đ</data>
                  <del className="del">45.000</del>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/fam2.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Enterogermina (Hộp 20 ống)</a></h3>
                <div className="price-wrapper">
                  <data className="price">49.000đ</data>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/fam3.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Fugacar Mebendazole 500mg ( Hộp 1 viên)</a></h3>
                <div className="price-wrapper">
                  <data className="price">140.000đ</data>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/fam4.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Men vi sinh hỗ trợ giảm tiêu chảy LIVESPO Dia 30 (Hộp 10 ống)</a></h3>
                <div className="price-wrapper">
                  <data className="price">70.000đ</data>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/fam5.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Phosphalugel (Hộp 26 gói)</a></h3>
                <div className="price-wrapper">
                  <data className="price">141.000đ</data>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
            </div>
            <div className="menu-row" id="row4" style={{width: '100%'}}>
              <div className="cates">
                <h2 className="title-cate">Cùng thương hiệu</h2>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <button className="sale">
                  -30%
                </button>
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/selfcare1.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Men vi sinh tăng cường đề kháng Life Space Probiotic (Hộp 60 viên)</a></h3>
                <div className="price-wrapper">
                  <data className="price">44.000đ</data>
                  <del className="del">45.000</del>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/selfcare2.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Men vi sinh hỗ trợ trao đổi chất Life Space Shape B420 (Hộp 60 viên)</a>
                </h3>
                <div className="price-wrapper">
                  <data className="price">12.000đ</data>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/sc3.png" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Nước uống hỗ trợ dưỡng trắng và làm sáng da Nucos Super White (Hộp 10
                    chai)</a></h3>
                <div className="price-wrapper">
                  <data className="price">36.000đ</data>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/sc4.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Nước uống làm sáng da Nucos Spa Collagen 10,000mg (Hộp 10 chai)</a></h3>
                <div className="price-wrapper">
                  <data className="price">40.000đ</data>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
              <div className="product-card col-2 col-s-4 col-m-6">
                <div className="card-banner" style={{textAlign: 'center'}}>
                  <img src="/img/medicine/sc5.jpg" className="med-pic" />
                </div>
                <h3 className="card-title"><a href="#">Nước uống làm sáng da, giảm lão hóa Nucos Spa Collagen 10,000mg (Hộp 10
                    chai)</a></h3>
                <div className="price-wrapper">
                  <data className="price">20.000đ</data>
                </div>
                <button className="btn-addToCart">Xem chi tiết ...</button>
              </div>
            </div>
          </div>
        </section>
        <section className="comment">
          <div className="container" style={{width: '1340px', margin: '0px auto', padding: '20px'}}>
            <div className="title padding_title" id="BinhLuan" style={{fontSize: '28px', color: '#5BC2AE'}}>BÌNH LUẬN</div>
            <div className="title1 padding_title" id="cont-cmt">Đánh giá cho Dung Dịch nhỏ mắt Vrohto Mineral Tear
              (Chai 13ml)</div>
            <div className="box">
              {/* <span class="point">5.00 <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
            class="fas fa-star"></i><i class="fas fa-star"></i></span> */}
              <div className="rating">
                <p>Đánh giá của bạn: <span className="star-rating">
                    {/* <label htmlFor="rate-1" style={{-i: 1}}><i className="fas fa-star" /></label>
                    <input type="radio" name="rating" id="rate-1" defaultValue={1} />
                    <label htmlFor="rate-2" style={{-i: 2}}><i className="fas fa-star" /></label>
                    <input type="radio" name="rating" id="rate-2" defaultValue={2} defaultChecked />
                    <label htmlFor="rate-3" style={{-i: 3}}><i className="fas fa-star" /></label>
                    <input type="radio" name="rating" id="rate-3" defaultValue={3} />
                    <label htmlFor="rate-4" style={{-i: 4}}><i className="fas fa-star" /></label>
                    <input type="radio" name="rating" id="rate-4" defaultValue={4} />
                    <label htmlFor="rate-5" style={{-i: 5}}><i className="fas fa-star" /></label>
                    <input type="radio" name="rating" id="rate-5" defaultValue={5} /> */}
                  </span></p>
              </div>
              <span className="count"><a href="#cont-cmt">75 đánh giá của khách hàng</a></span>
              <div className="ratio">
                <div className="level">5<i className="fas fa-star" style={{color: '#5BC2AE'}} /></div>
                <div className="progressBar">
                  <div className="percentage5" />
                </div>
                <div className="status"><span className="sp-status">90%</span> | 67 đánh giá</div>
              </div>
              <div className="ratio">
                <div className="level">4<i className="fas fa-star" style={{color: '#5BC2AE'}} /></div>
                <div className="progressBar">
                  <div className="percentage4" />
                </div>
                <div className="status"><span className="sp-status">10%</span> | 8 đánh giá</div>
              </div>
              <div className="ratio">
                <div className="level">3<i className="fas fa-star" style={{color: '#5BC2AE'}} /></div>
                <div className="progressBar" />
                <div className="status"><span className="sp-status">0%</span> | 0 đánh giá</div>
              </div>
              <div className="ratio">
                <div className="level">2<i className="fas fa-star" style={{color: '#5BC2AE'}} /></div>
                <div className="progressBar" />
                <div className="status"><span className="sp-status">0%</span> | 0 đánh giá</div>
              </div>
              <div className="ratio">
                <div className="level">1<i className="fas fa-star" style={{color: '#5BC2AE'}} /></div>
                <div className="progressBar" />
                <div className="status"><span className="sp-status">0%</span> | 0 đánh giá</div>
              </div>
              {/* <button type="button" class="btn-right" id="ri">ĐÁNH GIÁ NGAY</button>
        <button type="button" class="btn-bottom" id="bo">ĐÁNH GIÁ NGAY</button> */}
            </div>
            <div className="cmt">
              <div className="nameUser">Bui Quy Hung</div>
              <div className="content-cmt">
                <span><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></span>Mình dùng thử rồi và rất ưng ý
              </div>
              <div className="time">
                <a href="#">Thảo luận</a> <span>• 14/05/2021</span>
              </div>
              <hr />
            </div>
            {/* <div class="box2">
        <textarea name="mota" rows="4" cols="167"
            placeholder="Mời bạn tham gia thảo luận, vui lòng nhập Tiếng Việt có dấu"></textarea>
        <div class="content">
            <form method="POST">
                <input type="text" name="name" id="name" value="" placeholder="Họ tên (bắt buộc)" class="txtbox">
                <input type="text" name="mail" id="mail" value="" placeholder="Email" class="txtbox">
                <input type="button" name="send" id="send" value="Gửi" class="btn-send">
            </form>
        </div>
    </div> */}
            <div className="content-cmt1">Để lại bình luận của bạn</div>
            <div className="add-comment" style={{position: 'relative'}}>
              <div className="avatar">
                <i className="fas fa-user" style={{marginTop: '10px'}} />
              </div>
              <div className="content">
                <textarea name="mota" rows={3} cols={156} placeholder="Thêm bình luận..." defaultValue={""} />
                <div className="content-bot">
                  <input type="checkbox" id="uptofb" name="uptofb" />
                  <label htmlFor="uptofb">Nhận phản hồi qua email</label>
                  <input type="button" defaultValue="Đăng" className="btn-up" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};
export default Detail;
