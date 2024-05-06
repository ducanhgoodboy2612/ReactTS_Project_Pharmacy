function OpenAddProduct() {
    Refresh();

    $('.display').css({ 'transform': 'scaleY(1)' });
    $('.addProduct').css({ 'transform': 'scaleY(1)' });


}
function Exit() {
    $('.display').css({ 'transform': 'scaleY(0)' });
    $('.addProduct').css({ 'transform': 'scaleY(0)' });
    $('.note').text(' ')
}
function RefreshPro() {
    if (list_medicine == "") {
        $('#mathuoc').val("MT01");
    }
    else if (Number(list_medicine[list_medicine.length - 1]['mahang']) + 1 < 10) {
        $('#mathuoc').val("MT0" + (Number(list_medicine[list_medicine.length - 1]['mathuoc']) + 1));
    }
    else
        $('#mathuoc').val("MT0" + (Number(list_medicine[list_medicine.length - 1]['mathuoc']) + 1));
    $('#tenthuoc').val("")
    $('#giaban').val("")
    $('#motathuoc').val("")
}
list_medicine = JSON.parse(localStorage.getItem('product')) || [];
function AddProduct() {

    var ten = $('#tenthuoc').val();
    var gia = $('#giaban').val();
    var mota = $('#motathuoc').val();
    var ma = 0;
    var kt = true;
    if (list_medicine == "") {
        ma = 1;
    }
    else {
        ma = Number(list_medicine[list_medicine.length - 1]['mathuoc']) + 1;
    }
    if (ten == "") {
        kt = false;
        $('.note').text("* Tên không được để trống")
    }

    // if(mota=="")
    // {
    //     kt=false;
    //     $('.note').text("* Mô tả không được để trống")
    // }
    if (gia == "") {
        kt = false;
        $('.note').text("* Giá không được để trống")
    }
    if (kt == true) {
        var detail = {
            "mathuoc": ma,
            "tenthuoc": ten,
            "giaban": gia,
            "mota": mota
        };
        list_medicine.push(detail);
        localStorage.setItem("product", JSON.stringify(list_medicine));
        LoadProduct();
        Refresh();
        alert("Bạn đã thêm thành công")
    }

}
function LoadProduct() {
    var stt = 0;
    var header = `<tr>
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Mã thuốc</th>
            <th>Tên thuốc</th>
            <th>Giá bán</th>
            <th>Mô tả</th>
            <th>Tác vụ</th>
        </tr>`;
    var body = ""
    for (x of list_medicine) {
        stt = stt + 1;
        body += `<tr>
        <td><input type="checkbox"></td>
        <td>`+ stt + `</td>
        <td> MT0`+ x.mathuoc + `</td>
        <td>`+ x.tenthuoc + `</td>
        <td>`+ x.giaban + `đ</td>
        <td>`+ x.mota + `</td>
        <td><i onclick="EditPro(`+ x.mathuoc + `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemovePro(` + x.mathuoc + `)" class="fa-solid fa-trash-can"></i></td>
        </tr>`;

    }
    var str = header + body;
    $("#product").html(str);
}
LoadProduct();

function searchProducts() {
    var searchCode = document.getElementById('searchCode').value.toLowerCase();
    var searchName = document.getElementById('searchName').value.toLowerCase();

    var filteredProducts;

    if (searchCode && !searchName) {
        filteredProducts = list_medicine.filter(function (product) {
            return product.mathuoc.toString().toLowerCase().includes(searchCode);
        });
    } else if (!searchCode && searchName) {
        filteredProducts = list_medicine.filter(function (product) {
            return product.tenthuoc.toLowerCase().includes(searchName);
        });
    } else if (searchCode && searchName) {
        filteredProducts = list_medicine.filter(function (product) {
            var codeMatch = product.mathuoc.toString().toLowerCase().includes(searchCode);
            var nameMatch = product.tenthuoc.toLowerCase().includes(searchName);
            return codeMatch && nameMatch;
        });
    } else {

        LoadProduct();
        return;
    }
    //alert(JSON.stringify(filteredProducts));

    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(products) {
    var stt = 0;
    var header = `<tr>
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Mã thuốc</th>
            <th>Tên thuốc</th>
            <th>Giá bán</th>
            <th>Mô tả</th>
            <th>Tác vụ</th>
        </tr>`;
    var body = ""
    for (x of products) {
        stt = stt + 1;
        body += `<tr>
        <td><input type="checkbox"></td>
        <td>`+ stt + `</td>
        <td> MT0`+ x.mathuoc + `</td>
        <td>`+ x.tenthuoc + `</td>
        <td>`+ x.giaban + `đ</td>
        <td>`+ x.mota + `</td>
        <td><i onclick="EditPro(`+ x.mathuoc + `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemovePro(` + x.mathuoc + `)" class="fa-solid fa-trash-can"></i></td>
        </tr>`;
    }
    var str = header + body;
    $("#product").html(str);
}


function EditPro(mathuoc) {
    var index = list_medicine.findIndex(x => x.mathuoc == mathuoc);
    OpenAddProduct();
    $('#mathuoc').val(list_medicine[index]['mathuoc']);
    $('#tenthuoc').val(list_medicine[index]['tenthuoc']);
    $('#giaban').val(list_medicine[index]['giaban'])
    $('#motathuoc').val(list_medicine[index]['mota'])
}
function UpdatePro() {

    var ten = $('#tenthuoc').val();
    var gia = $('#giaban').val();
    var mota = $('#motathuoc').val();
    var ok = true;
    if (ten == "") {
        ok = false;
        $('.note').text("* Tên không được để trống")
    }
    if (gia == "") {
        ok = false;
        $('.note').text("* Giá không được để trống")
    }
    if (mota == "") {
        ok = false;
        $('.note').text("* Mô tả không được để trống")
    }
    if (ok == true) {
        for (x of list_medicine) {
            if (x.mathuoc == $('#mathuoc').val()) {
                x.tenthuoc = ten;
                x.mota = mota;
                x.giaban = gia;
                localStorage.setItem('product', JSON.stringify(list_medicine));
                alert("Cập nhập thành công");
                LoadProduct();

            }
        }
        $('.note').text("")
    }
}
function RemovePro(mathuoc) {
    var index = list_medicine.findIndex(x => x.mathuoc == mathuoc);
    if (index >= 0) {
        list_medicine.splice(index, 1);
    }
    localStorage.setItem('product', JSON.stringify(list_medicine));
    LoadProduct();
    alert("Xóa thành công.");
}