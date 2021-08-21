//Event Handler for 8GB Unified Memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    
    const exStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraMemoryID = document.getElementById('extra-memory-cost');
    const getExtraMemoryCost = parseFloat(getExtraMemoryID.innerText);
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    totalPriceId.innerText = 0 + 1299+exStorageCost+exDeliveryCost;
    getExtraMemoryID.innerText = 0;
})

//Event Handler for 16GB Unified Memory
document.getElementById('memory-16gb').addEventListener('click',function(){
    
    const exStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraMemoryID = document.getElementById('extra-memory-cost');
    const getExtraMemoryCost = parseFloat(getExtraMemoryID.innerText);
    const totalPriceId = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceId.innerText);
    totalPriceId.innerText = 1299 + 180+exStorageCost+exDeliveryCost;
    getExtraMemoryID.innerText = 180;
    
})