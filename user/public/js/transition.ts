
function animateNumber(finalNumber: number, duration: number = 5000, startNumber: number = 0, callback: (number: number) => void) {
    let currentNumber: number = startNumber;
    const interval: number = window.setInterval(updateNumber, 17);
    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval);
        } else {
            let inc: number = Math.ceil(finalNumber / (duration / 17));
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber;
                clearInterval(interval);
            } else {
                currentNumber += inc;
            }
            callback(currentNumber);
        }
    }
}

export const handleScrollAndContentLoad = () => {
    document.addEventListener('DOMContentLoaded', () => {
        let c: boolean = true;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500 && c) {
                const loadSPkm1 = document.querySelector('.AnhDiVao1') as HTMLElement;
                const loadSPkm2 = document.querySelector('.AnhDiVao2') as HTMLElement;

                if (loadSPkm1 && loadSPkm2) {
                    loadSPkm1.classList.add('Left1');
                    loadSPkm2.classList.add('Left2');

                    animateNumber(4000, 3000, 0, (number: number) => {
                        const formattedNumber: string = number.toLocaleString();
                        const customerCountElement = document.getElementById('customer-count');
                        if (customerCountElement) {
                            customerCountElement.innerText = formattedNumber;
                        }
                    });

                    animateNumber(8000000, 3000, 0, (number: number) => {
                        const formattedNumber: string = number.toLocaleString();
                        const transactionCountElement = document.getElementById('transaction-count');
                        if (transactionCountElement) {
                            transactionCountElement.innerText = formattedNumber;
                        }
                    });

                    c = false;
                }
            }
        }, false);
    }, false);
};