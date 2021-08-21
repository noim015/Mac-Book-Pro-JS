//Event Handler for 8GB Unified Memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    
    const exStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraMemoryID = document.getElementById('extra-memory-cost');
    const getExtraMemoryCost = parseFloat(getExtraMemoryID.innerText);
    const getFinalPriceID = document.getElementById('final-total');
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    let totalPriceFinal = 0 + 1299+exStorageCost+exDeliveryCost;
    totalPriceId.innerText = totalPriceFinal;
    getFinalPriceID.innerText = totalPriceFinal;
    getExtraMemoryID.innerText = 0;
})

//Event Handler for 16GB Unified Memory
document.getElementById('memory-16gb').addEventListener('click',function(){
    
    const exStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraMemoryID = document.getElementById('extra-memory-cost');
    const getExtraMemoryCost = parseFloat(getExtraMemoryID.innerText);
    const getFinalPriceID = document.getElementById('final-total');
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    let totalPriceFinal = 1299 + 180+exStorageCost+exDeliveryCost;
    totalPriceId.innerText = totalPriceFinal;
    getFinalPriceID.innerText = totalPriceFinal;
    getExtraMemoryID.innerText = 180;
    
})

//Event Handler for 256GB SSD Storage
document.getElementById('256gb-storage').addEventListener('click',function(){
    const exMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraStorageID = document.getElementById('extra-storage-cost');
    const getExtraStorageCost = parseFloat(getExtraStorageID.innerText);
    const getFinalPriceID = document.getElementById('final-total');
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    let totalPriceFinal = 0 + 1299 + exMemoryCost + exDeliveryCost;
    totalPriceId.innerText = totalPriceFinal;
    getFinalPriceID.innerText = totalPriceFinal;
    getExtraStorageID.innerText = 0;
    
})
//Event Handler for 512GB SSD Storage
document.getElementById('512gb-storage').addEventListener('click',function(){
    const exMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraStorageID = document.getElementById('extra-storage-cost');
    const getExtraStorageCost = parseFloat(getExtraStorageID.innerText);
    const getFinalPriceID = document.getElementById('final-total');
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    let totalPriceFinal = 1299 + 100 + exMemoryCost + exDeliveryCost;
    totalPriceId.innerText = totalPriceFinal;
    getFinalPriceID.innerText = totalPriceFinal;
    getExtraStorageID.innerText = 100;
    
})
//Event Handler for 1TB SSD Storage
document.getElementById('1tb-storage').addEventListener('click',function(){
    const exMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraStorageID = document.getElementById('extra-storage-cost');
    const getExtraStorageCost = parseFloat(getExtraStorageID.innerText);
    const getFinalPriceID = document.getElementById('final-total');
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    let totalPriceFinal = 1299 + 180 + exMemoryCost + exDeliveryCost;
    totalPriceId.innerText = totalPriceFinal;
    getFinalPriceID.innerText = totalPriceFinal;
    getExtraStorageID.innerText = 180;
    
})

//Event Handler for Free Delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    const exMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const exStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const getExtraDeliveryID = document.getElementById('delivery-charge');
    const getExtraDeliveryCost = parseFloat(getExtraDeliveryID.innerText);
    const getFinalPriceID = document.getElementById('final-total');
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    let totalPriceFinal = 0 + 1299 + exMemoryCost + exStorageCost;
    totalPriceId.innerText = totalPriceFinal;
    getFinalPriceID.innerText = totalPriceFinal;
    getExtraDeliveryID.innerText = 0;
    
})
//Event Handler for Paid Delivery
document.getElementById('paid-delivery').addEventListener('click',function(){
    const exMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const exStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const getExtraDeliveryID = document.getElementById('delivery-charge');
    const getExtraDeliveryCost = parseFloat(getExtraDeliveryID.innerText);
    const getFinalPriceID = document.getElementById('final-total');
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    let totalPriceFinal = 20 + 1299 + exMemoryCost + exStorageCost;
    totalPriceId.innerText = totalPriceFinal;
    getFinalPriceID.innerText = totalPriceFinal;
    getExtraDeliveryID.innerText = 20;
   
    
})