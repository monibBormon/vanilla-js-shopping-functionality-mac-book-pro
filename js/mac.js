//  get basic Costs 
function basicCost(costNames, isCost) {
    let basicCost = document.getElementById(costNames + '-cost');

    if (isCost === 'ram1') {
        basicCost.innerText = 0;
    } else if (isCost === 'ram2') {
        basicCost.innerText = 180;
    } else if (isCost === 'store1') {
        basicCost.innerText = 0;
    } else if (isCost === 'store2') {
        basicCost.innerText = 100;
    } else if (isCost === 'store3') {
        basicCost.innerText = 180;
    } else if (isCost === 'delivery1') {
        basicCost.innerText = 0;
    } else if (isCost === 'delivery2') {
        basicCost.innerText = 20;
    }
    calcTotal();
}

// calculate total with coupon code 
function calcTotal() {
    let single = parseFloat(document.getElementById('single-cost').innerText)
    let memory = parseFloat(document.getElementById('memory-cost').innerText);
    let storage = parseFloat(document.getElementById('storage-cost').innerText);
    let delivery = parseFloat(document.getElementById('delivery-cost').innerText);

    let couponInput = document.getElementById('coupon-input');
    let couponValue = couponInput.value;
    let discount = 20 / 100;
    let totalC = single + memory + storage + delivery;
    let totalValue = totalC - (totalC * discount)
    console.log(totalValue);
    if (couponValue === 'stevekaku') {
        document.getElementById('total').innerText = totalValue;
        document.getElementById('last-total').innerText = totalValue;
    } else {
        document.getElementById('total').innerText = totalC;
        document.getElementById('last-total').innerText = totalC;
    }
    couponInput.value = ''; // for clear input field
}









/*
function storageCosts(isStorage) {
    let storageCost = document.getElementById('storage-cost');
    let storageCostText = storageCost.innerText;
    let storageCostNumber = parseFloat(storageCostText)

    if (isStorage === 'store1') {
        storageCost.innerText = 0;
    } else if (isStorage === 'store2') {
        storageCost.innerText = 100;
    } else {
        storageCost.innerText = 180;
    }
}
function deliveryCharge(isDelivery) {
    let deliveryCost = document.getElementById('delivery-cost');
    let deliveryCostText = deliveryCost.innerText;
    let deliveryCostNumber = parseFloat(deliveryCostText)

    if (isDelivery === 'delivery1') {
        deliveryCost.innerText = 0;
    } else {
        deliveryCost.innerText = 20;
    }
} */