function OpenImportInvoice() {
    Refresh();
    $('.display').css({ 'transform': 'scaleY(1)' });
    $('.addImportInvoice').css({ 'transform': 'scaleY(1)' });


}
function ExitAddII() {
    $('.display').css({ 'transform': 'scaleY(0)' });
    $('.addImportInvoice').css({ 'transform': 'scaleY(0)' });
    $('.note').text(' ')
}
function RefreshII() {
    if (list_ii == "") {
        $('#bill_id').val("HDN001");
    }
    else if (Number(list_ii[list_ii.length - 1]['bill_id']) + 1 < 100) {
        $('#bill_id').val("HDN00" + (Number(list_ii[list_ii.length - 1]['bill_id']) + 1));
    }
    else
        $('#bill_id').val("HDN0" + (Number(list_ii[list_ii.length - 1]['bill_id']) + 1));
    $('#brand_id').val("")
    $('#emp_id').val("")
    $('#price').val("")
    $('#quantity').val("")
    $('#medi_id').val("")
}
list_ii = JSON.parse(localStorage.getItem('import_invoice')) || [];
function AddII() {

    var brand_id = $('#brand_id').val();
    var emp_id = $('#emp_id').val();
    var medi_id = $('#medi_id').val();
    var date = $('#date').val();
    var price = $('#price').val();
    var quantity = $('#quantity').val();
    var bill_id = 0;
    var kt = true;
    if (list_ii == "") {
        bill_id = 1;
    }
    else {
        bill_id = Number(list_ii[list_ii.length - 1]['bill_id']) + 1;
    }
    if (brand_id == "" || emp_id == "" || medi_id == "" || date == "" || price == "" || quantity == "") {
        kt = false;
        $('.note').text("* Vui lòng điền đầy đủ thông tin !")
    }

    if (kt == true) {
        var detail = {
            "bill_id": bill_id,
            "brand_id": brand_id,
            "emp_id": emp_id,
            "medi_id": medi_id,
            "date": date,
            "price": price,
            "quantity": quantity
        };
        list_ii.push(detail);
        localStorage.setItem("import_invoice", JSON.stringify(list_ii));
        LoadInvoice();
        Refresh();
        alert("Bạn đã thêm thành công")
    }

}

function LoadInvoice() {
    var stt = 0;
    var strrr = `<tr style="font-size:13px">
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Mã hóa đơn nhập</th>
            <th>Thương hiệu</th>
            <th>Nhân viên nhập</th>
            <th>Ngày nhập</th>
            <th>Mã sản phẩm</th>
            <th>Giá nhập</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Tác vụ</th>
        </tr>`;
    var strr = ""
    for (x of list_ii) {
        stt = stt + 1;
        if (stt < 100) {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+ stt + `</td>
            <td> HDN00`+ x.bill_id + `</td>
            <td>`+ x.brand_id + `</td>
            <td>`+ x.emp_id + `</td>
            <td>`+ x.date + `</td>
            <td>`+ x.medi_id + `</td>
            <td>`+ x.price + `</td>
            <td>`+ x.quantity + `</td>
            <td>`+ x.price * x.quantity + `</td>
            <td><i onclick="EditII(`+ x.bill_id + `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveII(` + x.bill_id + `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        else {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+ stt + `</td>
            <td> HDN0`+ x.bill_id + `</td>
            <td>`+ x.brand_id + `</td>
            <td>`+ x.emp_id + `</td>
            <td>`+ x.date + `</td>
            <td>`+ x.medi_id + `</td>
            <td>`+ x.price + `</td>
            <td>`+ x.quantity + `</td>
            <td>`+ x.price * x.quantity + `</td>
            <td><i onclick="EditII(`+ x.mahd + `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveII(` + x.bill_id + `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }

    }
    var str = strrr + strr;
    $("#invoice_import").html(str);
}
LoadInvoice();

function EditII(maHD) {
    var index = list_ii.findIndex(x => x.bill_id == maHD);
    OpenImportInvoice();
    $('#bill_id').val(list_ii[index]['bill_id']);
    $('#brand_id').val(list_ii[index]['brand_id']);
    $('#emp_id').val(list_ii[index]['emp_id'])
    $('#medi_id').val(list_ii[index]['medi_id'])
    $('#date').val(list_ii[index]['date'])
    $('#price').val(list_ii[index]['price'])
    $('#quantity').val(list_ii[index]['quantity'])
    alert("check");
    $('#agree').prop('disabled', true);
}
function UpdateII() {
    var brand_id = $('#brand_id').val();
    var emp_id = $('#emp_id').val();
    var medi_id = $('#medi_id').val();
    var date = $('#date').val();
    var price = $('#price').val();
    var quantity = $('#quantity').val();
    var bill_id = 0;
    var kt = true;
    if (list_ii == "") {
        bill_id = 1;
    }
    else {
        bill_id = Number(list_ii[list_ii.length - 1]['mahdn']) + 1;
    }
    if (brand_id == "" || emp_id == "" || medi_id == "" || date == "" || price == "" || quantity == "") {
        kt = false;
        $('.note').text("* Vui lòng điền đầy đủ thông tin !")
    }
    if (kt == true) {
        for (x of list_ii) {
            if (x.bill_id == $('#bill_id').val()) {
                x.brand_id = brand_id;
                x.medi_id = medi_id;
                x.emp_id = emp_id;
                x.price = price;
                x.date = date;
                x.quantity = quantity;
                localStorage.setItem('import_invoice', JSON.stringify(list_ii));
                alert("Cập nhập thành công");
                LoadInvoice();

            }
        }
        $('.note').text("")
    }
}
function RemoveII(bill_id) {
    var index = list_ii.findIndex(x => x.bill_id == bill_id);
    if (index >= 0) {

        list_ii.splice(index, 1);
    }
    LoadInvoice();
    localStorage.setItem('import_invoice', JSON.stringify(list_ii));
    alert("Xóa thành công.");
}