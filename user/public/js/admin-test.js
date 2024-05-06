var listpage = document.getElementsByClassName("Page");
var listperson = JSON.parse(localStorage.getItem('register')) || [];
var listuser = JSON.parse(localStorage.getItem('user')) || [];
function Bieutuan() {
    var chart = new CanvasJS.Chart("chartContainerTuan",
        {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Thống kê theo tuần",
                fontWeight: "bolder",
                fontColor: "#008B8B",
                fontfamily: "tahoma",
                fontSize: 25,
                padding: 10,
            },
            data: [
                {
                    type: "column",
                    dataPoints: [
                        { label: "Thứ 2", y: 46 },
                        { label: "Thứ 3", y: 87 },
                        { label: "Thứ 4", y: 76 },
                        { label: "Thứ 5", y: 39 },
                        { label: "Thứ 6", y: 87 },
                        { label: "Thứ 7", y: 42 },
                        { label: "Chủ nhật", y: 60 }
                    ]
                }
            ]
        });
    chart.render();
}
var listclick = document.getElementsByClassName("clickh");
$(document).ready(function () {
    $('.hello').click(function (e) {
        $('.Dangxuat').slideToggle();
    })

    listpage[0].style.display = 'block'
    listclick[0].className += " clickhh"
    DoanhThu();
})
listdx = JSON.parse(localStorage.getItem("user")) || []
$(document).ready(function () {
    $('.XemChiTiet').click(function (e) {
        $('.chitiet').slideToggle();
    })
})
function dangxuat() {
    listdx = null
    localStorage.setItem("user", JSON.stringify(listdx))
    window.location.href = "../login.html";

}

var listbill = JSON.parse(localStorage.getItem('bill')) || [];
function DoanhThu() {
    var t = 0;
    var d = new Date();
    var a = 0;
    var b = 0;
    var c = 0
    for (x of listbill) {
        if (x[x.length - 1].day == d.getDate() && x[x.length - 1].thang == d.getMonth() + 1 && x[x.length - 1].nam == d.getFullYear()) {
            for (z of x) {
                if (z.thanhtoan != undefined) {
                    t = t + z.thanhtoan;
                    a = a + 1;
                }
                if (z.soluong != undefined) {
                    b = b + z.soluong
                }

            }
        }

    }
    $('.all>.Details>.overview>.overview1>.Bieudo>.bieudo1>span>span').text(t + "đ");
    $('.all>.Details>.overview>.overview1>.Bieudo>.bieudo2>span>span').text(a);
    $('.all>.Details>.overview>.overview1>.Bieudo>.bieudo3>span>span').text(b);
}
DoanhThu();
function Chucvu(a) {
    if (a == "Nhân viên") {
        return "NV"
    }
    else if (a == "Quản lý") {
        return "QL"
    }
    else {
        return "KH"
    }
}
$(document).ready(function () {
    var d = 0;
    for (x of listperson) {
        d = d + 1;
        if (listuser.tailkhoan == x.username && listuser.matkhau == x.password) {
            $('.homehello').text("Welcome, " + listuser.tailkhoan)
            $('#mahome').text(Chucvu(x.chucvu) + d);
            $('#tenhome').text(x.name);
            $('#emailhome').text(x.email);
            $('#sdthome').text(x.phone);
            $('#diachihome').text(x.address + " - tỉnh " + x.tinh);
            $('#nhanvienhome').text(x.chucvu)
            $('#chao').text("Xin chào, " + listuser.tailkhoan)
        }

    }
})
$(document).ready(function () {
    $('.all>.selection>.generalinf>#TTC>dt').click(function (e) {
        $('.all>.selection>.generalinf>#TTC>dd').slideToggle(function () {
        });

    });
})
$(document).ready(function () {
    $('.all>.selection>.generalinf>#QLDH>dt').click(function (e) {
        $('.all>.selection>.generalinf>#QLDH>dd').slideToggle(function () {
        });
    });
})

