//Function for Get and Set Total and Final Price
function setOverallCost(fPrice,tPrice,totalCost){
    const getFinalPriceID = document.getElementById(fPrice);
    const getTotalPriceId = document.getElementById(tPrice);
    getTotalPriceId.innerText = totalCost;
    getFinalPriceID.innerText = totalCost;
}

//Function for Memory
function totalMemoryCost(memoryCost){
    const exStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraMemoryID = document.getElementById('extra-memory-cost');
    let totalPriceFinal = memoryCost + 1299 + exStorageCost + exDeliveryCost;
    setOverallCost('final-total','total-price',totalPriceFinal);
    getExtraMemoryID.innerText = memoryCost;
}
//Function for Storage
function totalStorageCost(storageCost){
    const exMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const exDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    const getExtraStorageID = document.getElementById('extra-storage-cost');
    let totalPriceFinal = storageCost + 1299 + exMemoryCost + exDeliveryCost;
    setOverallCost('final-total','total-price',totalPriceFinal)
    getExtraStorageID.innerText = storageCost;
}
//Function for Delivery
function totalDeliveryCost(deliveryCost){
    const exMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const exStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const getExtraDeliveryID = document.getElementById('delivery-charge');
    let totalPriceFinal = deliveryCost + 1299 + exMemoryCost + exStorageCost;
    setOverallCost('final-total','total-price',totalPriceFinal);
    getExtraDeliveryID.innerText = deliveryCost;
    
}

//Event Handler for 8GB Unified Memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    totalMemoryCost(0);
})

//Event Handler for 16GB Unified Memory
document.getElementById('memory-16gb').addEventListener('click',function(){
    totalMemoryCost(180);    
})

//Event Handler for 256GB SSD Storage
document.getElementById('256gb-storage').addEventListener('click',function(){
    totalStorageCost(0)   
})
//Event Handler for 512GB SSD Storage
document.getElementById('512gb-storage').addEventListener('click',function(){
    totalStorageCost(100)
    
})
//Event Handler for 1TB SSD Storage
document.getElementById('1tb-storage').addEventListener('click',function(){
    totalStorageCost(180)
    
})

//Event Handler for Free Delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    totalDeliveryCost(0)    
})
//Event Handler for Paid Delivery
document.getElementById('paid-delivery').addEventListener('click',function(){
    totalDeliveryCost(20)
})

//Promo code apply
document.getElementById('apply-promo').addEventListener('click',function(){
    const getFinalTotalID = document.getElementById('final-total');
    const getTotalPriceID = document.getElementById('total-price');
    const getTotalPrice = parseFloat(getTotalPriceID.innerText);
    const getFinalTotalPrice = parseFloat(getFinalTotalID.innerText);
    const getPromoInputID = document.getElementById('promo-input');
    const getPromoInput = getPromoInputID.value;
    if(getPromoInput=='stevekaku'){
        if(getTotalPrice != getFinalTotalPrice){
            alert('Promo has already been applied');
            getPromoInputID.value = '';
        }
        else{ 
            getFinalTotalID.innerText =getTotalPrice - getTotalPrice * 0.20;
            getPromoInputID.value = '';
        }
    }
    else if(getPromoInput==''){
        alert('Please enter a Promo code');
        getPromoInputID.value = '';
    }
    else{
        alert('Not a valid promo code');
        getPromoInputID.value = '';
    }
})