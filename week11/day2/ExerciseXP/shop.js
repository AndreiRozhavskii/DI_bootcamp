const arr=require('./product.js')


function findProduct(productName) {
    
    for (let item of arr) {
    
    if (item.name === productName) {
  
    return item;
    }
}
return null;
}

console.log(findProduct("iPad"));