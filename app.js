var unitPrice = 0;
// var itemArr = [{productName: 'Sugar', proPrice: 700},
// {productName: 'Oil', proPrice: 300},
// {productName: 'Indomie', proPrice: 200},];


// for(var i=0; i<itemArr.length; i++){
//     var element = document.createElement('option');
//     element.value = itemArr[i].productName;
//     element.textContent = itemArr[i].productName;
//     document.querySelector('select').appendChild(element);

// }
function checkUnitPrice(product){
        switch(product){
            case 'White sugar': unitPrice = 700;
            break; 
            case 'Rice': unitPrice = 800;
            break; 
            case 'Frytol': unitPrice = 150;
            break; 
            case 'Tin tomatoes': unitPrice = 70;
            break; 
            case 'Spaghetti': unitPrice = 50;
            break; 
            default: unitPrice = 0;
        }      
    return unitPrice;
}

document.querySelector('.product').addEventListener('change', (e)=>{
    var product;
    product = e.target.value;
    
    unitPrice = checkUnitPrice(product);
    document.querySelector('.unit-price').value = unitPrice;

    document.querySelector('.total').value = calculateTotal(unitPrice);

});

document.querySelector('.quantity').addEventListener('input', (ev)=>{
    // if(ev.keyCode === 13 || ev.which === 13){
    document.querySelector('.total').value = calculateTotal(unitPrice);
    // }
});

document.querySelector('.unit-price').value = unitPrice;
document.querySelector('.total').value = 0;

function calculateTotal(unitPrice){
    var total, quantity;
    quantity = document.querySelector('.quantity').value;
    if(quantity ==="" || isNaN(quantity)){
        quantity = 0;
    }
    else{
        quantity = parseFloat(quantity);
    }
    return total = unitPrice * quantity;
}

document.querySelector('.add-item').addEventListener('click',() =>{
    var html;
    html = `<div id="item-0"><p>${document.querySelector('.product').value}</p><p>${unitPrice}</p><p>${document.querySelector('.quantity').value}</p><p>${calculateTotal(unitPrice)}</p></div>`
    var itemList = document.querySelector('.item-list').insertAdjacentHTML('beforeend', html);
    // window.print();
})