$(document).ready(function () {
    $('.all>.selection>.user>dl>dt').click(function (e) {
        $('.all>.selection>.user>dl>dd').slideToggle();
    });
})
function Home() {
    for (let x of listpage) {
        x.style.display = 'none'
    }
    for (let y of listclick) {
        y.className = y.className.replace(" clickhh", "")
    }
    listclick[0].className += " clickhh"
    listpage[0].style.display = 'block'

}
function OVERVIEW() {
    for (let x of listpage) {
        x.style.display = 'none'
    }
    for (let y of listclick) {
        y.className = y.className.replace(" clickhh", "")
    }
    listclick[1].className += " clickhh"
    listpage[1].style.display = 'block'
    Bieutuan();
}
function Category_Manage() {
    for (let x of listpage) {
        x.style.display = 'none'
    }
    for (let y of listclick) {
        y.className = y.className.replace(" clickhh", "")
    }
    listclick[2].className += " clickhh"
    listpage[2].style.display = 'block'
}
function Product_Manage() {
    for (let x of listpage) {
        x.style.display = 'none'
    }
    for (let y of listclick) {
        y.className = y.className.replace(" clickhh", "")
    }
    listclick[3].className += " clickhh"
    listpage[3].style.display = 'block'
}
function Brand_Manage() {
    for (let x of listpage) {
        x.style.display = 'none'
    }
    for (let y of listclick) {
        y.className = y.className.replace(" clickhh", "")
    }
    listclick[4].className += " clickhh"
    listpage[4].style.display = 'block'
}
function Import_Invoice() {
    for (let x of listpage) {
        x.style.display = 'none'
    }
    for (let y of listclick) {
        y.className = y.className.replace(" clickhh", "")
    }
    listclick[5].className += " clickhh"
    listpage[5].style.display = 'block'
}
function Employee() {
    for (let x of listpage) {
        x.style.display = 'none'
    }
    for (let y of listclick) {
        y.className = y.className.replace(" clickhh", "")
    }
    listclick[6].className += " clickhh"
    listpage[6].style.display = 'block'
}
function Uncomfirm_Invoice() {
    for (let x of listpage) {
        x.style.display = 'none'
    }
    for (let y of listclick) {
        y.className = y.className.replace(" clickhh", "")
    }
    listclick[7].className += " clickhh"
    listpage[7].style.display = 'block'
}
// function CXL()
// {
//     for(let x of listpage)
//     {
//         x.style.display='none'
//     }
//     for(let y of listclick)
//     {
//         y.className = y.className.replace(" clickhh","")
//     }
//     listclick[7].className += " clickhh"
//     listpage[7].style.display='block'
// }
function OpenAddCategory() {
    Refresh();

    $('.display').css({ 'transform': 'scaleY(1)' });
    $('.addCategory').css({ 'transform': 'scaleY(1)' });


}

function ExitCate() {
    $('.display').css({ 'transform': 'scaleY(0)' });
    $('.addCategory').css({ 'transform': 'scaleY(0)' });
    $('.note').text(' ')
}
//Category
list_cate = JSON.parse(localStorage.getItem('category')) || [];
function AddCategory() {
    alert("Addf");
    var tenh = $('#tendm').val();
    var motah = $('#mota').val();
    var mah = 0;
    var kt = true;
    if (list_cate == "") {
        mah = 1;
    }
    else {
        mah = Number(list_cate[list_cate.length - 1]['madm']) + 1;
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
        list_cate.push(totalll);
        localStorage.setItem("category", JSON.stringify(list_cate));
        LoadCategory();
        Refresh();
        alert("Bạn đã thêm thành công")
    }

}

function Refresh() {
    if (list_cate == "") {
        $('#madm').val("MDM01");
    }
    else if (Number(list_cate[list_cate.length - 1]['mahang']) + 1 < 10) {
        $('#madm').val("MDM0" + (Number(list_cate[list_cate.length - 1]['madm']) + 1));
    }
    else
        $('#madm').val("MDM" + (Number(list_cate[list_cate.length - 1]['madm']) + 1));
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
    for (x of list_cate) {
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
    var index = list_cate.findIndex(x => x.madm == madm);
    if (index >= 0) {
        list_cate.splice(index, 1);
    }
    localStorage.setItem("category", JSON.stringify(list_cate));
    LoadCategory();
    alert("Xóa thành công.");
}
// function UpdateCompany()
// {
//     localStorage.setItem('category',JSON.stringify(list_cate));
//     alert("Cập nhập thành công");
//     LoadCategory();
// }
function EditCate(madm) {
    var index = list_cate.findIndex(x => x.madm == madm);
    OpenAddCategory();
    $('#madm').val(list_cate[index]['madm']);
    $('#tendm').val(list_cate[index]['tendm']);
    $('#mota').val(list_cate[index]['mota'])
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
        for (x of list_cate) {
            if (x.madm == $('#madm').val()) {
                x.tendm = ten;
                x.mota = mota;
                localStorage.setItem('category', JSON.stringify(list_cate));
                alert("Cập nhập thành công");
                LoadCategory();

            }
        }
        $('.note').text("")
    }
}
