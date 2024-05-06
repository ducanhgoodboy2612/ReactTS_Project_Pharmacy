$(document).ready(function () {
  $(".other-pic").click(function () {
    alert("click pic");
    var newImageSrc = $(this).attr("src");

    $("#detailpic").attr("src", newImageSrc);
  });
});

$("#btn-addToCart").click(function () {
  alert("OK");
  var cartAmount = Number(sessionStorage.getItem("cartAmount"));
  //alert(cartAmount);
  if (cartAmount != null)
    cartAmount += 1;
  else
    cartAmount = 1;
  sessionStorage.setItem("cartAmount", cartAmount);

  var pId = $(this).parent().parent().find("#product-price").find(".Product_id").text();

  var pImg = $(this).parent().parent().parent().parent().find(".detail-left").find("#detailpic").attr("src");
  var pName = $(this).parent().parent().parent().parent().find(".detail-right").find("#med-name").text();
  var pPrice = $(this).parent().parent().find("#product-price").find(".ProductPrice_price").text();
  var pNum = $(this).parent().parent().find("#quantity").find("#numtxt").val();
  //var pTotal = $(this).parent().find("#quan").find("#total").text();
  var pTotal = (pNum * parseInt(pPrice.substring(0, pPrice.length - 6).replace(".", ""))).toString();
  //var formattedTotal = pTotal.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  var product = {
    "id": pId,
    "img": pImg,
    "name": pName,
    "price": pPrice,
    "num": pNum,
    "total": pTotal + ".000 đ",
    "sum": parseInt(pTotal)
  };
  alert("Đã thêm hàng vào giỏ." + '\n' + pId + '\n' + pName + '\n' + pPrice + '\n' + pNum + '\n' + pImg + '\n' + pTotal);

  var cart = sessionStorage.getItem("local-cart");

  var cartProducts = [];
  if (cart != null) {
    cartProducts = JSON.parse(cart);
  }
  cartProducts.push(product);
  sessionStorage.setItem("local-cart", JSON.stringify(cartProducts));
  alert(cartProducts);
});
