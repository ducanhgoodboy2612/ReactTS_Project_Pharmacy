function OpenAddCategory() {
    Refresh();

    $('.display').css({ 'transform': 'scaleY(1)' });
    $('.addCategory').css({ 'transform': 'scaleY(1)' });


}

function ExitCate() {
    $('.display').css({ 'transform': 'scaleY(0)' });
    //alert("Exit");
    $('.addCategory').css({ 'background-color': 'blue' });

    $('.note').text(' ')
}
//Category
listcompany = JSON.parse(localStorage.getItem('category')) || [];
function AddCategory() {
    var tenh = $('#tendm').val();
    var motah = $('#mota').val();
    var mah = 0;
    var kt = true;
    if (listcompany == "") {
        mah = 1;
    }
    else {
        mah = Number(listcompany[listcompany.length - 1]['madm']) + 1;
    }
    if (tenh == "") {
        kt = false;
        $('.note').text("* Tên không được để trống")
    }
    if (motah == "") {
        kt = false;
        $('.note').text("* Mô tả không được để trống")
    }
    if (kt == true) {
        var totalll = {
            "madm": mah,
            "tendm": tenh,
            "mota": motah
        };
        listcompany.push(totalll);
        localStorage.setItem("category", JSON.stringify(listcompany));
        LoadCategory();
        Refresh();
        alert("Bạn đã thêm thành công")
    }

}

function Refresh() {
    if (listcompany == "") {
        $('#madm').val("MDM01");
    }
    else if (Number(listcompany[listcompany.length - 1]['mahang']) + 1 < 10) {
        $('#madm').val("MDM0" + (Number(listcompany[listcompany.length - 1]['madm']) + 1));
    }
    else
        $('#madm').val("MDM" + (Number(listcompany[listcompany.length - 1]['madm']) + 1));
    $('#tendm').val("")
    $('#mota').val("")
}
function LoadCategory() {
    var stt = 0;
    var strrr = `<tr>
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Mã danh mục</th>
            <th>Tên danh mục</th>
            <th>Mô tả</th>
            <th>Tác vụ</th>
        </tr>`;
    var strr = ""
    for (x of listcompany) {
        stt = stt + 1;
        if (stt < 10) {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+ stt + `</td>
            <td> MDM0`+ x.madm + `</td>
            <td>`+ x.tendm + `</td>
            <td>`+ x.mota + `</td>
            <td><i onclick="EditCate(`+ x.madm + `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveCate(` + x.madm + `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        else {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+ stt + `</td>
            <td> MDM`+ x.mahang + `</td>
            <td>`+ x.tendm + `</td>
            <td>`+ x.mota + `</td>
            <td><i onclick="EditCate(`+ x.madm + `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveCate(` + x.madm + `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }

    }
    var str = strrr + strr;
    $("#category").html(str);
}
LoadCategory();

function RemoveCate(madm) {
    var index = listcompany.findIndex(x => x.madm == madm);
    if (index >= 0) {
        listcompany.splice(index, 1);
    }
    LoadCategory();
    alert("Xóa thành công.");
}
// function UpdateCompany()
// {
//     localStorage.setItem('category',JSON.stringify(listcompany));
//     alert("Cập nhập thành công");
//     LoadCategory();
// }
function EditCate(madm) {
    var index = listcompany.findIndex(x => x.madm == madm);
    OpenAddCategory();
    $('#madm').val(listcompany[index]['madm']);
    $('#tendm').val(listcompany[index]['tendm']);
    $('#mota').val(listcompany[index]['mota'])
}
function UpdateCate() {
    var ten = $('#tendm').val();
    var mota = $('#mota').val();
    var ok = true;
    if (ten == "") {
        ok = false;
        $('.note').text("* Tên không được để trống")
    }
    if (mota == "") {
        ok = false;
        $('.note').text("* Mô tả không được để trống")
    }
    if (ok == true) {
        for (x of listcompany) {
            if (x.madm == $('#madm').val()) {
                x.tendm = ten;
                x.mota = mota;
                localStorage.setItem('category', JSON.stringify(listcompany));
                alert("Cập nhập thành công");
                LoadCategory();

            }
        }
        $('.note').text("")
    }
}