// var cart = sessionStorage.getItem("local-cart");
//     var cartProducts = JSON.parse(cart || "[]");

//     var total = 0;
//     for (var i = 0; i < cartProducts.length; i++) {
//       total += cartProducts[i].sum;
//     }


var cartTotal = 0;
function inc(btn) {
    var row = btn.parentNode.parentNode;
    var numtxt = row.querySelector('input[type="text"]');
    var currentValue = parseInt(numtxt.value);
    var newValue = currentValue + 1;
    numtxt.value = newValue;
    var price = parseInt(row.querySelector('td:nth-child(4)').textContent);
    var total = price * newValue;
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 3,

    });

    const formattedTotal = formatter.format(total) + ' đ';
    row.querySelector('#total').textContent = formattedTotal.replace("₫", "");
    cartTotal += price;
    updateSubtotal();
  }
  function dec(btn) {
    var row = btn.parentNode.parentNode;
    var numtxt = row.querySelector('input[type="text"]');
    var currentValue = parseInt(numtxt.value);
    var newValue = currentValue - 1;
    var c = 0;
    if (newValue < 1) {
      newValue = 1;
      c = 1;
      return;
    }
    numtxt.value = newValue;
    var price = parseInt(row.querySelector('td:nth-child(4)').textContent);
    var total = price * newValue;
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 3,

    });

    const formattedTotal = formatter.format(total) + ' đ';
    row.querySelector('#total').textContent = formattedTotal.replace("₫", "");
   
    cartTotal -= price;
    updateSubtotal();
  }
  // function del_item(){
  //   var cart = sessionStorage.getItem("local-cart");
  //     var cartProducts = JSON.parse(cart || "[]"); // Parse the cart or initialize as an empty array if it's null or invalid JSON

  //     var amount = cartProducts.length;
  //     // alert(amount);
  //     // alert(cartProducts);
  //     var table = `
  //           <table id="product-table" cellpadding="10px" cellspacing="20px" style="border: 1px solid;">
  //                   <tr>
  //                       <th>STT</th>
  //                       <th>Ảnh</th>
  //                       <th>Tên sản phẩm</th>
  //                       <th>Đơn giá</th>
  //                       <th>Số lượng</th>
  //                       <th>Thành tiền</th>
  //                       <th>Xóa</th>
  //                   </tr>
  //           `;
      
  //     for (var i = 0; i < amount; i++) {
  //       var cartProduct = cartProducts[i];
  //       if(cartProduct.id == )
  //       cartProduct.id = i+1;
  //       cartProduct.remove;
  //       var row = `
  //       <tr>
  //           <td id="item_id">${i + 1}</td>
  //           <td><img style="width: 60px" src="${cartProduct.img}" ></td>
  //           <td>${cartProduct.name}</td>
  //           <td>${cartProduct.price}</td>
  //           <td>
  //               <input class="round-btn" style="width: 25px; height: 25px; border-radius: 50%;" type="button" value="-" onclick="dec(this)" />
  //               <input id="numtxt" style="width: 30px; height: 25px" type="text" value="${cartProduct.num}" />
  //               <input class="round-btn" style="width: 25px; height: 25px; border-radius: 50%;" type="button" value="+" onclick="inc(this)"/>
  //           </td>
  //           <td><p id="total">${cartProduct.total}</td>
  //           <td>
  //               <img src="img/remove.png" style="width: 20px" >
  //           </td>
  //       </tr>
  //   `;

  //       table += row;
  //     }
      
  //     table += `</table>`;
      

  //     $("#table-content").html(table);

  // }
  
  $(document).on("click", "img[src='img/remove.png']", function () {
    
    var row = this.parentNode.parentNode;
    var numtxt = row.querySelector('input[type="text"]');
    var currentValue = parseInt(numtxt.value);
    var price = parseInt(row.querySelector('td:nth-child(4)').textContent);

    var itemId = row.querySelector('td#item_id').textContent;
    var id = parseInt(itemId);

    var cart = sessionStorage.getItem("local-cart");
    var cartProducts = JSON.parse(cart || "[]"); 

    var amount = cartProducts.length;
    for (var i = 0; i < amount; i++) {
      var cartProduct = cartProducts[i];
   
      if(cartProduct.id == id){
        //alert(i);
    
        cartProducts.splice(i, 1);
        var total = price * currentValue;
        cartTotal -= total;
        updateSubtotal();
        $(this).parent().parent().remove();
        sessionStorage.setItem("local-cart", JSON.stringify(cartProducts));

        alert("Đã xóa hàng khỏi giỏ !");


      }
    }
    
   
    // $(this).parent().parent().remove();
    // sessionStorage.setItem("local-cart", JSON.stringify(cartProducts));

  });
  function updateSubtotal() {

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 3,
    });
    const formattedSubtotal = formatter.format(cartTotal);
    $("#subtotal").text(formattedSubtotal);
}
  // function cart_update(int price){
  //   alert("upd");
  //   var cart = sessionStorage.getItem("local-cart");
  //   var cartProducts = JSON.parse(cart || "[]");

  //   var total = 0;
  //   for (var i = 0; i < cartProducts.length; i++) {
  //     total += cartProducts[i].sum;
  //   }
  //   total = total + price;
  //   alert(total);
  //   $("#subtotal").text(total.toString() + ".000 đ");
  // }
  $(document).ready(function () {
    var cart = sessionStorage.getItem("local-cart");
    var cartProducts = JSON.parse(cart || "[]");
    
    for (var i = 0; i < cartProducts.length; i++) {
      cartTotal += cartProducts[i].sum;
    }
    $("#subtotal").text(cartTotal.toString() + ".000 đ");
  });
  function go_to_check(){
    sessionStorage.setItem("cartTotal", cartTotal);
    window.location.href = "checkout.html";
  }
  // document.getElementById('btn-checkout').addEventListener('click', function() {
   
  //   window.location.href = 'checkout.html';
  // });