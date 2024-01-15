let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries=()=>{return  groceries.fruits}
console.log(displayGroceries());

//2. Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)



// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
//no, because it's case "pass by valuse" so the value of each variable will be different

// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
//yes, because it's case "pass by reference" so if we are changing something in new object it's referenced with previous one

// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
//no because it's object inside the object so here works case "pass by value"
