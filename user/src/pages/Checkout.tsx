import { useEffect, useState } from "react";
import "../assets/css/style_pay.css";
import { useForm } from "react-hook-form";
import { createOrder } from "../services/cart.services";
import { getProductByID } from "../services/shop.services";
const Checkout = function () {
  const [cart, setCart] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  

  const getProductInfo = async (id: any) => {
    let data = await getProductByID(id);
    //alert("price: " + data.quantity_In_Stock)
    return data.quantity_In_Stock;
  }

  const onSubmit = async (data: any) => {
    let obj: any = {};
    obj.status = true;

    obj.customerName = data.customerName;
    obj.phone = data.phone;
    obj.address = data.address;
    obj.email = data.email;
    obj.list_json_invoice_detail = [];
    let c = true;
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    for(let x of list){
      if (x.quantity > await getProductInfo(x.product_Id)){
        alert(x.product_Name + " không có đủ số lượng trong kho! Vui lòng chọn sản phẩm khác.");
        c = false;
        break;
      }
      
    }
    if(c){
      for (let x of list) {
        obj.list_json_invoice_detail.push({
          product_Id: x.product_Id,
          quantity: x.quantity,
          total_Price: x.unit_Price * x.quantity,
        });
      }
      //alert(JSON.stringify(obj));
      await createOrder(obj);

      setCart([]);
      localStorage.removeItem('cart');

      alert("Thanh toán thành công.");
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

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(list);
  }, []);
  return (
    <>
      <section className="main_checkout">
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="row">
            <div className="col-8 col-s-12 padding-form" id="cus-info">
              <div className="title">THÔNG TIN THANH TOÁN</div>
              <div className="note">
                (<span>*</span>) Bắt buộc
              </div>

              <div className="row">
                <div className="col-12 col-s-12">
                  <label htmlFor="txt_hoten">
                    Họ tên: <span>*</span>{" "}
                    {errors.customerName && (
                      <span style={{ color: "red" }}>
                        {(errors as any).customerName.message}
                      </span>
                    )}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="txt_hoten"
                    style={{ width: "100%" }}
                    {...register("customerName", {
                      required: "Tên khách không được để rỗng.",
                      minLength: {
                        value: 3,
                        message: "Độ dài Họ tên tối thiểu phải 3 ký tự.",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-s-12">
                  <label htmlFor="txt_sdt">
                    Số điện thoại: <span>*</span>{" "}
                    {errors.phone && (
                      <span style={{ color: "red" }}>
                        {(errors as any).phone.message}
                      </span>
                    )}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="txt_sdt"
                    style={{ width: "100%" }}
                    {...register("phone", {
                      required: "Số điện thoại không được để rỗng.",
                      pattern: {
                        value: /^[0-9 _-]{10,12}/,
                        message: "Sai định dạng số điện thoại.",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-s-12">
                  <label htmlFor="txt_email">
                    Email: <span>*</span>{" "}
                    {errors.email && (
                      <span style={{ color: "red" }}>
                        {(errors as any).email.message}
                      </span>
                    )}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="txt_email"
                    style={{ width: "100%" }}
                    {...register("email", {
                      required: "Email không được để rỗng.",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Sai định dạng email.",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-s-12">
                  <label htmlFor="txt_address">
                    Địa chỉ: <span>*</span>{" "}
                    {errors.address && (
                      <span style={{ color: "red" }}>
                        {(errors as any).address.message}
                      </span>
                    )}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="txt_address"
                    style={{ width: "100%" }}
                    {...register("address", {
                      required: "Địa chỉ không được để rỗng.",
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="col-4 col-s-12 padding-form">
              <div className="title">ĐƠN HÀNG</div>
              <div
                className="row pay"
                style={{ borderBottom: "3px solid #dbdbdb" }}
              >
                <div className="col-6 col-s-12" style={{ textAlign: "left" }}>
                  <label>Sản phẩm</label>
                </div>
                <div className="col-6 col-s-12" style={{ textAlign: "right" }}>
                  <label>Số lượng</label>
                </div>
              </div>
              {cart.map((x: any) => (
                <div className="row pay">
                  <div className="col-6 col-s-12" style={{ textAlign: "left" }}>
                    <label> {x.product_Name}</label>
                  </div>
                  <div
                    className="col-6 col-s-12"
                    style={{ textAlign: "right" }}
                  >
                    <label>{x.quantity}</label>
                  </div>
                </div>
              ))}

              <div className="row trace">
                <div className="col-6 col-s-12" style={{ textAlign: "left" }}>
                  <label style={{fontSize: 28, color: 'red'}}>Tổng</label>
                </div>
                <div className="col-6 col-s-12" style={{ textAlign: "right" }}>
                  <label style={{fontSize: 34, color: 'green'}}>
                    {/* {cart.reduce(
                      (sum: number, current: any) => formatCurrency(sum + current.quantity*current.unit_Price),
                      0
                    )} */}
                    {formatCurrency(totalAmount)}
                  </label>{" "}
                  
                </div>
              </div>
              <div className="row pay">
                <div className="col-12 col-s-12" style={{ textAlign: "left" }}>
                  <button type="submit">ĐẶT HÀNG</button>
                </div>
              </div>
              <div className="row pay">
                <div className="payments">
                  <input
                    type="radio"
                    id="tienmat"
                    name="payments"
                    value="tm"
                    className="radio-payments"
                  />
                  <label htmlFor="tienmat" className="label-payments">
                    Thanh toán tiền mặt khi nhận hàng (tiền mặt / quẹt thẻ ATM,
                    Visa, Master)
                  </label>
                </div>
                <div className="payments">
                  <input
                    type="radio"
                    id="chuyenkhoan"
                    name="payments"
                    value="ck"
                    className="radio-payments"
                  />
                  <label htmlFor="chuyenkhoan" className="label-payments">
                    Thanh toán qua chuyển khoản qua tài khoản ngân hàng (khuyên
                    dùng)
                  </label>
                  <input
                    type="text"
                    id="stk"
                    placeholder="Nhập số tài khoản ngân hàng..."
                    style={{ marginTop: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      ;
    </>
  );
};
export default Checkout;

{
  /* <section className="main">
  <form onSubmit={handleSubmit(onSubmit)} method="post">
    <div className="row">
      <div className="col-8 col-s-12 padding-form">
        <div className="title">THÔNG TIN THANH TOÁN</div>
        <div className="note">
          (<span>*</span>) Bắt buộc
        </div>
      </div>
      <div className="col-4 col-s-12 padding-form">
        <div className="title">ĐƠN HÀNG</div>
        <div className="row pay" style={{ borderBottom: "3px solid #dbdbdb" }}>
          <div className="col-6 col-s-12" style={{ textAlign: "left" }}>
            <label>Sản phẩm</label>
          </div>
          <div className="col-6 col-s-12" style={{ textAlign: "right" }}>
            <label>Số lượng</label>
          </div>
        </div>
        {cart.map((x: any) => (
          <div className="row pay">
            <div className="col-6 col-s-12" style={{ textAlign: "left" }}>
              <label> {x.product_Name}</label>
            </div>
            <div className="col-6 col-s-12" style={{ textAlign: "right" }}>
              <label>{x.quantity}</label>
            </div>
          </div>
        ))}

        <div className="row trace">
          <div className="col-6 col-s-12" style={{ textAlign: "left" }}>
            <label>Tổng</label>
          </div>
          <div className="col-6 col-s-12" style={{ textAlign: "right" }}>
            <label>
              {cart.reduce(
                (sum: number, current: any) => sum + current.quantity,
                0
              )}
            </label>{" "}
            SP
          </div>
        </div>
        <div className="row pay">
          <div className="col-12 col-s-12" style={{ textAlign: "left" }}>
            <button type="submit">ĐẶT HÀNG</button>
          </div>
        </div>
        <div className="row pay">
          <div className="payments">
            <input
              type="radio"
              id="tienmat"
              name="payments"
              value="tm"
              className="radio-payments"
            />
            <label htmlFor="tienmat" className="label-payments">
              Thanh toán tiền mặt khi nhận hàng (tiền mặt / quẹt thẻ ATM, Visa,
              Master)
            </label>
          </div>
          <div className="payments">
            <input
              type="radio"
              id="chuyenkhoan"
              name="payments"
              value="ck"
              className="radio-payments"
            />
            <label htmlFor="chuyenkhoan" className="label-payments">
              Thanh toán qua chuyển khoản qua tài khoản ngân hàng (khuyên dùng)
            </label>
            <input
              type="text"
              id="stk"
              placeholder="Nhập số tài khoản ngân hàng..."
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</section>; */
}

{
  /* <div className="row">
<div className="col-12 col-s-12">
    <label htmlFor="txt_hoten">
    Họ tên: <span>*</span> {errors.customerName && <span style={{ color: 'red' }}>{(errors as any).customerName.message}</span>}
    </label>
    <br />
    <input
    type="text"
    id="txt_hoten"
    style={{ width: "100%" }}
    {...register("customerName", {
        required: "Tên khách không được để rỗng.",
        minLength: {
        value: 3,
        message: "Độ dài Họ tên tối thiểu phải 3 ký tự."
        }
    })}
    />
</div>
</div>
<div className="row">
<div className="col-12 col-s-12">
<label htmlFor="txt_sdt">
Số điện thoại: <span>*</span> {errors.phone && <span style={{ color: 'red' }}>{(errors as any).phone.message}</span>}
</label>
<br />
<input
type="text"
id="txt_sdt"
style={{ width: "100%" }}
{...register("phone", {
    required: "Số điện thoại không được để rỗng.",
    pattern: {
    value: /^[0-9 _-]{10,12}/,
    message: "Sai định dạng số điện thoại.",
    }
})}
/>
</div>
</div>
<div className="row">
<div className="col-12 col-s-12">
<label htmlFor="txt_email">Email: {errors.email && <span style={{ color: 'red' }}>{(errors as any).email.message}</span>}
</label>
<br />
<input
type="text"
id="txt_email"
style={{ width: "100%" }}
{...register("email", {
    pattern: {
    value: /\S+@\S+\.\S+/,
    message: "Sai định dạng email.",
    }
})}
/>
</div>
</div>
<div className="row">
<div className="col-12 col-s-12">
<label htmlFor="txt_address">Địa chỉ: {errors.address && <span style={{ color: 'red' }}>{(errors as any).address.message}</span>}
</label>
<br />
<input
type="text"
id="txt_address"
style={{ width: "100%" }}
{...register("address")}
/>
</div>
</div> */
}
