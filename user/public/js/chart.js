var listsale = document.getElementsByClassName("sales");
var listsalew = document.getElementsByClassName("sales_week");

function Week_SaleChart() {
    var chart = new CanvasJS.Chart("chartContainerTuan",
        {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Thống kê theo tuần",
                fontWeight: "bolder",
                fontColor: "#008B8B",
                fontfamily: "tahoma",
                fontSize: 30,
                padding: 10
            },
            data: [
                {
                    type: "column",
                    dataPoints: [
                        { label: "Thứ 2", y: 63 },
                        { label: "Thứ 3", y: 92 },
                        { label: "Thứ 4", y: 76 },
                        { label: "Thứ 5", y: 79 },
                        { label: "Thứ 6", y: 64 },
                        { label: "Thứ 7", y: 82 },
                        { label: "Chủ nhật", y: 90 }
                    ]
                }
            ]
        });
    chart.render();
}
function Month_SaleChart() {
    // id chartContainerthang
    var chart = new CanvasJS.Chart("chartContainerthang",
        {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Thống kê theo tháng",
                fontWeight: "bolder",
                fontColor: "#008B8B",
                fontfamily: "tahoma",
                fontSize: 25,
                padding: 10
            },
            data: [
                {
                    type: "column",
                    dataPoints: [
                        { label: "1", y: 92 },
                        { label: "2", y: 41 },
                        { label: "3", y: 56 },
                        { label: "4", y: 79 },
                        { label: "5", y: 65 },
                        { label: "6", y: 104 },
                        { label: "7", y: 38 },
                        { label: "8", y: 75 },
                        { label: "9", y: 88 },
                        { label: "10", y: 110 },
                        { label: "11", y: 48 },
                        { label: "12", y: 67 },
                        { label: "13", y: 54 },
                        { label: "14", y: 72 },
                        { label: "15", y: 60 },
                        { label: "16", y: 82 },
                        { label: "17", y: 77 },
                        { label: "18", y: 99 },
                        { label: "19", y: 47 },
                        { label: "20", y: 102 },
                        { label: "21", y: 63 },
                        { label: "22", y: 115 },
                        { label: "23", y: 43 },
                        { label: "24", y: 81 },
                        { label: "25", y: 96 },
                        { label: "26", y: 59 },
                        { label: "27", y: 100 },
                        { label: "28", y: 33 },
                        { label: "29", y: 69 },
                        { label: "30", y: 76 }
                    ]
                }
            ]
        });
    chart.render();
}
function Year_SaleChart() {
    var chart = new CanvasJS.Chart("chartContainer",
        {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Thống kê theo năm",
                fontWeight: "bolder",
                fontColor: "#008B8B",
                fontfamily: "tahoma",
                fontSize: 25,
                padding: 10

            },
            data: [
                {
                    type: "column",
                    padding: 20,
                    dataPoints: [
                        { label: "Tháng 1", y: 5500 },
                        { label: "Tháng 2", y: 6733 },
                        { label: "Tháng 3", y: 5687 },
                        { label: "Tháng 4", y: 4312 },
                        { label: "Tháng 5", y: 3709 },
                        { label: "Tháng 6", y: 4200 },
                        { label: "Tháng 7", y: 6015 },
                        { label: "Tháng 8", y: 3703 },
                        { label: "Tháng 9", y: 3982 },
                        { label: "Tháng 10", y: 4934 },
                        { label: "Tháng 11", y: 7600 },
                        { label: "Tháng 12", y: 7130 },
                    ]
                }
            ]
        });
    chart.render();
}

function Thongke() {
    if ($('#txt_over').val() == "tuan") {
        for (x of listsale) {
            x.style.display = 'none';
        }
        for (y of listsalew) {
            y.style.display = 'none';
        }
        listsale[0].style.display = 'block'
        listsalew[0].style.display = 'grid'
        Week_SaleChart();
    }
    if ($('#txt_over').val() == "thang") {
        for (x of listsale) {
            x.style.display = 'none';
        }
        for (y of listsalew) {
            y.style.display = 'none';
        }
        listsale[1].style.display = 'block'
        listsalew[1].style.display = 'grid'
        Month_SaleChart();
    }
    if ($('#txt_over').val() == "nam") {
        for (x of listsale) {
            x.style.display = 'none';
        }
        for (y of listsalew) {
            y.style.display = 'none';
        }
        listsale[2].style.display = 'block'
        listsalew[2].style.display = 'grid'
        Year_SaleChart();
    }
}
Thongke();