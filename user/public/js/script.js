function cart_direct() {
    window.location.href = "cart.html";
}
function login_direct() {
    window.location.href = "login.html";
}



var i = 1;
var n = 3;
var price = 40000;
function next() {
    if (i < n) i += 1;
    else i = 1;

    document.getElementById("slide").setAttribute("src", "img/slide" + i + ".jpg");
}
function back() {
    if (i > 1) i -= 1;
    else i = n;

    document.getElementById("slide").setAttribute("src", "img/slide" + i + ".jpg");
}
function autoplay() {
    setInterval(next, 3000);
}
function clickTest(){
    alert("Click test");
}


function inc(x) {
    a = parseInt(document.getElementById(x).value);

    document.getElementById(x).value = a + 1;

}
function dec(x) {
    a = parseInt(document.getElementById(x).value);
    if (a > 1) {
        a -= 1;

    }
    document.getElementById(x).value = a;
}




