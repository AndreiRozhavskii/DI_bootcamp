//Exercise 1
//Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum=(a,b)=>{return a+b}
console.log(sum(4,8));

//Exercise 2

//Create a function that receives a weight in kilograms and returns it in grams.
//1.First, use function declaration and invoke it.

function weight(){
    let y=Number(prompt('Put the weight in kg'));
    return x=y*1000;
};
console.log(weight());

//2. Then, use function expression and invoke it.

const weight1=function(kg){
    return kg*1000
};

console.log(weight1(5));
//3. function declaration we can call in any place of our code and expression we can call only after we initzialize it

//4.Finally, use a one line arrow function and invoke it.
const weight2=(kg)=>{return kg*1000};

console.log(weight2(5));

//Exercise 3

//Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
//The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
(function (numChildren, partnerName, geoLocation, jobTitle) {
       let p = document.createElement("p");
        p.textContent =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    ", and married to " +
    partnerName +
    " with " +
    numChildren +
    " kids.";
        document.body.appendChild(p);
    })(3, "Alice", "New York", "web developer");

//Exercise 4

(function (userName) {
    let div = document.createElement("div");
    div.className = "user-info";
    div.innerHTML = `<img src="profile.jpg" alt="Welcome,"><span> ${userName}</span>`;
    document.querySelector(".navbar").appendChild(div);
    })("John"); 

//Exercise 5

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


function makeJuice(size) {
    
    function addIngredients(ingredient1, ingredient2, ingredient3) {
    let p = document.createElement("p");
    p.textContent = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2} and ${ingredient3}.`;
    document.body.appendChild(p);
    }
    
    addIngredients("apple", "orange", "carrot");
    }
    makeJuice("large");

// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
    
// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
    
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.    
  
function makeJuice(size) {
    
    let ingredients = [];
   
    function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1, ingredient2, ingredient3);
    }
    function displayJuice() {
    let p = document.createElement("p");
    p.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
       document.body.appendChild(p);
    }
    
    addIngredients("apple", "orange", "carrot");
    addIngredients("banana", "strawberry", "kiwi");
    
    displayJuice();
    }
       
    makeJuice("large");