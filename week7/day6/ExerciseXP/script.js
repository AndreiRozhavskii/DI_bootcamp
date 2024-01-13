//Exercise 1

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// The value of a will be 3

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// we will get an error when we try to redefine the const inside the scope

// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // result will be 0, because we declaired a outside the function
funcTwo() //  we redefined a in the scopre of function
funcThree() // result will be 5, because we redefined a in a previous funcTwo function

// #2.2 What will happen if the variable is declared 
// with const instead of let ? 

// we will get an error because of redefing a inside the scope funcTwo


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // we define a=hello
funcFive() // we will get a=hello because we defined it in the funcFour

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() // we will get a=test

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// nothing changes. we declare variable inside the  func scope

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// we will get inside 5 and outside 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//nothing changes

//Exercise 2
// function winBattle(){
//     return true;
// }

const winBattle = ()=> true

const experiencePoints = winBattle()?10:1
console.log(experiencePoints);

//Exercise 3

const isString = (input) => (typeof(input) === "string"?true:false);

//Exercise 4

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


colors.forEach((color,index) => console.log(`#${index+1} choice is ${color}`))


const isVioletInArray = colors.some((color)=>color === "Violet")


//Exercise 5

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color,index)=>{
    const incIndex=index+1;
    console.log(`${incIndex}${order(incIndex)} choice is ${color}`);
});

function order(index){
    return ([1,2,3].includes(index)) ? ordinal[index]:ordinal[0];
     
}


//Exercise 6

let bankAmount=0;
const vateRate=0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];

const currentBankAccount=addVat(details);

function addVat(expenses){
    return expenses.reduce((total,current)=>(total+=Number(current)*(1.17)),0);
}

console.log(currentBankAccount);
   