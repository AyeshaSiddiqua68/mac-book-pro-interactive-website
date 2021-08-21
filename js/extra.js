
//update memory cost funtion 
function updateMemoryCost(isBaseMemory) {
    let extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    let totalMemoryCost = document.getElementById('extra-memory-cost');


    if (isBaseMemory == '8gb') {
        totalMemoryCost.innerText = 0;


    }
    else if (isBaseMemory == '16gb') {
        totalMemoryCost.innerText = 180;


    }
    return totalMemoryCost;

}
//update storage cost funtion 
function updateStorageCost(isStorage) {
    let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    let totalStorageCost = document.getElementById('extra-storage-cost');

    if (isStorage == '256gb-storage') {
        totalStorageCost.innerText = 0;

    }
    else if (isStorage == '512gb-storage') {
        totalStorageCost.innerText = 100;
    }
    else if (isStorage == '1tb-storage') {
        totalStorageCost.innerText = 180;
    }
    return totalStorageCost;

}
//update delivery cost funtion 

function updateDeliveryCost(isDeliveryCharge) {
    let deliveryCost = document.getElementById('extra-delivery-cost').innerText;
    let totalDeliveryCost = document.getElementById('extra-delivery-cost');

    if (isDeliveryCharge == 'without-charge') {
        totalDeliveryCost.innerText = 0;

    }
    else if (isDeliveryCharge == 'with-charge') {
        totalDeliveryCost.innerText = 20;
    }

    return totalDeliveryCost;

}
//calculate total charge
function calculate(memory, storage, deliverycharge) {

    let memoryCost = updateMemoryCost(memory).innerText;
    const finalMemoryCost = parseInt(memoryCost);
    let storageCost = updateStorageCost(storage).innerText;
    const finalStorageCost = parseInt(storageCost);
    let deliveryCost = updateDeliveryCost(deliverycharge).innerText;
    const finaldeliveryCost = parseInt(deliveryCost);


    let currentBalance = document.getElementById('best-cost').innerText;
    let totalBalance = document.getElementById('total-cost');
    totalBalance.innerText = finalMemoryCost + finalStorageCost + finaldeliveryCost + parseInt(currentBalance);
    let displayCost = document.getElementById('display-cost');

    //bonus Part-1(Display Total Cost)
    displayCost.innerText = totalBalance.innerText;
}



//Update memory cost 
document.getElementById('16gb-memory').addEventListener('click', function () {

    updateMemoryCost('16gb');

    calculate('16gb');


});
document.getElementById('8gb-memory').addEventListener('click', function () {

    updateMemoryCost('8gb');
    calculate('8gb');


});

//update Storage Cost 
document.getElementById('256gb-ssd').addEventListener('click', function () {

    updateStorageCost('256gb-storage');
    calculate('256gb-storage');


});
document.getElementById('512gb-ssd').addEventListener('click', function () {

    updateStorageCost('512gb-storage');
    calculate('512gb-storage');


});
document.getElementById('1tb-ssd').addEventListener('click', function () {

    updateStorageCost('1tb-storage');
    calculate('1tb-storage');


});
//update delivery cost
document.getElementById('without-delivery-charge').addEventListener('click', function () {

    updateDeliveryCost('without-charge');
    calculate('without-charge');


});
document.getElementById('with-delivery-charge').addEventListener('click', function () {

    updateDeliveryCost('with-charge');
    calculate('with-charge')


});



