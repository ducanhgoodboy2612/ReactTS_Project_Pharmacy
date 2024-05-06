import { getUser } from "../services/user.services";
export function handleLoginFormSubmit(event:any) {
    event.preventDefault();
    var emailInput = document.getElementById("email") as HTMLInputElement;
    var passwordInput = document.getElementById("password") as HTMLInputElement;
    if (emailInput && passwordInput) {
        var email = emailInput.value;
        var password = passwordInput.value;

        // alert(email);
        // alert(password);

        // let items = await getProduct({
        //     page: page,
        //     pageSize: pageSize,
        // });
        // setDatas(items.data);
        // Tiếp tục xử lý đăng nhập
        // ...
    } else {
        console.error("Không tìm thấy phần tử email hoặc password trong DOM.");
    }

    // if (email === "ducanh3935@gmail.com" && password === "123456") {
    //     window.location.href = "admin.html";
    // }
    // else {
    //     var user_info = sessionStorage.getItem("userInfo");
    //     var infos = JSON.parse(user_info || "[]");

    //     var amount = infos.length;

    //     for (var i = 0; i < amount; i++) {
    //         var user = infos[i];

    //         if (email === user.email && password === user.pass) {
    //             window.location.href = 'index.html';
    //             alert("Đăng nhập thành công.");
    //             return;
    //         }

    //     }
    //     alert("Tài khoản không tồn tại. Vui lòng kiểm tra lại email và mật khẩu.");
    // }
}