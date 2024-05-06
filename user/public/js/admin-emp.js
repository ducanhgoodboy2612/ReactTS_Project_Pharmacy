function OpenAddEmp() {
    RefreshEmp();

    $('.display').css({ 'transform': 'scaleY(1)' });
    $('.addEmployee').css({ 'transform': 'scaleY(1)' });


}
function ExitAddEmp() {
    $('.display').css({ 'transform': 'scaleY(0)' });
    $('.addEmployee').css({ 'transform': 'scaleY(0)' });
    $('.note').text(' ')
}
function RefreshEmp() {
    if (list_emp == "") {
        $('#maNV').val("NV01");
    }

    else
        $('#maNV').val("NV0" + (Number(list_emp[list_emp.length - 1]['maNV']) + 1));
    $('#tenNV').val("")
    $('#vitri').val("")
    $('#namsinh').val("")
    $('#sdt').val("")
    $('#luong').val("")
    $('#diachi').val("")
}
list_emp = JSON.parse(localStorage.getItem('employee')) || [];
function AddEmployee() {
    var maNV = $('#maNV').val();
    var tenNV = $('#tenNV').val();
    var vitri = $('#vitri').val();
    var namsinh = $('#namsinh').val();
    var sdt = $('#sdt').val();
    var diachi = $('#diachi').val();
    var luong = $('#luong').val();

    var maNV = 0;
    var kt = true;
    if (list_emp == "") {
        maNV = 1;
    }
    else {
        maNV = Number(list_emp[list_emp.length - 1]['maNV']) + 1;
    }
    if (tenNV == "") {
        kt = false;
        $('.note').text("* Tên nhân viên không được để trống")
    }

    // if(mota=="")
    // {
    //     kt=false;
    //     $('.note').text("* Mô tả không được để trống")
    // }
    if (vitri == "") {
        kt = false;
        $('.note').text("* Vị trí nhân viên không được để trống")
    }
    if (kt == true) {
        var detail = {
            "maNV": maNV,
            "tenNV": tenNV,
            "vitri": $('#vitri').val(),
            "namsinh": $('#namsinh').val(),
            "sdt": $('#sdt').val(),
            "diachi": $('#diachi').val(),
            "luong": $('#luong').val()
        };

        list_emp.push(detail);
        localStorage.setItem("employee", JSON.stringify(list_emp));
        LoadEmp();
        Refresh();
        alert("Bạn đã thêm thành công")
    }

}
function LoadEmp() {


    var stt = 0;
    var header = `<tr>
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Mã NV</th>
            <th>Tên NV</th>
            <th>Vị trí</th>
            <th>Năm sinh</th>
            <th>SĐT</th>
            <th>Địa chỉ</th>
            <th>Lương</th>
            <th>Tác vụ</th>
        </tr>`;
    var body = ""
    if (list_emp) {
        for (x of list_emp) {
            stt = stt + 1;
            body += `<tr>
                <td><input type="checkbox"></td>
                <td>`+ stt + `</td>
                <td>NV0`+ x.maNV + `</td>
                <td>`+ x.tenNV + `</td>
                <td>`+ x.vitri + `</td>
                <td>`+ x.namsinh + `</td>
                <td>`+ x.sdt + `</td>
                <td>`+ x.diachi + `</td>
                <td>`+ x.luong + `</td>
                <td><i onclick="EditEmp(`+ x.maNV + `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveEmp(` + x.maNV + `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
    }

    var str = header + body;
    $("#employee").html(str);
}


LoadEmp();

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
    alert(JSON.stringify(filteredProducts));

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

function EditEmp(maNV) {
    var index = list_emp.findIndex(x => x.maNV == maNV);
    //alert(index);
    OpenAddEmp();
    $('#maNV').val(list_emp[index]['maNV']);
    $('#tenNV').val(list_emp[index]['tenNV']);
    $('#vitri').val(list_emp[index]['vitri'])
    $('#namsinh').val(list_emp[index]['namsinh'])
    $('#sdt').val(list_emp[index]['sdt'])
    $('#diachi').val(list_emp[index]['diachi'])
    $('#luong').val(list_emp[index]['luong'])
}

function UpdateEmp() {
    var maNV = $('#maNV').val();
    var tenNV = $('#tenNV').val();
    var vitri = $('#vitri').val();
    var namsinh = $('#namsinh').val();
    var sdt = $('#sdt').val();
    var diachi = $('#diachi').val();
    var luong = $('#luong').val();
    var ok = true;

    if (tenNV == "") {
        ok = false;
        $('.note').text("* Tên nhân viên không được để trống")
    }
    if (vitri == "") {
        ok = false;
        $('.note').text("* Vị trí nhân viên không được để trống")
    }
    if (ok == true) {
        for (x of list_emp) {
            if (x.maNV == maNV) {
                x.tenNV = tenNV;
                x.vitri = vitri;
                x.namsinh = namsinh;
                x.sdt = sdt;
                x.diachi = diachi;
                x.luong = luong;
                localStorage.setItem('employee', JSON.stringify(list_emp));
                alert("Cập nhật thành công");
                LoadEmp();
            }
        }
        $('.note').text("")
    }
}

function RemoveEmp(maNV) {
    var index = list_emp.findIndex(x => x.maNV == maNV);
    if (index >= 0) {
        list_emp.splice(index, 1);
        localStorage.setItem('employee', JSON.stringify(list_emp));
        LoadEmp();
        alert("Xóa thành công.");
    }
}
