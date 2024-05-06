function handleLoginFormSubmit(event) {
    event.preventDefault(); 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "ducanh3935@gmail.com" && password === "123456") {
        window.location.href = "admin.html";
    } 
    else {
        var user_info = sessionStorage.getItem("userInfo");
        var infos = JSON.parse(user_info || "[]"); 

        var amount = infos.length;
        
        for (var i = 0; i < amount; i++) {
            var user = infos[i];
   
            if(email === user.email && password === user.pass){
            window.location.href = 'index.html';
                alert("Đăng nhập thành công.");
                return;
            }
        
        }
        alert("Tài khoản không tồn tại. Vui lòng kiểm tra lại email và mật khẩu.");
    }
}

document.getElementById("loginForm").addEventListener("submit", handleLoginFormSubmit);


function handleSignup(event) {
    event.preventDefault();
    alert('OK');
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var c_pass = document.getElementById("c_pass").value;

    if (pass === c_pass) {
        var product = {
            "name": name,
            "email": email,
            "pass": pass
        };

        var cart = sessionStorage.getItem("userInfo");
        var cartProducts = [];

        if (cart != null) {
            cartProducts = JSON.parse(cart);
        }

        cartProducts.push(product);
        sessionStorage.setItem("userInfo", JSON.stringify(cartProducts));
        window.location.href = 'login.html';
        alert("Đăng ký thành công!");
    } else {
        alert("Xác nhận mật khẩu không khớp. Vui lòng kiểm tra lại.");
    }
}
document.getElementById("signupForm").addEventListener("submit", handleSignup);
