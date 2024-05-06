import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../assets/css/style_pay.css";
import { useForm } from "react-hook-form";
import { createOrder } from "../services/cart.services";
import { dec, inc } from "../utils/p-detail";
import { Link } from "react-router-dom";

interface CartItem {
    product_Id: number;
    cate_Id: number;
    product_Name: string;
    unit: string;
    unit_Price: number;
    picture: string;
    quantity: number;
  }

const Cart = function () {
  const navigate = useNavigate();
  var cartChange = false;
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cart2, setCart2] = useState<CartItem[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  //   const handleInputChange = (event: any, index: any) => {
  //     const { name, value } = event.target;
  //     // Cập nhật giá trị số lượng sản phẩm trong giỏ hàng
  //     const updatedCart = cart.map((item, i) =>
  //       i === index ? { ...item, quantity: value } : item
  //     );
  //     setCart(updatedCart);
  //   };

  // useEffect(() => {
    
  //   if(cartChange)
  //   {window.location.reload();
  //     cartChange = false;
  //   }
    
  // }, [cart]);

  const inc_in_cart = (productId: number) => {
    
    var list = JSON.parse(localStorage.getItem('cart') || '[]');
    for (let x of list) {
        if (x.product_Id == productId) {
            // alert("This product is already in your cart!");
            x.quantity += 1;
            localStorage.setItem('cart', JSON.stringify(list));
            //(document.getElementById(x) as HTMLInputElement).value = (a + 1).toString();
            
            //alert(JSON.stringify(x));
            break;
        }
    }
    //updateCartAmount();

    const updatedCart = cart.map((item) => {
        if (item.product_Id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      cartChange = true;
      window.location.reload();
    
    
   
  };

  const dec_in_cart = (productId: number) => {
    //alert("go");
    var list = JSON.parse(localStorage.getItem('cart') || '[]');
    for (let x of list) {
        if (x.product_Id == productId) {
            //alert("This product is already in your cart!");
            if(x.quantity > 1){
                x.quantity -= 1;
            }
            else x.quantity = 1;
        
            localStorage.setItem('cart', JSON.stringify(list));
            //(document.getElementById(x) as HTMLInputElement).value = (a + 1).toString();
            
            //alert(JSON.stringify(x));
            break;
        }
    }
    const updatedCart = cart.map((item) => {
      if (item.product_Id === productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    window.location.reload();

  
  };

  const remove = (productId: number) => {
    // alert("remove");
    var list = JSON.parse(localStorage.getItem('cart') || '[]');
    var amount = list.length;
    for (var i = 0; i < amount; i++) {
        if (list[i].product_Id == productId) {
            //alert(JSON.stringify(list[i]));

            list.splice(i,1);
            localStorage.setItem('cart', JSON.stringify(list));
            
            window.location.reload();
            alert("Xóa thành công !"); 

            break;
        }
    }
    
    
  
  };

  function formatCurrency(number: number): string {
   
    const formattedNumber: string = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber + " đ";
  }
  const totalAmount: number = cart.reduce(
    (sum: number, current: any) => sum + current.quantity * current.unit_Price,
    0
);
  

  const onSubmit = async (data: any) => {
    let obj: any = {};
    obj.khach = data;
    obj.listchitiet = [];
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    for (let x of list) {
      obj.listchitiet.push({
        maSanPham: x.maSanPham,
        soLuong: x.quantity,
        giaMua: 1,
        maDonHangNavigation: {},
      });
    }
    await createOrder(obj);
    alert("Submit form success");
  };

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(list);
  }, []);
  return (
    <>
      <section className="bg-grey" style={{ marginTop: 50, height: 1340 }}>
        <div className="container" style={{ width: 1340, margin: "0px auto" }}>
          <div
            className="heading-section"
            style={{ textAlign: "center", marginTop: 60 }}
          >
            <h2>GIỎ HÀNG</h2>
          </div>
          <div id="table-content">
            <table
              id="product-table"
              cellPadding="10px"
              cellSpacing="20px"
              style={{ border: "1px solid" }}
            >
              <tr>
                <th>Mã</th>
                <th>Ảnh</th>
                <th>Tên thuốc</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Xóa</th>
              </tr>
              {cart.map((x: any) => (
                <tr>
                  <td id="item_id" >{x.product_Id}</td>
                  <td>
                    <img style={{ width: 50 }} src={x.picture} />
                  </td>
                  <td style={{ width: 350 }}>{x.product_Name}</td>
                  <td style={{ marginTop: "-20px" }}>{formatCurrency(x.unit_Price)}</td>
                  <td>
                    {/* <input className="round-btn" style={{ width: '25px', height: '25px', borderRadius: '50%' }} type="button" defaultValue="-" onClick={()=>dec('numtxt')} /> */}
                    {/* <input className="round-btn" type="button" style={{ width: '25px', height: '25px', borderRadius: '50%' }} defaultValue="-" onClick={()=>dec('numtxt')}  />

                                <input id="numtxt" style={{width: '30px', height: '25px'}} type="text"  defaultValue={x.quantity} />
                                <input className="round-btn" style={{ width: '25px', height: '25px', borderRadius: '50%' }} type="button" value="+" />
                                 */}

                    <input
                      className="round-btn"
                      type="button"
                      defaultValue="-"
                      style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                      onClick={() => dec_in_cart(x.product_Id)}
                    />
                    {/* <input className="round-btn" type="button" defaultValue="-" onClick={dec('numtxt')} /> */}
                    <input id="numtxt" type="text" defaultValue={x.quantity} readOnly />
                    <input
                      className="round-btn"
                      type="button"
                      defaultValue="+"
                      style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                      onClick={() => inc_in_cart(x.product_Id)}
                    />
                  </td>
                  <td>
                    <p id="total">{formatCurrency(x.unit_Price*x.quantity)}</p>
                  </td>
                  <td>
                    <img src="img/remove.png" style={{ width: "20px" }} onClick={()=> remove(x.product_Id)} />
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div id="cart-total">
            <h4 style={{ fontSize: 26 }}>Tổng tiền</h4>
            <div>
              <p style={{ float: "left", marginTop: "-5px" }}>Tạm tính: </p>
              <span id="subtotal">{formatCurrency(totalAmount)}</span>
            </div>
            <hr />
            <div style={{ height: 45, marginTop: 40, width: "100%" }}>
              <button id="back-to-product">Mua thêm</button>
             
              <Link to={"/check-out"} title="Product"><input id="btn-checkout" type="button" value="Thanh toán" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
