const subtotalPrice = document.querySelector('.subtotal-price-SPP');
const subtotalPriceFull = document.querySelector('.subtotal-price-full-SPP');
const shippingPrice = document.querySelector('.shipping-price-SPP');
const shippingPriceFull = document.querySelector('.shipping-price-full-SPP');
const totalPrice = document.querySelector('.total-price-SPP');
const totalPriceFull = document.querySelector('.total-price-full-SPP');
const totalSummaryPrice = document.querySelector('.total-summary-price-SPP');
const showOrderSummaryText = document.querySelector('.show-order-summary-text');
const orderSummaryContent = document.querySelector('.order-summary-content');
let orderSummaryOpen = false ;


showOrderSummaryText.addEventListener('click',openOrderSummary);


// show purshased items menu function
function openOrderSummary(e) {

    if (!orderSummaryOpen) {
        orderSummaryOpen = true ;
        orderSummaryContent.style.display = 'grid';
    }
    else {
        orderSummaryOpen = false ;
        orderSummaryContent.style.display = 'none';
    }
    
}

// CHANING TOTAL PRICE 
function shippingTotalPrice() {
 subT = parseFloat(subtotalPrice.childNodes[1].textContent);
 subTFull = parseFloat(subtotalPriceFull.childNodes[1].textContent);
 shippingP = parseFloat(shippingPrice.childNodes[1].textContent);
 shippingPFull = parseFloat(shippingPriceFull.childNodes[1].textContent);
 totalPrice.childNodes[1].textContent = (parseFloat(subtotalPrice.childNodes[1].textContent) + parseFloat(shippingPrice.childNodes[1].textContent) ).toFixed(2);
 totalPriceFull.childNodes[1].textContent = (parseFloat(subtotalPriceFull.childNodes[1].textContent) + parseFloat(shippingPriceFull.childNodes[1].textContent) ).toFixed(2);
 totalSummaryPrice.childNodes[1].textContent = totalPrice.childNodes[1].textContent ;
}

console.log(totalPrice.childNodes[1].textContent)
shippingTotalPrice();


document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('Governorates');
    if (localStorage['Governorates']) { // if job is set
        input.value = localStorage['Governorates']; // set the value
    }
    input.onchange = function () {
         localStorage['Governorates'] = this.value; // change localStorage on change
     }
 });