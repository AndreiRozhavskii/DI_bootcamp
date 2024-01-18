
function sumDigits(n) {
   
    let digits = n.toString().split("");
    
    while (digits.length > 1) {
    
    let sum = digits.reduce((a, b) => +a + +b, 0);
    
    digits = sum.toString().split("");
    }
   
    return +digits[0];
    }
    console.log(sumDigits(123456))