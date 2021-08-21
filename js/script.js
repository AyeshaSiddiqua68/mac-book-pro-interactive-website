//function to get updated memory cost
function getUpdateMemoryCost(isMemorySize) {
    const memoryPrice = document.getElementById('memory-price');
    if (isMemorySize == '8GB') {
        memoryPrice.innerText = '0';
    }
    else if (isMemorySize == '16GB') {
        memoryPrice.innerText = '180';
    }
    return memoryPrice;
}

//function to get updated storage cost
function getUpdateStorageCost(isStorageSize) {
    const storagePrice = document.getElementById('storage-price');
    if (isStorageSize == '256GB') {
        storagePrice.innerText = '0';
    }
    else if (isStorageSize == '512GB') {
        storagePrice.innerText = '100';
    }
    else if (isStorageSize == '1TB') {
        storagePrice.innerText = '180';
    }
    return storagePrice;

}
//function to get updated delivery cost
function getUpdateDeliveryCost(isDeliveryCharge) {
    const deliveryCharge = document.getElementById('delivery-charge');

    if (isDeliveryCharge == 'freePayment') {
        deliveryCharge.innerText = '0';
    }
    else if (isDeliveryCharge == 'withPayment') {
        deliveryCharge.innerText = '20';
    }
    return deliveryCharge;
}
//updated total cost calculation function
function updateTotalCost(memory, storage, shippingCost) {
    const memoryCost = parseInt(getUpdateMemoryCost(memory).innerText);
    const storageCost = parseInt(getUpdateStorageCost(storage).innerText);
    const deliveryCost = parseInt(getUpdateDeliveryCost(shippingCost).innerText);

    const bestPrice = document.getElementById('best-price');
    const bestCost = parseInt(bestPrice.innerText);

    const totalPrice = document.getElementById('total-price');
    const totalCost = bestCost + memoryCost + storageCost + deliveryCost;
    totalPrice.innerText = totalCost;

    //bonus Part-1(Display Total Cost)
    const displayTotalCost = document.getElementById('display-total-cost');
    displayTotalCost.innerText = totalCost;


    //bonus Part-2(Applying Promo Code for 20% discount)
    promoCode = document.getElementById('promo-input-field').value;
    if (promoCode == 'stevekaku') {
        const discountAmount = parseFloat(totalPrice.innerText) * .20;
        const afterDiscountTotalCost = totalPrice.innerText - parseFloat(discountAmount);
        displayTotalCost.innerText = afterDiscountTotalCost;
    }

}
// addition of event handeler on memory size button
document.getElementById('memory-size').addEventListener('click', function () {
    getUpdateMemoryCost('8GB');
    updateTotalCost('8GB');
});
document.getElementById('large-memory-size').addEventListener('click', function () {
    getUpdateMemoryCost('16GB');
    updateTotalCost('16GB');
});

// addition of event handeler on storage size button
document.getElementById('storage-size').addEventListener('click', function () {
    getUpdateStorageCost('256GB');
    updateTotalCost('256GB');
});
document.getElementById('medium-storage-size').addEventListener('click', function () {
    getUpdateStorageCost('512GB');
    updateTotalCost('512GB');
});
document.getElementById('large-storage-size').addEventListener('click', function () {
    getUpdateStorageCost('1TB');
    updateTotalCost('1TB');
});

// addition of event handeler on shipping charge button
document.getElementById('free-shipping').addEventListener('click', function () {
    getUpdateDeliveryCost('freePayment');
    updateTotalCost('freePayment');
});
document.getElementById('charged-shipping').addEventListener('click', function () {
    getUpdateDeliveryCost('withPayment');
    updateTotalCost('withPayment');

});

//addition of event handeler on promo code button
document.getElementById('promo-code-button').addEventListener('click', function () {

    updateTotalCost('stevekaku');
    document.getElementById('promo-input-field').value = '';
});





