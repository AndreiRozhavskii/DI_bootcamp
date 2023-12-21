//Exerxise 1 ex.1
function infoAboutMe(){
    console.log('My name is Andrei, I am 35 yo, I like football');
}
infoAboutMe();

//Exerxise 1 ex.2
function infoAboutPerson(personName,personAge,personFavoriteColor){
    console.log(`You name is ${personName}, you are ${personAge}, your favorite color is ${personFavoriteColor}`);

}
infoAboutPerson("David", 45, "blue");


//Exerxise 2

// function calculateTip(){
//    let bill=prompt("Put amount of the bill");
   
//    if (bill<50){
//     tips=bill*0.2;
//    }
//    if(bill>=50 && bill<200){
//     tips=bill*0.15;
//    }
//    if(bill>200) {
//     tips=bill*0.1;
//    }
   
//    console.log(tips);
//    console.log(tips + parseInt(bill));

// }
// calculateTip()

//Exercise 3
// let arr=[]
// let sum=0
// function isDivisible(divisor){

//     for (i=0; i<=500; i++){

//     if (i % divisor === 0){
//         arr.push(i)
//     }
// if(i % divisor === 0){
//     sum=i+sum;
// }
    
    
// }

// }
// isDivisible(23)
// console.log(arr.join(' '));
// console.log(sum);

//Exercise 4

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList=["banana", "orange","apple"];

function myBill(){
    for (const i of shoppingList){
        const amount=stock[i];
        if(amount>0){
            const price=prices[i]
            console.log(`${i} costs ${price}`);
            console.log(`we have ${stock[i]} in stock`);
            stock[i]=stock[i] -1
            console.log(`the new amount of it in stock is ${stock[i]}`);
        }
        else{
            console.log(`No ${i} in stock`);
        }
    }
}
   
myBill()

//Exercise 5
let values=[.25, .1, .05, .01];
    
function changeEnough(itemPrice, amountOfChange){
    let x=itemPrice;
    for(let i=0; i<amountOfChange.length; i++){
    
    }
}
//Exercise 6
