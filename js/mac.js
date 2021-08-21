//  get updated Costs 
function updateCost(costNames, isCost) {
    let updateCost = document.getElementById(costNames + '-cost');

    if (isCost === 'ram1') {
        updateCost.innerText = 0;
    } else if (isCost === 'ram2') {
        updateCost.innerText = 180;
    } else if (isCost === 'store1') {
        updateCost.innerText = 0;
    } else if (isCost === 'store2') {
        updateCost.innerText = 100;
    } else if (isCost === 'store3') {
        updateCost.innerText = 180;
    } else if (isCost === 'delivery1') {
        updateCost.innerText = 0;
    } else if (isCost === 'delivery2') {
        updateCost.innerText = 20;
    }
    calcTotal();
}

// calculate total with coupon code 
function calcTotal() {
    let single = parseFloat(document.getElementById('single-cost').innerText)
    let memory = parseFloat(document.getElementById('memory-cost').innerText);
    let storage = parseFloat(document.getElementById('storage-cost').innerText);
    let delivery = parseFloat(document.getElementById('delivery-cost').innerText);
    // calculation
    let couponInput = document.getElementById('coupon-input');
    let couponValue = couponInput.value;
    let discount = 20 / 100;
    let totalC = single + memory + storage + delivery;
    let totalValue = totalC - (totalC * discount)
    console.log(totalValue);
    // here is the coupon code
    if (couponValue === 'stevekaku') {
        document.getElementById('last-total').innerText = totalValue;
    } else {
        document.getElementById('total').innerText = totalC;
        document.getElementById('last-total').innerText = totalC;
    }
    couponInput.value = ''; // for clear input field
}