function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
        if (currentNumber >= finalNumber) {
        clearInterval(interval)
        } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
            currentNumber = finalNumber
            clearInterval(interval)
        } else {
            currentNumber += inc
        }
        callback(currentNumber)
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var loadSPkm1 = document.querySelector('.AnhDiVao1');
    var loadSPkm2 = document.querySelector('.AnhDiVao2');
    var loadSPkm3 = document.querySelector('.AnhDiVao3');
    var loadSPkm4 = document.querySelector('.AnhDiVao4');
    let c = true;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500 && c) {
            //this.alert("scroll");
            console.log(this.window.pageYOffset);
            if (loadSPkm1) {
                loadSPkm1.classList.add('Left1');
            }
            if (loadSPkm2) {
                loadSPkm2.classList.add('Left2');
            }

            animateNumber(4000, 3000, 0, function(number) {
                const formattedNumber = number.toLocaleString()
                let customerCountElement = document.getElementById('customer-count');
                if (customerCountElement) {
                    customerCountElement.innerText = formattedNumber;
                }
            });
            animateNumber(8000000, 3000, 0, function(number) {
                const formattedNumber = number.toLocaleString()
                let transactionCountElement = document.getElementById('transaction-count');
                if (transactionCountElement) {
                    transactionCountElement.innerText = formattedNumber;
                }
            });
            c = false;
        }
        if (window.pageYOffset > 1200) {
            if (loadSPkm3) {
                loadSPkm3.classList.add('Right3');
            }
            if (loadSPkm4) {
                loadSPkm4.classList.add('Right4');
            }
        }
    }, false);
}, false);
